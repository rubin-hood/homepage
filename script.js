async function ladeMarkdown(dateiname) {
    try {
      const response = await fetch(dateiname);
      if (!response.ok) throw new Error(`HTTP Fehler ${response.status}`);
      const text = await response.text();
      document.getElementById('content').innerHTML = marked.parse(text);
    } catch (error) {
      console.error(error);
      document.getElementById('content').innerHTML = `<p>Fehler beim Laden: ${dateiname}</p>`;
    }
  }
  
  function router() {
    const hash = location.hash.substring(1) || 'start';
    ladeMarkdown(`${hash}.md`);
  }
  
  // Router Events
  window.addEventListener('hashchange', router);
  window.addEventListener('load', router);
  
  // Menü Steuerung Mobile
  const menuToggle = document.querySelector('.menu-toggle');
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.overlay');
  
  menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('show');
  });
  
  overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('show');
  });
  