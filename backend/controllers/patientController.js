import patientModel from "../models/patientModel.js";

// Add Patient
const addPatient = async (req, res) => {
  try {
    const {
      userId,
      name,
      relation,
      age,
      gender,
      dob,
      phone,
      bloodGroup,
      address,
    } = req.body;

    if (!name || !relation || !age || !gender || !phone) {
      return res.json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    const patient = new patientModel({
      userId,
      name,
      relation,
      age,
      gender,
      dob,
      phone,
      bloodGroup,
      address,
    });

    await patient.save();

    res.json({
      success: true,
      message: "Patient added successfully.",
      patient,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Patients of Logged-in User
const getPatients = async (req, res) => {
  try {
    const { userId } = req.body;

    const patients = await patientModel.find({ userId });

    res.json({
      success: true,
      patients,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// Get Single Patient
const getPatientById = async (req, res) => {
  try {
    const { id } = req.params;

    const patient = await patientModel.findById(id);

    if (!patient) {
      return res.json({
        success: false,
        message: "Patient not found.",
      });
    }

    res.json({
      success: true,
      patient,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// Update Patient
const updatePatient = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedPatient = await patientModel.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    if (!updatedPatient) {
      return res.json({
        success: false,
        message: "Patient not found.",
      });
    }

    res.json({
      success: true,
      message: "Patient updated successfully.",
      patient: updatedPatient,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Patient
const deletePatient = async (req, res) => {
  try {
    const { id } = req.params;

    const patient = await patientModel.findByIdAndDelete(id);

    if (!patient) {
      return res.json({
        success: false,
        message: "Patient not found.",
      });
    }

    res.json({
      success: true,
      message: "Patient deleted successfully.",
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export {
  addPatient,
  getPatients,
  getPatientById,
  updatePatient,
  deletePatient,
};