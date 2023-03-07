/*
  - Este codigo crea un grafico utilizando la variable adjacency list. 
  - Los parametros V y E son utilizados para crear el grafico. 
  - V es el numero de los vertices en el grafico y E es una matriz de aristas
  - La función crea una lista vacia llamada adjacency_list con elementos V+1 (ya que comienza a contar desde 0) y 
    luego agrega aristas a la lista. Agrega cada borde dos veces, una vez para cada dirección del borde. Finalmente, 
    devuelve la variable adjacency_list que representa el gráfico.
*/

function createGraph(V, E) {
    let adjacency_list = [];

    for (let i = 0; i <= V; i++) {
        adjacency_list.push([]);
    }

    for (let i = 0; i < E.length; i++) {
        adjacency_list[E[i][0]].push([E[i][1], E[i][2]]);
        adjacency_list[E[i][1]].push([E[i][0], E[i][2]]);
    }

    return adjacency_list;
}

const V = 5;
const E = [[1, 2, 3], [1, 4, 2], [3, 5, 1], [3, 4, 3]];

let graph = createGraph(V, E);

console.log(graph.length);
console.log(graph);

module.exports = createGraph;