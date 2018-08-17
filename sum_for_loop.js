var given = [1, 2, 3, 4, 5]

const sum = (values) => {
  let sum = 0
  for(var i = 0; i < values.length; i++) {
    sum += values[i];
  }
  console.log(sum);
  return sum;
}

sum(given);
