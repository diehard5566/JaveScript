

const matrix1 = [[0,1,0,0],[1,0,1,1],[0,1,0,1],[0,1,1,0]]

const isAdjacent = (matrix, node1, node2) => {
    // const x = matrix[node1];
    // const y = matrix[node2];
    // if (x[node1] === 1 || x[node2]===1){
    //     return true
    // }
    // return false;
    return matrix[node1][node2] === 1; //Boolean(matrix[node1][node2])

    


}


console.log((isAdjacent(matrix1, 0, 1))); //true
console.log((isAdjacent(matrix1, 0, 2)));//false
console.log((isAdjacent(matrix1, 2, 1)));//true
