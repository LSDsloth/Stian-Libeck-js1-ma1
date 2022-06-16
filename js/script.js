

// Question 1
const cat = {
    complain: function(){
        console.log("MJÆOOOOOO")
    }
}

console.log(cat.complain());


// Question 2
const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";


// Question 3
heading.style.fontSize = "2em";


// Question 4
// Answer goes here


// Question 5
const paragraphs = document.querySelector("p");
console.log(paragraphs.length);


// Question 6
// Answer goes here


// Question 7
function function1(list) {
    for( var i = 0; i < list.length; i++) {
        console.log(list[i].name);
    }
}

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];
 function1(cats)