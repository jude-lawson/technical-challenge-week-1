const fibonacci = (total) => {
  let [index, first, second] = [0, 0, 1];
  let third = first + second;
  console.log(0)
  console.log(1)
  console.log(third)
  while(index < (total - 3)) {
    first = second;
    second = third;
    third = first + second;
    console.log(third);
    index++;
  } 
};

fibonacci(100);
