"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSup = exports.onRequestAccess = void 0;
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
    await googlesheet.addRow({ sheetId: mySheetId, value: { email } });
    return;
};
exports.onRequestAccess = onRequestAccess;
/**
 * @restly Testing
 * @method GET
 * @path /sup
 */
const getSup = async () => {
    return 'sup';
};
exports.getSup = getSup;
//# sourceMappingURL=index.js.map