


function redirecionar(){
    entrada = document.querySelector("#entrada").value;

    p = document.createElement("p");

    texto = document.createTextNode(entrada);

    p.appendChild(texto);

    /* saida = document.querySelector("#saida");

    saida.appendChild(p); */

    sair = document.querySelector(".nome_ra");
    sair.classList.add("ativado");

    certificado = document.getElementById("certificado");
    certificado.style.display = "contents";  // Adicionada esta linha

    setTimeout(function() {
        window.print();
    }, 100);
}

function atualizarNome() {
    var entrada = document.querySelector("#entrada").value;
    var nomeUsuario = document.querySelector(".nome_usuario");

    // Atualiza o texto da div com a entrada do input
    nomeUsuario.textContent = entrada;
}