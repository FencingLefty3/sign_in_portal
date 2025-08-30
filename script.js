document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const tryAgain = document.getElementById("tryAgain");

  // 🎯 Define allowed username + password combos
  const VALID_CREDENTIALS = {
    "FencingLefty3": "Fen!!",     // username: admin, password: letmein
    "Bounty_239": "Bou!!"     // add more pairs here if you want
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    if (VALID_CREDENTIALS[username] && VALID_CREDENTIALS[username] === password) {
      // ✅ Correct combo → trigger prank popup
      document.getElementById("username").value = "";
      document.getElementById("password").value = "";

      hackPopup.classList.remove("hidden");

      // Optional: play sound
      const scareSound = document.getElementById("scareSound");
      if (scareSound) scareSound.play().catch(() => {});
    } else {
      // ❌ Wrong combo → show error
      showError("Invalid username or password.");
    }
  });

  closePopup.addEventListener("click", () => {
    hackPopup.classList.add("hidden");
    form.classList.add("hidden");
    prank.classList.remove("hidden");
  });

  tryAgain.addEventListener("click", () => {
    prank.classList.add("hidden");
    form.classList.remove("hidden");
    clearError();
    document.getElementById("username").focus();
  });

  // Helpers for showing error inline
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

  function clearError() {
    const err = document.getElementById("errorMsg");
    if (err) err.remove();
  }
});
