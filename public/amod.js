/**
 * Created by Владимир on 28.05.14.
 */
var vow = require('vow');
var fs = require('fs');


var def = vow.defer();

fs.readFile('C:/SERVER/bricks/README.md', function (err, data) {
    if (err){
        def.reject(err);
    }else{
        def.resolve(data);
    }
});

module.exports = def.promise();