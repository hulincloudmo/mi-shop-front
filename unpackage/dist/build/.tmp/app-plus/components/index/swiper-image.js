(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/index/swiper-image"],{"11bc":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{resdata:Array,height:{type:String,default:"350"},preview:{type:Boolean,default:!1}},computed:{getStyle:function(){return"height: ".concat(this.height,"rpx;")},getUrls:function(){return this.resdata.map(function(t){return t.src})}},methods:{event:function(e,n){if(this.preview)return t.previewImage({current:n,urls:this.getUrls,indicator:"default"})}}};e.default=n}).call(this,n("6e42")["default"])},1428:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return u})},"342e":function(t,e,n){"use strict";n.r(e);var r=n("11bc"),u=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);e["default"]=u.a},f8ea:function(t,e,n){"use strict";n.r(e);var r=n("1428"),u=n("342e");for(var i in u)"default"!==i&&function(t){n.d(e,t,function(){return u[t]})}(i);var a=n("2877"),c=Object(a["a"])(u["default"],r["a"],r["b"],!1,null,null,null);e["default"]=c.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/index/swiper-image-create-component',
    {
        'components/index/swiper-image-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("f8ea"))
        })
    },
    [['components/index/swiper-image-create-component']]
]);                
