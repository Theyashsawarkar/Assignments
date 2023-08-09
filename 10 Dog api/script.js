let button = document.querySelector("button");

async function fetImage() {
  let response = await fetch("https://dog.ceo/api/breeds/image/random");
  let obj = await response.json();
  return obj;
}

function showImage(imgUrl) {
  let imageElement = document.querySelector("img");
  imageElement.src = imgUrl.toString();
}

async function loadImage() {
  let obj = await fetImage();
  let imgUrl = obj.message;
  showImage(imgUrl);
}

document.addEventListener("DOMContentLoaded", loadImage);
button.addEventListener("click", loadImage);
