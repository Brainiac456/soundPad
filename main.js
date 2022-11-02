function playSound(event){
    const audio = document.querySelector(`audio[data-key ="${event.keyCode}"]`)
    const key = document.querySelector(`div[data-key ="${event.keyCode}"]`)
    console.log(key)
    key.classList.add('playing')
    audio.currentTime=0
    audio.play();
}


const keys=Array.from(document.querySelectorAll('.k'))
window.addEventListener('keydown',playSound)