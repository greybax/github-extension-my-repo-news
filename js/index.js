const highlightMyNews = () => {
  const userLogin = document.getElementsByTagName('meta')['user-login'].content.trim();
  const regex = new RegExp(userLogin, 'gi');

  let alertArray = document
    .getElementsByClassName('news')[0]
    .getElementsByClassName('body');

  for (alert of alertArray) {
    alert.innerText.match(regex)
      ? alert.style.background = '#E5E5E5' : '';
  }
};

(() => {
  highlightMyNews();

  // select the target node
  var target = document.getElementsByClassName('news')[0];

  // create an observer instance
  // https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
  var observer = new MutationObserver(function (mutations) {
    highlightMyNews();
  });

  // configuration of the observer:
  var config = { attributes: true, childList: true, characterData: true };

  // pass in the target node, as well as the observer options
  observer.observe(target, config);
})();