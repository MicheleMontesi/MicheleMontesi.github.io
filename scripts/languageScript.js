function setCookie(name, value, days) {
  const expires = new Date()
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000)
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`
}

function getCookie(name) {
  const cookieValue = document.cookie.match(`(^|;)\\s*${name}=([^;]+)`)
  return cookieValue ? cookieValue.pop() : ''
}

function changeLanguage() {
  const languageMenuContainer = document.querySelector(
    '.language-menu-container',
  )
  const languageSelector = document.getElementById('language')
  const selectedLanguage = languageSelector.value

  setCookie('selectedLanguage', selectedLanguage, 30)

  const itaElements = document.querySelectorAll('.ita')
  const engElements = document.querySelectorAll('.eng')

  if (selectedLanguage === 'ita') {
    itaElements.forEach((element) => {
      element.style.display = 'block'
    })
    engElements.forEach((element) => {
      element.style.display = 'none'
    })
  } else if (selectedLanguage === 'eng') {
    itaElements.forEach((element) => {
      element.style.display = 'none'
    })
    engElements.forEach((element) => {
      element.style.display = 'block'
    })
  }
  languageMenuContainer.classList.remove('show')
}

const languageSelector = document.getElementById('language')

const savedLanguage = getCookie('selectedLanguage')

if (savedLanguage) {
  languageSelector.value = savedLanguage
}

languageSelector.addEventListener('change', changeLanguage)

changeLanguage()
