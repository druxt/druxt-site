(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{433:function(e,t,n){"use strict";n.r(t);var r=n(419),o=n(65),u=(n(103),n(30),n(68),n(167),n(385),n(338)),i=n(389),c=n(418),a={name:"DruxtSite",extends:i.a,props:{theme:{type:String,required:!0}},fetch:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.value){t.next=5;break}return"block--block",t.next=4,e.getCollection({type:"block--block",query:(new u.DrupalJsonApiParams).addFilter("theme",e.theme).addFields("block--block",["region"])}).then((function(e){return e.data.map((function(e){return e.attributes.region})).filter((function(e,t,n){return n.indexOf(e)===t}))}));case 4:e.model=t.sent;case 5:return t.next=7,i.a.fetch.call(e);case 7:case"end":return t.stop()}}),t)})))()},computed:{props:function(e){var t=e.regions,n=e.theme;return Object.fromEntries(t.map((function(e){return[e,{key:e,name:e,theme:n}]})))},regions:function(e){var t=e.model,n=e.value;return t||n||[]}},methods:Object(r.a)({},Object(c.a)({getCollection:"druxt/getCollection"})),druxt:{componentOptions:function(e){return[[e.theme],["default"]]},propsData:function(e){return{props:e.props,regions:e.regions,theme:e.theme}},slots:function(){var e=this,t=Object(r.a)({},Object.fromEntries(this.regions.map((function(t){return[t,function(n){return e.$createElement("DruxtBlockRegion",{attrs:n,key:t,props:e.props[t]})}]}))));return t.default=function(n){return e.regions.map((function(e){return(t[e]||function(){})(n)}))},t}}},s=n(45),l=Object(s.a)(a,void 0,void 0,!1,null,null,null);t.default=l.exports}}]);