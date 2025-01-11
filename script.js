const movies = [
  {
    title: "The Grand Budapest Hotel",
    genre: "Comedy",
    duration: "Medium",
    mood: "Happy",
  },
  {
    title: "Incidious",
    genre: "Horror",
    duration: "Long",
    mood: "Excited",
  },
  { title: "Get Out", genre: "Horror", duration: "Medium", mood: "Excited" },
  {
    title: "The Pursuit of Happyness",
    genre: "Drama",
    duration: "Medium",
    mood: "Relaxed",
  },
  {
    title: "Mad Max: Fury Road",
    genre: "Action",
    duration: "Medium",
    mood: "Excited",
  },
];

document.getElementById("recommendBtn").addEventListener("click", () => {
  const genre = document.getElementById("genre").value;
  const duration = document.getElementById("duration").value;
  const mood = document.getElementById("mood").value;

  const recommendation = movies.find(
    (movie) =>
      movie.genre === genre &&
      movie.duration === duration &&
      movie.mood === mood
  );

  const output = document.getElementById("recommendation");
  if (recommendation) {
    output.textContent = `We recommend: "${recommendation.title}" - A ${genre} movie with a ${mood} mood!`;
  } else {
    output.textContent = "Sorry, no movie matches your preferences.";
  }
});
