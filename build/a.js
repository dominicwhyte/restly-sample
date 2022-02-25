"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restly_1 = require("restly");
const restly = (0, restly_1.default)('e585686ff1be172c672ea26a4e0c1efc49d055f04408a4a6');
const googlesheet = restly.GoogleSheets('googlesheets-5');
const test = async () => {
    const result = await googlesheet.read({ sheetId: '1QvaIZxd6Qk8R2BNrmEin36wpjZ1uJwL8NjOkBJFB_k8' });
    await googlesheet.addRow({ sheetId: '1QvaIZxd6Qk8R2BNrmEin36wpjZ1uJwL8NjOkBJFB_k8', value: { Item: 'testing', Cost: '1000' } });
    console.log('result: ', result);
};
test();
//# sourceMappingURL=a.js.map