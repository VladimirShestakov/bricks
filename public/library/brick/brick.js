/**
 * Created by админ on 21.05.14.
 */
var ejs = require('ejs');
var bricks = require(__DIR_BRICKS);
var Vow = require('vow');
var fs = require('fs');

module.exports = {
  value:  'brick.ejs',
  uri: '/library/brick',
  children: null,

  showChildren: function(){
    var filter = bricks.read(this.uri + '/filter');
    return {
      filter: filter.uri
    };
  },

  show: function(req, res){
    ejs.renderFile(__DIR_PUBLIC + this.uri + '/' + this.value, this.showChildren(), function(err, result){
      if (!err){
        res.writeHead(200, {'content-type': 'text/html'});
        res.end(result);
      }else{
        res.writeHead(500, {'content-type': 'text/html'});
        res.end('Ошибка');
        console.log(err);
      }
    });
  },

  getChildren: function()
  {
    var def = Vow.defer();
    var self = this;
    if (this.children !== null){
      def.resolve(self.children);
    }else{
      fs.readdir(__DIR_PUBLIC + this.uri, function(err, files){
        self.children = [];
        files.forEach(function(name){
          self.children.push(name);
        });
        def.resolve(self.children);
      });
    }
    return def.promise();
  }
};