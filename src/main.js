"use strict";
import restaurantRow from "./modules/restaurantRow.js";
import filterRows from "./modules/filterRows.js";
import addModal from "./modules/addModal.js";
import { haeRavintolat } from "./modules/haut.js";

const apiUrl = "https://media2.edu.metropolia.fi/restaurant/api/v1";

// your code here
const taulukko = document.querySelector("#target");
const modal = document.querySelector("#modal");

const select = document.createElement("select");
const option1 = document.createElement("option");
option1.value = "All";
option1.text = "All Companies";
const option2 = document.createElement("option");
option2.value = "Sodexo";
option2.text = "Sodexo";
const option3 = document.createElement("option");
option3.value = "Compass Group";
option3.text = "Compass Group";

select.append(option1, option2, option3);
document.querySelector("div").insertAdjacentElement("afterend", select);

const loginBtn = document.querySelector("#login-btn");
loginBtn.addEventListener("click", () => {
  window.location.href = "login.html";
});

(async () => {
  const restaurants = await haeRavintolat();
  // console.log(restaurants);
  // console.log(await haePaivanMenu(1, 'fi'));
  restaurants.sort((a, b) =>
    a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1,
  );

  for (const restaurant of restaurants) {
    // rivi
    const tr = restaurantRow(restaurant);
    addModal(tr, restaurant, modal);
    taulukko.append(tr);
  }

  const rows = [];
  restaurants.forEach((restaurant) => {
    rows.push(restaurant);
  });

  // filter companies based on selection
  select.addEventListener("change", () => {
    if (select.value !== "All") {
      const filteredRows = filterRows(rows, select.value);
      for (const elem of document.querySelectorAll(".restaurant-row")) {
        elem.remove();
      }
      filteredRows.forEach((row) => {
        const tr = restaurantRow(row);
        addModal(tr, row, modal);
        taulukko.append(tr);
      });
    } else {
      for (const elem of document.querySelectorAll(".restaurant-row")) {
        elem.remove();
      }
      rows.forEach((row) => {
        const tr = restaurantRow(row);
        addModal(tr, row, modal);
        taulukko.append(tr);
      });
    }
  });
})();
