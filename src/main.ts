// Create a function which stores inside a secret word which cannot be changed or accessed from outside
function someFunction() {
  const secret = 'secret'

  return () => secret
}
const getSecret = someFunction()
console.log(getSecret());