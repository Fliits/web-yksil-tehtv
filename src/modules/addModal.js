import restaurantModal from "./restaurantModal.js";
import { haePaivanMenu } from "./haut.js";

const addModal = (tr, restaurant, modal) => {
  tr.addEventListener("click", async () => {
    for (const elem of document.querySelectorAll(".highlight")) {
      elem.classList.remove("highlight");
    }

    tr.classList.add("highlight");

    // tyhjennä modal
    modal.innerHTML = "";
    // avaa modal
    modal.showModal();
    // tee modalin sisältö
    const pMenu = await haePaivanMenu(restaurant._id, "fi");
    const modalDOM = restaurantModal(restaurant, pMenu);
    modal.append(modalDOM);
  });
};

export default addModal;
