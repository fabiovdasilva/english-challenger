var engine = {
  cores: ["green", "purple", "pink", "red", "yellow", "orange", "grey"],
  hexadecimais: {
    green: "#02ef00",
    purple: "#790093",
    black: "#141414",
    red: "#e90b08",
    yellow: "#e7d703",
    orange: "#f16529",
    grey: "#ebebeb",
  },

  moedas: 0,
};

function sortearCor() {
  var indexCorSorteada = Math.floor(Math.random() * engine.cores.length);
  var legendaCorCaixa = document.getElementById("cor-na-caixa");

  legendaCorCaixa.innerText = engine.cores[indexCorSorteada].toUpperCase;

  
  
}
/*  
Math.random() gera um numero aleatorio, para colocar entre um intervalo apenas multiplicar pelo numero desejado, * engine.cores.length, será um numero aleatorio entre o intervalo do tamanho do vetor cores
Math.floor retorna um numero inteiro

*/
