import validator from "validator";
import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import doctorModel from "../models/doctorModel.js";
import appointmentModel from "../models/appointmentModel.js";
import patientModel from "../models/patientModel.js";


//api to register uer

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.json({ success: false, message: "Missing Details" });
    }

    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Invalid Email" });
    }

    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Password should be at least 8 characters long",
      });
    }

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const userData = {
      name,
      email,
      password: hashedPassword,
    };

    const newUser = new userModel(userData);
    const user = await newUser.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Oops! This email is already in use" });
  }
};

//API for login

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "user not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "Incorrect password" });
    }
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
};

//API to book appointment

const bookAppointment = async (req, res) => {
  try {
    const { userId, patientId, docId, slotDate, slotTime } = req.body;
    const docData = await doctorModel.findById(docId).select("-password");

    if (!docData) {
      return res.json({
        success: false,
        message: "Doctor not found",
      });
    }
    if (!docData.available) {
      return res.json({
        success: false,
        message: "Doctor is not available at this time.",
      });
    }

    // Check patient
    const patientData = await patientModel.findById(patientId);

    if (!patientData) {
      return res.json({
        success: false,
        message: "Patient not found",
      });
    }

    let slots_booked = docData.slots_booked || {};

    // Check slot availability
    if (slots_booked[slotDate]) {
      if (slots_booked[slotDate].includes(slotTime)) {
        return res.json({
          success: false,
          message: "Slot is already booked.",
        });
      } else {
        slots_booked[slotDate].push(slotTime);
      }
    } else {
      slots_booked[slotDate] = [slotTime];
    }

    // Remove slots before saving snapshot
    const doctorSnapshot = docData.toObject();
    delete doctorSnapshot.slots_booked;

    const appointmentData = {
      userId,
      patientId,
      docId,
      patientData,
      docData: doctorSnapshot,
      amount: docData.fees,
      slotDate,
      slotTime,
      date: Date.now(),
    };

    const newAppointment = new appointmentModel(appointmentData);

    await newAppointment.save();

    // Update doctor's booked slots
    await doctorModel.findByIdAndUpdate(docId, {
      slots_booked,
    });

    res.json({
      success: true,
      message: "Appointment Booked Successfully.",
    });
  } catch (error) {
    console.log(error);

    res.json({
      success: false,
      message: error.message,
    });
  }
};
//details for user data 
const getProfile = async (req, res) => {
  try {
    const user = await userModel
      .findById(req.body.userId)
      .select("-password");

    res.json({
      success: true,
      userData: user,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};


//APi to get appointment for frontend m-appointments page
const listAppointment = async (req, res) => {
  try {
    
    const { userId } = req.body;
    const appointments = await appointmentModel.find({userId})

    res.json({ success: true, appointments });


  } catch (error) {
    

    console.log(error);
    return res.json({ success: false, message: error.message });
  }
}


//API to cancel appointment

const cancelAppointment = async (req, res) => {
  try {
    const {userId, appointmentId } = req.body;
    const appointmentData = await appointmentModel.findById(appointmentId)

    //verify appointment user
    if (appointmentData.userId !== userId) {
      return res.json({ success: false, message: "Unauthorized action"})
    }

    await appointmentModel.findByIdAndUpdate(appointmentId, {cancelled: true})


    //realising doctor slot

    const {docId, slotDate, slotTime} = appointmentData

    const doctorData = await doctorModel.findById(docId)

    let slots_booked = doctorData.slots_booked

    slots_booked[slotDate] = slots_booked[slotDate].filter(e => e !== slotTime)

    await doctorModel.findByIdAndUpdate(docId, {slots_booked})

    res.json({ success: true, message: "Appointment Cancelled Successfully." });

    
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}




//API to make payment of appointment using Razorpay


export { registerUser, loginUser,bookAppointment, getProfile, listAppointment, cancelAppointment };
