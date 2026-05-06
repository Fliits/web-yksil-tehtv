const registerForm = () => {
  const html = `
    <h2>Rekisteröidy</h2>
    <form id="register-form">
      <label for="registerUsername">Käyttäjätunnus:</label>
      <input type="text" id="registerUsername" name="username" autoComplete="username" required>
      <label for="registerPassword">Salasana:</label>
      <input type="password" id="registerPassword" name="password" autoComplete="password" required>
      <label for="registerEmail">Sähköposti:</label>
      <input type="email" id="registerEmail" name="email" autoComplete="email" required>
      <button type="submit" id="registerButton">Rekisteröidy</button>
    </form>
  `;
  return html;
};

export { registerForm };
