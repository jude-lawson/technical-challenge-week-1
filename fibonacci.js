const fibonacci = () => {
  let index = 0;
  let first = 0;
  let second = 1;
  let third = first + second;
  console.log(0)
  console.log(1)
  console.log(third)
  while(index < 7) {
    first = second;
    second = third;
    third = first + second;
    console.log(third);
    index++;
  } 
};

fibonacci();
