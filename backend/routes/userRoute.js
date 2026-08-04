import express from 'express';
import { registerUser, loginUser, bookAppointment, getProfile, listAppointment, cancelAppointment} from '../controllers/userController.js';
import authUser from '../middlewares/authUser.js';

const userRouter = express();

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.get('/get-profile', authUser, getProfile);
userRouter.post('/book-appointment',authUser, bookAppointment)
userRouter.get('/appointments',authUser, listAppointment)
userRouter.post('/cancel-appointment',authUser,cancelAppointment)


export default userRouter;