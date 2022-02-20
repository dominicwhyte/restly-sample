const test = require('./build/index')

const run = async () => {

    console.log(await test.__restly_handler({operationId: 'getTesting', parameters: {name: 'bob'}}))

    

}

run()