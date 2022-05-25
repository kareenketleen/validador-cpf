console.log("javascritp bla bla bla");

function validarCpf(cpf) {
  if (cpf.length != 11) {
    return false;
  }

  var isRepeated = true;

  for (let index = 1; index < cpf.length; index++) {
    if (cpf.charAt(0) != cpf.charAt(index)) {
      isRepeated = false;
      break;
    }
  }

  if (isRepeated) {
    return false;
  }

  var numeros = cpf.substring(0, 9);
  var digitos = cpf.substring(9);

  var soma = 0;

  for (var i = 10; i > 1; i--) {
    soma += numeros.charAt(10 - i) * i;
  }

  var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

  //validacao do primeiro dígito
  if (resultado != digitos.charAt(0)) {
    return false;
  }

  soma = 0;
  numeros = cpf.substring(0, 10);

  for (var k = 11; k > 1; k--) {
    soma += numeros.charAt(11 - k) * k;
  }

  resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

  //validacao do segundo dígito
  if (resultado != digitos.charAt(1)) {
    return false;
  }
  return true;
}

function validacao() {
  document.getElementById("success").style.display = "none";
  document.getElementById("error").style.display = "none";

  var cpf = document.getElementById("cpf_digitado").value;
  var resultadoValidacao = validarCpf(cpf);

  if (resultadoValidacao) {
    document.getElementById("success").style.display = "block";
  } else {
    document.getElementById("error").style.display = "block";
  }
}
