const video = document.getElementById('backgroundVideo');
const body = document.body;

video.addEventListener('canplaythrough', () => {
    video.style.display = 'block';
    body.style.background = 'none';
});

const list = document.querySelectorAll('.list');
const indicator = document.querySelector('.indicator');
const infoContent = document.getElementById('infoContent');
const infoContainer = document.querySelector('.info-container');
const muteToggle = document.getElementById('muteToggle');
const volumeIcon = muteToggle.querySelector('ion-icon');

function setIndicator() {
    const activeItem = document.querySelector('.list.active');
    const itemRect = activeItem.getBoundingClientRect();
    const navRect = document.querySelector('.navigation').getBoundingClientRect();
    const centerY = itemRect.top - navRect.top + (itemRect.height / 2);
    indicator.style.top = `${centerY}px`;
}

function activeLink() {
    list.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
    setIndicator();

    const clickedItem = this.querySelector('.icon ion-icon').getAttribute('name');
    showInfo(clickedItem);
}

function showInfo(iconName) {
    let content = '';
    switch (iconName) {
        case 'home':
            content = '<h2>Welcome to Home!</h2>';
            infoContainer.classList.remove('show');
            break;
        case 'game-controller':
            content = `<h2>Games:</h2>
                       <p>Genshin Impact</p>
                       <p>CS2, Standoff</p>
                       <p>Durak, Chess &amp; Checkers</p>`;
            break;
        case 'person-circle':
            content = `<h2>Bio</h2>
                      <p>Name: ????</p>
                      <p>Nickname: Assa.</p>
                      <p>Birthdate: 30.06.2008 (16 y. o.)</p>
                      <p>Hobbies: anime, coding...</p>`;
            break;
        case 'share-social':
            content = `<h2>My social links:</h2>
                       <p><a href="http://t.me/codermasochist">Telegram account</a>. (click)</p>
                       <p><a href="http://t.me/makimalove">Telegram channel</a>. (click)</p>
                       <p>🐈‍⬛️ My GitHub: <a href="http://GitHub.com/codermasochist">click here to go.</a></p>
                       <p><a href="http://GitHub.com/codermasochist/AsModules">My module</a>. (click)</p>
                       <p><a href="https://www.tiktok.com/@codermasochist?_t=ZT-8t3fMPmc6l4&_r=1">TikTok</a> &amp; <a href="https://www.instagram.com/codermasochist/profilecard/?igsh=MWlzMWd5Z2JwaDZ1Zw==">Inst</a>. (click)</p>
                       <p>Мои сигны 👀 — <a href="http://t.me/omnisex">click.</a></p>`;
            break;
        case 'briefcase':
            content = `<h2>Communication:</h2>
                       <p>If you haven't responded within 24h, you've been ignored.</p>
                       <p>Online: 11:00-22:00 (мск)</p>
                       <p>Before writing to me, please read/visit — <a href="https://nometa.xyz">nometa.xyz</a></p>`;
            break;
    }
    if (iconName !== 'home') {
        infoContent.innerHTML = content;
        infoContainer.classList.add('show');
    }
}

function toggleMute() {
    video.muted = !video.muted;
    volumeIcon.name = video.muted ? 'volume-mute' : 'volume-high';
}

list.forEach((item) => item.addEventListener('click', activeLink));
window.addEventListener('load', setIndicator);

muteToggle.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    toggleMute();
});
