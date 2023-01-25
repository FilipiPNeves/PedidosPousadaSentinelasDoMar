function abrirWhatsapp() {

    var prato1 = document.getElementById("prato1").value;
    var prato2 = document.getElementById("prato2").value;
    var prato3 = document.getElementById("prato3").value;
    var prato4 = document.getElementById("prato4").value;
    var prato5 = document.getElementById("prato5").value;

    var alcool1 = document.getElementById("alcool1").value;
    var alcool2 = document.getElementById("alcool2").value;
    var alcool3 = document.getElementById("alcool3").value;
    var alcool4 = document.getElementById("alcool4").value;
    var alcool5 = document.getElementById("alcool5").value;

    var semalcool1 = document.getElementById("semalcool1").value;
    var semalcool2 = document.getElementById("semalcool2").value;
    var semalcool3 = document.getElementById("semalcool3").value;
    var semalcool4 = document.getElementById("semalcool4").value;
    var semalcool5 = document.getElementById("semalcool5").value;

    var sobremesa1 = document.getElementById("sobremesa1").value;
    var sobremesa2 = document.getElementById("sobremesa2").value;
    var sobremesa3 = document.getElementById("sobremesa3").value;
    var sobremesa4 = document.getElementById("sobremesa4").value;
    var sobremesa5 = document.getElementById("sobremesa5").value;

    var mesa = document.getElementById("mesa").value;
    var numeroQuarto = document.getElementById("numeroQuarto").value;
    var nome = document.getElementById("nome").value;
    var msg = document.getElementById("msg").value;

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
    window.open(url, '_blank').focus();
  }


  console.log(div1.checked);
  
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