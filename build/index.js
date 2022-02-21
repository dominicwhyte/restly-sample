"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSample = exports.addRow = void 0;
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
    const serviceName = 'test';
    // @ts-ignore
    const result = await my_restly_demo_sdk_1.default.GoogleSheet.addRow(`${serviceName}_${serviceName}`, { data: inputs.data });
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
 *
 * Demo notes:
 *
 *
 * firebase cloud functions!
 * fly.io
 *
 * testing
 *
 * local db - e.g. running local mysql db
 *
 * generating the npm package dynamically! when you run `restly start`, generate it with the googlesheets
 */ 
//# sourceMappingURL=index.js.map