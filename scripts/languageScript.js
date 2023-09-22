function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

function getCookie(name) {
  const cookieValue = document.cookie.match(`(^|;)\\s*${name}=([^;]+)`);
  return cookieValue ? cookieValue.pop() : "";
}

// Funzione per cambiare la lingua del sito
function changeLanguage() {
  // Ottieni il valore selezionato nel menu di selezione della lingua
  const languageMenuContainer = document.querySelector(".language-menu-container");
  const languageSelector = document.getElementById("language");
  const selectedLanguage = languageSelector.value;

  setCookie("selectedLanguage", selectedLanguage, 30); // Imposta una scadenza di 30 giorni

  // Ottieni tutti gli elementi con classi "ita" e "eng"
  const itaElements = document.querySelectorAll(".ita");
  const engElements = document.querySelectorAll(".eng");

  // Mostra o nascondi gli elementi in base alla lingua selezionata
  if (selectedLanguage === "ita") {
    // Mostra gli elementi in italiano e nascondi quelli in inglese
    itaElements.forEach((element) => {
      element.style.display = "block";
    });
    engElements.forEach((element) => {
      element.style.display = "none";
    });
  } else if (selectedLanguage === "eng") {
    // Mostra gli elementi in inglese e nascondi quelli in italiano
    itaElements.forEach((element) => {
      element.style.display = "none";
    });
    engElements.forEach((element) => {
      element.style.display = "block";
    });
  }
  languageMenuContainer.classList.remove("show");
}

// Aggiungi un listener per il cambio di lingua quando il menu di selezione cambia valore
const languageSelector = document.getElementById("language");

// Leggi il valore del cookie "selectedLanguage"
const savedLanguage = getCookie("selectedLanguage");

// Imposta il valore del selettore di lingua in base al cookie
if (savedLanguage) {
  languageSelector.value = savedLanguage;
}

// Aggiungi un listener per il cambio di lingua quando il menu di selezione cambia valore
languageSelector.addEventListener("change", changeLanguage);

// Chiama la funzione changeLanguage iniziale per impostare la lingua iniziale
changeLanguage();
