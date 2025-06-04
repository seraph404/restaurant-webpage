export function displayMenuTab() {
  const menu = [
    {
      section: "Classics",
      items: [
        {
          name: "Glazed Original",
          desc: "A light, fluffy doughnut with a sweet, shiny vanilla glaze.",
          price: "$1.50",
        },
        {
          name: "Chocolate Dip",
          desc: "Our signature doughnut topped with a rich chocolate coating.",
          price: "$1.75",
        },
        {
          name: "Cinnamon Sugar",
          desc: "Rolled in a perfect mix of cinnamon and sugar -- simple and delicious",
          price: "$1.60",
        },
        // more items
      ],
    },
    {
      section: "Specialty Doughnuts",
      items: [
        {
          name: "Maple Bacon Bliss",
          desc: "Sweet maple glaze topped with crispy smoked bacon crumbles",
          price: "$2.50",
        },
        {
          name: "Strawberry Sprinkle",
          desc: "Topped with strawberry glaze and rainbow sprinkles -- a customer favorite.",
          price: "$2.25",
        },
        {
          name: "Lemon Poppy Crème",
          desc: "Filled with lemon custard and finished with a poppy seed glaze.",
          price: "$2.50",
        },
        {
          name: "Cookies & Crème",
          desc: "Chocolate doughnut topped with vanilla glaze and crushed chocolate cookies.",
          price: "$2.75",
        },
      ],
    },
    {
      section: "Coffee & Drinks",
      items: [
        {
          name: "House Brew Coffee",
          desc: "Locally roasted, brewed fresh every morning.",
          price: "$2.00 (small) / $2.50 (large)",
        },
        {
          name: "Cold Brew",
          desc: "Smooth and bold, served over ice",
          price: "$3.25",
        },
        {
          name: "Milk or Chocolate Milk",
          desc: "Clasisc pairing with any doughnut",
          price: "$1.75",
        },
      ],
    },
  ];
  // loop through each section
  const contentDiv = document.querySelector("#content");
  const menuDiv = document.createElement("div");
  menuDiv.setAttribute("id", "menu");
  const h1 = document.createElement("h1");
  h1.textContent = "Menu";
  contentDiv.append(h1);
  contentDiv.append(menuDiv);

  menu.forEach((menuSection, index) => {
    console.log(menuSection.section);
    const section = document.createElement("section");
    const h2 = document.createElement("h2");
    h2.textContent = menuSection.section;
    section.append(h2);
    // loop through each item in that section
    menuSection.items.forEach((item, itemIndex) => {
      const menuItemContainerDiv = document.createElement("div");
      menuItemContainerDiv.classList.add("menu-item-container");
      const menuItemWrapperDiv = document.createElement("div");
      const menuItemDiv = document.createElement("div");
      menuItemDiv.classList.add("menu-item");
      const menuItemText = document.createElement("p");
      const menuItemDescDiv = document.createElement("div");
      menuItemDescDiv.classList.add("menu-desc");
      const menuItemDescText = document.createElement("p");
      const menuItemPriceSpan = document.createElement("div");
      menuItemPriceSpan.classList.add("price");
      const menuItemPriceText = document.createElement("span");

      //console.log(item.name);
      /* loop content */
      menuItemText.textContent = item.name;
      menuItemDescText.textContent = item.desc;
      menuItemPriceText.textContent = item.price;
      /* appending: order matters */

      section.append(menuItemContainerDiv);
      menuItemContainerDiv.append(menuItemWrapperDiv);
      menuItemWrapperDiv.append(menuItemDiv);
      menuItemDescDiv.append(menuItemDescText);
      menuItemWrapperDiv.append(menuItemDescDiv);
      menuItemDiv.append(menuItemText);
      menuItemContainerDiv.append(menuItemPriceSpan);
      menuItemPriceSpan.append(menuItemPriceText);

      menuDiv.append(section);
    });
  });
}
