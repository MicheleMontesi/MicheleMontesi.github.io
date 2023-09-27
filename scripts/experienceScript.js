const galleryView = document.getElementById('galleryView')
galleryView.style.display = 'flex'

const imgObject = [
  {
    title: 'Immagine 1',
    startDate: '01/09/2023',
    endDate: '10/09/2023',
    description: "Questo è il corpo della descrizione per l'immagine 1.",
  },
  {
    title: 'Immagine 2',
    startDate: '01/09/2023',
    endDate: '10/09/2023',
    description: "Questo è il corpo della descrizione per l'immagine 2.",
  },
  {
    title: 'Immagine 3',
    startDate: '01/09/2023',
    endDate: '10/09/2023',
    description: "Questo è il corpo della descrizione per l'immagine 3.",
  },
  {
    title: 'Immagine 4',
    startDate: '01/09/2023',
    endDate: '10/09/2023',
    description: "Questo è il corpo della descrizione per l'immagine 4.",
  },
  {
    title: 'Immagine 5',
    startDate: '01/09/2023',
    endDate: '10/09/2023',
    description: "Questo è il corpo della descrizione per l'immagine 5.",
  },
  // Aggiungi altre descrizioni per le tue altre immagini
]

let mainImg = 0
let prevImg = imgObject.length - 1
let nextImg = 1

let isAtLeftEnd = true
let isAtRightEnd = false

function loadGallery () {
  const mainView = document.getElementById('mainView')
  const leftView = document.getElementById('leftView')
  const rightView = document.getElementById('rightView')

  const currentImg = imgObject[mainImg]

  mainView.innerHTML = `
    <h2>${currentImg.title}</h2>
    <div class="job-date-container">
      <p class="job-date">Data d'inizio: ${currentImg.startDate}</p>
      <p class="job-date">Data di fine: ${currentImg.endDate}</p>
    </div>
    <div class="job-description-box">
      <p class="job-description">${currentImg.description}</p>
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
