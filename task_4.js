// Task 4. 11.6. Функции обратного вызова
console.log("Task 4. 11.6. Функции обратного вызова");

let START_VAL = 1 //начало интервала
let END_VAL = 2   //конец интервала 
showMiddleValues(START_VAL, END_VAL)

function showMiddleValues(startVal, endVal) {
    let midVal = startVal //Значение входящее в интервал

    const intervalId = setInterval( () => {
        if (midVal >= startVal && midVal <= endVal) {
            console.log(midVal);
        }
        midVal++
    }, 1000); //задержка перед выводом 1 сек

    setTimeout(() => clearInterval(intervalId), 16000) // доступное время 16 сек (к заданию не относится)
    return
}
