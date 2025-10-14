function submitForm(e) {
  e.preventDefault();
  const name = document.getElementById("name").value || "Hello";
  const message = encodeURIComponent(
    `Hello MS Maelys Solutions. I am ${name}. I would like to inquire about your services.`
  );
  const waUrl = `https://wa.me/243970018638?text=${message}`;
  window.open(waUrl, "_blank");
}

const waButton = document.getElementById("waButton");
const waModal = document.getElementById("waModal");
function closeWa() {
  waModal.setAttribute("aria-hidden", "true");
}
function openWa() {
  waModal.setAttribute("aria-hidden", "false");
}
waButton.addEventListener("click", openWa);
waModal.addEventListener("click", (e) => {
  if (e.target === waModal) closeWa();
});

document.addEventListener("DOMContentLoaded", function () {
  const vmCards = document.querySelectorAll(".vm-card");

  vmCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`; // Staggered animation
    card.classList.add("animate-up"); // Add animation class
  });
});

// Responsive menu
function toggleMenu() {
  document.getElementById("mobileNav").classList.toggle("open");
}
function closeMenu() {
  document.getElementById("mobileNav").classList.remove("open");
}
// Theme toggle
document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("themeToggle");
  themeToggle.onclick = function () {
    document.body.classList.toggle("dark-theme");
    localStorage.setItem(
      "theme",
      document.body.classList.contains("dark-theme") ? "dark" : "light"
    );
  };
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
  }
});
