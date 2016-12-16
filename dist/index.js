'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
* The plugin class.
*/

var VueTranslated = function () {
  function VueTranslated() {
    _classCallCheck(this, VueTranslated);
  }

  _createClass(VueTranslated, null, [{
    key: 'install',


    /*
    * Installs the Vue plugin.
    */

    value: function install(Vue) {

      Object.defineProperty(Vue.prototype, '$i18n', {
        // adding a global variable `$i18n`
        get: function get() {
          return this.$root._i18n;
        }
      });

      Vue.mixin({
        beforeCreate: function beforeCreate() {
          var i18n = this.$options.i18n; // retrieve i18n instance
          if (i18n) {
            // memorize the i18n instance so we can retrieve it in a root component
            this._i18n = i18n;
          }
        }
      });

      Vue.prototype.$formatMessage = function (message) {
        var vars = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return this.$i18n.formatMessage(message, vars);
      };
      Vue.prototype.$formatNumber = function (value) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return this.$i18n.formatNumber(value, options);
      };
      Vue.prototype.$formatDate = function (value) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return this.$i18n.formatDate(value, options);
      };
      Vue.prototype.$formatTime = function (value) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return this.$i18n.formatTime(value, options);
      };
      Vue.prototype.$formatRelativeTime = function (value) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return this.$i18n.formatRelativeTime(value, options);
      };
    }
  }]);

  return VueTranslated;
}();

/*
* The plugin is automatically installed when loaded in browser (not as module).
*/

exports.default = VueTranslated;
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueTranslated);
}