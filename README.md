# NotesApp

**NotesApp** is a responsive, mobile-friendly note-taking application that allows users to create, update, and delete notes effortlessly. It includes both a frontend (React) and backend (Node.js/Express) with MongoDB for storage.

## 🚀 Features

- **Responsive Design**: Works smoothly across devices—desktop, tablet, and mobile.
- **Fast Interface**: Built with React.js for quick rendering and great UX.
- **CRUD Operations**: Create, Read, Update, and Delete notes.
- **Authentication**: Sign-up, sign-in, and token-based verification.
- **RESTful API**: Handles all backend operations with Express.js.
- **State Management**: Uses Redux Toolkit for smooth state handling.

## 🛠 Technologies Used

- **Frontend**: React.js, Redux Toolkit, HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Deployment**: Render.com

## 🔌 API Endpoints

### Notes
- `GET /home/notes`: Retrieve all notes
- `POST /notes/create`: Create a new note
- `PUT /notes/edit/:id`: Edit a note
- `DELETE /notes/delete/:id`: Delete a note
- `GET /home/notes/:id`: Get a single note

### Auth
- `POST /auth/signup`: User sign-up
- `POST /auth/signin`: User sign-in
- `POST /auth/verify`: Verify token

## 🔗 Deployment Links

- **Frontend**: _pending_
- **Backend**: https://api-stickynotes.onrender.com

## 📦 Setup Instructions

1. Clone the repo:
   ```bash
   git clone https://github.com/Likitha7052005/NotesApp.git
