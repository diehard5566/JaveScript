// Return the total number of arrays inside a given array.

const numOfSubbarrays = (arr) => (Array.isArray(arr[0]) ? arr.length : 0)

numOfSubbarrays([[1, 2, 3]]) // 1

numOfSubbarrays([
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
]) // 3

numOfSubbarrays([
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
]) // 4

numOfSubbarrays([1, 2, 3]) // 0
