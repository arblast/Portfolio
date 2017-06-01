const NUM_PROJECTS = 3;

const PAGES = {
  about: 1,
  projects: 2,
  contact: 2 + NUM_PROJECTS
};

document.addEventListener('DOMContentLoaded', function() {
  const nav = document.getElementById('nav');
  const navLinks = document.getElementById('nav-links');
  const pageDown = document.getElementById('pageDown');
  const navTop = document.getElementById('navTop');
  const navMid = document.getElementById('navMid');
  const navBot = document.getElementById('navBot');
  const arrow = document.getElementById('arrow');
  const arrowLeft = document.getElementById('arrowLeft');
  const arrowRight = document.getElementById('arrowRight');
  const recordCloudSS = document.getElementById('recordCloudSS');
  const CACSS = document.getElementById('CACSS');
  const PAESS = document.getElementById('PAESS');
  const linkedin = document.getElementById('linkedin');
  const git = document.getElementById('git');
  const height = window.innerHeight;
  let scrollTimer = null;
  let state = {navOpen: false};
  nav.onclick = () => { //function for turning navbar into cross and back
    if (state.navOpen) {
      nav.className = "square nav";
      navTop.className = "navline top";
      navMid.className = "navline mid";
      navBot.className = "navline bottom";
      state.navOpen = false;
      navLinks.style.visibility = "hidden";
      navLinks.style.opacity = 0;
    } else {
      nav.className = "square nav nav-open"
      navTop.className = "navline top-cross";
      navMid.className = "navline mid-cross";
      navBot.className = "navline bottom-cross";
      state.navOpen = true;
      navLinks.style.visibility = "visible";
      navLinks.style.opacity = 100;
    }
  };

  navLinks.onclick = (e) => {
    e.stopPropagation();
    let targetHeight = PAGES[e.target.id]*height;
    smoothScroll(targetHeight);
  }

  pageDown.onmouseenter = () => {  //scripts for animation of arrow
    arrow.className = "arrow arrow-bounce";
    arrowLeft.className = "arrow-line-left left-arrow-animation";
    arrowRight.className = "arrow-line-right right-arrow-animation";
  };

  pageDown.onmouseleave = () => {
    arrow.className = "arrow";
    arrowLeft.className = "arrow-line-left";
    arrowRight.className = "arrow-line-right";
  };

  pageDown.onclick = () => { //script for down arrow
    clearTimeout(scrollTimer);
    smoothScroll((closestSection()+1)*height);
  };

  //project screenshot links
  recordCloudSS.onclick = () => {
    window.open("https://www.record-cloud.com/");
  }

  CACSS.onclick = () => {
    window.open("https://chrome.google.com/webstore/detail/chrome-audio-capture/kfokdmfpdnokpmpbjhjbcabgligoelgp");
  }

  PAESS.onclick = () => {
    window.open("https://arblast.github.io/Puzzle-and-Elements/");
  }

  //Contact Links

  linkedin.onclick = () => {
    window.open("https://www.linkedin.com/in/justice-yen");
  }

  git.onclick = () => {
    window.open("https://github.com/arblast");
  }


  //SCROLLING

  function closestSection() { //function to find the closest section
    let currentHeight = window.pageYOffset;
    return Math.round(currentHeight/height);
  }

  function smoothScroll(targetHeight) { //function for smooth scrolling
    let currentHeight = window.pageYOffset;
    let interval = (targetHeight - currentHeight)/50;
    let count = 0;
    let scroll = setInterval(() => {
      currentHeight += interval;
      count += 1;
      window.scrollTo(0,currentHeight);
      if(count == 50) {
        window.scrollTo(0,targetHeight);
        clearInterval(scroll);
      }
    }, 10);
  };

  window.onscroll = () => {
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
      smoothScroll(closestSection()*height);
    }, 1500);
  };
});
