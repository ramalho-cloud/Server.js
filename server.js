import express from 'express';
const app = express();

const aluno = {
  nome: 'João Silva',
  idade: 20,
  curso: 'Desenvolvimento de sistemas',
};

const escola = {
  nome: 'Escola SENAI',
  localizacao: 'São Paulo, Brasil',
  tipo: 'Técnica',
};

const cursos = [
  {
    nome: 'Desenvolvimento de sistemas',
    id: 1,
  },
  { nome: 'Fabricação mecânica', 
    id: 2 
},
    { nome: 'Eletroeletrônica',
      id: 3
    }
];

const professores = [
  {
    nome: 'Carlos Souza',
    disciplina: 'Programação',
  },
    { nome: 'Maria Oliveira',
      disciplina: 'Relacionamentos Interpessoais',
    },
    { nome: 'Pedro Santos',
      disciplina: 'Física',
    }
];

app.get('/', (req, res) => {
  res.send('Servidor funcionando');
});

app.get('/aluno', (req, res) => {
  res.json(aluno);
});

app.get('/escola', (req, res) => {
  res.json(escola);
}); 

app.get('/cursos', (req, res) => {
  res.json(cursos);
}); 

app.get('/professores', (req, res) => {
  res.json(professores);
}); 

app.get ('/ajuda', (req, res) => {
  res.send('Para acessar os dados, digite na URL: /aluno, /escola, /cursos, /professores');
});

app.get ('/requisicao', (req, res) => {
    res.send(`O metodo de requisição utilizado foi: ${req.method} e o caminho dela foi: ${req.path}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});