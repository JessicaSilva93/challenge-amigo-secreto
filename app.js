let amigos = [];

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; 

    amigos.forEach(nome => {
        listaAmigos.innerHTML += `<li>${nome}</li>`;
    });
}

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    // Validação para impedir nomes vazios ou com números
    if (!nome) {
        alert('Digite um nome válido!');
        return;
    }

    if (/\d/.test(nome)) { // Verifica se o nome contém números
        alert('O nome não pode conter números!');
        return;
    }

    amigos.push(nome); // Adiciona o nome ao array
    atualizarListaAmigos(); // Atualiza a lista no DOM
    input.value = ''; // Limpa o campo de entrada
}

// Realiza o sorteio e mostra o resultado 
function sortearAmigo() {
    if (!amigos.length) {
        alert('Adicione nomes antes de sortear!');
        return;
    }

    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>O amigo sorteado é: ${sorteado}</li>`;
}
