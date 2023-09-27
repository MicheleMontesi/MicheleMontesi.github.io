const galleryView = document.getElementById('galleryView')
galleryView.style.display = 'flex'

const imgObject = [
  {
    title: 'Tirocinante Programmatore',
    startDate: '05/06/2023',
    endDate: '05/09/2023',
    jobLocation: 'Unibo - Campus di Cesena',
    descriptionList: [
      'Creazione di script Ansible',
      'Studio e utilizzo di docker swarm',
      'Studio e utilizzo di nginx e letsencrypt',
      'Studio e utilizzo di FreeIPA',
      "Studio sull'utilizzo di Teleport",
      'Studio e utilizzo di Active Directory',
      'Integrazione di autenticazione Radius in Teleport',
    ],
  },
  {
    title:
      'Insegnante Di Ripetizioni Di Materie Informatiche, Matematiche E Scientifiche',
    startDate: '01/03/2023',
    endDate: 'Today',
    jobLocation: 'Remoto / Da casa',
    descriptionList: [
      'Ripetizioni di C, Python e Informatica di base',
      'Ripetizioni di Matematica (1^ superiore)',
      'Ripetizioni di Biologia e Chimica',
    ],
  },
  {
    title: 'Addetto alla Preparazione Di Antipasti',
    startDate: '14/06/2020',
    endDate: '15/07/2020',
    jobLocation: 'Locanda da Lorenzo - Cervia',
    descriptionList: [
      'Preparazione antipasti vari',
      'Aiuto cuoco',
      'Aiuto griglia',
      'Igienizzazione strumenti e bancali',
    ],
  },
  {
    title: 'Socio Volontario',
    startDate: '15/10/2019',
    endDate: '15/03/2020',
    jobLocation: "L'Oasi - Cesena",
    descriptionList: [
      'Manutenzione computers Windows e Mac (Clonazione Hard Disk con successivo rimpiazzo, Sostituzione RAM, Ottimizzazione computer come da legge sulla privacy)',
      'Creazione sito della cooperativa',
      "Assistenza in loco ed in remoto per la risoluzione dei problemi con l'utilizzo dell'hardware e del software",
      'Installazione e gestione parte software (Microsoft Office, Antivirus, TeamViewer)',
      'Gestione autonoma del lavoro in base agli obiettivi richiesti',
    ],
  },
  {
    title: 'Socio Volontario',
    startDate: '01/07/2016',
    endDate: '31/01/2018',
    jobLocation: "L'Oasi - Cesena",
    descriptionList: [
      'Creazione sito della cooperativa',
      "Assistenza in loco ed in remoto per la risoluzione dei problemi con l'utilizzo dell'hardware e del software",
      'Installazione e gestione parte software (Microsoft Office, Antivirus)',
    ],
  },
  {
    title: 'Tirocinante',
    startDate: '15/01/2018',
    endDate: '03/02/2018',
    jobLocation: 'Gestiass - Cesena',
    descriptionList: [
      'Creazione di file Excel',
      'Supporto informatico',
      'Gestione sinistri',
      'Utilizzo piattaforme aziendali',
      'Interazioni telefoniche e personali con clienti',
    ],
  },
  {
    title: 'Tirocinante',
    startDate: '22/05/2017',
    endDate: '17/06/2017',
    jobLocation: 'Auto Sat S.P.A - Cesena',
    descriptionList: [
      'Supporto informatico',
      'Gestione magazzino',
      'Creazione di grafiche',
    ],
  },
]

let mainImg = 0
let prevImg = imgObject.length - 1
let nextImg = 1

let isAtLeftEnd = true
let isAtRightEnd = false

function loadGallery() {
  const mainView = document.getElementById('mainView')
  const leftView = document.getElementById('leftView')
  const rightView = document.getElementById('rightView')

  const currentImg = imgObject[mainImg]

  const descriptionList = currentImg.descriptionList
    .map((item) => `<li>${item}</li>`)
    .join('')

  mainView.innerHTML = `
    <h2>${currentImg.title}</h2>
    <div class="job-date-location-container">
      <div class="job-date-container">
        <p class="job-date">Data d'inizio:<br/>${currentImg.startDate}</p>
        <p class="job-date">Data di fine:<br/>${currentImg.endDate}</p>
      </div>
      <p class="job-location">Luogo di lavoro:<br/>${currentImg.jobLocation}</p>
    </div>
    <div class="job-description-box">
      <ul class="job-description">${descriptionList}</ul>
    </div>
  `
  // Aggiorna il testo delle descrizioni nel carosello
  leftView.innerHTML = `
    <h2>${imgObject[prevImg].title}</h2>
  `

  rightView.innerHTML = `
    <h2>${imgObject[nextImg].title}</h2>
  `

  if (isAtLeftEnd) {
    document.getElementById('navLeft').classList.add('job-hidden')
    document.getElementById('leftView').classList.add('job-view-hidden')
  } else {
    document.getElementById('navLeft').classList.remove('job-hidden')
    document.getElementById('leftView').classList.remove('job-view-hidden')
  }

  if (isAtRightEnd) {
    document.getElementById('navRight').classList.add('job-hidden')
    document.getElementById('rightView').classList.add('job-view-hidden')
  } else {
    document.getElementById('navRight').classList.remove('job-hidden')
    document.getElementById('rightView').classList.remove('job-view-hidden')
  }
}

function scrollRight() {
  if (!isAtRightEnd) {
    prevImg = mainImg
    mainImg = nextImg
    if (nextImg >= imgObject.length - 1) {
      nextImg = 0
      isAtRightEnd = true
    } else {
      nextImg++
      isAtLeftEnd = false
    }
    loadGallery()
  }
}

function scrollLeft() {
  if (!isAtLeftEnd) {
    nextImg = mainImg
    mainImg = prevImg

    if (prevImg === 0) {
      prevImg = imgObject.length - 1
      isAtLeftEnd = true
    } else {
      prevImg--
      isAtRightEnd = false
    }
    loadGallery()
  }
}

let touchStartX = 0
let touchEndX = 0

// Aggiungi un listener per l'evento touchstart
document
  .getElementById('mainView')
  .addEventListener('touchstart', function (e) {
    touchStartX = e.touches[0].clientX
  })

// Aggiungi un listener per l'evento touchmove
document.getElementById('mainView').addEventListener('touchmove', function (e) {
  touchEndX = e.touches[0].clientX
})

// Aggiungi un listener per l'evento touchend
document.getElementById('mainView').addEventListener('touchend', function () {
  // Calcola la differenza tra le coordinate iniziali e finali
  const swipeDistance = touchEndX - touchStartX

  // Imposta una soglia per determinare se si tratta di uno swipe significativo
  const swipeThreshold = 50 // Puoi regolare questa soglia secondo le tue esigenze

  if (swipeDistance > swipeThreshold) {
    // Swipe verso destra
    scrollLeft()
  } else if (swipeDistance < -swipeThreshold) {
    // Swipe verso sinistra
    scrollRight()
  }
})

document.getElementById('navRight').addEventListener('click', scrollRight)
document.getElementById('navLeft').addEventListener('click', scrollLeft)
document.getElementById('rightView').addEventListener('click', scrollRight)
document.getElementById('leftView').addEventListener('click', scrollLeft)
document.addEventListener('keyup', function (e) {
  if (e.keyCode === 37) {
    scrollLeft()
  } else if (e.keyCode === 39) {
    scrollRight()
  }
})

loadGallery()
