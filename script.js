// Function to check if the user already accepted cookies
function checkCookieConsent() {
  return localStorage.getItem("cookieConsent") === "true";
}

// Function to show the cookie popup
function showCookiePopup() {
  const popup = document.getElementById("cookie-popup");
  popup.style.display = "flex";
}

// Function to hide the cookie popup and save the consent
function acceptCookies() {
  localStorage.setItem("cookieConsent", "true");
  const popup = document.getElementById("cookie-popup");
  popup.style.display = "none";
}

// Event listener for when the user accepts cookies
document
  .getElementById("accept-cookies")
  .addEventListener("click", acceptCookies);

// Check if the user has already accepted cookies
if (!checkCookieConsent()) {
  showCookiePopup();
}
