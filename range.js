const range = function (start, end, step) {
  let someArray = [];
  if (start === undefined || end === undefined || step === undefined) {
    return someArray;
  } else if (start > end) {
    return someArray;
  } else if (step <= 0){
    return someArray;
  } else {  
    for (let i = start; i <= end; i += step) {
      someArray.push(i);
    }
    return someArray;
  }
};

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));