import { apiUrl } from "./variables.js";

const submitLogin = (form) => {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const username = form.querySelector("#loginUsername").value;
    const password = form.querySelector("#loginPassword").value;
    console.log(username, password);

    try {
      const response = await fetch(`${apiUrl}auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", username);
        alert("Kirjautuminen onnistui!");
        location.reload();
      } else {
        alert("Kirjautuminen epäonnistui: " + data.message);
      }
    } catch (error) {
      console.error("Virhe kirjautumisessa:", error);
      alert("Kirjautumisessa tapahtui virhe. Yritä uudestaan.");
    }
  });
};

export default submitLogin;
