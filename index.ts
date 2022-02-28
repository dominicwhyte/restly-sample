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
    await googlesheet.addRow({sheetId: mySheetId, value: email})    

    return
}


/**
 * @restly Get waitlist entries
 * @method GET
 * @path /waitlist
 */
export const getWaitlist = async ({email}: {
    // Email requesting access
    email: string
}) => {
    const response = await googlesheet.read({sheetId: mySheetId})
    return response
}


/**
 * @restly Grant access to waitlist
 * @method POST
 * @path /grantAccess
 */
export const grantAccess = async ({email}: {
    // Email to grant access to
    email: string
}) => {
    const response = await googlesheet.read({sheetId: mySheetId})
    return response
}

/**
 * @restly Remove from waitlist
 * @method DELETE
 * @path /removeAccess
 */
export const removeAccess = async ({email}: {
    // Email to grant access to
    email: string
}) => {
    const response = await googlesheet.read({sheetId: mySheetId})
    return response
}






