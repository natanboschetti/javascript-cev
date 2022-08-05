var date = new Date()
var img = document.getElementById(`img0`)
let hour0 = document.getElementById(`hour`)
let hour = date.getHours()
hour0.innerHTML = `Agora são ${hour} horas.`

if (hour >= 6 && hour <= 12) {
    document.body.style.backgroundColor = "#b8b82082"
    img.src = "images/morning700px.jpg"
} else if (hour > 12 && hour <= 18) {
    document.body.style.backgroundColor = "#cb752abf"
    img.src = "images/afternoon700px.jpg"
} else if (hour > 18 && hour < 00) {
    document.body.style.backgroundColor = "#000000c5"
    img.src = "images/night700px.jpg"
}