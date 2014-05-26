/**
 * Created by админ on 18.05.14.
 */
global.__DIR_ROOT = __dirname;
global.__DIR_PUBLIC = __DIR_ROOT + '/public';
global.__DIR_BRICKS = __DIR_ROOT + '/bricks/bricks.js';

var http = require('http'),
    connect = require('connect'),
    bricks = require(__DIR_BRICKS),
    browserify = require('browserify-middleware');

var port = 3000;
var root = bricks.read('/interface/layout');

http.createServer(connect()
    .use(connect.favicon())
//    .use(connect.logger('dev'))
    .use(browserify('./public/interface'))
//    .use(connect.static('public'))
//    .use(function (req, res) {
//        var start = new Date().getMilliseconds();
//        root.show(req, res).then(function (result) {
//            res.write(result);
//            var hrTime = process.hrtime();
//            var t = new Date().getMilliseconds() - start;
//            res.end('Benchmark: ' + t + ' ms');
//            console.log(process.memoryUsage().heapTotal / 1024 / 1024);
//        });
    //})
).listen(port);

console.log('Server running on http://127.0.0.1:' + port);