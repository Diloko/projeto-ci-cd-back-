const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Configuração do CORS
app.use(cors({
  origin: 'https://projeto-ci-cd-front-phi.vercel.app', // substitua pela URL real do frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

// Middleware para JSON
app.use(express.json());

// Rota principal
app.get('/', (req, res) => {
  res.json({ message: 'API funcionando com CORS!' });
});

// Inicialização do servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
