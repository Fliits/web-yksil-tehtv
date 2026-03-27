const createMenu = (courses) => {
  const article = document.createElement("article");
  for (const course of courses) {
    const { name, price, diets } = course;
    article.classList = "course";
    const nameP = document.createElement("p");
    const strong = document.createElement("strong");
    strong.innerText = name || "Ei ilmoitettu";
    nameP.append(strong);
    const priceP = document.createElement("p");
    priceP.innerText = `Hinta: ${price || "Ei ilmoitettu"}`;
    const dietsP = document.createElement("p");
    dietsP.innerText = `Allergeenit: ${diets ?? "Ei ilmoitettu"}`;
    article.append(nameP, priceP, dietsP);
  }
  return article;
};

export { createMenu };
