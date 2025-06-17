// script.js

document.addEventListener("DOMContentLoaded", () => {
  // Highlight active nav link
  const currentPath = window.location.pathname.split("/").pop();
  document.querySelectorAll(".nav-links a").forEach(link => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    }
  });

  // Scroll to top on page load
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Optional: Simple testimonial slider logic (if you want to expand it later)
  // const testimonials = document.querySelectorAll(".testimonial-slider blockquote");
  // let current = 0;
  // setInterval(() => {
  //   testimonials[current].style.display = "none";
  //   current = (current + 1) % testimonials.length;
  //   testimonials[current].style.display = "block";
  // }, 5000);
});
