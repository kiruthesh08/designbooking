// for footer carousal
const carouselContent = document.querySelector(".carousel-content");
const paragraphs = carouselContent.querySelectorAll("p");
let currentIndex = 0;

function changeParagraph() {
  paragraphs[currentIndex].style.display = "none";
  currentIndex = (currentIndex + 1) % paragraphs.length;
  paragraphs[currentIndex].style.display = "block";
}

changeParagraph();

setInterval(changeParagraph, 6000);
/*
//   for sidenav
const sidenav = document.querySelector(".sidenav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 45) {
    sidenav.style.top = "0";
  } else {
    sidenav.style.top = "77px";
  }
});
*/
