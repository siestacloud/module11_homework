// Task 1. 11.1 Функции без параметров
console.log("Task 1. 11.1 Функции без параметров");

array = [1, { "test": 1 }, true, false, 3, "pasha", 5, null, 1000, 500, 3, 3, 3, 8, ["item", 1]] //четных 3  не четных 6

const parityCheck = (array) => {
    let sumEven = 0;
    let sumOdd = 0;

    for (let elem of array) {
        if (typeof (elem) === "number" && !isNaN(+elem)) {
            if (elem % 2 == 0) {
                sumEven++
            } else {
                sumOdd++
            }
        }
    }
    console.log(`Сумма четных чисел в массиве: ${sumEven}  Сумма не четных чисел в массиве: ${sumOdd} `);
}
parityCheck(array)
