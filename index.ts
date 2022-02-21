import restly from 'my-restly-demo-sdk'
// @ts-ignore
// In prod, RESTLY_KEY is set to the production key
// restly.authenticate(process.env.RESTLY_KEY)


/**
 * @restly An endpoint for adding a row
 * @method POST
 * @path /item
 */
export const addRow = (inputs: {
    // The data to add to the spreadsheet
    data: { name: string }[]
}) => {
    // @ts-ignore
    // const result = await restly.GoogleSheet.addRow('my-gsheet-service', { data: inputs.data })
    const result = { test: 'hi' }

    return result
}

/**
 * @restly A sample test endpoint asdfasdf!!
 * @method GET
 * @path /sample
 */
export const getSample = (parameters: {
    // The name of the item to get 
    banana: string
}) => {
    const test = `${parameters.banana} hellohello!`
    return test
}


/**
 * @restly A great deletion endpiont!
 * @method DELETE
 * @path /deleteme
 */
export const deleteRow = (parameters: {
    // The name of the item to get 
    banana: string
}) => {
    const test = `${parameters.banana} hellohello!`
    return test
}



/**
 * @restly A montana endpoint!
 * @method GET
 * @path /sample
 */
export const testEndpoint = (parameters: {
    // The name of the item to get 
    a: string,
    b: string
}) => {
    const test = 'hi'
    return parameters.a + parameters.b
}
