//1. Найти минимальный элемент массива
function minElement
(array) {

    if (Array.isArray(array)) {
        const minvalue = Math.min(...array);
        return minvalue;
    }
    return;
}
console.log(minElement([15, 9, 3]));

//2.Найти максимальный элемент массива

function maxElement(array) {

    if (Array.isArray(array)) {
        const maxvalue = Math.max(...array);

        return maxvalue;
    }
    return;
}
console.log(maxElement([-1, 0, 1]));

//3.Найти индекс минимального элемента массива

function indexMinElement(array) {

    if (Array.isArray(array)) {
        const minvalue = array.indexOf(Math.min(...array));

        return minvalue;
    }
    return;
}
console.log(indexMinElement([1, 2, 3, 4, 5]));

//4.Найти индекс максимального элемента массива

function indexMaxElement(array) {

    if (Array.isArray(array)) {
        const maxvalue = array.indexOf(Math.max(...array));

        return maxvalue;
    }
    return;
}
console.log(indexMaxElement([1, 2, 3]));


//5.Посчитать сумму элементов массива с нечетными индексами

function summArray(array) {

    if (Array.isArray(array)) {
        let sum = 0;

        array.forEach((item, index) => {
 

            if (index % 2 !== 0) sum += item;
        });

        return sum;
    }
    return;
}
console.log(summArray([1, 2, 3, 4, 5, 4, 3, 2, 1]));

//6.Сделать реверс массива (массив в обратном направлении)

function reverseArray(array) {

    if (Array.isArray(array)) {

        return array.reverse();
    }
    return;
}
console.log(reverseArray([1, 2, 3, 4, 5, 6]));

//7.Посчитать количество нечетных элементов массива

function oddElements(array) {

    let sum = 0;

    if (Array.isArray(array)) {
        array.forEach(item => {

            if (item % 2 !== 0) sum += item;

        });
        return sum;
    }
    return;
}
console.log(oddElements([1, 2, 3, 4, 5]));

