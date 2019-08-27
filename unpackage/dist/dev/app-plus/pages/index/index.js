"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!******************************************************************************************************!*\
  !*** C:/Users/hulincloud/Documents/HBuilderProjects/mishop/main.js?{"page":"pages%2Findex%2Findex"} ***!
  \******************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/index/index.nvue?mpType=page */ 1);


_pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_0__["default"].mpType = 'page'
_pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_0__["default"].route = 'pages/index/index'
_pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_0__["default"].el = '#root'
_pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_0__["default"].appStyle = {}
Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 37).default,_pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_0__["default"].appStyle)

new Vue(_pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_0__["default"])


/***/ }),
/* 1 */
/*!************************************************************************************************!*\
  !*** C:/Users/hulincloud/Documents/HBuilderProjects/mishop/pages/index/index.nvue?mpType=page ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_nvue_vue_type_template_id_e409f55a_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.nvue?vue&type=template&id=e409f55a&mpType=page */ 2);
/* harmony import */ var _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.nvue?vue&type=script&lang=js&mpType=page */ 4);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 15);



function injectStyles (context) {
  
  if(!this.$options.style){
    this.$options.style = {}
}
if(this.__merge_style && this.$root && this.$root.$options.appStyle){
  this.__merge_style(this.$root.$options.appStyle)
}
if(this.__merge_style){
              this.__merge_style(__webpack_require__(/*! ./index.nvue?vue&type=style&index=0&lang=css&mpType=page */ 35).default)
          }else{
              Object.assign(this.$options.style,__webpack_require__(/*! ./index.nvue?vue&type=style&index=0&lang=css&mpType=page */ 35).default)
          }

}

/* normalize component */

var component = Object(_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_nvue_vue_type_template_id_e409f55a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_nvue_vue_type_template_id_e409f55a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  injectStyles,
  null,
  "3ed9b2f5"
  
)

component.options.__file = "C:/Users/hulincloud/Documents/HBuilderProjects/mishop/pages/index/index.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 2 */
/*!******************************************************************************************************************************!*\
  !*** C:/Users/hulincloud/Documents/HBuilderProjects/mishop/pages/index/index.nvue?vue&type=template&id=e409f55a&mpType=page ***!
  \******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_index_nvue_vue_type_template_id_e409f55a_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/vue-loader/lib??ref--4-0!./index.nvue?vue&type=template&id=e409f55a&mpType=page */ 3);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_index_nvue_vue_type_template_id_e409f55a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_index_nvue_vue_type_template_id_e409f55a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 3 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/vue-loader/lib??ref--4-0!C:/Users/hulincloud/Documents/HBuilderProjects/mishop/pages/index/index.nvue?vue&type=template&id=e409f55a&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: { scrollY: true, enableBackToTop: true, bubble: "true" }
    },
    [
      _c(
        "view",
        [
          _c(
            "scroll-view",
            {
              staticClass: ["scroll-h"],
              attrs: {
                id: "tab-bar position-fixed",
                scrollX: true,
                showScrollbar: false,
                scrollLeft: _vm.scrollleft
              }
            },
            _vm._l(_vm.tabBars, function(tab, index) {
              return _c(
                "view",
                {
                  key: tab.id,
                  ref: "tab" + index,
                  refInFor: true,
                  staticClass: ["uni-tab-item"],
                  attrs: { id: tab.id, dataCurrent: index },
                  on: { click: _vm.ontabtap }
                },
                [
                  _c(
                    "u-text",
                    {
                      staticClass: ["uni-tab-item-title"],
                      class:
                        _vm.tabIndex == index ? "uni-tab-item-title-active" : ""
                    },
                    [_vm._v(_vm._s(tab.name))]
                  )
                ],
                1
              )
            }),
            0
          ),
          _c(
            "swiper",
            {
              staticClass: ["swiper-box"],
              staticStyle: { height: "550px" },
              attrs: { current: _vm.tabIndex, duration: 300 },
              on: { change: _vm.ontabchange, touchmove: _vm.touch }
            },
            _vm._l(_vm.tabBars, function(item, index) {
              return _c(
                "swiper-item",
                { key: index, staticClass: ["flex-1"] },
                [
                  _c(
                    "view",
                    { staticClass: ["swiper-item"] },
                    [
                      _c(
                        "swiper",
                        {
                          attrs: {
                            indicatorDots: true,
                            autoplay: true,
                            interval: 3000,
                            duration: 1000,
                            circular: "true"
                          }
                        },
                        _vm._l(_vm.carouselList, function(
                          carousel,
                          carouselIndex
                        ) {
                          return _c(
                            "swiper-item",
                            { key: carouselIndex },
                            [
                              _c("u-image", {
                                staticStyle: { height: "350upx" },
                                attrs: {
                                  src: _vm.serverUrl + carousel.chartPath,
                                  lazyLoad: "true",
                                  mode: ""
                                }
                              })
                            ],
                            1
                          )
                        }),
                        1
                      ),
                      _c(
                        "view",
                        { staticClass: ["w-100", "row", "px-2", "mx-2"] },
                        _vm._l(_vm.icondata, function(item, index) {
                          return _c(
                            "view",
                            {
                              key: index,
                              staticClass: ["j-center", "a-center", "mt-3"],
                              staticStyle: { width: "142upx" }
                            },
                            [
                              _c("u-image", {
                                staticStyle: {
                                  width: "58upx",
                                  height: "58upx"
                                },
                                attrs: { src: item.src, mode: "widthFix" }
                              }),
                              _c(
                                "u-text",
                                { staticClass: ["font", "text-muted", "mt-1"] },
                                [_vm._v(_vm._s(item.name))]
                              )
                            ],
                            1
                          )
                        }),
                        0
                      ),
                      _c("divider"),
                      _c(
                        "view",
                        { staticClass: ["flex-row", "mt-2"] },
                        [
                          _c("u-image", {
                            staticStyle: {
                              width: "373rpx",
                              height: "530rpx",
                              borderRight: "2upx solid #F5F5F5"
                            },
                            attrs: {
                              src: "../../static/image/images/demo/demo1.jpg",
                              lazyLoad: true
                            }
                          }),
                          _c(
                            "view",
                            { staticClass: ["flex-column"] },
                            [
                              _c("u-image", {
                                staticStyle: {
                                  width: "375rpx",
                                  height: "267rpx",
                                  borderBottom: "2rpx solid #F5F5F5"
                                },
                                attrs: {
                                  src:
                                    "../../static/image/images/demo/demo2.jpg"
                                }
                              }),
                              _c("u-image", {
                                staticStyle: {
                                  width: "375rpx",
                                  height: "264rpx"
                                },
                                attrs: {
                                  src:
                                    "../../static/image/images/demo/demo3.jpg"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ]
              )
            }),
            1
          ),
          _c(
            "view",
            { staticClass: ["row", "justify-between", "w-100"] },
            _vm._l(_vm.commonList, function(item, itemIndex) {
              return _c(
                "view",
                { key: itemIndex },
                [_c("shop-list", { attrs: { item: item, index: itemIndex } })],
                1
              )
            }),
            0
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 4 */
/*!************************************************************************************************************************!*\
  !*** C:/Users/hulincloud/Documents/HBuilderProjects/mishop/pages/index/index.nvue?vue&type=script&lang=js&mpType=page ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--3-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--3-1!./node_modules/vue-loader/lib??ref--4-0!./index.nvue?vue&type=script&lang=js&mpType=page */ 5);
/* harmony import */ var _D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 5 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--3-1!./node_modules/vue-loader/lib??ref--4-0!C:/Users/hulincloud/Documents/HBuilderProjects/mishop/pages/index/index.nvue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
<<<<<<< HEAD
/* WEBPACK VAR INJECTION */(function(plus, __f__, uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 39));
=======
/* WEBPACK VAR INJECTION */(function(uni, __f__, plus) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;
>>>>>>> msqx-dev





















































var _divider = _interopRequireDefault(__webpack_require__(/*! @/components/common/divider.nvue */ 8));
var _card = _interopRequireDefault(__webpack_require__(/*! @/components/common/card.vue */ 16));
<<<<<<< HEAD
var _commonList = _interopRequireDefault(__webpack_require__(/*! @/components/common/common-list.nvue */ 21));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}
var dom = weex.requireModule('dom');var _default =

{
  components: {
    divider: _divider.default,
    card: _card.default,
    shopList: _commonList.default },

  data: function data() {
    return {
      carouselList: [],
      scrollleft: 0,
      deviceInfo: "",
      serverUrl: "http://192.168.2.233:8081",
      icondata: [
      { src: "/static/image/images/indexnav/1.png", name: "新品发布" },
      { src: "/static/image/images/indexnav/2.gif", name: "小米众筹" },
      { src: "/static/image/images/indexnav/3.gif", name: "以旧换新" },
      { src: "/static/image/images/indexnav/4.gif", name: "一分换团" },
      { src: "/static/image/images/indexnav/5.gif", name: "超值特卖" },
      { src: "/static/image/images/indexnav/6.gif", name: "小米秒杀" },
      { src: "/static/image/images/indexnav/7.gif", name: "真心想要" },
      { src: "/static/image/images/indexnav/8.gif", name: "电视热卖" },
      { src: "/static/image/images/indexnav/9.gif", name: "家电热卖" },
      { src: "/static/image/images/indexnav/10.gif", name: "米粉卡" }],

      commonList: [
      {
        cover: '../../static/image/images/demo/cate_01.png',
        title: '王源V8',
        desc: '这颜值你不买？',
        oprice: 9999,
        pprice: 998 },

      {
        cover: '../../static/image/images/demo/cate_01.png',
        title: '王源V8',
        desc: '这颜值你不买？',
        oprice: 9999,
        pprice: 998 },

      {
        cover: '../../static/image/images/demo/cate_01.png',
        title: '王源V8',
        desc: '这颜值你不买？',
        oprice: 9999,
        pprice: 998 },

      {
        cover: '../../static/image/images/demo/cate_01.png',
        title: '王源V8',
        desc: '这颜值你不买？',
        oprice: 9999,
=======
var _commonList = _interopRequireDefault(__webpack_require__(/*! @/components/common/common-list.nvue */ 21));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
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
//
//
//
//
//
//
var dom = weex.requireModule('dom');var _default = { components: { divider: _divider.default, card: _card.default, shopList: _commonList.default }, data: function data() {return { carouselList: [], scrollleft: 0, deviceInfo: "", serverUrl: "http://192.168.2.233:8081", icondata: [{ src: "/static/image/images/indexnav/1.png", name: "新品发布" }, { src: "/static/image/images/indexnav/2.gif", name: "小米众筹" }, { src: "/static/image/images/indexnav/3.gif", name: "以旧换新" }, { src: "/static/image/images/indexnav/4.gif", name: "一分换团" }, { src: "/static/image/images/indexnav/5.gif", name: "超值特卖" }, { src: "/static/image/images/indexnav/6.gif", name: "小米秒杀" }, { src: "/static/image/images/indexnav/7.gif", name: "真心想要" }, { src: "/static/image/images/indexnav/8.gif", name: "电视热卖" }, { src: "/static/image/images/indexnav/9.gif", name: "家电热卖" }, { src: "/static/image/images/indexnav/10.gif", name: "米粉卡" }], commonList: [{ cover: '../../static/image/images/demo/cate_01.png', title: '王源V8', desc: '这颜值你不买？', oprice: 9999, pprice: 998 }, { cover: '../../static/image/images/demo/cate_01.png', title: '王源V8', desc: '这颜值你不买？', oprice: 9999, pprice: 998 }, { cover: '../../static/image/images/demo/cate_01.png', title: '王源V8', desc: '这颜值你不买？', oprice: 9999, pprice: 998 }, { cover: '../../static/image/images/demo/cate_01.png', title: '王源V8', desc: '这颜值你不买？', oprice: 9999,
>>>>>>> msqx-dev
        pprice: 998 },

      {
        cover: '../../static/image/images/demo/cate_01.png',
        title: '王源V8',
        desc: '这颜值你不买？',
        oprice: 9999,
        pprice: 998 },

      {
        cover: '../../static/image/images/demo/cate_01.png',
        title: '王源V8',
        desc: '这颜值你不买？',
        oprice: 9999,
        pprice: 998 }],


      tabIndex: 0,
      tabBars: [
      {
        name: '关注',
        id: 'guanzhu' },
      {
        name: '推荐',
        id: 'tuijian' },
      {
        name: '体育',
        id: 'tiyu' },
      {
        name: '热点',
        id: 'redian' },
      {
        name: '财经',
        id: 'caijing' },
      {
        name: '娱乐',
        id: 'yule' },
      {
        name: '军事',
        id: 'junshi' },
      {
        name: '历史',
        id: 'lishi' },
      {
        name: '本地',
        id: 'bendi' }],


<<<<<<< HEAD
      scrollInto: 0 };

  },
  onLoad: function onLoad() {var _this = this;
    var me = this;
    plus.device.getInfo({
      success: function () {var _success = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(res) {return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                  console.log(__f__(res.imei, " at pages\\index\\index.nvue:166"));
                  me.deviceInfo = res.imei;case 2:case "end":return _context.stop();}}}, _callee, this);}));function success(_x) {return _success.apply(this, arguments);}return success;}() });


    setTimeout(function () {
      var emui = _this.deviceInfo.split(",");
    }, 500);
=======
      scrollInto: 0,
      options: {
        currentCity: "" } };


  },
  onLoad: function onLoad() {
    var me = this;
    uni.getLocation({
      geocode: true,
      success: function success(res) {
        console.log(__f__(res, " at pages\\index\\index.nvue:170"));
        //动态修改导航栏地址
        var city = res.address.city;
        city = city.split("市").join("");
        me.options.currentCity = city;
        var currentWebview = plus.webview.currentWebview();
        currentWebview.setTitleNViewButtonStyle(0, {
          text: city });

      } });

    //  plus.device.getInfo({
    //     async success(res) {
    //         console.log(res.imei);
    //         me.deviceInfo = res.imei 
    //     }
    // })
    // setTimeout(() => {
    //     let emui = this.deviceInfo.split(",")
    // },500)
>>>>>>> msqx-dev
    uni.onNavigationBarSearchInputClicked(function () {
      uni.navigateTo({
        url: "../search/search" });

    });

    var xhr = new plus.net.XMLHttpRequest();
    xhr.open('POST', 'http://192.168.2.233:8081/index/carousel/list');
    // 触发change事件
    xhr.send();
    xhr.onreadystatechange = function () {switch (xhr.readyState) {
        case 4:
          if (xhr.status == 200) {
            // me.carouselList= JSON.parse(xhr.responseText).data.data.rows;
            var data = JSON.parse(xhr.responseText);
            me.carouselList = data.data.rows;

          } else {
<<<<<<< HEAD
            console.log(__f__("xhr请求失败：" + xhr.readyState, " at pages\\index\\index.nvue:191"));
=======
            console.log(__f__("xhr请求失败：" + xhr.readyState, " at pages\\index\\index.nvue:208"));
>>>>>>> msqx-dev
          }
          break;
        default:
          break;}
    };
<<<<<<< HEAD

    // var currentWebview = this.$mp.page.$getAppWebview();
    // let tn = currentWebview.getStyle().titleNView;
    // tn.searchInput.placeholder = 'Gemini';
    // currentWebview.setStyle({
    //     titleNView: tn
    // });
    // console.log(currentWebview.getStyle().titleNView);
    // currentWebview.setTitleNViewSearchInputText("hello")
    // console.log(currentWebview.getTitleNViewSearchInputText());


  },

=======
  },

  onNavigationBarButtonTap: function onNavigationBarButtonTap(e) {
    var me = this;
    if (e.float === "left") {
      uni.navigateTo({
        url: "/pages/selectCity/selectCity?currentCity=".concat(me.options.currentCity) });

    }
  },
>>>>>>> msqx-dev
  methods: {
    touch: function touch(e) {
      this.marginLeft += 1;
    },
    lower: function lower(e) {
<<<<<<< HEAD
      console.log(__f__(e, " at pages\\index\\index.nvue:216"));
=======
      console.log(__f__(e, " at pages\\index\\index.nvue:229"));
>>>>>>> msqx-dev
    },
    ontabtap: function ontabtap(e) {
      var index = e.target.dataset.current || e.currentTarget.dataset.current;
      this.tabIndex = index;
      // this.switchTab(index);
    },
<<<<<<< HEAD
    ontabchange: function ontabchange(e) {var _this2 = this;
      var index = e.target.current || e.detail.current;
      // console.log(index);
      this.tabIndex = index;
      console.log(__f__(index, " at pages\\index\\index.nvue:227"));
      // this.switchTab(index);
      if (index - 5 > 0) {
        setTimeout(function () {
          _this2.scrollleft += 60;
        }, 1);
      }
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ 6)["weexPlus"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ 6)["default"]))
=======
    ontabchange: function ontabchange(e) {var _this = this;
      var index = e.target.current || e.detail.current;
      // console.log(index);
      this.tabIndex = index;
      console.log(__f__(index, " at pages\\index\\index.nvue:240"));
      // this.switchTab(index);
      if (index - 5 > 0) {
        setTimeout(function () {
          _this.scrollleft += 60;
        }, 1);
      }
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ 6)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ 6)["weexPlus"]))
>>>>>>> msqx-dev

/***/ }),
/* 6 */
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js ***!
  \*****************************************************************************************************/
/*! exports provided: default, weexPlus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weexPlus", function() { return weexPlus; });
function initUni() {

    var isFn = function isFn(v) {
        return typeof v === 'function';
    };

    var handlePromise = function handlePromise(promise) {
        return promise.then(function(data) {
            return [null, data];
        }).catch(function(err) {
            return [err];
        });
    };

    var REGEX = /^\$|^on|^create|Sync$|Manager$|^pause/;
    var API_NORMAL_LIST = ['os', 'getCurrentSubNVue', 'getSubNVueById', 'stopRecord', 'stopVoice',
        'stopBackgroundAudio', 'stopPullDownRefresh', 'hideKeyboard', 'hideToast', 'hideLoading',
        'showNavigationBarLoading', 'hideNavigationBarLoading', 'canIUse', 'navigateBack', 'closeSocket',
        'pageScrollTo', 'drawCanvas'
    ];

    var shouldPromise = function shouldPromise(name) {
        if (REGEX.test(name) && name !== 'createBLEConnection') {
            return false;
        }
        if (~API_NORMAL_LIST.indexOf(name)) {
            return false;
        }
        return true;
    };

    var promisify = function promisify(api) {
        return function() {
            for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                params[_key - 1] = arguments[_key];
            }

            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
                return api.apply(undefined, [options].concat(params));
            }
            return handlePromise(new Promise(function(resolve, reject) {
                api.apply(undefined, [Object.assign({}, options, {
                    success: resolve,
                    fail: reject
                })].concat(params));
                /* eslint-disable no-extend-native */
                Promise.prototype.finally = function(callback) {
                    var promise = this.constructor;
                    return this.then(function(value) {
                        return promise.resolve(callback()).then(function() {
                            return value;
                        });
                    }, function(reason) {
                        return promise.resolve(callback()).then(function() {
                            throw reason;
                        });
                    });
                };
            }));
        };
    };

    var onMessageCallbacks = [];

    var origin = void 0;

    function onSubNVueMessage(data) {
        onMessageCallbacks.forEach(function(callback) {
            return callback({
                origin: origin,
                data: data
            });
        });
    }

    var webviewId = weexPlus.webview.currentWebview().id;

    var channel = new BroadcastChannel('UNI-APP-SUBNVUE');
    channel.onmessage = function(event) {
        if (event.data.to === webviewId) {
            onSubNVueMessage(event.data.data);
        }
    };

    function wrapper(webview) {
        webview.$processed = true;

        var currentWebviewId = weexPlus.webview.currentWebview().id;
        var isPopupNVue = currentWebviewId === webview.id;

        var hostNVueId = webview.__uniapp_origin_type === 'uniNView' && webview.__uniapp_origin_id;
        var popupNVueId = webview.id;

        webview.postMessage = function(data) {
            if (hostNVueId) {
                channel.postMessage({
                    data: data,
                    to: isPopupNVue ? hostNVueId : popupNVueId
                });
            } else {
                postMessage({
                    type: 'UniAppSubNVue',
                    data: data
                });
            }
        };
        webview.onMessage = function(callback) {
            onMessageCallbacks.push(callback);
        };

        if (!webview.__uniapp_mask_id) {
            return;
        }
        origin = webview.__uniapp_host;

        var maskColor = webview.__uniapp_mask;

        var maskWebview = weexPlus.webview.getWebviewById(webview.__uniapp_mask_id);
        maskWebview = maskWebview.parent() || maskWebview;//再次检测父
        var oldShow = webview.show;
        var oldHide = webview.hide;
        var oldClose = webview.close;

        var showMask = function showMask() {
            maskWebview.setStyle({
                mask: maskColor
            });
        };
        var closeMask = function closeMask() {
            maskWebview.setStyle({
                mask: 'none'
            });
        };
        webview.show = function() {
            showMask();

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return oldShow.apply(webview, args);
        };
        webview.hide = function() {
            closeMask();

            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
            }

            return oldHide.apply(webview, args);
        };
        webview.close = function() {
            closeMask();

            for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                args[_key3] = arguments[_key3];
            }

            return oldClose.apply(webview, args);
        };
    }

    function getSubNVueById(id) {
        var webview = weexPlus.webview.getWebviewById(id);
        if (webview && !webview.$processed) {
            wrapper(webview);
        }
        return webview;
    }

    function getCurrentSubNVue() {
        return getSubNVueById(weexPlus.webview.currentWebview().id);
    }

    var plus = weex.requireModule('plus');
    var globalEvent = weex.requireModule('globalEvent');

    var id = 0;
    var callbacks = {};

    var UNIAPP_SERVICE_NVUE_ID = '__uniapp__service';

    globalEvent.addEventListener('plusMessage', function(e) {
        if (e.data.type === 'UniAppJsApi') {
            invoke(e.data.id, e.data.data);
        } else if (e.data.type === 'UniAppSubNVue') {
            onSubNVueMessage(e.data.data, e.data.options);
        } else if (e.data.type === 'onNavigationBarButtonTap') {
            if (typeof onNavigationBarButtonTapCallback === 'function') {
                onNavigationBarButtonTapCallback(e.data.data);
            }
        } else if (e.data.type === 'onNavigationBarSearchInputChanged') {
            if (typeof onNavigationBarSearchInputChangedCallback === 'function') {
                onNavigationBarSearchInputChangedCallback(e.data.data);
            }
        } else if (e.data.type === 'onNavigationBarSearchInputConfirmed') {
            if (typeof onNavigationBarSearchInputConfirmedCallback === 'function') {
                onNavigationBarSearchInputConfirmedCallback(e.data.data);
            }
        } else if (e.data.type === 'onNavigationBarSearchInputClicked') {
            if (typeof onNavigationBarSearchInputClickedCallback === 'function') {
                onNavigationBarSearchInputClickedCallback(e.data.data);
            }
        }
    });

    var createCallback = function createCallback(args, type) {
        var callback = function callback(res) {
            if (isFn(args)) {
                args(res);
            } else if (args) {
                if (~res.errMsg.indexOf(':ok')) {
                    isFn(args.success) && args.success(res);
                } else if (~res.errMsg.indexOf(':fail')) {
                    isFn(args.fail) && args.fail(res);
                }
                isFn(args.complete) && args.complete(res);
            }
        };
        if (isFn(args) || args && isFn(args.callback)) {
            callback.keepAlive = true;
        }
        return callback;
    };

    var invoke = function invoke(callbackId, data) {
        var callback = callbacks[callbackId];
        if (callback) {
            callback(data);
            if (!callback.keepAlive) {
                delete callbacks[callbackId];
            }
        } else {
            console.error('callback[' + callbackId + '] is undefined');
        }
    };

    var publish = function publish(_ref) {
        var id = _ref.id,
            type = _ref.type,
            params = _ref.params;

        callbacks[id] = createCallback(params, type);
        plus.postMessage({
            id: id,
            type: type,
            params: params
        }, UNIAPP_SERVICE_NVUE_ID);
    };

    function postMessage(data) {
        plus.postMessage(data, UNIAPP_SERVICE_NVUE_ID);
    }

    var createPublish = function createPublish(name) {
        return function(args) {
            publish({
                id: id++,
                type: name,
                params: args
            });
        };
    };

    var onNavigationBarButtonTapCallback = void 0;
    var onNavigationBarSearchInputChangedCallback = void 0;
    var onNavigationBarSearchInputConfirmedCallback = void 0;
    var onNavigationBarSearchInputClickedCallback = void 0;

    function onNavigationBarButtonTap(callback) {
        onNavigationBarButtonTapCallback = callback;
    }

    function onNavigationBarSearchInputChanged(callback) {
        onNavigationBarSearchInputChangedCallback = callback;
    }

    function onNavigationBarSearchInputConfirmed(callback) {
        onNavigationBarSearchInputConfirmedCallback = callback;
    }

    function onNavigationBarSearchInputClicked(callback) {
        onNavigationBarSearchInputClickedCallback = callback;
    }

    function requireNativePlugin(pluginName) {
        return weex.requireModule(pluginName);
    }

    var dom = weex.requireModule('dom');

    function loadFontFace(_ref) {
        var family = _ref.family,
            source = _ref.source,
            desc = _ref.desc,
            success = _ref.success,
            fail = _ref.fail,
            complete = _ref.complete;

        dom.addRule('fontFace', {
            fontFamily: family,
            src: source.replace(/"/g, '\'')
        });
        var res = {
            errMsg: 'loadFontFace:ok',
            status: 'loaded'
        };
        isFn(success) && success(res);
        isFn(complete) && complete(res);
    }

    var globalEvent$1 = weex.requireModule('globalEvent');

    var callbacks$1 = [];

    globalEvent$1.addEventListener('plusMessage', function(e) {
        if (e.data.type === 'UniAppReady') {
            ready.isUniAppReady = true;
            if (callbacks$1.length) {
                callbacks$1.forEach(function(callback) {
                    return callback();
                });
                callbacks$1 = [];
            }
        }
    });

    function ready(callback) {
        if (typeof callback === 'function') {
            if (this.isUniAppReady) {
                callback();
            } else {
                callbacks$1.push(callback);
            }
        }
    }

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ?
            "symbol" : typeof obj;
    };

    var stream = weex.requireModule('stream');

    // let requestTaskId = 0

    var METHOD_GET = 'GET';
    var METHOD_POST = 'POST';
    var CONTENT_TYPE_JSON = 'application/json';
    var CONTENT_TYPE_FORM = 'application/x-www-form-urlencoded';

    var serialize = function serialize(data) {
        var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : METHOD_GET;
        var contentType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : CONTENT_TYPE_FORM;

        if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
            if (method.toUpperCase() === METHOD_POST && contentType.toLowerCase() === CONTENT_TYPE_JSON) {
                return JSON.stringify(data);
            } else {
                return Object.keys(data).map(function(key) {
                    return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
                }).join('&');
            }
        }
        return data;
    };

    function request(_ref) {
        var url = _ref.url,
            data = _ref.data,
            header = _ref.header,
            _ref$method = _ref.method,
            method = _ref$method === undefined ? 'GET' : _ref$method,
            _ref$dataType = _ref.dataType,
            dataType = _ref$dataType === undefined ? 'json' : _ref$dataType,
            responseType = _ref.responseType,
            success = _ref.success,
            fail = _ref.fail,
            complete = _ref.complete;

        // requestTaskId++
        var aborted = false;

        var hasContentType = false;
        var headers = {};
        if (header) {
            for (var name in header) {
                if (!hasContentType && name.toLowerCase() === 'content-type') {
                    hasContentType = true;
                    headers['Content-Type'] = header[name];
                } else {
                    headers[name] = header[name];
                }
            }
        }
        if (method === METHOD_GET && data) {
            url = url + (~url.indexOf('?') ? url.substr(-1) === '&' || url.substr(-1) === '?' ? '' : '&' : '?') +
                serialize(data);
        }
        stream.fetch({
            url: url,
            method: method,
            headers: headers,
            type: dataType === 'json' ? 'json' : 'text',
            body: method !== METHOD_GET ? serialize(data, method, headers['Content-Type']) : ''
        }, function(_ref2) {
            var status = _ref2.status,
                ok = _ref2.ok,
                statusText = _ref2.statusText,
                data = _ref2.data,
                headers = _ref2.headers;

            var ret = {};
            if (!status || status === -1 || aborted) {
                ret.errMsg = 'request:fail';
                isFn(fail) && fail(ret);
            } else {
                ret.data = data;
                ret.statusCode = status;
                ret.header = headers;
                isFn(success) && success(ret);
            }
            isFn(complete) && complete(ret);
        });
        return {
            abort: function abort() {
                aborted = true;
            }
        };
    }

    var storage = weex.requireModule('plusstorage');
    var UNIAPP_STORAGE_DATA_TYPE = '__TYPE';

    function getStorage(_ref) {
        var key = _ref.key,
            data = _ref.data,
            success = _ref.success,
            fail = _ref.fail,
            complete = _ref.complete;

        storage.getItem(key + UNIAPP_STORAGE_DATA_TYPE, function(ret) {
            if (ret.result === 'success') {
                var dataType = ret.data;
                storage.getItem(key, function(res) {
                    if (res.result === 'success') {
                        var result = res.data;
                        if (dataType && result) {
                            if (dataType !== 'String') {
                                result = JSON.parse(result);
                            }
                            isFn(success) && success({
                                errMsg: 'getStorage:ok',
                                data: result
                            });
                        } else {
                            res.errMsg = 'setStorage:fail';
                            isFn(fail) && fail(res);
                        }
                    } else {
                        res.errMsg = 'setStorage:fail';
                        isFn(fail) && fail(res);
                    }
                    isFn(complete) && complete(res);
                });
            } else {
                ret.errMsg = 'setStorage:fail';
                isFn(fail) && fail(ret);
                isFn(complete) && complete(ret);
            }
        });
    }

    function setStorage(_ref2) {
        var key = _ref2.key,
            data = _ref2.data,
            success = _ref2.success,
            fail = _ref2.fail,
            complete = _ref2.complete;

        var dataType = 'String';
        if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
            dataType = 'Object';
            data = JSON.stringify(data);
        }
        storage.setItem(key, data, function(res) {
            if (res.result === 'success') {
                storage.setItem(key + UNIAPP_STORAGE_DATA_TYPE, dataType, function(ret) {
                    if (ret.result === 'success') {
                        isFn(success) && success({
                            errMsg: 'setStorage:ok'
                        });
                    } else {
                        ret.errMsg = 'setStorage:fail';
                        isFn(fail) && fail(ret);
                    }
                });
            } else {
                res.errMsg = 'setStorage:fail';
                isFn(fail) && fail(res);
            }
            isFn(complete) && complete(res);
        });
    }

    function removeStorage(_ref3) {
        var key = _ref3.key,
            data = _ref3.data,
            success = _ref3.success,
            fail = _ref3.fail,
            complete = _ref3.complete;

        storage.removeItem(key, function(res) {
            if (res.result === 'success') {
                isFn(success) && success({
                    errMsg: 'removeStorage:ok'
                });
            } else {
                res.errMsg = 'removeStorage:fail';
                isFn(fail) && fail(res);
            }
            isFn(complete) && complete(res);
        });
        storage.removeItem(key + UNIAPP_STORAGE_DATA_TYPE);
    }

    function clearStorage(_ref4) {
        var key = _ref4.key,
            data = _ref4.data,
            success = _ref4.success,
            fail = _ref4.fail,
            complete = _ref4.complete;
    }

    var clipboard = weex.requireModule('clipboard');

    function getClipboardData(_ref) {
        var success = _ref.success,
            fail = _ref.fail,
            complete = _ref.complete;

        clipboard.getString(function(_ref2) {
            var data = _ref2.data;

            var res = {
                errMsg: 'getClipboardData:ok',
                data: data
            };
            isFn(success) && success(res);
            isFn(complete) && complete(res);
        });
    }

    function setClipboardData(_ref3) {
        var data = _ref3.data,
            success = _ref3.success,
            fail = _ref3.fail,
            complete = _ref3.complete;

        var res = {
            errMsg: 'setClipboardData:ok'
        };
        clipboard.setString(data);
        isFn(success) && success(res);
        isFn(complete) && complete(res);
    }

    var getEmitter = function() {
        if (typeof getUniEmitter === 'function') {
            /* eslint-disable no-undef */
            return getUniEmitter;
        }
        var Emitter = {
            $on: function $on() {
                console.warn('uni.$on failed');
            },
            $off: function $off() {
                console.warn('uni.$off failed');
            },
            $once: function $once() {
                console.warn('uni.$once failed');
            },
            $emit: function $emit() {
                console.warn('uni.$emit failed');
            }
        };
        return function getUniEmitter() {
            return Emitter;
        };
    }();

    function apply(ctx, method, args) {
        return ctx[method].apply(ctx, args);
    }

    function $on() {
        return apply(getEmitter(), '$on', [].concat(Array.prototype.slice.call(arguments)));
    }

    function $off() {
        return apply(getEmitter(), '$off', [].concat(Array.prototype.slice.call(arguments)));
    }

    function $once() {
        return apply(getEmitter(), '$once', [].concat(Array.prototype.slice.call(arguments)));
    }

    function $emit() {
        return apply(getEmitter(), '$emit', [].concat(Array.prototype.slice.call(arguments)));
    }



    var api = /*#__PURE__*/ Object.freeze({
        loadFontFace: loadFontFace,
        ready: ready,
        request: request,
        getStorage: getStorage,
        setStorage: setStorage,
        removeStorage: removeStorage,
        clearStorage: clearStorage,
        getClipboardData: getClipboardData,
        setClipboardData: setClipboardData,
        onSubNVueMessage: onSubNVueMessage,
        getSubNVueById: getSubNVueById,
        getCurrentSubNVue: getCurrentSubNVue,
        $on: $on,
        $off: $off,
        $once: $once,
        $emit: $emit
    });


    var wx = {
        uploadFile: true,
        downloadFile: true,
        chooseImage: true,
        previewImage: true,
        getImageInfo: true,
        saveImageToPhotosAlbum: true,
        chooseVideo: true,
        saveVideoToPhotosAlbum: true,
        saveFile: true,
        getSavedFileList: true,
        getSavedFileInfo: true,
        removeSavedFile: true,
        openDocument: true,
        setStorage: true,
        getStorage: true,
        getStorageInfo: true,
        removeStorage: true,
        clearStorage: true,
        getLocation: true,
        chooseLocation: true,
        openLocation: true,
        getSystemInfo: true,
        getNetworkType: true,
        makePhoneCall: true,
        scanCode: true,
        setScreenBrightness: true,
        getScreenBrightness: true,
        setKeepScreenOn: true,
        vibrateLong: true,
        vibrateShort: true,
        addPhoneContact: true,
        showToast: true,
        showLoading: true,
        hideToast: true,
        hideLoading: true,
        showModal: true,
        showActionSheet: true,
        setNavigationBarTitle: true,
        setNavigationBarColor: true,
        navigateTo: true,
        redirectTo: true,
        reLaunch: true,
        switchTab: true,
        navigateBack: true,
        getProvider: true,
        login: true,
        getUserInfo: true,
        share: true,
        requestPayment: true,
        subscribePush: true,
        unsubscribePush: true,
        onPush: true,
        offPush: true
    };

    var baseUni = {
        os: {
            nvue: true
        }
    };

    var uni = {};

    if (typeof Proxy !== 'undefined') {
        uni = new Proxy({}, {
            get: function get(target, name) {
                if (name === 'os') {
                    return {
                        nvue: true
                    };
                }
                if (name === 'postMessage') {
                    return postMessage;
                }
                if (name === 'requireNativePlugin') {
                    return requireNativePlugin;
                }
                if (name === 'onNavigationBarButtonTap') {
                    return onNavigationBarButtonTap;
                }
                if (name === 'onNavigationBarSearchInputChanged') {
                    return onNavigationBarSearchInputChanged;
                }
                if (name === 'onNavigationBarSearchInputConfirmed') {
                    return onNavigationBarSearchInputConfirmed;
                }
                if (name === 'onNavigationBarSearchInputClicked') {
                    return onNavigationBarSearchInputClicked;
                }
                var method = api[name];
                if (!method) {
                    method = createPublish(name);
                }
                if (shouldPromise(name)) {
                    return promisify(method);
                }
                return method;
            }
        });
    } else {
        Object.keys(baseUni).forEach(function(key) {
            uni[key] = baseUni[key];
        });

        uni.postMessage = postMessage;

        uni.requireNativePlugin = requireNativePlugin;

        uni.onNavigationBarButtonTap = onNavigationBarButtonTap;

        uni.onNavigationBarSearchInputChanged = onNavigationBarSearchInputChanged;

        uni.onNavigationBarSearchInputConfirmed = onNavigationBarSearchInputConfirmed;

        uni.onNavigationBarSearchInputClicked = onNavigationBarSearchInputClicked;

        Object.keys(wx).forEach(function(name) {
            var method = api[name];
            if (!method) {
                method = createPublish(name);
            }
            if (shouldPromise(name)) {
                uni[name] = promisify(method);
            } else {
                uni[name] = method;
            }
        });
    }
    return uni;
}

var createUni;

if (typeof getUni === 'function') {
    createUni = getUni;
} else {
    createUni = initUni;
}
var weexPlus = new WeexPlus(weex);
/* harmony default export */ __webpack_exports__["default"] = (createUni(weex, weexPlus, BroadcastChannel));



/***/ }),
/* 7 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  const s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function formatLog (...args) {
  const msgs = args.map((v) => {
    const type = Object.prototype.toString.call(v)
    if (type.toLowerCase() === '[object object]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v) + '---END:JSON---'
      } catch (e) {
        v = '[object object]'
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        const vType = typof(v).toUpperCase()
        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }
    return v
  })
  let msg = ''
  if (msgs.length > 1) {
    const lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')
    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }
  return msg
}


/***/ }),
/* 8 */
/*!********************************************************************************************!*\
  !*** C:/Users/hulincloud/Documents/HBuilderProjects/mishop/components/common/divider.nvue ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _divider_nvue_vue_type_template_id_0f5aaf02___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./divider.nvue?vue&type=template&id=0f5aaf02& */ 9);
/* harmony import */ var _divider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./divider.nvue?vue&type=script&lang=js& */ 11);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _divider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _divider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 15);



function injectStyles (context) {
  
  if(!this.$options.style){
    this.$options.style = {}
}
if(this.__merge_style && this.$root && this.$root.$options.appStyle){
  this.__merge_style(this.$root.$options.appStyle)
}
if(this.__merge_style){
              this.__merge_style(__webpack_require__(/*! ./divider.nvue?vue&type=style&index=0&lang=css& */ 13).default)
          }else{
              Object.assign(this.$options.style,__webpack_require__(/*! ./divider.nvue?vue&type=style&index=0&lang=css& */ 13).default)
          }

}

/* normalize component */

var component = Object(_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _divider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _divider_nvue_vue_type_template_id_0f5aaf02___WEBPACK_IMPORTED_MODULE_0__["render"],
  _divider_nvue_vue_type_template_id_0f5aaf02___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  injectStyles,
  null,
  "c130db32"
  
)

component.options.__file = "C:/Users/hulincloud/Documents/HBuilderProjects/mishop/components/common/divider.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 9 */
/*!***************************************************************************************************************************!*\
  !*** C:/Users/hulincloud/Documents/HBuilderProjects/mishop/components/common/divider.nvue?vue&type=template&id=0f5aaf02& ***!
  \***************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_divider_nvue_vue_type_template_id_0f5aaf02___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/vue-loader/lib??ref--4-0!./divider.nvue?vue&type=template&id=0f5aaf02& */ 10);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_divider_nvue_vue_type_template_id_0f5aaf02___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_divider_nvue_vue_type_template_id_0f5aaf02___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 10 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/vue-loader/lib??ref--4-0!C:/Users/hulincloud/Documents/HBuilderProjects/mishop/components/common/divider.nvue?vue&type=template&id=0f5aaf02& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", { staticClass: ["divider"] })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 11 */
/*!*********************************************************************************************************************!*\
  !*** C:/Users/hulincloud/Documents/HBuilderProjects/mishop/components/common/divider.nvue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_divider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--3-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--3-1!./node_modules/vue-loader/lib??ref--4-0!./divider.nvue?vue&type=script&lang=js& */ 12);
/* harmony import */ var _D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_divider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_divider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_divider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_divider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_divider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 12 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--3-1!./node_modules/vue-loader/lib??ref--4-0!C:/Users/hulincloud/Documents/HBuilderProjects/mishop/components/common/divider.nvue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
var _default =
{};exports.default = _default;

/***/ }),
/* 13 */
/*!*****************************************************************************************************************************!*\
  !*** C:/Users/hulincloud/Documents/HBuilderProjects/mishop/components/common/divider.nvue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_divider_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/vue-loader/lib??ref--4-0!./divider.nvue?vue&type=style&index=0&lang=css& */ 14);
/* harmony import */ var _D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_divider_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_divider_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_divider_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_divider_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_divider_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 14 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/vue-loader/lib??ref--4-0!C:/Users/hulincloud/Documents/HBuilderProjects/mishop/components/common/divider.nvue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "divider": {
    "height": "18rpx",
    "backgroundColor": "#F5F5F5",
    "width": "720rpx"
  }
}

/***/ }),
/* 15 */
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
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
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 16 */
/*!****************************************************************************************!*\
  !*** C:/Users/hulincloud/Documents/HBuilderProjects/mishop/components/common/card.vue ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _card_vue_vue_type_template_id_76d4df1a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card.vue?vue&type=template&id=76d4df1a& */ 17);
/* harmony import */ var _card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card.vue?vue&type=script&lang=js& */ 19);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 15);



function injectStyles (context) {
  
  if(!this.$options.style){
    this.$options.style = {}
}
if(this.__merge_style && this.$root && this.$root.$options.appStyle){
  this.__merge_style(this.$root.$options.appStyle)
}

}

/* normalize component */

var component = Object(_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _card_vue_vue_type_template_id_76d4df1a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _card_vue_vue_type_template_id_76d4df1a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  injectStyles,
  null,
  "797a79ca"
  
)

component.options.__file = "C:/Users/hulincloud/Documents/HBuilderProjects/mishop/components/common/card.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 17 */
/*!***********************************************************************************************************************!*\
  !*** C:/Users/hulincloud/Documents/HBuilderProjects/mishop/components/common/card.vue?vue&type=template&id=76d4df1a& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_template_id_76d4df1a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/vue-loader/lib??vue-loader-options!./card.vue?vue&type=template&id=76d4df1a& */ 18);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_template_id_76d4df1a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_template_id_76d4df1a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 18 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/hulincloud/Documents/HBuilderProjects/mishop/components/common/card.vue?vue&type=template&id=76d4df1a& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", { staticClass: ["card"] }, [
    _vm.showhead
      ? _c(
          "view",
          {
            staticClass: ["p-2", "main-border-color"],
            class: _vm.getHeadClass
          },
          [
            _vm._t("title", [
              _vm.headTitle
                ? _c(
                    "u-text",
                    {
                      staticClass: ["font"],
                      class: _vm.headTitleWeight ? "font-weight" : ""
                    },
                    [_vm._v(_vm._s(_vm.headTitle))]
                  )
                : _vm._e()
            ])
          ],
          2
        )
      : _vm._e(),
    _c(
      "view",
      { class: _vm.getBodyClass },
      [
        _vm.bodyCover
          ? _c("u-image", { attrs: { src: _vm.bodyCover, mode: "widthFix" } })
          : _vm._e(),
        _vm._t("default")
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 19 */
/*!*****************************************************************************************************************!*\
  !*** C:/Users/hulincloud/Documents/HBuilderProjects/mishop/components/common/card.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--3-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./card.vue?vue&type=script&lang=js& */ 20);
/* harmony import */ var _D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 20 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/hulincloud/Documents/HBuilderProjects/mishop/components/common/card.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
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
var _default =
{
  props: {
    // 头部标题
    headTitle: String,
    // 封面图
    bodyCover: String,
    // 是否显示头部
    showhead: {
      type: Boolean,
      default: true },

    // 是否显示下边线
    headBorderBottom: {
      type: Boolean,
      default: true },

    // 标题是否加粗
    headTitleWeight: {
      type: Boolean,
      default: true },

    // 是否给body加padding
    bodyPadding: {
      type: Boolean,
      default: false } },


  computed: {
    getHeadClass: function getHeadClass() {
      var BorderBottom = this.headBorderBottom ? 'border-bottom' : '';
      return "".concat(BorderBottom);
    },
    getBodyClass: function getBodyClass() {
      var padding = this.bodyPadding ? 'p-2' : '';
      return "".concat(padding);
    } } };exports.default = _default;

/***/ }),
/* 21 */
/*!************************************************************************************************!*\
  !*** C:/Users/hulincloud/Documents/HBuilderProjects/mishop/components/common/common-list.nvue ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_list_nvue_vue_type_template_id_813be090___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common-list.nvue?vue&type=template&id=813be090& */ 22);
/* harmony import */ var _common_list_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common-list.nvue?vue&type=script&lang=js& */ 24);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _common_list_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _common_list_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 15);



function injectStyles (context) {
  
  if(!this.$options.style){
    this.$options.style = {}
}
if(this.__merge_style && this.$root && this.$root.$options.appStyle){
  this.__merge_style(this.$root.$options.appStyle)
}
if(this.__merge_style){
              this.__merge_style(__webpack_require__(/*! ./common-list.nvue?vue&type=style&index=0&lang=css& */ 33).default)
          }else{
              Object.assign(this.$options.style,__webpack_require__(/*! ./common-list.nvue?vue&type=style&index=0&lang=css& */ 33).default)
          }

}

/* normalize component */

var component = Object(_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _common_list_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _common_list_nvue_vue_type_template_id_813be090___WEBPACK_IMPORTED_MODULE_0__["render"],
  _common_list_nvue_vue_type_template_id_813be090___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  injectStyles,
  null,
  "c6c074c0"
  
)

component.options.__file = "C:/Users/hulincloud/Documents/HBuilderProjects/mishop/components/common/common-list.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 22 */
/*!*******************************************************************************************************************************!*\
  !*** C:/Users/hulincloud/Documents/HBuilderProjects/mishop/components/common/common-list.nvue?vue&type=template&id=813be090& ***!
  \*******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_common_list_nvue_vue_type_template_id_813be090___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/vue-loader/lib??ref--4-0!./common-list.nvue?vue&type=template&id=813be090& */ 23);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_common_list_nvue_vue_type_template_id_813be090___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_common_list_nvue_vue_type_template_id_813be090___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 23 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/vue-loader/lib??ref--4-0!C:/Users/hulincloud/Documents/HBuilderProjects/mishop/components/common/common-list.nvue?vue&type=template&id=813be090& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", [
    _c(
      "view",
      {
        staticClass: ["col-6", "common-list", "mb-1"],
        on: { click: _vm.openDetail }
      },
      [
        _c("u-image", {
          staticClass: ["common-list-cover"],
          attrs: { src: _vm.item.cover, mode: "aspectFit", lazyLoad: true }
        }),
        _c(
          "u-text",
          {
            staticClass: [
              "font",
              "text-dark",
              "px-3",
              "py-1",
              "common-list-lines"
            ]
          },
          [_vm._v(_vm._s(_vm.item.title))]
        ),
        _c(
          "u-text",
          {
            staticClass: [
              "px-3",
              "font",
              "text-light-muted",
              "common-list-lines"
            ]
          },
          [_vm._v(_vm._s(_vm.item.desc))]
        ),
        _c(
          "view",
          { staticClass: ["px-3", "pt-1", "row", "a-end"] },
          [
            _c("price", [_vm._v(_vm._s(_vm.item.pprice))]),
            _c(
              "u-text",
              { staticClass: ["line-through", "text-light-muted", "ml-1"] },
              [_vm._v("￥" + _vm._s(_vm.item.oprice))]
            )
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 24 */
/*!*************************************************************************************************************************!*\
  !*** C:/Users/hulincloud/Documents/HBuilderProjects/mishop/components/common/common-list.nvue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_common_list_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--3-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--3-1!./node_modules/vue-loader/lib??ref--4-0!./common-list.nvue?vue&type=script&lang=js& */ 25);
/* harmony import */ var _D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_common_list_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_common_list_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_common_list_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_common_list_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_common_list_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 25 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--3-1!./node_modules/vue-loader/lib??ref--4-0!C:/Users/hulincloud/Documents/HBuilderProjects/mishop/components/common/common-list.nvue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;















var _price = _interopRequireDefault(__webpack_require__(/*! @/components/common/price.nvue */ 26));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
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
var _default = { components: { price: _price.default }, props: { item: Object, index: Number }, methods: { openDetail: function openDetail() {uni.navigateTo({ url: '/pages/detail/detail' });} } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ 6)["default"]))

/***/ }),
/* 26 */
/*!******************************************************************************************!*\
  !*** C:/Users/hulincloud/Documents/HBuilderProjects/mishop/components/common/price.nvue ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _price_nvue_vue_type_template_id_59204662___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./price.nvue?vue&type=template&id=59204662& */ 27);
/* harmony import */ var _price_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./price.nvue?vue&type=script&lang=js& */ 29);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _price_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _price_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 15);



function injectStyles (context) {
  
  if(!this.$options.style){
    this.$options.style = {}
}
if(this.__merge_style && this.$root && this.$root.$options.appStyle){
  this.__merge_style(this.$root.$options.appStyle)
}
if(this.__merge_style){
              this.__merge_style(__webpack_require__(/*! @/common/zcm-main-nvue.css?vue&type=style&index=0&lang=css& */ 31).default)
          }else{
              Object.assign(this.$options.style,__webpack_require__(/*! @/common/zcm-main-nvue.css?vue&type=style&index=0&lang=css& */ 31).default)
          }

}

/* normalize component */

var component = Object(_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _price_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _price_nvue_vue_type_template_id_59204662___WEBPACK_IMPORTED_MODULE_0__["render"],
  _price_nvue_vue_type_template_id_59204662___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  injectStyles,
  null,
  "070620b7"
  
)

component.options.__file = "C:/Users/hulincloud/Documents/HBuilderProjects/mishop/components/common/price.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 27 */
/*!*************************************************************************************************************************!*\
  !*** C:/Users/hulincloud/Documents/HBuilderProjects/mishop/components/common/price.nvue?vue&type=template&id=59204662& ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_price_nvue_vue_type_template_id_59204662___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/vue-loader/lib??ref--4-0!./price.nvue?vue&type=template&id=59204662& */ 28);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_price_nvue_vue_type_template_id_59204662___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_price_nvue_vue_type_template_id_59204662___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 28 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/vue-loader/lib??ref--4-0!C:/Users/hulincloud/Documents/HBuilderProjects/mishop/components/common/price.nvue?vue&type=template&id=59204662& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: ["flex-row"] },
      [
        _c(
          "u-text",
          { staticClass: ["font"], staticStyle: { color: "#FD6801" } },
          [_vm._v("￥")]
        ),
        _c(
          "u-text",
          { staticStyle: { color: "#FD6801", fontSize: "25px" } },
          [_vm._t("default")],
          2
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 29 */
/*!*******************************************************************************************************************!*\
  !*** C:/Users/hulincloud/Documents/HBuilderProjects/mishop/components/common/price.nvue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_price_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--3-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--3-1!./node_modules/vue-loader/lib??ref--4-0!./price.nvue?vue&type=script&lang=js& */ 30);
/* harmony import */ var _D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_price_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_price_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_price_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_price_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_price_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 30 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--3-1!./node_modules/vue-loader/lib??ref--4-0!C:/Users/hulincloud/Documents/HBuilderProjects/mishop/components/common/price.nvue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
var _default =
{};exports.default = _default;

/***/ }),
/* 31 */
/*!***********************************************************************************************************************!*\
  !*** C:/Users/hulincloud/Documents/HBuilderProjects/mishop/common/zcm-main-nvue.css?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_zcm_main_nvue_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./zcm-main-nvue.css?vue&type=style&index=0&lang=css& */ 32);
/* harmony import */ var _D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_zcm_main_nvue_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_zcm_main_nvue_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_zcm_main_nvue_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_zcm_main_nvue_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_zcm_main_nvue_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 32 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!C:/Users/hulincloud/Documents/HBuilderProjects/mishop/common/zcm-main-nvue.css?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "position-absolute": {
    "position": "absolute"
  },
  "position-fixed": {
    "position": "fixed"
  },
  "position-relative": {
    "position": "relative"
  },
  "left-0": {
    "left": 0
  },
  "top-0": {
    "top": 0
  },
  "bottom-0": {
    "bottom": 0
  },
  "right-0": {
    "right": 0
  },
  "w-100": {
    "width": "750"
  },
  "w-50": {
    "width": "375"
  },
  "h-100": {
    "height": "1250"
  },
  "h-50": {
    "width": "625"
  },
  "font": {
    "fontSize": "25"
  },
  "font-sm": {
    "fontSize": "20"
  },
  "font-md": {
    "fontSize": "30"
  },
  "font-lg": {
    "fontSize": "40"
  },
  "font-big": {
    "fontSize": "60"
  },
  "font-weight": {
    "fontWeight": "bold"
  },
  "font-weight-100": {
    "fontWeight": "100"
  },
  "line-through": {
    "textDecoration": "line-through"
  },
  "row": {
    "flexDirection": "row",
    "flexWrap": "wrap"
  },
  "col-1": {
    "width": "62.5"
  },
  "col-2": {
    "width": "125"
  },
  "col-3": {
    "width": "187.5"
  },
  "col-4": {
    "width": "250"
  },
  "col-5": {
    "width": "312.5"
  },
  "col-6": {
    "width": "375"
  },
  "col-7": {
    "width": "437.5"
  },
  "col-8": {
    "width": "500"
  },
  "col-9": {
    "width": "562.5"
  },
  "col-10": {
    "width": "625"
  },
  "col-11": {
    "width": "687.5"
  },
  "col-12": {
    "width": "750"
  },
  "flex-1": {
    "flex": 1
  },
  "flex-column": {
    "flexDirection": "column"
  },
  "flex-row": {
    "flexDirection": "row"
  },
  "flex-wrap": {
    "flexWrap": "wrap"
  },
  "flex-nowrap": {
    "flexWrap": "nowrap"
  },
  "j-start": {
    "justifyContent": "flex-start"
  },
  "j-center": {
    "justifyContent": "center"
  },
  "j-end": {
    "justifyContent": "flex-end"
  },
  "j-sb": {
    "justifyContent": "space-between"
  },
  "a-center": {
    "alignItems": "center"
  },
  "a-start": {
    "alignItems": "flex-start"
  },
  "a-end": {
    "alignItems": "flex-end"
  },
  "a-stretch": {
    "alignItems": "stretch"
  },
  "border": {
    "borderWidth": "1",
    "borderStyle": "solid",
    "borderColor": "#dee2e6"
  },
  "border-top": {
    "borderTopWidth": "1",
    "borderTopStyle": "solid",
    "borderTopColor": "#dee2e6"
  },
  "border-right": {
    "borderRightWidth": "1",
    "borderRightStyle": "solid",
    "borderRightColor": "#dee2e6"
  },
  "border-bottom": {
    "borderBottomWidth": "1",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#dee2e6"
  },
  "border-left": {
    "borderLeftWidth": "1",
    "borderLeftStyle": "solid",
    "borderLeftColor": "#dee2e6"
  },
  "border-0": {
    "borderWidth": 0
  },
  "border-top-0": {
    "borderTopWidth": 0
  },
  "border-right-0": {
    "borderRightWidth": 0
  },
  "border-bottom-0": {
    "borderBottomWidth": 0
  },
  "border-left-0": {
    "borderLeftWidth": 0
  },
  "border-primary": {
    "borderColor": "#007bff"
  },
  "border-secondary": {
    "borderColor": "#6c757d"
  },
  "border-success": {
    "borderColor": "#6c757d"
  },
  "border-danger": {
    "borderColor": "#dc3545"
  },
  "border-warning": {
    "borderColor": "#ffc107"
  },
  "border-info": {
    "borderColor": "#17a2b8"
  },
  "border-light": {
    "borderColor": "#f8f9fa"
  },
  "border-dark": {
    "borderColor": "#343a40"
  },
  "border-white": {
    "borderColor": "#ffffff"
  },
  "border-light-secondary": {
    "borderColor": "#F1F1F1"
  },
  "rounded": {
    "borderRadius": "5"
  },
  "rounded-circle": {
    "borderRadius": 100
  },
  "rounded-0": {
    "borderRadius": 0
  },
  "text-primary": {
    "color": "#007bff"
  },
  "text-secondary": {
    "color": "#6c757d"
  },
  "text-success": {
    "color": "#6c757d"
  },
  "text-danger": {
    "color": "#dc3545"
  },
  "text-warning": {
    "color": "#ffc107"
  },
  "text-info": {
    "color": "#17a2b8"
  },
  "text-light": {
    "color": "#f8f9fa"
  },
  "text-dark": {
    "color": "#343a40"
  },
  "text-muted": {
    "color": "#6c757d"
  },
  "text-light-muted": {
    "color": "#B2B2B2"
  },
  "text-white": {
    "color": "#ffffff"
  },
  "bg-primary": {
    "backgroundColor": "#007bff"
  },
  "bg-secondary": {
    "backgroundColor": "#6c757d"
  },
  "bg-success": {
    "backgroundColor": "#6c757d"
  },
  "bg-danger": {
    "backgroundColor": "#dc3545"
  },
  "bg-warning": {
    "backgroundColor": "#ffc107"
  },
  "bg-info": {
    "backgroundColor": "#17a2b8"
  },
  "bg-light": {
    "backgroundColor": "#f8f9fa"
  },
  "bg-dark": {
    "backgroundColor": "#343a40"
  },
  "bg-white": {
    "backgroundColor": "#ffffff"
  },
  "m-0": {
    "marginLeft": 0,
    "marginRight": 0,
    "marginTop": 0,
    "marginBottom": 0
  },
  "m": {
    "marginLeft": "5",
    "marginRight": "5",
    "marginTop": "5",
    "marginBottom": "5"
  },
  "m-1": {
    "marginLeft": "10",
    "marginRight": "10",
    "marginTop": "10",
    "marginBottom": "10"
  },
  "m-2": {
    "marginLeft": "20",
    "marginRight": "20",
    "marginTop": "20",
    "marginBottom": "20"
  },
  "m-3": {
    "marginLeft": "30",
    "marginRight": "30",
    "marginTop": "30",
    "marginBottom": "30"
  },
  "m-4": {
    "marginLeft": "40",
    "marginRight": "40",
    "marginTop": "40",
    "marginBottom": "40"
  },
  "m-5": {
    "marginLeft": "50",
    "marginRight": "50",
    "marginTop": "50",
    "marginBottom": "50"
  },
  "mx-0": {
    "marginLeft": 0,
    "marginRight": 0
  },
  "mx": {
    "marginLeft": "5",
    "marginRight": "5"
  },
  "mx-1": {
    "marginLeft": "10",
    "marginRight": "10"
  },
  "mx-2": {
    "marginLeft": "20",
    "marginRight": "20"
  },
  "mx-3": {
    "marginLeft": "30",
    "marginRight": "30"
  },
  "mx-4": {
    "marginLeft": "40",
    "marginRight": "40"
  },
  "mx-5": {
    "marginLeft": "50",
    "marginRight": "50"
  },
  "my-0": {
    "marginTop": 0,
    "marginBottom": 0
  },
  "my": {
    "marginTop": "5",
    "marginBottom": "5"
  },
  "my-1": {
    "marginTop": "10",
    "marginBottom": "10"
  },
  "my-2": {
    "marginTop": "20",
    "marginBottom": "20"
  },
  "my-3": {
    "marginTop": "30",
    "marginBottom": "30"
  },
  "my-4": {
    "marginTop": "40",
    "marginBottom": "40"
  },
  "my-5": {
    "marginTop": "50",
    "marginBottom": "50"
  },
  "mt-0": {
    "marginTop": 0
  },
  "mt": {
    "marginTop": "5"
  },
  "mt-1": {
    "marginTop": "10"
  },
  "mt-2": {
    "marginTop": "20"
  },
  "mt-3": {
    "marginTop": "30"
  },
  "mt-4": {
    "marginTop": "40"
  },
  "mt-5": {
    "marginTop": "50"
  },
  "mb-0": {
    "marginBottom": 0
  },
  "mb": {
    "marginBottom": "5"
  },
  "mb-1": {
    "marginBottom": "10"
  },
  "mb-2": {
    "marginBottom": "20"
  },
  "mb-3": {
    "marginBottom": "30"
  },
  "mb-4": {
    "marginBottom": "40"
  },
  "mb-5": {
    "marginBottom": "50"
  },
  "ml-0": {
    "marginLeft": 0
  },
  "ml": {
    "marginLeft": "5"
  },
  "ml-1": {
    "marginLeft": "10"
  },
  "ml-2": {
    "marginLeft": "20"
  },
  "ml-3": {
    "marginLeft": "30"
  },
  "ml-4": {
    "marginLeft": "40"
  },
  "ml-5": {
    "marginLeft": "50"
  },
  "mr-0": {
    "marginRight": 0
  },
  "mr": {
    "marginRight": "5"
  },
  "mr-1": {
    "marginRight": "10"
  },
  "mr-2": {
    "marginRight": "20"
  },
  "mr-3": {
    "marginRight": "30"
  },
  "mr-4": {
    "marginRight": "40"
  },
  "mr-5": {
    "marginRight": "50"
  },
  "p-0": {
    "paddingLeft": 0,
    "paddingRight": 0,
    "paddingTop": 0,
    "paddingBottom": 0
  },
  "p": {
    "paddingLeft": "5",
    "paddingRight": "5",
    "paddingTop": "5",
    "paddingBottom": "5"
  },
  "p-1": {
    "paddingLeft": "10",
    "paddingRight": "10",
    "paddingTop": "10",
    "paddingBottom": "10"
  },
  "p-2": {
    "paddingLeft": "20",
    "paddingRight": "20",
    "paddingTop": "20",
    "paddingBottom": "20"
  },
  "p-3": {
    "paddingLeft": "30",
    "paddingRight": "30",
    "paddingTop": "30",
    "paddingBottom": "30"
  },
  "p-4": {
    "paddingLeft": "40",
    "paddingRight": "40",
    "paddingTop": "40",
    "paddingBottom": "40"
  },
  "p-5": {
    "paddingLeft": "50",
    "paddingRight": "50",
    "paddingTop": "50",
    "paddingBottom": "50"
  },
  "px-0": {
    "paddingLeft": 0,
    "paddingRight": 0
  },
  "px": {
    "paddingLeft": "5",
    "paddingRight": "5"
  },
  "px-1": {
    "paddingLeft": "10",
    "paddingRight": "10"
  },
  "px-2": {
    "paddingLeft": "20",
    "paddingRight": "20"
  },
  "px-3": {
    "paddingLeft": "30",
    "paddingRight": "30"
  },
  "px-4": {
    "paddingLeft": "40",
    "paddingRight": "40"
  },
  "px-5": {
    "paddingLeft": "50",
    "paddingRight": "50"
  },
  "py-0": {
    "paddingTop": 0,
    "paddingBottom": 0
  },
  "py": {
    "paddingTop": "5",
    "paddingBottom": "5"
  },
  "py-1": {
    "paddingTop": "10",
    "paddingBottom": "10"
  },
  "py-2": {
    "paddingTop": "20",
    "paddingBottom": "20"
  },
  "py-3": {
    "paddingTop": "30",
    "paddingBottom": "30"
  },
  "py-4": {
    "paddingTop": "40",
    "paddingBottom": "40"
  },
  "py-5": {
    "paddingTop": "50",
    "paddingBottom": "50"
  },
  "pt-0": {
    "paddingTop": 0
  },
  "pt": {
    "paddingTop": "5"
  },
  "pt-1": {
    "paddingTop": "10"
  },
  "pt-2": {
    "paddingTop": "20"
  },
  "pt-3": {
    "paddingTop": "30"
  },
  "pt-4": {
    "paddingTop": "40"
  },
  "pt-5": {
    "paddingTop": "50"
  },
  "pb-0": {
    "paddingBottom": 0
  },
  "pb": {
    "paddingBottom": "5"
  },
  "pb-1": {
    "paddingBottom": "10"
  },
  "pb-2": {
    "paddingBottom": "20"
  },
  "pb-3": {
    "paddingBottom": "30"
  },
  "pb-4": {
    "paddingBottom": "40"
  },
  "pb-5": {
    "paddingBottom": "50"
  },
  "pl-0": {
    "paddingLeft": 0
  },
  "pl": {
    "paddingLeft": "5"
  },
  "pl-1": {
    "paddingLeft": "10"
  },
  "pl-2": {
    "paddingLeft": "20"
  },
  "pl-3": {
    "paddingLeft": "30"
  },
  "pl-4": {
    "paddingLeft": "40"
  },
  "pl-5": {
    "paddingLeft": "50"
  },
  "pr-0": {
    "paddingRight": 0
  },
  "pr": {
    "paddingRight": "5"
  },
  "pr-1": {
    "paddingRight": "10"
  },
  "pr-2": {
    "paddingRight": "20"
  },
  "pr-3": {
    "paddingRight": "30"
  },
  "pr-4": {
    "paddingRight": "40"
  },
  "pr-5": {
    "paddingRight": "50"
  }
}

/***/ }),
/* 33 */
/*!*********************************************************************************************************************************!*\
  !*** C:/Users/hulincloud/Documents/HBuilderProjects/mishop/components/common/common-list.nvue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_common_list_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/vue-loader/lib??ref--4-0!./common-list.nvue?vue&type=style&index=0&lang=css& */ 34);
/* harmony import */ var _D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_common_list_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_common_list_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_common_list_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_common_list_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_common_list_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 34 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/vue-loader/lib??ref--4-0!C:/Users/hulincloud/Documents/HBuilderProjects/mishop/components/common/common-list.nvue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "common-list": {
    "paddingLeft": "2.5rpx",
    "paddingRight": "2.5rpx"
  },
  "common-list-cover": {
    "width": "370rpx",
    "height": "370rpx"
  },
  "common-list-lines": {
    "lines": 1
  }
}

/***/ }),
/* 35 */
/*!********************************************************************************************************************************!*\
  !*** C:/Users/hulincloud/Documents/HBuilderProjects/mishop/pages/index/index.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/vue-loader/lib??ref--4-0!./index.nvue?vue&type=style&index=0&lang=css&mpType=page */ 36);
/* harmony import */ var _D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 36 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/vue-loader/lib??ref--4-0!C:/Users/hulincloud/Documents/HBuilderProjects/mishop/pages/index/index.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "scroll-h": {
    "width": "750rpx",
    "height": "80rpx",
    "flexDirection": "row"
  },
  "swiper-box": {
    "flex": 1
  },
  "uni-tab-item": {
    "flexWrap": "nowrap",
    "paddingLeft": "34rpx",
    "paddingRight": "34rpx"
  },
  "uni-tab-item-title": {
    "color": "#555555",
    "fontSize": "30rpx",
    "height": "80rpx",
    "lineHeight": "80rpx",
    "flexWrap": "nowrap"
  },
  "uni-tab-item-title-active": {
    "color": "#FD6801",
    "borderBottomWidth": "2",
    "borderStyle": "solid",
    "borderBottomColor": "#FD6801"
  }
}

/***/ }),
/* 37 */
/*!*****************************************************************************************************!*\
  !*** C:/Users/hulincloud/Documents/HBuilderProjects/mishop/App.vue?vue&type=style&index=0&lang=css ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 38);
/* harmony import */ var _D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 38 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/hulincloud/Documents/HBuilderProjects/mishop/App.vue?vue&type=style&index=0&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "position-absolute": {
    "position": "absolute"
  },
  "position-fixed": {
    "position": "fixed"
  },
  "position-relative": {
    "position": "relative"
  },
  "left-0": {
    "left": 0
  },
  "top-0": {
    "top": 0
  },
  "bottom-0": {
    "bottom": 0
  },
  "right-0": {
    "right": 0
  },
  "w-100": {
    "width": "750rpx"
  },
  "w-50": {
    "width": "375rpx"
  },
  "h-100": {
    "height": "1250rpx"
  },
  "h-50": {
    "height": "625rpx"
  },
  "font": {
    "fontSize": "15"
  },
  "font-sm": {
    "fontSize": "18"
  },
  "font-md": {
    "fontSize": "30"
  },
  "font-lg": {
    "fontSize": "40"
  },
  "font-big": {
    "fontSize": "60"
  },
  "font-weight": {
    "fontWeight": "bold"
  },
  "font-weight-100": {
    "fontWeight": "100"
  },
  "line-through": {
    "textDecoration": "line-through"
  },
  "row": {
    "flexDirection": "row",
    "flexWrap": "wrap"
  },
  "col-1": {
    "width": "62.5rpx"
  },
  "col-2": {
    "width": "125rpx"
  },
  "col-3": {
    "width": "187.5rpx"
  },
  "col-4": {
    "width": "250rpx"
  },
  "col-5": {
    "width": "312.5rpx"
  },
  "col-6": {
    "width": "375rpx"
  },
  "col-7": {
    "width": "437.5rpx"
  },
  "col-8": {
    "width": "500rpx"
  },
  "col-9": {
    "width": "562.5rpx"
  },
  "col-10": {
    "width": "625rpx"
  },
  "col-11": {
    "width": "687.5rpx"
  },
  "col-12": {
    "width": "750rpx"
  },
  "flex-1": {
    "flex": 1
  },
  "flex-column": {
    "flexDirection": "column"
  },
  "flex-row": {
    "flexDirection": "row"
  },
  "flex-wrap": {
    "flexWrap": "wrap"
  },
  "flex-nowrap": {
    "flexWrap": "nowrap"
  },
  "j-start": {
    "justifyContent": "flex-start"
  },
  "j-center": {
    "justifyContent": "center"
  },
  "j-end": {
    "justifyContent": "flex-end"
  },
  "j-sb": {
    "justifyContent": "space-between"
  },
  "a-center": {
    "alignItems": "center"
  },
  "a-start": {
    "alignItems": "flex-start"
  },
  "a-end": {
    "alignItems": "flex-end"
  },
  "a-stretch": {
    "alignItems": "stretch"
  },
  "border": {
    "borderWidth": "1rpx",
    "borderStyle": "solid",
    "borderColor": "#dee2e6"
  },
  "border-top": {
    "borderTopWidth": "1rpx",
    "borderTopStyle": "solid",
    "borderTopColor": "#dee2e6"
  },
  "border-right": {
    "borderRightWidth": "1rpx",
    "borderRightStyle": "solid",
    "borderRightColor": "#dee2e6"
  },
  "border-bottom": {
    "borderBottomWidth": "1rpx",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#dee2e6"
  },
  "border-left": {
    "borderLeftWidth": "1rpx",
    "borderLeftStyle": "solid",
    "borderLeftColor": "#dee2e6"
  },
  "border-0": {
    "borderWidth": 0
  },
  "border-top-0": {
    "borderTopWidth": 0
  },
  "border-right-0": {
    "borderRightWidth": 0
  },
  "border-bottom-0": {
    "borderBottomWidth": 0
  },
  "border-left-0": {
    "borderLeftWidth": 0
  },
  "border-primary": {
    "borderColor": "#007bff"
  },
  "border-secondary": {
    "borderColor": "#6c757d"
  },
  "border-success": {
    "borderColor": "#6c757d"
  },
  "border-danger": {
    "borderColor": "#dc3545"
  },
  "border-warning": {
    "borderColor": "#ffc107"
  },
  "border-info": {
    "borderColor": "#17a2b8"
  },
  "border-light": {
    "borderColor": "#f8f9fa"
  },
  "border-dark": {
    "borderColor": "#343a40"
  },
  "border-white": {
    "borderColor": "#ffffff"
  },
  "border-light-secondary": {
    "borderColor": "#F1F1F1"
  },
  "radius": {
    "borderRadius": "5rpx"
  },
  "radius-circle": {
    "borderRadius": 100
  },
  "radius-0": {
    "borderRadius": 0
  },
  "text-primary": {
    "color": "#007bff"
  },
  "text-secondary": {
    "color": "#6c757d"
  },
  "text-success": {
    "color": "#6c757d"
  },
  "text-danger": {
    "color": "#dc3545"
  },
  "text-warning": {
    "color": "#ffc107"
  },
  "text-info": {
    "color": "#17a2b8"
  },
  "text-light": {
    "color": "#f8f9fa"
  },
  "text-dark": {
    "color": "#343a40"
  },
  "text-muted": {
    "color": "#6c757d"
  },
  "text-light-muted": {
    "color": "#B2B2B2"
  },
  "text-white": {
    "color": "#ffffff"
  },
  "bg-primary": {
    "backgroundColor": "#007bff"
  },
  "bg-secondary": {
    "backgroundColor": "#6c757d"
  },
  "bg-success": {
    "backgroundColor": "#6c757d"
  },
  "bg-danger": {
    "backgroundColor": "#dc3545"
  },
  "bg-warning": {
    "backgroundColor": "#ffc107"
  },
  "bg-info": {
    "backgroundColor": "#17a2b8"
  },
  "bg-light": {
    "backgroundColor": "#f8f9fa"
  },
  "bg-dark": {
    "backgroundColor": "#343a40"
  },
  "bg-white": {
    "backgroundColor": "#ffffff"
  },
  "m-0": {
    "marginLeft": 0,
    "marginRight": 0,
    "marginTop": 0,
    "marginBottom": 0
  },
  "m": {
    "marginLeft": "5rpx",
    "marginRight": "5rpx",
    "marginTop": "5rpx",
    "marginBottom": "5rpx"
  },
  "m-1": {
    "marginLeft": "10rpx",
    "marginRight": "10rpx",
    "marginTop": "10rpx",
    "marginBottom": "10rpx"
  },
  "m-2": {
    "marginLeft": "20rpx",
    "marginRight": "20rpx",
    "marginTop": "20rpx",
    "marginBottom": "20rpx"
  },
  "m-3": {
    "marginLeft": "30rpx",
    "marginRight": "30rpx",
    "marginTop": "30rpx",
    "marginBottom": "30rpx"
  },
  "m-4": {
    "marginLeft": "40rpx",
    "marginRight": "40rpx",
    "marginTop": "40rpx",
    "marginBottom": "40rpx"
  },
  "m-5": {
    "marginLeft": "50rpx",
    "marginRight": "50rpx",
    "marginTop": "50rpx",
    "marginBottom": "50rpx"
  },
  "mx-0": {
    "marginLeft": 0,
    "marginRight": 0
  },
  "mx": {
    "marginLeft": "5rpx",
    "marginRight": "5rpx"
  },
  "mx-1": {
    "marginLeft": "10rpx",
    "marginRight": "10rpx"
  },
  "mx-2": {
    "marginLeft": "20rpx",
    "marginRight": "20rpx"
  },
  "mx-3": {
    "marginLeft": "30rpx",
    "marginRight": "30rpx"
  },
  "mx-4": {
    "marginLeft": "40rpx",
    "marginRight": "40rpx"
  },
  "mx-5": {
    "marginLeft": "50rpx",
    "marginRight": "50rpx"
  },
  "my-0": {
    "marginTop": 0,
    "marginBottom": 0
  },
  "my": {
    "marginTop": "5rpx",
    "marginBottom": "5rpx"
  },
  "my-1": {
    "marginTop": "10rpx",
    "marginBottom": "10rpx"
  },
  "my-2": {
    "marginTop": "20rpx",
    "marginBottom": "20rpx"
  },
  "my-3": {
    "marginTop": "30rpx",
    "marginBottom": "30rpx"
  },
  "my-4": {
    "marginTop": "40rpx",
    "marginBottom": "40rpx"
  },
  "my-5": {
    "marginTop": "50rpx",
    "marginBottom": "50rpx"
  },
  "mt-0": {
    "marginTop": 0
  },
  "mt": {
    "marginTop": "5rpx"
  },
  "mt-1": {
    "marginTop": "10rpx"
  },
  "mt-2": {
    "marginTop": "20rpx"
  },
  "mt-3": {
    "marginTop": "30rpx"
  },
  "mt-4": {
    "marginTop": "40rpx"
  },
  "mt-5": {
    "marginTop": "50rpx"
  },
  "mb-0": {
    "marginBottom": 0
  },
  "mb": {
    "marginBottom": "5rpx"
  },
  "mb-1": {
    "marginBottom": "10rpx"
  },
  "mb-2": {
    "marginBottom": "20rpx"
  },
  "mb-3": {
    "marginBottom": "30rpx"
  },
  "mb-4": {
    "marginBottom": "40rpx"
  },
  "mb-5": {
    "marginBottom": "50rpx"
  },
  "ml-0": {
    "marginLeft": 0
  },
  "ml": {
    "marginLeft": "5rpx"
  },
  "ml-1": {
    "marginLeft": "10rpx"
  },
  "ml-2": {
    "marginLeft": "20rpx"
  },
  "ml-3": {
    "marginLeft": "30rpx"
  },
  "ml-4": {
    "marginLeft": "40rpx"
  },
  "ml-5": {
    "marginLeft": "50rpx"
  },
  "mr-0": {
    "marginRight": 0
  },
  "mr": {
    "marginRight": "5rpx"
  },
  "mr-1": {
    "marginRight": "10rpx"
  },
  "mr-2": {
    "marginRight": "20rpx"
  },
  "mr-3": {
    "marginRight": "30rpx"
  },
  "mr-4": {
    "marginRight": "40rpx"
  },
  "mr-5": {
    "marginRight": "50rpx"
  },
  "p-0": {
    "paddingLeft": 0,
    "paddingRight": 0,
    "paddingTop": 0,
    "paddingBottom": 0
  },
  "p": {
    "paddingLeft": "5rpx",
    "paddingRight": "5rpx",
    "paddingTop": "5rpx",
    "paddingBottom": "5rpx"
  },
  "p-1": {
    "paddingLeft": "10rpx",
    "paddingRight": "10rpx",
    "paddingTop": "10rpx",
    "paddingBottom": "10rpx"
  },
  "p-2": {
    "paddingLeft": "20rpx",
    "paddingRight": "20rpx",
    "paddingTop": "20rpx",
    "paddingBottom": "20rpx"
  },
  "p-3": {
    "paddingLeft": "30rpx",
    "paddingRight": "30rpx",
    "paddingTop": "30rpx",
    "paddingBottom": "30rpx"
  },
  "p-4": {
    "paddingLeft": "40rpx",
    "paddingRight": "40rpx",
    "paddingTop": "40rpx",
    "paddingBottom": "40rpx"
  },
  "p-5": {
    "paddingLeft": "50rpx",
    "paddingRight": "50rpx",
    "paddingTop": "50rpx",
    "paddingBottom": "50rpx"
  },
  "px-0": {
    "paddingLeft": 0,
    "paddingRight": 0
  },
  "px": {
    "paddingLeft": "5rpx",
    "paddingRight": "5rpx"
  },
  "px-1": {
    "paddingLeft": "10rpx",
    "paddingRight": "10rpx"
  },
  "px-2": {
    "paddingLeft": "20rpx",
    "paddingRight": "20rpx"
  },
  "px-3": {
    "paddingLeft": "30rpx",
    "paddingRight": "30rpx"
  },
  "px-4": {
    "paddingLeft": "40rpx",
    "paddingRight": "40rpx"
  },
  "px-5": {
    "paddingLeft": "50rpx",
    "paddingRight": "50rpx"
  },
  "plr-0": {
    "paddingLeft": 0,
    "paddingRight": 0
  },
  "plr-x": {
    "paddingLeft": "5rpx",
    "paddingRight": "5rpx"
  },
  "plr-1": {
    "paddingLeft": "10rpx",
    "paddingRight": "10rpx"
  },
  "plr-2": {
    "paddingLeft": "20rpx",
    "paddingRight": "20rpx"
  },
  "plr-3": {
    "paddingLeft": "30rpx",
    "paddingRight": "30rpx"
  },
  "plr-4": {
    "paddingLeft": "40rpx",
    "paddingRight": "40rpx"
  },
  "plr-5": {
    "paddingLeft": "50rpx",
    "paddingRight": "50rpx"
  },
  "py-0": {
    "paddingTop": 0,
    "paddingBottom": 0
  },
  "py": {
    "paddingTop": "5rpx",
    "paddingBottom": "5rpx"
  },
  "py-1": {
    "paddingTop": "10rpx",
    "paddingBottom": "10rpx"
  },
  "py-2": {
    "paddingTop": "20rpx",
    "paddingBottom": "20rpx"
  },
  "py-3": {
    "paddingTop": "30rpx",
    "paddingBottom": "30rpx"
  },
  "py-4": {
    "paddingTop": "40rpx",
    "paddingBottom": "40rpx"
  },
  "py-5": {
    "paddingTop": "50rpx",
    "paddingBottom": "50rpx"
  },
  "pt-0": {
    "paddingTop": 0
  },
  "pt": {
    "paddingTop": "5rpx"
  },
  "pt-1": {
    "paddingTop": "10rpx"
  },
  "pt-2": {
    "paddingTop": "20rpx"
  },
  "pt-3": {
    "paddingTop": "30rpx"
  },
  "pt-4": {
    "paddingTop": "40rpx"
  },
  "pt-5": {
    "paddingTop": "50rpx"
  },
  "pb-0": {
    "paddingBottom": 0
  },
  "pb": {
    "paddingBottom": "5rpx"
  },
  "pb-1": {
    "paddingBottom": "10rpx"
  },
  "pb-2": {
    "paddingBottom": "20rpx"
  },
  "pb-3": {
    "paddingBottom": "30rpx"
  },
  "pb-4": {
    "paddingBottom": "40rpx"
  },
  "pb-5": {
    "paddingBottom": "50rpx"
  },
  "pl-0": {
    "paddingLeft": 0
  },
  "pl": {
    "paddingLeft": "5rpx"
  },
  "pl-1": {
    "paddingLeft": "10rpx"
  },
  "pl-2": {
    "paddingLeft": "20rpx"
  },
  "pl-3": {
    "paddingLeft": "30rpx"
  },
  "pl-4": {
    "paddingLeft": "40rpx"
  },
  "pl-5": {
    "paddingLeft": "50rpx"
  },
  "pr-0": {
    "paddingRight": 0
  },
  "pr": {
    "paddingRight": "5rpx"
  },
  "pr-1": {
    "paddingRight": "10rpx"
  },
  "pr-2": {
    "paddingRight": "20rpx"
  },
  "pr-3": {
    "paddingRight": "30rpx"
  },
  "pr-4": {
    "paddingRight": "40rpx"
  },
  "pr-5": {
    "paddingRight": "50rpx"
  },
  "scroll-h": {
    "width": "750rpx",
    "height": "80rpx",
    "flexDirection": "row"
  },
  "divider": {
    "height": "18rpx",
    "backgroundColor": "#F5F5F5",
    "width": 100
  },
  "swiper-static": {
    "height": "8rpx",
    "backgroundColor": "#FD6801"
  },
  "tab-item-title": {
    "color": "#555555",
    "fontSize": "30rpx",
    "height": "80rpx",
    "lineHeight": "80rpx",
    "flexWrap": "nowrap"
  },
  "tab-item-title-active": {
    "color": "#FD6801",
    "borderBottomWidth": "2",
    "borderStyle": "solid",
    "borderBottomColor": "#FD6801"
  }
}

<<<<<<< HEAD
/***/ }),
/* 39 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 40);


/***/ }),
/* 40 */
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 41);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 41 */
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbCwid2VicGFjazovLy9DOi9Vc2Vycy9odWxpbmNsb3VkL0RvY3VtZW50cy9IQnVpbGRlclByb2plY3RzL21pc2hvcC9tYWluLmpzPzAzMzkiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL2h1bGluY2xvdWQvRG9jdW1lbnRzL0hCdWlsZGVyUHJvamVjdHMvbWlzaG9wL3BhZ2VzL2luZGV4L2luZGV4Lm52dWU/NTk4NSIsIndlYnBhY2s6Ly8vQzovVXNlcnMvaHVsaW5jbG91ZC9Eb2N1bWVudHMvSEJ1aWxkZXJQcm9qZWN0cy9taXNob3AvcGFnZXMvaW5kZXgvaW5kZXgubnZ1ZT8zOGQwIiwid2VicGFjazovLy9DOi9Vc2Vycy9odWxpbmNsb3VkL0RvY3VtZW50cy9IQnVpbGRlclByb2plY3RzL21pc2hvcC9wYWdlcy9pbmRleC9pbmRleC5udnVlP2UxNDQiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL2h1bGluY2xvdWQvRG9jdW1lbnRzL0hCdWlsZGVyUHJvamVjdHMvbWlzaG9wL3BhZ2VzL2luZGV4L2luZGV4Lm52dWU/ZTM2MyIsInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgubnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy91bmktYXBwLXBsdXMtbnZ1ZS12OC9kaXN0L2luZGV4LmpzPzk5MmEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvbGliL2Zvcm1hdC1sb2cuanM/MGRlOSIsIndlYnBhY2s6Ly8vQzovVXNlcnMvaHVsaW5jbG91ZC9Eb2N1bWVudHMvSEJ1aWxkZXJQcm9qZWN0cy9taXNob3AvY29tcG9uZW50cy9jb21tb24vZGl2aWRlci5udnVlPzg5YTUiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL2h1bGluY2xvdWQvRG9jdW1lbnRzL0hCdWlsZGVyUHJvamVjdHMvbWlzaG9wL2NvbXBvbmVudHMvY29tbW9uL2RpdmlkZXIubnZ1ZT9iNzA3Iiwid2VicGFjazovLy9DOi9Vc2Vycy9odWxpbmNsb3VkL0RvY3VtZW50cy9IQnVpbGRlclByb2plY3RzL21pc2hvcC9jb21wb25lbnRzL2NvbW1vbi9kaXZpZGVyLm52dWU/YTM5NCIsIndlYnBhY2s6Ly8vQzovVXNlcnMvaHVsaW5jbG91ZC9Eb2N1bWVudHMvSEJ1aWxkZXJQcm9qZWN0cy9taXNob3AvY29tcG9uZW50cy9jb21tb24vZGl2aWRlci5udnVlPzBjZjIiLCJ1bmktYXBwOi8vL2NvbXBvbmVudHMvY29tbW9uL2RpdmlkZXIubnZ1ZSIsIndlYnBhY2s6Ly8vQzovVXNlcnMvaHVsaW5jbG91ZC9Eb2N1bWVudHMvSEJ1aWxkZXJQcm9qZWN0cy9taXNob3AvY29tcG9uZW50cy9jb21tb24vZGl2aWRlci5udnVlPzdlNjIiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL2h1bGluY2xvdWQvRG9jdW1lbnRzL0hCdWlsZGVyUHJvamVjdHMvbWlzaG9wL2NvbXBvbmVudHMvY29tbW9uL2RpdmlkZXIubnZ1ZT82NDgzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanM/Mjg3NyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvaHVsaW5jbG91ZC9Eb2N1bWVudHMvSEJ1aWxkZXJQcm9qZWN0cy9taXNob3AvY29tcG9uZW50cy9jb21tb24vY2FyZC52dWU/Y2E0ZSIsIndlYnBhY2s6Ly8vQzovVXNlcnMvaHVsaW5jbG91ZC9Eb2N1bWVudHMvSEJ1aWxkZXJQcm9qZWN0cy9taXNob3AvY29tcG9uZW50cy9jb21tb24vY2FyZC52dWU/ZjA4OSIsIndlYnBhY2s6Ly8vQzovVXNlcnMvaHVsaW5jbG91ZC9Eb2N1bWVudHMvSEJ1aWxkZXJQcm9qZWN0cy9taXNob3AvY29tcG9uZW50cy9jb21tb24vY2FyZC52dWU/NDk2MyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvaHVsaW5jbG91ZC9Eb2N1bWVudHMvSEJ1aWxkZXJQcm9qZWN0cy9taXNob3AvY29tcG9uZW50cy9jb21tb24vY2FyZC52dWU/NDA4NCIsInVuaS1hcHA6Ly8vY29tcG9uZW50cy9jb21tb24vY2FyZC52dWUiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL2h1bGluY2xvdWQvRG9jdW1lbnRzL0hCdWlsZGVyUHJvamVjdHMvbWlzaG9wL2NvbXBvbmVudHMvY29tbW9uL2NvbW1vbi1saXN0Lm52dWU/MmQ4NSIsIndlYnBhY2s6Ly8vQzovVXNlcnMvaHVsaW5jbG91ZC9Eb2N1bWVudHMvSEJ1aWxkZXJQcm9qZWN0cy9taXNob3AvY29tcG9uZW50cy9jb21tb24vY29tbW9uLWxpc3QubnZ1ZT80NTFlIiwid2VicGFjazovLy9DOi9Vc2Vycy9odWxpbmNsb3VkL0RvY3VtZW50cy9IQnVpbGRlclByb2plY3RzL21pc2hvcC9jb21wb25lbnRzL2NvbW1vbi9jb21tb24tbGlzdC5udnVlPzIwZjkiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL2h1bGluY2xvdWQvRG9jdW1lbnRzL0hCdWlsZGVyUHJvamVjdHMvbWlzaG9wL2NvbXBvbmVudHMvY29tbW9uL2NvbW1vbi1saXN0Lm52dWU/N2VhOCIsInVuaS1hcHA6Ly8vY29tcG9uZW50cy9jb21tb24vY29tbW9uLWxpc3QubnZ1ZSIsIndlYnBhY2s6Ly8vQzovVXNlcnMvaHVsaW5jbG91ZC9Eb2N1bWVudHMvSEJ1aWxkZXJQcm9qZWN0cy9taXNob3AvY29tcG9uZW50cy9jb21tb24vcHJpY2UubnZ1ZT82NmZmIiwid2VicGFjazovLy9DOi9Vc2Vycy9odWxpbmNsb3VkL0RvY3VtZW50cy9IQnVpbGRlclByb2plY3RzL21pc2hvcC9jb21wb25lbnRzL2NvbW1vbi9wcmljZS5udnVlPzRjNjUiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL2h1bGluY2xvdWQvRG9jdW1lbnRzL0hCdWlsZGVyUHJvamVjdHMvbWlzaG9wL2NvbXBvbmVudHMvY29tbW9uL3ByaWNlLm52dWU/OThjMyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvaHVsaW5jbG91ZC9Eb2N1bWVudHMvSEJ1aWxkZXJQcm9qZWN0cy9taXNob3AvY29tcG9uZW50cy9jb21tb24vcHJpY2UubnZ1ZT84NmEzIiwidW5pLWFwcDovLy9jb21wb25lbnRzL2NvbW1vbi9wcmljZS5udnVlIiwid2VicGFjazovLy9DOi9Vc2Vycy9odWxpbmNsb3VkL0RvY3VtZW50cy9IQnVpbGRlclByb2plY3RzL21pc2hvcC9jb21tb24vemNtLW1haW4tbnZ1ZS5jc3M/MWU5OSIsIndlYnBhY2s6Ly8vQzovVXNlcnMvaHVsaW5jbG91ZC9Eb2N1bWVudHMvSEJ1aWxkZXJQcm9qZWN0cy9taXNob3AvY29tbW9uL3pjbS1tYWluLW52dWUuY3NzP2NkM2YiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL2h1bGluY2xvdWQvRG9jdW1lbnRzL0hCdWlsZGVyUHJvamVjdHMvbWlzaG9wL2NvbXBvbmVudHMvY29tbW9uL2NvbW1vbi1saXN0Lm52dWU/OTNmMiIsIndlYnBhY2s6Ly8vQzovVXNlcnMvaHVsaW5jbG91ZC9Eb2N1bWVudHMvSEJ1aWxkZXJQcm9qZWN0cy9taXNob3AvY29tcG9uZW50cy9jb21tb24vY29tbW9uLWxpc3QubnZ1ZT85NjQ3Iiwid2VicGFjazovLy9DOi9Vc2Vycy9odWxpbmNsb3VkL0RvY3VtZW50cy9IQnVpbGRlclByb2plY3RzL21pc2hvcC9wYWdlcy9pbmRleC9pbmRleC5udnVlPzljNGUiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL2h1bGluY2xvdWQvRG9jdW1lbnRzL0hCdWlsZGVyUHJvamVjdHMvbWlzaG9wL3BhZ2VzL2luZGV4L2luZGV4Lm52dWU/ZTg5ZiIsIndlYnBhY2s6Ly8vQzovVXNlcnMvaHVsaW5jbG91ZC9Eb2N1bWVudHMvSEJ1aWxkZXJQcm9qZWN0cy9taXNob3AvQXBwLnZ1ZT9hMmFjIiwid2VicGFjazovLy9DOi9Vc2Vycy9odWxpbmNsb3VkL0RvY3VtZW50cy9IQnVpbGRlclByb2plY3RzL21pc2hvcC9BcHAudnVlP2Q1OTEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzP2EzNGEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS1tb2R1bGUuanM/YmJkZCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzPzk2Y2YiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2pGc0Q7QUFDdEQsMkVBQUc7QUFDSCwyRUFBRztBQUNILDJFQUFHO0FBQ0gsMkVBQUc7QUFDSCw0QkFBNEIsbUJBQU8sQ0FBQyxtREFBMkMsVUFBVSwyRUFBRzs7QUFFNUYsUUFBUSwyRUFBRzs7Ozs7Ozs7Ozs7O0FDUlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFnRztBQUMzQjtBQUNMO0FBQ2hFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0IseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxT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O0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7OztBQ2hvQkE7QUFBQTtBQUFBO0FBQUE7QUFBcTBCLENBQWdCLHMxQkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7QUNBejFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7OztBQ1pBO0FBQUE7QUFBQTtBQUFBO0FBQTAwQixDQUFnQiwyMUJBQUcsRUFBQyxDOzs7Ozs7Ozs7O0FDQTkxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7O0FDM0JBO0FBQUE7QUFBQTtBQUFBO0FBQXEwQixDQUFnQix1MUJBQUcsRUFBQyxDOzs7Ozs7Ozs7O0FDQXoxQjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtB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QUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIIiwiZmlsZSI6InBhZ2VzL2luZGV4L2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiXG5pbXBvcnQgQXBwIGZyb20gJy4vcGFnZXMvaW5kZXgvaW5kZXgubnZ1ZT9tcFR5cGU9cGFnZSdcbkFwcC5tcFR5cGUgPSAncGFnZSdcbkFwcC5yb3V0ZSA9ICdwYWdlcy9pbmRleC9pbmRleCdcbkFwcC5lbCA9ICcjcm9vdCdcbkFwcC5hcHBTdHlsZSA9IHt9XG5WdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIpLmRlZmF1bHQsQXBwLmFwcFN0eWxlKVxuXG5uZXcgVnVlKEFwcClcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaW5kZXgubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lNDA5ZjU1YSZtcFR5cGU9cGFnZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZGV4Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLiRvcHRpb25zLnN0eWxlKXtcbiAgICB0aGlzLiRvcHRpb25zLnN0eWxlID0ge31cbn1cbmlmKHRoaXMuX19tZXJnZV9zdHlsZSAmJiB0aGlzLiRyb290ICYmIHRoaXMuJHJvb3QuJG9wdGlvbnMuYXBwU3R5bGUpe1xuICB0aGlzLl9fbWVyZ2Vfc3R5bGUodGhpcy4kcm9vdC4kb3B0aW9ucy5hcHBTdHlsZSlcbn1cbmlmKHRoaXMuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgIHRoaXMuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9pbmRleC5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdClcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLiRvcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL2luZGV4Lm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0KVxuICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIGluamVjdFN0eWxlcyxcbiAgbnVsbCxcbiAgXCIzZWQ5YjJmNVwiXG4gIFxuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkM6L1VzZXJzL2h1bGluY2xvdWQvRG9jdW1lbnRzL0hCdWlsZGVyUHJvamVjdHMvbWlzaG9wL3BhZ2VzL2luZGV4L2luZGV4Lm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclguMS44LjIuMjAxOTA0MDEuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxsb2FkZXJzXFxcXHRlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRDpcXFxcSEJ1aWxkZXJYLjEuOC4yLjIwMTkwNDAxLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcdGVtcGxhdGUuanMhRDpcXFxcSEJ1aWxkZXJYLjEuOC4yLjIwMTkwNDAxLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTctMCFEOlxcXFxIQnVpbGRlclguMS44LjIuMjAxOTA0MDEuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhLi9pbmRleC5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWU0MDlmNTVhJm1wVHlwZT1wYWdlXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwic2Nyb2xsLXZpZXdcIixcbiAgICB7XG4gICAgICBzdGF0aWNTdHlsZTogeyBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiIH0sXG4gICAgICBhdHRyczogeyBzY3JvbGxZOiB0cnVlLCBlbmFibGVCYWNrVG9Ub3A6IHRydWUsIGJ1YmJsZTogXCJ0cnVlXCIgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidmlld1wiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInNjcm9sbC12aWV3XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJzY3JvbGwtaFwiXSxcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBpZDogXCJ0YWItYmFyIHBvc2l0aW9uLWZpeGVkXCIsXG4gICAgICAgICAgICAgICAgc2Nyb2xsWDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzaG93U2Nyb2xsYmFyOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzY3JvbGxMZWZ0OiBfdm0uc2Nyb2xsbGVmdFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgX3ZtLl9sKF92bS50YWJCYXJzLCBmdW5jdGlvbih0YWIsIGluZGV4KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IHRhYi5pZCxcbiAgICAgICAgICAgICAgICAgIHJlZjogXCJ0YWJcIiArIGluZGV4LFxuICAgICAgICAgICAgICAgICAgcmVmSW5Gb3I6IHRydWUsXG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1widW5pLXRhYi1pdGVtXCJdLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IHRhYi5pZCwgZGF0YUN1cnJlbnQ6IGluZGV4IH0sXG4gICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLm9udGFidGFwIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInUtdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcInVuaS10YWItaXRlbS10aXRsZVwiXSxcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS50YWJJbmRleCA9PSBpbmRleCA/IFwidW5pLXRhYi1pdGVtLXRpdGxlLWFjdGl2ZVwiIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyh0YWIubmFtZSkpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIDBcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJzd2lwZXJcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcInN3aXBlci1ib3hcIl0sXG4gICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGhlaWdodDogXCI1NTBweFwiIH0sXG4gICAgICAgICAgICAgIGF0dHJzOiB7IGN1cnJlbnQ6IF92bS50YWJJbmRleCwgZHVyYXRpb246IDMwMCB9LFxuICAgICAgICAgICAgICBvbjogeyBjaGFuZ2U6IF92bS5vbnRhYmNoYW5nZSwgdG91Y2htb3ZlOiBfdm0udG91Y2ggfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF92bS5fbChfdm0udGFiQmFycywgZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgIFwic3dpcGVyLWl0ZW1cIixcbiAgICAgICAgICAgICAgICB7IGtleTogaW5kZXgsIHN0YXRpY0NsYXNzOiBbXCJmbGV4LTFcIl0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcInN3aXBlci1pdGVtXCJdIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3dpcGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kaWNhdG9yRG90czogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnZhbDogMzAwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTAwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaXJjdWxhcjogXCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uY2Fyb3VzZWxMaXN0LCBmdW5jdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2Fyb3VzZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhcm91c2VsSW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzd2lwZXItaXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiBjYXJvdXNlbEluZGV4IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ1LWltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcIjM1MHVweFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBfdm0uc2VydmVyVXJsICsgY2Fyb3VzZWwuY2hhcnRQYXRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhenlMb2FkOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcInctMTAwXCIsIFwicm93XCIsIFwicHgtMlwiLCBcIm14LTJcIl0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uaWNvbmRhdGEsIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcImotY2VudGVyXCIsIFwiYS1jZW50ZXJcIiwgXCJtdC0zXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgd2lkdGg6IFwiMTQydXB4XCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ1LWltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI1OHVweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI1OHVweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogaXRlbS5zcmMsIG1vZGU6IFwid2lkdGhGaXhcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInUtdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJmb250XCIsIFwidGV4dC1tdXRlZFwiLCBcIm10LTFcIl0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoaXRlbS5uYW1lKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZpZGVyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJmbGV4LXJvd1wiLCBcIm10LTJcIl0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ1LWltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMzczcnB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNTMwcnB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSaWdodDogXCIydXB4IHNvbGlkICNGNUY1RjVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogXCIuLi8uLi9zdGF0aWMvaW1hZ2UvaW1hZ2VzL2RlbW8vZGVtbzEuanBnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXp5TG9hZDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcImZsZXgtY29sdW1uXCJdIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ1LWltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIzNzVycHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMjY3cnB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tOiBcIjJycHggc29saWQgI0Y1RjVGNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIuLi8uLi9zdGF0aWMvaW1hZ2UvaW1hZ2VzL2RlbW8vZGVtbzIuanBnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInUtaW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjM3NXJweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIyNjRycHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLi4vLi4vc3RhdGljL2ltYWdlL2ltYWdlcy9kZW1vL2RlbW8zLmpwZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJyb3dcIiwgXCJqdXN0aWZ5LWJldHdlZW5cIiwgXCJ3LTEwMFwiXSB9LFxuICAgICAgICAgICAgX3ZtLl9sKF92bS5jb21tb25MaXN0LCBmdW5jdGlvbihpdGVtLCBpdGVtSW5kZXgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgICAgIHsga2V5OiBpdGVtSW5kZXggfSxcbiAgICAgICAgICAgICAgICBbX2MoXCJzaG9wLWxpc3RcIiwgeyBhdHRyczogeyBpdGVtOiBpdGVtLCBpbmRleDogaXRlbUluZGV4IH0gfSldLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAwXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclguMS44LjIuMjAxOTA0MDEuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTMtMCFEOlxcXFxIQnVpbGRlclguMS44LjIuMjAxOTA0MDEuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tMy0xIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCEuL2luZGV4Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclguMS44LjIuMjAxOTA0MDEuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTMtMCFEOlxcXFxIQnVpbGRlclguMS44LjIuMjAxOTA0MDEuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tMy0xIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCEuL2luZGV4Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiIsIjx0ZW1wbGF0ZT5cclxuICAgIDx2aWV3PlxyXG4gICAgICAgIDxzY3JvbGwtdmlldyBpZD1cInRhYi1iYXIgcG9zaXRpb24tZml4ZWRcIiBjbGFzcz1cInNjcm9sbC1oXCIgOnNjcm9sbC14PVwidHJ1ZVwiIDpzaG93LXNjcm9sbGJhcj1cImZhbHNlXCIgOnNjcm9sbC1sZWZ0PVwic2Nyb2xsbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgPHZpZXcgdi1mb3I9XCIodGFiLGluZGV4KSBpbiB0YWJCYXJzXCIgOmtleT1cInRhYi5pZFwiIDpyZWY9XCJgdGFiJHtpbmRleH1gXCIgY2xhc3M9XCJ1bmktdGFiLWl0ZW1cIiA6aWQ9XCJ0YWIuaWRcIiA6ZGF0YS1jdXJyZW50PVwiaW5kZXhcIiBAY2xpY2s9XCJvbnRhYnRhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwidW5pLXRhYi1pdGVtLXRpdGxlXCIgOmNsYXNzPVwidGFiSW5kZXg9PWluZGV4ID8gJ3VuaS10YWItaXRlbS10aXRsZS1hY3RpdmUnIDogJydcIj57e3RhYi5uYW1lfX08L3RleHQ+XHJcbiAgICAgICAgICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgPC9zY3JvbGwtdmlldz5cclxuICAgICAgICA8IS0tIOa7keWdlyAtLT5cclxuICAgICAgPCEtLSBHRyDnvJbnoIHlpLHotKUgLS0+XHJcbiAgICAgICAgICAgIDwhLS0gPHZpZXcgY2xhc3M9XCJzd2lwZXItc3RhdGljIG1sLTJcIiBzdHlsZT1cIndpZHRoOiAxMDB1cHg7XCI+XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L3ZpZXc+IC0tPlxyXG4gICAgICBcclxuICAgICAgICA8IS0tIOa7keWKqOa4suafkyAtLT5cclxuICAgICAgICA8c3dpcGVyIDpjdXJyZW50PVwidGFiSW5kZXhcIiBjbGFzcz1cInN3aXBlci1ib3hcIiA6ZHVyYXRpb249XCIzMDBcIiBAY2hhbmdlPVwib250YWJjaGFuZ2VcIiBzdHlsZT1cImhlaWdodDogNTUwcHg7XCIgQHRvdWNobW92ZT1cInRvdWNoXCI+XHJcbiAgICAgICAgICAgIDxzd2lwZXItaXRlbSBjbGFzcz1cImZsZXgtMVwiIHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIHRhYkJhcnNcIiA6a2V5PVwiaW5kZXhcIj5cclxuICAgICAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwic3dpcGVyLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tIOi9ruaSreWbviAtLT5cclxuICAgICAgICAgICAgPHN3aXBlciA6aW5kaWNhdG9yLWRvdHM9XCJ0cnVlXCIgOmF1dG9wbGF5PVwidHJ1ZVwiIDppbnRlcnZhbD1cIjMwMDBcIiA6ZHVyYXRpb249XCIxMDAwXCIgY2lyY3VsYXI9XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICA8c3dpcGVyLWl0ZW0gdi1mb3I9XCIoY2Fyb3VzZWwsIGNhcm91c2VsSW5kZXgpIGluIGNhcm91c2VsTGlzdFwiIDprZXk9XCJjYXJvdXNlbEluZGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltYWdlIDpzcmM9XCJzZXJ2ZXJVcmwgKyBjYXJvdXNlbC5jaGFydFBhdGhcIiBsYXp5LWxvYWQ9XCJ0cnVlXCIgc3R5bGU9XCJoZWlnaHQ6IDM1MHVweDtcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuICAgICAgICAgICAgICAgIDwvc3dpcGVyLWl0ZW0+XHJcbiAgICAgICAgICAgIDwvc3dpcGVyPlxyXG4gICAgICAgICAgICAgPCEtLSDlip/og73liIblnZcgLS0+XHJcbiAgICAgICAgICAgICA8dmlldyBjbGFzcz1cInctMTAwIHJvdyBweC0yIG14LTJcIiA+XHJcbiAgICAgICAgICAgICAgICA8dmlldyBjbGFzcz1cImotY2VudGVyIGEtY2VudGVyIG10LTNcIiBzdHlsZT1cIndpZHRoOiAxNDJ1cHg7XCIgdi1mb3I9XCIoaXRlbSxpbmRleCkgaW4gaWNvbmRhdGFcIiA6a2V5PVwiaW5kZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1hZ2UgOnNyYz1cIml0ZW0uc3JjXCIgbW9kZT1cIndpZHRoRml4XCIgc3R5bGU9XCJ3aWR0aDogNTh1cHg7aGVpZ2h0OiA1OHVweDtcIj48L2ltYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiZm9udCB0ZXh0LW11dGVkIG10LTFcIj57e2l0ZW0ubmFtZX19PC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgPC92aWV3PiBcclxuICAgICAgICAgICAgIDwvdmlldz5cclxuICAgICAgICAgICAgIDwhLS0g5YiG5Ymy57q/IC0tPlxyXG4gICAgICAgICAgICAgPGRpdmlkZXIgLz5cclxuICAgICAgICAgICAgIDwhLS0g5LiJ5Zu+IC0tPlxyXG4gICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJmbGV4LXJvdyBtdC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgPGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZS9pbWFnZXMvZGVtby9kZW1vMS5qcGdcIiBsYXp5LWxvYWQgc3R5bGU9XCJ3aWR0aDogMzczcnB4OyBoZWlnaHQ6IDUzMHJweDtib3JkZXItcmlnaHQ6IDJ1cHggc29saWQgI0Y1RjVGNTtcIj48L2ltYWdlPlxyXG4gICAgICAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwiZmxleC1jb2x1bW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgPGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZS9pbWFnZXMvZGVtby9kZW1vMi5qcGdcIiBzdHlsZT1cIndpZHRoOiAzNzVycHg7aGVpZ2h0OiAyNjdycHg7Ym9yZGVyLWJvdHRvbTogMnJweCBzb2xpZCAjRjVGNUY1O1wiPjwvaW1hZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2UvaW1hZ2VzL2RlbW8vZGVtbzMuanBnXCIgc3R5bGU9XCJ3aWR0aDogMzc1cnB4O2hlaWdodDogMjY0cnB4O1wiPjwvaW1hZ2U+XHJcbiAgICAgICAgICAgICAgICAgPC92aWV3PlxyXG4gICAgICAgICAgICAgPC92aWV3PlxyXG4gICAgICAgICAgICAgICAgPC92aWV3PlxyXG4gICAgICAgICAgICA8L3N3aXBlci1pdGVtPlxyXG4gICAgICAgIDwvc3dpcGVyPlxyXG4gICAgICAgIDwhLS0g5YiX6KGoIC0tPlxyXG4gICAgICAgIDx2aWV3IGNsYXNzPVwicm93IGp1c3RpZnktYmV0d2VlbiB3LTEwMFwiPlxyXG4gICAgICAgICAgICA8dmlldyB2LWZvcj1cIihpdGVtLCBpdGVtSW5kZXgpIGluIGNvbW1vbkxpc3RcIiA6a2V5PVwiaXRlbUluZGV4XCI+XHJcbiAgICAgICAgICAgICAgICA8c2hvcC1saXN0IDppdGVtPVwiaXRlbVwiIDppbmRleD1cIml0ZW1JbmRleFwiIC8+XHJcbiAgICAgICAgICAgIDwvdmlldz5cclxuICAgICAgICA8L3ZpZXc+XHJcbiAgICA8L3ZpZXc+XHJcbiAgIFxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IGRpdmlkZXIgZnJvbSBcIkAvY29tcG9uZW50cy9jb21tb24vZGl2aWRlci5udnVlXCJcclxuaW1wb3J0IGNhcmQgZnJvbSAnQC9jb21wb25lbnRzL2NvbW1vbi9jYXJkLnZ1ZSc7XHJcbmltcG9ydCBzaG9wTGlzdCBmcm9tIFwiQC9jb21wb25lbnRzL2NvbW1vbi9jb21tb24tbGlzdC5udnVlXCJcclxuY29uc3QgZG9tID0gd2VleC5yZXF1aXJlTW9kdWxlKCdkb20nKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgY29tcG9uZW50czp7XHJcbiAgICAgICAgZGl2aWRlcixcclxuICAgICAgICBjYXJkLFxyXG4gICAgICAgIHNob3BMaXN0XHJcbiAgICB9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgY2Fyb3VzZWxMaXN0OiBbXSxcclxuICAgICAgICAgICAgICAgIHNjcm9sbGxlZnQ6MCxcclxuICAgICAgICAgICAgICAgIGRldmljZUluZm86IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBzZXJ2ZXJVcmwgOiBcImh0dHA6Ly8xOTIuMTY4LjIuMjMzOjgwODFcIixcclxuICAgICAgICAgICAgICAgIGljb25kYXRhIDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgc3JjOlwiL3N0YXRpYy9pbWFnZS9pbWFnZXMvaW5kZXhuYXYvMS5wbmdcIixuYW1lOlwi5paw5ZOB5Y+R5biDXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHNyYzpcIi9zdGF0aWMvaW1hZ2UvaW1hZ2VzL2luZGV4bmF2LzIuZ2lmXCIsbmFtZTpcIuWwj+exs+S8l+etuVwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBzcmM6XCIvc3RhdGljL2ltYWdlL2ltYWdlcy9pbmRleG5hdi8zLmdpZlwiLG5hbWU6XCLku6Xml6fmjaLmlrBcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgc3JjOlwiL3N0YXRpYy9pbWFnZS9pbWFnZXMvaW5kZXhuYXYvNC5naWZcIixuYW1lOlwi5LiA5YiG5o2i5ZuiXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHNyYzpcIi9zdGF0aWMvaW1hZ2UvaW1hZ2VzL2luZGV4bmF2LzUuZ2lmXCIsbmFtZTpcIui2heWAvOeJueWNllwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBzcmM6XCIvc3RhdGljL2ltYWdlL2ltYWdlcy9pbmRleG5hdi82LmdpZlwiLG5hbWU6XCLlsI/nsbPnp5LmnYBcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgc3JjOlwiL3N0YXRpYy9pbWFnZS9pbWFnZXMvaW5kZXhuYXYvNy5naWZcIixuYW1lOlwi55yf5b+D5oOz6KaBXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHNyYzpcIi9zdGF0aWMvaW1hZ2UvaW1hZ2VzL2luZGV4bmF2LzguZ2lmXCIsbmFtZTpcIueUteinhueDreWNllwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBzcmM6XCIvc3RhdGljL2ltYWdlL2ltYWdlcy9pbmRleG5hdi85LmdpZlwiLG5hbWU6XCLlrrbnlLXng63ljZZcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgc3JjOlwiL3N0YXRpYy9pbWFnZS9pbWFnZXMvaW5kZXhuYXYvMTAuZ2lmXCIsbmFtZTpcIuexs+eyieWNoVwiIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBjb21tb25MaXN0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3ZlcjogJy4uLy4uL3N0YXRpYy9pbWFnZS9pbWFnZXMvZGVtby9jYXRlXzAxLnBuZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn546L5rqQVjgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjOiAn6L+Z6aKc5YC85L2g5LiN5Lmw77yfJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ByaWNlOiA5OTk5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcHJpY2U6IDk5OFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3ZlcjogJy4uLy4uL3N0YXRpYy9pbWFnZS9pbWFnZXMvZGVtby9jYXRlXzAxLnBuZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn546L5rqQVjgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjOiAn6L+Z6aKc5YC85L2g5LiN5Lmw77yfJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ByaWNlOiA5OTk5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcHJpY2U6IDk5OFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3ZlcjogJy4uLy4uL3N0YXRpYy9pbWFnZS9pbWFnZXMvZGVtby9jYXRlXzAxLnBuZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn546L5rqQVjgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjOiAn6L+Z6aKc5YC85L2g5LiN5Lmw77yfJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ByaWNlOiA5OTk5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcHJpY2U6IDk5OFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3ZlcjogJy4uLy4uL3N0YXRpYy9pbWFnZS9pbWFnZXMvZGVtby9jYXRlXzAxLnBuZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn546L5rqQVjgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjOiAn6L+Z6aKc5YC85L2g5LiN5Lmw77yfJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ByaWNlOiA5OTk5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcHJpY2U6IDk5OFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3ZlcjogJy4uLy4uL3N0YXRpYy9pbWFnZS9pbWFnZXMvZGVtby9jYXRlXzAxLnBuZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn546L5rqQVjgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjOiAn6L+Z6aKc5YC85L2g5LiN5Lmw77yfJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ByaWNlOiA5OTk5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcHJpY2U6IDk5OFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3ZlcjogJy4uLy4uL3N0YXRpYy9pbWFnZS9pbWFnZXMvZGVtby9jYXRlXzAxLnBuZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn546L5rqQVjgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjOiAn6L+Z6aKc5YC85L2g5LiN5Lmw77yfJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ByaWNlOiA5OTk5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcHJpY2U6IDk5OFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICB0YWJJbmRleDogMCxcclxuICAgICAgICAgICAgICAgIHRhYkJhcnM6W1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ+WFs+azqCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAnZ3VhbnpodSdcclxuICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICfmjqjojZAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogJ3R1aWppYW4nXHJcbiAgICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAn5L2T6IKyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICd0aXl1J1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ+eDreeCuScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAncmVkaWFuJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ+i0oue7jycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAnY2FpamluZydcclxuICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICflqLHkuZAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogJ3l1bGUnXHJcbiAgICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAn5Yab5LqLJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICdqdW5zaGknXHJcbiAgICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAn5Y6G5Y+yJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICdsaXNoaSdcclxuICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICfmnKzlnLAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogJ2JlbmRpJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBzY3JvbGxJbnRvOjBcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICAgbGV0IG1lID0gdGhpcztcclxuICAgICAgICAgcGx1cy5kZXZpY2UuZ2V0SW5mbyh7XHJcbiAgICAgICAgICAgIGFzeW5jIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuaW1laSk7XHJcbiAgICAgICAgICAgICAgICBtZS5kZXZpY2VJbmZvID0gcmVzLmltZWkgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZW11aSA9IHRoaXMuZGV2aWNlSW5mby5zcGxpdChcIixcIilcclxuICAgICAgICB9LDUwMClcclxuICAgICAgICB1bmkub25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkKCgpPT4ge1xyXG4gICAgICAgICAgICB1bmkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICB1cmw6XCIuLi9zZWFyY2gvc2VhcmNoXCJcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgXHJcbiAgICAgICAgbGV0IHhociA9IG5ldyBwbHVzLm5ldC5YTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIHhoci5vcGVuKCdQT1NUJywgJ2h0dHA6Ly8xOTIuMTY4LjIuMjMzOjgwODEvaW5kZXgvY2Fyb3VzZWwvbGlzdCcpXHJcbiAgICAgICAgLy8g6Kem5Y+RY2hhbmdl5LqL5Lu2XHJcbiAgICAgICAgeGhyLnNlbmQoKTtcclxuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge3N3aXRjaCAoIHhoci5yZWFkeVN0YXRlICkge1xyXG5cdFx0Y2FzZSA0OlxyXG5cdFx0XHRpZiAoIHhoci5zdGF0dXMgPT0gMjAwICkge1xyXG5cdFx0XHRcdC8vIG1lLmNhcm91c2VsTGlzdD0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KS5kYXRhLmRhdGEucm93cztcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgIG1lLmNhcm91c2VsTGlzdCA9IGRhdGEuZGF0YS5yb3dzO1xyXG4gICAgICAgICAgICAgICAgXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coIFwieGhy6K+35rGC5aSx6LSl77yaXCIreGhyLnJlYWR5U3RhdGUgKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGRlZmF1bHQgOlxyXG5cdFx0XHRicmVhaztcclxuXHR9fVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHZhciBjdXJyZW50V2VidmlldyA9IHRoaXMuJG1wLnBhZ2UuJGdldEFwcFdlYnZpZXcoKTtcclxuICAgICAgICAvLyBsZXQgdG4gPSBjdXJyZW50V2Vidmlldy5nZXRTdHlsZSgpLnRpdGxlTlZpZXc7XHJcbiAgICAgICAgLy8gdG4uc2VhcmNoSW5wdXQucGxhY2Vob2xkZXIgPSAnR2VtaW5pJztcclxuICAgICAgICAvLyBjdXJyZW50V2Vidmlldy5zZXRTdHlsZSh7XHJcbiAgICAgICAgLy8gICAgIHRpdGxlTlZpZXc6IHRuXHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coY3VycmVudFdlYnZpZXcuZ2V0U3R5bGUoKS50aXRsZU5WaWV3KTtcclxuICAgICAgICAvLyBjdXJyZW50V2Vidmlldy5zZXRUaXRsZU5WaWV3U2VhcmNoSW5wdXRUZXh0KFwiaGVsbG9cIilcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50V2Vidmlldy5nZXRUaXRsZU5WaWV3U2VhcmNoSW5wdXRUZXh0KCkpO1xyXG4gICAgXHJcblxyXG4gICAgfVxyXG4gICAgLFxyXG4gICAgbWV0aG9kczp7XHJcbiAgICAgICAgdG91Y2goZSl7XHJcbiAgICAgICAgICB0aGlzLm1hcmdpbkxlZnQgKz0gMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbG93ZXIoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9udGFidGFwKGUpIHtcclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gZS50YXJnZXQuZGF0YXNldC5jdXJyZW50IHx8IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmN1cnJlbnQ7XHJcbiAgICAgICAgICAgIHRoaXMudGFiSW5kZXggPSBpbmRleFxyXG4gICAgICAgICAgICAvLyB0aGlzLnN3aXRjaFRhYihpbmRleCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbnRhYmNoYW5nZShlKSB7XHJcbiAgICAgICAgICAgIGxldCBpbmRleCA9IGUudGFyZ2V0LmN1cnJlbnQgfHwgZS5kZXRhaWwuY3VycmVudDtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaW5kZXgpO1xyXG4gICAgICAgICAgICB0aGlzLnRhYkluZGV4ID0gaW5kZXhcclxuICAgICAgICAgICAgY29uc29sZS5sb2coaW5kZXgpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnN3aXRjaFRhYihpbmRleCk7XHJcbiAgICAgICAgICAgIGlmKGluZGV4LTUgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxsZWZ0ICs9IDYwXHJcbiAgICAgICAgICAgICAgICB9LDEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgfVxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuICAgIC5zY3JvbGwtaCB7XHJcbiAgICAgICAgd2lkdGg6IDc1MHVweDtcclxuICAgICAgICBoZWlnaHQ6IDgwdXB4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgLyogI2lmbmRlZiBBUFAtUExVUyAqL1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgLyogI2VuZGlmICovXHJcbiAgICB9XHJcbiAgICAuc3dpcGVyLWJveCB7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgIH1cclxuICAgIC51bmktdGFiLWl0ZW0ge1xyXG4gICAgICAgIC8qICNpZm5kZWYgQVBQLVBMVVMgKi9cclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgLyogI2VuZGlmICovXHJcbiAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzNHVweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzNHVweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnVuaS10YWItaXRlbS10aXRsZSB7XHJcbiAgICAgICAgY29sb3I6ICM1NTU7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHVweDtcclxuICAgICAgICBoZWlnaHQ6IDgwdXB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA4MHVweDtcclxuICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgICAgICAvKiAjaWZuZGVmIEFQUC1QTFVTICovXHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAvKiAjZW5kaWYgKi9cclxuICAgIH1cclxuICAgIFxyXG4gICAgLnVuaS10YWItaXRlbS10aXRsZS1hY3RpdmUge1xyXG4gICAgICAgIGNvbG9yOiAjRkQ2ODAxO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcclxuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNGRDY4MDE7XHJcbiAgICB9XHJcbjwvc3R5bGU+XG4iLCJmdW5jdGlvbiBpbml0VW5pKCkge1xyXG5cclxuICAgIHZhciBpc0ZuID0gZnVuY3Rpb24gaXNGbih2KSB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2ID09PSAnZnVuY3Rpb24nO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgaGFuZGxlUHJvbWlzZSA9IGZ1bmN0aW9uIGhhbmRsZVByb21pc2UocHJvbWlzZSkge1xyXG4gICAgICAgIHJldHVybiBwcm9taXNlLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICByZXR1cm4gW251bGwsIGRhdGFdO1xyXG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycikge1xyXG4gICAgICAgICAgICByZXR1cm4gW2Vycl07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBSRUdFWCA9IC9eXFwkfF5vbnxeY3JlYXRlfFN5bmMkfE1hbmFnZXIkfF5wYXVzZS87XHJcbiAgICB2YXIgQVBJX05PUk1BTF9MSVNUID0gWydvcycsICdnZXRDdXJyZW50U3ViTlZ1ZScsICdnZXRTdWJOVnVlQnlJZCcsICdzdG9wUmVjb3JkJywgJ3N0b3BWb2ljZScsXHJcbiAgICAgICAgJ3N0b3BCYWNrZ3JvdW5kQXVkaW8nLCAnc3RvcFB1bGxEb3duUmVmcmVzaCcsICdoaWRlS2V5Ym9hcmQnLCAnaGlkZVRvYXN0JywgJ2hpZGVMb2FkaW5nJyxcclxuICAgICAgICAnc2hvd05hdmlnYXRpb25CYXJMb2FkaW5nJywgJ2hpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZycsICdjYW5JVXNlJywgJ25hdmlnYXRlQmFjaycsICdjbG9zZVNvY2tldCcsXHJcbiAgICAgICAgJ3BhZ2VTY3JvbGxUbycsICdkcmF3Q2FudmFzJ1xyXG4gICAgXTtcclxuXHJcbiAgICB2YXIgc2hvdWxkUHJvbWlzZSA9IGZ1bmN0aW9uIHNob3VsZFByb21pc2UobmFtZSkge1xyXG4gICAgICAgIGlmIChSRUdFWC50ZXN0KG5hbWUpICYmIG5hbWUgIT09ICdjcmVhdGVCTEVDb25uZWN0aW9uJykge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh+QVBJX05PUk1BTF9MSVNULmluZGV4T2YobmFtZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIHByb21pc2lmeSA9IGZ1bmN0aW9uIHByb21pc2lmeShhcGkpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBwYXJhbXMgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXNbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNGbihvcHRpb25zLnN1Y2Nlc3MpIHx8IGlzRm4ob3B0aW9ucy5mYWlsKSB8fCBpc0ZuKG9wdGlvbnMuY29tcGxldGUpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXBpLmFwcGx5KHVuZGVmaW5lZCwgW29wdGlvbnNdLmNvbmNhdChwYXJhbXMpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlUHJvbWlzZShuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgICAgIGFwaS5hcHBseSh1bmRlZmluZWQsIFtPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzb2x2ZSxcclxuICAgICAgICAgICAgICAgICAgICBmYWlsOiByZWplY3RcclxuICAgICAgICAgICAgICAgIH0pXS5jb25jYXQocGFyYW1zKSk7XHJcbiAgICAgICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1leHRlbmQtbmF0aXZlICovXHJcbiAgICAgICAgICAgICAgICBQcm9taXNlLnByb3RvdHlwZS5maW5hbGx5ID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvbWlzZSA9IHRoaXMuY29uc3RydWN0b3I7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudGhlbihmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uKHJlYXNvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyByZWFzb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBvbk1lc3NhZ2VDYWxsYmFja3MgPSBbXTtcclxuXHJcbiAgICB2YXIgb3JpZ2luID0gdm9pZCAwO1xyXG5cclxuICAgIGZ1bmN0aW9uIG9uU3ViTlZ1ZU1lc3NhZ2UoZGF0YSkge1xyXG4gICAgICAgIG9uTWVzc2FnZUNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayh7XHJcbiAgICAgICAgICAgICAgICBvcmlnaW46IG9yaWdpbixcclxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHdlYnZpZXdJZCA9IHdlZXhQbHVzLndlYnZpZXcuY3VycmVudFdlYnZpZXcoKS5pZDtcclxuXHJcbiAgICB2YXIgY2hhbm5lbCA9IG5ldyBCcm9hZGNhc3RDaGFubmVsKCdVTkktQVBQLVNVQk5WVUUnKTtcclxuICAgIGNoYW5uZWwub25tZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQuZGF0YS50byA9PT0gd2Vidmlld0lkKSB7XHJcbiAgICAgICAgICAgIG9uU3ViTlZ1ZU1lc3NhZ2UoZXZlbnQuZGF0YS5kYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIHdyYXBwZXIod2Vidmlldykge1xyXG4gICAgICAgIHdlYnZpZXcuJHByb2Nlc3NlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIHZhciBjdXJyZW50V2Vidmlld0lkID0gd2VleFBsdXMud2Vidmlldy5jdXJyZW50V2VidmlldygpLmlkO1xyXG4gICAgICAgIHZhciBpc1BvcHVwTlZ1ZSA9IGN1cnJlbnRXZWJ2aWV3SWQgPT09IHdlYnZpZXcuaWQ7XHJcblxyXG4gICAgICAgIHZhciBob3N0TlZ1ZUlkID0gd2Vidmlldy5fX3VuaWFwcF9vcmlnaW5fdHlwZSA9PT0gJ3VuaU5WaWV3JyAmJiB3ZWJ2aWV3Ll9fdW5pYXBwX29yaWdpbl9pZDtcclxuICAgICAgICB2YXIgcG9wdXBOVnVlSWQgPSB3ZWJ2aWV3LmlkO1xyXG5cclxuICAgICAgICB3ZWJ2aWV3LnBvc3RNZXNzYWdlID0gZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoaG9zdE5WdWVJZCkge1xyXG4gICAgICAgICAgICAgICAgY2hhbm5lbC5wb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICB0bzogaXNQb3B1cE5WdWUgPyBob3N0TlZ1ZUlkIDogcG9wdXBOVnVlSWRcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdVbmlBcHBTdWJOVnVlJyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgd2Vidmlldy5vbk1lc3NhZ2UgPSBmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgICAgICAgICBvbk1lc3NhZ2VDYWxsYmFja3MucHVzaChjYWxsYmFjayk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKCF3ZWJ2aWV3Ll9fdW5pYXBwX21hc2tfaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvcmlnaW4gPSB3ZWJ2aWV3Ll9fdW5pYXBwX2hvc3Q7XHJcblxyXG4gICAgICAgIHZhciBtYXNrQ29sb3IgPSB3ZWJ2aWV3Ll9fdW5pYXBwX21hc2s7XHJcblxyXG4gICAgICAgIHZhciBtYXNrV2VidmlldyA9IHdlZXhQbHVzLndlYnZpZXcuZ2V0V2Vidmlld0J5SWQod2Vidmlldy5fX3VuaWFwcF9tYXNrX2lkKTtcbiAgICAgICAgbWFza1dlYnZpZXcgPSBtYXNrV2Vidmlldy5wYXJlbnQoKSB8fCBtYXNrV2VidmlldzsvL+WGjeasoeajgOa1i+eItlxyXG4gICAgICAgIHZhciBvbGRTaG93ID0gd2Vidmlldy5zaG93O1xyXG4gICAgICAgIHZhciBvbGRIaWRlID0gd2Vidmlldy5oaWRlO1xyXG4gICAgICAgIHZhciBvbGRDbG9zZSA9IHdlYnZpZXcuY2xvc2U7XHJcblxyXG4gICAgICAgIHZhciBzaG93TWFzayA9IGZ1bmN0aW9uIHNob3dNYXNrKCkge1xyXG4gICAgICAgICAgICBtYXNrV2Vidmlldy5zZXRTdHlsZSh7XHJcbiAgICAgICAgICAgICAgICBtYXNrOiBtYXNrQ29sb3JcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgY2xvc2VNYXNrID0gZnVuY3Rpb24gY2xvc2VNYXNrKCkge1xyXG4gICAgICAgICAgICBtYXNrV2Vidmlldy5zZXRTdHlsZSh7XHJcbiAgICAgICAgICAgICAgICBtYXNrOiAnbm9uZSdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB3ZWJ2aWV3LnNob3cgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgc2hvd01hc2soKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XHJcbiAgICAgICAgICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gb2xkU2hvdy5hcHBseSh3ZWJ2aWV3LCBhcmdzKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHdlYnZpZXcuaGlkZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjbG9zZU1hc2soKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XHJcbiAgICAgICAgICAgICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBvbGRIaWRlLmFwcGx5KHdlYnZpZXcsIGFyZ3MpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgd2Vidmlldy5jbG9zZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjbG9zZU1hc2soKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4zKSwgX2tleTMgPSAwOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XHJcbiAgICAgICAgICAgICAgICBhcmdzW19rZXkzXSA9IGFyZ3VtZW50c1tfa2V5M107XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBvbGRDbG9zZS5hcHBseSh3ZWJ2aWV3LCBhcmdzKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFN1Yk5WdWVCeUlkKGlkKSB7XHJcbiAgICAgICAgdmFyIHdlYnZpZXcgPSB3ZWV4UGx1cy53ZWJ2aWV3LmdldFdlYnZpZXdCeUlkKGlkKTtcclxuICAgICAgICBpZiAod2VidmlldyAmJiAhd2Vidmlldy4kcHJvY2Vzc2VkKSB7XHJcbiAgICAgICAgICAgIHdyYXBwZXIod2Vidmlldyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB3ZWJ2aWV3O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEN1cnJlbnRTdWJOVnVlKCkge1xyXG4gICAgICAgIHJldHVybiBnZXRTdWJOVnVlQnlJZCh3ZWV4UGx1cy53ZWJ2aWV3LmN1cnJlbnRXZWJ2aWV3KCkuaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBwbHVzID0gd2VleC5yZXF1aXJlTW9kdWxlKCdwbHVzJyk7XHJcbiAgICB2YXIgZ2xvYmFsRXZlbnQgPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ2dsb2JhbEV2ZW50Jyk7XHJcblxyXG4gICAgdmFyIGlkID0gMDtcclxuICAgIHZhciBjYWxsYmFja3MgPSB7fTtcclxuXHJcbiAgICB2YXIgVU5JQVBQX1NFUlZJQ0VfTlZVRV9JRCA9ICdfX3VuaWFwcF9fc2VydmljZSc7XHJcblxyXG4gICAgZ2xvYmFsRXZlbnQuYWRkRXZlbnRMaXN0ZW5lcigncGx1c01lc3NhZ2UnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgaWYgKGUuZGF0YS50eXBlID09PSAnVW5pQXBwSnNBcGknKSB7XHJcbiAgICAgICAgICAgIGludm9rZShlLmRhdGEuaWQsIGUuZGF0YS5kYXRhKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGUuZGF0YS50eXBlID09PSAnVW5pQXBwU3ViTlZ1ZScpIHtcclxuICAgICAgICAgICAgb25TdWJOVnVlTWVzc2FnZShlLmRhdGEuZGF0YSwgZS5kYXRhLm9wdGlvbnMpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5kYXRhLnR5cGUgPT09ICdvbk5hdmlnYXRpb25CYXJCdXR0b25UYXAnKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIG9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcENhbGxiYWNrKGUuZGF0YS5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5kYXRhLnR5cGUgPT09ICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQnKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZENhbGxiYWNrKGUuZGF0YS5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5kYXRhLnR5cGUgPT09ICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZCcpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZENhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZENhbGxiYWNrKGUuZGF0YS5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5kYXRhLnR5cGUgPT09ICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWQnKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZENhbGxiYWNrKGUuZGF0YS5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHZhciBjcmVhdGVDYWxsYmFjayA9IGZ1bmN0aW9uIGNyZWF0ZUNhbGxiYWNrKGFyZ3MsIHR5cGUpIHtcclxuICAgICAgICB2YXIgY2FsbGJhY2sgPSBmdW5jdGlvbiBjYWxsYmFjayhyZXMpIHtcclxuICAgICAgICAgICAgaWYgKGlzRm4oYXJncykpIHtcclxuICAgICAgICAgICAgICAgIGFyZ3MocmVzKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChhcmdzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAofnJlcy5lcnJNc2cuaW5kZXhPZignOm9rJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc0ZuKGFyZ3Muc3VjY2VzcykgJiYgYXJncy5zdWNjZXNzKHJlcyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKH5yZXMuZXJyTXNnLmluZGV4T2YoJzpmYWlsJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc0ZuKGFyZ3MuZmFpbCkgJiYgYXJncy5mYWlsKHJlcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpc0ZuKGFyZ3MuY29tcGxldGUpICYmIGFyZ3MuY29tcGxldGUocmVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGlzRm4oYXJncykgfHwgYXJncyAmJiBpc0ZuKGFyZ3MuY2FsbGJhY2spKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrLmtlZXBBbGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjYWxsYmFjaztcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGludm9rZSA9IGZ1bmN0aW9uIGludm9rZShjYWxsYmFja0lkLCBkYXRhKSB7XHJcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gY2FsbGJhY2tzW2NhbGxiYWNrSWRdO1xyXG4gICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcclxuICAgICAgICAgICAgaWYgKCFjYWxsYmFjay5rZWVwQWxpdmUpIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBjYWxsYmFja3NbY2FsbGJhY2tJZF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdjYWxsYmFja1snICsgY2FsbGJhY2tJZCArICddIGlzIHVuZGVmaW5lZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdmFyIHB1Ymxpc2ggPSBmdW5jdGlvbiBwdWJsaXNoKF9yZWYpIHtcclxuICAgICAgICB2YXIgaWQgPSBfcmVmLmlkLFxyXG4gICAgICAgICAgICB0eXBlID0gX3JlZi50eXBlLFxyXG4gICAgICAgICAgICBwYXJhbXMgPSBfcmVmLnBhcmFtcztcclxuXHJcbiAgICAgICAgY2FsbGJhY2tzW2lkXSA9IGNyZWF0ZUNhbGxiYWNrKHBhcmFtcywgdHlwZSk7XHJcbiAgICAgICAgcGx1cy5wb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgdHlwZTogdHlwZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBwYXJhbXNcclxuICAgICAgICB9LCBVTklBUFBfU0VSVklDRV9OVlVFX0lEKTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gcG9zdE1lc3NhZ2UoZGF0YSkge1xyXG4gICAgICAgIHBsdXMucG9zdE1lc3NhZ2UoZGF0YSwgVU5JQVBQX1NFUlZJQ0VfTlZVRV9JRCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGNyZWF0ZVB1Ymxpc2ggPSBmdW5jdGlvbiBjcmVhdGVQdWJsaXNoKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24oYXJncykge1xyXG4gICAgICAgICAgICBwdWJsaXNoKHtcclxuICAgICAgICAgICAgICAgIGlkOiBpZCsrLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogbmFtZSxcclxuICAgICAgICAgICAgICAgIHBhcmFtczogYXJnc1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwQ2FsbGJhY2sgPSB2b2lkIDA7XHJcbiAgICB2YXIgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkQ2FsbGJhY2sgPSB2b2lkIDA7XHJcbiAgICB2YXIgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWRDYWxsYmFjayA9IHZvaWQgMDtcclxuICAgIHZhciBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWRDYWxsYmFjayA9IHZvaWQgMDtcclxuXHJcbiAgICBmdW5jdGlvbiBvbk5hdmlnYXRpb25CYXJCdXR0b25UYXAoY2FsbGJhY2spIHtcclxuICAgICAgICBvbk5hdmlnYXRpb25CYXJCdXR0b25UYXBDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZChjYWxsYmFjaykge1xyXG4gICAgICAgIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZENhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWQoY2FsbGJhY2spIHtcclxuICAgICAgICBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZENhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkQ2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZXF1aXJlTmF0aXZlUGx1Z2luKHBsdWdpbk5hbWUpIHtcclxuICAgICAgICByZXR1cm4gd2VleC5yZXF1aXJlTW9kdWxlKHBsdWdpbk5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBkb20gPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ2RvbScpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGxvYWRGb250RmFjZShfcmVmKSB7XHJcbiAgICAgICAgdmFyIGZhbWlseSA9IF9yZWYuZmFtaWx5LFxyXG4gICAgICAgICAgICBzb3VyY2UgPSBfcmVmLnNvdXJjZSxcclxuICAgICAgICAgICAgZGVzYyA9IF9yZWYuZGVzYyxcclxuICAgICAgICAgICAgc3VjY2VzcyA9IF9yZWYuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWYuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmLmNvbXBsZXRlO1xyXG5cclxuICAgICAgICBkb20uYWRkUnVsZSgnZm9udEZhY2UnLCB7XHJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IGZhbWlseSxcclxuICAgICAgICAgICAgc3JjOiBzb3VyY2UucmVwbGFjZSgvXCIvZywgJ1xcJycpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIHJlcyA9IHtcclxuICAgICAgICAgICAgZXJyTXNnOiAnbG9hZEZvbnRGYWNlOm9rJyxcclxuICAgICAgICAgICAgc3RhdHVzOiAnbG9hZGVkJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHJlcyk7XHJcbiAgICAgICAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmVzKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZ2xvYmFsRXZlbnQkMSA9IHdlZXgucmVxdWlyZU1vZHVsZSgnZ2xvYmFsRXZlbnQnKTtcclxuXHJcbiAgICB2YXIgY2FsbGJhY2tzJDEgPSBbXTtcclxuXHJcbiAgICBnbG9iYWxFdmVudCQxLmFkZEV2ZW50TGlzdGVuZXIoJ3BsdXNNZXNzYWdlJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGlmIChlLmRhdGEudHlwZSA9PT0gJ1VuaUFwcFJlYWR5Jykge1xyXG4gICAgICAgICAgICByZWFkeS5pc1VuaUFwcFJlYWR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrcyQxLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzJDEuZm9yRWFjaChmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFja3MkMSA9IFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gcmVhZHkoY2FsbGJhY2spIHtcclxuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzVW5pQXBwUmVhZHkpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFja3MkMS5wdXNoKGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24ob2JqKSB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XHJcbiAgICB9IDogZnVuY3Rpb24ob2JqKSB7XHJcbiAgICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID9cclxuICAgICAgICAgICAgXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBzdHJlYW0gPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ3N0cmVhbScpO1xyXG5cclxuICAgIC8vIGxldCByZXF1ZXN0VGFza0lkID0gMFxyXG5cclxuICAgIHZhciBNRVRIT0RfR0VUID0gJ0dFVCc7XHJcbiAgICB2YXIgTUVUSE9EX1BPU1QgPSAnUE9TVCc7XHJcbiAgICB2YXIgQ09OVEVOVF9UWVBFX0pTT04gPSAnYXBwbGljYXRpb24vanNvbic7XHJcbiAgICB2YXIgQ09OVEVOVF9UWVBFX0ZPUk0gPSAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJztcclxuXHJcbiAgICB2YXIgc2VyaWFsaXplID0gZnVuY3Rpb24gc2VyaWFsaXplKGRhdGEpIHtcclxuICAgICAgICB2YXIgbWV0aG9kID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBNRVRIT0RfR0VUO1xyXG4gICAgICAgIHZhciBjb250ZW50VHlwZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogQ09OVEVOVF9UWVBFX0ZPUk07XHJcblxyXG4gICAgICAgIGlmICgodHlwZW9mIGRhdGEgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGRhdGEpKSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgaWYgKG1ldGhvZC50b1VwcGVyQ2FzZSgpID09PSBNRVRIT0RfUE9TVCAmJiBjb250ZW50VHlwZS50b0xvd2VyQ2FzZSgpID09PSBDT05URU5UX1RZUEVfSlNPTikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGRhdGEpLm1hcChmdW5jdGlvbihrZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQoZGF0YVtrZXldKTtcclxuICAgICAgICAgICAgICAgIH0pLmpvaW4oJyYnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gcmVxdWVzdChfcmVmKSB7XHJcbiAgICAgICAgdmFyIHVybCA9IF9yZWYudXJsLFxyXG4gICAgICAgICAgICBkYXRhID0gX3JlZi5kYXRhLFxyXG4gICAgICAgICAgICBoZWFkZXIgPSBfcmVmLmhlYWRlcixcclxuICAgICAgICAgICAgX3JlZiRtZXRob2QgPSBfcmVmLm1ldGhvZCxcclxuICAgICAgICAgICAgbWV0aG9kID0gX3JlZiRtZXRob2QgPT09IHVuZGVmaW5lZCA/ICdHRVQnIDogX3JlZiRtZXRob2QsXHJcbiAgICAgICAgICAgIF9yZWYkZGF0YVR5cGUgPSBfcmVmLmRhdGFUeXBlLFxyXG4gICAgICAgICAgICBkYXRhVHlwZSA9IF9yZWYkZGF0YVR5cGUgPT09IHVuZGVmaW5lZCA/ICdqc29uJyA6IF9yZWYkZGF0YVR5cGUsXHJcbiAgICAgICAgICAgIHJlc3BvbnNlVHlwZSA9IF9yZWYucmVzcG9uc2VUeXBlLFxyXG4gICAgICAgICAgICBzdWNjZXNzID0gX3JlZi5zdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsID0gX3JlZi5mYWlsLFxyXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWYuY29tcGxldGU7XHJcblxyXG4gICAgICAgIC8vIHJlcXVlc3RUYXNrSWQrK1xyXG4gICAgICAgIHZhciBhYm9ydGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHZhciBoYXNDb250ZW50VHlwZSA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBoZWFkZXJzID0ge307XHJcbiAgICAgICAgaWYgKGhlYWRlcikge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBuYW1lIGluIGhlYWRlcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFoYXNDb250ZW50VHlwZSAmJiBuYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdjb250ZW50LXR5cGUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFzQ29udGVudFR5cGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gaGVhZGVyW25hbWVdO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzW25hbWVdID0gaGVhZGVyW25hbWVdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtZXRob2QgPT09IE1FVEhPRF9HRVQgJiYgZGF0YSkge1xyXG4gICAgICAgICAgICB1cmwgPSB1cmwgKyAofnVybC5pbmRleE9mKCc/JykgPyB1cmwuc3Vic3RyKC0xKSA9PT0gJyYnIHx8IHVybC5zdWJzdHIoLTEpID09PSAnPycgPyAnJyA6ICcmJyA6ICc/JykgK1xyXG4gICAgICAgICAgICAgICAgc2VyaWFsaXplKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdHJlYW0uZmV0Y2goe1xyXG4gICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXHJcbiAgICAgICAgICAgIHR5cGU6IGRhdGFUeXBlID09PSAnanNvbicgPyAnanNvbicgOiAndGV4dCcsXHJcbiAgICAgICAgICAgIGJvZHk6IG1ldGhvZCAhPT0gTUVUSE9EX0dFVCA/IHNlcmlhbGl6ZShkYXRhLCBtZXRob2QsIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddKSA6ICcnXHJcbiAgICAgICAgfSwgZnVuY3Rpb24oX3JlZjIpIHtcclxuICAgICAgICAgICAgdmFyIHN0YXR1cyA9IF9yZWYyLnN0YXR1cyxcclxuICAgICAgICAgICAgICAgIG9rID0gX3JlZjIub2ssXHJcbiAgICAgICAgICAgICAgICBzdGF0dXNUZXh0ID0gX3JlZjIuc3RhdHVzVGV4dCxcclxuICAgICAgICAgICAgICAgIGRhdGEgPSBfcmVmMi5kYXRhLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVycyA9IF9yZWYyLmhlYWRlcnM7XHJcblxyXG4gICAgICAgICAgICB2YXIgcmV0ID0ge307XHJcbiAgICAgICAgICAgIGlmICghc3RhdHVzIHx8IHN0YXR1cyA9PT0gLTEgfHwgYWJvcnRlZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0LmVyck1zZyA9ICdyZXF1ZXN0OmZhaWwnO1xyXG4gICAgICAgICAgICAgICAgaXNGbihmYWlsKSAmJiBmYWlsKHJldCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXQuZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICByZXQuc3RhdHVzQ29kZSA9IHN0YXR1cztcclxuICAgICAgICAgICAgICAgIHJldC5oZWFkZXIgPSBoZWFkZXJzO1xyXG4gICAgICAgICAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHJldCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmV0KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBhYm9ydDogZnVuY3Rpb24gYWJvcnQoKSB7XHJcbiAgICAgICAgICAgICAgICBhYm9ydGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHN0b3JhZ2UgPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ3BsdXNzdG9yYWdlJyk7XHJcbiAgICB2YXIgVU5JQVBQX1NUT1JBR0VfREFUQV9UWVBFID0gJ19fVFlQRSc7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0U3RvcmFnZShfcmVmKSB7XHJcbiAgICAgICAgdmFyIGtleSA9IF9yZWYua2V5LFxyXG4gICAgICAgICAgICBkYXRhID0gX3JlZi5kYXRhLFxyXG4gICAgICAgICAgICBzdWNjZXNzID0gX3JlZi5zdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsID0gX3JlZi5mYWlsLFxyXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWYuY29tcGxldGU7XHJcblxyXG4gICAgICAgIHN0b3JhZ2UuZ2V0SXRlbShrZXkgKyBVTklBUFBfU1RPUkFHRV9EQVRBX1RZUEUsIGZ1bmN0aW9uKHJldCkge1xyXG4gICAgICAgICAgICBpZiAocmV0LnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0YVR5cGUgPSByZXQuZGF0YTtcclxuICAgICAgICAgICAgICAgIHN0b3JhZ2UuZ2V0SXRlbShrZXksIGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMucmVzdWx0ID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVR5cGUgJiYgcmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVR5cGUgIT09ICdTdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gSlNPTi5wYXJzZShyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJNc2c6ICdnZXRTdG9yYWdlOm9rJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiByZXN1bHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmVyck1zZyA9ICdzZXRTdG9yYWdlOmZhaWwnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNGbihmYWlsKSAmJiBmYWlsKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMuZXJyTXNnID0gJ3NldFN0b3JhZ2U6ZmFpbCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXMpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXQuZXJyTXNnID0gJ3NldFN0b3JhZ2U6ZmFpbCc7XHJcbiAgICAgICAgICAgICAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmV0KTtcclxuICAgICAgICAgICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJldCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRTdG9yYWdlKF9yZWYyKSB7XHJcbiAgICAgICAgdmFyIGtleSA9IF9yZWYyLmtleSxcclxuICAgICAgICAgICAgZGF0YSA9IF9yZWYyLmRhdGEsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBfcmVmMi5zdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsID0gX3JlZjIuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmMi5jb21wbGV0ZTtcclxuXHJcbiAgICAgICAgdmFyIGRhdGFUeXBlID0gJ1N0cmluZyc7XHJcbiAgICAgICAgaWYgKCh0eXBlb2YgZGF0YSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoZGF0YSkpID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBkYXRhVHlwZSA9ICdPYmplY3QnO1xyXG4gICAgICAgICAgICBkYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0b3JhZ2Uuc2V0SXRlbShrZXksIGRhdGEsIGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICBpZiAocmVzLnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICBzdG9yYWdlLnNldEl0ZW0oa2V5ICsgVU5JQVBQX1NUT1JBR0VfREFUQV9UWVBFLCBkYXRhVHlwZSwgZnVuY3Rpb24ocmV0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJldC5yZXN1bHQgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0ZuKHN1Y2Nlc3MpICYmIHN1Y2Nlc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyTXNnOiAnc2V0U3RvcmFnZTpvaydcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0LmVyck1zZyA9ICdzZXRTdG9yYWdlOmZhaWwnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmV0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlcy5lcnJNc2cgPSAnc2V0U3RvcmFnZTpmYWlsJztcclxuICAgICAgICAgICAgICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlU3RvcmFnZShfcmVmMykge1xyXG4gICAgICAgIHZhciBrZXkgPSBfcmVmMy5rZXksXHJcbiAgICAgICAgICAgIGRhdGEgPSBfcmVmMy5kYXRhLFxyXG4gICAgICAgICAgICBzdWNjZXNzID0gX3JlZjMuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWYzLmZhaWwsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZjMuY29tcGxldGU7XHJcblxyXG4gICAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbShrZXksIGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICBpZiAocmVzLnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICBpc0ZuKHN1Y2Nlc3MpICYmIHN1Y2Nlc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgIGVyck1zZzogJ3JlbW92ZVN0b3JhZ2U6b2snXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlcy5lcnJNc2cgPSAncmVtb3ZlU3RvcmFnZTpmYWlsJztcclxuICAgICAgICAgICAgICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKGtleSArIFVOSUFQUF9TVE9SQUdFX0RBVEFfVFlQRSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2xlYXJTdG9yYWdlKF9yZWY0KSB7XHJcbiAgICAgICAgdmFyIGtleSA9IF9yZWY0LmtleSxcclxuICAgICAgICAgICAgZGF0YSA9IF9yZWY0LmRhdGEsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBfcmVmNC5zdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsID0gX3JlZjQuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmNC5jb21wbGV0ZTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgY2xpcGJvYXJkID0gd2VleC5yZXF1aXJlTW9kdWxlKCdjbGlwYm9hcmQnKTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDbGlwYm9hcmREYXRhKF9yZWYpIHtcclxuICAgICAgICB2YXIgc3VjY2VzcyA9IF9yZWYuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWYuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmLmNvbXBsZXRlO1xyXG5cclxuICAgICAgICBjbGlwYm9hcmQuZ2V0U3RyaW5nKGZ1bmN0aW9uKF9yZWYyKSB7XHJcbiAgICAgICAgICAgIHZhciBkYXRhID0gX3JlZjIuZGF0YTtcclxuXHJcbiAgICAgICAgICAgIHZhciByZXMgPSB7XHJcbiAgICAgICAgICAgICAgICBlcnJNc2c6ICdnZXRDbGlwYm9hcmREYXRhOm9rJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHJlcyk7XHJcbiAgICAgICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0Q2xpcGJvYXJkRGF0YShfcmVmMykge1xyXG4gICAgICAgIHZhciBkYXRhID0gX3JlZjMuZGF0YSxcclxuICAgICAgICAgICAgc3VjY2VzcyA9IF9yZWYzLnN1Y2Nlc3MsXHJcbiAgICAgICAgICAgIGZhaWwgPSBfcmVmMy5mYWlsLFxyXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWYzLmNvbXBsZXRlO1xyXG5cclxuICAgICAgICB2YXIgcmVzID0ge1xyXG4gICAgICAgICAgICBlcnJNc2c6ICdzZXRDbGlwYm9hcmREYXRhOm9rJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY2xpcGJvYXJkLnNldFN0cmluZyhkYXRhKTtcclxuICAgICAgICBpc0ZuKHN1Y2Nlc3MpICYmIHN1Y2Nlc3MocmVzKTtcclxuICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBnZXRFbWl0dGVyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBnZXRVbmlFbWl0dGVyID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXHJcbiAgICAgICAgICAgIHJldHVybiBnZXRVbmlFbWl0dGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgRW1pdHRlciA9IHtcclxuICAgICAgICAgICAgJG9uOiBmdW5jdGlvbiAkb24oKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ3VuaS4kb24gZmFpbGVkJyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICRvZmY6IGZ1bmN0aW9uICRvZmYoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ3VuaS4kb2ZmIGZhaWxlZCcpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAkb25jZTogZnVuY3Rpb24gJG9uY2UoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ3VuaS4kb25jZSBmYWlsZWQnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJGVtaXQ6IGZ1bmN0aW9uICRlbWl0KCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCd1bmkuJGVtaXQgZmFpbGVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBnZXRVbmlFbWl0dGVyKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gRW1pdHRlcjtcclxuICAgICAgICB9O1xyXG4gICAgfSgpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGFwcGx5KGN0eCwgbWV0aG9kLCBhcmdzKSB7XHJcbiAgICAgICAgcmV0dXJuIGN0eFttZXRob2RdLmFwcGx5KGN0eCwgYXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gJG9uKCkge1xyXG4gICAgICAgIHJldHVybiBhcHBseShnZXRFbWl0dGVyKCksICckb24nLCBbXS5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uICRvZmYoKSB7XHJcbiAgICAgICAgcmV0dXJuIGFwcGx5KGdldEVtaXR0ZXIoKSwgJyRvZmYnLCBbXS5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uICRvbmNlKCkge1xyXG4gICAgICAgIHJldHVybiBhcHBseShnZXRFbWl0dGVyKCksICckb25jZScsIFtdLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gJGVtaXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIGFwcGx5KGdldEVtaXR0ZXIoKSwgJyRlbWl0JywgW10uY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHZhciBhcGkgPSAvKiNfX1BVUkVfXyovIE9iamVjdC5mcmVlemUoe1xyXG4gICAgICAgIGxvYWRGb250RmFjZTogbG9hZEZvbnRGYWNlLFxyXG4gICAgICAgIHJlYWR5OiByZWFkeSxcclxuICAgICAgICByZXF1ZXN0OiByZXF1ZXN0LFxyXG4gICAgICAgIGdldFN0b3JhZ2U6IGdldFN0b3JhZ2UsXHJcbiAgICAgICAgc2V0U3RvcmFnZTogc2V0U3RvcmFnZSxcclxuICAgICAgICByZW1vdmVTdG9yYWdlOiByZW1vdmVTdG9yYWdlLFxyXG4gICAgICAgIGNsZWFyU3RvcmFnZTogY2xlYXJTdG9yYWdlLFxyXG4gICAgICAgIGdldENsaXBib2FyZERhdGE6IGdldENsaXBib2FyZERhdGEsXHJcbiAgICAgICAgc2V0Q2xpcGJvYXJkRGF0YTogc2V0Q2xpcGJvYXJkRGF0YSxcclxuICAgICAgICBvblN1Yk5WdWVNZXNzYWdlOiBvblN1Yk5WdWVNZXNzYWdlLFxyXG4gICAgICAgIGdldFN1Yk5WdWVCeUlkOiBnZXRTdWJOVnVlQnlJZCxcclxuICAgICAgICBnZXRDdXJyZW50U3ViTlZ1ZTogZ2V0Q3VycmVudFN1Yk5WdWUsXHJcbiAgICAgICAgJG9uOiAkb24sXHJcbiAgICAgICAgJG9mZjogJG9mZixcclxuICAgICAgICAkb25jZTogJG9uY2UsXHJcbiAgICAgICAgJGVtaXQ6ICRlbWl0XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgdmFyIHd4ID0ge1xyXG4gICAgICAgIHVwbG9hZEZpbGU6IHRydWUsXHJcbiAgICAgICAgZG93bmxvYWRGaWxlOiB0cnVlLFxyXG4gICAgICAgIGNob29zZUltYWdlOiB0cnVlLFxyXG4gICAgICAgIHByZXZpZXdJbWFnZTogdHJ1ZSxcclxuICAgICAgICBnZXRJbWFnZUluZm86IHRydWUsXHJcbiAgICAgICAgc2F2ZUltYWdlVG9QaG90b3NBbGJ1bTogdHJ1ZSxcclxuICAgICAgICBjaG9vc2VWaWRlbzogdHJ1ZSxcclxuICAgICAgICBzYXZlVmlkZW9Ub1Bob3Rvc0FsYnVtOiB0cnVlLFxyXG4gICAgICAgIHNhdmVGaWxlOiB0cnVlLFxyXG4gICAgICAgIGdldFNhdmVkRmlsZUxpc3Q6IHRydWUsXHJcbiAgICAgICAgZ2V0U2F2ZWRGaWxlSW5mbzogdHJ1ZSxcclxuICAgICAgICByZW1vdmVTYXZlZEZpbGU6IHRydWUsXHJcbiAgICAgICAgb3BlbkRvY3VtZW50OiB0cnVlLFxyXG4gICAgICAgIHNldFN0b3JhZ2U6IHRydWUsXHJcbiAgICAgICAgZ2V0U3RvcmFnZTogdHJ1ZSxcclxuICAgICAgICBnZXRTdG9yYWdlSW5mbzogdHJ1ZSxcclxuICAgICAgICByZW1vdmVTdG9yYWdlOiB0cnVlLFxyXG4gICAgICAgIGNsZWFyU3RvcmFnZTogdHJ1ZSxcclxuICAgICAgICBnZXRMb2NhdGlvbjogdHJ1ZSxcclxuICAgICAgICBjaG9vc2VMb2NhdGlvbjogdHJ1ZSxcclxuICAgICAgICBvcGVuTG9jYXRpb246IHRydWUsXHJcbiAgICAgICAgZ2V0U3lzdGVtSW5mbzogdHJ1ZSxcclxuICAgICAgICBnZXROZXR3b3JrVHlwZTogdHJ1ZSxcclxuICAgICAgICBtYWtlUGhvbmVDYWxsOiB0cnVlLFxyXG4gICAgICAgIHNjYW5Db2RlOiB0cnVlLFxyXG4gICAgICAgIHNldFNjcmVlbkJyaWdodG5lc3M6IHRydWUsXHJcbiAgICAgICAgZ2V0U2NyZWVuQnJpZ2h0bmVzczogdHJ1ZSxcclxuICAgICAgICBzZXRLZWVwU2NyZWVuT246IHRydWUsXHJcbiAgICAgICAgdmlicmF0ZUxvbmc6IHRydWUsXHJcbiAgICAgICAgdmlicmF0ZVNob3J0OiB0cnVlLFxyXG4gICAgICAgIGFkZFBob25lQ29udGFjdDogdHJ1ZSxcclxuICAgICAgICBzaG93VG9hc3Q6IHRydWUsXHJcbiAgICAgICAgc2hvd0xvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgaGlkZVRvYXN0OiB0cnVlLFxyXG4gICAgICAgIGhpZGVMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgIHNob3dNb2RhbDogdHJ1ZSxcclxuICAgICAgICBzaG93QWN0aW9uU2hlZXQ6IHRydWUsXHJcbiAgICAgICAgc2V0TmF2aWdhdGlvbkJhclRpdGxlOiB0cnVlLFxyXG4gICAgICAgIHNldE5hdmlnYXRpb25CYXJDb2xvcjogdHJ1ZSxcclxuICAgICAgICBuYXZpZ2F0ZVRvOiB0cnVlLFxyXG4gICAgICAgIHJlZGlyZWN0VG86IHRydWUsXHJcbiAgICAgICAgcmVMYXVuY2g6IHRydWUsXHJcbiAgICAgICAgc3dpdGNoVGFiOiB0cnVlLFxyXG4gICAgICAgIG5hdmlnYXRlQmFjazogdHJ1ZSxcclxuICAgICAgICBnZXRQcm92aWRlcjogdHJ1ZSxcclxuICAgICAgICBsb2dpbjogdHJ1ZSxcclxuICAgICAgICBnZXRVc2VySW5mbzogdHJ1ZSxcclxuICAgICAgICBzaGFyZTogdHJ1ZSxcclxuICAgICAgICByZXF1ZXN0UGF5bWVudDogdHJ1ZSxcclxuICAgICAgICBzdWJzY3JpYmVQdXNoOiB0cnVlLFxyXG4gICAgICAgIHVuc3Vic2NyaWJlUHVzaDogdHJ1ZSxcclxuICAgICAgICBvblB1c2g6IHRydWUsXHJcbiAgICAgICAgb2ZmUHVzaDogdHJ1ZVxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgYmFzZVVuaSA9IHtcclxuICAgICAgICBvczoge1xyXG4gICAgICAgICAgICBudnVlOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgdW5pID0ge307XHJcblxyXG4gICAgaWYgKHR5cGVvZiBQcm94eSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICB1bmkgPSBuZXcgUHJveHkoe30sIHtcclxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQodGFyZ2V0LCBuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ29zJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG52dWU6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdwb3N0TWVzc2FnZScpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcG9zdE1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ3JlcXVpcmVOYXRpdmVQbHVnaW4nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcXVpcmVOYXRpdmVQbHVnaW47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ29uTmF2aWdhdGlvbkJhckJ1dHRvblRhcCcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBtZXRob2QgPSBhcGlbbmFtZV07XHJcbiAgICAgICAgICAgICAgICBpZiAoIW1ldGhvZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZCA9IGNyZWF0ZVB1Ymxpc2gobmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoc2hvdWxkUHJvbWlzZShuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNpZnkobWV0aG9kKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBtZXRob2Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgT2JqZWN0LmtleXMoYmFzZVVuaSkuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcclxuICAgICAgICAgICAgdW5pW2tleV0gPSBiYXNlVW5pW2tleV07XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHVuaS5wb3N0TWVzc2FnZSA9IHBvc3RNZXNzYWdlO1xyXG5cclxuICAgICAgICB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbiA9IHJlcXVpcmVOYXRpdmVQbHVnaW47XHJcblxyXG4gICAgICAgIHVuaS5vbk5hdmlnYXRpb25CYXJCdXR0b25UYXAgPSBvbk5hdmlnYXRpb25CYXJCdXR0b25UYXA7XHJcblxyXG4gICAgICAgIHVuaS5vbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQgPSBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQ7XHJcblxyXG4gICAgICAgIHVuaS5vbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZCA9IG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkO1xyXG5cclxuICAgICAgICB1bmkub25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkID0gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkO1xyXG5cclxuICAgICAgICBPYmplY3Qua2V5cyh3eCkuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XHJcbiAgICAgICAgICAgIHZhciBtZXRob2QgPSBhcGlbbmFtZV07XHJcbiAgICAgICAgICAgIGlmICghbWV0aG9kKSB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2QgPSBjcmVhdGVQdWJsaXNoKG5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzaG91bGRQcm9taXNlKG5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICB1bmlbbmFtZV0gPSBwcm9taXNpZnkobWV0aG9kKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHVuaVtuYW1lXSA9IG1ldGhvZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVuaTtcclxufVxyXG5cclxudmFyIGNyZWF0ZVVuaTtcclxuXHJcbmlmICh0eXBlb2YgZ2V0VW5pID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICBjcmVhdGVVbmkgPSBnZXRVbmk7XHJcbn0gZWxzZSB7XHJcbiAgICBjcmVhdGVVbmkgPSBpbml0VW5pO1xyXG59XHJcbnZhciB3ZWV4UGx1cyA9IG5ldyBXZWV4UGx1cyh3ZWV4KTtcclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVW5pKHdlZXgsIHdlZXhQbHVzLCBCcm9hZGNhc3RDaGFubmVsKTtcclxuZXhwb3J0IHtcclxuICAgIHdlZXhQbHVzXHJcbn07XG4iLCJmdW5jdGlvbiB0eXBvZiAodikge1xyXG4gIGNvbnN0IHMgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodilcclxuICByZXR1cm4gcy5zdWJzdHJpbmcoOCwgcy5sZW5ndGggLSAxKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXRMb2cgKC4uLmFyZ3MpIHtcclxuICBjb25zdCBtc2dzID0gYXJncy5tYXAoKHYpID0+IHtcclxuICAgIGNvbnN0IHR5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodilcclxuICAgIGlmICh0eXBlLnRvTG93ZXJDYXNlKCkgPT09ICdbb2JqZWN0IG9iamVjdF0nKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgdiA9ICctLS1CRUdJTjpKU09OLS0tJyArIEpTT04uc3RyaW5naWZ5KHYpICsgJy0tLUVORDpKU09OLS0tJ1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgdiA9ICdbb2JqZWN0IG9iamVjdF0nXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh2ID09PSBudWxsKSB7XHJcbiAgICAgICAgdiA9ICctLS1OVUxMLS0tJ1xyXG4gICAgICB9IGVsc2UgaWYgKHYgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHYgPSAnLS0tVU5ERUZJTkVELS0tJ1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHZUeXBlID0gdHlwb2YodikudG9VcHBlckNhc2UoKVxyXG4gICAgICAgIGlmICh2VHlwZSA9PT0gJ05VTUJFUicgfHwgdlR5cGUgPT09ICdCT09MRUFOJykge1xyXG4gICAgICAgICAgdiA9ICctLS1CRUdJTjonICsgdlR5cGUgKyAnLS0tJyArIHYgKyAnLS0tRU5EOicgKyB2VHlwZSArICctLS0nXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHYgPSBTdHJpbmcodilcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB2XHJcbiAgfSlcclxuICBsZXQgbXNnID0gJydcclxuICBpZiAobXNncy5sZW5ndGggPiAxKSB7XHJcbiAgICBjb25zdCBsYXN0TXNnID0gbXNncy5wb3AoKVxyXG4gICAgbXNnID0gbXNncy5qb2luKCctLS1DT01NQS0tLScpXHJcbiAgICBpZiAobGFzdE1zZy5pbmRleE9mKCcgYXQgJykgPT09IDApIHtcclxuICAgICAgbXNnICs9IGxhc3RNc2dcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG1zZyArPSAnLS0tQ09NTUEtLS0nICsgbGFzdE1zZ1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBtc2cgPSBtc2dzWzBdXHJcbiAgfVxyXG4gIHJldHVybiBtc2dcclxufVxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9kaXZpZGVyLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGY1YWFmMDImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vZGl2aWRlci5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9kaXZpZGVyLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMuJG9wdGlvbnMuc3R5bGUpe1xuICAgIHRoaXMuJG9wdGlvbnMuc3R5bGUgPSB7fVxufVxuaWYodGhpcy5fX21lcmdlX3N0eWxlICYmIHRoaXMuJHJvb3QgJiYgdGhpcy4kcm9vdC4kb3B0aW9ucy5hcHBTdHlsZSl7XG4gIHRoaXMuX19tZXJnZV9zdHlsZSh0aGlzLiRyb290LiRvcHRpb25zLmFwcFN0eWxlKVxufVxuaWYodGhpcy5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgdGhpcy5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL2RpdmlkZXIubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiKS5kZWZhdWx0KVxuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuJG9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vZGl2aWRlci5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpLmRlZmF1bHQpXG4gICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRDpcXFxcSEJ1aWxkZXJYLjEuOC4yLjIwMTkwNDAxLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBudWxsLFxuICBcImMxMzBkYjMyXCJcbiAgXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQzovVXNlcnMvaHVsaW5jbG91ZC9Eb2N1bWVudHMvSEJ1aWxkZXJQcm9qZWN0cy9taXNob3AvY29tcG9uZW50cy9jb21tb24vZGl2aWRlci5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYLjEuOC4yLjIwMTkwNDAxLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcbG9hZGVyc1xcXFx0ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS03LTAhRDpcXFxcSEJ1aWxkZXJYLjEuOC4yLjIwMTkwNDAxLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIS4vZGl2aWRlci5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBmNWFhZjAyJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcInZpZXdcIiwgeyBzdGF0aWNDbGFzczogW1wiZGl2aWRlclwiXSB9KVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYLjEuOC4yLjIwMTkwNDAxLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS0zLTAhRDpcXFxcSEJ1aWxkZXJYLjEuOC4yLjIwMTkwNDAxLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTMtMSFEOlxcXFxIQnVpbGRlclguMS44LjIuMjAxOTA0MDEuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhLi9kaXZpZGVyLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYLjEuOC4yLjIwMTkwNDAxLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS0zLTAhRDpcXFxcSEJ1aWxkZXJYLjEuOC4yLjIwMTkwNDAxLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTMtMSFEOlxcXFxIQnVpbGRlclguMS44LjIuMjAxOTA0MDEuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhLi9kaXZpZGVyLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XG5cdFxuXHRcdFxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImRpdmlkZXJcIj5cclxuXHRcdFx0ICAgIFxyXG5cdFx0XHQ8L3ZpZXc+XG5cdFxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdFxuXHR9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuLmRpdmlkZXJ7XHJcbiAgICBoZWlnaHQ6IDE4dXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcclxuICAgIHdpZHRoOiA3MjB1cHg7XHJcbn1cbjwvc3R5bGU+XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSFEOlxcXFxIQnVpbGRlclguMS44LjIuMjAxOTA0MDEuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhRDpcXFxcSEJ1aWxkZXJYLjEuOC4yLjIwMTkwNDAxLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCEuL2RpdmlkZXIubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSFEOlxcXFxIQnVpbGRlclguMS44LjIuMjAxOTA0MDEuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhRDpcXFxcSEJ1aWxkZXJYLjEuOC4yLjIwMTkwNDAxLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCEuL2RpdmlkZXIubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiZGl2aWRlclwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCIxOHJweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0Y1RjVGNVwiLFxuICAgIFwid2lkdGhcIjogXCI3MjBycHhcIlxuICB9XG59IiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlIChleGNlcHQgZm9yIG1vZHVsZXMpLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICBzY3JpcHRFeHBvcnRzLFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZnVuY3Rpb25hbFRlbXBsYXRlLFxuICBpbmplY3RTdHlsZXMsXG4gIHNjb3BlSWQsXG4gIG1vZHVsZUlkZW50aWZpZXIsIC8qIHNlcnZlciBvbmx5ICovXG4gIHNoYWRvd01vZGUgLyogdnVlLWNsaSBvbmx5ICovXG4pIHtcbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChyZW5kZXIpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IHJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSAnZGF0YS12LScgKyBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikgeyAvLyBzZXJ2ZXIgYnVpbGRcbiAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgIGNvbnRleHQgPVxuICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KSAvLyBmdW5jdGlvbmFsXG4gICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX19cbiAgICAgIH1cbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIGNvbnRleHQpXG4gICAgICB9XG4gICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVycmVuY2VcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rXG4gIH0gZWxzZSBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgaG9vayA9IHNoYWRvd01vZGVcbiAgICAgID8gZnVuY3Rpb24gKCkgeyBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCB0aGlzLiRyb290LiRvcHRpb25zLnNoYWRvd1Jvb3QpIH1cbiAgICAgIDogaW5qZWN0U3R5bGVzXG4gIH1cblxuICBpZiAoaG9vaykge1xuICAgIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIGZvciB0ZW1wbGF0ZS1vbmx5IGhvdC1yZWxvYWQgYmVjYXVzZSBpbiB0aGF0IGNhc2UgdGhlIHJlbmRlciBmbiBkb2Vzbid0XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSBub3JtYWxpemVyXG4gICAgICBvcHRpb25zLl9pbmplY3RTdHlsZXMgPSBob29rXG4gICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb2FsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgdmFyIG9yaWdpbmFsUmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uIChoLCBjb250ZXh0KSB7XG4gICAgICAgIGhvb2suY2FsbChjb250ZXh0KVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxSZW5kZXIoaCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgIHZhciBleGlzdGluZyA9IG9wdGlvbnMuYmVmb3JlQ3JlYXRlXG4gICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nXG4gICAgICAgID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKVxuICAgICAgICA6IFtob29rXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vY2FyZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzZkNGRmMWEmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vY2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2NhcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLiRvcHRpb25zLnN0eWxlKXtcbiAgICB0aGlzLiRvcHRpb25zLnN0eWxlID0ge31cbn1cbmlmKHRoaXMuX19tZXJnZV9zdHlsZSAmJiB0aGlzLiRyb290ICYmIHRoaXMuJHJvb3QuJG9wdGlvbnMuYXBwU3R5bGUpe1xuICB0aGlzLl9fbWVyZ2Vfc3R5bGUodGhpcy4kcm9vdC4kb3B0aW9ucy5hcHBTdHlsZSlcbn1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIGluamVjdFN0eWxlcyxcbiAgbnVsbCxcbiAgXCI3OTdhNzljYVwiXG4gIFxuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkM6L1VzZXJzL2h1bGluY2xvdWQvRG9jdW1lbnRzL0hCdWlsZGVyUHJvamVjdHMvbWlzaG9wL2NvbXBvbmVudHMvY29tbW9uL2NhcmQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYLjEuOC4yLjIwMTkwNDAxLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcbG9hZGVyc1xcXFx0ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS03LTAhRDpcXFxcSEJ1aWxkZXJYLjEuOC4yLjIwMTkwNDAxLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NhcmQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc2ZDRkZjFhJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcInZpZXdcIiwgeyBzdGF0aWNDbGFzczogW1wiY2FyZFwiXSB9LCBbXG4gICAgX3ZtLnNob3doZWFkXG4gICAgICA/IF9jKFxuICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJwLTJcIiwgXCJtYWluLWJvcmRlci1jb2xvclwiXSxcbiAgICAgICAgICAgIGNsYXNzOiBfdm0uZ2V0SGVhZENsYXNzXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfdm0uX3QoXCJ0aXRsZVwiLCBbXG4gICAgICAgICAgICAgIF92bS5oZWFkVGl0bGVcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcInUtdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcImZvbnRcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5oZWFkVGl0bGVXZWlnaHQgPyBcImZvbnQtd2VpZ2h0XCIgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5oZWFkVGl0bGUpKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMlxuICAgICAgICApXG4gICAgICA6IF92bS5fZSgpLFxuICAgIF9jKFxuICAgICAgXCJ2aWV3XCIsXG4gICAgICB7IGNsYXNzOiBfdm0uZ2V0Qm9keUNsYXNzIH0sXG4gICAgICBbXG4gICAgICAgIF92bS5ib2R5Q292ZXJcbiAgICAgICAgICA/IF9jKFwidS1pbWFnZVwiLCB7IGF0dHJzOiB7IHNyYzogX3ZtLmJvZHlDb3ZlciwgbW9kZTogXCJ3aWR0aEZpeFwiIH0gfSlcbiAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICBfdm0uX3QoXCJkZWZhdWx0XCIpXG4gICAgICBdLFxuICAgICAgMlxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tMy0wIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS0zLTEhRDpcXFxcSEJ1aWxkZXJYLjEuOC4yLjIwMTkwNDAxLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NhcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tMy0wIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS0zLTEhRDpcXFxcSEJ1aWxkZXJYLjEuOC4yLjIwMTkwNDAxLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NhcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwiY2FyZFwiPlxyXG5cdFx0PCEtLSBoZWFkIC0tPlxyXG5cdFx0PHZpZXcgdi1pZj1cInNob3doZWFkXCIgY2xhc3M9XCJwLTIgbWFpbi1ib3JkZXItY29sb3JcIlxyXG5cdFx0OmNsYXNzPVwiZ2V0SGVhZENsYXNzXCI+XHJcblx0XHRcdDxzbG90IG5hbWU9XCJ0aXRsZVwiPlxyXG5cdFx0XHRcdDx0ZXh0IHYtaWY9XCJoZWFkVGl0bGVcIiBjbGFzcz1cImZvbnRcIlxyXG5cdFx0XHRcdDpjbGFzcz1cImhlYWRUaXRsZVdlaWdodD8nZm9udC13ZWlnaHQnOicnXCI+e3toZWFkVGl0bGV9fTwvdGV4dD5cclxuXHRcdFx0PC9zbG90PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PCEtLSBib2R5IC0tPlxyXG5cdFx0PHZpZXcgOmNsYXNzPVwiZ2V0Qm9keUNsYXNzXCI+XHJcblx0XHRcdDxpbWFnZSB2LWlmPVwiYm9keUNvdmVyXCIgOnNyYz1cImJvZHlDb3ZlclwiIFxyXG5cdFx0XHRtb2RlPVwid2lkdGhGaXhcIj48L2ltYWdlPlxyXG5cdFx0XHQ8c2xvdCAvPlxyXG5cdFx0PC92aWV3PlxyXG5cdDwvdmlldz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0cHJvcHM6e1xyXG5cdFx0XHQvLyDlpLTpg6jmoIfpophcclxuXHRcdFx0aGVhZFRpdGxlOlN0cmluZyxcclxuXHRcdFx0Ly8g5bCB6Z2i5Zu+XHJcblx0XHRcdGJvZHlDb3ZlcjpTdHJpbmcsXHJcblx0XHRcdC8vIOaYr+WQpuaYvuekuuWktOmDqFxyXG5cdFx0XHRzaG93aGVhZDp7XHJcblx0XHRcdFx0dHlwZTpCb29sZWFuLFxyXG5cdFx0XHRcdGRlZmF1bHQ6dHJ1ZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDmmK/lkKbmmL7npLrkuIvovrnnur9cclxuXHRcdFx0aGVhZEJvcmRlckJvdHRvbTp7XHJcblx0XHRcdFx0dHlwZTpCb29sZWFuLFxyXG5cdFx0XHRcdGRlZmF1bHQ6dHJ1ZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDmoIfpopjmmK/lkKbliqDnspdcclxuXHRcdFx0aGVhZFRpdGxlV2VpZ2h0OntcclxuXHRcdFx0XHR0eXBlOkJvb2xlYW4sXHJcblx0XHRcdFx0ZGVmYXVsdDp0cnVlXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOaYr+WQpue7mWJvZHnliqBwYWRkaW5nXHJcblx0XHRcdGJvZHlQYWRkaW5nOntcclxuXHRcdFx0XHR0eXBlOkJvb2xlYW4sXHJcblx0XHRcdFx0ZGVmYXVsdDpmYWxzZVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0Y29tcHV0ZWQ6IHtcclxuXHRcdFx0Z2V0SGVhZENsYXNzKCkge1xyXG5cdFx0XHRcdGxldCBCb3JkZXJCb3R0b20gPSB0aGlzLmhlYWRCb3JkZXJCb3R0b20gPyAnYm9yZGVyLWJvdHRvbSc6JydcclxuXHRcdFx0XHRyZXR1cm4gYCR7Qm9yZGVyQm90dG9tfWBcclxuXHRcdFx0fSxcclxuXHRcdFx0Z2V0Qm9keUNsYXNzKCl7XHJcblx0XHRcdFx0bGV0IHBhZGRpbmcgPSB0aGlzLmJvZHlQYWRkaW5nID8gJ3AtMicgOiAnJ1xyXG5cdFx0XHRcdHJldHVybiBgJHtwYWRkaW5nfWBcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHR9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuPC9zdHlsZT5cbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vY29tbW9uLWxpc3QubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04MTNiZTA5MCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9jb21tb24tbGlzdC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9jb21tb24tbGlzdC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLiRvcHRpb25zLnN0eWxlKXtcbiAgICB0aGlzLiRvcHRpb25zLnN0eWxlID0ge31cbn1cbmlmKHRoaXMuX19tZXJnZV9zdHlsZSAmJiB0aGlzLiRyb290ICYmIHRoaXMuJHJvb3QuJG9wdGlvbnMuYXBwU3R5bGUpe1xuICB0aGlzLl9fbWVyZ2Vfc3R5bGUodGhpcy4kcm9vdC4kb3B0aW9ucy5hcHBTdHlsZSlcbn1cbmlmKHRoaXMuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgIHRoaXMuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9jb21tb24tbGlzdC5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpLmRlZmF1bHQpXG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy4kb3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi9jb21tb24tbGlzdC5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpLmRlZmF1bHQpXG4gICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRDpcXFxcSEJ1aWxkZXJYLjEuOC4yLjIwMTkwNDAxLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBudWxsLFxuICBcImM2YzA3NGMwXCJcbiAgXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQzovVXNlcnMvaHVsaW5jbG91ZC9Eb2N1bWVudHMvSEJ1aWxkZXJQcm9qZWN0cy9taXNob3AvY29tcG9uZW50cy9jb21tb24vY29tbW9uLWxpc3QubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGxvYWRlcnNcXFxcdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFEOlxcXFxIQnVpbGRlclguMS44LjIuMjAxOTA0MDEuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNy0wIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCEuL2NvbW1vbi1saXN0Lm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODEzYmUwOTAmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwidmlld1wiLCBbXG4gICAgX2MoXG4gICAgICBcInZpZXdcIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFtcImNvbC02XCIsIFwiY29tbW9uLWxpc3RcIiwgXCJtYi0xXCJdLFxuICAgICAgICBvbjogeyBjbGljazogX3ZtLm9wZW5EZXRhaWwgfVxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJ1LWltYWdlXCIsIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogW1wiY29tbW9uLWxpc3QtY292ZXJcIl0sXG4gICAgICAgICAgYXR0cnM6IHsgc3JjOiBfdm0uaXRlbS5jb3ZlciwgbW9kZTogXCJhc3BlY3RGaXRcIiwgbGF6eUxvYWQ6IHRydWUgfVxuICAgICAgICB9KSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ1LXRleHRcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogW1xuICAgICAgICAgICAgICBcImZvbnRcIixcbiAgICAgICAgICAgICAgXCJ0ZXh0LWRhcmtcIixcbiAgICAgICAgICAgICAgXCJweC0zXCIsXG4gICAgICAgICAgICAgIFwicHktMVwiLFxuICAgICAgICAgICAgICBcImNvbW1vbi1saXN0LWxpbmVzXCJcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5pdGVtLnRpdGxlKSldXG4gICAgICAgICksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwidS10ZXh0XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcbiAgICAgICAgICAgICAgXCJweC0zXCIsXG4gICAgICAgICAgICAgIFwiZm9udFwiLFxuICAgICAgICAgICAgICBcInRleHQtbGlnaHQtbXV0ZWRcIixcbiAgICAgICAgICAgICAgXCJjb21tb24tbGlzdC1saW5lc1wiXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uaXRlbS5kZXNjKSldXG4gICAgICAgICksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcInB4LTNcIiwgXCJwdC0xXCIsIFwicm93XCIsIFwiYS1lbmRcIl0gfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcInByaWNlXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5pdGVtLnBwcmljZSkpXSksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ1LXRleHRcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1wibGluZS10aHJvdWdoXCIsIFwidGV4dC1saWdodC1tdXRlZFwiLCBcIm1sLTFcIl0gfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIu+/pVwiICsgX3ZtLl9zKF92bS5pdGVtLm9wcmljZSkpXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICBdLFxuICAgICAgMVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tMy0wIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS0zLTEhRDpcXFxcSEJ1aWxkZXJYLjEuOC4yLjIwMTkwNDAxLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIS4vY29tbW9uLWxpc3QubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclguMS44LjIuMjAxOTA0MDEuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTMtMCFEOlxcXFxIQnVpbGRlclguMS44LjIuMjAxOTA0MDEuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tMy0xIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCEuL2NvbW1vbi1saXN0Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XG5cdDx2aWV3PlxuXHRcdDx2aWV3IGNsYXNzPVwiY29sLTYgY29tbW9uLWxpc3QgbWItMVwiIEBjbGljaz1cIm9wZW5EZXRhaWxcIj5cclxuXHRcdFx0PGltYWdlIDpzcmM9XCJpdGVtLmNvdmVyXCIgbW9kZT1cImFzcGVjdEZpdFwiIGxhenktbG9hZCBjbGFzcz1cImNvbW1vbi1saXN0LWNvdmVyXCI+PC9pbWFnZT5cclxuXHRcdFx0PHRleHQgY2xhc3M9XCJmb250IHRleHQtZGFyayBweC0zIHB5LTEgY29tbW9uLWxpc3QtbGluZXNcIj57e2l0ZW0udGl0bGV9fTwvdGV4dD5cclxuXHRcdFx0PHRleHQgY2xhc3M9XCJweC0zIGZvbnQgdGV4dC1saWdodC1tdXRlZCBjb21tb24tbGlzdC1saW5lc1wiPnt7aXRlbS5kZXNjfX08L3RleHQ+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwicHgtMyBwdC0xIHJvdyBhLWVuZFwiPlxyXG5cdFx0XHRcdDxwcmljZT57e2l0ZW0ucHByaWNlfX08L3ByaWNlPlxyXG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwibGluZS10aHJvdWdoIHRleHQtbGlnaHQtbXV0ZWQgbWwtMVwiPu+/pXt7aXRlbS5vcHJpY2V9fTwvdGV4dD5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcclxuXHRcdDwvdmlldz5cblx0PC92aWV3PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cclxuXHRpbXBvcnQgcHJpY2UgZnJvbSBcIkAvY29tcG9uZW50cy9jb21tb24vcHJpY2UubnZ1ZVwiO1xuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0Y29tcG9uZW50czp7XHJcblx0XHRcdHByaWNlXHJcblx0XHR9LFxyXG5cdFx0cHJvcHM6e1xyXG5cdFx0XHRpdGVtOk9iamVjdCxcclxuXHRcdFx0aW5kZXg6TnVtYmVyXHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRvcGVuRGV0YWlsKCkge1xyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdHVybDogJy9wYWdlcy9kZXRhaWwvZGV0YWlsJ1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxuXHR9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuLmNvbW1vbi1saXN0e1xyXG5cdHBhZGRpbmctbGVmdDoyLjVycHg7cGFkZGluZy1yaWdodDogMi41cnB4O1xyXG59XHJcbi5jb21tb24tbGlzdC1jb3ZlcntcclxuXHR3aWR0aDogMzcwcnB4O2hlaWdodDogMzcwcnB4O1xyXG59XHJcbi5jb21tb24tbGlzdC1saW5lc3tcclxuXHRsaW5lczogMTtcclxufVxuPC9zdHlsZT5cbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vcHJpY2UubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01OTIwNDY2MiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9wcmljZS5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9wcmljZS5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLiRvcHRpb25zLnN0eWxlKXtcbiAgICB0aGlzLiRvcHRpb25zLnN0eWxlID0ge31cbn1cbmlmKHRoaXMuX19tZXJnZV9zdHlsZSAmJiB0aGlzLiRyb290ICYmIHRoaXMuJHJvb3QuJG9wdGlvbnMuYXBwU3R5bGUpe1xuICB0aGlzLl9fbWVyZ2Vfc3R5bGUodGhpcy4kcm9vdC4kb3B0aW9ucy5hcHBTdHlsZSlcbn1cbmlmKHRoaXMuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgIHRoaXMuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiQC9jb21tb24vemNtLW1haW4tbnZ1ZS5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIikuZGVmYXVsdClcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLiRvcHRpb25zLnN0eWxlLHJlcXVpcmUoXCJAL2NvbW1vbi96Y20tbWFpbi1udnVlLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiKS5kZWZhdWx0KVxuICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIGluamVjdFN0eWxlcyxcbiAgbnVsbCxcbiAgXCIwNzA2MjBiN1wiXG4gIFxuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkM6L1VzZXJzL2h1bGluY2xvdWQvRG9jdW1lbnRzL0hCdWlsZGVyUHJvamVjdHMvbWlzaG9wL2NvbXBvbmVudHMvY29tbW9uL3ByaWNlLm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclguMS44LjIuMjAxOTA0MDEuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxsb2FkZXJzXFxcXHRlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRDpcXFxcSEJ1aWxkZXJYLjEuOC4yLjIwMTkwNDAxLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTctMCFEOlxcXFxIQnVpbGRlclguMS44LjIuMjAxOTA0MDEuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhLi9wcmljZS5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU5MjA0NjYyJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogW1wiZmxleC1yb3dcIl0gfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ1LXRleHRcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJmb250XCJdLCBzdGF0aWNTdHlsZTogeyBjb2xvcjogXCIjRkQ2ODAxXCIgfSB9LFxuICAgICAgICAgIFtfdm0uX3YoXCLvv6VcIildXG4gICAgICAgICksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwidS10ZXh0XCIsXG4gICAgICAgICAgeyBzdGF0aWNTdHlsZTogeyBjb2xvcjogXCIjRkQ2ODAxXCIsIGZvbnRTaXplOiBcIjI1cHhcIiB9IH0sXG4gICAgICAgICAgW192bS5fdChcImRlZmF1bHRcIildLFxuICAgICAgICAgIDJcbiAgICAgICAgKVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclguMS44LjIuMjAxOTA0MDEuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTMtMCFEOlxcXFxIQnVpbGRlclguMS44LjIuMjAxOTA0MDEuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tMy0xIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCEuL3ByaWNlLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYLjEuOC4yLjIwMTkwNDAxLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS0zLTAhRDpcXFxcSEJ1aWxkZXJYLjEuOC4yLjIwMTkwNDAxLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTMtMSFEOlxcXFxIQnVpbGRlclguMS44LjIuMjAxOTA0MDEuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhLi9wcmljZS5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxuXHQ8ZGl2PlxuXHRcdDxkaXYgY2xhc3M9XCJmbGV4LXJvd1wiPlxyXG5cdFx0XHQ8dGV4dCBjbGFzcz1cImZvbnRcIiBzdHlsZT1cImNvbG9yOiAjRkQ2ODAxO1wiPu+/pTwvdGV4dD5cclxuXHRcdFx0PHRleHQgc3R5bGU9XCJjb2xvcjogI0ZENjgwMTtmb250LXNpemU6IDI1cHg7XCI+PHNsb3QgLz48L3RleHQ+XHJcblx0XHQ8L2Rpdj5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0XG5cdH1cbjwvc2NyaXB0PlxuPHN0eWxlIHNyYz1cIkAvY29tbW9uL3pjbS1tYWluLW52dWUuY3NzXCI+PC9zdHlsZT5cbjxzdHlsZT5cblxuPC9zdHlsZT5cbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYLjEuOC4yLjIwMTkwNDAxLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhRDpcXFxcSEJ1aWxkZXJYLjEuOC4yLjIwMTkwNDAxLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiFEOlxcXFxIQnVpbGRlclguMS44LjIuMjAxOTA0MDEuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhLi96Y20tbWFpbi1udnVlLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSFEOlxcXFxIQnVpbGRlclguMS44LjIuMjAxOTA0MDEuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhRDpcXFxcSEJ1aWxkZXJYLjEuOC4yLjIwMTkwNDAxLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIS4vemNtLW1haW4tbnZ1ZS5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInBvc2l0aW9uLWFic29sdXRlXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIlxuICB9LFxuICBcInBvc2l0aW9uLWZpeGVkXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiZml4ZWRcIlxuICB9LFxuICBcInBvc2l0aW9uLXJlbGF0aXZlXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIlxuICB9LFxuICBcImxlZnQtMFwiOiB7XG4gICAgXCJsZWZ0XCI6IDBcbiAgfSxcbiAgXCJ0b3AtMFwiOiB7XG4gICAgXCJ0b3BcIjogMFxuICB9LFxuICBcImJvdHRvbS0wXCI6IHtcbiAgICBcImJvdHRvbVwiOiAwXG4gIH0sXG4gIFwicmlnaHQtMFwiOiB7XG4gICAgXCJyaWdodFwiOiAwXG4gIH0sXG4gIFwidy0xMDBcIjoge1xuICAgIFwid2lkdGhcIjogXCI3NTBcIlxuICB9LFxuICBcInctNTBcIjoge1xuICAgIFwid2lkdGhcIjogXCIzNzVcIlxuICB9LFxuICBcImgtMTAwXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjEyNTBcIlxuICB9LFxuICBcImgtNTBcIjoge1xuICAgIFwid2lkdGhcIjogXCI2MjVcIlxuICB9LFxuICBcImZvbnRcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyNVwiXG4gIH0sXG4gIFwiZm9udC1zbVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjIwXCJcbiAgfSxcbiAgXCJmb250LW1kXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMzBcIlxuICB9LFxuICBcImZvbnQtbGdcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCI0MFwiXG4gIH0sXG4gIFwiZm9udC1iaWdcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCI2MFwiXG4gIH0sXG4gIFwiZm9udC13ZWlnaHRcIjoge1xuICAgIFwiZm9udFdlaWdodFwiOiBcImJvbGRcIlxuICB9LFxuICBcImZvbnQtd2VpZ2h0LTEwMFwiOiB7XG4gICAgXCJmb250V2VpZ2h0XCI6IFwiMTAwXCJcbiAgfSxcbiAgXCJsaW5lLXRocm91Z2hcIjoge1xuICAgIFwidGV4dERlY29yYXRpb25cIjogXCJsaW5lLXRocm91Z2hcIlxuICB9LFxuICBcInJvd1wiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJmbGV4V3JhcFwiOiBcIndyYXBcIlxuICB9LFxuICBcImNvbC0xXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNjIuNVwiXG4gIH0sXG4gIFwiY29sLTJcIjoge1xuICAgIFwid2lkdGhcIjogXCIxMjVcIlxuICB9LFxuICBcImNvbC0zXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTg3LjVcIlxuICB9LFxuICBcImNvbC00XCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMjUwXCJcbiAgfSxcbiAgXCJjb2wtNVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjMxMi41XCJcbiAgfSxcbiAgXCJjb2wtNlwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjM3NVwiXG4gIH0sXG4gIFwiY29sLTdcIjoge1xuICAgIFwid2lkdGhcIjogXCI0MzcuNVwiXG4gIH0sXG4gIFwiY29sLThcIjoge1xuICAgIFwid2lkdGhcIjogXCI1MDBcIlxuICB9LFxuICBcImNvbC05XCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNTYyLjVcIlxuICB9LFxuICBcImNvbC0xMFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjYyNVwiXG4gIH0sXG4gIFwiY29sLTExXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNjg3LjVcIlxuICB9LFxuICBcImNvbC0xMlwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjc1MFwiXG4gIH0sXG4gIFwiZmxleC0xXCI6IHtcbiAgICBcImZsZXhcIjogMVxuICB9LFxuICBcImZsZXgtY29sdW1uXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIlxuICB9LFxuICBcImZsZXgtcm93XCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIlxuICB9LFxuICBcImZsZXgtd3JhcFwiOiB7XG4gICAgXCJmbGV4V3JhcFwiOiBcIndyYXBcIlxuICB9LFxuICBcImZsZXgtbm93cmFwXCI6IHtcbiAgICBcImZsZXhXcmFwXCI6IFwibm93cmFwXCJcbiAgfSxcbiAgXCJqLXN0YXJ0XCI6IHtcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiZmxleC1zdGFydFwiXG4gIH0sXG4gIFwiai1jZW50ZXJcIjoge1xuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcImotZW5kXCI6IHtcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiZmxleC1lbmRcIlxuICB9LFxuICBcImotc2JcIjoge1xuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCJcbiAgfSxcbiAgXCJhLWNlbnRlclwiOiB7XG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJhLXN0YXJ0XCI6IHtcbiAgICBcImFsaWduSXRlbXNcIjogXCJmbGV4LXN0YXJ0XCJcbiAgfSxcbiAgXCJhLWVuZFwiOiB7XG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiZmxleC1lbmRcIlxuICB9LFxuICBcImEtc3RyZXRjaFwiOiB7XG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwic3RyZXRjaFwiXG4gIH0sXG4gIFwiYm9yZGVyXCI6IHtcbiAgICBcImJvcmRlcldpZHRoXCI6IFwiMVwiLFxuICAgIFwiYm9yZGVyU3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjZGVlMmU2XCJcbiAgfSxcbiAgXCJib3JkZXItdG9wXCI6IHtcbiAgICBcImJvcmRlclRvcFdpZHRoXCI6IFwiMVwiLFxuICAgIFwiYm9yZGVyVG9wU3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyVG9wQ29sb3JcIjogXCIjZGVlMmU2XCJcbiAgfSxcbiAgXCJib3JkZXItcmlnaHRcIjoge1xuICAgIFwiYm9yZGVyUmlnaHRXaWR0aFwiOiBcIjFcIixcbiAgICBcImJvcmRlclJpZ2h0U3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyUmlnaHRDb2xvclwiOiBcIiNkZWUyZTZcIlxuICB9LFxuICBcImJvcmRlci1ib3R0b21cIjoge1xuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogXCIxXCIsXG4gICAgXCJib3JkZXJCb3R0b21TdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJCb3R0b21Db2xvclwiOiBcIiNkZWUyZTZcIlxuICB9LFxuICBcImJvcmRlci1sZWZ0XCI6IHtcbiAgICBcImJvcmRlckxlZnRXaWR0aFwiOiBcIjFcIixcbiAgICBcImJvcmRlckxlZnRTdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJMZWZ0Q29sb3JcIjogXCIjZGVlMmU2XCJcbiAgfSxcbiAgXCJib3JkZXItMFwiOiB7XG4gICAgXCJib3JkZXJXaWR0aFwiOiAwXG4gIH0sXG4gIFwiYm9yZGVyLXRvcC0wXCI6IHtcbiAgICBcImJvcmRlclRvcFdpZHRoXCI6IDBcbiAgfSxcbiAgXCJib3JkZXItcmlnaHQtMFwiOiB7XG4gICAgXCJib3JkZXJSaWdodFdpZHRoXCI6IDBcbiAgfSxcbiAgXCJib3JkZXItYm90dG9tLTBcIjoge1xuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogMFxuICB9LFxuICBcImJvcmRlci1sZWZ0LTBcIjoge1xuICAgIFwiYm9yZGVyTGVmdFdpZHRoXCI6IDBcbiAgfSxcbiAgXCJib3JkZXItcHJpbWFyeVwiOiB7XG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiMwMDdiZmZcIlxuICB9LFxuICBcImJvcmRlci1zZWNvbmRhcnlcIjoge1xuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjNmM3NTdkXCJcbiAgfSxcbiAgXCJib3JkZXItc3VjY2Vzc1wiOiB7XG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiM2Yzc1N2RcIlxuICB9LFxuICBcImJvcmRlci1kYW5nZXJcIjoge1xuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjZGMzNTQ1XCJcbiAgfSxcbiAgXCJib3JkZXItd2FybmluZ1wiOiB7XG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiNmZmMxMDdcIlxuICB9LFxuICBcImJvcmRlci1pbmZvXCI6IHtcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiIzE3YTJiOFwiXG4gIH0sXG4gIFwiYm9yZGVyLWxpZ2h0XCI6IHtcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiI2Y4ZjlmYVwiXG4gIH0sXG4gIFwiYm9yZGVyLWRhcmtcIjoge1xuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjMzQzYTQwXCJcbiAgfSxcbiAgXCJib3JkZXItd2hpdGVcIjoge1xuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJib3JkZXItbGlnaHQtc2Vjb25kYXJ5XCI6IHtcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiI0YxRjFGMVwiXG4gIH0sXG4gIFwicm91bmRlZFwiOiB7XG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCI1XCJcbiAgfSxcbiAgXCJyb3VuZGVkLWNpcmNsZVwiOiB7XG4gICAgXCJib3JkZXJSYWRpdXNcIjogMTAwXG4gIH0sXG4gIFwicm91bmRlZC0wXCI6IHtcbiAgICBcImJvcmRlclJhZGl1c1wiOiAwXG4gIH0sXG4gIFwidGV4dC1wcmltYXJ5XCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzAwN2JmZlwiXG4gIH0sXG4gIFwidGV4dC1zZWNvbmRhcnlcIjoge1xuICAgIFwiY29sb3JcIjogXCIjNmM3NTdkXCJcbiAgfSxcbiAgXCJ0ZXh0LXN1Y2Nlc3NcIjoge1xuICAgIFwiY29sb3JcIjogXCIjNmM3NTdkXCJcbiAgfSxcbiAgXCJ0ZXh0LWRhbmdlclwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNkYzM1NDVcIlxuICB9LFxuICBcInRleHQtd2FybmluZ1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNmZmMxMDdcIlxuICB9LFxuICBcInRleHQtaW5mb1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMxN2EyYjhcIlxuICB9LFxuICBcInRleHQtbGlnaHRcIjoge1xuICAgIFwiY29sb3JcIjogXCIjZjhmOWZhXCJcbiAgfSxcbiAgXCJ0ZXh0LWRhcmtcIjoge1xuICAgIFwiY29sb3JcIjogXCIjMzQzYTQwXCJcbiAgfSxcbiAgXCJ0ZXh0LW11dGVkXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzZjNzU3ZFwiXG4gIH0sXG4gIFwidGV4dC1saWdodC1tdXRlZFwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNCMkIyQjJcIlxuICB9LFxuICBcInRleHQtd2hpdGVcIjoge1xuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJiZy1wcmltYXJ5XCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMwMDdiZmZcIlxuICB9LFxuICBcImJnLXNlY29uZGFyeVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjNmM3NTdkXCJcbiAgfSxcbiAgXCJiZy1zdWNjZXNzXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiM2Yzc1N2RcIlxuICB9LFxuICBcImJnLWRhbmdlclwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZGMzNTQ1XCJcbiAgfSxcbiAgXCJiZy13YXJuaW5nXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmMxMDdcIlxuICB9LFxuICBcImJnLWluZm9cIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzE3YTJiOFwiXG4gIH0sXG4gIFwiYmctbGlnaHRcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2Y4ZjlmYVwiXG4gIH0sXG4gIFwiYmctZGFya1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMzQzYTQwXCJcbiAgfSxcbiAgXCJiZy13aGl0ZVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJtLTBcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiAwLFxuICAgIFwibWFyZ2luUmlnaHRcIjogMCxcbiAgICBcIm1hcmdpblRvcFwiOiAwLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IDBcbiAgfSxcbiAgXCJtXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIlxuICB9LFxuICBcIm0tMVwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMTBcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMTBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjEwXCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxMFwiXG4gIH0sXG4gIFwibS0yXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIyMFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIyMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMjBcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjIwXCJcbiAgfSxcbiAgXCJtLTNcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMzBcIlxuICB9LFxuICBcIm0tNFwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNDBcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNDBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjQwXCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI0MFwiXG4gIH0sXG4gIFwibS01XCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1MFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1MFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNTBcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjUwXCJcbiAgfSxcbiAgXCJteC0wXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogMCxcbiAgICBcIm1hcmdpblJpZ2h0XCI6IDBcbiAgfSxcbiAgXCJteFwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCJcbiAgfSxcbiAgXCJteC0xXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIxMFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxMFwiXG4gIH0sXG4gIFwibXgtMlwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMjBcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMjBcIlxuICB9LFxuICBcIm14LTNcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjMwXCJcbiAgfSxcbiAgXCJteC00XCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI0MFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI0MFwiXG4gIH0sXG4gIFwibXgtNVwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNTBcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNTBcIlxuICB9LFxuICBcIm15LTBcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IDAsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogMFxuICB9LFxuICBcIm15XCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIlxuICB9LFxuICBcIm15LTFcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMTBcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjEwXCJcbiAgfSxcbiAgXCJteS0yXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjIwXCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIyMFwiXG4gIH0sXG4gIFwibXktM1wiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMzBcIlxuICB9LFxuICBcIm15LTRcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiNDBcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjQwXCJcbiAgfSxcbiAgXCJteS01XCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjUwXCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1MFwiXG4gIH0sXG4gIFwibXQtMFwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogMFxuICB9LFxuICBcIm10XCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIlxuICB9LFxuICBcIm10LTFcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMTBcIlxuICB9LFxuICBcIm10LTJcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMjBcIlxuICB9LFxuICBcIm10LTNcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMzBcIlxuICB9LFxuICBcIm10LTRcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiNDBcIlxuICB9LFxuICBcIm10LTVcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiNTBcIlxuICB9LFxuICBcIm1iLTBcIjoge1xuICAgIFwibWFyZ2luQm90dG9tXCI6IDBcbiAgfSxcbiAgXCJtYlwiOiB7XG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCJcbiAgfSxcbiAgXCJtYi0xXCI6IHtcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjEwXCJcbiAgfSxcbiAgXCJtYi0yXCI6IHtcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjIwXCJcbiAgfSxcbiAgXCJtYi0zXCI6IHtcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjMwXCJcbiAgfSxcbiAgXCJtYi00XCI6IHtcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjQwXCJcbiAgfSxcbiAgXCJtYi01XCI6IHtcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjUwXCJcbiAgfSxcbiAgXCJtbC0wXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogMFxuICB9LFxuICBcIm1sXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCJcbiAgfSxcbiAgXCJtbC0xXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIxMFwiXG4gIH0sXG4gIFwibWwtMlwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMjBcIlxuICB9LFxuICBcIm1sLTNcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjMwXCJcbiAgfSxcbiAgXCJtbC00XCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI0MFwiXG4gIH0sXG4gIFwibWwtNVwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNTBcIlxuICB9LFxuICBcIm1yLTBcIjoge1xuICAgIFwibWFyZ2luUmlnaHRcIjogMFxuICB9LFxuICBcIm1yXCI6IHtcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiXG4gIH0sXG4gIFwibXItMVwiOiB7XG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjEwXCJcbiAgfSxcbiAgXCJtci0yXCI6IHtcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMjBcIlxuICB9LFxuICBcIm1yLTNcIjoge1xuICAgIFwibWFyZ2luUmlnaHRcIjogXCIzMFwiXG4gIH0sXG4gIFwibXItNFwiOiB7XG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjQwXCJcbiAgfSxcbiAgXCJtci01XCI6IHtcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNTBcIlxuICB9LFxuICBcInAtMFwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiAwLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IDAsXG4gICAgXCJwYWRkaW5nVG9wXCI6IDAsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IDBcbiAgfSxcbiAgXCJwXCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiNVwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNVwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjVcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCI1XCJcbiAgfSxcbiAgXCJwLTFcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxMFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTBcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxMFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjEwXCJcbiAgfSxcbiAgXCJwLTJcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjBcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIyMFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjIwXCJcbiAgfSxcbiAgXCJwLTNcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCIzMFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMzBcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIzMFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjMwXCJcbiAgfSxcbiAgXCJwLTRcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCI0MFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNDBcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCI0MFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjQwXCJcbiAgfSxcbiAgXCJwLTVcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCI1MFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNTBcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCI1MFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjUwXCJcbiAgfSxcbiAgXCJweC0wXCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IDAsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogMFxuICB9LFxuICBcInB4XCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiNVwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNVwiXG4gIH0sXG4gIFwicHgtMVwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjEwXCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxMFwiXG4gIH0sXG4gIFwicHgtMlwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwXCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyMFwiXG4gIH0sXG4gIFwicHgtM1wiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjMwXCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIzMFwiXG4gIH0sXG4gIFwicHgtNFwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjQwXCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI0MFwiXG4gIH0sXG4gIFwicHgtNVwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjUwXCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI1MFwiXG4gIH0sXG4gIFwicHktMFwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IDAsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IDBcbiAgfSxcbiAgXCJweVwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiNVwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjVcIlxuICB9LFxuICBcInB5LTFcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjEwXCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTBcIlxuICB9LFxuICBcInB5LTJcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjIwXCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMjBcIlxuICB9LFxuICBcInB5LTNcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjMwXCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMzBcIlxuICB9LFxuICBcInB5LTRcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjQwXCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiNDBcIlxuICB9LFxuICBcInB5LTVcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjUwXCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiNTBcIlxuICB9LFxuICBcInB0LTBcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiAwXG4gIH0sXG4gIFwicHRcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjVcIlxuICB9LFxuICBcInB0LTFcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjEwXCJcbiAgfSxcbiAgXCJwdC0yXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIyMFwiXG4gIH0sXG4gIFwicHQtM1wiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMzBcIlxuICB9LFxuICBcInB0LTRcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjQwXCJcbiAgfSxcbiAgXCJwdC01XCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCI1MFwiXG4gIH0sXG4gIFwicGItMFwiOiB7XG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IDBcbiAgfSxcbiAgXCJwYlwiOiB7XG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiNVwiXG4gIH0sXG4gIFwicGItMVwiOiB7XG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTBcIlxuICB9LFxuICBcInBiLTJcIjoge1xuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjIwXCJcbiAgfSxcbiAgXCJwYi0zXCI6IHtcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIzMFwiXG4gIH0sXG4gIFwicGItNFwiOiB7XG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiNDBcIlxuICB9LFxuICBcInBiLTVcIjoge1xuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjUwXCJcbiAgfSxcbiAgXCJwbC0wXCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IDBcbiAgfSxcbiAgXCJwbFwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjVcIlxuICB9LFxuICBcInBsLTFcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxMFwiXG4gIH0sXG4gIFwicGwtMlwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwXCJcbiAgfSxcbiAgXCJwbC0zXCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMzBcIlxuICB9LFxuICBcInBsLTRcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCI0MFwiXG4gIH0sXG4gIFwicGwtNVwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjUwXCJcbiAgfSxcbiAgXCJwci0wXCI6IHtcbiAgICBcInBhZGRpbmdSaWdodFwiOiAwXG4gIH0sXG4gIFwicHJcIjoge1xuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNVwiXG4gIH0sXG4gIFwicHItMVwiOiB7XG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxMFwiXG4gIH0sXG4gIFwicHItMlwiOiB7XG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyMFwiXG4gIH0sXG4gIFwicHItM1wiOiB7XG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIzMFwiXG4gIH0sXG4gIFwicHItNFwiOiB7XG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI0MFwiXG4gIH0sXG4gIFwicHItNVwiOiB7XG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI1MFwiXG4gIH1cbn0iLCJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSFEOlxcXFxIQnVpbGRlclguMS44LjIuMjAxOTA0MDEuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhRDpcXFxcSEJ1aWxkZXJYLjEuOC4yLjIwMTkwNDAxLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCEuL2NvbW1vbi1saXN0Lm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclguMS44LjIuMjAxOTA0MDEuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyFEOlxcXFxIQnVpbGRlclguMS44LjIuMjAxOTA0MDEuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhRDpcXFxcSEJ1aWxkZXJYLjEuOC4yLjIwMTkwNDAxLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxccG9zdGNzcy1sb2FkZXJcXFxcc3JjXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyFEOlxcXFxIQnVpbGRlclguMS44LjIuMjAxOTA0MDEuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhLi9jb21tb24tbGlzdC5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJjb21tb24tbGlzdFwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIuNXJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMi41cnB4XCJcbiAgfSxcbiAgXCJjb21tb24tbGlzdC1jb3ZlclwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjM3MHJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzcwcnB4XCJcbiAgfSxcbiAgXCJjb21tb24tbGlzdC1saW5lc1wiOiB7XG4gICAgXCJsaW5lc1wiOiAxXG4gIH1cbn0iLCJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSFEOlxcXFxIQnVpbGRlclguMS44LjIuMjAxOTA0MDEuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhRDpcXFxcSEJ1aWxkZXJYLjEuOC4yLjIwMTkwNDAxLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCEuL2luZGV4Lm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSFEOlxcXFxIQnVpbGRlclguMS44LjIuMjAxOTA0MDEuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhRDpcXFxcSEJ1aWxkZXJYLjEuOC4yLjIwMTkwNDAxLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCEuL2luZGV4Lm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwic2Nyb2xsLWhcIjoge1xuICAgIFwid2lkdGhcIjogXCI3NTBycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjgwcnB4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCJcbiAgfSxcbiAgXCJzd2lwZXItYm94XCI6IHtcbiAgICBcImZsZXhcIjogMVxuICB9LFxuICBcInVuaS10YWItaXRlbVwiOiB7XG4gICAgXCJmbGV4V3JhcFwiOiBcIm5vd3JhcFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIzNHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMzRycHhcIlxuICB9LFxuICBcInVuaS10YWItaXRlbS10aXRsZVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiM1NTU1NTVcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzBycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjgwcnB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiODBycHhcIixcbiAgICBcImZsZXhXcmFwXCI6IFwibm93cmFwXCJcbiAgfSxcbiAgXCJ1bmktdGFiLWl0ZW0tdGl0bGUtYWN0aXZlXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI0ZENjgwMVwiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogXCIyXCIsXG4gICAgXCJib3JkZXJTdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJCb3R0b21Db2xvclwiOiBcIiNGRDY4MDFcIlxuICB9XG59IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclguMS44LjIuMjAxOTA0MDEuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyFEOlxcXFxIQnVpbGRlclguMS44LjIuMjAxOTA0MDEuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhRDpcXFxcSEJ1aWxkZXJYLjEuOC4yLjIwMTkwNDAxLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxccG9zdGNzcy1sb2FkZXJcXFxcc3JjXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyFEOlxcXFxIQnVpbGRlclguMS44LjIuMjAxOTA0MDEuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYLjEuOC4yLjIwMTkwNDAxLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhRDpcXFxcSEJ1aWxkZXJYLjEuOC4yLjIwMTkwNDAxLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiFEOlxcXFxIQnVpbGRlclguMS44LjIuMjAxOTA0MDEuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhRDpcXFxcSEJ1aWxkZXJYLjEuOC4yLjIwMTkwNDAxLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwicG9zaXRpb24tYWJzb2x1dGVcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiXG4gIH0sXG4gIFwicG9zaXRpb24tZml4ZWRcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJmaXhlZFwiXG4gIH0sXG4gIFwicG9zaXRpb24tcmVsYXRpdmVcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiXG4gIH0sXG4gIFwibGVmdC0wXCI6IHtcbiAgICBcImxlZnRcIjogMFxuICB9LFxuICBcInRvcC0wXCI6IHtcbiAgICBcInRvcFwiOiAwXG4gIH0sXG4gIFwiYm90dG9tLTBcIjoge1xuICAgIFwiYm90dG9tXCI6IDBcbiAgfSxcbiAgXCJyaWdodC0wXCI6IHtcbiAgICBcInJpZ2h0XCI6IDBcbiAgfSxcbiAgXCJ3LTEwMFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjc1MHJweFwiXG4gIH0sXG4gIFwidy01MFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjM3NXJweFwiXG4gIH0sXG4gIFwiaC0xMDBcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiMTI1MHJweFwiXG4gIH0sXG4gIFwiaC01MFwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCI2MjVycHhcIlxuICB9LFxuICBcImZvbnRcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIxNVwiXG4gIH0sXG4gIFwiZm9udC1zbVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjE4XCJcbiAgfSxcbiAgXCJmb250LW1kXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMzBcIlxuICB9LFxuICBcImZvbnQtbGdcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCI0MFwiXG4gIH0sXG4gIFwiZm9udC1iaWdcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCI2MFwiXG4gIH0sXG4gIFwiZm9udC13ZWlnaHRcIjoge1xuICAgIFwiZm9udFdlaWdodFwiOiBcImJvbGRcIlxuICB9LFxuICBcImZvbnQtd2VpZ2h0LTEwMFwiOiB7XG4gICAgXCJmb250V2VpZ2h0XCI6IFwiMTAwXCJcbiAgfSxcbiAgXCJsaW5lLXRocm91Z2hcIjoge1xuICAgIFwidGV4dERlY29yYXRpb25cIjogXCJsaW5lLXRocm91Z2hcIlxuICB9LFxuICBcInJvd1wiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJmbGV4V3JhcFwiOiBcIndyYXBcIlxuICB9LFxuICBcImNvbC0xXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNjIuNXJweFwiXG4gIH0sXG4gIFwiY29sLTJcIjoge1xuICAgIFwid2lkdGhcIjogXCIxMjVycHhcIlxuICB9LFxuICBcImNvbC0zXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTg3LjVycHhcIlxuICB9LFxuICBcImNvbC00XCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMjUwcnB4XCJcbiAgfSxcbiAgXCJjb2wtNVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjMxMi41cnB4XCJcbiAgfSxcbiAgXCJjb2wtNlwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjM3NXJweFwiXG4gIH0sXG4gIFwiY29sLTdcIjoge1xuICAgIFwid2lkdGhcIjogXCI0MzcuNXJweFwiXG4gIH0sXG4gIFwiY29sLThcIjoge1xuICAgIFwid2lkdGhcIjogXCI1MDBycHhcIlxuICB9LFxuICBcImNvbC05XCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNTYyLjVycHhcIlxuICB9LFxuICBcImNvbC0xMFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjYyNXJweFwiXG4gIH0sXG4gIFwiY29sLTExXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNjg3LjVycHhcIlxuICB9LFxuICBcImNvbC0xMlwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjc1MHJweFwiXG4gIH0sXG4gIFwiZmxleC0xXCI6IHtcbiAgICBcImZsZXhcIjogMVxuICB9LFxuICBcImZsZXgtY29sdW1uXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIlxuICB9LFxuICBcImZsZXgtcm93XCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIlxuICB9LFxuICBcImZsZXgtd3JhcFwiOiB7XG4gICAgXCJmbGV4V3JhcFwiOiBcIndyYXBcIlxuICB9LFxuICBcImZsZXgtbm93cmFwXCI6IHtcbiAgICBcImZsZXhXcmFwXCI6IFwibm93cmFwXCJcbiAgfSxcbiAgXCJqLXN0YXJ0XCI6IHtcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiZmxleC1zdGFydFwiXG4gIH0sXG4gIFwiai1jZW50ZXJcIjoge1xuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcImotZW5kXCI6IHtcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiZmxleC1lbmRcIlxuICB9LFxuICBcImotc2JcIjoge1xuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCJcbiAgfSxcbiAgXCJhLWNlbnRlclwiOiB7XG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJhLXN0YXJ0XCI6IHtcbiAgICBcImFsaWduSXRlbXNcIjogXCJmbGV4LXN0YXJ0XCJcbiAgfSxcbiAgXCJhLWVuZFwiOiB7XG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiZmxleC1lbmRcIlxuICB9LFxuICBcImEtc3RyZXRjaFwiOiB7XG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwic3RyZXRjaFwiXG4gIH0sXG4gIFwiYm9yZGVyXCI6IHtcbiAgICBcImJvcmRlcldpZHRoXCI6IFwiMXJweFwiLFxuICAgIFwiYm9yZGVyU3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjZGVlMmU2XCJcbiAgfSxcbiAgXCJib3JkZXItdG9wXCI6IHtcbiAgICBcImJvcmRlclRvcFdpZHRoXCI6IFwiMXJweFwiLFxuICAgIFwiYm9yZGVyVG9wU3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyVG9wQ29sb3JcIjogXCIjZGVlMmU2XCJcbiAgfSxcbiAgXCJib3JkZXItcmlnaHRcIjoge1xuICAgIFwiYm9yZGVyUmlnaHRXaWR0aFwiOiBcIjFycHhcIixcbiAgICBcImJvcmRlclJpZ2h0U3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyUmlnaHRDb2xvclwiOiBcIiNkZWUyZTZcIlxuICB9LFxuICBcImJvcmRlci1ib3R0b21cIjoge1xuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogXCIxcnB4XCIsXG4gICAgXCJib3JkZXJCb3R0b21TdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJCb3R0b21Db2xvclwiOiBcIiNkZWUyZTZcIlxuICB9LFxuICBcImJvcmRlci1sZWZ0XCI6IHtcbiAgICBcImJvcmRlckxlZnRXaWR0aFwiOiBcIjFycHhcIixcbiAgICBcImJvcmRlckxlZnRTdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJMZWZ0Q29sb3JcIjogXCIjZGVlMmU2XCJcbiAgfSxcbiAgXCJib3JkZXItMFwiOiB7XG4gICAgXCJib3JkZXJXaWR0aFwiOiAwXG4gIH0sXG4gIFwiYm9yZGVyLXRvcC0wXCI6IHtcbiAgICBcImJvcmRlclRvcFdpZHRoXCI6IDBcbiAgfSxcbiAgXCJib3JkZXItcmlnaHQtMFwiOiB7XG4gICAgXCJib3JkZXJSaWdodFdpZHRoXCI6IDBcbiAgfSxcbiAgXCJib3JkZXItYm90dG9tLTBcIjoge1xuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogMFxuICB9LFxuICBcImJvcmRlci1sZWZ0LTBcIjoge1xuICAgIFwiYm9yZGVyTGVmdFdpZHRoXCI6IDBcbiAgfSxcbiAgXCJib3JkZXItcHJpbWFyeVwiOiB7XG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiMwMDdiZmZcIlxuICB9LFxuICBcImJvcmRlci1zZWNvbmRhcnlcIjoge1xuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjNmM3NTdkXCJcbiAgfSxcbiAgXCJib3JkZXItc3VjY2Vzc1wiOiB7XG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiM2Yzc1N2RcIlxuICB9LFxuICBcImJvcmRlci1kYW5nZXJcIjoge1xuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjZGMzNTQ1XCJcbiAgfSxcbiAgXCJib3JkZXItd2FybmluZ1wiOiB7XG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiNmZmMxMDdcIlxuICB9LFxuICBcImJvcmRlci1pbmZvXCI6IHtcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiIzE3YTJiOFwiXG4gIH0sXG4gIFwiYm9yZGVyLWxpZ2h0XCI6IHtcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiI2Y4ZjlmYVwiXG4gIH0sXG4gIFwiYm9yZGVyLWRhcmtcIjoge1xuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjMzQzYTQwXCJcbiAgfSxcbiAgXCJib3JkZXItd2hpdGVcIjoge1xuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJib3JkZXItbGlnaHQtc2Vjb25kYXJ5XCI6IHtcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiI0YxRjFGMVwiXG4gIH0sXG4gIFwicmFkaXVzXCI6IHtcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjVycHhcIlxuICB9LFxuICBcInJhZGl1cy1jaXJjbGVcIjoge1xuICAgIFwiYm9yZGVyUmFkaXVzXCI6IDEwMFxuICB9LFxuICBcInJhZGl1cy0wXCI6IHtcbiAgICBcImJvcmRlclJhZGl1c1wiOiAwXG4gIH0sXG4gIFwidGV4dC1wcmltYXJ5XCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzAwN2JmZlwiXG4gIH0sXG4gIFwidGV4dC1zZWNvbmRhcnlcIjoge1xuICAgIFwiY29sb3JcIjogXCIjNmM3NTdkXCJcbiAgfSxcbiAgXCJ0ZXh0LXN1Y2Nlc3NcIjoge1xuICAgIFwiY29sb3JcIjogXCIjNmM3NTdkXCJcbiAgfSxcbiAgXCJ0ZXh0LWRhbmdlclwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNkYzM1NDVcIlxuICB9LFxuICBcInRleHQtd2FybmluZ1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNmZmMxMDdcIlxuICB9LFxuICBcInRleHQtaW5mb1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMxN2EyYjhcIlxuICB9LFxuICBcInRleHQtbGlnaHRcIjoge1xuICAgIFwiY29sb3JcIjogXCIjZjhmOWZhXCJcbiAgfSxcbiAgXCJ0ZXh0LWRhcmtcIjoge1xuICAgIFwiY29sb3JcIjogXCIjMzQzYTQwXCJcbiAgfSxcbiAgXCJ0ZXh0LW11dGVkXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzZjNzU3ZFwiXG4gIH0sXG4gIFwidGV4dC1saWdodC1tdXRlZFwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNCMkIyQjJcIlxuICB9LFxuICBcInRleHQtd2hpdGVcIjoge1xuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJiZy1wcmltYXJ5XCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMwMDdiZmZcIlxuICB9LFxuICBcImJnLXNlY29uZGFyeVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjNmM3NTdkXCJcbiAgfSxcbiAgXCJiZy1zdWNjZXNzXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiM2Yzc1N2RcIlxuICB9LFxuICBcImJnLWRhbmdlclwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZGMzNTQ1XCJcbiAgfSxcbiAgXCJiZy13YXJuaW5nXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmMxMDdcIlxuICB9LFxuICBcImJnLWluZm9cIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzE3YTJiOFwiXG4gIH0sXG4gIFwiYmctbGlnaHRcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2Y4ZjlmYVwiXG4gIH0sXG4gIFwiYmctZGFya1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMzQzYTQwXCJcbiAgfSxcbiAgXCJiZy13aGl0ZVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJtLTBcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiAwLFxuICAgIFwibWFyZ2luUmlnaHRcIjogMCxcbiAgICBcIm1hcmdpblRvcFwiOiAwLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IDBcbiAgfSxcbiAgXCJtXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1cnB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVycHhcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVycHhcIlxuICB9LFxuICBcIm0tMVwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMTBycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMTBycHhcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjEwcnB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxMHJweFwiXG4gIH0sXG4gIFwibS0yXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIyMHJweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIyMHJweFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMjBycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJtLTNcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjMwcnB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjMwcnB4XCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIzMHJweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMzBycHhcIlxuICB9LFxuICBcIm0tNFwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNDBycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNDBycHhcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjQwcnB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI0MHJweFwiXG4gIH0sXG4gIFwibS01XCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1MHJweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1MHJweFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNTBycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjUwcnB4XCJcbiAgfSxcbiAgXCJteC0wXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogMCxcbiAgICBcIm1hcmdpblJpZ2h0XCI6IDBcbiAgfSxcbiAgXCJteFwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNXJweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1cnB4XCJcbiAgfSxcbiAgXCJteC0xXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIxMHJweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxMHJweFwiXG4gIH0sXG4gIFwibXgtMlwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMjBycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMjBycHhcIlxuICB9LFxuICBcIm14LTNcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjMwcnB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJteC00XCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI0MHJweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI0MHJweFwiXG4gIH0sXG4gIFwibXgtNVwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNTBycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNTBycHhcIlxuICB9LFxuICBcIm15LTBcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IDAsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogMFxuICB9LFxuICBcIm15XCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVycHhcIlxuICB9LFxuICBcIm15LTFcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMTBycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjEwcnB4XCJcbiAgfSxcbiAgXCJteS0yXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjIwcnB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIyMHJweFwiXG4gIH0sXG4gIFwibXktM1wiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIzMHJweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMzBycHhcIlxuICB9LFxuICBcIm15LTRcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiNDBycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjQwcnB4XCJcbiAgfSxcbiAgXCJteS01XCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjUwcnB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1MHJweFwiXG4gIH0sXG4gIFwibXQtMFwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogMFxuICB9LFxuICBcIm10XCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVycHhcIlxuICB9LFxuICBcIm10LTFcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMTBycHhcIlxuICB9LFxuICBcIm10LTJcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMjBycHhcIlxuICB9LFxuICBcIm10LTNcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMzBycHhcIlxuICB9LFxuICBcIm10LTRcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiNDBycHhcIlxuICB9LFxuICBcIm10LTVcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiNTBycHhcIlxuICB9LFxuICBcIm1iLTBcIjoge1xuICAgIFwibWFyZ2luQm90dG9tXCI6IDBcbiAgfSxcbiAgXCJtYlwiOiB7XG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1cnB4XCJcbiAgfSxcbiAgXCJtYi0xXCI6IHtcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjEwcnB4XCJcbiAgfSxcbiAgXCJtYi0yXCI6IHtcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJtYi0zXCI6IHtcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJtYi00XCI6IHtcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjQwcnB4XCJcbiAgfSxcbiAgXCJtYi01XCI6IHtcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjUwcnB4XCJcbiAgfSxcbiAgXCJtbC0wXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogMFxuICB9LFxuICBcIm1sXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1cnB4XCJcbiAgfSxcbiAgXCJtbC0xXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIxMHJweFwiXG4gIH0sXG4gIFwibWwtMlwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMjBycHhcIlxuICB9LFxuICBcIm1sLTNcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJtbC00XCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI0MHJweFwiXG4gIH0sXG4gIFwibWwtNVwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNTBycHhcIlxuICB9LFxuICBcIm1yLTBcIjoge1xuICAgIFwibWFyZ2luUmlnaHRcIjogMFxuICB9LFxuICBcIm1yXCI6IHtcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNXJweFwiXG4gIH0sXG4gIFwibXItMVwiOiB7XG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjEwcnB4XCJcbiAgfSxcbiAgXCJtci0yXCI6IHtcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMjBycHhcIlxuICB9LFxuICBcIm1yLTNcIjoge1xuICAgIFwibWFyZ2luUmlnaHRcIjogXCIzMHJweFwiXG4gIH0sXG4gIFwibXItNFwiOiB7XG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjQwcnB4XCJcbiAgfSxcbiAgXCJtci01XCI6IHtcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNTBycHhcIlxuICB9LFxuICBcInAtMFwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiAwLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IDAsXG4gICAgXCJwYWRkaW5nVG9wXCI6IDAsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IDBcbiAgfSxcbiAgXCJwXCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiNXJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNXJweFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjVycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCI1cnB4XCJcbiAgfSxcbiAgXCJwLTFcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxMHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTBycHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxMHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjEwcnB4XCJcbiAgfSxcbiAgXCJwLTJcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjBycHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIyMHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJwLTNcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCIzMHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMzBycHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIzMHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJwLTRcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCI0MHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNDBycHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCI0MHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjQwcnB4XCJcbiAgfSxcbiAgXCJwLTVcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCI1MHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNTBycHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCI1MHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjUwcnB4XCJcbiAgfSxcbiAgXCJweC0wXCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IDAsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogMFxuICB9LFxuICBcInB4XCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiNXJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNXJweFwiXG4gIH0sXG4gIFwicHgtMVwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjEwcnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxMHJweFwiXG4gIH0sXG4gIFwicHgtMlwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwcnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyMHJweFwiXG4gIH0sXG4gIFwicHgtM1wiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjMwcnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIzMHJweFwiXG4gIH0sXG4gIFwicHgtNFwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjQwcnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI0MHJweFwiXG4gIH0sXG4gIFwicHgtNVwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjUwcnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI1MHJweFwiXG4gIH0sXG4gIFwicGxyLTBcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogMCxcbiAgICBcInBhZGRpbmdSaWdodFwiOiAwXG4gIH0sXG4gIFwicGxyLXhcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCI1cnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI1cnB4XCJcbiAgfSxcbiAgXCJwbHItMVwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjEwcnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxMHJweFwiXG4gIH0sXG4gIFwicGxyLTJcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjBycHhcIlxuICB9LFxuICBcInBsci0zXCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMzBycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJwbHItNFwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjQwcnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI0MHJweFwiXG4gIH0sXG4gIFwicGxyLTVcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCI1MHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNTBycHhcIlxuICB9LFxuICBcInB5LTBcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiAwLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiAwXG4gIH0sXG4gIFwicHlcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjVycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCI1cnB4XCJcbiAgfSxcbiAgXCJweS0xXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxMHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjEwcnB4XCJcbiAgfSxcbiAgXCJweS0yXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIyMHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJweS0zXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIzMHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJweS00XCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCI0MHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjQwcnB4XCJcbiAgfSxcbiAgXCJweS01XCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCI1MHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjUwcnB4XCJcbiAgfSxcbiAgXCJwdC0wXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogMFxuICB9LFxuICBcInB0XCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCI1cnB4XCJcbiAgfSxcbiAgXCJwdC0xXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxMHJweFwiXG4gIH0sXG4gIFwicHQtMlwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMjBycHhcIlxuICB9LFxuICBcInB0LTNcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJwdC00XCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCI0MHJweFwiXG4gIH0sXG4gIFwicHQtNVwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiNTBycHhcIlxuICB9LFxuICBcInBiLTBcIjoge1xuICAgIFwicGFkZGluZ0JvdHRvbVwiOiAwXG4gIH0sXG4gIFwicGJcIjoge1xuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjVycHhcIlxuICB9LFxuICBcInBiLTFcIjoge1xuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjEwcnB4XCJcbiAgfSxcbiAgXCJwYi0yXCI6IHtcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyMHJweFwiXG4gIH0sXG4gIFwicGItM1wiOiB7XG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMzBycHhcIlxuICB9LFxuICBcInBiLTRcIjoge1xuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjQwcnB4XCJcbiAgfSxcbiAgXCJwYi01XCI6IHtcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCI1MHJweFwiXG4gIH0sXG4gIFwicGwtMFwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiAwXG4gIH0sXG4gIFwicGxcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCI1cnB4XCJcbiAgfSxcbiAgXCJwbC0xXCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTBycHhcIlxuICB9LFxuICBcInBsLTJcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMHJweFwiXG4gIH0sXG4gIFwicGwtM1wiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJwbC00XCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiNDBycHhcIlxuICB9LFxuICBcInBsLTVcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCI1MHJweFwiXG4gIH0sXG4gIFwicHItMFwiOiB7XG4gICAgXCJwYWRkaW5nUmlnaHRcIjogMFxuICB9LFxuICBcInByXCI6IHtcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjVycHhcIlxuICB9LFxuICBcInByLTFcIjoge1xuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTBycHhcIlxuICB9LFxuICBcInByLTJcIjoge1xuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjBycHhcIlxuICB9LFxuICBcInByLTNcIjoge1xuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMzBycHhcIlxuICB9LFxuICBcInByLTRcIjoge1xuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNDBycHhcIlxuICB9LFxuICBcInByLTVcIjoge1xuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNTBycHhcIlxuICB9LFxuICBcInNjcm9sbC1oXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNzUwcnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI4MHJweFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiXG4gIH0sXG4gIFwiZGl2aWRlclwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCIxOHJweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0Y1RjVGNVwiLFxuICAgIFwid2lkdGhcIjogMTAwXG4gIH0sXG4gIFwic3dpcGVyLXN0YXRpY1wiOiB7XG4gICAgXCJoZWlnaHRcIjogXCI4cnB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRkQ2ODAxXCJcbiAgfSxcbiAgXCJ0YWItaXRlbS10aXRsZVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiM1NTU1NTVcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzBycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjgwcnB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiODBycHhcIixcbiAgICBcImZsZXhXcmFwXCI6IFwibm93cmFwXCJcbiAgfSxcbiAgXCJ0YWItaXRlbS10aXRsZS1hY3RpdmVcIjoge1xuICAgIFwiY29sb3JcIjogXCIjRkQ2ODAxXCIsXG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiBcIjJcIixcbiAgICBcImJvcmRlclN0eWxlXCI6IFwic29saWRcIixcbiAgICBcImJvcmRlckJvdHRvbUNvbG9yXCI6IFwiI0ZENjgwMVwiXG4gIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4vLyBUaGlzIG1ldGhvZCBvZiBvYnRhaW5pbmcgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QgbmVlZHMgdG8gYmVcbi8vIGtlcHQgaWRlbnRpY2FsIHRvIHRoZSB3YXkgaXQgaXMgb2J0YWluZWQgaW4gcnVudGltZS5qc1xudmFyIGcgPSAoZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzIHx8ICh0eXBlb2Ygc2VsZiA9PT0gXCJvYmplY3RcIiAmJiBzZWxmKTtcbn0pKCkgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xuXG4vLyBVc2UgYGdldE93blByb3BlcnR5TmFtZXNgIGJlY2F1c2Ugbm90IGFsbCBicm93c2VycyBzdXBwb3J0IGNhbGxpbmdcbi8vIGBoYXNPd25Qcm9wZXJ0eWAgb24gdGhlIGdsb2JhbCBgc2VsZmAgb2JqZWN0IGluIGEgd29ya2VyLiBTZWUgIzE4My5cbnZhciBoYWRSdW50aW1lID0gZy5yZWdlbmVyYXRvclJ1bnRpbWUgJiZcbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZykuaW5kZXhPZihcInJlZ2VuZXJhdG9yUnVudGltZVwiKSA+PSAwO1xuXG4vLyBTYXZlIHRoZSBvbGQgcmVnZW5lcmF0b3JSdW50aW1lIGluIGNhc2UgaXQgbmVlZHMgdG8gYmUgcmVzdG9yZWQgbGF0ZXIuXG52YXIgb2xkUnVudGltZSA9IGhhZFJ1bnRpbWUgJiYgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG5cbi8vIEZvcmNlIHJlZXZhbHV0YXRpb24gb2YgcnVudGltZS5qcy5cbmcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL3J1bnRpbWVcIik7XG5cbmlmIChoYWRSdW50aW1lKSB7XG4gIC8vIFJlc3RvcmUgdGhlIG9yaWdpbmFsIHJ1bnRpbWUuXG4gIGcucmVnZW5lcmF0b3JSdW50aW1lID0gb2xkUnVudGltZTtcbn0gZWxzZSB7XG4gIC8vIFJlbW92ZSB0aGUgZ2xvYmFsIHByb3BlcnR5IGFkZGVkIGJ5IHJ1bnRpbWUuanMuXG4gIHRyeSB7XG4gICAgZGVsZXRlIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuICB9IGNhdGNoKGUpIHtcbiAgICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcbiAgfVxufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4hKGZ1bmN0aW9uKGdsb2JhbCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIHZhciBpbk1vZHVsZSA9IHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCI7XG4gIHZhciBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgaWYgKHJ1bnRpbWUpIHtcbiAgICBpZiAoaW5Nb2R1bGUpIHtcbiAgICAgIC8vIElmIHJlZ2VuZXJhdG9yUnVudGltZSBpcyBkZWZpbmVkIGdsb2JhbGx5IGFuZCB3ZSdyZSBpbiBhIG1vZHVsZSxcbiAgICAgIC8vIG1ha2UgdGhlIGV4cG9ydHMgb2JqZWN0IGlkZW50aWNhbCB0byByZWdlbmVyYXRvclJ1bnRpbWUuXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IHJ1bnRpbWU7XG4gICAgfVxuICAgIC8vIERvbid0IGJvdGhlciBldmFsdWF0aW5nIHRoZSByZXN0IG9mIHRoaXMgZmlsZSBpZiB0aGUgcnVudGltZSB3YXNcbiAgICAvLyBhbHJlYWR5IGRlZmluZWQgZ2xvYmFsbHkuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRGVmaW5lIHRoZSBydW50aW1lIGdsb2JhbGx5IChhcyBleHBlY3RlZCBieSBnZW5lcmF0ZWQgY29kZSkgYXMgZWl0aGVyXG4gIC8vIG1vZHVsZS5leHBvcnRzIChpZiB3ZSdyZSBpbiBhIG1vZHVsZSkgb3IgYSBuZXcsIGVtcHR5IG9iamVjdC5cbiAgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWUgPSBpbk1vZHVsZSA/IG1vZHVsZS5leHBvcnRzIDoge307XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgcnVudGltZS53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cbiAgICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBydW50aW1lLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgcnVudGltZS5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIHJ1bnRpbWUuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIHJ1bnRpbWUuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KVxuICAgICk7XG5cbiAgICByZXR1cm4gcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgcnVudGltZS5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIHJ1bnRpbWUudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG59KShcbiAgLy8gSW4gc2xvcHB5IG1vZGUsIHVuYm91bmQgYHRoaXNgIHJlZmVycyB0byB0aGUgZ2xvYmFsIG9iamVjdCwgZmFsbGJhY2sgdG9cbiAgLy8gRnVuY3Rpb24gY29uc3RydWN0b3IgaWYgd2UncmUgaW4gZ2xvYmFsIHN0cmljdCBtb2RlLiBUaGF0IGlzIHNhZGx5IGEgZm9ybVxuICAvLyBvZiBpbmRpcmVjdCBldmFsIHdoaWNoIHZpb2xhdGVzIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5LlxuICAoZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMgfHwgKHR5cGVvZiBzZWxmID09PSBcIm9iamVjdFwiICYmIHNlbGYpO1xuICB9KSgpIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKVxuKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
=======
/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbCwid2VicGFjazovLy9DOi9Vc2Vycy9odWxpbmNsb3VkL0RvY3VtZW50cy9IQnVpbGRlclByb2plY3RzL21pc2hvcC9tYWluLmpzPzAzMzkiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL2h1bGluY2xvdWQvRG9jdW1lbnRzL0hCdWlsZGVyUHJvamVjdHMvbWlzaG9wL3BhZ2VzL2luZGV4L2luZGV4Lm52dWU/NTk4NSIsIndlYnBhY2s6Ly8vQzovVXNlcnMvaHVsaW5jbG91ZC9Eb2N1bWVudHMvSEJ1aWxkZXJQcm9qZWN0cy9taXNob3AvcGFnZXMvaW5kZXgvaW5kZXgubnZ1ZT8zOGQwIiwid2VicGFjazovLy9DOi9Vc2Vycy9odWxpbmNsb3VkL0RvY3VtZW50cy9IQnVpbGRlclByb2plY3RzL21pc2hvcC9wYWdlcy9pbmRleC9pbmRleC5udnVlP2UxNDQiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL2h1bGluY2xvdWQvRG9jdW1lbnRzL0hCdWlsZGVyUHJvamVjdHMvbWlzaG9wL3BhZ2VzL2luZGV4L2luZGV4Lm52dWU/ZTM2MyIsInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgubnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy91bmktYXBwLXBsdXMtbnZ1ZS12OC9kaXN0L2luZGV4LmpzPzk5MmEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvbGliL2Zvcm1hdC1sb2cuanM/MGRlOSIsIndlYnBhY2s6Ly8vQzovVXNlcnMvaHVsaW5jbG91ZC9Eb2N1bWVudHMvSEJ1aWxkZXJQcm9qZWN0cy9taXNob3AvY29tcG9uZW50cy9jb21tb24vZGl2aWRlci5udnVlPzg5YTUiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL2h1bGluY2xvdWQvRG9jdW1lbnRzL0hCdWlsZGVyUHJvamVjdHMvbWlzaG9wL2NvbXBvbmVudHMvY29tbW9uL2RpdmlkZXIubnZ1ZT9iNzA3Iiwid2VicGFjazovLy9DOi9Vc2Vycy9odWxpbmNsb3VkL0RvY3VtZW50cy9IQnVpbGRlclByb2plY3RzL21pc2hvcC9jb21wb25lbnRzL2NvbW1vbi9kaXZpZGVyLm52dWU/YTM5NCIsIndlYnBhY2s6Ly8vQzovVXNlcnMvaHVsaW5jbG91ZC9Eb2N1bWVudHMvSEJ1aWxkZXJQcm9qZWN0cy9taXNob3AvY29tcG9uZW50cy9jb21tb24vZGl2aWRlci5udnVlPzBjZjIiLCJ1bmktYXBwOi8vL2NvbXBvbmVudHMvY29tbW9uL2RpdmlkZXIubnZ1ZSIsIndlYnBhY2s6Ly8vQzovVXNlcnMvaHVsaW5jbG91ZC9Eb2N1bWVudHMvSEJ1aWxkZXJQcm9qZWN0cy9taXNob3AvY29tcG9uZW50cy9jb21tb24vZGl2aWRlci5udnVlPzdlNjIiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL2h1bGluY2xvdWQvRG9jdW1lbnRzL0hCdWlsZGVyUHJvamVjdHMvbWlzaG9wL2NvbXBvbmVudHMvY29tbW9uL2RpdmlkZXIubnZ1ZT82NDgzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanM/Mjg3NyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvaHVsaW5jbG91ZC9Eb2N1bWVudHMvSEJ1aWxkZXJQcm9qZWN0cy9taXNob3AvY29tcG9uZW50cy9jb21tb24vY2FyZC52dWU/Y2E0ZSIsIndlYnBhY2s6Ly8vQzovVXNlcnMvaHVsaW5jbG91ZC9Eb2N1bWVudHMvSEJ1aWxkZXJQcm9qZWN0cy9taXNob3AvY29tcG9uZW50cy9jb21tb24vY2FyZC52dWU/ZjA4OSIsIndlYnBhY2s6Ly8vQzovVXNlcnMvaHVsaW5jbG91ZC9Eb2N1bWVudHMvSEJ1aWxkZXJQcm9qZWN0cy9taXNob3AvY29tcG9uZW50cy9jb21tb24vY2FyZC52dWU/NDk2MyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvaHVsaW5jbG91ZC9Eb2N1bWVudHMvSEJ1aWxkZXJQcm9qZWN0cy9taXNob3AvY29tcG9uZW50cy9jb21tb24vY2FyZC52dWU/NDA4NCIsInVuaS1hcHA6Ly8vY29tcG9uZW50cy9jb21tb24vY2FyZC52dWUiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL2h1bGluY2xvdWQvRG9jdW1lbnRzL0hCdWlsZGVyUHJvamVjdHMvbWlzaG9wL2NvbXBvbmVudHMvY29tbW9uL2NvbW1vbi1saXN0Lm52dWU/MmQ4NSIsIndlYnBhY2s6Ly8vQzovVXNlcnMvaHVsaW5jbG91ZC9Eb2N1bWVudHMvSEJ1aWxkZXJQcm9qZWN0cy9taXNob3AvY29tcG9uZW50cy9jb21tb24vY29tbW9uLWxpc3QubnZ1ZT80NTFlIiwid2VicGFjazovLy9DOi9Vc2Vycy9odWxpbmNsb3VkL0RvY3VtZW50cy9IQnVpbGRlclByb2plY3RzL21pc2hvcC9jb21wb25lbnRzL2NvbW1vbi9jb21tb24tbGlzdC5udnVlPzIwZjkiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL2h1bGluY2xvdWQvRG9jdW1lbnRzL0hCdWlsZGVyUHJvamVjdHMvbWlzaG9wL2NvbXBvbmVudHMvY29tbW9uL2NvbW1vbi1saXN0Lm52dWU/N2VhOCIsInVuaS1hcHA6Ly8vY29tcG9uZW50cy9jb21tb24vY29tbW9uLWxpc3QubnZ1ZSIsIndlYnBhY2s6Ly8vQzovVXNlcnMvaHVsaW5jbG91ZC9Eb2N1bWVudHMvSEJ1aWxkZXJQcm9qZWN0cy9taXNob3AvY29tcG9uZW50cy9jb21tb24vcHJpY2UubnZ1ZT82NmZmIiwid2VicGFjazovLy9DOi9Vc2Vycy9odWxpbmNsb3VkL0RvY3VtZW50cy9IQnVpbGRlclByb2plY3RzL21pc2hvcC9jb21wb25lbnRzL2NvbW1vbi9wcmljZS5udnVlPzRjNjUiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL2h1bGluY2xvdWQvRG9jdW1lbnRzL0hCdWlsZGVyUHJvamVjdHMvbWlzaG9wL2NvbXBvbmVudHMvY29tbW9uL3ByaWNlLm52dWU/OThjMyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvaHVsaW5jbG91ZC9Eb2N1bWVudHMvSEJ1aWxkZXJQcm9qZWN0cy9taXNob3AvY29tcG9uZW50cy9jb21tb24vcHJpY2UubnZ1ZT84NmEzIiwidW5pLWFwcDovLy9jb21wb25lbnRzL2NvbW1vbi9wcmljZS5udnVlIiwid2VicGFjazovLy9DOi9Vc2Vycy9odWxpbmNsb3VkL0RvY3VtZW50cy9IQnVpbGRlclByb2plY3RzL21pc2hvcC9jb21tb24vemNtLW1haW4tbnZ1ZS5jc3M/MWU5OSIsIndlYnBhY2s6Ly8vQzovVXNlcnMvaHVsaW5jbG91ZC9Eb2N1bWVudHMvSEJ1aWxkZXJQcm9qZWN0cy9taXNob3AvY29tbW9uL3pjbS1tYWluLW52dWUuY3NzP2NkM2YiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL2h1bGluY2xvdWQvRG9jdW1lbnRzL0hCdWlsZGVyUHJvamVjdHMvbWlzaG9wL2NvbXBvbmVudHMvY29tbW9uL2NvbW1vbi1saXN0Lm52dWU/OTNmMiIsIndlYnBhY2s6Ly8vQzovVXNlcnMvaHVsaW5jbG91ZC9Eb2N1bWVudHMvSEJ1aWxkZXJQcm9qZWN0cy9taXNob3AvY29tcG9uZW50cy9jb21tb24vY29tbW9uLWxpc3QubnZ1ZT85NjQ3Iiwid2VicGFjazovLy9DOi9Vc2Vycy9odWxpbmNsb3VkL0RvY3VtZW50cy9IQnVpbGRlclByb2plY3RzL21pc2hvcC9wYWdlcy9pbmRleC9pbmRleC5udnVlPzljNGUiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL2h1bGluY2xvdWQvRG9jdW1lbnRzL0hCdWlsZGVyUHJvamVjdHMvbWlzaG9wL3BhZ2VzL2luZGV4L2luZGV4Lm52dWU/ZTg5ZiIsIndlYnBhY2s6Ly8vQzovVXNlcnMvaHVsaW5jbG91ZC9Eb2N1bWVudHMvSEJ1aWxkZXJQcm9qZWN0cy9taXNob3AvQXBwLnZ1ZT9hMmFjIiwid2VicGFjazovLy9DOi9Vc2Vycy9odWxpbmNsb3VkL0RvY3VtZW50cy9IQnVpbGRlclByb2plY3RzL21pc2hvcC9BcHAudnVlP2Q1OTEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7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O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNlLDBHQUEyQyxFQUFDO0FBR3pEOzs7Ozs7Ozs7Ozs7QUM1d0JGO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMzQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1RjtBQUMzQjtBQUNMO0FBQ3ZEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLG1CQUFPLENBQUMseURBQWlEO0FBQzFGLFdBQVc7QUFDWCxnREFBZ0QsbUJBQU8sQ0FBQyx5REFBaUQ7QUFDekc7O0FBRUE7O0FBRUE7QUFDMko7QUFDM0osZ0JBQWdCLHdLQUFVO0FBQzFCLEVBQUUsOEVBQU07QUFDUixFQUFFLG1GQUFNO0FBQ1IsRUFBRSw0RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNlLGdGOzs7Ozs7Ozs7OztBQ2pDZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJCQUEyQjtBQUNoRDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUFBO0FBQUE7QUFBQTtBQUFnZCxDQUFnQiw0ZkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1VwZSxFOzs7Ozs7Ozs7OztBQ1ZBO0FBQUE7QUFBQTtBQUFBO0FBQWkwQixDQUFnQixrMUJBQUcsRUFBQyxDOzs7Ozs7Ozs7O0FDQXIxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7OztBQ05BO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzVGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1GO0FBQzNCO0FBQ0w7QUFDbkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQzJKO0FBQzNKLGdCQUFnQix3S0FBVTtBQUMxQixFQUFFLDBFQUFNO0FBQ1IsRUFBRSwrRUFBTTtBQUNSLEVBQUUsd0ZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDZSxnRjs7Ozs7Ozs7Ozs7QUM1QmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix3QkFBd0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLDBCQUEwQjtBQUNqQztBQUNBO0FBQ0EsMkJBQTJCLFNBQVMsdUNBQXVDLEVBQUU7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDM0NBO0FBQUE7QUFBQTtBQUFBO0FBQXNkLENBQWdCLG1nQkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNvQjFlO0FBQ0E7QUFDQTtBQUNBLHFCQUZBO0FBR0E7QUFDQSxxQkFKQTtBQUtBO0FBQ0E7QUFDQSxtQkFEQTtBQUVBLG1CQUZBLEVBTkE7O0FBVUE7QUFDQTtBQUNBLG1CQURBO0FBRUEsbUJBRkEsRUFYQTs7QUFlQTtBQUNBO0FBQ0EsbUJBREE7QUFFQSxtQkFGQSxFQWhCQTs7QUFvQkE7QUFDQTtBQUNBLG1CQURBO0FBRUEsb0JBRkEsRUFyQkEsRUFEQTs7O0FBMkJBO0FBQ0EsZ0JBREEsMEJBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FKQTtBQUtBLGdCQUxBLDBCQUtBO0FBQ0E7QUFDQTtBQUNBLEtBUkEsRUEzQkEsRTs7Ozs7Ozs7Ozs7QUNwQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEyRjtBQUMzQjtBQUNMO0FBQzNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLG1CQUFPLENBQUMsNkRBQXFEO0FBQzlGLFdBQVc7QUFDWCxnREFBZ0QsbUJBQU8sQ0FBQyw2REFBcUQ7QUFDN0c7O0FBRUE7O0FBRUE7QUFDMko7QUFDM0osZ0JBQWdCLHdLQUFVO0FBQzFCLEVBQUUsa0ZBQU07QUFDUixFQUFFLHVGQUFNO0FBQ1IsRUFBRSxnR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNlLGdGOzs7Ozs7Ozs7OztBQ2pDZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxnREFBZ0Q7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDREQUE0RDtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM1REE7QUFBQTtBQUFBO0FBQUE7QUFBb2QsQ0FBZ0IsZ2dCQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZ0J4ZSxtRzs7Ozs7Ozs7Ozs7Ozs7O2VBQ0EsRUFDQSxjQUNBLHFCQURBLEVBREEsRUFJQSxTQUNBLFlBREEsRUFFQSxhQUZBLEVBSkEsRUFRQSxXQUNBLFVBREEsd0JBQ0EsQ0FDQSxpQkFDQSwyQkFEQSxJQUdBLENBTEEsRUFSQSxFOzs7Ozs7Ozs7Ozs7QUNqQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFxRjtBQUMzQjtBQUNMO0FBQ3JEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLG1CQUFPLENBQUMscUVBQTZEO0FBQ3RHLFdBQVc7QUFDWCxnREFBZ0QsbUJBQU8sQ0FBQyxxRUFBNkQ7QUFDckg7O0FBRUE7O0FBRUE7QUFDMko7QUFDM0osZ0JBQWdCLHdLQUFVO0FBQzFCLEVBQUUsNEVBQU07QUFDUixFQUFFLGlGQUFNO0FBQ1IsRUFBRSwwRkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNlLGdGOzs7Ozs7Ozs7OztBQ2pDZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyw0QkFBNEI7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsV0FBVyxzQ0FBc0MsbUJBQW1CLEVBQUU7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGVBQWUscUNBQXFDLEVBQUU7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFBQTtBQUFBO0FBQUE7QUFBOGMsQ0FBZ0IsMGZBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNVbGUsRTs7Ozs7Ozs7Ozs7QUNWQTtBQUFBO0FBQUE7QUFBQTtBQUFpdEIsQ0FBZ0IsNnVCQUFHLEVBQUMsQzs7Ozs7Ozs7OztBQ0FydUI7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7QUNob0JBO0FBQUE7QUFBQTtBQUFBO0FBQXEwQixDQUFnQixzMUJBQUcsRUFBQyxDOzs7Ozs7Ozs7O0FDQXoxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7QUNaQTtBQUFBO0FBQUE7QUFBQTtBQUEwMEIsQ0FBZ0IsMjFCQUFHLEVBQUMsQzs7Ozs7Ozs7OztBQ0E5MUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7OztBQzNCQTtBQUFBO0FBQUE7QUFBQTtBQUFxMEIsQ0FBZ0IsdTFCQUFHLEVBQUMsQzs7Ozs7Ozs7OztBQ0F6MUI7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6InBhZ2VzL2luZGV4L2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiXG5pbXBvcnQgQXBwIGZyb20gJy4vcGFnZXMvaW5kZXgvaW5kZXgubnZ1ZT9tcFR5cGU9cGFnZSdcbkFwcC5tcFR5cGUgPSAncGFnZSdcbkFwcC5yb3V0ZSA9ICdwYWdlcy9pbmRleC9pbmRleCdcbkFwcC5lbCA9ICcjcm9vdCdcbkFwcC5hcHBTdHlsZSA9IHt9XG5WdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIpLmRlZmF1bHQsQXBwLmFwcFN0eWxlKVxuXG5uZXcgVnVlKEFwcClcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaW5kZXgubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lNDA5ZjU1YSZtcFR5cGU9cGFnZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZGV4Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLiRvcHRpb25zLnN0eWxlKXtcbiAgICB0aGlzLiRvcHRpb25zLnN0eWxlID0ge31cbn1cbmlmKHRoaXMuX19tZXJnZV9zdHlsZSAmJiB0aGlzLiRyb290ICYmIHRoaXMuJHJvb3QuJG9wdGlvbnMuYXBwU3R5bGUpe1xuICB0aGlzLl9fbWVyZ2Vfc3R5bGUodGhpcy4kcm9vdC4kb3B0aW9ucy5hcHBTdHlsZSlcbn1cbmlmKHRoaXMuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgIHRoaXMuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9pbmRleC5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdClcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLiRvcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL2luZGV4Lm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0KVxuICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIGluamVjdFN0eWxlcyxcbiAgbnVsbCxcbiAgXCIzZWQ5YjJmNVwiXG4gIFxuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkM6L1VzZXJzL2h1bGluY2xvdWQvRG9jdW1lbnRzL0hCdWlsZGVyUHJvamVjdHMvbWlzaG9wL3BhZ2VzL2luZGV4L2luZGV4Lm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclguMS44LjIuMjAxOTA0MDEuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxsb2FkZXJzXFxcXHRlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRDpcXFxcSEJ1aWxkZXJYLjEuOC4yLjIwMTkwNDAxLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcdGVtcGxhdGUuanMhRDpcXFxcSEJ1aWxkZXJYLjEuOC4yLjIwMTkwNDAxLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTctMCFEOlxcXFxIQnVpbGRlclguMS44LjIuMjAxOTA0MDEuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhLi9pbmRleC5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWU0MDlmNTVhJm1wVHlwZT1wYWdlXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwic2Nyb2xsLXZpZXdcIixcbiAgICB7XG4gICAgICBzdGF0aWNTdHlsZTogeyBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiIH0sXG4gICAgICBhdHRyczogeyBzY3JvbGxZOiB0cnVlLCBlbmFibGVCYWNrVG9Ub3A6IHRydWUsIGJ1YmJsZTogXCJ0cnVlXCIgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidmlld1wiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInNjcm9sbC12aWV3XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJzY3JvbGwtaFwiXSxcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBpZDogXCJ0YWItYmFyIHBvc2l0aW9uLWZpeGVkXCIsXG4gICAgICAgICAgICAgICAgc2Nyb2xsWDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzaG93U2Nyb2xsYmFyOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzY3JvbGxMZWZ0OiBfdm0uc2Nyb2xsbGVmdFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgX3ZtLl9sKF92bS50YWJCYXJzLCBmdW5jdGlvbih0YWIsIGluZGV4KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IHRhYi5pZCxcbiAgICAgICAgICAgICAgICAgIHJlZjogXCJ0YWJcIiArIGluZGV4LFxuICAgICAgICAgICAgICAgICAgcmVmSW5Gb3I6IHRydWUsXG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1widW5pLXRhYi1pdGVtXCJdLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IHRhYi5pZCwgZGF0YUN1cnJlbnQ6IGluZGV4IH0sXG4gICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLm9udGFidGFwIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInUtdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcInVuaS10YWItaXRlbS10aXRsZVwiXSxcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS50YWJJbmRleCA9PSBpbmRleCA/IFwidW5pLXRhYi1pdGVtLXRpdGxlLWFjdGl2ZVwiIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyh0YWIubmFtZSkpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIDBcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJzd2lwZXJcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcInN3aXBlci1ib3hcIl0sXG4gICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGhlaWdodDogXCI1NTBweFwiIH0sXG4gICAgICAgICAgICAgIGF0dHJzOiB7IGN1cnJlbnQ6IF92bS50YWJJbmRleCwgZHVyYXRpb246IDMwMCB9LFxuICAgICAgICAgICAgICBvbjogeyBjaGFuZ2U6IF92bS5vbnRhYmNoYW5nZSwgdG91Y2htb3ZlOiBfdm0udG91Y2ggfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF92bS5fbChfdm0udGFiQmFycywgZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgIFwic3dpcGVyLWl0ZW1cIixcbiAgICAgICAgICAgICAgICB7IGtleTogaW5kZXgsIHN0YXRpY0NsYXNzOiBbXCJmbGV4LTFcIl0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcInN3aXBlci1pdGVtXCJdIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3dpcGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kaWNhdG9yRG90czogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnZhbDogMzAwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTAwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaXJjdWxhcjogXCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uY2Fyb3VzZWxMaXN0LCBmdW5jdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2Fyb3VzZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhcm91c2VsSW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzd2lwZXItaXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiBjYXJvdXNlbEluZGV4IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ1LWltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcIjM1MHVweFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBfdm0uc2VydmVyVXJsICsgY2Fyb3VzZWwuY2hhcnRQYXRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhenlMb2FkOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcInctMTAwXCIsIFwicm93XCIsIFwicHgtMlwiLCBcIm14LTJcIl0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uaWNvbmRhdGEsIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcImotY2VudGVyXCIsIFwiYS1jZW50ZXJcIiwgXCJtdC0zXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgd2lkdGg6IFwiMTQydXB4XCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ1LWltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI1OHVweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI1OHVweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogaXRlbS5zcmMsIG1vZGU6IFwid2lkdGhGaXhcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInUtdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJmb250XCIsIFwidGV4dC1tdXRlZFwiLCBcIm10LTFcIl0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoaXRlbS5uYW1lKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZpZGVyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJmbGV4LXJvd1wiLCBcIm10LTJcIl0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ1LWltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMzczcnB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNTMwcnB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSaWdodDogXCIydXB4IHNvbGlkICNGNUY1RjVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogXCIuLi8uLi9zdGF0aWMvaW1hZ2UvaW1hZ2VzL2RlbW8vZGVtbzEuanBnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXp5TG9hZDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcImZsZXgtY29sdW1uXCJdIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ1LWltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIzNzVycHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMjY3cnB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tOiBcIjJycHggc29saWQgI0Y1RjVGNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIuLi8uLi9zdGF0aWMvaW1hZ2UvaW1hZ2VzL2RlbW8vZGVtbzIuanBnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInUtaW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjM3NXJweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIyNjRycHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLi4vLi4vc3RhdGljL2ltYWdlL2ltYWdlcy9kZW1vL2RlbW8zLmpwZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJyb3dcIiwgXCJqdXN0aWZ5LWJldHdlZW5cIiwgXCJ3LTEwMFwiXSB9LFxuICAgICAgICAgICAgX3ZtLl9sKF92bS5jb21tb25MaXN0LCBmdW5jdGlvbihpdGVtLCBpdGVtSW5kZXgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgICAgIHsga2V5OiBpdGVtSW5kZXggfSxcbiAgICAgICAgICAgICAgICBbX2MoXCJzaG9wLWxpc3RcIiwgeyBhdHRyczogeyBpdGVtOiBpdGVtLCBpbmRleDogaXRlbUluZGV4IH0gfSldLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAwXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclguMS44LjIuMjAxOTA0MDEuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTMtMCFEOlxcXFxIQnVpbGRlclguMS44LjIuMjAxOTA0MDEuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tMy0xIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCEuL2luZGV4Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclguMS44LjIuMjAxOTA0MDEuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTMtMCFEOlxcXFxIQnVpbGRlclguMS44LjIuMjAxOTA0MDEuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tMy0xIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCEuL2luZGV4Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiIsIjx0ZW1wbGF0ZT5cclxuICAgIDx2aWV3PlxyXG4gICAgICAgIDxzY3JvbGwtdmlldyBpZD1cInRhYi1iYXIgcG9zaXRpb24tZml4ZWRcIiBjbGFzcz1cInNjcm9sbC1oXCIgOnNjcm9sbC14PVwidHJ1ZVwiIDpzaG93LXNjcm9sbGJhcj1cImZhbHNlXCIgOnNjcm9sbC1sZWZ0PVwic2Nyb2xsbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgPHZpZXcgdi1mb3I9XCIodGFiLGluZGV4KSBpbiB0YWJCYXJzXCIgOmtleT1cInRhYi5pZFwiIDpyZWY9XCJgdGFiJHtpbmRleH1gXCIgY2xhc3M9XCJ1bmktdGFiLWl0ZW1cIiA6aWQ9XCJ0YWIuaWRcIiA6ZGF0YS1jdXJyZW50PVwiaW5kZXhcIiBAY2xpY2s9XCJvbnRhYnRhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwidW5pLXRhYi1pdGVtLXRpdGxlXCIgOmNsYXNzPVwidGFiSW5kZXg9PWluZGV4ID8gJ3VuaS10YWItaXRlbS10aXRsZS1hY3RpdmUnIDogJydcIj57e3RhYi5uYW1lfX08L3RleHQ+XHJcbiAgICAgICAgICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgPC9zY3JvbGwtdmlldz5cclxuICAgICAgICA8IS0tIOa7keWdlyAtLT5cclxuICAgICAgPCEtLSBHRyDnvJbnoIHlpLHotKUgLS0+XHJcbiAgICAgICAgICAgIDwhLS0gPHZpZXcgY2xhc3M9XCJzd2lwZXItc3RhdGljIG1sLTJcIiBzdHlsZT1cIndpZHRoOiAxMDB1cHg7XCI+XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L3ZpZXc+IC0tPlxyXG4gICAgICBcclxuICAgICAgICA8IS0tIOa7keWKqOa4suafkyAtLT5cclxuICAgICAgICA8c3dpcGVyIDpjdXJyZW50PVwidGFiSW5kZXhcIiBjbGFzcz1cInN3aXBlci1ib3hcIiA6ZHVyYXRpb249XCIzMDBcIiBAY2hhbmdlPVwib250YWJjaGFuZ2VcIiBzdHlsZT1cImhlaWdodDogNTUwcHg7XCIgQHRvdWNobW92ZT1cInRvdWNoXCI+XHJcbiAgICAgICAgICAgIDxzd2lwZXItaXRlbSBjbGFzcz1cImZsZXgtMVwiIHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIHRhYkJhcnNcIiA6a2V5PVwiaW5kZXhcIj5cclxuICAgICAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwic3dpcGVyLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tIOi9ruaSreWbviAtLT5cclxuICAgICAgICAgICAgPHN3aXBlciA6aW5kaWNhdG9yLWRvdHM9XCJ0cnVlXCIgOmF1dG9wbGF5PVwidHJ1ZVwiIDppbnRlcnZhbD1cIjMwMDBcIiA6ZHVyYXRpb249XCIxMDAwXCIgY2lyY3VsYXI9XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICA8c3dpcGVyLWl0ZW0gdi1mb3I9XCIoY2Fyb3VzZWwsIGNhcm91c2VsSW5kZXgpIGluIGNhcm91c2VsTGlzdFwiIDprZXk9XCJjYXJvdXNlbEluZGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltYWdlIDpzcmM9XCJzZXJ2ZXJVcmwgKyBjYXJvdXNlbC5jaGFydFBhdGhcIiBsYXp5LWxvYWQ9XCJ0cnVlXCIgc3R5bGU9XCJoZWlnaHQ6IDM1MHVweDtcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuICAgICAgICAgICAgICAgIDwvc3dpcGVyLWl0ZW0+XHJcbiAgICAgICAgICAgIDwvc3dpcGVyPlxyXG4gICAgICAgICAgICAgPCEtLSDlip/og73liIblnZcgLS0+XHJcbiAgICAgICAgICAgICA8dmlldyBjbGFzcz1cInctMTAwIHJvdyBweC0yIG14LTJcIiA+XHJcbiAgICAgICAgICAgICAgICA8dmlldyBjbGFzcz1cImotY2VudGVyIGEtY2VudGVyIG10LTNcIiBzdHlsZT1cIndpZHRoOiAxNDJ1cHg7XCIgdi1mb3I9XCIoaXRlbSxpbmRleCkgaW4gaWNvbmRhdGFcIiA6a2V5PVwiaW5kZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1hZ2UgOnNyYz1cIml0ZW0uc3JjXCIgbW9kZT1cIndpZHRoRml4XCIgc3R5bGU9XCJ3aWR0aDogNTh1cHg7aGVpZ2h0OiA1OHVweDtcIj48L2ltYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiZm9udCB0ZXh0LW11dGVkIG10LTFcIj57e2l0ZW0ubmFtZX19PC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgPC92aWV3PiBcclxuICAgICAgICAgICAgIDwvdmlldz5cclxuICAgICAgICAgICAgIDwhLS0g5YiG5Ymy57q/IC0tPlxyXG4gICAgICAgICAgICAgPGRpdmlkZXIgLz5cclxuICAgICAgICAgICAgIDwhLS0g5LiJ5Zu+IC0tPlxyXG4gICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJmbGV4LXJvdyBtdC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgPGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZS9pbWFnZXMvZGVtby9kZW1vMS5qcGdcIiBsYXp5LWxvYWQgc3R5bGU9XCJ3aWR0aDogMzczcnB4OyBoZWlnaHQ6IDUzMHJweDtib3JkZXItcmlnaHQ6IDJ1cHggc29saWQgI0Y1RjVGNTtcIj48L2ltYWdlPlxyXG4gICAgICAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwiZmxleC1jb2x1bW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgPGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZS9pbWFnZXMvZGVtby9kZW1vMi5qcGdcIiBzdHlsZT1cIndpZHRoOiAzNzVycHg7aGVpZ2h0OiAyNjdycHg7Ym9yZGVyLWJvdHRvbTogMnJweCBzb2xpZCAjRjVGNUY1O1wiPjwvaW1hZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2UvaW1hZ2VzL2RlbW8vZGVtbzMuanBnXCIgc3R5bGU9XCJ3aWR0aDogMzc1cnB4O2hlaWdodDogMjY0cnB4O1wiPjwvaW1hZ2U+XHJcbiAgICAgICAgICAgICAgICAgPC92aWV3PlxyXG4gICAgICAgICAgICAgPC92aWV3PlxyXG4gICAgICAgICAgICAgICAgPC92aWV3PlxyXG4gICAgICAgICAgICA8L3N3aXBlci1pdGVtPlxyXG4gICAgICAgIDwvc3dpcGVyPlxyXG4gICAgICAgIDwhLS0g5YiX6KGoIC0tPlxyXG4gICAgICAgIDx2aWV3IGNsYXNzPVwicm93IGp1c3RpZnktYmV0d2VlbiB3LTEwMFwiPlxyXG4gICAgICAgICAgICA8dmlldyB2LWZvcj1cIihpdGVtLCBpdGVtSW5kZXgpIGluIGNvbW1vbkxpc3RcIiA6a2V5PVwiaXRlbUluZGV4XCI+XHJcbiAgICAgICAgICAgICAgICA8c2hvcC1saXN0IDppdGVtPVwiaXRlbVwiIDppbmRleD1cIml0ZW1JbmRleFwiIC8+XHJcbiAgICAgICAgICAgIDwvdmlldz5cclxuICAgICAgICA8L3ZpZXc+XHJcbiAgICA8L3ZpZXc+XHJcbiAgIFxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IGRpdmlkZXIgZnJvbSBcIkAvY29tcG9uZW50cy9jb21tb24vZGl2aWRlci5udnVlXCJcclxuaW1wb3J0IGNhcmQgZnJvbSAnQC9jb21wb25lbnRzL2NvbW1vbi9jYXJkLnZ1ZSc7XHJcbmltcG9ydCBzaG9wTGlzdCBmcm9tIFwiQC9jb21wb25lbnRzL2NvbW1vbi9jb21tb24tbGlzdC5udnVlXCJcclxuY29uc3QgZG9tID0gd2VleC5yZXF1aXJlTW9kdWxlKCdkb20nKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgY29tcG9uZW50czp7XHJcbiAgICAgICAgZGl2aWRlcixcclxuICAgICAgICBjYXJkLFxyXG4gICAgICAgIHNob3BMaXN0XHJcbiAgICB9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgY2Fyb3VzZWxMaXN0OiBbXSxcclxuICAgICAgICAgICAgICAgIHNjcm9sbGxlZnQ6MCxcclxuICAgICAgICAgICAgICAgIGRldmljZUluZm86IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBzZXJ2ZXJVcmwgOiBcImh0dHA6Ly8xOTIuMTY4LjIuMjMzOjgwODFcIixcclxuICAgICAgICAgICAgICAgIGljb25kYXRhIDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgc3JjOlwiL3N0YXRpYy9pbWFnZS9pbWFnZXMvaW5kZXhuYXYvMS5wbmdcIixuYW1lOlwi5paw5ZOB5Y+R5biDXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHNyYzpcIi9zdGF0aWMvaW1hZ2UvaW1hZ2VzL2luZGV4bmF2LzIuZ2lmXCIsbmFtZTpcIuWwj+exs+S8l+etuVwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBzcmM6XCIvc3RhdGljL2ltYWdlL2ltYWdlcy9pbmRleG5hdi8zLmdpZlwiLG5hbWU6XCLku6Xml6fmjaLmlrBcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgc3JjOlwiL3N0YXRpYy9pbWFnZS9pbWFnZXMvaW5kZXhuYXYvNC5naWZcIixuYW1lOlwi5LiA5YiG5o2i5ZuiXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHNyYzpcIi9zdGF0aWMvaW1hZ2UvaW1hZ2VzL2luZGV4bmF2LzUuZ2lmXCIsbmFtZTpcIui2heWAvOeJueWNllwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBzcmM6XCIvc3RhdGljL2ltYWdlL2ltYWdlcy9pbmRleG5hdi82LmdpZlwiLG5hbWU6XCLlsI/nsbPnp5LmnYBcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgc3JjOlwiL3N0YXRpYy9pbWFnZS9pbWFnZXMvaW5kZXhuYXYvNy5naWZcIixuYW1lOlwi55yf5b+D5oOz6KaBXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHNyYzpcIi9zdGF0aWMvaW1hZ2UvaW1hZ2VzL2luZGV4bmF2LzguZ2lmXCIsbmFtZTpcIueUteinhueDreWNllwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBzcmM6XCIvc3RhdGljL2ltYWdlL2ltYWdlcy9pbmRleG5hdi85LmdpZlwiLG5hbWU6XCLlrrbnlLXng63ljZZcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgc3JjOlwiL3N0YXRpYy9pbWFnZS9pbWFnZXMvaW5kZXhuYXYvMTAuZ2lmXCIsbmFtZTpcIuexs+eyieWNoVwiIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBjb21tb25MaXN0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3ZlcjogJy4uLy4uL3N0YXRpYy9pbWFnZS9pbWFnZXMvZGVtby9jYXRlXzAxLnBuZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn546L5rqQVjgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjOiAn6L+Z6aKc5YC85L2g5LiN5Lmw77yfJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ByaWNlOiA5OTk5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcHJpY2U6IDk5OFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3ZlcjogJy4uLy4uL3N0YXRpYy9pbWFnZS9pbWFnZXMvZGVtby9jYXRlXzAxLnBuZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn546L5rqQVjgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjOiAn6L+Z6aKc5YC85L2g5LiN5Lmw77yfJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ByaWNlOiA5OTk5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcHJpY2U6IDk5OFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3ZlcjogJy4uLy4uL3N0YXRpYy9pbWFnZS9pbWFnZXMvZGVtby9jYXRlXzAxLnBuZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn546L5rqQVjgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjOiAn6L+Z6aKc5YC85L2g5LiN5Lmw77yfJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ByaWNlOiA5OTk5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcHJpY2U6IDk5OFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3ZlcjogJy4uLy4uL3N0YXRpYy9pbWFnZS9pbWFnZXMvZGVtby9jYXRlXzAxLnBuZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn546L5rqQVjgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjOiAn6L+Z6aKc5YC85L2g5LiN5Lmw77yfJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ByaWNlOiA5OTk5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcHJpY2U6IDk5OFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3ZlcjogJy4uLy4uL3N0YXRpYy9pbWFnZS9pbWFnZXMvZGVtby9jYXRlXzAxLnBuZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn546L5rqQVjgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjOiAn6L+Z6aKc5YC85L2g5LiN5Lmw77yfJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ByaWNlOiA5OTk5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcHJpY2U6IDk5OFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3ZlcjogJy4uLy4uL3N0YXRpYy9pbWFnZS9pbWFnZXMvZGVtby9jYXRlXzAxLnBuZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn546L5rqQVjgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjOiAn6L+Z6aKc5YC85L2g5LiN5Lmw77yfJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ByaWNlOiA5OTk5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcHJpY2U6IDk5OFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICB0YWJJbmRleDogMCxcclxuICAgICAgICAgICAgICAgIHRhYkJhcnM6W1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ+WFs+azqCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAnZ3VhbnpodSdcclxuICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICfmjqjojZAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogJ3R1aWppYW4nXHJcbiAgICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAn5L2T6IKyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICd0aXl1J1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ+eDreeCuScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAncmVkaWFuJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ+i0oue7jycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAnY2FpamluZydcclxuICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICflqLHkuZAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogJ3l1bGUnXHJcbiAgICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAn5Yab5LqLJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICdqdW5zaGknXHJcbiAgICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAn5Y6G5Y+yJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICdsaXNoaSdcclxuICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICfmnKzlnLAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogJ2JlbmRpJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBzY3JvbGxJbnRvOjAsXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zOntcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Q2l0eTogXCJcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgICBsZXQgbWUgPSB0aGlzO1xyXG4gICAgICAgICB1bmkuZ2V0TG9jYXRpb24oe1xyXG4gICAgICAgICAgICAgZ2VvY29kZTogdHJ1ZSxcclxuICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgLy/liqjmgIHkv67mlLnlr7zoiKrmoI/lnLDlnYBcclxuICAgICAgICAgICAgICAgIGxldCBjaXR5ID0gcmVzLmFkZHJlc3MuY2l0eTtcclxuICAgICAgICAgICAgICAgIGNpdHkgPSBjaXR5LnNwbGl0KFwi5biCXCIpLmpvaW4oXCJcIilcclxuICAgICAgICAgICAgICAgIG1lLm9wdGlvbnMuY3VycmVudENpdHkgPSBjaXR5XHJcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudFdlYnZpZXcgPSBwbHVzLndlYnZpZXcuY3VycmVudFdlYnZpZXcoKTtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRXZWJ2aWV3LnNldFRpdGxlTlZpZXdCdXR0b25TdHlsZSgwLCB7ICBcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBjaXR5LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgIH0pXHJcbiAgICAgICAgLy8gIHBsdXMuZGV2aWNlLmdldEluZm8oe1xyXG4gICAgICAgIC8vICAgICBhc3luYyBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2cocmVzLmltZWkpO1xyXG4gICAgICAgIC8vICAgICAgICAgbWUuZGV2aWNlSW5mbyA9IHJlcy5pbWVpIFxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAvLyAgICAgbGV0IGVtdWkgPSB0aGlzLmRldmljZUluZm8uc3BsaXQoXCIsXCIpXHJcbiAgICAgICAgLy8gfSw1MDApXHJcbiAgICAgICAgdW5pLm9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZCgoKT0+IHtcclxuICAgICAgICAgICAgdW5pLm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgdXJsOlwiLi4vc2VhcmNoL3NlYXJjaFwiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICBsZXQgeGhyID0gbmV3IHBsdXMubmV0LlhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgeGhyLm9wZW4oJ1BPU1QnLCAnaHR0cDovLzE5Mi4xNjguMi4yMzM6ODA4MS9pbmRleC9jYXJvdXNlbC9saXN0JylcclxuICAgICAgICAvLyDop6blj5FjaGFuZ2Xkuovku7ZcclxuICAgICAgICB4aHIuc2VuZCgpO1xyXG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7c3dpdGNoICggeGhyLnJlYWR5U3RhdGUgKSB7XHJcblx0XHRjYXNlIDQ6XHJcblx0XHRcdGlmICggeGhyLnN0YXR1cyA9PSAyMDAgKSB7XHJcblx0XHRcdFx0Ly8gbWUuY2Fyb3VzZWxMaXN0PSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpLmRhdGEuZGF0YS5yb3dzO1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgbWUuY2Fyb3VzZWxMaXN0ID0gZGF0YS5kYXRhLnJvd3M7XHJcbiAgICAgICAgICAgICAgICBcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyggXCJ4aHLor7fmsYLlpLHotKXvvJpcIit4aHIucmVhZHlTdGF0ZSApO1xyXG5cdFx0XHR9XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0ZGVmYXVsdCA6XHJcblx0XHRcdGJyZWFrO1xyXG5cdH19XHJcbiAgICB9XHJcbiAgICAsXHJcbiAgICBvbk5hdmlnYXRpb25CYXJCdXR0b25UYXAoZSkge1xyXG4gICAgICAgIGxldCBtZSA9IHRoaXNcclxuICAgICAgaWYoZS5mbG9hdCA9PT0gXCJsZWZ0XCIpIHtcclxuICAgICAgICAgIHVuaS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICB1cmw6IGAvcGFnZXMvc2VsZWN0Q2l0eS9zZWxlY3RDaXR5P2N1cnJlbnRDaXR5PSR7bWUub3B0aW9ucy5jdXJyZW50Q2l0eX1gXHJcbiAgICAgICAgICB9KVxyXG4gICAgICB9IFxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6e1xyXG4gICAgICAgIHRvdWNoKGUpe1xyXG4gICAgICAgICAgdGhpcy5tYXJnaW5MZWZ0ICs9IDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxvd2VyKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbnRhYnRhcChlKSB7XHJcbiAgICAgICAgICAgIGxldCBpbmRleCA9IGUudGFyZ2V0LmRhdGFzZXQuY3VycmVudCB8fCBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5jdXJyZW50O1xyXG4gICAgICAgICAgICB0aGlzLnRhYkluZGV4ID0gaW5kZXhcclxuICAgICAgICAgICAgLy8gdGhpcy5zd2l0Y2hUYWIoaW5kZXgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb250YWJjaGFuZ2UoZSkge1xyXG4gICAgICAgICAgICBsZXQgaW5kZXggPSBlLnRhcmdldC5jdXJyZW50IHx8IGUuZGV0YWlsLmN1cnJlbnQ7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGluZGV4KTtcclxuICAgICAgICAgICAgdGhpcy50YWJJbmRleCA9IGluZGV4XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGluZGV4KTtcclxuICAgICAgICAgICAgLy8gdGhpcy5zd2l0Y2hUYWIoaW5kZXgpO1xyXG4gICAgICAgICAgICBpZihpbmRleC01ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsbGVmdCArPSA2MFxyXG4gICAgICAgICAgICAgICAgfSwxKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgIH1cclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbiAgICAuc2Nyb2xsLWgge1xyXG4gICAgICAgIHdpZHRoOiA3NTB1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA4MHVweDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIC8qICNpZm5kZWYgQVBQLVBMVVMgKi9cclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIC8qICNlbmRpZiAqL1xyXG4gICAgfVxyXG4gICAgLnN3aXBlci1ib3gge1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICB9XHJcbiAgICAudW5pLXRhYi1pdGVtIHtcclxuICAgICAgICAvKiAjaWZuZGVmIEFQUC1QTFVTICovXHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIC8qICNlbmRpZiAqL1xyXG4gICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMzR1cHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMzR1cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC51bmktdGFiLWl0ZW0tdGl0bGUge1xyXG4gICAgICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzB1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA4MHVweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogODB1cHg7XHJcbiAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICAgICAgLyogI2lmbmRlZiBBUFAtUExVUyAqL1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgLyogI2VuZGlmICovXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC51bmktdGFiLWl0ZW0tdGl0bGUtYWN0aXZlIHtcclxuICAgICAgICBjb2xvcjogI0ZENjgwMTtcclxuICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XHJcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjRkQ2ODAxO1xyXG4gICAgfVxyXG48L3N0eWxlPlxyXG4iLCJmdW5jdGlvbiBpbml0VW5pKCkge1xyXG5cclxuICAgIHZhciBpc0ZuID0gZnVuY3Rpb24gaXNGbih2KSB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2ID09PSAnZnVuY3Rpb24nO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgaGFuZGxlUHJvbWlzZSA9IGZ1bmN0aW9uIGhhbmRsZVByb21pc2UocHJvbWlzZSkge1xyXG4gICAgICAgIHJldHVybiBwcm9taXNlLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICByZXR1cm4gW251bGwsIGRhdGFdO1xyXG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycikge1xyXG4gICAgICAgICAgICByZXR1cm4gW2Vycl07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBSRUdFWCA9IC9eXFwkfF5vbnxeY3JlYXRlfFN5bmMkfE1hbmFnZXIkfF5wYXVzZS87XHJcbiAgICB2YXIgQVBJX05PUk1BTF9MSVNUID0gWydvcycsICdnZXRDdXJyZW50U3ViTlZ1ZScsICdnZXRTdWJOVnVlQnlJZCcsICdzdG9wUmVjb3JkJywgJ3N0b3BWb2ljZScsXHJcbiAgICAgICAgJ3N0b3BCYWNrZ3JvdW5kQXVkaW8nLCAnc3RvcFB1bGxEb3duUmVmcmVzaCcsICdoaWRlS2V5Ym9hcmQnLCAnaGlkZVRvYXN0JywgJ2hpZGVMb2FkaW5nJyxcclxuICAgICAgICAnc2hvd05hdmlnYXRpb25CYXJMb2FkaW5nJywgJ2hpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZycsICdjYW5JVXNlJywgJ25hdmlnYXRlQmFjaycsICdjbG9zZVNvY2tldCcsXHJcbiAgICAgICAgJ3BhZ2VTY3JvbGxUbycsICdkcmF3Q2FudmFzJ1xyXG4gICAgXTtcclxuXHJcbiAgICB2YXIgc2hvdWxkUHJvbWlzZSA9IGZ1bmN0aW9uIHNob3VsZFByb21pc2UobmFtZSkge1xyXG4gICAgICAgIGlmIChSRUdFWC50ZXN0KG5hbWUpICYmIG5hbWUgIT09ICdjcmVhdGVCTEVDb25uZWN0aW9uJykge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh+QVBJX05PUk1BTF9MSVNULmluZGV4T2YobmFtZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIHByb21pc2lmeSA9IGZ1bmN0aW9uIHByb21pc2lmeShhcGkpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBwYXJhbXMgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXNbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNGbihvcHRpb25zLnN1Y2Nlc3MpIHx8IGlzRm4ob3B0aW9ucy5mYWlsKSB8fCBpc0ZuKG9wdGlvbnMuY29tcGxldGUpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXBpLmFwcGx5KHVuZGVmaW5lZCwgW29wdGlvbnNdLmNvbmNhdChwYXJhbXMpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlUHJvbWlzZShuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgICAgIGFwaS5hcHBseSh1bmRlZmluZWQsIFtPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzb2x2ZSxcclxuICAgICAgICAgICAgICAgICAgICBmYWlsOiByZWplY3RcclxuICAgICAgICAgICAgICAgIH0pXS5jb25jYXQocGFyYW1zKSk7XHJcbiAgICAgICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1leHRlbmQtbmF0aXZlICovXHJcbiAgICAgICAgICAgICAgICBQcm9taXNlLnByb3RvdHlwZS5maW5hbGx5ID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvbWlzZSA9IHRoaXMuY29uc3RydWN0b3I7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudGhlbihmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uKHJlYXNvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyByZWFzb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBvbk1lc3NhZ2VDYWxsYmFja3MgPSBbXTtcclxuXHJcbiAgICB2YXIgb3JpZ2luID0gdm9pZCAwO1xyXG5cclxuICAgIGZ1bmN0aW9uIG9uU3ViTlZ1ZU1lc3NhZ2UoZGF0YSkge1xyXG4gICAgICAgIG9uTWVzc2FnZUNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayh7XHJcbiAgICAgICAgICAgICAgICBvcmlnaW46IG9yaWdpbixcclxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHdlYnZpZXdJZCA9IHdlZXhQbHVzLndlYnZpZXcuY3VycmVudFdlYnZpZXcoKS5pZDtcclxuXHJcbiAgICB2YXIgY2hhbm5lbCA9IG5ldyBCcm9hZGNhc3RDaGFubmVsKCdVTkktQVBQLVNVQk5WVUUnKTtcclxuICAgIGNoYW5uZWwub25tZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQuZGF0YS50byA9PT0gd2Vidmlld0lkKSB7XHJcbiAgICAgICAgICAgIG9uU3ViTlZ1ZU1lc3NhZ2UoZXZlbnQuZGF0YS5kYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIHdyYXBwZXIod2Vidmlldykge1xyXG4gICAgICAgIHdlYnZpZXcuJHByb2Nlc3NlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIHZhciBjdXJyZW50V2Vidmlld0lkID0gd2VleFBsdXMud2Vidmlldy5jdXJyZW50V2VidmlldygpLmlkO1xyXG4gICAgICAgIHZhciBpc1BvcHVwTlZ1ZSA9IGN1cnJlbnRXZWJ2aWV3SWQgPT09IHdlYnZpZXcuaWQ7XHJcblxyXG4gICAgICAgIHZhciBob3N0TlZ1ZUlkID0gd2Vidmlldy5fX3VuaWFwcF9vcmlnaW5fdHlwZSA9PT0gJ3VuaU5WaWV3JyAmJiB3ZWJ2aWV3Ll9fdW5pYXBwX29yaWdpbl9pZDtcclxuICAgICAgICB2YXIgcG9wdXBOVnVlSWQgPSB3ZWJ2aWV3LmlkO1xyXG5cclxuICAgICAgICB3ZWJ2aWV3LnBvc3RNZXNzYWdlID0gZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoaG9zdE5WdWVJZCkge1xyXG4gICAgICAgICAgICAgICAgY2hhbm5lbC5wb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICB0bzogaXNQb3B1cE5WdWUgPyBob3N0TlZ1ZUlkIDogcG9wdXBOVnVlSWRcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdVbmlBcHBTdWJOVnVlJyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgd2Vidmlldy5vbk1lc3NhZ2UgPSBmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgICAgICAgICBvbk1lc3NhZ2VDYWxsYmFja3MucHVzaChjYWxsYmFjayk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKCF3ZWJ2aWV3Ll9fdW5pYXBwX21hc2tfaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvcmlnaW4gPSB3ZWJ2aWV3Ll9fdW5pYXBwX2hvc3Q7XHJcblxyXG4gICAgICAgIHZhciBtYXNrQ29sb3IgPSB3ZWJ2aWV3Ll9fdW5pYXBwX21hc2s7XHJcblxyXG4gICAgICAgIHZhciBtYXNrV2VidmlldyA9IHdlZXhQbHVzLndlYnZpZXcuZ2V0V2Vidmlld0J5SWQod2Vidmlldy5fX3VuaWFwcF9tYXNrX2lkKTtcbiAgICAgICAgbWFza1dlYnZpZXcgPSBtYXNrV2Vidmlldy5wYXJlbnQoKSB8fCBtYXNrV2VidmlldzsvL+WGjeasoeajgOa1i+eItlxyXG4gICAgICAgIHZhciBvbGRTaG93ID0gd2Vidmlldy5zaG93O1xyXG4gICAgICAgIHZhciBvbGRIaWRlID0gd2Vidmlldy5oaWRlO1xyXG4gICAgICAgIHZhciBvbGRDbG9zZSA9IHdlYnZpZXcuY2xvc2U7XHJcblxyXG4gICAgICAgIHZhciBzaG93TWFzayA9IGZ1bmN0aW9uIHNob3dNYXNrKCkge1xyXG4gICAgICAgICAgICBtYXNrV2Vidmlldy5zZXRTdHlsZSh7XHJcbiAgICAgICAgICAgICAgICBtYXNrOiBtYXNrQ29sb3JcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgY2xvc2VNYXNrID0gZnVuY3Rpb24gY2xvc2VNYXNrKCkge1xyXG4gICAgICAgICAgICBtYXNrV2Vidmlldy5zZXRTdHlsZSh7XHJcbiAgICAgICAgICAgICAgICBtYXNrOiAnbm9uZSdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB3ZWJ2aWV3LnNob3cgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgc2hvd01hc2soKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XHJcbiAgICAgICAgICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gb2xkU2hvdy5hcHBseSh3ZWJ2aWV3LCBhcmdzKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHdlYnZpZXcuaGlkZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjbG9zZU1hc2soKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XHJcbiAgICAgICAgICAgICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBvbGRIaWRlLmFwcGx5KHdlYnZpZXcsIGFyZ3MpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgd2Vidmlldy5jbG9zZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjbG9zZU1hc2soKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4zKSwgX2tleTMgPSAwOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XHJcbiAgICAgICAgICAgICAgICBhcmdzW19rZXkzXSA9IGFyZ3VtZW50c1tfa2V5M107XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBvbGRDbG9zZS5hcHBseSh3ZWJ2aWV3LCBhcmdzKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFN1Yk5WdWVCeUlkKGlkKSB7XHJcbiAgICAgICAgdmFyIHdlYnZpZXcgPSB3ZWV4UGx1cy53ZWJ2aWV3LmdldFdlYnZpZXdCeUlkKGlkKTtcclxuICAgICAgICBpZiAod2VidmlldyAmJiAhd2Vidmlldy4kcHJvY2Vzc2VkKSB7XHJcbiAgICAgICAgICAgIHdyYXBwZXIod2Vidmlldyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB3ZWJ2aWV3O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEN1cnJlbnRTdWJOVnVlKCkge1xyXG4gICAgICAgIHJldHVybiBnZXRTdWJOVnVlQnlJZCh3ZWV4UGx1cy53ZWJ2aWV3LmN1cnJlbnRXZWJ2aWV3KCkuaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBwbHVzID0gd2VleC5yZXF1aXJlTW9kdWxlKCdwbHVzJyk7XHJcbiAgICB2YXIgZ2xvYmFsRXZlbnQgPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ2dsb2JhbEV2ZW50Jyk7XHJcblxyXG4gICAgdmFyIGlkID0gMDtcclxuICAgIHZhciBjYWxsYmFja3MgPSB7fTtcclxuXHJcbiAgICB2YXIgVU5JQVBQX1NFUlZJQ0VfTlZVRV9JRCA9ICdfX3VuaWFwcF9fc2VydmljZSc7XHJcblxyXG4gICAgZ2xvYmFsRXZlbnQuYWRkRXZlbnRMaXN0ZW5lcigncGx1c01lc3NhZ2UnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgaWYgKGUuZGF0YS50eXBlID09PSAnVW5pQXBwSnNBcGknKSB7XHJcbiAgICAgICAgICAgIGludm9rZShlLmRhdGEuaWQsIGUuZGF0YS5kYXRhKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGUuZGF0YS50eXBlID09PSAnVW5pQXBwU3ViTlZ1ZScpIHtcclxuICAgICAgICAgICAgb25TdWJOVnVlTWVzc2FnZShlLmRhdGEuZGF0YSwgZS5kYXRhLm9wdGlvbnMpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5kYXRhLnR5cGUgPT09ICdvbk5hdmlnYXRpb25CYXJCdXR0b25UYXAnKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIG9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcENhbGxiYWNrKGUuZGF0YS5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5kYXRhLnR5cGUgPT09ICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQnKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZENhbGxiYWNrKGUuZGF0YS5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5kYXRhLnR5cGUgPT09ICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZCcpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZENhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZENhbGxiYWNrKGUuZGF0YS5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5kYXRhLnR5cGUgPT09ICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWQnKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZENhbGxiYWNrKGUuZGF0YS5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHZhciBjcmVhdGVDYWxsYmFjayA9IGZ1bmN0aW9uIGNyZWF0ZUNhbGxiYWNrKGFyZ3MsIHR5cGUpIHtcclxuICAgICAgICB2YXIgY2FsbGJhY2sgPSBmdW5jdGlvbiBjYWxsYmFjayhyZXMpIHtcclxuICAgICAgICAgICAgaWYgKGlzRm4oYXJncykpIHtcclxuICAgICAgICAgICAgICAgIGFyZ3MocmVzKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChhcmdzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAofnJlcy5lcnJNc2cuaW5kZXhPZignOm9rJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc0ZuKGFyZ3Muc3VjY2VzcykgJiYgYXJncy5zdWNjZXNzKHJlcyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKH5yZXMuZXJyTXNnLmluZGV4T2YoJzpmYWlsJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc0ZuKGFyZ3MuZmFpbCkgJiYgYXJncy5mYWlsKHJlcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpc0ZuKGFyZ3MuY29tcGxldGUpICYmIGFyZ3MuY29tcGxldGUocmVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGlzRm4oYXJncykgfHwgYXJncyAmJiBpc0ZuKGFyZ3MuY2FsbGJhY2spKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrLmtlZXBBbGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjYWxsYmFjaztcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGludm9rZSA9IGZ1bmN0aW9uIGludm9rZShjYWxsYmFja0lkLCBkYXRhKSB7XHJcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gY2FsbGJhY2tzW2NhbGxiYWNrSWRdO1xyXG4gICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcclxuICAgICAgICAgICAgaWYgKCFjYWxsYmFjay5rZWVwQWxpdmUpIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBjYWxsYmFja3NbY2FsbGJhY2tJZF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdjYWxsYmFja1snICsgY2FsbGJhY2tJZCArICddIGlzIHVuZGVmaW5lZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdmFyIHB1Ymxpc2ggPSBmdW5jdGlvbiBwdWJsaXNoKF9yZWYpIHtcclxuICAgICAgICB2YXIgaWQgPSBfcmVmLmlkLFxyXG4gICAgICAgICAgICB0eXBlID0gX3JlZi50eXBlLFxyXG4gICAgICAgICAgICBwYXJhbXMgPSBfcmVmLnBhcmFtcztcclxuXHJcbiAgICAgICAgY2FsbGJhY2tzW2lkXSA9IGNyZWF0ZUNhbGxiYWNrKHBhcmFtcywgdHlwZSk7XHJcbiAgICAgICAgcGx1cy5wb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgdHlwZTogdHlwZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBwYXJhbXNcclxuICAgICAgICB9LCBVTklBUFBfU0VSVklDRV9OVlVFX0lEKTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gcG9zdE1lc3NhZ2UoZGF0YSkge1xyXG4gICAgICAgIHBsdXMucG9zdE1lc3NhZ2UoZGF0YSwgVU5JQVBQX1NFUlZJQ0VfTlZVRV9JRCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGNyZWF0ZVB1Ymxpc2ggPSBmdW5jdGlvbiBjcmVhdGVQdWJsaXNoKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24oYXJncykge1xyXG4gICAgICAgICAgICBwdWJsaXNoKHtcclxuICAgICAgICAgICAgICAgIGlkOiBpZCsrLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogbmFtZSxcclxuICAgICAgICAgICAgICAgIHBhcmFtczogYXJnc1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwQ2FsbGJhY2sgPSB2b2lkIDA7XHJcbiAgICB2YXIgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkQ2FsbGJhY2sgPSB2b2lkIDA7XHJcbiAgICB2YXIgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWRDYWxsYmFjayA9IHZvaWQgMDtcclxuICAgIHZhciBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWRDYWxsYmFjayA9IHZvaWQgMDtcclxuXHJcbiAgICBmdW5jdGlvbiBvbk5hdmlnYXRpb25CYXJCdXR0b25UYXAoY2FsbGJhY2spIHtcclxuICAgICAgICBvbk5hdmlnYXRpb25CYXJCdXR0b25UYXBDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZChjYWxsYmFjaykge1xyXG4gICAgICAgIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZENhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWQoY2FsbGJhY2spIHtcclxuICAgICAgICBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZENhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkQ2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZXF1aXJlTmF0aXZlUGx1Z2luKHBsdWdpbk5hbWUpIHtcclxuICAgICAgICByZXR1cm4gd2VleC5yZXF1aXJlTW9kdWxlKHBsdWdpbk5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBkb20gPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ2RvbScpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGxvYWRGb250RmFjZShfcmVmKSB7XHJcbiAgICAgICAgdmFyIGZhbWlseSA9IF9yZWYuZmFtaWx5LFxyXG4gICAgICAgICAgICBzb3VyY2UgPSBfcmVmLnNvdXJjZSxcclxuICAgICAgICAgICAgZGVzYyA9IF9yZWYuZGVzYyxcclxuICAgICAgICAgICAgc3VjY2VzcyA9IF9yZWYuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWYuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmLmNvbXBsZXRlO1xyXG5cclxuICAgICAgICBkb20uYWRkUnVsZSgnZm9udEZhY2UnLCB7XHJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IGZhbWlseSxcclxuICAgICAgICAgICAgc3JjOiBzb3VyY2UucmVwbGFjZSgvXCIvZywgJ1xcJycpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIHJlcyA9IHtcclxuICAgICAgICAgICAgZXJyTXNnOiAnbG9hZEZvbnRGYWNlOm9rJyxcclxuICAgICAgICAgICAgc3RhdHVzOiAnbG9hZGVkJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHJlcyk7XHJcbiAgICAgICAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmVzKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZ2xvYmFsRXZlbnQkMSA9IHdlZXgucmVxdWlyZU1vZHVsZSgnZ2xvYmFsRXZlbnQnKTtcclxuXHJcbiAgICB2YXIgY2FsbGJhY2tzJDEgPSBbXTtcclxuXHJcbiAgICBnbG9iYWxFdmVudCQxLmFkZEV2ZW50TGlzdGVuZXIoJ3BsdXNNZXNzYWdlJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGlmIChlLmRhdGEudHlwZSA9PT0gJ1VuaUFwcFJlYWR5Jykge1xyXG4gICAgICAgICAgICByZWFkeS5pc1VuaUFwcFJlYWR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrcyQxLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzJDEuZm9yRWFjaChmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFja3MkMSA9IFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gcmVhZHkoY2FsbGJhY2spIHtcclxuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzVW5pQXBwUmVhZHkpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFja3MkMS5wdXNoKGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24ob2JqKSB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XHJcbiAgICB9IDogZnVuY3Rpb24ob2JqKSB7XHJcbiAgICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID9cclxuICAgICAgICAgICAgXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBzdHJlYW0gPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ3N0cmVhbScpO1xyXG5cclxuICAgIC8vIGxldCByZXF1ZXN0VGFza0lkID0gMFxyXG5cclxuICAgIHZhciBNRVRIT0RfR0VUID0gJ0dFVCc7XHJcbiAgICB2YXIgTUVUSE9EX1BPU1QgPSAnUE9TVCc7XHJcbiAgICB2YXIgQ09OVEVOVF9UWVBFX0pTT04gPSAnYXBwbGljYXRpb24vanNvbic7XHJcbiAgICB2YXIgQ09OVEVOVF9UWVBFX0ZPUk0gPSAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJztcclxuXHJcbiAgICB2YXIgc2VyaWFsaXplID0gZnVuY3Rpb24gc2VyaWFsaXplKGRhdGEpIHtcclxuICAgICAgICB2YXIgbWV0aG9kID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBNRVRIT0RfR0VUO1xyXG4gICAgICAgIHZhciBjb250ZW50VHlwZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogQ09OVEVOVF9UWVBFX0ZPUk07XHJcblxyXG4gICAgICAgIGlmICgodHlwZW9mIGRhdGEgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGRhdGEpKSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgaWYgKG1ldGhvZC50b1VwcGVyQ2FzZSgpID09PSBNRVRIT0RfUE9TVCAmJiBjb250ZW50VHlwZS50b0xvd2VyQ2FzZSgpID09PSBDT05URU5UX1RZUEVfSlNPTikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGRhdGEpLm1hcChmdW5jdGlvbihrZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQoZGF0YVtrZXldKTtcclxuICAgICAgICAgICAgICAgIH0pLmpvaW4oJyYnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gcmVxdWVzdChfcmVmKSB7XHJcbiAgICAgICAgdmFyIHVybCA9IF9yZWYudXJsLFxyXG4gICAgICAgICAgICBkYXRhID0gX3JlZi5kYXRhLFxyXG4gICAgICAgICAgICBoZWFkZXIgPSBfcmVmLmhlYWRlcixcclxuICAgICAgICAgICAgX3JlZiRtZXRob2QgPSBfcmVmLm1ldGhvZCxcclxuICAgICAgICAgICAgbWV0aG9kID0gX3JlZiRtZXRob2QgPT09IHVuZGVmaW5lZCA/ICdHRVQnIDogX3JlZiRtZXRob2QsXHJcbiAgICAgICAgICAgIF9yZWYkZGF0YVR5cGUgPSBfcmVmLmRhdGFUeXBlLFxyXG4gICAgICAgICAgICBkYXRhVHlwZSA9IF9yZWYkZGF0YVR5cGUgPT09IHVuZGVmaW5lZCA/ICdqc29uJyA6IF9yZWYkZGF0YVR5cGUsXHJcbiAgICAgICAgICAgIHJlc3BvbnNlVHlwZSA9IF9yZWYucmVzcG9uc2VUeXBlLFxyXG4gICAgICAgICAgICBzdWNjZXNzID0gX3JlZi5zdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsID0gX3JlZi5mYWlsLFxyXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWYuY29tcGxldGU7XHJcblxyXG4gICAgICAgIC8vIHJlcXVlc3RUYXNrSWQrK1xyXG4gICAgICAgIHZhciBhYm9ydGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHZhciBoYXNDb250ZW50VHlwZSA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBoZWFkZXJzID0ge307XHJcbiAgICAgICAgaWYgKGhlYWRlcikge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBuYW1lIGluIGhlYWRlcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFoYXNDb250ZW50VHlwZSAmJiBuYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdjb250ZW50LXR5cGUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFzQ29udGVudFR5cGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gaGVhZGVyW25hbWVdO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzW25hbWVdID0gaGVhZGVyW25hbWVdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtZXRob2QgPT09IE1FVEhPRF9HRVQgJiYgZGF0YSkge1xyXG4gICAgICAgICAgICB1cmwgPSB1cmwgKyAofnVybC5pbmRleE9mKCc/JykgPyB1cmwuc3Vic3RyKC0xKSA9PT0gJyYnIHx8IHVybC5zdWJzdHIoLTEpID09PSAnPycgPyAnJyA6ICcmJyA6ICc/JykgK1xyXG4gICAgICAgICAgICAgICAgc2VyaWFsaXplKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdHJlYW0uZmV0Y2goe1xyXG4gICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXHJcbiAgICAgICAgICAgIHR5cGU6IGRhdGFUeXBlID09PSAnanNvbicgPyAnanNvbicgOiAndGV4dCcsXHJcbiAgICAgICAgICAgIGJvZHk6IG1ldGhvZCAhPT0gTUVUSE9EX0dFVCA/IHNlcmlhbGl6ZShkYXRhLCBtZXRob2QsIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddKSA6ICcnXHJcbiAgICAgICAgfSwgZnVuY3Rpb24oX3JlZjIpIHtcclxuICAgICAgICAgICAgdmFyIHN0YXR1cyA9IF9yZWYyLnN0YXR1cyxcclxuICAgICAgICAgICAgICAgIG9rID0gX3JlZjIub2ssXHJcbiAgICAgICAgICAgICAgICBzdGF0dXNUZXh0ID0gX3JlZjIuc3RhdHVzVGV4dCxcclxuICAgICAgICAgICAgICAgIGRhdGEgPSBfcmVmMi5kYXRhLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVycyA9IF9yZWYyLmhlYWRlcnM7XHJcblxyXG4gICAgICAgICAgICB2YXIgcmV0ID0ge307XHJcbiAgICAgICAgICAgIGlmICghc3RhdHVzIHx8IHN0YXR1cyA9PT0gLTEgfHwgYWJvcnRlZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0LmVyck1zZyA9ICdyZXF1ZXN0OmZhaWwnO1xyXG4gICAgICAgICAgICAgICAgaXNGbihmYWlsKSAmJiBmYWlsKHJldCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXQuZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICByZXQuc3RhdHVzQ29kZSA9IHN0YXR1cztcclxuICAgICAgICAgICAgICAgIHJldC5oZWFkZXIgPSBoZWFkZXJzO1xyXG4gICAgICAgICAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHJldCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmV0KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBhYm9ydDogZnVuY3Rpb24gYWJvcnQoKSB7XHJcbiAgICAgICAgICAgICAgICBhYm9ydGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHN0b3JhZ2UgPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ3BsdXNzdG9yYWdlJyk7XHJcbiAgICB2YXIgVU5JQVBQX1NUT1JBR0VfREFUQV9UWVBFID0gJ19fVFlQRSc7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0U3RvcmFnZShfcmVmKSB7XHJcbiAgICAgICAgdmFyIGtleSA9IF9yZWYua2V5LFxyXG4gICAgICAgICAgICBkYXRhID0gX3JlZi5kYXRhLFxyXG4gICAgICAgICAgICBzdWNjZXNzID0gX3JlZi5zdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsID0gX3JlZi5mYWlsLFxyXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWYuY29tcGxldGU7XHJcblxyXG4gICAgICAgIHN0b3JhZ2UuZ2V0SXRlbShrZXkgKyBVTklBUFBfU1RPUkFHRV9EQVRBX1RZUEUsIGZ1bmN0aW9uKHJldCkge1xyXG4gICAgICAgICAgICBpZiAocmV0LnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0YVR5cGUgPSByZXQuZGF0YTtcclxuICAgICAgICAgICAgICAgIHN0b3JhZ2UuZ2V0SXRlbShrZXksIGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMucmVzdWx0ID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVR5cGUgJiYgcmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVR5cGUgIT09ICdTdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gSlNPTi5wYXJzZShyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJNc2c6ICdnZXRTdG9yYWdlOm9rJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiByZXN1bHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmVyck1zZyA9ICdzZXRTdG9yYWdlOmZhaWwnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNGbihmYWlsKSAmJiBmYWlsKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMuZXJyTXNnID0gJ3NldFN0b3JhZ2U6ZmFpbCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXMpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXQuZXJyTXNnID0gJ3NldFN0b3JhZ2U6ZmFpbCc7XHJcbiAgICAgICAgICAgICAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmV0KTtcclxuICAgICAgICAgICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJldCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRTdG9yYWdlKF9yZWYyKSB7XHJcbiAgICAgICAgdmFyIGtleSA9IF9yZWYyLmtleSxcclxuICAgICAgICAgICAgZGF0YSA9IF9yZWYyLmRhdGEsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBfcmVmMi5zdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsID0gX3JlZjIuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmMi5jb21wbGV0ZTtcclxuXHJcbiAgICAgICAgdmFyIGRhdGFUeXBlID0gJ1N0cmluZyc7XHJcbiAgICAgICAgaWYgKCh0eXBlb2YgZGF0YSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoZGF0YSkpID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBkYXRhVHlwZSA9ICdPYmplY3QnO1xyXG4gICAgICAgICAgICBkYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0b3JhZ2Uuc2V0SXRlbShrZXksIGRhdGEsIGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICBpZiAocmVzLnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICBzdG9yYWdlLnNldEl0ZW0oa2V5ICsgVU5JQVBQX1NUT1JBR0VfREFUQV9UWVBFLCBkYXRhVHlwZSwgZnVuY3Rpb24ocmV0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJldC5yZXN1bHQgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0ZuKHN1Y2Nlc3MpICYmIHN1Y2Nlc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyTXNnOiAnc2V0U3RvcmFnZTpvaydcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0LmVyck1zZyA9ICdzZXRTdG9yYWdlOmZhaWwnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmV0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlcy5lcnJNc2cgPSAnc2V0U3RvcmFnZTpmYWlsJztcclxuICAgICAgICAgICAgICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlU3RvcmFnZShfcmVmMykge1xyXG4gICAgICAgIHZhciBrZXkgPSBfcmVmMy5rZXksXHJcbiAgICAgICAgICAgIGRhdGEgPSBfcmVmMy5kYXRhLFxyXG4gICAgICAgICAgICBzdWNjZXNzID0gX3JlZjMuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWYzLmZhaWwsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZjMuY29tcGxldGU7XHJcblxyXG4gICAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbShrZXksIGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICBpZiAocmVzLnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICBpc0ZuKHN1Y2Nlc3MpICYmIHN1Y2Nlc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgIGVyck1zZzogJ3JlbW92ZVN0b3JhZ2U6b2snXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlcy5lcnJNc2cgPSAncmVtb3ZlU3RvcmFnZTpmYWlsJztcclxuICAgICAgICAgICAgICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKGtleSArIFVOSUFQUF9TVE9SQUdFX0RBVEFfVFlQRSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2xlYXJTdG9yYWdlKF9yZWY0KSB7XHJcbiAgICAgICAgdmFyIGtleSA9IF9yZWY0LmtleSxcclxuICAgICAgICAgICAgZGF0YSA9IF9yZWY0LmRhdGEsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBfcmVmNC5zdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsID0gX3JlZjQuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmNC5jb21wbGV0ZTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgY2xpcGJvYXJkID0gd2VleC5yZXF1aXJlTW9kdWxlKCdjbGlwYm9hcmQnKTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDbGlwYm9hcmREYXRhKF9yZWYpIHtcclxuICAgICAgICB2YXIgc3VjY2VzcyA9IF9yZWYuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWYuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmLmNvbXBsZXRlO1xyXG5cclxuICAgICAgICBjbGlwYm9hcmQuZ2V0U3RyaW5nKGZ1bmN0aW9uKF9yZWYyKSB7XHJcbiAgICAgICAgICAgIHZhciBkYXRhID0gX3JlZjIuZGF0YTtcclxuXHJcbiAgICAgICAgICAgIHZhciByZXMgPSB7XHJcbiAgICAgICAgICAgICAgICBlcnJNc2c6ICdnZXRDbGlwYm9hcmREYXRhOm9rJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHJlcyk7XHJcbiAgICAgICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0Q2xpcGJvYXJkRGF0YShfcmVmMykge1xyXG4gICAgICAgIHZhciBkYXRhID0gX3JlZjMuZGF0YSxcclxuICAgICAgICAgICAgc3VjY2VzcyA9IF9yZWYzLnN1Y2Nlc3MsXHJcbiAgICAgICAgICAgIGZhaWwgPSBfcmVmMy5mYWlsLFxyXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWYzLmNvbXBsZXRlO1xyXG5cclxuICAgICAgICB2YXIgcmVzID0ge1xyXG4gICAgICAgICAgICBlcnJNc2c6ICdzZXRDbGlwYm9hcmREYXRhOm9rJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY2xpcGJvYXJkLnNldFN0cmluZyhkYXRhKTtcclxuICAgICAgICBpc0ZuKHN1Y2Nlc3MpICYmIHN1Y2Nlc3MocmVzKTtcclxuICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBnZXRFbWl0dGVyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBnZXRVbmlFbWl0dGVyID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXHJcbiAgICAgICAgICAgIHJldHVybiBnZXRVbmlFbWl0dGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgRW1pdHRlciA9IHtcclxuICAgICAgICAgICAgJG9uOiBmdW5jdGlvbiAkb24oKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ3VuaS4kb24gZmFpbGVkJyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICRvZmY6IGZ1bmN0aW9uICRvZmYoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ3VuaS4kb2ZmIGZhaWxlZCcpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAkb25jZTogZnVuY3Rpb24gJG9uY2UoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ3VuaS4kb25jZSBmYWlsZWQnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJGVtaXQ6IGZ1bmN0aW9uICRlbWl0KCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCd1bmkuJGVtaXQgZmFpbGVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBnZXRVbmlFbWl0dGVyKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gRW1pdHRlcjtcclxuICAgICAgICB9O1xyXG4gICAgfSgpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGFwcGx5KGN0eCwgbWV0aG9kLCBhcmdzKSB7XHJcbiAgICAgICAgcmV0dXJuIGN0eFttZXRob2RdLmFwcGx5KGN0eCwgYXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gJG9uKCkge1xyXG4gICAgICAgIHJldHVybiBhcHBseShnZXRFbWl0dGVyKCksICckb24nLCBbXS5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uICRvZmYoKSB7XHJcbiAgICAgICAgcmV0dXJuIGFwcGx5KGdldEVtaXR0ZXIoKSwgJyRvZmYnLCBbXS5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uICRvbmNlKCkge1xyXG4gICAgICAgIHJldHVybiBhcHBseShnZXRFbWl0dGVyKCksICckb25jZScsIFtdLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gJGVtaXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIGFwcGx5KGdldEVtaXR0ZXIoKSwgJyRlbWl0JywgW10uY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHZhciBhcGkgPSAvKiNfX1BVUkVfXyovIE9iamVjdC5mcmVlemUoe1xyXG4gICAgICAgIGxvYWRGb250RmFjZTogbG9hZEZvbnRGYWNlLFxyXG4gICAgICAgIHJlYWR5OiByZWFkeSxcclxuICAgICAgICByZXF1ZXN0OiByZXF1ZXN0LFxyXG4gICAgICAgIGdldFN0b3JhZ2U6IGdldFN0b3JhZ2UsXHJcbiAgICAgICAgc2V0U3RvcmFnZTogc2V0U3RvcmFnZSxcclxuICAgICAgICByZW1vdmVTdG9yYWdlOiByZW1vdmVTdG9yYWdlLFxyXG4gICAgICAgIGNsZWFyU3RvcmFnZTogY2xlYXJTdG9yYWdlLFxyXG4gICAgICAgIGdldENsaXBib2FyZERhdGE6IGdldENsaXBib2FyZERhdGEsXHJcbiAgICAgICAgc2V0Q2xpcGJvYXJkRGF0YTogc2V0Q2xpcGJvYXJkRGF0YSxcclxuICAgICAgICBvblN1Yk5WdWVNZXNzYWdlOiBvblN1Yk5WdWVNZXNzYWdlLFxyXG4gICAgICAgIGdldFN1Yk5WdWVCeUlkOiBnZXRTdWJOVnVlQnlJZCxcclxuICAgICAgICBnZXRDdXJyZW50U3ViTlZ1ZTogZ2V0Q3VycmVudFN1Yk5WdWUsXHJcbiAgICAgICAgJG9uOiAkb24sXHJcbiAgICAgICAgJG9mZjogJG9mZixcclxuICAgICAgICAkb25jZTogJG9uY2UsXHJcbiAgICAgICAgJGVtaXQ6ICRlbWl0XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgdmFyIHd4ID0ge1xyXG4gICAgICAgIHVwbG9hZEZpbGU6IHRydWUsXHJcbiAgICAgICAgZG93bmxvYWRGaWxlOiB0cnVlLFxyXG4gICAgICAgIGNob29zZUltYWdlOiB0cnVlLFxyXG4gICAgICAgIHByZXZpZXdJbWFnZTogdHJ1ZSxcclxuICAgICAgICBnZXRJbWFnZUluZm86IHRydWUsXHJcbiAgICAgICAgc2F2ZUltYWdlVG9QaG90b3NBbGJ1bTogdHJ1ZSxcclxuICAgICAgICBjaG9vc2VWaWRlbzogdHJ1ZSxcclxuICAgICAgICBzYXZlVmlkZW9Ub1Bob3Rvc0FsYnVtOiB0cnVlLFxyXG4gICAgICAgIHNhdmVGaWxlOiB0cnVlLFxyXG4gICAgICAgIGdldFNhdmVkRmlsZUxpc3Q6IHRydWUsXHJcbiAgICAgICAgZ2V0U2F2ZWRGaWxlSW5mbzogdHJ1ZSxcclxuICAgICAgICByZW1vdmVTYXZlZEZpbGU6IHRydWUsXHJcbiAgICAgICAgb3BlbkRvY3VtZW50OiB0cnVlLFxyXG4gICAgICAgIHNldFN0b3JhZ2U6IHRydWUsXHJcbiAgICAgICAgZ2V0U3RvcmFnZTogdHJ1ZSxcclxuICAgICAgICBnZXRTdG9yYWdlSW5mbzogdHJ1ZSxcclxuICAgICAgICByZW1vdmVTdG9yYWdlOiB0cnVlLFxyXG4gICAgICAgIGNsZWFyU3RvcmFnZTogdHJ1ZSxcclxuICAgICAgICBnZXRMb2NhdGlvbjogdHJ1ZSxcclxuICAgICAgICBjaG9vc2VMb2NhdGlvbjogdHJ1ZSxcclxuICAgICAgICBvcGVuTG9jYXRpb246IHRydWUsXHJcbiAgICAgICAgZ2V0U3lzdGVtSW5mbzogdHJ1ZSxcclxuICAgICAgICBnZXROZXR3b3JrVHlwZTogdHJ1ZSxcclxuICAgICAgICBtYWtlUGhvbmVDYWxsOiB0cnVlLFxyXG4gICAgICAgIHNjYW5Db2RlOiB0cnVlLFxyXG4gICAgICAgIHNldFNjcmVlbkJyaWdodG5lc3M6IHRydWUsXHJcbiAgICAgICAgZ2V0U2NyZWVuQnJpZ2h0bmVzczogdHJ1ZSxcclxuICAgICAgICBzZXRLZWVwU2NyZWVuT246IHRydWUsXHJcbiAgICAgICAgdmlicmF0ZUxvbmc6IHRydWUsXHJcbiAgICAgICAgdmlicmF0ZVNob3J0OiB0cnVlLFxyXG4gICAgICAgIGFkZFBob25lQ29udGFjdDogdHJ1ZSxcclxuICAgICAgICBzaG93VG9hc3Q6IHRydWUsXHJcbiAgICAgICAgc2hvd0xvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgaGlkZVRvYXN0OiB0cnVlLFxyXG4gICAgICAgIGhpZGVMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgIHNob3dNb2RhbDogdHJ1ZSxcclxuICAgICAgICBzaG93QWN0aW9uU2hlZXQ6IHRydWUsXHJcbiAgICAgICAgc2V0TmF2aWdhdGlvbkJhclRpdGxlOiB0cnVlLFxyXG4gICAgICAgIHNldE5hdmlnYXRpb25CYXJDb2xvcjogdHJ1ZSxcclxuICAgICAgICBuYXZpZ2F0ZVRvOiB0cnVlLFxyXG4gICAgICAgIHJlZGlyZWN0VG86IHRydWUsXHJcbiAgICAgICAgcmVMYXVuY2g6IHRydWUsXHJcbiAgICAgICAgc3dpdGNoVGFiOiB0cnVlLFxyXG4gICAgICAgIG5hdmlnYXRlQmFjazogdHJ1ZSxcclxuICAgICAgICBnZXRQcm92aWRlcjogdHJ1ZSxcclxuICAgICAgICBsb2dpbjogdHJ1ZSxcclxuICAgICAgICBnZXRVc2VySW5mbzogdHJ1ZSxcclxuICAgICAgICBzaGFyZTogdHJ1ZSxcclxuICAgICAgICByZXF1ZXN0UGF5bWVudDogdHJ1ZSxcclxuICAgICAgICBzdWJzY3JpYmVQdXNoOiB0cnVlLFxyXG4gICAgICAgIHVuc3Vic2NyaWJlUHVzaDogdHJ1ZSxcclxuICAgICAgICBvblB1c2g6IHRydWUsXHJcbiAgICAgICAgb2ZmUHVzaDogdHJ1ZVxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgYmFzZVVuaSA9IHtcclxuICAgICAgICBvczoge1xyXG4gICAgICAgICAgICBudnVlOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgdW5pID0ge307XHJcblxyXG4gICAgaWYgKHR5cGVvZiBQcm94eSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICB1bmkgPSBuZXcgUHJveHkoe30sIHtcclxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQodGFyZ2V0LCBuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ29zJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG52dWU6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdwb3N0TWVzc2FnZScpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcG9zdE1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ3JlcXVpcmVOYXRpdmVQbHVnaW4nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcXVpcmVOYXRpdmVQbHVnaW47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ29uTmF2aWdhdGlvbkJhckJ1dHRvblRhcCcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBtZXRob2QgPSBhcGlbbmFtZV07XHJcbiAgICAgICAgICAgICAgICBpZiAoIW1ldGhvZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZCA9IGNyZWF0ZVB1Ymxpc2gobmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoc2hvdWxkUHJvbWlzZShuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNpZnkobWV0aG9kKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBtZXRob2Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgT2JqZWN0LmtleXMoYmFzZVVuaSkuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcclxuICAgICAgICAgICAgdW5pW2tleV0gPSBiYXNlVW5pW2tleV07XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHVuaS5wb3N0TWVzc2FnZSA9IHBvc3RNZXNzYWdlO1xyXG5cclxuICAgICAgICB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbiA9IHJlcXVpcmVOYXRpdmVQbHVnaW47XHJcblxyXG4gICAgICAgIHVuaS5vbk5hdmlnYXRpb25CYXJCdXR0b25UYXAgPSBvbk5hdmlnYXRpb25CYXJCdXR0b25UYXA7XHJcblxyXG4gICAgICAgIHVuaS5vbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQgPSBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQ7XHJcblxyXG4gICAgICAgIHVuaS5vbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZCA9IG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkO1xyXG5cclxuICAgICAgICB1bmkub25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkID0gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkO1xyXG5cclxuICAgICAgICBPYmplY3Qua2V5cyh3eCkuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XHJcbiAgICAgICAgICAgIHZhciBtZXRob2QgPSBhcGlbbmFtZV07XHJcbiAgICAgICAgICAgIGlmICghbWV0aG9kKSB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2QgPSBjcmVhdGVQdWJsaXNoKG5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzaG91bGRQcm9taXNlKG5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICB1bmlbbmFtZV0gPSBwcm9taXNpZnkobWV0aG9kKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHVuaVtuYW1lXSA9IG1ldGhvZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVuaTtcclxufVxyXG5cclxudmFyIGNyZWF0ZVVuaTtcclxuXHJcbmlmICh0eXBlb2YgZ2V0VW5pID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICBjcmVhdGVVbmkgPSBnZXRVbmk7XHJcbn0gZWxzZSB7XHJcbiAgICBjcmVhdGVVbmkgPSBpbml0VW5pO1xyXG59XHJcbnZhciB3ZWV4UGx1cyA9IG5ldyBXZWV4UGx1cyh3ZWV4KTtcclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVW5pKHdlZXgsIHdlZXhQbHVzLCBCcm9hZGNhc3RDaGFubmVsKTtcclxuZXhwb3J0IHtcclxuICAgIHdlZXhQbHVzXHJcbn07XG4iLCJmdW5jdGlvbiB0eXBvZiAodikge1xyXG4gIGNvbnN0IHMgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodilcclxuICByZXR1cm4gcy5zdWJzdHJpbmcoOCwgcy5sZW5ndGggLSAxKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXRMb2cgKC4uLmFyZ3MpIHtcclxuICBjb25zdCBtc2dzID0gYXJncy5tYXAoKHYpID0+IHtcclxuICAgIGNvbnN0IHR5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodilcclxuICAgIGlmICh0eXBlLnRvTG93ZXJDYXNlKCkgPT09ICdbb2JqZWN0IG9iamVjdF0nKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgdiA9ICctLS1CRUdJTjpKU09OLS0tJyArIEpTT04uc3RyaW5naWZ5KHYpICsgJy0tLUVORDpKU09OLS0tJ1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgdiA9ICdbb2JqZWN0IG9iamVjdF0nXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh2ID09PSBudWxsKSB7XHJcbiAgICAgICAgdiA9ICctLS1OVUxMLS0tJ1xyXG4gICAgICB9IGVsc2UgaWYgKHYgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHYgPSAnLS0tVU5ERUZJTkVELS0tJ1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHZUeXBlID0gdHlwb2YodikudG9VcHBlckNhc2UoKVxyXG4gICAgICAgIGlmICh2VHlwZSA9PT0gJ05VTUJFUicgfHwgdlR5cGUgPT09ICdCT09MRUFOJykge1xyXG4gICAgICAgICAgdiA9ICctLS1CRUdJTjonICsgdlR5cGUgKyAnLS0tJyArIHYgKyAnLS0tRU5EOicgKyB2VHlwZSArICctLS0nXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHYgPSBTdHJpbmcodilcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB2XHJcbiAgfSlcclxuICBsZXQgbXNnID0gJydcclxuICBpZiAobXNncy5sZW5ndGggPiAxKSB7XHJcbiAgICBjb25zdCBsYXN0TXNnID0gbXNncy5wb3AoKVxyXG4gICAgbXNnID0gbXNncy5qb2luKCctLS1DT01NQS0tLScpXHJcbiAgICBpZiAobGFzdE1zZy5pbmRleE9mKCcgYXQgJykgPT09IDApIHtcclxuICAgICAgbXNnICs9IGxhc3RNc2dcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG1zZyArPSAnLS0tQ09NTUEtLS0nICsgbGFzdE1zZ1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBtc2cgPSBtc2dzWzBdXHJcbiAgfVxyXG4gIHJldHVybiBtc2dcclxufVxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9kaXZpZGVyLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGY1YWFmMDImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vZGl2aWRlci5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9kaXZpZGVyLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMuJG9wdGlvbnMuc3R5bGUpe1xuICAgIHRoaXMuJG9wdGlvbnMuc3R5bGUgPSB7fVxufVxuaWYodGhpcy5fX21lcmdlX3N0eWxlICYmIHRoaXMuJHJvb3QgJiYgdGhpcy4kcm9vdC4kb3B0aW9ucy5hcHBTdHlsZSl7XG4gIHRoaXMuX19tZXJnZV9zdHlsZSh0aGlzLiRyb290LiRvcHRpb25zLmFwcFN0eWxlKVxufVxuaWYodGhpcy5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgdGhpcy5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL2RpdmlkZXIubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiKS5kZWZhdWx0KVxuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuJG9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vZGl2aWRlci5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpLmRlZmF1bHQpXG4gICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRDpcXFxcSEJ1aWxkZXJYLjEuOC4yLjIwMTkwNDAxLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBudWxsLFxuICBcImMxMzBkYjMyXCJcbiAgXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQzovVXNlcnMvaHVsaW5jbG91ZC9Eb2N1bWVudHMvSEJ1aWxkZXJQcm9qZWN0cy9taXNob3AvY29tcG9uZW50cy9jb21tb24vZGl2aWRlci5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYLjEuOC4yLjIwMTkwNDAxLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcbG9hZGVyc1xcXFx0ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS03LTAhRDpcXFxcSEJ1aWxkZXJYLjEuOC4yLjIwMTkwNDAxLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIS4vZGl2aWRlci5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBmNWFhZjAyJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcInZpZXdcIiwgeyBzdGF0aWNDbGFzczogW1wiZGl2aWRlclwiXSB9KVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYLjEuOC4yLjIwMTkwNDAxLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS0zLTAhRDpcXFxcSEJ1aWxkZXJYLjEuOC4yLjIwMTkwNDAxLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTMtMSFEOlxcXFxIQnVpbGRlclguMS44LjIuMjAxOTA0MDEuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhLi9kaXZpZGVyLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYLjEuOC4yLjIwMTkwNDAxLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS0zLTAhRDpcXFxcSEJ1aWxkZXJYLjEuOC4yLjIwMTkwNDAxLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTMtMSFEOlxcXFxIQnVpbGRlclguMS44LjIuMjAxOTA0MDEuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhLi9kaXZpZGVyLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XHJcblx0XHJcblx0XHRcclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJkaXZpZGVyXCI+XHJcblx0XHRcdCAgICBcclxuXHRcdFx0PC92aWV3PlxyXG5cdFxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRcclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG4uZGl2aWRlcntcclxuICAgIGhlaWdodDogMTh1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xyXG4gICAgd2lkdGg6IDcyMHVweDtcclxufVxyXG48L3N0eWxlPlxyXG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSFEOlxcXFxIQnVpbGRlclguMS44LjIuMjAxOTA0MDEuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhRDpcXFxcSEJ1aWxkZXJYLjEuOC4yLjIwMTkwNDAxLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCEuL2RpdmlkZXIubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSFEOlxcXFxIQnVpbGRlclguMS44LjIuMjAxOTA0MDEuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhRDpcXFxcSEJ1aWxkZXJYLjEuOC4yLjIwMTkwNDAxLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCEuL2RpdmlkZXIubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiZGl2aWRlclwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCIxOHJweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0Y1RjVGNVwiLFxuICAgIFwid2lkdGhcIjogXCI3MjBycHhcIlxuICB9XG59IiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlIChleGNlcHQgZm9yIG1vZHVsZXMpLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICBzY3JpcHRFeHBvcnRzLFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZnVuY3Rpb25hbFRlbXBsYXRlLFxuICBpbmplY3RTdHlsZXMsXG4gIHNjb3BlSWQsXG4gIG1vZHVsZUlkZW50aWZpZXIsIC8qIHNlcnZlciBvbmx5ICovXG4gIHNoYWRvd01vZGUgLyogdnVlLWNsaSBvbmx5ICovXG4pIHtcbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChyZW5kZXIpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IHJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSAnZGF0YS12LScgKyBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikgeyAvLyBzZXJ2ZXIgYnVpbGRcbiAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgIGNvbnRleHQgPVxuICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KSAvLyBmdW5jdGlvbmFsXG4gICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX19cbiAgICAgIH1cbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIGNvbnRleHQpXG4gICAgICB9XG4gICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVycmVuY2VcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rXG4gIH0gZWxzZSBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgaG9vayA9IHNoYWRvd01vZGVcbiAgICAgID8gZnVuY3Rpb24gKCkgeyBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCB0aGlzLiRyb290LiRvcHRpb25zLnNoYWRvd1Jvb3QpIH1cbiAgICAgIDogaW5qZWN0U3R5bGVzXG4gIH1cblxuICBpZiAoaG9vaykge1xuICAgIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIGZvciB0ZW1wbGF0ZS1vbmx5IGhvdC1yZWxvYWQgYmVjYXVzZSBpbiB0aGF0IGNhc2UgdGhlIHJlbmRlciBmbiBkb2Vzbid0XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSBub3JtYWxpemVyXG4gICAgICBvcHRpb25zLl9pbmplY3RTdHlsZXMgPSBob29rXG4gICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb2FsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgdmFyIG9yaWdpbmFsUmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uIChoLCBjb250ZXh0KSB7XG4gICAgICAgIGhvb2suY2FsbChjb250ZXh0KVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxSZW5kZXIoaCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgIHZhciBleGlzdGluZyA9IG9wdGlvbnMuYmVmb3JlQ3JlYXRlXG4gICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nXG4gICAgICAgID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKVxuICAgICAgICA6IFtob29rXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vY2FyZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzZkNGRmMWEmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vY2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2NhcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLiRvcHRpb25zLnN0eWxlKXtcbiAgICB0aGlzLiRvcHRpb25zLnN0eWxlID0ge31cbn1cbmlmKHRoaXMuX19tZXJnZV9zdHlsZSAmJiB0aGlzLiRyb290ICYmIHRoaXMuJHJvb3QuJG9wdGlvbnMuYXBwU3R5bGUpe1xuICB0aGlzLl9fbWVyZ2Vfc3R5bGUodGhpcy4kcm9vdC4kb3B0aW9ucy5hcHBTdHlsZSlcbn1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIGluamVjdFN0eWxlcyxcbiAgbnVsbCxcbiAgXCI3OTdhNzljYVwiXG4gIFxuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkM6L1VzZXJzL2h1bGluY2xvdWQvRG9jdW1lbnRzL0hCdWlsZGVyUHJvamVjdHMvbWlzaG9wL2NvbXBvbmVudHMvY29tbW9uL2NhcmQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYLjEuOC4yLjIwMTkwNDAxLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcbG9hZGVyc1xcXFx0ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS03LTAhRDpcXFxcSEJ1aWxkZXJYLjEuOC4yLjIwMTkwNDAxLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NhcmQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc2ZDRkZjFhJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcInZpZXdcIiwgeyBzdGF0aWNDbGFzczogW1wiY2FyZFwiXSB9LCBbXG4gICAgX3ZtLnNob3doZWFkXG4gICAgICA/IF9jKFxuICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJwLTJcIiwgXCJtYWluLWJvcmRlci1jb2xvclwiXSxcbiAgICAgICAgICAgIGNsYXNzOiBfdm0uZ2V0SGVhZENsYXNzXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfdm0uX3QoXCJ0aXRsZVwiLCBbXG4gICAgICAgICAgICAgIF92bS5oZWFkVGl0bGVcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcInUtdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcImZvbnRcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5oZWFkVGl0bGVXZWlnaHQgPyBcImZvbnQtd2VpZ2h0XCIgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5oZWFkVGl0bGUpKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMlxuICAgICAgICApXG4gICAgICA6IF92bS5fZSgpLFxuICAgIF9jKFxuICAgICAgXCJ2aWV3XCIsXG4gICAgICB7IGNsYXNzOiBfdm0uZ2V0Qm9keUNsYXNzIH0sXG4gICAgICBbXG4gICAgICAgIF92bS5ib2R5Q292ZXJcbiAgICAgICAgICA/IF9jKFwidS1pbWFnZVwiLCB7IGF0dHJzOiB7IHNyYzogX3ZtLmJvZHlDb3ZlciwgbW9kZTogXCJ3aWR0aEZpeFwiIH0gfSlcbiAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICBfdm0uX3QoXCJkZWZhdWx0XCIpXG4gICAgICBdLFxuICAgICAgMlxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tMy0wIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS0zLTEhRDpcXFxcSEJ1aWxkZXJYLjEuOC4yLjIwMTkwNDAxLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NhcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tMy0wIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS0zLTEhRDpcXFxcSEJ1aWxkZXJYLjEuOC4yLjIwMTkwNDAxLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NhcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwiY2FyZFwiPlxyXG5cdFx0PCEtLSBoZWFkIC0tPlxyXG5cdFx0PHZpZXcgdi1pZj1cInNob3doZWFkXCIgY2xhc3M9XCJwLTIgbWFpbi1ib3JkZXItY29sb3JcIlxyXG5cdFx0OmNsYXNzPVwiZ2V0SGVhZENsYXNzXCI+XHJcblx0XHRcdDxzbG90IG5hbWU9XCJ0aXRsZVwiPlxyXG5cdFx0XHRcdDx0ZXh0IHYtaWY9XCJoZWFkVGl0bGVcIiBjbGFzcz1cImZvbnRcIlxyXG5cdFx0XHRcdDpjbGFzcz1cImhlYWRUaXRsZVdlaWdodD8nZm9udC13ZWlnaHQnOicnXCI+e3toZWFkVGl0bGV9fTwvdGV4dD5cclxuXHRcdFx0PC9zbG90PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PCEtLSBib2R5IC0tPlxyXG5cdFx0PHZpZXcgOmNsYXNzPVwiZ2V0Qm9keUNsYXNzXCI+XHJcblx0XHRcdDxpbWFnZSB2LWlmPVwiYm9keUNvdmVyXCIgOnNyYz1cImJvZHlDb3ZlclwiIFxyXG5cdFx0XHRtb2RlPVwid2lkdGhGaXhcIj48L2ltYWdlPlxyXG5cdFx0XHQ8c2xvdCAvPlxyXG5cdFx0PC92aWV3PlxyXG5cdDwvdmlldz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0cHJvcHM6e1xyXG5cdFx0XHQvLyDlpLTpg6jmoIfpophcclxuXHRcdFx0aGVhZFRpdGxlOlN0cmluZyxcclxuXHRcdFx0Ly8g5bCB6Z2i5Zu+XHJcblx0XHRcdGJvZHlDb3ZlcjpTdHJpbmcsXHJcblx0XHRcdC8vIOaYr+WQpuaYvuekuuWktOmDqFxyXG5cdFx0XHRzaG93aGVhZDp7XHJcblx0XHRcdFx0dHlwZTpCb29sZWFuLFxyXG5cdFx0XHRcdGRlZmF1bHQ6dHJ1ZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDmmK/lkKbmmL7npLrkuIvovrnnur9cclxuXHRcdFx0aGVhZEJvcmRlckJvdHRvbTp7XHJcblx0XHRcdFx0dHlwZTpCb29sZWFuLFxyXG5cdFx0XHRcdGRlZmF1bHQ6dHJ1ZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDmoIfpopjmmK/lkKbliqDnspdcclxuXHRcdFx0aGVhZFRpdGxlV2VpZ2h0OntcclxuXHRcdFx0XHR0eXBlOkJvb2xlYW4sXHJcblx0XHRcdFx0ZGVmYXVsdDp0cnVlXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOaYr+WQpue7mWJvZHnliqBwYWRkaW5nXHJcblx0XHRcdGJvZHlQYWRkaW5nOntcclxuXHRcdFx0XHR0eXBlOkJvb2xlYW4sXHJcblx0XHRcdFx0ZGVmYXVsdDpmYWxzZVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0Y29tcHV0ZWQ6IHtcclxuXHRcdFx0Z2V0SGVhZENsYXNzKCkge1xyXG5cdFx0XHRcdGxldCBCb3JkZXJCb3R0b20gPSB0aGlzLmhlYWRCb3JkZXJCb3R0b20gPyAnYm9yZGVyLWJvdHRvbSc6JydcclxuXHRcdFx0XHRyZXR1cm4gYCR7Qm9yZGVyQm90dG9tfWBcclxuXHRcdFx0fSxcclxuXHRcdFx0Z2V0Qm9keUNsYXNzKCl7XHJcblx0XHRcdFx0bGV0IHBhZGRpbmcgPSB0aGlzLmJvZHlQYWRkaW5nID8gJ3AtMicgOiAnJ1xyXG5cdFx0XHRcdHJldHVybiBgJHtwYWRkaW5nfWBcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHR9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuPC9zdHlsZT5cbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vY29tbW9uLWxpc3QubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04MTNiZTA5MCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9jb21tb24tbGlzdC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9jb21tb24tbGlzdC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLiRvcHRpb25zLnN0eWxlKXtcbiAgICB0aGlzLiRvcHRpb25zLnN0eWxlID0ge31cbn1cbmlmKHRoaXMuX19tZXJnZV9zdHlsZSAmJiB0aGlzLiRyb290ICYmIHRoaXMuJHJvb3QuJG9wdGlvbnMuYXBwU3R5bGUpe1xuICB0aGlzLl9fbWVyZ2Vfc3R5bGUodGhpcy4kcm9vdC4kb3B0aW9ucy5hcHBTdHlsZSlcbn1cbmlmKHRoaXMuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgIHRoaXMuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9jb21tb24tbGlzdC5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpLmRlZmF1bHQpXG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy4kb3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi9jb21tb24tbGlzdC5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpLmRlZmF1bHQpXG4gICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRDpcXFxcSEJ1aWxkZXJYLjEuOC4yLjIwMTkwNDAxLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBudWxsLFxuICBcImM2YzA3NGMwXCJcbiAgXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQzovVXNlcnMvaHVsaW5jbG91ZC9Eb2N1bWVudHMvSEJ1aWxkZXJQcm9qZWN0cy9taXNob3AvY29tcG9uZW50cy9jb21tb24vY29tbW9uLWxpc3QubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGxvYWRlcnNcXFxcdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFEOlxcXFxIQnVpbGRlclguMS44LjIuMjAxOTA0MDEuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNy0wIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCEuL2NvbW1vbi1saXN0Lm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODEzYmUwOTAmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwidmlld1wiLCBbXG4gICAgX2MoXG4gICAgICBcInZpZXdcIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFtcImNvbC02XCIsIFwiY29tbW9uLWxpc3RcIiwgXCJtYi0xXCJdLFxuICAgICAgICBvbjogeyBjbGljazogX3ZtLm9wZW5EZXRhaWwgfVxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJ1LWltYWdlXCIsIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogW1wiY29tbW9uLWxpc3QtY292ZXJcIl0sXG4gICAgICAgICAgYXR0cnM6IHsgc3JjOiBfdm0uaXRlbS5jb3ZlciwgbW9kZTogXCJhc3BlY3RGaXRcIiwgbGF6eUxvYWQ6IHRydWUgfVxuICAgICAgICB9KSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ1LXRleHRcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogW1xuICAgICAgICAgICAgICBcImZvbnRcIixcbiAgICAgICAgICAgICAgXCJ0ZXh0LWRhcmtcIixcbiAgICAgICAgICAgICAgXCJweC0zXCIsXG4gICAgICAgICAgICAgIFwicHktMVwiLFxuICAgICAgICAgICAgICBcImNvbW1vbi1saXN0LWxpbmVzXCJcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5pdGVtLnRpdGxlKSldXG4gICAgICAgICksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwidS10ZXh0XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcbiAgICAgICAgICAgICAgXCJweC0zXCIsXG4gICAgICAgICAgICAgIFwiZm9udFwiLFxuICAgICAgICAgICAgICBcInRleHQtbGlnaHQtbXV0ZWRcIixcbiAgICAgICAgICAgICAgXCJjb21tb24tbGlzdC1saW5lc1wiXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uaXRlbS5kZXNjKSldXG4gICAgICAgICksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcInB4LTNcIiwgXCJwdC0xXCIsIFwicm93XCIsIFwiYS1lbmRcIl0gfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcInByaWNlXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5pdGVtLnBwcmljZSkpXSksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ1LXRleHRcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1wibGluZS10aHJvdWdoXCIsIFwidGV4dC1saWdodC1tdXRlZFwiLCBcIm1sLTFcIl0gfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIu+/pVwiICsgX3ZtLl9zKF92bS5pdGVtLm9wcmljZSkpXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICBdLFxuICAgICAgMVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tMy0wIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS0zLTEhRDpcXFxcSEJ1aWxkZXJYLjEuOC4yLjIwMTkwNDAxLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIS4vY29tbW9uLWxpc3QubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclguMS44LjIuMjAxOTA0MDEuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTMtMCFEOlxcXFxIQnVpbGRlclguMS44LjIuMjAxOTA0MDEuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tMy0xIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCEuL2NvbW1vbi1saXN0Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XHJcblx0PHZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cImNvbC02IGNvbW1vbi1saXN0IG1iLTFcIiBAY2xpY2s9XCJvcGVuRGV0YWlsXCI+XHJcblx0XHRcdDxpbWFnZSA6c3JjPVwiaXRlbS5jb3ZlclwiIG1vZGU9XCJhc3BlY3RGaXRcIiBsYXp5LWxvYWQgY2xhc3M9XCJjb21tb24tbGlzdC1jb3ZlclwiPjwvaW1hZ2U+XHJcblx0XHRcdDx0ZXh0IGNsYXNzPVwiZm9udCB0ZXh0LWRhcmsgcHgtMyBweS0xIGNvbW1vbi1saXN0LWxpbmVzXCI+e3tpdGVtLnRpdGxlfX08L3RleHQ+XHJcblx0XHRcdDx0ZXh0IGNsYXNzPVwicHgtMyBmb250IHRleHQtbGlnaHQtbXV0ZWQgY29tbW9uLWxpc3QtbGluZXNcIj57e2l0ZW0uZGVzY319PC90ZXh0PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInB4LTMgcHQtMSByb3cgYS1lbmRcIj5cclxuXHRcdFx0XHQ8cHJpY2U+e3tpdGVtLnBwcmljZX19PC9wcmljZT5cclxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cImxpbmUtdGhyb3VnaCB0ZXh0LWxpZ2h0LW11dGVkIG1sLTFcIj7vv6V7e2l0ZW0ub3ByaWNlfX08L3RleHQ+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHJcblx0XHQ8L3ZpZXc+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgcHJpY2UgZnJvbSBcIkAvY29tcG9uZW50cy9jb21tb24vcHJpY2UubnZ1ZVwiO1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGNvbXBvbmVudHM6e1xyXG5cdFx0XHRwcmljZVxyXG5cdFx0fSxcclxuXHRcdHByb3BzOntcclxuXHRcdFx0aXRlbTpPYmplY3QsXHJcblx0XHRcdGluZGV4Ok51bWJlclxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0b3BlbkRldGFpbCgpIHtcclxuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHR1cmw6ICcvcGFnZXMvZGV0YWlsL2RldGFpbCdcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG4uY29tbW9uLWxpc3R7XHJcblx0cGFkZGluZy1sZWZ0OjIuNXJweDtwYWRkaW5nLXJpZ2h0OiAyLjVycHg7XHJcbn1cclxuLmNvbW1vbi1saXN0LWNvdmVye1xyXG5cdHdpZHRoOiAzNzBycHg7aGVpZ2h0OiAzNzBycHg7XHJcbn1cclxuLmNvbW1vbi1saXN0LWxpbmVze1xyXG5cdGxpbmVzOiAxO1xyXG59XHJcbjwvc3R5bGU+XHJcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vcHJpY2UubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01OTIwNDY2MiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9wcmljZS5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9wcmljZS5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLiRvcHRpb25zLnN0eWxlKXtcbiAgICB0aGlzLiRvcHRpb25zLnN0eWxlID0ge31cbn1cbmlmKHRoaXMuX19tZXJnZV9zdHlsZSAmJiB0aGlzLiRyb290ICYmIHRoaXMuJHJvb3QuJG9wdGlvbnMuYXBwU3R5bGUpe1xuICB0aGlzLl9fbWVyZ2Vfc3R5bGUodGhpcy4kcm9vdC4kb3B0aW9ucy5hcHBTdHlsZSlcbn1cbmlmKHRoaXMuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgIHRoaXMuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiQC9jb21tb24vemNtLW1haW4tbnZ1ZS5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIikuZGVmYXVsdClcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLiRvcHRpb25zLnN0eWxlLHJlcXVpcmUoXCJAL2NvbW1vbi96Y20tbWFpbi1udnVlLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiKS5kZWZhdWx0KVxuICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIGluamVjdFN0eWxlcyxcbiAgbnVsbCxcbiAgXCIwNzA2MjBiN1wiXG4gIFxuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkM6L1VzZXJzL2h1bGluY2xvdWQvRG9jdW1lbnRzL0hCdWlsZGVyUHJvamVjdHMvbWlzaG9wL2NvbXBvbmVudHMvY29tbW9uL3ByaWNlLm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclguMS44LjIuMjAxOTA0MDEuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxsb2FkZXJzXFxcXHRlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRDpcXFxcSEJ1aWxkZXJYLjEuOC4yLjIwMTkwNDAxLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTctMCFEOlxcXFxIQnVpbGRlclguMS44LjIuMjAxOTA0MDEuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhLi9wcmljZS5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU5MjA0NjYyJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogW1wiZmxleC1yb3dcIl0gfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ1LXRleHRcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJmb250XCJdLCBzdGF0aWNTdHlsZTogeyBjb2xvcjogXCIjRkQ2ODAxXCIgfSB9LFxuICAgICAgICAgIFtfdm0uX3YoXCLvv6VcIildXG4gICAgICAgICksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwidS10ZXh0XCIsXG4gICAgICAgICAgeyBzdGF0aWNTdHlsZTogeyBjb2xvcjogXCIjRkQ2ODAxXCIsIGZvbnRTaXplOiBcIjI1cHhcIiB9IH0sXG4gICAgICAgICAgW192bS5fdChcImRlZmF1bHRcIildLFxuICAgICAgICAgIDJcbiAgICAgICAgKVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclguMS44LjIuMjAxOTA0MDEuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTMtMCFEOlxcXFxIQnVpbGRlclguMS44LjIuMjAxOTA0MDEuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tMy0xIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCEuL3ByaWNlLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYLjEuOC4yLjIwMTkwNDAxLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS0zLTAhRDpcXFxcSEJ1aWxkZXJYLjEuOC4yLjIwMTkwNDAxLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTMtMSFEOlxcXFxIQnVpbGRlclguMS44LjIuMjAxOTA0MDEuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhLi9wcmljZS5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxyXG5cdDxkaXY+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiZmxleC1yb3dcIj5cclxuXHRcdFx0PHRleHQgY2xhc3M9XCJmb250XCIgc3R5bGU9XCJjb2xvcjogI0ZENjgwMTtcIj7vv6U8L3RleHQ+XHJcblx0XHRcdDx0ZXh0IHN0eWxlPVwiY29sb3I6ICNGRDY4MDE7Zm9udC1zaXplOiAyNXB4O1wiPjxzbG90IC8+PC90ZXh0PlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdFxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcbjxzdHlsZSBzcmM9XCJAL2NvbW1vbi96Y20tbWFpbi1udnVlLmNzc1wiPjwvc3R5bGU+XHJcbjxzdHlsZT5cclxuXHJcbjwvc3R5bGU+XHJcbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYLjEuOC4yLjIwMTkwNDAxLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhRDpcXFxcSEJ1aWxkZXJYLjEuOC4yLjIwMTkwNDAxLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiFEOlxcXFxIQnVpbGRlclguMS44LjIuMjAxOTA0MDEuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhLi96Y20tbWFpbi1udnVlLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSFEOlxcXFxIQnVpbGRlclguMS44LjIuMjAxOTA0MDEuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhRDpcXFxcSEJ1aWxkZXJYLjEuOC4yLjIwMTkwNDAxLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIS4vemNtLW1haW4tbnZ1ZS5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInBvc2l0aW9uLWFic29sdXRlXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIlxuICB9LFxuICBcInBvc2l0aW9uLWZpeGVkXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiZml4ZWRcIlxuICB9LFxuICBcInBvc2l0aW9uLXJlbGF0aXZlXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIlxuICB9LFxuICBcImxlZnQtMFwiOiB7XG4gICAgXCJsZWZ0XCI6IDBcbiAgfSxcbiAgXCJ0b3AtMFwiOiB7XG4gICAgXCJ0b3BcIjogMFxuICB9LFxuICBcImJvdHRvbS0wXCI6IHtcbiAgICBcImJvdHRvbVwiOiAwXG4gIH0sXG4gIFwicmlnaHQtMFwiOiB7XG4gICAgXCJyaWdodFwiOiAwXG4gIH0sXG4gIFwidy0xMDBcIjoge1xuICAgIFwid2lkdGhcIjogXCI3NTBcIlxuICB9LFxuICBcInctNTBcIjoge1xuICAgIFwid2lkdGhcIjogXCIzNzVcIlxuICB9LFxuICBcImgtMTAwXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjEyNTBcIlxuICB9LFxuICBcImgtNTBcIjoge1xuICAgIFwid2lkdGhcIjogXCI2MjVcIlxuICB9LFxuICBcImZvbnRcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyNVwiXG4gIH0sXG4gIFwiZm9udC1zbVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjIwXCJcbiAgfSxcbiAgXCJmb250LW1kXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMzBcIlxuICB9LFxuICBcImZvbnQtbGdcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCI0MFwiXG4gIH0sXG4gIFwiZm9udC1iaWdcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCI2MFwiXG4gIH0sXG4gIFwiZm9udC13ZWlnaHRcIjoge1xuICAgIFwiZm9udFdlaWdodFwiOiBcImJvbGRcIlxuICB9LFxuICBcImZvbnQtd2VpZ2h0LTEwMFwiOiB7XG4gICAgXCJmb250V2VpZ2h0XCI6IFwiMTAwXCJcbiAgfSxcbiAgXCJsaW5lLXRocm91Z2hcIjoge1xuICAgIFwidGV4dERlY29yYXRpb25cIjogXCJsaW5lLXRocm91Z2hcIlxuICB9LFxuICBcInJvd1wiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJmbGV4V3JhcFwiOiBcIndyYXBcIlxuICB9LFxuICBcImNvbC0xXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNjIuNVwiXG4gIH0sXG4gIFwiY29sLTJcIjoge1xuICAgIFwid2lkdGhcIjogXCIxMjVcIlxuICB9LFxuICBcImNvbC0zXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTg3LjVcIlxuICB9LFxuICBcImNvbC00XCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMjUwXCJcbiAgfSxcbiAgXCJjb2wtNVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjMxMi41XCJcbiAgfSxcbiAgXCJjb2wtNlwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjM3NVwiXG4gIH0sXG4gIFwiY29sLTdcIjoge1xuICAgIFwid2lkdGhcIjogXCI0MzcuNVwiXG4gIH0sXG4gIFwiY29sLThcIjoge1xuICAgIFwid2lkdGhcIjogXCI1MDBcIlxuICB9LFxuICBcImNvbC05XCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNTYyLjVcIlxuICB9LFxuICBcImNvbC0xMFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjYyNVwiXG4gIH0sXG4gIFwiY29sLTExXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNjg3LjVcIlxuICB9LFxuICBcImNvbC0xMlwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjc1MFwiXG4gIH0sXG4gIFwiZmxleC0xXCI6IHtcbiAgICBcImZsZXhcIjogMVxuICB9LFxuICBcImZsZXgtY29sdW1uXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIlxuICB9LFxuICBcImZsZXgtcm93XCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIlxuICB9LFxuICBcImZsZXgtd3JhcFwiOiB7XG4gICAgXCJmbGV4V3JhcFwiOiBcIndyYXBcIlxuICB9LFxuICBcImZsZXgtbm93cmFwXCI6IHtcbiAgICBcImZsZXhXcmFwXCI6IFwibm93cmFwXCJcbiAgfSxcbiAgXCJqLXN0YXJ0XCI6IHtcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiZmxleC1zdGFydFwiXG4gIH0sXG4gIFwiai1jZW50ZXJcIjoge1xuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcImotZW5kXCI6IHtcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiZmxleC1lbmRcIlxuICB9LFxuICBcImotc2JcIjoge1xuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCJcbiAgfSxcbiAgXCJhLWNlbnRlclwiOiB7XG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJhLXN0YXJ0XCI6IHtcbiAgICBcImFsaWduSXRlbXNcIjogXCJmbGV4LXN0YXJ0XCJcbiAgfSxcbiAgXCJhLWVuZFwiOiB7XG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiZmxleC1lbmRcIlxuICB9LFxuICBcImEtc3RyZXRjaFwiOiB7XG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwic3RyZXRjaFwiXG4gIH0sXG4gIFwiYm9yZGVyXCI6IHtcbiAgICBcImJvcmRlcldpZHRoXCI6IFwiMVwiLFxuICAgIFwiYm9yZGVyU3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjZGVlMmU2XCJcbiAgfSxcbiAgXCJib3JkZXItdG9wXCI6IHtcbiAgICBcImJvcmRlclRvcFdpZHRoXCI6IFwiMVwiLFxuICAgIFwiYm9yZGVyVG9wU3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyVG9wQ29sb3JcIjogXCIjZGVlMmU2XCJcbiAgfSxcbiAgXCJib3JkZXItcmlnaHRcIjoge1xuICAgIFwiYm9yZGVyUmlnaHRXaWR0aFwiOiBcIjFcIixcbiAgICBcImJvcmRlclJpZ2h0U3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyUmlnaHRDb2xvclwiOiBcIiNkZWUyZTZcIlxuICB9LFxuICBcImJvcmRlci1ib3R0b21cIjoge1xuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogXCIxXCIsXG4gICAgXCJib3JkZXJCb3R0b21TdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJCb3R0b21Db2xvclwiOiBcIiNkZWUyZTZcIlxuICB9LFxuICBcImJvcmRlci1sZWZ0XCI6IHtcbiAgICBcImJvcmRlckxlZnRXaWR0aFwiOiBcIjFcIixcbiAgICBcImJvcmRlckxlZnRTdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJMZWZ0Q29sb3JcIjogXCIjZGVlMmU2XCJcbiAgfSxcbiAgXCJib3JkZXItMFwiOiB7XG4gICAgXCJib3JkZXJXaWR0aFwiOiAwXG4gIH0sXG4gIFwiYm9yZGVyLXRvcC0wXCI6IHtcbiAgICBcImJvcmRlclRvcFdpZHRoXCI6IDBcbiAgfSxcbiAgXCJib3JkZXItcmlnaHQtMFwiOiB7XG4gICAgXCJib3JkZXJSaWdodFdpZHRoXCI6IDBcbiAgfSxcbiAgXCJib3JkZXItYm90dG9tLTBcIjoge1xuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogMFxuICB9LFxuICBcImJvcmRlci1sZWZ0LTBcIjoge1xuICAgIFwiYm9yZGVyTGVmdFdpZHRoXCI6IDBcbiAgfSxcbiAgXCJib3JkZXItcHJpbWFyeVwiOiB7XG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiMwMDdiZmZcIlxuICB9LFxuICBcImJvcmRlci1zZWNvbmRhcnlcIjoge1xuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjNmM3NTdkXCJcbiAgfSxcbiAgXCJib3JkZXItc3VjY2Vzc1wiOiB7XG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiM2Yzc1N2RcIlxuICB9LFxuICBcImJvcmRlci1kYW5nZXJcIjoge1xuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjZGMzNTQ1XCJcbiAgfSxcbiAgXCJib3JkZXItd2FybmluZ1wiOiB7XG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiNmZmMxMDdcIlxuICB9LFxuICBcImJvcmRlci1pbmZvXCI6IHtcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiIzE3YTJiOFwiXG4gIH0sXG4gIFwiYm9yZGVyLWxpZ2h0XCI6IHtcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiI2Y4ZjlmYVwiXG4gIH0sXG4gIFwiYm9yZGVyLWRhcmtcIjoge1xuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjMzQzYTQwXCJcbiAgfSxcbiAgXCJib3JkZXItd2hpdGVcIjoge1xuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJib3JkZXItbGlnaHQtc2Vjb25kYXJ5XCI6IHtcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiI0YxRjFGMVwiXG4gIH0sXG4gIFwicm91bmRlZFwiOiB7XG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCI1XCJcbiAgfSxcbiAgXCJyb3VuZGVkLWNpcmNsZVwiOiB7XG4gICAgXCJib3JkZXJSYWRpdXNcIjogMTAwXG4gIH0sXG4gIFwicm91bmRlZC0wXCI6IHtcbiAgICBcImJvcmRlclJhZGl1c1wiOiAwXG4gIH0sXG4gIFwidGV4dC1wcmltYXJ5XCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzAwN2JmZlwiXG4gIH0sXG4gIFwidGV4dC1zZWNvbmRhcnlcIjoge1xuICAgIFwiY29sb3JcIjogXCIjNmM3NTdkXCJcbiAgfSxcbiAgXCJ0ZXh0LXN1Y2Nlc3NcIjoge1xuICAgIFwiY29sb3JcIjogXCIjNmM3NTdkXCJcbiAgfSxcbiAgXCJ0ZXh0LWRhbmdlclwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNkYzM1NDVcIlxuICB9LFxuICBcInRleHQtd2FybmluZ1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNmZmMxMDdcIlxuICB9LFxuICBcInRleHQtaW5mb1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMxN2EyYjhcIlxuICB9LFxuICBcInRleHQtbGlnaHRcIjoge1xuICAgIFwiY29sb3JcIjogXCIjZjhmOWZhXCJcbiAgfSxcbiAgXCJ0ZXh0LWRhcmtcIjoge1xuICAgIFwiY29sb3JcIjogXCIjMzQzYTQwXCJcbiAgfSxcbiAgXCJ0ZXh0LW11dGVkXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzZjNzU3ZFwiXG4gIH0sXG4gIFwidGV4dC1saWdodC1tdXRlZFwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNCMkIyQjJcIlxuICB9LFxuICBcInRleHQtd2hpdGVcIjoge1xuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJiZy1wcmltYXJ5XCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMwMDdiZmZcIlxuICB9LFxuICBcImJnLXNlY29uZGFyeVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjNmM3NTdkXCJcbiAgfSxcbiAgXCJiZy1zdWNjZXNzXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiM2Yzc1N2RcIlxuICB9LFxuICBcImJnLWRhbmdlclwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZGMzNTQ1XCJcbiAgfSxcbiAgXCJiZy13YXJuaW5nXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmMxMDdcIlxuICB9LFxuICBcImJnLWluZm9cIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzE3YTJiOFwiXG4gIH0sXG4gIFwiYmctbGlnaHRcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2Y4ZjlmYVwiXG4gIH0sXG4gIFwiYmctZGFya1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMzQzYTQwXCJcbiAgfSxcbiAgXCJiZy13aGl0ZVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJtLTBcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiAwLFxuICAgIFwibWFyZ2luUmlnaHRcIjogMCxcbiAgICBcIm1hcmdpblRvcFwiOiAwLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IDBcbiAgfSxcbiAgXCJtXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIlxuICB9LFxuICBcIm0tMVwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMTBcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMTBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjEwXCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxMFwiXG4gIH0sXG4gIFwibS0yXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIyMFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIyMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMjBcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjIwXCJcbiAgfSxcbiAgXCJtLTNcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMzBcIlxuICB9LFxuICBcIm0tNFwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNDBcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNDBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjQwXCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI0MFwiXG4gIH0sXG4gIFwibS01XCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1MFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1MFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNTBcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjUwXCJcbiAgfSxcbiAgXCJteC0wXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogMCxcbiAgICBcIm1hcmdpblJpZ2h0XCI6IDBcbiAgfSxcbiAgXCJteFwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCJcbiAgfSxcbiAgXCJteC0xXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIxMFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxMFwiXG4gIH0sXG4gIFwibXgtMlwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMjBcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMjBcIlxuICB9LFxuICBcIm14LTNcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjMwXCJcbiAgfSxcbiAgXCJteC00XCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI0MFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI0MFwiXG4gIH0sXG4gIFwibXgtNVwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNTBcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNTBcIlxuICB9LFxuICBcIm15LTBcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IDAsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogMFxuICB9LFxuICBcIm15XCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIlxuICB9LFxuICBcIm15LTFcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMTBcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjEwXCJcbiAgfSxcbiAgXCJteS0yXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjIwXCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIyMFwiXG4gIH0sXG4gIFwibXktM1wiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMzBcIlxuICB9LFxuICBcIm15LTRcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiNDBcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjQwXCJcbiAgfSxcbiAgXCJteS01XCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjUwXCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1MFwiXG4gIH0sXG4gIFwibXQtMFwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogMFxuICB9LFxuICBcIm10XCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIlxuICB9LFxuICBcIm10LTFcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMTBcIlxuICB9LFxuICBcIm10LTJcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMjBcIlxuICB9LFxuICBcIm10LTNcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMzBcIlxuICB9LFxuICBcIm10LTRcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiNDBcIlxuICB9LFxuICBcIm10LTVcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiNTBcIlxuICB9LFxuICBcIm1iLTBcIjoge1xuICAgIFwibWFyZ2luQm90dG9tXCI6IDBcbiAgfSxcbiAgXCJtYlwiOiB7XG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCJcbiAgfSxcbiAgXCJtYi0xXCI6IHtcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjEwXCJcbiAgfSxcbiAgXCJtYi0yXCI6IHtcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjIwXCJcbiAgfSxcbiAgXCJtYi0zXCI6IHtcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjMwXCJcbiAgfSxcbiAgXCJtYi00XCI6IHtcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjQwXCJcbiAgfSxcbiAgXCJtYi01XCI6IHtcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjUwXCJcbiAgfSxcbiAgXCJtbC0wXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogMFxuICB9LFxuICBcIm1sXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCJcbiAgfSxcbiAgXCJtbC0xXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIxMFwiXG4gIH0sXG4gIFwibWwtMlwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMjBcIlxuICB9LFxuICBcIm1sLTNcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjMwXCJcbiAgfSxcbiAgXCJtbC00XCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI0MFwiXG4gIH0sXG4gIFwibWwtNVwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNTBcIlxuICB9LFxuICBcIm1yLTBcIjoge1xuICAgIFwibWFyZ2luUmlnaHRcIjogMFxuICB9LFxuICBcIm1yXCI6IHtcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiXG4gIH0sXG4gIFwibXItMVwiOiB7XG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjEwXCJcbiAgfSxcbiAgXCJtci0yXCI6IHtcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMjBcIlxuICB9LFxuICBcIm1yLTNcIjoge1xuICAgIFwibWFyZ2luUmlnaHRcIjogXCIzMFwiXG4gIH0sXG4gIFwibXItNFwiOiB7XG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjQwXCJcbiAgfSxcbiAgXCJtci01XCI6IHtcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNTBcIlxuICB9LFxuICBcInAtMFwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiAwLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IDAsXG4gICAgXCJwYWRkaW5nVG9wXCI6IDAsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IDBcbiAgfSxcbiAgXCJwXCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiNVwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNVwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjVcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCI1XCJcbiAgfSxcbiAgXCJwLTFcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxMFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTBcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxMFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjEwXCJcbiAgfSxcbiAgXCJwLTJcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjBcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIyMFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjIwXCJcbiAgfSxcbiAgXCJwLTNcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCIzMFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMzBcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIzMFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjMwXCJcbiAgfSxcbiAgXCJwLTRcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCI0MFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNDBcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCI0MFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjQwXCJcbiAgfSxcbiAgXCJwLTVcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCI1MFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNTBcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCI1MFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjUwXCJcbiAgfSxcbiAgXCJweC0wXCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IDAsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogMFxuICB9LFxuICBcInB4XCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiNVwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNVwiXG4gIH0sXG4gIFwicHgtMVwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjEwXCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxMFwiXG4gIH0sXG4gIFwicHgtMlwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwXCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyMFwiXG4gIH0sXG4gIFwicHgtM1wiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjMwXCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIzMFwiXG4gIH0sXG4gIFwicHgtNFwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjQwXCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI0MFwiXG4gIH0sXG4gIFwicHgtNVwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjUwXCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI1MFwiXG4gIH0sXG4gIFwicHktMFwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IDAsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IDBcbiAgfSxcbiAgXCJweVwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiNVwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjVcIlxuICB9LFxuICBcInB5LTFcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjEwXCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTBcIlxuICB9LFxuICBcInB5LTJcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjIwXCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMjBcIlxuICB9LFxuICBcInB5LTNcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjMwXCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMzBcIlxuICB9LFxuICBcInB5LTRcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjQwXCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiNDBcIlxuICB9LFxuICBcInB5LTVcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjUwXCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiNTBcIlxuICB9LFxuICBcInB0LTBcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiAwXG4gIH0sXG4gIFwicHRcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjVcIlxuICB9LFxuICBcInB0LTFcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjEwXCJcbiAgfSxcbiAgXCJwdC0yXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIyMFwiXG4gIH0sXG4gIFwicHQtM1wiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMzBcIlxuICB9LFxuICBcInB0LTRcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjQwXCJcbiAgfSxcbiAgXCJwdC01XCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCI1MFwiXG4gIH0sXG4gIFwicGItMFwiOiB7XG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IDBcbiAgfSxcbiAgXCJwYlwiOiB7XG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiNVwiXG4gIH0sXG4gIFwicGItMVwiOiB7XG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTBcIlxuICB9LFxuICBcInBiLTJcIjoge1xuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjIwXCJcbiAgfSxcbiAgXCJwYi0zXCI6IHtcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIzMFwiXG4gIH0sXG4gIFwicGItNFwiOiB7XG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiNDBcIlxuICB9LFxuICBcInBiLTVcIjoge1xuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjUwXCJcbiAgfSxcbiAgXCJwbC0wXCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IDBcbiAgfSxcbiAgXCJwbFwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjVcIlxuICB9LFxuICBcInBsLTFcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxMFwiXG4gIH0sXG4gIFwicGwtMlwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwXCJcbiAgfSxcbiAgXCJwbC0zXCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMzBcIlxuICB9LFxuICBcInBsLTRcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCI0MFwiXG4gIH0sXG4gIFwicGwtNVwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjUwXCJcbiAgfSxcbiAgXCJwci0wXCI6IHtcbiAgICBcInBhZGRpbmdSaWdodFwiOiAwXG4gIH0sXG4gIFwicHJcIjoge1xuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNVwiXG4gIH0sXG4gIFwicHItMVwiOiB7XG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxMFwiXG4gIH0sXG4gIFwicHItMlwiOiB7XG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyMFwiXG4gIH0sXG4gIFwicHItM1wiOiB7XG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIzMFwiXG4gIH0sXG4gIFwicHItNFwiOiB7XG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI0MFwiXG4gIH0sXG4gIFwicHItNVwiOiB7XG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI1MFwiXG4gIH1cbn0iLCJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSFEOlxcXFxIQnVpbGRlclguMS44LjIuMjAxOTA0MDEuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhRDpcXFxcSEJ1aWxkZXJYLjEuOC4yLjIwMTkwNDAxLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCEuL2NvbW1vbi1saXN0Lm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclguMS44LjIuMjAxOTA0MDEuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyFEOlxcXFxIQnVpbGRlclguMS44LjIuMjAxOTA0MDEuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhRDpcXFxcSEJ1aWxkZXJYLjEuOC4yLjIwMTkwNDAxLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxccG9zdGNzcy1sb2FkZXJcXFxcc3JjXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyFEOlxcXFxIQnVpbGRlclguMS44LjIuMjAxOTA0MDEuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhLi9jb21tb24tbGlzdC5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJjb21tb24tbGlzdFwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIuNXJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMi41cnB4XCJcbiAgfSxcbiAgXCJjb21tb24tbGlzdC1jb3ZlclwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjM3MHJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzcwcnB4XCJcbiAgfSxcbiAgXCJjb21tb24tbGlzdC1saW5lc1wiOiB7XG4gICAgXCJsaW5lc1wiOiAxXG4gIH1cbn0iLCJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSFEOlxcXFxIQnVpbGRlclguMS44LjIuMjAxOTA0MDEuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhRDpcXFxcSEJ1aWxkZXJYLjEuOC4yLjIwMTkwNDAxLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCEuL2luZGV4Lm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSFEOlxcXFxIQnVpbGRlclguMS44LjIuMjAxOTA0MDEuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhRDpcXFxcSEJ1aWxkZXJYLjEuOC4yLjIwMTkwNDAxLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCEuL2luZGV4Lm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwic2Nyb2xsLWhcIjoge1xuICAgIFwid2lkdGhcIjogXCI3NTBycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjgwcnB4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCJcbiAgfSxcbiAgXCJzd2lwZXItYm94XCI6IHtcbiAgICBcImZsZXhcIjogMVxuICB9LFxuICBcInVuaS10YWItaXRlbVwiOiB7XG4gICAgXCJmbGV4V3JhcFwiOiBcIm5vd3JhcFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIzNHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMzRycHhcIlxuICB9LFxuICBcInVuaS10YWItaXRlbS10aXRsZVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiM1NTU1NTVcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzBycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjgwcnB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiODBycHhcIixcbiAgICBcImZsZXhXcmFwXCI6IFwibm93cmFwXCJcbiAgfSxcbiAgXCJ1bmktdGFiLWl0ZW0tdGl0bGUtYWN0aXZlXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI0ZENjgwMVwiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogXCIyXCIsXG4gICAgXCJib3JkZXJTdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJCb3R0b21Db2xvclwiOiBcIiNGRDY4MDFcIlxuICB9XG59IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclguMS44LjIuMjAxOTA0MDEuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyFEOlxcXFxIQnVpbGRlclguMS44LjIuMjAxOTA0MDEuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhRDpcXFxcSEJ1aWxkZXJYLjEuOC4yLjIwMTkwNDAxLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxccG9zdGNzcy1sb2FkZXJcXFxcc3JjXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyFEOlxcXFxIQnVpbGRlclguMS44LjIuMjAxOTA0MDEuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYLjEuOC4yLjIwMTkwNDAxLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhRDpcXFxcSEJ1aWxkZXJYLjEuOC4yLjIwMTkwNDAxLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIUQ6XFxcXEhCdWlsZGVyWC4xLjguMi4yMDE5MDQwMS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiFEOlxcXFxIQnVpbGRlclguMS44LjIuMjAxOTA0MDEuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhRDpcXFxcSEJ1aWxkZXJYLjEuOC4yLjIwMTkwNDAxLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwicG9zaXRpb24tYWJzb2x1dGVcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiXG4gIH0sXG4gIFwicG9zaXRpb24tZml4ZWRcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJmaXhlZFwiXG4gIH0sXG4gIFwicG9zaXRpb24tcmVsYXRpdmVcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiXG4gIH0sXG4gIFwibGVmdC0wXCI6IHtcbiAgICBcImxlZnRcIjogMFxuICB9LFxuICBcInRvcC0wXCI6IHtcbiAgICBcInRvcFwiOiAwXG4gIH0sXG4gIFwiYm90dG9tLTBcIjoge1xuICAgIFwiYm90dG9tXCI6IDBcbiAgfSxcbiAgXCJyaWdodC0wXCI6IHtcbiAgICBcInJpZ2h0XCI6IDBcbiAgfSxcbiAgXCJ3LTEwMFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjc1MHJweFwiXG4gIH0sXG4gIFwidy01MFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjM3NXJweFwiXG4gIH0sXG4gIFwiaC0xMDBcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiMTI1MHJweFwiXG4gIH0sXG4gIFwiaC01MFwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCI2MjVycHhcIlxuICB9LFxuICBcImZvbnRcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIxNVwiXG4gIH0sXG4gIFwiZm9udC1zbVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjE4XCJcbiAgfSxcbiAgXCJmb250LW1kXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMzBcIlxuICB9LFxuICBcImZvbnQtbGdcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCI0MFwiXG4gIH0sXG4gIFwiZm9udC1iaWdcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCI2MFwiXG4gIH0sXG4gIFwiZm9udC13ZWlnaHRcIjoge1xuICAgIFwiZm9udFdlaWdodFwiOiBcImJvbGRcIlxuICB9LFxuICBcImZvbnQtd2VpZ2h0LTEwMFwiOiB7XG4gICAgXCJmb250V2VpZ2h0XCI6IFwiMTAwXCJcbiAgfSxcbiAgXCJsaW5lLXRocm91Z2hcIjoge1xuICAgIFwidGV4dERlY29yYXRpb25cIjogXCJsaW5lLXRocm91Z2hcIlxuICB9LFxuICBcInJvd1wiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJmbGV4V3JhcFwiOiBcIndyYXBcIlxuICB9LFxuICBcImNvbC0xXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNjIuNXJweFwiXG4gIH0sXG4gIFwiY29sLTJcIjoge1xuICAgIFwid2lkdGhcIjogXCIxMjVycHhcIlxuICB9LFxuICBcImNvbC0zXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTg3LjVycHhcIlxuICB9LFxuICBcImNvbC00XCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMjUwcnB4XCJcbiAgfSxcbiAgXCJjb2wtNVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjMxMi41cnB4XCJcbiAgfSxcbiAgXCJjb2wtNlwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjM3NXJweFwiXG4gIH0sXG4gIFwiY29sLTdcIjoge1xuICAgIFwid2lkdGhcIjogXCI0MzcuNXJweFwiXG4gIH0sXG4gIFwiY29sLThcIjoge1xuICAgIFwid2lkdGhcIjogXCI1MDBycHhcIlxuICB9LFxuICBcImNvbC05XCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNTYyLjVycHhcIlxuICB9LFxuICBcImNvbC0xMFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjYyNXJweFwiXG4gIH0sXG4gIFwiY29sLTExXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNjg3LjVycHhcIlxuICB9LFxuICBcImNvbC0xMlwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjc1MHJweFwiXG4gIH0sXG4gIFwiZmxleC0xXCI6IHtcbiAgICBcImZsZXhcIjogMVxuICB9LFxuICBcImZsZXgtY29sdW1uXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIlxuICB9LFxuICBcImZsZXgtcm93XCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIlxuICB9LFxuICBcImZsZXgtd3JhcFwiOiB7XG4gICAgXCJmbGV4V3JhcFwiOiBcIndyYXBcIlxuICB9LFxuICBcImZsZXgtbm93cmFwXCI6IHtcbiAgICBcImZsZXhXcmFwXCI6IFwibm93cmFwXCJcbiAgfSxcbiAgXCJqLXN0YXJ0XCI6IHtcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiZmxleC1zdGFydFwiXG4gIH0sXG4gIFwiai1jZW50ZXJcIjoge1xuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcImotZW5kXCI6IHtcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiZmxleC1lbmRcIlxuICB9LFxuICBcImotc2JcIjoge1xuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCJcbiAgfSxcbiAgXCJhLWNlbnRlclwiOiB7XG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJhLXN0YXJ0XCI6IHtcbiAgICBcImFsaWduSXRlbXNcIjogXCJmbGV4LXN0YXJ0XCJcbiAgfSxcbiAgXCJhLWVuZFwiOiB7XG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiZmxleC1lbmRcIlxuICB9LFxuICBcImEtc3RyZXRjaFwiOiB7XG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwic3RyZXRjaFwiXG4gIH0sXG4gIFwiYm9yZGVyXCI6IHtcbiAgICBcImJvcmRlcldpZHRoXCI6IFwiMXJweFwiLFxuICAgIFwiYm9yZGVyU3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjZGVlMmU2XCJcbiAgfSxcbiAgXCJib3JkZXItdG9wXCI6IHtcbiAgICBcImJvcmRlclRvcFdpZHRoXCI6IFwiMXJweFwiLFxuICAgIFwiYm9yZGVyVG9wU3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyVG9wQ29sb3JcIjogXCIjZGVlMmU2XCJcbiAgfSxcbiAgXCJib3JkZXItcmlnaHRcIjoge1xuICAgIFwiYm9yZGVyUmlnaHRXaWR0aFwiOiBcIjFycHhcIixcbiAgICBcImJvcmRlclJpZ2h0U3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyUmlnaHRDb2xvclwiOiBcIiNkZWUyZTZcIlxuICB9LFxuICBcImJvcmRlci1ib3R0b21cIjoge1xuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogXCIxcnB4XCIsXG4gICAgXCJib3JkZXJCb3R0b21TdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJCb3R0b21Db2xvclwiOiBcIiNkZWUyZTZcIlxuICB9LFxuICBcImJvcmRlci1sZWZ0XCI6IHtcbiAgICBcImJvcmRlckxlZnRXaWR0aFwiOiBcIjFycHhcIixcbiAgICBcImJvcmRlckxlZnRTdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJMZWZ0Q29sb3JcIjogXCIjZGVlMmU2XCJcbiAgfSxcbiAgXCJib3JkZXItMFwiOiB7XG4gICAgXCJib3JkZXJXaWR0aFwiOiAwXG4gIH0sXG4gIFwiYm9yZGVyLXRvcC0wXCI6IHtcbiAgICBcImJvcmRlclRvcFdpZHRoXCI6IDBcbiAgfSxcbiAgXCJib3JkZXItcmlnaHQtMFwiOiB7XG4gICAgXCJib3JkZXJSaWdodFdpZHRoXCI6IDBcbiAgfSxcbiAgXCJib3JkZXItYm90dG9tLTBcIjoge1xuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogMFxuICB9LFxuICBcImJvcmRlci1sZWZ0LTBcIjoge1xuICAgIFwiYm9yZGVyTGVmdFdpZHRoXCI6IDBcbiAgfSxcbiAgXCJib3JkZXItcHJpbWFyeVwiOiB7XG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiMwMDdiZmZcIlxuICB9LFxuICBcImJvcmRlci1zZWNvbmRhcnlcIjoge1xuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjNmM3NTdkXCJcbiAgfSxcbiAgXCJib3JkZXItc3VjY2Vzc1wiOiB7XG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiM2Yzc1N2RcIlxuICB9LFxuICBcImJvcmRlci1kYW5nZXJcIjoge1xuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjZGMzNTQ1XCJcbiAgfSxcbiAgXCJib3JkZXItd2FybmluZ1wiOiB7XG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiNmZmMxMDdcIlxuICB9LFxuICBcImJvcmRlci1pbmZvXCI6IHtcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiIzE3YTJiOFwiXG4gIH0sXG4gIFwiYm9yZGVyLWxpZ2h0XCI6IHtcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiI2Y4ZjlmYVwiXG4gIH0sXG4gIFwiYm9yZGVyLWRhcmtcIjoge1xuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjMzQzYTQwXCJcbiAgfSxcbiAgXCJib3JkZXItd2hpdGVcIjoge1xuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJib3JkZXItbGlnaHQtc2Vjb25kYXJ5XCI6IHtcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiI0YxRjFGMVwiXG4gIH0sXG4gIFwicmFkaXVzXCI6IHtcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjVycHhcIlxuICB9LFxuICBcInJhZGl1cy1jaXJjbGVcIjoge1xuICAgIFwiYm9yZGVyUmFkaXVzXCI6IDEwMFxuICB9LFxuICBcInJhZGl1cy0wXCI6IHtcbiAgICBcImJvcmRlclJhZGl1c1wiOiAwXG4gIH0sXG4gIFwidGV4dC1wcmltYXJ5XCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzAwN2JmZlwiXG4gIH0sXG4gIFwidGV4dC1zZWNvbmRhcnlcIjoge1xuICAgIFwiY29sb3JcIjogXCIjNmM3NTdkXCJcbiAgfSxcbiAgXCJ0ZXh0LXN1Y2Nlc3NcIjoge1xuICAgIFwiY29sb3JcIjogXCIjNmM3NTdkXCJcbiAgfSxcbiAgXCJ0ZXh0LWRhbmdlclwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNkYzM1NDVcIlxuICB9LFxuICBcInRleHQtd2FybmluZ1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNmZmMxMDdcIlxuICB9LFxuICBcInRleHQtaW5mb1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMxN2EyYjhcIlxuICB9LFxuICBcInRleHQtbGlnaHRcIjoge1xuICAgIFwiY29sb3JcIjogXCIjZjhmOWZhXCJcbiAgfSxcbiAgXCJ0ZXh0LWRhcmtcIjoge1xuICAgIFwiY29sb3JcIjogXCIjMzQzYTQwXCJcbiAgfSxcbiAgXCJ0ZXh0LW11dGVkXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzZjNzU3ZFwiXG4gIH0sXG4gIFwidGV4dC1saWdodC1tdXRlZFwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNCMkIyQjJcIlxuICB9LFxuICBcInRleHQtd2hpdGVcIjoge1xuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJiZy1wcmltYXJ5XCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMwMDdiZmZcIlxuICB9LFxuICBcImJnLXNlY29uZGFyeVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjNmM3NTdkXCJcbiAgfSxcbiAgXCJiZy1zdWNjZXNzXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiM2Yzc1N2RcIlxuICB9LFxuICBcImJnLWRhbmdlclwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZGMzNTQ1XCJcbiAgfSxcbiAgXCJiZy13YXJuaW5nXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmMxMDdcIlxuICB9LFxuICBcImJnLWluZm9cIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzE3YTJiOFwiXG4gIH0sXG4gIFwiYmctbGlnaHRcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2Y4ZjlmYVwiXG4gIH0sXG4gIFwiYmctZGFya1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMzQzYTQwXCJcbiAgfSxcbiAgXCJiZy13aGl0ZVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJtLTBcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiAwLFxuICAgIFwibWFyZ2luUmlnaHRcIjogMCxcbiAgICBcIm1hcmdpblRvcFwiOiAwLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IDBcbiAgfSxcbiAgXCJtXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1cnB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVycHhcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVycHhcIlxuICB9LFxuICBcIm0tMVwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMTBycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMTBycHhcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjEwcnB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxMHJweFwiXG4gIH0sXG4gIFwibS0yXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIyMHJweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIyMHJweFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMjBycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJtLTNcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjMwcnB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjMwcnB4XCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIzMHJweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMzBycHhcIlxuICB9LFxuICBcIm0tNFwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNDBycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNDBycHhcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjQwcnB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI0MHJweFwiXG4gIH0sXG4gIFwibS01XCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1MHJweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1MHJweFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNTBycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjUwcnB4XCJcbiAgfSxcbiAgXCJteC0wXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogMCxcbiAgICBcIm1hcmdpblJpZ2h0XCI6IDBcbiAgfSxcbiAgXCJteFwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNXJweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1cnB4XCJcbiAgfSxcbiAgXCJteC0xXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIxMHJweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxMHJweFwiXG4gIH0sXG4gIFwibXgtMlwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMjBycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMjBycHhcIlxuICB9LFxuICBcIm14LTNcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjMwcnB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJteC00XCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI0MHJweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI0MHJweFwiXG4gIH0sXG4gIFwibXgtNVwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNTBycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNTBycHhcIlxuICB9LFxuICBcIm15LTBcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IDAsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogMFxuICB9LFxuICBcIm15XCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVycHhcIlxuICB9LFxuICBcIm15LTFcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMTBycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjEwcnB4XCJcbiAgfSxcbiAgXCJteS0yXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjIwcnB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIyMHJweFwiXG4gIH0sXG4gIFwibXktM1wiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIzMHJweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMzBycHhcIlxuICB9LFxuICBcIm15LTRcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiNDBycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjQwcnB4XCJcbiAgfSxcbiAgXCJteS01XCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjUwcnB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1MHJweFwiXG4gIH0sXG4gIFwibXQtMFwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogMFxuICB9LFxuICBcIm10XCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVycHhcIlxuICB9LFxuICBcIm10LTFcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMTBycHhcIlxuICB9LFxuICBcIm10LTJcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMjBycHhcIlxuICB9LFxuICBcIm10LTNcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMzBycHhcIlxuICB9LFxuICBcIm10LTRcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiNDBycHhcIlxuICB9LFxuICBcIm10LTVcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiNTBycHhcIlxuICB9LFxuICBcIm1iLTBcIjoge1xuICAgIFwibWFyZ2luQm90dG9tXCI6IDBcbiAgfSxcbiAgXCJtYlwiOiB7XG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1cnB4XCJcbiAgfSxcbiAgXCJtYi0xXCI6IHtcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjEwcnB4XCJcbiAgfSxcbiAgXCJtYi0yXCI6IHtcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJtYi0zXCI6IHtcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJtYi00XCI6IHtcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjQwcnB4XCJcbiAgfSxcbiAgXCJtYi01XCI6IHtcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjUwcnB4XCJcbiAgfSxcbiAgXCJtbC0wXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogMFxuICB9LFxuICBcIm1sXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1cnB4XCJcbiAgfSxcbiAgXCJtbC0xXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIxMHJweFwiXG4gIH0sXG4gIFwibWwtMlwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMjBycHhcIlxuICB9LFxuICBcIm1sLTNcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJtbC00XCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI0MHJweFwiXG4gIH0sXG4gIFwibWwtNVwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNTBycHhcIlxuICB9LFxuICBcIm1yLTBcIjoge1xuICAgIFwibWFyZ2luUmlnaHRcIjogMFxuICB9LFxuICBcIm1yXCI6IHtcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNXJweFwiXG4gIH0sXG4gIFwibXItMVwiOiB7XG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjEwcnB4XCJcbiAgfSxcbiAgXCJtci0yXCI6IHtcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMjBycHhcIlxuICB9LFxuICBcIm1yLTNcIjoge1xuICAgIFwibWFyZ2luUmlnaHRcIjogXCIzMHJweFwiXG4gIH0sXG4gIFwibXItNFwiOiB7XG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjQwcnB4XCJcbiAgfSxcbiAgXCJtci01XCI6IHtcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNTBycHhcIlxuICB9LFxuICBcInAtMFwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiAwLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IDAsXG4gICAgXCJwYWRkaW5nVG9wXCI6IDAsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IDBcbiAgfSxcbiAgXCJwXCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiNXJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNXJweFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjVycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCI1cnB4XCJcbiAgfSxcbiAgXCJwLTFcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxMHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTBycHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxMHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjEwcnB4XCJcbiAgfSxcbiAgXCJwLTJcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjBycHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIyMHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJwLTNcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCIzMHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMzBycHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIzMHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJwLTRcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCI0MHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNDBycHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCI0MHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjQwcnB4XCJcbiAgfSxcbiAgXCJwLTVcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCI1MHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNTBycHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCI1MHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjUwcnB4XCJcbiAgfSxcbiAgXCJweC0wXCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IDAsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogMFxuICB9LFxuICBcInB4XCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiNXJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNXJweFwiXG4gIH0sXG4gIFwicHgtMVwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjEwcnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxMHJweFwiXG4gIH0sXG4gIFwicHgtMlwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwcnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyMHJweFwiXG4gIH0sXG4gIFwicHgtM1wiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjMwcnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIzMHJweFwiXG4gIH0sXG4gIFwicHgtNFwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjQwcnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI0MHJweFwiXG4gIH0sXG4gIFwicHgtNVwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjUwcnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI1MHJweFwiXG4gIH0sXG4gIFwicGxyLTBcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogMCxcbiAgICBcInBhZGRpbmdSaWdodFwiOiAwXG4gIH0sXG4gIFwicGxyLXhcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCI1cnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI1cnB4XCJcbiAgfSxcbiAgXCJwbHItMVwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjEwcnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxMHJweFwiXG4gIH0sXG4gIFwicGxyLTJcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjBycHhcIlxuICB9LFxuICBcInBsci0zXCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMzBycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJwbHItNFwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjQwcnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI0MHJweFwiXG4gIH0sXG4gIFwicGxyLTVcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCI1MHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNTBycHhcIlxuICB9LFxuICBcInB5LTBcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiAwLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiAwXG4gIH0sXG4gIFwicHlcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjVycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCI1cnB4XCJcbiAgfSxcbiAgXCJweS0xXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxMHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjEwcnB4XCJcbiAgfSxcbiAgXCJweS0yXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIyMHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJweS0zXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIzMHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJweS00XCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCI0MHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjQwcnB4XCJcbiAgfSxcbiAgXCJweS01XCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCI1MHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjUwcnB4XCJcbiAgfSxcbiAgXCJwdC0wXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogMFxuICB9LFxuICBcInB0XCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCI1cnB4XCJcbiAgfSxcbiAgXCJwdC0xXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxMHJweFwiXG4gIH0sXG4gIFwicHQtMlwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMjBycHhcIlxuICB9LFxuICBcInB0LTNcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJwdC00XCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCI0MHJweFwiXG4gIH0sXG4gIFwicHQtNVwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiNTBycHhcIlxuICB9LFxuICBcInBiLTBcIjoge1xuICAgIFwicGFkZGluZ0JvdHRvbVwiOiAwXG4gIH0sXG4gIFwicGJcIjoge1xuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjVycHhcIlxuICB9LFxuICBcInBiLTFcIjoge1xuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjEwcnB4XCJcbiAgfSxcbiAgXCJwYi0yXCI6IHtcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyMHJweFwiXG4gIH0sXG4gIFwicGItM1wiOiB7XG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMzBycHhcIlxuICB9LFxuICBcInBiLTRcIjoge1xuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjQwcnB4XCJcbiAgfSxcbiAgXCJwYi01XCI6IHtcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCI1MHJweFwiXG4gIH0sXG4gIFwicGwtMFwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiAwXG4gIH0sXG4gIFwicGxcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCI1cnB4XCJcbiAgfSxcbiAgXCJwbC0xXCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTBycHhcIlxuICB9LFxuICBcInBsLTJcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMHJweFwiXG4gIH0sXG4gIFwicGwtM1wiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJwbC00XCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiNDBycHhcIlxuICB9LFxuICBcInBsLTVcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCI1MHJweFwiXG4gIH0sXG4gIFwicHItMFwiOiB7XG4gICAgXCJwYWRkaW5nUmlnaHRcIjogMFxuICB9LFxuICBcInByXCI6IHtcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjVycHhcIlxuICB9LFxuICBcInByLTFcIjoge1xuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTBycHhcIlxuICB9LFxuICBcInByLTJcIjoge1xuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjBycHhcIlxuICB9LFxuICBcInByLTNcIjoge1xuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMzBycHhcIlxuICB9LFxuICBcInByLTRcIjoge1xuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNDBycHhcIlxuICB9LFxuICBcInByLTVcIjoge1xuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNTBycHhcIlxuICB9LFxuICBcInNjcm9sbC1oXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNzUwcnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI4MHJweFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiXG4gIH0sXG4gIFwiZGl2aWRlclwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCIxOHJweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0Y1RjVGNVwiLFxuICAgIFwid2lkdGhcIjogMTAwXG4gIH0sXG4gIFwic3dpcGVyLXN0YXRpY1wiOiB7XG4gICAgXCJoZWlnaHRcIjogXCI4cnB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRkQ2ODAxXCJcbiAgfSxcbiAgXCJ0YWItaXRlbS10aXRsZVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiM1NTU1NTVcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzBycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjgwcnB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiODBycHhcIixcbiAgICBcImZsZXhXcmFwXCI6IFwibm93cmFwXCJcbiAgfSxcbiAgXCJ0YWItaXRlbS10aXRsZS1hY3RpdmVcIjoge1xuICAgIFwiY29sb3JcIjogXCIjRkQ2ODAxXCIsXG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiBcIjJcIixcbiAgICBcImJvcmRlclN0eWxlXCI6IFwic29saWRcIixcbiAgICBcImJvcmRlckJvdHRvbUNvbG9yXCI6IFwiI0ZENjgwMVwiXG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9
>>>>>>> msqx-dev
