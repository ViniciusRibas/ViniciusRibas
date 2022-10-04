var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
  console.log("Buscando pacientes...");
  
  var xhr = new HMLHttpRequest();
  
  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes";
           
  xhr.addEventListener("load", function(){
    var resposta = xhr.responseText;
    console.log(resposta);
    console.log(typeof resposta);
    
    var pacientes = JSON.parse(resposta);
    
    pacientes.forEach( function(paciente) {
      adicionaPacienteNaTabela(paciente);
    });
  
  });
  
  xhr.send();
