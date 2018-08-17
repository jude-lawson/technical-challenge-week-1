given = [50, 2, 1, 9];
// given = [100, 20, 7];

const greatest_combined = values => {
  let sorted_by_first_digit = values.sort((a,b) => {
    let previous = parseInt(String(a).split('')[0]);
    let next = parseInt(String(b).split('')[0]);
    return next - previous;
  });

  console.log(sorted_by_first_digit.join(''));
};

greatest_combined(given);
