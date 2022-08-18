let number = document.querySelector(`input#number`)
let selector = document.querySelector(`select#selector`)
let result = document.querySelector(`div#result`)
let list = []

function isNumber(n) { // verifica se é número
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return true
    }
}

function inList(n, l) { // verifica se a lista ja contém o valor
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function addNumber() { //adiciona número de acordo com as condições que são configuradas através de functions
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

function cleanNumber() { //limpar toda a página, result + select
    list = []
    result.innerHTML = ''
    selector.innerText = ''
    number.value = ''
    number.focus()
}

function finish() { //mostra todos os resultados
    if (list.length == 0) {
        alert(`Erro! Adicione um valor.`)
    } else {
        let total = list.length
        let larger = list[0]
        let smaller = list[0]
        for (let position in list) { //qual o menor e maior valor
            if (list[position] > larger) {
                larger = list[position]
            } if (list[position] < smaller) {
                smaller = list[position]
            }
        }
        sum = 0
        for (let i = 0; i < list.length; i++) { // soma
            sum += list[i] //a variável i vai estar sempre mudando, assim sendo posições do array.
            
        }
        average = sum / total
        result.innerHTML = ''
        result.innerHTML += `<p>Ao todo temos ${total} números adicionados.</p>`
        result.innerHTML += `<p>O maior valor adicionado foi ${larger}.</p>`
        result.innerHTML += `<p>O menor valor adicionado foi ${smaller}.</p>`
        result.innerHTML += `<p>Somando todos os valores, temos ${sum}.</p>`
        result.innerHTML += `<p>A média dos valores digitados é ${average}.</p>`
    }
}
list = []