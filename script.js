// Aguarda o DOM ser completamente carregado antes de executar o script
document.addEventListener('DOMContentLoaded', function () {

    const form = document.getElementById('form-aluno');
    const tabelaBody = document.getElementById('tabela-alunos');
    let studentCount = 0;

    // 1. Prepara o formulário
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // 2. Coleta os valores dos campos do formulário
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const telefone = document.getElementById('telefone').value;
        const curso = document.getElementById('cursos').value;
        const turnoSelecionado = document.querySelector('input[name="turno"]:checked');
        const turno = turnoSelecionado ? turnoSelecionado.value : '';

        studentCount++;

        // 3. Cria uma nova linha (tr) e preenche com os dados
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <th scope="row">${studentCount}</th>
            <td>${nome}</td>
            <td>${email}</td>
            <td>${telefone}</td>
            <td>${curso}</td>
            <td>${turno}</td>
        `;

        // 4. Adiciona a nova linha ao corpo da tabela 
        // e prepara o formulário para novas interações 
        tabelaBody.appendChild(newRow);
        form.reset();
        document.getElementById('nome').focus();
    });

});