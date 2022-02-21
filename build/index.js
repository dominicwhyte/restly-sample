"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSkiJorring = exports.getSample = exports.addRow = void 0;
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
    // const result = await restly.GoogleSheet.addRow('my-gsheet-service', { data: inputs.data })
    const result = { test: 'hi' };
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
 * @restly A montana demo endpoint!
 * @method GET
 * @path /test
 */
const getSkiJorring = (parameters) => {
    const { skijorring } = parameters;
    const test = skijorring + skijorring + skijorring;
    return test;
};
exports.getSkiJorring = getSkiJorring;
//# sourceMappingURL=index.js.map