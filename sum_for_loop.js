var given = [1, 2, 3, 4, 5]

const sum = values => {
  let total = 0
  for(var i = 0; i < values.length; i++) {
    total += values[i];
  }
  console.log(`The sum is: ${total}`);
  return total;
}

sum(given);
