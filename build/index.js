"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onRequestAccess = void 0;
const restly_1 = require("restly");
const restly = (0, restly_1.default)('0e4afc9634c0757265463287ff4931ecc9906d30ef59600a');
const googlesheet = restly.GoogleSheets('googlesheets-2');
// const slack = restly.Slack('restly-slack');
// const sendgrid = restly.Sendgrid('restly-slack');
const mySheetId = '19SgoB5sMKxeSnQ0eQbTwHyJAnQ1WPCk0tLf0iMB8lkg';
const campaignId = 'dom todo';
/**
 * @restly Handle access request to the Restly beta
 * @method POST
 * @path /requestAccess
 */
const onRequestAccess = async ({ email }) => {
    await googlesheet.addRow({ sheetId: mySheetId, value: { email } });
    // await slack.message({ channel: '#waitlist', message: `${email} joined the waitlist` });
    // await sendgrid.sendEmail({email, campaignId})
    return;
};
exports.onRequestAccess = onRequestAccess;
//# sourceMappingURL=index.js.map