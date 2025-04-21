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