
let choice = true
let contador = 0

let MaiorValor = 0
let MenorValor = 0
let MediaValores = 0

while(choice){
    let Modelo = prompt("Qual o nome do Carro ?")
    let Valor = Number(prompt("Qual o Valor Do Carro ?"))
    MediaValores += Valor
    MenorValor = Valor
    Valor < MenorValor && (MenorValor = Valor)

    Valor > MaiorValor && (MaiorValor = Valor)

    choice = prompt("Deseja continuar ?")
    choice == "Não" && (choice = false)
    contador++
}

MediaValores = parseInt(MediaValores / contador)

console.log(`Média dos valores dos carro é ${MediaValores}, Carro mais caro foi ${MaiorValor}, Mais barato foi ${MenorValor}`)

