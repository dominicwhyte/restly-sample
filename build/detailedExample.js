"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestAccess = exports.getWaitlist = exports.onRequestAccess = void 0;
// @ts-nocheck
const restly_1 = require("restly");
const restly = (0, restly_1.default)('a5b5c56f2de8a865961eb6f6066dfd34574121a6e0f1f8ff');
const googlesheet = restly.GoogleSheets('googlesheets-1');
const slack = restly.Slack('restly-slack');
const sendgrid = restly.Sendgrid('restly-slack');
const mySheetId = '19SgoB5sMKxeSnQ0eQbTwHyJAnQ1WPCk0tLf0iMB8lkg';
const campaignId = '12312';
/**
 * @restly Handle access request to the Restly beta!!
 * @method POST
 * @path /requestAccess
 */
const onRequestAccess = async ({ email }) => {
    await googlesheet.addRow({ sheetId: mySheetId, value: { email } });
    await slack.message({ channel: '#waitlist', message: `${email} joined the waitlist` });
    await sendgrid.sendEmail({ email, campaignId });
    return;
};
exports.onRequestAccess = onRequestAccess;
/**
 * @restly Get list of emails in the Restly beta
 * @method GET
 * @path /waitlist
 */
const getWaitlist = async () => {
    const waitlistEntries = await googlesheet.read({ sheetId: mySheetId });
    return waitlistEntries;
};
exports.getWaitlist = getWaitlist;
/**
 * @restly Request access to the Restly beta
 * @method POST
 * @path /requestAccess
 */
const requestAccess = async ({ email }) => {
    await googlesheet.addRow({ sheetId: mySheetId, value: { email } });
    await slack.message({
        channel: '#waitlist',
        message: `${email} joined waitlist`,
    });
    return;
};
exports.requestAccess = requestAccess;
//# sourceMappingURL=detailedExample.js.map