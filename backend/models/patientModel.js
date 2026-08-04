import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  name: String,
  relation: String,
  age: Number,
  gender: String,
  dob: String,
  phone: String,
  address: {
    line1: String,
    line2: String,
  },
  bloodGroup: String,
});

export default mongoose.model("patient", patientSchema);