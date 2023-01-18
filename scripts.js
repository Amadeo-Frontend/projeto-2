const form = document.getElementById("form-atividade");
const contato = [];
let linhas = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();

  adicionaLinha();
  atualizaTabela();
  validateNome();
  validatePhone();
});

function adicionaLinha() {
  const inputNome = document.getElementById("nome-contato");
  const inputPhone = document.getElementById("phone-contato");
  if(contato.includes(inputPhone.value)){
    alert(`Esse telefone :${inputPhone.value} já foi inserido.`);
    }else{
        contato.push(inputPhone.value); 
    }

  if (contato.includes(inputNome.value)) {
    alert(`O contato:${inputNome.value} já foi inserido.`);
  } else {
    contato.push(inputNome.value);
    
    let linha = "<tr>";
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputPhone.value}</td>`;
    linha += `</tr>`;

    linhas += linha;
  }

  inputNome.value = "";
  inputPhone.value = "";
}

function atualizaTabela() {
  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;
}

//Validação
const nomeErro = document.getElementById("nome-erro");
const phoneErro = document.getElementById("phone-erro");

function validateNome() {
  let name = document.getElementById("nome-contato").value;

  if (name.length == 0) {
    nomeErro.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
    return false;
  }
  nomeErro.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}
function validatePhone() {
  let phone = document.getElementById("phone-contato").value;

  if (phone.length == 0) {
    phoneErro.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
    return false;
  }
  phoneErro.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}
const inputNome = document.getElementById("nome-contato");

inputNome.addEventListener("input", function (e) {
    this.value = this.value.replace(/[^a-zA-Z]/g, '');
});
