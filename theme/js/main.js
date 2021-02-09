const sites = window.siteData;
console.log( sites );

let iframe = document.querySelector('iframe');
const timebar = document.querySelector('#timebar');
const progressBar = document.querySelector('#progress');
let shuffledList = [];

progressBar.addEventListener('animationend', switchToNext);

switchToNext();

function switchToNext() {
  iframe.remove();
  iframe = document.createElement("iframe");

  if(!shuffledList.length) {
    shuffledList = shuffle(sites.slice(0));
  }

  progressBar.classList.remove('progressing');
  void progressBar.offsetWidth;

  document.body.insertBefore(iframe, timebar);
  iframe.frameBorder = "0";

  const nextSite = shuffledList.pop();
  iframe.src = nextSite.source;
  document.title = nextSite.title || 'hdgdl | xoxo';

  progressBar.classList.add('progressing');
}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
