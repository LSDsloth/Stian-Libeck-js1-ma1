// Question 1
const cat = {
  complain: function () {
    console.log("MJÆOOOOOO");
  },
};

console.log(cat.complain());

// Question 2
const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

// Question 3
heading.style.fontSize = "2em";

// Question 4
heading.className = "subHeading";

// Question 5
const paragraphs = document.querySelectorAll("p");
const paragraphsLength = paragraphs.length;

for (var i = 0; i < paragraphsLength; i++) {
  paragraphs[i].style.color = "red";
}

// Question 6
var resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p>" + "New paragraph" + "</p>";
resultsContainer.style.backgroundColor = "yellow";

// Question 7
function function1(list) {
  for (var i = 0; i < list.length; i++) {
    console.log(list[i].name);
  }
}

const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];
function1(cats);
// const catsLength = cats.length;
// console.log(catsLength);

// Question 8

const catContainer = document.querySelector(".cat-container");

function createCats(cats) {
  for (var i = 0; i < cats.length; i++) {
    console.log(cats[i]);
    catContainer.innerHTML =
      catContainer.innerHTML +
      `<div> <h5> ${cats[i].name} </h5> <p> ${cats[i].age} </p> </div>`;
  }
}

createCats(cats);
