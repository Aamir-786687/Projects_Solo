# Jio Cinema Clone - Frontend
This is a frontend clone of Jio Cinema, built using React.js. The application provides a platform where users can view movies filtered by genres, with a clean and interactive interface. It mimics the core features of the Jio Cinema UI, such as searching for movies, filtering by genres, and viewing detailed information about each movie.

## Features
1. Movie Search: Users can search for movies in the search bar.
2. Genre Filter: Filter movies based on genre using the interactive tags.
3. Responsive UI: A responsive design that adjusts according to the screen size.
4. Dynamic Movie Data: Fetches movie data from Firebase for a real-time feel.

## Tech Stack
1. React.js: For building the UI components and managing the app state.
2. CSS: For styling and responsiveness.
3. Firebase Realtime Database: To fetch the movie data dynamically.
4. React Hooks: For managing state and side effects.
4. Axios: To make API requests.

## Installation and Setup Instructions

# Prerequisites

Make sure you have the following installed on your local machine:

-> Node.js (version 14.x or higher)

-> npm or yarn

## Step 1: Clone the Repository

**git clone https://github.com/your-username/jio-cinema-clone.git**

## Step 2: Navigate into the Project Directory

**cd jio-cinema-clone**

## Step 3: Install Dependencies

If you're using npm:
**npm install**

If you're using yarn:
**yarn install**

## Step 4: Add Firebase Configuration
Create a .env file at the root of the project and add your Firebase Realtime Database URL as shown below:

**REACT_APP_FIREBASE_DB_URL=https://your-firebase-project-id.firebaseio.com/**

## Step 5: Run the Application
To start the application locally, use the following command:

**npm start**

or, for yarn users:

**yarn start**

The app will be running locally at **http://localhost:3000**.

## Project Structure
/src

 ├── /assets       
  #Contains all static assets such as logos and images

 ├── /components    
 #React components for the app (Header, Tags, Fav_show, Banner)

 ├── /pages         
 #Pages such as Home

 ├── App.js         
 #Main app component

 ├── index.js       
 #React entry point

## Main Components

### Header.jsx
Displays the search bar and navigation menu. It also fetches the movies and updates the search results dynamically.

### Tags.jsx
Displays a list of movie genres (tags) for filtering movies by genre. When a tag is clicked, the movie list is updated based on the selected genre.

### Fav_show.js
Renders the list of favorite or filtered movies based on the genre or search query.

### Home.js
The main page where movies, genres, and banners are displayed.

## License
This project is licensed under the MIT License.

## Acknowledgements
1. React.js - The UI framework used.
2. Firebase - For the real-time movie data.
3. Jio Cinema - For design inspiration.