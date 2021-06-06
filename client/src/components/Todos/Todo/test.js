/**
 * N = 45
 * [1, 3, "45", 33, 66, 22, "45", 98, 43]
 * 98^2 + 22^2 + 66^2
 *
 * N = 46
 * [46, 3, 46, 32, 67, 22, 46, 98, 43]
 * 98^2 + 46^2 + 22^2 + 32^2 +
 *
 * @SOLUTION
 * 1. Initialize a variable: sum = 0
 * 2. Loop backwards.
 * 3. For every element:
 *     a. Check if it's equal to N. If so, replace it by "sum"
 *     b. Check if it's even. If so, add its square to sum.
 */
function doThis(arr, N) {
  let sum = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    let current = arr[i];
    if (current === N) {
      arr[i] = sum;
    }
    if (current % 2 === 0) {
      sum += current ** 2;
    }
  }
  return arr;
}

function doThisToo(arr, K) {
  let startIndex = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i + 1 <= K) {
      sum += arr[i];
    } else if (sum > (sum += arr[i] - arr[i - K])) {
      startIndex = i - (K - 1);
    }
  }
  return [startIndex, startIndex + (K - 1)];
}
