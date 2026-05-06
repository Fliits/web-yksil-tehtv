import { apiUrl } from "./variables.js";

const profileDataFetch = async () => {
  const token = localStorage.getItem("token");
  if (token) {
    const response = await fetch(`${apiUrl}/users/token`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((user) => {
        console.log(user);
        localStorage.setItem("username", user.username);
        localStorage.setItem("email", user.email);
        localStorage.setItem("favouriteRestaurant", user.favouriteRestaurant);
        localStorage.setItem("avatar", user.avatar);
        localStorage.setItem("id", user._id);
        localStorage.setItem("role", user.role);
      });
  }
};

export default profileDataFetch;
