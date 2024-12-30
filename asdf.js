function getBalanceIndex(arr) {
  let arrSum = 0;
  let leftSum = 0;

  for (let i = 0; i < arr.length; i += 1) {
    arrSum += arr[i];
  }

  for (let j = 0; j < arr.length; j += 1) {
    const rightSum = arrSum - leftSum - arr[j];

    if (rightSum === leftSum) return j;
    leftSum += arr[j];
  }
}

console.log(getBalanceIndex([1, 2, 5, 3, 0]));
