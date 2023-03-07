const createGraph = require('./Graph'); 

/*
    Prueba Jest para la funcion createGraph()
    En base a las variable "V" y "E", el conteo de registros en la lista adjacency_list debe ser igual a 6
*/

test('createGraph() should return an adjacency list', () => {
    const V = 5;
    const E = [[1, 2, 3], [1, 4, 2], [3, 5, 1], [3, 4, 3]];
    let adjacency_list = createGraph(V, E);

    expect(adjacency_list.length).toEqual(6);
});

