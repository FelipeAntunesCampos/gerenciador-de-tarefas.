/* No arquivo tarefas.js, crie um array chamado tarefas com pelo menos 10 tarefas fictícias, representadas por strings. Exemplo:
*/

let tarefas = ['Estudar JavaScript', 'Fazer exercícios de matemática', 'Lavar a louça', 'Comprar mercado', 'Ir à academia', 'Ler um livro', 'Fazer revisão para o teste', 'Limpar o quarto', 'Estudar para concurso', 'Organizar o computador'];

// Etapa 1: Adicionando Novas Tarefas
tarefas.push('Jogar bola', 'Beber água') // adicionando um novo estilo
console.log(tarefas)

// Etapa 2: Removendo a Última Tarefa
let ultimoItemRemovido = tarefas.pop(""); //Outra maneira - let elementosRemovidos = tarefas.splice(-1, 1); 
//removendo o último estilo

console.log("Depois do pop:", tarefas); 

console.log("Elementos removidos:", ultimoItemRemovido);

// Etapa 3: Adicionando uma Tarefa no Início
let estiloAdicionadoPrimeiraPosicao = tarefas.unshift("Ir ao banheiro"); // adicionando estilo na primeira posição do índice
console.log("Depois do unshift:", tarefas); 
