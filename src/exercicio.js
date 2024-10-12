// Array de objetos para alunos.
const alunos = [
    {nome: 'Nicolas', nota: 7},
    {nome: 'Ronaldo', nota: 5},
    {nome: 'Juninho', nota: 3},
    {nome: 'Raimundo', nota: 8}
]


// Primeira forma com 'function()' tradicional.
function bomAluno() {
    const passaram = alunos.filter(function(item) {
        return item.nota >= 6
    })

    passaram.forEach(aluno => {
        console.log(`O aluno: ${aluno.nome}. passou com a nota: ${aluno.nota}. Pelo método function normal!`)
    })

    return passaram
}

bomAluno()


// Segunda forma com 'arrow function'.
const bomAlunoII = () => {
    return alunos.filter(aluno => aluno.nota >= 6)
    .map(aluno => 
        console.log(`O aluno: ${aluno.nome} passou com a nota: ${aluno.nota}. Pelo método arrow function!`)
    )
}

bomAlunoII()