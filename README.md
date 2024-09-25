# Fitness Web App

## Project Overview

The **Fitness Web App** is designed to help users track their workouts and nutrition. It provides exercise videos, tracks workout sessions and nutrition intake, and offers personalized features like user profiles, goals, achievements, feedback, and more.

### Features

- **Exercise Videos:** Users can search for workout videos by body part or equipment and receive YouTube recommendations for similar content.
- **Workout Tracking:** Tracks completed workout sessions and provides insights into user progress.
- **Nutrition Tracking:** Allows users to log their meals and track calories, protein, carbs, and fats.
- **Profile Section:** Users for now will have a look at their activity level based on the provided info but for the future Users will be able to update personal details such as name, email, and bio.
- **Workout Challenges and Achievements:** Includes challenges and achievements to keep users motivated.
- **Rest and Recovery Tips:** A dedicated section providing rest and recovery advice.

## Technology Stack

### Frontend

- **React**: Frontend framework for building the user interface.
- **CSS Modules**: Custom styles for each component, including animations and modern UI designs.
- **Clerk**: Authentication solution for login and signup forms.

### Backend

- **Node.js**: Backend framework for building APIs.
- **MongoDB**: NoSQL database for storing workout data, user profiles, and nutrition logs.
- **Express.js**: Framework for building robust API endpoints.
- **JWT (JSON Web Tokens)**: Used for authentication and authorization.

## File Structure

```
fitness-app/
│
├── server/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── exercisecontroller.js
│   ├── routes/
│   ├── models/
│   ├── index.js
│   └── server.js
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   └── utils/
├── .env
├── package.json
└── README.md
```

## Installation

To get the project up and running locally, follow these steps:

### Prerequisites

- Node.js installed
- MongoDB setup
- Clerk API Key for authentication

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/fitness-app.git
   cd fitness-app
   ```

2. **Install dependencies:**

   For the backend:

   ```bash
   cd server
   npm install
   ```

   For the frontend:

   ```bash
   cd ../
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the `server/` directory with the following:

   ```bash
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   CLERK_PUBLISHABLE_KEY=your_clerk_key
   ```

4. **Run the application:**

   To start both the backend and frontend:

   ```bash
   npm run dev
   ```

   The frontend will be served on `http://localhost:3000` and the backend API on `http://localhost:5000`.

## API Endpoints

- **GET /api/exercises** - Retrieve all exercises
- **POST /api/exercises** - Add a new exercise
- **PUT /api/exercises/:id** - Update an exercise
- **DELETE /api/exercises/:id** - Delete an exercise

## Deployment

The project can be deployed on platforms like Render or Heroku for the backend, and Netlify or Vercel for the frontend.

## Contact

If you have any issues or questions, feel free to [contact support](segniassaye24@gmail.com).
