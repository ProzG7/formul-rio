document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('meuFormulario');
    formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    
        const nome = document.getElementById('nome').value;
        const data1 = document.getElementById('data1').value;
        const hora1 = document.getElementById('hora1').value;
        const data2 = document.getElementById('data2').value;
        const hora2 = document.getElementById('hora2').value;
        const cpf = document.getElementById('cpf').value;
        const telefone = document.getElementById('telefone').value;
        const origem = document.getElementById('origem').value;
        const destino = document.getElementById('destino').value;

        const mensagem = `
            <h3>Reserva feita!</h3>
            <p><strong>Nome:</strong> ${nome}</p>
            <p><strong>Data da viagem:</strong> ${data1}</p>
            <p><strong>Horário:</strong> ${hora1}</p>
            <p><strong>Origem:</strong> ${origem}</p>
            <p><strong>Destino:</strong> ${destino}</p>
        `;
    document.getElementById('mensagem').innerHTML = mensagem;
     })
});
