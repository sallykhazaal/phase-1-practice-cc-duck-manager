let duckNavElement = document.querySelector("#duck-nav");
let h2 = document.querySelector("#duck-display-name");
let img = document.querySelector("#duck-display-image");
let button = document.querySelector("#duck-display-likes");
let newDuckForm = document.querySelector("#new-duck-form");
let submit = document.querySelectorAll("input")[2];
let newDuckImageURL = document.querySelectorAll("input")[1];
let newDuckName = document.querySelectorAll("input")[0];

submit.addEventListener("click", () => {});

fetch("http://localhost:3000/ducks")
  .then((res) => res.json())
  .then((data) => {
    addDuck(data);
  });

function clickedDuck(duckName, duckImage, duckLikes) {
  console.log("the clicked duck function is running");
  h2.textContent = duckName;
  img.src = duckImage;
  button.textContent = duckLikes;
  button.addEventListener("click", () => {
    duckLikes += 1;
    button.textContent = duckLikes + " likes";
  });

  console.log(duckLikes);
}

function addDuck(inputDuckData) {
  inputDuckData.forEach((currentDuck) => {
    console.log(currentDuck);
    let img = document.createElement("img");
    img.src = currentDuck.img_url;
    img.addEventListener("click", () => {
      clickedDuck(currentDuck.name, currentDuck.img_url, currentDuck.likes);
    });
    duckNavElement.append(img);
  });
}
