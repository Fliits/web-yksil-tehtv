import { apiUrl } from "./variables.js";

const profileModal = () => {
  const profileView = document.createElement("div");
  const usernameP = document.createElement("p");
  usernameP.innerText = `Username: ${localStorage.getItem("username")}`;

  const usernameButton = document.createElement("button");
  usernameButton.innerText = "Change Username";
  usernameButton.addEventListener("click", () => {
    const newUsername = prompt("Enter new username:");
    if (newUsername) {
      fetch(`${apiUrl}users`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ username: newUsername }),
      })
        .then((response) => {
          if (response.ok) {
            alert("Username updated successfully!");
            localStorage.setItem("username", newUsername);
            usernameP.innerText = `Username: ${newUsername}`;
          } else {
            alert("Failed to update username.");
          }
        })
        .catch(() => {
          alert("Error updating username.");
        });
    }
  });

  const emailP = document.createElement("p");
  emailP.innerText = `Email: ${localStorage.getItem("email")}`;
  if (emailP.innerText === "Email: null") {
    alert("Reloading page to fetch profile data...");
    location.reload();
  }

  const emailButton = document.createElement("button");
  emailButton.innerText = "Change Email";
  emailButton.addEventListener("click", () => {
    const newEmail = prompt("Enter new email:");
    if (newEmail) {
      fetch(`${apiUrl}users`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ email: newEmail }),
      })
        .then((response) => {
          if (response.ok) {
            alert("Email updated successfully!");
            localStorage.setItem("email", newEmail);
            emailP.innerText = `Email: ${newEmail}`;
          } else {
            alert("Failed to update email.");
          }
        })
        .catch(() => {
          alert("Error updating email.");
        });
    }
  });
  const favouriteRestaurantP = document.createElement("p");
  favouriteRestaurantP.innerText = `Favourite Restaurant: ${localStorage.getItem(
    "favouriteRestaurant",
  )}`;

  const idP = document.createElement("p");
  idP.innerText = `ID: ${localStorage.getItem("id")}`;

  const roleP = document.createElement("p");
  roleP.innerText = `Role: ${localStorage.getItem("role")}`;

  const avatarImg = document.createElement("img");
  avatarImg.src = `${apiUrl}users/avatar/uploads/${localStorage.getItem("avatar")}`;
  avatarImg.alt = "Avatar";
  avatarImg.width = 100;

  const avatarInput = document.createElement("input");
  avatarInput.type = "file";
  avatarInput.accept = "image/*";
  let newAvatar = null;
  avatarInput.addEventListener("change", () => {
    const file = avatarInput.files[0];
    if (file) {
      newAvatar = file;
      const reader = new FileReader();
      reader.onloadend = () => {
        avatarImg.src = reader.result;
      };
      reader.readAsDataURL(file);
    }
  });

  const avatarButton = document.createElement("button");
  avatarButton.innerText = "Change Avatar";
  avatarButton.addEventListener("click", () => {
    if (newAvatar) {
      const formData = new FormData();
      formData.append("avatar", newAvatar);

      fetch(`${apiUrl}users/avatar`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: formData,
      })
        .then((response) => {
          console.log(response);
          if (response.ok) {
            alert("Avatar updated successfully!");
            location.reload();
          } else {
            alert("Failed to update avatar.");
          }
        })
        .catch(() => {
          alert("Error updating avatar.");
        });
    }
  });

  profileView.append(
    usernameP,
    usernameButton,
    emailP,
    emailButton,
    favouriteRestaurantP,
    idP,
    roleP,
    avatarImg,
    avatarInput,
    avatarButton,
  );

  return profileView;
};

export default profileModal;
