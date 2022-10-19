// for github pages
function redirect() {
  const params = new URLSearchParams(window.location.search.slice(1)).get('_p');
  if (!params) {
    return;
  }
  window.location.href = params;
}

redirect();

export {};
