const togglePassword = document.querySelectorAll('#pwd-btn');
const passwordBox = document.querySelectorAll('#pwd');

function toggleVisibility() {
    if (passwordBox[0].type == 'text'){
        passwordBox.forEach(el => el.type = "password");
        togglePassword.forEach(el => el.classList.add('fa-eye-slash'))
        togglePassword.forEach(el => el.classList.remove('fa-eye'))
    }
    else if (passwordBox[0].type == 'password'){
        passwordBox.forEach(el => el.type = "text");
        togglePassword.forEach(el => el.classList.add('fa-eye'))
        togglePassword.forEach(el => el.classList.remove('fa-eye-slash'))
    }
    else {console.log('Something wrong!')}
}

// Slide
var slideshow1 = document.getElementById("slideshow1");
slideshow1.currentSlideIndex = 1;
showSlides(slideshow1.currentSlideIndex, slideshow1);

var slideshow2 = document.getElementById("slideshow2");
slideshow2.currentSlideIndex = 1;
showSlides(slideshow2.currentSlideIndex, slideshow2);


function plusSlides(n, slideshow) {
  showSlides(slideshow.currentSlideIndex += n, slideshow);
}

function currentSlide(n, slideshow) {
  showSlides(slideshow.currentSlideIndex = n, slideshow);
}

function showSlides(n, slideshow) {
  var i;
  var slides = slideshow.getElementsByClassName("mySlides");
  var dots = slideshow.getElementsByClassName("dot");
  if (n > slides.length) {slideshow.currentSlideIndex = 1}    
  if (n < 1) {slideshow.currentSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("dot-active", "");
  }
  slides[slideshow.currentSlideIndex-1].style.display = "block";  
  dots[slideshow.currentSlideIndex-1].className += "dot-active";
}