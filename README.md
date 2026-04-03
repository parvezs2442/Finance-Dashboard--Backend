# 💰 Finance Dashboard Backend

A scalable backend system for managing financial records with role-based access control (RBAC) and analytics APIs. Built using Node.js, Express, and MongoDB.

---

## 🚀 Features

* 🔐 JWT Authentication
* 👤 Role-Based Access Control (RBAC)
* 💰 Financial Records Management (CRUD)
* 📊 Dashboard Analytics (income, expenses, trends)
* 🔍 Filtering & Pagination
* ✅ Input Validation using Joi
* ⚠️ Global Error Handling

---

## 👥 User Roles

* **Viewer** → Can only view records
* **Analyst** → Can view records and analytics
* **Admin** → Full access (manage users and records)

---

## 📦 Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose)
* **Authentication:** JSON Web Tokens (JWT)
* **Validation:** Joi

---

## ⚙️ Setup Instructions

```bash
git clone https://github.com/parvezs2442/Finance-Dashboard--Backend.git
cd FinanceBackend Dashboard
npm install
npm run dev
```

---

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```
MONGO_URI=mongodb://127.0.0.1:27017/financeDB
JWT_SECRET=supersecret
```

---

## 📡 API Endpoints

### 🔑 Auth

* `POST /api/auth/register`
* `POST /api/auth/login`

---

### 💰 Records

* `GET /api/records` → Get all records
* `POST /api/records` → Create record
* `PUT /api/records/:id` → Update record
* `DELETE /api/records/:id` → Delete record

---

### 📊 Dashboard

* `GET /api/dashboard` → Summary (income, expense, balance)
* `GET /api/dashboard/category` → Category-wise totals
* `GET /api/dashboard/trends` → Monthly trends

---

### 👤 Users (Admin only)

* `GET /api/users` → Get all users
* `PATCH /api/users/:id` → Update user

---

## 🧠 Project Highlights

* Clean MVC architecture
* Role-based authorization using middleware
* MongoDB aggregation pipelines for analytics
* Scalable and maintainable backend structure

---

## 📌 Future Improvements

* API Documentation (Swagger)
* Deployment (Render / Railway)
* Unit & Integration Testing

---

## 👨‍💻 Author

**Parvez Saifi**
