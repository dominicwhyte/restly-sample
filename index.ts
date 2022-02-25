import Restly from 'restly';


const restly = Restly('0e4afc9634c0757265463287ff4931ecc9906d30ef59600a');
const googlesheet = restly.GoogleSheets('googlesheets-2');
// const slack = restly.Slack('restly-slack');
// const sendgrid = restly.Sendgrid('restly-slack');

const mySheetId = '19SgoB5sMKxeSnQ0eQbTwHyJAnQ1WPCk0tLf0iMB8lkg'
const campaignId = 'dom todo'

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

    // await slack.message({ channel: '#waitlist', message: `${email} joined the waitlist` });

    // await sendgrid.sendEmail({email, campaignId})

    return
}


