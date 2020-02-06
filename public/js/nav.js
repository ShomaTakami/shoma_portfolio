var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav-wrap").style.top = "0";
  } else {
    document.getElementById("nav-wrap").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
};
