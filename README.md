# Travel Booking Client

A modern, full-featured hotel and travel booking platform built with React, Vite, and Tailwind CSS. This application allows users to search, filter, and book hotels with an intuitive user interface and secure authentication.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [API Integration](#api-integration)
- [Authentication](#authentication)
- [Key Components](#key-components)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- **Hotel Search & Filtering** - Advanced search with multiple filter options
- **User Authentication** - Sign up, sign in, and email verification via OTP
- **Hotel Booking** - Seamless booking experience with request summary
- **User Profile Management** - View and update user profile and settings
- **Hotel Requests Management** - Track and manage hotel booking requests
- **Group Booking** - Special pricing and features for group bookings
- **Responsive Design** - Mobile-first responsive UI with Tailwind CSS
- **Real-time Notifications** - Toast notifications for user actions
- **Payment Integration** - Payment verification and success tracking
- **FAQ Section** - Comprehensive FAQ for users
- **Contact Us** - Get in touch with customer support
- **Savings Strategy** - Educational content about travel savings
- **About Us** - Information about the company and achievements

## 🛠️ Tech Stack

### Frontend Framework

- **React 19** - UI library
- **React Router DOM 7** - Client-side routing
- **Vite 6** - Lightning-fast build tool

### State Management & Data Fetching

- **TanStack Query** - Server state management
- **Axios** - HTTP client with interceptors
- **Context API** - Local state management

### Styling & UI

- **Tailwind CSS 4** - Utility-first CSS framework
- **DaisyUI** - Component library for Tailwind
- **Tailwind Motion** - Animation utilities
- **React Icons** - Icon library
- **Lucide React** - Modern icon set

### Form Handling

- **React Hook Form** - Efficient form management

### Additional Libraries

- **Firebase** - Authentication and backend
- **React DatePicker** - Date selection component
- **React Fast Marquee** - Scrolling text/images
- **React Spinners** - Loading spinners
- **SweetAlert2** - Beautiful alerts and modals
- **Google Maps API** - Location services

### Development Tools

- **ESLint** - Code linting
- **PostCSS & Autoprefixer** - CSS processing

## 📁 Project Structure

```
src
├── api
│   ├── auth.js
│   ├── bookings.js
│   ├── hotels.js
│   └── users.js
├── assets
│   ├── images
│   └── icons
├── components
│   ├── common
│   ├── layout
│   └── specific
├── config
│   └── firebase.js
├── hooks
│   ├── useAuth.js
│   ├── useBookings.js
│   ├── useHotels.js
│   └── useUsers.js
├── pages
│   ├── AboutUs.jsx
│   ├── ContactUs.jsx
│   ├── FAQ.jsx
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── ResetPassword.jsx
│   ├── Settings.jsx
│   └── UserProfile.jsx
├── services
│   ├── authService.js
│   ├── bookingService.js
│   ├── hotelService.js
│   └── userService.js
├── styles
│   ├── tailwind.css
│   └── global.css
├── utils
│   ├── constants.js
│   ├── helpers.js
│   └── validations.js
└── App.jsx
└── main.jsx
```

## 📦 Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/travel-booking-client.git
   ```
2. Navigate to the project directory
   ```bash
   cd travel-booking-client
   ```
3. Install dependencies
   ```bash
   npm install
   ```

## 🌍 Environment Variables

Create a `.env` file in the root directory and add the following variables:

```
VITE_API_URL=your_api_url
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
```

## 🚀 Getting Started

To start the development server, run:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173`.

## 📜 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the app for production
- `npm run preview` - Preview the production build

## 🔌 API Integration

This project integrates with a RESTful API for data fetching and manipulation. The API endpoints are defined in the `src/api` directory and are used throughout the application via custom hooks.

## 🔑 Authentication

Authentication is handled via Firebase Authentication. Users can sign up, log in, and reset their passwords using their email addresses. The authentication state is managed globally using React Context API and TanStack Query.

## 🔑 Key Components

- **AuthProvider** - Context provider for authentication state
- **PrivateRoute** - Route guard for protected routes
- **Navbar** - Navigation bar component
- **Footer** - Footer component
- **HotelCard** - Card component for displaying hotel information
- **BookingForm** - Form component for hotel bookings
- **UserProfile** - Component for displaying and editing user profile
- **AdminDashboard** - Component for admin functionalities

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes
4. Commit your changes
   ```bash
   git commit -m "Add your commit message"
   ```
5. Push to the branch
   ```bash
   git push origin feature/your-feature-name
   ```
6. Create a pull request

Please ensure your code follows the existing style and conventions.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

# Update 1 - 2026-01-02 16:31:13

# Update 2 - 2026-01-02 16:31:13

# Update 3 - 2026-01-02 16:31:14

# Update 4 - 2026-01-02 16:31:14

# Update 5 - 2026-01-02 16:31:14

# Update 6 - 2026-01-02 16:31:14

# Update 7 - 2026-01-02 16:31:14

# Update 8 - 2026-01-02 16:31:14

# Update 9 - 2026-01-02 16:31:14

# Update 10 - 2026-01-02 16:31:14

# Update 11 - 2026-01-02 16:31:14

# Update 12 - 2026-01-02 16:31:14

# Update 13 - 2026-01-02 16:31:15

# Update 14 - 2026-01-02 16:31:15

# Update 15 - 2026-01-02 16:31:15

# Update 16 - 2026-01-02 16:31:15

# Update 17 - 2026-01-02 16:31:15

# Update 18 - 2026-01-02 16:31:15
