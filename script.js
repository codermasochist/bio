// loader.js
document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('backgroundVideo');
    const loadingScreen = document.getElementById('loading-screen');

    // Когда видео полностью загрузилось
    video.addEventListener('canplaythrough', () => {
        loadingScreen.classList.add('hidden'); // Прячем экран загрузки
    });

    // Если видео долго грузится, убираем задержку (например, через 10 секунд)
    setTimeout(() => {
        if (!video.readyState) {
            loadingScreen.classList.add('hidden');
        }
    }, 10000); // 10 секунд
});
