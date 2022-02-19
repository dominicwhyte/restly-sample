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
    const result = { test: 'hi' } // await restly.GoogleSheet.addRow('my-gsheet-service', { data: inputs.data })

    return result
}

/**
 * @restly An endpoint for deleting a row
 * @method GET
 * @path /item
 */
export const getItem = (parameters: {
    // The name of the item to get 
    name: string
}) => {
    // @ts-ignore
    const data = { test: 'hello' } // await restly.GoogleSheet.addRow('my-gsheet-service', { data: [{ name: parameters.name }] })
    return data
}


/**
 * @restly A test endpoint
 * @method GET
 * @path /testing
 */
export const getTesting = (parameters: {
    // The name of the item to get 
    name: string
}) => {
    const test = `${parameters.name} hello`
    return test
}

export const handler = async (event: any, context: any, callback: any) => {
    return 'hello'
};
