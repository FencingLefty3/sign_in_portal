document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  // ✅ Define allowed combos and where they should redirect
  const VALID_CREDENTIALS = {
    "Bounty_239": { password: "Bou!!!", redirect: "https://fencinglefty3.github.io" },
    "FencingLefty3": { password: "Fen!!!", redirect: "https://google.com" }
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    if (
      VALID_CREDENTIALS[username] &&
      VALID_CREDENTIALS[username].password === password
    ) {
      // 🎉 Correct combo → redirect to the target link
      window.location.href = VALID_CREDENTIALS[username].redirect;
    } else {
      // ❌ Wrong combo → show error
      showError("Invalid username or password.");
    }
  });

  function showError(msg) {
    let err = document.getElementById("errorMsg");
    if (!err) {
      err = document.createElement("p");
      err.id = "errorMsg";
      err.style.color = "red";
      err.style.marginTop = "8px";
      form.appendChild(err);
    }
    err.textContent = msg;
  }
});
