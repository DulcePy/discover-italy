const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach((item) => {
  item.addEventListener("click", function () {
    menuItems.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");
  });
});

// updated the year dynamically
const yearElement = document.getElementById("year");
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;
