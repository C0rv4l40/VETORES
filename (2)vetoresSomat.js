//Desenvolva um programa que o usuário digite 10 números, ao final mostre o valor que resultado do somatório da primeira metade dos números menos o somatório da segunda metade.
let numeros = []
let total

    for (i = 0; i < 10; i++) {
            numeros.push(Number(prompt('insira um número')))
         }
    total = (Number(numeros[0]) + Number(numeros[1]) + Number(numeros[2]) + Number(numeros[3]) + Number(numeros[4])) - (Number(numeros[5]) + Number(numeros[6]) + Number(numeros[7]) + Number(numeros[8]) + Number(numeros[9]))

alert(`o total é ${total}`)