import "./styles.css";
import { displayHomeTab } from "./home.js";
import { displayMenuTab } from "./menu.js";
import { displayAboutTab } from "./about.js";

const navigation = document.querySelectorAll("nav > button");

navigation.forEach((button) => {
  button.addEventListener("click", changePage);
});

function changePage() {
  const contentDiv = document.querySelector("#content");
  console.log(event.target.className);
  contentDiv.textContent = "";
  if (event.target.className === "home") {
    displayHomeTab();
  } else if (event.target.className === "menu") {
    displayMenuTab();
  } else if (event.target.className === "about") {
    displayAboutTab();
  }
}

displayHomeTab();
