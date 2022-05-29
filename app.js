const array = []
for (let i = 1; i <= 100; i++) {
    array.push(i)
}
//showing the array
console.log(array);

//using map
//if the number is divisible by 4 or 7 it will show the output
array.map(num => {
    if (num % 4 === 0) {
        console.log(num, 'is divisible by 4')
    }
    else if (num % 7 === 0) {
        console.log(num, 'is divisible by 7')
    }
})