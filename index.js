// element selectors
const drumButtons = document.querySelectorAll(".drum");

// Add event listener to all buttons for click
drumButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const btnHTML = btn.innerHTML;
    makeSound(btnHTML);
    buttonAnimation(btnHTML);
  });
});

// add event listener to all buttons for keypress
document.addEventListener("keypress", (e) => {
  makeSound(e.key);
  buttonAnimation(e.key);
});

// Play sound based on the key pressed
makeSound = (key) => {
  switch (key) {
    case "w":
      const tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      const tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      const tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      const tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      const snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      const crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      const kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
};

// Add button animation on keypress or click
function buttonAnimation(key) {
  const activeButton = document.querySelector(`.${key}`);
  activeButton.classList.add("pressed");

  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 100);
}

// ANONYMOUS FUNCTIONS
// the funcion above does not have a name, but is simply imbedded into the
// query selector. this is called an anonymous function

// HIGHER ORDER FUNCTIONS
// functions that take in another function as a perameter
