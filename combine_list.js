list1 = ['a', 'b', 'c'];
list2 = [1, 2, 3];

const combine = (first, second) => {
  let combined = [];
  first.forEach((item, index) => {
    combined.push(item);
    combined.push(second[index]);
  });
  console.log(combined);
  return combined;
}

combine(list1, list2);
