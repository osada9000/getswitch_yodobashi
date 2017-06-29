const cron = require('node-cron');
const splatoon = require('./splatoon2.js');
const gray = require('./switch_gray.js');
const neon = require('./switch_neon.js');

cron.schedule('*/10 * * * * *', () => {
  console.log(new Date().toString());
  splatoon();
  gray();
  neon();
});