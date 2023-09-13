// Função para carregar os dados da planilha
function carregarDados() {
    fetch('Dados.csv')
        .then(response => response.text())
        .then(data => {
            const linhas = data.split('\n');
            const tabela = document.getElementById('tabela-dados');

            // Limpar a tabela atual
            tabela.innerHTML = '';

            for (let i = 0; i < linhas.length; i++) {
                const colunas = linhas[i].split(',');
                const row = tabela.insertRow(-1);

                for (let j = 0; j < colunas.length; j++) {
                    const cell = row.insertCell(j);
                    cell.innerHTML = colunas[j];
                }
            }
        })
        .catch(error => console.error('Erro ao carregar dados:', error));
}

// Chama a função para carregar os dados a cada 5 segundos
setInterval(carregarDados, 5000); // 5000 milissegundos = 5 segundos
