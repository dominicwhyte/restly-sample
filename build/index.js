"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testing = exports.onRequestAccess = void 0;
const restly_1 = require("restly");
const restly = (0, restly_1.default)('a5b5c56f2de8a865961eb6f6066dfd34574121a6e0f1f8ff');
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
 * @restly Get the waitlist
 * @method GET
 * @path /testing
 */
const testing = async () => {
    const response = await googlesheet.read({ sheetId: mySheetId });
    return response;
};
exports.testing = testing;
//# sourceMappingURL=index.js.map