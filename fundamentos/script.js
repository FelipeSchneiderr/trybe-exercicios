//Evento de onload, será quando a página for acessada ou sofrer uma atualização
window.onload = function(){
    //Pego a cor no localStorage
    let color = localStorage.getItem("color");
  
    //Índice de busca da cor
    let indexColor = 0;
  
    //Paleta de cores pré-definidas
    let colors = ["#FF00FF", "#464131", "#269486"];
  
    //Se a cor não estiver nula, já existe algum no localStorage, então usamos ela
    //caso contrário, começa em zero, conforme o indexColor declaro anteriormente
    if (color != null) {
      indexColor = parseInt(color);
    }
  
    //Seto a cor de fundo
    document.body.style.backgroundColor = colors[indexColor];
  
    //Incremento a cor para mudar no próximo carregamento
    indexColor += 1;
  
    //Se a cor estiver do tamanho do array, preciso recomeçar a contagem
    //caso contrário, posso acessar uma posição inválida do array
   
    //Gravo no localStorage o índice da próxima cor que será usada
    localStorage.setItem("color", indexColor.toString());
  }

  