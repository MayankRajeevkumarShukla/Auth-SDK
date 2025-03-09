 # Test Auth SDK

## Overview
The **Test Auth SDK** is a complete authentication package for React and Node.js applications. It allows developers to quickly set up authentication in their projects with a pre-defined folder structure for both frontend and backend. This package includes React components, routes, and backend logic to handle user authentication.

## Features
- **Frontend:** React components and routing for authentication (Signup, Login, Profile, etc.).
- **Backend:** Express.js routes and controllers for handling authentication with MongoDB.
- Pre-built folder structure to organize your codebase efficiently.
- Easy-to-use templates for starting new projects.

## Installation
To install and set up the project, run the following command:

```bash
npx test-auth-sdk
```

This will automatically create the project structure and all required files in the current directory.

## Project Structure
The SDK generates the following folder structure:

```

├── backend
│   └── src
│       ├── controllers
│       │   └── authController.js
│       ├── middleware
│       │   └── authMiddleware.js
│       ├── models
│       │   └── User.js
│       ├── routes
│       │   └── authRoutes.js
│       └── server.js
├── frontend
│   └── src
│       ├── components
│       │   ├── Navbar.jsx
│       │   └── Auth
│       │       ├── Login.jsx
│       │       └── Signup.jsx
│       ├── pages
│       │   ├── Home.jsx
│       │   ├── Dashboard.jsx
│       │   ├── Profile.jsx
│       │   └── NotFound.jsx
│       ├── routes.jsx
│       ├── App.jsx
│       ├── main.jsx
│       └── index.css
├── templates
│   ├── package.json
│   ├── tsconfig.json
│   ├── app.ts
│   └── server.js
├── .gitignore
└── package.json
```

### Frontend Details
The frontend is built using **React** and is organized into the following folders:

- **`components/`**
  - **Navbar.jsx**: A reusable navigation bar component.
  - **Auth/**
    - **Login.jsx**: Login form component.
    - **Signup.jsx**: Signup form component.

- **`pages/`**
  - **Home.jsx**: The homepage.
  - **Dashboard.jsx**: A protected page that requires authentication.
  - **Profile.jsx**: A user profile page that displays user details.
  - **NotFound.jsx**: A 404 error page.

- **`routes.jsx`**: Manages application routing.
- **`App.jsx`**: Main application component.
- **`main.jsx`**: Entry point of the React app.
- **`index.css`**: Global styles.

### Backend Details
The backend is built using **Express.js** and organized as follows:

- **`controllers/`**
  - **authController.js**: Contains logic for signup, login, logout, and getting user profile.

- **`middleware/`**
  - **authMiddleware.js**: Middleware to protect routes by verifying JWT tokens.

- **`models/`**
  - **User.js**: MongoDB schema for user data.

- **`routes/`**
  - **authRoutes.js**: Routes for authentication endpoints (e.g., login, signup, profile).

- **`server.js`**: Entry point for the backend server.

## Usage
### Running the Backend
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```
   The backend server will run on `http://localhost:5000` by default.

### Running the Frontend
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm start
   ```
   The frontend app will run on `http://localhost:5173` by default.

## API Endpoints
### Authentication Endpoints
- **POST `/api/auth/signup`**: Register a new user.
- **POST `/api/auth/login`**: Authenticate and retrieve a JWT token.
- **POST `/api/auth/logout`**: Invalidate the user's session.
- **GET `/api/auth/profile`**: Retrieve the authenticated user's profile (protected).

## Templates
The `templates` folder contains default templates for:
- **package.json**: A pre-configured Node.js project.
- **tsconfig.json**: TypeScript configuration for the backend.
- **server.js**: Entry point for the backend.
- **app.ts**: Example TypeScript server setup.

## Customization
Feel free to modify the files and templates according to your project requirements. For example, you can:
- Add more routes or pages to the frontend.
- Extend the backend with additional functionality.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing
Contributions are welcome! If you encounter any issues or have suggestions for improvements, please open an issue or submit a pull request.

## Support
For support or questions, please contact [shuklamayank0407@gmail.com] or open an issue on the repository.
And more changes would be added with time 
