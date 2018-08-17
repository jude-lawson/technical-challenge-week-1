given = [1, 2, 3, 4, 5]

const sum = (values, current_index = 0, total = 0) => {
  total += values[current_index]
  if (current_index < values.length - 1) {
    sum(values, current_index + 1, total)
  } else {
    console.log(total);
    return total;
  }
}

sum(given);
