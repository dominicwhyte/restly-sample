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
    const serviceName: 'my-gsheet-service' | 'test' = 'test'
    // @ts-ignore
    // const result = await restly.


    // const result = {}


    return result
}

/**
 * @restly A sample test endpoint asdfasdf!!!!
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


