/**
 * Created by админ on 18.05.14.
 */
global.__DIR_ROOT = __dirname;
global.__DIR_PUBLIC = __DIR_ROOT + '/public';
global.__DIR_BRICKS = __DIR_ROOT + '/bricks/bricks.js';

var http = require('http'),
    connect = require('connect'),
    bricks = require(__DIR_BRICKS);

var port = 3000;
var root = bricks.read('/interface/layout');

//http.createServer(connect()
//    .use(connect.favicon())
//    .use(connect.logger())
//    .use(connect.static('public'))
//    .use(function(req, res){
//        root.show(req, res);
//    })
//).listen(port);
//
//console.log('Server running on http://127.0.0.1:' + port);

root.getChildren().then(function(files){
  console.log(files);
});