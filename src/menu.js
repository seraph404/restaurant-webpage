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
      ],
    },
  ];
  // loop through each section
  menu.forEach((section, index) => {
    let itemCount = section.items.length;
    // loop through each item in that section
    section.items.forEach((item, itemIndex) => {
      console.log(item.name);
    });
  });

  const contentDiv = document.querySelector("#content");
  const p = document.createElement("p");
  p.textContent = "This is the menu page!";
  contentDiv.append(p);
}
