function iniciar() {
   //alert("OI")

   var valor = document.getElementById("iptQtd").value;

   var spnRes = document.getElementById("spnRes");
   
   var resultado = document.getElementById("resultado");


   valor = parseInt(valor);

   resultado.innerHTML = valor;


}
function verificar() {
   var valor = parseInt(document.getElementById("iptQtd").value);
   var spnNumber = document.querySelector("#spnNumber");
      if (!(isNaN(valor))) {
         if (valor % 2 == 0) {
            spnNumber.textContent = valor + "é PAR"
         
            spnNumber.textContent = valor + "é IMPAR"
         
         }
      else{
         spnNumber.textContent = "";
      }
      }   
}
