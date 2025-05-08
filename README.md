# 🎁 Subscription Box Service Platform

A fully responsive single-page application for managing personalized monthly subscription boxes. Built as part of **Assignment-09_category_Lily**, this app includes protected routes, Firebase authentication, and user interaction features like reviews and profile updates.

## 🔗 Live Link

[🔗 View Live Site](https://your-live-site-link.com)

## 📁 GitHub Repository

[📂 View on GitHub](https://github.com/your-username/assignment-09-subscription-box)

---

## 📌 Project Features

### ✅ Core Features

- 🧾 **User Authentication** with Email/Password and Google Login (Firebase Auth)
- 🔐 **Protected Routes**: Subscription details and My Profile require authentication
- 📦 **Subscription Box Cards** with JSON-based service data
- 📝 **User Reviews**: Leave rating and feedback on subscription services
- 📄 **My Profile Page** with update feature (display name + photoURL)
- 📧 **Forget Password**: Fully functional with email reset via Firebase
- ⚙️ **Dynamic Page Titles** using `react-helmet-async`
- 🧭 **404 Page** for invalid routes
- 👁️ **Show/Hide Password Toggle** on Register page
- 🌐 **Deployed via Netlify** with Firebase Auth domain configuration

---

## 🖼️ Screenshots

> Add screenshots of your app (Home, Profile, Subscription Details, etc.) here for better presentation.

---

## 🧪 Technology Stack

| Tech                    | Usage                              |
| ----------------------- | ---------------------------------- |
| React                   | Frontend UI                        |
| React Router DOM        | Routing                            |
| Tailwind CSS + DaisyUI  | Styling and components             |
| Firebase                | Authentication and profile updates |
| React Helmet Async      | Dynamic page titles                |
| Swiper                  | Slider in Home                     |
| AOS (Animate on Scroll) | Animations                         |

---

## 🧩 Pages & Components

- `/` Home (Slider, Subscription Services, Extra Sections)
- `/login` Login Page (Google & email/password login)
- `/register` Registration Page (with password validation)
- `/profile` My Profile (Protected)
- `/update-profile` Update Profile Info (Protected)
- `/service/:id` Subscription Details (Protected, with review system)
- `/auth/forgot-password` Forgot Password
- `/extra` Extra Protected Route (Bonus content)
- `*` 404 Page

---

## 🛠️ Installation & Setup

```bash
git clone https://github.com/your-username/assignment-09-subscription-box
cd assignment-09-subscription-box
npm install

```
