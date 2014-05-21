/**
 * Корневой виджет
 * Макет сайта
 */
var bricks = require(__root +'/bricks/bricks.js');

module.exports = bricks.birth('/library/brick/brick.js',{
  value: 'layout.ejs'
//  show: function(req, res){
//
//  }
});