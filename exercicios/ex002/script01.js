function verify() {
    var date = new Date()
    var year = date.getFullYear()
    var formYear = document.getElementById(`year`)
    var result = document.getElementById(`result`)

    if (formYear.value.length == 0 || formYear > year) {
        alert(`Erro. Verifique os dados e tente novamente.`)
    } else {
        var formSex = document.getElementsByName(`radsex`)
        var age = year - Number(formYear.value)
        var gen = ``
        var ageGroup = ``
        if (formSex[0].checked) {
            gen = `Homem`   
            if (age >= 0 && age <= 10) {
                ageGroup = `Criança`    
            }
            
        }
        result.innerHTML = `Detectamos ${gen} que é ${ageGroup} e tem ${age} anos.`
    }
     
}