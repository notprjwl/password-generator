const slider = document.getElementById('my-slider')
const selectedNumber = document.getElementById('slider-value')
const passDisplay = document.getElementById('my-slider')
const inputBox = document.getElementById('input-box')

//slider range
slider.addEventListener('input', () => {
  const value = slider.value
  selectedNumber.textContent = value
  // console.log(slider.value)

});

//generate the password and add the password to the inputbox and reset the copy button to the original form i.e 'copied' => 'copy'
function generate() {
  const length = slider.value
  const password = generatePswd(length)
  inputBox.value = password
  document.getElementById('btn2').innerText = 'Copy'
  // console.log(password)

}

//generate password based on the characters
function generatePswd(length) {
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_+=<>?"
  let password = ""
  for(let i=0; i<length; i++){
    const randomIndex = Math.floor(Math.random()*charset.length)
    password+=charset[randomIndex]
  }
  return password
}

//copy the password in the input box and change the text of the button to 'copied'
function copy() {
  inputBox.select();
  navigator.clipboard.writeText(inputBox.value)
  document.getElementById('btn2').innerText = 'Copied!'
}
