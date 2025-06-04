import doughnutImage from "./assets/nik-YpsnJ6eGjVs-unsplash.jpg";
export function displayHomeTab() {
  const contentDiv = document.querySelector("#content");

  const h1 = document.createElement("h1");
  const p = document.createElement("p");
  const ul = document.createElement("ul");
  const listItemCount = 3;
  const image = document.createElement("img");
  const imageDiv = document.createElement("div");

  h1.textContent = "Freshly made, joyfully shared.";
  p.innerHTML = `Welcome to <em>Golden Glaze</em> -- your neighborhood doughnut shop
          serving up fresh, hand-crafted doughnuts every day. Whether you're
          after a classic glaze, a bold seasonal flavor, or just a great cup of
          coffee, we've got you covered.`;

  for (let index = 0; index < listItemCount; index++) {
    const li = document.createElement("li");
    if (index === 0) {
      li.textContent = "Made fresh every morning";
    } else if (index === 1) {
      li.textContent = "Locally roasted coffee";
    } else if (index === 2) {
      li.textContent = "Custom orders & catering available";
    }

    ul.append(li);
  }
  image.src = doughnutImage;
  imageDiv.classList.add("image-div");
  contentDiv.append(h1);
  contentDiv.append(p);
  contentDiv.append(ul);
  imageDiv.append(image);
  contentDiv.append(imageDiv);
}
