/**
 * Created by админ on 21.05.14.
 */
var ejs = require('ejs');

module.exports = {
  value:  'brick.ejs',

  showChildren: function(){
    return {};
  },

  show: function(req, res, next){
    ejs.renderFile(__dirname + this.value, this.showChildren, function(err, result){
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
