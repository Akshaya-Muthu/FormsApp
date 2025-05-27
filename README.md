🔐 React Auth UI (Frontend Only)
A frontend-only authentication user interface built using React and Tailwind CSS. It includes pages for Register, Login, Forgot Password, and Reset Password — all styled with a clean, modern design and built with component reusability in mind.

📦 Features
📋 Register Page (form validation included)

🔐 Login Page (with basic state management)

❓ Forgot Password Page (email input for password reset)

🔁 Reset Password Page (new password & confirm password)

🌈 Fully responsive design using Tailwind CSS

✨ Reusable form components

🚦 React Router for navigation

🔧 Tech Stack
React

React Router DOM

Tailwind CSS

(Optional) Formik/Yup for form validation

📁 Project Structure

src/
│
├── components/        # Reusable UI components (Inputs, Buttons)
├── pages/             # Register, Login, ForgotPassword, ResetPassword
├── App.js             # Route configuration
└── index.js           # Entry point

🚀 Getting Started
1. Clone the Repo
git clone https://github.com/Akshaya-Muthu/FormsApp
cd react-auth-ui

2. Install Dependencies
npm install

3. Start Development Server
npm start
The app will be live at: http://localhost:5173

🧭 Routes

| Path               | Page            |
| ------------------ | --------------- |
| `/register`        | Register Page   |
| `/login`           | Login Page      |
| `/forgot-password` | Forgot Password |
| `/reset-password`  | Reset Password  |

📌 Future Enhancements
🔐 Connect to real backend (Firebase, Express, Supabase, etc.)

✅ Add full validation with Yup or custom hooks

🌍 Add localization support

🧪 Add unit tests


