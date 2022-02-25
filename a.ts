import Restly from 'restly';


const restly = Restly('e585686ff1be172c672ea26a4e0c1efc49d055f04408a4a6');
const googlesheet = restly.GoogleSheets('googlesheets-1');


const test = async () => {
  const result = await googlesheet.read({ sheetId: '1QvaIZxd6Qk8R2BNrmEin36wpjZ1uJwL8NjOkBJFB_k8' });

  await googlesheet.addRow({ sheetId: '1QvaIZxd6Qk8R2BNrmEin36wpjZ1uJwL8NjOkBJFB_k8', value: { Item: 'testing', Cost: '1000' } });

  console.log('result: ', result);
};

test();
