import "./styles.css";
import { displayHomeTab } from "./home.js";
import { displayMenuTab } from "./menu.js";

const navigation = document.querySelectorAll("nav > button");

navigation.forEach((button) => {
  button.addEventListener("click", changePage);
});

function changePage() {
  const contentDiv = document.querySelector("#content");
  console.log(event.target.className);
  if (event.target.className === "home") {
    contentDiv.textContent = "";
    displayHomeTab();
  } else if (event.target.className === "menu") {
    contentDiv.textContent = "";
    displayMenuTab();
  }
  //contentDiv.textContent = "";
}

displayHomeTab(); // display by default
