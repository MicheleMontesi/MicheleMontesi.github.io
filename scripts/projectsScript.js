const toggle = document.querySelector('.projects-toggle')
const menu = document.querySelector('.projects-menu')
const projectDetails = document.getElementById('proj-modal')
const projectImage = document.getElementById('proj-image')
const projectTitle = document.getElementById('proj-title')
const projectDescription = document.getElementById('proj-description')
const projectLink = document.getElementById('proj-link')

toggle.onclick = function () {
  menu.classList.toggle('active')
}

var modalBtns = document.querySelectorAll('.proj-bubble')

const itaProjectsData = [
  {
    title: 'Teleport with Radius Authentication',
    description: `Questo repository contiene il progetto che porterò come tesi di laurea. Si focalizza sull'integrazione di Teleport con RADIUS per abilitare l'autenticazione tramite le credenziali di un dominio Active Directory. Questa integrazione permette un accesso sicuro e controllato alle risorse di rete in un ambiente aziendale, migliorando la gestione delle autorizzazioni e la sicurezza dei dati. 
          `,
    imageSrc: '../icons/teleport.png',
    link: 'https://github.com/MicheleMontesi/teleport',
    id: 'proj-teleport',
  },
  {
    title: 'Swarm Directory Sync',
    description: `Questo repository contiene uno script Ansible che facilita la sincronizzazione di directory multiple utilizzando lsyncd all'interno di un contesto Docker Swarm. Lo script automatizza il processo di installazione, configurazione e gestione, consentendo un facile rilascio e controllo della sincronizzazione delle directory su un cluster di nodi Docker Swarm.
          `,
    imageSrc: '../icons/swarm.png',
    link: 'https://github.com/MicheleMontesi/swarm-directory-sync',
    id: 'proj-swarm',
  },
  {
    title: 'HPC School Project',
    description: `La presente ricerca presenta lo sviluppo di due versioni parallelizzate di un software, implementate utilizzando la libreria OpenMP e la libreria MPI rispettivamente. L’obiettivo della ricerca è quello di valutare i vantaggi prodotti dall’utilizzo della programmazione multiprocessore.
          `,
    imageSrc: '../icons/hpc.png',
    link: 'https://github.com/MicheleMontesi/HPC',
    id: 'proj-hpc',
  },
  {
    title: 'Java Database School Project',
    description: `Questo progetto è un'applicazione Java per la gestione di un database che automatizza la gestione di una comunità che offre servizi a pazienti psichiatrici, inclusi pazienti e dipendenti.
          `,
    imageSrc: '../icons/javadb.jpeg',
    link: 'https://github.com/MicheleMontesi/JavaDBProject',
    id: 'proj-db',
  },
  {
    title: 'UDP Networking Programming School Project',
    description: `Realizzazione di un applicativo client-server per il trasferimento di file che impieghi il servizio di rete senza connessione (UDP).
          Obiettivi del Software:
          - Connessione client-server senza autenticazione.
          - Visualizzazione sul client dei file disponibili sul server.
          - Download di un file dal server.
          - Upload di file su server.
          `,
    imageSrc: '../icons/udp.jpeg',
    link: 'https://github.com/MicheleMontesi/CS-118',
    id: 'proj-udp',
  },
]

const engProjectsData = [
  {
    title: 'Teleport with Radius Authentication',
    description: `This repository contains my thesis project, which I will present as my graduation thesis. It focuses on the integration of Teleport with RADIUS to enable authentication using Active Directory credentials. This integration allows for secure and controlled access to network resources in a corporate environment, enhancing permission management and data security.
          `,
    imageSrc: '../icons/teleport.png',
    link: 'https://github.com/MicheleMontesi/teleport',
    id: 'proj-teleport',
  },
  {
    title: 'Swarm Directory Sync',
    description: `This repository contains an Ansible script that facilitates the synchronization of multiple directories using lsyncd within a Docker Swarm context. The script automates the installation, setup, and configuration process, allowing for easy deployment and management of directory synchronization across a cluster of Docker Swarm nodes.
          `,
    imageSrc: '../icons/swarm.png',
    link: 'https://github.com/MicheleMontesi/swarm-directory-sync',
    id: 'proj-swarm',
  },
  {
    title: 'HPC School Project',
    description: `This research presents the development of two parallelized versions of a software, implemented using the OpenMP library and the MPI library, respectively. The objective of the research is to evaluate the advantages produced by the use of multiprocessor programming.
          `,
    imageSrc: '../icons/hpc.png',
    link: 'https://github.com/MicheleMontesi/HPC',
    id: 'proj-hpc',
  },
  {
    title: 'Java Database School Project',
    description: `This project is a Java application for managing a database that automates the operations 
          of a community offering services to psychiatric patients, including patients and employees.
          `,
    imageSrc: '../icons/javadb.jpeg',
    link: 'https://github.com/MicheleMontesi/JavaDBProject',
    id: 'proj-db',
  },
  {
    title: 'UDP Networking Programming School Project',
    description: `Development of a client-server application for file transfer using the connectionless network service (UDP).
          Software Objectives:
          - Client-server connection without authentication.
          - Displaying available files on the server at the client.
          - Downloading a file from the server.
          - Uploading files to the server.
          `,
    imageSrc: '../icons/udp.jpeg',
    link: 'https://github.com/MicheleMontesi/CS-118',
    id: 'proj-udp',
  },
]

document
  .getElementById('language')
  .addEventListener('change', onLanguageChangeProj)

let projectsData = currentLanguage === 'ita' ? itaProjectsData : engProjectsData

closeBtn.addEventListener('click', function () {
  let modal = document.getElementById('proj-modal')
  modal.style.display = 'none'
})

let closeProjModalBG = document.getElementById('proj-modal')
closeProjModalBG.addEventListener('click', function (event) {
  if (
    !event.target.classList.contains('modal-content') &&
    !event.target.classList.contains('modal-body') &&
    event.target.tagName !== 'P' &&
    event.target.tagName !== 'H2' &&
    event.target.tagName !== 'IMG' &&
    event.target.tagName !== 'A'
  ) {
    let modalId = this.getAttribute('id')
    closeModal(modalId)
  }
})

function onLanguageChangeProj() {
  currentLanguage = languageSelectorExp.value
  projectsData = currentLanguage === 'ita' ? itaProjectsData : engProjectsData
  loadProjects()
}

function loadProjects() {
  modalBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var btnId = btn.getAttribute('id')

      var project = projectsData.find(function (projectData) {
        return projectData.id === btnId
      })

      if (project) {
        projectImage.src = project.imageSrc
        projectTitle.textContent = project.title
        projectDescription.textContent = project.description
        projectLink.textContent =
          currentLanguage === 'ita' ? 'Visita la repo' : 'Go to the repository'
        projectLink.href = project.link
        projectDetails.style.display = 'flex'
      } else {
        projectDetails.style.display = 'none'
      }
    })
  })
}

loadProjects()
