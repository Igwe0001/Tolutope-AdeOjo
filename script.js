window.addEventListener("scroll", function () {
  const header = document.querySelector("nav");
  header.classList.toggle("sticky", window.scrollY > 0);
});

const ham = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const subList = document.querySelectorAll(".tweak > li");

//   const nav = document.querySelector('nav');
//   const belowNav = nav.nextElementSibling;
//   belowNav.style.marginTop = nav.clientHeight + "px";

ham.addEventListener("click", function () {
  ham.classList.toggle("kin");
  navLinks.classList.toggle("view");
  // navList.classList.remove('show-list');
});

subList.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("view");
    ham.classList.remove('kin');
  });
});

  let swiper = new Swiper(".mySwiper", {
    slidesPerView: 'auto',
    spaceBetween: 40,
    centeredSlides: true,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
