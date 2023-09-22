// Funzione per espandere la bolla
function expandBubble(bubble) {
  bubble.classList.toggle("expanded");
  bubble.querySelector("h2").classList.toggle("expanded");

  // Chiudi le altre bolle espandibili
  const bubbles = document.querySelectorAll(".bubble");
  bubbles.forEach((b) => {
    if (b !== bubble && b.classList.contains("expanded")) {
      b.classList.remove("expanded");
      b.querySelector("h2").classList.remove("expanded");
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const bubbles = document.querySelectorAll(".draggable");

  // Inizializza il trascinamento delle bolle utilizzando jQuery UI
  bubbles.each(function () {
    $(this).draggable();
  });

  // Aggiungi l'evento di clic per l'espansione
  bubbles.on("click", function () {
    expandBubble(this);
  });
});
