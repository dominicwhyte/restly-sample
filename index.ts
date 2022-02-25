import Restly from 'restly';


const restly = Restly('a5b5c56f2de8a865961eb6f6066dfd34574121a6e0f1f8ff');
const googlesheet = restly.GoogleSheets('googlesheets-1');
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

/**
 * @restly Get list of emails in the Restly beta
 * @method GET
 * @path /waitlist
 */
export const getWaitlist = async () => {

    const waitlistEntries = await googlesheet.read({sheetId: mySheetId})

    return waitlistEntries
}


/**
 * @restly Simple demo endpoint
 * @method GET
 * @path /test
 */
export const test = async ({input}: {
    // Email requesting access
    input: string
}) => {
    return `You gave input: ${input}`
}


