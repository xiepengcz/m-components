import { defineComponent as N, resolveComponent as a, openBlock as t, createElementBlock as c, createVNode as k, withCtx as u, Fragment as y, renderList as m, createBlock as h, createCommentVNode as s, createElementVNode as p, toDisplayString as r, createTextVNode as V, resolveDynamicComponent as $, unref as B } from "vue";
const w = (n) => n.replace(/(A-Z)g/, "-$1").toLocaleLowerCase(), z = { class: "list-tabs__item" }, D = ["onClick"], E = {
  key: 0,
  class: "avatar"
}, T = { class: "content" }, q = {
  key: 0,
  class: "title"
}, F = {
  key: 1,
  class: "time"
}, O = {
  key: 2,
  class: "time"
}, S = { class: "actions" }, Z = ["onClick"], j = {
  key: 0,
  class: "a-icon"
}, G = { class: "a-text" }, H = /* @__PURE__ */ N({
  __name: "index",
  props: {
    list: {
      type: Array,
      required: !0
    },
    actions: {
      type: Array,
      default: () => []
    }
  },
  emits: ["clickItem", "clickAction"],
  setup(n, { emit: _ }) {
    const i = (o, d) => {
      _("clickItem", { item: o, i: d });
    }, v = (o, d) => {
      _("clickAction", { item: o, i: d });
    };
    return (o, d) => {
      const x = a("el-avatar"), g = a("el-tag"), C = a("el-scrollbar"), b = a("el-tab-pane"), A = a("el-tabs");
      return t(), c("div", z, [
        k(A, null, {
          default: u(() => [
            (t(!0), c(y, null, m(n.list, (f, I) => (t(), h(b, {
              label: f.title,
              key: I
            }, {
              default: u(() => [
                k(C, { "max-height": "300px" }, {
                  default: u(() => [
                    (t(!0), c(y, null, m(f.content, (e, l) => (t(), c("div", {
                      class: "container",
                      key: l,
                      onClick: (L) => i(e, l)
                    }, [
                      e.avatar ? (t(), c("div", E, [
                        k(x, {
                          size: "",
                          src: e.avatar
                        }, null, 8, ["src"])
                      ])) : s("", !0),
                      p("div", T, [
                        e.title ? (t(), c("div", q, [
                          p("div", null, r(e.title), 1),
                          e.tag ? (t(), h(g, {
                            key: 0,
                            size: "small",
                            type: e.tagType
                          }, {
                            default: u(() => [
                              V(r(e.tag), 1)
                            ]),
                            _: 2
                          }, 1032, ["type"])) : s("", !0)
                        ])) : s("", !0),
                        e.time ? (t(), c("div", F, r(e.time), 1)) : s("", !0),
                        e.desc ? (t(), c("div", O, r(e.desc), 1)) : s("", !0)
                      ])
                    ], 8, D))), 128)),
                    p("div", S, [
                      (t(!0), c(y, null, m(n.actions, (e, l) => (t(), c("div", {
                        class: "a-item",
                        key: l,
                        onClick: (L) => v(e, l)
                      }, [
                        e.icon ? (t(), c("div", j, [
                          (t(), h($(`el-icon-${B(w)(e.icon)}`)))
                        ])) : s("", !0),
                        p("div", G, r(e.text), 1)
                      ], 8, Z))), 128))
                    ])
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1032, ["label"]))), 128))
          ]),
          _: 1
        })
      ]);
    };
  }
});
const J = (n, _) => {
  const i = n.__vccOpts || n;
  for (const [v, o] of _)
    i[v] = o;
  return i;
}, K = /* @__PURE__ */ J(H, [["__scopeId", "data-v-5e2e9c3d"]]), P = {
  install(n) {
    n.component("m-list", K);
  }
};
export {
  P as default
};
