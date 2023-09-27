document.getElementById("outer3").addEventListener("click", toggleState3);
    
function toggleState3() {
  let galleryView = document.getElementById("galleryView")
  let tilesView = document.getElementById("tilesView")
  let outer = document.getElementById("outer3");
  let slider = document.getElementById("slider3");
  let tilesContainer = document.getElementById("tilesContainer");
  if (slider.classList.contains("active")) {
    slider.classList.remove("active");
    outer.classList.remove("outerActive");
    galleryView.style.display = "flex";
    tilesView.style.display = "none";
    
    while (tilesContainer.hasChildNodes()) {
      tilesContainer.removeChild(tilesContainer.firstChild)
      }  
  } else {
    slider.classList.add("active");
    outer.classList.add("outerActive");
    galleryView.style.display = "none";
    tilesView.style.display = "flex";
     
    for (let i = 0; i < imgObject.length - 1; i++) {
      let tileItem = document.createElement("div");
      tileItem.classList.add("tileItem");
      tileItem.style.background =  "url(" + imgObject[i] + ")";
      tileItem.style.backgroundSize = "contain";  
      tilesContainer.appendChild(tileItem);      
    }
  };
}

let imgObject = [
  {
    title: "Immagine 1",
    startDate: "01/09/2023",
    endDate: "10/09/2023",
    description: "Questo è il corpo della descrizione per l'immagine 1."
  },
  {
    title: "Immagine 2",
    startDate: "01/09/2023",
    endDate: "10/09/2023",
    description: "Questo è il corpo della descrizione per l'immagine 1."
  },
  {
    title: "Immagine 3",
    startDate: "01/09/2023",
    endDate: "10/09/2023",
    description: "Questo è il corpo della descrizione per l'immagine 1."
  },
  {
    title: "Immagine 4",
    startDate: "01/09/2023",
    endDate: "10/09/2023",
    description: "Questo è il corpo della descrizione per l'immagine 1."
  },
  {
    title: "Immagine 5",
    startDate: "01/09/2023",
    endDate: "10/09/2023",
    description: "Questo è il corpo della descrizione per l'immagine 1."
  },
  // Aggiungi altre descrizioni per le tue altre immagini
];

let mainImg = 0;
let prevImg = imgObject.length - 1;
let nextImg = 1;

function loadGallery() {

  let mainView = document.getElementById("mainView");
  let leftView = document.getElementById("leftView");
  let rightView = document.getElementById("rightView");

  let currentImg = imgObject[mainImg];

  mainView.innerHTML = `
    <h2>${currentImg.title}</h2>
    <p>Data d'inizio: ${currentImg.startDate}</p>
    <p>Data di fine: ${currentImg.endDate}</p>
    <p>${currentImg.description}</p>
  `;
  
  // Aggiorna il testo delle descrizioni nel carosello
  leftView.innerHTML = `
    <h2>${imgObject[prevImg].title}</h2>
    <p>Data d'inizio: ${imgObject[prevImg].startDate}</p>
    <p>Data di fine: ${imgObject[prevImg].endDate}</p>
    <p>${imgObject[prevImg].description}</p>
  `;
  
  rightView.innerHTML = `
    <h2>${imgObject[nextImg].title}</h2>
    <p>Data d'inizio: ${imgObject[nextImg].startDate}</p>
    <p>Data di fine: ${imgObject[nextImg].endDate}</p>
    <p>${imgObject[nextImg].description}</p>
  `;
};

function scrollRight() {
  
  prevImg = mainImg;
  mainImg = nextImg;
  if (nextImg >= (imgObject.length -1)) {
    nextImg = 0;
  } else {
    nextImg++;
  }; 
  loadGallery();
};

function scrollLeft() {
  nextImg = mainImg
  mainImg = prevImg;
   
  if (prevImg === 0) {
    prevImg = imgObject.length - 1;
  } else {
    prevImg--;
  };
  loadGallery();
};

document.getElementById("navRight").addEventListener("click", scrollRight);
document.getElementById("navLeft").addEventListener("click", scrollLeft);
document.getElementById("rightView").addEventListener("click", scrollRight);
document.getElementById("leftView").addEventListener("click", scrollLeft);
document.addEventListener('keyup',function(e){
    if (e.keyCode === 37) {
    scrollLeft();
  } else if(e.keyCode === 39) {
    scrollRight();
  }
});

loadGallery();




