const menuToggle = document.querySelector('.menu-toggle')
const languageMenuContainer = document.querySelector('.language-menu-container')

menuToggle.addEventListener('click', () => {
  languageMenuContainer.classList.add('show')
})

document.addEventListener('click', (event) => {
  if (
    !languageMenuContainer.contains(event.target) &&
    !menuToggle.contains(event.target)
  ) {
    languageMenuContainer.classList.remove('show')
  }
})

function makeMenuToggleTransparent() {
  if (!isLanguageMenuOpen) {
    menuToggle.style.opacity = '0.5'
  }
}

function resetMenuToggleOpacity() {
  menuToggle.style.opacity = '1'
}

let isLanguageMenuOpen = false

let timeoutId

menuToggle.addEventListener('mouseenter', () => {
  clearTimeout(timeoutId)
  resetMenuToggleOpacity()
})

menuToggle.addEventListener('mouseleave', () => {
  if (!isLanguageMenuOpen) {
    timeoutId = setTimeout(makeMenuToggleTransparent, 5000)
  }
})

languageMenuContainer.addEventListener('mouseenter', () => {
  isLanguageMenuOpen = true
  clearTimeout(timeoutId)
  resetMenuToggleOpacity()
})

languageMenuContainer.addEventListener('mouseleave', () => {
  isLanguageMenuOpen = false

  timeoutId = setTimeout(makeMenuToggleTransparent, 5000)
})

timeoutId = setTimeout(makeMenuToggleTransparent, 5000)
