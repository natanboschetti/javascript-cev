/*
function ParOrImpar(number) {
    if (number % 2 == 0) {
        return console.log(`Par`)
    } else {
        return console.log(`Impar`)
    }
}
let result = ParOrImpar(11)

function sum(n1=0, n2=0) {
    return n1 + n2
}
console.log(sum(2, 5))

let v = function(x) {
    return x*2
}

console.log(v(5))


function fatorial(n) {
    let fatorial = 1
    for (let c = n; c > 1; c--) {
        fatorial *= c
    }
    return fatorial
}

console.log(fatorial(5))
*/

function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n - 1)
    }
}
console.log(fatorial(5))