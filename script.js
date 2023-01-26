function abrirWhatsapp() {

    var prato1 = document.getElementById("prato1").value;
    var prato2 = document.getElementById("prato2").value;
    var prato3 = document.getElementById("prato3").value;
    var prato4 = document.getElementById("prato4").value;
    var prato5 = document.getElementById("prato5").value;
    var prato6 = document.getElementById("prato6").value;
    var prato7 = document.getElementById("prato7").value;
    var prato8 = document.getElementById("prato8").value;

    var alcool1 = document.getElementById("alcool1").value;
    var alcool2 = document.getElementById("alcool2").value;
    var alcool3 = document.getElementById("alcool3").value;
    var alcool4 = document.getElementById("alcool4").value;
    var alcool5 = document.getElementById("alcool5").value;
    var alcool6 = document.getElementById("alcool6").value;
    var alcool7 = document.getElementById("alcool7").value;
    var alcool8 = document.getElementById("alcool8").value;

    var semalcool1 = document.getElementById("semalcool1").value;
    var semalcool2 = document.getElementById("semalcool2").value;
    var semalcool3 = document.getElementById("semalcool3").value;
    var semalcool4 = document.getElementById("semalcool4").value;
    var semalcool5 = document.getElementById("semalcool5").value;
    var semalcool6 = document.getElementById("semalcool6").value;
    var semalcool7 = document.getElementById("semalcool7").value;
    var semalcool8 = document.getElementById("semalcool8").value;

    var sobremesa1 = document.getElementById("sobremesa1").value;
    var sobremesa2 = document.getElementById("sobremesa2").value;
    var sobremesa3 = document.getElementById("sobremesa3").value;
    var sobremesa4 = document.getElementById("sobremesa4").value;
    var sobremesa5 = document.getElementById("sobremesa5").value;
    var sobremesa6 = document.getElementById("sobremesa6").value;
    var sobremesa7 = document.getElementById("sobremesa7").value;
    var sobremesa8 = document.getElementById("sobremesa8").value;

    var mesa = document.getElementById("mesa").value;
    var numeroQuarto = document.getElementById("numeroQuarto").value;
    var nome = document.getElementById("nome").value;
    var msg = document.getElementById("msg").value;


    var url = "https://wa.me/5522999939162?text=" // Meu numero
        + "*Pedido*" + "%0a" // Mensagem personalizada
        + "%0a" // Quebra de linha
        + "*mesa*: " + mesa + "%0a" // Dados do formulário


        //Hospede ou Passante

        if(numeroQuarto != 0) {
            url += "*numeroQuarto*: " + numeroQuarto + "%0a"
        }else if (nome != 0) {
            url += "*Nome Passante*: " + nome + "%0a" + "%0a"
        }



        //PRATOS IF ELSE


    if(prato8 != 0) {
        url +=
                "*Pratos*" + "%0a"
                + "*Prato 01*: " + prato1 + "%0a"
                + "*Prato 02*: " + prato2 + "%0a"
                + "*Prato 03*: " + prato3 + "%0a"
                + "*Prato 04*: " + prato4 + "%0a"
                + "*Prato 05*: " + prato5 + "%0a" 
                + "*Prato 06*: " + prato6 + "%0a"
                + "*Prato 07*: " + prato7 + "%0a"
                + "*Prato 08*: " + prato8 + "%0a" + "%0a"
    }else if(prato7 != 0) {
        url +=
                "*Pratos*" + "%0a"
                + "*Prato 01*: " + prato1 + "%0a"
                + "*Prato 02*: " + prato2 + "%0a"
                + "*Prato 03*: " + prato3 + "%0a"
                + "*Prato 04*: " + prato4 + "%0a"
                + "*Prato 05*: " + prato5 + "%0a" 
                + "*Prato 06*: " + prato6 + "%0a"
                + "*Prato 07*: " + prato7 + "%0a" + "%0a"
    }else if(prato6 != 0) {
        url +=
                "*Pratos*" + "%0a"
                + "*Prato 01*: " + prato1 + "%0a"
                + "*Prato 02*: " + prato2 + "%0a"
                + "*Prato 03*: " + prato3 + "%0a"
                + "*Prato 04*: " + prato4 + "%0a"
                + "*Prato 05*: " + prato5 + "%0a" 
                + "*Prato 05*: " + prato6 + "%0a" + "%0a"
    }else if(prato5 != 0) {
        url +=
                "*Pratos*" + "%0a"
                + "*Prato 01*: " + prato1 + "%0a"
                + "*Prato 02*: " + prato2 + "%0a"
                + "*Prato 03*: " + prato3 + "%0a"
                + "*Prato 04*: " + prato4 + "%0a"
                + "*Prato 05*: " + prato5 + "%0a" + "%0a"
    }else if(prato4 != 0 ) {
        url +=
                "*Pratos*" + "%0a"
                + "*Prato 01*: " + prato1 + "%0a"
                + "*Prato 02*: " + prato2 + "%0a"
                + "*Prato 03*: " + prato3 + "%0a"
                + "*Prato 04*: " + prato4 + "%0a" + "%0a"
    }else if(prato3 != 0) {
        url +=
                "*Pratos*" + "%0a"
                + "*Prato 01*: " + prato1 + "%0a"
                + "*Prato 02*: " + prato2 + "%0a"
                + "*Prato 03*: " + prato3 + "%0a" + "%0a"
    }else if(prato2 != 0) {
        url +=
                "*Pratos*" + "%0a"
                + "*Prato 01*: " + prato1 + "%0a"
                + "*Prato 02*: " + prato2 + "%0a" + "%0a"

    }else if(prato1 != 0) {
        url +=
                "*Pratos*" + "%0a"
                + "*Prato 01*: " + prato1 + "%0a" + "%0a"
    }

    // Bebidas ALcoolicas IF ELSE

    if(alcool8 != 0) {
        url +=
                "*Bebidas Alcolicas*" + "%0a"
                + "*Bebida 01*: " + alcool1 + "%0a"
                + "*Bebida 02*: " + alcool2 + "%0a"
                + "*Bebida 03*: " + alcool3 + "%0a"
                + "*Bebida 04*: " + alcool4 + "%0a"
                + "*Bebida 05*: " + alcool5 + "%0a"
                + "*Bebida 06*: " + alcool6 + "%0a"
                + "*Bebida 07*: " + alcool7 + "%0a"
                + "*Bebida 08*: " + alcool8 + "%0a" + "%0a"

    }else if(alcool7 != 0) {
        url +=
                "*Bebidas Alcolicas*" + "%0a"
                + "*Bebida 01*: " + alcool1 + "%0a"
                + "*Bebida 02*: " + alcool2 + "%0a"
                + "*Bebida 03*: " + alcool3 + "%0a"
                + "*Bebida 04*: " + alcool4 + "%0a"
                + "*Bebida 05*: " + alcool5 + "%0a"
                + "*Bebida 06*: " + alcool6 + "%0a"
                + "*Bebida 07*: " + alcool7 + "%0a" + "%0a"

    }else if(alcool6 != 0) {
        url +=
                "*Bebidas Alcolicas*" + "%0a"
                + "*Bebida 01*: " + alcool1 + "%0a"
                + "*Bebida 02*: " + alcool2 + "%0a"
                + "*Bebida 03*: " + alcool3 + "%0a"
                + "*Bebida 04*: " + alcool4 + "%0a"
                + "*Bebida 05*: " + alcool5 + "%0a"
                + "*Bebida 06*: " + alcool6 + "%0a" + "%0a"

    }else if(alcool5 != 0) {
        url +=
                "*Bebidas Alcolicas*" + "%0a"
                + "*Bebida 01*: " + alcool1 + "%0a"
                + "*Bebida 02*: " + alcool2 + "%0a"
                + "*Bebida 03*: " + alcool3 + "%0a"
                + "*Bebida 04*: " + alcool4 + "%0a"
                + "*Bebida 05*: " + alcool5 + "%0a" + "%0a"

    }else if(alcool4 != 0 ) {
        url +=
                "*Bebidas Alcolicas*" + "%0a"
                + "*Bebida 01*: " + alcool1 + "%0a"
                + "*Bebida 02*: " + alcool2 + "%0a"
                + "*Bebida 03*: " + alcool3 + "%0a"
                + "*Bebida 04*: " + alcool4 + "%0a" + "%0a"
    }else if(alcool3 != 0) {
        url +=
                 "*Bebidas Alcolicas*" + "%0a"
                + "*Bebida 01*: " + alcool1 + "%0a"
                + "*Bebida 02*: " + alcool2 + "%0a"
                + "*Bebida 03*: " + alcool3 + "%0a" + "%0a"
    }else if(alcool2 != 0) {
        url +=
                 "*Bebidas Alcolicas*" + "%0a"
                + "*Bebida 01*: " + alcool1 + "%0a"
                + "*Bebida 02*: " + alcool2 + "%0a" + "%0a"

    }else if(alcool1 != 0) {
        url +=
                 "*Bebidas Alcolicas*" + "%0a"
                + "*Bebida 01*: " + alcool1 + "%0a" + "%0a"

    }

    //Bebidas Não Alcoolicas

    if(semalcool8 != 0) {
        url +=
                "*Bebidas NÃO Alcolicas*" + "%0a"
                + "*Bebida 01*: " + semalcool1 + "%0a"
                + "*Bebida 02*: " + semalcool2 + "%0a"
                + "*Bebida 03*: " + semalcool3 + "%0a"
                + "*Bebida 04*: " + semalcool4 + "%0a"
                + "*Bebida 05*: " + semalcool5 + "%0a" 
                + "*Bebida 06*: " + semalcool6 + "%0a" 
                + "*Bebida 07*: " + semalcool7 + "%0a"
                + "*Bebida 08*: " + semalcool8 + "%0a" + "%0a"

    }else if(semalcool7 != 0) {
        url +=
                "*Bebidas NÃO Alcolicas*" + "%0a"
                + "*Bebida 01*: " + semalcool1 + "%0a"
                + "*Bebida 02*: " + semalcool2 + "%0a"
                + "*Bebida 03*: " + semalcool3 + "%0a"
                + "*Bebida 04*: " + semalcool4 + "%0a"
                + "*Bebida 05*: " + semalcool5 + "%0a" 
                + "*Bebida 06*: " + semalcool6 + "%0a" 
                + "*Bebida 07*: " + semalcool7 + "%0a" + "%0a"

    }else if(semalcool6 != 0) {
        url +=
                "*Bebidas NÃO Alcolicas*" + "%0a"
                + "*Bebida 01*: " + semalcool1 + "%0a"
                + "*Bebida 02*: " + semalcool2 + "%0a"
                + "*Bebida 03*: " + semalcool3 + "%0a"
                + "*Bebida 04*: " + semalcool4 + "%0a"
                + "*Bebida 05*: " + semalcool5 + "%0a" 
                + "*Bebida 06*: " + semalcool6 + "%0a" + "%0a"

    }else if(semalcool5 != 0) {
        url +=
                "*Bebidas NÃO Alcolicas*" + "%0a"
                + "*Bebida 01*: " + semalcool1 + "%0a"
                + "*Bebida 02*: " + semalcool2 + "%0a"
                + "*Bebida 03*: " + semalcool3 + "%0a"
                + "*Bebida 04*: " + semalcool4 + "%0a"
                + "*Bebida 05*: " + semalcool5 + "%0a" + "%0a"

    }else if(semalcool4 != 0 ) {
        url +=
                "*Bebidas NÃO Alcolicas*" + "%0a"
                + "*Bebida 01*: " + semalcool1 + "%0a"
                + "*Bebida 02*: " + semalcool2 + "%0a"
                + "*Bebida 03*: " + semalcool3 + "%0a"
                + "*Bebida 04*: " + semalcool4 + "%0a" + "%0a"
    }else if(semalcool3 != 0) {
        url +=
                "*Bebidas NÃO Alcolicas*" + "%0a"
                + "*Bebida 01*: " + semalcool1 + "%0a"
                + "*Bebida 02*: " + semalcool2 + "%0a"
                + "*Bebida 03*: " + semalcool3 + "%0a" + "%0a"
    }else if(semalcool2 != 0) {
        url +=
                "*Bebidas NÃO Alcolicas*" + "%0a"
                + "*Bebida 01*: " + semalcool1 + "%0a"
                + "*Bebida 02*: " + semalcool2 + "%0a" + "%0a"

    }else if(semalcool1 != 0) {
        url +=
                "*Bebidas NÃO Alcolicas*" + "%0a"
                + "*Bebida 01*: " + semalcool1 + "%0a" + "%0a"
    }


    //Sobremesas

    if(sobremesa8 != 0) {
        url +=
                "*Sobremesas*" + "%0a"
                + "*Sobremesa 01*: " + sobremesa1 + "%0a"
                + "*Sobremesa 02*: " + sobremesa2 + "%0a"
                + "*Sobremesa 03*: " + sobremesa3 + "%0a"
                + "*Sobremesa 04*: " + sobremesa4 + "%0a"
                + "*Sobremesa 05*: " + sobremesa5 + "%0a"
                + "*Sobremesa 06*: " + sobremesa6 + "%0a"
                + "*Sobremesa 07*: " + sobremesa7 + "%0a"
                + "*Sobremesa 08*: " + sobremesa8 + "%0a" + "%0a"

    }else if(sobremesa7 != 0) {
        url +=
                "*Sobremesas*" + "%0a"
                + "*Sobremesa 01*: " + sobremesa1 + "%0a"
                + "*Sobremesa 02*: " + sobremesa2 + "%0a"
                + "*Sobremesa 03*: " + sobremesa3 + "%0a"
                + "*Sobremesa 04*: " + sobremesa4 + "%0a"
                + "*Sobremesa 05*: " + sobremesa5 + "%0a"
                + "*Sobremesa 06*: " + sobremesa6 + "%0a"
                + "*Sobremesa 07*: " + sobremesa7 + "%0a" + "%0a"

    }else if(sobremesa6 != 0) {
        url +=
                "*Sobremesas*" + "%0a"
                + "*Sobremesa 01*: " + sobremesa1 + "%0a"
                + "*Sobremesa 02*: " + sobremesa2 + "%0a"
                + "*Sobremesa 03*: " + sobremesa3 + "%0a"
                + "*Sobremesa 04*: " + sobremesa4 + "%0a"
                + "*Sobremesa 05*: " + sobremesa5 + "%0a"
                + "*Sobremesa 06*: " + sobremesa6 + "%0a" + "%0a"

    }else if(sobremesa5 != 0) {
        url +=
                "*Sobremesas*" + "%0a"
                + "*Sobremesa 01*: " + sobremesa1 + "%0a"
                + "*Sobremesa 02*: " + sobremesa2 + "%0a"
                + "*Sobremesa 03*: " + sobremesa3 + "%0a"
                + "*Sobremesa 04*: " + sobremesa4 + "%0a"
                + "*Sobremesa 05*: " + sobremesa5 + "%0a" + "%0a"

    }else if(sobremesa4 != 0 ) {
        url +=
                "*Sobremesas*" + "%0a"
                + "*Sobremesa 01*: " + sobremesa1 + "%0a"
                + "*Sobremesa 02*: " + sobremesa2 + "%0a"
                + "*Sobremesa 03*: " + sobremesa3 + "%0a"
                + "*Sobremesa 04*: " + sobremesa4 + "%0a" + "%0a"
    }else if(sobremesa3 != 0) {
        url +=
                "*Sobremesas*" + "%0a"
                + "*Sobremesa 01*: " + sobremesa1 + "%0a"
                + "*Sobremesa 02*: " + sobremesa2 + "%0a"
                + "*Sobremesa 03*: " + sobremesa3 + "%0a" + "%0a"
    }else if(sobremesa2 != 0) {
        url +=
                "*Sobremesas*" + "%0a"
                + "*Sobremesa 01*: " + sobremesa1 + "%0a"
                + "*Sobremesa 02*: " + sobremesa2 + "%0a" + "%0a"

    }else if(sobremesa1 != 0) {
        url +=
                "*Sobremesas*" + "%0a"
                + "*Sobremesa 01*: " + sobremesa1 + "%0a" + "%0a"
    }

    //MSG

    if(msg != 0) {
        url +=  "*Mensagem*: " + msg;
    }

    /*
    var url = "https://wa.me/5522999939162?text=" // Meu numero
      + "*Pedido*" + "%0a" // Mensagem personalizada
      + "%0a" // Quebra de linha
      + "*mesa*: " + mesa + "%0a" // Dados do formulário
      + "*numeroQuarto*: " + numeroQuarto + "%0a"
      + "*Nome Passante*: " + nome + "%0a" + "%0a"

      + "*Pratos*" + "%0a"
      + "*Prato 01*: " + prato1 + "%0a"
      + "*Prato 02*: " + prato2 + "%0a"
      + "*Prato 03*: " + prato3 + "%0a"
      + "*Prato 04*: " + prato4 + "%0a"
      + "*Prato 05*: " + prato5 + "%0a" + "%0a"

      + "*Bebidas Alcolicas*" + "%0a"
      + "*Bebida 01*: " + alcool1 + "%0a"
      + "*Bebida 02*: " + alcool2 + "%0a"
      + "*Bebida 03*: " + alcool3 + "%0a"
      + "*Bebida 04*: " + alcool4 + "%0a"
      + "*Bebida 05*: " + alcool5 + "%0a" + "%0a"

      + "*Bebidas NÃO Alcolicas*" + "%0a"
      + "*Bebida 01*: " + semalcool1 + "%0a"
      + "*Bebida 02*: " + semalcool2 + "%0a"
      + "*Bebida 03*: " + semalcool3 + "%0a"
      + "*Bebida 04*: " + semalcool4 + "%0a"
      + "*Bebida 05*: " + semalcool5 + "%0a" + "%0a"

      + "*Sobremesas*" + "%0a"
      + "*Sobremesa 01*: " + sobremesa1 + "%0a"
      + "*Sobremesa 02*: " + sobremesa2 + "%0a"
      + "*Sobremesa 03*: " + sobremesa3 + "%0a"
      + "*Sobremesa 04*: " + sobremesa4 + "%0a"
      + "*Sobremesa 05*: " + sobremesa5 + "%0a" + "%0a"
      
      
      + "*Mensagem*: " + msg;

      */

    window.open(url, '_blank').focus();
  }




  
  $('input:radio[name="consulta"]').change(function() {
    if ($(this).val() == 1) {
      $("#m1").attr("hidden", false);
      $(this).attr("checked", true);
      
      $("#m2").attr("hidden", true);
      $(this).attr("checked", true);
      
    } else if ($(this).val() == 2) {
      $("#m2").attr("hidden", false);
      $(this).attr("checked", true);
      
      $("#m1").attr("hidden", true);
      $(this).attr("checked", true);
    }
  });


