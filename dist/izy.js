(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define("izy", ["vue"], factory);
	else if(typeof exports === 'object')
		exports["izy"] = factory(require("vue"));
	else
		root["izy"] = factory(root["Vue"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export camelcaseToHyphen */
/* harmony export (immutable) */ __webpack_exports__["e"] = getScrollBarSize;
/* unused harmony export firstUpperCase */
/* unused harmony export deepCopy */
/* unused harmony export scrollTop */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return findComponentUpward; });
/* harmony export (immutable) */ __webpack_exports__["b"] = findComponentDownward;
/* harmony export (immutable) */ __webpack_exports__["d"] = findComponentsDownward;
/* unused harmony export hasClass */
/* harmony export (immutable) */ __webpack_exports__["a"] = addClass;
/* harmony export (immutable) */ __webpack_exports__["g"] = removeClass;
/* harmony export (immutable) */ __webpack_exports__["h"] = sizeValid;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);

const isServer = __WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$isServer;
const ieVersion = isServer ? 0 : Number(document.documentMode);

function camelcaseToHyphen(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

// For Modal scrollBar hidden
let cached;
function getScrollBarSize(fresh) {
    if (isServer) return 0;
    if (fresh || cached === undefined) {
        const inner = document.createElement('div');
        inner.style.width = '100%';
        inner.style.height = '200px';

        const outer = document.createElement('div');
        const outerStyle = outer.style;

        outerStyle.position = 'absolute';
        outerStyle.top = 0;
        outerStyle.left = 0;
        outerStyle.pointerEvents = 'none';
        outerStyle.visibility = 'hidden';
        outerStyle.width = '200px';
        outerStyle.height = '150px';
        outerStyle.overflow = 'hidden';

        outer.appendChild(inner);

        document.body.appendChild(outer);

        const widthContained = inner.offsetWidth;
        outer.style.overflow = 'scroll';
        let widthScroll = inner.offsetWidth;

        if (widthContained === widthScroll) {
            widthScroll = outer.clientWidth;
        }

        document.body.removeChild(outer);

        cached = widthContained - widthScroll;
    }
    return cached;
}

// watch DOM change
const MutationObserver = isServer ? false : window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver || false;
/* unused harmony export MutationObserver */


const SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
const MOZ_HACK_REGEXP = /^moz([A-Z])/;

function camelCase(name) {
    return name.replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
        return offset ? letter.toUpperCase() : letter;
    }).replace(MOZ_HACK_REGEXP, 'Moz$1');
}
/* istanbul ignore next */
const getStyle = ieVersion < 9 ? function (element, styleName) {
    if (isServer) return;
    if (!element || !styleName) return null;
    styleName = camelCase(styleName);
    if (styleName === 'float') {
        styleName = 'styleFloat';
    }
    try {
        switch (styleName) {
            case 'opacity':
                try {
                    return element.filters.item('alpha').opacity / 100;
                } catch (e) {
                    return 1.0;
                }
            default:
                return element.style[styleName] || element.currentStyle ? element.currentStyle[styleName] : null;
        }
    } catch (e) {
        return element.style[styleName];
    }
} : function (element, styleName) {
    if (isServer) return;
    if (!element || !styleName) return null;
    styleName = camelCase(styleName);
    if (styleName === 'float') {
        styleName = 'cssFloat';
    }
    try {
        var computed = document.defaultView.getComputedStyle(element, '');
        return element.style[styleName] || computed ? computed[styleName] : null;
    } catch (e) {
        return element.style[styleName];
    }
};
/* harmony export (immutable) */ __webpack_exports__["f"] = getStyle;


// firstUpperCase
function firstUpperCase(str) {
    return str.toString()[0].toUpperCase() + str.toString().slice(1);
}


function typeOf(obj) {
    const toString = Object.prototype.toString;
    const map = {
        '[object Boolean]': 'boolean',
        '[object Number]': 'number',
        '[object String]': 'string',
        '[object Function]': 'function',
        '[object Array]': 'array',
        '[object Date]': 'date',
        '[object RegExp]': 'regExp',
        '[object Undefined]': 'undefined',
        '[object Null]': 'null',
        '[object Object]': 'object'
    };
    return map[toString.call(obj)];
}

// deepCopy
function deepCopy(data) {
    const t = typeOf(data);
    let o;

    if (t === 'array') {
        o = [];
    } else if (t === 'object') {
        o = {};
    } else {
        return data;
    }

    if (t === 'array') {
        for (let i = 0; i < data.length; i++) {
            o.push(deepCopy(data[i]));
        }
    } else if (t === 'object') {
        for (let i in data) {
            o[i] = deepCopy(data[i]);
        }
    }
    return o;
}



// scrollTop animation
function scrollTop(el, from = 0, to, duration = 500) {
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
            return window.setTimeout(callback, 1000 / 60);
        };
    }
    const difference = Math.abs(from - to);
    const step = Math.ceil(difference / duration * 50);

    function scroll(start, end, step) {
        if (start === end) return;

        let d = start + step > end ? end : start + step;
        if (start > end) {
            d = start - step < end ? end : start - step;
        }

        if (el === window) {
            window.scrollTo(d, d);
        } else {
            el.scrollTop = d;
        }
        window.requestAnimationFrame(() => scroll(d, end, step));
    }
    scroll(from, to, step);
}

// Find components upward
function findComponentUpward(context, componentName, componentNames) {
    if (typeof componentName === 'string') {
        componentNames = [componentName];
    } else {
        componentNames = componentName;
    }

    let parent = context.$parent;
    let name = parent.$options.name;
    while (parent && (!name || componentNames.indexOf(name) < 0)) {
        parent = parent.$parent;
        if (parent) name = parent.$options.name;
    }
    return parent;
}


// Find component downward
function findComponentDownward(context, componentName) {
    const childrens = context.$children;
    let children = null;

    if (childrens.length) {
        for (const child of childrens) {
            const name = child.$options.name;
            if (name === componentName) {
                children = child;
                break;
            } else {
                children = findComponentDownward(child, componentName);
                if (children) break;
            }
        }
    }
    return children;
}

// Find components downward
function findComponentsDownward(context, componentName) {
    return context.$children.reduce((components, child) => {
        if (child.$options.name === componentName) components.push(child);
        const foundChilds = findComponentsDownward(child, componentName);
        return components.concat(foundChilds);
    }, []);
}

/* istanbul ignore next */
const trim = function (string) {
    return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
};

/* istanbul ignore next */
function hasClass(el, cls) {
    if (!el || !cls) return false;
    if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
    if (el.classList) {
        return el.classList.contains(cls);
    } else {
        return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
    }
}

/* istanbul ignore next */
function addClass(el, cls) {
    if (!el) return;
    let curClass = el.className;
    const classes = (cls || '').split(' ');

    for (let i = 0, j = classes.length; i < j; i++) {
        const clsName = classes[i];
        if (!clsName) continue;

        if (el.classList) {
            el.classList.add(clsName);
        } else {
            if (!hasClass(el, clsName)) {
                curClass += ' ' + clsName;
            }
        }
    }
    if (!el.classList) {
        el.className = curClass;
    }
}

/* istanbul ignore next */
function removeClass(el, cls) {
    if (!el || !cls) return;
    const classes = cls.split(' ');
    let curClass = ' ' + el.className + ' ';

    for (let i = 0, j = classes.length; i < j; i++) {
        const clsName = classes[i];
        if (!clsName) continue;

        if (el.classList) {
            el.classList.remove(clsName);
        } else {
            if (hasClass(el, clsName)) {
                curClass = curClass.replace(' ' + clsName + ' ', ' ');
            }
        }
    }
    if (!el.classList) {
        el.className = trim(curClass);
    }
}

function sizeValid(value) {
    return ~['small', 'large', 'default'].indexOf(value);
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function broadcast(componentName, eventName, params) {
  this.$children.forEach(child => {
    const name = child.$options.name;

    if (name === componentName) {
      child.$emit.apply(child, [eventName].concat(params));
    } else {
      broadcast.apply(child, [componentName, eventName].concat([params]));
    }
  });
}
/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    dispatch(componentName, eventName, params) {
      let parent = this.$parent || this.$root;
      let name = parent.$options.name;

      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;

        if (parent) {
          name = parent.$options.name;
        }
      }
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params));
      }
    },
    broadcast(componentName, eventName, params) {
      broadcast.call(this, componentName, eventName, params);
    }
  }
});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icon_vue__ = __webpack_require__(8);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__icon_vue__["a" /* default */]);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./src/locale/lang/zh-CN.js
/* harmony default export */ var zh_CN = ({
    qf: {
        select: {
            placeholder: '请选择',
            noMatch: '无匹配数据',
            loading: '加载中'
        },
        modal: {
            okText: '确定',
            cancelText: '取消'
        }
    }
});
// EXTERNAL MODULE: external {"root":"Vue","commonjs":"vue","commonjs2":"vue","amd":"vue"}
var external___root___Vue___commonjs___vue___commonjs2___vue___amd___vue__ = __webpack_require__(3);
var external___root___Vue___commonjs___vue___commonjs2___vue___amd___vue___default = /*#__PURE__*/__webpack_require__.n(external___root___Vue___commonjs___vue___commonjs2___vue___amd___vue__);

// CONCATENATED MODULE: ./node_modules/deepmerge/dist/es.js
var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
	return Array.isArray(val) ? [] : {}
}

function cloneUnlessOtherwiseSpecified(value, options) {
	return (options.clone !== false && options.isMergeableObject(value))
		? deepmerge(emptyTarget(value), value, options)
		: value
}

function defaultArrayMerge(target, source, options) {
	return target.concat(source).map(function(element) {
		return cloneUnlessOtherwiseSpecified(element, options)
	})
}

function mergeObject(target, source, options) {
	var destination = {};
	if (options.isMergeableObject(target)) {
		Object.keys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
		});
	}
	Object.keys(source).forEach(function(key) {
		if (!options.isMergeableObject(source[key]) || !target[key]) {
			destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
		} else {
			destination[key] = deepmerge(target[key], source[key], options);
		}
	});
	return destination
}

function deepmerge(target, source, options) {
	options = options || {};
	options.arrayMerge = options.arrayMerge || defaultArrayMerge;
	options.isMergeableObject = options.isMergeableObject || isMergeableObject;

	var sourceIsArray = Array.isArray(source);
	var targetIsArray = Array.isArray(target);
	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	if (!sourceAndTargetTypesMatch) {
		return cloneUnlessOtherwiseSpecified(source, options)
	} else if (sourceIsArray) {
		return options.arrayMerge(target, source, options)
	} else {
		return mergeObject(target, source, options)
	}
}

deepmerge.all = function deepmergeAll(array, options) {
	if (!Array.isArray(array)) {
		throw new Error('first argument should be an array')
	}

	return array.reduce(function(prev, next) {
		return deepmerge(prev, next, options)
	}, {})
};

var deepmerge_1 = deepmerge;

/* harmony default export */ var es = (deepmerge_1);

// CONCATENATED MODULE: ./src/locale/format.js
/**
 *  String format template
 *  - Inspired:
 *    https://github.com/Matt-Esch/string-template/index.js
 */

const RE_NARGS = /(%|)\{([0-9a-zA-Z_]+)\}/g;

/* harmony default export */ var format = (function () {
  // const { hasOwn } = Vue.util;
  function hasOwn(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
  }

  /**
   * template
   *
   * @param {String} string
   * @param {Array} ...args
   * @return {String}
   */

  function template(string, ...args) {
    if (args.length === 1 && typeof args[0] === 'object') {
      args = args[0];
    }

    if (!args || !args.hasOwnProperty) {
      args = {};
    }

    return string.replace(RE_NARGS, (match, prefix, i, index) => {
      let result;

      if (string[index - 1] === '{' && string[index + match.length] === '}') {
        return i;
      } else {
        result = hasOwn(args, i) ? args[i] : null;
        if (result === null || result === undefined) {
          return '';
        }

        return result;
      }
    });
  }

  return template;
});
// CONCATENATED MODULE: ./src/locale/index.js





const locale_format = format(external___root___Vue___commonjs___vue___commonjs2___vue___amd___vue___default.a);
let lang = zh_CN;
let merged = false;
let i18nHandler = function () {
  const vuei18n = Object.getPrototypeOf(this || external___root___Vue___commonjs___vue___commonjs2___vue___amd___vue___default.a).$t;
  if (typeof vuei18n === 'function') {
    if (!merged) {
      merged = true;
      external___root___Vue___commonjs___vue___commonjs2___vue___amd___vue___default.a.locale(external___root___Vue___commonjs___vue___commonjs2___vue___amd___vue___default.a.config.lang, es(lang, external___root___Vue___commonjs___vue___commonjs2___vue___amd___vue___default.a.locale(external___root___Vue___commonjs___vue___commonjs2___vue___amd___vue___default.a.config.lang) || {}, { clone: true }));
    }
    return vuei18n.apply(this, arguments);
  }
};

const t = function (path, options) {
  let value = i18nHandler.apply(this, arguments);
  if (value !== null && value !== undefined) return value;

  const array = path.split('.');
  let current = lang;

  for (let i = 0, j = array.length; i < j; i++) {
    const property = array[i];
    value = current[property];
    if (i === j - 1) return locale_format(value, options);
    if (!value) return '';
    current = value;
  }
  return '';
};

const use = function (l) {
  lang = l || lang;
};

const i18n = function (fn) {
  i18nHandler = fn || i18nHandler;
};

/* harmony default export */ var locale = ({ use, t, i18n });
// CONCATENATED MODULE: ./src/mixins/locale.js


