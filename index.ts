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
    restly.postgres

    return serviceName
}

