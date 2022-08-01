var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0

function increment() {
  currentNumber = currentNumber + 1
  if (currentNumber >= 0) {
    document.getElementById('currentNumber').style.color = 'black'
  }
  currentNumberWrapper.innerHTML = currentNumber
}

function decrement() {
  currentNumber = currentNumber - 1
  if (currentNumber < 0) {
    document.getElementById('currentNumber').style.color = 'red'
  }
  currentNumberWrapper.innerHTML = currentNumber
}
