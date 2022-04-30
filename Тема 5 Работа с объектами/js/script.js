const result = document.querySelector('#resultFirstExercise')
const result2 = document.querySelector('#resultSecondExercise')
const result3 = document.querySelector('#resultThirdExercise')
const result4 = document.querySelector('#resultFourthExercise')

// 1
const etherium = {
    usd: 2811,
    rub: 200612,
    eur: 2666
}

function getRate(value){
    return etherium[value]
}

// 2
const user = {
    lang: "JavaScript",
    course: 'third'
}

const values = Object.values(user)

function getValues(values){
    for (let i = 0; i < values.length; i++) {
        values[i] = values[i].toUpperCase()
    }
    return values
}

// 3
let flat = 24
const address = {
    street: 'Yakutskaya',
    building: 2,
    flat
}

const entries = Object.entries(address)

function getInfo(entries) {
    return entries
}

// 4
const obj1 = {
    id: 1,
    type: 'text',
    length: 20
}

const obj2 = {
    name: 'object2',
    type: 'number'
}

function joinArrays(obj1, obj2) {
    const concat = {...obj1, ...obj2}
    return JSON.stringify(concat)
}

select1.addEventListener("click", () => {
    result.textContent = getRate(select1.value)
})

button2.addEventListener("click", () => {
    result2.textContent = getValues(values)
})

button3.addEventListener("click", () => {
    result3.textContent = getInfo(entries)
})

button4.addEventListener("click", () => {
    result4.textContent = joinArrays(obj1, obj2)
})


