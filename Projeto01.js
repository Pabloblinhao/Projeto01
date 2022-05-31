const prompt = require("prompt-sync")();
console.clear();
const info = 'Responda as perguntas apenas com "sim" ou "não".';

const arrayPerguntas = ['você já ouviu falar desses rumores?',
                        'Se caso você achasse essa pedra, falaria pra alguém de muita confiança?',   
                        'Já tentou procurar por essa pedra?',
                        'Achou alguma pista?',
                        'Já viu esse mago ou guerreiro da espada?']

console.log('Olá meu jovem! vejo que chegou de uma viagem distante, notei pela suas vestias que é um patrulheiro. Seu nome por favor?');
const nomejogador = prompt('');


console.log('');
console.log(nomejogador + ' Você chegou na taverna do Falkirk, gostaria de se sentar e escutar histórias sobre nossa região?')
console.log(info);
let resposta1 = prompt('').toLowerCase();
console.log();

while(resposta1 != 'sim' && resposta1 != 'nao') {
    console.log('Desculpe, sua resposta não faz sentido!');
    console.log(info);
    console.log(nomejogador + ' Você chegou na taverna do Falkirk, gostaria de se sentar e escutar histórias sobre nossa região?')
    resposta1 = prompt('').toLowerCase();
    console.log();
}

if(resposta1 == 'sim') {
    console.clear();
    console.log('Há rumores em algumas das cidades vizinhas um jovem guerreiro empunhava uma espada com um certo tipo de mágia, mágia então escritas em uma pedra por antigos magos. Quem tiver acesso a essa escritura teria então o, conhecimento para forjar armas como a espada do jovem guerreiro.');
    console.log();
    
    let qtdSim = 0;


    for(let i = 0; i < arrayPerguntas.length; i++) { 
        console.log(arrayPerguntas[i]);
        let resposta = prompt('').toLowerCase();


        while(resposta != 'sim' &&  resposta != 'nao') {
            console.log('Desculpe, sua resposta não faz sentido!');
            console.log(info);
            console.log(arrayPerguntas[i]);
            resposta = prompt('').toLowerCase();
            console.log();
        }   
        
        if (resposta == 'sim') {
            qtdSim++;
        }
    };

    console.log();
    console.clear();
    
    if (qtdSim = 5) {
        console.log(nomejogador + ' Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações.');
    } else if (qtdSim = 4) {
        console.log(nomejogador + ' Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita.');
    } else if (qtdSim == 3) {
        console.log(nomejogador + ' Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco.');
    } else if (qtdSim == 2 || qtdSim == 1) {
        console.log(nomejogador + ' Você falha, mas ainda consegue fugir da situação.');
    } else {
        console.log(nomejogador + ' Você falha miseravelmente')
    }
    
} 