const buttonAdd = document.getElementById('botaoAdd');

buttonAdd.addEventListener('click', addPrato);

var flagPrato = 0;

function addPrato() {

    if(flagPrato == 0) {
        var prato = document.getElementById("prato2");
        prato.style.display = "block";
    }else if(flagPrato == 1) {
        var prato = document.getElementById("prato3");
        prato.style.display = "block";
    }else if(flagPrato == 2) {
        var prato = document.getElementById("prato4");
        prato.style.display = "block";
    }else if(flagPrato == 3) {
        var prato = document.getElementById("prato5");
        prato.style.display = "block";
    }else if(flagPrato == 4) {
        var prato = document.getElementById("prato6");
        prato.style.display = "block";
    }else if(flagPrato == 5) {
        var prato = document.getElementById("prato7");
        prato.style.display = "block";
    }else if(flagPrato == 6) {
        var prato = document.getElementById("prato8");
        prato.style.display = "block";
    }

    flagPrato++;
}

const botaoAddAlcools = document.getElementById('botaoAddAlcools');

botaoAddAlcools.addEventListener('click', addAlcool);

var flagAlcool = 0;

function addAlcool() {

    if(flagAlcool == 0) {
        var alcool = document.getElementById("alcool2");
        alcool.style.display = "block";
    }else if(flagAlcool == 1) {
        var alcool = document.getElementById("alcool3");
        alcool.style.display = "block";
    }else if(flagAlcool == 2) {
        var alcool = document.getElementById("alcool4");
        alcool.style.display = "block";
    }else if(flagAlcool == 3) {
        var alcool = document.getElementById("alcool5");
        alcool.style.display = "block";
    }else if(flagAlcool == 4) {
        var alcool = document.getElementById("alcool6");
        alcool.style.display = "block";
    }else if(flagAlcool == 5) {
        var alcool = document.getElementById("alcool7");
        alcool.style.display = "block";
    }else if(flagAlcool == 6) {
        var alcool = document.getElementById("alcool8");
        alcool.style.display = "block";
    }

    flagAlcool++;
}

