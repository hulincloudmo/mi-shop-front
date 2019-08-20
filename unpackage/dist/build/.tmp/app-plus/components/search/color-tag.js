(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/search/color-tag"],{"07db":function(r,o,t){"use strict";t.r(o);var n=t("5749"),e=t.n(n);for(var c in n)"default"!==c&&function(r){t.d(o,r,function(){return n[r]})}(c);o["default"]=e.a},5749:function(r,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var n={props:{item:Object,color:{type:Boolean,default:!0}},computed:{getStyle:function(){if(!this.color)return"background:#F5F5F5;border: 0;";var r={borderColor:["#EEA6AA","#DD6A4B","#98D5D8","#9DBE93","#BCCD99"],background:["#F8EAE9","#FFBEC6","#E8F6F6","#E4F5E2","#F2F6E8"]},o=Math.floor(Math.random()*r.borderColor.length),t=r.borderColor[o],n=r.background[o];return"background:".concat(t,";border-color:").concat(n,";")}}};o.default=n},c8e7:function(r,o,t){"use strict";t.r(o);var n=t("c91f"),e=t("07db");for(var c in e)"default"!==c&&function(r){t.d(o,r,function(){return e[r]})}(c);var u=t("2877"),a=Object(u["a"])(e["default"],n["a"],n["b"],!1,null,null,null);o["default"]=a.exports},c91f:function(r,o,t){"use strict";var n=function(){var r=this,o=r.$createElement;r._self._c},e=[];t.d(o,"a",function(){return n}),t.d(o,"b",function(){return e})}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/search/color-tag-create-component',
    {
        'components/search/color-tag-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("c8e7"))
        })
    },
    [['components/search/color-tag-create-component']]
]);                
