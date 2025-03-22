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
│    ├── validations
│    ├── server.js
│    ├── Dockerfile
│── /frontend (Next.js, Yup, JWT)
│    ├── pages
│    ├── components
│    ├── services
│    ├── styles
│    ├── Dockerfile
│    ├── validation
│── docker-compose.yml
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
git clone https://github.com/IshikaSaxena5/NextJSProject.git
cd NextJSProject
```

### **2️⃣ Set Up Environment Variables**

Create a `.env` file in the `backend/` directory:
```
MONGO_URI=mongodb://mongo:27017/fullstackDB
JWT_SECRET=your_secret_key
PORT=5000
```

### **3️⃣ Running with local node server**

1. **Installations**  
   ``
   npm install
   ```

2. **For Frontend**  
   ```
   cd /frontend
   npm run dev
   ```

3. **For backend**  
   ```
   cd /backend
   npm run dev

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

| Method | Endpoint           | Description     
|--------|------------------|----------------|
| POST   | `/api/users/` | Add a user | 
| GET   | `/api/users/` | Get all users | 
| GET   | `/api/users//:id` | Get a user |
| PUT    | `/api/users//:id` | Update a user |

