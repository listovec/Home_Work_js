//1. Найти сумму четных чисел и их количество в диапазоне от 1 до 99
function sumNumbers() {
 
    let sumOfNumbers = 0;
    let amountOfNumbers = 0;

    for (let i = 1; i < 99; i++) {

        if (i % 2 === 0) {
            sumOfNumbers += i;
        } else {
            amountOfNumbers ++ ;
        }

    }
    return `Cумму четных чисел:${sumOfNumbers}, Количество четных чисел: ${amountOfNumbers}`;
}
console.log(sumNumbers());


//2.Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)

function primeNumber(number) {

let count = 0;

if (typeof number === 'number' && number > 0) {
    for (let i = 1; i <= number; i++) {

        if (number % i === 0) {
            count++;
        }
    }
    if (count === 2) {
        return 'Primitive number';
    }
}

return 'Not a prime number';
}

console.log(primeNumber(9));


//3.Найти корень натурального числа с точностью до целого (рассмотреть вариант последовательного подбора и метод бинарного поиска)

function rootOfNumber(number) {

if (typeof number === 'number' && number > 0) {
    return number ** 0.5;
}
return;
}
console.log(rootOfNumber(45));


//5.Посчитать сумму цифр заданного числа

function sumNumbers(number) {
let count = 0;

if (typeof number === "number") {

    for (let i = 0; i <= number; i++) {
        count += i;
    }

    return count;
}
return;
}
console.log(sumNumbers(25));

//6.Вывести число, которое является зеркальным отображением последовательности цифр заданного числа, например, задано число 123, вывести 321.

function numberMirroring(number) {

if (typeof number === 'number') {
    let numberMirror = number.toString().split('').reverse().join('');
    numberMirror = +numberMirror;
    return numberMirror;
}
return;
}
console.log(numberMirroring(582));
