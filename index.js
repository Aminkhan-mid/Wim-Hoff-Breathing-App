import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js"
import { getDatabase,
         ref,
         set,
         get } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js"

const firebaseConfig = {
    databaseURL: "https://wim-hof-breathwork-app-default-rtdb.asia-southeast1.firebasedatabase.app/"
}


const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const referenceInDB = ref(database, "checkboxes")


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

const checkboxes = document.querySelectorAll(".checkboxList input[type='checkbox']")

checkboxes.forEach((checkbox, index) => {
    const checkboxId = `checkbox-${index + 1}`
    checkbox.id = checkboxId

    get(ref(database, `checkboxes/${checkboxId}`)).then((snapshot)=>{
        if(snapshot.exists()){
            checkbox.checked = snapshot.val()
        }

        checkbox.addEventListener("change", () => {
            set(ref(database, `checkboxes/${checkboxId}`), checkbox.checked)
        })
        


    })
})

