module.exports = {
    a: 10,
    /**
     * Создание нового объекта прототипированием другого
     * @param {String} proto_uri Путь на прототип
     * @param {Object} object Свойства и методы нового объекта
     * @returns {Object}
     */
    birth: function (proto_uri, object) {
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
    read: function (uri) {
        try {
            var obj = require(this.getPath(uri, true));
            obj.uri = uri;
            return obj;
        } catch (e) {

        }
        return false;
    },
    /**
     * Путь на объект по его URI
     * @param uri
     * @param root
     * @returns {string}
     */
    getPath: function (uri, root) {
        if (typeof  root === 'undefined') root = false;
        var names = uri.split('/');
        var last = names[names.length - 1];
        return (root ? __DIR_PUBLIC : '') + uri + '/' + last + '.js';
    }
};