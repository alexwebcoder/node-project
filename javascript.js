let x = {}
console.log(x)

let y = null
console.log(y)

console.log(typeof 'ten')

let cat = '  Felix';
console.log(cat.trim())

let user = {
    first_name: 'max',
    last_name: 'woowoo',
    age: Infinity,
    citizenship: 'man of the world'
}

console.log(Object.keys(user).length)

let arr3 = ['cat', 'rat', 'bat']
console.log(arr3.push('mat'))
console.log(arr3)

arr3[arr3.length + 1] = 'fat';
 console.log(arr3)

 arr3[15] = 'splat'
 console.log(arr3)

 const names = ['Zach', 'John', 'Maria', 'Moonbeam', 'alfred', 'jerry', 'marc'];

let sorted = names.slice().sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
console.log(sorted)