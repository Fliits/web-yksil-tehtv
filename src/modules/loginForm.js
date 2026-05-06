const loginForm = () => {
  const html = `
    <h2>Kirjaudu sisään</h2>
    <form id="login-form">
      <label for="loginUsername">Käyttäjätunnus:</label>
      <input type="text" id="loginUsername" name="username" autoComplete="username" required>
      <label for="loginPassword">Salasana:</label>
      <input type="password" id="loginPassword" name="password" autoComplete="password" required>
      <button type="submit" id="loginButton" method="post">Kirjaudu</button>
    </form>
  `;
  return html;
};

export { loginForm };
