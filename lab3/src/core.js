function isInteger(n) {
    // проверка целого числа через побитовую операцию
    return (n ^ 0) === n;
}

function even() {
    // массив четных чисел от 2 до 20
    const arr = [];
    for (let i = 2; i <= 20; i += 2) {
        arr.push(i);
    }
    return arr;
}

function sumTo(n) {
    // сумма чисел от 1 до n через цикл
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

function recSumTo(n) {
    // сумма через рекурсию
    if (n === 1) return 1;
    return n + recSumTo(n - 1);
}

function factorial(n) {
    // факториал
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

function isBinary(n) {
    // проверяем, является ли степень двойки
    if (n <= 0) return false;
    return (n & (n - 1)) === 0;
}

function fibonacci(n) {
    // n-е число Фибоначчи
    if (n <= 1) return n;
    let a = 1, b = 1;
    for (let i = 3; i <= n; i++) {
        [a, b] = [b, a + b];
    }
    return b;
}

function getOperationFn(initialValue, operatorFn) {
    let storedValue = initialValue;
    if (typeof operatorFn !== 'function') {
        return () => storedValue;
    }
    return (newValue) => {
        storedValue = operatorFn(storedValue, newValue);
        return storedValue;
    };
}

function sequence(start = 0, step = 1) {
    let current = start;
    return function() {
        const result = current;
        current += step;
        return result;
    };
}

function deepEqual(firstObject, secondObject) {
    if (firstObject === secondObject) return true;

    if (Number.isNaN(firstObject) && Number.isNaN(secondObject)) return true;

    if (typeof firstObject !== 'object' || typeof secondObject !== 'object' || firstObject === null || secondObject === null)
        return false;

    const keys1 = Object.keys(firstObject);
    const keys2 = Object.keys(secondObject);
    if (keys1.length !== keys2.length) return false;

    for (let key of keys1) {
        if (!keys2.includes(key)) return false;
        if (!deepEqual(firstObject[key], secondObject[key])) return false;
    }

    return true;
}

module.exports = {
    isInteger,
    even,
    sumTo,
    recSumTo,
    factorial,
    isBinary,
    fibonacci,
    getOperationFn,
    sequence,
    deepEqual,
};
