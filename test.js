function getMatrixProduct(m1, m2) {
  let matrix = new Array(m1.length).fill([]);
  for (let i = 0; i < m1.length; i+=1) {
    let subArray = []
    for(let j = 0; j<m2[i].length; j+=1){
        let sum = 0;
        for(let k = 0; k < m2.length;k++){
            sum += m1[i][k] * m2[k][j]
        }
        subArray[j] = sum
    }
    matrix[i] = subArray
  }
  console.log(matrix)
}

getMatrixProduct(
  [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ],
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]
);
