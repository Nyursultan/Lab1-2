const number = document.querySelector('#inputNumber')
const firstNumber2 = document.querySelector('#inputFirstNumber2')
const secondNumber2 = document.querySelector('#inputSecondNumber2')
const inputFirstNumber3 = document.querySelector('#inputFirstNumber3')
const inputFirstNumber4 = document.querySelector('#inputFirstNumber4')
const inputFirstNumber5 = document.querySelector('#inputFirstNumber5')

const result = document.querySelector('#resultFirstExercise')
const result2 = document.querySelector('#resultSecondExercise')
const result3 = document.querySelector('#resultThirdExercise')
const result4 = document.querySelector('#resultFourthExercise')
const result5 = document.querySelector('#resultFifthExercise')

function getAge(age) {
    return (parseInt(age, 10) + 1).toString()
}

function getRemainder(a, b) {
    return (parseInt(a, 10) % parseInt(b, 10)).toString()
}

function faceControl(age) {
    if (age >= 18)
    {
        return "Welcome"
    }
    return "Отказ"
}

function getNextAge(age) {
    if (age == '')
    {
        return "0"
    }
    return (parseInt(age, 10) + 1).toString()
}

function canRide(height) {
    return height >= 140
}

number.addEventListener("input", () => {
    result.textContent = getAge(number.value)
})

secondNumber2.addEventListener("input", () => {
    result2.textContent = getRemainder(firstNumber2.value, secondNumber2.value)
})

inputFirstNumber3.addEventListener("input", () => {
    result3.textContent = faceControl(inputFirstNumber3.value)
})

inputFirstNumber4.addEventListener("input", () => {
    result4.textContent = getNextAge(inputFirstNumber4.value)
})

inputFirstNumber5.addEventListener("input", () => {
    result5.textContent = canRide(inputFirstNumber5.value)
})