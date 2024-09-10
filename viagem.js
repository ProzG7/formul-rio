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

        alert(` Olá, ${nome}! Sua viagem foi marcada para o dia ${data1} às ${hora1}, partindo de ${origem} para ${destino} \n Agradecemos sua preferência! Bon voyage!.`);
    })}
)
