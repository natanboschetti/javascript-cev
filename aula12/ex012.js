let now = new Date()
let hour = now.getHours()
console.log(`São ${hour} horas.`)
if (hour >= 6 && hour <= 12) {
    console.log(`Bom Dia!`)
} else if (hour > 12 && hour <= 18) {
    console.log(`Boa tarde!`)
} else if (hour > 18 && hour < 00) {
    console.log(`Boa noite!`)
} else if (hour >= 00 && hour < 6) {
    console.log(`Boa madrugada!`)
}