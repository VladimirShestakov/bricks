/**
 * Created by админ on 21.05.14.
 */
var ejs = require('ejs');
var bricks = require(__DIR_BRICKS);

module.exports = {
  value:  'brick.ejs',
  uri: '/library/brick',

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
  }
};