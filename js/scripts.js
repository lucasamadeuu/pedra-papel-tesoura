var resultado = document.getElementById('resultado');
var bot = document.getElementById('bot');

function escolhaRock(){
    
    var escolha = 1;
    var sorteio = (Math.floor(Math.random() * 3) + 1);

    if(escolha == sorteio){
        bot.innerHTML = "Escolha do bot: Pedra";
        resultado.innerHTML = "Você empatou!";
        resultado.style.color = "blue";
    }

    else if(sorteio == (escolha + 1)){
        bot.innerHTML = "Escolha do bot: Tesoura";
        resultado.innerHTML = "Você ganhou!";
        resultado.style.color = "green";
    }

    else{
        bot.innerHTML = "Escolha do bot: Papel";
        resultado.innerHTML = "Você perdeu!";
        resultado.style.color = "red";
    }
}

function escolhaScissor(){
    
    var escolha = 2;
    var sorteio = (Math.floor(Math.random() * 3) + 1);

    if(escolha == sorteio){
        bot.innerHTML = "Escolha do bot: Tesoura";
        resultado.innerHTML = "Você empatou!";
        resultado.style.color = "blue";
    }

    else if(sorteio == (escolha + 1)){
        bot.innerHTML = "Escolha do bot: Papel";
        resultado.innerHTML = "Você ganhou!";
        resultado.style.color = "green";
    }

    else{
        bot.innerHTML = "Escolha do bot: Pedra";
        resultado.innerHTML = "Você perdeu!";
        resultado.style.color = "red";
    }
}

function escolhaPaper(){
    
    var escolha = 3;
    var sorteio = (Math.floor(Math.random() * 3) + 1);

    if(escolha == sorteio){
        bot.innerHTML = "Escolha do bot: Papel";
        resultado.innerHTML = "Você empatou!";
        resultado.style.color = "blue";
    }

    else if(sorteio == (escolha - 2)){
        bot.innerHTML = "Escolha do bot: Pedra";
        resultado.innerHTML = "Você ganhou!";
        resultado.style.color = "green";
    }

    else{
        bot.innerHTML = "Escolha do bot: Tesoura";
        resultado.innerHTML = "Você perdeu!";
        resultado.style.color = "red";
    }
}