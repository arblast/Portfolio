document.addEventListener('DOMContentLoaded', function() {
  const nav = document.getElementById('nav');
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
      navTop.className = "navline top";
      navMid.className = "navline mid";
      navBot.className = "navline bottom";
      state.navOpen = false;
    } else {
      navTop.className = "navline top-cross";
      navMid.className = "navline mid-cross";
      navBot.className = "navline bottom-cross";
      state.navOpen = true;
    }
  };
  pageDown.onmouseenter = () => {
    arrow.className = "arrow arrow-bounce";
    arrowLeft.className = "arrow-line-left left-arrow-animation";
    arrowRight.className = "arrow-line-right right-arrow-animation";
  }

  pageDown.onmouseleave = () => {
    arrow.className = "arrow";
    arrowLeft.className = "arrow-line-left";
    arrowRight.className = "arrow-line-right";
  }

  pageDown.onclick = () => {
    window.scrollTo(0, height);
  }

});
