const PAGES = {
  about: 1
}

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
  const height = window.innerHeight;
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
  pageDown.onmouseenter = () => {  //scripts for animation of arrow
    arrow.className = "arrow arrow-bounce";
    arrowLeft.className = "arrow-line-left left-arrow-animation";
    arrowRight.className = "arrow-line-right right-arrow-animation";
  }

  pageDown.onmouseleave = () => {
    arrow.className = "arrow";
    arrowLeft.className = "arrow-line-left";
    arrowRight.className = "arrow-line-right";
  }

  pageDown.onclick = () => { //script for down arrow
    let currentHeight = window.pageYOffset;
    let targetHeight = height;
    let interval = (height - currentHeight)/50;
    let count = 0;
    if(currentHeight < targetHeight) {
      let smoothScroll = setInterval(() => {
        console.log(currentHeight);
        currentHeight += interval;
        count += 1;
        window.scrollTo(0,currentHeight);
        if(count == 50) {
          window.scrollTo(0,height);
          clearInterval(smoothScroll);
        }
      }, 10);
    }
  }

});
