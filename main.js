// Cria variáveis
const form = document.getElementById('form_numero')
const a = document.getElementById('campo_a')
const b = document.getElementById('campo_b')

// Função para validar se o número B é maior que o A

function b_maior_que_a(a, b) {
    return b.value > a.value
}

// Adiciona um ouvinte de evento de envio ('submit') ao formulário

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o comportamento padrão de envio do formulário

    const mensagem_sucesso = 'O formulário é valido!'
    const mensagem_erro = 'O formulário não é valido!'
    const container_mensagem_sucesso = document.querySelector('.success_message');
    const container_mensagem_erro = document.querySelector('.error_message');

    form_e_valido = b_maior_que_a(a, b);

    if(form_e_valido){
        container_mensagem_sucesso.innerHTML = mensagem_sucesso;
        container_mensagem_sucesso.style.display = "block";
        container_mensagem_erro.style.display = "none";

        // Limpa os campos do formulário
        a.value = '';
        b.value = '';

    } else {
        container_mensagem_erro.innerHTML = mensagem_erro;
        container_mensagem_erro.style.display = "block";
        container_mensagem_sucesso.style.display = "none";
    }
})

