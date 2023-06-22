// Funzione per impostare il tema
function setTheme(theme) {
    // Aggiungi o rimuovi la classe 'dark' all'elemento root
    document.documentElement.classList.toggle('dark', theme === 'dark');
  
    // Aggiorna le immagini in base al tema
    updateImages(theme);
  
    // Aggiorna la favicon in base al tema
    updateFavicon(theme);
  }
  
  // Funzione per aggiornare le immagini in base al tema
  function updateImages(theme) {
    // Seleziona tutte le immagini con classi "orsetto--img", "about--img" e "tema--img"
    // const logoImg = document.querySelectorAll('.logo');
    const temafImg = document.querySelectorAll('.tema--footer');
  
    // Imposta le nuove sorgenti delle immagini in base al tema
    // const logoSrc = theme === 'dark' ? 'img/icona-light.svg' : 'img/icona-dark.svg';
    const temafSrc = theme === 'dark' ? 'img/icona-tema-l.svg' : 'img/icona-tema-d.svg';
  
    // Aggiorna le sorgenti delle immagini
    temafImg.forEach(img => img.src = temafSrc);
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
  
  // Verifica se è stato selezionato un tema in precedenza nel localStorage
  const storedTheme = localStorage.getItem('theme');
  
  // Imposta il tema iniziale (light se non è stato selezionato un tema in precedenza)
  setTheme(storedTheme || 'light');
  
  const temaFooter = document.querySelector('.tema--footer');
  temaFooter.addEventListener('click', () => {
    // Inverti il tema attuale (light -> dark, dark -> light)
    const currentTheme = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
  
    // Salva il tema selezionato nel localStorage
    localStorage.setItem('theme', currentTheme);
  
    // Imposta il nuovo tema
    setTheme(currentTheme);
  });
  