# Get Movie App

## Overview

The Get Movie App is a web application that allows users to interact with a list of movies. Users can view all movies, search for movies by title, and mark movies as their favorites. The app features both a backend service to handle API requests and a frontend interface to display and manage movie data.

## Features

### Backend
- **Get Movies**: Retrieve the list of all movies. `[GET /api/movies]`
- **Search Movies**: Search for movies by title. `[GET /api/movies/search?title={title}]`

### Frontend
- **Display Movies**: Show the list of movies fetched from the backend.
- **Search**: Filter movies by title.
- **Favorites**: Mark movies as favorites and display a list of favorite movies (stored using local storage).

## Requirements

### Backend
- Node.js
- Express
- CORS

### Frontend
- React
- Axios
- LocalStorage for favorites

## Getting Started

### Backend

1. **Install dependencies**:
    ```bash
    npm install
    ```

2. **Start the server**:
    ```bash
    npm start
    ```


### Frontend

1. **Navigate to the frontend directory**:
    ```bash
    cd frontend
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the React app**:
    ```bash
    npm start
    ```
