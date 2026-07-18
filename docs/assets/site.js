(() => {
  if (document.body.dataset.redirectRoot === 'true') {
    const target = navigator.language && navigator.language.toLowerCase().startsWith('ru') ? 'ru/' : 'en/';
    location.replace(new URL(target, location.href).toString());
  }
})();
