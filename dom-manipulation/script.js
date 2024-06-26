const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

// 1. Create a <p> with red text
const pElement = document.createElement('p');
pElement.textContent = 'Hey I’m red!';
pElement.style.color = 'red';
container.appendChild(pElement);

const hElement = document.createElement("h3");
hElement.textContent = "I'm a blue h3!";
hElement.style.color = "blue";
container.appendChild(hElement);



const divElement = document.createElement("div");
divElement.style.border = "1px solid black";
divElement.style.backgroundColor = "pink";

const h1Element = document.createElement("h1");
h1Element.textContent = "Im in a div";
divElement.appendChild(h1Element)

const pInDivElement = document.createElement('p');
pInDivElement.textContent = 'ME TOO!';
divElement.appendChild(pInDivElement);

container.appendChild(divElement);

function alertFunction() {
    alert("YAY! YOU DID IT!");
}
const btn = document.querySelector("#btn");
btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
  });


  // buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});