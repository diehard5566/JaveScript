// Your task, is to create N x N multiplication table, of size n provided in parameter.

// For example, when n is 5, the multiplication table is:

// 1, 2, 3, 4, 5
// 2, 4, 6, 8, 10
// 3, 6, 9, 12, 15
// 4, 8, 12, 16, 20
// 5, 10, 15, 20, 25
// This example will result in:
// [[1, 2, 3, 4, 5], [2, 4, 6, 8, 10], [3, 6, 9, 12, 15], [4, 8, 12, 16, 20], [5, 10, 15, 20, 25]]

const multiplicationTable = n => {
    let table = []
    for (let i = 1; i <= n; i++) {
        let row = []
        for (let j = 1; j <= n; j++) {
            row.push(i * j)
            row
        }
        table.push(row)
    }
    table
}

// multiplicationTable(1) // [[1]]

// multiplicationTable(3) // [[1, 2, 3], [2, 4, 6], [3, 6, 9]]
multiplicationTable(5)
// [[1, 2, 3, 4, 5], [2, 4, 6, 8, 10], [3, 6, 9, 12, 15], [4, 8, 12, 16, 20], [5, 10, 15, 20, 25]]
