/*
* Problem Description Given a matrix of m * n elements (m rows, n columns), 
* return all elements of the matrix in spiral order.Example: 
* Given the following matrix: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ] 
* You should return[1, 2, 3, 6, 9, 8, 7, 4, 5] 
*/

// Time complexity - O(m.n) -> We need to iterate through all the elements of the matrix m*n
// Space complexity - O(m.n) -> creating an array of length m.n

function spiralMatrix(matrix){
    let m = matrix.length, n = matrix[0].length; 
    let arr = [];
    let i_start = 0, j_start = 0, i_end = m-1, j_end = n-1;
    while(i_start<=i_end||j_start<=j_end){ 
        // top row
        for(let i = i_start,j = j_start; j <= j_end&& i<=i_end; j++){          
            arr.push(matrix[i][j]);
        }
        // eleminating first row from the matrix
        i_start++;          
        // last column
        for(let i = i_start,j = j_end; i <= i_end&& j>=j_start; i++){        
            arr.push(matrix[i][j]);
        }
        // eleminating last column from the matrix
        j_end--;                                             
        
        // last row
        for(let i = i_end,j = j_end; j >= j_start&&i >= i_start; j--){        
            arr.push(matrix[i][j]);
        }
        // eleminating last row
        i_end--;    
        
        // First column
        for(let i = i_end,j = j_start; i >= i_start&&j<=j_end; i--){        
            arr.push(matrix[i][j]);
        }
        // eleminating First column
        j_start++;        
    }
    return arr;
}


//Test Cases

console.log(spiralMatrix([ [ 1, 2, 3, 7], [ 4, 5, 6, 7], [ 7, 8, 9, 7], [ 4, 8, 3, 7] ] ));
// console.log(spiralMatrix([ [], [], [] ]));
// console.log(spiralMatrix([ [ 1, 2, 3, 4 ], [ 4, 5, 6, 5 ], [ 7, 8, 9, 2 ] ] ));
// console.log(spiralMatrix([ [ 1, 2, 3, 4, 3 ], [ 4, 5, 6, 5, 5 ], [ 7, 8, 9, 2, 9 ] ] ));
//  console.log(spiralMatrix([ [ 1, 2, 3], [ 4, 5, 6], [ 7, 8, 9] ] ));
