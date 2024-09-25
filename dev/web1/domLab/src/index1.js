const buttonEl = document.createElement("button");
buttonEl.textContent = "버튼";

const containers = 
document.getElementsByClassName("container");
console.log(containers);

const firstContainer = containers[0];
firstContainer.appendChild(buttonEl)