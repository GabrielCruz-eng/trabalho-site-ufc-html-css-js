/* UFC - JavaScript Basico e Reduzido */

function carregar() {
  let dados = localStorage.getItem("fas");
  let lista = dados ? JSON.parse(dados) : [
    { nome: "Gabriel Silva", email: "gabriel@email.com", categoria: "Meio-Pesado" }
  ];

  let corpo = document.getElementById("tabela-corpo");
  if (!corpo) return;

  corpo.innerHTML = "";
  for (let i = 0; i < lista.length; i++) {
    corpo.innerHTML += "<tr><td>" + lista[i].nome + "</td><td>" + lista[i].email + "</td><td>" + lista[i].categoria + "</td></tr>";
  }
}

function salvar(e) {
  e.preventDefault();

  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let categoria = document.getElementById("categoria").value;

  if (nome == "" || email == "") {
    alert("Preencha nome e email!");
    return;
  }

  let dados = localStorage.getItem("fas");
  let lista = dados ? JSON.parse(dados) : [];

  lista.push({ nome: nome, email: email, categoria: categoria });
  localStorage.setItem("fas", JSON.stringify(lista));

  document.getElementById("form-contato").reset();
  document.getElementById("aviso").classList.remove("d-none");
  carregar();
}

window.onload = function() {
  let form = document.getElementById("form-contato");
  if (form) form.onsubmit = salvar;
  carregar();
};
