/*----------  1.- Closures  ----------*/
// Create a function which stores inside a secret word which cannot be changed or accessed from outside
// function someFunction() {
//   const secret = 'secret'

//   return () => secret
// }
// const getSecret = someFunction()
// console.log(getSecret());

/*----------  2.- Cloning Objects  ----------*/
// How can I clone an object in JavaScript
// let obj = { a: 1, b: 2 }
// 1.- Solution
// let clone: Record<string, string | number> = { ...obj }
// 2.- Solution
// let clone: Record<string, string | number> = Object.assign({}, obj)
// clone.foo = "foo"
// console.log({obj, clone})

/*----------  3.- Count vowels inside a string  ----------*/
// Count vowels inside a string
// 1.- Solution
// const findVowels = (str: string) => {
//   const vowels: Array<string> = ['a', 'e', 'i', 'o', 'u']
//   let count = 0
//   for (let char of str) {
  //     if (vowels.includes(char)) {
    //       count++
    //     }
    //   }
    //   return count
    // }
    // 2.- Solution
// function findVowels(str:string) {
//   const vowels: Array<string> = ['a', 'e', 'i', 'o', 'u']
//   return str.toLowerCase().split('').reduce((acc, char) => (vowels.includes(char) ? acc + 1 : acc), 0)
// }

// console.log(findVowels('Hola Hugo'));

/*----------  4.- Reverse each word in sentence  ----------*/
// const str: string = "Welcome to the Job interview!"
// const reverseString = (str: string) => str.split(' ').reverse().join(' ')
// console.log(reverseString(str))


/*----------  5.- Most Common string  ----------*/
// Define a function that takes an array of strings, and returns the most commonly occurring string in that array
// 1.- Solution
// const mostCommonString = (strings: string[]) => {
//   const commonStrings: Record<string, number | undefined> = {}

//   strings.forEach((str) => {
//     if (commonStrings[str] === undefined) {
//       commonStrings[str] = 1;
//     } else {
//       commonStrings[str]!++
//     }
//   })

//   let maxEntry: string
//   let maxValue = 0

//   for (const commonString in commonStrings) {
//     if ( commonStrings[commonString]! > maxValue) {
//       maxEntry = commonString
//       maxValue = commonStrings[commonString] as number
//     }
//   }

//   return maxEntry!
// }
// 2.- Solution
// type StringTuple = [string | null, number]
// const mostCommonString = (strings: string[]) => {
//   const mapping = strings.reduce((acc, el) => {
//       acc[el] = acc[el] ? acc[el]! + 1 : 1
//     return acc
//   }, {} as Record<string, number | undefined>)

//   return Object.entries(mapping)
//         .reduce(
//           (acc: StringTuple, [key, value]: [string, number | undefined]) => 
//           (value && value > acc[1] ? [key, value] : acc), [null, 0] as StringTuple)[0]
// }

// console.log(mostCommonString(["a", "b", "c", "a", "b", "b"]));







