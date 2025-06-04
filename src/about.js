import doughnutImage from "./assets/anna-sullivan--tR4fnNJW2A-unsplash.jpg";
export function displayAboutTab() {
  const paragraphs = [
    "At Golden Glaze, we believe every day deserves a little sweetness. Founded in 2023, our cozy shop was born out of a simple love for handcrafted, small-batch doughnuts. From classic glazed to creative seasonal flavors, each doughnut is made fresh every morning using high-quality ingredients and a whole lot of care.",
    "We’re more than just a doughnut shop — we’re a neighborhood spot where friends gather, coffee flows, and smiles are served with every bite. Whether you're stopping by for your morning treat or picking up a dozen for the office, we’re here to brighten your day, one doughnut at a time.",
    "Come visit us in the heart of town and see why Golden Glaze is quickly becoming everyone’s favorite daily habit.",
  ];

  const contentDiv = document.querySelector("#content");
  const h1 = document.createElement("h1");
  h1.textContent = "About";
  const aboutContainerDiv = document.createElement("div");
  aboutContainerDiv.classList.add("about-container");
  contentDiv.append(h1);
  const divWrapper = document.createElement("div");
  aboutContainerDiv.append(divWrapper);
  paragraphs.forEach((paragraph) => {
    const p = document.createElement("p");
    p.textContent = paragraph;
    divWrapper.append(p);
  });
  contentDiv.append(aboutContainerDiv);
  const image = document.createElement("img");
  image.src = doughnutImage;
  const imageContainerDiv = document.createElement("div");
  imageContainerDiv.classList.add("img-container");
  imageContainerDiv.append(image);
  aboutContainerDiv.append(imageContainerDiv);
  contentDiv.append(aboutContainerDiv);
}
