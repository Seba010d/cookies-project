const cookieConsent = document.getElementById("cookie-consent");
const cookieOptions = document.getElementById("cookie-options");
const neededCookies = document.getElementById("needed-cookies");
const comercialCookies = document.getElementById("comercial-cookies");
const allCookies = document.getElementById("all-cookies");
const savePreferences = document.getElementById("save-preferences");
const acceptAll = document.getElementById("accept-all");
const denyAll = document.getElementById("deny-all");
const customize = document.getElementById("customize");
const mainContent = document.getElementById("main-content");

acceptAll.addEventListener("click", function () {
  console.log("Accepting all cookies");
  mainContent.style.display = "block";
  cookieConsent.style.display = "none";
});

denyAll.addEventListener("click", function () {
  console.log("Denying all cookies");
  window.location.href = "pages/denied.HTML";
});

customize.addEventListener("click", function () {
  cookieOptions.style.display = "block";
  acceptAll.style.display = "none";
  denyAll.style.display = "none";
  customize.style.display = "none";
});

savePreferences.addEventListener("click", function () {
  const neededCookies = document.getElementById("needed-cookies").checked;
  const comercialCookies = document.getElementById("comercial-cookies").checked;
  const allCookies = document.getElementById("all-cookies").checked;

  if (!neededCookies && !comercialCookies && !allCookies) {
    alert("Please select at least one option");
    return;
  }

  const preferences = {
    needed: neededCookies,
    comercial: comercialCookies,
    all: allCookies,
  };

  console.log("Cookie preferences saved:", preferences);
  mainContent.style.display = "block";
  cookieConsent.style.display = "none";
});
