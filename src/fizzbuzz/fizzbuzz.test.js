const fizzbuzz = require('./fizzbuzz')

describe('FizzBuzz puzzle', () => {
    // test('should return 0 when the given number is 0', () => {
    //     const result = fizzbuzz(0);
    //     console.log(result)
    //     expect(result).toEqual(0)
    // });

    test('Should return Fizz when the argument is 3',() => {
        const result = fizzbuzz(3);

        expect(result).toEqual('Fizz')
    });

    test('Should return buzz when the argumen is 5', () => {
        const result = fizzbuzz(5);

        expect(result).toEqual('Buzz')
    });

    test('Should return FizzBuzz when the argumentt is 15', () => {
        const result = fizzbuzz(15);

        expect(result).toEqual('FizzBuzz')
    })
});
