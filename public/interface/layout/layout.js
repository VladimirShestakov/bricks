/**
 * Корневой виджет
 * Макет сайта
 */
var bricks = require(__DIR_BRICKS);

module.exports = bricks.birth('/library/brick',{
  value: 'layout.ejs'
});