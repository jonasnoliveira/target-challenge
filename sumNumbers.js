const sumNumbers = () => {
  let sum = 0,
    k = 0,
    indice = 13;

  while (k < indice) {
    k += 1;
    sum += k;
  }
  return console.log(sum);
};

sumNumbers();
