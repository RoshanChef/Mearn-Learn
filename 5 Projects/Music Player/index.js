let progress = document.querySelector('#progress');
let play = document.querySelector('.play');
let audio = document.querySelector('#audio');

audio.onloadeddata = () => {
    progress.max = audio.duration;
    progress.value = audio.currentTime;
    console.log(progress.value, progress.duration);
}

const playpause = () => {
    if (play.classList.contains('fa-play')) {
        audio.play();
        play.classList.remove('fa-play');
        play.classList.add('fa-pause');
    } else {
        audio.pause();
        play.classList.remove('fa-pause');
        play.classList.add('fa-play');
    }
}

if (!audio.pause()) {
    setInterval(() => {
        progress.value = audio.currentTime;
    }, 500);
}
progress.oninput = () => {
    audio.play();
    audio.currentTime = progress.value;

    play.classList.remove('fa-play');
    play.classList.add('fa-pause');
}


let volumm = document.querySelector('#volumm');

volumm.addEventListener('change', e => {
    audio.volume = volumm.value / 100;
})

let volume_ctrl = document.querySelector('.volume_ctrl');

volume_ctrl.addEventListener('click', (e) => {
    volume_ctrl.style.display = 'none';
    volumm.style.display = 'block';
});
