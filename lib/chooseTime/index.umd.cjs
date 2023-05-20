(function(e,d){typeof exports=="object"&&typeof module<"u"?module.exports=d(require("vue")):typeof define=="function"&&define.amd?define(["vue"],d):(e=typeof globalThis<"u"?globalThis:e||self,e.index=d(e.Vue))})(this,function(e){"use strict";const d={style:{display:"flex"}},m={style:{"margin-right":"20px"}},u=e.defineComponent({__name:"index",props:{startPlaceholder:{type:String,default:"\u8BF7\u8F93\u5165\u5F00\u59CB\u65F6\u95F4"},startTimeStart:{type:String,default:"08:00"},startStep:{type:String,default:"00:30"},startTimeEnd:{type:String,default:"24:00"},endPlaceholder:{type:String,default:"\u8BF7\u8F93\u5165\u7ED3\u675F\u65F6\u95F4"},endTimeStart:{type:String,default:"08:00"},endStep:{type:String,default:"00:30"},endTimeEnd:{type:String,default:"24:00"}},emits:["startChange","endChange"],setup(t,{emit:s}){const a=e.ref(""),n=e.ref("");return e.watch(()=>a.value,l=>{l===""?n.value="":s("startChange",{startTime:a.value,endTime:n.value})}),e.watch(()=>n.value,l=>{l!==""&&s("endChange",{startTime:a.value,endTime:n.value})}),(l,i)=>{const o=e.resolveComponent("el-time-select");return e.openBlock(),e.createElementBlock("div",d,[e.createElementVNode("div",m,[e.createVNode(o,e.mergeProps(l.$attrs.startOptions,{modelValue:a.value,"onUpdate:modelValue":i[0]||(i[0]=r=>a.value=r),"max-time":n.value,class:"mr-4",placeholder:t.startPlaceholder,start:t.startTimeStart,step:t.startStep,end:t.startTimeEnd}),null,16,["modelValue","max-time","placeholder","start","step","end"])]),e.createElementVNode("div",null,[e.createVNode(o,e.mergeProps(l.$attrs.endOptions,{modelValue:n.value,"onUpdate:modelValue":i[1]||(i[1]=r=>n.value=r),"min-time":a.value,placeholder:t.endPlaceholder,start:t.endTimeStart,step:t.endStep,end:t.endTimeEnd}),null,16,["modelValue","min-time","placeholder","start","step","end"])])])}}});return{install(t){t.component("m-choose-time",u)}}});