const botaoAddNaoAlcools = document.getElementById('botaoAddNaoAlcools');

botaoAddNaoAlcools.addEventListener('click', addNaoAlcool);

var flagNaoAlcool = 0;

function addNaoAlcool() {

    if(flagNaoAlcool == 0) {
        var NaoAlcool = document.getElementById("semalcool2");
        NaoAlcool.style.display = "block";
    }else if(flagNaoAlcool == 1) {
        var NaoAlcool = document.getElementById("semalcool3");
        NaoAlcool.style.display = "block";
    }else if(flagNaoAlcool == 2) {
        var NaoAlcool = document.getElementById("semalcool4");
        NaoAlcool.style.display = "block";
    }else if(flagNaoAlcool == 3) {
        var NaoAlcool = document.getElementById("semalcool5");
        NaoAlcool.style.display = "block";
    }else if(flagNaoAlcool == 4) {
        var NaoAlcool = document.getElementById("semalcool6");
        NaoAlcool.style.display = "block";
    }else if(flagNaoAlcool == 5) {
        var NaoAlcool = document.getElementById("semalcool7");
        NaoAlcool.style.display = "block";
    }else if(flagNaoAlcool == 6) {
        var NaoAlcool = document.getElementById("semalcool8");
        NaoAlcool.style.display = "block";
    }

    flagNaoAlcool++;
}

const botaoAddSobremesa = document.getElementById('botaoAddSobremesa');

botaoAddSobremesa.addEventListener('click', addSobremesa);

var flagSobremesa = 0;

function addSobremesa() {

    if(flagSobremesa == 0) {
        var Sobremesa = document.getElementById("sobremesa2");
        Sobremesa.style.display = "block";
    }else if(flagSobremesa == 1) {
        var Sobremesa = document.getElementById("sobremesa3");
        Sobremesa.style.display = "block";
    }else if(flagSobremesa == 2) {
        var Sobremesa = document.getElementById("sobremesa4");
        Sobremesa.style.display = "block";
    }else if(flagSobremesa == 3) {
        var Sobremesa = document.getElementById("sobremesa5");
        Sobremesa.style.display = "block";
    }else if(flagSobremesa == 4) {
        var Sobremesa = document.getElementById("sobremesa6");
        Sobremesa.style.display = "block";
    }else if(flagSobremesa == 5) {
        var Sobremesa = document.getElementById("sobremesa7");
        Sobremesa.style.display = "block";
    }else if(flagSobremesa == 6) {
        var Sobremesa = document.getElementById("sobremesa8");
        Sobremesa.style.display = "block";
    }

    flagSobremesa++;
}