import express from "express";
import authUser from '../middlewares/authUser.js';
import {
  addPatient,
  getPatients,
  getPatientById,
  updatePatient,
  deletePatient,
} from "../controllers/patientController.js";

const patientRouter = express.Router();

patientRouter.post("/add", authUser, addPatient);
patientRouter.get("/list", authUser, getPatients);
patientRouter.get("/:id", authUser, getPatientById);
patientRouter.put("/update/:id", authUser, updatePatient);
patientRouter.delete("/delete/:id", authUser, deletePatient);

export default patientRouter;