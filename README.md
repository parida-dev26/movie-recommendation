<!-- Simple Movie Recommendation System -->

Overview:
This is a web application that recommends a movie based on the user's preferred genre, movie duration, and mood. Users can select their preferences through dropdown menus, and the app dynamically generates a personalized movie recommendation.

# How the App Works

1. User Interaction:
   The user selects their preferences from three dropdown fields:

- Genre (e.g., Comedy, Action, Drama, etc.).
- Duration (e.g., Short, Medium, Long).
- Mood (e.g., Happy, Relaxed, Excited, etc.).

2. Recommendation Logic:
   A predefined dataset of movies is used.
   The app matches the user's inputs (genre, duration, mood) with the dataset using a simple decision tree implemented in JavaScript.

3. Output:
   Based on the user's inputs, the app recommends a movie with details about its genre, duration, and mood.

# How to run the project

- A modern web browser (e.g., Chrome, Firefox, Edge).
- steps
  Clone the repository from GitHub:
  git clone <repository-url>
  Navigate to the project folder and open the index.html file in your browser.

# Project Structure

- index.html: Contains the HTML structure of the application.
- styles.css: Defines the visual styling and layout of the app.
- script.js: Contains the movie recommendation logic and interactivity.

# Challenges Faced and Resolutions

- Challenge: Finding a simple way to implement movie recommendation logic.
  Resolution: Used a basic find() method in JavaScript to match user inputs with the dataset.

- Challenge: Making the app responsive for mobile devices.
  Resolution: Applied CSS best practices and media queries to ensure the app works on different screen sizes.
