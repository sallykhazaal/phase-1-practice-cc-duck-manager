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
    //console.log(ducks);
    addDucks(ducks);
  });

newDuckForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let newDuckName = newDuckForm.querySelector("#duck_name_input").value;
  let newDuckImageURL = newDuckForm.querySelector("#duck_image_input").value;
  let newDuck = {};
  newDuck.name = newDuckName;
  newDuck.img_url = newDuckImageURL;
  newDuck.likes = 0;
  const image = document.createElement("img");
  image.src = newDuck.img_url;
  duckNavElement.append(image);
  image.addEventListener("click", () => {
    duckDisplayName.textContent = newDuck.name;
    duckDisplayImage.src = newDuck.img_url;
    likesButton.textContent = newDuck.likes + " likes";
    selectedDuck = newDuck;
  }); //do all of this current duck stu
  //console.log(newDuck);
  //let newDuckName = e.target.duck_name_input; Cant use dot notation with dashes, so we used underscores, but instead you can just do bracket notation and use the dashes
  //let newDuckName = e.target["duck-name-input"]; Theres an easier way to do this than with target!!!
  // let duckImageUrl = e.target["duck-image-input"]; Theres an easier way to do this than with target!!!
  //console.log(newDuckName); just to check if I was properly getting the input tag with the ID duck name input and putting it in the variable called newDuckFOrm
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
