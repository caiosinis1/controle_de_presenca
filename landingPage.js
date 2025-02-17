document.addEventListener("DOMContentLoaded", function () {
    const btnEntrar = document.getElementById("btn-entrar");
    const modal = document.getElementById("modal-login");
    const closeModal = document.querySelector(".close-modal");
    const loginForm = document.getElementById("login-form");

    // Exibir modal ao clicar em "Entrar"
    btnEntrar.addEventListener("click", function () {
        modal.style.display = "flex";
    });

    // Fechar modal ao clicar no "X"
    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Fechar modal ao clicar fora da caixa
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Simulação do login (autenticação básica)
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita recarregar a página

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Usuário e senha fictícios (pode substituir por uma API futuramente)
        const userDB = {
            username: "admin",
            password: "123456"
        };

        if (username === userDB.username && password === userDB.password) {
            alert("Login realizado com sucesso!");
            window.location.href = "home.html"; // Redireciona para a página inicial
        } else {
            alert("Usuário ou senha incorretos.");
        }
    });
});
