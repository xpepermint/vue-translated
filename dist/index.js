/*
* The plugin class.
*/

export default class VueTranslated {

  /*
  * Installs the Vue plugin.
  */

  static install(Vue) {

    Object.defineProperty(Vue.prototype, '$i18n', { // adding a global variable `$i18n`
      get() {
        return this.$root._i18n;
      }
    });

    Vue.mixin({
      beforeCreate() {
        let i18n = this.$options.i18n; // retrieve i18n instance
        if (i18n) {
          // memorize the i18n instance so we can retrieve it in a root component
          this._i18n = i18n;
        }
      }
    });

    Vue.prototype.$formatMessage = function (message, vars = {}) {
      return this.$i18n.formatMessage(message, vars);
    };
    Vue.prototype.$formatNumber = function (value, options = {}) {
      return this.$i18n.formatNumber(value, options);
    };
    Vue.prototype.$formatDate = function (value, options = {}) {
      return this.$i18n.formatDate(value, options);
    };
    Vue.prototype.$formatTime = function (value, options = {}) {
      return this.$i18n.formatTime(value, options);
    };
    Vue.prototype.$formatRelativeTime = function (value, options = {}) {
      return this.$i18n.formatRelativeTime(value, options);
    };
  }
}

/*
* The plugin is automatically installed when loaded in browser (not as module).
*/

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueTranslated);
}