window.addEventListener('scroll', function(){
    const header = document.querySelector('nav');
    header.classList.toggle('sticky', window.scrollY > 0)
  })

  const ham = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const subList = document.querySelectorAll('.nav-links > li')


//   const nav = document.querySelector('nav');
//   const belowNav = nav.nextElementSibling;
//   belowNav.style.marginTop = nav.clientHeight + "px";

  
ham.addEventListener("click", function() {
    ham.classList.toggle("kin");
    navLinks.classList.toggle("view");
   // navList.classList.remove('show-list');
  })