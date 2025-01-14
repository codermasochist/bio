window.addEventListener('scroll', function () {
    // Находим элемент с классом .video-background
    let video = document.querySelector('.video-background');

    // Получаем текущую прокрутку страницы
    let scrollPosition = window.scrollY;

    // Применяем размытие в зависимости от прокрутки
    video.style.filter = `blur(${scrollPosition / 10}px)`; // Увеличиваем размытие с прокруткой
});
