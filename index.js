const form = document.getElementById('game-start-form')
const sCountNumber = document.getElementById('s-count')
const lCountNumber = document.getElementById('l-count')

let sCount = 0
let lCount = 0
const handleKeyDown = (event) => {
  if (event.code === 'KeyL') {
    lCount++
    lCountNumber.innerHTML = lCount
  }

  if (event.code === 'KeyS') {
    sCount++
    sCountNumber.innerHTML = sCount
  }
}
const startTimer = (duration) => {
  document.addEventListener('keypress', handleKeyDown)

  setTimeout(() => {
    document.removeEventListener('keypress', handleKeyDown)
    if (sCount > lCount) {
      sCountNumber.innerHTML = 'WINNER'
    } else if (lCount > sCount) {
      lCountNumber.innerHTML = 'WINNER'
    } else {
      sCountNumber.innerHTML = 'TIE'
      lCountNumber.innerHTML = 'TIE'
    }
  }, duration * 1000)
}

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const input = document.getElementById('duration')

  if (input.value > 0) {
    duration = input.value
    startTimer(input.value)
    input.value = undefined
  }
})
