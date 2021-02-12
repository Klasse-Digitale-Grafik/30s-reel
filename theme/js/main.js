document.addEventListener("DOMContentLoaded", function() {

  const sites = window.siteData;

  let iframe = document.querySelector('iframe');
  const timebar = document.querySelector('#timebar');
  const progressBar = document.querySelector('#progress');
  const landingPage = document.querySelector('#landingpage');

  let shuffledList = [];
  let startReelTimeout = setTimeout(startReel, 15000);

  progressBar.addEventListener('animationend', switchToNext);
  landingPage.addEventListener('click', startReel);



  function startReel() {
    landingPage.remove();
    timebar.classList.remove('hidden');
    iframe.classList.remove('hidden');
    clearTimeout(startReelTimeout);

    switchToNext();
  }

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
    console.clear();
  }

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

});