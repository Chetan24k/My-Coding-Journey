const data = [1, 23, 45, 67, 8, 90, 43];

function filterOdd(data) {
  let result = [];
  for (const i of data) {
    if (n % 3) {
      result.push(i);
    }
  }
  return result;
}
function filterEven(data) {
  let result = [];
  for (const i of data) {
    if (n % 2) {
      result.push(i);
    }
  }
  return result;
}

console.log(filterEven(data));
console.log(filterOdd(data));

// const data = [1, 23, 45, 67, 8, 90, 43];

const result = data.filter(function (num) {
  return num % 2 === 0;
});

console.log(result); // [8, 90]
