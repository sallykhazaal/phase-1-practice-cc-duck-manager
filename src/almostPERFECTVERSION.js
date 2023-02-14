let duckNavElement = document.querySelector("#duck-nav");
let duckDisplay = document.querySelector("#duck-display");
let duckDisplayName = document.querySelector("#duck-display-name"); //DELIVERABLE 2
let duckDisplayImage = document.querySelector("#duck-display-image"); //DELIVERABLE 2
let likesButton = document.querySelector("#duck-display-likes");
let selectedDuck;
let newDuckForm = document.querySelector("#new-duck-form");

fetch("http://localhost:3000/ducks")
  .then((res) => res.json())
  .then((ducks) => {
    addDucks(ducks);
  });

function addDucks(ducks) {
  ducks.forEach((curDuck) => {
    //just to see what we're working with console.log(curDuck)
    const image = document.createElement("img");
    image.src = curDuck.img_url;
    duckNavElement.append(image);
    image.addEventListener("click", () => {
      duckDisplayName.textContent = curDuck.name;
      duckDisplayImage.src = curDuck.img_url;
      likesButton.textContent = curDuck.likes + " likes";
      selectedDuck = curDuck;
    }); //do all of this current duck stuff in the for each parenthesis
  });
  likesButton.addEventListener("click", () => {
    selectedDuck.likes++;
    likesButton.textContent = selectedDuck.likes + " likes";
  });
}

newDuckForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let duckName = e.target.duck_name_input.value;
  let duckImageURL = e.target.duck_image_input;
});
