

let slideIndex = 1;


// opn/close modal

function openModal() {
  document.getElementById("mylightbox").style.display = "flex";
  // document.body.style.overflow="hidden";
  document.getElementById("photogrid").style.opacity = 0.3;
}

function closeModal() {
  document.getElementById("mylightbox").style.display = "none";
  document.body.style.overflow="auto";
  document.getElementById("photogrid").style.opacity = 1;
}





function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  const slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}


// controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showprev(){
    document.getElementById("prev").style.opacity="1";

}
function hideprev(){
  
document.getElementById("prev").style.opacity="0";
}
function shownext(){
    document.getElementById("next").style.opacity="1";

}
function hidenext(){
    document.getElementById("next").style.opacity="0";
}

function prevarrowfocus() {
  document.getElementById("prev").style.opacity="1";
}

showSlides(slideIndex);

// scroll parallax



window.addEventListener('scroll', function() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  console.log("Arse");
  document.body.style.backgroundPosition = 'center ' + (scrollTop * 0.75) + 'px';
});




