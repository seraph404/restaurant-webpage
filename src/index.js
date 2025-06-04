import "./styles.css";
import { displayHomeTab } from "./home.js";

const navigation = document.querySelectorAll("nav > button");

navigation.forEach((button) => {
  button.addEventListener("click", changePage);
});

function changePage() {
  console.log("hi");
}
