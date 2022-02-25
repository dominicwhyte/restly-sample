const {onRequestAccess} = require('./build/index')



const test = async () => {
const result = await onRequestAccess({email: 'test'})
console.log(result)
}
test()