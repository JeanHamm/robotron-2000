const robotron = document.querySelector('#robotron');
const controle = document.querySelectorAll('.controle-ajuste');

controle.forEach(function(elemento){
    elemento.addEventListener('click', function(evento){
        manipulaDados(evento.target.textContent, evento.target.parentNode);
    })
})

function manipulaDados(operacao, controle){
    const peca = controle.querySelector('.controle-contador');

    if(operacao === '+'){
        peca.value = parseInt(peca.value) + 1;
    } else{
        peca.value = parseInt(peca.value) - 1;
     }}