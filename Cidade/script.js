
let choice = true
let contador = 0
let MediaSalario = 0
let MediaFilhos = 0
let MaiorSalario = 0
let SalarioMenor150 = 0

while(choice){
    let Salario = Number(prompt("Qual o seu Salário ?"))

    Salario > MaiorSalario && (MaiorSalario = Salario)
    Salario < 150 && (SalarioMenor150++)
    MediaSalario = MediaSalario + Salario
    Salario < 0 && (choice = false)

    let Filhos = Number(prompt("Quantos filhos você tem ?"))
    MediaFilhos = MediaFilhos + Filhos
    choice = prompt("Deseja continuar ?")
    choice == "Não" && (choice = false)
    contador++
}
    
MediaSalario = parseInt(MediaSalario / contador)
MediaFilhos = parseInt(MediaFilhos / contador)
SalarioMenor150 = (SalarioMenor150 * 100) / 100

console.log(`Média Salarial Da População $${MediaSalario}Reais, Média De Filhos ${MediaFilhos}, 
            Maior Salário ${MaiorSalario}, ${SalarioMenor150}% Das Pessoas tem um salário menor que 150 reais, 
            Quantidade de Pessoas Entrevistadas ${contador}`)

