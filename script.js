// 例: クリックしたリンクのテキストをコンソールに出力する
const links = document.querySelectorAll('a');
links.forEach(link => {
  link.addEventListener('click', () => {
    console.log(link.innerText);
  });
});
