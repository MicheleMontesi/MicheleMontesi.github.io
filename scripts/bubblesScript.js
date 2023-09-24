// Seleziona tutti i bottoni per aprire i modali
var openModalBtns = document.querySelectorAll('.bubble');
console.log(openModalBtns);

// Aggiungi un gestore di eventi a ciascun bottone
openModalBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
        // Ottieni l'ID del modal associato a questo bottone
        var modalId = this.getAttribute('id').replace('openM', 'm');
        var modal = document.getElementById(modalId);
        modal.style.display = 'flex';
    });
});

// Funzione per chiudere il modal
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = 'none';
}

// Chiudi il modal quando si fa clic sulla "X" per ciascun modal
var closeBtns = document.querySelectorAll('.close');
closeBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
        var modalId = this.classList[1].replace('close', 'modal');
        closeModal(modalId);
    });
});

var modalContainers = document.querySelectorAll('.modal-container');
var bubbles = document.querySelectorAll('.bubble');
modalContainers.forEach(function (container) {
  bubbles.foreach(function (bubble) {
    container.addEventListener('click', function (event) {
        if (event.target !== this && event.target !== bubble) {
            var modalId = this.firstElementChild.getAttribute('id');
            closeModal(modalId);
        }
    });
  })
});

