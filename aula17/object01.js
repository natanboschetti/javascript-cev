let amigo = {
	nome: 'José',
	sexo: 'Masculino',
	peso: 85.4,
	engordar(p = 0){ // A própria variável tem uma funcionalidade dentro dela
        console.log(`Engordou`)
        this.peso += p // This se refere ao objeto, amigo
    }
}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)