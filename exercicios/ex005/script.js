function generate() {
    let number = Number(document.getElementById(`number`).value)
    let tableSelection = document.getElementById(`tableSelector`)
    if (number.length == 0) {
        alert(`Erro! Verifique os dados e tente novamente`)
    } else {
        tableSelection
        for (let c = 1; c < 11; c++) {
            let item = document.createElement(`option`)
            item.text = `${number} x ${c} = ${number * c}`
            tableSelection.appendChild(item)
        }
    }


}