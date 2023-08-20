const outputElement = document.querySelector(".output");

async function Age() {
  const nameElement = document.querySelector("#text");
  const Name = nameElement.value;
  let obj = await fetchAge(Name);
  let { age } = obj;
  showAge(age);
}

async function fetchAge(Name) {
  let response = await fetch(`https://api.agify.io/?name=${Name}`);
  let obj = await response.json();
  return obj;
}

function showAge(age) {
  outputElement.textContent = age.toString();
  outputElement.classList.add("active");
}

const nameElement = document.querySelector("#text");
nameElement.addEventListener("input", () => {
  outputElement.classList.remove("active");
});
