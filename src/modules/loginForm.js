const loginForm = () => {
  const html = `
    <h2>Kirjaudu sisään</h2>
    <form id="login-form">
      <label for="username">Käyttäjätunnus:</label>
      <input type="text" id="username" name="username" autoComplete="username" required>
      <label for="password">Salasana:</label>
      <input type="password" id="password" name="password" autoComplete="password" required>
      <button type="submit">Kirjaudu</button>
    </form>
  `;
  return html;
};

export { loginForm };
