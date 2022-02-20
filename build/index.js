"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTesting = exports.getItem = exports.addRow = void 0;
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
    const result = { test: 'hi' }; // await restly.GoogleSheet.addRow('my-gsheet-service', { data: inputs.data })
    return result;
};
exports.addRow = addRow;
/**
 * @restly An endpoint for deleting a row
 * @method GET
 * @path /item
 */
const getItem = (parameters) => {
    // @ts-ignore
    const data = { test: 'hello' }; // await restly.GoogleSheet.addRow('my-gsheet-service', { data: [{ name: parameters.name }] })
    return data;
};
exports.getItem = getItem;
/**
 * @restly A test endpoint
 * @method GET
 * @path /testing
 */
const getTesting = (parameters) => {
    const test = `${parameters.name} hello`;
    return test;
};
exports.getTesting = getTesting;
//# sourceMappingURL=index.js.map