const formulario = document.getElementById("form-cadastro");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  let nome = document.getElementById("nome-usuario").value;
  let email = document.getElementById("email-usuario").value;
  let titulo = document.getElementById("titulo-livro").value;
  let categoria = document.getElementById("categoria-livro").value;

  if (nome === "" || email === "" || titulo === "" || categoria === "") {
    resultado.innerHTML = `<p class="texto-erro">Por favor, preencha todos os campos obrigatórios!</p>`;
  } else {
    resultado.innerHTML = `
      <div class="cartao-resultado">
        <h3 style="margin-top: 0; color: #2b1055;">Livro Cadastrado com Sucesso!</h3>
        <p><strong>Doador(a):</strong> ${nome}</p>
        <p><strong>E-mail de contato:</strong> ${email}</p>
        <p><strong>Livro:</strong> ${titulo}</p>
        <p><strong>Categoria:</strong> ${categoria}</p>
        <p style="color: #7b2cbf; font-weight: bold; margin-bottom: 0;">Obrigado por contribuir com a Ciranda da Leitura!</p>
      </div>
    `;

    formulario.reset();
  }
});
