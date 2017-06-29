const client = require('cheerio-httpcli');
const notifier = require('node-notifier');

const url = "http://www.yodobashi.com/product/100000001003570628/";

const notifyObj = {
    'title': 'ヨドバシでswitch売り始めたよ',
    'message': 'Nintendo Switch スプラトゥーン2セット'
};

client.set('timeout', 10000);
client.set('headers', {
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1"
});

module.exports = () => {
    client.fetch(url, (err, $, res) => {
        if ($('.salesInfo').text() !== "予約受付を終了しました") {
            console.log("sale now =>", notifyObj.message);
            notifier.notify(notifyObj);
        }else{
            console.log('not sale now.', notifyObj.message);
        }
    });
};
