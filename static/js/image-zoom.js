document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.post-content img');
    
    images.forEach(img => {
      img.classList.add('zoomable');
      
      img.addEventListener('click', function() {
        if (this.classList.contains('zoomed')) {
          this.classList.remove('zoomed');
        } else {
          this.classList.add('zoomed');
        }
      });
    });
  });

  // اسكربت لتفعيل القائمة على الشاشات الصغيرة 
// الكود الموجود في baseof.html
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const menuContainer = document.querySelector('.menu-container');

  // تأكد من أن هذه الأسطر صحيحة
  menuToggle.addEventListener('click', function () {
    menuContainer.classList.toggle('active');
    menuToggle.classList.toggle('active'); // هذا السطر قد يكون غير ضروري أو يسبب سلوكاً غير متوقع
  });
});