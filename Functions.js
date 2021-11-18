//1. Получить строковое название дня недели по номеру дня. 
const dayOfWeek= {
	1: 'Sunday',
	2: 'Monday',
	3: 'Tuesday',
	4: 'Wednesday',
	5: 'Thursday',
	6: 'Friday)',
	7: 'Saturday'
};
let weekDay = (dayNumber) => {
	return dayOfWeek[dayNumber]
};
console.log(weekDay(1));


//2.Найти расстояние между двумя точками в двухмерном декартовом пространстве.

function task2(x1, x2, y1, y2) {

    if (typeof x1 == 'number' && typeof x2 == 'number' && typeof y1 == 'number' && typeof y2 == 'number') {

        const result = ((x2 - x) ** 2 + (y2 - y) ** 2) ** 0.5;

        return result;
    }
    return;
}
console.log(task2(3, 4, 5, 6));

//3.Вводим число(0-999), получаем строку с прописью числа.

function task3(number) {

    const arrCount = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

    if (typeof number === 'number') {

        let arrNumber = String(number).split('');

        switch (arrNumber.length === 3) {
            case arrNumber[0] === 1 && arrNumber[1] === 0 && arrNumber[2] === 0:

        }

        return arrNumber;
    }

    return;
}
console.log(task3(657)); 