"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.grantAccess = exports.getWaitlist = exports.onRequestAccess = void 0;
const restly_1 = require("restly");
const restly = (0, restly_1.default)('7bdba6026504ca5027274375cfde5def0152973372eb85c7');
const googlesheet = restly.GoogleSheets('googlesheets-1');
const mySheetId = '19SgoB5sMKxeSnQ0eQbTwHyJAnQ1WPCk0tLf0iMB8lkg';
/**
 * @restly Handle access request to the Restly beta!!
 * @method POST
 * @path /requestAccess
 */
const onRequestAccess = async ({ email }) => {
    await googlesheet.addRow({ sheetId: mySheetId, value: email });
    return;
};
exports.onRequestAccess = onRequestAccess;
/**
 * @restly Get waitlist entries
 * @method GET
 * @path /waitlist
 */
const getWaitlist = async ({ email }) => {
    const response = await googlesheet.read({ sheetId: mySheetId });
    return response;
};
exports.getWaitlist = getWaitlist;
/**
 * @restly Grant access to waitlist
 * @method POST
 * @path /grantAccess
 */
const grantAccess = async ({ email }) => {
    const response = await googlesheet.read({ sheetId: mySheetId });
    return response;
};
exports.grantAccess = grantAccess;
//# sourceMappingURL=index.js.map