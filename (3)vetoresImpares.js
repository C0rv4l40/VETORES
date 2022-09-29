//Cria um programa onde o usuário digite 5 números. Ao terminar de digitar os números, mostrar uma lista somente com números ímpares digitados e a soma desses números.
let numeros = []
let valor, impares=0

    for (i = 0; i < 5; i++) {
        valor = Number(prompt('insira um número'))
     if (valor % 2 == 1){
        numeros.push(valor)
        impares += valor
    } 
    }
    alert(`os numeros são ${numeros}\na soma é ${impares}`)