function fizzbuzz(num) {
  let result = '';

  if (num % 3 === 0) {
    result += 'Fizz';
  }
  if (num % 5 === 0) {
    result += 'Buzz';
  }

  return result;
};

module.exports = fizzbuzz;