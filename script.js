const cards = document.querySelectorAll('.service-card');

window.addEventListener('scroll', () => {

  cards.forEach(card => {

    const position = card.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if(position < screenPosition){
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }

document.getElementById("year").innerHTML =
new Date().getFullYear();window.addEventListener("scroll", function () {
  let elements = document.querySelectorAll(".scroll");

  elements.forEach(el => {
    let position = el.getBoundingClientRect().top;
    let screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      el.classList.add("visible");
    }
  });
});
