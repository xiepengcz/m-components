import { openBlock as n, createElementBlock as s, createElementVNode as _, createStaticVNode as D2, getCurrentScope as E2, onScopeDispose as I2, ref as L, unref as v, getCurrentInstance as K, onMounted as z2, nextTick as N2, watch as N, warn as R2, provide as U2, computed as x, inject as W2, defineComponent as y, mergeProps as G2, renderSlot as O, normalizeClass as M, createVNode as S, Transition as x2, withCtx as A, withDirectives as C2, toDisplayString as J, vShow as H2, shallowReactive as j2, createBlock as k, normalizeStyle as Z2, createCommentVNode as D, resolveDynamicComponent as M2, Fragment as W, withModifiers as Q2, isVNode as V2, render as i2, resolveComponent as U, renderList as K2 } from "vue";
/*! Element Plus Icons Vue v2.0.10 */
var J2 = {
  name: "AddLocation"
}, i = (e, t) => {
  let a = e.__vccOpts || e;
  for (let [r, l] of t)
    a[r] = l;
  return a;
}, X2 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Y2 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
}, null, -1), e0 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
}, null, -1), t0 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M544 384h96a32 32 0 1 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96v-96a32 32 0 0 1 64 0v96z"
}, null, -1), a0 = [
  Y2,
  e0,
  t0
];
function _0(e, t, a, r, l, o) {
  return n(), s("svg", X2, a0);
}
var r0 = /* @__PURE__ */ i(J2, [["render", _0], ["__file", "add-location.vue"]]), l0 = {
  name: "Aim"
}, o0 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, n0 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), s0 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M512 96a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V128a32 32 0 0 1 32-32zm0 576a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V704a32 32 0 0 1 32-32zM96 512a32 32 0 0 1 32-32h192a32 32 0 0 1 0 64H128a32 32 0 0 1-32-32zm576 0a32 32 0 0 1 32-32h192a32 32 0 1 1 0 64H704a32 32 0 0 1-32-32z"
}, null, -1), i0 = [
  n0,
  s0
];
function u0(e, t, a, r, l, o) {
  return n(), s("svg", o0, i0);
}
var d0 = /* @__PURE__ */ i(l0, [["render", u0], ["__file", "aim.vue"]]), v0 = {
  name: "AlarmClock"
}, c0 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, h0 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M512 832a320 320 0 1 0 0-640 320 320 0 0 0 0 640zm0 64a384 384 0 1 1 0-768 384 384 0 0 1 0 768z"
}, null, -1), p0 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "m292.288 824.576 55.424 32-48 83.136a32 32 0 1 1-55.424-32l48-83.136zm439.424 0-55.424 32 48 83.136a32 32 0 1 0 55.424-32l-48-83.136zM512 512h160a32 32 0 1 1 0 64H480a32 32 0 0 1-32-32V320a32 32 0 0 1 64 0v192zM90.496 312.256A160 160 0 0 1 312.32 90.496l-46.848 46.848a96 96 0 0 0-128 128L90.56 312.256zm835.264 0A160 160 0 0 0 704 90.496l46.848 46.848a96 96 0 0 1 128 128l46.912 46.912z"
}, null, -1), f0 = [
  h0,
  p0
];
function w0(e, t, a, r, l, o) {
  return n(), s("svg", c0, f0);
}
var m0 = /* @__PURE__ */ i(v0, [["render", w0], ["__file", "alarm-clock.vue"]]), g0 = {
  name: "Apple"
}, $0 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, z0 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M599.872 203.776a189.44 189.44 0 0 1 64.384-4.672l2.624.128c31.168 1.024 51.2 4.096 79.488 16.32 37.632 16.128 74.496 45.056 111.488 89.344 96.384 115.264 82.752 372.8-34.752 521.728-7.68 9.728-32 41.6-30.72 39.936a426.624 426.624 0 0 1-30.08 35.776c-31.232 32.576-65.28 49.216-110.08 50.048-31.36.64-53.568-5.312-84.288-18.752l-6.528-2.88c-20.992-9.216-30.592-11.904-47.296-11.904-18.112 0-28.608 2.88-51.136 12.672l-6.464 2.816c-28.416 12.224-48.32 18.048-76.16 19.2-74.112 2.752-116.928-38.08-180.672-132.16-96.64-142.08-132.608-349.312-55.04-486.4 46.272-81.92 129.92-133.632 220.672-135.04 32.832-.576 60.288 6.848 99.648 22.72 27.136 10.88 34.752 13.76 37.376 14.272 16.256-20.16 27.776-36.992 34.56-50.24 13.568-26.304 27.2-59.968 40.704-100.8a32 32 0 1 1 60.8 20.224c-12.608 37.888-25.408 70.4-38.528 97.664zm-51.52 78.08c-14.528 17.792-31.808 37.376-51.904 58.816a32 32 0 1 1-46.72-43.776l12.288-13.248c-28.032-11.2-61.248-26.688-95.68-26.112-70.4 1.088-135.296 41.6-171.648 105.792C121.6 492.608 176 684.16 247.296 788.992c34.816 51.328 76.352 108.992 130.944 106.944 52.48-2.112 72.32-34.688 135.872-34.688 63.552 0 81.28 34.688 136.96 33.536 56.448-1.088 75.776-39.04 126.848-103.872 107.904-136.768 107.904-362.752 35.776-449.088-72.192-86.272-124.672-84.096-151.68-85.12-41.472-4.288-81.6 12.544-113.664 25.152z"
}, null, -1), x0 = [
  z0
];
function C0(e, t, a, r, l, o) {
  return n(), s("svg", $0, x0);
}
var H0 = /* @__PURE__ */ i(g0, [["render", C0], ["__file", "apple.vue"]]), M0 = {
  name: "ArrowDownBold"
}, V0 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, y0 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8 316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z"
}, null, -1), B0 = [
  y0
];
function L0(e, t, a, r, l, o) {
  return n(), s("svg", V0, B0);
}
var A0 = /* @__PURE__ */ i(M0, [["render", L0], ["__file", "arrow-down-bold.vue"]]), b0 = {
  name: "ArrowDown"
}, k0 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, S0 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
}, null, -1), q0 = [
  S0
];
function F0(e, t, a, r, l, o) {
  return n(), s("svg", k0, q0);
}
var O0 = /* @__PURE__ */ i(b0, [["render", F0], ["__file", "arrow-down.vue"]]), P0 = {
  name: "ArrowLeftBold"
}, T0 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, D0 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0z"
}, null, -1), E0 = [
  D0
];
function I0(e, t, a, r, l, o) {
  return n(), s("svg", T0, E0);
}
var N0 = /* @__PURE__ */ i(P0, [["render", I0], ["__file", "arrow-left-bold.vue"]]), R0 = {
  name: "ArrowLeft"
}, U0 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, W0 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"
}, null, -1), G0 = [
  W0
];
function j0(e, t, a, r, l, o) {
  return n(), s("svg", U0, G0);
}
var Z0 = /* @__PURE__ */ i(R0, [["render", j0], ["__file", "arrow-left.vue"]]), Q0 = {
  name: "ArrowRightBold"
}, K0 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, J0 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"
}, null, -1), X0 = [
  J0
];
function Y0(e, t, a, r, l, o) {
  return n(), s("svg", K0, X0);
}
var e1 = /* @__PURE__ */ i(Q0, [["render", Y0], ["__file", "arrow-right-bold.vue"]]), t1 = {
  name: "ArrowRight"
}, a1 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _1 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
}, null, -1), r1 = [
  _1
];
function l1(e, t, a, r, l, o) {
  return n(), s("svg", a1, r1);
}
var o1 = /* @__PURE__ */ i(t1, [["render", l1], ["__file", "arrow-right.vue"]]), n1 = {
  name: "ArrowUpBold"
}, s1 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, i1 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M104.704 685.248a64 64 0 0 0 90.496 0l316.8-316.8 316.8 316.8a64 64 0 0 0 90.496-90.496L557.248 232.704a64 64 0 0 0-90.496 0L104.704 594.752a64 64 0 0 0 0 90.496z"
}, null, -1), u1 = [
  i1
];
function d1(e, t, a, r, l, o) {
  return n(), s("svg", s1, u1);
}
var v1 = /* @__PURE__ */ i(n1, [["render", d1], ["__file", "arrow-up-bold.vue"]]), c1 = {
  name: "ArrowUp"
}, h1 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, p1 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z"
}, null, -1), f1 = [
  p1
];
function w1(e, t, a, r, l, o) {
  return n(), s("svg", h1, f1);
}
var m1 = /* @__PURE__ */ i(c1, [["render", w1], ["__file", "arrow-up.vue"]]), g1 = {
  name: "Avatar"
}, $1 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, z1 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M628.736 528.896A416 416 0 0 1 928 928H96a415.872 415.872 0 0 1 299.264-399.104L512 704l116.736-175.104zM720 304a208 208 0 1 1-416 0 208 208 0 0 1 416 0z"
}, null, -1), x1 = [
  z1
];
function C1(e, t, a, r, l, o) {
  return n(), s("svg", $1, x1);
}
var H1 = /* @__PURE__ */ i(g1, [["render", C1], ["__file", "avatar.vue"]]), M1 = {
  name: "Back"
}, V1 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, y1 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
}, null, -1), B1 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
}, null, -1), L1 = [
  y1,
  B1
];
function A1(e, t, a, r, l, o) {
  return n(), s("svg", V1, L1);
}
var b1 = /* @__PURE__ */ i(M1, [["render", A1], ["__file", "back.vue"]]), k1 = {
  name: "Baseball"
}, S1 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, q1 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M195.2 828.8a448 448 0 1 1 633.6-633.6 448 448 0 0 1-633.6 633.6zm45.248-45.248a384 384 0 1 0 543.104-543.104 384 384 0 0 0-543.104 543.104z"
}, null, -1), F1 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M497.472 96.896c22.784 4.672 44.416 9.472 64.896 14.528a256.128 256.128 0 0 0 350.208 350.208c5.056 20.48 9.856 42.112 14.528 64.896A320.128 320.128 0 0 1 497.472 96.896zM108.48 491.904a320.128 320.128 0 0 1 423.616 423.68c-23.04-3.648-44.992-7.424-65.728-11.52a256.128 256.128 0 0 0-346.496-346.432 1736.64 1736.64 0 0 1-11.392-65.728z"
}, null, -1), O1 = [
  q1,
  F1
];
function P1(e, t, a, r, l, o) {
  return n(), s("svg", S1, O1);
}
var T1 = /* @__PURE__ */ i(k1, [["render", P1], ["__file", "baseball.vue"]]), D1 = {
  name: "Basketball"
}, E1 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, I1 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M778.752 788.224a382.464 382.464 0 0 0 116.032-245.632 256.512 256.512 0 0 0-241.728-13.952 762.88 762.88 0 0 1 125.696 259.584zm-55.04 44.224a699.648 699.648 0 0 0-125.056-269.632 256.128 256.128 0 0 0-56.064 331.968 382.72 382.72 0 0 0 181.12-62.336zm-254.08 61.248A320.128 320.128 0 0 1 557.76 513.6a715.84 715.84 0 0 0-48.192-48.128 320.128 320.128 0 0 1-379.264 88.384 382.4 382.4 0 0 0 110.144 229.696 382.4 382.4 0 0 0 229.184 110.08zM129.28 481.088a256.128 256.128 0 0 0 331.072-56.448 699.648 699.648 0 0 0-268.8-124.352 382.656 382.656 0 0 0-62.272 180.8zm106.56-235.84a762.88 762.88 0 0 1 258.688 125.056 256.512 256.512 0 0 0-13.44-241.088A382.464 382.464 0 0 0 235.84 245.248zm318.08-114.944c40.576 89.536 37.76 193.92-8.448 281.344a779.84 779.84 0 0 1 66.176 66.112 320.832 320.832 0 0 1 282.112-8.128 382.4 382.4 0 0 0-110.144-229.12 382.4 382.4 0 0 0-229.632-110.208zM828.8 828.8a448 448 0 1 1-633.6-633.6 448 448 0 0 1 633.6 633.6z"
}, null, -1), N1 = [
  I1
];
function R1(e, t, a, r, l, o) {
  return n(), s("svg", E1, N1);
}
var U1 = /* @__PURE__ */ i(D1, [["render", R1], ["__file", "basketball.vue"]]), W1 = {
  name: "BellFilled"
}, G1 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, j1 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M640 832a128 128 0 0 1-256 0h256zm192-64H134.4a38.4 38.4 0 0 1 0-76.8H192V448c0-154.88 110.08-284.16 256.32-313.6a64 64 0 1 1 127.36 0A320.128 320.128 0 0 1 832 448v243.2h57.6a38.4 38.4 0 0 1 0 76.8H832z"
}, null, -1), Z1 = [
  j1
];
function Q1(e, t, a, r, l, o) {
  return n(), s("svg", G1, Z1);
}
var K1 = /* @__PURE__ */ i(W1, [["render", Q1], ["__file", "bell-filled.vue"]]), J1 = {
  name: "Bell"
}, X1 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Y1 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M512 64a64 64 0 0 1 64 64v64H448v-64a64 64 0 0 1 64-64z"
}, null, -1), e4 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M256 768h512V448a256 256 0 1 0-512 0v320zm256-640a320 320 0 0 1 320 320v384H192V448a320 320 0 0 1 320-320z"
}, null, -1), t4 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M96 768h832q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm352 128h128a64 64 0 0 1-128 0z"
}, null, -1), a4 = [
  Y1,
  e4,
  t4
];
function _4(e, t, a, r, l, o) {
  return n(), s("svg", X1, a4);
}
var r4 = /* @__PURE__ */ i(J1, [["render", _4], ["__file", "bell.vue"]]), l4 = {
  name: "Bicycle"
}, o4 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, n4 = /* @__PURE__ */ D2('<path fill="currentColor" d="M256 832a128 128 0 1 0 0-256 128 128 0 0 0 0 256zm0 64a192 192 0 1 1 0-384 192 192 0 0 1 0 384z"></path><path fill="currentColor" d="M288 672h320q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"></path><path fill="currentColor" d="M768 832a128 128 0 1 0 0-256 128 128 0 0 0 0 256zm0 64a192 192 0 1 1 0-384 192 192 0 0 1 0 384z"></path><path fill="currentColor" d="M480 192a32 32 0 0 1 0-64h160a32 32 0 0 1 31.04 24.256l96 384a32 32 0 0 1-62.08 15.488L615.04 192H480zM96 384a32 32 0 0 1 0-64h128a32 32 0 0 1 30.336 21.888l64 192a32 32 0 1 1-60.672 20.224L200.96 384H96z"></path><path fill="currentColor" d="m373.376 599.808-42.752-47.616 320-288 42.752 47.616z"></path>', 5), s4 = [
  n4
];
function i4(e, t, a, r, l, o) {
  return n(), s("svg", o4, s4);
}
var u4 = /* @__PURE__ */ i(l4, [["render", i4], ["__file", "bicycle.vue"]]), d4 = {
  name: "BottomLeft"
}, v4 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, c4 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M256 768h416a32 32 0 1 1 0 64H224a32 32 0 0 1-32-32V352a32 32 0 0 1 64 0v416z"
}, null, -1), h4 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M246.656 822.656a32 32 0 0 1-45.312-45.312l544-544a32 32 0 0 1 45.312 45.312l-544 544z"
}, null, -1), p4 = [
  c4,
  h4
];
function f4(e, t, a, r, l, o) {
  return n(), s("svg", v4, p4);
}
var w4 = /* @__PURE__ */ i(d4, [["render", f4], ["__file", "bottom-left.vue"]]), m4 = {
  name: "BottomRight"
}, g4 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, $4 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M352 768a32 32 0 1 0 0 64h448a32 32 0 0 0 32-32V352a32 32 0 0 0-64 0v416H352z"
}, null, -1), z4 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M777.344 822.656a32 32 0 0 0 45.312-45.312l-544-544a32 32 0 0 0-45.312 45.312l544 544z"
}, null, -1), x4 = [
  $4,
  z4
];
function C4(e, t, a, r, l, o) {
  return n(), s("svg", g4, x4);
}
var H4 = /* @__PURE__ */ i(m4, [["render", C4], ["__file", "bottom-right.vue"]]), M4 = {
  name: "Bottom"
}, V4 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, y4 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M544 805.888V168a32 32 0 1 0-64 0v637.888L246.656 557.952a30.72 30.72 0 0 0-45.312 0 35.52 35.52 0 0 0 0 48.064l288 306.048a30.72 30.72 0 0 0 45.312 0l288-306.048a35.52 35.52 0 0 0 0-48 30.72 30.72 0 0 0-45.312 0L544 805.824z"
}, null, -1), B4 = [
  y4
];
function L4(e, t, a, r, l, o) {
  return n(), s("svg", V4, B4);
}
var A4 = /* @__PURE__ */ i(M4, [["render", L4], ["__file", "bottom.vue"]]), b4 = {
  name: "Bowl"
}, k4 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, S4 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M714.432 704a351.744 351.744 0 0 0 148.16-256H161.408a351.744 351.744 0 0 0 148.16 256h404.864zM288 766.592A415.68 415.68 0 0 1 96 416a32 32 0 0 1 32-32h768a32 32 0 0 1 32 32 415.68 415.68 0 0 1-192 350.592V832a64 64 0 0 1-64 64H352a64 64 0 0 1-64-64v-65.408zM493.248 320h-90.496l254.4-254.4a32 32 0 1 1 45.248 45.248L493.248 320zm187.328 0h-128l269.696-155.712a32 32 0 0 1 32 55.424L680.576 320zM352 768v64h320v-64H352z"
}, null, -1), q4 = [
  S4
];
function F4(e, t, a, r, l, o) {
  return n(), s("svg", k4, q4);
}
var O4 = /* @__PURE__ */ i(b4, [["render", F4], ["__file", "bowl.vue"]]), P4 = {
  name: "Box"
}, T4 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, D4 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M317.056 128 128 344.064V896h768V344.064L706.944 128H317.056zm-14.528-64h418.944a32 32 0 0 1 24.064 10.88l206.528 236.096A32 32 0 0 1 960 332.032V928a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V332.032a32 32 0 0 1 7.936-21.12L278.4 75.008A32 32 0 0 1 302.528 64z"
}, null, -1), E4 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M64 320h896v64H64z"
}, null, -1), I4 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M448 327.872V640h128V327.872L526.08 128h-28.16L448 327.872zM448 64h128l64 256v352a32 32 0 0 1-32 32H416a32 32 0 0 1-32-32V320l64-256z"
}, null, -1), N4 = [
  D4,
  E4,
  I4
];
function R4(e, t, a, r, l, o) {
  return n(), s("svg", T4, N4);
}
var U4 = /* @__PURE__ */ i(P4, [["render", R4], ["__file", "box.vue"]]), W4 = {
  name: "Briefcase"
}, G4 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, j4 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M320 320V128h384v192h192v192H128V320h192zM128 576h768v320H128V576zm256-256h256.064V192H384v128z"
}, null, -1), Z4 = [
  j4
];
function Q4(e, t, a, r, l, o) {
  return n(), s("svg", G4, Z4);
}
var K4 = /* @__PURE__ */ i(W4, [["render", Q4], ["__file", "briefcase.vue"]]), J4 = {
  name: "BrushFilled"
}, X4 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Y4 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M608 704v160a96 96 0 0 1-192 0V704h-96a128 128 0 0 1-128-128h640a128 128 0 0 1-128 128h-96zM192 512V128.064h640V512H192z"
}, null, -1), ee = [
  Y4
];
function te(e, t, a, r, l, o) {
  return n(), s("svg", X4, ee);
}
var ae = /* @__PURE__ */ i(J4, [["render", te], ["__file", "brush-filled.vue"]]), _e = {
  name: "Brush"
}, re = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, le = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M896 448H128v192a64 64 0 0 0 64 64h192v192h256V704h192a64 64 0 0 0 64-64V448zm-770.752-64c0-47.552 5.248-90.24 15.552-128 14.72-54.016 42.496-107.392 83.2-160h417.28l-15.36 70.336L736 96h211.2c-24.832 42.88-41.92 96.256-51.2 160a663.872 663.872 0 0 0-6.144 128H960v256a128 128 0 0 1-128 128H704v160a32 32 0 0 1-32 32H352a32 32 0 0 1-32-32V768H192A128 128 0 0 1 64 640V384h61.248zm64 0h636.544c-2.048-45.824.256-91.584 6.848-137.216 4.48-30.848 10.688-59.776 18.688-86.784h-96.64l-221.12 141.248L561.92 160H256.512c-25.856 37.888-43.776 75.456-53.952 112.832-8.768 32.064-13.248 69.12-13.312 111.168z"
}, null, -1), oe = [
  le
];
function ne(e, t, a, r, l, o) {
  return n(), s("svg", re, oe);
}
var se = /* @__PURE__ */ i(_e, [["render", ne], ["__file", "brush.vue"]]), ie = {
  name: "Burger"
}, ue = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, de = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M160 512a32 32 0 0 0-32 32v64a32 32 0 0 0 30.08 32H864a32 32 0 0 0 32-32v-64a32 32 0 0 0-32-32H160zm736-58.56A96 96 0 0 1 960 544v64a96 96 0 0 1-51.968 85.312L855.36 833.6a96 96 0 0 1-89.856 62.272H258.496A96 96 0 0 1 168.64 833.6l-52.608-140.224A96 96 0 0 1 64 608v-64a96 96 0 0 1 64-90.56V448a384 384 0 1 1 768 5.44zM832 448a320 320 0 0 0-640 0h640zM512 704H188.352l40.192 107.136a32 32 0 0 0 29.952 20.736h507.008a32 32 0 0 0 29.952-20.736L835.648 704H512z"
}, null, -1), ve = [
  de
];
function ce(e, t, a, r, l, o) {
  return n(), s("svg", ue, ve);
}
var he = /* @__PURE__ */ i(ie, [["render", ce], ["__file", "burger.vue"]]), pe = {
  name: "Calendar"
}, fe = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, we = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M128 384v512h768V192H768v32a32 32 0 1 1-64 0v-32H320v32a32 32 0 0 1-64 0v-32H128v128h768v64H128zm192-256h384V96a32 32 0 1 1 64 0v32h160a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h160V96a32 32 0 0 1 64 0v32zm-32 384h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm192-192h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm192-192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64z"
}, null, -1), me = [
  we
];
function ge(e, t, a, r, l, o) {
  return n(), s("svg", fe, me);
}
var $e = /* @__PURE__ */ i(pe, [["render", ge], ["__file", "calendar.vue"]]), ze = {
  name: "CameraFilled"
}, xe = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ce = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M160 224a64 64 0 0 0-64 64v512a64 64 0 0 0 64 64h704a64 64 0 0 0 64-64V288a64 64 0 0 0-64-64H748.416l-46.464-92.672A64 64 0 0 0 644.736 96H379.328a64 64 0 0 0-57.216 35.392L275.776 224H160zm352 435.2a115.2 115.2 0 1 0 0-230.4 115.2 115.2 0 0 0 0 230.4zm0 140.8a256 256 0 1 1 0-512 256 256 0 0 1 0 512z"
}, null, -1), He = [
  Ce
];
function Me(e, t, a, r, l, o) {
  return n(), s("svg", xe, He);
}
var Ve = /* @__PURE__ */ i(ze, [["render", Me], ["__file", "camera-filled.vue"]]), ye = {
  name: "Camera"
}, Be = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Le = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M896 256H128v576h768V256zm-199.424-64-32.064-64h-304.96l-32 64h369.024zM96 192h160l46.336-92.608A64 64 0 0 1 359.552 64h304.96a64 64 0 0 1 57.216 35.328L768.192 192H928a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V224a32 32 0 0 1 32-32zm416 512a160 160 0 1 0 0-320 160 160 0 0 0 0 320zm0 64a224 224 0 1 1 0-448 224 224 0 0 1 0 448z"
}, null, -1), Ae = [
  Le
];
function be(e, t, a, r, l, o) {
  return n(), s("svg", Be, Ae);
}
var ke = /* @__PURE__ */ i(ye, [["render", be], ["__file", "camera.vue"]]), Se = {
  name: "CaretBottom"
}, qe = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Fe = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "m192 384 320 384 320-384z"
}, null, -1), Oe = [
  Fe
];
function Pe(e, t, a, r, l, o) {
  return n(), s("svg", qe, Oe);
}
var Te = /* @__PURE__ */ i(Se, [["render", Pe], ["__file", "caret-bottom.vue"]]), De = {
  name: "CaretLeft"
}, Ee = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ie = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M672 192 288 511.936 672 832z"
}, null, -1), Ne = [
  Ie
];
function Re(e, t, a, r, l, o) {
  return n(), s("svg", Ee, Ne);
}
var Ue = /* @__PURE__ */ i(De, [["render", Re], ["__file", "caret-left.vue"]]), We = {
  name: "CaretRight"
}, Ge = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, je = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M384 192v640l384-320.064z"
}, null, -1), Ze = [
  je
];
function Qe(e, t, a, r, l, o) {
  return n(), s("svg", Ge, Ze);
}
var Ke = /* @__PURE__ */ i(We, [["render", Qe], ["__file", "caret-right.vue"]]), Je = {
  name: "CaretTop"
}, Xe = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ye = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M512 320 192 704h639.936z"
}, null, -1), e6 = [
  Ye
];
function t6(e, t, a, r, l, o) {
  return n(), s("svg", Xe, e6);
}
var a6 = /* @__PURE__ */ i(Je, [["render", t6], ["__file", "caret-top.vue"]]), _6 = {
  name: "Cellphone"
}, r6 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, l6 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M256 128a64 64 0 0 0-64 64v640a64 64 0 0 0 64 64h512a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64H256zm0-64h512a128 128 0 0 1 128 128v640a128 128 0 0 1-128 128H256a128 128 0 0 1-128-128V192A128 128 0 0 1 256 64zm128 128h256a32 32 0 1 1 0 64H384a32 32 0 0 1 0-64zm128 640a64 64 0 1 1 0-128 64 64 0 0 1 0 128z"
}, null, -1), o6 = [
  l6
];
function n6(e, t, a, r, l, o) {
  return n(), s("svg", r6, o6);
}
var s6 = /* @__PURE__ */ i(_6, [["render", n6], ["__file", "cellphone.vue"]]), i6 = {
  name: "ChatDotRound"
}, u6 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, d6 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "m174.72 855.68 135.296-45.12 23.68 11.84C388.096 849.536 448.576 864 512 864c211.84 0 384-166.784 384-352S723.84 160 512 160 128 326.784 128 512c0 69.12 24.96 139.264 70.848 199.232l22.08 28.8-46.272 115.584zm-45.248 82.56A32 32 0 0 1 89.6 896l58.368-145.92C94.72 680.32 64 596.864 64 512 64 299.904 256 96 512 96s448 203.904 448 416-192 416-448 416a461.056 461.056 0 0 1-206.912-48.384l-175.616 58.56z"
}, null, -1), v6 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M512 563.2a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm192 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm-384 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4z"
}, null, -1), c6 = [
  d6,
  v6
];
function h6(e, t, a, r, l, o) {
  return n(), s("svg", u6, c6);
}
var p6 = /* @__PURE__ */ i(i6, [["render", h6], ["__file", "chat-dot-round.vue"]]), f6 = {
  name: "ChatDotSquare"
}, w6 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, m6 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M273.536 736H800a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H224a64 64 0 0 0-64 64v570.88L273.536 736zM296 800 147.968 918.4A32 32 0 0 1 96 893.44V256a128 128 0 0 1 128-128h576a128 128 0 0 1 128 128v416a128 128 0 0 1-128 128H296z"
}, null, -1), g6 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M512 499.2a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm192 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm-384 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4z"
}, null, -1), $6 = [
  m6,
  g6
];
function z6(e, t, a, r, l, o) {
  return n(), s("svg", w6, $6);
}
var x6 = /* @__PURE__ */ i(f6, [["render", z6], ["__file", "chat-dot-square.vue"]]), C6 = {
  name: "ChatLineRound"
}, H6 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, M6 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "m174.72 855.68 135.296-45.12 23.68 11.84C388.096 849.536 448.576 864 512 864c211.84 0 384-166.784 384-352S723.84 160 512 160 128 326.784 128 512c0 69.12 24.96 139.264 70.848 199.232l22.08 28.8-46.272 115.584zm-45.248 82.56A32 32 0 0 1 89.6 896l58.368-145.92C94.72 680.32 64 596.864 64 512 64 299.904 256 96 512 96s448 203.904 448 416-192 416-448 416a461.056 461.056 0 0 1-206.912-48.384l-175.616 58.56z"
}, null, -1), V6 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M352 576h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32zm32-192h256q32 0 32 32t-32 32H384q-32 0-32-32t32-32z"
}, null, -1), y6 = [
  M6,
  V6
];
function B6(e, t, a, r, l, o) {
  return n(), s("svg", H6, y6);
}
var L6 = /* @__PURE__ */ i(C6, [["render", B6], ["__file", "chat-line-round.vue"]]), A6 = {
  name: "ChatLineSquare"
}, b6 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, k6 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M160 826.88 273.536 736H800a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H224a64 64 0 0 0-64 64v570.88zM296 800 147.968 918.4A32 32 0 0 1 96 893.44V256a128 128 0 0 1 128-128h576a128 128 0 0 1 128 128v416a128 128 0 0 1-128 128H296z"
}, null, -1), S6 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M352 512h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32zm0-192h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32z"
}, null, -1), q6 = [
  k6,
  S6
];
function F6(e, t, a, r, l, o) {
  return n(), s("svg", b6, q6);
}
var O6 = /* @__PURE__ */ i(A6, [["render", F6], ["__file", "chat-line-square.vue"]]), P6 = {
  name: "ChatRound"
}, T6 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, D6 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "m174.72 855.68 130.048-43.392 23.424 11.392C382.4 849.984 444.352 864 512 864c223.744 0 384-159.872 384-352 0-192.832-159.104-352-384-352S128 319.168 128 512a341.12 341.12 0 0 0 69.248 204.288l21.632 28.8-44.16 110.528zm-45.248 82.56A32 32 0 0 1 89.6 896l56.512-141.248A405.12 405.12 0 0 1 64 512C64 299.904 235.648 96 512 96s448 203.904 448 416-173.44 416-448 416c-79.68 0-150.848-17.152-211.712-46.72l-170.88 56.96z"
}, null, -1), E6 = [
  D6
];
function I6(e, t, a, r, l, o) {
  return n(), s("svg", T6, E6);
}
var N6 = /* @__PURE__ */ i(P6, [["render", I6], ["__file", "chat-round.vue"]]), R6 = {
  name: "ChatSquare"
}, U6 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, W6 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M273.536 736H800a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H224a64 64 0 0 0-64 64v570.88L273.536 736zM296 800 147.968 918.4A32 32 0 0 1 96 893.44V256a128 128 0 0 1 128-128h576a128 128 0 0 1 128 128v416a128 128 0 0 1-128 128H296z"
}, null, -1), G6 = [
  W6
];
function j6(e, t, a, r, l, o) {
  return n(), s("svg", U6, G6);
}
var Z6 = /* @__PURE__ */ i(R6, [["render", j6], ["__file", "chat-square.vue"]]), Q6 = {
  name: "Check"
}, K6 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, J6 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"
}, null, -1), X6 = [
  J6
];
function Y6(e, t, a, r, l, o) {
  return n(), s("svg", K6, X6);
}
var e3 = /* @__PURE__ */ i(Q6, [["render", Y6], ["__file", "check.vue"]]), t3 = {
  name: "Checked"
}, a3 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _3 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M704 192h160v736H160V192h160.064v64H704v-64zM311.616 537.28l-45.312 45.248L447.36 763.52l316.8-316.8-45.312-45.184L447.36 673.024 311.616 537.28zM384 192V96h256v96H384z"
}, null, -1), r3 = [
  _3
];
function l3(e, t, a, r, l, o) {
  return n(), s("svg", a3, r3);
}
var o3 = /* @__PURE__ */ i(t3, [["render", l3], ["__file", "checked.vue"]]), n3 = {
  name: "Cherry"
}, s3 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, i3 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M261.056 449.6c13.824-69.696 34.88-128.96 63.36-177.728 23.744-40.832 61.12-88.64 112.256-143.872H320a32 32 0 0 1 0-64h384a32 32 0 1 1 0 64H554.752c14.912 39.168 41.344 86.592 79.552 141.76 47.36 68.48 84.8 106.752 106.304 114.304a224 224 0 1 1-84.992 14.784c-22.656-22.912-47.04-53.76-73.92-92.608-38.848-56.128-67.008-105.792-84.352-149.312-55.296 58.24-94.528 107.52-117.76 147.2-23.168 39.744-41.088 88.768-53.568 147.072a224.064 224.064 0 1 1-64.96-1.6zM288 832a160 160 0 1 0 0-320 160 160 0 0 0 0 320zm448-64a160 160 0 1 0 0-320 160 160 0 0 0 0 320z"
}, null, -1), u3 = [
  i3
];
function d3(e, t, a, r, l, o) {
  return n(), s("svg", s3, u3);
}
var v3 = /* @__PURE__ */ i(n3, [["render", d3], ["__file", "cherry.vue"]]), c3 = {
  name: "Chicken"
}, h3 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, p3 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M349.952 716.992 478.72 588.16a106.688 106.688 0 0 1-26.176-19.072 106.688 106.688 0 0 1-19.072-26.176L304.704 671.744c.768 3.072 1.472 6.144 2.048 9.216l2.048 31.936 31.872 1.984c3.136.64 6.208 1.28 9.28 2.112zm57.344 33.152a128 128 0 1 1-216.32 114.432l-1.92-32-32-1.92a128 128 0 1 1 114.432-216.32L416.64 469.248c-2.432-101.44 58.112-239.104 149.056-330.048 107.328-107.328 231.296-85.504 316.8 0 85.44 85.44 107.328 209.408 0 316.8-91.008 90.88-228.672 151.424-330.112 149.056L407.296 750.08zm90.496-226.304c49.536 49.536 233.344-7.04 339.392-113.088 78.208-78.208 63.232-163.072 0-226.304-63.168-63.232-148.032-78.208-226.24 0C504.896 290.496 448.32 474.368 497.792 523.84zM244.864 708.928a64 64 0 1 0-59.84 59.84l56.32-3.52 3.52-56.32zm8.064 127.68a64 64 0 1 0 59.84-59.84l-56.32 3.52-3.52 56.32z"
}, null, -1), f3 = [
  p3
];
function w3(e, t, a, r, l, o) {
  return n(), s("svg", h3, f3);
}
var m3 = /* @__PURE__ */ i(c3, [["render", w3], ["__file", "chicken.vue"]]), g3 = {
  name: "ChromeFilled"
}, $3 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024",
  style: { "enable-background": "new 0 0 1024 1024" },
  "xml:space": "preserve"
}, z3 = /* @__PURE__ */ _("path", {
  d: "M938.67 512.01c0-44.59-6.82-87.6-19.54-128H682.67a212.372 212.372 0 0 1 42.67 128c.06 38.71-10.45 76.7-30.42 109.87l-182.91 316.8c235.65-.01 426.66-191.02 426.66-426.67z",
  fill: "currentColor"
}, null, -1), x3 = /* @__PURE__ */ _("path", {
  d: "M576.79 401.63a127.92 127.92 0 0 0-63.56-17.6c-22.36-.22-44.39 5.43-63.89 16.38s-35.79 26.82-47.25 46.02a128.005 128.005 0 0 0-2.16 127.44l1.24 2.13a127.906 127.906 0 0 0 46.36 46.61 127.907 127.907 0 0 0 63.38 17.44c22.29.2 44.24-5.43 63.68-16.33a127.94 127.94 0 0 0 47.16-45.79v-.01l1.11-1.92a127.984 127.984 0 0 0 .29-127.46 127.957 127.957 0 0 0-46.36-46.91z",
  fill: "currentColor"
}, null, -1), C3 = /* @__PURE__ */ _("path", {
  d: "M394.45 333.96A213.336 213.336 0 0 1 512 298.67h369.58A426.503 426.503 0 0 0 512 85.34a425.598 425.598 0 0 0-171.74 35.98 425.644 425.644 0 0 0-142.62 102.22l118.14 204.63a213.397 213.397 0 0 1 78.67-94.21zm117.56 604.72H512zm-97.25-236.73a213.284 213.284 0 0 1-89.54-86.81L142.48 298.6c-36.35 62.81-57.13 135.68-57.13 213.42 0 203.81 142.93 374.22 333.95 416.55h.04l118.19-204.71a213.315 213.315 0 0 1-122.77-21.91z",
  fill: "currentColor"
}, null, -1), H3 = [
  z3,
  x3,
  C3
];
function M3(e, t, a, r, l, o) {
  return n(), s("svg", $3, H3);
}
var V3 = /* @__PURE__ */ i(g3, [["render", M3], ["__file", "chrome-filled.vue"]]), y3 = {
  name: "CircleCheckFilled"
}, B3 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, L3 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"
}, null, -1), A3 = [
  L3
];
function b3(e, t, a, r, l, o) {
  return n(), s("svg", B3, A3);
}
var k3 = /* @__PURE__ */ i(y3, [["render", b3], ["__file", "circle-check-filled.vue"]]), S3 = {
  name: "CircleCheck"
}, q3 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, F3 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), O3 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
}, null, -1), P3 = [
  F3,
  O3
];
function T3(e, t, a, r, l, o) {
  return n(), s("svg", q3, P3);
}
var D3 = /* @__PURE__ */ i(S3, [["render", T3], ["__file", "circle-check.vue"]]), E3 = {
  name: "CircleCloseFilled"
}, I3 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, N3 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336L512 457.664z"
}, null, -1), R3 = [
  N3
];
function U3(e, t, a, r, l, o) {
  return n(), s("svg", I3, R3);
}
var X = /* @__PURE__ */ i(E3, [["render", U3], ["__file", "circle-close-filled.vue"]]), W3 = {
  name: "CircleClose"
}, G3 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, j3 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248L466.752 512z"
}, null, -1), Z3 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), Q3 = [
  j3,
  Z3
];
function K3(e, t, a, r, l, o) {
  return n(), s("svg", G3, Q3);
}
var J3 = /* @__PURE__ */ i(W3, [["render", K3], ["__file", "circle-close.vue"]]), X3 = {
  name: "CirclePlusFilled"
}, Y3 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, e8 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-38.4 409.6H326.4a38.4 38.4 0 1 0 0 76.8h147.2v147.2a38.4 38.4 0 0 0 76.8 0V550.4h147.2a38.4 38.4 0 0 0 0-76.8H550.4V326.4a38.4 38.4 0 1 0-76.8 0v147.2z"
}, null, -1), t8 = [
  e8
];
function a8(e, t, a, r, l, o) {
  return n(), s("svg", Y3, t8);
}
var _8 = /* @__PURE__ */ i(X3, [["render", a8], ["__file", "circle-plus-filled.vue"]]), r8 = {
  name: "CirclePlus"
}, l8 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, o8 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M352 480h320a32 32 0 1 1 0 64H352a32 32 0 0 1 0-64z"
}, null, -1), n8 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M480 672V352a32 32 0 1 1 64 0v320a32 32 0 0 1-64 0z"
}, null, -1), s8 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), i8 = [
  o8,
  n8,
  s8
];
function u8(e, t, a, r, l, o) {
  return n(), s("svg", l8, i8);
}
var d8 = /* @__PURE__ */ i(r8, [["render", u8], ["__file", "circle-plus.vue"]]), v8 = {
  name: "Clock"
}, c8 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, h8 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), p8 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M480 256a32 32 0 0 1 32 32v256a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32z"
}, null, -1), f8 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M480 512h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32z"
}, null, -1), w8 = [
  h8,
  p8,
  f8
];
function m8(e, t, a, r, l, o) {
  return n(), s("svg", c8, w8);
}
var g8 = /* @__PURE__ */ i(v8, [["render", m8], ["__file", "clock.vue"]]), $8 = {
  name: "CloseBold"
}, z8 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, x8 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"
}, null, -1), C8 = [
  x8
];
function H8(e, t, a, r, l, o) {
  return n(), s("svg", z8, C8);
}
var M8 = /* @__PURE__ */ i($8, [["render", H8], ["__file", "close-bold.vue"]]), V8 = {
  name: "Close"
}, y8 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, B8 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
}, null, -1), L8 = [
  B8
];
function A8(e, t, a, r, l, o) {
  return n(), s("svg", y8, L8);
}
var y2 = /* @__PURE__ */ i(V8, [["render", A8], ["__file", "close.vue"]]), b8 = {
  name: "Cloudy"
}, k8 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, S8 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M598.4 831.872H328.192a256 256 0 0 1-34.496-510.528A352 352 0 1 1 598.4 831.872zm-271.36-64h272.256a288 288 0 1 0-248.512-417.664L335.04 381.44l-34.816 3.584a192 192 0 0 0 26.88 382.848z"
}, null, -1), q8 = [
  S8
];
function F8(e, t, a, r, l, o) {
  return n(), s("svg", k8, q8);
}
var O8 = /* @__PURE__ */ i(b8, [["render", F8], ["__file", "cloudy.vue"]]), P8 = {
  name: "CoffeeCup"
}, T8 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, D8 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M768 192a192 192 0 1 1-8 383.808A256.128 256.128 0 0 1 512 768H320A256 256 0 0 1 64 512V160a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v32zm0 64v256a128 128 0 1 0 0-256zM96 832h640a32 32 0 1 1 0 64H96a32 32 0 1 1 0-64zm32-640v320a192 192 0 0 0 192 192h192a192 192 0 0 0 192-192V192H128z"
}, null, -1), E8 = [
  D8
];
function I8(e, t, a, r, l, o) {
  return n(), s("svg", T8, E8);
}
var N8 = /* @__PURE__ */ i(P8, [["render", I8], ["__file", "coffee-cup.vue"]]), R8 = {
  name: "Coffee"
}, U8 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, W8 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M822.592 192h14.272a32 32 0 0 1 31.616 26.752l21.312 128A32 32 0 0 1 858.24 384h-49.344l-39.04 546.304A32 32 0 0 1 737.92 960H285.824a32 32 0 0 1-32-29.696L214.912 384H165.76a32 32 0 0 1-31.552-37.248l21.312-128A32 32 0 0 1 187.136 192h14.016l-6.72-93.696A32 32 0 0 1 226.368 64h571.008a32 32 0 0 1 31.936 34.304L822.592 192zm-64.128 0 4.544-64H260.736l4.544 64h493.184zm-548.16 128H820.48l-10.688-64H214.208l-10.688 64h6.784zm68.736 64 36.544 512H708.16l36.544-512H279.04z"
}, null, -1), G8 = [
  W8
];
function j8(e, t, a, r, l, o) {
  return n(), s("svg", U8, G8);
}
var Z8 = /* @__PURE__ */ i(R8, [["render", j8], ["__file", "coffee.vue"]]), Q8 = {
  name: "Coin"
}, K8 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, J8 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "m161.92 580.736 29.888 58.88C171.328 659.776 160 681.728 160 704c0 82.304 155.328 160 352 160s352-77.696 352-160c0-22.272-11.392-44.16-31.808-64.32l30.464-58.432C903.936 615.808 928 657.664 928 704c0 129.728-188.544 224-416 224S96 833.728 96 704c0-46.592 24.32-88.576 65.92-123.264z"
}, null, -1), X8 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "m161.92 388.736 29.888 58.88C171.328 467.84 160 489.792 160 512c0 82.304 155.328 160 352 160s352-77.696 352-160c0-22.272-11.392-44.16-31.808-64.32l30.464-58.432C903.936 423.808 928 465.664 928 512c0 129.728-188.544 224-416 224S96 641.728 96 512c0-46.592 24.32-88.576 65.92-123.264z"
}, null, -1), Y8 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M512 544c-227.456 0-416-94.272-416-224S284.544 96 512 96s416 94.272 416 224-188.544 224-416 224zm0-64c196.672 0 352-77.696 352-160S708.672 160 512 160s-352 77.696-352 160 155.328 160 352 160z"
}, null, -1), et = [
  J8,
  X8,
  Y8
];
function tt(e, t, a, r, l, o) {
  return n(), s("svg", K8, et);
}
var at = /* @__PURE__ */ i(Q8, [["render", tt], ["__file", "coin.vue"]]), _t = {
  name: "ColdDrink"
}, rt = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, lt = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M768 64a192 192 0 1 1-69.952 370.88L480 725.376V896h96a32 32 0 1 1 0 64H320a32 32 0 1 1 0-64h96V725.376L76.8 273.536a64 64 0 0 1-12.8-38.4v-10.688a32 32 0 0 1 32-32h71.808l-65.536-83.84a32 32 0 0 1 50.432-39.424l96.256 123.264h337.728A192.064 192.064 0 0 1 768 64zM656.896 192.448H800a32 32 0 0 1 32 32v10.624a64 64 0 0 1-12.8 38.4l-80.448 107.2a128 128 0 1 0-81.92-188.16v-.064zm-357.888 64 129.472 165.76a32 32 0 0 1-50.432 39.36l-160.256-205.12H144l304 404.928 304-404.928H299.008z"
}, null, -1), ot = [
  lt
];
function nt(e, t, a, r, l, o) {
  return n(), s("svg", rt, ot);
}
var st = /* @__PURE__ */ i(_t, [["render", nt], ["__file", "cold-drink.vue"]]), it = {
  name: "CollectionTag"
}, ut = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, dt = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M256 128v698.88l196.032-156.864a96 96 0 0 1 119.936 0L768 826.816V128H256zm-32-64h576a32 32 0 0 1 32 32v797.44a32 32 0 0 1-51.968 24.96L531.968 720a32 32 0 0 0-39.936 0L243.968 918.4A32 32 0 0 1 192 893.44V96a32 32 0 0 1 32-32z"
}, null, -1), vt = [
  dt
];
function ct(e, t, a, r, l, o) {
  return n(), s("svg", ut, vt);
}
var ht = /* @__PURE__ */ i(it, [["render", ct], ["__file", "collection-tag.vue"]]), pt = {
  name: "Collection"
}, ft = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, wt = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M192 736h640V128H256a64 64 0 0 0-64 64v544zm64-672h608a32 32 0 0 1 32 32v672a32 32 0 0 1-32 32H160l-32 57.536V192A128 128 0 0 1 256 64z"
}, null, -1), mt = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M240 800a48 48 0 1 0 0 96h592v-96H240zm0-64h656v160a64 64 0 0 1-64 64H240a112 112 0 0 1 0-224zm144-608v250.88l96-76.8 96 76.8V128H384zm-64-64h320v381.44a32 32 0 0 1-51.968 24.96L480 384l-108.032 86.4A32 32 0 0 1 320 445.44V64z"
}, null, -1), gt = [
  wt,
  mt
];
function $t(e, t, a, r, l, o) {
  return n(), s("svg", ft, gt);
}
var zt = /* @__PURE__ */ i(pt, [["render", $t], ["__file", "collection.vue"]]), xt = {
  name: "Comment"
}, Ct = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ht = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M736 504a56 56 0 1 1 0-112 56 56 0 0 1 0 112zm-224 0a56 56 0 1 1 0-112 56 56 0 0 1 0 112zm-224 0a56 56 0 1 1 0-112 56 56 0 0 1 0 112zM128 128v640h192v160l224-160h352V128H128z"
}, null, -1), Mt = [
  Ht
];
function Vt(e, t, a, r, l, o) {
  return n(), s("svg", Ct, Mt);
}
var yt = /* @__PURE__ */ i(xt, [["render", Vt], ["__file", "comment.vue"]]), Bt = {
  name: "Compass"
}, Lt = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, At = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), bt = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M725.888 315.008C676.48 428.672 624 513.28 568.576 568.64c-55.424 55.424-139.968 107.904-253.568 157.312a12.8 12.8 0 0 1-16.896-16.832c49.536-113.728 102.016-198.272 157.312-253.632 55.36-55.296 139.904-107.776 253.632-157.312a12.8 12.8 0 0 1 16.832 16.832z"
}, null, -1), kt = [
  At,
  bt
];
function St(e, t, a, r, l, o) {
  return n(), s("svg", Lt, kt);
}
var qt = /* @__PURE__ */ i(Bt, [["render", St], ["__file", "compass.vue"]]), Ft = {
  name: "Connection"
}, Ot = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Pt = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M640 384v64H448a128 128 0 0 0-128 128v128a128 128 0 0 0 128 128h320a128 128 0 0 0 128-128V576a128 128 0 0 0-64-110.848V394.88c74.56 26.368 128 97.472 128 181.056v128a192 192 0 0 1-192 192H448a192 192 0 0 1-192-192V576a192 192 0 0 1 192-192h192z"
}, null, -1), Tt = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M384 640v-64h192a128 128 0 0 0 128-128V320a128 128 0 0 0-128-128H256a128 128 0 0 0-128 128v128a128 128 0 0 0 64 110.848v70.272A192.064 192.064 0 0 1 64 448V320a192 192 0 0 1 192-192h320a192 192 0 0 1 192 192v128a192 192 0 0 1-192 192H384z"
}, null, -1), Dt = [
  Pt,
  Tt
];
function Et(e, t, a, r, l, o) {
  return n(), s("svg", Ot, Dt);
}
var It = /* @__PURE__ */ i(Ft, [["render", Et], ["__file", "connection.vue"]]), Nt = {
  name: "Coordinate"
}, Rt = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ut = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M480 512h64v320h-64z"
}, null, -1), Wt = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M192 896h640a64 64 0 0 0-64-64H256a64 64 0 0 0-64 64zm64-128h512a128 128 0 0 1 128 128v64H128v-64a128 128 0 0 1 128-128zm256-256a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512z"
}, null, -1), Gt = [
  Ut,
  Wt
];
function jt(e, t, a, r, l, o) {
  return n(), s("svg", Rt, Gt);
}
var Zt = /* @__PURE__ */ i(Nt, [["render", jt], ["__file", "coordinate.vue"]]), Qt = {
  name: "CopyDocument"
}, Kt = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Jt = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M768 832a128 128 0 0 1-128 128H192A128 128 0 0 1 64 832V384a128 128 0 0 1 128-128v64a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64h64z"
}, null, -1), Xt = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M384 128a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64H384zm0-64h448a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H384a128 128 0 0 1-128-128V192A128 128 0 0 1 384 64z"
}, null, -1), Yt = [
  Jt,
  Xt
];
function ea(e, t, a, r, l, o) {
  return n(), s("svg", Kt, Yt);
}
var ta = /* @__PURE__ */ i(Qt, [["render", ea], ["__file", "copy-document.vue"]]), aa = {
  name: "Cpu"
}, _a = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ra = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M320 256a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h384a64 64 0 0 0 64-64V320a64 64 0 0 0-64-64H320zm0-64h384a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128H320a128 128 0 0 1-128-128V320a128 128 0 0 1 128-128z"
}, null, -1), la = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M512 64a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm160 0a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm-320 0a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm160 896a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zm160 0a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zm-320 0a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zM64 512a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm0-160a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm0 320a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm896-160a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32zm0-160a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32zm0 320a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32z"
}, null, -1), oa = [
  ra,
  la
];
function na(e, t, a, r, l, o) {
  return n(), s("svg", _a, oa);
}
var sa = /* @__PURE__ */ i(aa, [["render", na], ["__file", "cpu.vue"]]), ia = {
  name: "CreditCard"
}, ua = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, da = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M896 324.096c0-42.368-2.496-55.296-9.536-68.48a52.352 52.352 0 0 0-22.144-22.08c-13.12-7.04-26.048-9.536-68.416-9.536H228.096c-42.368 0-55.296 2.496-68.48 9.536a52.352 52.352 0 0 0-22.08 22.144c-7.04 13.12-9.536 26.048-9.536 68.416v375.808c0 42.368 2.496 55.296 9.536 68.48a52.352 52.352 0 0 0 22.144 22.08c13.12 7.04 26.048 9.536 68.416 9.536h567.808c42.368 0 55.296-2.496 68.48-9.536a52.352 52.352 0 0 0 22.08-22.144c7.04-13.12 9.536-26.048 9.536-68.416V324.096zm64 0v375.808c0 57.088-5.952 77.76-17.088 98.56-11.136 20.928-27.52 37.312-48.384 48.448-20.864 11.136-41.6 17.088-98.56 17.088H228.032c-57.088 0-77.76-5.952-98.56-17.088a116.288 116.288 0 0 1-48.448-48.384c-11.136-20.864-17.088-41.6-17.088-98.56V324.032c0-57.088 5.952-77.76 17.088-98.56 11.136-20.928 27.52-37.312 48.384-48.448 20.864-11.136 41.6-17.088 98.56-17.088H795.84c57.088 0 77.76 5.952 98.56 17.088 20.928 11.136 37.312 27.52 48.448 48.384 11.136 20.864 17.088 41.6 17.088 98.56z"
}, null, -1), va = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M64 320h896v64H64v-64zm0 128h896v64H64v-64zm128 192h256v64H192z"
}, null, -1), ca = [
  da,
  va
];
function ha(e, t, a, r, l, o) {
  return n(), s("svg", ua, ca);
}
var pa = /* @__PURE__ */ i(ia, [["render", ha], ["__file", "credit-card.vue"]]), fa = {
  name: "Crop"
}, wa = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ma = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M256 768h672a32 32 0 1 1 0 64H224a32 32 0 0 1-32-32V96a32 32 0 0 1 64 0v672z"
}, null, -1), ga = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M832 224v704a32 32 0 1 1-64 0V256H96a32 32 0 0 1 0-64h704a32 32 0 0 1 32 32z"
}, null, -1), $a = [
  ma,
  ga
];
function za(e, t, a, r, l, o) {
  return n(), s("svg", wa, $a);
}
var xa = /* @__PURE__ */ i(fa, [["render", za], ["__file", "crop.vue"]]), Ca = {
  name: "DArrowLeft"
}, Ha = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ma = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M529.408 149.376a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L259.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L197.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224zm256 0a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L515.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L453.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224z"
}, null, -1), Va = [
  Ma
];
function ya(e, t, a, r, l, o) {
  return n(), s("svg", Ha, Va);
}
var Ba = /* @__PURE__ */ i(Ca, [["render", ya], ["__file", "d-arrow-left.vue"]]), La = {
  name: "DArrowRight"
}, Aa = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ba = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L764.736 512 452.864 192a30.592 30.592 0 0 1 0-42.688zm-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L508.736 512 196.864 192a30.592 30.592 0 0 1 0-42.688z"
}, null, -1), ka = [
  ba
];
function Sa(e, t, a, r, l, o) {
  return n(), s("svg", Aa, ka);
}
var qa = /* @__PURE__ */ i(La, [["render", Sa], ["__file", "d-arrow-right.vue"]]), Fa = {
  name: "DCaret"
}, Oa = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Pa = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "m512 128 288 320H224l288-320zM224 576h576L512 896 224 576z"
}, null, -1), Ta = [
  Pa
];
function Da(e, t, a, r, l, o) {
  return n(), s("svg", Oa, Ta);
}
var Ea = /* @__PURE__ */ i(Fa, [["render", Da], ["__file", "d-caret.vue"]]), Ia = {
  name: "DataAnalysis"
}, Na = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ra = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "m665.216 768 110.848 192h-73.856L591.36 768H433.024L322.176 960H248.32l110.848-192H160a32 32 0 0 1-32-32V192H64a32 32 0 0 1 0-64h896a32 32 0 1 1 0 64h-64v544a32 32 0 0 1-32 32H665.216zM832 192H192v512h640V192zM352 448a32 32 0 0 1 32 32v64a32 32 0 0 1-64 0v-64a32 32 0 0 1 32-32zm160-64a32 32 0 0 1 32 32v128a32 32 0 0 1-64 0V416a32 32 0 0 1 32-32zm160-64a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V352a32 32 0 0 1 32-32z"
}, null, -1), Ua = [
  Ra
];
function Wa(e, t, a, r, l, o) {
  return n(), s("svg", Na, Ua);
}
var Ga = /* @__PURE__ */ i(Ia, [["render", Wa], ["__file", "data-analysis.vue"]]), ja = {
  name: "DataBoard"
}, Za = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Qa = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M32 128h960v64H32z"
}, null, -1), Ka = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M192 192v512h640V192H192zm-64-64h768v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V128z"
}, null, -1), Ja = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M322.176 960H248.32l144.64-250.56 55.424 32L322.176 960zm453.888 0h-73.856L576 741.44l55.424-32L776.064 960z"
}, null, -1), Xa = [
  Qa,
  Ka,
  Ja
];
function Ya(e, t, a, r, l, o) {
  return n(), s("svg", Za, Xa);
}
var e_ = /* @__PURE__ */ i(ja, [["render", Ya], ["__file", "data-board.vue"]]), t_ = {
  name: "DataLine"
}, a_ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, __ = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M359.168 768H160a32 32 0 0 1-32-32V192H64a32 32 0 0 1 0-64h896a32 32 0 1 1 0 64h-64v544a32 32 0 0 1-32 32H665.216l110.848 192h-73.856L591.36 768H433.024L322.176 960H248.32l110.848-192zM832 192H192v512h640V192zM342.656 534.656a32 32 0 1 1-45.312-45.312L444.992 341.76l125.44 94.08L679.04 300.032a32 32 0 1 1 49.92 39.936L581.632 524.224 451.008 426.24 342.656 534.592z"
}, null, -1), r_ = [
  __
];
function l_(e, t, a, r, l, o) {
  return n(), s("svg", a_, r_);
}
var o_ = /* @__PURE__ */ i(t_, [["render", l_], ["__file", "data-line.vue"]]), n_ = {
  name: "DeleteFilled"
}, s_ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, i_ = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M352 192V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64H96a32 32 0 0 1 0-64h256zm64 0h192v-64H416v64zM192 960a32 32 0 0 1-32-32V256h704v672a32 32 0 0 1-32 32H192zm224-192a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32zm192 0a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32z"
}, null, -1), u_ = [
  i_
];
function d_(e, t, a, r, l, o) {
  return n(), s("svg", s_, u_);
}
var v_ = /* @__PURE__ */ i(n_, [["render", d_], ["__file", "delete-filled.vue"]]), c_ = {
  name: "DeleteLocation"
}, h_ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, p_ = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
}, null, -1), f_ = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
}, null, -1), w_ = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M384 384h256q32 0 32 32t-32 32H384q-32 0-32-32t32-32z"
}, null, -1), m_ = [
  p_,
  f_,
  w_
];
function g_(e, t, a, r, l, o) {
  return n(), s("svg", h_, m_);
}
var $_ = /* @__PURE__ */ i(c_, [["render", g_], ["__file", "delete-location.vue"]]), z_ = {
  name: "Delete"
}, x_ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, C_ = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"
}, null, -1), H_ = [
  C_
];
function M_(e, t, a, r, l, o) {
  return n(), s("svg", x_, H_);
}
var V_ = /* @__PURE__ */ i(z_, [["render", M_], ["__file", "delete.vue"]]), y_ = {
  name: "Dessert"
}, B_ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, L_ = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M128 416v-48a144 144 0 0 1 168.64-141.888 224.128 224.128 0 0 1 430.72 0A144 144 0 0 1 896 368v48a384 384 0 0 1-352 382.72V896h-64v-97.28A384 384 0 0 1 128 416zm287.104-32.064h193.792a143.808 143.808 0 0 1 58.88-132.736 160.064 160.064 0 0 0-311.552 0 143.808 143.808 0 0 1 58.88 132.8zm-72.896 0a72 72 0 1 0-140.48 0h140.48zm339.584 0h140.416a72 72 0 1 0-140.48 0zM512 736a320 320 0 0 0 318.4-288.064H193.6A320 320 0 0 0 512 736zM384 896.064h256a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64z"
}, null, -1), A_ = [
  L_
];
function b_(e, t, a, r, l, o) {
  return n(), s("svg", B_, A_);
}
var k_ = /* @__PURE__ */ i(y_, [["render", b_], ["__file", "dessert.vue"]]), S_ = {
  name: "Discount"
}, q_ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, F_ = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M224 704h576V318.336L552.512 115.84a64 64 0 0 0-81.024 0L224 318.336V704zm0 64v128h576V768H224zM593.024 66.304l259.2 212.096A32 32 0 0 1 864 303.168V928a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V303.168a32 32 0 0 1 11.712-24.768l259.2-212.096a128 128 0 0 1 162.112 0z"
}, null, -1), O_ = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M512 448a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
}, null, -1), P_ = [
  F_,
  O_
];
function T_(e, t, a, r, l, o) {
  return n(), s("svg", q_, P_);
}
var D_ = /* @__PURE__ */ i(S_, [["render", T_], ["__file", "discount.vue"]]), E_ = {
  name: "DishDot"
}, I_ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, N_ = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "m384.064 274.56.064-50.688A128 128 0 0 1 512.128 96c70.528 0 127.68 57.152 127.68 127.68v50.752A448.192 448.192 0 0 1 955.392 768H68.544A448.192 448.192 0 0 1 384 274.56zM96 832h832a32 32 0 1 1 0 64H96a32 32 0 1 1 0-64zm32-128h768a384 384 0 1 0-768 0zm447.808-448v-32.32a63.68 63.68 0 0 0-63.68-63.68 64 64 0 0 0-64 63.936V256h127.68z"
}, null, -1), R_ = [
  N_
];
function U_(e, t, a, r, l, o) {
  return n(), s("svg", I_, R_);
}
var W_ = /* @__PURE__ */ i(E_, [["render", U_], ["__file", "dish-dot.vue"]]), G_ = {
  name: "Dish"
}, j_ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Z_ = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M480 257.152V192h-96a32 32 0 0 1 0-64h256a32 32 0 1 1 0 64h-96v65.152A448 448 0 0 1 955.52 768H68.48A448 448 0 0 1 480 257.152zM128 704h768a384 384 0 1 0-768 0zM96 832h832a32 32 0 1 1 0 64H96a32 32 0 1 1 0-64z"
}, null, -1), Q_ = [
  Z_
];
function K_(e, t, a, r, l, o) {
  return n(), s("svg", j_, Q_);
}
var J_ = /* @__PURE__ */ i(G_, [["render", K_], ["__file", "dish.vue"]]), X_ = {
  name: "DocumentAdd"
}, Y_ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, er = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M832 384H576V128H192v768h640V384zm-26.496-64L640 154.496V320h165.504zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm320 512V448h64v128h128v64H544v128h-64V640H352v-64h128z"
}, null, -1), tr = [
  er
];
function ar(e, t, a, r, l, o) {
  return n(), s("svg", Y_, tr);
}
var _r = /* @__PURE__ */ i(X_, [["render", ar], ["__file", "document-add.vue"]]), rr = {
  name: "DocumentChecked"
}, lr = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, or = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M805.504 320 640 154.496V320h165.504zM832 384H576V128H192v768h640V384zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm318.4 582.144 180.992-180.992L704.64 510.4 478.4 736.64 320 578.304l45.248-45.312L478.4 646.144z"
}, null, -1), nr = [
  or
];
function sr(e, t, a, r, l, o) {
  return n(), s("svg", lr, nr);
}
var ir = /* @__PURE__ */ i(rr, [["render", sr], ["__file", "document-checked.vue"]]), ur = {
  name: "DocumentCopy"
}, dr = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, vr = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M128 320v576h576V320H128zm-32-64h640a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32zM960 96v704a32 32 0 0 1-32 32h-96v-64h64V128H384v64h-64V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32zM256 672h320v64H256v-64zm0-192h320v64H256v-64z"
}, null, -1), cr = [
  vr
];
function hr(e, t, a, r, l, o) {
  return n(), s("svg", dr, cr);
}
var pr = /* @__PURE__ */ i(ur, [["render", hr], ["__file", "document-copy.vue"]]), fr = {
  name: "DocumentDelete"
}, wr = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, mr = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M805.504 320 640 154.496V320h165.504zM832 384H576V128H192v768h640V384zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm308.992 546.304-90.496-90.624 45.248-45.248 90.56 90.496 90.496-90.432 45.248 45.248-90.496 90.56 90.496 90.496-45.248 45.248-90.496-90.496-90.56 90.496-45.248-45.248 90.496-90.496z"
}, null, -1), gr = [
  mr
];
function $r(e, t, a, r, l, o) {
  return n(), s("svg", wr, gr);
}
var zr = /* @__PURE__ */ i(fr, [["render", $r], ["__file", "document-delete.vue"]]), xr = {
  name: "DocumentRemove"
}, Cr = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Hr = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M805.504 320 640 154.496V320h165.504zM832 384H576V128H192v768h640V384zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm192 512h320v64H352v-64z"
}, null, -1), Mr = [
  Hr
];
function Vr(e, t, a, r, l, o) {
  return n(), s("svg", Cr, Mr);
}
var yr = /* @__PURE__ */ i(xr, [["render", Vr], ["__file", "document-remove.vue"]]), Br = {
  name: "Document"
}, Lr = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ar = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M832 384H576V128H192v768h640V384zm-26.496-64L640 154.496V320h165.504zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm160 448h384v64H320v-64zm0-192h160v64H320v-64zm0 384h384v64H320v-64z"
}, null, -1), br = [
  Ar
];
function kr(e, t, a, r, l, o) {
  return n(), s("svg", Lr, br);
}
var Sr = /* @__PURE__ */ i(Br, [["render", kr], ["__file", "document.vue"]]), qr = {
  name: "Download"
}, Fr = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Or = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm384-253.696 236.288-236.352 45.248 45.248L508.8 704 192 387.2l45.248-45.248L480 584.704V128h64v450.304z"
}, null, -1), Pr = [
  Or
];
function Tr(e, t, a, r, l, o) {
  return n(), s("svg", Fr, Pr);
}
var Dr = /* @__PURE__ */ i(qr, [["render", Tr], ["__file", "download.vue"]]), Er = {
  name: "Drizzling"
}, Ir = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Nr = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "m739.328 291.328-35.2-6.592-12.8-33.408a192.064 192.064 0 0 0-365.952 23.232l-9.92 40.896-41.472 7.04a176.32 176.32 0 0 0-146.24 173.568c0 97.28 78.72 175.936 175.808 175.936h400a192 192 0 0 0 35.776-380.672zM959.552 480a256 256 0 0 1-256 256h-400A239.808 239.808 0 0 1 63.744 496.192a240.32 240.32 0 0 1 199.488-236.8 256.128 256.128 0 0 1 487.872-30.976A256.064 256.064 0 0 1 959.552 480zM288 800h64v64h-64v-64zm192 0h64v64h-64v-64zm-96 96h64v64h-64v-64zm192 0h64v64h-64v-64zm96-96h64v64h-64v-64z"
}, null, -1), Rr = [
  Nr
];
function Ur(e, t, a, r, l, o) {
  return n(), s("svg", Ir, Rr);
}
var Wr = /* @__PURE__ */ i(Er, [["render", Ur], ["__file", "drizzling.vue"]]), Gr = {
  name: "EditPen"
}, jr = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Zr = /* @__PURE__ */ _("path", {
  d: "m199.04 672.64 193.984 112 224-387.968-193.92-112-224 388.032zm-23.872 60.16 32.896 148.288 144.896-45.696L175.168 732.8zM455.04 229.248l193.92 112 56.704-98.112-193.984-112-56.64 98.112zM104.32 708.8l384-665.024 304.768 175.936L409.152 884.8h.064l-248.448 78.336L104.32 708.8zm384 254.272v-64h448v64h-448z",
  fill: "currentColor"
}, null, -1), Qr = [
  Zr
];
function Kr(e, t, a, r, l, o) {
  return n(), s("svg", jr, Qr);
}
var Jr = /* @__PURE__ */ i(Gr, [["render", Kr], ["__file", "edit-pen.vue"]]), Xr = {
  name: "Edit"
}, Yr = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, el = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640V512z"
}, null, -1), tl = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "m469.952 554.24 52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z"
}, null, -1), al = [
  el,
  tl
];
function _l(e, t, a, r, l, o) {
  return n(), s("svg", Yr, al);
}
var rl = /* @__PURE__ */ i(Xr, [["render", _l], ["__file", "edit.vue"]]), ll = {
  name: "ElemeFilled"
}, ol = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, nl = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M176 64h672c61.824 0 112 50.176 112 112v672a112 112 0 0 1-112 112H176A112 112 0 0 1 64 848V176c0-61.824 50.176-112 112-112zm150.528 173.568c-152.896 99.968-196.544 304.064-97.408 456.96a330.688 330.688 0 0 0 456.96 96.64c9.216-5.888 17.6-11.776 25.152-18.56a18.24 18.24 0 0 0 4.224-24.32L700.352 724.8a47.552 47.552 0 0 0-65.536-14.272A234.56 234.56 0 0 1 310.592 641.6C240 533.248 271.104 387.968 379.456 316.48a234.304 234.304 0 0 1 276.352 15.168c1.664.832 2.56 2.56 3.392 4.224 5.888 8.384 3.328 19.328-5.12 25.216L456.832 489.6a47.552 47.552 0 0 0-14.336 65.472l16 24.384c5.888 8.384 16.768 10.88 25.216 5.056l308.224-199.936a19.584 19.584 0 0 0 6.72-23.488v-.896c-4.992-9.216-10.048-17.6-15.104-26.88-99.968-151.168-304.064-194.88-456.96-95.744zM786.88 504.704l-62.208 40.32c-8.32 5.888-10.88 16.768-4.992 25.216L760 632.32c5.888 8.448 16.768 11.008 25.152 5.12l31.104-20.16a55.36 55.36 0 0 0 16-76.48l-20.224-31.04a19.52 19.52 0 0 0-25.152-5.12z"
}, null, -1), sl = [
  nl
];
function il(e, t, a, r, l, o) {
  return n(), s("svg", ol, sl);
}
var ul = /* @__PURE__ */ i(ll, [["render", il], ["__file", "eleme-filled.vue"]]), dl = {
  name: "Eleme"
}, vl = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, cl = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M300.032 188.8c174.72-113.28 408-63.36 522.24 109.44 5.76 10.56 11.52 20.16 17.28 30.72v.96a22.4 22.4 0 0 1-7.68 26.88l-352.32 228.48c-9.6 6.72-22.08 3.84-28.8-5.76l-18.24-27.84a54.336 54.336 0 0 1 16.32-74.88l225.6-146.88c9.6-6.72 12.48-19.2 5.76-28.8-.96-1.92-1.92-3.84-3.84-4.8a267.84 267.84 0 0 0-315.84-17.28c-123.84 81.6-159.36 247.68-78.72 371.52a268.096 268.096 0 0 0 370.56 78.72 54.336 54.336 0 0 1 74.88 16.32l17.28 26.88c5.76 9.6 3.84 21.12-4.8 27.84-8.64 7.68-18.24 14.4-28.8 21.12a377.92 377.92 0 0 1-522.24-110.4c-113.28-174.72-63.36-408 111.36-522.24zm526.08 305.28a22.336 22.336 0 0 1 28.8 5.76l23.04 35.52a63.232 63.232 0 0 1-18.24 87.36l-35.52 23.04c-9.6 6.72-22.08 3.84-28.8-5.76l-46.08-71.04c-6.72-9.6-3.84-22.08 5.76-28.8l71.04-46.08z"
}, null, -1), hl = [
  cl
];
function pl(e, t, a, r, l, o) {
  return n(), s("svg", vl, hl);
}
var fl = /* @__PURE__ */ i(dl, [["render", pl], ["__file", "eleme.vue"]]), wl = {
  name: "ElementPlus"
}, ml = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, gl = /* @__PURE__ */ _("path", {
  d: "M839.7 734.7c0 33.3-17.9 41-17.9 41S519.7 949.8 499.2 960c-10.2 5.1-20.5 5.1-30.7 0 0 0-314.9-184.3-325.1-192-5.1-5.1-10.2-12.8-12.8-20.5V368.6c0-17.9 20.5-28.2 20.5-28.2L466 158.6c12.8-5.1 25.6-5.1 38.4 0 0 0 279 161.3 309.8 179.2 17.9 7.7 28.2 25.6 25.6 46.1-.1-5-.1 317.5-.1 350.8zM714.2 371.2c-64-35.8-217.6-125.4-217.6-125.4-7.7-5.1-20.5-5.1-30.7 0L217.6 389.1s-17.9 10.2-17.9 23v297c0 5.1 5.1 12.8 7.7 17.9 7.7 5.1 256 148.5 256 148.5 7.7 5.1 17.9 5.1 25.6 0 15.4-7.7 250.9-145.9 250.9-145.9s12.8-5.1 12.8-30.7v-74.2l-276.5 169v-64c0-17.9 7.7-30.7 20.5-46.1L745 535c5.1-7.7 10.2-20.5 10.2-30.7v-66.6l-279 169v-69.1c0-15.4 5.1-30.7 17.9-38.4l220.1-128zM919 135.7c0-5.1-5.1-7.7-7.7-7.7h-58.9V66.6c0-5.1-5.1-5.1-10.2-5.1l-30.7 5.1c-5.1 0-5.1 2.6-5.1 5.1V128h-56.3c-5.1 0-5.1 5.1-7.7 5.1v38.4h69.1v64c0 5.1 5.1 5.1 10.2 5.1l30.7-5.1c5.1 0 5.1-2.6 5.1-5.1v-56.3h64l-2.5-38.4z",
  fill: "currentColor"
}, null, -1), $l = [
  gl
];
function zl(e, t, a, r, l, o) {
  return n(), s("svg", ml, $l);
}
var xl = /* @__PURE__ */ i(wl, [["render", zl], ["__file", "element-plus.vue"]]), Cl = {
  name: "Expand"
}, Hl = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ml = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M128 192h768v128H128V192zm0 256h512v128H128V448zm0 256h768v128H128V704zm576-352 192 160-192 128V352z"
}, null, -1), Vl = [
  Ml
];
function yl(e, t, a, r, l, o) {
  return n(), s("svg", Hl, Vl);
}
var Bl = /* @__PURE__ */ i(Cl, [["render", yl], ["__file", "expand.vue"]]), Ll = {
  name: "Failed"
}, Al = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, bl = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "m557.248 608 135.744-135.744-45.248-45.248-135.68 135.744-135.808-135.68-45.248 45.184L466.752 608l-135.68 135.68 45.184 45.312L512 653.248l135.744 135.744 45.248-45.248L557.312 608zM704 192h160v736H160V192h160v64h384v-64zm-320 0V96h256v96H384z"
}, null, -1), kl = [
  bl
];
function Sl(e, t, a, r, l, o) {
  return n(), s("svg", Al, kl);
}
var ql = /* @__PURE__ */ i(Ll, [["render", Sl], ["__file", "failed.vue"]]), Fl = {
  name: "Female"
}, Ol = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Pl = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M512 640a256 256 0 1 0 0-512 256 256 0 0 0 0 512zm0 64a320 320 0 1 1 0-640 320 320 0 0 1 0 640z"
}, null, -1), Tl = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M512 640q32 0 32 32v256q0 32-32 32t-32-32V672q0-32 32-32z"
}, null, -1), Dl = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M352 800h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32z"
}, null, -1), El = [
  Pl,
  Tl,
  Dl
];
function Il(e, t, a, r, l, o) {
  return n(), s("svg", Ol, El);
}
var Nl = /* @__PURE__ */ i(Fl, [["render", Il], ["__file", "female.vue"]]), Rl = {
  name: "Files"
}, Ul = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Wl = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M128 384v448h768V384H128zm-32-64h832a32 32 0 0 1 32 32v512a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V352a32 32 0 0 1 32-32zm64-128h704v64H160zm96-128h512v64H256z"
}, null, -1), Gl = [
  Wl
];
function jl(e, t, a, r, l, o) {
  return n(), s("svg", Ul, Gl);
}
var Zl = /* @__PURE__ */ i(Rl, [["render", jl], ["__file", "files.vue"]]), Ql = {
  name: "Film"
}, Kl = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Jl = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M160 160v704h704V160H160zm-32-64h768a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H128a32 32 0 0 1-32-32V128a32 32 0 0 1 32-32z"
}, null, -1), Xl = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M320 288V128h64v352h256V128h64v160h160v64H704v128h160v64H704v128h160v64H704v160h-64V544H384v352h-64V736H128v-64h192V544H128v-64h192V352H128v-64h192z"
}, null, -1), Yl = [
  Jl,
  Xl
];
function eo(e, t, a, r, l, o) {
  return n(), s("svg", Kl, Yl);
}
var to = /* @__PURE__ */ i(Ql, [["render", eo], ["__file", "film.vue"]]), ao = {
  name: "Filter"
}, _o = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ro = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M384 523.392V928a32 32 0 0 0 46.336 28.608l192-96A32 32 0 0 0 640 832V523.392l280.768-343.104a32 32 0 1 0-49.536-40.576l-288 352A32 32 0 0 0 576 512v300.224l-128 64V512a32 32 0 0 0-7.232-20.288L195.52 192H704a32 32 0 1 0 0-64H128a32 32 0 0 0-24.768 52.288L384 523.392z"
}, null, -1), lo = [
  ro
];
function oo(e, t, a, r, l, o) {
  return n(), s("svg", _o, lo);
}
var no = /* @__PURE__ */ i(ao, [["render", oo], ["__file", "filter.vue"]]), so = {
  name: "Finished"
}, io = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, uo = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M280.768 753.728 691.456 167.04a32 32 0 1 1 52.416 36.672L314.24 817.472a32 32 0 0 1-45.44 7.296l-230.4-172.8a32 32 0 0 1 38.4-51.2l203.968 152.96zM736 448a32 32 0 1 1 0-64h192a32 32 0 1 1 0 64H736zM608 640a32 32 0 0 1 0-64h319.936a32 32 0 1 1 0 64H608zM480 832a32 32 0 1 1 0-64h447.936a32 32 0 1 1 0 64H480z"
}, null, -1), vo = [
  uo
];
function co(e, t, a, r, l, o) {
  return n(), s("svg", io, vo);
}
var ho = /* @__PURE__ */ i(so, [["render", co], ["__file", "finished.vue"]]), po = {
  name: "FirstAidKit"
}, fo = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, wo = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M192 256a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V320a64 64 0 0 0-64-64H192zm0-64h640a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H192A128 128 0 0 1 64 768V320a128 128 0 0 1 128-128z"
}, null, -1), mo = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M544 512h96a32 32 0 0 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96v-96a32 32 0 0 1 64 0v96zM352 128v64h320v-64H352zm-32-64h384a32 32 0 0 1 32 32v128a32 32 0 0 1-32 32H320a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z"
}, null, -1), go = [
  wo,
  mo
];
function $o(e, t, a, r, l, o) {
  return n(), s("svg", fo, go);
}
var zo = /* @__PURE__ */ i(po, [["render", $o], ["__file", "first-aid-kit.vue"]]), xo = {
  name: "Flag"
}, Co = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ho = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M288 128h608L736 384l160 256H288v320h-96V64h96v64z"
}, null, -1), Mo = [
  Ho
];
function Vo(e, t, a, r, l, o) {
  return n(), s("svg", Co, Mo);
}
var yo = /* @__PURE__ */ i(xo, [["render", Vo], ["__file", "flag.vue"]]), Bo = {
  name: "Fold"
}, Lo = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ao = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M896 192H128v128h768V192zm0 256H384v128h512V448zm0 256H128v128h768V704zM320 384 128 512l192 128V384z"
}, null, -1), bo = [
  Ao
];
function ko(e, t, a, r, l, o) {
  return n(), s("svg", Lo, bo);
}
var So = /* @__PURE__ */ i(Bo, [["render", ko], ["__file", "fold.vue"]]), qo = {
  name: "FolderAdd"
}, Fo = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Oo = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32zm384 416V416h64v128h128v64H544v128h-64V608H352v-64h128z"
}, null, -1), Po = [
  Oo
];
function To(e, t, a, r, l, o) {
  return n(), s("svg", Fo, Po);
}
var Do = /* @__PURE__ */ i(qo, [["render", To], ["__file", "folder-add.vue"]]), Eo = {
  name: "FolderChecked"
}, Io = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, No = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32zm414.08 502.144 180.992-180.992L736.32 494.4 510.08 720.64l-158.4-158.336 45.248-45.312L510.08 630.144z"
}, null, -1), Ro = [
  No
];
function Uo(e, t, a, r, l, o) {
  return n(), s("svg", Io, Ro);
}
var Wo = /* @__PURE__ */ i(Eo, [["render", Uo], ["__file", "folder-checked.vue"]]), Go = {
  name: "FolderDelete"
}, jo = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Zo = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32zm370.752 448-90.496-90.496 45.248-45.248L512 530.752l90.496-90.496 45.248 45.248L557.248 576l90.496 90.496-45.248 45.248L512 621.248l-90.496 90.496-45.248-45.248L466.752 576z"
}, null, -1), Qo = [
  Zo
];
function Ko(e, t, a, r, l, o) {
  return n(), s("svg", jo, Qo);
}
var Jo = /* @__PURE__ */ i(Go, [["render", Ko], ["__file", "folder-delete.vue"]]), Xo = {
  name: "FolderOpened"
}, Yo = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, e5 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M878.08 448H241.92l-96 384h636.16l96-384zM832 384v-64H485.76L357.504 192H128v448l57.92-231.744A32 32 0 0 1 216.96 384H832zm-24.96 512H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h287.872l128.384 128H864a32 32 0 0 1 32 32v96h23.04a32 32 0 0 1 31.04 39.744l-112 448A32 32 0 0 1 807.04 896z"
}, null, -1), t5 = [
  e5
];
function a5(e, t, a, r, l, o) {
  return n(), s("svg", Yo, t5);
}
var _5 = /* @__PURE__ */ i(Xo, [["render", a5], ["__file", "folder-opened.vue"]]), r5 = {
  name: "FolderRemove"
}, l5 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, o5 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32zm256 416h320v64H352v-64z"
}, null, -1), n5 = [
  o5
];
function s5(e, t, a, r, l, o) {
  return n(), s("svg", l5, n5);
}
var i5 = /* @__PURE__ */ i(r5, [["render", s5], ["__file", "folder-remove.vue"]]), u5 = {
  name: "Folder"
}, d5 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, v5 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32z"
}, null, -1), c5 = [
  v5
];
function h5(e, t, a, r, l, o) {
  return n(), s("svg", d5, c5);
}
var p5 = /* @__PURE__ */ i(u5, [["render", h5], ["__file", "folder.vue"]]), f5 = {
  name: "Food"
}, w5 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, m5 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M128 352.576V352a288 288 0 0 1 491.072-204.224 192 192 0 0 1 274.24 204.48 64 64 0 0 1 57.216 74.24C921.6 600.512 850.048 710.656 736 756.992V800a96 96 0 0 1-96 96H384a96 96 0 0 1-96-96v-43.008c-114.048-46.336-185.6-156.48-214.528-330.496A64 64 0 0 1 128 352.64zm64-.576h64a160 160 0 0 1 320 0h64a224 224 0 0 0-448 0zm128 0h192a96 96 0 0 0-192 0zm439.424 0h68.544A128.256 128.256 0 0 0 704 192c-15.36 0-29.952 2.688-43.52 7.616 11.328 18.176 20.672 37.76 27.84 58.304A64.128 64.128 0 0 1 759.424 352zM672 768H352v32a32 32 0 0 0 32 32h256a32 32 0 0 0 32-32v-32zm-342.528-64h365.056c101.504-32.64 165.76-124.928 192.896-288H136.576c27.136 163.072 91.392 255.36 192.896 288z"
}, null, -1), g5 = [
  m5
];
function $5(e, t, a, r, l, o) {
  return n(), s("svg", w5, g5);
}
var z5 = /* @__PURE__ */ i(f5, [["render", $5], ["__file", "food.vue"]]), x5 = {
  name: "Football"
}, C5 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, H5 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M512 960a448 448 0 1 1 0-896 448 448 0 0 1 0 896zm0-64a384 384 0 1 0 0-768 384 384 0 0 0 0 768z"
}, null, -1), M5 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M186.816 268.288c16-16.384 31.616-31.744 46.976-46.08 17.472 30.656 39.808 58.112 65.984 81.28l-32.512 56.448a385.984 385.984 0 0 1-80.448-91.648zm653.696-5.312a385.92 385.92 0 0 1-83.776 96.96l-32.512-56.384a322.923 322.923 0 0 0 68.48-85.76c15.552 14.08 31.488 29.12 47.808 45.184zM465.984 445.248l11.136-63.104a323.584 323.584 0 0 0 69.76 0l11.136 63.104a387.968 387.968 0 0 1-92.032 0zm-62.72-12.8A381.824 381.824 0 0 1 320 396.544l32-55.424a319.885 319.885 0 0 0 62.464 27.712l-11.2 63.488zm300.8-35.84a381.824 381.824 0 0 1-83.328 35.84l-11.2-63.552A319.885 319.885 0 0 0 672 341.184l32 55.424zm-520.768 364.8a385.92 385.92 0 0 1 83.968-97.28l32.512 56.32c-26.88 23.936-49.856 52.352-67.52 84.032-16-13.44-32.32-27.712-48.96-43.072zm657.536.128a1442.759 1442.759 0 0 1-49.024 43.072 321.408 321.408 0 0 0-67.584-84.16l32.512-56.32c33.216 27.456 61.696 60.352 84.096 97.408zM465.92 578.752a387.968 387.968 0 0 1 92.032 0l-11.136 63.104a323.584 323.584 0 0 0-69.76 0l-11.136-63.104zm-62.72 12.8 11.2 63.552a319.885 319.885 0 0 0-62.464 27.712L320 627.392a381.824 381.824 0 0 1 83.264-35.84zm300.8 35.84-32 55.424a318.272 318.272 0 0 0-62.528-27.712l11.2-63.488c29.44 8.64 57.28 20.736 83.264 35.776z"
}, null, -1), V5 = [
  H5,
  M5
];
function y5(e, t, a, r, l, o) {
  return n(), s("svg", C5, V5);
}
var B5 = /* @__PURE__ */ i(x5, [["render", y5], ["__file", "football.vue"]]), L5 = {
  name: "ForkSpoon"
}, A5 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, b5 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M256 410.304V96a32 32 0 0 1 64 0v314.304a96 96 0 0 0 64-90.56V96a32 32 0 0 1 64 0v223.744a160 160 0 0 1-128 156.8V928a32 32 0 1 1-64 0V476.544a160 160 0 0 1-128-156.8V96a32 32 0 0 1 64 0v223.744a96 96 0 0 0 64 90.56zM672 572.48C581.184 552.128 512 446.848 512 320c0-141.44 85.952-256 192-256s192 114.56 192 256c0 126.848-69.184 232.128-160 252.48V928a32 32 0 1 1-64 0V572.48zM704 512c66.048 0 128-82.56 128-192s-61.952-192-128-192-128 82.56-128 192 61.952 192 128 192z"
}, null, -1), k5 = [
  b5
];
function S5(e, t, a, r, l, o) {
  return n(), s("svg", A5, k5);
}
var q5 = /* @__PURE__ */ i(L5, [["render", S5], ["__file", "fork-spoon.vue"]]), F5 = {
  name: "Fries"
}, O5 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, P5 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M608 224v-64a32 32 0 0 0-64 0v336h26.88A64 64 0 0 0 608 484.096V224zm101.12 160A64 64 0 0 0 672 395.904V384h64V224a32 32 0 1 0-64 0v160h37.12zm74.88 0a92.928 92.928 0 0 1 91.328 110.08l-60.672 323.584A96 96 0 0 1 720.32 896H303.68a96 96 0 0 1-94.336-78.336L148.672 494.08A92.928 92.928 0 0 1 240 384h-16V224a96 96 0 0 1 188.608-25.28A95.744 95.744 0 0 1 480 197.44V160a96 96 0 0 1 188.608-25.28A96 96 0 0 1 800 224v160h-16zM670.784 512a128 128 0 0 1-99.904 48H453.12a128 128 0 0 1-99.84-48H352v-1.536a128.128 128.128 0 0 1-9.984-14.976L314.88 448H240a28.928 28.928 0 0 0-28.48 34.304L241.088 640h541.824l29.568-157.696A28.928 28.928 0 0 0 784 448h-74.88l-27.136 47.488A132.405 132.405 0 0 1 672 510.464V512h-1.216zM480 288a32 32 0 0 0-64 0v196.096A64 64 0 0 0 453.12 496H480V288zm-128 96V224a32 32 0 0 0-64 0v160h64-37.12A64 64 0 0 1 352 395.904zm-98.88 320 19.072 101.888A32 32 0 0 0 303.68 832h416.64a32 32 0 0 0 31.488-26.112L770.88 704H253.12z"
}, null, -1), T5 = [
  P5
];
function D5(e, t, a, r, l, o) {
  return n(), s("svg", O5, T5);
}
var E5 = /* @__PURE__ */ i(F5, [["render", D5], ["__file", "fries.vue"]]), I5 = {
  name: "FullScreen"
}, N5 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, R5 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "m160 96.064 192 .192a32 32 0 0 1 0 64l-192-.192V352a32 32 0 0 1-64 0V96h64v.064zm0 831.872V928H96V672a32 32 0 1 1 64 0v191.936l192-.192a32 32 0 1 1 0 64l-192 .192zM864 96.064V96h64v256a32 32 0 1 1-64 0V160.064l-192 .192a32 32 0 1 1 0-64l192-.192zm0 831.872-192-.192a32 32 0 0 1 0-64l192 .192V672a32 32 0 1 1 64 0v256h-64v-.064z"
}, null, -1), U5 = [
  R5
];
function W5(e, t, a, r, l, o) {
  return n(), s("svg", N5, U5);
}
var G5 = /* @__PURE__ */ i(I5, [["render", W5], ["__file", "full-screen.vue"]]), j5 = {
  name: "GobletFull"
}, Z5 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Q5 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M256 320h512c0-78.592-12.608-142.4-36.928-192h-434.24C269.504 192.384 256 256.256 256 320zm503.936 64H264.064a256.128 256.128 0 0 0 495.872 0zM544 638.4V896h96a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64h96V638.4A320 320 0 0 1 192 320c0-85.632 21.312-170.944 64-256h512c42.688 64.32 64 149.632 64 256a320 320 0 0 1-288 318.4z"
}, null, -1), K5 = [
  Q5
];
function J5(e, t, a, r, l, o) {
  return n(), s("svg", Z5, K5);
}
var X5 = /* @__PURE__ */ i(j5, [["render", J5], ["__file", "goblet-full.vue"]]), Y5 = {
  name: "GobletSquareFull"
}, en = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, tn = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M256 270.912c10.048 6.72 22.464 14.912 28.992 18.624a220.16 220.16 0 0 0 114.752 30.72c30.592 0 49.408-9.472 91.072-41.152l.64-.448c52.928-40.32 82.368-55.04 132.288-54.656 55.552.448 99.584 20.8 142.72 57.408l1.536 1.28V128H256v142.912zm.96 76.288C266.368 482.176 346.88 575.872 512 576c157.44.064 237.952-85.056 253.248-209.984a952.32 952.32 0 0 1-40.192-35.712c-32.704-27.776-63.36-41.92-101.888-42.24-31.552-.256-50.624 9.28-93.12 41.6l-.576.448c-52.096 39.616-81.024 54.208-129.792 54.208-54.784 0-100.48-13.376-142.784-37.056zM480 638.848C250.624 623.424 192 442.496 192 319.68V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v224c0 122.816-58.624 303.68-288 318.912V896h96a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64h96V638.848z"
}, null, -1), an = [
  tn
];
function _n(e, t, a, r, l, o) {
  return n(), s("svg", en, an);
}
var rn = /* @__PURE__ */ i(Y5, [["render", _n], ["__file", "goblet-square-full.vue"]]), ln = {
  name: "GobletSquare"
}, on = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, nn = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M544 638.912V896h96a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64h96V638.848C250.624 623.424 192 442.496 192 319.68V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v224c0 122.816-58.624 303.68-288 318.912zM256 319.68c0 149.568 80 256.192 256 256.256C688.128 576 768 469.568 768 320V128H256v191.68z"
}, null, -1), sn = [
  nn
];
function un(e, t, a, r, l, o) {
  return n(), s("svg", on, sn);
}
var dn = /* @__PURE__ */ i(ln, [["render", un], ["__file", "goblet-square.vue"]]), vn = {
  name: "Goblet"
}, cn = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, hn = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M544 638.4V896h96a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64h96V638.4A320 320 0 0 1 192 320c0-85.632 21.312-170.944 64-256h512c42.688 64.32 64 149.632 64 256a320 320 0 0 1-288 318.4zM256 320a256 256 0 1 0 512 0c0-78.592-12.608-142.4-36.928-192h-434.24C269.504 192.384 256 256.256 256 320z"
}, null, -1), pn = [
  hn
];
function fn(e, t, a, r, l, o) {
  return n(), s("svg", cn, pn);
}
var wn = /* @__PURE__ */ i(vn, [["render", fn], ["__file", "goblet.vue"]]), mn = {
  name: "GoldMedal"
}, gn = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024",
  style: { "enable-background": "new 0 0 1024 1024" },
  "xml:space": "preserve"
}, $n = /* @__PURE__ */ _("path", {
  d: "m772.13 452.84 53.86-351.81c1.32-10.01-1.17-18.68-7.49-26.02S804.35 64 795.01 64H228.99v-.01h-.06c-9.33 0-17.15 3.67-23.49 11.01s-8.83 16.01-7.49 26.02l53.87 351.89C213.54 505.73 193.59 568.09 192 640c2 90.67 33.17 166.17 93.5 226.5S421.33 957.99 512 960c90.67-2 166.17-33.17 226.5-93.5 60.33-60.34 91.49-135.83 93.5-226.5-1.59-71.94-21.56-134.32-59.87-187.16zM640.01 128h117.02l-39.01 254.02c-20.75-10.64-40.74-19.73-59.94-27.28-5.92-3-11.95-5.8-18.08-8.41V128h.01zM576 128v198.76c-13.18-2.58-26.74-4.43-40.67-5.55-8.07-.8-15.85-1.2-23.33-1.2-10.54 0-21.09.66-31.64 1.96a359.844 359.844 0 0 0-32.36 4.79V128h128zm-192 0h.04v218.3c-6.22 2.66-12.34 5.5-18.36 8.56-19.13 7.54-39.02 16.6-59.66 27.16L267.01 128H384zm308.99 692.99c-48 48-108.33 73-180.99 75.01-72.66-2.01-132.99-27.01-180.99-75.01S258.01 712.66 256 640c2.01-72.66 27.01-132.99 75.01-180.99 19.67-19.67 41.41-35.47 65.22-47.41 38.33-15.04 71.15-23.92 98.44-26.65 5.07-.41 10.2-.7 15.39-.88.63-.01 1.28-.03 1.91-.03.66 0 1.35.03 2.02.04 5.11.17 10.15.46 15.13.86 27.4 2.71 60.37 11.65 98.91 26.79 23.71 11.93 45.36 27.69 64.96 47.29 48 48 73 108.33 75.01 180.99-2.01 72.65-27.01 132.98-75.01 180.98z",
  fill: "currentColor"
}, null, -1), zn = /* @__PURE__ */ _("path", {
  d: "M544 480H416v64h64v192h-64v64h192v-64h-64z",
  fill: "currentColor"
}, null, -1), xn = [
  $n,
  zn
];
function Cn(e, t, a, r, l, o) {
  return n(), s("svg", gn, xn);
}
var Hn = /* @__PURE__ */ i(mn, [["render", Cn], ["__file", "gold-medal.vue"]]), Mn = {
  name: "GoodsFilled"
}, Vn = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, yn = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M192 352h640l64 544H128l64-544zm128 224h64V448h-64v128zm320 0h64V448h-64v128zM384 288h-64a192 192 0 1 1 384 0h-64a128 128 0 1 0-256 0z"
}, null, -1), Bn = [
  yn
];
function Ln(e, t, a, r, l, o) {
  return n(), s("svg", Vn, Bn);
}
var An = /* @__PURE__ */ i(Mn, [["render", Ln], ["__file", "goods-filled.vue"]]), bn = {
  name: "Goods"
}, kn = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Sn = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M320 288v-22.336C320 154.688 405.504 64 512 64s192 90.688 192 201.664v22.4h131.072a32 32 0 0 1 31.808 28.8l57.6 576a32 32 0 0 1-31.808 35.2H131.328a32 32 0 0 1-31.808-35.2l57.6-576a32 32 0 0 1 31.808-28.8H320zm64 0h256v-22.336C640 189.248 582.272 128 512 128c-70.272 0-128 61.248-128 137.664v22.4zm-64 64H217.92l-51.2 512h690.56l-51.264-512H704v96a32 32 0 1 1-64 0v-96H384v96a32 32 0 0 1-64 0v-96z"
}, null, -1), qn = [
  Sn
];
function Fn(e, t, a, r, l, o) {
  return n(), s("svg", kn, qn);
}
var On = /* @__PURE__ */ i(bn, [["render", Fn], ["__file", "goods.vue"]]), Pn = {
  name: "Grape"
}, Tn = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Dn = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M544 195.2a160 160 0 0 1 96 60.8 160 160 0 1 1 146.24 254.976 160 160 0 0 1-128 224 160 160 0 1 1-292.48 0 160 160 0 0 1-128-224A160 160 0 1 1 384 256a160 160 0 0 1 96-60.8V128h-64a32 32 0 0 1 0-64h192a32 32 0 0 1 0 64h-64v67.2zM512 448a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm-256 0a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm128 224a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm128 224a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm128-224a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm128-224a96 96 0 1 0 0-192 96 96 0 0 0 0 192z"
}, null, -1), En = [
  Dn
];
function In(e, t, a, r, l, o) {
  return n(), s("svg", Tn, En);
}
var Nn = /* @__PURE__ */ i(Pn, [["render", In], ["__file", "grape.vue"]]), Rn = {
  name: "Grid"
}, Un = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Wn = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M640 384v256H384V384h256zm64 0h192v256H704V384zm-64 512H384V704h256v192zm64 0V704h192v192H704zm-64-768v192H384V128h256zm64 0h192v192H704V128zM320 384v256H128V384h192zm0 512H128V704h192v192zm0-768v192H128V128h192z"
}, null, -1), Gn = [
  Wn
];
function jn(e, t, a, r, l, o) {
  return n(), s("svg", Un, Gn);
}
var Zn = /* @__PURE__ */ i(Rn, [["render", jn], ["__file", "grid.vue"]]), Qn = {
  name: "Guide"
}, Kn = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Jn = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M640 608h-64V416h64v192zm0 160v160a32 32 0 0 1-32 32H416a32 32 0 0 1-32-32V768h64v128h128V768h64zM384 608V416h64v192h-64zm256-352h-64V128H448v128h-64V96a32 32 0 0 1 32-32h192a32 32 0 0 1 32 32v160z"
}, null, -1), Xn = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "m220.8 256-71.232 80 71.168 80H768V256H220.8zm-14.4-64H800a32 32 0 0 1 32 32v224a32 32 0 0 1-32 32H206.4a32 32 0 0 1-23.936-10.752l-99.584-112a32 32 0 0 1 0-42.496l99.584-112A32 32 0 0 1 206.4 192zm678.784 496-71.104 80H266.816V608h547.2l71.168 80zm-56.768-144H234.88a32 32 0 0 0-32 32v224a32 32 0 0 0 32 32h593.6a32 32 0 0 0 23.936-10.752l99.584-112a32 32 0 0 0 0-42.496l-99.584-112A32 32 0 0 0 828.48 544z"
}, null, -1), Yn = [
  Jn,
  Xn
];
function e9(e, t, a, r, l, o) {
  return n(), s("svg", Kn, Yn);
}
var t9 = /* @__PURE__ */ i(Qn, [["render", e9], ["__file", "guide.vue"]]), a9 = {
  name: "Handbag"
}, _9 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024",
  style: { "enable-background": "new 0 0 1024 1024" },
  "xml:space": "preserve"
}, r9 = /* @__PURE__ */ _("path", {
  d: "M887.01 264.99c-6-5.99-13.67-8.99-23.01-8.99H704c-1.34-54.68-20.01-100.01-56-136s-81.32-54.66-136-56c-54.68 1.34-100.01 20.01-136 56s-54.66 81.32-56 136H160c-9.35 0-17.02 3-23.01 8.99-5.99 6-8.99 13.67-8.99 23.01v640c0 9.35 2.99 17.02 8.99 23.01S150.66 960 160 960h704c9.35 0 17.02-2.99 23.01-8.99S896 937.34 896 928V288c0-9.35-2.99-17.02-8.99-23.01zM421.5 165.5c24.32-24.34 54.49-36.84 90.5-37.5 35.99.68 66.16 13.18 90.5 37.5s36.84 54.49 37.5 90.5H384c.68-35.99 13.18-66.16 37.5-90.5zM832 896H192V320h128v128h64V320h256v128h64V320h128v576z",
  fill: "currentColor"
}, null, -1), l9 = [
  r9
];
function o9(e, t, a, r, l, o) {
  return n(), s("svg", _9, l9);
}
var n9 = /* @__PURE__ */ i(a9, [["render", o9], ["__file", "handbag.vue"]]), s9 = {
  name: "Headset"
}, i9 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, u9 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M896 529.152V512a384 384 0 1 0-768 0v17.152A128 128 0 0 1 320 640v128a128 128 0 1 1-256 0V512a448 448 0 1 1 896 0v256a128 128 0 1 1-256 0V640a128 128 0 0 1 192-110.848zM896 640a64 64 0 0 0-128 0v128a64 64 0 0 0 128 0V640zm-768 0v128a64 64 0 0 0 128 0V640a64 64 0 1 0-128 0z"
}, null, -1), d9 = [
  u9
];
function v9(e, t, a, r, l, o) {
  return n(), s("svg", i9, d9);
}
var c9 = /* @__PURE__ */ i(s9, [["render", v9], ["__file", "headset.vue"]]), h9 = {
  name: "HelpFilled"
}, p9 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, f9 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M926.784 480H701.312A192.512 192.512 0 0 0 544 322.688V97.216A416.064 416.064 0 0 1 926.784 480zm0 64A416.064 416.064 0 0 1 544 926.784V701.312A192.512 192.512 0 0 0 701.312 544h225.472zM97.28 544h225.472A192.512 192.512 0 0 0 480 701.312v225.472A416.064 416.064 0 0 1 97.216 544zm0-64A416.064 416.064 0 0 1 480 97.216v225.472A192.512 192.512 0 0 0 322.688 480H97.216z"
}, null, -1), w9 = [
  f9
];
function m9(e, t, a, r, l, o) {
  return n(), s("svg", p9, w9);
}
var g9 = /* @__PURE__ */ i(h9, [["render", m9], ["__file", "help-filled.vue"]]), $9 = {
  name: "Help"
}, z9 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, x9 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "m759.936 805.248-90.944-91.008A254.912 254.912 0 0 1 512 768a254.912 254.912 0 0 1-156.992-53.76l-90.944 91.008A382.464 382.464 0 0 0 512 896c94.528 0 181.12-34.176 247.936-90.752zm45.312-45.312A382.464 382.464 0 0 0 896 512c0-94.528-34.176-181.12-90.752-247.936l-91.008 90.944C747.904 398.4 768 452.864 768 512c0 59.136-20.096 113.6-53.76 156.992l91.008 90.944zm-45.312-541.184A382.464 382.464 0 0 0 512 128c-94.528 0-181.12 34.176-247.936 90.752l90.944 91.008A254.912 254.912 0 0 1 512 256c59.136 0 113.6 20.096 156.992 53.76l90.944-91.008zm-541.184 45.312A382.464 382.464 0 0 0 128 512c0 94.528 34.176 181.12 90.752 247.936l91.008-90.944A254.912 254.912 0 0 1 256 512c0-59.136 20.096-113.6 53.76-156.992l-91.008-90.944zm417.28 394.496a194.56 194.56 0 0 0 22.528-22.528C686.912 602.56 704 559.232 704 512a191.232 191.232 0 0 0-67.968-146.56A191.296 191.296 0 0 0 512 320a191.232 191.232 0 0 0-146.56 67.968C337.088 421.44 320 464.768 320 512a191.232 191.232 0 0 0 67.968 146.56C421.44 686.912 464.768 704 512 704c47.296 0 90.56-17.088 124.032-45.44zM512 960a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), C9 = [
  x9
];
function H9(e, t, a, r, l, o) {
  return n(), s("svg", z9, C9);
}
var M9 = /* @__PURE__ */ i($9, [["render", H9], ["__file", "help.vue"]]), V9 = {
  name: "Hide"
}, y9 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, B9 = /* @__PURE__ */ _("path", {
  d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2L371.2 588.8ZM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z",
  fill: "currentColor"
}, null, -1), L9 = /* @__PURE__ */ _("path", {
  d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z",
  fill: "currentColor"
}, null, -1), A9 = [
  B9,
  L9
];
function b9(e, t, a, r, l, o) {
  return n(), s("svg", y9, A9);
}
var k9 = /* @__PURE__ */ i(V9, [["render", b9], ["__file", "hide.vue"]]), S9 = {
  name: "Histogram"
}, q9 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, F9 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M416 896V128h192v768H416zm-288 0V448h192v448H128zm576 0V320h192v576H704z"
}, null, -1), O9 = [
  F9
];
function P9(e, t, a, r, l, o) {
  return n(), s("svg", q9, O9);
}
var T9 = /* @__PURE__ */ i(S9, [["render", P9], ["__file", "histogram.vue"]]), D9 = {
  name: "HomeFilled"
}, E9 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, I9 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M512 128 128 447.936V896h255.936V640H640v256h255.936V447.936z"
}, null, -1), N9 = [
  I9
];
function R9(e, t, a, r, l, o) {
  return n(), s("svg", E9, N9);
}
var U9 = /* @__PURE__ */ i(D9, [["render", R9], ["__file", "home-filled.vue"]]), W9 = {
  name: "HotWater"
}, G9 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, j9 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M273.067 477.867h477.866V409.6H273.067v68.267zm0 68.266v51.2A187.733 187.733 0 0 0 460.8 785.067h102.4a187.733 187.733 0 0 0 187.733-187.734v-51.2H273.067zm-34.134-204.8h546.134a34.133 34.133 0 0 1 34.133 34.134v221.866a256 256 0 0 1-256 256H460.8a256 256 0 0 1-256-256V375.467a34.133 34.133 0 0 1 34.133-34.134zM512 34.133a34.133 34.133 0 0 1 34.133 34.134v170.666a34.133 34.133 0 0 1-68.266 0V68.267A34.133 34.133 0 0 1 512 34.133zM375.467 102.4a34.133 34.133 0 0 1 34.133 34.133v102.4a34.133 34.133 0 0 1-68.267 0v-102.4a34.133 34.133 0 0 1 34.134-34.133zm273.066 0a34.133 34.133 0 0 1 34.134 34.133v102.4a34.133 34.133 0 1 1-68.267 0v-102.4a34.133 34.133 0 0 1 34.133-34.133zM170.667 921.668h682.666a34.133 34.133 0 1 1 0 68.267H170.667a34.133 34.133 0 1 1 0-68.267z"
}, null, -1), Z9 = [
  j9
];
function Q9(e, t, a, r, l, o) {
  return n(), s("svg", G9, Z9);
}
var K9 = /* @__PURE__ */ i(W9, [["render", Q9], ["__file", "hot-water.vue"]]), J9 = {
  name: "House"
}, X9 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Y9 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M192 413.952V896h640V413.952L512 147.328 192 413.952zM139.52 374.4l352-293.312a32 32 0 0 1 40.96 0l352 293.312A32 32 0 0 1 896 398.976V928a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V398.976a32 32 0 0 1 11.52-24.576z"
}, null, -1), es = [
  Y9
];
function ts(e, t, a, r, l, o) {
  return n(), s("svg", X9, es);
}
var as = /* @__PURE__ */ i(J9, [["render", ts], ["__file", "house.vue"]]), _s = {
  name: "IceCreamRound"
}, rs = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ls = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "m308.352 489.344 226.304 226.304a32 32 0 0 0 45.248 0L783.552 512A192 192 0 1 0 512 240.448L308.352 444.16a32 32 0 0 0 0 45.248zm135.744 226.304L308.352 851.392a96 96 0 0 1-135.744-135.744l135.744-135.744-45.248-45.248a96 96 0 0 1 0-135.808L466.752 195.2A256 256 0 0 1 828.8 557.248L625.152 760.96a96 96 0 0 1-135.808 0l-45.248-45.248zM398.848 670.4 353.6 625.152 217.856 760.896a32 32 0 0 0 45.248 45.248L398.848 670.4zm248.96-384.64a32 32 0 0 1 0 45.248L466.624 512a32 32 0 1 1-45.184-45.248l180.992-181.056a32 32 0 0 1 45.248 0zm90.496 90.496a32 32 0 0 1 0 45.248L557.248 602.496A32 32 0 1 1 512 557.248l180.992-180.992a32 32 0 0 1 45.312 0z"
}, null, -1), os = [
  ls
];
function ns(e, t, a, r, l, o) {
  return n(), s("svg", rs, os);
}
var ss = /* @__PURE__ */ i(_s, [["render", ns], ["__file", "ice-cream-round.vue"]]), is = {
  name: "IceCreamSquare"
}, us = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ds = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M416 640h256a32 32 0 0 0 32-32V160a32 32 0 0 0-32-32H352a32 32 0 0 0-32 32v448a32 32 0 0 0 32 32h64zm192 64v160a96 96 0 0 1-192 0V704h-64a96 96 0 0 1-96-96V160a96 96 0 0 1 96-96h320a96 96 0 0 1 96 96v448a96 96 0 0 1-96 96h-64zm-64 0h-64v160a32 32 0 1 0 64 0V704z"
}, null, -1), vs = [
  ds
];
function cs(e, t, a, r, l, o) {
  return n(), s("svg", us, vs);
}
var hs = /* @__PURE__ */ i(is, [["render", cs], ["__file", "ice-cream-square.vue"]]), ps = {
  name: "IceCream"
}, fs = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ws = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M128.64 448a208 208 0 0 1 193.536-191.552 224 224 0 0 1 445.248 15.488A208.128 208.128 0 0 1 894.784 448H896L548.8 983.68a32 32 0 0 1-53.248.704L128 448h.64zm64.256 0h286.208a144 144 0 0 0-286.208 0zm351.36 0h286.272a144 144 0 0 0-286.272 0zm-294.848 64 271.808 396.608L778.24 512H249.408zM511.68 352.64a207.872 207.872 0 0 1 189.184-96.192 160 160 0 0 0-314.752 5.632c52.608 12.992 97.28 46.08 125.568 90.56z"
}, null, -1), ms = [
  ws
];
function gs(e, t, a, r, l, o) {
  return n(), s("svg", fs, ms);
}
var $s = /* @__PURE__ */ i(ps, [["render", gs], ["__file", "ice-cream.vue"]]), zs = {
  name: "IceDrink"
}, xs = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Cs = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M512 448v128h239.68l16.064-128H512zm-64 0H256.256l16.064 128H448V448zm64-255.36V384h247.744A256.128 256.128 0 0 0 512 192.64zm-64 8.064A256.448 256.448 0 0 0 264.256 384H448V200.704zm64-72.064A320.128 320.128 0 0 1 825.472 384H896a32 32 0 1 1 0 64h-64v1.92l-56.96 454.016A64 64 0 0 1 711.552 960H312.448a64 64 0 0 1-63.488-56.064L192 449.92V448h-64a32 32 0 0 1 0-64h70.528A320.384 320.384 0 0 1 448 135.04V96a96 96 0 0 1 96-96h128a32 32 0 1 1 0 64H544a32 32 0 0 0-32 32v32.64zM743.68 640H280.32l32.128 256h399.104l32.128-256z"
}, null, -1), Hs = [
  Cs
];
function Ms(e, t, a, r, l, o) {
  return n(), s("svg", xs, Hs);
}
var Vs = /* @__PURE__ */ i(zs, [["render", Ms], ["__file", "ice-drink.vue"]]), ys = {
  name: "IceTea"
}, Bs = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ls = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M197.696 259.648a320.128 320.128 0 0 1 628.608 0A96 96 0 0 1 896 352v64a96 96 0 0 1-71.616 92.864l-49.408 395.072A64 64 0 0 1 711.488 960H312.512a64 64 0 0 1-63.488-56.064l-49.408-395.072A96 96 0 0 1 128 416v-64a96 96 0 0 1 69.696-92.352zM264.064 256h495.872a256.128 256.128 0 0 0-495.872 0zm495.424 256H264.512l48 384h398.976l48-384zM224 448h576a32 32 0 0 0 32-32v-64a32 32 0 0 0-32-32H224a32 32 0 0 0-32 32v64a32 32 0 0 0 32 32zm160 192h64v64h-64v-64zm192 64h64v64h-64v-64zm-128 64h64v64h-64v-64zm64-192h64v64h-64v-64z"
}, null, -1), As = [
  Ls
];
function bs(e, t, a, r, l, o) {
  return n(), s("svg", Bs, As);
}
var ks = /* @__PURE__ */ i(ys, [["render", bs], ["__file", "ice-tea.vue"]]), Ss = {
  name: "InfoFilled"
}, qs = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Fs = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64zm67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344zM590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
}, null, -1), Os = [
  Fs
];
function Ps(e, t, a, r, l, o) {
  return n(), s("svg", qs, Os);
}
var Y = /* @__PURE__ */ i(Ss, [["render", Ps], ["__file", "info-filled.vue"]]), Ts = {
  name: "Iphone"
}, Ds = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Es = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M224 768v96.064a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V768H224zm0-64h576V160a64 64 0 0 0-64-64H288a64 64 0 0 0-64 64v544zm32 288a96 96 0 0 1-96-96V128a96 96 0 0 1 96-96h512a96 96 0 0 1 96 96v768a96 96 0 0 1-96 96H256zm304-144a48 48 0 1 1-96 0 48 48 0 0 1 96 0z"
}, null, -1), Is = [
  Es
];
function Ns(e, t, a, r, l, o) {
  return n(), s("svg", Ds, Is);
}
var Rs = /* @__PURE__ */ i(Ts, [["render", Ns], ["__file", "iphone.vue"]]), Us = {
  name: "Key"
}, Ws = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Gs = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M448 456.064V96a32 32 0 0 1 32-32.064L672 64a32 32 0 0 1 0 64H512v128h160a32 32 0 0 1 0 64H512v128a256 256 0 1 1-64 8.064zM512 896a192 192 0 1 0 0-384 192 192 0 0 0 0 384z"
}, null, -1), js = [
  Gs
];
function Zs(e, t, a, r, l, o) {
  return n(), s("svg", Ws, js);
}
var Qs = /* @__PURE__ */ i(Us, [["render", Zs], ["__file", "key.vue"]]), Ks = {
  name: "KnifeFork"
}, Js = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Xs = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M256 410.56V96a32 32 0 0 1 64 0v314.56A96 96 0 0 0 384 320V96a32 32 0 0 1 64 0v224a160 160 0 0 1-128 156.8V928a32 32 0 1 1-64 0V476.8A160 160 0 0 1 128 320V96a32 32 0 0 1 64 0v224a96 96 0 0 0 64 90.56zm384-250.24V544h126.72c-3.328-78.72-12.928-147.968-28.608-207.744-14.336-54.528-46.848-113.344-98.112-175.872zM640 608v320a32 32 0 1 1-64 0V64h64c85.312 89.472 138.688 174.848 160 256 21.312 81.152 32 177.152 32 288H640z"
}, null, -1), Ys = [
  Xs
];
function ei(e, t, a, r, l, o) {
  return n(), s("svg", Js, Ys);
}
var ti = /* @__PURE__ */ i(Ks, [["render", ei], ["__file", "knife-fork.vue"]]), ai = {
  name: "Lightning"
}, _i = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ri = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M288 671.36v64.128A239.808 239.808 0 0 1 63.744 496.192a240.32 240.32 0 0 1 199.488-236.8 256.128 256.128 0 0 1 487.872-30.976A256.064 256.064 0 0 1 736 734.016v-64.768a192 192 0 0 0 3.328-377.92l-35.2-6.592-12.8-33.408a192.064 192.064 0 0 0-365.952 23.232l-9.92 40.896-41.472 7.04a176.32 176.32 0 0 0-146.24 173.568c0 91.968 70.464 167.36 160.256 175.232z"
}, null, -1), li = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M416 736a32 32 0 0 1-27.776-47.872l128-224a32 32 0 1 1 55.552 31.744L471.168 672H608a32 32 0 0 1 27.776 47.872l-128 224a32 32 0 1 1-55.68-31.744L552.96 736H416z"
}, null, -1), oi = [
  ri,
  li
];
function ni(e, t, a, r, l, o) {
  return n(), s("svg", _i, oi);
}
var si = /* @__PURE__ */ i(ai, [["render", ni], ["__file", "lightning.vue"]]), ii = {
  name: "Link"
}, ui = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, di = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M715.648 625.152 670.4 579.904l90.496-90.56c75.008-74.944 85.12-186.368 22.656-248.896-62.528-62.464-173.952-52.352-248.96 22.656L444.16 353.6l-45.248-45.248 90.496-90.496c100.032-99.968 251.968-110.08 339.456-22.656 87.488 87.488 77.312 239.424-22.656 339.456l-90.496 90.496zm-90.496 90.496-90.496 90.496C434.624 906.112 282.688 916.224 195.2 828.8c-87.488-87.488-77.312-239.424 22.656-339.456l90.496-90.496 45.248 45.248-90.496 90.56c-75.008 74.944-85.12 186.368-22.656 248.896 62.528 62.464 173.952 52.352 248.96-22.656l90.496-90.496 45.248 45.248zm0-362.048 45.248 45.248L398.848 670.4 353.6 625.152 625.152 353.6z"
}, null, -1), vi = [
  di
];
function ci(e, t, a, r, l, o) {
  return n(), s("svg", ui, vi);
}
var hi = /* @__PURE__ */ i(ii, [["render", ci], ["__file", "link.vue"]]), pi = {
  name: "List"
}, fi = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, wi = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M704 192h160v736H160V192h160v64h384v-64zM288 512h448v-64H288v64zm0 256h448v-64H288v64zm96-576V96h256v96H384z"
}, null, -1), mi = [
  wi
];
function gi(e, t, a, r, l, o) {
  return n(), s("svg", fi, mi);
}
var $i = /* @__PURE__ */ i(pi, [["render", gi], ["__file", "list.vue"]]), zi = {
  name: "Loading"
}, xi = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ci = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
}, null, -1), Hi = [
  Ci
];
function Mi(e, t, a, r, l, o) {
  return n(), s("svg", xi, Hi);
}
var Vi = /* @__PURE__ */ i(zi, [["render", Mi], ["__file", "loading.vue"]]), yi = {
  name: "LocationFilled"
}, Bi = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Li = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M512 928c23.936 0 117.504-68.352 192.064-153.152C803.456 661.888 864 535.808 864 416c0-189.632-155.84-320-352-320S160 226.368 160 416c0 120.32 60.544 246.4 159.936 359.232C394.432 859.84 488 928 512 928zm0-435.2a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 140.8a204.8 204.8 0 1 1 0-409.6 204.8 204.8 0 0 1 0 409.6z"
}, null, -1), Ai = [
  Li
];
function bi(e, t, a, r, l, o) {
  return n(), s("svg", Bi, Ai);
}
var ki = /* @__PURE__ */ i(yi, [["render", bi], ["__file", "location-filled.vue"]]), Si = {
  name: "LocationInformation"
}, qi = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Fi = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
}, null, -1), Oi = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
}, null, -1), Pi = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M512 512a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm0 64a160 160 0 1 1 0-320 160 160 0 0 1 0 320z"
}, null, -1), Ti = [
  Fi,
  Oi,
  Pi
];
function Di(e, t, a, r, l, o) {
  return n(), s("svg", qi, Ti);
}
var Ei = /* @__PURE__ */ i(Si, [["render", Di], ["__file", "location-information.vue"]]), Ii = {
  name: "Location"
}, Ni = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ri = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
}, null, -1), Ui = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M512 512a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm0 64a160 160 0 1 1 0-320 160 160 0 0 1 0 320z"
}, null, -1), Wi = [
  Ri,
  Ui
];
function Gi(e, t, a, r, l, o) {
  return n(), s("svg", Ni, Wi);
}
var ji = /* @__PURE__ */ i(Ii, [["render", Gi], ["__file", "location.vue"]]), Zi = {
  name: "Lock"
}, Qi = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ki = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M224 448a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32V480a32 32 0 0 0-32-32H224zm0-64h576a96 96 0 0 1 96 96v384a96 96 0 0 1-96 96H224a96 96 0 0 1-96-96V480a96 96 0 0 1 96-96z"
}, null, -1), Ji = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M512 544a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V576a32 32 0 0 1 32-32zm192-160v-64a192 192 0 1 0-384 0v64h384zM512 64a256 256 0 0 1 256 256v128H256V320A256 256 0 0 1 512 64z"
}, null, -1), Xi = [
  Ki,
  Ji
];
function Yi(e, t, a, r, l, o) {
  return n(), s("svg", Qi, Xi);
}
var eu = /* @__PURE__ */ i(Zi, [["render", Yi], ["__file", "lock.vue"]]), tu = {
  name: "Lollipop"
}, au = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _u = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M513.28 448a64 64 0 1 1 76.544 49.728A96 96 0 0 0 768 448h64a160 160 0 0 1-320 0h1.28zm-126.976-29.696a256 256 0 1 0 43.52-180.48A256 256 0 0 1 832 448h-64a192 192 0 0 0-381.696-29.696zm105.664 249.472L285.696 874.048a96 96 0 0 1-135.68-135.744l206.208-206.272a320 320 0 1 1 135.744 135.744zm-54.464-36.032a321.92 321.92 0 0 1-45.248-45.248L195.2 783.552a32 32 0 1 0 45.248 45.248l197.056-197.12z"
}, null, -1), ru = [
  _u
];
function lu(e, t, a, r, l, o) {
  return n(), s("svg", au, ru);
}
var ou = /* @__PURE__ */ i(tu, [["render", lu], ["__file", "lollipop.vue"]]), nu = {
  name: "MagicStick"
}, su = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, iu = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M512 64h64v192h-64V64zm0 576h64v192h-64V640zM160 480v-64h192v64H160zm576 0v-64h192v64H736zM249.856 199.04l45.248-45.184L430.848 289.6 385.6 334.848 249.856 199.104zM657.152 606.4l45.248-45.248 135.744 135.744-45.248 45.248L657.152 606.4zM114.048 923.2 68.8 877.952l316.8-316.8 45.248 45.248-316.8 316.8zM702.4 334.848 657.152 289.6l135.744-135.744 45.248 45.248L702.4 334.848z"
}, null, -1), uu = [
  iu
];
function du(e, t, a, r, l, o) {
  return n(), s("svg", su, uu);
}
var vu = /* @__PURE__ */ i(nu, [["render", du], ["__file", "magic-stick.vue"]]), cu = {
  name: "Magnet"
}, hu = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, pu = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M832 320V192H704v320a192 192 0 1 1-384 0V192H192v128h128v64H192v128a320 320 0 0 0 640 0V384H704v-64h128zM640 512V128h256v384a384 384 0 1 1-768 0V128h256v384a128 128 0 1 0 256 0z"
}, null, -1), fu = [
  pu
];
function wu(e, t, a, r, l, o) {
  return n(), s("svg", hu, fu);
}
var mu = /* @__PURE__ */ i(cu, [["render", wu], ["__file", "magnet.vue"]]), gu = {
  name: "Male"
}, $u = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, zu = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M399.5 849.5a225 225 0 1 0 0-450 225 225 0 0 0 0 450zm0 56.25a281.25 281.25 0 1 1 0-562.5 281.25 281.25 0 0 1 0 562.5zm253.125-787.5h225q28.125 0 28.125 28.125T877.625 174.5h-225q-28.125 0-28.125-28.125t28.125-28.125z"
}, null, -1), xu = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M877.625 118.25q28.125 0 28.125 28.125v225q0 28.125-28.125 28.125T849.5 371.375v-225q0-28.125 28.125-28.125z"
}, null, -1), Cu = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M604.813 458.9 565.1 419.131l292.613-292.668 39.825 39.824z"
}, null, -1), Hu = [
  zu,
  xu,
  Cu
];
function Mu(e, t, a, r, l, o) {
  return n(), s("svg", $u, Hu);
}
var Vu = /* @__PURE__ */ i(gu, [["render", Mu], ["__file", "male.vue"]]), yu = {
  name: "Management"
}, Bu = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Lu = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M576 128v288l96-96 96 96V128h128v768H320V128h256zm-448 0h128v768H128V128z"
}, null, -1), Au = [
  Lu
];
function bu(e, t, a, r, l, o) {
  return n(), s("svg", Bu, Au);
}
var ku = /* @__PURE__ */ i(yu, [["render", bu], ["__file", "management.vue"]]), Su = {
  name: "MapLocation"
}, qu = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Fu = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
}, null, -1), Ou = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M512 448a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256zm345.6 192L960 960H672v-64H352v64H64l102.4-256h691.2zm-68.928 0H235.328l-76.8 192h706.944l-76.8-192z"
}, null, -1), Pu = [
  Fu,
  Ou
];
function Tu(e, t, a, r, l, o) {
  return n(), s("svg", qu, Pu);
}
var Du = /* @__PURE__ */ i(Su, [["render", Tu], ["__file", "map-location.vue"]]), Eu = {
  name: "Medal"
}, Iu = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Nu = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M512 896a256 256 0 1 0 0-512 256 256 0 0 0 0 512zm0 64a320 320 0 1 1 0-640 320 320 0 0 1 0 640z"
}, null, -1), Ru = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M576 128H448v200a286.72 286.72 0 0 1 64-8c19.52 0 40.832 2.688 64 8V128zm64 0v219.648c24.448 9.088 50.56 20.416 78.4 33.92L757.44 128H640zm-256 0H266.624l39.04 253.568c27.84-13.504 53.888-24.832 78.336-33.92V128zM229.312 64h565.376a32 32 0 0 1 31.616 36.864L768 480c-113.792-64-199.104-96-256-96-56.896 0-142.208 32-256 96l-58.304-379.136A32 32 0 0 1 229.312 64z"
}, null, -1), Uu = [
  Nu,
  Ru
];
function Wu(e, t, a, r, l, o) {
  return n(), s("svg", Iu, Uu);
}
var Gu = /* @__PURE__ */ i(Eu, [["render", Wu], ["__file", "medal.vue"]]), ju = {
  name: "Memo"
}, Zu = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024",
  style: { "enable-background": "new 0 0 1024 1024" },
  "xml:space": "preserve"
}, Qu = /* @__PURE__ */ _("path", {
  d: "M480 320h192c21.33 0 32-10.67 32-32s-10.67-32-32-32H480c-21.33 0-32 10.67-32 32s10.67 32 32 32z",
  fill: "currentColor"
}, null, -1), Ku = /* @__PURE__ */ _("path", {
  d: "M887.01 72.99C881.01 67 873.34 64 864 64H160c-9.35 0-17.02 3-23.01 8.99C131 78.99 128 86.66 128 96v832c0 9.35 2.99 17.02 8.99 23.01S150.66 960 160 960h704c9.35 0 17.02-2.99 23.01-8.99S896 937.34 896 928V96c0-9.35-3-17.02-8.99-23.01zM192 896V128h96v768h-96zm640 0H352V128h480v768z",
  fill: "currentColor"
}, null, -1), Ju = /* @__PURE__ */ _("path", {
  d: "M480 512h192c21.33 0 32-10.67 32-32s-10.67-32-32-32H480c-21.33 0-32 10.67-32 32s10.67 32 32 32zm0 192h192c21.33 0 32-10.67 32-32s-10.67-32-32-32H480c-21.33 0-32 10.67-32 32s10.67 32 32 32z",
  fill: "currentColor"
}, null, -1), Xu = [
  Qu,
  Ku,
  Ju
];
function Yu(e, t, a, r, l, o) {
  return n(), s("svg", Zu, Xu);
}
var ed = /* @__PURE__ */ i(ju, [["render", Yu], ["__file", "memo.vue"]]), td = {
  name: "Menu"
}, ad = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _d = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M160 448a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32H160zm448 0a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32H608zM160 896a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32H160zm448 0a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32H608z"
}, null, -1), rd = [
  _d
];
function ld(e, t, a, r, l, o) {
  return n(), s("svg", ad, rd);
}
var od = /* @__PURE__ */ i(td, [["render", ld], ["__file", "menu.vue"]]), nd = {
  name: "MessageBox"
}, sd = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, id = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M288 384h448v64H288v-64zm96-128h256v64H384v-64zM131.456 512H384v128h256V512h252.544L721.856 192H302.144L131.456 512zM896 576H704v128H320V576H128v256h768V576zM275.776 128h472.448a32 32 0 0 1 28.608 17.664l179.84 359.552A32 32 0 0 1 960 519.552V864a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V519.552a32 32 0 0 1 3.392-14.336l179.776-359.552A32 32 0 0 1 275.776 128z"
}, null, -1), ud = [
  id
];
function dd(e, t, a, r, l, o) {
  return n(), s("svg", sd, ud);
}
var vd = /* @__PURE__ */ i(nd, [["render", dd], ["__file", "message-box.vue"]]), cd = {
  name: "Message"
}, hd = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, pd = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M128 224v512a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V224H128zm0-64h768a64 64 0 0 1 64 64v512a128 128 0 0 1-128 128H192A128 128 0 0 1 64 736V224a64 64 0 0 1 64-64z"
}, null, -1), fd = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M904 224 656.512 506.88a192 192 0 0 1-289.024 0L120 224h784zm-698.944 0 210.56 240.704a128 128 0 0 0 192.704 0L818.944 224H205.056z"
}, null, -1), wd = [
  pd,
  fd
];
function md(e, t, a, r, l, o) {
  return n(), s("svg", hd, wd);
}
var gd = /* @__PURE__ */ i(cd, [["render", md], ["__file", "message.vue"]]), $d = {
  name: "Mic"
}, zd = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, xd = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M480 704h160a64 64 0 0 0 64-64v-32h-96a32 32 0 0 1 0-64h96v-96h-96a32 32 0 0 1 0-64h96v-96h-96a32 32 0 0 1 0-64h96v-32a64 64 0 0 0-64-64H384a64 64 0 0 0-64 64v32h96a32 32 0 0 1 0 64h-96v96h96a32 32 0 0 1 0 64h-96v96h96a32 32 0 0 1 0 64h-96v32a64 64 0 0 0 64 64h96zm64 64v128h192a32 32 0 1 1 0 64H288a32 32 0 1 1 0-64h192V768h-96a128 128 0 0 1-128-128V192A128 128 0 0 1 384 64h256a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128h-96z"
}, null, -1), Cd = [
  xd
];
function Hd(e, t, a, r, l, o) {
  return n(), s("svg", zd, Cd);
}
var Md = /* @__PURE__ */ i($d, [["render", Hd], ["__file", "mic.vue"]]), Vd = {
  name: "Microphone"
}, yd = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Bd = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M512 128a128 128 0 0 0-128 128v256a128 128 0 1 0 256 0V256a128 128 0 0 0-128-128zm0-64a192 192 0 0 1 192 192v256a192 192 0 1 1-384 0V256A192 192 0 0 1 512 64zm-32 832v-64a288 288 0 0 1-288-288v-32a32 32 0 0 1 64 0v32a224 224 0 0 0 224 224h64a224 224 0 0 0 224-224v-32a32 32 0 1 1 64 0v32a288 288 0 0 1-288 288v64h64a32 32 0 1 1 0 64H416a32 32 0 1 1 0-64h64z"
}, null, -1), Ld = [
  Bd
];
function Ad(e, t, a, r, l, o) {
  return n(), s("svg", yd, Ld);
}
var bd = /* @__PURE__ */ i(Vd, [["render", Ad], ["__file", "microphone.vue"]]), kd = {
  name: "MilkTea"
}, Sd = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, qd = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M416 128V96a96 96 0 0 1 96-96h128a32 32 0 1 1 0 64H512a32 32 0 0 0-32 32v32h320a96 96 0 0 1 11.712 191.296l-39.68 581.056A64 64 0 0 1 708.224 960H315.776a64 64 0 0 1-63.872-59.648l-39.616-581.056A96 96 0 0 1 224 128h192zM276.48 320l39.296 576h392.448l4.8-70.784a224.064 224.064 0 0 1 30.016-439.808L747.52 320H276.48zM224 256h576a32 32 0 1 0 0-64H224a32 32 0 0 0 0 64zm493.44 503.872 21.12-309.12a160 160 0 0 0-21.12 309.12z"
}, null, -1), Fd = [
  qd
];
function Od(e, t, a, r, l, o) {
  return n(), s("svg", Sd, Fd);
}
var Pd = /* @__PURE__ */ i(kd, [["render", Od], ["__file", "milk-tea.vue"]]), Td = {
  name: "Minus"
}, Dd = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ed = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64z"
}, null, -1), Id = [
  Ed
];
function Nd(e, t, a, r, l, o) {
  return n(), s("svg", Dd, Id);
}
var Rd = /* @__PURE__ */ i(Td, [["render", Nd], ["__file", "minus.vue"]]), Ud = {
  name: "Money"
}, Wd = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Gd = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M256 640v192h640V384H768v-64h150.976c14.272 0 19.456 1.472 24.64 4.288a29.056 29.056 0 0 1 12.16 12.096c2.752 5.184 4.224 10.368 4.224 24.64v493.952c0 14.272-1.472 19.456-4.288 24.64a29.056 29.056 0 0 1-12.096 12.16c-5.184 2.752-10.368 4.224-24.64 4.224H233.024c-14.272 0-19.456-1.472-24.64-4.288a29.056 29.056 0 0 1-12.16-12.096c-2.688-5.184-4.224-10.368-4.224-24.576V640h64z"
}, null, -1), jd = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M768 192H128v448h640V192zm64-22.976v493.952c0 14.272-1.472 19.456-4.288 24.64a29.056 29.056 0 0 1-12.096 12.16c-5.184 2.752-10.368 4.224-24.64 4.224H105.024c-14.272 0-19.456-1.472-24.64-4.288a29.056 29.056 0 0 1-12.16-12.096C65.536 682.432 64 677.248 64 663.04V169.024c0-14.272 1.472-19.456 4.288-24.64a29.056 29.056 0 0 1 12.096-12.16C85.568 129.536 90.752 128 104.96 128h685.952c14.272 0 19.456 1.472 24.64 4.288a29.056 29.056 0 0 1 12.16 12.096c2.752 5.184 4.224 10.368 4.224 24.64z"
}, null, -1), Zd = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M448 576a160 160 0 1 1 0-320 160 160 0 0 1 0 320zm0-64a96 96 0 1 0 0-192 96 96 0 0 0 0 192z"
}, null, -1), Qd = [
  Gd,
  jd,
  Zd
];
function Kd(e, t, a, r, l, o) {
  return n(), s("svg", Wd, Qd);
}
var Jd = /* @__PURE__ */ i(Ud, [["render", Kd], ["__file", "money.vue"]]), Xd = {
  name: "Monitor"
}, Yd = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ev = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M544 768v128h192a32 32 0 1 1 0 64H288a32 32 0 1 1 0-64h192V768H192A128 128 0 0 1 64 640V256a128 128 0 0 1 128-128h640a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128H544zM192 192a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H192z"
}, null, -1), tv = [
  ev
];
function av(e, t, a, r, l, o) {
  return n(), s("svg", Yd, tv);
}
var _v = /* @__PURE__ */ i(Xd, [["render", av], ["__file", "monitor.vue"]]), rv = {
  name: "MoonNight"
}, lv = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ov = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M384 512a448 448 0 0 1 215.872-383.296A384 384 0 0 0 213.76 640h188.8A448.256 448.256 0 0 1 384 512zM171.136 704a448 448 0 0 1 636.992-575.296A384 384 0 0 0 499.328 704h-328.32z"
}, null, -1), nv = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M32 640h960q32 0 32 32t-32 32H32q-32 0-32-32t32-32zm128 128h384a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm160 127.68 224 .256a32 32 0 0 1 32 32V928a32 32 0 0 1-32 32l-224-.384a32 32 0 0 1-32-32v-.064a32 32 0 0 1 32-32z"
}, null, -1), sv = [
  ov,
  nv
];
function iv(e, t, a, r, l, o) {
  return n(), s("svg", lv, sv);
}
var uv = /* @__PURE__ */ i(rv, [["render", iv], ["__file", "moon-night.vue"]]), dv = {
  name: "Moon"
}, vv = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, cv = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M240.448 240.448a384 384 0 1 0 559.424 525.696 448 448 0 0 1-542.016-542.08 390.592 390.592 0 0 0-17.408 16.384zm181.056 362.048a384 384 0 0 0 525.632 16.384A448 448 0 1 1 405.056 76.8a384 384 0 0 0 16.448 525.696z"
}, null, -1), hv = [
  cv
];
function pv(e, t, a, r, l, o) {
  return n(), s("svg", vv, hv);
}
var fv = /* @__PURE__ */ i(dv, [["render", pv], ["__file", "moon.vue"]]), wv = {
  name: "MoreFilled"
}, mv = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, gv = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M176 416a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224z"
}, null, -1), $v = [
  gv
];
function zv(e, t, a, r, l, o) {
  return n(), s("svg", mv, $v);
}
var xv = /* @__PURE__ */ i(wv, [["render", zv], ["__file", "more-filled.vue"]]), Cv = {
  name: "More"
}, Hv = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Mv = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M176 416a112 112 0 1 0 0 224 112 112 0 0 0 0-224m0 64a48 48 0 1 1 0 96 48 48 0 0 1 0-96zm336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96zm336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96z"
}, null, -1), Vv = [
  Mv
];
function yv(e, t, a, r, l, o) {
  return n(), s("svg", Hv, Vv);
}
var Bv = /* @__PURE__ */ i(Cv, [["render", yv], ["__file", "more.vue"]]), Lv = {
  name: "MostlyCloudy"
}, Av = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, bv = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M737.216 357.952 704 349.824l-11.776-32a192.064 192.064 0 0 0-367.424 23.04l-8.96 39.04-39.04 8.96A192.064 192.064 0 0 0 320 768h368a207.808 207.808 0 0 0 207.808-208 208.32 208.32 0 0 0-158.592-202.048zm15.168-62.208A272.32 272.32 0 0 1 959.744 560a271.808 271.808 0 0 1-271.552 272H320a256 256 0 0 1-57.536-505.536 256.128 256.128 0 0 1 489.92-30.72z"
}, null, -1), kv = [
  bv
];
function Sv(e, t, a, r, l, o) {
  return n(), s("svg", Av, kv);
}
var qv = /* @__PURE__ */ i(Lv, [["render", Sv], ["__file", "mostly-cloudy.vue"]]), Fv = {
  name: "Mouse"
}, Ov = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Pv = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M438.144 256c-68.352 0-92.736 4.672-117.76 18.112-20.096 10.752-35.52 26.176-46.272 46.272C260.672 345.408 256 369.792 256 438.144v275.712c0 68.352 4.672 92.736 18.112 117.76 10.752 20.096 26.176 35.52 46.272 46.272C345.408 891.328 369.792 896 438.144 896h147.712c68.352 0 92.736-4.672 117.76-18.112 20.096-10.752 35.52-26.176 46.272-46.272C763.328 806.592 768 782.208 768 713.856V438.144c0-68.352-4.672-92.736-18.112-117.76a110.464 110.464 0 0 0-46.272-46.272C678.592 260.672 654.208 256 585.856 256H438.144zm0-64h147.712c85.568 0 116.608 8.96 147.904 25.6 31.36 16.768 55.872 41.344 72.576 72.64C823.104 321.536 832 352.576 832 438.08v275.84c0 85.504-8.96 116.544-25.6 147.84a174.464 174.464 0 0 1-72.64 72.576C702.464 951.104 671.424 960 585.92 960H438.08c-85.504 0-116.544-8.96-147.84-25.6a174.464 174.464 0 0 1-72.64-72.704c-16.768-31.296-25.664-62.336-25.664-147.84v-275.84c0-85.504 8.96-116.544 25.6-147.84a174.464 174.464 0 0 1 72.768-72.576c31.232-16.704 62.272-25.6 147.776-25.6z"
}, null, -1), Tv = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M512 320q32 0 32 32v128q0 32-32 32t-32-32V352q0-32 32-32zm32-96a32 32 0 0 1-64 0v-64a32 32 0 0 0-32-32h-96a32 32 0 0 1 0-64h96a96 96 0 0 1 96 96v64z"
}, null, -1), Dv = [
  Pv,
  Tv
];
function Ev(e, t, a, r, l, o) {
  return n(), s("svg", Ov, Dv);
}
var Iv = /* @__PURE__ */ i(Fv, [["render", Ev], ["__file", "mouse.vue"]]), Nv = {
  name: "Mug"
}, Rv = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Uv = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M736 800V160H160v640a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64zm64-544h63.552a96 96 0 0 1 96 96v224a96 96 0 0 1-96 96H800v128a128 128 0 0 1-128 128H224A128 128 0 0 1 96 800V128a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v128zm0 64v288h63.552a32 32 0 0 0 32-32V352a32 32 0 0 0-32-32H800z"
}, null, -1), Wv = [
  Uv
];
function Gv(e, t, a, r, l, o) {
  return n(), s("svg", Rv, Wv);
}
var jv = /* @__PURE__ */ i(Nv, [["render", Gv], ["__file", "mug.vue"]]), Zv = {
  name: "MuteNotification"
}, Qv = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Kv = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "m241.216 832 63.616-64H768V448c0-42.368-10.24-82.304-28.48-117.504l46.912-47.232C815.36 331.392 832 387.84 832 448v320h96a32 32 0 1 1 0 64H241.216zm-90.24 0H96a32 32 0 1 1 0-64h96V448a320.128 320.128 0 0 1 256-313.6V128a64 64 0 1 1 128 0v6.4a319.552 319.552 0 0 1 171.648 97.088l-45.184 45.44A256 256 0 0 0 256 448v278.336L151.04 832zM448 896h128a64 64 0 0 1-128 0z"
}, null, -1), Jv = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M150.72 859.072a32 32 0 0 1-45.44-45.056l704-708.544a32 32 0 0 1 45.44 45.056l-704 708.544z"
}, null, -1), Xv = [
  Kv,
  Jv
];
function Yv(e, t, a, r, l, o) {
  return n(), s("svg", Qv, Xv);
}
var ec = /* @__PURE__ */ i(Zv, [["render", Yv], ["__file", "mute-notification.vue"]]), tc = {
  name: "Mute"
}, ac = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _c = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "m412.16 592.128-45.44 45.44A191.232 191.232 0 0 1 320 512V256a192 192 0 1 1 384 0v44.352l-64 64V256a128 128 0 1 0-256 0v256c0 30.336 10.56 58.24 28.16 80.128zm51.968 38.592A128 128 0 0 0 640 512v-57.152l64-64V512a192 192 0 0 1-287.68 166.528l47.808-47.808zM314.88 779.968l46.144-46.08A222.976 222.976 0 0 0 480 768h64a224 224 0 0 0 224-224v-32a32 32 0 1 1 64 0v32a288 288 0 0 1-288 288v64h64a32 32 0 1 1 0 64H416a32 32 0 1 1 0-64h64v-64c-61.44 0-118.4-19.2-165.12-52.032zM266.752 737.6A286.976 286.976 0 0 1 192 544v-32a32 32 0 0 1 64 0v32c0 56.832 21.184 108.8 56.064 148.288L266.752 737.6z"
}, null, -1), rc = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M150.72 859.072a32 32 0 0 1-45.44-45.056l704-708.544a32 32 0 0 1 45.44 45.056l-704 708.544z"
}, null, -1), lc = [
  _c,
  rc
];
function oc(e, t, a, r, l, o) {
  return n(), s("svg", ac, lc);
}
var nc = /* @__PURE__ */ i(tc, [["render", oc], ["__file", "mute.vue"]]), sc = {
  name: "NoSmoking"
}, ic = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, uc = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M440.256 576H256v128h56.256l-64 64H224a32 32 0 0 1-32-32V544a32 32 0 0 1 32-32h280.256l-64 64zm143.488 128H704V583.744L775.744 512H928a32 32 0 0 1 32 32v192a32 32 0 0 1-32 32H519.744l64-64zM768 576v128h128V576H768zm-29.696-207.552 45.248 45.248-497.856 497.856-45.248-45.248zM256 64h64v320h-64zM128 192h64v192h-64zM64 512h64v256H64z"
}, null, -1), dc = [
  uc
];
function vc(e, t, a, r, l, o) {
  return n(), s("svg", ic, dc);
}
var cc = /* @__PURE__ */ i(sc, [["render", vc], ["__file", "no-smoking.vue"]]), hc = {
  name: "Notebook"
}, pc = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, fc = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M192 128v768h640V128H192zm-32-64h704a32 32 0 0 1 32 32v832a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z"
}, null, -1), wc = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M672 128h64v768h-64zM96 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm0 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm0 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm0 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32z"
}, null, -1), mc = [
  fc,
  wc
];
function gc(e, t, a, r, l, o) {
  return n(), s("svg", pc, mc);
}
var $c = /* @__PURE__ */ i(hc, [["render", gc], ["__file", "notebook.vue"]]), zc = {
  name: "Notification"
}, xc = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Cc = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M512 128v64H256a64 64 0 0 0-64 64v512a64 64 0 0 0 64 64h512a64 64 0 0 0 64-64V512h64v256a128 128 0 0 1-128 128H256a128 128 0 0 1-128-128V256a128 128 0 0 1 128-128h256z"
}, null, -1), Hc = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M768 384a128 128 0 1 0 0-256 128 128 0 0 0 0 256zm0 64a192 192 0 1 1 0-384 192 192 0 0 1 0 384z"
}, null, -1), Mc = [
  Cc,
  Hc
];
function Vc(e, t, a, r, l, o) {
  return n(), s("svg", xc, Mc);
}
var yc = /* @__PURE__ */ i(zc, [["render", Vc], ["__file", "notification.vue"]]), Bc = {
  name: "Odometer"
}, Lc = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ac = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), bc = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M192 512a320 320 0 1 1 640 0 32 32 0 1 1-64 0 256 256 0 1 0-512 0 32 32 0 0 1-64 0z"
}, null, -1), kc = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M570.432 627.84A96 96 0 1 1 509.568 608l60.992-187.776A32 32 0 1 1 631.424 440l-60.992 187.776zM502.08 734.464a32 32 0 1 0 19.84-60.928 32 32 0 0 0-19.84 60.928z"
}, null, -1), Sc = [
  Ac,
  bc,
  kc
];
function qc(e, t, a, r, l, o) {
  return n(), s("svg", Lc, Sc);
}
var Fc = /* @__PURE__ */ i(Bc, [["render", qc], ["__file", "odometer.vue"]]), Oc = {
  name: "OfficeBuilding"
}, Pc = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Tc = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M192 128v704h384V128H192zm-32-64h448a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z"
}, null, -1), Dc = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M256 256h256v64H256v-64zm0 192h256v64H256v-64zm0 192h256v64H256v-64zm384-128h128v64H640v-64zm0 128h128v64H640v-64zM64 832h896v64H64v-64z"
}, null, -1), Ec = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M640 384v448h192V384H640zm-32-64h256a32 32 0 0 1 32 32v512a32 32 0 0 1-32 32H608a32 32 0 0 1-32-32V352a32 32 0 0 1 32-32z"
}, null, -1), Ic = [
  Tc,
  Dc,
  Ec
];
function Nc(e, t, a, r, l, o) {
  return n(), s("svg", Pc, Ic);
}
var Rc = /* @__PURE__ */ i(Oc, [["render", Nc], ["__file", "office-building.vue"]]), Uc = {
  name: "Open"
}, Wc = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Gc = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M329.956 257.138a254.862 254.862 0 0 0 0 509.724h364.088a254.862 254.862 0 0 0 0-509.724H329.956zm0-72.818h364.088a327.68 327.68 0 1 1 0 655.36H329.956a327.68 327.68 0 1 1 0-655.36z"
}, null, -1), jc = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M694.044 621.227a109.227 109.227 0 1 0 0-218.454 109.227 109.227 0 0 0 0 218.454zm0 72.817a182.044 182.044 0 1 1 0-364.088 182.044 182.044 0 0 1 0 364.088z"
}, null, -1), Zc = [
  Gc,
  jc
];
function Qc(e, t, a, r, l, o) {
  return n(), s("svg", Wc, Zc);
}
var Kc = /* @__PURE__ */ i(Uc, [["render", Qc], ["__file", "open.vue"]]), Jc = {
  name: "Operation"
}, Xc = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Yc = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M389.44 768a96.064 96.064 0 0 1 181.12 0H896v64H570.56a96.064 96.064 0 0 1-181.12 0H128v-64h261.44zm192-288a96.064 96.064 0 0 1 181.12 0H896v64H762.56a96.064 96.064 0 0 1-181.12 0H128v-64h453.44zm-320-288a96.064 96.064 0 0 1 181.12 0H896v64H442.56a96.064 96.064 0 0 1-181.12 0H128v-64h133.44z"
}, null, -1), e7 = [
  Yc
];
function t7(e, t, a, r, l, o) {
  return n(), s("svg", Xc, e7);
}
var a7 = /* @__PURE__ */ i(Jc, [["render", t7], ["__file", "operation.vue"]]), _7 = {
  name: "Opportunity"
}, r7 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, l7 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M384 960v-64h192.064v64H384zm448-544a350.656 350.656 0 0 1-128.32 271.424C665.344 719.04 640 763.776 640 813.504V832H320v-14.336c0-48-19.392-95.36-57.216-124.992a351.552 351.552 0 0 1-128.448-344.256c25.344-136.448 133.888-248.128 269.76-276.48A352.384 352.384 0 0 1 832 416zm-544 32c0-132.288 75.904-224 192-224v-64c-154.432 0-256 122.752-256 288h64z"
}, null, -1), o7 = [
  l7
];
function n7(e, t, a, r, l, o) {
  return n(), s("svg", r7, o7);
}
var s7 = /* @__PURE__ */ i(_7, [["render", n7], ["__file", "opportunity.vue"]]), i7 = {
  name: "Orange"
}, u7 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, d7 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M544 894.72a382.336 382.336 0 0 0 215.936-89.472L577.024 622.272c-10.24 6.016-21.248 10.688-33.024 13.696v258.688zm261.248-134.784A382.336 382.336 0 0 0 894.656 544H635.968c-3.008 11.776-7.68 22.848-13.696 33.024l182.976 182.912zM894.656 480a382.336 382.336 0 0 0-89.408-215.936L622.272 446.976c6.016 10.24 10.688 21.248 13.696 33.024h258.688zm-134.72-261.248A382.336 382.336 0 0 0 544 129.344v258.688c11.776 3.008 22.848 7.68 33.024 13.696l182.912-182.976zM480 129.344a382.336 382.336 0 0 0-215.936 89.408l182.912 182.976c10.24-6.016 21.248-10.688 33.024-13.696V129.344zm-261.248 134.72A382.336 382.336 0 0 0 129.344 480h258.688c3.008-11.776 7.68-22.848 13.696-33.024L218.752 264.064zM129.344 544a382.336 382.336 0 0 0 89.408 215.936l182.976-182.912A127.232 127.232 0 0 1 388.032 544H129.344zm134.72 261.248A382.336 382.336 0 0 0 480 894.656V635.968a127.232 127.232 0 0 1-33.024-13.696L264.064 805.248zM512 960a448 448 0 1 1 0-896 448 448 0 0 1 0 896zm0-384a64 64 0 1 0 0-128 64 64 0 0 0 0 128z"
}, null, -1), v7 = [
  d7
];
function c7(e, t, a, r, l, o) {
  return n(), s("svg", u7, v7);
}
var h7 = /* @__PURE__ */ i(i7, [["render", c7], ["__file", "orange.vue"]]), p7 = {
  name: "Paperclip"
}, f7 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, w7 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M602.496 240.448A192 192 0 1 1 874.048 512l-316.8 316.8A256 256 0 0 1 195.2 466.752L602.496 59.456l45.248 45.248L240.448 512A192 192 0 0 0 512 783.552l316.8-316.8a128 128 0 1 0-181.056-181.056L353.6 579.904a32 32 0 1 0 45.248 45.248l294.144-294.144 45.312 45.248L444.096 670.4a96 96 0 1 1-135.744-135.744l294.144-294.208z"
}, null, -1), m7 = [
  w7
];
function g7(e, t, a, r, l, o) {
  return n(), s("svg", f7, m7);
}
var $7 = /* @__PURE__ */ i(p7, [["render", g7], ["__file", "paperclip.vue"]]), z7 = {
  name: "PartlyCloudy"
}, x7 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, C7 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M598.4 895.872H328.192a256 256 0 0 1-34.496-510.528A352 352 0 1 1 598.4 895.872zm-271.36-64h272.256a288 288 0 1 0-248.512-417.664L335.04 445.44l-34.816 3.584a192 192 0 0 0 26.88 382.848z"
}, null, -1), H7 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M139.84 501.888a256 256 0 1 1 417.856-277.12c-17.728 2.176-38.208 8.448-61.504 18.816A192 192 0 1 0 189.12 460.48a6003.84 6003.84 0 0 0-49.28 41.408z"
}, null, -1), M7 = [
  C7,
  H7
];
function V7(e, t, a, r, l, o) {
  return n(), s("svg", x7, M7);
}
var y7 = /* @__PURE__ */ i(z7, [["render", V7], ["__file", "partly-cloudy.vue"]]), B7 = {
  name: "Pear"
}, L7 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, A7 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M542.336 258.816a443.255 443.255 0 0 0-9.024 25.088 32 32 0 1 1-60.8-20.032l1.088-3.328a162.688 162.688 0 0 0-122.048 131.392l-17.088 102.72-20.736 15.36C256.192 552.704 224 610.88 224 672c0 120.576 126.4 224 288 224s288-103.424 288-224c0-61.12-32.192-119.296-89.728-161.92l-20.736-15.424-17.088-102.72a162.688 162.688 0 0 0-130.112-133.12zm-40.128-66.56c7.936-15.552 16.576-30.08 25.92-43.776 23.296-33.92 49.408-59.776 78.528-77.12a32 32 0 1 1 32.704 55.04c-20.544 12.224-40.064 31.552-58.432 58.304a316.608 316.608 0 0 0-9.792 15.104 226.688 226.688 0 0 1 164.48 181.568l12.8 77.248C819.456 511.36 864 587.392 864 672c0 159.04-157.568 288-352 288S160 831.04 160 672c0-84.608 44.608-160.64 115.584-213.376l12.8-77.248a226.624 226.624 0 0 1 213.76-189.184z"
}, null, -1), b7 = [
  A7
];
function k7(e, t, a, r, l, o) {
  return n(), s("svg", L7, b7);
}
var S7 = /* @__PURE__ */ i(B7, [["render", k7], ["__file", "pear.vue"]]), q7 = {
  name: "PhoneFilled"
}, F7 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, O7 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M199.232 125.568 90.624 379.008a32 32 0 0 0 6.784 35.2l512.384 512.384a32 32 0 0 0 35.2 6.784l253.44-108.608a32 32 0 0 0 10.048-52.032L769.6 633.92a32 32 0 0 0-36.928-5.952l-130.176 65.088-271.488-271.552 65.024-130.176a32 32 0 0 0-5.952-36.928L251.2 115.52a32 32 0 0 0-51.968 10.048z"
}, null, -1), P7 = [
  O7
];
function T7(e, t, a, r, l, o) {
  return n(), s("svg", F7, P7);
}
var D7 = /* @__PURE__ */ i(q7, [["render", T7], ["__file", "phone-filled.vue"]]), E7 = {
  name: "Phone"
}, I7 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, N7 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M79.36 432.256 591.744 944.64a32 32 0 0 0 35.2 6.784l253.44-108.544a32 32 0 0 0 9.984-52.032l-153.856-153.92a32 32 0 0 0-36.928-6.016l-69.888 34.944L358.08 394.24l35.008-69.888a32 32 0 0 0-5.952-36.928L233.152 133.568a32 32 0 0 0-52.032 10.048L72.512 397.056a32 32 0 0 0 6.784 35.2zm60.48-29.952 81.536-190.08L325.568 316.48l-24.64 49.216-20.608 41.216 32.576 32.64 271.552 271.552 32.64 32.64 41.216-20.672 49.28-24.576 104.192 104.128-190.08 81.472L139.84 402.304zM512 320v-64a256 256 0 0 1 256 256h-64a192 192 0 0 0-192-192zm0-192V64a448 448 0 0 1 448 448h-64a384 384 0 0 0-384-384z"
}, null, -1), R7 = [
  N7
];
function U7(e, t, a, r, l, o) {
  return n(), s("svg", I7, R7);
}
var W7 = /* @__PURE__ */ i(E7, [["render", U7], ["__file", "phone.vue"]]), G7 = {
  name: "PictureFilled"
}, j7 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Z7 = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M96 896a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h832a32 32 0 0 1 32 32v704a32 32 0 0 1-32 32H96zm315.52-228.48-68.928-68.928a32 32 0 0 0-45.248 0L128 768.064h778.688l-242.112-290.56a32 32 0 0 0-49.216 0L458.752 665.408a32 32 0 0 1-47.232 2.112zM256 384a96 96 0 1 0 192.064-.064A96 96 0 0 0 256 384z"
}, null, -1), Q7 = [
  Z7
];
function K7(e, t, a, r, l, o) {
  return n(), s("svg", j7, Q7);
}
var J7 = /* @__PURE__ */ i(G7, [["render", K7], ["__file", "picture-filled.vue"]]), X7 = {
  name: "PictureRounded"
}, Y7 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, eh = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M512 128a384 384 0 1 0 0 768 384 384 0 0 0 0-768zm0-64a448 448 0 1 1 0 896 448 448 0 0 1 0-896z"
}, null, -1), th = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M640 288q64 0 64 64t-64 64q-64 0-64-64t64-64zM214.656 790.656l-45.312-45.312 185.664-185.6a96 96 0 0 1 123.712-10.24l138.24 98.688a32 32 0 0 0 39.872-2.176L906.688 422.4l42.624 47.744L699.52 693.696a96 96 0 0 1-119.808 6.592l-138.24-98.752a32 32 0 0 0-41.152 3.456l-185.664 185.6z"
}, null, -1), ah = [
  eh,
  th
];
function _h(e, t, a, r, l, o) {
  return n(), s("svg", Y7, ah);
}
var rh = /* @__PURE__ */ i(X7, [["render", _h], ["__file", "picture-rounded.vue"]]), lh = {
  name: "Picture"
}, oh = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, nh = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M160 160v704h704V160H160zm-32-64h768a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H128a32 32 0 0 1-32-32V128a32 32 0 0 1 32-32z"
}, null, -1), sh = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M384 288q64 0 64 64t-64 64q-64 0-64-64t64-64zM185.408 876.992l-50.816-38.912L350.72 556.032a96 96 0 0 1 134.592-17.856l1.856 1.472 122.88 99.136a32 32 0 0 0 44.992-4.864l216-269.888 49.92 39.936-215.808 269.824-.256.32a96 96 0 0 1-135.04 14.464l-122.88-99.072-.64-.512a32 32 0 0 0-44.8 5.952L185.408 876.992z"
}, null, -1), ih = [
  nh,
  sh
];
function uh(e, t, a, r, l, o) {
  return n(), s("svg", oh, ih);
}
var dh = /* @__PURE__ */ i(lh, [["render", uh], ["__file", "picture.vue"]]), vh = {
  name: "PieChart"
}, ch = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, hh = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M448 68.48v64.832A384.128 384.128 0 0 0 512 896a384.128 384.128 0 0 0 378.688-320h64.768A448.128 448.128 0 0 1 64 512 448.128 448.128 0 0 1 448 68.48z"
}, null, -1), ph = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M576 97.28V448h350.72A384.064 384.064 0 0 0 576 97.28zM512 64V33.152A448 448 0 0 1 990.848 512H512V64z"
}, null, -1), fh = [
  hh,
  ph
];
function wh(e, t, a, r, l, o) {
  return n(), s("svg", ch, fh);
}
var mh = /* @__PURE__ */ i(vh, [["render", wh], ["__file", "pie-chart.vue"]]), gh = {
  name: "Place"
}, $h = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, zh = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512z"
}, null, -1), xh = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M512 512a32 32 0 0 1 32 32v256a32 32 0 1 1-64 0V544a32 32 0 0 1 32-32z"
}, null, -1), Ch = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M384 649.088v64.96C269.76 732.352 192 771.904 192 800c0 37.696 139.904 96 320 96s320-58.304 320-96c0-28.16-77.76-67.648-192-85.952v-64.96C789.12 671.04 896 730.368 896 800c0 88.32-171.904 160-384 160s-384-71.68-384-160c0-69.696 106.88-128.96 256-150.912z"
}, null, -1), Hh = [
  zh,
  xh,
  Ch
];
function Mh(e, t, a, r, l, o) {
  return n(), s("svg", $h, Hh);
}
var Vh = /* @__PURE__ */ i(gh, [["render", Mh], ["__file", "place.vue"]]), yh = {
  name: "Platform"
}, Bh = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Lh = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M448 832v-64h128v64h192v64H256v-64h192zM128 704V128h768v576H128z"
}, null, -1), Ah = [
  Lh
];
function bh(e, t, a, r, l, o) {
  return n(), s("svg", Bh, Ah);
}
var kh = /* @__PURE__ */ i(yh, [["render", bh], ["__file", "platform.vue"]]), Sh = {
  name: "Plus"
}, qh = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Fh = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z"
}, null, -1), Oh = [
  Fh
];
function Ph(e, t, a, r, l, o) {
  return n(), s("svg", qh, Oh);
}
var Th = /* @__PURE__ */ i(Sh, [["render", Ph], ["__file", "plus.vue"]]), Dh = {
  name: "Pointer"
}, Eh = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ih = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M511.552 128c-35.584 0-64.384 28.8-64.384 64.448v516.48L274.048 570.88a94.272 94.272 0 0 0-112.896-3.456 44.416 44.416 0 0 0-8.96 62.208L332.8 870.4A64 64 0 0 0 384 896h512V575.232a64 64 0 0 0-45.632-61.312l-205.952-61.76A96 96 0 0 1 576 360.192V192.448C576 156.8 547.2 128 511.552 128zM359.04 556.8l24.128 19.2V192.448a128.448 128.448 0 1 1 256.832 0v167.744a32 32 0 0 0 22.784 30.656l206.016 61.76A128 128 0 0 1 960 575.232V896a64 64 0 0 1-64 64H384a128 128 0 0 1-102.4-51.2L101.056 668.032A108.416 108.416 0 0 1 128 512.512a158.272 158.272 0 0 1 185.984 8.32L359.04 556.8z"
}, null, -1), Nh = [
  Ih
];
function Rh(e, t, a, r, l, o) {
  return n(), s("svg", Eh, Nh);
}
var Uh = /* @__PURE__ */ i(Dh, [["render", Rh], ["__file", "pointer.vue"]]), Wh = {
  name: "Position"
}, Gh = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, jh = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "m249.6 417.088 319.744 43.072 39.168 310.272L845.12 178.88 249.6 417.088zm-129.024 47.168a32 32 0 0 1-7.68-61.44l777.792-311.04a32 32 0 0 1 41.6 41.6l-310.336 775.68a32 32 0 0 1-61.44-7.808L512 516.992l-391.424-52.736z"
}, null, -1), Zh = [
  jh
];
function Qh(e, t, a, r, l, o) {
  return n(), s("svg", Gh, Zh);
}
var Kh = /* @__PURE__ */ i(Wh, [["render", Qh], ["__file", "position.vue"]]), Jh = {
  name: "Postcard"
}, Xh = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Yh = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M160 224a32 32 0 0 0-32 32v512a32 32 0 0 0 32 32h704a32 32 0 0 0 32-32V256a32 32 0 0 0-32-32H160zm0-64h704a96 96 0 0 1 96 96v512a96 96 0 0 1-96 96H160a96 96 0 0 1-96-96V256a96 96 0 0 1 96-96z"
}, null, -1), ep = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M704 320a64 64 0 1 1 0 128 64 64 0 0 1 0-128zM288 448h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32zm0 128h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
}, null, -1), tp = [
  Yh,
  ep
];
function ap(e, t, a, r, l, o) {
  return n(), s("svg", Xh, tp);
}
var _p = /* @__PURE__ */ i(Jh, [["render", ap], ["__file", "postcard.vue"]]), rp = {
  name: "Pouring"
}, lp = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, op = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "m739.328 291.328-35.2-6.592-12.8-33.408a192.064 192.064 0 0 0-365.952 23.232l-9.92 40.896-41.472 7.04a176.32 176.32 0 0 0-146.24 173.568c0 97.28 78.72 175.936 175.808 175.936h400a192 192 0 0 0 35.776-380.672zM959.552 480a256 256 0 0 1-256 256h-400A239.808 239.808 0 0 1 63.744 496.192a240.32 240.32 0 0 1 199.488-236.8 256.128 256.128 0 0 1 487.872-30.976A256.064 256.064 0 0 1 959.552 480zM224 800a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32zm192 0a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32zm192 0a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32zm192 0a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32z"
}, null, -1), np = [
  op
];
function sp(e, t, a, r, l, o) {
  return n(), s("svg", lp, np);
}
var ip = /* @__PURE__ */ i(rp, [["render", sp], ["__file", "pouring.vue"]]), up = {
  name: "Present"
}, dp = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, vp = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M480 896V640H192v-64h288V320H192v576h288zm64 0h288V320H544v256h288v64H544v256zM128 256h768v672a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V256z"
}, null, -1), cp = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M96 256h832q32 0 32 32t-32 32H96q-32 0-32-32t32-32z"
}, null, -1), hp = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M416 256a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
}, null, -1), pp = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M608 256a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
}, null, -1), fp = [
  vp,
  cp,
  hp,
  pp
];
function wp(e, t, a, r, l, o) {
  return n(), s("svg", dp, fp);
}
var mp = /* @__PURE__ */ i(up, [["render", wp], ["__file", "present.vue"]]), gp = {
  name: "PriceTag"
}, $p = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, zp = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M224 318.336V896h576V318.336L552.512 115.84a64 64 0 0 0-81.024 0L224 318.336zM593.024 66.304l259.2 212.096A32 32 0 0 1 864 303.168V928a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V303.168a32 32 0 0 1 11.712-24.768l259.2-212.096a128 128 0 0 1 162.112 0z"
}, null, -1), xp = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M512 448a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
}, null, -1), Cp = [
  zp,
  xp
];
function Hp(e, t, a, r, l, o) {
  return n(), s("svg", $p, Cp);
}
var Mp = /* @__PURE__ */ i(gp, [["render", Hp], ["__file", "price-tag.vue"]]), Vp = {
  name: "Printer"
}, yp = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Bp = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M256 768H105.024c-14.272 0-19.456-1.472-24.64-4.288a29.056 29.056 0 0 1-12.16-12.096C65.536 746.432 64 741.248 64 727.04V379.072c0-42.816 4.48-58.304 12.8-73.984 8.384-15.616 20.672-27.904 36.288-36.288 15.68-8.32 31.168-12.8 73.984-12.8H256V64h512v192h68.928c42.816 0 58.304 4.48 73.984 12.8 15.616 8.384 27.904 20.672 36.288 36.288 8.32 15.68 12.8 31.168 12.8 73.984v347.904c0 14.272-1.472 19.456-4.288 24.64a29.056 29.056 0 0 1-12.096 12.16c-5.184 2.752-10.368 4.224-24.64 4.224H768v192H256V768zm64-192v320h384V576H320zm-64 128V512h512v192h128V379.072c0-29.376-1.408-36.48-5.248-43.776a23.296 23.296 0 0 0-10.048-10.048c-7.232-3.84-14.4-5.248-43.776-5.248H187.072c-29.376 0-36.48 1.408-43.776 5.248a23.296 23.296 0 0 0-10.048 10.048c-3.84 7.232-5.248 14.4-5.248 43.776V704h128zm64-448h384V128H320v128zm-64 128h64v64h-64v-64zm128 0h64v64h-64v-64z"
}, null, -1), Lp = [
  Bp
];
function Ap(e, t, a, r, l, o) {
  return n(), s("svg", yp, Lp);
}
var bp = /* @__PURE__ */ i(Vp, [["render", Ap], ["__file", "printer.vue"]]), kp = {
  name: "Promotion"
}, Sp = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, qp = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "m64 448 832-320-128 704-446.08-243.328L832 192 242.816 545.472 64 448zm256 512V657.024L512 768 320 960z"
}, null, -1), Fp = [
  qp
];
function Op(e, t, a, r, l, o) {
  return n(), s("svg", Sp, Fp);
}
var Pp = /* @__PURE__ */ i(kp, [["render", Op], ["__file", "promotion.vue"]]), Tp = {
  name: "QuartzWatch"
}, Dp = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024",
  style: { "enable-background": "new 0 0 1024 1024" },
  "xml:space": "preserve"
}, Ep = /* @__PURE__ */ _("path", {
  d: "M422.02 602.01v-.03c-6.68-5.99-14.35-8.83-23.01-8.51-8.67.32-16.17 3.66-22.5 10.02-6.33 6.36-9.5 13.7-9.5 22.02s3 15.82 8.99 22.5c8.68 8.68 19.02 11.35 31.01 8s19.49-10.85 22.5-22.5c3.01-11.65.51-22.15-7.49-31.49v-.01zM384 512c0-9.35-3-17.02-8.99-23.01-6-5.99-13.66-8.99-23.01-8.99-9.35 0-17.02 3-23.01 8.99-5.99 6-8.99 13.66-8.99 23.01s3 17.02 8.99 23.01c6 5.99 13.66 8.99 23.01 8.99 9.35 0 17.02-3 23.01-8.99 5.99-6 8.99-13.67 8.99-23.01zm6.53-82.49c11.65 3.01 22.15.51 31.49-7.49h.04c5.99-6.68 8.83-14.34 8.51-23.01-.32-8.67-3.66-16.16-10.02-22.5-6.36-6.33-13.7-9.5-22.02-9.5s-15.82 3-22.5 8.99c-8.68 8.69-11.35 19.02-8 31.01 3.35 11.99 10.85 19.49 22.5 22.5zm242.94 0c11.67-3.03 19.01-10.37 22.02-22.02 3.01-11.65.51-22.15-7.49-31.49h.01c-6.68-5.99-14.18-8.99-22.5-8.99s-15.66 3.16-22.02 9.5c-6.36 6.34-9.7 13.84-10.02 22.5-.32 8.66 2.52 16.33 8.51 23.01 9.32 8.02 19.82 10.52 31.49 7.49zM512 640c-9.35 0-17.02 3-23.01 8.99-5.99 6-8.99 13.66-8.99 23.01s3 17.02 8.99 23.01c6 5.99 13.67 8.99 23.01 8.99 9.35 0 17.02-3 23.01-8.99 5.99-6 8.99-13.66 8.99-23.01s-3-17.02-8.99-23.01c-6-5.99-13.66-8.99-23.01-8.99zm183.01-151.01c-6-5.99-13.66-8.99-23.01-8.99s-17.02 3-23.01 8.99c-5.99 6-8.99 13.66-8.99 23.01s3 17.02 8.99 23.01c6 5.99 13.66 8.99 23.01 8.99s17.02-3 23.01-8.99c5.99-6 8.99-13.67 8.99-23.01 0-9.35-3-17.02-8.99-23.01z",
  fill: "currentColor"
}, null, -1), Ip = /* @__PURE__ */ _("path", {
  d: "M832 512c-2-90.67-33.17-166.17-93.5-226.5-20.43-20.42-42.6-37.49-66.5-51.23V64H352v170.26c-23.9 13.74-46.07 30.81-66.5 51.24-60.33 60.33-91.49 135.83-93.5 226.5 2 90.67 33.17 166.17 93.5 226.5 20.43 20.43 42.6 37.5 66.5 51.24V960h320V789.74c23.9-13.74 46.07-30.81 66.5-51.24 60.33-60.34 91.49-135.83 93.5-226.5zM416 128h192v78.69c-29.85-9.03-61.85-13.93-96-14.69-34.15.75-66.15 5.65-96 14.68V128zm192 768H416v-78.68c29.85 9.03 61.85 13.93 96 14.68 34.15-.75 66.15-5.65 96-14.68V896zm-96-128c-72.66-2.01-132.99-27.01-180.99-75.01S258.01 584.66 256 512c2.01-72.66 27.01-132.99 75.01-180.99S439.34 258.01 512 256c72.66 2.01 132.99 27.01 180.99 75.01S765.99 439.34 768 512c-2.01 72.66-27.01 132.99-75.01 180.99S584.66 765.99 512 768z",
  fill: "currentColor"
}, null, -1), Np = /* @__PURE__ */ _("path", {
  d: "M512 320c-9.35 0-17.02 3-23.01 8.99-5.99 6-8.99 13.66-8.99 23.01 0 9.35 3 17.02 8.99 23.01 6 5.99 13.67 8.99 23.01 8.99 9.35 0 17.02-3 23.01-8.99 5.99-6 8.99-13.66 8.99-23.01 0-9.35-3-17.02-8.99-23.01-6-5.99-13.66-8.99-23.01-8.99zm112.99 273.5c-8.66-.32-16.33 2.52-23.01 8.51-7.98 9.32-10.48 19.82-7.49 31.49s10.49 19.17 22.5 22.5 22.35.66 31.01-8v.04c5.99-6.68 8.99-14.18 8.99-22.5s-3.16-15.66-9.5-22.02-13.84-9.7-22.5-10.02z",
  fill: "currentColor"
}, null, -1), Rp = [
  Ep,
  Ip,
  Np
];
function Up(e, t, a, r, l, o) {
  return n(), s("svg", Dp, Rp);
}
var Wp = /* @__PURE__ */ i(Tp, [["render", Up], ["__file", "quartz-watch.vue"]]), Gp = {
  name: "QuestionFilled"
}, jp = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Zp = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm23.744 191.488c-52.096 0-92.928 14.784-123.2 44.352-30.976 29.568-45.76 70.4-45.76 122.496h80.256c0-29.568 5.632-52.8 17.6-68.992 13.376-19.712 35.2-28.864 66.176-28.864 23.936 0 42.944 6.336 56.32 19.712 12.672 13.376 19.712 31.68 19.712 54.912 0 17.6-6.336 34.496-19.008 49.984l-8.448 9.856c-45.76 40.832-73.216 70.4-82.368 89.408-9.856 19.008-14.08 42.24-14.08 68.992v9.856h80.96v-9.856c0-16.896 3.52-31.68 10.56-45.76 6.336-12.672 15.488-24.64 28.16-35.2 33.792-29.568 54.208-48.576 60.544-55.616 16.896-22.528 26.048-51.392 26.048-86.592 0-42.944-14.08-76.736-42.24-101.376-28.16-25.344-65.472-37.312-111.232-37.312zm-12.672 406.208a54.272 54.272 0 0 0-38.72 14.784 49.408 49.408 0 0 0-15.488 38.016c0 15.488 4.928 28.16 15.488 38.016A54.848 54.848 0 0 0 523.072 768c15.488 0 28.16-4.928 38.72-14.784a51.52 51.52 0 0 0 16.192-38.72 51.968 51.968 0 0 0-15.488-38.016 55.936 55.936 0 0 0-39.424-14.784z"
}, null, -1), Qp = [
  Zp
];
function Kp(e, t, a, r, l, o) {
  return n(), s("svg", jp, Qp);
}
var Jp = /* @__PURE__ */ i(Gp, [["render", Kp], ["__file", "question-filled.vue"]]), Xp = {
  name: "Rank"
}, Yp = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ef = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "m186.496 544 41.408 41.344a32 32 0 1 1-45.248 45.312l-96-96a32 32 0 0 1 0-45.312l96-96a32 32 0 1 1 45.248 45.312L186.496 480h290.816V186.432l-41.472 41.472a32 32 0 1 1-45.248-45.184l96-96.128a32 32 0 0 1 45.312 0l96 96.064a32 32 0 0 1-45.248 45.184l-41.344-41.28V480H832l-41.344-41.344a32 32 0 0 1 45.248-45.312l96 96a32 32 0 0 1 0 45.312l-96 96a32 32 0 0 1-45.248-45.312L832 544H541.312v293.44l41.344-41.28a32 32 0 1 1 45.248 45.248l-96 96a32 32 0 0 1-45.312 0l-96-96a32 32 0 1 1 45.312-45.248l41.408 41.408V544H186.496z"
}, null, -1), tf = [
  ef
];
function af(e, t, a, r, l, o) {
  return n(), s("svg", Yp, tf);
}
var _f = /* @__PURE__ */ i(Xp, [["render", af], ["__file", "rank.vue"]]), rf = {
  name: "ReadingLamp"
}, lf = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, of = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M352 896h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32zm-44.672-768-99.52 448h608.384l-99.52-448H307.328zm-25.6-64h460.608a32 32 0 0 1 31.232 25.088l113.792 512A32 32 0 0 1 856.128 640H167.872a32 32 0 0 1-31.232-38.912l113.792-512A32 32 0 0 1 281.664 64z"
}, null, -1), nf = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M672 576q32 0 32 32v128q0 32-32 32t-32-32V608q0-32 32-32zm-192-.064h64V960h-64z"
}, null, -1), sf = [
  of,
  nf
];
function uf(e, t, a, r, l, o) {
  return n(), s("svg", lf, sf);
}
var df = /* @__PURE__ */ i(rf, [["render", uf], ["__file", "reading-lamp.vue"]]), vf = {
  name: "Reading"
}, cf = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, hf = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "m512 863.36 384-54.848v-638.72L525.568 222.72a96 96 0 0 1-27.136 0L128 169.792v638.72l384 54.848zM137.024 106.432l370.432 52.928a32 32 0 0 0 9.088 0l370.432-52.928A64 64 0 0 1 960 169.792v638.72a64 64 0 0 1-54.976 63.36l-388.48 55.488a32 32 0 0 1-9.088 0l-388.48-55.488A64 64 0 0 1 64 808.512v-638.72a64 64 0 0 1 73.024-63.36z"
}, null, -1), pf = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M480 192h64v704h-64z"
}, null, -1), ff = [
  hf,
  pf
];
function wf(e, t, a, r, l, o) {
  return n(), s("svg", cf, ff);
}
var mf = /* @__PURE__ */ i(vf, [["render", wf], ["__file", "reading.vue"]]), gf = {
  name: "RefreshLeft"
}, $f = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, zf = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M289.088 296.704h92.992a32 32 0 0 1 0 64H232.96a32 32 0 0 1-32-32V179.712a32 32 0 0 1 64 0v50.56a384 384 0 0 1 643.84 282.88 384 384 0 0 1-383.936 384 384 384 0 0 1-384-384h64a320 320 0 1 0 640 0 320 320 0 0 0-555.712-216.448z"
}, null, -1), xf = [
  zf
];
function Cf(e, t, a, r, l, o) {
  return n(), s("svg", $f, xf);
}
var Hf = /* @__PURE__ */ i(gf, [["render", Cf], ["__file", "refresh-left.vue"]]), Mf = {
  name: "RefreshRight"
}, Vf = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, yf = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M784.512 230.272v-50.56a32 32 0 1 1 64 0v149.056a32 32 0 0 1-32 32H667.52a32 32 0 1 1 0-64h92.992A320 320 0 1 0 524.8 833.152a320 320 0 0 0 320-320h64a384 384 0 0 1-384 384 384 384 0 0 1-384-384 384 384 0 0 1 643.712-282.88z"
}, null, -1), Bf = [
  yf
];
function Lf(e, t, a, r, l, o) {
  return n(), s("svg", Vf, Bf);
}
var Af = /* @__PURE__ */ i(Mf, [["render", Lf], ["__file", "refresh-right.vue"]]), bf = {
  name: "Refresh"
}, kf = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Sf = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
}, null, -1), qf = [
  Sf
];
function Ff(e, t, a, r, l, o) {
  return n(), s("svg", kf, qf);
}
var Of = /* @__PURE__ */ i(bf, [["render", Ff], ["__file", "refresh.vue"]]), Pf = {
  name: "Refrigerator"
}, Tf = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Df = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M256 448h512V160a32 32 0 0 0-32-32H288a32 32 0 0 0-32 32v288zm0 64v352a32 32 0 0 0 32 32h448a32 32 0 0 0 32-32V512H256zm32-448h448a96 96 0 0 1 96 96v704a96 96 0 0 1-96 96H288a96 96 0 0 1-96-96V160a96 96 0 0 1 96-96zm32 224h64v96h-64v-96zm0 288h64v96h-64v-96z"
}, null, -1), Ef = [
  Df
];
function If(e, t, a, r, l, o) {
  return n(), s("svg", Tf, Ef);
}
var Nf = /* @__PURE__ */ i(Pf, [["render", If], ["__file", "refrigerator.vue"]]), Rf = {
  name: "RemoveFilled"
}, Uf = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Wf = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zM288 512a38.4 38.4 0 0 0 38.4 38.4h371.2a38.4 38.4 0 0 0 0-76.8H326.4A38.4 38.4 0 0 0 288 512z"
}, null, -1), Gf = [
  Wf
];
function jf(e, t, a, r, l, o) {
  return n(), s("svg", Uf, Gf);
}
var Zf = /* @__PURE__ */ i(Rf, [["render", jf], ["__file", "remove-filled.vue"]]), Qf = {
  name: "Remove"
}, Kf = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Jf = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M352 480h320a32 32 0 1 1 0 64H352a32 32 0 0 1 0-64z"
}, null, -1), Xf = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), Yf = [
  Jf,
  Xf
];
function ew(e, t, a, r, l, o) {
  return n(), s("svg", Kf, Yf);
}
var tw = /* @__PURE__ */ i(Qf, [["render", ew], ["__file", "remove.vue"]]), aw = {
  name: "Right"
}, _w = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, rw = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312L754.752 480z"
}, null, -1), lw = [
  rw
];
function ow(e, t, a, r, l, o) {
  return n(), s("svg", _w, lw);
}
var nw = /* @__PURE__ */ i(aw, [["render", ow], ["__file", "right.vue"]]), sw = {
  name: "ScaleToOriginal"
}, iw = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, uw = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M813.176 180.706a60.235 60.235 0 0 1 60.236 60.235v481.883a60.235 60.235 0 0 1-60.236 60.235H210.824a60.235 60.235 0 0 1-60.236-60.235V240.94a60.235 60.235 0 0 1 60.236-60.235h602.352zm0-60.235H210.824A120.47 120.47 0 0 0 90.353 240.94v481.883a120.47 120.47 0 0 0 120.47 120.47h602.353a120.47 120.47 0 0 0 120.471-120.47V240.94a120.47 120.47 0 0 0-120.47-120.47zm-120.47 180.705a30.118 30.118 0 0 0-30.118 30.118v301.177a30.118 30.118 0 0 0 60.236 0V331.294a30.118 30.118 0 0 0-30.118-30.118zm-361.412 0a30.118 30.118 0 0 0-30.118 30.118v301.177a30.118 30.118 0 1 0 60.236 0V331.294a30.118 30.118 0 0 0-30.118-30.118zM512 361.412a30.118 30.118 0 0 0-30.118 30.117v30.118a30.118 30.118 0 0 0 60.236 0V391.53A30.118 30.118 0 0 0 512 361.412zM512 512a30.118 30.118 0 0 0-30.118 30.118v30.117a30.118 30.118 0 0 0 60.236 0v-30.117A30.118 30.118 0 0 0 512 512z"
}, null, -1), dw = [
  uw
];
function vw(e, t, a, r, l, o) {
  return n(), s("svg", iw, dw);
}
var cw = /* @__PURE__ */ i(sw, [["render", vw], ["__file", "scale-to-original.vue"]]), hw = {
  name: "School"
}, pw = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, fw = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M224 128v704h576V128H224zm-32-64h640a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z"
}, null, -1), ww = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M64 832h896v64H64zm256-640h128v96H320z"
}, null, -1), mw = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M384 832h256v-64a128 128 0 1 0-256 0v64zm128-256a192 192 0 0 1 192 192v128H320V768a192 192 0 0 1 192-192zM320 384h128v96H320zm256-192h128v96H576zm0 192h128v96H576z"
}, null, -1), gw = [
  fw,
  ww,
  mw
];
function $w(e, t, a, r, l, o) {
  return n(), s("svg", pw, gw);
}
var zw = /* @__PURE__ */ i(hw, [["render", $w], ["__file", "school.vue"]]), xw = {
  name: "Scissor"
}, Cw = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Hw = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "m512.064 578.368-106.88 152.768a160 160 0 1 1-23.36-78.208L472.96 522.56 196.864 128.256a32 32 0 1 1 52.48-36.736l393.024 561.344a160 160 0 1 1-23.36 78.208l-106.88-152.704zm54.4-189.248 208.384-297.6a32 32 0 0 1 52.48 36.736l-221.76 316.672-39.04-55.808zm-376.32 425.856a96 96 0 1 0 110.144-157.248 96 96 0 0 0-110.08 157.248zm643.84 0a96 96 0 1 0-110.08-157.248 96 96 0 0 0 110.08 157.248z"
}, null, -1), Mw = [
  Hw
];
function Vw(e, t, a, r, l, o) {
  return n(), s("svg", Cw, Mw);
}
var yw = /* @__PURE__ */ i(xw, [["render", Vw], ["__file", "scissor.vue"]]), Bw = {
  name: "Search"
}, Lw = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Aw = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"
}, null, -1), bw = [
  Aw
];
function kw(e, t, a, r, l, o) {
  return n(), s("svg", Lw, bw);
}
var Sw = /* @__PURE__ */ i(Bw, [["render", kw], ["__file", "search.vue"]]), qw = {
  name: "Select"
}, Fw = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ow = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04-316.8-316.8a64 64 0 0 1 0-90.496z"
}, null, -1), Pw = [
  Ow
];
function Tw(e, t, a, r, l, o) {
  return n(), s("svg", Fw, Pw);
}
var Dw = /* @__PURE__ */ i(qw, [["render", Tw], ["__file", "select.vue"]]), Ew = {
  name: "Sell"
}, Iw = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Nw = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M704 288h131.072a32 32 0 0 1 31.808 28.8L886.4 512h-64.384l-16-160H704v96a32 32 0 1 1-64 0v-96H384v96a32 32 0 0 1-64 0v-96H217.92l-51.2 512H512v64H131.328a32 32 0 0 1-31.808-35.2l57.6-576a32 32 0 0 1 31.808-28.8H320v-22.336C320 154.688 405.504 64 512 64s192 90.688 192 201.664v22.4zm-64 0v-22.336C640 189.248 582.272 128 512 128c-70.272 0-128 61.248-128 137.664v22.4h256zm201.408 483.84L768 698.496V928a32 32 0 1 1-64 0V698.496l-73.344 73.344a32 32 0 1 1-45.248-45.248l128-128a32 32 0 0 1 45.248 0l128 128a32 32 0 1 1-45.248 45.248z"
}, null, -1), Rw = [
  Nw
];
function Uw(e, t, a, r, l, o) {
  return n(), s("svg", Iw, Rw);
}
var Ww = /* @__PURE__ */ i(Ew, [["render", Uw], ["__file", "sell.vue"]]), Gw = {
  name: "SemiSelect"
}, jw = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Zw = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M128 448h768q64 0 64 64t-64 64H128q-64 0-64-64t64-64z"
}, null, -1), Qw = [
  Zw
];
function Kw(e, t, a, r, l, o) {
  return n(), s("svg", jw, Qw);
}
var Jw = /* @__PURE__ */ i(Gw, [["render", Kw], ["__file", "semi-select.vue"]]), Xw = {
  name: "Service"
}, Yw = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, em = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M864 409.6a192 192 0 0 1-37.888 349.44A256.064 256.064 0 0 1 576 960h-96a32 32 0 1 1 0-64h96a192.064 192.064 0 0 0 181.12-128H736a32 32 0 0 1-32-32V416a32 32 0 0 1 32-32h32c10.368 0 20.544.832 30.528 2.432a288 288 0 0 0-573.056 0A193.235 193.235 0 0 1 256 384h32a32 32 0 0 1 32 32v320a32 32 0 0 1-32 32h-32a192 192 0 0 1-96-358.4 352 352 0 0 1 704 0zM256 448a128 128 0 1 0 0 256V448zm640 128a128 128 0 0 0-128-128v256a128 128 0 0 0 128-128z"
}, null, -1), tm = [
  em
];
function am(e, t, a, r, l, o) {
  return n(), s("svg", Yw, tm);
}
var _m = /* @__PURE__ */ i(Xw, [["render", am], ["__file", "service.vue"]]), rm = {
  name: "SetUp"
}, lm = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, om = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M224 160a64 64 0 0 0-64 64v576a64 64 0 0 0 64 64h576a64 64 0 0 0 64-64V224a64 64 0 0 0-64-64H224zm0-64h576a128 128 0 0 1 128 128v576a128 128 0 0 1-128 128H224A128 128 0 0 1 96 800V224A128 128 0 0 1 224 96z"
}, null, -1), nm = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M384 416a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
}, null, -1), sm = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M480 320h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32zm160 416a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
}, null, -1), im = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M288 640h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
}, null, -1), um = [
  om,
  nm,
  sm,
  im
];
function dm(e, t, a, r, l, o) {
  return n(), s("svg", lm, um);
}
var vm = /* @__PURE__ */ i(rm, [["render", dm], ["__file", "set-up.vue"]]), cm = {
  name: "Setting"
}, hm = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, pm = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357.12 357.12 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a351.616 351.616 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357.12 357.12 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088-24.512 11.968a294.113 294.113 0 0 0-34.816 20.096l-22.656 15.36-116.224-25.088-65.28 113.152 79.68 88.192-1.92 27.136a293.12 293.12 0 0 0 0 40.192l1.92 27.136-79.808 88.192 65.344 113.152 116.224-25.024 22.656 15.296a294.113 294.113 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152 24.448-11.904a288.282 288.282 0 0 0 34.752-20.096l22.592-15.296 116.288 25.024 65.28-113.152-79.744-88.192 1.92-27.136a293.12 293.12 0 0 0 0-40.256l-1.92-27.136 79.808-88.128-65.344-113.152-116.288 24.96-22.592-15.232a287.616 287.616 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384 192 192 0 0 1 0-384zm0 64a128 128 0 1 0 0 256 128 128 0 0 0 0-256z"
}, null, -1), fm = [
  pm
];
function wm(e, t, a, r, l, o) {
  return n(), s("svg", hm, fm);
}
var mm = /* @__PURE__ */ i(cm, [["render", wm], ["__file", "setting.vue"]]), gm = {
  name: "Share"
}, $m = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, zm = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "m679.872 348.8-301.76 188.608a127.808 127.808 0 0 1 5.12 52.16l279.936 104.96a128 128 0 1 1-22.464 59.904l-279.872-104.96a128 128 0 1 1-16.64-166.272l301.696-188.608a128 128 0 1 1 33.92 54.272z"
}, null, -1), xm = [
  zm
];
function Cm(e, t, a, r, l, o) {
  return n(), s("svg", $m, xm);
}
var Hm = /* @__PURE__ */ i(gm, [["render", Cm], ["__file", "share.vue"]]), Mm = {
  name: "Ship"
}, Vm = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ym = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M512 386.88V448h405.568a32 32 0 0 1 30.72 40.768l-76.48 267.968A192 192 0 0 1 687.168 896H336.832a192 192 0 0 1-184.64-139.264L75.648 488.768A32 32 0 0 1 106.368 448H448V117.888a32 32 0 0 1 47.36-28.096l13.888 7.616L512 96v2.88l231.68 126.4a32 32 0 0 1-2.048 57.216L512 386.88zm0-70.272 144.768-65.792L512 171.84v144.768zM512 512H148.864l18.24 64H856.96l18.24-64H512zM185.408 640l28.352 99.2A128 128 0 0 0 336.832 832h350.336a128 128 0 0 0 123.072-92.8l28.352-99.2H185.408z"
}, null, -1), Bm = [
  ym
];
function Lm(e, t, a, r, l, o) {
  return n(), s("svg", Vm, Bm);
}
var Am = /* @__PURE__ */ i(Mm, [["render", Lm], ["__file", "ship.vue"]]), bm = {
  name: "Shop"
}, km = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Sm = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M704 704h64v192H256V704h64v64h384v-64zm188.544-152.192C894.528 559.616 896 567.616 896 576a96 96 0 1 1-192 0 96 96 0 1 1-192 0 96 96 0 1 1-192 0 96 96 0 1 1-192 0c0-8.384 1.408-16.384 3.392-24.192L192 128h640l60.544 423.808z"
}, null, -1), qm = [
  Sm
];
function Fm(e, t, a, r, l, o) {
  return n(), s("svg", km, qm);
}
var Om = /* @__PURE__ */ i(bm, [["render", Fm], ["__file", "shop.vue"]]), Pm = {
  name: "ShoppingBag"
}, Tm = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Dm = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M704 320v96a32 32 0 0 1-32 32h-32V320H384v128h-32a32 32 0 0 1-32-32v-96H192v576h640V320H704zm-384-64a192 192 0 1 1 384 0h160a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32h160zm64 0h256a128 128 0 1 0-256 0z"
}, null, -1), Em = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M192 704h640v64H192z"
}, null, -1), Im = [
  Dm,
  Em
];
function Nm(e, t, a, r, l, o) {
  return n(), s("svg", Tm, Im);
}
var Rm = /* @__PURE__ */ i(Pm, [["render", Nm], ["__file", "shopping-bag.vue"]]), Um = {
  name: "ShoppingCartFull"
}, Wm = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Gm = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M432 928a48 48 0 1 1 0-96 48 48 0 0 1 0 96zm320 0a48 48 0 1 1 0-96 48 48 0 0 1 0 96zM96 128a32 32 0 0 1 0-64h160a32 32 0 0 1 31.36 25.728L320.64 256H928a32 32 0 0 1 31.296 38.72l-96 448A32 32 0 0 1 832 768H384a32 32 0 0 1-31.36-25.728L229.76 128H96zm314.24 576h395.904l82.304-384H333.44l76.8 384z"
}, null, -1), jm = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M699.648 256 608 145.984 516.352 256h183.296zm-140.8-151.04a64 64 0 0 1 98.304 0L836.352 320H379.648l179.2-215.04z"
}, null, -1), Zm = [
  Gm,
  jm
];
function Qm(e, t, a, r, l, o) {
  return n(), s("svg", Wm, Zm);
}
var Km = /* @__PURE__ */ i(Um, [["render", Qm], ["__file", "shopping-cart-full.vue"]]), Jm = {
  name: "ShoppingCart"
}, Xm = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ym = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M432 928a48 48 0 1 1 0-96 48 48 0 0 1 0 96zm320 0a48 48 0 1 1 0-96 48 48 0 0 1 0 96zM96 128a32 32 0 0 1 0-64h160a32 32 0 0 1 31.36 25.728L320.64 256H928a32 32 0 0 1 31.296 38.72l-96 448A32 32 0 0 1 832 768H384a32 32 0 0 1-31.36-25.728L229.76 128H96zm314.24 576h395.904l82.304-384H333.44l76.8 384z"
}, null, -1), eg = [
  Ym
];
function tg(e, t, a, r, l, o) {
  return n(), s("svg", Xm, eg);
}
var ag = /* @__PURE__ */ i(Jm, [["render", tg], ["__file", "shopping-cart.vue"]]), _g = {
  name: "ShoppingTrolley"
}, rg = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024",
  style: { "enable-background": "new 0 0 1024 1024" },
  "xml:space": "preserve"
}, lg = /* @__PURE__ */ _("path", {
  d: "M368 833c-13.3 0-24.5 4.5-33.5 13.5S321 866.7 321 880s4.5 24.5 13.5 33.5 20.2 13.8 33.5 14.5c13.3-.7 24.5-5.5 33.5-14.5S415 893.3 415 880s-4.5-24.5-13.5-33.5S381.3 833 368 833zm439-193c7.4 0 13.8-2.2 19.5-6.5S836 623.3 838 616l112-448c2-10-.2-19.2-6.5-27.5S929 128 919 128H96c-9.3 0-17 3-23 9s-9 13.7-9 23 3 17 9 23 13.7 9 23 9h96v576h672c9.3 0 17-3 23-9s9-13.7 9-23-3-17-9-23-13.7-9-23-9H256v-64h551zM256 192h622l-96 384H256V192zm432 641c-13.3 0-24.5 4.5-33.5 13.5S641 866.7 641 880s4.5 24.5 13.5 33.5 20.2 13.8 33.5 14.5c13.3-.7 24.5-5.5 33.5-14.5S735 893.3 735 880s-4.5-24.5-13.5-33.5S701.3 833 688 833z",
  fill: "currentColor"
}, null, -1), og = [
  lg
];
function ng(e, t, a, r, l, o) {
  return n(), s("svg", rg, og);
}
var sg = /* @__PURE__ */ i(_g, [["render", ng], ["__file", "shopping-trolley.vue"]]), ig = {
  name: "Smoking"
}, ug = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, dg = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M256 576v128h640V576H256zm-32-64h704a32 32 0 0 1 32 32v192a32 32 0 0 1-32 32H224a32 32 0 0 1-32-32V544a32 32 0 0 1 32-32z"
}, null, -1), vg = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M704 576h64v128h-64zM256 64h64v320h-64zM128 192h64v192h-64zM64 512h64v256H64z"
}, null, -1), cg = [
  dg,
  vg
];
function hg(e, t, a, r, l, o) {
  return n(), s("svg", ug, cg);
}
var pg = /* @__PURE__ */ i(ig, [["render", hg], ["__file", "smoking.vue"]]), fg = {
  name: "Soccer"
}, wg = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, mg = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M418.496 871.04 152.256 604.8c-16.512 94.016-2.368 178.624 42.944 224 44.928 44.928 129.344 58.752 223.296 42.24zm72.32-18.176a573.056 573.056 0 0 0 224.832-137.216 573.12 573.12 0 0 0 137.216-224.832L533.888 171.84a578.56 578.56 0 0 0-227.52 138.496A567.68 567.68 0 0 0 170.432 532.48l320.384 320.384zM871.04 418.496c16.512-93.952 2.688-178.368-42.24-223.296-44.544-44.544-128.704-58.048-222.592-41.536L871.04 418.496zM149.952 874.048c-112.96-112.96-88.832-408.96 111.168-608.96C461.056 65.152 760.96 36.928 874.048 149.952c113.024 113.024 86.784 411.008-113.152 610.944-199.936 199.936-497.92 226.112-610.944 113.152zm452.544-497.792 22.656-22.656a32 32 0 0 1 45.248 45.248l-22.656 22.656 45.248 45.248A32 32 0 1 1 647.744 512l-45.248-45.248L557.248 512l45.248 45.248a32 32 0 1 1-45.248 45.248L512 557.248l-45.248 45.248L512 647.744a32 32 0 1 1-45.248 45.248l-45.248-45.248-22.656 22.656a32 32 0 1 1-45.248-45.248l22.656-22.656-45.248-45.248A32 32 0 1 1 376.256 512l45.248 45.248L466.752 512l-45.248-45.248a32 32 0 1 1 45.248-45.248L512 466.752l45.248-45.248L512 376.256a32 32 0 0 1 45.248-45.248l45.248 45.248z"
}, null, -1), gg = [
  mg
];
function $g(e, t, a, r, l, o) {
  return n(), s("svg", wg, gg);
}
var zg = /* @__PURE__ */ i(fg, [["render", $g], ["__file", "soccer.vue"]]), xg = {
  name: "SoldOut"
}, Cg = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Hg = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M704 288h131.072a32 32 0 0 1 31.808 28.8L886.4 512h-64.384l-16-160H704v96a32 32 0 1 1-64 0v-96H384v96a32 32 0 0 1-64 0v-96H217.92l-51.2 512H512v64H131.328a32 32 0 0 1-31.808-35.2l57.6-576a32 32 0 0 1 31.808-28.8H320v-22.336C320 154.688 405.504 64 512 64s192 90.688 192 201.664v22.4zm-64 0v-22.336C640 189.248 582.272 128 512 128c-70.272 0-128 61.248-128 137.664v22.4h256zm201.408 476.16a32 32 0 1 1 45.248 45.184l-128 128a32 32 0 0 1-45.248 0l-128-128a32 32 0 1 1 45.248-45.248L704 837.504V608a32 32 0 1 1 64 0v229.504l73.408-73.408z"
}, null, -1), Mg = [
  Hg
];
function Vg(e, t, a, r, l, o) {
  return n(), s("svg", Cg, Mg);
}
var yg = /* @__PURE__ */ i(xg, [["render", Vg], ["__file", "sold-out.vue"]]), Bg = {
  name: "SortDown"
}, Lg = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ag = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M576 96v709.568L333.312 562.816A32 32 0 1 0 288 608l297.408 297.344A32 32 0 0 0 640 882.688V96a32 32 0 0 0-64 0z"
}, null, -1), bg = [
  Ag
];
function kg(e, t, a, r, l, o) {
  return n(), s("svg", Lg, bg);
}
var Sg = /* @__PURE__ */ i(Bg, [["render", kg], ["__file", "sort-down.vue"]]), qg = {
  name: "SortUp"
}, Fg = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Og = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M384 141.248V928a32 32 0 1 0 64 0V218.56l242.688 242.688A32 32 0 1 0 736 416L438.592 118.656A32 32 0 0 0 384 141.248z"
}, null, -1), Pg = [
  Og
];
function Tg(e, t, a, r, l, o) {
  return n(), s("svg", Fg, Pg);
}
var Dg = /* @__PURE__ */ i(qg, [["render", Tg], ["__file", "sort-up.vue"]]), Eg = {
  name: "Sort"
}, Ig = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ng = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M384 96a32 32 0 0 1 64 0v786.752a32 32 0 0 1-54.592 22.656L95.936 608a32 32 0 0 1 0-45.312h.128a32 32 0 0 1 45.184 0L384 805.632V96zm192 45.248a32 32 0 0 1 54.592-22.592L928.064 416a32 32 0 0 1 0 45.312h-.128a32 32 0 0 1-45.184 0L640 218.496V928a32 32 0 1 1-64 0V141.248z"
}, null, -1), Rg = [
  Ng
];
function Ug(e, t, a, r, l, o) {
  return n(), s("svg", Ig, Rg);
}
var Wg = /* @__PURE__ */ i(Eg, [["render", Ug], ["__file", "sort.vue"]]), Gg = {
  name: "Stamp"
}, jg = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Zg = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M624 475.968V640h144a128 128 0 0 1 128 128H128a128 128 0 0 1 128-128h144V475.968a192 192 0 1 1 224 0zM128 896v-64h768v64H128z"
}, null, -1), Qg = [
  Zg
];
function Kg(e, t, a, r, l, o) {
  return n(), s("svg", jg, Qg);
}
var Jg = /* @__PURE__ */ i(Gg, [["render", Kg], ["__file", "stamp.vue"]]), Xg = {
  name: "StarFilled"
}, Yg = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, e$ = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M283.84 867.84 512 747.776l228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72z"
}, null, -1), t$ = [
  e$
];
function a$(e, t, a, r, l, o) {
  return n(), s("svg", Yg, t$);
}
var _$ = /* @__PURE__ */ i(Xg, [["render", a$], ["__file", "star-filled.vue"]]), r$ = {
  name: "Star"
}, l$ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, o$ = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "m512 747.84 228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72L512 747.84zM313.6 924.48a70.4 70.4 0 0 1-102.144-74.24l37.888-220.928L88.96 472.96A70.4 70.4 0 0 1 128 352.896l221.76-32.256 99.2-200.96a70.4 70.4 0 0 1 126.208 0l99.2 200.96 221.824 32.256a70.4 70.4 0 0 1 39.04 120.064L774.72 629.376l37.888 220.928a70.4 70.4 0 0 1-102.144 74.24L512 820.096l-198.4 104.32z"
}, null, -1), n$ = [
  o$
];
function s$(e, t, a, r, l, o) {
  return n(), s("svg", l$, n$);
}
var i$ = /* @__PURE__ */ i(r$, [["render", s$], ["__file", "star.vue"]]), u$ = {
  name: "Stopwatch"
}, d$ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, v$ = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), c$ = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M672 234.88c-39.168 174.464-80 298.624-122.688 372.48-64 110.848-202.624 30.848-138.624-80C453.376 453.44 540.48 355.968 672 234.816z"
}, null, -1), h$ = [
  v$,
  c$
];
function p$(e, t, a, r, l, o) {
  return n(), s("svg", d$, h$);
}
var f$ = /* @__PURE__ */ i(u$, [["render", p$], ["__file", "stopwatch.vue"]]), w$ = {
  name: "SuccessFilled"
}, m$ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, g$ = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"
}, null, -1), $$ = [
  g$
];
function z$(e, t, a, r, l, o) {
  return n(), s("svg", m$, $$);
}
var e2 = /* @__PURE__ */ i(w$, [["render", z$], ["__file", "success-filled.vue"]]), x$ = {
  name: "Sugar"
}, C$ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, H$ = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "m801.728 349.184 4.48 4.48a128 128 0 0 1 0 180.992L534.656 806.144a128 128 0 0 1-181.056 0l-4.48-4.48-19.392 109.696a64 64 0 0 1-108.288 34.176L78.464 802.56a64 64 0 0 1 34.176-108.288l109.76-19.328-4.544-4.544a128 128 0 0 1 0-181.056l271.488-271.488a128 128 0 0 1 181.056 0l4.48 4.48 19.392-109.504a64 64 0 0 1 108.352-34.048l142.592 143.04a64 64 0 0 1-34.24 108.16l-109.248 19.2zm-548.8 198.72h447.168v2.24l60.8-60.8a63.808 63.808 0 0 0 18.752-44.416h-426.88l-89.664 89.728a64.064 64.064 0 0 0-10.24 13.248zm0 64c2.752 4.736 6.144 9.152 10.176 13.248l135.744 135.744a64 64 0 0 0 90.496 0L638.4 611.904H252.928zm490.048-230.976L625.152 263.104a64 64 0 0 0-90.496 0L416.768 380.928h326.208zM123.712 757.312l142.976 142.976 24.32-137.6a25.6 25.6 0 0 0-29.696-29.632l-137.6 24.256zm633.6-633.344-24.32 137.472a25.6 25.6 0 0 0 29.632 29.632l137.28-24.064-142.656-143.04z"
}, null, -1), M$ = [
  H$
];
function V$(e, t, a, r, l, o) {
  return n(), s("svg", C$, M$);
}
var y$ = /* @__PURE__ */ i(x$, [["render", V$], ["__file", "sugar.vue"]]), B$ = {
  name: "SuitcaseLine"
}, L$ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024",
  style: { "enable-background": "new 0 0 1024 1024" },
  "xml:space": "preserve"
}, A$ = /* @__PURE__ */ _("path", {
  d: "M922.5 229.5c-24.32-24.34-54.49-36.84-90.5-37.5H704v-64c-.68-17.98-7.02-32.98-19.01-44.99S658.01 64.66 640 64H384c-17.98.68-32.98 7.02-44.99 19.01S320.66 110 320 128v64H192c-35.99.68-66.16 13.18-90.5 37.5C77.16 253.82 64.66 283.99 64 320v448c.68 35.99 13.18 66.16 37.5 90.5s54.49 36.84 90.5 37.5h640c35.99-.68 66.16-13.18 90.5-37.5s36.84-54.49 37.5-90.5V320c-.68-35.99-13.18-66.16-37.5-90.5zM384 128h256v64H384v-64zM256 832h-64c-17.98-.68-32.98-7.02-44.99-19.01S128.66 786.01 128 768V448h128v384zm448 0H320V448h384v384zm192-64c-.68 17.98-7.02 32.98-19.01 44.99S850.01 831.34 832 832h-64V448h128v320zm0-384H128v-64c.69-17.98 7.02-32.98 19.01-44.99S173.99 256.66 192 256h640c17.98.69 32.98 7.02 44.99 19.01S895.34 301.99 896 320v64z",
  fill: "currentColor"
}, null, -1), b$ = [
  A$
];
function k$(e, t, a, r, l, o) {
  return n(), s("svg", L$, b$);
}
var S$ = /* @__PURE__ */ i(B$, [["render", k$], ["__file", "suitcase-line.vue"]]), q$ = {
  name: "Suitcase"
}, F$ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, O$ = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M128 384h768v-64a64 64 0 0 0-64-64H192a64 64 0 0 0-64 64v64zm0 64v320a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V448H128zm64-256h640a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H192A128 128 0 0 1 64 768V320a128 128 0 0 1 128-128z"
}, null, -1), P$ = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M384 128v64h256v-64H384zm0-64h256a64 64 0 0 1 64 64v64a64 64 0 0 1-64 64H384a64 64 0 0 1-64-64v-64a64 64 0 0 1 64-64z"
}, null, -1), T$ = [
  O$,
  P$
];
function D$(e, t, a, r, l, o) {
  return n(), s("svg", F$, T$);
}
var E$ = /* @__PURE__ */ i(q$, [["render", D$], ["__file", "suitcase.vue"]]), I$ = {
  name: "Sunny"
}, N$ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, R$ = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M512 704a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512zm0-704a32 32 0 0 1 32 32v64a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 768a32 32 0 0 1 32 32v64a32 32 0 1 1-64 0v-64a32 32 0 0 1 32-32zM195.2 195.2a32 32 0 0 1 45.248 0l45.248 45.248a32 32 0 1 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm543.104 543.104a32 32 0 0 1 45.248 0l45.248 45.248a32 32 0 0 1-45.248 45.248l-45.248-45.248a32 32 0 0 1 0-45.248zM64 512a32 32 0 0 1 32-32h64a32 32 0 0 1 0 64H96a32 32 0 0 1-32-32zm768 0a32 32 0 0 1 32-32h64a32 32 0 1 1 0 64h-64a32 32 0 0 1-32-32zM195.2 828.8a32 32 0 0 1 0-45.248l45.248-45.248a32 32 0 0 1 45.248 45.248L240.448 828.8a32 32 0 0 1-45.248 0zm543.104-543.104a32 32 0 0 1 0-45.248l45.248-45.248a32 32 0 0 1 45.248 45.248l-45.248 45.248a32 32 0 0 1-45.248 0z"
}, null, -1), U$ = [
  R$
];
function W$(e, t, a, r, l, o) {
  return n(), s("svg", N$, U$);
}
var G$ = /* @__PURE__ */ i(I$, [["render", W$], ["__file", "sunny.vue"]]), j$ = {
  name: "Sunrise"
}, Z$ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Q$ = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M32 768h960a32 32 0 1 1 0 64H32a32 32 0 1 1 0-64zm129.408-96a352 352 0 0 1 701.184 0h-64.32a288 288 0 0 0-572.544 0h-64.32zM512 128a32 32 0 0 1 32 32v96a32 32 0 0 1-64 0v-96a32 32 0 0 1 32-32zm407.296 168.704a32 32 0 0 1 0 45.248l-67.84 67.84a32 32 0 1 1-45.248-45.248l67.84-67.84a32 32 0 0 1 45.248 0zm-814.592 0a32 32 0 0 1 45.248 0l67.84 67.84a32 32 0 1 1-45.248 45.248l-67.84-67.84a32 32 0 0 1 0-45.248z"
}, null, -1), K$ = [
  Q$
];
function J$(e, t, a, r, l, o) {
  return n(), s("svg", Z$, K$);
}
var X$ = /* @__PURE__ */ i(j$, [["render", J$], ["__file", "sunrise.vue"]]), Y$ = {
  name: "Sunset"
}, ez = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, tz = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M82.56 640a448 448 0 1 1 858.88 0h-67.2a384 384 0 1 0-724.288 0H82.56zM32 704h960q32 0 32 32t-32 32H32q-32 0-32-32t32-32zm256 128h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
}, null, -1), az = [
  tz
];
function _z(e, t, a, r, l, o) {
  return n(), s("svg", ez, az);
}
var rz = /* @__PURE__ */ i(Y$, [["render", _z], ["__file", "sunset.vue"]]), lz = {
  name: "SwitchButton"
}, oz = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, nz = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M352 159.872V230.4a352 352 0 1 0 320 0v-70.528A416.128 416.128 0 0 1 512 960a416 416 0 0 1-160-800.128z"
}, null, -1), sz = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M512 64q32 0 32 32v320q0 32-32 32t-32-32V96q0-32 32-32z"
}, null, -1), iz = [
  nz,
  sz
];
function uz(e, t, a, r, l, o) {
  return n(), s("svg", oz, iz);
}
var dz = /* @__PURE__ */ i(lz, [["render", uz], ["__file", "switch-button.vue"]]), vz = {
  name: "SwitchFilled"
}, cz = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024",
  style: { "enable-background": "new 0 0 1024 1024" },
  "xml:space": "preserve"
}, hz = /* @__PURE__ */ _("path", {
  d: "M247.47 358.4v.04c.07 19.17 7.72 37.53 21.27 51.09s31.92 21.2 51.09 21.27c39.86 0 72.41-32.6 72.41-72.4s-32.6-72.36-72.41-72.36-72.36 32.55-72.36 72.36z",
  fill: "currentColor"
}, null, -1), pz = /* @__PURE__ */ _("path", {
  d: "M492.38 128H324.7c-52.16 0-102.19 20.73-139.08 57.61a196.655 196.655 0 0 0-57.61 139.08V698.7c-.01 25.84 5.08 51.42 14.96 75.29s24.36 45.56 42.63 63.83 39.95 32.76 63.82 42.65a196.67 196.67 0 0 0 75.28 14.98h167.68c3.03 0 5.46-2.43 5.46-5.42V133.42c.6-2.99-1.83-5.42-5.46-5.42zm-56.11 705.88H324.7c-17.76.13-35.36-3.33-51.75-10.18s-31.22-16.94-43.61-29.67c-25.3-25.35-39.81-59.1-39.81-95.32V324.69c-.13-17.75 3.33-35.35 10.17-51.74a131.695 131.695 0 0 1 29.64-43.62c25.39-25.3 59.14-39.81 95.36-39.81h111.57v644.36zm402.12-647.67a196.655 196.655 0 0 0-139.08-57.61H580.48c-3.03 0-4.82 2.43-4.82 4.82v757.16c-.6 2.99 1.79 5.42 5.42 5.42h118.23a196.69 196.69 0 0 0 139.08-57.61A196.655 196.655 0 0 0 896 699.31V325.29a196.69 196.69 0 0 0-57.61-139.08zm-111.3 441.92c-42.83 0-77.82-34.99-77.82-77.82s34.98-77.82 77.82-77.82c42.83 0 77.82 34.99 77.82 77.82s-34.99 77.82-77.82 77.82z",
  fill: "currentColor"
}, null, -1), fz = [
  hz,
  pz
];
function wz(e, t, a, r, l, o) {
  return n(), s("svg", cz, fz);
}
var mz = /* @__PURE__ */ i(vz, [["render", wz], ["__file", "switch-filled.vue"]]), gz = {
  name: "Switch"
}, $z = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, zz = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M118.656 438.656a32 32 0 0 1 0-45.248L416 96l4.48-3.776A32 32 0 0 1 461.248 96l3.712 4.48a32.064 32.064 0 0 1-3.712 40.832L218.56 384H928a32 32 0 1 1 0 64H141.248a32 32 0 0 1-22.592-9.344zM64 608a32 32 0 0 1 32-32h786.752a32 32 0 0 1 22.656 54.592L608 928l-4.48 3.776a32.064 32.064 0 0 1-40.832-49.024L805.632 640H96a32 32 0 0 1-32-32z"
}, null, -1), xz = [
  zz
];
function Cz(e, t, a, r, l, o) {
  return n(), s("svg", $z, xz);
}
var Hz = /* @__PURE__ */ i(gz, [["render", Cz], ["__file", "switch.vue"]]), Mz = {
  name: "TakeawayBox"
}, Vz = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, yz = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M832 384H192v448h640V384zM96 320h832V128H96v192zm800 64v480a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V384H64a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32h896a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32h-64zM416 512h192a32 32 0 0 1 0 64H416a32 32 0 0 1 0-64z"
}, null, -1), Bz = [
  yz
];
function Lz(e, t, a, r, l, o) {
  return n(), s("svg", Vz, Bz);
}
var Az = /* @__PURE__ */ i(Mz, [["render", Lz], ["__file", "takeaway-box.vue"]]), bz = {
  name: "Ticket"
}, kz = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Sz = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M640 832H64V640a128 128 0 1 0 0-256V192h576v160h64V192h256v192a128 128 0 1 0 0 256v192H704V672h-64v160zm0-416v192h64V416h-64z"
}, null, -1), qz = [
  Sz
];
function Fz(e, t, a, r, l, o) {
  return n(), s("svg", kz, qz);
}
var Oz = /* @__PURE__ */ i(bz, [["render", Fz], ["__file", "ticket.vue"]]), Pz = {
  name: "Tickets"
}, Tz = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Dz = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M192 128v768h640V128H192zm-32-64h704a32 32 0 0 1 32 32v832a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm160 448h384v64H320v-64zm0-192h192v64H320v-64zm0 384h384v64H320v-64z"
}, null, -1), Ez = [
  Dz
];
function Iz(e, t, a, r, l, o) {
  return n(), s("svg", Tz, Ez);
}
var Nz = /* @__PURE__ */ i(Pz, [["render", Iz], ["__file", "tickets.vue"]]), Rz = {
  name: "Timer"
}, Uz = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Wz = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M512 896a320 320 0 1 0 0-640 320 320 0 0 0 0 640zm0 64a384 384 0 1 1 0-768 384 384 0 0 1 0 768z"
}, null, -1), Gz = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M512 320a32 32 0 0 1 32 32l-.512 224a32 32 0 1 1-64 0L480 352a32 32 0 0 1 32-32z"
}, null, -1), jz = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M448 576a64 64 0 1 0 128 0 64 64 0 1 0-128 0zm96-448v128h-64V128h-96a32 32 0 0 1 0-64h256a32 32 0 1 1 0 64h-96z"
}, null, -1), Zz = [
  Wz,
  Gz,
  jz
];
function Qz(e, t, a, r, l, o) {
  return n(), s("svg", Uz, Zz);
}
var Kz = /* @__PURE__ */ i(Rz, [["render", Qz], ["__file", "timer.vue"]]), Jz = {
  name: "ToiletPaper"
}, Xz = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Yz = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M595.2 128H320a192 192 0 0 0-192 192v576h384V352c0-90.496 32.448-171.2 83.2-224zM736 64c123.712 0 224 128.96 224 288S859.712 640 736 640H576v320H64V320A256 256 0 0 1 320 64h416zM576 352v224h160c84.352 0 160-97.28 160-224s-75.648-224-160-224-160 97.28-160 224z"
}, null, -1), ex = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M736 448c-35.328 0-64-43.008-64-96s28.672-96 64-96 64 43.008 64 96-28.672 96-64 96z"
}, null, -1), tx = [
  Yz,
  ex
];
function ax(e, t, a, r, l, o) {
  return n(), s("svg", Xz, tx);
}
var _x = /* @__PURE__ */ i(Jz, [["render", ax], ["__file", "toilet-paper.vue"]]), rx = {
  name: "Tools"
}, lx = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ox = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M764.416 254.72a351.68 351.68 0 0 1 86.336 149.184H960v192.064H850.752a351.68 351.68 0 0 1-86.336 149.312l54.72 94.72-166.272 96-54.592-94.72a352.64 352.64 0 0 1-172.48 0L371.136 936l-166.272-96 54.72-94.72a351.68 351.68 0 0 1-86.336-149.312H64v-192h109.248a351.68 351.68 0 0 1 86.336-149.312L204.8 160l166.208-96h.192l54.656 94.592a352.64 352.64 0 0 1 172.48 0L652.8 64h.128L819.2 160l-54.72 94.72zM704 499.968a192 192 0 1 0-384 0 192 192 0 0 0 384 0z"
}, null, -1), nx = [
  ox
];
function sx(e, t, a, r, l, o) {
  return n(), s("svg", lx, nx);
}
var ix = /* @__PURE__ */ i(rx, [["render", sx], ["__file", "tools.vue"]]), ux = {
  name: "TopLeft"
}, dx = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, vx = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M256 256h416a32 32 0 1 0 0-64H224a32 32 0 0 0-32 32v448a32 32 0 0 0 64 0V256z"
}, null, -1), cx = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M246.656 201.344a32 32 0 0 0-45.312 45.312l544 544a32 32 0 0 0 45.312-45.312l-544-544z"
}, null, -1), hx = [
  vx,
  cx
];
function px(e, t, a, r, l, o) {
  return n(), s("svg", dx, hx);
}
var fx = /* @__PURE__ */ i(ux, [["render", px], ["__file", "top-left.vue"]]), wx = {
  name: "TopRight"
}, mx = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, gx = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M768 256H353.6a32 32 0 1 1 0-64H800a32 32 0 0 1 32 32v448a32 32 0 0 1-64 0V256z"
}, null, -1), $x = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M777.344 201.344a32 32 0 0 1 45.312 45.312l-544 544a32 32 0 0 1-45.312-45.312l544-544z"
}, null, -1), zx = [
  gx,
  $x
];
function xx(e, t, a, r, l, o) {
  return n(), s("svg", mx, zx);
}
var Cx = /* @__PURE__ */ i(wx, [["render", xx], ["__file", "top-right.vue"]]), Hx = {
  name: "Top"
}, Mx = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Vx = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M572.235 205.282v600.365a30.118 30.118 0 1 1-60.235 0V205.282L292.382 438.633a28.913 28.913 0 0 1-42.646 0 33.43 33.43 0 0 1 0-45.236l271.058-288.045a28.913 28.913 0 0 1 42.647 0L834.5 393.397a33.43 33.43 0 0 1 0 45.176 28.913 28.913 0 0 1-42.647 0l-219.618-233.23z"
}, null, -1), yx = [
  Vx
];
function Bx(e, t, a, r, l, o) {
  return n(), s("svg", Mx, yx);
}
var Lx = /* @__PURE__ */ i(Hx, [["render", Bx], ["__file", "top.vue"]]), Ax = {
  name: "TrendCharts"
}, bx = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, kx = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M128 896V128h768v768H128zm291.712-327.296 128 102.4 180.16-201.792-47.744-42.624-139.84 156.608-128-102.4-180.16 201.792 47.744 42.624 139.84-156.608zM816 352a48 48 0 1 0-96 0 48 48 0 0 0 96 0z"
}, null, -1), Sx = [
  kx
];
function qx(e, t, a, r, l, o) {
  return n(), s("svg", bx, Sx);
}
var Fx = /* @__PURE__ */ i(Ax, [["render", qx], ["__file", "trend-charts.vue"]]), Ox = {
  name: "TrophyBase"
}, Px = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024",
  style: { "enable-background": "new 0 0 1024 1024" },
  "xml:space": "preserve"
}, Tx = /* @__PURE__ */ _("path", {
  d: "M918.4 201.6c-6.4-6.4-12.8-9.6-22.4-9.6H768V96c0-9.6-3.2-16-9.6-22.4C752 67.2 745.6 64 736 64H288c-9.6 0-16 3.2-22.4 9.6C259.2 80 256 86.4 256 96v96H128c-9.6 0-16 3.2-22.4 9.6-6.4 6.4-9.6 16-9.6 22.4 3.2 108.8 25.6 185.6 64 224 34.4 34.4 77.56 55.65 127.65 61.99 10.91 20.44 24.78 39.25 41.95 56.41 40.86 40.86 91 65.47 150.4 71.9V768h-96c-9.6 0-16 3.2-22.4 9.6-6.4 6.4-9.6 12.8-9.6 22.4s3.2 16 9.6 22.4c6.4 6.4 12.8 9.6 22.4 9.6h256c9.6 0 16-3.2 22.4-9.6 6.4-6.4 9.6-12.8 9.6-22.4s-3.2-16-9.6-22.4c-6.4-6.4-12.8-9.6-22.4-9.6h-96V637.26c59.4-7.71 109.54-30.01 150.4-70.86 17.2-17.2 31.51-36.06 42.81-56.55 48.93-6.51 90.02-27.7 126.79-61.85 38.4-38.4 60.8-112 64-224 0-6.4-3.2-16-9.6-22.4zM256 438.4c-19.2-6.4-35.2-19.2-51.2-35.2-22.4-22.4-35.2-70.4-41.6-147.2H256v182.4zm390.4 80C608 553.6 566.4 576 512 576s-99.2-19.2-134.4-57.6C342.4 480 320 438.4 320 384V128h384v256c0 54.4-19.2 99.2-57.6 134.4zm172.8-115.2c-16 16-32 25.6-51.2 35.2V256h92.8c-6.4 76.8-19.2 124.8-41.6 147.2zM768 896H256c-9.6 0-16 3.2-22.4 9.6-6.4 6.4-9.6 12.8-9.6 22.4s3.2 16 9.6 22.4c6.4 6.4 12.8 9.6 22.4 9.6h512c9.6 0 16-3.2 22.4-9.6 6.4-6.4 9.6-12.8 9.6-22.4s-3.2-16-9.6-22.4c-6.4-6.4-12.8-9.6-22.4-9.6z",
  fill: "currentColor"
}, null, -1), Dx = [
  Tx
];
function Ex(e, t, a, r, l, o) {
  return n(), s("svg", Px, Dx);
}
var Ix = /* @__PURE__ */ i(Ox, [["render", Ex], ["__file", "trophy-base.vue"]]), Nx = {
  name: "Trophy"
}, Rx = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ux = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M480 896V702.08A256.256 256.256 0 0 1 264.064 512h-32.64a96 96 0 0 1-91.968-68.416L93.632 290.88a76.8 76.8 0 0 1 73.6-98.88H256V96a32 32 0 0 1 32-32h448a32 32 0 0 1 32 32v96h88.768a76.8 76.8 0 0 1 73.6 98.88L884.48 443.52A96 96 0 0 1 792.576 512h-32.64A256.256 256.256 0 0 1 544 702.08V896h128a32 32 0 1 1 0 64H352a32 32 0 1 1 0-64h128zm224-448V128H320v320a192 192 0 1 0 384 0zm64 0h24.576a32 32 0 0 0 30.656-22.784l45.824-152.768A12.8 12.8 0 0 0 856.768 256H768v192zm-512 0V256h-88.768a12.8 12.8 0 0 0-12.288 16.448l45.824 152.768A32 32 0 0 0 231.424 448H256z"
}, null, -1), Wx = [
  Ux
];
function Gx(e, t, a, r, l, o) {
  return n(), s("svg", Rx, Wx);
}
var jx = /* @__PURE__ */ i(Nx, [["render", Gx], ["__file", "trophy.vue"]]), Zx = {
  name: "TurnOff"
}, Qx = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Kx = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M329.956 257.138a254.862 254.862 0 0 0 0 509.724h364.088a254.862 254.862 0 0 0 0-509.724H329.956zm0-72.818h364.088a327.68 327.68 0 1 1 0 655.36H329.956a327.68 327.68 0 1 1 0-655.36z"
}, null, -1), Jx = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M329.956 621.227a109.227 109.227 0 1 0 0-218.454 109.227 109.227 0 0 0 0 218.454zm0 72.817a182.044 182.044 0 1 1 0-364.088 182.044 182.044 0 0 1 0 364.088z"
}, null, -1), Xx = [
  Kx,
  Jx
];
function Yx(e, t, a, r, l, o) {
  return n(), s("svg", Qx, Xx);
}
var eC = /* @__PURE__ */ i(Zx, [["render", Yx], ["__file", "turn-off.vue"]]), tC = {
  name: "Umbrella"
}, aC = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _C = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M320 768a32 32 0 1 1 64 0 64 64 0 0 0 128 0V512H64a448 448 0 1 1 896 0H576v256a128 128 0 1 1-256 0zm570.688-320a384.128 384.128 0 0 0-757.376 0h757.376z"
}, null, -1), rC = [
  _C
];
function lC(e, t, a, r, l, o) {
  return n(), s("svg", aC, rC);
}
var oC = /* @__PURE__ */ i(tC, [["render", lC], ["__file", "umbrella.vue"]]), nC = {
  name: "Unlock"
}, sC = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, iC = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M224 448a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32V480a32 32 0 0 0-32-32H224zm0-64h576a96 96 0 0 1 96 96v384a96 96 0 0 1-96 96H224a96 96 0 0 1-96-96V480a96 96 0 0 1 96-96z"
}, null, -1), uC = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M512 544a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V576a32 32 0 0 1 32-32zm178.304-295.296A192.064 192.064 0 0 0 320 320v64h352l96 38.4V448H256V320a256 256 0 0 1 493.76-95.104l-59.456 23.808z"
}, null, -1), dC = [
  iC,
  uC
];
function vC(e, t, a, r, l, o) {
  return n(), s("svg", sC, dC);
}
var cC = /* @__PURE__ */ i(nC, [["render", vC], ["__file", "unlock.vue"]]), hC = {
  name: "UploadFilled"
}, pC = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, fC = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M544 864V672h128L512 480 352 672h128v192H320v-1.6c-5.376.32-10.496 1.6-16 1.6A240 240 0 0 1 64 624c0-123.136 93.12-223.488 212.608-237.248A239.808 239.808 0 0 1 512 192a239.872 239.872 0 0 1 235.456 194.752c119.488 13.76 212.48 114.112 212.48 237.248a240 240 0 0 1-240 240c-5.376 0-10.56-1.28-16-1.6v1.6H544z"
}, null, -1), wC = [
  fC
];
function mC(e, t, a, r, l, o) {
  return n(), s("svg", pC, wC);
}
var gC = /* @__PURE__ */ i(hC, [["render", mC], ["__file", "upload-filled.vue"]]), $C = {
  name: "Upload"
}, zC = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, xC = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm384-578.304V704h-64V247.296L237.248 490.048 192 444.8 508.8 128l316.8 316.8-45.312 45.248L544 253.696z"
}, null, -1), CC = [
  xC
];
function HC(e, t, a, r, l, o) {
  return n(), s("svg", zC, CC);
}
var MC = /* @__PURE__ */ i($C, [["render", HC], ["__file", "upload.vue"]]), VC = {
  name: "UserFilled"
}, yC = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, BC = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M288 320a224 224 0 1 0 448 0 224 224 0 1 0-448 0zm544 608H160a32 32 0 0 1-32-32v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 0 1-32 32z"
}, null, -1), LC = [
  BC
];
function AC(e, t, a, r, l, o) {
  return n(), s("svg", yC, LC);
}
var bC = /* @__PURE__ */ i(VC, [["render", AC], ["__file", "user-filled.vue"]]), kC = {
  name: "User"
}, SC = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, qC = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512zm320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0z"
}, null, -1), FC = [
  qC
];
function OC(e, t, a, r, l, o) {
  return n(), s("svg", SC, FC);
}
var PC = /* @__PURE__ */ i(kC, [["render", OC], ["__file", "user.vue"]]), TC = {
  name: "Van"
}, DC = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, EC = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M128.896 736H96a32 32 0 0 1-32-32V224a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v96h164.544a32 32 0 0 1 31.616 27.136l54.144 352A32 32 0 0 1 922.688 736h-91.52a144 144 0 1 1-286.272 0H415.104a144 144 0 1 1-286.272 0zm23.36-64a143.872 143.872 0 0 1 239.488 0H568.32c17.088-25.6 42.24-45.376 71.744-55.808V256H128v416h24.256zm655.488 0h77.632l-19.648-128H704v64.896A144 144 0 0 1 807.744 672zm48.128-192-14.72-96H704v96h151.872zM688 832a80 80 0 1 0 0-160 80 80 0 0 0 0 160zm-416 0a80 80 0 1 0 0-160 80 80 0 0 0 0 160z"
}, null, -1), IC = [
  EC
];
function NC(e, t, a, r, l, o) {
  return n(), s("svg", DC, IC);
}
var RC = /* @__PURE__ */ i(TC, [["render", NC], ["__file", "van.vue"]]), UC = {
  name: "VideoCameraFilled"
}, WC = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, GC = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "m768 576 192-64v320l-192-64v96a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V480a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v96zM192 768v64h384v-64H192zm192-480a160 160 0 0 1 320 0 160 160 0 0 1-320 0zm64 0a96 96 0 1 0 192.064-.064A96 96 0 0 0 448 288zm-320 32a128 128 0 1 1 256.064.064A128 128 0 0 1 128 320zm64 0a64 64 0 1 0 128 0 64 64 0 0 0-128 0z"
}, null, -1), jC = [
  GC
];
function ZC(e, t, a, r, l, o) {
  return n(), s("svg", WC, jC);
}
var QC = /* @__PURE__ */ i(UC, [["render", ZC], ["__file", "video-camera-filled.vue"]]), KC = {
  name: "VideoCamera"
}, JC = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, XC = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M704 768V256H128v512h576zm64-416 192-96v512l-192-96v128a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V224a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v128zm0 71.552v176.896l128 64V359.552l-128 64zM192 320h192v64H192v-64z"
}, null, -1), YC = [
  XC
];
function eH(e, t, a, r, l, o) {
  return n(), s("svg", JC, YC);
}
var tH = /* @__PURE__ */ i(KC, [["render", eH], ["__file", "video-camera.vue"]]), aH = {
  name: "VideoPause"
}, _H = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, rH = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm-96-544q32 0 32 32v256q0 32-32 32t-32-32V384q0-32 32-32zm192 0q32 0 32 32v256q0 32-32 32t-32-32V384q0-32 32-32z"
}, null, -1), lH = [
  rH
];
function oH(e, t, a, r, l, o) {
  return n(), s("svg", _H, lH);
}
var nH = /* @__PURE__ */ i(aH, [["render", oH], ["__file", "video-pause.vue"]]), sH = {
  name: "VideoPlay"
}, iH = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, uH = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm-48-247.616L668.608 512 464 375.616v272.768zm10.624-342.656 249.472 166.336a48 48 0 0 1 0 79.872L474.624 718.272A48 48 0 0 1 400 678.336V345.6a48 48 0 0 1 74.624-39.936z"
}, null, -1), dH = [
  uH
];
function vH(e, t, a, r, l, o) {
  return n(), s("svg", iH, dH);
}
var cH = /* @__PURE__ */ i(sH, [["render", vH], ["__file", "video-play.vue"]]), hH = {
  name: "View"
}, pH = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, fH = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z"
}, null, -1), wH = [
  fH
];
function mH(e, t, a, r, l, o) {
  return n(), s("svg", pH, wH);
}
var gH = /* @__PURE__ */ i(hH, [["render", mH], ["__file", "view.vue"]]), $H = {
  name: "WalletFilled"
}, zH = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, xH = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M688 512a112 112 0 1 0 0 224h208v160H128V352h768v160H688zm32 160h-32a48 48 0 0 1 0-96h32a48 48 0 0 1 0 96zm-80-544 128 160H384l256-160z"
}, null, -1), CH = [
  xH
];
function HH(e, t, a, r, l, o) {
  return n(), s("svg", zH, CH);
}
var MH = /* @__PURE__ */ i($H, [["render", HH], ["__file", "wallet-filled.vue"]]), VH = {
  name: "Wallet"
}, yH = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, BH = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M640 288h-64V128H128v704h384v32a32 32 0 0 0 32 32H96a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32h512a32 32 0 0 1 32 32v192z"
}, null, -1), LH = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M128 320v512h768V320H128zm-32-64h832a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32z"
}, null, -1), AH = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M704 640a64 64 0 1 1 0-128 64 64 0 0 1 0 128z"
}, null, -1), bH = [
  BH,
  LH,
  AH
];
function kH(e, t, a, r, l, o) {
  return n(), s("svg", yH, bH);
}
var SH = /* @__PURE__ */ i(VH, [["render", kH], ["__file", "wallet.vue"]]), qH = {
  name: "WarnTriangleFilled"
}, FH = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024",
  style: { "enable-background": "new 0 0 1024 1024" },
  "xml:space": "preserve"
}, OH = /* @__PURE__ */ _("path", {
  d: "M928.99 755.83 574.6 203.25c-12.89-20.16-36.76-32.58-62.6-32.58s-49.71 12.43-62.6 32.58L95.01 755.83c-12.91 20.12-12.9 44.91.01 65.03 12.92 20.12 36.78 32.51 62.59 32.49h708.78c25.82.01 49.68-12.37 62.59-32.49 12.91-20.12 12.92-44.91.01-65.03zM554.67 768h-85.33v-85.33h85.33V768zm0-426.67v298.66h-85.33V341.32l85.33.01z",
  fill: "currentColor"
}, null, -1), PH = [
  OH
];
function TH(e, t, a, r, l, o) {
  return n(), s("svg", FH, PH);
}
var DH = /* @__PURE__ */ i(qH, [["render", TH], ["__file", "warn-triangle-filled.vue"]]), EH = {
  name: "WarningFilled"
}, IH = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, NH = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z"
}, null, -1), RH = [
  NH
];
function UH(e, t, a, r, l, o) {
  return n(), s("svg", IH, RH);
}
var t2 = /* @__PURE__ */ i(EH, [["render", UH], ["__file", "warning-filled.vue"]]), WH = {
  name: "Warning"
}, GH = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, jH = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0zm-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32z"
}, null, -1), ZH = [
  jH
];
function QH(e, t, a, r, l, o) {
  return n(), s("svg", GH, ZH);
}
var KH = /* @__PURE__ */ i(WH, [["render", QH], ["__file", "warning.vue"]]), JH = {
  name: "Watch"
}, XH = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, YH = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M512 768a256 256 0 1 0 0-512 256 256 0 0 0 0 512zm0 64a320 320 0 1 1 0-640 320 320 0 0 1 0 640z"
}, null, -1), eM = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M480 352a32 32 0 0 1 32 32v160a32 32 0 0 1-64 0V384a32 32 0 0 1 32-32z"
}, null, -1), tM = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M480 512h128q32 0 32 32t-32 32H480q-32 0-32-32t32-32zm128-256V128H416v128h-64V64h320v192h-64zM416 768v128h192V768h64v192H352V768h64z"
}, null, -1), aM = [
  YH,
  eM,
  tM
];
function _M(e, t, a, r, l, o) {
  return n(), s("svg", XH, aM);
}
var rM = /* @__PURE__ */ i(JH, [["render", _M], ["__file", "watch.vue"]]), lM = {
  name: "Watermelon"
}, oM = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, nM = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "m683.072 600.32-43.648 162.816-61.824-16.512 53.248-198.528L576 493.248l-158.4 158.4-45.248-45.248 158.4-158.4-55.616-55.616-198.528 53.248-16.512-61.824 162.816-43.648L282.752 200A384 384 0 0 0 824 741.248L683.072 600.32zm231.552 141.056a448 448 0 1 1-632-632l632 632z"
}, null, -1), sM = [
  nM
];
function iM(e, t, a, r, l, o) {
  return n(), s("svg", oM, sM);
}
var uM = /* @__PURE__ */ i(lM, [["render", iM], ["__file", "watermelon.vue"]]), dM = {
  name: "WindPower"
}, vM = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, cM = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M160 64q32 0 32 32v832q0 32-32 32t-32-32V96q0-32 32-32zm416 354.624 128-11.584V168.96l-128-11.52v261.12zm-64 5.824V151.552L320 134.08V160h-64V64l616.704 56.064A96 96 0 0 1 960 215.68v144.64a96 96 0 0 1-87.296 95.616L256 512V224h64v217.92l192-17.472zm256-23.232 98.88-8.96A32 32 0 0 0 896 360.32V215.68a32 32 0 0 0-29.12-31.872l-98.88-8.96v226.368z"
}, null, -1), hM = [
  cM
];
function pM(e, t, a, r, l, o) {
  return n(), s("svg", vM, hM);
}
var fM = /* @__PURE__ */ i(dM, [["render", pM], ["__file", "wind-power.vue"]]), wM = {
  name: "ZoomIn"
}, mM = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, gM = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704zm-32-384v-96a32 32 0 0 1 64 0v96h96a32 32 0 0 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96z"
}, null, -1), $M = [
  gM
];
function zM(e, t, a, r, l, o) {
  return n(), s("svg", mM, $M);
}
var xM = /* @__PURE__ */ i(wM, [["render", zM], ["__file", "zoom-in.vue"]]), CM = {
  name: "ZoomOut"
}, HM = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, MM = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704zM352 448h256a32 32 0 0 1 0 64H352a32 32 0 0 1 0-64z"
}, null, -1), VM = [
  MM
];
function yM(e, t, a, r, l, o) {
  return n(), s("svg", HM, VM);
}
var BM = /* @__PURE__ */ i(CM, [["render", yM], ["__file", "zoom-out.vue"]]);
const LM = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AddLocation: r0,
  Aim: d0,
  AlarmClock: m0,
  Apple: H0,
  ArrowDown: O0,
  ArrowDownBold: A0,
  ArrowLeft: Z0,
  ArrowLeftBold: N0,
  ArrowRight: o1,
  ArrowRightBold: e1,
  ArrowUp: m1,
  ArrowUpBold: v1,
  Avatar: H1,
  Back: b1,
  Baseball: T1,
  Basketball: U1,
  Bell: r4,
  BellFilled: K1,
  Bicycle: u4,
  Bottom: A4,
  BottomLeft: w4,
  BottomRight: H4,
  Bowl: O4,
  Box: U4,
  Briefcase: K4,
  Brush: se,
  BrushFilled: ae,
  Burger: he,
  Calendar: $e,
  Camera: ke,
  CameraFilled: Ve,
  CaretBottom: Te,
  CaretLeft: Ue,
  CaretRight: Ke,
  CaretTop: a6,
  Cellphone: s6,
  ChatDotRound: p6,
  ChatDotSquare: x6,
  ChatLineRound: L6,
  ChatLineSquare: O6,
  ChatRound: N6,
  ChatSquare: Z6,
  Check: e3,
  Checked: o3,
  Cherry: v3,
  Chicken: m3,
  ChromeFilled: V3,
  CircleCheck: D3,
  CircleCheckFilled: k3,
  CircleClose: J3,
  CircleCloseFilled: X,
  CirclePlus: d8,
  CirclePlusFilled: _8,
  Clock: g8,
  Close: y2,
  CloseBold: M8,
  Cloudy: O8,
  Coffee: Z8,
  CoffeeCup: N8,
  Coin: at,
  ColdDrink: st,
  Collection: zt,
  CollectionTag: ht,
  Comment: yt,
  Compass: qt,
  Connection: It,
  Coordinate: Zt,
  CopyDocument: ta,
  Cpu: sa,
  CreditCard: pa,
  Crop: xa,
  DArrowLeft: Ba,
  DArrowRight: qa,
  DCaret: Ea,
  DataAnalysis: Ga,
  DataBoard: e_,
  DataLine: o_,
  Delete: V_,
  DeleteFilled: v_,
  DeleteLocation: $_,
  Dessert: k_,
  Discount: D_,
  Dish: J_,
  DishDot: W_,
  Document: Sr,
  DocumentAdd: _r,
  DocumentChecked: ir,
  DocumentCopy: pr,
  DocumentDelete: zr,
  DocumentRemove: yr,
  Download: Dr,
  Drizzling: Wr,
  Edit: rl,
  EditPen: Jr,
  Eleme: fl,
  ElemeFilled: ul,
  ElementPlus: xl,
  Expand: Bl,
  Failed: ql,
  Female: Nl,
  Files: Zl,
  Film: to,
  Filter: no,
  Finished: ho,
  FirstAidKit: zo,
  Flag: yo,
  Fold: So,
  Folder: p5,
  FolderAdd: Do,
  FolderChecked: Wo,
  FolderDelete: Jo,
  FolderOpened: _5,
  FolderRemove: i5,
  Food: z5,
  Football: B5,
  ForkSpoon: q5,
  Fries: E5,
  FullScreen: G5,
  Goblet: wn,
  GobletFull: X5,
  GobletSquare: dn,
  GobletSquareFull: rn,
  GoldMedal: Hn,
  Goods: On,
  GoodsFilled: An,
  Grape: Nn,
  Grid: Zn,
  Guide: t9,
  Handbag: n9,
  Headset: c9,
  Help: M9,
  HelpFilled: g9,
  Hide: k9,
  Histogram: T9,
  HomeFilled: U9,
  HotWater: K9,
  House: as,
  IceCream: $s,
  IceCreamRound: ss,
  IceCreamSquare: hs,
  IceDrink: Vs,
  IceTea: ks,
  InfoFilled: Y,
  Iphone: Rs,
  Key: Qs,
  KnifeFork: ti,
  Lightning: si,
  Link: hi,
  List: $i,
  Loading: Vi,
  Location: ji,
  LocationFilled: ki,
  LocationInformation: Ei,
  Lock: eu,
  Lollipop: ou,
  MagicStick: vu,
  Magnet: mu,
  Male: Vu,
  Management: ku,
  MapLocation: Du,
  Medal: Gu,
  Memo: ed,
  Menu: od,
  Message: gd,
  MessageBox: vd,
  Mic: Md,
  Microphone: bd,
  MilkTea: Pd,
  Minus: Rd,
  Money: Jd,
  Monitor: _v,
  Moon: fv,
  MoonNight: uv,
  More: Bv,
  MoreFilled: xv,
  MostlyCloudy: qv,
  Mouse: Iv,
  Mug: jv,
  Mute: nc,
  MuteNotification: ec,
  NoSmoking: cc,
  Notebook: $c,
  Notification: yc,
  Odometer: Fc,
  OfficeBuilding: Rc,
  Open: Kc,
  Operation: a7,
  Opportunity: s7,
  Orange: h7,
  Paperclip: $7,
  PartlyCloudy: y7,
  Pear: S7,
  Phone: W7,
  PhoneFilled: D7,
  Picture: dh,
  PictureFilled: J7,
  PictureRounded: rh,
  PieChart: mh,
  Place: Vh,
  Platform: kh,
  Plus: Th,
  Pointer: Uh,
  Position: Kh,
  Postcard: _p,
  Pouring: ip,
  Present: mp,
  PriceTag: Mp,
  Printer: bp,
  Promotion: Pp,
  QuartzWatch: Wp,
  QuestionFilled: Jp,
  Rank: _f,
  Reading: mf,
  ReadingLamp: df,
  Refresh: Of,
  RefreshLeft: Hf,
  RefreshRight: Af,
  Refrigerator: Nf,
  Remove: tw,
  RemoveFilled: Zf,
  Right: nw,
  ScaleToOriginal: cw,
  School: zw,
  Scissor: yw,
  Search: Sw,
  Select: Dw,
  Sell: Ww,
  SemiSelect: Jw,
  Service: _m,
  SetUp: vm,
  Setting: mm,
  Share: Hm,
  Ship: Am,
  Shop: Om,
  ShoppingBag: Rm,
  ShoppingCart: ag,
  ShoppingCartFull: Km,
  ShoppingTrolley: sg,
  Smoking: pg,
  Soccer: zg,
  SoldOut: yg,
  Sort: Wg,
  SortDown: Sg,
  SortUp: Dg,
  Stamp: Jg,
  Star: i$,
  StarFilled: _$,
  Stopwatch: f$,
  SuccessFilled: e2,
  Sugar: y$,
  Suitcase: E$,
  SuitcaseLine: S$,
  Sunny: G$,
  Sunrise: X$,
  Sunset: rz,
  Switch: Hz,
  SwitchButton: dz,
  SwitchFilled: mz,
  TakeawayBox: Az,
  Ticket: Oz,
  Tickets: Nz,
  Timer: Kz,
  ToiletPaper: _x,
  Tools: ix,
  Top: Lx,
  TopLeft: fx,
  TopRight: Cx,
  TrendCharts: Fx,
  Trophy: jx,
  TrophyBase: Ix,
  TurnOff: eC,
  Umbrella: oC,
  Unlock: cC,
  Upload: MC,
  UploadFilled: gC,
  User: PC,
  UserFilled: bC,
  Van: RC,
  VideoCamera: tH,
  VideoCameraFilled: QC,
  VideoPause: nH,
  VideoPlay: cH,
  View: gH,
  Wallet: SH,
  WalletFilled: MH,
  WarnTriangleFilled: DH,
  Warning: KH,
  WarningFilled: t2,
  Watch: rM,
  Watermelon: uM,
  WindPower: fM,
  ZoomIn: xM,
  ZoomOut: BM
}, Symbol.toStringTag, { value: "Module" })), u2 = (e) => e.replace(/(A-Z)g/, "-$1").toLocaleLowerCase();
function AM(e) {
  for (var t = -1, a = e == null ? 0 : e.length, r = {}; ++t < a; ) {
    var l = e[t];
    r[l[0]] = l[1];
  }
  return r;
}
var d2;
const P = typeof window < "u", E = (e) => typeof e == "number", bM = (e) => typeof e == "string", kM = () => {
};
P && ((d2 = window == null ? void 0 : window.navigator) == null ? void 0 : d2.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function B2(e) {
  return typeof e == "function" ? e() : v(e);
}
function SM(e) {
  return e;
}
function a2(e) {
  return E2() ? (I2(e), !0) : !1;
}
function qM(e, t = !0) {
  K() ? z2(e) : t ? e() : N2(e);
}
function FM(e, t, a = {}) {
  const {
    immediate: r = !0
  } = a, l = L(!1);
  let o = null;
  function u() {
    o && (clearTimeout(o), o = null);
  }
  function c() {
    l.value = !1, u();
  }
  function h(...g) {
    u(), l.value = !0, o = setTimeout(() => {
      l.value = !1, o = null, e(...g);
    }, B2(t));
  }
  return r && (l.value = !0, P && h()), a2(c), {
    isPending: l,
    start: h,
    stop: c
  };
}
function L2(e) {
  var t;
  const a = B2(e);
  return (t = a == null ? void 0 : a.$el) != null ? t : a;
}
const A2 = P ? window : void 0;
function OM(...e) {
  let t, a, r, l;
  if (bM(e[0]) || Array.isArray(e[0]) ? ([a, r, l] = e, t = A2) : [t, a, r, l] = e, !t)
    return kM;
  Array.isArray(a) || (a = [a]), Array.isArray(r) || (r = [r]);
  const o = [], u = () => {
    o.forEach((f) => f()), o.length = 0;
  }, c = (f, p, C) => (f.addEventListener(p, C, l), () => f.removeEventListener(p, C, l)), h = N(() => L2(t), (f) => {
    u(), f && o.push(...a.flatMap((p) => r.map((C) => c(f, p, C))));
  }, { immediate: !0, flush: "post" }), g = () => {
    h(), u();
  };
  return a2(g), g;
}
function PM(e, t = !1) {
  const a = L(), r = () => a.value = Boolean(e());
  return r(), qM(r, t), a;
}
const G = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, j = "__vueuse_ssr_handlers__";
G[j] = G[j] || {};
G[j];
var v2 = Object.getOwnPropertySymbols, TM = Object.prototype.hasOwnProperty, DM = Object.prototype.propertyIsEnumerable, EM = (e, t) => {
  var a = {};
  for (var r in e)
    TM.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && v2)
    for (var r of v2(e))
      t.indexOf(r) < 0 && DM.call(e, r) && (a[r] = e[r]);
  return a;
};
function IM(e, t, a = {}) {
  const r = a, { window: l = A2 } = r, o = EM(r, ["window"]);
  let u;
  const c = PM(() => l && "ResizeObserver" in l), h = () => {
    u && (u.disconnect(), u = void 0);
  }, g = N(() => L2(e), (p) => {
    h(), c.value && l && p && (u = new ResizeObserver(t), u.observe(p, o));
  }, { immediate: !0, flush: "post" }), f = () => {
    h(), g();
  };
  return a2(f), {
    isSupported: c,
    stop: f
  };
}
var c2;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(c2 || (c2 = {}));
var NM = Object.defineProperty, h2 = Object.getOwnPropertySymbols, RM = Object.prototype.hasOwnProperty, UM = Object.prototype.propertyIsEnumerable, p2 = (e, t, a) => t in e ? NM(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, WM = (e, t) => {
  for (var a in t || (t = {}))
    RM.call(t, a) && p2(e, a, t[a]);
  if (h2)
    for (var a of h2(t))
      UM.call(t, a) && p2(e, a, t[a]);
  return e;
};
const GM = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
WM({
  linear: SM
}, GM);
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const jM = Object.prototype.hasOwnProperty, f2 = (e, t) => jM.call(e, t), Z = (e) => typeof e == "function", F = (e) => typeof e == "string", b2 = (e) => e !== null && typeof e == "object", ZM = (e) => e === void 0, QM = (e) => typeof Element > "u" ? !1 : e instanceof Element, KM = (e) => F(e) ? !Number.isNaN(Number(e)) : !1, w2 = (e) => Object.keys(e);
class JM extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function _2(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const a = F(e) ? new JM(`[${e}] ${t}`) : e;
    console.warn(a);
  }
}
const XM = "utils/dom/style";
function YM(e, t = "px") {
  if (!e)
    return "";
  if (E(e) || KM(e))
    return `${e}${t}`;
  if (F(e))
    return e;
  _2(XM, "binding value must be a string or number");
}
const k2 = "__epPropKey", V = (e) => e, eV = (e) => b2(e) && !!e[k2], S2 = (e, t) => {
  if (!b2(e) || eV(e))
    return e;
  const { values: a, required: r, default: l, type: o, validator: u } = e, h = {
    type: o,
    required: !!r,
    validator: a || u ? (g) => {
      let f = !1, p = [];
      if (a && (p = Array.from(a), f2(e, "default") && p.push(l), f || (f = p.includes(g))), u && (f || (f = u(g))), !f && p.length > 0) {
        const C = [...new Set(p)].map((b) => JSON.stringify(b)).join(", ");
        R2(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${C}], got value ${JSON.stringify(g)}.`);
      }
      return f;
    } : void 0,
    [k2]: !0
  };
  return f2(e, "default") && (h.default = l), h;
}, R = (e) => AM(Object.entries(e).map(([t, a]) => [
  t,
  S2(a, t)
])), tV = V([
  String,
  Object,
  Function
]), aV = {
  Close: y2,
  SuccessFilled: e2,
  InfoFilled: Y,
  WarningFilled: t2,
  CircleCloseFilled: X
}, m2 = {
  success: e2,
  warning: t2,
  error: X,
  info: Y
}, q2 = (e, t) => {
  if (e.install = (a) => {
    for (const r of [e, ...Object.values(t != null ? t : {})])
      a.component(r.name, r);
  }, t)
    for (const [a, r] of Object.entries(t))
      e[a] = r;
  return e;
}, _V = (e, t) => (e.install = (a) => {
  e._context = a._context, a.config.globalProperties[t] = e;
}, e), rV = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  left: "ArrowLeft",
  up: "ArrowUp",
  right: "ArrowRight",
  down: "ArrowDown",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter",
  pageUp: "PageUp",
  pageDown: "PageDown",
  home: "Home",
  end: "End"
}, lV = ["", "default", "small", "large"], oV = (e) => e, F2 = Symbol(), I = L();
function r2(e, t = void 0) {
  const a = K() ? W2(F2, I) : I;
  return e ? x(() => {
    var r, l;
    return (l = (r = a.value) == null ? void 0 : r[e]) != null ? l : t;
  }) : a;
}
const nV = (e, t, a = !1) => {
  var r;
  const l = !!K(), o = l ? r2() : void 0, u = (r = t == null ? void 0 : t.provide) != null ? r : l ? U2 : void 0;
  if (!u) {
    _2("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup().");
    return;
  }
  const c = x(() => {
    const h = v(e);
    return o != null && o.value ? sV(o.value, h) : h;
  });
  return u(F2, c), (a || !I.value) && (I.value = c.value), c;
}, sV = (e, t) => {
  var a;
  const r = [.../* @__PURE__ */ new Set([...w2(e), ...w2(t)])], l = {};
  for (const o of r)
    l[o] = (a = t[o]) != null ? a : e[o];
  return l;
}, iV = S2({
  type: String,
  values: lV,
  required: !1
}), uV = "el", dV = "is-", B = (e, t, a, r, l) => {
  let o = `${e}-${t}`;
  return a && (o += `-${a}`), r && (o += `__${r}`), l && (o += `--${l}`), o;
}, l2 = (e) => {
  const t = r2("namespace", uV);
  return {
    namespace: t,
    b: (d = "") => B(t.value, e, d, "", ""),
    e: (d) => d ? B(t.value, e, "", d, "") : "",
    m: (d) => d ? B(t.value, e, "", "", d) : "",
    be: (d, w) => d && w ? B(t.value, e, d, w, "") : "",
    em: (d, w) => d && w ? B(t.value, e, "", d, w) : "",
    bm: (d, w) => d && w ? B(t.value, e, d, "", w) : "",
    bem: (d, w, $) => d && w && $ ? B(t.value, e, d, w, $) : "",
    is: (d, ...w) => {
      const $ = w.length >= 1 ? w[0] : !0;
      return d && $ ? `${dV}${d}` : "";
    },
    cssVar: (d) => {
      const w = {};
      for (const $ in d)
        d[$] && (w[`--${t.value}-${$}`] = d[$]);
      return w;
    },
    cssVarName: (d) => `--${t.value}-${d}`,
    cssVarBlock: (d) => {
      const w = {};
      for (const $ in d)
        d[$] && (w[`--${t.value}-${e}-${$}`] = d[$]);
      return w;
    },
    cssVarBlockName: (d) => `--${t.value}-${e}-${d}`
  };
}, g2 = L(0), vV = () => {
  const e = r2("zIndex", 2e3), t = x(() => e.value + g2.value);
  return {
    initialZIndex: e,
    currentZIndex: t,
    nextZIndex: () => (g2.value++, t.value)
  };
};
var o2 = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [r, l] of t)
    a[r] = l;
  return a;
};
const cV = R({
  size: {
    type: V([Number, String])
  },
  color: {
    type: String
  }
}), hV = y({
  name: "ElIcon",
  inheritAttrs: !1
}), pV = /* @__PURE__ */ y({
  ...hV,
  props: cV,
  setup(e) {
    const t = e, a = l2("icon"), r = x(() => {
      const { size: l, color: o } = t;
      return !l && !o ? {} : {
        fontSize: ZM(l) ? void 0 : YM(l),
        "--color": o
      };
    });
    return (l, o) => (n(), s("i", G2({
      class: v(a).b(),
      style: v(r)
    }, l.$attrs), [
      O(l.$slots, "default")
    ], 16));
  }
});
var fV = /* @__PURE__ */ o2(pV, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const $2 = q2(fV), wV = R({
  value: {
    type: [String, Number],
    default: ""
  },
  max: {
    type: Number,
    default: 99
  },
  isDot: Boolean,
  hidden: Boolean,
  type: {
    type: String,
    values: ["primary", "success", "warning", "info", "danger"],
    default: "danger"
  }
}), mV = ["textContent"], gV = y({
  name: "ElBadge"
}), $V = /* @__PURE__ */ y({
  ...gV,
  props: wV,
  setup(e, { expose: t }) {
    const a = e, r = l2("badge"), l = x(() => a.isDot ? "" : E(a.value) && E(a.max) ? a.max < a.value ? `${a.max}+` : `${a.value}` : `${a.value}`);
    return t({
      content: l
    }), (o, u) => (n(), s("div", {
      class: M(v(r).b())
    }, [
      O(o.$slots, "default"),
      S(x2, {
        name: `${v(r).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: A(() => [
          C2(_("sup", {
            class: M([
              v(r).e("content"),
              v(r).em("content", o.type),
              v(r).is("fixed", !!o.$slots.default),
              v(r).is("dot", o.isDot)
            ]),
            textContent: J(v(l))
          }, null, 10, mV), [
            [H2, !o.hidden && (v(l) || o.isDot)]
          ])
        ]),
        _: 1
      }, 8, ["name"])
    ], 2));
  }
});
var zV = /* @__PURE__ */ o2($V, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue"]]);
const xV = q2(zV), Q = {}, CV = R({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: V(Object)
  },
  size: iV,
  button: {
    type: V(Object)
  },
  experimentalFeatures: {
    type: V(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: V(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  }
});
y({
  name: "ElConfigProvider",
  props: CV,
  setup(e, { slots: t }) {
    N(() => e.message, (r) => {
      Object.assign(Q, r != null ? r : {});
    }, { immediate: !0, deep: !0 });
    const a = nV(e);
    return () => O(t, "default", { config: a == null ? void 0 : a.value });
  }
});
const O2 = ["success", "info", "warning", "error"], z = oV({
  customClass: "",
  center: !1,
  dangerouslyUseHTMLString: !1,
  duration: 3e3,
  icon: void 0,
  id: "",
  message: "",
  onClose: void 0,
  showClose: !1,
  type: "info",
  offset: 16,
  zIndex: 0,
  grouping: !1,
  repeatNum: 1,
  appendTo: P ? document.body : void 0
}), HV = R({
  customClass: {
    type: String,
    default: z.customClass
  },
  center: {
    type: Boolean,
    default: z.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: z.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: z.duration
  },
  icon: {
    type: tV,
    default: z.icon
  },
  id: {
    type: String,
    default: z.id
  },
  message: {
    type: V([
      String,
      Object,
      Function
    ]),
    default: z.message
  },
  onClose: {
    type: V(Function),
    required: !1
  },
  showClose: {
    type: Boolean,
    default: z.showClose
  },
  type: {
    type: String,
    values: O2,
    default: z.type
  },
  offset: {
    type: Number,
    default: z.offset
  },
  zIndex: {
    type: Number,
    default: z.zIndex
  },
  grouping: {
    type: Boolean,
    default: z.grouping
  },
  repeatNum: {
    type: Number,
    default: z.repeatNum
  }
}), MV = {
  destroy: () => !0
}, H = j2([]), VV = (e) => {
  const t = H.findIndex((l) => l.id === e), a = H[t];
  let r;
  return t > 0 && (r = H[t - 1]), { current: a, prev: r };
}, yV = (e) => {
  const { prev: t } = VV(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, BV = ["id"], LV = ["innerHTML"], AV = y({
  name: "ElMessage"
}), bV = /* @__PURE__ */ y({
  ...AV,
  props: HV,
  emits: MV,
  setup(e, { expose: t }) {
    const a = e, { Close: r } = aV, l = l2("message"), o = L(), u = L(!1), c = L(0);
    let h;
    const g = x(() => a.type ? a.type === "error" ? "danger" : a.type : "info"), f = x(() => {
      const m = a.type;
      return { [l.bm("icon", m)]: m && m2[m] };
    }), p = x(() => a.icon || m2[a.type] || ""), C = x(() => yV(a.id)), b = x(() => a.offset + C.value), d = x(() => c.value + b.value), w = x(() => ({
      top: `${b.value}px`,
      zIndex: a.zIndex
    }));
    function $() {
      a.duration !== 0 && ({ stop: h } = FM(() => {
        T();
      }, a.duration));
    }
    function n2() {
      h == null || h();
    }
    function T() {
      u.value = !1;
    }
    function T2({ code: m }) {
      m === rV.esc && T();
    }
    return z2(() => {
      $(), u.value = !0;
    }), N(() => a.repeatNum, () => {
      n2(), $();
    }), OM(document, "keydown", T2), IM(o, () => {
      c.value = o.value.getBoundingClientRect().height;
    }), t({
      visible: u,
      bottom: d,
      close: T
    }), (m, s2) => (n(), k(x2, {
      name: v(l).b("fade"),
      onBeforeLeave: m.onClose,
      onAfterLeave: s2[0] || (s2[0] = (NV) => m.$emit("destroy")),
      persisted: ""
    }, {
      default: A(() => [
        C2(_("div", {
          id: m.id,
          ref_key: "messageRef",
          ref: o,
          class: M([
            v(l).b(),
            { [v(l).m(m.type)]: m.type && !m.icon },
            v(l).is("center", m.center),
            v(l).is("closable", m.showClose),
            m.customClass
          ]),
          style: Z2(v(w)),
          role: "alert",
          onMouseenter: n2,
          onMouseleave: $
        }, [
          m.repeatNum > 1 ? (n(), k(v(xV), {
            key: 0,
            value: m.repeatNum,
            type: v(g),
            class: M(v(l).e("badge"))
          }, null, 8, ["value", "type", "class"])) : D("v-if", !0),
          v(p) ? (n(), k(v($2), {
            key: 1,
            class: M([v(l).e("icon"), v(f)])
          }, {
            default: A(() => [
              (n(), k(M2(v(p))))
            ]),
            _: 1
          }, 8, ["class"])) : D("v-if", !0),
          O(m.$slots, "default", {}, () => [
            m.dangerouslyUseHTMLString ? (n(), s(W, { key: 1 }, [
              D(" Caution here, message could've been compromised, never use user's input as message "),
              _("p", {
                class: M(v(l).e("content")),
                innerHTML: m.message
              }, null, 10, LV)
            ], 2112)) : (n(), s("p", {
              key: 0,
              class: M(v(l).e("content"))
            }, J(m.message), 3))
          ]),
          m.showClose ? (n(), k(v($2), {
            key: 2,
            class: M(v(l).e("closeBtn")),
            onClick: Q2(T, ["stop"])
          }, {
            default: A(() => [
              S(v(r))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : D("v-if", !0)
        ], 46, BV), [
          [H2, u.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave"]));
  }
});
var kV = /* @__PURE__ */ o2(bV, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/message/src/message.vue"]]);
let SV = 1;
const P2 = (e) => {
  const t = !e || F(e) || V2(e) || Z(e) ? { message: e } : e, a = {
    ...z,
    ...t
  };
  if (!a.appendTo)
    a.appendTo = document.body;
  else if (F(a.appendTo)) {
    let r = document.querySelector(a.appendTo);
    QM(r) || (_2("ElMessage", "the appendTo option is not an HTMLElement. Falling back to document.body."), r = document.body), a.appendTo = r;
  }
  return a;
}, qV = (e) => {
  const t = H.indexOf(e);
  if (t === -1)
    return;
  H.splice(t, 1);
  const { handler: a } = e;
  a.close();
}, FV = ({ appendTo: e, ...t }, a) => {
  const { nextZIndex: r } = vV(), l = `message_${SV++}`, o = t.onClose, u = document.createElement("div"), c = {
    ...t,
    zIndex: r() + t.zIndex,
    id: l,
    onClose: () => {
      o == null || o(), qV(p);
    },
    onDestroy: () => {
      i2(null, u);
    }
  }, h = S(kV, c, Z(c.message) || V2(c.message) ? {
    default: Z(c.message) ? c.message : () => c.message
  } : null);
  h.appContext = a || q._context, i2(h, u), e.appendChild(u.firstElementChild);
  const g = h.component, p = {
    id: l,
    vnode: h,
    vm: g,
    handler: {
      close: () => {
        g.exposed.visible.value = !1;
      }
    },
    props: h.component.props
  };
  return p;
}, q = (e = {}, t) => {
  if (!P)
    return { close: () => {
    } };
  if (E(Q.max) && H.length >= Q.max)
    return { close: () => {
    } };
  const a = P2(e);
  if (a.grouping && H.length) {
    const l = H.find(({ vnode: o }) => {
      var u;
      return ((u = o.props) == null ? void 0 : u.message) === a.message;
    });
    if (l)
      return l.props.repeatNum += 1, l.props.type = a.type, l.handler;
  }
  const r = FV(a, t);
  return H.push(r), r.handler;
};
O2.forEach((e) => {
  q[e] = (t = {}, a) => {
    const r = P2(t);
    return q({ ...r, type: e }, a);
  };
});
function OV(e) {
  for (const t of H)
    (!e || e === t.props.type) && t.handler.close();
}
q.closeAll = OV;
q._context = null;
const PV = _V(q, "$message"), TV = (e) => {
  let t = document.createElement("input");
  t.value = e, document.body.appendChild(t), t.select(), document.execCommand("Copy"), document.body.removeChild(t), PV.success("\u590D\u5236\u6210\u529F");
}, DV = { class: "container" }, EV = ["onClick"], IV = /* @__PURE__ */ y({
  __name: "index",
  props: {
    title: null,
    visible: { type: Boolean }
  },
  emits: ["update:visible"],
  setup(e, { emit: t }) {
    const a = e, r = () => {
      t("update:visible", !a.visible);
    }, l = () => {
      t("update:visible", !1);
    }, o = (u) => {
      TV(`<el-icon-${u2(u)} />`), t("update:visible", !1);
    };
    return (u, c) => {
      const h = U("el-button"), g = U("el-scrollbar"), f = U("el-dialog");
      return n(), s(W, null, [
        S(h, { onClick: r }, {
          default: A(() => [
            O(u.$slots, "default")
          ]),
          _: 3
        }),
        S(f, {
          "before-close": l,
          title: a.title,
          modelValue: a.visible,
          "onUpdate:modelValue": c[0] || (c[0] = (p) => a.visible = p)
        }, {
          default: A(() => [
            S(g, { height: "500px" }, {
              default: A(() => [
                _("div", DV, [
                  (n(!0), s(W, null, K2(Object.keys(LM), (p, C) => (n(), s("div", {
                    class: "item",
                    key: C,
                    onClick: (b) => o(p)
                  }, [
                    _("div", null, [
                      (n(), k(M2(`el-icon-${v(u2)(p)}`)))
                    ]),
                    _("div", null, J(p), 1)
                  ], 8, EV))), 128))
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["title", "modelValue"])
      ], 64);
    };
  }
});
const UV = {
  install(e) {
    e.component("m-choose-icon", IV);
  }
};
export {
  UV as default
};
