var engine = {
  "cores": ["green", "purple", "pink", "red", "yellow", "orange", "grey", "black"],
  "hexadecimais": {
    "green": "#02ef00",
    "purple": "#790093",
    "pink": "#F02A7E",
    "red": "#e90b08",
    "yellow": "#e7d703",
    "orange": "#f16529",
    "grey": "#ebebeb",
    "black": "#141414",

  },

  "moedas": 0,
};

function sortearCor() {
  var indexCorSorteada = Math.floor(Math.random() * engine.cores.length);
  var legendaCorCaixa = document.getElementById("cor-na-caixa");
  var nomeCorSorteada = engine.cores[indexCorSorteada];
  
  legendaCorCaixa.innerText = nomeCorSorteada.toUpperCase();

    return engine.hexadecimais[nomeCorSorteada]
  }
/*  
Math.random() gera um numero aleatorio, para colocar entre um intervalo apenas multiplicar pelo numero desejado, * engine.cores.length, será um numero aleatorio entre o intervalo do tamanho do vetor cores
Math.floor retorna um numero inteiro

*/
  const audioMoeda = new Audio('./audio/moeda.mp3');
  const audioErrou = new Audio('./audio/errou.mp3');

function aplicarCorNaCaixa(nomeDaCor){
    var caixaDasCores = document.getElementById("cor-atual");
    caixaDasCores.style.backgroundColor = nomeDaCor;
    caixaDasCores.style.backgroundImage = "url('./img/caixa-fechada.png')";
    caixaDasCores.style.backgroundSize = "100%";

}

function atualizaPontuacao(valor){
  var pontuacao = document.getElementById('pontuacao-atual');

  engine.moedas += valor;

  if(valor < 0){
    audioErrou.play();
  } else {
    audioMoeda.play();
  }


  pontuacao.innerText = engine.moedas;
}

//API de reconhecimento de voz
var btnGravador = document.getElementById('btn-responder');
var transcricaoAudio = "";



if(window.SpeechRecognition || window.webkitSpeechRecognition){
  var SpeechAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
  var gravador = new SpeechAPI();

  gravador.continuos = false; /*gravacao não será continua*/
  gravador.lang = "en-US";


  gravador.onstart = function(){
    btnGravador.innerText = "Estou Ouvindo";

    btnGravador.style.backgroundColor = white;
    btnGravador.style.color = black;

  }

  gravador.oend = function( ){
    btnGravador.innerText = "RESPONDER";

    btnGravador.style.backgroundColor = "transparent";
    btnGravador.style.color = "white";
  }

  gravador.onresult = function(event){
    console.log(event);
  }

}else{
  alert("Navegador não tem suporte!!")
}


btnGravador.addEventListener('click', function(e){
  gravador.start();
})