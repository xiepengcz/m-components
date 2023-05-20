import { defineComponent as a, ref as c, onMounted as p, resolveComponent as l, openBlock as _, createElementBlock as i, createVNode as d, mergeProps as m, unref as u } from "vue";
const f = { class: "index" }, g = /* @__PURE__ */ a({
  __name: "index",
  props: {
    percentage: {
      type: Number,
      default: 0
    },
    isAnimation: {
      type: Boolean,
      default: !1
    },
    time: {
      type: Number,
      default: 2e3
    }
  },
  setup(n) {
    const e = n;
    let t = c(0);
    return p(() => {
      if (e.isAnimation) {
        let o = Math.ceil(e.time / e.percentage), r = setInterval(() => {
          t.value += 1, t.value >= e.percentage && (t.value = e.percentage, clearInterval(r));
        }, o);
      }
    }), (o, r) => {
      const s = l("el-progress");
      return _(), i("div", f, [
        d(s, m(o.$attrs, { percentage: u(t) }), null, 16, ["percentage"])
      ]);
    };
  }
});
const v = (n, e) => {
  const t = n.__vccOpts || n;
  for (const [o, r] of e)
    t[o] = r;
  return t;
}, x = /* @__PURE__ */ v(g, [["__scopeId", "data-v-584db7b1"]]), y = {
  install(n) {
    n.component("m-progress", x);
  }
};
export {
  y as default
};
