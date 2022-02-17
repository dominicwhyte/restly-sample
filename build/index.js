"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getItem = exports.addRow = void 0;
const my_restly_demo_sdk_1 = __importDefault(require("my-restly-demo-sdk"));
// @ts-ignore
// In prod, RESTLY_KEY is set to the production key
my_restly_demo_sdk_1.default.authenticate(process.env.RESTLY_KEY);
/**
 * @restly
 * @method POST
 * @path /item
 * An endpoint for adding a row
 */
const addRow = (inputs) => {
    // @ts-ignore
    const result = yield my_restly_demo_sdk_1.default.GoogleSheet.addRow('my-gsheet-service', { data: inputs.data });
    return result;
};
exports.addRow = addRow;
/**
 * @restly
 * @method GET
 * @path /item
 * An endpoint for deleting a row
 */
const getItem = (parameters) => {
    // @ts-ignore
    const data = yield my_restly_demo_sdk_1.default.GoogleSheet.addRow('my-gsheet-service', { data: [{ name: parameters.name }] });
    return data;
};
exports.getItem = getItem;
