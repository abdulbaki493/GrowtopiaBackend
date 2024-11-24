const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const rateLimiter = require('express-rate-limit');
const compression = require('compression');

app.use(compression({
    level: 9,
    threshold: 0,
    filter: (req, res) => {
        if (req.headers['x-no-compression']) {
            return false;
        }
        return compression.filter(req, res);
    }
}));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept',
    );
    next();
});
app.all('/player/growid/login/validate', (req, res) => {
    res.send(
        `{"status":"success","message":"Account Validated.","token":"","url":"","accountType":"growtopia"}`,
        res.send('<script>window.close();</script>');
    );
});

app.post('/player/validate/close', function (req, res) {
    res.send('<script>window.close();</script>');
});

app.get('/', function (req, res) {
    res.send('send me dm discord "bybakiw"');
});

app.listen(5000, function () {
    console.log('Listening on port 5000');
});
