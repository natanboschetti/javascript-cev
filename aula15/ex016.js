let numbers = [5, 4, 3, 2, 1]
/*
numbers.sort()
numbers.push(6)
console.log(`O vetor tem ${numbers.length} posições.`)
/*for (let position = 0; position < numbers.length; position++) {
    console.log(numbers[position])
}
for (let position in numbers) {
    console.log(numbers[position])
}
*/
let position = numbers.indexOf(8)
if (position == -1) {
    console.log(`O valor não foi encontrado`)
} else {
    console.log(`O valor 5 se encontra na posição ${position}`)
}
