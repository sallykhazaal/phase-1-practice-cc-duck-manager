//! First we used this code to grab certain elements from the HTML that we needed to play with
let duckNavElement = document.querySelector("#duck-nav"); //DELIVERABLE 1
let h2 = document.querySelector("#duck-display-name"); //DELIVERABLE 2
let img = document.querySelector("#duck-display-image"); //DELIVERABLE 2
let button = document.querySelector("#duck-display-likes"); //DELIVERABLE 2
let newDuckForm = document.querySelector("#new-duck-form"); //DELIVERABLE 4
let submit = document.querySelectorAll("input")[2]; //DELIVERABLE 4
//let newDuckImageURL = document.querySelectorAll("input")[1];
//let newDuckName = document.querySelectorAll("input")[0];

//console.log(submit);

/*submit.addEventListener("submit", () => {
  console.log(newDuckName.textContent);
  // generates a new duck image in the #duck-nav
}); */

newDuckForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let duckName = e.target.duck_name_input.value;
  let duckImageURL = e.target.duck_image_input;
});

// so long as i properly add it to the duckNav, it will do the rest of deliverable 4 (ie act like the other duck images when its clicked)

//console.log(newDuckName);

/*submit.addEventListener("submit", () => {
  newDuckImageURL.textContent;
  newDuckName.textContent;
  let img = document.createElement("img"); //DELIVERABLE 1 & 4
  img.src = newDuckImageURL; //DELIVERABLE 1 &4
  duckNavElement.append(img);
}); */

//! Second we used this code to call the Ducks API and grab the duck data from the database (the database is in the form of a json file)
fetch("http://localhost:3000/ducks") //DELIVERABLE 1
  .then((res) => res.json()) //DELIVERABLE 1
  .then((data) => {
    //DELIVERABLE 1
    addDuck(data); //DELIVERABLE 1
  }); //DELIVERABLE 1

//! Fourth we defined a function called clickedDuck that lets you click on a duck image to display that duck's data in the webpage
// function definition for what should happen when we click the duck images
function clickedDuck(duckName, duckImage, duckLikes) {
  //DELIVERABLE 2
  console.log("the clicked duck function is running"); //DELIVERABLE 2
  h2.textContent = duckName; //DELIVERABLE 2
  img.src = duckImage; //DELIVERABLE 2
  button.textContent = duckLikes; //DELIVERABLE 2
  button.addEventListener("click", () => {
    //DELIVERABLE 3
    duckLikes += 1; //DELIVERABLE 3
    button.textContent = duckLikes + " likes"; //DELIVERABLE 3
  });
  // Add an event listener to button that calls the function clickedLikeButton()
  console.log(duckLikes); //this is just to see in the website's console what number of likes we are currently at--it also shows it on the webpage obviously
}

//! Third we defined a function called addDuck that uses the result of the Ducks API call and adds the ducks images to the webpage
function addDuck(inputDuckData) {
  //DELIVERABLE 1
  inputDuckData.forEach((currentDuck) => {
    //DELIVERABLE 1
    console.log(currentDuck); //DELIVERABLE 1
    let img = document.createElement("img"); //DELIVERABLE 1
    img.src = currentDuck.img_url; //DELIVERABLE 1
    img.addEventListener("click", () => {
      //DELIVERABLE 2
      // function execution //DELIVERABLE 2
      clickedDuck(currentDuck.name, currentDuck.img_url, currentDuck.likes); //DELIVERABLE 2
    }); //DELIVERABLE 2
    duckNavElement.append(img); //DELIVERABLE 1
  }); //DELIVERABLE 1
} //DELIVERABLE 1

//!AT THIS POINT WE HAVE FINISHED DELIVERABLES ONE AND TWO AND THREE

//before we figured out that img.src = duckImage puts the duck images in the middle of the screen when we click one of them, we tried these things:
// This was attempting to add the image when a duck is clicked, but it's text
//img.append(duckImage);
// // Old code, didn't put the image in the right place
// let newElementWithDuckImage = document.createElement("img");
// newElementWithDuckImage.src = duckImage;
// img.append(newElementWithDuckImage);
//duckPics.append(duckImage);

/* console.log(inputDuckData); //we used this just to see what the api is giving us from the data base so we can figgure out the src for the image tag (ie the index # and the img_url)
duckElement.append(
  <img id="duck-display-image" src={inputDuckData[0].img_url} alt="duck image goes here"/>
);*/

/*submit.addEventListener("click", () => {
newDuckImageURL.textContent;
  newDuckName.textContent;
  let img = document.createElement("img"); //DELIVERABLE 1 & 4
  img.src = newDuckImageURL; //DELIVERABLE 1 &4
  duckNavElement.append(img); //DELIVERABLE 1 &4
  //console.log(newDuckImageURL.textContent);
}); */
