const {onRequestAccess, getWaitlist} = require('./build/index')



const test = async () => {
// const result = await onRequestAccess({email: 'test'})
const result = await getWaitlist()
console.log(result)
}
test()