// const hamburger = document.getElementById('js-hamburger');
// const nav = document.getElementById('js-nav');
// console.log(hamburger);
// const tesuto=document.querySelector('.ale');
// console.log(tesuto);

// tesuto.addEventListener('click',()=>{
// window.alert("アラート");

// })
// hamburger.addEventListener('click', () => {

//   nav.classList.toggle('is-active');
const hamburger = document.getElementById('js-hamburger');
const nav = document.getElementById('js-nav');
const overlay = document.getElementById('js-overlay');


// ========================================
// ハンバーガーメニュー
// ========================================

if (hamburger && nav && overlay) {

  // メニューを開く・閉じる
  hamburger.addEventListener('click', () => {

    hamburger.classList.toggle('is-active');
    nav.classList.toggle('is-active');
    overlay.classList.toggle('is-active');

    const isOpen = hamburger.classList.contains('is-active');

    hamburger.setAttribute('aria-expanded', isOpen);

  });


  // メニュー外をタップしたら閉じる
  overlay.addEventListener('click', () => {

    hamburger.classList.remove('is-active');
    nav.classList.remove('is-active');
    overlay.classList.remove('is-active');

    hamburger.setAttribute('aria-expanded', 'false');

  });


  // メニュー項目をクリックしたら閉じる
  const menuLinks = document.querySelectorAll('.hamburger-list a');

  menuLinks.forEach((link) => {

    link.addEventListener('click', () => {

      hamburger.classList.remove('is-active');
      nav.classList.remove('is-active');
      overlay.classList.remove('is-active');

      hamburger.setAttribute('aria-expanded', 'false');

    });

  });

}// ========================================
// ブランド動画
// ========================================

// 動画エリアを取得
const movieIntro = document.getElementById('js-movie-intro');

// 動画そのものを取得
const movie = document.getElementById('js-movie');

// スキップボタンを取得
const movieSkip = document.getElementById('js-movie-skip');

// 動画終了後のエリアを取得
const movieEnd = document.getElementById('js-movie-end');

// 「FOOTBALL HUBを見る」ボタンを取得
const movieEnter = document.getElementById('js-movie-enter');
movie.addEventListener('ended', () => {

  movieEnd.classList.add('is-active');

});
movieSkip.addEventListener('click', () => {

  movie.pause();

  movie.currentTime = movie.duration;

  movieEnd.classList.add('is-active');

});
movieEnter.addEventListener('click', () => {

  movieIntro.classList.add('is-hidden');

});
movieEnter.addEventListener('click', () => {

  // 動画を見たことをブラウザに保存
  localStorage.setItem('movieWatched', 'true');

  // 動画エリアを非表示
  movieIntro.classList.add('is-hidden');

});
