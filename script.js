//DOM Manipulations
const myHeading = document.getElementById("main-heading");
console.log(myHeading);

const paragraph =document.querySelector(".first-paragraph");
//using getElementsByclassname
const para2 = document.getElementsByClassName("second-paragraph");
console.log(paragraph);
console.log(para2);
//change the heading color
myHeading.style.color = "Blue";
myHeading.innerHTML = "This changed from JS"
paragraph.textContent = "this is also changed from JS"
para2[0].innerHTML = "this is also changed from JS using getElementsByClassName"