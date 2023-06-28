// Funzione per impostare il tema
function setTheme(theme) {
  // Aggiungi o rimuovi la classe 'dark' all'elemento root
  document.documentElement.classList.toggle('dark', theme === 'dark');

  // Imposta il testo dell'h4 della card "tema"
  const temaCard = document.querySelector('.card.tema');
  const temaText = temaCard.querySelector('.testo--tema');
  temaText.textContent = theme === 'dark' ? 'Modalità risveglio' : 'Modalità letargo';

  // Aggiorna le immagini in base al tema
  updateImages(theme);

  // Aggiorna la favicon in base al tema
  updateFavicon(theme);

  // Aggiorna l'immagine di sfondo del grainy background
  updateGrainyBackground(theme);

}



// Funzione per aggiornare le immagini in base al tema
function updateImages(theme) {

  // Seleziona tutte le immagini con classi "orsetto--img", "about--img" e "tema--img"
  const orsettoImg = document.querySelectorAll('.orsetto--img');
  const aboutImg = document.querySelectorAll('.about--img');
  const temaImg = document.querySelectorAll('.tema--img');

  // Imposta le nuove sorgenti delle immagini in base al tema
  const orsettoSrc = theme === 'dark' ? 'img/icona-orsetto-t.svg' : 'img/icona-orsetto-a.svg';
  const aboutSrc = theme === 'dark' ? 'img/icona-about-d.svg' : 'img/icona-about-l.svg';
  const temaSrc = theme === 'dark' ? 'img/icona-light.svg' : 'img/icona-dark.svg';
  
  // Aggiorna le sorgenti delle immagini
  orsettoImg.forEach(img => img.src = orsettoSrc);
  aboutImg.forEach(img => img.src = aboutSrc);
  temaImg.forEach(img => img.src = temaSrc);
}

// Funzione per aggiornare la favicon in base al tema
function updateFavicon(theme) {
  // Seleziona l'elemento della favicon
  const favicon = document.querySelector('link[rel="icon"]');

  // Imposta la nuova sorgente della favicon in base al tema
  const faviconSrc = theme === 'dark' ? 'img/favicon-t.svg' : 'img/favicon-a.svg';

  // Aggiorna la sorgente della favicon
  favicon.href = faviconSrc;
}

// Funzione per aggiornare l'immagine di sfondo del grainy background
function updateGrainyBackground(theme) {
  // Seleziona l'elemento con la classe ".grainy-background"
  const grainyBackground = document.querySelector('.grainy-background');

  // Verifica se l'elemento ha già un selettore ":after"
  const grainyBackgroundAfter = grainyBackground.querySelector(':after');

  // Crea un nuovo elemento "style" per contenere le regole CSS
  const styleElement = document.createElement('style');

  // Imposta la nuova URL dell'immagine in base al tema
  const backgroundImageURL = theme === 'dark' ? 'url("img/noise-d.png")' : 'url("img/noise-l.png")';

  // Crea le regole CSS per l'immagine di sfondo
  const cssRules = `
    .grainy-background:after {
      background-image: ${backgroundImageURL};
    }
  `;

  // Aggiungi le regole CSS al contenuto dello stile
  styleElement.innerHTML = cssRules;

  // Rimuovi eventuali stili precedenti
  if (grainyBackgroundAfter) {
    grainyBackgroundAfter.remove();
  }

  // Aggiungi il nuovo elemento "style" alla pagina
  document.head.appendChild(styleElement);
}


// Verifica se è stato selezionato un tema in precedenza nel localStorage
const storedTheme = localStorage.getItem('theme');

// Imposta il tema iniziale (light se non è stato selezionato un tema in precedenza)
setTheme(storedTheme || 'light');

// Aggiungi un listener al click sulla card "tema"
const temaCard = document.querySelector('.card.tema');
temaCard.addEventListener('click', () => {
  // Inverti il tema attuale (light -> dark, dark -> light)
  const currentTheme = document.documentElement.classList.contains('dark') ? 'light' : 'dark';

  // Salva il tema selezionato nel localStorage
  localStorage.setItem('theme', currentTheme);

  // Imposta il nuovo tema
  setTheme(currentTheme);
});