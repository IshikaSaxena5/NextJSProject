# FullStack Next.js & Express.js Application

## 🚀 Project Overview
This is a **Dockerized** full-stack application using **Next.js (Frontend)** and **Express.js with MongoDB (Backend)**. The project follows a **microservice architecture** and is **scalable to multiple pods**.

## 📂 Project Structure
```
/fullstack-app
│── /backend (Express.js, MongoDB, JWT)
│    ├── controllers
│    ├── models
│    ├── routes
│    ├── middlewares
│    ├── validations
│    ├── server.js
│── /frontend (Next.js, Yup, JWT)
│    ├── pages
│    ├── components
│    ├── services
│    ├── hooks
│    ├── validation
│── docker-compose.yml
│── Dockerfile (for frontend & backend)
│── README.md
```

## ⚙️ Prerequisites
Ensure you have the following installed:
- **Node.js** (v16 or later)
- **MongoDB** (Local or MongoDB Atlas)
- **Docker & Docker Compose**

## 🛠️ Running the Project

### **1️⃣ Clone the Repository**
```sh
git clone <your-repo-url>
cd fullstack-app
```

### **2️⃣ Set Up Environment Variables**

Create a `.env` file in the `backend/` directory:
```
MONGO_URI=mongodb://mongo:27017/fullstackDB
JWT_SECRET=your_secret_key
PORT=5000
```

### **3️⃣ Running with Docker**

1. **Build and Start Services**  
   ```sh
   docker-compose up --build
   ```

2. **Check Running Containers**  
   ```sh
   docker ps
   ```

3. **Stop Containers**  
   ```sh
   docker-compose down
   ```

### **4️⃣ Access the Application**
- **Frontend (Next.js)**: [http://localhost:3000](http://localhost:3000)  
- **Backend API (Express.js)**: [http://localhost:5000/api](http://localhost:5000/api)

## 🔥 API Endpoints

| Method | Endpoint           | Description            | Authentication |
|--------|------------------|----------------|--------------|
| POST   | `/api/users/register` | Register a user | ❌ No |
| POST   | `/api/users/login` | Login a user | ❌ No |
| GET    | `/api/users/me` | Get logged-in user | ✅ Yes (JWT) |

For protected routes, send the **Authorization header**:
```
Authorization: Bearer <your_token>
```

## 📌 Notes
- The application is **dockerized** and **scalable**.
- **Keyword "Suzuki" is not used anywhere**.
- **Frontend is built with only Next.js** (no separate React app).
- **A single Git repository** contains both frontend and backend.

## 🤝 Contributing
- Fork the repo, create a new branch, and submit a pull request.

## 📜 License
This project is open-source and available for customization.
