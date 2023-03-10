const { createGraph, djikstra } = require('./Dijkstra.js')

/*
    Prueba Jest para la funcion createGraph()
    En base a las variable "V" y "E", el conteo de registros en la lista adjacency_list debe ser igual a 9
*/
test('createGraph() should return an adj_list list', () => {
    let V = 9;
    let E = [[0, 1, 4], [0, 7, 8], [1, 7, 11], [1, 2, 8], [7, 8, 7], [6, 7, 1], [2, 8, 2],
    [6, 8, 6], [5, 6, 2], [2, 5, 4], [2, 3, 7], [3, 5, 14], [3, 4, 9], [4, 5, 10]];
    let adj_list = createGraph(V, E);
    expect(adj_list.length).toEqual(9);
});

/*
    Prueba Jest para la funcion djikstra()
    En base a las variable "V" y "E", obtengo el resultado en la variable "graph", posteriormente almaceno en la variable "distances"
    el resultado devuelto de la función djikstra
    El conteo sobre la varibale distances debe ser igual a 9 (basado en las variables)
*/
test('djikstra() should return an dist list', () => {
    let V = 9;
    let E = [[0, 1, 4], [0, 7, 8], [1, 7, 11], [1, 2, 8], [7, 8, 7], [6, 7, 1], [2, 8, 2],
    [6, 8, 6], [5, 6, 2], [2, 5, 4], [2, 3, 7], [3, 5, 14], [3, 4, 9], [4, 5, 10]];
    
    let graph = createGraph(V, E);
    let distances = djikstra(graph, V, 0);
    
    expect(distances.length).toEqual(9);
});
