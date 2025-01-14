window.addEventListener('scroll', function () {
    let video = document.querySelector('.video-background');
    let scrollPosition = window.scrollY;
    video.style.filter = `blur(${scrollPosition / 10}px)`;
});

let video = document.querySelector('.video-background');
video.addEventListener('loadeddata', function() {
    video.classList.add('loaded');
});
