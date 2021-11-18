//1 Если а – четное посчитать а*б, иначе а+б
function sumOrMul(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {

        return a % 2 === 0 ? a * b : a + b;
    }
    return;
}

console.log(sumOrMul(6, 9));

//2 Определить какой четверти принадлежит точка с координатами (х,у)

function pointWithCoordinates(x, y) {

    if (typeof x === "number" && typeof y === "number") {
        switch (true) {
            case x > 0 && y > 0:
                return 'I quarter';
            case x < 0 && y > 0:
                return 'II quarter';
            case x < 0 && y < 0:
                return 'III quarter';
            case x > 0 && y < 0:
                return 'IV quarter';
        }
    }
    return;
}

console.log(pointWithCoordinates(70, 20));

//3 Найти суммы только положительных из трех чисел
function sumNumber(firstNumber, secondNumber
    , thirdNumber) {

    if (typeof firstNumber === 'number', typeof secondNumber === 'number', typeof thirdNumber === 'number') {

        switch (true) {
            case firstNumber < 0:
                return thirdNumber + secondNumber ;
            case secondNumber < 0:
                return thirdNumber + firstNumber;
            case thirdNumber < 0:
                return secondNumber + firstNumber;
            default:
                return firstNumber + secondNumber + thirdNumber;
        }
    }
    return;
}

console.log(sumNumber(6, -17, 19));

//4 Посчитать выражение (макс(а*б*с, а+б+с))+3

function calculExpression(a, b, c) {

    if (typeof a === "number", typeof b === "number", typeof c === "number") {
 
        const expressionResult= (Math.max(a * b * c, a + b + c)) + 3;
        return expressionResult;
    }
    return;
}

console.log(calculExpression(7, 5, 9));

//5 Написать программу определения оценки студента по его рейтингу, на основе следующих правил


function studentRatingScore(rating) {

    if (typeof rating === "number" && rating >= 0) {

        switch (true) {
             case (0 >= rating && rating <= 19):
                return 'F';
             case (20 >= rating && rating <= 39):
                return 'E';
             case (40 >= rating && rating <= 59):
                return 'D';
             case (60 >= rating && rating <= 74):
                return 'C';
             case (74 >= rating && rating <= 89):
                return 'B';
             case (90 >= rating && rating <= 100):
                return 'A';
        }
    }
    return;
}
console.log(studentRatingScore(70));
