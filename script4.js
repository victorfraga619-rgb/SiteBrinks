const btnEnviar = document.getElementById("btnEnviar");
const btnFechar = document.getElementById("btnFechar");
const modal = document.getElementById("modal");
const mensagem = document.getElementById("mensagem");

btnEnviar.addEventListener("click", function() {
    const nome = document.getElementById("nome").value;

    if (nome == "7") {
        mensagem.innerText = "Parabéns! Você acertou o número da sorte 🎉";
    } else {
        mensagem.innerText = "Tô o foguetin 🚀, não gostei do numero 😡";
    }

    modal.style.display = "flex";
});

btnFechar.addEventListener("click", function() {
    modal.style.display = "none";
});