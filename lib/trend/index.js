import { defineComponent as p, useSlots as f, openBlock as n, createElementBlock as d, createElementVNode as s, normalizeStyle as l, unref as c, renderSlot as g, toDisplayString as m, createBlock as a, resolveDynamicComponent as u } from "vue";
const i = (e) => e.replace(/(A-Z)g/, "-$1").toLocaleLowerCase(), x = { class: "m-trend" }, S = { key: 1 }, v = { class: "icon" }, C = /* @__PURE__ */ p({
  __name: "index",
  props: {
    type: { type: String, default: "up" },
    text: { type: String, default: "\u6587\u5B57 " },
    upIconColor: { type: String, default: "green" },
    downIconColor: { type: String, default: "red" },
    upTextColor: { type: String, default: "black" },
    downTextColor: { type: String, default: "black" },
    upIcon: { type: String, default: "ArrowUp" },
    downIcon: { type: String, default: "ArrowDown" }
  },
  setup(e) {
    let t = f();
    return console.log("slots =", t), (o, r) => (n(), d("div", x, [
      s("div", {
        class: "text",
        style: l({ color: e.type === "up" ? e.upTextColor : e.downTextColor })
      }, [
        c(t).default ? g(o.$slots, "default", { key: 0 }, void 0, !0) : (n(), d("div", S, m(e.text), 1))
      ], 4),
      s("div", v, [
        e.type === "up" ? (n(), a(u(`el-icon-${c(i)(e.upIcon)}`), {
          key: 0,
          style: l({ color: e.upIconColor })
        }, null, 8, ["style"])) : (n(), a(u(`el-icon-${c(i)(e.downIcon)}`), {
          key: 1,
          style: l({ color: e.downIconColor })
        }, null, 8, ["style"]))
      ])
    ]));
  }
});
const k = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [r, y] of t)
    o[r] = y;
  return o;
}, w = /* @__PURE__ */ k(C, [["__scopeId", "data-v-70923270"]]), I = {
  install(e) {
    e.component("m-trend", w);
  }
};
export {
  I as default
};
