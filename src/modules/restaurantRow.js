const restaurantRow = (restaurant) => {
  const { name, address, city, company } = restaurant;
  const tr = document.createElement("tr");
  const nameTd = document.createElement("td");
  nameTd.innerText = name;
  const addressTd = document.createElement("td");
  addressTd.innerText = address;
  const cityTd = document.createElement("td");
  cityTd.innerText = city;
  const companyTd = document.createElement("td");
  companyTd.innerText = company;
  tr.append(nameTd, addressTd, cityTd, companyTd);
  return tr;
};

export default restaurantRow;
