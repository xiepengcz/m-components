import { defineComponent as c, ref as u, watch as m, resolveComponent as v, openBlock as f, createElementBlock as S, createElementVNode as s, createVNode as o, mergeProps as p } from "vue";
const g = { style: { display: "flex" } }, h = { style: { "margin-right": "20px" } }, T = /* @__PURE__ */ c({
  __name: "index",
  props: {
    startPlaceholder: {
      type: String,
      default: "\u8BF7\u8F93\u5165\u5F00\u59CB\u65F6\u95F4"
    },
    startTimeStart: {
      type: String,
      default: "08:00"
    },
    startStep: {
      type: String,
      default: "00:30"
    },
    startTimeEnd: {
      type: String,
      default: "24:00"
    },
    endPlaceholder: {
      type: String,
      default: "\u8BF7\u8F93\u5165\u7ED3\u675F\u65F6\u95F4"
    },
    endTimeStart: {
      type: String,
      default: "08:00"
    },
    endStep: {
      type: String,
      default: "00:30"
    },
    endTimeEnd: {
      type: String,
      default: "24:00"
    }
  },
  emits: ["startChange", "endChange"],
  setup(e, { emit: r }) {
    const a = u(""), t = u("");
    return m(() => a.value, (l) => {
      l === "" ? t.value = "" : r("startChange", { startTime: a.value, endTime: t.value });
    }), m(() => t.value, (l) => {
      l !== "" && r("endChange", { startTime: a.value, endTime: t.value });
    }), (l, n) => {
      const i = v("el-time-select");
      return f(), S("div", g, [
        s("div", h, [
          o(i, p(l.$attrs.startOptions, {
            modelValue: a.value,
            "onUpdate:modelValue": n[0] || (n[0] = (d) => a.value = d),
            "max-time": t.value,
            class: "mr-4",
            placeholder: e.startPlaceholder,
            start: e.startTimeStart,
            step: e.startStep,
            end: e.startTimeEnd
          }), null, 16, ["modelValue", "max-time", "placeholder", "start", "step", "end"])
        ]),
        s("div", null, [
          o(i, p(l.$attrs.endOptions, {
            modelValue: t.value,
            "onUpdate:modelValue": n[1] || (n[1] = (d) => t.value = d),
            "min-time": a.value,
            placeholder: e.endPlaceholder,
            start: e.endTimeStart,
            step: e.endStep,
            end: e.endTimeEnd
          }), null, 16, ["modelValue", "min-time", "placeholder", "start", "step", "end"])
        ])
      ]);
    };
  }
}), F = {
  install(e) {
    e.component("m-choose-time", T);
  }
};
export {
  F as default
};
