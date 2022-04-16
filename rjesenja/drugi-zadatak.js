function max(arr) {
  return arr.reduce((res, _, i) => (arr[res] > arr[i] ? res : i), 0);
}

function min(arr) {
  return arr.reduce((res, _, i) => (arr[res] < arr[i] ? res : i), 0);
}

function sortNumbers(numbers, sortFn) {
  const res = [];
  //Niz koji sortiramo se smanjuje pa moramo zapamtiti pocetnu duljinu za uvjet for petlje
  const length = numbers.length;

  for (let i = 0; i < length; i++) {
    const index = sortFn(numbers);
    const number = numbers[index];

    res.push(number);
    numbers.splice(index, 1);
  }

  return res;
}

const NUMBERS = [3, 2, 1, 4, 5, 2, 4, 7, 2, 8, 0];

// Splice i sort mutiraju niz na kojem se izvrsavaju zato je vazno napraviti kopiju to niza

console.log(sortNumbers([...NUMBERS], max));
console.log(sortNumbers([...NUMBERS], min));

// c)

const ascending = [...NUMBERS].sort((a, b) => a - b);
const descending = [...NUMBERS].sort((a, b) => b - a);

console.log({ ascending, descending });
