const hofAudio = document.getElementById('hofAudio')
const videoTwo = document.getElementById('breathVideo')


const toggleBtn = document.getElementById('toggleBtn')
const toggleBtnEnergy = document.getElementById('toggleBtnEnergy')

const takeBreathBtn = document.getElementById('quickBreath')
const breathContainer =   document.getElementById('breathContainer')



toggleBtn.addEventListener('click', () => {
    if(hofAudio.paused){
        hofAudio.play()
        toggleBtn.innerHTML = '<i class="fa-solid fa-pause"></i>'
        toggleBtn.style.backgroundColor = '#e76f51'
    } else {
        hofAudio.pause()
        toggleBtn.innerHTML = '<i class="fa-solid fa-play"></i>'
        toggleBtn.style.backgroundColor = '#c1121f'
    }
}) 

toggleBtnEnergy.addEventListener('click', function(){
    if(videoTwo.paused){
        videoTwo.play()
        toggleBtnEnergy.innerHTML = '<i class="fa-solid fa-pause"></i>'
    } else{
        videoTwo.pause()
           toggleBtnEnergy.innerHTML = '<i class="fa-solid fa-play"></i>'
    }
})


takeBreathBtn.addEventListener('click', () => {
    breathContainer.classList.toggle('hidden')
})