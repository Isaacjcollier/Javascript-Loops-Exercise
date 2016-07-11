console.log('-=-=-=-=-=-=-= Problem 1')

for (var i = 0; i < 25; i++) {
  if (i % 2 === 0) {
    console.log(i, 'Even')
  } else {
    console.log(i, 'Odd')
  }
}

console.log('-=-=-=-=-=-=-= Problem 2')

for (var j = 0; j <= 50; j++) {
  if (j % 3 === 0 && j % 5 === 0) {
    console.log(j, 'FizzBuzz')
  } else if (j % 3 === 0) {
    console.log(j, 'Fizz')
  } else if (j % 5 === 0) {
    console.log(j, 'Buzz')
  }
}

console.log('-=-=-=-=-=-=-= Problem 3')

var total = 0
for (var k = 0; k < 1000; k++) {
  if (k % 3 === 0 || k % 5 === 0) {
    total += k
  }
}
console.log(total)

console.log('-=-=-=-=-=-=-= Problem 4')

var hash = '#'
for (var l = 0; l < 7; l++) {
  console.log(hash)
  hash += '#'
}
