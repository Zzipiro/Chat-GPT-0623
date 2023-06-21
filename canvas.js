// Variabili globali per la gestione del disegno
let canvas;
let ctx;
let currentColor = "#e5894a";
let isDrawing = false;
let lastX = 0;
let lastY = 0;

// Funzione per impostare il colore corrente
function setCurrentColor(color) {
  currentColor = color;
}

// Funzione per iniziare il disegno
function startDrawing(event) {
  isDrawing = true;
  [lastX, lastY] = getCursorPosition(event);
}

// Funzione per ottenere le coordinate del cursore, tenendo conto della posizione del canvas
function getCursorPosition(event) {
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;
  const offsetX = event.clientX - rect.left;
  const offsetY = event.clientY - rect.top;
  const x = offsetX * scaleX;
  const y = offsetY * scaleY;
  return [x, y];
}

// Funzione per disegnare una linea
function draw(event) {
  if (!isDrawing) return;

  const [x, y] = getCursorPosition(event);

  ctx.setTransform(1, 0, 0, 1, 0, 0); // Ripristina la matrice di trasformazione
  
  ctx.strokeStyle = currentColor;
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  ctx.lineWidth = 10;

  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(x, y);
  ctx.stroke();

  [lastX, lastY] = [x, y];
}

// Funzione per terminare il disegno
function endDrawing() {
  isDrawing = false;
}

// Funzione per cancellare tutto il disegno
function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function init() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");

  // Imposta la risoluzione del canvas
  const canvasWidth = canvas.offsetWidth;
  const canvasHeight = canvas.offsetHeight;
  canvas.width = canvasWidth * window.devicePixelRatio;
  canvas.height = canvasHeight * window.devicePixelRatio;

  // Imposta lo scaling del canvas
  ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  
  // Restituisci la dimensione iniziale del canvas alla dimensione corretta
  // canvas.style.width = `${canvasWidth}px`;
  // canvas.style.height = `${canvasHeight}px`;


// Abilita l'antialiasing
ctx.imageSmoothingEnabled = true;

  // Aggiungi event listener per il click sui colori
  /*document.getElementById("color1").addEventListener("click", function() {
    setCurrentColor("#ff0000");
  });*/
  document.getElementById("color2").addEventListener("click", function() {
    setCurrentColor("#e5894a");
  });
  document.getElementById("color3").addEventListener("click", function() {
    setCurrentColor("#70c4ba");
  });

  // Aggiungi event listener per il disegno sul canvas
  canvas.addEventListener("mousedown", startDrawing);
  canvas.addEventListener("mousemove", draw);
  canvas.addEventListener("mouseup", endDrawing);
  canvas.addEventListener("mouseleave", endDrawing);

  // Aggiungi event listener per il disegno su dispositivi touch
  canvas.addEventListener("touchstart", function(event) {
    event.preventDefault();
    startDrawing(event.touches[0]);
  });
  canvas.addEventListener("touchmove", function(event) {
    event.preventDefault();
    draw(event.touches[0]);
  });
  canvas.addEventListener("touchend", endDrawing);
  canvas.addEventListener("touchcancel", endDrawing);

  // Aggiungi event listener per il pulsante "Cancella"
  document.getElementById("clear").addEventListener("click", clearCanvas);
}



// Inizializza l'applicazione
init();


