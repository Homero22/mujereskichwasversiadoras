import './style.css'

window.openModal = function(modalId) {
  const dialog = document.getElementById(modalId);
  if (dialog) {
    dialog.showModal();
    // Prevenir el scroll del body
    document.body.style.overflow = 'hidden';
    
    // Lazy Load Iframes on open
    const lazyIframes = dialog.querySelectorAll('iframe[data-src]');
    lazyIframes.forEach(iframe => {
      if (!iframe.src || iframe.src === '') {
        iframe.src = iframe.getAttribute('data-src');
      }
    });
  }
};

window.closeModal = function(modalId) {
  const dialog = document.getElementById(modalId);
  if (dialog) {
    dialog.close();
    // Restaurar el scroll del body
    document.body.style.overflow = '';
    
    // Detener reproducción de videos quitando y poniendo el src
    const iframes = dialog.querySelectorAll('iframe');
    iframes.forEach(iframe => {
      const src = iframe.src;
      iframe.src = '';
      // Retrasar levemente la recarga del data-src para que no suene de fondo
      setTimeout(() => {
         iframe.removeAttribute('src'); 
      }, 100);
    });
  }
};

// Cerrar modal al hacer clic en el backdrop
document.querySelectorAll('dialog').forEach(dialog => {
  dialog.addEventListener('click', (e) => {
    const dialogDimensions = dialog.getBoundingClientRect();
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      window.closeModal(dialog.id);
    }
  });
});
