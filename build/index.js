"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addRow = void 0;
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
    my_restly_demo_sdk_1.default.postgres;
    return serviceName;
};
exports.addRow = addRow;
//# sourceMappingURL=index.js.map