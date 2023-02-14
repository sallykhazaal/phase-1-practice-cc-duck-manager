let duckNav = document.querySelector("#duck-nav"); //1
let duckDisplay = document.querySelector("#duck-display"); //2
let duckDisplayName = document.querySelector("#duck-display-name"); //2
let duckDisplayImage = document.querySelector("#duck-display-image"); //2
let duckDisplayLikesButton = document.querySelector("#duck-display-likes"); //2
let newDuck; //3
let newDuckForm = document.querySelector("#new-duck-form"); //4

//fetch the ducks and create the duck nav variable lines: "let duckNav", & the whole fetch
fetch("http://localhost:3000/ducks") //1
  .then((res) => res.json()) //1
  .then((ducks) => {
    //1
    addDucks(ducks); //1
  });

//now you have to display each duck image in the #duck-nav
function addDucks(ducks) {
  //1
  ducks.forEach((duck) => {
    //1
    const image = document.createElement("img"); //1
    image.src = duck.img_url; //1
    duckNav.append(image); //1
    image.addEventListener("click", () => {
      //2
      duckDisplayName.textContent = duck.name; //2
      duckDisplayImage.src = duck.img_url; //2
      duckDisplayLikesButton.textContent = duck.likes + " likes"; //2
      newDuck = duck; //3
    });
  });
  duckDisplayLikesButton.addEventListener("click", () => {
    //3
    newDuck.likes++; //3
    duckDisplayLikesButton.textContent = newDuck.likes + " likes"; //3
  });
}

newDuckForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let newDuckImage = e.target.duck_image_input.value;

  console.log(newDuckImage);
  duckNav.append(newDuckImage);

  //let newDuckName = e.target.duck_name_input.value;
  // let newDuckImageURL = e.target.duck_image_input.value;
});
//you've completed deliverable 1 using: "let duckNav", the whole fetch function, the new function that you created in order to call it inside of the 2nd .then in order to hold the data you fetched as its value, then you created that function that you already called--and you used the data you fetched as the value inside that funciton
