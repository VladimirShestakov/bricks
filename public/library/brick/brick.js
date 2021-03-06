/**
 * Created by админ on 21.05.14.
 */
var ejs = require('ejs');
//var bricks = require(__DIR_BRICKS);
//var Vow = require('vow');
var fs = require('fs');

module.exports = {
    value: 'brick.ejs',
    uri: '/library/brick',
    children: null,

    startCheck: function(){
      return true;
    },

    start: function(req, res){
        var def = B.p.defer();
        if (this.startCheck()){
            
        }else{
            def.reject(false);
        }
        return def.promise();
    },

    showChildren: function (req, res) {
        var def = B.p.defer();
        this.getChildren().then(function(children){
            var pa = {};
            Object.keys(children).map(function(i) {
               pa[i] = children[i].show(req, res);
            });
            B.p.all(pa).then(function(renders){
                def.resolve(renders);
            });
        });
        return def.promise();
    },

    show: function (req, res) {
        var self = this;
        var def = B.p.defer();
        this.showChildren(req, res).then(function(values){
            ejs.renderFile(__DIR_PUBLIC + self.uri + '/' + self.value, values, function (err, result) {
                if (!err) {
                    res.writeHead(200, {'content-type': 'text/html'});
                    //res.write(result);
                    def.resolve(result);
                } else {
                    res.writeHead(500, {'content-type': 'text/html'});
//                    res.write('Ошибка');
                    console.log(err);
                    def.resolve('Ошибка');
                }
            });
        });
        return def.promise();
    },

    getChildren: function () {
        var def = B.p.defer();
        var self = this;
        if (this.children !== null) {
            def.resolve(self.children);
        } else {
            fs.readdir(__DIR_PUBLIC + this.uri, function (err, files) {
                self.children = {};
                files.forEach(function (name) {
                    var obj;
                    if (obj = B.read(self.uri + '/' + name)){
                        self.children[name] =  obj;
                    }
                });
                def.resolve(self.children);

                def.reject(err);
            });
        }
        return def.promise();
    }
};