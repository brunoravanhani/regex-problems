const testRegex = 
    regex =>
        str => regex.test(str)

const testUpper = testRegex(/[A-Z]+/)
const testLower = testRegex(/[a-z]+/)
const testDigit = testRegex(/\d+/)
const testEspecialChar = testRegex(/[!@#\$%\^&\*\(\)\-\+]+/)

function minimumNumber(password) {
    const length = password.length;
    let number = 0;
    if (!testUpper(password)) number++
    if (!testLower(password)) number++
    if (!testDigit(password)) number++
    if (!testEspecialChar(password)) number++
    if (length < 6 && (6 - length) > number) number += (6 - length) - number
    return number;
}

console.log(minimumNumber('ab1'))
console.log(minimumNumber('#HackerRank'))
console.log(minimumNumber('9'))
console.log(minimumNumber('4700'))
console.log(minimumNumber('aaasssss'))
console.log(minimumNumber('@@1'))