/* harmony default export */ var mixins_locale = __webpack_exports__["a"] = ({
    methods: {
        t(...args) {
            return t.apply(this, args);
        }
    }
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./src/components/icon/index.js
var icon = __webpack_require__(4);

// EXTERNAL MODULE: ./src/utils/assist.js
var assist = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/button/button.vue
//
//
//
//
//
//
//




const componentCls = 'izy-btn';

/* harmony default export */ var button_button = ({
  name: 'Button',
  components: { Icon: icon["a" /* default */] },
  props: {
    type: {
      validator(value) {
        return ~['primary', 'ghost', 'dashed', 'text', 'info', 'success', 'warning', 'error', 'default'].indexOf(value);
      }
    },
    shape: {
      validator(value) {
        return ~['circle', 'circle-outline'].indexOf(value);
      }
    },
    size: {
      validator(value) {
        return Object(assist["h" /* sizeValid */])(value);
      }
    },
    loading: Boolean,
    disabled: Boolean,
    htmlType: {
      default: 'button',
      validator(value) {
        return ~['button', 'submit', 'reset'].indexOf(value);
      }
    },
    icon: String,
    long: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showSlot: true
    };
  },
  computed: {
    classes() {
      return [`${componentCls}`, {
        [`${componentCls}-${this.type}`]: !!this.type,
        [`${componentCls}-long`]: this.long,
        [`${componentCls}-${this.shape}`]: !!this.shape,
        [`${componentCls}-${this.size}`]: !!this.size,
        [`${componentCls}-loading`]: this.loading != null && this.loading,
        [`${componentCls}-icon-only`]: !this.showSlot && (!!this.icon || this.loading)
      }];
    }
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event);
    }
  },
  mounted() {
    this.showSlot = this.$slots.default !== undefined;
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-53a68c00","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/button/button.vue
var render = function () {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('button', { class: _vm.classes, attrs: { "type": _vm.htmlType, "disabled": _vm.disabled }, on: { "click": _vm.handleClick } }, [_vm.loading ? _c('Icon', { staticClass: "izy-load-loop", attrs: { "type": "load-c" } }) : _vm._e(), _vm._v(" "), _vm.icon && !_vm.loading ? _c('Icon', { attrs: { "type": _vm.icon } }) : _vm._e(), _vm._v(" "), _vm.showSlot ? _c('span', { ref: "slot" }, [_vm._t("default")], 2) : _vm._e()], 1);
};
var staticRenderFns = [];
var esExports = { render: render, staticRenderFns: staticRenderFns };
/* harmony default export */ var components_button_button = (esExports);
// CONCATENATED MODULE: ./src/components/button/button.vue
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  button_button,
  components_button_button,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_button_button = __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external {"root":"Vue","commonjs":"vue","commonjs2":"vue","amd":"vue"}
var external___root___Vue___commonjs___vue___commonjs2___vue___amd___vue__ = __webpack_require__(3);
var external___root___Vue___commonjs___vue___commonjs2___vue___amd___vue___default = /*#__PURE__*/__webpack_require__.n(external___root___Vue___commonjs___vue___commonjs2___vue___amd___vue__);

// EXTERNAL MODULE: ./src/utils/assist.js
var assist = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/popper.js/dist/esm/popper.js
var popper = __webpack_require__(13);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/select/dropdown.vue
//
//
//


const isServer = external___root___Vue___commonjs___vue___commonjs2___vue___amd___vue___default.a.prototype.$isServer;



/* harmony default export */ var dropdown = ({
  name: 'Drop',
  props: {
    placement: {
      type: String,
      default: 'bottom-start'
    },
    className: {
      type: String
    }
  },
  data() {
    return {
      popper: null,
      width: ''
    };
  },
  computed: {
    styles() {
      let style = {};
      if (this.width) style.width = `${this.width}px`;
      return style;
    }
  },
  methods: {
    update() {
      if (isServer) return;
      if (this.popper) {
        this.$nextTick(() => {
          this.popper.update();
        });
      } else {
        this.$nextTick(() => {
          this.popper = new popper["a" /* default */](this.$parent.$refs.reference, this.$el, {
            gpuAcceleration: false,
            placement: this.placement,
            boundariesPadding: 0,
            forceAbsolute: true,
            boundariesElement: 'body'
          });

          this.popper.options.onCreate(popper => {
            this.resetTransformOrigin(popper);
          });
        });
      }
      // set a height for parent is Modal and Select's width is 100%
      if (this.$parent.$options.name === 'qfSelect') {
        this.width = parseInt(Object(assist["f" /* getStyle */])(this.$parent.$el, 'width'));
      }
    },
    destroy() {
      if (this.popper) {
        this.resetTransformOrigin(this.popper);
        setTimeout(() => {
          this.popper.destroy();
          this.popper = null;
        }, 300);
      }
    },
    resetTransformOrigin(popper) {
      let origin = popper.options.placement;
      popper.popper.style.transformOrigin = `center ${origin}`;
    }
  },
  created() {
    this.$on('on-update-popper', this.update);
    this.$on('on-destroy-popper', this.destroy);
  },
  beforeDestroy() {
    if (this.popper) {
      this.popper.destroy();
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-34e4e5e6","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/select/dropdown.vue
var render = function () {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "izy-select-dropdown", class: _vm.className, style: _vm.styles }, [_vm._t("default")], 2);
};
var staticRenderFns = [];
var esExports = { render: render, staticRenderFns: staticRenderFns };
/* harmony default export */ var select_dropdown = (esExports);
// CONCATENATED MODULE: ./src/components/select/dropdown.vue
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  dropdown,
  select_dropdown,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_select_dropdown = __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/icon/icon.vue
//
//
//

/* harmony default export */ var icon = ({
    name: 'Icon',
    props: {
        type: String,
        size: [Number, String],
        color: String
    },
    computed: {
        styles() {
            let style = {};

            if (this.size) {
                style['font-size'] = `${this.size}px`;
            }

            if (this.color) {
                style.color = this.color;
            }

            return style;
        }
    }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-cf74c00c","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/icon/icon.vue
var render = function () {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('i', { staticClass: "izy-icon", class: 'izy-icon-' + _vm.type, style: _vm.styles });
};
var staticRenderFns = [];
var esExports = { render: render, staticRenderFns: staticRenderFns };
/* harmony default export */ var icon_icon = (esExports);
// CONCATENATED MODULE: ./src/components/icon/icon.vue
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  icon,
  icon_icon,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_icon_icon = __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function getTarget(node) {
  if (node === void 0) {
    node = document.body;
  }
  if (node === true) {
    return document.body;
  }
  return node instanceof window.Node ? node : document.querySelector(node);
}
const directive = {
  inserted(el, { value }, vnode) {
    if (el.dataset.transfer !== 'true') return false;
    el.className = el.className ? el.className + ' v-transfer-dom' : 'v-transfer-dom';
    const parentNode = el.parentNode;
    if (!parentNode) return;
    const home = document.createComment('');
    let hasMovedOut = false;

    if (value !== false) {
      parentNode.replaceChild(home, el);
      getTarget(value).appendChild(el);
      hasMovedOut = true;
    }
    if (!el.__transferDomData) {
      el.__transferDomData = {
        parentNode: parentNode,
        home: home,
        target: getTarget(value),
        hasMovedOut: hasMovedOut
      };
    }
  },
  componentUpdated(el, { value }) {
    if (el.dataset.transfer !== 'true') return false;
    // need to make sure children are done updating (vs. `update`)
    const ref$1 = el.__transferDomData;
    if (!ref$1) return;
    // homes.get(el)
    const parentNode = ref$1.parentNode;
    const home = ref$1.home;
    const hasMovedOut = ref$1.hasMovedOut;

    if (!hasMovedOut && value) {
      // remove from document and leave placeholder
      parentNode.replaceChild(home, el);
      // append to target
      getTarget(value).appendChild(el);
      el.__transferDomData = Object.assign({}, el.__transferDomData, { hasMovedOut: true, target: getTarget(value) });
    } else if (hasMovedOut && value === false) {
      // previously moved, coming back home
      parentNode.replaceChild(el, home);
      el.__transferDomData = Object.assign({}, el.__transferDomData, { hasMovedOut: false, target: getTarget(value) });
    } else if (value) {
      // already moved, going somewhere else
      getTarget(value).appendChild(el);
    }
  },
  unbind(el) {
    if (el.dataset.transfer !== 'true') return false;
    el.className = el.className.replace('v-transfer-dom', '');
    const ref$1 = el.__transferDomData;
    if (!ref$1) return;
    if (el.__transferDomData.hasMovedOut === true) {
      el.__transferDomData.parentNode && el.__transferDomData.parentNode.appendChild(el);
    }
    el.__transferDomData = null;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (directive);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_menu__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_card__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_loading__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_select__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_checkbox__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_radio__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_button__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_modal__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_message__ = __webpack_require__(23);










const izy = {
  Menu: __WEBPACK_IMPORTED_MODULE_0__components_menu__["a" /* default */].Menu,
  izyMenu: __WEBPACK_IMPORTED_MODULE_0__components_menu__["a" /* default */].Menu,
  MenuGroup: __WEBPACK_IMPORTED_MODULE_0__components_menu__["a" /* default */].MenuGroup,
  MenuItem: __WEBPACK_IMPORTED_MODULE_0__components_menu__["a" /* default */].MenuItem,
  Submenu: __WEBPACK_IMPORTED_MODULE_0__components_menu__["a" /* default */].Submenu,
  Card: __WEBPACK_IMPORTED_MODULE_1__components_card__["a" /* default */],
  Loading: __WEBPACK_IMPORTED_MODULE_2__components_loading__["a" /* default */],
  Option: __WEBPACK_IMPORTED_MODULE_3__components_select__["a" /* Option */],
  izyOption: __WEBPACK_IMPORTED_MODULE_3__components_select__["a" /* Option */],
  OptionGroup: __WEBPACK_IMPORTED_MODULE_3__components_select__["b" /* OptionGroup */],
  Select: __WEBPACK_IMPORTED_MODULE_3__components_select__["c" /* Select */],
  izySelect: __WEBPACK_IMPORTED_MODULE_3__components_select__["c" /* Select */],
  Checkbox: __WEBPACK_IMPORTED_MODULE_4__components_checkbox__["a" /* Checkbox */],
  CheckboxGroup: __WEBPACK_IMPORTED_MODULE_4__components_checkbox__["b" /* CheckboxGroup */],
  Radio: __WEBPACK_IMPORTED_MODULE_5__components_radio__["a" /* Radio */],
  RadioGroup: __WEBPACK_IMPORTED_MODULE_5__components_radio__["b" /* RadioGroup */],
  Modal: __WEBPACK_IMPORTED_MODULE_7__components_modal__["a" /* default */],
  Button: __WEBPACK_IMPORTED_MODULE_6__components_button__["a" /* default */],
  Message: __WEBPACK_IMPORTED_MODULE_8__components_message__["a" /* default */]
};

const install = function (Vue, opts = {}) {
  if (install.installed) return;
  Object.keys(izy).forEach(key => {
    Vue.component(key, izy[key]);
  });
  Vue.use(__WEBPACK_IMPORTED_MODULE_2__components_loading__["a" /* default */].directive);

  Vue.prototype.$Message = __WEBPACK_IMPORTED_MODULE_8__components_message__["a" /* default */];
  Vue.prototype.$Modal = __WEBPACK_IMPORTED_MODULE_7__components_modal__["a" /* default */];
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

module.exports = Object.assign(izy, { Loading: __WEBPACK_IMPORTED_MODULE_2__components_loading__["a" /* default */], install }); // eslint-disable-line no-undef
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(11)(module)))

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./src/utils/assist.js
var assist = __webpack_require__(1);

// EXTERNAL MODULE: ./src/mixins/emitter.js
var emitter = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/menu/menu.vue
//
//
//




/* harmony default export */ var menu = ({
    name: 'Menu',
    mixins: [emitter["a" /* default */]],
    props: {
        mode: {
            validator(value) {
                return ~['horizontal', 'vertical'].indexOf(value);
            },
            default: 'vertical'
        },
        activeName: {
            type: [String, Number]
        },
        openNames: {
            type: Array,
            default() {
                return [];
            }
        },
        accordion: {
            type: Boolean,
            default: false
        },
        width: {
            type: String,
            default: '240px'
        }
    },
    data() {
        return {
            currentActiveName: this.activeName
        };
    },
    computed: {
        styles() {
            let style = {};

            if (this.mode === 'vertical') style.width = this.width;

            return style;
        }
    },
    methods: {
        updateActiveName() {
            if (this.currentActiveName === undefined) {
                this.currentActiveName = -1;
            }
            this.broadcast('Submenu', 'on-update-active-name', false);
            this.broadcast('MenuItem', 'on-update-active-name', this.currentActiveName);
        },
        updateOpenKeys(name) {
            const index = this.openNames.indexOf(name);
            if (index > -1) {
                this.openNames.splice(index, 1);
            } else {
                this.openNames.push(name);
                if (this.accordion) {
                    this.openNames.splice(0, this.openNames.length);
                    this.openNames.push(name);
                }
            }
        },
        updateOpened() {
            const items = Object(assist["d" /* findComponentsDownward */])(this, 'Submenu');

            if (items.length) {
                items.forEach(item => {
                    if (this.openNames.indexOf(item.name) > -1) item.opened = true;
                });
            }
        }
    },
    mounted() {
        this.updateActiveName();
        this.updateOpened();
        this.$on('on-menu-item-select', name => {
            this.currentActiveName = name;
            this.$emit('on-select', name);
        });
    },
    watch: {
        openNames() {
            this.$emit('on-open-change', this.openNames);
        },
        activeName(val) {
            this.currentActiveName = val;
        },
        currentActiveName() {
            this.updateActiveName();
        }
    }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-831ddab0","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/menu/menu.vue
var render = function () {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('ul', { staticClass: "izy-menu", class: 'izy-menu-' + _vm.mode, style: _vm.styles }, [_vm._t("default")], 2);
};
var staticRenderFns = [];
var esExports = { render: render, staticRenderFns: staticRenderFns };
/* harmony default export */ var menu_menu = (esExports);
// CONCATENATED MODULE: ./src/components/menu/menu.vue
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  menu,
  menu_menu,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_menu_menu = (Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/menu/menu-group.vue
//
//
//
//
//
//

/* harmony default export */ var menu_group = ({
    name: 'MenuGroup',
    props: {
        title: ''
    },
    data() {
        return {};
    }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-01303187","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/menu/menu-group.vue
var menu_group_render = function () {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('li', { staticClass: "izy-menu-item-group" }, [_c('div', { staticClass: "izy-menu-item-group-title" }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('ul', [_vm._t("default")], 2)]);
};
var menu_group_staticRenderFns = [];
var menu_group_esExports = { render: menu_group_render, staticRenderFns: menu_group_staticRenderFns };
/* harmony default export */ var menu_menu_group = (menu_group_esExports);
// CONCATENATED MODULE: ./src/components/menu/menu-group.vue
var menu_group_normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var menu_group___vue_template_functional__ = false
/* styles */
var menu_group___vue_styles__ = null
/* scopeId */
var menu_group___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var menu_group___vue_module_identifier__ = null
var menu_group_Component = menu_group_normalizeComponent(
  menu_group,
  menu_menu_group,
  menu_group___vue_template_functional__,
  menu_group___vue_styles__,
  menu_group___vue_scopeId__,
  menu_group___vue_module_identifier__
)

/* harmony default export */ var components_menu_menu_group = (menu_group_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/menu/menu-item.vue
//
//
//


const componentCls = 'izy-menu';

/* harmony default export */ var menu_item = ({
    name: 'MenuItem',
    mixins: [emitter["a" /* default */]],
    props: {
        name: {
            type: [String, Number]
            //                required: true
        },
        disabled: 'false'
    },
    data() {
        return {
            active: false
        };
    },
    computed: {
        classes() {
            return [`${componentCls}-item`, {
                [`${componentCls}-item-active`]: this.active,
                [`${componentCls}-item-selected`]: this.active,
                [`${componentCls}-item-disabled`]: this.disabled
            }];
        }
    },
    methods: {
        handleClick() {
            if (this.disabled) return;

            let parent = this.$parent;
            let name = parent.$options.name;
            while (parent && (!name || name !== 'Submenu')) {
                parent = parent.$parent;
                if (parent) name = parent.$options.name;
            }

            if (parent) {
                this.dispatch('Submenu', 'on-menu-item-select', this.name);
            } else {
                this.dispatch('Menu', 'on-menu-item-select', this.name);
            }
        }
    },
    mounted() {
        this.$on('on-update-active-name', name => {
            if (this.name === name) {
                this.active = true;
                this.dispatch('Submenu', 'on-update-active-name', true);
            } else {
                this.active = false;
            }
        });
    }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2a6428b8","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/menu/menu-item.vue
var menu_item_render = function () {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('li', { class: _vm.classes, on: { "click": function ($event) {
        $event.stopPropagation();_vm.handleClick($event);
      } } }, [_vm._t("default")], 2);
};
var menu_item_staticRenderFns = [];
var menu_item_esExports = { render: menu_item_render, staticRenderFns: menu_item_staticRenderFns };
/* harmony default export */ var menu_menu_item = (menu_item_esExports);
// CONCATENATED MODULE: ./src/components/menu/menu-item.vue
var menu_item_normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var menu_item___vue_template_functional__ = false
/* styles */
var menu_item___vue_styles__ = null
/* scopeId */
var menu_item___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var menu_item___vue_module_identifier__ = null
var menu_item_Component = menu_item_normalizeComponent(
  menu_item,
  menu_menu_item,
  menu_item___vue_template_functional__,
  menu_item___vue_styles__,
  menu_item___vue_scopeId__,
  menu_item___vue_module_identifier__
)

/* harmony default export */ var components_menu_menu_item = (menu_item_Component.exports);

// EXTERNAL MODULE: ./src/components/select/dropdown.vue + 2 modules
var dropdown = __webpack_require__(7);

// EXTERNAL MODULE: ./src/components/icon/icon.vue + 2 modules
var icon = __webpack_require__(8);

// CONCATENATED MODULE: ./src/components/base/collapse-transition.js


const Transition = {
  beforeEnter(el) {
    Object(assist["a" /* addClass */])(el, 'collapse-transition');
    if (!el.dataset) el.dataset = {};

    el.dataset.oldPaddingTop = el.style.paddingTop;
    el.dataset.oldPaddingBottom = el.style.paddingBottom;

    el.style.height = '0';
    el.style.paddingTop = 0;
    el.style.paddingBottom = 0;
  },

  enter(el) {
    el.dataset.oldOverflow = el.style.overflow;
    if (el.scrollHeight !== 0) {
      el.style.height = el.scrollHeight + 'px';
      el.style.paddingTop = el.dataset.oldPaddingTop;
      el.style.paddingBottom = el.dataset.oldPaddingBottom;
    } else {
      el.style.height = '';
      el.style.paddingTop = el.dataset.oldPaddingTop;
      el.style.paddingBottom = el.dataset.oldPaddingBottom;
    }

    el.style.overflow = 'hidden';
  },

  afterEnter(el) {
    // for safari: remove class then reset height is necessary
    Object(assist["g" /* removeClass */])(el, 'collapse-transition');
    el.style.height = '';
    el.style.overflow = el.dataset.oldOverflow;
  },

  beforeLeave(el) {
    if (!el.dataset) el.dataset = {};
    el.dataset.oldPaddingTop = el.style.paddingTop;
    el.dataset.oldPaddingBottom = el.style.paddingBottom;
    el.dataset.oldOverflow = el.style.overflow;

    el.style.height = el.scrollHeight + 'px';
    el.style.overflow = 'hidden';
  },

  leave(el) {
    if (el.scrollHeight !== 0) {
      // for safari: add class after set height, or it will jump to zero height suddenly, weired
      Object(assist["a" /* addClass */])(el, 'collapse-transition');
      el.style.height = 0;
      el.style.paddingTop = 0;
      el.style.paddingBottom = 0;
    }
  },

  afterLeave(el) {
    Object(assist["g" /* removeClass */])(el, 'collapse-transition');
    el.style.height = '';
    el.style.overflow = el.dataset.oldOverflow;
    el.style.paddingTop = el.dataset.oldPaddingTop;
    el.style.paddingBottom = el.dataset.oldPaddingBottom;
  }
};

/* harmony default export */ var collapse_transition = ({
  name: 'CollapseTransition',
  functional: true,
  render(h, { children }) {
    const data = {
      on: Transition
    };

    return h('transition', data, children);
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/menu/submenu.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







const prefixCls = 'izy-menu';

/* harmony default export */ var submenu = ({
    name: 'Submenu',
    mixins: [emitter["a" /* default */]],
    components: { Icon: icon["a" /* default */], Drop: dropdown["a" /* default */], CollapseTransition: collapse_transition },
    props: {
        name: {
            type: [String, Number],
            required: true
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            prefixCls: prefixCls,
            active: false,
            opened: false,
            dropWidth: parseFloat(Object(assist["f" /* getStyle */])(this.$el, 'width')),
            parent: Object(assist["c" /* findComponentUpward */])(this, 'Menu')
        };
    },
    computed: {
        classes() {
            return [`${prefixCls}-submenu`, {
                [`${prefixCls}-item-active`]: this.active,
                [`${prefixCls}-opened`]: this.opened,
                [`${prefixCls}-submenu-disabled`]: this.disabled
            }];
        },
        mode() {
            return this.parent.mode;
        },
        accordion() {
            return this.parent.accordion;
        },
        dropStyle() {
            let style = {};

            if (this.dropWidth) style.minWidth = `${this.dropWidth}px`;
            return style;
        }
    },
    methods: {
        handleMouseenter() {
            if (this.disabled) return;
            if (this.mode === 'vertical') return;

            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                this.parent.updateOpenKeys(this.name);
                this.opened = true;
            }, 250);
        },
        handleMouseleave() {
            if (this.disabled) return;
            if (this.mode === 'vertical') return;

            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                this.parent.updateOpenKeys(this.name);
                this.opened = false;
            }, 150);
        },
        handleClick() {
            if (this.disabled) return;
            if (this.mode === 'horizontal') return;
            const opened = this.opened;
            if (this.accordion) {
                this.parent.$children.forEach(item => {
                    if (item.$options.name === 'Submenu') item.opened = false;
                });
            }
            this.opened = !opened;
            this.parent.updateOpenKeys(this.name);
        }
    },
    watch: {
        mode(val) {
            if (val === 'horizontal') {
                this.$refs.drop.update();
            }
        },
        opened(val) {
            if (this.mode === 'vertical') return;
            if (val) {
                // set drop a width to fixed when menu has fixed position
                this.dropWidth = parseFloat(Object(assist["f" /* getStyle */])(this.$el, 'width'));
                this.$refs.drop.update();
            } else {
                this.$refs.drop.destroy();
            }
        }
    },
    mounted() {
        this.$on('on-menu-item-select', name => {
            if (this.mode === 'horizontal') this.opened = false;
            this.dispatch('Menu', 'on-menu-item-select', name);
            return true;
        });
        this.$on('on-update-active-name', status => {
            this.active = status;
        });
    }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4dde2ff4","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/menu/submenu.vue
var submenu_render = function () {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('li', { class: _vm.classes, on: { "mouseenter": _vm.handleMouseenter, "mouseleave": _vm.handleMouseleave } }, [_c('div', { ref: "reference", class: [_vm.prefixCls + '-submenu-title'], on: { "click": _vm.handleClick } }, [_vm._t("title"), _vm._v(" "), _c('Icon', { class: [_vm.prefixCls + '-submenu-title-icon'], attrs: { "type": "arrow-down-b" } })], 2), _vm._v(" "), _vm.mode === 'vertical' ? _c('collapse-transition', [_c('ul', { directives: [{ name: "show", rawName: "v-show", value: _vm.opened, expression: "opened" }], class: [_vm.prefixCls] }, [_vm._t("default")], 2)]) : _c('transition', { attrs: { "name": "slide-up" } }, [_c('Drop', { directives: [{ name: "show", rawName: "v-show", value: _vm.opened, expression: "opened" }], ref: "drop", style: _vm.dropStyle, attrs: { "placement": "bottom" } }, [_c('ul', { class: [_vm.prefixCls + '-drop-list'] }, [_vm._t("default")], 2)])], 1)], 1);
};
var submenu_staticRenderFns = [];
var submenu_esExports = { render: submenu_render, staticRenderFns: submenu_staticRenderFns };
/* harmony default export */ var menu_submenu = (submenu_esExports);
// CONCATENATED MODULE: ./src/components/menu/submenu.vue
var submenu_normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var submenu___vue_template_functional__ = false
/* styles */
var submenu___vue_styles__ = null
/* scopeId */
var submenu___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var submenu___vue_module_identifier__ = null
var submenu_Component = submenu_normalizeComponent(
  submenu,
  menu_submenu,
  submenu___vue_template_functional__,
  submenu___vue_styles__,
  submenu___vue_scopeId__,
  submenu___vue_module_identifier__
)

/* harmony default export */ var components_menu_submenu = (submenu_Component.exports);

// CONCATENATED MODULE: ./src/components/menu/index.js





components_menu_menu.install = function (Vue) {
  Vue.component(components_menu_menu.name, components_menu_menu);
};
components_menu_menu_group.install = function (Vue) {
  Vue.component(components_menu_menu_group.name, components_menu_menu_group);
};
components_menu_menu_item.install = function (Vue) {
  Vue.component(components_menu_menu_item.name, components_menu_menu_item);
};
components_menu_submenu.install = function (Vue) {
  Vue.component(components_menu_submenu.name, components_menu_submenu);
};

/* harmony default export */ var components_menu = __webpack_exports__["a"] = ({
  Menu: components_menu_menu,
  MenuGroup: components_menu_menu_group,
  MenuItem: components_menu_menu_item,
  Submenu: components_menu_submenu
});

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.12.6
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';
var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
var timeoutDuration = 0;
for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return window.document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  // NOTE: 1 DOM access here
  var offsetParent = element && element.offsetParent;
  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    if (element) {
      return element.ownerDocument.documentElement;
    }

    return window.document.documentElement;
  }

  // .offsetParent will return the closest TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return window.document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return +styles['border' + sideA + 'Width'].split('px')[0] + +styles['border' + sideB + 'Width'].split('px')[0];
}

/**
 * Tells if you are running Internet Explorer 10
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean} isIE10
 */
var isIE10 = undefined;

var isIE10$1 = function () {
  if (isIE10 === undefined) {
    isIE10 = navigator.appVersion.indexOf('MSIE 10') !== -1;
  }
  return isIE10;
};

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE10$1() ? html['offset' + axis] + computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')] + computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')] : 0);
}

function getWindowSizes() {
  var body = window.document.body;
  var html = window.document.documentElement;
  var computedStyle = isIE10$1() && window.getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  if (isIE10$1()) {
    try {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } catch (err) {}
  } else {
    rect = element.getBoundingClientRect();
  }

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes() : {};
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var isIE10 = isIE10$1();
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = +styles.borderTopWidth.split('px')[0];
  var borderLeftWidth = +styles.borderLeftWidth.split('px')[0];

  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = +styles.marginTop.split('px')[0];
    var marginLeft = +styles.marginLeft.split('px')[0];

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = getScroll(html);
  var scrollLeft = getScroll(html, 'left');

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  return isFixed(getParentNode(element));
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  // NOTE: 1 DOM access here
  var boundaries = { top: 0, left: 0 };
  var offsetParent = findCommonOffsetParent(popper, reference);

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(popper));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  boundaries.left += padding;
  boundaries.top += padding;
  boundaries.right -= padding;
  boundaries.bottom -= padding;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var commonOffsetParent = findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
  var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
  data.offsets.popper.position = 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length - 1; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof window.document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroy the popper
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.left = '';
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicity asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger onUpdate callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    window.cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper.
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  // floor sides to avoid blurry text
  var offsets = {
    left: Math.floor(popper.left),
    top: Math.floor(popper.top),
    bottom: Math.floor(popper.bottom),
    right: Math.floor(popper.right)
  };

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    top = -offsetParentRect.height + offsets.bottom;
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    left = -offsetParentRect.width + offsets.right;
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjuction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var popperMarginSide = getStyleComputedProperty(data.instance.popper, 'margin' + sideCapitalized).replace('px', '');
  var sideValue = center - getClientRect(data.offsets.popper)[side] - popperMarginSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = {};
  data.offsets.arrow[side] = Math.round(sideValue);
  data.offsets.arrow[altSide] = ''; // make sure to unset any eventual altSide value from the DOM node

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-right` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
    var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement);
  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unitless, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the height.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > More on this [reading this issue](https://github.com/FezVrasta/popper.js/issues/373)
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * An scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper this makes sure the popper has always a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier, can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near eachothers
   * without leaving any gap between the two. Expecially useful when the arrow is
   * enabled and you want to assure it to point to its reference element.
   * It cares only about the first axis, you can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjuction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations).
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position,
     * the popper will never be placed outside of the defined boundaries
     * (except if keepTogether is enabled)
     */
    boundariesElement: 'viewport'
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define you own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the informations used by Popper.js
 * this object get passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper.
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements.
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overriden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass as 3rd argument an object with the same
 * structure of this object, example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Whether events (resize, scroll) are initially enabled
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated, this callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Create a new Popper.js instance
   * @class Popper
   * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as popper.
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedule an update, it will run on the next UI update available
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

/* harmony default export */ __webpack_exports__["a"] = (Popper);
//# sourceMappingURL=popper.js.map

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(14)))

/***/ }),
/* 14 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/card/card.vue
//
//
//
//
//
//
//

const prefixCls = 'izy-card';
const defaultPadding = 16;

/* harmony default export */ var card = ({
  name: 'Card',

  props: {
    bordered: {
      type: Boolean,
      default: true
    },
    disHover: {
      type: Boolean,
      default: false
    },
    shadow: {
      type: Boolean,
      default: false
    },
    padding: {
      type: Number,
      default: defaultPadding
    }
  },
  data() {
    return {
      showHead: true,
      showExtra: true
    };
  },
  computed: {
    classes() {
      return [`${prefixCls}`, {
        [`${prefixCls}-bordered`]: this.bordered && !this.shadow,
        [`${prefixCls}-dis-hover`]: this.disHover || this.shadow,
        [`${prefixCls}-shadow`]: this.shadow
      }];
    },
    headClasses() {
      return `${prefixCls}-head`;
    },
    extraClasses() {
      return `${prefixCls}-extra`;
    },
    bodyClasses() {
      return `${prefixCls}-body`;
    },
    bodyStyles() {
      if (this.padding !== defaultPadding) {
        return {
          padding: `${this.padding}px`
        };
      } else {
        return '';
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7271907f","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/card/card.vue
var render = function () {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.classes }, [_c('div', { class: _vm.headClasses }, [_vm._t("title")], 2), _vm._v(" "), _c('div', { class: _vm.extraClasses }, [_vm._t("extra")], 2), _vm._v(" "), _c('div', { class: _vm.bodyClasses, style: _vm.bodyStyles }, [_vm._t("default")], 2)]);
};
var staticRenderFns = [];
var esExports = { render: render, staticRenderFns: staticRenderFns };
/* harmony default export */ var card_card = (esExports);
// CONCATENATED MODULE: ./src/components/card/card.vue
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  card,
  card_card,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_card_card = (Component.exports);

// CONCATENATED MODULE: ./src/components/card/index.js

components_card_card.install = function (Vue) {
  Vue.component(components_card_card.name, components_card_card);
};
/* harmony default export */ var components_card = __webpack_exports__["a"] = (components_card_card);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external {"root":"Vue","commonjs":"vue","commonjs2":"vue","amd":"vue"}
var external___root___Vue___commonjs___vue___commonjs2___vue___amd___vue__ = __webpack_require__(3);
var external___root___Vue___commonjs___vue___commonjs2___vue___amd___vue___default = /*#__PURE__*/__webpack_require__.n(external___root___Vue___commonjs___vue___commonjs2___vue___amd___vue__);

// EXTERNAL MODULE: ./src/utils/assist.js
var assist = __webpack_require__(1);

// CONCATENATED MODULE: ./src/components/loading/directive.js


const Mask = external___root___Vue___commonjs___vue___commonjs2___vue___amd___vue___default.a.extend(__webpack_require__(17).default);
exports.install = Vue => {
  if (Vue.prototype.$isServer) return;
  const toggleLoading = (el, binding) => {
    if (binding.value) {
      Vue.nextTick(() => {
        if (binding.modifiers.fullscreen) {
          el.originalPosition = Object(assist["f" /* getStyle */])(document.body, 'position');
          el.originalOverflow = Object(assist["f" /* getStyle */])(document.body, 'overflow');

          Object(assist["a" /* addClass */])(el.mask, 'is-fullscreen');
          insertDom(document.body, el, binding);
        } else {
          Object(assist["g" /* removeClass */])(el.mask, 'is-fullscreen');

          if (binding.modifiers.body) {
            el.originalPosition = Object(assist["f" /* getStyle */])(document.body, 'position');

            ['top', 'left'].forEach(property => {
              const scroll = property === 'top' ? 'scrollTop' : 'scrollLeft';
              el.maskStyle[property] = el.getBoundingClientRect()[property] + document.body[scroll] + document.documentElement[scroll] + 'px';
            });
            ['height', 'width'].forEach(property => {
              el.maskStyle[property] = el.getBoundingClientRect()[property] + 'px';
            });

            insertDom(document.body, el, binding);
          } else {
            el.originalPosition = Object(assist["f" /* getStyle */])(el, 'position');
            insertDom(el, el, binding);
          }
        }
      });
    } else {
      if (el.domVisible) {
        el.instance.$on('after-leave', _ => {
          el.domVisible = false;
          if (binding.modifiers.fullscreen && el.originalOverflow !== 'hidden') {
            document.body.style.overflow = el.originalOverflow;
          }
          if (binding.modifiers.fullscreen || binding.modifiers.body) {
            document.body.style.position = el.originalPosition;
          } else {
            el.style.position = el.originalPosition;
          }
        });
        el.instance.visible = false;
      }
    }
  };
  const insertDom = (parent, el, binding) => {
    if (!el.domVisible && Object(assist["f" /* getStyle */])(el, 'display') !== 'none' && Object(assist["f" /* getStyle */])(el, 'visibility') !== 'hidden') {
      Object.keys(el.maskStyle).forEach(property => {
        el.mask.style[property] = el.maskStyle[property];
      });

      if (el.originalPosition !== 'absolute' && el.originalPosition !== 'fixed') {
        parent.style.position = 'relative';
      }
      if (binding.modifiers.fullscreen && binding.modifiers.lock) {
        parent.style.overflow = 'hidden';
      }
      el.domVisible = true;

      parent.appendChild(el.mask);
      Vue.nextTick(() => {
        el.instance.visible = true;
      });
      el.domInserted = true;
    }
  };

  Vue.directive('loading', {
    bind: function (el, binding) {
      const mask = new Mask({
        el: document.createElement('div'),
        data: {
          text: el.getAttribute('izy-loading-text'),
          fullscreen: !!binding.modifiers.fullscreen
        }
      });
      el.instance = mask;
      el.mask = mask.$el;
      el.maskStyle = {};

      toggleLoading(el, binding);
    },

    update: function (el, binding) {
      el.instance.setText(el.getAttribute('izy-loading-text'));
      if (binding.oldValue !== binding.value) {
        toggleLoading(el, binding);
      }
    },

    unbind: function (el, binding) {
      if (el.domInserted) {
        if (binding.modifiers.fullscreen || binding.modifiers.body) {
          document.body.removeChild(el.mask);
        } else {
          el.mask && el.mask.parentNode && el.mask.parentNode.removeChild(el.mask);
        }
      }
    }
  });
};
// CONCATENATED MODULE: ./src/components/loading/index.js


/* harmony default export */ var loading = __webpack_exports__["a"] = ({
  install(Vue) {
    Vue.use(/* Cannot get final name for export "default" in "./src/components/loading/directive.js" (known exports: , known reexports: ) */ undefined);
  },
  directive: /* Cannot get final name for export "default" in "./src/components/loading/directive.js" (known exports: , known reexports: ) */ undefined
});

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/loading/loading.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const prefixCls = 'izy-loading';

/* harmony default export */ var loading = ({
  data() {
    return {
      prefixCls: prefixCls,
      text: null,
      fullscreen: false,
      visible: false,
      customClass: ''
    };
  },

  computed: {
    classes() {
      let theme = this.theme;
      if (this.mode === 'vertical' && this.theme === 'primary') theme = 'light';

      return [`${prefixCls}-mask`, `${this.customClass}`, {
        'is-fullscreen': this.fullscreen
      }];
    }
  },

  methods: {
    handleAfterLeave() {
      this.$emit('after-leave');
    },
    setText(text) {
      this.text = text;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-c0686f64","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/loading/loading.vue
var render = function () {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('transition', { attrs: { "name": "izy-loading-fade" }, on: { "after-leave": _vm.handleAfterLeave } }, [_c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.visible, expression: "visible" }], class: _vm.classes }, [_c('div', { class: [_vm.prefixCls + '-spinner'] }, [_c('svg', { attrs: { "id": "Layer_1", "x": "0px", "y": "0px", "viewBox": "0 0 24 30" } }, [_c('rect', { attrs: { "x": "0", "y": "13", "width": "4", "height": "5", "fill": "#333" } }, [_c('animate', { attrs: { "attributeName": "height", "attributeType": "XML", "values": "5;21;5", "begin": "0s", "dur": "0.6s", "repeatCount": "indefinite" } }), _vm._v(" "), _c('animate', { attrs: { "attributeName": "y", "attributeType": "XML", "values": "13; 5; 13", "begin": "0s", "dur": "0.6s", "repeatCount": "indefinite" } })]), _vm._v(" "), _c('rect', { attrs: { "x": "10", "y": "13", "width": "4", "height": "5", "fill": "#333" } }, [_c('animate', { attrs: { "attributeName": "height", "attributeType": "XML", "values": "5;21;5", "begin": "0.15s", "dur": "0.6s", "repeatCount": "indefinite" } }), _vm._v(" "), _c('animate', { attrs: { "attributeName": "y", "attributeType": "XML", "values": "13; 5; 13", "begin": "0.15s", "dur": "0.6s", "repeatCount": "indefinite" } })]), _vm._v(" "), _c('rect', { attrs: { "x": "20", "y": "13", "width": "4", "height": "5", "fill": "#333" } }, [_c('animate', { attrs: { "attributeName": "height", "attributeType": "XML", "values": "5;21;5", "begin": "0.3s", "dur": "0.6s", "repeatCount": "indefinite" } }), _vm._v(" "), _c('animate', { attrs: { "attributeName": "y", "attributeType": "XML", "values": "13; 5; 13", "begin": "0.3s", "dur": "0.6s", "repeatCount": "indefinite" } })])]), _vm._v(" "), _vm.text ? _c('p', { class: [_vm.prefixCls + '-text'] }, [_vm._v(_vm._s(_vm.text))]) : _vm._e()])])]);
};
var staticRenderFns = [];
var esExports = { render: render, staticRenderFns: staticRenderFns };
/* harmony default export */ var loading_loading = (esExports);
// CONCATENATED MODULE: ./src/components/loading/loading.vue
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  loading,
  loading_loading,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_loading_loading = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./src/components/icon/index.js
var icon = __webpack_require__(4);

// EXTERNAL MODULE: ./src/components/select/dropdown.vue + 2 modules
var dropdown = __webpack_require__(7);

// CONCATENATED MODULE: ./src/directives/clickoutside.js
/* harmony default export */ var clickoutside = ({
  bind(el, binding, vnode) {
    function documentHandler(e) {
      if (el.contains(e.target)) {
        return false;
      }
      if (binding.expression) {
        binding.value(e);
      }
    }
    el.__vueClickOutside__ = documentHandler;
    document.addEventListener('click', documentHandler);
  },
  update() {},
  unbind(el, binding) {
    document.removeEventListener('click', el.__vueClickOutside__);
    delete el.__vueClickOutside__;
  }
});
// EXTERNAL MODULE: ./src/directives/transfer-dom.js
var transfer_dom = __webpack_require__(9);

// EXTERNAL MODULE: ./src/utils/assist.js
var assist = __webpack_require__(1);

// EXTERNAL MODULE: ./src/mixins/emitter.js
var emitter = __webpack_require__(2);

// EXTERNAL MODULE: ./src/mixins/locale.js + 4 modules
var locale = __webpack_require__(5);

// CONCATENATED MODULE: ./src/components/select/utils.js
function debounce(fn) {
  let waiting;
  return function () {
    if (waiting) return;
    waiting = true;
    const context = this,
          args = arguments;
    const later = function () {
      waiting = false;
      fn.apply(context, args);
    };
    this.$nextTick(later);
  };
}
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/select/select.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//










const prefixCls = 'izy-select';

/* harmony default export */ var select_select = ({
  name: 'qfSelect',
  mixins: [emitter["a" /* default */], locale["a" /* default */]],
  components: { Icon: icon["a" /* default */], Drop: dropdown["a" /* default */] },
  directives: { clickoutside: clickoutside, TransferDom: transfer_dom["a" /* default */] },
  props: {
    value: {
      type: [String, Number, Array],
      default: ''
    },
    label: {
      type: [String, Number, Array],
      default: ''
    },
    multiple: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String
    },
    filterable: {
      type: Boolean,
      default: false
    },
    filterMethod: {
      type: Function
    },
    remote: {
      type: Boolean,
      default: false
    },
    remoteMethod: {
      type: Function
    },
    loading: {
      type: Boolean,
      default: false
    },
    loadingText: {
      type: String
    },
    size: {
      validator(value) {
        return Object(assist["h" /* sizeValid */])(value);
      }
    },
    labelInValue: {
      type: Boolean,
      default: false
    },
    notFoundText: {
      type: String
    },
    placement: {
      validator(value) {
        return ~['top', 'bottom'].indexOf(value);
      },
      default: 'bottom'
    },
    transfer: {
      type: Boolean,
      default: false
    },
    autoComplete: {
      type: Boolean,
      default: false
    },
    name: {
      type: String
    },
    elementId: {
      type: String
    }
  },
  data() {
    return {
      prefixCls: prefixCls,
      visible: false,
      options: [],
      optionInstances: [],
      selectedSingle: '',
      selectedMultiple: [],
      focusIndex: 0,
      query: '',
      lastQuery: '',
      selectToChangeQuery: false, // when select an option, set this first and set query, because query is watching, it will emit event
      inputLength: 20,
      notFound: false,
      slotChangeDuration: false, // if slot change duration and in multiple, set true and after slot change, set false
      model: this.value, //
      currentLabel: this.label
    };
  },
  computed: {
    classes() {
      return [`${prefixCls}`, {
        [`${prefixCls}-visible`]: this.visible,
        [`${prefixCls}-disabled`]: this.disabled,
        [`${prefixCls}-multiple`]: this.multiple,
        [`${prefixCls}-single`]: !this.multiple,
        [`${prefixCls}-show-clear`]: this.showCloseIcon,
        [`${prefixCls}-${this.size}`]: !!this.size
      }];
    },
    dropdownCls() {
      return {
        [prefixCls + '-dropdown-transfer']: this.transfer,
        [prefixCls + '-multiple']: this.multiple && this.transfer,
        ['izy-auto-complete']: this.autoComplete
      };
    },
    selectionCls() {
      return {
        [`${prefixCls}-selection`]: !this.autoComplete
      };
    },
    showPlaceholder() {
      let status = false;
      if (typeof this.model === 'string') {
        if (this.model === '') {
          status = true;
        }
      } else if (Array.isArray(this.model)) {
        if (!this.model.length) {
          status = true;
        }
      } else if (this.model === null) {
        status = true;
      }
      return status;
    },
    showCloseIcon() {
      return !this.multiple && this.clearable && !this.showPlaceholder;
    },
    inputStyle() {
      let style = {};
      if (this.multiple) {
        if (this.showPlaceholder) {
          style.width = '100%';
        } else {
          style.width = `${this.inputLength}px`;
        }
      }
      return style;
    },
    localePlaceholder() {
      if (this.placeholder === undefined) {
        return this.t('qf.select.placeholder');
      } else {
        return this.placeholder;
      }
    },
    localeNotFoundText() {
      if (this.notFoundText === undefined) {
        return this.t('qf.select.noMatch');
      } else {
        return this.notFoundText;
      }
    },
    localeLoadingText() {
      if (this.loadingText === undefined) {
        return this.t('qf.select.loading');
      } else {
        return this.loadingText;
      }
    },
    transitionName() {
      return this.placement === 'bottom' ? 'slide-up' : 'slide-down';
    },
    dropVisible() {
      let status = true;
      const options = this.$slots.default || [];
      if (!this.loading && this.remote && this.query === '' && !options.length) status = false;
      if (this.autoComplete && !options.length) status = false;
      return this.visible && status;
    },
    notFoundShow() {
      const options = this.$slots.default || [];
      return this.notFound && !this.remote || this.remote && !this.loading && !options.length;
    }
  },
  methods: {
    toggleMenu() {
      if (this.disabled || this.autoComplete) {
        return false;
      }
      this.visible = !this.visible;
    },
    hideMenu() {
      this.visible = false;
      this.focusIndex = 0;
      this.broadcast('qfOption', 'on-select-close');
    },
    //find option component and execute cb
    findChild(cb) {
      const find = function (child) {
        const name = child.$options.componentName;
        if (name) {
          cb(child);
        } else if (child.$children.length) {
          child.$children.forEach(innerChild => {
            find(innerChild, cb);
          });
        }
      };

      if (this.optionInstances.length) {
        this.optionInstances.forEach(child => {
          find(child);
        });
      } else {
        this.$children.forEach(child => {
          find(child);
        });
      }
    },
    updateOptions(slot = false) {
      let options = [];
      let index = 1;

      this.findChild(child => {
        options.push({
          value: child.value,
          label: child.label === undefined ? child.$el.textContent : child.label
        });
        child.index = index++;
        this.optionInstances.push(child);
      });

      this.options = options;
      if (!this.remote) {
        this.updateSingleSelected(true, slot);
        this.updateMultipleSelected(true, slot);
      }
    },
    updateSingleSelected(init = false, slot = false) {
      const type = typeof this.model;
      if (type === 'string' || type === 'number') {
        let findModel = false;

        for (let i = 0; i < this.options.length; i++) {
          if (this.model === this.options[i].value) {
            this.selectedSingle = this.options[i].label;
            findModel = true;
            break;
          }
        }

        if (slot && !findModel) {
          this.model = '';
          this.query = '';
        }
      }
      this.toggleSingleSelected(this.model, init);
    },
    clearSingleSelect() {
      if (this.showCloseIcon) {
        this.findChild(child => {
          child.selected = false;
        });
        this.model = '';

        if (this.filterable) {
          this.query = '';
        }
      }
    },
    updateMultipleSelected(init = false, slot = false) {
      if (this.multiple && Array.isArray(this.model)) {
        let selected = this.remote ? this.selectedMultiple : [];

        for (let i = 0; i < this.model.length; i++) {
          const model = this.model[i];

          for (let j = 0; j < this.options.length; j++) {
            const option = this.options[j];

            if (model === option.value) {
              selected.push({
                value: option.value,
                label: option.label
              });
            }
          }
        }

        const selectedArray = [];
        const selectedObject = {};

        selected.forEach(item => {
          if (!selectedObject[item.value]) {
            selectedArray.push(item);
            selectedObject[item.value] = 1;
          }
        });

        this.selectedMultiple = this.remote ? this.model.length ? selectedArray : [] : selected;

        if (slot) {
          let selectedModel = [];

          for (let i = 0; i < selected.length; i++) {
            selectedModel.push(selected[i].value);
          }

          // if slot change and remove a selected option, emit user
          if (this.model.length === selectedModel.length) {
            this.slotChangeDuration = true;
          }

          this.model = selectedModel;
        }
      }
      this.toggleMultipleSelected(this.model, init);
    },
    removeTag(index) {
      if (this.disabled) {
        return false;
      }

      if (this.remote) {
        const tag = this.model[index];
        this.selectedMultiple = this.selectedMultiple.filter(item => item.value !== tag);
      }

      this.model.splice(index, 1);

      if (this.filterable && this.visible) {
        this.$refs.input.focus();
      }

      this.broadcast('Drop', 'on-update-popper');
    },
    // to select option for single
    toggleSingleSelected(value, init = false) {
      if (!this.multiple) {
        let label = '';

        this.findChild(child => {
          if (child.value === value) {
            child.selected = true;
            label = child.label === undefined ? child.$el.innerHTML : child.label;
          } else {
            child.selected = false;
          }
        });

        this.hideMenu();

        if (!init) {
          if (this.labelInValue) {
            this.$emit('on-change', {
              value: value,
              label: label
            });
            this.dispatch('FormItem', 'on-form-change', {
              value: value,
              label: label
            });
          } else {
            this.$emit('on-change', value);
            this.dispatch('FormItem', 'on-form-change', value);
          }
        }
      }
    },
    // to select option for multiple
    toggleMultipleSelected(value, init = false) {
      if (this.multiple) {
        let hybridValue = [];
        for (let i = 0; i < value.length; i++) {
          hybridValue.push({
            value: value[i]
          });
        }

        this.findChild(child => {
          const index = value.indexOf(child.value);

          if (index >= 0) {
            child.selected = true;
            hybridValue[index].label = child.label === undefined ? child.$el.innerHTML : child.label;
          } else {
            child.selected = false;
          }
        });

        if (!init) {
          if (this.labelInValue) {
            this.$emit('on-change', hybridValue);
            this.dispatch('FormItem', 'on-form-change', hybridValue);
          } else {
            this.$emit('on-change', value);
            this.dispatch('FormItem', 'on-form-change', value);
          }
        }
      }
    },
    handleClose() {
      this.hideMenu();
    },
    handleKeydown(e) {
      if (this.visible) {
        const keyCode = e.keyCode;
        // Esc slide-up
        if (keyCode === 27) {
          e.preventDefault();
          this.hideMenu();
        }
        // next
        if (keyCode === 40) {
          e.preventDefault();
          this.navigateOptions('next');
        }
        // prev
        if (keyCode === 38) {
          e.preventDefault();
          this.navigateOptions('prev');
        }
        // enter
        if (keyCode === 13) {
          e.preventDefault();

          this.findChild(child => {
            if (child.isFocus) {
              child.select();
            }
          });
        }
      }
    },
    navigateOptions(direction) {
      if (direction === 'next') {
        const next = this.focusIndex + 1;
        this.focusIndex = this.focusIndex === this.options.length ? 1 : next;
      } else if (direction === 'prev') {
        const prev = this.focusIndex - 1;
        this.focusIndex = this.focusIndex <= 1 ? this.options.length : prev;
      }

      let child_status = {
        disabled: false,
        hidden: false
      };

      let find_deep = false; // can next find allowed

      this.findChild(child => {
        if (child.index === this.focusIndex) {
          child_status.disabled = child.disabled;
          child_status.hidden = child.hidden;

          if (!child.disabled && !child.hidden) {
            child.isFocus = true;
          }
        } else {
          child.isFocus = false;
        }

        if (!child.hidden && !child.disabled) {
          find_deep = true;
        }
      });

      this.resetScrollTop();

      if ((child_status.disabled || child_status.hidden) && find_deep) {
        this.navigateOptions(direction);
      }
    },
    resetScrollTop() {
      const index = this.focusIndex - 1;
      let bottomOverflowDistance = this.optionInstances[index].$el.getBoundingClientRect().bottom - this.$refs.dropdown.$el.getBoundingClientRect().bottom;
      let topOverflowDistance = this.optionInstances[index].$el.getBoundingClientRect().top - this.$refs.dropdown.$el.getBoundingClientRect().top;

      if (bottomOverflowDistance > 0) {
        this.$refs.dropdown.$el.scrollTop += bottomOverflowDistance;
      }
      if (topOverflowDistance < 0) {
        this.$refs.dropdown.$el.scrollTop += topOverflowDistance;
      }
    },
    handleBlur() {
      setTimeout(() => {
        if (this.autoComplete) return;
        const model = this.model;

        if (this.multiple) {
          this.query = '';
        } else {
          if (model !== '') {
            this.findChild(child => {
              if (child.value === model) {
                this.query = child.label === undefined ? child.searchLabel : child.label;
              }
            });
            // 如果删除了搜索词，下拉列表也清空了，所以强制调用一次remoteMethod
            if (this.remote && this.query !== this.lastQuery) {
              this.$nextTick(() => {
                this.query = this.lastQuery;
              });
            }
          } else {
            this.query = '';
          }
        }
      }, 300);
    },
    resetInputState() {
      this.inputLength = this.$refs.input.value.length * 12 + 20;
    },
    handleInputDelete() {
      if (this.multiple && this.model.length && this.query === '') {
        this.removeTag(this.model.length - 1);
      }
    },
    // use when slot changed
    slotChange() {
      this.options = [];
      this.optionInstances = [];
    },
    setQuery(query) {
      if (!this.filterable) return;
      this.query = query;
    },
    modelToQuery() {
      if (!this.multiple && this.filterable && this.model !== undefined) {
        this.findChild(child => {
          if (this.model === child.value) {
            if (child.label) {
              this.query = child.label;
            } else if (child.searchLabel) {
              this.query = child.searchLabel;
            } else {
              this.query = child.value;
            }
          }
        });
      }
    },
    broadcastQuery(val) {
      if (Object(assist["b" /* findComponentDownward */])(this, 'OptionGroup')) {
        this.broadcast('OptionGroup', 'on-query-change', val);
        this.broadcast('qfOption', 'on-query-change', val);
      } else {
        this.broadcast('qfOption', 'on-query-change', val);
      }
    },
    debouncedAppendRemove() {
      return debounce(function () {
        if (!this.remote) {
          this.modelToQuery();
          this.$nextTick(() => this.broadcastQuery(''));
        } else {
          this.findChild(child => {
            child.updateSearchLabel(); // #1865
            child.selected = this.multiple ? this.model.indexOf(child.value) > -1 : this.model === child.value;
          });
        }
        this.slotChange();
        this.updateOptions(true);
      });
    },
    // 处理 remote 初始值
    updateLabel() {
      if (this.remote) {
        if (!this.multiple && this.model !== '') {
          this.selectToChangeQuery = true;
          if (this.currentLabel === '') this.currentLabel = this.model;
          this.lastQuery = this.currentLabel;
          this.query = this.currentLabel;
        } else if (this.multiple && this.model.length) {
          if (this.currentLabel.length !== this.model.length) this.currentLabel = this.model;
          this.selectedMultiple = this.model.map((item, index) => {
            return {
              value: item,
              label: this.currentLabel[index]
            };
          });
        } else if (this.multiple && !this.model.length) {
          this.selectedMultiple = [];
        }
      }
    }
  },
  mounted() {
    this.modelToQuery();
    // 处理 remote 初始值
    this.updateLabel();
    this.$nextTick(() => {
      this.broadcastQuery('');
    });

    this.updateOptions();
    document.addEventListener('keydown', this.handleKeydown);

    this.$on('append', this.debouncedAppendRemove());
    this.$on('remove', this.debouncedAppendRemove());

    this.$on('on-select-selected', value => {
      if (this.model === value) {
        if (this.autoComplete) this.$emit('on-change', value);
        this.hideMenu();
      } else {
        if (this.multiple) {
          const index = this.model.indexOf(value);
          if (index >= 0) {
            this.removeTag(index);
          } else {
            this.model.push(value);
            this.broadcast('Drop', 'on-update-popper');
          }

          if (this.filterable) {
            // remote&filterable&multiple时，一次点多项，不应该设置true，因为无法置为false，下次的搜索会失效
            if (this.query !== '') this.selectToChangeQuery = true;
            this.query = '';
            this.$refs.input.focus();
          }
        } else {
          this.model = value;

          if (this.filterable) {
            this.findChild(child => {
              if (child.value === value) {
                if (this.query !== '') this.selectToChangeQuery = true;
                this.lastQuery = this.query = child.label === undefined ? child.searchLabel : child.label;
              }
            });
          }
        }
      }
    });
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.handleKeydown);
  },
  watch: {
    value(val) {
      this.model = val;
      if (val === '') this.query = '';
    },
    label(val) {
      this.currentLabel = val;
      this.updateLabel();
    },
    model() {
      this.$emit('input', this.model);
      this.modelToQuery();
      if (this.multiple) {
        if (this.slotChangeDuration) {
          this.slotChangeDuration = false;
        } else {
          this.updateMultipleSelected();
        }
      } else {
        this.updateSingleSelected();
      }
      // #957
      if (!this.visible && this.filterable) {
        this.$nextTick(() => {
          this.broadcastQuery('');
        });
      }
    },
    visible(val) {
      if (val) {
        if (this.filterable) {
          if (this.multiple) {
            this.$refs.input.focus();
          } else {
            if (!this.autoComplete) this.$refs.input.select();
          }
          if (this.remote) {
            this.findChild(child => {
              child.selected = this.multiple ? this.model.indexOf(child.value) > -1 : this.model === child.value;
            });
            // remote下，设置了默认值，第一次打开时，搜索一次
            const options = this.$slots.default || [];
            if (this.query !== '' && !options.length) {
              this.remoteMethod(this.query);
            }
          }
        }
        this.broadcast('Drop', 'on-update-popper');
      } else {
        if (this.filterable) {
          if (!this.autoComplete) this.$refs.input.blur();
          // #566 reset options visible
          setTimeout(() => {
            this.broadcastQuery('');
          }, 300);
        }
        this.broadcast('Drop', 'on-destroy-popper');
      }
    },
    query(val) {
      if (this.remote && this.remoteMethod) {
        if (!this.selectToChangeQuery) {
          this.$emit('on-query-change', val);
          this.remoteMethod(val);
        }
        this.focusIndex = 0;
        this.findChild(child => {
          child.isFocus = false;
        });
      } else {
        if (!this.selectToChangeQuery) {
          this.$emit('on-query-change', val);
        }
        this.broadcastQuery(val);

        let is_hidden = true;

        this.$nextTick(() => {
          this.findChild(child => {
            if (!child.hidden) {
              is_hidden = false;
            }
          });
          this.notFound = is_hidden;
        });
      }
      this.selectToChangeQuery = false;
      this.broadcast('Drop', 'on-update-popper');
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-6f197d77","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/select/select.vue
var render = function () {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { directives: [{ name: "clickoutside", rawName: "v-clickoutside", value: _vm.handleClose, expression: "handleClose" }], class: _vm.classes }, [_c('div', { ref: "reference", class: _vm.selectionCls, on: { "click": _vm.toggleMenu } }, [_vm._t("input", [_c('input', { attrs: { "type": "hidden", "name": _vm.name }, domProps: { "value": _vm.model } }), _vm._v(" "), _vm._l(_vm.selectedMultiple, function (item, index) {
    return _c('div', { staticClass: "izy-tag" }, [_c('span', { staticClass: "izy-tag-text" }, [_vm._v(_vm._s(item.label))]), _vm._v(" "), _c('Icon', { attrs: { "type": "ios-close-empty" }, nativeOn: { "click": function ($event) {
          $event.stopPropagation();_vm.removeTag(index);
        } } })], 1);
  }), _vm._v(" "), _c('span', { directives: [{ name: "show", rawName: "v-show", value: _vm.showPlaceholder && !_vm.filterable, expression: "showPlaceholder && !filterable" }], class: [_vm.prefixCls + '-placeholder'] }, [_vm._v(_vm._s(_vm.localePlaceholder))]), _vm._v(" "), _c('span', { directives: [{ name: "show", rawName: "v-show", value: !_vm.showPlaceholder && !_vm.multiple && !_vm.filterable, expression: "!showPlaceholder && !multiple && !filterable" }], class: [_vm.prefixCls + '-selected-value'] }, [_vm._v(_vm._s(_vm.selectedSingle))]), _vm._v(" "), _vm.filterable ? _c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.query, expression: "query" }], ref: "input", class: [_vm.prefixCls + '-input'], style: _vm.inputStyle, attrs: { "id": _vm.elementId, "type": "text", "disabled": _vm.disabled, "placeholder": _vm.showPlaceholder ? _vm.localePlaceholder : '' }, domProps: { "value": _vm.query }, on: { "blur": _vm.handleBlur, "keydown": [_vm.resetInputState, function ($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "delete", [8, 46], $event.key)) {
          return null;
        }_vm.handleInputDelete($event);
      }], "input": function ($event) {
        if ($event.target.composing) {
          return;
        }_vm.query = $event.target.value;
      } } }) : _vm._e(), _vm._v(" "), _c('Icon', { directives: [{ name: "show", rawName: "v-show", value: _vm.showCloseIcon, expression: "showCloseIcon" }], class: [_vm.prefixCls + '-arrow'], attrs: { "type": "ios-close" }, nativeOn: { "click": function ($event) {
        $event.stopPropagation();_vm.clearSingleSelect($event);
      } } }), _vm._v(" "), !_vm.remote ? _c('Icon', { class: [_vm.prefixCls + '-arrow'], attrs: { "type": "arrow-down-b" } }) : _vm._e()])], 2), _vm._v(" "), _c('transition', { attrs: { "name": _vm.transitionName } }, [_c('Drop', { directives: [{ name: "show", rawName: "v-show", value: _vm.dropVisible, expression: "dropVisible" }, { name: "transfer-dom", rawName: "v-transfer-dom" }], ref: "dropdown", class: _vm.dropdownCls, attrs: { "placement": _vm.placement, "data-transfer": _vm.transfer } }, [_c('ul', { directives: [{ name: "show", rawName: "v-show", value: _vm.notFoundShow, expression: "notFoundShow" }], class: [_vm.prefixCls + '-not-found'] }, [_c('li', [_vm._v(_vm._s(_vm.localeNotFoundText))])]), _vm._v(" "), _c('ul', { directives: [{ name: "show", rawName: "v-show", value: !_vm.notFound && !_vm.remote || _vm.remote && !_vm.loading && !_vm.notFound, expression: "(!notFound && !remote) || (remote && !loading && !notFound)" }], class: [_vm.prefixCls + '-dropdown-list'] }, [_vm._t("default")], 2), _vm._v(" "), _c('ul', { directives: [{ name: "show", rawName: "v-show", value: _vm.loading, expression: "loading" }], class: [_vm.prefixCls + '-loading'] }, [_vm._v(_vm._s(_vm.localeLoadingText))])])], 1)], 1);
};
var staticRenderFns = [];
var esExports = { render: render, staticRenderFns: staticRenderFns };
/* harmony default export */ var components_select_select = (esExports);
// CONCATENATED MODULE: ./src/components/select/select.vue
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  select_select,
  components_select_select,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_select_select = (Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/select/option.vue
//
//
//
//
//




const option_prefixCls = 'izy-select-item';
/* harmony default export */ var select_option = ({
    name: 'qfOption',
    componentName: 'select-item',
    mixins: [emitter["a" /* default */]],
    props: {
        value: {
            type: [String, Number],
            required: true
        },
        label: {
            type: [String, Number]
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            selected: false,
            index: 0,
            isFocus: false,
            hidden: false, // for search
            searchLabel: '', // the value is slot, only for search
            autoComplete: false
        };
    },
    computed: {
        classes() {
            return [`${option_prefixCls}`, {
                [`${option_prefixCls}-disabled`]: this.disabled,
                [`${option_prefixCls}-selected`]: this.selected && !this.autoComplete,
                [`${option_prefixCls}-focus`]: this.isFocus
            }];
        },
        showLabel() {
            return this.label ? this.label : this.value;
        }
    },
    methods: {
        select() {
            if (this.disabled) {
                return false;
            }
            this.dispatch('qfSelect', 'on-select-selected', this.value);
        },
        blur() {
            this.isFocus = false;
        },
        queryChange(val) {
            const parsedQuery = val.replace(/(\^|\(|\)|\[|\]|\$|\*|\+|\.|\?|\\|\{|\}|\|)/g, '\\$1');
            this.hidden = !new RegExp(parsedQuery, 'i').test(this.searchLabel);
        },
        // 在使用函数防抖后，设置 key 后，不更新组件了，导致SearchLabel 不更新
        updateSearchLabel() {
            this.searchLabel = this.$el.innerHTML;
        }
    },
    mounted() {
        this.updateSearchLabel();
        this.dispatch('qfSelect', 'append');
        this.$on('on-select-close', () => {
            this.isFocus = false;
        });
        this.$on('on-query-change', val => {
            this.queryChange(val);
        });

        const Select = Object(assist["c" /* findComponentUpward */])(this, 'qfSelect');
        if (Select) this.autoComplete = Select.autoComplete;
    },
    beforeDestroy() {
        this.dispatch('qfSelect', 'remove');
    }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-aef81d56","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/select/option.vue
var option_render = function () {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('li', { directives: [{ name: "show", rawName: "v-show", value: !_vm.hidden, expression: "!hidden" }], class: _vm.classes, on: { "click": function ($event) {
        $event.stopPropagation();_vm.select($event);
      }, "mouseout": function ($event) {
        $event.stopPropagation();_vm.blur($event);
      } } }, [_vm._t("default", [_vm._v(_vm._s(_vm.showLabel))])], 2);
};
var option_staticRenderFns = [];
var option_esExports = { render: option_render, staticRenderFns: option_staticRenderFns };
/* harmony default export */ var components_select_option = (option_esExports);
// CONCATENATED MODULE: ./src/components/select/option.vue
var option_normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var option___vue_template_functional__ = false
/* styles */
var option___vue_styles__ = null
/* scopeId */
var option___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var option___vue_module_identifier__ = null
var option_Component = option_normalizeComponent(
  select_option,
  components_select_option,
  option___vue_template_functional__,
  option___vue_styles__,
  option___vue_scopeId__,
  option___vue_module_identifier__
)

/* harmony default export */ var src_components_select_option = (option_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/select/option-group.vue
//
//
//
//
//
//
//
//

const option_group_prefixCls = 'izy-select-group';
/* harmony default export */ var option_group = ({
    name: 'OptionGroup',
    props: {
        label: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            prefixCls: option_group_prefixCls,
            hidden: false
        };
    },
    methods: {
        queryChange() {
            this.$nextTick(() => {
                const options = this.$refs.options.querySelectorAll('.izy-select-item');
                let hasVisibleOption = false;
                for (let i = 0; i < options.length; i++) {
                    if (options[i].style.display !== 'none') {
                        hasVisibleOption = true;
                        break;
                    }
                }
                this.hidden = !hasVisibleOption;
            });
        }
    },
    mounted() {
        this.$on('on-query-change', () => {
            this.queryChange();
            return true;
        });
    }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-97ceaf40","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/select/option-group.vue
var option_group_render = function () {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('li', { directives: [{ name: "show", rawName: "v-show", value: !_vm.hidden, expression: "!hidden" }], class: [_vm.prefixCls + '-wrap'] }, [_c('div', { class: [_vm.prefixCls + '-title'] }, [_vm._v(_vm._s(_vm.label))]), _vm._v(" "), _c('ul', [_c('li', { ref: "options", class: [_vm.prefixCls] }, [_vm._t("default")], 2)])]);
};
var option_group_staticRenderFns = [];
var option_group_esExports = { render: option_group_render, staticRenderFns: option_group_staticRenderFns };
/* harmony default export */ var select_option_group = (option_group_esExports);
// CONCATENATED MODULE: ./src/components/select/option-group.vue
var option_group_normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var option_group___vue_template_functional__ = false
/* styles */
var option_group___vue_styles__ = null
/* scopeId */
var option_group___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var option_group___vue_module_identifier__ = null
var option_group_Component = option_group_normalizeComponent(
  option_group,
  select_option_group,
  option_group___vue_template_functional__,
  option_group___vue_styles__,
  option_group___vue_scopeId__,
  option_group___vue_module_identifier__
)

/* harmony default export */ var components_select_option_group = (option_group_Component.exports);

// CONCATENATED MODULE: ./src/components/select/index.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "c", function() { return src_components_select_select; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "a", function() { return src_components_select_option; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "b", function() { return components_select_option_group; });




src_components_select_select.install = function (Vue) {
  Vue.component(src_components_select_select.name, src_components_select_select);
};
src_components_select_option.install = function (Vue) {
  Vue.component(src_components_select_option.name, src_components_select_option);
};
components_select_option_group.install = function (Vue) {
  Vue.component(components_select_option_group.name, components_select_option_group);
};



/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./src/utils/assist.js
var assist = __webpack_require__(1);

// EXTERNAL MODULE: ./src/mixins/emitter.js
var emitter = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/checkbox/checkbox.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




const componentCls = 'izy-checkbox';

/* harmony default export */ var checkbox_checkbox = ({
  name: 'Checkbox',
  mixins: [emitter["a" /* default */]],
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number, Boolean],
      default: false
    },
    trueValue: {
      type: [String, Number, Boolean],
      default: true
    },
    falseValue: {
      type: [String, Number, Boolean],
      default: false
    },
    label: {
      type: [String, Number, Boolean]
    },
    indeterminate: {
      type: Boolean,
      default: false
    },
    size: {
      validator(value) {
        return Object(assist["h" /* sizeValid */])(value);
      }
    },
    name: {
      type: String
    }
  },
  data() {
    return {
      model: [],
      currentValue: this.value, //checked or not.
      group: false,
      showSlot: true,
      parent: Object(assist["c" /* findComponentUpward */])(this, 'CheckboxGroup')
    };
  },
  computed: {
    wrapClasses() {
      return [`${componentCls}-wrapper`, {
        [`${componentCls}-group-item`]: this.group,
        [`${componentCls}-wrapper-checked`]: this.currentValue,
        [`${componentCls}-wrapper-disabled`]: this.disabled,
        [`${componentCls}-${this.size}`]: !!this.size
      }];
    },
    checkboxClasses() {
      return [`${componentCls}`, {
        [`${componentCls}-checked`]: this.currentValue,
        [`${componentCls}-disabled`]: this.disabled,
        [`${componentCls}-indeterminate`]: this.indeterminate
      }];
    },
    innerClasses() {
      return `${componentCls}-inner`;
    },
    inputClasses() {
      return `${componentCls}-input`;
    }
  },
  mounted() {
    this.parent = Object(assist["c" /* findComponentUpward */])(this, 'CheckboxGroup');
    if (this.parent) this.group = true;
    if (!this.group) {
      this.updateModel();
      this.showSlot = this.$slots.default !== undefined;
    } else {
      this.parent.updateModel(true);
    }
  },
  methods: {
    change(event) {
      if (this.disabled) {
        return false;
      }

      const checked = event.target.checked;
      this.currentValue = checked;

      let value = checked ? this.trueValue : this.falseValue;
      this.$emit('input', value);

      if (this.group) {
        this.parent.change(this.model);
      } else {
        this.$emit('on-change', value);
        this.dispatch('FormItem', 'on-form-change', value);
      }
    },
    updateModel() {
      this.currentValue = this.value === this.trueValue;
    }
  },
  watch: {
    value(val) {
      if (val !== this.trueValue && val !== this.falseValue) {
        throw 'Value should be trueValue or falseValue.';
      }
      this.updateModel();
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2392e822","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/checkbox/checkbox.vue
var render = function () {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('label', { class: _vm.wrapClasses }, [_c('span', { class: _vm.checkboxClasses }, [_c('span', { class: _vm.innerClasses }), _vm._v(" "), _vm.group ? _c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.model, expression: "model" }], class: _vm.inputClasses, attrs: { "type": "checkbox", "disabled": _vm.disabled, "name": _vm.name }, domProps: { "value": _vm.label, "checked": Array.isArray(_vm.model) ? _vm._i(_vm.model, _vm.label) > -1 : _vm.model }, on: { "change": [function ($event) {
        var $$a = _vm.model,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;if (Array.isArray($$a)) {
          var $$v = _vm.label,
              $$i = _vm._i($$a, $$v);if ($$el.checked) {
            $$i < 0 && (_vm.model = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.model = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.model = $$c;
        }
      }, _vm.change] } }) : _vm._e(), _vm._v(" "), !_vm.group ? _c('input', { class: _vm.inputClasses, attrs: { "type": "checkbox", "disabled": _vm.disabled, "name": _vm.name }, domProps: { "checked": _vm.currentValue }, on: { "change": _vm.change } }) : _vm._e()]), _vm._v(" "), _vm._t("default", [_vm.showSlot ? _c('span', [_vm._v(_vm._s(_vm.label))]) : _vm._e()])], 2);
};
var staticRenderFns = [];
var esExports = { render: render, staticRenderFns: staticRenderFns };
/* harmony default export */ var components_checkbox_checkbox = (esExports);
// CONCATENATED MODULE: ./src/components/checkbox/checkbox.vue
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  checkbox_checkbox,
  components_checkbox_checkbox,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_checkbox_checkbox = (Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/checkbox/checkbox-group.vue
//
//
//
//
//



const checkbox_group_componentCls = 'izy-checkbox-group';

/* harmony default export */ var checkbox_group = ({
  name: 'CheckboxGroup',
  mixins: [emitter["a" /* default */]],
  props: {
    value: {
      type: Array,
      default() {
        return [];
      }
    },
    size: {
      validator(value) {
        return Object(assist["h" /* sizeValid */])(value);
      }
    }
  },
  data() {
    return {
      currentValue: this.value,
      childrens: []
    };
  },
  computed: {
    classes() {
      return [`${checkbox_group_componentCls}`, {
        [`izy-checkbox-${this.size}`]: !!this.size
      }];
    }
  },
  mounted() {
    this.updateModel(true);
  },
  methods: {
    updateModel(update) {
      const value = this.value;
      this.childrens = Object(assist["d" /* findComponentsDownward */])(this, 'Checkbox');

      if (this.childrens) {
        this.childrens.forEach(child => {
          child.model = value;

          if (update) {
            child.currentValue = value.indexOf(child.label) >= 0;
            child.group = true;
          }
        });
      }
    },
    change(data) {
      this.currentValue = data;
      this.$emit('input', data);
      this.$emit('on-change', data);
      this.dispatch('FormItem', 'on-form-change', data);
    }
  },
  watch: {
    value() {
      this.updateModel(true);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-48a6d925","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/checkbox/checkbox-group.vue
var checkbox_group_render = function () {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.classes }, [_vm._t("default")], 2);
};
var checkbox_group_staticRenderFns = [];
var checkbox_group_esExports = { render: checkbox_group_render, staticRenderFns: checkbox_group_staticRenderFns };
/* harmony default export */ var checkbox_checkbox_group = (checkbox_group_esExports);
// CONCATENATED MODULE: ./src/components/checkbox/checkbox-group.vue
var checkbox_group_normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var checkbox_group___vue_template_functional__ = false
/* styles */
var checkbox_group___vue_styles__ = null
/* scopeId */
var checkbox_group___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var checkbox_group___vue_module_identifier__ = null
var checkbox_group_Component = checkbox_group_normalizeComponent(
  checkbox_group,
  checkbox_checkbox_group,
  checkbox_group___vue_template_functional__,
  checkbox_group___vue_styles__,
  checkbox_group___vue_scopeId__,
  checkbox_group___vue_module_identifier__
)

/* harmony default export */ var components_checkbox_checkbox_group = (checkbox_group_Component.exports);

// CONCATENATED MODULE: ./src/components/checkbox/index.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "a", function() { return src_components_checkbox_checkbox; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "b", function() { return components_checkbox_checkbox_group; });



src_components_checkbox_checkbox.install = function (Vue) {
  Vue.component(src_components_checkbox_checkbox.name, src_components_checkbox_checkbox);
};
components_checkbox_checkbox_group.install = function (Vue) {
  Vue.component(components_checkbox_checkbox_group.name, components_checkbox_checkbox_group);
};


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./src/utils/assist.js
var assist = __webpack_require__(1);

// EXTERNAL MODULE: ./src/mixins/emitter.js
var emitter = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/radio/radio.vue
//
//
//
//
//
//
//
//
//
//
//
//
//




const prefixCls = 'izy-radio';

/* harmony default export */ var radio_radio = ({
  name: 'Radio',
  mixins: [emitter["a" /* default */]],
  props: {
    value: {
      type: [String, Number, Boolean],
      default: ''
    },
    trueValue: {
      type: [String, Number, Boolean],
      default: true
    },
    falseValue: {
      type: [String, Number, Boolean],
      default: false
    },
    label: {
      type: [String, Number, Boolean]
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      validator(value) {
        return Object(assist["h" /* sizeValid */])(value);
      }
    },
    name: {
      type: String
    }
  },
  data() {
    return {
      group: false,
      currentValue: this.value,
      parent: Object(assist["c" /* findComponentUpward */])(this, 'RadioGroup')
    };
  },
  computed: {
    wrapClasses() {
      return [`${prefixCls}-wrapper`, {
        [`${prefixCls}-group-item`]: this.group,
        [`${prefixCls}-wrapper-checked`]: this.currentValue,
        [`${prefixCls}-wrapper-disabled`]: this.disabled,
        [`${prefixCls}-${this.size}`]: !!this.size
      }];
    },
    radioClasses() {
      return [`${prefixCls}`, {
        [`${prefixCls}-checked`]: this.currentValue,
        [`${prefixCls}-disabled`]: this.disabled
      }];
    },
    innerClasses() {
      return `${prefixCls}-inner`;
    },
    inputClasses() {
      return `${prefixCls}-input`;
    }
  },
  mounted() {
    if (this.parent) this.group = true;
    if (this.group) {
      this.parent.updateValue();
    } else {
      this.updateValue();
    }
  },
  methods: {
    change(event) {
      if (this.disabled) {
        return false;
      }

      const checked = event.target.checked;
      this.currentValue = checked;

      let value = checked ? this.trueValue : this.falseValue;
      this.$emit('input', value);

      if (this.group && this.label !== undefined) {
        this.parent.change({ value: this.label });
      }
      if (!this.group) {
        this.$emit('on-change', value);
        this.dispatch('FormItem', 'on-form-change', value);
      }
    },
    updateValue() {
      this.currentValue = this.value === this.trueValue;
    }
  },

  watch: {
    value(val) {
      if (val !== this.trueValue && val !== this.falseValue) {
        throw 'Value should be trueValue or falseValue.';
      }
      this.updateValue();
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-615e8d4c","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/radio/radio.vue
var render = function () {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('label', { class: _vm.wrapClasses }, [_c('span', { class: _vm.radioClasses }, [_c('span', { class: _vm.innerClasses }), _vm._v(" "), _c('input', { class: _vm.inputClasses, attrs: { "type": "radio", "disabled": _vm.disabled, "name": _vm.name }, domProps: { "checked": _vm.currentValue }, on: { "change": _vm.change } })]), _vm._t("default", [_vm._v(_vm._s(_vm.label))])], 2);
};
var staticRenderFns = [];
var esExports = { render: render, staticRenderFns: staticRenderFns };
/* harmony default export */ var components_radio_radio = (esExports);
// CONCATENATED MODULE: ./src/components/radio/radio.vue
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  radio_radio,
  components_radio_radio,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_radio_radio = (Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/radio/radio-group.vue
//
//
//
//
//



const radio_group_prefixCls = 'izy-radio-group';

/* harmony default export */ var radio_group = ({
    name: 'RadioGroup',
    mixins: [emitter["a" /* default */]],
    props: {
        value: {
            type: [String, Number],
            default: ''
        },
        size: {
            validator(value) {
                return Object(assist["h" /* sizeValid */])(value);
            }
        }
    },
    data() {
        return {
            currentValue: this.value,
            childrens: []
        };
    },
    methods: {
        updateValue() {
            this.childrens = Object(assist["d" /* findComponentsDownward */])(this, 'Radio');
            const value = this.value;

            if (this.childrens) {
                this.childrens.forEach(child => {
                    //change the 'checked' state of child
                    child.currentValue = value == child.label;
                    child.group = true;
                });
            }
        },
        change(data) {
            //data.value: radio label
            this.currentValue = data.value;
            this.$emit('input', data.value);
            this.$emit('on-change', data.value);
            this.dispatch('FormItem', 'on-form-change', data.value);
        }
    },
    watch: {
        value() {
            this.updateValue();
        }
    }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-5110e247","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/radio/radio-group.vue
var radio_group_render = function () {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('span', [_vm._t("default")], 2);
};
var radio_group_staticRenderFns = [];
var radio_group_esExports = { render: radio_group_render, staticRenderFns: radio_group_staticRenderFns };
/* harmony default export */ var radio_radio_group = (radio_group_esExports);
// CONCATENATED MODULE: ./src/components/radio/radio-group.vue
var radio_group_normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var radio_group___vue_template_functional__ = false
/* styles */
var radio_group___vue_styles__ = null
/* scopeId */
var radio_group___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var radio_group___vue_module_identifier__ = null
var radio_group_Component = radio_group_normalizeComponent(
  radio_group,
  radio_radio_group,
  radio_group___vue_template_functional__,
  radio_group___vue_styles__,
  radio_group___vue_scopeId__,
  radio_group___vue_module_identifier__
)

/* harmony default export */ var components_radio_radio_group = (radio_group_Component.exports);

// CONCATENATED MODULE: ./src/components/radio/index.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "a", function() { return src_components_radio_radio; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "b", function() { return components_radio_radio_group; });



src_components_radio_radio.install = function (Vue) {
  Vue.component(src_components_radio_radio.name, src_components_radio_radio);
};
components_radio_radio_group.install = function (Vue) {
  Vue.component(components_radio_radio_group.name, components_radio_radio_group);
};


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__button_vue__ = __webpack_require__(6);


__WEBPACK_IMPORTED_MODULE_0__button_vue__["a" /* default */].install = function (Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__button_vue__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__button_vue__["a" /* default */]);
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__button_vue__["a" /* default */]);

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./src/components/icon/index.js
var icon = __webpack_require__(4);

// EXTERNAL MODULE: ./src/components/button/button.vue + 2 modules
var button_button = __webpack_require__(6);

// EXTERNAL MODULE: ./src/directives/transfer-dom.js
var transfer_dom = __webpack_require__(9);

// EXTERNAL MODULE: ./src/mixins/locale.js + 4 modules
var mixins_locale = __webpack_require__(5);

// EXTERNAL MODULE: ./src/mixins/emitter.js
var emitter = __webpack_require__(2);

// EXTERNAL MODULE: ./src/utils/assist.js
var assist = __webpack_require__(1);

// CONCATENATED MODULE: ./src/components/modal/mixins-scrollbar.js
// used for Modal & $Spin

/* harmony default export */ var mixins_scrollbar = ({
  methods: {
    checkScrollBar() {
      let fullWindowWidth = window.innerWidth;
      if (!fullWindowWidth) {
        const documentElementRect = document.documentElement.getBoundingClientRect();
        fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
      }
      this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth;
      if (this.bodyIsOverflowing) {
        this.scrollBarWidth = Object(assist["e" /* getScrollBarSize */])();
      }
    },
    setScrollBar() {
      if (this.bodyIsOverflowing && this.scrollBarWidth !== undefined) {
        document.body.style.paddingRight = `${this.scrollBarWidth}px`;
      }
    },
    resetScrollBar() {
      document.body.style.paddingRight = '';
    },
    addScrollEffect() {
      this.checkScrollBar();
      this.setScrollBar();
      document.body.style.overflow = 'hidden';
    },
    removeScrollEffect() {
      document.body.style.overflow = '';
      this.resetScrollBar();
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/modal/modal.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








const prefixCls = 'izy-modal';

/* harmony default export */ var modal_modal = ({
    name: 'Modal',
    mixins: [mixins_locale["a" /* default */], emitter["a" /* default */], mixins_scrollbar],
    components: { Icon: icon["a" /* default */], qfButton: button_button["a" /* default */] },
    directives: { TransferDom: transfer_dom["a" /* default */] },
    props: {
        value: {
            type: Boolean,
            default: false
        },
        closable: {
            type: Boolean,
            default: true
        },
        maskClosable: {
            type: Boolean,
            default: true
        },
        title: {
            type: String
        },
        width: {
            type: [Number, String],
            default: 520
        },
        okText: {
            type: String
        },
        cancelText: {
            type: String
        },
        loading: {
            type: Boolean,
            default: false
        },
        styles: {
            type: Object
        },
        className: {
            type: String
        },

        //for instance
        footerHide: {
            type: Boolean,
            default: false
        },
        scrollable: {
            type: Boolean,
            default: false
        },
        transitionNames: {
            type: Array,
            default() {
                return ['ease', 'fade'];
            }
        },
        transfer: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            prefixCls: prefixCls,
            wrapShow: false,
            showHead: true,
            buttonLoading: false,
            visible: this.value
        };
    },
    computed: {
        wrapClasses() {
            return [`${prefixCls}-wrap`, {
                [`${prefixCls}-hidden`]: !this.wrapShow,
                [`${this.className}`]: !!this.className
            }];
        },
        maskClasses() {
            return `${prefixCls}-mask`;
        },
        classes() {
            return `${prefixCls}`;
        },
        mainStyles() {
            let style = {};

            const width = parseInt(this.width);
            const styleWidth = {
                width: width <= 100 ? `${width}%` : `${width}px`
            };

            const customStyle = this.styles ? this.styles : {};
            Object.assign(style, styleWidth, customStyle);
            return style;
        },
        localeOkText() {
            if (this.okText === undefined) {
                return this.t('qf.modal.okText');
            } else {
                return this.okText;
            }
        },
        localeCancelText() {
            if (this.cancelText === undefined) {
                return this.t('qf.modal.cancelText');
            } else {
                return this.cancelText;
            }
        }
    },
    methods: {
        close() {
            this.visible = false;
            this.$emit('input', false);
            this.$emit('on-cancel');
        },
        mask() {
            if (this.maskClosable) {
                this.close();
            }
        },
        handleWrapClick(event) {
            const className = event.target.getAttribute('class');
            if (className && className.indexOf(`${prefixCls}-wrap`) > -1) this.mask();
        },
        cancel() {
            this.close();
        },
        ok() {
            if (this.loading) {
                this.buttonLoading = true;
            } else {
                this.visible = false;
                this.$emit('input', false);
            }
            this.$emit('on-ok');
        },
        EscClose(e) {
            if (this.visible && this.closable) {
                if (e.keyCode === 27) {
                    this.close();
                }
            }
        },
        animationFinish() {
            this.$emit('on-hidden');
        }
    },
    mounted() {
        if (this.visible) {
            this.wrapShow = true;
        }
        let showHead = true;
        if (this.$slots.header === undefined && !this.title) {
            showHead = false;
        }
        this.showHead = showHead;

        //ESC close
        document.addEventListener('keydown', this.EscClose);
    },
    beforeDestroy() {
        document.removeEventListener('keydown', this.EscClose);
        this.removeScrollEffect();
    },
    watch: {
        value(val) {
            this.visible = val;
        },
        visible(val) {
            if (val === false) {
                this.buttonLoading = false;
                this.timer = setTimeout(() => {
                    this.wrapShow = false;
                    this.removeScrollEffect();
                }, 300);
            } else {
                if (this.timer) clearTimeout(this.timer);
                this.wrapShow = true;
                if (!this.scrollable) {
                    this.addScrollEffect();
                }
            }
            this.broadcast('Table', 'on-visible-change', val);
        },
        loading(val) {
            if (!val) {
                this.buttonLoading = false;
            }
        },
        scrollable(val) {
            if (!val) {
                this.addScrollEffect();
            } else {
                this.removeScrollEffect();
            }
        },
        title(val) {
            if (this.$slots.header === undefined) {
                this.showHead = !!val;
            }
        }
    }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-d52df88e","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/modal/modal.vue
var modal_render = function () {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { directives: [{ name: "transfer-dom", rawName: "v-transfer-dom" }], attrs: { "data-transfer": _vm.transfer } }, [_c('transition', { attrs: { "name": _vm.transitionNames[1] } }, [_c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.visible, expression: "visible" }], class: _vm.maskClasses, on: { "click": _vm.mask } })]), _vm._v(" "), _c('div', { class: _vm.wrapClasses, on: { "click": _vm.handleWrapClick } }, [_c('transition', { attrs: { "name": _vm.transitionNames[0] }, on: { "after-leave": _vm.animationFinish } }, [_c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.visible, expression: "visible" }], class: _vm.classes, style: _vm.mainStyles }, [_c('div', { class: [_vm.prefixCls + '-content'] }, [_vm.closable ? _c('a', { class: [_vm.prefixCls + '-close'], on: { "click": _vm.close } }, [_vm._t("close", [_c('Icon', { attrs: { "type": "ios-close-empty" } })])], 2) : _vm._e(), _vm._v(" "), _vm.showHead ? _c('div', { class: [_vm.prefixCls + '-header'] }, [_vm._t("header", [_c('div', { class: [_vm.prefixCls + '-header-inner'] }, [_vm._v(_vm._s(_vm.title))])])], 2) : _vm._e(), _vm._v(" "), _c('div', { class: [_vm.prefixCls + '-body'] }, [_vm._t("default")], 2), _vm._v(" "), !_vm.footerHide ? _c('div', { class: [_vm.prefixCls + '-footer'] }, [_vm._t("footer", [_c('qf-button', { attrs: { "type": "text", "size": "large" }, nativeOn: { "click": function ($event) {
        _vm.cancel($event);
      } } }, [_vm._v(_vm._s(_vm.localeCancelText))]), _vm._v(" "), _c('qf-button', { attrs: { "type": "primary", "size": "large", "loading": _vm.buttonLoading }, nativeOn: { "click": function ($event) {
        _vm.ok($event);
      } } }, [_vm._v(_vm._s(_vm.localeOkText))])])], 2) : _vm._e()])])])], 1)], 1);
};
var staticRenderFns = [];
var esExports = { render: modal_render, staticRenderFns: staticRenderFns };
/* harmony default export */ var components_modal_modal = (esExports);
// CONCATENATED MODULE: ./src/components/modal/modal.vue
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  modal_modal,
  components_modal_modal,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_modal_modal = (Component.exports);

// CONCATENATED MODULE: ./src/components/modal/confirm.js




const confirm_prefixCls = 'izy-modal-confirm';

src_components_modal_modal.newInstance = properties => {
  const _props = properties || {};

  const Instance = new Vue({
    mixins: [locale],
    data: Object.assign({}, _props, {
      visible: false,
      width: 416,
      title: '',
      body: '',
      iconType: '',
      iconName: '',
      okText: undefined,
      cancelText: undefined,
      showCancel: false,
      loading: false,
      buttonLoading: false,
      scrolllable: false
    }),
    render(h) {
      let footerVNodes = [];
      if (this.showCancel) {
        footerVNodes.push(h(button_button["a" /* default */], {
          props: {
            type: 'text',
            size: 'large'
          },
          on: {
            click: this.cancel
          }
        }, this.localeCancelText));
      }
      footerVNodes.push(h(button_button["a" /* default */], {
        props: {
          type: 'button',
          size: 'large'
        },
        on: {
          click: this.ok
        }
      }, this.localeOkText));

      //render content
      let body_render;
      if (this.render) {
        body_render = h('div', {
          attrs: {
            class: `${confirm_prefixCls}-body ${confirm_prefixCls}-body-render`
          }
        }, [this.render(h)]);
      } else {
        body_render = h('div', {
          attrs: {
            class: `${confirm_prefixCls}-body`
          }
        }, [h('div', {
          class: this.iconTypeCls
        }, [h('i', {
          class: this.iconNameCls
        })]), h('div', {
          domProps: {
            innerHTML: this.body
          }
        })]);
      }

      return h(src_components_modal_modal, {
        props: Object.assign({}, _props, {
          width: this.width,
          scrolllable: this.scrolllable
        }),
        domProps: {
          value: this.visible
        },
        on: {
          input: status => {
            this.visible = status;
          }
        }
      }, [h('div', {
        attrs: {
          class: confirm_prefixCls
        }
      }, [h('div', {
        attrs: {
          class: `${confirm_prefixCls}-head`
        }
      }, [h('div', {
        attrs: {
          class: `${confirm_prefixCls}-head-title`
        },
        domProps: {
          innerHTML: this.title
        }
      })]), body_render, h('div', {
        attrs: {
          class: `${confirm_prefixCls}-footer`
        }
      }, footerVNodes)])]);
    },
    computed: {
      iconTypeCls() {
        return [`${confirm_prefixCls}-body-icon`, `${confirm_prefixCls}-body-icon-${this.iconType}`];
      },
      iconNameCls() {
        return ['izy-icon', `izy-icon-${this.iconName}`];
      },
      localeOkText() {
        if (this.okText) {
          return this.okText;
        } else {
          return this.t('qf.modal.okText');
        }
      },
      localeCancelText() {
        if (this.cancelText) {
          return this.cancelText;
        } else {
          return this.t('qf.modal.cancelText');
        }
      }
    },
    methods: {
      cancel() {
        this.$children[0].visible = false;
        this.buttonLoading = false;
        this.onCancel();
        this.remove();
      },
      ok() {
        if (this.loading) {
          this.buttonLoading = true;
        } else {
          this.$children[0].visible = false;
          this.remove();
        }
        this.onOk();
      },
      remove() {
        setTimeout(() => {
          this.destroy();
        }, 300);
      },
      destroy() {
        this.$destroy();
        document.body.removeChild(this.$el);
        this.onRemove();
      },
      onOk() {},
      onCancel() {},
      onRemove() {}
    }
  });

  const component = Instance.$mount();
  document.body.appendChild(component.$el);
  const modal = Instance.$children[0];

  return {
    show(props) {
      modal.$parent.showCancel = props.showCancel;
      modal.$parent.iconType = props.icon;

      switch (props.icon) {
        case 'info':
          modal.$parent.iconName = 'information-circled';
          break;
        case 'success':
          modal.$parent.iconName = 'checkmark-circled';
          break;
        case 'warning':
          modal.$parent.iconName = 'android-alert';
          break;
        case 'error':
          modal.$parent.iconName = 'close-circled';
          break;
        case 'confirm':
          modal.$parent.iconName = 'help-circled';
          break;
      }

      if ('width' in props) {
        modal.$parent.width = props.width;
      }

      if ('title' in props) {
        modal.$parent.title = props.title;
      }

      if ('content' in props) {
        modal.$parent.body = props.content;
      }

      if ('okText' in props) {
        modal.$parent.okText = props.okText;
      }

      if ('cancelText' in props) {
        modal.$parent.cancelText = props.cancelText;
      }

      if ('onCancel' in props) {
        modal.$parent.onCancel = props.onCancel;
      }

      if ('onOk' in props) {
        modal.$parent.onOk = props.onOk;
      }

      // async for ok
      if ('loading' in props) {
        modal.$parent.loading = props.loading;
      }
      if ('scrollable' in props) {
        modal.$parent.scrollable = props.scrollable;
      }

      // notice when component destroy
      modal.$parent.onRemove = props.onRemove();

      modal.visible = true;
    },
    remove() {
      modal.visible = false;
      modal.$parent.buttonLoading = false;
      modal.$parent.remove();
    },
    component: modal
  };
};

/* harmony default export */ var modal_confirm = (src_components_modal_modal);
// CONCATENATED MODULE: ./src/components/modal/index.js


let modalInstance;

function getModalInstance(render = undefined) {
  modalInstance = modalInstance || modal_confirm.newInstance({
    closable: false,
    markClosable: false,
    footerHide: true,
    render: render
  });
}

function components_modal_confirm(options) {
  const render = 'render' in options ? options.render : undefined;
  let instance = getModalInstance(render);

  options.onRemove = function () {
    modalInstance = null;
  };

  instance.show(options);
}

modal_confirm.info = function (props = {}) {
  props.icon = 'info';
  props.showCancel = false;
  return components_modal_confirm(props);
};

modal_confirm.success = function (props = {}) {
  props.icon = 'success';
  props.showCancel = false;
  return components_modal_confirm(props);
};

modal_confirm.warning = function (props = {}) {
  props.icon = 'warning';
  props.showCancel = false;
  return components_modal_confirm(props);
};

modal_confirm.error = function (props = {}) {
  props.icon = 'error';
  props.showCancel = false;
  return components_modal_confirm(props);
};

modal_confirm.confirm = function (props = {}) {
  props.icon = 'confirm';
  props.showCancel = true;
  return components_modal_confirm(props);
};

modal_confirm.remove = function () {
  if (!modalInstance) {
    // at loading status, remove after Cancel
    return false;
  }

  const instance = getModalInstance();

  instance.remove();
};

/* harmony default export */ var components_modal = __webpack_exports__["a"] = (modal_confirm);

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/base/notification/notice.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var notice = ({
  props: {
    prefixCls: {
      type: String,
      default: ''
    },
    duration: {
      type: Number,
      default: 1.5
    },
    type: {
      type: String
    },
    content: {
      type: String,
      default: ''
    },
    styles: {
      type: Object,
      default: function () {
        return {
          right: '50%'
        };
      }
    },
    closable: {
      type: Boolean,
      default: false
    },
    className: {
      type: String
    },
    name: {
      type: String,
      required: true
    },
    onClose: {
      type: Function
    },
    transitionName: {
      type: String
    }
  },
  data() {
    return {
      withDesc: false
    };
  },
  computed: {
    baseClass() {
      return `${this.prefixCls}-notice`;
    },
    classes() {
      return [this.baseClass, {
        [`${this.className}`]: !!this.className,
        [`${this.baseClass}-closable`]: this.closable,
        [`${this.baseClass}-with-desc`]: this.withDesc
      }];
    },
    contentClasses() {
      return `${this.baseClass}-content`;
    }
  },
  methods: {
    clearCloseTimer() {
      if (this.closeTimer) {
        clearTimeout(this.closeTimer);
        this.closeTimer = null;
      }
    },
    close() {
      this.clearCloseTimer();
      this.onClose();
      this.$parent.close(this.name);
    },
    handleEnter(el) {
      if (this.type === 'message') {
        el.style.height = el.scrollHeight + 'px';
      }
    },
    handleLeave(el) {
      if (this.type === 'message') {
        // 优化一下，如果当前只有一个 Message，则不使用 js 过渡动画，这样更优美
        if (document.getElementsByClassName('izy-message-notice').length !== 1) {
          el.style.height = 0;
          el.style.paddingTop = 0;
          el.style.paddingBottom = 0;
        }
      }
    }
  },
  mounted() {
    this.clearCloseTimer();

    if (this.duration !== 0) {
      this.closeTimer = setTimeout(() => {
        this.close();
      }, this.duration * 1000);
    }

    // check if with desc in Notice component
    if (this.prefixCls === 'izy-notice') {
      this.withDesc = this.$refs.content.querySelectorAll(`.${this.prefixCls}-desc`)[0].innerHTML !== '';
    }
  },
  beforeDestroy() {
    this.clearCloseTimer();
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-8455cfea","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/base/notification/notice.vue
var render = function () {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('transition', { attrs: { "name": _vm.transitionName }, on: { "enter": _vm.handleEnter, "leave": _vm.handleLeave } }, [_c('div', { class: _vm.classes, style: _vm.styles }, [_vm.type === 'notice' ? [_c('div', { ref: "content", class: [_vm.baseClass + '-content'], domProps: { "innerHTML": _vm._s(_vm.content) } }), _vm._v(" "), _vm.closable ? _c('a', { class: [_vm.baseClass + '-close'], on: { "click": _vm.close } }, [_c('i', { staticClass: "izy-icon izy-icon-ios-close-empty" })]) : _vm._e()] : _vm._e(), _vm._v(" "), _vm.type === 'message' ? [_c('div', { ref: "content", class: [_vm.baseClass + '-content'] }, [_c('div', { class: [_vm.baseClass + '-content-text'], domProps: { "innerHTML": _vm._s(_vm.content) } }), _vm._v(" "), _vm.closable ? _c('a', { class: [_vm.baseClass + '-close'], on: { "click": _vm.close } }, [_c('i', { staticClass: "izy-icon izy-icon-ios-close-empty" })]) : _vm._e()])] : _vm._e()], 2)]);
};
var staticRenderFns = [];
var esExports = { render: render, staticRenderFns: staticRenderFns };
/* harmony default export */ var notification_notice = (esExports);
// CONCATENATED MODULE: ./src/components/base/notification/notice.vue
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  notice,
  notification_notice,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var base_notification_notice = (Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/base/notification/notification.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



const prefixCls = 'izy-notification';
let seed = 0;
const now = Date.now();

function getUuid() {
    return 'izyNotification_' + now + '_' + seed++;
}

/* harmony default export */ var notification_notification = ({
    components: { Notice: base_notification_notice },
    props: {
        prefixCls: {
            type: String,
            default: prefixCls
        },
        styles: {
            type: Object,
            default: function () {
                return {
                    top: '65px',
                    left: '50%'
                };
            }
        },
        content: {
            type: String
        },
        className: {
            type: String
        }
    },
    data() {
        return {
            notices: []
        };
    },
    computed: {
        classes() {
            return [`${this.prefixCls}`, {
                [`${this.className}`]: !!this.className
            }];
        }
    },
    methods: {
        add(notice) {
            const name = notice.name || getUuid();

            let _notice = Object.assign({
                styles: {
                    right: '50%'
                },
                content: '',
                duration: 1.5,
                closable: false,
                name: name
            }, notice);

            this.notices.push(_notice);
        },
        close(name) {
            const notices = this.notices;
            for (let i = 0; i < notices.length; i++) {
                if (notices[i].name === name) {
                    this.notices.splice(i, 1);
                    break;
                }
            }
        },
        closeAll() {
            this.notices = [];
        }
    }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-8debce84","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/base/notification/notification.vue
var notification_render = function () {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.classes, style: _vm.styles }, _vm._l(_vm.notices, function (notice) {
    return _c('Notice', { key: notice.name, attrs: { "prefix-cls": _vm.prefixCls, "styles": notice.styles, "type": notice.type, "content": notice.content, "duration": notice.duration, "closable": notice.closable, "name": notice.name, "transition-name": notice.transitionName, "on-close": notice.onClose } });
  }));
};
var notification_staticRenderFns = [];
var notification_esExports = { render: notification_render, staticRenderFns: notification_staticRenderFns };
/* harmony default export */ var base_notification_notification = (notification_esExports);
// CONCATENATED MODULE: ./src/components/base/notification/notification.vue
var notification_normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var notification___vue_template_functional__ = false
/* styles */
var notification___vue_styles__ = null
/* scopeId */
var notification___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var notification___vue_module_identifier__ = null
var notification_Component = notification_normalizeComponent(
  notification_notification,
  base_notification_notification,
  notification___vue_template_functional__,
  notification___vue_styles__,
  notification___vue_scopeId__,
  notification___vue_module_identifier__
)

/* harmony default export */ var components_base_notification_notification = (notification_Component.exports);

// EXTERNAL MODULE: external {"root":"Vue","commonjs":"vue","commonjs2":"vue","amd":"vue"}
var external___root___Vue___commonjs___vue___commonjs2___vue___amd___vue__ = __webpack_require__(3);
var external___root___Vue___commonjs___vue___commonjs2___vue___amd___vue___default = /*#__PURE__*/__webpack_require__.n(external___root___Vue___commonjs___vue___commonjs2___vue___amd___vue__);

// CONCATENATED MODULE: ./src/components/base/notification/index.js



components_base_notification_notification.newInstance = properties => {
  const _props = properties || {};

  const Instance = new external___root___Vue___commonjs___vue___commonjs2___vue___amd___vue___default.a({
    data: _props,
    render(h) {
      return h(components_base_notification_notification, {
        props: _props
      });
    }
  });

  const component = Instance.$mount();
  document.body.appendChild(component.$el);
  const notification = Instance.$children[0];

  return {
    notice(noticeProps) {
      notification.add(noticeProps);
    },
    remove(name) {
      notification.close(name);
    },
    component: notification,
    destroy(element) {
      notification.closeAll();
      setTimeout(function () {
        document.body.removeChild(document.getElementsByClassName(element)[0]);
      }, 500);
    }
  };
};
/* harmony default export */ var base_notification = (components_base_notification_notification);
// CONCATENATED MODULE: ./src/components/message/index.js


const message_prefixCls = 'izy-message';
const iconPrefixCls = 'izy-icon';
const prefixKey = 'izy_message_key_';

const defaults = {
  top: 24,
  duration: 1.5
};

let messageInstance;
let message_name = 1;

const iconTypes = {
  'info': 'information-circled',
  'success': 'checkmark-circled',
  'warning': 'android-alert',
  'error': 'close-circled',
  'loading': 'load-c'
};

function getMessageInstance() {
  messageInstance = messageInstance || base_notification.newInstance({
    prefixCls: message_prefixCls,
    styles: {
      top: `${defaults.top}px`
    }
  });

  return messageInstance;
}

function message_notice(content = '', duration = defaults.duration, type, onClose = function () {}, closable = false) {
  const iconType = iconTypes[type];

  // if loading
  const loadCls = type === 'loading' ? ' izy-load-loop' : '';

  let instance = getMessageInstance();

  instance.notice({
    name: `${prefixKey}${message_name}`,
    duration: duration,
    styles: {},
    transitionName: 'move-up',
    content: `
            <div class="${message_prefixCls}-custom-content ${message_prefixCls}-${type}">
                <i class="${iconPrefixCls} ${iconPrefixCls}-${iconType}${loadCls}"></i>
                <span>${content}</span>
            </div>
        `,
    onClose: onClose,
    closable: closable,
    type: 'message'
  });

  // 用于手动消除
  return function () {
    let target = message_name++;

    return function () {
      instance.remove(`${prefixKey}${target}`);
    };
  }();
}

/* harmony default export */ var message = __webpack_exports__["a"] = ({
  name: 'Message',

  info(options) {
    return this.message('info', options);
  },
  success(options) {
    return this.message('success', options);
  },
  warning(options) {
    return this.message('warning', options);
  },
  error(options) {
    return this.message('error', options);
  },
  loading(options) {
    return this.message('loading', options);
  },
  message(type, options) {
    if (typeof options === 'string') {
      options = {
        content: options
      };
    }
    return message_notice(options.content, options.duration, type, options.onClose, options.closable);
  },
  config(options) {
    if (options.top || options.top === 0) {
      defaults.top = options.top;
    }
    if (options.duration || options.duration === 0) {
      defaults.duration = options.duration;
    }
  },
  destroy() {
    let instance = getMessageInstance();
    messageInstance = null;
    instance.destroy('izy-message');
  }
});

/***/ })
/******/ ]);
});