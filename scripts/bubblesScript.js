const bubbles = document.querySelectorAll('.bubble');

// Funzione per chiudere una bolla
function closeBubble(bubble) {
  if (bubble.classList.contains('enlarged')) {
    bubble.classList.remove('enlarged');
    const h1 = bubble.querySelector('.centered-content h1');
    const h2Elements = bubble.querySelectorAll('.centered-content h2');
    h1.style.display = 'block';
    h2Elements.forEach(h2 => {
      h2.style.display = "none";
    });
  }
}

bubbles.forEach((bubble) => {
  const h1 = bubble.querySelector('.centered-content h1');
  const h2Elements = bubble.querySelectorAll('.centered-content h2');

  h2Elements.forEach(h2 => {
    h2.style.display = "none";
  });
  const randomDuration = Math.random() * (15 - 4) + 4; // Calcola una durata casuale tra 4 e 15 secondi
  bubble.style.animationDuration = `${randomDuration}s`

  bubble.addEventListener('click', () => {
    if (!bubble.classList.contains('enlarged')) {
      // Chiudi tutte le bolle aperte prima di aprire questa
      bubbles.forEach((otherBubble) => {
        if (otherBubble !== bubble && otherBubble.classList.contains('enlarged')) {
          closeBubble(otherBubble);
        }
      });
    } 

    bubble.classList.toggle("enlarged");

    if (bubble.classList.contains('enlarged')) {
      h1.style.display = 'none';
      h2Elements.forEach(h2 => {
        h2.style.display = "block";
      });
    } else {
      h1.style.display = 'block';
      h2Elements.forEach(h2 => {
        h2.style.display = "none";
      });
    }
  })
})

// Crea un observer che osserva tutte le sezioni.
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting || entry.target.id !== 'skills') {
      // Se l'utente esce dalla sezione "skills", chiudi tutte le bolle.
      bubbles.forEach((bubble) => {
        closeBubble(bubble);
      });
    }
  });
}, {
  root: null,
  rootMargin: '0px',
  threshold: 0,
});

// Osserva tutte le sezioni.
const sections = document.querySelectorAll('.page');
sections.forEach((section) => {
  sectionObserver.observe(section);
});
