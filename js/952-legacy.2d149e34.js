(self["webpackChunk_vue_cli_core"]=self["webpackChunk_vue_cli_core"]||[]).push([[952,902],{34952:function(t,e,n){(function(e,r){t.exports=r(n(69943))})(0,(function(t){"use strict";var e={};function n(t){return Object.keys(t).reduce((function(e,n){return!1!==t[n]&&null!==t[n]&&void 0!==t[n]&&(e[n]=t[n]),e}),{})}var r={name:"InlineSvg",inheritAttrs:!1,render:function(){return this.svgElSource?t.h("svg",Object.assign({},this.getSvgAttrs(this.svgElSource),n(this.$attrs),{innerHTML:this.getSvgContent(this.svgElSource)})):null},props:{src:{type:String,required:!0},title:{type:String},transformSource:{type:Function,default:function(t){return t}},keepDuringLoading:{type:Boolean,default:!0}},emits:["loaded","unloaded","error"],data:function(){return{svgElSource:null}},watch:{src:function(t){this.getSource(t)}},mounted:function(){this.getSource(this.src)},methods:{getSvgAttrs:function(t){var e={},n=t.attributes;if(!n)return e;for(var r=n.length-1;r>=0;r--)e[n[r].name]=n[r].value;return e},getSvgContent:function(t){return t=t.cloneNode(!0),t=this.transformSource(t),this.title&&i(t,this.title),t.innerHTML},getSource:function(t){var n=this;e[t]||(e[t]=this.download(t)),this.svgElSource&&e[t].isPending()&&!this.keepDuringLoading&&(this.svgElSource=null,this.$emit("unloaded")),e[t].then((function(t){n.svgElSource=t,n.$nextTick((function(){n.$emit("loaded",n.$el)}))}))["catch"]((function(r){n.svgElSource&&(n.svgElSource=null,n.$emit("unloaded")),delete e[t],n.$emit("error",r)}))},download:function(t){return o(new Promise((function(e,n){var r=new XMLHttpRequest;r.open("GET",t,!0),r.onload=function(){if(r.status>=200&&r.status<400)try{var t=new DOMParser,i=t.parseFromString(r.responseText,"text/xml"),o=i.getElementsByTagName("svg")[0];o?e(o):n(new Error('Loaded file is not valid SVG"'))}catch(u){n(u)}else n(new Error("Error loading SVG"))},r.onerror=n,r.send()})))}}};function i(t,e){var n=t.getElementsByTagName("title");if(n.length)n[0].textContent=e;else{var r=document.createElementNS("http://www.w3.org/2000/svg","title");r.textContent=e,t.appendChild(r)}}function o(t){if(t.isPending)return t;var e=!0,n=t.then((function(t){return e=!1,t}),(function(t){throw e=!1,t}));return n.isPending=function(){return e},n}return r}))}}]);
//# sourceMappingURL=952-legacy.2d149e34.js.map