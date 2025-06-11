AOS.init({
  duration: 800,
  once: true
});

document.getElementById("burger").addEventListener("click", () => {
  document.getElementById("nav-menu").classList.toggle("open");
});
