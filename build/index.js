"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gandolf = exports.getSample = exports.addRow = void 0;
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
    // const result = await restly.GoogleSheet.addRow(`${serviceName}_${serviceName}`, { data: inputs.data })
    const result = {};
    return result;
};
exports.addRow = addRow;
/**
 * @restly A sample test endpoint asdfasdf!!!
 * @method GET
 * @path /sample
 */
const getSample = (parameters) => {
    const test = `${parameters.banana} hellohello!`;
    return test;
};
exports.getSample = getSample;
/**
 * @restly A gandolf
 * @method GET
 * @path /gandolf
 */
const gandolf = (parameters) => {
    const test = `${parameters.banana} is gandolf`;
    return test;
};
exports.gandolf = gandolf;
//# sourceMappingURL=index.js.map