(function(e,s){typeof exports=="object"&&typeof module<"u"?module.exports=s(require("vue")):typeof define=="function"&&define.amd?define(["vue"],s):(e=typeof globalThis<"u"?globalThis:e||self,e.index=s(e.Vue))})(this,function(e){"use strict";const s={class:"index"},p=e.defineComponent({__name:"index",props:{percentage:{type:Number,default:0},isAnimation:{type:Boolean,default:!1},time:{type:Number,default:2e3}},setup(o){const t=o;let n=e.ref(0);return e.onMounted(()=>{if(t.isAnimation){let r=Math.ceil(t.time/t.percentage),i=setInterval(()=>{n.value+=1,n.value>=t.percentage&&(n.value=t.percentage,clearInterval(i))},r)}}),(r,i)=>{const a=e.resolveComponent("el-progress");return e.openBlock(),e.createElementBlock("div",s,[e.createVNode(a,e.mergeProps(r.$attrs,{percentage:e.unref(n)}),null,16,["percentage"])])}}}),d="",c=((o,t)=>{const n=o.__vccOpts||o;for(const[r,i]of t)n[r]=i;return n})(p,[["__scopeId","data-v-584db7b1"]]);return{install(o){o.component("m-progress",c)}}});