(function(e,c){typeof exports=="object"&&typeof module<"u"?module.exports=c(require("vue")):typeof define=="function"&&define.amd?define(["vue"],c):(e=typeof globalThis<"u"?globalThis:e||self,e.index=c(e.Vue))})(this,function(e){"use strict";const c=o=>o.replace(/(A-Z)g/,"-$1").toLocaleLowerCase(),_={class:"list-tabs__item"},p=["onClick"],m={key:0,class:"avatar"},k={class:"content"},B={key:0,class:"title"},y={key:1,class:"time"},f={key:2,class:"time"},C={class:"actions"},h=["onClick"],x={key:0,class:"a-icon"},g={class:"a-text"},E=e.defineComponent({__name:"index",props:{list:{type:Array,required:!0},actions:{type:Array,default:()=>[]}},emits:["clickItem","clickAction"],setup(o,{emit:s}){const a=(n,r)=>{s("clickItem",{item:n,i:r})},i=(n,r)=>{s("clickAction",{item:n,i:r})};return(n,r)=>{const N=e.resolveComponent("el-avatar"),b=e.resolveComponent("el-tag"),A=e.resolveComponent("el-scrollbar"),D=e.resolveComponent("el-tab-pane"),L=e.resolveComponent("el-tabs");return e.openBlock(),e.createElementBlock("div",_,[e.createVNode(L,null,{default:e.withCtx(()=>[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(o.list,(d,w)=>(e.openBlock(),e.createBlock(D,{label:d.title,key:w},{default:e.withCtx(()=>[e.createVNode(A,{"max-height":"300px"},{default:e.withCtx(()=>[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(d.content,(t,l)=>(e.openBlock(),e.createElementBlock("div",{class:"container",key:l,onClick:S=>a(t,l)},[t.avatar?(e.openBlock(),e.createElementBlock("div",m,[e.createVNode(N,{size:"",src:t.avatar},null,8,["src"])])):e.createCommentVNode("",!0),e.createElementVNode("div",k,[t.title?(e.openBlock(),e.createElementBlock("div",B,[e.createElementVNode("div",null,e.toDisplayString(t.title),1),t.tag?(e.openBlock(),e.createBlock(b,{key:0,size:"small",type:t.tagType},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(t.tag),1)]),_:2},1032,["type"])):e.createCommentVNode("",!0)])):e.createCommentVNode("",!0),t.time?(e.openBlock(),e.createElementBlock("div",y,e.toDisplayString(t.time),1)):e.createCommentVNode("",!0),t.desc?(e.openBlock(),e.createElementBlock("div",f,e.toDisplayString(t.desc),1)):e.createCommentVNode("",!0)])],8,p))),128)),e.createElementVNode("div",C,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(o.actions,(t,l)=>(e.openBlock(),e.createElementBlock("div",{class:"a-item",key:l,onClick:S=>i(t,l)},[t.icon?(e.openBlock(),e.createElementBlock("div",x,[(e.openBlock(),e.createBlock(e.resolveDynamicComponent(`el-icon-${e.unref(c)(t.icon)}`)))])):e.createCommentVNode("",!0),e.createElementVNode("div",g,e.toDisplayString(t.text),1)],8,h))),128))])]),_:2},1024)]),_:2},1032,["label"]))),128))]),_:1})])}}}),I="",V=((o,s)=>{const a=o.__vccOpts||o;for(const[i,n]of s)a[i]=n;return a})(E,[["__scopeId","data-v-5e2e9c3d"]]);return{install(o){o.component("m-list",V)}}});