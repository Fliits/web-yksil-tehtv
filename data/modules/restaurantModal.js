import { teeMenuHTML } from "./teeMenuHTML.js";

const restaurantModal = (restaurant, menu) => {
  const container = document.createElement("div");
  const { name, address, city, postal_code, phone, company } = restaurant;

  const nameH3 = document.createElement("h3");
  nameH3.innerText = name;

  const addressP = document.createElement("p");
  addressP.innerText = `Osoite: ${address || "Ei ilmoitettu"}`;

  const cityP = document.createElement("p");
  cityP.innerText = `Kaupunki: ${city || "Ei ilmoitettu"}`;

  const postalCodeP = document.createElement("p");
  postalCodeP.innerText = `Postinumero: ${postal_code || "Ei ilmoitettu"}`;

  const phoneP = document.createElement("p");
  phoneP.innerText = `Puhelin: ${phone || "Ei ilmoitettu"}`;

  const companyP = document.createElement("p");
  companyP.innerText = `Yhtiö: ${company || "Ei ilmoitettu"}`;

  container.append(nameH3, addressP, cityP, postalCodeP, phoneP, companyP);

  const menuContainer = document.createElement("div");
  menuContainer.innerHTML = teeMenuHTML(menu.courses || []);
  container.append(menuContainer);
  return container;
};

export default restaurantModal;
