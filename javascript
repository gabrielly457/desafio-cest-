// Exemplo simples com Express
const express = require('express');
const app = express();
app.use(express.json());

// Rota que o HTML vai chamar
app.get('/api/dados', (async (req, res) => {
    // Aqui entraria a consulta real ao banco de dados
    res.json({ mensagem: "Dados vindos do banco de dados com sucesso!" });
}));

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
