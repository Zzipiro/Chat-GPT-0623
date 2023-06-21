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
  [lastX, lastY] = [event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop];
}

// Funzione per disegnare una linea
function draw(event) {
  if (!isDrawing) return;

  const x = event.clientX - canvas.offsetLeft;
  const y = event.clientY - canvas.offsetTop;

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

// Inizializzazione
function init() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");

  // Aggiungi event listener per il click sui colori
//   document.getElementById("color1").addEventListener("click", function() {
//     setCurrentColor("(--primary-text-color)");
//   });
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

  // Aggiungi event listener per il pulsante "Cancella"
  document.getElementById("clear").addEventListener("click", clearCanvas);
}

// Inizializza l'applicazione
init();
