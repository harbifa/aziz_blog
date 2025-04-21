// اسكربت لتفعيل القائمة على الشاشات الصغيرة 
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menuContainer = document.querySelector(".menu-container");

    menuToggle.addEventListener("click", function () {
      menuContainer.classList.toggle("active");
      menuToggle.classList.toggle("active");
    });
  });