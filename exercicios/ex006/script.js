let inputNumber = document.getElementById(`number`)
let selector = document.getElementById(`tableSelection`)
let result = document.getElementById(`result`)
let values = []

function isNumber(inputNumber) {
    if (Number(inputNumber) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inSelector(inputNumber, values) {
    if (values.indexOf(Number(inputNumber)) != -1) {
        return true
    } else {
        return false
    }
}

function addNumber() {
    if (isNumber(inputNumber.value) && !inSelector(inputNumber.value, values)) {
        values.push(Number(inputNumber.value))
    } else {
        alert(`Valor inválido ou já encontrado na lista.`)
    }
}



