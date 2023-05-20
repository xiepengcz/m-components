import { defineComponent as c, resolveComponent as o, openBlock as n, createBlock as l, withCtx as t, renderSlot as r, createVNode as s, resolveDynamicComponent as u, unref as m } from "vue";
const p = (e) => e.replace(/(A-Z)g/, "-$1").toLocaleLowerCase(), f = /* @__PURE__ */ c({
  __name: "index",
  props: {
    icon: { type: String, default: "Bell" },
    value: { type: Number || String, default: "" },
    max: { type: Number, default: 99 },
    isDot: { type: Boolean, default: !1 },
    hidden: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (a, _) => {
      const i = o("el-badge"), d = o("el-popover");
      return n(), l(d, {
        disabled: e.disabled,
        placement: "bottom",
        width: 300,
        trigger: "click",
        class: "popover"
      }, {
        default: t(() => [
          r(a.$slots, "default")
        ]),
        reference: t(() => [
          s(i, {
            style: { cursor: "pointer" },
            value: e.value,
            max: e.max,
            isDot: e.isDot
          }, {
            default: t(() => [
              (n(), l(u(`el-icon-${m(p)(e.icon)}`)))
            ]),
            _: 1
          }, 8, ["value", "max", "isDot"])
        ]),
        _: 3
      }, 8, ["disabled"]);
    };
  }
});
const x = {
  install(e) {
    e.component("m-notification", f);
  }
};
export {
  x as default
};
