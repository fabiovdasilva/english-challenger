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

function aplicarCorNaCaixa(nomeDaCor){
    var caixaDasCores = document.getElementById("cor-atual")
    caixaDasCores.style.backgroundColor = nomeDaCor
}