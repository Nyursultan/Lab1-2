const result = document.querySelector('#resultFirstExercise')
const result2 = document.querySelector('#resultSecondExercise')
const result3 = document.querySelector('#resultThirdExercise')
const result4 = document.querySelector('#resultFourthExercise')
const result5 = document.querySelector('#resultFifthExercise')
const result6 = document.querySelector('#resultSixthExercise')
const result8 = document.querySelector('#resultEighthExercise')
const result9 = document.querySelector('#resultNinthExercise')
const result10 = document.querySelector('#resultTenthExercise')

function sumArray(array) {
    let sum = 0;
    array.forEach(array => {
        sum += array
    })
    return sum
}

function getAboveZero(array) {
    const array2 = [];
    array.forEach(array => {
        if (array > 0) {
            array2.push(array)
        }
    })
    return array2
}

function getPonies(array, str) {
    array.forEach(array => {
        if (array == str) {
            string = array
        }
    })
    return string
}

function isTxIncluded(tx, bk) {

    return tx.includes(bk)
}

function getSizes(words) {
    const arraySize = []
    words.forEach(words => {
        arraySize.push(words.length)
    })
    return arraySize
}

function getWithSpaces(words) {
    return words.join(' ') + ', ' + words.join('').length
}

function getEpisodes(title, episodes) {
    const anime = {
        title: "Code Geass",
        episodes: 25
    }
    return "Аниме " + title + " включает " + episodes + " серий"
}

const triple = (number) => {
    return number * 3
}

const getAvgGlucose = (checks) => {
    let sum = 0;
    checks.forEach(check => {
        sum += check
    });
    return sum / checks.length
}


button1.addEventListener("click", () => {
    result.textContent = sumArray([1, 3, 5])
})

button2.addEventListener("click", () => {
    result2.textContent = getAboveZero([1, -3, -2, 4, 10])
})

pony.addEventListener("click", () => {
    result3.textContent = getPonies(['TwilightSparkle', 'RainbowDash', 
    'AppleJack', 'Rarity', 'Pinkie Pie', 'Fluttershy'], 'TwilightSparkle')
})

txIncluded.addEventListener("click", () => {
    result4.textContent = isTxIncluded(["0xaea0", "0x8f80", 
    "0xf3ad", "0x17ec"], "0x9e0a")
})

sizes.addEventListener("click", () => {
    result5.textContent = getSizes(["Moscow", "Coding", "School"])
})

withSpaces.addEventListener("click", () => {
    result6.textContent = getWithSpaces(["Moscow", "never", "sleep"])
})

episodes.addEventListener("click", () => {
    result8.textContent = getEpisodes({title: "Code Geass", episodes: 25})
})

tripleBtn.addEventListener("click", () => {
    result9.textContent = triple(2)
})

avgGlucose.addEventListener("click", () => {
    result10.textContent = getAvgGlucose([5.4, 8.1, 6.3, 4.9])
})

