window.addEventListener("scroll", function() {
    var headerMenu = document.querySelector(".header-site-menu");
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
    if (scrollTop > 0) {
      headerMenu.classList.add("scrolled");
    } else {
      headerMenu.classList.remove("scrolled");
    }
  });

  
  document.addEventListener("DOMContentLoaded", function() {
    var downButton = document.querySelector(".down");
    var scrollAmount = 100; // 下に下がる量を指定（ピクセル）
    var duration = 500; // スクロールのアニメーション時間（ミリ秒）
    var isAnimating = false;
  
    downButton.addEventListener("click", function() {
      if (isAnimating) return;
  
      isAnimating = true;
      var startPosition = window.pageYOffset;
      var targetPosition = startPosition + scrollAmount;
      var startTime = null;
  
      function scrollAnimation(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = timestamp - startTime;
        var percentage = Math.min(progress / duration, 1);
        var scrollDistance = startPosition + (targetPosition - startPosition) * percentage;
        window.scrollTo(0, scrollDistance);
  
        if (progress < duration) {
          window.requestAnimationFrame(scrollAnimation);
        } else {
          isAnimating = false;
          startTime = null;
        }
      }
  
      window.requestAnimationFrame(scrollAnimation);
    });
  });
  
// Hamburger Menu
function toggleMenu() {
  var menu = document.querySelector('.header-site-menu');
  menu.classList.toggle('active');
  var hamburgerMenu = document.querySelector('.hamburger-menu');
  hamburgerMenu.classList.toggle('menu-open');
  
}

