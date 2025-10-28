const startBtn = document.getElementById("start-btn");
const mainMenu = document.querySelector(".main-menu");
const clickArea = document.querySelector(".click-area");
const endScreen = document.querySelector(".end-screen");
const reactionDisplay = document.querySelector(".Reaction-time-test");
const playAgainBtn = document.querySelector(".play-again-btn");

let startTime, endTime, timer;
let isGreen = false;


startBtn.addEventListener("click", () => {
  mainMenu.style.display = "none";
  clickArea.style.display = "flex";
  clickArea.style.backgroundColor = "red";
  clickArea.querySelector(".message").textContent = "Wait for green...";

  
  const randomTime = Math.floor(Math.random() * 3000) + 2000;

  timer = setTimeout(() => {
    clickArea.style.backgroundColor = "green";
    clickArea.querySelector(".message").textContent = "CLICK NOW!";
    isGreen = true;
    startTime = Date.now();
  }, randomTime);
});


clickArea.addEventListener("click", () => {
  if (!isGreen) {
    
    
    setTimeout(() => {
      clickArea.style.display = "none";
      mainMenu.style.display = "flex";
    }, 1500);
  } else {

    endTime = Date.now();
    const reactionTime = endTime - startTime;
    reactionDisplay.textContent = `${reactionTime}ms`;

    clickArea.style.display = "none";
    endScreen.style.display = "flex";
    isGreen = false;
  }
});


playAgainBtn.addEventListener("click", () => {
  endScreen.style.display = "none";
  mainMenu.style.display = "flex";
});
