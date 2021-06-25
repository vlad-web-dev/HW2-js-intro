console.log('------------- #4')
const a = 5 + 5;
const b = 5 - 5;
const c = 5 * 5;
const d = 5 / 5;

console.log(`a=${a} b=${b} c=${c} d=${d}`)

console.log('------------- #5')
for (let i = 1; i < 6; i++) {
    console.log(i)
}

console.log('------------- #6')
for (let i = 5; i > 0; i--) {
    console.log(i)
}

console.log('------------- #7')
function getMarkInfo(condition) {
    const result = condition === 10 ? 'У вас максимальный балл' : 'У вас средний балл'
    console.log(result)
}
getMarkInfo(10)
getMarkInfo(1)

console.log('------------- #8')
function getDayInfo(position) {
    let result
    switch (position) {
        case 0: {
            result = 'Sunday'
            break;
        }
        case 1: {
            result = 'Monday'
            break;
        }
        case 2: {
            result = 'Tuesday'
            break;
        }
        case 3: {
            result = 'Wednesday'
            break;
        }
        case 4: {
            result = 'Thursday'
            break;
        }
        case 5: {
            result = 'Friday'
            break;
        }
        case 6: {
            result = 'Saturday'
            break;
        }
        default: {
            result = 'Wrong data'
        }
    }
    console.log(result)

}
getDayInfo(0)
getDayInfo(1)
getDayInfo(2)
getDayInfo(3)
getDayInfo(4)
getDayInfo(5)
getDayInfo(6)

console.log('------------- #9')
let  arr = ['a', 'b', 'c']
arr.push(1)
arr.push(2)
arr.push(3)
console.log(arr)

console.log('------------- #10')
let  arr1 = ['a', 'b', 'c']
let  arr2 = [4, 5, 6]
let arrConcat = arr1.concat(arr2)
console.log(arrConcat)

console.log('------------- #11')
function sum(val) {
    let result = 0
    if (Number.isInteger(val) && val > 0) {
        let beginValue = 0
        for(val; beginValue < val; val--) {
            result+=val
        }
    } else {
        result = 'Неверное число'
    }
    console.log(result)

}
sum(3)
sum(5)
sum(-6)
sum(2.5)