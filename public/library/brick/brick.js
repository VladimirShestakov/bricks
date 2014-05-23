/**
 * Created by админ on 21.05.14.
 */
var ejs = require('ejs');
var bricks = require(__DIR_BRICKS);
var Vow = require('vow');
var fs = require('fs');

module.exports = {
    value: 'brick.ejs',
    uri: '/library/brick',
    children: null,

    showChildren: function () {
        var def = Vow.defer();
        this.getChildren().then(function(){
            //Vow.all()
        });
        return def.promise;
    },

    show: function (req, res) {
        var def = Vow.defer();
        ejs.renderFile(__DIR_PUBLIC + this.uri + '/' + this.value, {}/*this.showChildren()*/, function (err, result) {
            if (!err) {
                res.writeHead(200, {'content-type': 'text/html'});
                res.write(result);
                def.resolve();
            } else {
                res.writeHead(500, {'content-type': 'text/html'});
                res.write('Ошибка');
                console.log(err);
                def.resolve();
            }
        });
        return def.promise();
    },

    getChildren: function () {
        var def = Vow.defer();
        var self = this;
        if (this.children !== null) {
            def.resolve(self.children);
        } else {
            fs.readdir(__DIR_PUBLIC + this.uri, function (err, files) {
                self.children = [];
                files.forEach(function (name) {
                    var obj;
                    if (obj = bricks.read(self.uri + '/' + name)){
                        self.children.push(obj);
                    }
                });
                def.resolve(self.children);
            });
        }
        return def.promise();
    }
};