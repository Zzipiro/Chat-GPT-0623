// Funzione per impostare il tema in base alla preferenza dell'utente
function setThemePreference() {
    var html = document.getElementsByTagName('html')[0];
    var systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var storedTheme = localStorage.getItem('theme');
  
    // Verifica se è già stata effettuata una scelta di tema in precedenza
    if (storedTheme) {
      html.classList.add(storedTheme);
    } else {
      // Imposta il tema in base alla preferenza del sistema
      if (systemTheme) {
        html.classList.add('dark');
      }
    }
  
    // Modifica il testo del titolo della card "Tema" in base al tema
    var temaCard = document.querySelector('.tema');
    var themeTitle = temaCard.querySelector('.card-text');
  
    if (html.classList.contains('dark')) {
      themeTitle.textContent = 'Modalità risveglio';
    } else {
      themeTitle.textContent = 'Prova la modalità letargo';
    }
  }
  
  // Funzione per cambiare il tema
  function toggleDarkMode() {
    var html = document.getElementsByTagName('html')[0];
    html.classList.toggle('dark');
  
    // Salva la scelta del tema nel localStorage
    var currentTheme = html.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
  
    // Modifica il testo del titolo della card "Tema" in base al tema
    var temaCard = document.querySelector('.tema');
    var themeTitle = temaCard.querySelector('.card-text');
  
    if (html.classList.contains('dark')) {
      themeTitle.textContent = 'Modalità risveglio';
    } else {
      themeTitle.textContent = 'Prova la modalità letargo';
    }
  }
  
  // Aggiungi un gestore di eventi al caricamento della pagina
  window.addEventListener('DOMContentLoaded', setThemePreference);
  
  // Aggiungi un gestore di eventi al clic sulla card "tema"
  var temaCard = document.querySelector('.tema');
  temaCard.addEventListener('click', toggleDarkMode);
  