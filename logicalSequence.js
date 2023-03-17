const a = () => {
  let number = 1;
  console.log(number);
  for (let index = 0; index < 4; index++) {
    console.log(number += 2);
  }
}

const b = () => {
  let number = 2;
  console.log(number);
  for (let index = 0; index < 6; index++) {
    console.log(number *= 2);
  }
}