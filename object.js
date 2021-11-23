//1.Составьте алгоритм, который считает, сколько времени вам нужно на приготовление яиц.

function getCookingTime(eggsAmount) {
    let result;
    if (
      typeof eggsAmount !== "number" ||
      !isFinite(eggsAmount) ||
      !Number.isInteger(eggsAmount) ||
      eggsAmount < 0
    ) {
      return result;
    }
    if (eggsAmount === 0) {
      return 0;
    }
    return Math.ceil(eggsAmount / 5) * 5;
  }
  
  console.log(getCookingTime(0));
  console.log(getCookingTime(5));
  console.log(getCookingTime(9));
  
  //2.Получая массив чисел. Все они либо нечетные, либо четные, кроме одного. Тебе нужно его найти.
  
  function getNumber(array) {
    let result;
    if (!Array.isArray(array)) {
      return;
    }
    const result = array.find((number) => number % 2 == 0);
  
    return result;
  }
  
  getNumber([1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17]); //returns 4
  
  function getNumberOdd(array) {
    if (!Array.isArray(array)) {
      return;
    }
    const result = array.find((number) => number % 2 !== 0);
    return result;
  }
  
  getNumber([0, 2, 8, -4, 0, -122, 13, -4, 28, 12]); //returns 13
  
  //3. Принимая массив объектов и случайную строку. У объектов может
  //быть ключ: «title» с разными значениями. Создайте алгоритм, который
  //фильтрует массив, заданный как первый параметр, и возвращает
  //массив объектов, которые содержат в своих заголовках заданную строку
  //в качестве второго параметра (без учета регистра).
  
  function findTitle(array, string) {
    if (Array.isArray(array) && typeof string === "string") {
      string = string.toLowerCase();
      return array.filter(({ title = "" }) =>
        title.toLowerCase().includes(string)
      );
    }
  }
  const arrayOfObjects = [
    { title: "Some title" },
    { title: "I like JS!" },
    { user: "This obj doesnt have key title js" },
    { title: "Js - is the best!" },
  ];
  console.log(findTitle(arrayOfObjects, "title")); // return [{ title: &#39;I like JS&#39;}, { title: &#39;Js - is the best!&#39; }]
  
  //4. Принимая строку, ваша функция должна вернуть обьект, в котором
  //ключи – символы строки, значение – количество повторений символов в
  //строке
  function countCharacters(string) {
    if (typeof string !== "string" && string.length === 0) {
      return;
    }
    string = string.split("");
  
    const result = string.reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;
  
      return acc;
    }, {});
  
    return "result: ", result;
  }
  
  console.log(countCharacters("sparrow")); // should return {s: 1, p: 1, a: 1, r: 2, o: 1, w: 1}
  countCharacters("aabcddeffge"); // should return {a: 2, b: 1, c: 1, d: 2, e: 2, f: 2, g: 1}
  countCharacters("a 2ab !d"); // should return {a: 2, b:1, d:1, 2:1}
  
  //5. Принимая число, ваша функция должна найти следующий
  //положительный палиндром большего размера.
  //Палиндром - это слово, фраза, число или другая последовательность
  //символов, которая читается так же, как вперед и назад, например,
  //«мадам».
  function getNextPalindrome(number) {
    if (typeof number !== "number" || !isFinite(number)) {
      return;
    }
    let result = number + 1;
    while (
      result.toString() !== result.toString().split("").reverse().join("") ||
      result < 10
    ) {
      result++;
    }
    return result;
  }
  getNextPalindrome(7); // returns 11
  getNextPalindrome(99); //returns 101
  getNextPalindrome(132); // returns 141
  getNextPalindrome(888); // returns 898
  getNextPalindrome(999); // returns 1001