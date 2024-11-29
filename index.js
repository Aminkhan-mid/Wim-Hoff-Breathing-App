const video = document.getElementById('myVideo')
const playBtn = document.getElementById('playBtn')
const pauseBtn = document.getElementById('pauseBtn')

const toggleBtn = document.getElementById('toggleBtn')




toggleBtn.addEventListener('click', () => {
    if(video.paused){
        video.play()
        toggleBtn.textContent = 'Pause'
    } else {
        video.pause()
        toggleBtn.textContent = 'Play'
    }
    const totalMinutes = Math.floor(video.duration / 60)
    const currentMintues = Math.floor(video.currentTime / 60)

    document.getElementById('showTime').innerHTML = `Total Duration: ${totalMinutes} minutes`
    document.getElementById('showTime').innerHTML =`Current Time: ${currentMintues} minutes`
}) 

video.addEventListener('loadedmetadata', () => {
    const totalMinutes = Math.floor(video.duration / 60)
    return totalMinutes
})

video.addEventListener('timeupdate', () => {
    const currentMintues = Math.floor(video.currentTime / 60)
    return currentMintues
})