import Restly from 'restly';


const restly = Restly('e585686ff1be172c672ea26a4e0c1efc49d055f04408a4a6');
const googlesheet = restly.GoogleSheets('googlesheets-5');
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


