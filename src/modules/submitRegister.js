import { apiUrl } from "./variables.js";

const submitRegister = (form) => {
  const button = form.querySelector("#registerButton");
  button.addEventListener("click", async (e) => {
    e.preventDefault();
    const username = form.querySelector(
      "#register-form #registerUsername",
    ).value;
    const password = form.querySelector(
      "#register-form #registerPassword",
    ).value;
    const email = form.querySelector("#register-form #registerEmail").value;

    // console.log(username, password, email);

    const availabilityCheck = await fetch(
      `${apiUrl}users/available/${username}`,
      {
        method: "GET",
      },
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Käyttäjätunnuksen tarkistus epäonnistui!");
      });

    if (availabilityCheck.available) {
      await fetch(`${apiUrl}users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
          email: email,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Rekisteröityminen epäonnistui!");
        });
    } else {
      alert("Käyttäjätunnus ei ole saatavilla!");
    }
  });
};

export default submitRegister;
