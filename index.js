/**
 * Created by админ on 18.05.14.
 */
var http = require('http');
var util = require('util');
var connect = require('connect'),
    www = __dirname + '/public',
    port = 3000;

global.__root = __dirname;
var Bricks = require(__root + '/bricks/bricks.js');

var root = Bricks.read('/interface/layout/layout.js');
//
http.createServer(connect()
    .use(connect.favicon())
    .use(connect.logger())
    //.use(connect.static('public'))
    .use(root.show)
).listen(port);

//console.log('Server running on ' + port);

//var bricks = require('./bricks/bricks.js');
//
//var interface = bricks.birth('/interface/interface.js');
//var o_4 = new o_3();
//o_2.prototype.xx = 22;
//if (typeof Object.create2 != 'function') {
//    (function () {
//        var F = function () {};
//        Object.create2 = function (o) {
//            if (arguments.length > 1) {
//              throw Error('Second argument not supported');
//            }
//            if (o === null) {
//              throw Error('Cannot set a null [[Prototype]]');
//            }
//            if (typeof o != 'object') {
//              throw TypeError('Argument must be an object');
//            }
//            F.prototype = o;
//            return new F();
//        };
//    })();
//}
//
//var Bricks = {
//  birth: function(proto, object){
//    var f = Object.create(proto);
//    for (var prop in object) f[prop] = object[prop];
//    f.proto = proto;
//    return f;
//  }
//};
//
//var first = {
//  prop1: 10,
//  funct1: function(){
//    return this.prop1;
//  }
//};
//
//var second = Bricks.birth(first,{
//  prop1: 15,
//  prop3: 1,
//  funct1: function(){
//    return this.proto.funct1.apply(this);
//  }
//});
//
//
//
////second.prop1 = 15;
//
//console.log(second.funct1());