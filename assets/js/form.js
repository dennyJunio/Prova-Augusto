let addAluno = document.querySelector('#addAluno')
addAluno.addEventListener('click', function (evento) {
    evento.preventDefault()
    let formAdd = document.querySelector('#formAdd')
    let aluno = ObterValorForm(formAdd)
    
    let erros = validarClientes(aluno)

    if(erros.length > 0){
        exibeMensagemDeErro(erros)
        return
    }

    cadastroControleTabela(aluno)

    let mensagemErro = document.querySelector("#mensagens-erro")
    mensagemErro.innerHTML = ''

    calculodePessoas()
    
})


////////////////////ROTEIRO DE VALIDAÇÃO///////////////////////////////
function validarClientes(aluno){
    let erros = []

    if(aluno.nome.length == 0){
        erros.push('O nome não pode estar em branco')
    } 
    if(aluno.data.length == 0){
        erros.push('A data não pode estar em branco')
    }
    if(aluno.nivel.length == 0){
        erros.push('O nivel não pode estar em branco')
    }
    if(aluno.professor.length == 0){
        erros.push('O professores não pode estar em branco')
    }
    if(aluno.status.length == 0){
        erros.push('O status não pode estar em branco')
    }
    
    return erros
}


function exibeMensagemDeErro(erros){
    let ul = document.querySelector('#mensagens-erro')
    ul.innerHTML = ''

    erros.forEach(function(erro){
        let li = document.createElement('li')
        li.textContent = erro 
        ul.appendChild(li) 
    })
}


function cadastroControleTabela(aluno) {
    let alunoTr = montarTr(aluno)
    let tabela = document.querySelector('#tabela_cadastro')
    tabela.appendChild(alunoTr)
}


function ObterValorForm(formAdd) {
    let aluno = {
        nome: formAdd.nome.value,
        data: formAdd.data.value,
        nivel: formAdd.nivel.value,
        professor: formAdd.professor.value,
        status: formAdd.status.value
    }
    return aluno
}

function montarTr(aluno) {
    let alunoTr = document.createElement('Tr')
    alunoTr.classList.add('aluno')
    
    alunoTr.appendChild(montarTd(aluno.nome, "info-nome"))
    alunoTr.appendChild(montarTd(aluno.data, "info-data"))
    alunoTr.appendChild(montarTd(aluno.nivel, "info-nivel"))
    alunoTr.appendChild(montarTd(aluno.professor, "info-professor"))
    alunoTr.appendChild(montarTd(aluno.status, "info-status"))

    return alunoTr
}
/////////////MONTAR AS NOVAS LINHAS//////////////////
function montarTd(dado, classe) { 
    let td = document.createElement('td')
    td.textContent = dado
    td.classList.add(classe)
    return td
}