// Task 3. 11.3 Функции высшего порядка
console.log("Task 3. 11.3 Функции высшего порядка");

function sum(num1) {
    return function (num2) {
        return num1 + num2
    }
}
const func = sum(2)

console.log(`Просто сумма двух чисел: ${func(2)}`);
