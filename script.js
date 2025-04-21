async function ladeMarkdown(dateiname) {
    try {
      const response = await fetch(dateiname);
      if (!response.ok) throw new Error("HTTP-Fehler " + response.status);
  
      const text = await response.text();
      document.getElementById('content').innerHTML = '<div>' + marked.parse(text) + '</div>';
    } catch (error) {
      document.getElementById('content').innerHTML = "<p>Fehler beim Laden der Seite: " + dateiname + "</p>";
      console.error(error);
    }
  }
  
  function router() {
    const hash = location.hash.substring(1) || 'start';
    ladeMarkdown(hash + '.md');
  }
  
  window.addEventListener('hashchange', router);
  window.addEventListener('load', router);
  