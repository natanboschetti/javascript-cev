function count() {
    let start = document.getElementById(`start`)
    let end = document.getElementById(`end`)
    let step = document.getElementById(`step`)
    let result = document.getElementById(`result`)

    if (start.value.length == 0 || end.value.length == 0 || end.value.length == 0) {
        alert(`Erro! Verifique os dados e tente novamente.`)
    } else {
        result.innerHTML = `Contando: `
        let startNumber = Number(start.value)
        let endNumber = Number(end.value)
        let stepNumber = Number(step.value)
        if (stepNumber <= 0) {
            alert(`Passo inválido! Considerando PASSO 1`)
            p = 1
        }

        if (startNumber < endNumber) { //contagem crescente
            for (let c = startNumber; c <= endNumber; c += stepNumber) {
                result.innerHTML += `${c} `
            }
        } else { //contagem regressiva
            for (let c = startNumber; c >= endNumber; c -= stepNumber) {
                result.innerHTML += `${c} `
            }
        }
    }
}   