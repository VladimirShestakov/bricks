/**
 * Интерфейс
 * Запускает всех своих подчиенных
 * Макет сайта
 */
var bricks = require(__root +'/bricks/bricks.js');

module.exports = bricks.birth('/library/brick/brick.js',{
  value: ''
});