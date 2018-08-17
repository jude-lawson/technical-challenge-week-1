given = [1, 2, 3, 4, 5]

const sum = values => {
  let i = 0;
  let total = 0;
  while(i < values.length) {
    total += values[i];
    i++;
  }
  console.log(`The sum is: ${total}`);
  return total;
}

sum(given);
