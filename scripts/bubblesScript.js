// Seleziona tutti i bottoni per aprire i modali
var openModalBtns = document.querySelectorAll('.bubble')
console.log(openModalBtns)

// Aggiungi un gestore di eventi a ciascun bottone
openModalBtns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    // Ottieni l'ID del modal associato a questo bottone
    var modalId = this.getAttribute('id').replace('openM', 'm')
    var modal = document.getElementById(modalId)
    modal.style.display = 'flex'
  })
})

// Funzione per chiudere il modal
function closeModal(modalId) {
  var modal = document.getElementById(modalId)
  modal.style.display = 'none'
}

// Chiudi il modal quando si fa clic sulla "X" per ciascun modal
var closeBtns = document.querySelectorAll('.close')
closeBtns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    var modalId = this.classList[1].replace('close', 'modal')
    closeModal(modalId)
  })
})

var closeModalBG = document.querySelectorAll('.modal-container')
closeModalBG.forEach(function (bg) {
  bg.addEventListener('click', function (event) {
    // Verifica se l'elemento cliccato è il contenuto del modale
    if (
      !event.target.classList.contains('modal-content') &&
      !event.target.classList.contains('modal-body') &&
      event.target.tagName !== 'LI' &&
      event.target.tagName !== 'UL' &&
      event.target.tagName !== 'P' &&
      event.target.tagName !== 'H2'
    ) {
      var modalId = this.getAttribute('id')
      closeModal(modalId)
    }
  })
})

