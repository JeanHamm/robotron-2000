const robotron = document.querySelector('#robotron');
const controle = document.querySelectorAll('.controle-ajuste');
const estatisticas = document.querySelectorAll('[data-estatistica]')


const pecas = {
    "braco": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

// Cria uma função for com todos os array
controle.forEach(
    
    //Está puxando um elemento do array
    function(elemento){
        
        // Está dizendo que quando esse elemento for clicado vai executar a função
        elemento.addEventListener('click', function(evento){
            
            //Vai executar a função manupulaDados que está abaixo
            //1° evento = Dentro do evento, ou seja, local onde foi clicado, ele vai procurar a linha daquele elemento(target)
            //2° evento = vai puxar a linha do evento que foi clicado(target), e vai puxar o elemento pai daquela linha (parentNode);
            //usado o dataset para buscar o data que colocamos no Index para poder modificar o texto e não alterar o código
            manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
            
            //esta puxando na linha do código com o target e está puxando o data que foi colocado nas linhas, o peca
            atualizaEstatisticas(evento.target.dataset.pecas);
        })

        }
        //usada outra função para clilcar no + ou _
        
)
// Usado para somar (Primeiro a operação + ou -   E depois o local ex: braço, perna...)
function manipulaDados(operacao, controle){
    
    // Como a constate controle está dando o elemento pai que é controle ele vai buscar o elemento filho que tem nesse controle que é o '.controle-contador'
    const peca = controle.querySelector('[data-contador]');

    //faz a conta que se for '+' ele adiciona + 1 para o valor da peça, caso contrario retira 1 da peça
    if(operacao === '+'){
        peca.value = parseInt(peca.value) + 1;
    } else{
        peca.value = parseInt(peca.value) - 1;
     }} 

function atualizaEstatisticas(peca){
 
 //dentro da constate pecas, ele puxa o data que está no HTML que é o mesmo nome das arrays dentro de pecas
    console.log(pecas[peca]);

    estatisticas.forEach(function(elemento){
        console.log(elemento.dataset.estatistica)
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
        
    })
}