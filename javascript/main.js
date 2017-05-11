document.addEventListener('DOMContentLoaded', function() {
  const nav = document.getElementById('nav');
  const navTop = document.getElementById('navTop');
  const navMid = document.getElementById('navMid');
  const navBot = document.getElementById('navBot');
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

});
