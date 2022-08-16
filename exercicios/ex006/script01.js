let number = document.querySelector(`input#number`)
let selector = document.querySelector(`select#selector`)
let result = document.querySelector(`div#result`)
let list = []

function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return true
    }
}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function addNumber() {
    if (isNumber(number.value) && !inList(number.value, list)) {
        list.push(Number(number.value))
        let item = document.createElement('option')
        item.text = `Valor ${number.value} adicionado`
        selector.appendChild(item)
        result.innerHTML = ''
    } else {
        alert(`Erro! Valor inválido ou já encontrado.`)
    }
    number.value = ''
    number.focus()
}

function finish() {
    if (list.length == 0) {
        alert(`Erro! Adicione um valor.`)
    } else {
        let total = list.length
        let larger = list[0]
        let smaller = list[0]
        for (let position in list) {
            if (list[position] > larger) {
                larger = list[position]
            } if (list[position] < smaller) {
                smaller = list[position]
            }
        }

        sum = 0
        for (let i = 0; i < list.length; i++) {
            sum += list[i] //a variável i vai estar sempre mudando, assim sendo posições do array.
            
        }

        result.innerHTML = ''
        result.innerHTML += `<p>Ao todo temos ${total} números adicionados.</p>`
        result.innerHTML += `<p>O maior valor adicionado foi ${larger}.</p>`
        result.innerHTML += `<p>O menor valor adicionado foi ${smaller}.</p>`
        result.innerHTML += `<p>Somando todos os valores, temos ${sum}.</p>`
    }
}