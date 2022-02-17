import restly from 'my-restly-demo-sdk'
// @ts-ignore
// In prod, RESTLY_KEY is set to the production key
restly.authenticate(process.env.RESTLY_KEY)


/**
 * @restly
 * @method POST
 * @path /item
 * An endpoint for adding a row
 */
export const addRow = (inputs: {
    // The data to add to the spreadsheet
    data: { name: string }[]
}) => {
    // @ts-ignore
    const result = await restly.GoogleSheet.addRow('my-gsheet-service', { data: inputs.data })

    return result
}

/**
 * @restly
 * @method GET
 * @path /item
 * An endpoint for deleting a row
 */
export const getItem = (parameters: {
    // The name of the item to get 
    name: string
}) => {
    // @ts-ignore
    const data = await restly.GoogleSheet.addRow('my-gsheet-service', { data: [{ name: parameters.name }] })
    return data
}

