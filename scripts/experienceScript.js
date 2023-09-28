const galleryView = document.getElementById('galleryView')
galleryView.style.display = 'flex'

const itaExperiences = [
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
    endDate: 'In corso',
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

const engExperiences = [
  {
    title: 'Intern Programmer',
    startDate: '06/05/2023',
    endDate: '09/05/2023',
    jobLocation: 'University of Bologna - Cesena Campus',
    descriptionList: [
      'Creation of Ansible scripts',
      'Study and use of Docker Swarm',
      "Study and use of Nginx and Let's Encrypt",
      'Study and use of FreeIPA',
      'Study on the usage of Teleport',
      'Study and use of Active Directory',
      'Integration of Radius authentication in Teleport',
    ],
  },
  {
    title: 'Tutor for Computer Science, Mathematics, and Sciences',
    startDate: '03/01/2023',
    endDate: 'In progress',
    jobLocation: 'Remote / Work from Home',
    descriptionList: [
      'Tutoring in C, Python, and Basic Computer Science',
      'Tutoring in Mathematics (1st year of high school)',
      'Tutoring in Biology and Chemistry',
    ],
  },
  {
    title: 'Appetizer Preparation Assistant',
    startDate: '06/14/2020',
    endDate: '07/15/2020',
    jobLocation: 'Locanda da Lorenzo - Cervia',
    descriptionList: [
      'Preparation of various appetizers',
      'Assisting the chef',
      'Assisting with grilling',
      'Sanitizing tools and counters',
    ],
  },
  {
    title: 'Volunteer Associate',
    startDate: '10/15/2019',
    endDate: '03/15/2020',
    jobLocation: 'L\'Oasi - Cesena',
    descriptionList: [
      'Maintenance of Windows and Mac computers (Hard Disk cloning with subsequent replacement, RAM replacement, Computer optimization as per privacy law)',
      "Creation of the cooperative's website",
      'On-site and remote assistance for problem resolution with hardware and software usage',
      'Installation and management of software (Microsoft Office, Antivirus, TeamViewer)',
      'Autonomous work management based on required objectives',
    ],
  },
  {
    title: 'Volunteer Associate',
    startDate: '07/01/2016',
    endDate: '01/31/2018',
    jobLocation: 'L\'Oasi - Cesena',
    descriptionList: [
      "Creation of the cooperative's website",
      'On-site and remote assistance for problem resolution with hardware and software usage',
      'Installation and management of software (Microsoft Office, Antivirus)',
    ],
  },
  {
    title: 'Intern',
    startDate: '01/15/2018',
    endDate: '02/03/2018',
    jobLocation: 'Gestiass - Cesena',
    descriptionList: [
      'Creation of Excel files',
      'IT support',
      'Claims management',
      'Usage of company platforms',
      'Phone and in-person interactions with clients',
    ],
  },
  {
    title: 'Intern',
    startDate: '05/22/2017',
    endDate: '06/17/2017',
    jobLocation: 'Auto Sat S.P.A - Cesena',
    descriptionList: [
      'IT support',
      'Inventory management',
      'Creation of graphics',
    ],
  },
]

const languageSelectorExp = document.getElementById('language')
let currentLanguage = languageSelectorExp.value

document.getElementById('language').addEventListener('change', onLanguageChange)

let experiences = currentLanguage === 'ita' ? itaExperiences : engExperiences

function onLanguageChange() {
  currentLanguage = languageSelectorExp.value
  experiences = currentLanguage === 'ita' ? itaExperiences : engExperiences
  loadGallery()
}

let mainExp = 0
let prevExp = experiences.length - 1
let nextExp = 1

let isAtLeftEnd = true
let isAtRightEnd = false

function loadGallery() {
  const mainView = document.getElementById('mainView')
  const leftView = document.getElementById('leftView')
  const rightView = document.getElementById('rightView')

  const currentExp = experiences[mainExp]

  const descriptionList = currentExp.descriptionList
    .map((item) => `<li>${item}</li>`)
    .join('')

  function translate(text) {
    const translations = {
      "Data d'inizio:": 'Start Date:',
      'Data di fine:': 'End Date:',
      'Luogo di lavoro:': 'Job Location:',
    }
    return currentLanguage === 'ita' ? text : translations[text] || text
  }

  mainView.innerHTML = `
    <h2>${currentExp.title}</h2>
    <div class="job-date-location-container">
      <div class="job-date-container">
        <p class="job-date">${translate("Data d'inizio:")}<br/>${
          currentExp.startDate
        }</p>
        <p class="job-date">${translate('Data di fine:')}<br/>${
          currentExp.endDate
        }</p>
      </div>
      <p class="job-location">${translate('Luogo di lavoro:')}<br/>${
        currentExp.jobLocation
      }</p>
    </div>
    <div class="job-description-box">
      <ul class="job-description">${descriptionList}</ul>
    </div>
  `
  // Aggiorna il testo delle descrizioni nel carosello
  leftView.innerHTML = `
    <h2>${experiences[prevExp].title}</h2>
  `

  rightView.innerHTML = `
    <h2>${experiences[nextExp].title}</h2>
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
    prevExp = mainExp
    mainExp = nextExp
    if (nextExp >= experiences.length - 1) {
      nextExp = 0
      isAtRightEnd = true
    } else {
      nextExp++
      isAtLeftEnd = false
    }

    const mainView = document.getElementById('mainView')
    const rightView = document.getElementById('rightView')
    mainView.classList.add('animate-slide-right')
    rightView.classList.add('animate-slide-right')

    setTimeout(() => {
      loadGallery()
      mainView.classList.remove('animate-slide-right')
      rightView.classList.remove('animate-slide-right')
    }, 500);
  }
}

function scrollLeft() {
  if (!isAtLeftEnd) {
    nextExp = mainExp
    mainExp = prevExp

    if (prevExp === 0) {
      prevExp = experiences.length - 1
      isAtLeftEnd = true
    } else {
      prevExp--
      isAtRightEnd = false
    }

    const mainView = document.getElementById('mainView')
    const leftView = document.getElementById('leftView')
    mainView.classList.add('animate-slide-left')
    leftView.classList.add('animate-slide-left')

    setTimeout(() => {
      loadGallery()
      mainView.classList.remove('animate-slide-left')
      leftView.classList.remove('animate-slide-left')
    }, 500);
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
