// script.js — harmless, client-side only
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const prank = document.getElementById("prank");
  const tryAgain = document.getElementById("tryAgain");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Clear values (still never saved or sent)
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";

  // Show popup prank
  document.getElementById("hackPopup").classList.remove("hidden");
});

document.getElementById("closePopup").addEventListener("click", () => {
  document.getElementById("hackPopup").classList.add("hidden");

  // After closing, show the prank/educational message
  form.classList.add("hidden");
  document.getElementById("prank").classList.remove("hidden");
});

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // Clear any possible fields in memory and avoid sending anywhere.
    // We're deliberately NOT collecting or sending the values.
    // For safety, immediately clear the inputs.
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";

    // Show the prank/educational panel
    form.classList.add("hidden");
    prank.classList.remove("hidden");

    // Focus the Try Again button for keyboard users
    tryAgain.focus();
  });

  tryAgain.addEventListener("click", () => {
    // Reset UI to initial state
    prank.classList.add("hidden");
    form.classList.remove("hidden");
    document.getElementById("username").focus();
  });

  // Prevent Enter from accidentally submitting if inputs are empty
  form.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      // Let the form handler deal with it — nothing will be sent.
    }
  });
});
