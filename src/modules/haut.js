import fetchData from "./fetchData.js";

const apiUrl = "https://media2.edu.metropolia.fi/restaurant/api/v1";

const haeRavintolat = async () => {
  try {
    // eslint-disable-next-line no-undef
    return await fetchData(apiUrl + "/restaurants");
  } catch (error) {
    console.error(error);
  }
};

const haePaivanMenu = async (id, lang) => {
  try {
    // eslint-disable-next-line no-undef
    return await fetchData(apiUrl + `/restaurants/daily/${id}/${lang}`);
  } catch (error) {
    console.error(error);
  }
};

export { haeRavintolat, haePaivanMenu };
