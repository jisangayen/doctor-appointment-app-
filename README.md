# 🏥 Doctor Appointment System

A full-stack Doctor Appointment Web Application where users can book appointments with doctors, doctors can manage their schedules, and admins can control the entire system.

---

## 📌 Features Overview

### 👤 User (Patient)

* Register & Login (JWT Authentication)
* Browse Doctors
* Filter Doctors by Specialization
* View Doctor Profile (experience, fees, availability)
* Book Appointment
* View My Appointments
* Cancel Appointment
* Online Payment (optional - Stripe/Razorpay)

---

### 👨‍⚕️ Doctor Dashboard

* Secure Login
* View Appointments (Day-wise / Date-wise)
* Accept / Reject Appointment Requests
* Mark Appointment as Completed
* Update Profile (fees, availability, specialization)
* View Earnings (if payment integrated)

---

### 🛠️ Admin Panel (Head)

* Admin Login
* Add New Doctor
* Remove Doctor
* View All Doctors
* Manage Appointments
* View Dashboard Stats:

  * Total Doctors
  * Total Patients
  * Total Appointments
* Block/Unblock Doctors or Users (optional)

---

## 🏗️ Tech Stack

### Frontend:

* React.js
* Tailwind CSS
* Axios

### Backend:

* Node.js
* Express.js

### Database:

* MongoDB (Mongoose)

### Authentication:

* JSON Web Token (JWT)
* Bcrypt (Password Hashing)

---

## 📂 Project Structure

```
/client
  /src
    /components
    /pages
    /context

/server
  /controllers
  /models
  /routes
  /middlewares
  /config
```

---

## 🔐 Authentication Flow

1. User registers → Password hashed using bcrypt
2. Login → JWT token generated
3. Token stored in frontend (localStorage)
4. Protected routes verify token using middleware

---

## 🔄 Workflow

### 🧑‍💻 User Booking Flow

1. User registers/logs in
2. Browses doctors
3. Selects doctor & available slot
4. Books appointment
5. Appointment status = **Pending**
6. Doctor reviews request
7. Doctor → Accept / Reject

---

### 👨‍⚕️ Doctor Flow

1. Doctor logs in
2. Views appointments (filtered by date)
3. Accepts/Rejects appointment
4. Updates status → Completed after consultation

---

### 🛠️ Admin Flow

1. Admin logs in
2. Adds/removes doctors
3. Monitors all appointments
4. Tracks system statistics

---

## 📊 Database Models

### User Model

* name
* email
* password
* role (user)

### Doctor Model

* name
* email
* password
* specialization
* experience
* fees
* availability (time slots)

### Appointment Model

* userId
* doctorId
* date
* time
* status (Pending / Accepted / Rejected / Completed)
* paymentStatus

---

## 🚀 APIs (Sample)

### User APIs

* POST `/api/user/register`
* POST `/api/user/login`
* GET `/api/user/doctors`
* POST `/api/user/book-appointment`
* GET `/api/user/appointments`

---

### Doctor APIs

* POST `/api/doctor/login`
* GET `/api/doctor/appointments`
* POST `/api/doctor/update-status`
* PUT `/api/doctor/profile`

---

### Admin APIs

* POST `/api/admin/login`
* POST `/api/admin/add-doctor`
* DELETE `/api/admin/remove-doctor`
* GET `/api/admin/dashboard`

---

## ⚠️ Missing but Important Logic (Must Add)

### 1. 🕒 Time Slot Management

**Why important:**

* Prevent double booking
* Ensure doctor availability

👉 Store slots in DB and block booked slots.

---

### 2. 💳 Payment Integration

**Why important:**

* Avoid fake bookings
* Secure revenue system

👉 Use Razorpay / Stripe

---

### 3. 🔔 Notifications (Email/SMS)

**Why important:**

* Inform users about appointment status
* Reduce missed appointments

---

### 4. 📅 Appointment Reminder System

**Why important:**

* Improves user experience
* Reduces no-shows

---

### 5. 🚫 Role-Based Access Control

**Why important:**

* Secure admin & doctor routes
* Prevent unauthorized access

---

### 6. 🧾 Appointment History & Reports

**Why important:**

* Useful for analytics
* Improves admin control

---

### 7. 🌐 Pagination & Filtering

**Why important:**

* Better performance
* Scalable for large data

---

### 8. 📸 Image Upload (Doctor Profile)

**Why important:**

* Improves UI trust
* Professional appearance

---

### 9. 🛑 Account Verification (Email OTP)

**Why important:**

* Prevent fake users
* Improve security

---

### 10. 🧠 Smart Scheduling (Advanced)

**Why important:**

* Auto suggest best available slots
* Improves booking experience

---

## 🧪 Future Enhancements

* Video Consultation (WebRTC)
* AI-based Doctor Recommendation
* Prescription Upload & Download
* Multi-language Support

---

## 📌 Conclusion

This system provides a complete healthcare appointment workflow connecting **patients, doctors, and admins** in a scalable and secure architecture.

---

## 👨‍💻 Author

Jisan – MERN Stack Developer
