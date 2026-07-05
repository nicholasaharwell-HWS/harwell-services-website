// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close mobile menu after clicking a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Simple quote form message
const quoteForm = document.querySelector(".quote-form");

quoteForm.addEventListener("submit", (event) => {
  event.preventDefault();

  alert("Thank you! Your quote request has been received. We will contact you soon.");

  quoteForm.reset();
});

// Add shadow to header when scrolling
const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
