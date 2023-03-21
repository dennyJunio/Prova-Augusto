let tabela = document.querySelector('#tabela_cadastro')

tabela.addEventListener('dblclick', function(event){
    event.target.parentNode.classList.add('fadeOut')

    setTimeout(function(){
        event.target.parentNode.remove()
    },600)
})


