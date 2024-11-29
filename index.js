const video = document.getElementById('myVideo')
const playBtn = document.getElementById('playBtn')
const pauseBtn = document.getElementById('pauseBtn')

const toggleBtn = document.getElementById('toggleBtn')




toggleBtn.addEventListener('click', () => {
    if(video.paused){
        video.play()
        toggleBtn.textContent = 'Pause'
        toggleBtn.style.backgroundColor = '#e76f51'
    } else {
        video.pause()
        toggleBtn.textContent = 'Play'
        toggleBtn.style.backgroundColor = '#c1121f'
    }
}) 
