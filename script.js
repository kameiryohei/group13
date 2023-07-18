// ページが読み込まれたときに実行する処理
window.addEventListener('load', function () {
  // ナビゲーションメニューのアクティブなリンクにクラスを追加する
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });
  
  // スクロール時にヘッダーの背景を変更する
  const header = document.getElementById('header');
  
  window.addEventListener('scroll', function () {
    if (window.scrollY > 200) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
});
