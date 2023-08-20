var jokesPara = document.querySelector("#joke-para");
var progBtn = document.querySelector("#programing-jokes");
var darkBtn = document.querySelector("#dark-jokes");
var nextBtn = document.querySelector("#next-button");
var randomBtn = document.querySelector("#random-jokes");

var jokeType = "programming";
var fetching = false;

function darkOn() {
  darkBtn.classList.add("active");
  progBtn.classList.remove("active");
  randomBtn.classList.remove("active");
  jokeType = "dark";
  joke();
}
function randomOn() {
  randomBtn.classList.add("active");
  darkBtn.classList.remove("active");
  progBtn.classList.remove("active");
  jokeType = "dark";
  joke();
}

function progOn() {
  progBtn.classList.add("active");
  darkBtn.classList.remove("active");
  randomBtn.classList.remove("active");
  jokeType = "programming";
  joke();
}

async function joke() {
  if (fetching) {
    return;
  }

  fetching = true;
  let obj = await fetchJoke();
  let jokeText = obj.joke || "No joke available";
  showJoke(jokeText);
  fetching = false;
}

async function fetchJoke() {
  let response = await fetch(
    `https://v2.jokeapi.dev/joke/${jokeType}?type=single`
  );
  let obj = await response.json();
  return obj;
}

function showJoke(jokeText) {
  jokesPara.textContent = jokeText;
}

document.addEventListener("DOMContentLoaded", joke);
nextBtn.addEventListener("click", joke);
progBtn.addEventListener("click", progOn);
darkBtn.addEventListener("click", darkOn);
randomBtn.addEventListener("click", randomOn);

// var jokesPara = document.querySelector(".joke-para");
// var progBtn = document.querySelector("#programing-jokes");
// var darkBtn = document.querySelector("#dark-jokes");
// var nextBtn = document.querySelector("#next-button");

// var jokeType = "programming";
// var isFetching = false; // Flag to indicate if a fetch operation is in progress

// function darkOn() {
//   jokeType = "dark";
//   joke();
// }

// function progOn() {
//   jokeType = "programming";
//   joke();
// }

// async function joke() {
//   if (isFetching) return; // If a fetch is already in progress, return and do nothing

//   isFetching = true; // Set the flag to indicate that a fetch operation is in progress

//   try {
//     let obj = await fetchJoke();
//     let jokeText = obj.joke || "No joke available";
//     showJoke(jokeText);
//   } catch (error) {
//     console.error(error);
//   } finally {
//     isFetching = false; // Reset the flag after fetch operation is complete (success or failure)
//   }
// }

// async function fetchJoke() {
//   let response = await fetch(
//     `https://v2.jokeapi.dev/joke/${jokeType}?type=single`
//   );
//   let obj = await response.json();
//   return obj;
// }

// function showJoke(jokeText) {
//   jokesPara.textContent = jokeText;
// }

// document.addEventListener("DOMContentLoaded", joke);
// nextBtn.addEventListener("click", joke);
// progBtn.addEventListener("click", progOn);
// darkBtn.addEventListener("click", darkOn);
