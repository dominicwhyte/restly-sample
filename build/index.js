"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRow = exports.getSample = exports.addRow = void 0;
const my_restly_demo_sdk_1 = require("my-restly-demo-sdk");
// @ts-ignore
// In prod, RESTLY_KEY is set to the production key
// restly.authenticate(process.env.RESTLY_KEY)
/**
 * @restly An endpoint for adding a row
 * @method POST
 * @path /item
 */
const addRow = (inputs) => {
    // @ts-ignore
    const result = await my_restly_demo_sdk_1.default.GoogleSheet.addRow('my-gsheet-service', { data: inputs.data });
    return result;
};
exports.addRow = addRow;
/**
 * @restly A sample test endpoint asdfasdf!!
 * @method GET
 * @path /sample
 */
const getSample = (parameters) => {
    const test = `${parameters.banana} hellohello!`;
    return test;
};
exports.getSample = getSample;
/**
 * @restly A great deletion endpiont!
 * @method DELETE
 * @path /deleteme
 */
const deleteRow = (parameters) => {
    const test = `${parameters.banana} hellohello!`;
    return test;
};
exports.deleteRow = deleteRow;
//# sourceMappingURL=index.js.map