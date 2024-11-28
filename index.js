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
}) 

// const checkboxList = document.getElementById('checkboxList')
// const totalDays = 31

// for(let i = 1; i <= totalDays; i++){
//     // const label = document.createElement('label')
//     // label.setAttribute('for', `day${i}`)
//     // label.textContent = `Day ${i}`

//     const checkbox = document.createElement('input')
//     checkbox.type = 'checkbox'
//     checkbox.id = `day${i}`
//     checkbox.name = `day${i}`

//     // checkboxList.appendChild(label)
//     checkboxList.appendChild(checkbox)
//     checkboxList.appendChild(document.createElement('br'))
// }