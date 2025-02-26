const openModalBtns = document.querySelectorAll(".bubble");

const bubbleData = {
  openModal1: {
    itaTitle: "Linguaggi di Programmazione",
    engTitle: "Programming Language",
    itaList: [
      "Python",
      "Java",
      "C",
      "C#",
      ".NET",
      "ASP.NET",
      "Flutter",
      "SvelteKit Framwork",
      "Capacitor (Ionic)",
      "Scripting Bash da terminale",
      "Sviluppatore Web",
      "Node.js",
      "REST API",
      "Angular",
      "Assembly x86",
      "Database: MySQL (base)",
      "Redis",
      "Go/Golang",
      "Sviluppo di applicazioni mobile",
      "Conoscenza di base di programmazione con OpenMP, MPI",
    ],
    engList: [
      "Python",
      "Java",
      "C",
      "C#",
      ".NET",
      "ASP.NET",
      "Flutter",
      "SvelteKit Framwork",
      "Capacitor (Ionic)",
      "Bash scripting from terminal",
      "Web Developer",
      "Node.js",
      "REST API",
      "Angular",
      "Assembly x86",
      "Database: MySQL (base)",
      "Redis",
      "Go/Golang",
      "Mobile application development",
      "Basic knowledge of programming with OpenMP, MPI",
    ],
  },
  openModal2: {
    itaTitle: "Sistemi Operativi",
    engTitle: "Operating Systems",
    itaList: ["Linux", "Windows", "MacOS", "Android"],
    engList: ["Linux", "Windows", "MacOS", "Android"],
  },
  openModal3: {
    itaTitle: "Strumenti Informatici",
    engTitle: "IT Tools",
    itaList: [
      "Docker (Docker compose, Docker Swarm, Docker container)",
      "Sviluppo di servizi SSO (Single Sign-On)",
      "Keycloak",
      "MinIO",
      "Teleport",
      "Ansible",
      "Active Directory",
      "Freeipa",
      "Pacchetto Office (Excel, Word, Powerpoint, ...)",
    ],
    engList: [
      "Docker (Docker compose, Docker Swarm, Docker container)",
      "MinIO",
      "SSO (Single Sign-On) service development",
      "Keycloak",
      "Teleport",
      "Ansible",
      "Active Directory",
      "Freeipa",
      "Office Package (Excel, Word, Powerpoint, ...)",
    ],
  },
};

document
  .getElementById("language")
  .addEventListener("change", onLanguageChangeSkills);

function onLanguageChangeSkills() {
  currentLanguage = languageSelectorExp.value;
}

function loadSkills() {
  openModalBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const modal = document.getElementById("modalSkills");
      const modalTitle = modal.querySelector("h2"); // Selezione dell'elemento del titolo in italiano
      const modalList = modal.querySelector("ul"); // Selezione dell'elemento della lista in italiano

      const bubbleId = this.getAttribute("id");
      const data = bubbleData[bubbleId];

      const skillsList = currentLanguage === "ita"
        ? data.itaList
        : data.engList;

      console.log(currentLanguage);
      modalTitle.textContent = currentLanguage === "ita"
        ? data.itaTitle
        : data.engTitle;
      modalList.innerHTML = skillsList
        .map((item) => `<li><p>${item}</p></li>`)
        .join("");

      modal.style.display = "flex";
    });
  });
}

openModalBtns.forEach((bubble) => {
  const randomDuration = Math.random() * (15 - 4) + 4;
  bubble.style.animationDuration = `${randomDuration}s`;
});

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "none";
}

const closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", function () {
  const modal = document.getElementById("modalSkills");
  modal.style.display = "none";
});

const closeModalBG = document.getElementById("modalSkills");
closeModalBG.addEventListener("click", function (event) {
  console.log("entro");
  if (
    !event.target.classList.contains("modal-content") &&
    !event.target.classList.contains("modal-body") &&
    event.target.tagName !== "LI" &&
    event.target.tagName !== "UL" &&
    event.target.tagName !== "P" &&
    event.target.tagName !== "H2"
  ) {
    const modalId = this.getAttribute("id");
    closeModal(modalId);
  }
});

loadSkills();
