var openModalBtns = document.querySelectorAll('.bubble')

openModalBtns.forEach((bubble) => {
  const randomDuration = Math.random() * (15 - 4) + 4
  bubble.style.animationDuration = `${randomDuration}s`
})

openModalBtns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    var modalId = this.getAttribute('id').replace('openM', 'm')
    var modal = document.getElementById(modalId)
    modal.classList.add('scroll-animation')
    modal.style.display = 'flex'
  })
})

function closeModal(modalId) {
  var modal = document.getElementById(modalId)
  modal.style.display = 'none'
}

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
