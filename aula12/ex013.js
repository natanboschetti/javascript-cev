let now = new Date()
let dayWeek = now.getDay()
let hour = now.getHours()
let hour0 = now.getHours()

switch(dayWeek) {
    case 0:
        console.log(`Hoje é Domingo! E agora são ${hour} horas.`)
        break
    case 1:
        console.log(`Hoje é Segunda-Feira! E agora são ${hour} horas.`)
        break
    case 2:
        console.log(`Hoje é Terça-Feira! E agora são ${hour} horas.`)
        break
    case 3:
        console.log(`Hoje é Quarta-Feira! E agora são ${hour} horas.`)
        break   
    case 4:
        console.log(`Hoje é Quinta-Feira! E agora são ${hour} horas.`)
        break    
    case 5:
        console.log(`Hoje é Sexta-Feira! E agora são ${hour} horas.`)
        break
    case 6:
        console.log(`Hoje é Sábado! E agora são ${hour} horas.`)
        break
}

if (hour0 >= 6 && hour0 <= 12) {
    console.log(`Bom Dia!`)
} else if (hour0 > 12 && hour0 <= 18) {
    console.log(`Boa tarde!`)
} else if (hour0 > 18 && hour0 < 00) {
    console.log(`Boa noite!`)
} else if (hour0 >= 00 && hour0 < 6) {
    console.log(`Boa madrugada!`)
}