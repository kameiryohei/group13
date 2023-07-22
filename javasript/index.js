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
    
    var duration = 600; // スクロールのアニメーション時間（ミリ秒）
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

document.addEventListener("DOMContentLoaded", function() {
  var downButton = document.querySelector(".down");
  var duration = 600; // スクロールのアニメーション時間（ミリ秒）
  var isAnimating = false;

  downButton.addEventListener("click", function() {
    if (isAnimating) return;

    isAnimating = true;
    var startPosition = window.pageYOffset;
    var targetPosition = startPosition + getScrollAmount(); // デバイスによって異なるスクロール量を取得
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

  // デバイスによって異なるスクロール量を取得する関数
  function getScrollAmount() {
    if (isMobileDevice()) {
      return 895; // スマートフォン用のスクロール量を設定（ピクセル）
    } else {
      return 640; // パソコン用のスクロール量を設定（ピクセル）
    }
  }

  // モバイルデバイスかどうかを判定する関数（必要に応じてカスタマイズが必要かもしれません）
  function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }
});
