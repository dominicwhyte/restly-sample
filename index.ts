import Restly from 'restly';


const restly = Restly('7bdba6026504ca5027274375cfde5def0152973372eb85c7');


const googlesheet = restly.GoogleSheets('googlesheets-1');

const mySheetId = '19SgoB5sMKxeSnQ0eQbTwHyJAnQ1WPCk0tLf0iMB8lkg'

/**
 * @restly Handle access request to the Restly beta!!
 * @method POST
 * @path /requestAccess
 */
export const onRequestAccess = async ({email}: {
    // Email requesting access
    email: string
}) => {
    await googlesheet.addRow({sheetId: mySheetId, value: {email }})

    return
}

/**
 * @restly Get all emails on the waitlist
 * @method GET
 * @path /waitlist
 */
export const getWaitlist = async () => {

    const response = await googlesheet.read({sheetId: mySheetId})

    return response
}




