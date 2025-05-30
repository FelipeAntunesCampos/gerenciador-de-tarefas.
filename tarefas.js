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
let tarefaAdicionadaPrimeiraPosicao = tarefas.unshift("Ir ao banheiro"); // adicionando estilo na primeira posição do índice
console.log("Depois do unshift:", tarefas); 

// Etapa 4: Removendo a Primeira Tarefa
let tarefaRemovidaPrimeiraPosicao = tarefas.shift();
console.log("Depois do shift:", tarefas); 

// Etapa 5: Verificando se uma Tarefa Existe
const tarefaParaVerificar = 'Ir à academia';

if (!tarefas.includes(tarefaParaVerificar)) {
  tarefas.push(tarefaParaVerificar);
  console.log("Tarefa ", tarefaParaVerificar, " adicionada.");
} else {
  console.log("A tarefa", tarefaParaVerificar, "já existe na lista.");
}

console.log('Lista de tarefas atualizada:', tarefas);

//  Etapa 6: Transformando a Lista em String
console.log("Tarefas como string:", tarefas.join(', '));  

//Etapa 7: Extraindo uma Parte da Lista
let elementosRemovidos = tarefas.splice(2, 4); 
console.log("Depois do splice:", tarefas); 
console.log("Elementos removidos:", elementosRemovidos);

//Etapa 8: Alterando a Lista
tarefas.splice(3, 1)
console.log("Depois de remover com o splice:", tarefas); 
tarefas.splice(3, 0, "Lavar a camisa do futebol")
console.log("Depois de adicionar com splice:", tarefas); 

//Etapa 9: Concatenando Tarefas
let tarefas2 = ['Arrumar a cama','Tomar café da manhã','Praticar atividades físicas','Tomar um banho']
console.log("Lista de tarefas combinadas:", tarefas.concat(tarefas2));

//Etapa 10: Transformando as Tarefas
let contadorTarefasTransformadas = [];
for (let i = 0; i < tarefas.length; i++) {
  contadorTarefasTransformadas.push('Fazer: ' + tarefas[i]);
}
console.log(contadorTarefasTransformadas);
