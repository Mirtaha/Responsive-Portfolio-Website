const header = document.querySelector("header");

 // sticky navbar

 function stickyNavbar(){
    header.classList.toggle("scrolled", window.scrollY > 0);  
 }

 stickyNavbar();

 window.addEventListener("scroll",stickyNavbar);

// reveal animation

let sr = ScrollReveal({
    duration: 2500,
    distance: "60px",
});
sr.reveal(".showcase-info",{ delay: 600});
sr.reveal(".showcase-image",{ origin:"top", delay: 700});
