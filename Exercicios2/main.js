const escritas = document.querySelectorAll('.resultado');
const botao = document.querySelector('#calcular');

botao.addEventListener('click', function(){
    escritas[0].innerHTML = "Fui clicado";
    escritas[1].innerHTML = "Fui clicado";
})
