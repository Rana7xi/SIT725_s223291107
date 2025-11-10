function changeText() {
  const texts = [
    "Hello Rana! Welcome to SIT725!",
    "Great job learning Git and JS!",
    "Keep coding and practicing!",
    "You're doing awesome!",
    "Programming is fun!"
  ];
  const randomIndex = Math.floor(Math.random() * texts.length);
  document.getElementById("displayText").textContent = texts[randomIndex];
}
