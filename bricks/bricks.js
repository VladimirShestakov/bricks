module.exports = {
  /**
   * Создание нового объекта прототипированием другого
   * @param {String} proto_uri Путь на прототип
   * @param {Object} object Свойства и методы нового объекта
   * @returns {Object}
   */
  birth: function(proto_uri, object){
    var proto = this.read(proto_uri);
    var f = Object.create(proto);
    for (var prop in object) f[prop] = object[prop];
    f.proto = proto;
    return f;
  },
  /**
   * Получение объякта по его пути
   * @param {String} uri Путь на объект
   * @returns {*}
   */
  read: function(uri){
    return require(global.__root + '/public' + uri);
  }
};