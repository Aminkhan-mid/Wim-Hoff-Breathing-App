const hofAudio = document.getElementById('hofAudio')
const videoTwo = document.getElementById('breathVideo')


const toggleBtn = document.getElementById('toggleBtn')
const toggleBtnEnergy = document.getElementById('toggleBtnEnergy')




toggleBtn.addEventListener('click', () => {
    if(hofAudio.paused){
        hofAudio.play()
        toggleBtn.innerHTML = '<i class="fa-solid fa-pause"></i>'
        toggleBtn.style.backgroundColor = '#eb5e28'
        toggleBtn.style.color = 'black'
    } else {
        hofAudio.pause()
        toggleBtn.textContent = 'Play'
        toggleBtn.style.backgroundColor = '#1b2021'
        toggleBtn.style.color = 'white'
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

const takeBreathBtn = document.getElementById('quickBreath')

takeBreathBtn.addEventListener('click', function(){
    let breathContainer = document.getElementById('breathContainer')

    if(!breathContainer){
        renderBreathWork()
        breathContainer = document.getElementById('breathContainer')
    }
    breathContainer.classList.toggle('hidden')
})

