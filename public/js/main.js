// accordion

var acc = document.getElementsByClassName("accordion");
var a;

for (a = 0; a < acc.length; a++) {
  acc[a].addEventListener("click", function() {
      this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}



// Change style of navbar on scroll
window.onscroll = () => {onScrollNav()};
function onScrollNav() {
    var navbar = document.querySelector("#myNavbar");
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        navbar.className = "topnav" + " w3-card" + " w3-animate-top";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top", "");
    }
}

// SideBar Mobile Navigation
$("#bars").on("click", () => {
    $("#mySidenav").fadeIn();
});

$("#closeBtn").on("click", () => {
    $("#mySidenav").hide();
})




// Buttons Playing Sound on Click
$("button").on("click", function () {
    var buttonName = this.id;
    playSound(buttonName);
})


function playSound(name) {
    var audio = new Audio("sounds/" + name +".mp3");
    audio.play();   
}

// Year
var d = new Date();
var year = d.getFullYear();
$("#year").html("COPYRIGHT &copy; " + year);


var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = $(".mySlides");
  var dots = $(".dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}



