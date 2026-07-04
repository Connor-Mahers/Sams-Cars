/* ==========================
   Sam's Cars - Script File
   Small enhancements only
   (no unnecessary chaos)
========================== */

/* Smooth page feel: subtle fade-in */
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 0.6s ease-in-out";
    
    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 50);
});


/* Highlight active nav link automatically */
const currentPage = window.location.pathname.split("/").pop();

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});


/* Simple scroll effect for header shadow */
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 4px 15px rgba(0,0,0,0.3)";
    } else {
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.2)";
    }
});


/* Form feedback (only if contact form exists) */
const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", () => {
        const button = form.querySelector("button");

        if (button) {
            button.textContent = "Sending...";
            button.disabled = true;
        }
    });
}