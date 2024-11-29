const hofAudio = document.getElementById('hofAudio')
const videoTwo = document.getElementById('breathVideo')


const toggleBtn = document.getElementById('toggleBtn')
const toggleBtnEnergy = document.getElementById('toggleBtnEnergy')

const takeBreathBtn = document.getElementById('quickBreath')
const closeQuickBreath = document.getElementById('closeQuickBreath')



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



takeBreathBtn.addEventListener('click', function(){
   document.getElementById('breathContainer').style.display = 'block'
})

closeQuickBreath.addEventListener('click', function (){
    document.getElementById('breathContainer').style.display = 'none'
    location.reload()
})