import profileModal from "./profileModal.js";
import profileDataFetch from "./profileDataFetch.js";

const profileMain = (modal, login, logout) => {
  if (localStorage.getItem("username") !== null) {
    login.style.display = "none";
    logout.style.display = "block";
    profileDataFetch();
    const profileView = profileModal();
    const profile = document.createElement("div");
    const user = document.createElement("button");
    user.id = "profileButton";
    user.innerHTML = `<p>Käyttäjä</p>`;
    profile.appendChild(user);
    profile.addEventListener("click", () => {
      modal.innerHTML = "";
      modal.showModal();
      modal.append(profileView);
    });
    document.querySelector("#profile").appendChild(profile);
    document.querySelector("#logout").addEventListener("click", () => {
      localStorage.clear();
      location.reload();
    });
  }
};

export default profileMain;
