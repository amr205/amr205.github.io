window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var body = document.getElementById("body");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
		body.classList.add("has-navbar-fixed-top");
  } else {
    navbar.classList.remove("sticky");
		body.classList.remove("has-navbar-fixed-top");

  }
}
