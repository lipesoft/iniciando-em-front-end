// Alternar entre login e cadastro
function mostrarLogin() {
    document.getElementById("form-login").style.display = "block";
    document.getElementById("form-cadastro").style.display = "none";
}

function mostrarCadastro() {
    document.getElementById("form-login").style.display = "none";
    document.getElementById("form-cadastro").style.display = "block";
}

// Mock de dados para simular um cadastro simples
const usuarios = [];

// Cadastro
document.getElementById("cadastroForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const nome = document.getElementById("cadastro-nome").value;
    const email = document.getElementById("cadastro-email").value;
    const senha = document.getElementById("cadastro-password").value;
    const confirmSenha = document.getElementById("cadastro-confirm-password").value;

    // Validação básica
    if (senha !== confirmSenha) {
        alert("As senhas não coincidem!");
        return;
    }

    // Verificar se o email já está cadastrado
    const usuarioExistente = usuarios.find(usuario => usuario.email === email);
    if (usuarioExistente) {
        alert("Este e-mail já está cadastrado.");
        return;
    }

    // Adiciona o usuário no "banco de dados" (array)
    usuarios.push({ nome, email, senha });
    alert("Cadastro realizado com sucesso!");

    // Limpar os campos após cadastro
    document.getElementById("cadastroForm").reset();
    mostrarLogin();  // Voltar para a tela de login
});

// Login
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const email = document.getElementById("login-email").value;
    const senha = document.getElementById("login-password").value;

    // Verificar se o email e senha correspondem a algum usuário cadastrado
    const usuario = usuarios.find(usuario => usuario.email === email && usuario.senha === senha);
    if (!usuario) {
        alert("E-mail ou senha incorretos.");
        return;
    }

    alert("Login realizado com sucesso!");
    // Redirecionar para a home ou realizar outra ação após login
    window.location.href = "home.html";
});

// Interpretação do sonho
document.getElementById("submitButton").addEventListener("click", function() {
    const sonho = document.getElementById("dreamInput").value;
    
    if (sonho.trim() === "") {
        alert("Por favor, descreva seu sonho.");
        return;
    }

    // Simulando a interpretação com uma resposta simples (pode ser melhorado)
    const interpretacao = "Este é um sonho com significado profundo. Pode estar relacionado à sua vida emocional e a alguns desejos internos.";

    // Exibindo a interpretação
    document.getElementById("dreamResult").innerText = interpretacao;
    document.getElementById("resultadoSonho").style.display = "block";
});
