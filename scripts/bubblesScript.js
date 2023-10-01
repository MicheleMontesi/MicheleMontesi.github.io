var openModalBtns = document.querySelectorAll('.bubble')

var bubbleData = {
  openModal1: {
    itaTitle: 'Linguaggi di Programmazione',
    engTitle: 'Programming Language',
    itaList: [
      'Python',
      'Java',
      'C',
      'C#',
      'Scripting Bash da terminale',
      'Sviluppatore Web di base (HTML, CSS, JavaScript, PHP, MySQL)',
      'Assembly x86',
      'Database: MySQL (base)',
      'Go/Golang',
      'Sviluppo Android: Kotlin (Android Studio)',
      'Conoscenza di base di programmazione con OpenMP, MPI',
    ],
    engList: [
      'Python',
      'Java',
      'C',
      'C#',
      'Bash scripting from terminal',
      'Web Developer base (HTML, CSS, JavaScript, PHP, MySQL)',
      'Assembly x86',
      'Database: MySQL (basic)',
      'Go/Golang',
      'Android Developing: Kotlin (Android Studio)',
      'Basic programming knowledge with OpenMP, MPI',
    ],
  },
  openModal2: {
    itaTitle: 'Sistemi Operativi',
    engTitle: 'Operating Systems',
    itaList: ['Linux', 'Windows', 'MacOS', 'Android'],
    engList: ['Linux', 'Windows', 'MacOS', 'Android'],
  },
  openModal3: {
    itaTitle: 'Strumenti Informatici',
    engTitle: 'IT Tools',
    itaList: [
      'Docker (Docker compose, Docker Swarm, Docker container)',
      'Teleport',
      'Ansible',
      'Active Directory',
      'Freeipa',
    ],
    engList: [
      'Docker (Docker compose, Docker Swarm, Docker container)',
      'Teleport',
      'Ansible',
      'Active Directory',
      'Freeipa',
    ],
  },
}

document
  .getElementById('language')
  .addEventListener('change', onLanguageChangeSkills)

function onLanguageChangeSkills() {
  currentLanguage = languageSelectorExp.value
}

function loadSkills() {
  openModalBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      let modal = document.getElementById('modalSkills')
      let modalTitle = modal.querySelector('h2') // Selezione dell'elemento del titolo in italiano
      let modalList = modal.querySelector('ul') // Selezione dell'elemento della lista in italiano

      let bubbleId = this.getAttribute('id')
      let data = bubbleData[bubbleId]

      let skillsList = currentLanguage === 'ita' ? data.itaList : data.engList

      console.log(currentLanguage)
      modalTitle.textContent =
        currentLanguage === 'ita' ? data.itaTitle : data.engTitle
      modalList.innerHTML = skillsList
        .map((item) => `<li><p>${item}</p></li>`)
        .join('')

      modal.style.display = 'flex'
    })
  })
}

function closeModal(modalId) {
  let modal = document.getElementById(modalId)
  modal.style.display = 'none'
}

let closeBtn = document.querySelector('.close')
closeBtn.addEventListener('click', function () {
  let modal = document.getElementById('modalSkills')
  modal.style.display = 'none'
})

let closeModalBG = document.querySelector('.modal-container')
closeModalBG.addEventListener('click', function (event) {
  if (
    !event.target.classList.contains('modal-content') &&
    !event.target.classList.contains('modal-body') &&
    event.target.tagName !== 'LI' &&
    event.target.tagName !== 'UL' &&
    event.target.tagName !== 'P' &&
    event.target.tagName !== 'H2'
  ) {
    let modalId = this.getAttribute('id')
    closeModal(modalId)
  }
})

loadSkills()
