const videoOne = document.getElementById('myVideo')
const videoTwo = document.getElementById('breathVideo')


const toggleBtn = document.getElementById('toggleBtn')
const toggleBtnEnergy = document.getElementById('toggleBtnEnergy')

const takeBreathBtn = document.getElementById('quickBreath')
const breathContainer =   document.getElementById('breathContainer')



toggleBtn.addEventListener('click', () => {
    if(videoOne.paused){
        videoOne.play()
        toggleBtn.textContent = 'Pause'
        toggleBtn.style.backgroundColor = '#e76f51'
    } else {
        videoOne.pause()
        toggleBtn.textContent = 'Play'
        toggleBtn.style.backgroundColor = '#c1121f'
    }
}) 

toggleBtnEnergy.addEventListener('click', function(){
    if(videoTwo.paused){
        videoTwo.play()
    } else{
        videoTwo.pause()
    }
})


takeBreathBtn.addEventListener('click', () => {
    breathContainer.classList.toggle('hidden')
})