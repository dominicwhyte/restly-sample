import Restly from 'restly';


const restly = Restly('a5b5c56f2de8a865961eb6f6066dfd34574121a6e0f1f8ff');
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

    await googlesheet.addRow({ sheetId: mySheetId, value: { email } });

    return
}


