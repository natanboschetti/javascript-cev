function verify() {
    let date = new Date()
    let year = date.getFullYear()
    let formYear = document.getElementById(`year`)
    let result = document.getElementById(`result`)

    if (formYear.value.length == 0 || formYear > year) {
        window.alert(`Verifique os dados e tente novamente.`)
    } else {
        let formSex = document.getElementsByName(`radsex`)      
        let age = year - Number(formYear.value)  
        let gen = ``
        let img = document.createElement('img')
        img.setAttribute('id', 'img')
        if (formSex[0].checked) {
            gen = `Homem`
            if (age >= 0 && age <= 10) {
                img.setAttribute('src', 'images/baby-m.jpg')
            } else if (age < 21) {
                img.setAttribute('src', 'images/teen-m.jpg')
            } else if (age < 50) {
                img.setAttribute('src', 'images/adult-m.jpg')
            } else {
                img.setAttribute('src', 'images/elderly-m.jpg')
            }
        } else if (formSex[1].checked) {
            gen = `Mulher`
            if (age >= 0 && age <= 10) {
                img.setAttribute('src', 'images/baby-f.jpg')
            } else if (age < 21) {
                img.setAttribute('src', 'images/teen-f.jpg')
            } else if (age < 50) {
                img.setAttribute('src', 'images/adult-f.jpg')
            } else {
                img.setAttribute('src', 'images/elderly-f.jpg')
            }
        }
        result.innerHTML = `Detectamos ${gen} com ${age} anos.`
        result.appendChild(img)
    }

}