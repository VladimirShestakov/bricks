/**
 * Список фотографий
 */
var bricks = require(__DIR_BRICKS);

module.exports = bricks.birth('/library/brick',{
  value: 'photos.ejs'
});