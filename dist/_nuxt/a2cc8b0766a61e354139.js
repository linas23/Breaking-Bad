(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{240:function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return v}));var r=n(257),c=n(2),o=Object(c.e)("v-card__actions"),l=Object(c.e)("v-card__subtitle"),d=Object(c.e)("v-card__text"),v=Object(c.e)("v-card__title");r.a},241:function(t,e,n){var content=n(263);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("42c6ec9c",content,!0,{sourceMap:!1})},262:function(t,e,n){"use strict";var r=n(241);n.n(r).a},263:function(t,e,n){(e=n(25)(!1)).push([t.i,".stickIt{position:-webkit-sticky;position:sticky;top:100px;right:0}.bb{display:flex;justify-content:space-around}@media screen and (max-width:1000px){.bb{display:flex;flex-direction:column-reverse}}",""]),t.exports=e},292:function(t,e,n){"use strict";n.r(e);var r=n(95);var c=n(127);function o(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(c.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n(54);var l=n(15),d={data:function(){return{length:3,window:0}},asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,e.next=3,n.$get("https://www.breakingbadapi.com/api/characters");case 3:return r=e.sent,console.log(r),e.abrupt("return",{characters:o(r)});case 6:case"end":return e.stop()}}),e)})))()}},v=(n(262),n(50)),f=n(104),m=n.n(f),_=n(257),w=n(240),h=n(289),y=n(145),x=n(3),j=n(246),k=n(23),C=n(5),O=n(0).a.extend({props:{activeClass:String,value:{required:!1}},data:function(){return{isActive:!1}},methods:{toggle:function(){this.isActive=!this.isActive}},render:function(){return this.$scopedSlots.default?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({active:this.isActive,toggle:this.toggle})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(element.data=this._b(element.data||{},element.tag,{class:Object(x.a)({},this.activeClass,this.isActive)}),element):(Object(C.c)("v-item should only contain a single element",this),element)):(Object(C.c)("v-item is missing a default scopedSlot",this),null);var element}}),A=Object(k.a)(O,Object(j.a)("itemGroup","v-item","v-item-group")).extend({name:"v-item"}),S=n(252),V=n(290),I=n(276),$=n(287),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),n("div",{staticClass:"windows"},[n("v-row",{staticClass:"bb"},[n("v-col",{attrs:{cols:"12",sm:"2","sm-offset":"1"}},[n("v-item-group",{attrs:{mandatory:""},model:{value:t.window,callback:function(e){t.window=e},expression:"window"}},t._l(t.characters,(function(e){return n("v-item",{key:e.id,staticClass:"my-2",scopedSlots:t._u([{key:"default",fn:function(r){var c=r.active,o=r.toggle;return[n("div",[n("v-card",{staticClass:"warning--text title pl-2",attrs:{flat:"",hover:"","input-value":c},on:{click:o}},[t._v(t._s(e.name))])],1)]}}],null,!0)})})),1)],1),t._v(" "),n("v-col",{attrs:{cols:"12",md:"8"}},[n("v-window",{staticClass:"stickIt",attrs:{horizontal:"","show-arrows":""},model:{value:t.window,callback:function(e){t.window=e},expression:"window"}},t._l(t.characters,(function(e){return n("v-window-item",{key:e.id,attrs:{eager:""}},[n("v-card",{staticClass:"px-5 red--text"},[n("v-img",{attrs:{src:e.img,height:"400",contain:""}}),t._v(" "),n("v-card-title",{staticClass:"display-1"},[t._v(t._s(e.name))]),t._v(" "),n("v-card-text",{staticClass:"headline red--text"},[n("p",[t._v("DOB : "+t._s(e.birthday))]),t._v(" "),n("p",[t._v("Nickname : "+t._s(e.nickname))]),t._v(" "),n("p",[t._v("Occupation: "+t._s(e.occupation.join(", ")))]),t._v(" "),n("p",[t._v("Appearance in Season: "+t._s(e.appearance.join(", ")))]),t._v(" "),n("p",[t._v("Status: "+t._s(e.status))]),t._v(" "),n("p",[t._v("Portrayed By: "+t._s(e.portrayed))])])],1)],1)})),1)],1)],1)],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"display-2 text-center ma-7"},[e("span",{staticClass:"warning--text"},[this._v("Breaking")]),this._v(" "),e("span",{staticClass:"red--text"},[this._v("Bad")])])}],!1,null,null,null);e.default=component.exports;m()(component,{VCard:_.a,VCardText:w.a,VCardTitle:w.b,VCol:h.a,VImg:y.a,VItem:A,VItemGroup:S.b,VRow:V.a,VWindow:I.a,VWindowItem:$.a})}}]);