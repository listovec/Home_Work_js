// 1. Новый фильм &quot;Как натренировать своего дракона” только
// выпустили! В кассах кинотеатра много людей, стоящих в
// огромную очередь. У каждого из них есть банкнота в 100, 50 или
// 25 долларов. Билет на «Бэтмен против Супермена: На заре
// справедливости» стоит 25 долларов. Вася в настоящее время
// работает клерком. Он хочет продать билет каждому человеку в
// этой очереди. Может ли Вася продать каждому билет и отдать
// сдачу, если у него изначально нет денег и он продает билеты
// строго в том порядке, в котором люди следуют в очереди?
//     Верните YES, если Вася может продать каждому билет и отдать
// сдачу. В противном случае верните NO. Может ли Вася продать
// каждому билет и отдать сдачу?
//     Условия:
// * принимает массив из очереди людей
// * возвращает строку

function tikets(person) {
    if (!Array.isArray(person)) return 'No';
    if (person.length === 0) return 'No';

    let moneyDenomination = {'25': 0, '50': 0, '100': 0};
    for (let i=0; i<person.length; i++) {
        if (person[i] === 25) {
            moneyDenomination['25'] += 1;
        }
        if (person[i] === 50) {
            if (moneyDenomination['25'] >= 1) {
                moneyDenomination['25'] -=1;
                moneyDenomination['50'] += 1;
            } else {
                return "No";
            }
        }
        if (person[i] === 100) {
            if (moneyDenomination['25'] >= 1 && moneyDenomination['50'] >= 1) {
                moneyDenomination['25'] -= 1;
                moneyDenomination['50'] -= 1;
                moneyDenomination['100'] += 1;
            } else if (moneyDenomination['25'] >= 3) {
                moneyDenomination['25'] -= 3;
            } else {
                return "No";
            }
        }   return "Yes";
    }
 }
 console.log(tickets([25, 25, 50]));
 console.log(tickets([25, 100]));   // NO. Vasya will not have enough money togive change to 100 dollars
 console.log(tickets([25, 25, 50, 100])); // Yes
 console.log(tickets([25, 50, 100])); // No
 console.log(tickets(['25', '25', '50', '100'])); // Yes . У вас ошибка.Правильно No, у Васи на руках будет 50,а нужно будет вернуть 75.
 console.log(tickets(['25', '50', '100'])); // No
 
 // 2.Напишите функцию, которая получает два бесконечных числа в
// виде строк. Вы должны вернуть результат суммы этих двух чисел
// в виде строки. Математическая работа с этими двумя числами
// недоступна. Не используйте BigInt.
// getSum(‘123’, ‘324’) => ‘447’
// getSum(‘111111111111111111111111111111111111111111111111111’,
// ’23333333333333333333333333333333333333333333333333’)
// -&gt; ‘3444444.......4444444’

function getSum(firstNum,secondNum) {
    if (typeof firstNum !== 'string' || typeof secondNum !== 'string') {
        return;
    }
    let length;
    firstNum = firstNum.split('').reverse().map(Number);
    secondNum = secondNum.split('').reverse().map(Number);
    let result = [];
    if (firstNum.length > secondNum.length) {
        length = firstNum.length - secondNum.length;
        for (let j = 0; j < length; j++) {
            secondNum.push(0);
        }
    }
    if (secondNum.length > firstNum.length) {
        length = secondNum.length- firstNum.length;
        for (let k=0; k < length; k++) {
            firstNum.push(0);
        }
    }
         for (let i = 0; i < firstNum.length; i++) {
             let sumtwonum = 0;
             sumtwonum = (firstNum[i]) + (secondNum[i]);
             if (sumtwonum < 10) {
                 result.push(sumtwonum);
             } else if (sumtwonum > 9) {
                 sumtwonum = (firstNum[i]) + (secondNum[i]) - 10;
                 result.push(sumtwonum);
                 firstNum[i+1] += 1;
             }
         }
        return result.reverse().join('');
}

/*3. Создайте функцию, которая получает два аргумента: первый -
это массив объектов, второй - строка (имя автора). Ваша
функция должна возвращать количество сообщений с автором
из аргумента функции и комментариев с тем же автором. Пример
массива:*/

const listOfPosts2 = [
    {
        id: 1,
        post: 'some post1',
        title: 'title',
        author: 'Ivanov',
        comments: [
            {
                id: 1.1,
                comment: 'some comment1',
                title: 'title',
                author: 'Rimus'
            },
            {
                id: 1.2,
                comment: 'some comment2',
                title: 'title 2',
                author: 'Uncle'
            }
        ]
    },
    {
        id: 2,
        post: 'some post2',
        title: 'title 2',
        author: 'Ivanov',
        comments: [
            {
                id: 1.1,
                comment: 'some comment1',
                title: 'title 1',
                author: 'Rimus'
            },
            {

                id: 1.2,
                comment: 'some comment2',
                title: 'title 2',
                author: 'Uncle'
            },
            {
                id: 1.3,
                comment: 'some comment3',
                title: 'title 3',
                author: 'Rimus'
            }
        ]
    },
    {
        id: 3,
        post: 'some post3',
        title: 'title 3',
        author: 'Rimus'
    },
    {
        id: 4,
        post: 'some post4',
        title: 'title 4',
        author: 'Uncle'
    }
]

function getPostsAuthor(arrObj, authorStr) {
    let postsCount = 0;
    let commentsCount = 0;
    const obj = {};
    if (Array.isArray(arrObj) && typeof authorStr === 'string') {

        arrObj.forEach(element => {
            if (element.author === authorStr && element.post) {
                postsCount++;
            }

            if (element.comments) {
                element.comments.forEach(i => {
                    if (i.author === authorStr && i.comment) {
                        commentsCount++;
                    }
                });
            }
            Object.assign(obj, { post: postsCount, comment: commentsCount });
            return obj
        });
        return obj;
    }
    return;
}

console.log( getPostsAuthor(listOfPosts2, 'Rimus'));

// // 4.Напишите функцию кеш

const complexFunction = () => {
    const cache = {};
    return (arg1, arg2) => {
        if (arg1 in cache || arg2 in cache) {
            console.log('Taken from the cache');
            return cache[arg1] || cache[arg2];
        }
        else {
            console.log('Calculated not from cache');
            let result = arg1 + arg2;
            cache[arg2] = result;
            return result;
        }
    }
}
const cachedFunc = complexFunction();

console.log(cachedFunc('foo', 'bar')) // complexFunction должна выполнится
console.log(cachedFunc('foo', 'bar')) // complexFunction не должна выполняться
console.log(cachedFunc('foo', 'baz')) // complexFunction должна выполнится  //потому что метод не вызывался раньше с этими аргументами