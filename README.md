# NotesApp

**NotesApp** is a responsive, mobile-friendly note-taking application designed for users to create, update, and delete notes effortlessly. It provides a clean, intuitive interface for managing notes on the go, with support for various devices and optimized loading speeds.

## Features

- **Responsive Design**: The app works seamlessly across devices—desktop, tablet, and mobile—ensuring a smooth experience for users.
- **CRUD Operations**: Users can Create, Read, Update, and Delete notes.
- **State Management**: Implemented using **Redux Toolkit** for efficient and optimized state management.
- **Backend API**: Developed a RESTful API using **Express.js** and **Node.js** to handle data persistence and server-side operations.
- **Database**: Utilizes **MongoDB** for storing user data and notes securely.
- **Deployment**: The application is deployed and hosted on Render.com, ensuring high availability and easy access.

## Technologies Used

- **Frontend**:
  - React.js: For building the user interface and ensuring quick rendering.
  - Redux Toolkit: To manage global state efficiently across the app.
  - HTML5 & CSS3: For structuring and styling the application.

- **Backend**:
  - Node.js: For handling server-side logic.
  - Express.js: For building the RESTful API and routing.
  - MongoDB: As the database solution for storing notes and user information.

## Installation and Setup

To get started with the NotesApp locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/HarshDev1809/NotesApp.git
   ```

2. **Install Dependencies**:
   Navigate to the `client` and `server` directories and run the following:
   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

3. **Environment Variables**:
   Create a `.env` file in the `server` directory with the following variables:
   ```env
   URL=your_mongo_database_uri
   PORT=5000
   ```

4. **Run the Application**:
   From the root directory, you can run both the frontend and backend using the following commands:
   - Frontend:
     ```bash
     cd client
     npm start
     ```
   - Backend:
     ```bash
     cd server
     npm start
     ```

5. **Access the Application**:
   Open your browser and visit `http://localhost:3000` for the frontend and `http://localhost:5000` for the backend.

## Deployment

The app is deployed on Render. You can access the live version [here](https://notesapp-d8lp.onrender.com/).

## Future Improvements

- **Authentication**: Add user authentication for private notes.
- **Search Functionality**: Enable searching through notes by keywords or tags.
- **Rich Text Editor**: Implement a rich text editor for formatting notes.
- **Dark Mode**: Provide a dark mode option for better user experience.

## Contributing

Feel free to contribute by opening an issue or submitting a pull request.
