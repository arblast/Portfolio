const NUM_PROJECTS = 3;

const PROJECTS = {
  "Record Cloud": 3,
  "Chrome Audio Capture": 4,
  "Puzzle and Elements": 5
}

document.addEventListener('DOMContentLoaded', function() {
  const body = document.getElementById("body");
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
  const projectList = document.getElementById('project-list');
  const resumeLink = document.getElementById('resumeLink');
  let scrollTimer = null;
  let state = {navOpen: false};

  const PAGES = {
    about: document.getElementById('aboutStart'),
    projects: document.getElementById('projectStart'),
    contact: document.getElementById('contactStart')
  };

  nav.onclick = () => { //function for turning navbar into cross and back
    if (state.navOpen) {
      nav.style.width = "6vw";
      navTop.className = "navline top";
      navMid.className = "navline mid";
      navBot.className = "navline bottom";
      state.navOpen = false;
      navLinks.style.visibility = "hidden";
      navLinks.style.opacity = 0;
    } else {
      let navOpenWidth = navLinks.clientWidth;
      nav.style.width = `calc(8vw + ${navOpenWidth}px)`;
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
    let heightDiff = PAGES[e.target.id].getBoundingClientRect().top;
    smoothScroll(heightDiff);
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
    smoothScroll(PAGES.about.getBoundingClientRect().top);
  };

  //project nav

  const projectNavs = projectList.getElementsByClassName("link-container");
  const previewList = document.getElementsByClassName("project-preview");
  const projectPages = document.getElementsByClassName("project");
  for (let i=0; i<3;i++) {
    projectNavs[i].onmouseover = () => {previewList[i].style.opacity = 100};
    projectNavs[i].onmouseleave = () => {previewList[i].style.opacity = 0};
    projectNavs[i].onclick = () => {
      body.className = "scroll-stop";
    }
  }

  //resume link

  resumeLink.onclick = () => {
    window.open("https://drive.google.com/open?id=0BweA6dWQFmfseTkxOURfdUxjWWs");
  }

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

  // function closestSection() { //function to find the closest section
  //   let currentHeight = window.pageYOffset;
  //   return Math.round(currentHeight/height);
  // }

  function smoothScroll(diff) { //function for smooth scrolling
    let currentHeight = window.pageYOffset;
    let targetHeight = currentHeight + diff;
    let interval = diff/50;
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

  // window.onscroll = () => {
  //   clearTimeout(scrollTimer);
  //   scrollTimer = setTimeout(() => {
  //     smoothScroll(closestSection()*height);
  //   }, 1500);
  // };
});
