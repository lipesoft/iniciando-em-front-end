function mostrarLogin() {
    document.getElementById("form-login").style.display = "block";
    document.getElementById("form-cadastro").style.display = "none";
}

function mostrarCadastro() {
    document.getElementById("form-login").style.display = "none";
    document.getElementById("form-cadastro").style.display = "block";
}

const usuarios = [];

document.getElementById("cadastroForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const nome = document.getElementById("cadastro-nome").value;
    const email = document.getElementById("cadastro-email").value;
    const senha = document.getElementById("cadastro-password").value;
    const confirmSenha = document.getElementById("cadastro-confirm-password").value;

    if (senha !== confirmSenha) {
        alert("As senhas não coincidem!");
        return;
    }

    const usuarioExistente = usuarios.find(usuario => usuario.email === email);
    if (usuarioExistente) {
        alert("Este e-mail já está cadastrado.");
        return;
    }

    usuarios.push({ nome, email, senha });
    alert("Cadastro realizado com sucesso!");

    document.getElementById("cadastroForm").reset();
    mostrarLogin(); 
});

document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const email = document.getElementById("login-email").value;
    const senha = document.getElementById("login-password").value;

    const usuario = usuarios.find(usuario => usuario.email === email && usuario.senha === senha);
    if (!usuario) {
        alert("E-mail ou senha incorretos.");
        return;
    }

    alert("Login realizado com sucesso!");
    window.location.href = "home.html";
});

document.getElementById("submitButton").addEventListener("click", function() {
    const sonho = document.getElementById("dreamInput").value;
    
    if (sonho.trim() === "") {
        alert("Por favor, descreva seu sonho.");
        return;
    }

    const interpretacao = "Este é um sonho com significado profundo. Pode estar relacionado à sua vida emocional e a alguns desejos internos.";

    // Exibindo a interpretação
    document.getElementById("dreamResult").innerText = interpretacao;
    document.getElementById("resultadoSonho").style.display = "block";
});
