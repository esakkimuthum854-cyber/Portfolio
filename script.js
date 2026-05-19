// HERO BUTTON

const heroBtn = document.querySelector(".hero button");

heroBtn.addEventListener("click", () => {

  document.querySelector("#projects")
  .scrollIntoView({
    behavior:"smooth"
  });

});




// NAVBAR ACTIVE EFFECT

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

  link.addEventListener("click", () => {

    navLinks.forEach(nav => {
      nav.style.color = "white";
    });

    link.style.color = "#38bdf8";

  });

});




// PROJECT CARD HOVER MESSAGE

const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {

  card.addEventListener("mouseenter", () => {

    card.style.boxShadow =
    "0 0 20px #38bdf8";

  });



  card.addEventListener("mouseleave", () => {

    card.style.boxShadow = "none";

  });

});