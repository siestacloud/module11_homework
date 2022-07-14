// Task 2. 11.2 Параметры и возвращаемое значение
console.log("Task 2. 11.2 Параметры и возвращаемое значение");

// элементы массива проверяются согласно заданию. 
const arrayCheck = [1, { "test": 1 }, true, false, 3, "pasha", 5, null, 400, 500, 3, 3, 3, 2, ["item", 1], NaN, 163, 0]
for (const index in arrayCheck) {
    primeCheck(arrayCheck[index]) 
}

// primeCheck проверяет, является ли число простым
function primeCheck(variable) {
    switch (true) {
        case !(typeof (variable) === "number" && !isNaN(+variable)):
            console.log("Проверка на число не пройдена");
            return;
        case variable > 1000:
            console.log("Данные не верны", variable, typeof (+variable));
            return;
        case variable < 3:
            console.log("Число не является ни простым, ни составным числом");
            return;
        default:
            for (let i = 2; i < variable; i++) {
                if (variable % i == 0) {
                    console.log(`Число ${variable} - составное`);
                    return; // выйдем из цикла
                }
            }
            console.log(`Число ${variable} - простое `);
            return
    }
}