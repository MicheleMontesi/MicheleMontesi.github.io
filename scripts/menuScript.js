// Aggiungi questo codice JavaScript per gestire l'apertura e la chiusura del menu lingua
const menuToggle = document.querySelector('.menu-toggle');
const languageMenuContainer = document.querySelector('.language-menu-container');

menuToggle.addEventListener('click', () => {
  languageMenuContainer.classList.add('show');
});

// Chiudi il menu lingua quando si fa clic al di fuori del menu
document.addEventListener('click', (event) => {
  if (!languageMenuContainer.contains(event.target) && !menuToggle.contains(event.target)) {
    languageMenuContainer.classList.remove('show');
  }
});


// Funzione per rendere il menu-toggle trasparente
function makeMenuToggleTransparent() {
  if (!isLanguageMenuOpen) {
    menuToggle.style.opacity = '0.5'; // Imposta l'opacità a 0.5 (50% di trasparenza)
  }
}

// Funzione per ripristinare l'opacità del menu-toggle
function resetMenuToggleOpacity() {
  menuToggle.style.opacity = '1'; // Ripristina l'opacità a 1 (100% di opacità)
}

// Variabile di controllo per il menu della lingua
let isLanguageMenuOpen = false;

// Aggiungi un gestore di eventi per rilevare l'attività dell'utente
let timeoutId;

menuToggle.addEventListener('mouseenter', () => {
  clearTimeout(timeoutId);
  resetMenuToggleOpacity();
});

menuToggle.addEventListener('mouseleave', () => {
  if (!isLanguageMenuOpen) {
    // Imposta il timeout per rendere il menu-toggle trasparente dopo 5 secondi di inattività
    timeoutId = setTimeout(makeMenuToggleTransparent, 5000); // 5000 millisecondi = 5 secondi
  }
});

languageMenuContainer.addEventListener('mouseenter', () => {
  isLanguageMenuOpen = true;
  clearTimeout(timeoutId);
  resetMenuToggleOpacity();
});

languageMenuContainer.addEventListener('mouseleave', () => {
  isLanguageMenuOpen = false;
  // Imposta il timeout per rendere il menu-toggle trasparente dopo 5 secondi di inattività
  timeoutId = setTimeout(makeMenuToggleTransparent, 5000); // 5000 millisecondi = 5 secondi
});

// Inizialmente, avvia il timeout per rendere il menu-toggle trasparente dopo 5 secondi
timeoutId = setTimeout(makeMenuToggleTransparent, 5000); // 5000 millisecondi = 5 secondi
