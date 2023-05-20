import { defineComponent as Kt, h as Qe, Fragment as Ps, Teleport as Hs, reactive as Bs, ref as Ls, openBlock as js, createBlock as Us, unref as On, withCtx as zs, createElementVNode as Pn, toDisplayString as Hn } from "vue";
var gt, S, zr, Ae, ae, Bn, Fr, Wr, Ke = {}, Vr = [], Fs = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function K(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Gr(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function g(t, e, n) {
  var r, i, s, l = {};
  for (s in e)
    s == "key" ? r = e[s] : s == "ref" ? i = e[s] : l[s] = e[s];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? gt.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (s in t.defaultProps)
      l[s] === void 0 && (l[s] = t.defaultProps[s]);
  return Ye(t, l, r, i, null);
}
function Ye(t, e, n, r, i) {
  var s = { type: t, props: e, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++zr : i };
  return i == null && S.vnode != null && S.vnode(s), s;
}
function B() {
  return { current: null };
}
function I(t) {
  return t.children;
}
function Ws(t, e, n, r, i) {
  var s;
  for (s in n)
    s === "children" || s === "key" || s in e || et(t, s, null, n[s], r);
  for (s in e)
    i && typeof e[s] != "function" || s === "children" || s === "key" || s === "value" || s === "checked" || n[s] === e[s] || et(t, s, e[s], n[s], r);
}
function Ln(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n == null ? "" : n) : t[e] = n == null ? "" : typeof n != "number" || Fs.test(e) ? n : n + "px";
}
function et(t, e, n, r, i) {
  var s;
  e:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof r == "string" && (t.style.cssText = r = ""), r)
          for (e in r)
            n && e in n || Ln(t.style, e, "");
        if (n)
          for (e in n)
            r && n[e] === r[e] || Ln(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      s = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + s] = n, n ? r || t.addEventListener(e, s ? Un : jn, s) : t.removeEventListener(e, s ? Un : jn, s);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "width" && e !== "height" && e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n == null ? "" : n;
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function jn(t) {
  Ae = !0;
  try {
    return this.l[t.type + !1](S.event ? S.event(t) : t);
  } finally {
    Ae = !1;
  }
}
function Un(t) {
  Ae = !0;
  try {
    return this.l[t.type + !0](S.event ? S.event(t) : t);
  } finally {
    Ae = !1;
  }
}
function j(t, e) {
  this.props = t, this.context = e;
}
function Ie(t, e) {
  if (e == null)
    return t.__ ? Ie(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? Ie(t) : null;
}
function qr(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return qr(t);
  }
}
function Vs(t) {
  Ae ? setTimeout(t) : Fr(t);
}
function Lt(t) {
  (!t.__d && (t.__d = !0) && ae.push(t) && !tt.__r++ || Bn !== S.debounceRendering) && ((Bn = S.debounceRendering) || Vs)(tt);
}
function tt() {
  var t, e, n, r, i, s, l, o;
  for (ae.sort(function(a, d) {
    return a.__v.__b - d.__v.__b;
  }); t = ae.shift(); )
    t.__d && (e = ae.length, r = void 0, i = void 0, l = (s = (n = t).__v).__e, (o = n.__P) && (r = [], (i = K({}, s)).__v = s.__v + 1, en(o, s, i, n.__n, o.ownerSVGElement !== void 0, s.__h != null ? [l] : null, r, l == null ? Ie(s) : l, s.__h), Xr(r, s), s.__e != l && qr(s)), ae.length > e && ae.sort(function(a, d) {
      return a.__v.__b - d.__v.__b;
    }));
  tt.__r = 0;
}
function Qr(t, e, n, r, i, s, l, o, a, d) {
  var c, f, h, u, m, v, b, y = r && r.__k || Vr, E = y.length;
  for (n.__k = [], c = 0; c < e.length; c++)
    if ((u = n.__k[c] = (u = e[c]) == null || typeof u == "boolean" ? null : typeof u == "string" || typeof u == "number" || typeof u == "bigint" ? Ye(null, u, null, null, u) : Array.isArray(u) ? Ye(I, { children: u }, null, null, null) : u.__b > 0 ? Ye(u.type, u.props, u.key, u.ref ? u.ref : null, u.__v) : u) != null) {
      if (u.__ = n, u.__b = n.__b + 1, (h = y[c]) === null || h && u.key == h.key && u.type === h.type)
        y[c] = void 0;
      else
        for (f = 0; f < E; f++) {
          if ((h = y[f]) && u.key == h.key && u.type === h.type) {
            y[f] = void 0;
            break;
          }
          h = null;
        }
      en(t, u, h = h || Ke, i, s, l, o, a, d), m = u.__e, (f = u.ref) && h.ref != f && (b || (b = []), h.ref && b.push(h.ref, null, u), b.push(f, u.__c || m, u)), m != null ? (v == null && (v = m), typeof u.type == "function" && u.__k === h.__k ? u.__d = a = Yr(u, a, t) : a = Zr(t, u, h, y, m, a), typeof n.type == "function" && (n.__d = a)) : a && h.__e == a && a.parentNode != t && (a = Ie(h));
    }
  for (n.__e = v, c = E; c--; )
    y[c] != null && (typeof n.type == "function" && y[c].__e != null && y[c].__e == n.__d && (n.__d = $r(r).nextSibling), Kr(y[c], y[c]));
  if (b)
    for (c = 0; c < b.length; c++)
      Jr(b[c], b[++c], b[++c]);
}
function Yr(t, e, n) {
  for (var r, i = t.__k, s = 0; i && s < i.length; s++)
    (r = i[s]) && (r.__ = t, e = typeof r.type == "function" ? Yr(r, e, n) : Zr(n, r, r, i, r.__e, e));
  return e;
}
function nt(t, e) {
  return e = e || [], t == null || typeof t == "boolean" || (Array.isArray(t) ? t.some(function(n) {
    nt(n, e);
  }) : e.push(t)), e;
}
function Zr(t, e, n, r, i, s) {
  var l, o, a;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || i != s || i.parentNode == null)
    e:
      if (s == null || s.parentNode !== t)
        t.appendChild(i), l = null;
      else {
        for (o = s, a = 0; (o = o.nextSibling) && a < r.length; a += 1)
          if (o == i)
            break e;
        t.insertBefore(i, s), l = s;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function $r(t) {
  var e, n, r;
  if (t.type == null || typeof t.type == "string")
    return t.__e;
  if (t.__k) {
    for (e = t.__k.length - 1; e >= 0; e--)
      if ((n = t.__k[e]) && (r = $r(n)))
        return r;
  }
  return null;
}
function en(t, e, n, r, i, s, l, o, a) {
  var d, c, f, h, u, m, v, b, y, E, C, D, x, _, k, R = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (a = n.__h, o = e.__e = n.__e, e.__h = null, s = [o]), (d = S.__b) && d(e);
  try {
    e:
      if (typeof R == "function") {
        if (b = e.props, y = (d = R.contextType) && r[d.__c], E = d ? y ? y.props.value : d.__ : r, n.__c ? v = (c = e.__c = n.__c).__ = c.__E : ("prototype" in R && R.prototype.render ? e.__c = c = new R(b, E) : (e.__c = c = new j(b, E), c.constructor = R, c.render = qs), y && y.sub(c), c.props = b, c.state || (c.state = {}), c.context = E, c.__n = r, f = c.__d = !0, c.__h = [], c._sb = []), c.__s == null && (c.__s = c.state), R.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = K({}, c.__s)), K(c.__s, R.getDerivedStateFromProps(b, c.__s))), h = c.props, u = c.state, c.__v = e, f)
          R.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount);
        else {
          if (R.getDerivedStateFromProps == null && b !== h && c.componentWillReceiveProps != null && c.componentWillReceiveProps(b, E), !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(b, c.__s, E) === !1 || e.__v === n.__v) {
            for (e.__v !== n.__v && (c.props = b, c.state = c.__s, c.__d = !1), e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(J) {
              J && (J.__ = e);
            }), C = 0; C < c._sb.length; C++)
              c.__h.push(c._sb[C]);
            c._sb = [], c.__h.length && l.push(c);
            break e;
          }
          c.componentWillUpdate != null && c.componentWillUpdate(b, c.__s, E), c.componentDidUpdate != null && c.__h.push(function() {
            c.componentDidUpdate(h, u, m);
          });
        }
        if (c.context = E, c.props = b, c.__P = t, D = S.__r, x = 0, "prototype" in R && R.prototype.render) {
          for (c.state = c.__s, c.__d = !1, D && D(e), d = c.render(c.props, c.state, c.context), _ = 0; _ < c._sb.length; _++)
            c.__h.push(c._sb[_]);
          c._sb = [];
        } else
          do
            c.__d = !1, D && D(e), d = c.render(c.props, c.state, c.context), c.state = c.__s;
          while (c.__d && ++x < 25);
        c.state = c.__s, c.getChildContext != null && (r = K(K({}, r), c.getChildContext())), f || c.getSnapshotBeforeUpdate == null || (m = c.getSnapshotBeforeUpdate(h, u)), k = d != null && d.type === I && d.key == null ? d.props.children : d, Qr(t, Array.isArray(k) ? k : [k], e, n, r, i, s, l, o, a), c.base = e.__e, e.__h = null, c.__h.length && l.push(c), v && (c.__E = c.__ = null), c.__e = !1;
      } else
        s == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Gs(n.__e, e, n, r, i, s, l, a);
    (d = S.diffed) && d(e);
  } catch (J) {
    e.__v = null, (a || s != null) && (e.__e = o, e.__h = !!a, s[s.indexOf(o)] = null), S.__e(J, e, n);
  }
}
function Xr(t, e) {
  S.__c && S.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      S.__e(r, n.__v);
    }
  });
}
function Gs(t, e, n, r, i, s, l, o) {
  var a, d, c, f = n.props, h = e.props, u = e.type, m = 0;
  if (u === "svg" && (i = !0), s != null) {
    for (; m < s.length; m++)
      if ((a = s[m]) && "setAttribute" in a == !!u && (u ? a.localName === u : a.nodeType === 3)) {
        t = a, s[m] = null;
        break;
      }
  }
  if (t == null) {
    if (u === null)
      return document.createTextNode(h);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", u) : document.createElement(u, h.is && h), s = null, o = !1;
  }
  if (u === null)
    f === h || o && t.data === h || (t.data = h);
  else {
    if (s = s && gt.call(t.childNodes), d = (f = n.props || Ke).dangerouslySetInnerHTML, c = h.dangerouslySetInnerHTML, !o) {
      if (s != null)
        for (f = {}, m = 0; m < t.attributes.length; m++)
          f[t.attributes[m].name] = t.attributes[m].value;
      (c || d) && (c && (d && c.__html == d.__html || c.__html === t.innerHTML) || (t.innerHTML = c && c.__html || ""));
    }
    if (Ws(t, h, f, i, o), c)
      e.__k = [];
    else if (m = e.props.children, Qr(t, Array.isArray(m) ? m : [m], e, n, r, i && u !== "foreignObject", s, l, s ? s[0] : n.__k && Ie(n, 0), o), s != null)
      for (m = s.length; m--; )
        s[m] != null && Gr(s[m]);
    o || ("value" in h && (m = h.value) !== void 0 && (m !== t.value || u === "progress" && !m || u === "option" && m !== f.value) && et(t, "value", m, f.value, !1), "checked" in h && (m = h.checked) !== void 0 && m !== t.checked && et(t, "checked", m, f.checked, !1));
  }
  return t;
}
function Jr(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (r) {
    S.__e(r, n);
  }
}
function Kr(t, e, n) {
  var r, i;
  if (S.unmount && S.unmount(t), (r = t.ref) && (r.current && r.current !== t.__e || Jr(r, null, e)), (r = t.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (s) {
        S.__e(s, e);
      }
    r.base = r.__P = null, t.__c = void 0;
  }
  if (r = t.__k)
    for (i = 0; i < r.length; i++)
      r[i] && Kr(r[i], e, n || typeof t.type != "function");
  n || t.__e == null || Gr(t.__e), t.__ = t.__e = t.__d = void 0;
}
function qs(t, e, n) {
  return this.constructor(t, n);
}
function ke(t, e, n) {
  var r, i, s;
  S.__ && S.__(t, e), i = (r = typeof n == "function") ? null : n && n.__k || e.__k, s = [], en(e, t = (!r && n || e).__k = g(I, null, [t]), i || Ke, Ke, e.ownerSVGElement !== void 0, !r && n ? [n] : i ? null : e.firstChild ? gt.call(e.childNodes) : null, s, !r && n ? n : i ? i.__e : e.firstChild, r), Xr(s, t);
}
function Qs(t, e) {
  var n = { __c: e = "__cC" + Wr++, __: t, Consumer: function(r, i) {
    return r.children(i);
  }, Provider: function(r) {
    var i, s;
    return this.getChildContext || (i = [], (s = {})[e] = this, this.getChildContext = function() {
      return s;
    }, this.shouldComponentUpdate = function(l) {
      this.props.value !== l.value && i.some(function(o) {
        o.__e = !0, Lt(o);
      });
    }, this.sub = function(l) {
      i.push(l);
      var o = l.componentWillUnmount;
      l.componentWillUnmount = function() {
        i.splice(i.indexOf(l), 1), o && o.call(l);
      };
    }), r.children;
  } };
  return n.Provider.__ = n.Consumer.contextType = n;
}
gt = Vr.slice, S = { __e: function(t, e, n, r) {
  for (var i, s, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((s = i.constructor) && s.getDerivedStateFromError != null && (i.setState(s.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, r || {}), l = i.__d), l)
          return i.__E = i;
      } catch (o) {
        t = o;
      }
  throw t;
} }, zr = 0, Ae = !1, j.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = K({}, this.state), typeof t == "function" && (t = t(K({}, n), this.props)), t && K(n, t), t != null && this.__v && (e && this._sb.push(e), Lt(this));
}, j.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Lt(this));
}, j.prototype.render = I, ae = [], Fr = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, tt.__r = 0, Wr = 0;
var W, At, zn, ei = [], Dt = [], Fn = S.__b, Wn = S.__r, Vn = S.diffed, Gn = S.__c, qn = S.unmount;
function Ys() {
  for (var t; t = ei.shift(); )
    if (t.__P && t.__H)
      try {
        t.__H.__h.forEach(Ze), t.__H.__h.forEach(jt), t.__H.__h = [];
      } catch (e) {
        t.__H.__h = [], S.__e(e, t.__v);
      }
}
S.__b = function(t) {
  W = null, Fn && Fn(t);
}, S.__r = function(t) {
  Wn && Wn(t);
  var e = (W = t.__c).__H;
  e && (At === W ? (e.__h = [], W.__h = [], e.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.__V = Dt, n.__N = n.i = void 0;
  })) : (e.__h.forEach(Ze), e.__h.forEach(jt), e.__h = [])), At = W;
}, S.diffed = function(t) {
  Vn && Vn(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (ei.push(e) !== 1 && zn === S.requestAnimationFrame || ((zn = S.requestAnimationFrame) || Zs)(Ys)), e.__H.__.forEach(function(n) {
    n.i && (n.__H = n.i), n.__V !== Dt && (n.__ = n.__V), n.i = void 0, n.__V = Dt;
  })), At = W = null;
}, S.__c = function(t, e) {
  e.some(function(n) {
    try {
      n.__h.forEach(Ze), n.__h = n.__h.filter(function(r) {
        return !r.__ || jt(r);
      });
    } catch (r) {
      e.some(function(i) {
        i.__h && (i.__h = []);
      }), e = [], S.__e(r, n.__v);
    }
  }), Gn && Gn(t, e);
}, S.unmount = function(t) {
  qn && qn(t);
  var e, n = t.__c;
  n && n.__H && (n.__H.__.forEach(function(r) {
    try {
      Ze(r);
    } catch (i) {
      e = i;
    }
  }), n.__H = void 0, e && S.__e(e, n.__v));
};
var Qn = typeof requestAnimationFrame == "function";
function Zs(t) {
  var e, n = function() {
    clearTimeout(r), Qn && cancelAnimationFrame(e), setTimeout(t);
  }, r = setTimeout(n, 100);
  Qn && (e = requestAnimationFrame(n));
}
function Ze(t) {
  var e = W, n = t.__c;
  typeof n == "function" && (t.__c = void 0, n()), W = e;
}
function jt(t) {
  var e = W;
  t.__c = t.__(), W = e;
}
function $s(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Yn(t, e) {
  for (var n in t)
    if (n !== "__source" && !(n in e))
      return !0;
  for (var r in e)
    if (r !== "__source" && t[r] !== e[r])
      return !0;
  return !1;
}
function Zn(t) {
  this.props = t;
}
(Zn.prototype = new j()).isPureReactComponent = !0, Zn.prototype.shouldComponentUpdate = function(t, e) {
  return Yn(this.props, t) || Yn(this.state, e);
};
var $n = S.__b;
S.__b = function(t) {
  t.type && t.type.__f && t.ref && (t.props.ref = t.ref, t.ref = null), $n && $n(t);
};
var Xs = S.__e;
S.__e = function(t, e, n, r) {
  if (t.then) {
    for (var i, s = e; s = s.__; )
      if ((i = s.__c) && i.__c)
        return e.__e == null && (e.__e = n.__e, e.__k = n.__k), i.__c(t, e);
  }
  Xs(t, e, n, r);
};
var Xn = S.unmount;
function ti(t, e, n) {
  return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), t.__c.__H = null), (t = $s({}, t)).__c != null && (t.__c.__P === n && (t.__c.__P = e), t.__c = null), t.__k = t.__k && t.__k.map(function(r) {
    return ti(r, e, n);
  })), t;
}
function ni(t, e, n) {
  return t && (t.__v = null, t.__k = t.__k && t.__k.map(function(r) {
    return ni(r, e, n);
  }), t.__c && t.__c.__P === e && (t.__e && n.insertBefore(t.__e, t.__d), t.__c.__e = !0, t.__c.__P = n)), t;
}
function Ct() {
  this.__u = 0, this.t = null, this.__b = null;
}
function ri(t) {
  var e = t.__.__c;
  return e && e.__a && e.__a(t);
}
function je() {
  this.u = null, this.o = null;
}
S.unmount = function(t) {
  var e = t.__c;
  e && e.__R && e.__R(), e && t.__h === !0 && (t.type = null), Xn && Xn(t);
}, (Ct.prototype = new j()).__c = function(t, e) {
  var n = e.__c, r = this;
  r.t == null && (r.t = []), r.t.push(n);
  var i = ri(r.__v), s = !1, l = function() {
    s || (s = !0, n.__R = null, i ? i(o) : o());
  };
  n.__R = l;
  var o = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var d = r.state.__a;
        r.__v.__k[0] = ni(d, d.__c.__P, d.__c.__O);
      }
      var c;
      for (r.setState({ __a: r.__b = null }); c = r.t.pop(); )
        c.forceUpdate();
    }
  }, a = e.__h === !0;
  r.__u++ || a || r.setState({ __a: r.__b = r.__v.__k[0] }), t.then(l, l);
}, Ct.prototype.componentWillUnmount = function() {
  this.t = [];
}, Ct.prototype.render = function(t, e) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = ti(this.__b, n, r.__O = r.__P);
    }
    this.__b = null;
  }
  var i = e.__a && g(I, null, t.fallback);
  return i && (i.__h = null), [g(I, null, e.__a ? null : t.children), i];
};
var Jn = function(t, e, n) {
  if (++n[1] === n[0] && t.o.delete(e), t.props.revealOrder && (t.props.revealOrder[0] !== "t" || !t.o.size))
    for (n = t.u; n; ) {
      for (; n.length > 3; )
        n.pop()();
      if (n[1] < n[0])
        break;
      t.u = n = n[2];
    }
};
function Js(t) {
  return this.getChildContext = function() {
    return t.context;
  }, t.children;
}
function Ks(t) {
  var e = this, n = t.i;
  e.componentWillUnmount = function() {
    ke(null, e.l), e.l = null, e.i = null;
  }, e.i && e.i !== n && e.componentWillUnmount(), t.__v ? (e.l || (e.i = n, e.l = { nodeType: 1, parentNode: n, childNodes: [], appendChild: function(r) {
    this.childNodes.push(r), e.i.appendChild(r);
  }, insertBefore: function(r, i) {
    this.childNodes.push(r), e.i.appendChild(r);
  }, removeChild: function(r) {
    this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1), e.i.removeChild(r);
  } }), ke(g(Js, { context: e.context }, t.__v), e.l)) : e.l && e.componentWillUnmount();
}
function el(t, e) {
  var n = g(Ks, { __v: t, i: e });
  return n.containerInfo = e, n;
}
(je.prototype = new j()).__a = function(t) {
  var e = this, n = ri(e.__v), r = e.o.get(t);
  return r[0]++, function(i) {
    var s = function() {
      e.props.revealOrder ? (r.push(i), Jn(e, t, r)) : i();
    };
    n ? n(s) : s();
  };
}, je.prototype.render = function(t) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var e = nt(t.children);
  t.revealOrder && t.revealOrder[0] === "b" && e.reverse();
  for (var n = e.length; n--; )
    this.o.set(e[n], this.u = [1, 0, this.u]);
  return t.children;
}, je.prototype.componentDidUpdate = je.prototype.componentDidMount = function() {
  var t = this;
  this.o.forEach(function(e, n) {
    Jn(t, n, e);
  });
};
var tl = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, nl = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, rl = typeof document < "u", il = function(t) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/i : /fil|che|ra/i).test(t);
};
j.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t) {
  Object.defineProperty(j.prototype, t, { configurable: !0, get: function() {
    return this["UNSAFE_" + t];
  }, set: function(e) {
    Object.defineProperty(this, t, { configurable: !0, writable: !0, value: e });
  } });
});
var Kn = S.event;
function sl() {
}
function ll() {
  return this.cancelBubble;
}
function ol() {
  return this.defaultPrevented;
}
S.event = function(t) {
  return Kn && (t = Kn(t)), t.persist = sl, t.isPropagationStopped = ll, t.isDefaultPrevented = ol, t.nativeEvent = t;
};
var er = { configurable: !0, get: function() {
  return this.class;
} }, tr = S.vnode;
S.vnode = function(t) {
  var e = t.type, n = t.props, r = n;
  if (typeof e == "string") {
    var i = e.indexOf("-") === -1;
    for (var s in r = {}, n) {
      var l = n[s];
      rl && s === "children" && e === "noscript" || s === "value" && "defaultValue" in n && l == null || (s === "defaultValue" && "value" in n && n.value == null ? s = "value" : s === "download" && l === !0 ? l = "" : /ondoubleclick/i.test(s) ? s = "ondblclick" : /^onchange(textarea|input)/i.test(s + e) && !il(n.type) ? s = "oninput" : /^onfocus$/i.test(s) ? s = "onfocusin" : /^onblur$/i.test(s) ? s = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(s) ? s = s.toLowerCase() : i && nl.test(s) ? s = s.replace(/[A-Z0-9]/g, "-$&").toLowerCase() : l === null && (l = void 0), /^oninput$/i.test(s) && (s = s.toLowerCase(), r[s] && (s = "oninputCapture")), r[s] = l);
    }
    e == "select" && r.multiple && Array.isArray(r.value) && (r.value = nt(n.children).forEach(function(o) {
      o.props.selected = r.value.indexOf(o.props.value) != -1;
    })), e == "select" && r.defaultValue != null && (r.value = nt(n.children).forEach(function(o) {
      o.props.selected = r.multiple ? r.defaultValue.indexOf(o.props.value) != -1 : r.defaultValue == o.props.value;
    })), t.props = r, n.class != n.className && (er.enumerable = "className" in n, n.className != null && (r.class = n.className), Object.defineProperty(r, "className", er));
  }
  t.$$typeof = tl, tr && tr(t);
};
var nr = S.__r;
S.__r = function(t) {
  nr && nr(t), t.__c;
};
const ii = [], Ut = /* @__PURE__ */ new Map(), rr = " fullcalendar styles ";
typeof document < "u" && si(document, document.head, document.head.querySelector("script,link,style"));
function tn(t) {
  ii.push(t), Ut.forEach((e) => {
    li(t, e);
  });
}
function al(t) {
  si(t.getRootNode());
}
function si(t, e = t, n = e.firstChild) {
  if (!Ut.has(t)) {
    const r = document.createComment(rr), i = document.createComment(` END${rr}`);
    e.insertBefore(i, n), e.insertBefore(r, i), Ut.set(t, i), cl(i);
  }
}
function cl(t) {
  for (const e of ii)
    li(e, t);
}
function li(t, e) {
  const n = document.createElement("style"), r = dl();
  r && (n.nonce = r), n.innerText = t, e.parentNode.insertBefore(n, e);
}
let wt;
function dl() {
  return wt === void 0 && (wt = ul()), wt;
}
function ul() {
  const t = document.querySelector('meta[name="csp-nonce"]');
  if (t && t.hasAttribute("content"))
    return t.getAttribute("content");
  const e = document.querySelector("script[nonce]");
  return e && e.nonce || "";
}
var fl = ':root{--fc-small-font-size:.85em;--fc-page-bg-color:#fff;--fc-neutral-bg-color:hsla(0,0%,82%,.3);--fc-neutral-text-color:grey;--fc-border-color:#ddd;--fc-button-text-color:#fff;--fc-button-bg-color:#2c3e50;--fc-button-border-color:#2c3e50;--fc-button-hover-bg-color:#1e2b37;--fc-button-hover-border-color:#1a252f;--fc-button-active-bg-color:#1a252f;--fc-button-active-border-color:#151e27;--fc-event-bg-color:#3788d8;--fc-event-border-color:#3788d8;--fc-event-text-color:#fff;--fc-event-selected-overlay-color:rgba(0,0,0,.25);--fc-more-link-bg-color:#d0d0d0;--fc-more-link-text-color:inherit;--fc-event-resizer-thickness:8px;--fc-event-resizer-dot-total-width:8px;--fc-event-resizer-dot-border-width:1px;--fc-non-business-color:hsla(0,0%,84%,.3);--fc-bg-event-color:#8fdf82;--fc-bg-event-opacity:0.3;--fc-highlight-color:rgba(188,232,241,.3);--fc-today-bg-color:rgba(255,220,40,.15);--fc-now-indicator-color:red}.fc-not-allowed,.fc-not-allowed .fc-event{cursor:not-allowed}.fc{display:flex;flex-direction:column;font-size:1em}.fc,.fc *,.fc :after,.fc :before{box-sizing:border-box}.fc table{border-collapse:collapse;border-spacing:0;font-size:1em}.fc th{text-align:center}.fc td,.fc th{padding:0;vertical-align:top}.fc a[data-navlink]{cursor:pointer}.fc a[data-navlink]:hover{text-decoration:underline}.fc-direction-ltr{direction:ltr;text-align:left}.fc-direction-rtl{direction:rtl;text-align:right}.fc-theme-standard td,.fc-theme-standard th{border:1px solid var(--fc-border-color)}.fc-liquid-hack td,.fc-liquid-hack th{position:relative}@font-face{font-family:fcicons;font-style:normal;font-weight:400;src:url("data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBfAAAAC8AAAAYGNtYXAXVtKNAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5ZgYydxIAAAF4AAAFNGhlYWQUJ7cIAAAGrAAAADZoaGVhB20DzAAABuQAAAAkaG10eCIABhQAAAcIAAAALGxvY2ED4AU6AAAHNAAAABhtYXhwAA8AjAAAB0wAAAAgbmFtZXsr690AAAdsAAABhnBvc3QAAwAAAAAI9AAAACAAAwPAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpBgPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6Qb//f//AAAAAAAg6QD//f//AAH/4xcEAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAWIAjQKeAskAEwAAJSc3NjQnJiIHAQYUFwEWMjc2NCcCnuLiDQ0MJAz/AA0NAQAMJAwNDcni4gwjDQwM/wANIwz/AA0NDCMNAAAAAQFiAI0CngLJABMAACUBNjQnASYiBwYUHwEHBhQXFjI3AZ4BAA0N/wAMJAwNDeLiDQ0MJAyNAQAMIw0BAAwMDSMM4uINIwwNDQAAAAIA4gC3Ax4CngATACcAACUnNzY0JyYiDwEGFB8BFjI3NjQnISc3NjQnJiIPAQYUHwEWMjc2NCcB87e3DQ0MIw3VDQ3VDSMMDQ0BK7e3DQ0MJAzVDQ3VDCQMDQ3zuLcMJAwNDdUNIwzWDAwNIwy4twwkDA0N1Q0jDNYMDA0jDAAAAgDiALcDHgKeABMAJwAAJTc2NC8BJiIHBhQfAQcGFBcWMjchNzY0LwEmIgcGFB8BBwYUFxYyNwJJ1Q0N1Q0jDA0Nt7cNDQwjDf7V1Q0N1QwkDA0Nt7cNDQwkDLfWDCMN1Q0NDCQMt7gMIw0MDNYMIw3VDQ0MJAy3uAwjDQwMAAADAFUAAAOrA1UAMwBoAHcAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMhMjY1NCYjISIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAAVYRGRkR/qoRGRkRA1UFBAUOCQkVDAsZDf2rDRkLDBUJCA4FBQUFBQUOCQgVDAsZDQJVDRkLDBUJCQ4FBAVVAgECBQMCBwQECAX9qwQJAwQHAwMFAQICAgIBBQMDBwQDCQQCVQUIBAQHAgMFAgEC/oAZEhEZGRESGQAAAAADAFUAAAOrA1UAMwBoAIkAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMzFRQWMzI2PQEzMjY1NCYrATU0JiMiBh0BIyIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAgBkSEhmAERkZEYAZEhIZgBEZGREDVQUEBQ4JCRUMCxkN/asNGQsMFQkIDgUFBQUFBQ4JCBUMCxkNAlUNGQsMFQkJDgUEBVUCAQIFAwIHBAQIBf2rBAkDBAcDAwUBAgICAgEFAwMHBAMJBAJVBQgEBAcCAwUCAQL+gIASGRkSgBkSERmAEhkZEoAZERIZAAABAOIAjQMeAskAIAAAExcHBhQXFjI/ARcWMjc2NC8BNzY0JyYiDwEnJiIHBhQX4uLiDQ0MJAzi4gwkDA0N4uINDQwkDOLiDCQMDQ0CjeLiDSMMDQ3h4Q0NDCMN4uIMIw0MDOLiDAwNIwwAAAABAAAAAQAAa5n0y18PPPUACwQAAAAAANivOVsAAAAA2K85WwAAAAADqwNVAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAOrAAEAAAAAAAAAAAAAAAAAAAALBAAAAAAAAAAAAAAAAgAAAAQAAWIEAAFiBAAA4gQAAOIEAABVBAAAVQQAAOIAAAAAAAoAFAAeAEQAagCqAOoBngJkApoAAQAAAAsAigADAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAAcAAAABAAAAAAACAAcAYAABAAAAAAADAAcANgABAAAAAAAEAAcAdQABAAAAAAAFAAsAFQABAAAAAAAGAAcASwABAAAAAAAKABoAigADAAEECQABAA4ABwADAAEECQACAA4AZwADAAEECQADAA4APQADAAEECQAEAA4AfAADAAEECQAFABYAIAADAAEECQAGAA4AUgADAAEECQAKADQApGZjaWNvbnMAZgBjAGkAYwBvAG4Ac1ZlcnNpb24gMS4wAFYAZQByAHMAaQBvAG4AIAAxAC4AMGZjaWNvbnMAZgBjAGkAYwBvAG4Ac2ZjaWNvbnMAZgBjAGkAYwBvAG4Ac1JlZ3VsYXIAUgBlAGcAdQBsAGEAcmZjaWNvbnMAZgBjAGkAYwBvAG4Ac0ZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=") format("truetype")}.fc-icon{speak:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;display:inline-block;font-family:fcicons!important;font-style:normal;font-variant:normal;font-weight:400;height:1em;line-height:1;text-align:center;text-transform:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:1em}.fc-icon-chevron-left:before{content:"\\e900"}.fc-icon-chevron-right:before{content:"\\e901"}.fc-icon-chevrons-left:before{content:"\\e902"}.fc-icon-chevrons-right:before{content:"\\e903"}.fc-icon-minus-square:before{content:"\\e904"}.fc-icon-plus-square:before{content:"\\e905"}.fc-icon-x:before{content:"\\e906"}.fc .fc-button{border-radius:0;font-family:inherit;font-size:inherit;line-height:inherit;margin:0;overflow:visible;text-transform:none}.fc .fc-button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}.fc .fc-button{-webkit-appearance:button}.fc .fc-button:not(:disabled){cursor:pointer}.fc .fc-button::-moz-focus-inner{border-style:none;padding:0}.fc .fc-button{background-color:transparent;border:1px solid transparent;border-radius:.25em;display:inline-block;font-size:1em;font-weight:400;line-height:1.5;padding:.4em .65em;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle}.fc .fc-button:hover{text-decoration:none}.fc .fc-button:focus{box-shadow:0 0 0 .2rem rgba(44,62,80,.25);outline:0}.fc .fc-button:disabled{opacity:.65}.fc .fc-button-primary{background-color:var(--fc-button-bg-color);border-color:var(--fc-button-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:hover{background-color:var(--fc-button-hover-bg-color);border-color:var(--fc-button-hover-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:disabled{background-color:var(--fc-button-bg-color);border-color:var(--fc-button-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:focus{box-shadow:0 0 0 .2rem rgba(76,91,106,.5)}.fc .fc-button-primary:not(:disabled).fc-button-active,.fc .fc-button-primary:not(:disabled):active{background-color:var(--fc-button-active-bg-color);border-color:var(--fc-button-active-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:not(:disabled).fc-button-active:focus,.fc .fc-button-primary:not(:disabled):active:focus{box-shadow:0 0 0 .2rem rgba(76,91,106,.5)}.fc .fc-button .fc-icon{font-size:1.5em;vertical-align:middle}.fc .fc-button-group{display:inline-flex;position:relative;vertical-align:middle}.fc .fc-button-group>.fc-button{flex:1 1 auto;position:relative}.fc .fc-button-group>.fc-button.fc-button-active,.fc .fc-button-group>.fc-button:active,.fc .fc-button-group>.fc-button:focus,.fc .fc-button-group>.fc-button:hover{z-index:1}.fc-direction-ltr .fc-button-group>.fc-button:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0;margin-left:-1px}.fc-direction-ltr .fc-button-group>.fc-button:not(:last-child){border-bottom-right-radius:0;border-top-right-radius:0}.fc-direction-rtl .fc-button-group>.fc-button:not(:first-child){border-bottom-right-radius:0;border-top-right-radius:0;margin-right:-1px}.fc-direction-rtl .fc-button-group>.fc-button:not(:last-child){border-bottom-left-radius:0;border-top-left-radius:0}.fc .fc-toolbar{align-items:center;display:flex;justify-content:space-between}.fc .fc-toolbar.fc-header-toolbar{margin-bottom:1.5em}.fc .fc-toolbar.fc-footer-toolbar{margin-top:1.5em}.fc .fc-toolbar-title{font-size:1.75em;margin:0}.fc-direction-ltr .fc-toolbar>*>:not(:first-child){margin-left:.75em}.fc-direction-rtl .fc-toolbar>*>:not(:first-child){margin-right:.75em}.fc-direction-rtl .fc-toolbar-ltr{flex-direction:row-reverse}.fc .fc-scroller{-webkit-overflow-scrolling:touch;position:relative}.fc .fc-scroller-liquid{height:100%}.fc .fc-scroller-liquid-absolute{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-scroller-harness{direction:ltr;overflow:hidden;position:relative}.fc .fc-scroller-harness-liquid{height:100%}.fc-direction-rtl .fc-scroller-harness>.fc-scroller{direction:rtl}.fc-theme-standard .fc-scrollgrid{border:1px solid var(--fc-border-color)}.fc .fc-scrollgrid,.fc .fc-scrollgrid table{table-layout:fixed;width:100%}.fc .fc-scrollgrid table{border-left-style:hidden;border-right-style:hidden;border-top-style:hidden}.fc .fc-scrollgrid{border-bottom-width:0;border-collapse:separate;border-right-width:0}.fc .fc-scrollgrid-liquid{height:100%}.fc .fc-scrollgrid-section,.fc .fc-scrollgrid-section table,.fc .fc-scrollgrid-section>td{height:1px}.fc .fc-scrollgrid-section-liquid>td{height:100%}.fc .fc-scrollgrid-section>*{border-left-width:0;border-top-width:0}.fc .fc-scrollgrid-section-footer>*,.fc .fc-scrollgrid-section-header>*{border-bottom-width:0}.fc .fc-scrollgrid-section-body table,.fc .fc-scrollgrid-section-footer table{border-bottom-style:hidden}.fc .fc-scrollgrid-section-sticky>*{background:var(--fc-page-bg-color);position:sticky;z-index:3}.fc .fc-scrollgrid-section-header.fc-scrollgrid-section-sticky>*{top:0}.fc .fc-scrollgrid-section-footer.fc-scrollgrid-section-sticky>*{bottom:0}.fc .fc-scrollgrid-sticky-shim{height:1px;margin-bottom:-1px}.fc-sticky{position:sticky}.fc .fc-view-harness{flex-grow:1;position:relative}.fc .fc-view-harness-active>.fc-view{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-col-header-cell-cushion{display:inline-block;padding:2px 4px}.fc .fc-bg-event,.fc .fc-highlight,.fc .fc-non-business{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-non-business{background:var(--fc-non-business-color)}.fc .fc-bg-event{background:var(--fc-bg-event-color);opacity:var(--fc-bg-event-opacity)}.fc .fc-bg-event .fc-event-title{font-size:var(--fc-small-font-size);font-style:italic;margin:.5em}.fc .fc-highlight{background:var(--fc-highlight-color)}.fc .fc-cell-shaded,.fc .fc-day-disabled{background:var(--fc-neutral-bg-color)}a.fc-event,a.fc-event:hover{text-decoration:none}.fc-event.fc-event-draggable,.fc-event[href]{cursor:pointer}.fc-event .fc-event-main{position:relative;z-index:2}.fc-event-dragging:not(.fc-event-selected){opacity:.75}.fc-event-dragging.fc-event-selected{box-shadow:0 2px 7px rgba(0,0,0,.3)}.fc-event .fc-event-resizer{display:none;position:absolute;z-index:4}.fc-event-selected .fc-event-resizer,.fc-event:hover .fc-event-resizer{display:block}.fc-event-selected .fc-event-resizer{background:var(--fc-page-bg-color);border-color:inherit;border-radius:calc(var(--fc-event-resizer-dot-total-width)/2);border-style:solid;border-width:var(--fc-event-resizer-dot-border-width);height:var(--fc-event-resizer-dot-total-width);width:var(--fc-event-resizer-dot-total-width)}.fc-event-selected .fc-event-resizer:before{bottom:-20px;content:"";left:-20px;position:absolute;right:-20px;top:-20px}.fc-event-selected,.fc-event:focus{box-shadow:0 2px 5px rgba(0,0,0,.2)}.fc-event-selected:before,.fc-event:focus:before{bottom:0;content:"";left:0;position:absolute;right:0;top:0;z-index:3}.fc-event-selected:after,.fc-event:focus:after{background:var(--fc-event-selected-overlay-color);bottom:-1px;content:"";left:-1px;position:absolute;right:-1px;top:-1px;z-index:1}.fc-h-event{background-color:var(--fc-event-bg-color);border:1px solid var(--fc-event-border-color);display:block}.fc-h-event .fc-event-main{color:var(--fc-event-text-color)}.fc-h-event .fc-event-main-frame{display:flex}.fc-h-event .fc-event-time{max-width:100%;overflow:hidden}.fc-h-event .fc-event-title-container{flex-grow:1;flex-shrink:1;min-width:0}.fc-h-event .fc-event-title{display:inline-block;left:0;max-width:100%;overflow:hidden;right:0;vertical-align:top}.fc-h-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-start),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-end){border-bottom-left-radius:0;border-left-width:0;border-top-left-radius:0}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-end),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-start){border-bottom-right-radius:0;border-right-width:0;border-top-right-radius:0}.fc-h-event:not(.fc-event-selected) .fc-event-resizer{bottom:0;top:0;width:var(--fc-event-resizer-thickness)}.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start,.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end{cursor:w-resize;left:calc(var(--fc-event-resizer-thickness)*-.5)}.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end,.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start{cursor:e-resize;right:calc(var(--fc-event-resizer-thickness)*-.5)}.fc-h-event.fc-event-selected .fc-event-resizer{margin-top:calc(var(--fc-event-resizer-dot-total-width)*-.5);top:50%}.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-start,.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-end{left:calc(var(--fc-event-resizer-dot-total-width)*-.5)}.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-end,.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-start{right:calc(var(--fc-event-resizer-dot-total-width)*-.5)}.fc .fc-popover{box-shadow:0 2px 6px rgba(0,0,0,.15);position:absolute;z-index:9999}.fc .fc-popover-header{align-items:center;display:flex;flex-direction:row;justify-content:space-between;padding:3px 4px}.fc .fc-popover-title{margin:0 2px}.fc .fc-popover-close{cursor:pointer;font-size:1.1em;opacity:.65}.fc-theme-standard .fc-popover{background:var(--fc-page-bg-color);border:1px solid var(--fc-border-color)}.fc-theme-standard .fc-popover-header{background:var(--fc-neutral-bg-color)}';
tn(fl);
class nn {
  constructor(e) {
    this.drainedOption = e, this.isRunning = !1, this.isDirty = !1, this.pauseDepths = {}, this.timeoutId = 0;
  }
  request(e) {
    this.isDirty = !0, this.isPaused() || (this.clearTimeout(), e == null ? this.tryDrain() : this.timeoutId = setTimeout(
      this.tryDrain.bind(this),
      e
    ));
  }
  pause(e = "") {
    let { pauseDepths: n } = this;
    n[e] = (n[e] || 0) + 1, this.clearTimeout();
  }
  resume(e = "", n) {
    let { pauseDepths: r } = this;
    e in r && (n ? delete r[e] : (r[e] -= 1, r[e] <= 0 && delete r[e]), this.tryDrain());
  }
  isPaused() {
    return Object.keys(this.pauseDepths).length;
  }
  tryDrain() {
    if (!this.isRunning && !this.isPaused()) {
      for (this.isRunning = !0; this.isDirty; )
        this.isDirty = !1, this.drained();
      this.isRunning = !1;
    }
  }
  clear() {
    this.clearTimeout(), this.isDirty = !1, this.pauseDepths = {};
  }
  clearTimeout() {
    this.timeoutId && (clearTimeout(this.timeoutId), this.timeoutId = 0);
  }
  drained() {
    this.drainedOption && this.drainedOption();
  }
}
function rn(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function P(t, e) {
  if (t.closest)
    return t.closest(e);
  if (!document.documentElement.contains(t))
    return null;
  do {
    if (hl(t, e))
      return t;
    t = t.parentElement || t.parentNode;
  } while (t !== null && t.nodeType === 1);
  return null;
}
function hl(t, e) {
  return (t.matches || t.matchesSelector || t.msMatchesSelector).call(t, e);
}
function gl(t, e) {
  let n = t instanceof HTMLElement ? [t] : t, r = [];
  for (let i = 0; i < n.length; i += 1) {
    let s = n[i].querySelectorAll(e);
    for (let l = 0; l < s.length; l += 1)
      r.push(s[l]);
  }
  return r;
}
const pl = /(top|left|right|bottom|width|height)$/i;
function Te(t, e) {
  for (let n in e)
    oi(t, n, e[n]);
}
function oi(t, e, n) {
  n == null ? t.style[e] = "" : typeof n == "number" && pl.test(e) ? t.style[e] = `${n}px` : t.style[e] = n;
}
function ai(t) {
  var e, n;
  return (n = (e = t.composedPath) === null || e === void 0 ? void 0 : e.call(t)[0]) !== null && n !== void 0 ? n : t.target;
}
let ir = 0;
function pt() {
  return ir += 1, "fc-dom-" + ir;
}
function mt(t) {
  t.preventDefault();
}
function ml(t, e) {
  return (n) => {
    let r = P(n.target, t);
    r && e.call(r, n, r);
  };
}
function ci(t, e, n, r) {
  let i = ml(n, r);
  return t.addEventListener(e, i), () => {
    t.removeEventListener(e, i);
  };
}
function vl(t, e, n, r) {
  let i;
  return ci(t, "mouseover", e, (s, l) => {
    if (l !== i) {
      i = l, n(s, l);
      let o = (a) => {
        i = null, r(a, l), l.removeEventListener("mouseleave", o);
      };
      l.addEventListener("mouseleave", o);
    }
  });
}
const sr = [
  "webkitTransitionEnd",
  "otransitionend",
  "oTransitionEnd",
  "msTransitionEnd",
  "transitionend"
];
function bl(t, e) {
  let n = (r) => {
    e(r), sr.forEach((i) => {
      t.removeEventListener(i, n);
    });
  };
  sr.forEach((r) => {
    t.addEventListener(r, n);
  });
}
function di(t) {
  return Object.assign({ onClick: t }, ui(t));
}
function ui(t) {
  return {
    tabIndex: 0,
    onKeyDown(e) {
      (e.key === "Enter" || e.key === " ") && (t(e), e.preventDefault());
    }
  };
}
let lr = 0;
function ge() {
  return lr += 1, String(lr);
}
function sn() {
  document.body.classList.add("fc-not-allowed");
}
function ln() {
  document.body.classList.remove("fc-not-allowed");
}
function yl(t) {
  t.style.userSelect = "none", t.addEventListener("selectstart", mt);
}
function El(t) {
  t.style.userSelect = "", t.removeEventListener("selectstart", mt);
}
function Sl(t) {
  t.addEventListener("contextmenu", mt);
}
function Al(t) {
  t.removeEventListener("contextmenu", mt);
}
function Dl(t) {
  let e = [], n = [], r, i;
  for (typeof t == "string" ? n = t.split(/\s*,\s*/) : typeof t == "function" ? n = [t] : Array.isArray(t) && (n = t), r = 0; r < n.length; r += 1)
    i = n[r], typeof i == "string" ? e.push(i.charAt(0) === "-" ? { field: i.substring(1), order: -1 } : { field: i, order: 1 }) : typeof i == "function" && e.push({ func: i });
  return e;
}
function Cl(t, e, n) {
  let r, i;
  for (r = 0; r < n.length; r += 1)
    if (i = wl(t, e, n[r]), i)
      return i;
  return 0;
}
function wl(t, e, n) {
  return n.func ? n.func(t, e) : Rl(t[n.field], e[n.field]) * (n.order || 1);
}
function Rl(t, e) {
  return !t && !e ? 0 : e == null ? -1 : t == null ? 1 : typeof t == "string" || typeof e == "string" ? String(t).localeCompare(String(e)) : t - e;
}
function ye(t, e) {
  let n = String(t);
  return "000".substr(0, e - n.length) + n;
}
function xe(t, e, n) {
  return typeof t == "function" ? t(...e) : typeof t == "string" ? e.reduce((r, i, s) => r.replace("$" + s, i || ""), t) : n;
}
function _l(t, e) {
  return t - e;
}
function $e(t) {
  return t % 1 === 0;
}
function Tl(t) {
  let e = t.querySelector(".fc-scrollgrid-shrink-frame"), n = t.querySelector(".fc-scrollgrid-shrink-cushion");
  if (!e)
    throw new Error("needs fc-scrollgrid-shrink-frame className");
  if (!n)
    throw new Error("needs fc-scrollgrid-shrink-cushion className");
  return t.getBoundingClientRect().width - e.getBoundingClientRect().width + n.getBoundingClientRect().width;
}
const or = ["years", "months", "days", "milliseconds"], xl = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;
function w(t, e) {
  return typeof t == "string" ? Ml(t) : typeof t == "object" && t ? ar(t) : typeof t == "number" ? ar({ [e || "milliseconds"]: t }) : null;
}
function Ml(t) {
  let e = xl.exec(t);
  if (e) {
    let n = e[1] ? -1 : 1;
    return {
      years: 0,
      months: 0,
      days: n * (e[2] ? parseInt(e[2], 10) : 0),
      milliseconds: n * ((e[3] ? parseInt(e[3], 10) : 0) * 60 * 60 * 1e3 + (e[4] ? parseInt(e[4], 10) : 0) * 60 * 1e3 + (e[5] ? parseInt(e[5], 10) : 0) * 1e3 + (e[6] ? parseInt(e[6], 10) : 0))
    };
  }
  return null;
}
function ar(t) {
  let e = {
    years: t.years || t.year || 0,
    months: t.months || t.month || 0,
    days: t.days || t.day || 0,
    milliseconds: (t.hours || t.hour || 0) * 60 * 60 * 1e3 + (t.minutes || t.minute || 0) * 60 * 1e3 + (t.seconds || t.second || 0) * 1e3 + (t.milliseconds || t.millisecond || t.ms || 0)
  }, n = t.weeks || t.week;
  return n && (e.days += n * 7, e.specifiedWeeks = !0), e;
}
function Il(t, e) {
  return t.years === e.years && t.months === e.months && t.days === e.days && t.milliseconds === e.milliseconds;
}
function zt(t, e) {
  return {
    years: t.years + e.years,
    months: t.months + e.months,
    days: t.days + e.days,
    milliseconds: t.milliseconds + e.milliseconds
  };
}
function kl(t, e) {
  return {
    years: t.years - e.years,
    months: t.months - e.months,
    days: t.days - e.days,
    milliseconds: t.milliseconds - e.milliseconds
  };
}
function Nl(t, e) {
  return {
    years: t.years * e,
    months: t.months * e,
    days: t.days * e,
    milliseconds: t.milliseconds * e
  };
}
function Ol(t) {
  return Ee(t) / 365;
}
function Pl(t) {
  return Ee(t) / 30;
}
function Ee(t) {
  return F(t) / 864e5;
}
function F(t) {
  return t.years * (365 * 864e5) + t.months * (30 * 864e5) + t.days * 864e5 + t.milliseconds;
}
function on(t, e) {
  let n = null;
  for (let r = 0; r < or.length; r += 1) {
    let i = or[r];
    if (e[i]) {
      let s = t[i] / e[i];
      if (!$e(s) || n !== null && n !== s)
        return null;
      n = s;
    } else if (t[i])
      return null;
  }
  return n;
}
function Ft(t) {
  let e = t.milliseconds;
  if (e) {
    if (e % 1e3 !== 0)
      return { unit: "millisecond", value: e };
    if (e % (1e3 * 60) !== 0)
      return { unit: "second", value: e / 1e3 };
    if (e % (1e3 * 60 * 60) !== 0)
      return { unit: "minute", value: e / (1e3 * 60) };
    if (e)
      return { unit: "hour", value: e / (1e3 * 60 * 60) };
  }
  return t.days ? t.specifiedWeeks && t.days % 7 === 0 ? { unit: "week", value: t.days / 7 } : { unit: "day", value: t.days } : t.months ? { unit: "month", value: t.months } : t.years ? { unit: "year", value: t.years } : { unit: "millisecond", value: 0 };
}
function re(t, e, n) {
  if (t === e)
    return !0;
  let r = t.length, i;
  if (r !== e.length)
    return !1;
  for (i = 0; i < r; i += 1)
    if (!(n ? n(t[i], e[i]) : t[i] === e[i]))
      return !1;
  return !0;
}
const Hl = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
function cr(t, e) {
  let n = ee(t);
  return n[2] += e * 7, L(n);
}
function H(t, e) {
  let n = ee(t);
  return n[2] += e, L(n);
}
function ie(t, e) {
  let n = ee(t);
  return n[6] += e, L(n);
}
function Bl(t, e) {
  return pe(t, e) / 7;
}
function pe(t, e) {
  return (e.valueOf() - t.valueOf()) / (1e3 * 60 * 60 * 24);
}
function Ll(t, e) {
  return (e.valueOf() - t.valueOf()) / (1e3 * 60 * 60);
}
function jl(t, e) {
  return (e.valueOf() - t.valueOf()) / (1e3 * 60);
}
function Ul(t, e) {
  return (e.valueOf() - t.valueOf()) / 1e3;
}
function zl(t, e) {
  let n = M(t), r = M(e);
  return {
    years: 0,
    months: 0,
    days: Math.round(pe(n, r)),
    milliseconds: e.valueOf() - r.valueOf() - (t.valueOf() - n.valueOf())
  };
}
function Fl(t, e) {
  let n = rt(t, e);
  return n !== null && n % 7 === 0 ? n / 7 : null;
}
function rt(t, e) {
  return te(t) === te(e) ? Math.round(pe(t, e)) : null;
}
function M(t) {
  return L([
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ]);
}
function Wl(t) {
  return L([
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate(),
    t.getUTCHours()
  ]);
}
function Vl(t) {
  return L([
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate(),
    t.getUTCHours(),
    t.getUTCMinutes()
  ]);
}
function Gl(t) {
  return L([
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate(),
    t.getUTCHours(),
    t.getUTCMinutes(),
    t.getUTCSeconds()
  ]);
}
function ql(t, e, n) {
  let r = t.getUTCFullYear(), i = Rt(t, r, e, n);
  if (i < 1)
    return Rt(t, r - 1, e, n);
  let s = Rt(t, r + 1, e, n);
  return s >= 1 ? Math.min(i, s) : i;
}
function Rt(t, e, n, r) {
  let i = L([e, 0, 1 + Ql(e, n, r)]), s = M(t), l = Math.round(pe(i, s));
  return Math.floor(l / 7) + 1;
}
function Ql(t, e, n) {
  let r = 7 + e - n;
  return -((7 + L([t, 0, r]).getUTCDay() - e) % 7) + r - 1;
}
function dr(t) {
  return [
    t.getFullYear(),
    t.getMonth(),
    t.getDate(),
    t.getHours(),
    t.getMinutes(),
    t.getSeconds(),
    t.getMilliseconds()
  ];
}
function ur(t) {
  return new Date(
    t[0],
    t[1] || 0,
    t[2] == null ? 1 : t[2],
    t[3] || 0,
    t[4] || 0,
    t[5] || 0
  );
}
function ee(t) {
  return [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate(),
    t.getUTCHours(),
    t.getUTCMinutes(),
    t.getUTCSeconds(),
    t.getUTCMilliseconds()
  ];
}
function L(t) {
  return t.length === 1 && (t = t.concat([0])), new Date(Date.UTC(...t));
}
function fi(t) {
  return !isNaN(t.valueOf());
}
function te(t) {
  return t.getUTCHours() * 1e3 * 60 * 60 + t.getUTCMinutes() * 1e3 * 60 + t.getUTCSeconds() * 1e3 + t.getUTCMilliseconds();
}
function hi(t, e, n = !1) {
  let r = t.toISOString();
  return r = r.replace(".000", ""), n && (r = r.replace("T00:00:00Z", "")), r.length > 10 && (e == null ? r = r.replace("Z", "") : e !== 0 && (r = r.replace("Z", cn(e, !0)))), r;
}
function an(t) {
  return t.toISOString().replace(/T.*$/, "");
}
function Yl(t) {
  return t.toISOString().match(/^\d{4}-\d{2}/)[0];
}
function Zl(t) {
  return ye(t.getUTCHours(), 2) + ":" + ye(t.getUTCMinutes(), 2) + ":" + ye(t.getUTCSeconds(), 2);
}
function cn(t, e = !1) {
  let n = t < 0 ? "-" : "+", r = Math.abs(t), i = Math.floor(r / 60), s = Math.round(r % 60);
  return e ? `${n + ye(i, 2)}:${ye(s, 2)}` : `GMT${n}${i}${s ? `:${ye(s, 2)}` : ""}`;
}
function A(t, e, n) {
  let r, i;
  return function(...s) {
    if (!r)
      i = t.apply(this, s);
    else if (!re(r, s)) {
      n && n(i);
      let l = t.apply(this, s);
      (!e || !e(l, i)) && (i = l);
    }
    return r = s, i;
  };
}
function Xe(t, e, n) {
  let r, i;
  return (s) => {
    if (!r)
      i = t.call(this, s);
    else if (!V(r, s)) {
      n && n(i);
      let l = t.call(this, s);
      (!e || !e(l, i)) && (i = l);
    }
    return r = s, i;
  };
}
const fr = {
  week: 3,
  separator: 0,
  omitZeroMinute: 0,
  meridiem: 0,
  omitCommas: 0
}, it = {
  timeZoneName: 7,
  era: 6,
  year: 5,
  month: 4,
  day: 2,
  weekday: 2,
  hour: 1,
  minute: 1,
  second: 1
}, Ue = /\s*([ap])\.?m\.?/i, $l = /,/g, Xl = /\s+/g, Jl = /\u200e/g, Kl = /UTC|GMT/;
class eo {
  constructor(e) {
    let n = {}, r = {}, i = 0;
    for (let s in e)
      s in fr ? (r[s] = e[s], i = Math.max(fr[s], i)) : (n[s] = e[s], s in it && (i = Math.max(it[s], i)));
    this.standardDateProps = n, this.extendedSettings = r, this.severity = i, this.buildFormattingFunc = A(hr);
  }
  format(e, n) {
    return this.buildFormattingFunc(this.standardDateProps, this.extendedSettings, n)(e);
  }
  formatRange(e, n, r, i) {
    let { standardDateProps: s, extendedSettings: l } = this, o = lo(e.marker, n.marker, r.calendarSystem);
    if (!o)
      return this.format(e, r);
    let a = o;
    a > 1 && (s.year === "numeric" || s.year === "2-digit") && (s.month === "numeric" || s.month === "2-digit") && (s.day === "numeric" || s.day === "2-digit") && (a = 1);
    let d = this.format(e, r), c = this.format(n, r);
    if (d === c)
      return d;
    let f = oo(s, a), h = hr(f, l, r), u = h(e), m = h(n), v = ao(d, u, c, m), b = l.separator || i || r.defaultSeparator || "";
    return v ? v.before + u + b + m + v.after : d + b + c;
  }
  getLargestUnit() {
    switch (this.severity) {
      case 7:
      case 6:
      case 5:
        return "year";
      case 4:
        return "month";
      case 3:
        return "week";
      case 2:
        return "day";
      default:
        return "time";
    }
  }
}
function hr(t, e, n) {
  let r = Object.keys(t).length;
  return r === 1 && t.timeZoneName === "short" ? (i) => cn(i.timeZoneOffset) : r === 0 && e.week ? (i) => so(n.computeWeekNumber(i.marker), n.weekText, n.weekTextLong, n.locale, e.week) : to(t, e, n);
}
function to(t, e, n) {
  t = Object.assign({}, t), e = Object.assign({}, e), no(t, e), t.timeZone = "UTC";
  let r = new Intl.DateTimeFormat(n.locale.codes, t), i;
  if (e.omitZeroMinute) {
    let s = Object.assign({}, t);
    delete s.minute, i = new Intl.DateTimeFormat(n.locale.codes, s);
  }
  return (s) => {
    let { marker: l } = s, o;
    i && !l.getUTCMinutes() ? o = i : o = r;
    let a = o.format(l);
    return ro(a, s, t, e, n);
  };
}
function no(t, e) {
  t.timeZoneName && (t.hour || (t.hour = "2-digit"), t.minute || (t.minute = "2-digit")), t.timeZoneName === "long" && (t.timeZoneName = "short"), e.omitZeroMinute && (t.second || t.millisecond) && delete e.omitZeroMinute;
}
function ro(t, e, n, r, i) {
  return t = t.replace(Jl, ""), n.timeZoneName === "short" && (t = io(t, i.timeZone === "UTC" || e.timeZoneOffset == null ? "UTC" : cn(e.timeZoneOffset))), r.omitCommas && (t = t.replace($l, "").trim()), r.omitZeroMinute && (t = t.replace(":00", "")), r.meridiem === !1 ? t = t.replace(Ue, "").trim() : r.meridiem === "narrow" ? t = t.replace(Ue, (s, l) => l.toLocaleLowerCase()) : r.meridiem === "short" ? t = t.replace(Ue, (s, l) => `${l.toLocaleLowerCase()}m`) : r.meridiem === "lowercase" && (t = t.replace(Ue, (s) => s.toLocaleLowerCase())), t = t.replace(Xl, " "), t = t.trim(), t;
}
function io(t, e) {
  let n = !1;
  return t = t.replace(Kl, () => (n = !0, e)), n || (t += ` ${e}`), t;
}
function so(t, e, n, r, i) {
  let s = [];
  return i === "long" ? s.push(n) : (i === "short" || i === "narrow") && s.push(e), (i === "long" || i === "short") && s.push(" "), s.push(r.simpleNumberFormat.format(t)), r.options.direction === "rtl" && s.reverse(), s.join("");
}
function lo(t, e, n) {
  return n.getMarkerYear(t) !== n.getMarkerYear(e) ? 5 : n.getMarkerMonth(t) !== n.getMarkerMonth(e) ? 4 : n.getMarkerDay(t) !== n.getMarkerDay(e) ? 2 : te(t) !== te(e) ? 1 : 0;
}
function oo(t, e) {
  let n = {};
  for (let r in t)
    (!(r in it) || it[r] <= e) && (n[r] = t[r]);
  return n;
}
function ao(t, e, n, r) {
  let i = 0;
  for (; i < t.length; ) {
    let s = t.indexOf(e, i);
    if (s === -1)
      break;
    let l = t.substr(0, s);
    i = s + e.length;
    let o = t.substr(i), a = 0;
    for (; a < n.length; ) {
      let d = n.indexOf(r, a);
      if (d === -1)
        break;
      let c = n.substr(0, d);
      a = d + r.length;
      let f = n.substr(a);
      if (l === c && o === f)
        return {
          before: l,
          after: o
        };
    }
  }
  return null;
}
function gr(t, e) {
  let n = e.markerToArray(t.marker);
  return {
    marker: t.marker,
    timeZoneOffset: t.timeZoneOffset,
    array: n,
    year: n[0],
    month: n[1],
    day: n[2],
    hour: n[3],
    minute: n[4],
    second: n[5],
    millisecond: n[6]
  };
}
function st(t, e, n, r) {
  let i = gr(t, n.calendarSystem), s = e ? gr(e, n.calendarSystem) : null;
  return {
    date: i,
    start: i,
    end: s,
    timeZone: n.timeZone,
    localeCodes: n.locale.codes,
    defaultSeparator: r || n.defaultSeparator
  };
}
class co {
  constructor(e) {
    this.cmdStr = e;
  }
  format(e, n, r) {
    return n.cmdFormatter(this.cmdStr, st(e, null, n, r));
  }
  formatRange(e, n, r, i) {
    return r.cmdFormatter(this.cmdStr, st(e, n, r, i));
  }
}
class uo {
  constructor(e) {
    this.func = e;
  }
  format(e, n, r) {
    return this.func(st(e, null, n, r));
  }
  formatRange(e, n, r, i) {
    return this.func(st(e, n, r, i));
  }
}
function O(t) {
  return typeof t == "object" && t ? new eo(t) : typeof t == "string" ? new co(t) : typeof t == "function" ? new uo(t) : null;
}
const pr = {
  navLinkDayClick: p,
  navLinkWeekClick: p,
  duration: w,
  bootstrapFontAwesome: p,
  buttonIcons: p,
  customButtons: p,
  defaultAllDayEventDuration: w,
  defaultTimedEventDuration: w,
  nextDayThreshold: w,
  scrollTime: w,
  scrollTimeReset: Boolean,
  slotMinTime: w,
  slotMaxTime: w,
  dayPopoverFormat: O,
  slotDuration: w,
  snapDuration: w,
  headerToolbar: p,
  footerToolbar: p,
  defaultRangeSeparator: String,
  titleRangeSeparator: String,
  forceEventDuration: Boolean,
  dayHeaders: Boolean,
  dayHeaderFormat: O,
  dayHeaderClassNames: p,
  dayHeaderContent: p,
  dayHeaderDidMount: p,
  dayHeaderWillUnmount: p,
  dayCellClassNames: p,
  dayCellContent: p,
  dayCellDidMount: p,
  dayCellWillUnmount: p,
  initialView: String,
  aspectRatio: Number,
  weekends: Boolean,
  weekNumberCalculation: p,
  weekNumbers: Boolean,
  weekNumberClassNames: p,
  weekNumberContent: p,
  weekNumberDidMount: p,
  weekNumberWillUnmount: p,
  editable: Boolean,
  viewClassNames: p,
  viewDidMount: p,
  viewWillUnmount: p,
  nowIndicator: Boolean,
  nowIndicatorClassNames: p,
  nowIndicatorContent: p,
  nowIndicatorDidMount: p,
  nowIndicatorWillUnmount: p,
  showNonCurrentDates: Boolean,
  lazyFetching: Boolean,
  startParam: String,
  endParam: String,
  timeZoneParam: String,
  timeZone: String,
  locales: p,
  locale: p,
  themeSystem: String,
  dragRevertDuration: Number,
  dragScroll: Boolean,
  allDayMaintainDuration: Boolean,
  unselectAuto: Boolean,
  dropAccept: p,
  eventOrder: Dl,
  eventOrderStrict: Boolean,
  handleWindowResize: Boolean,
  windowResizeDelay: Number,
  longPressDelay: Number,
  eventDragMinDistance: Number,
  expandRows: Boolean,
  height: p,
  contentHeight: p,
  direction: String,
  weekNumberFormat: O,
  eventResizableFromStart: Boolean,
  displayEventTime: Boolean,
  displayEventEnd: Boolean,
  weekText: String,
  weekTextLong: String,
  progressiveEventRendering: Boolean,
  businessHours: p,
  initialDate: p,
  now: p,
  eventDataTransform: p,
  stickyHeaderDates: p,
  stickyFooterScrollbar: p,
  viewHeight: p,
  defaultAllDay: Boolean,
  eventSourceFailure: p,
  eventSourceSuccess: p,
  eventDisplay: String,
  eventStartEditable: Boolean,
  eventDurationEditable: Boolean,
  eventOverlap: p,
  eventConstraint: p,
  eventAllow: p,
  eventBackgroundColor: String,
  eventBorderColor: String,
  eventTextColor: String,
  eventColor: String,
  eventClassNames: p,
  eventContent: p,
  eventDidMount: p,
  eventWillUnmount: p,
  selectConstraint: p,
  selectOverlap: p,
  selectAllow: p,
  droppable: Boolean,
  unselectCancel: String,
  slotLabelFormat: p,
  slotLaneClassNames: p,
  slotLaneContent: p,
  slotLaneDidMount: p,
  slotLaneWillUnmount: p,
  slotLabelClassNames: p,
  slotLabelContent: p,
  slotLabelDidMount: p,
  slotLabelWillUnmount: p,
  dayMaxEvents: p,
  dayMaxEventRows: p,
  dayMinWidth: Number,
  slotLabelInterval: w,
  allDayText: String,
  allDayClassNames: p,
  allDayContent: p,
  allDayDidMount: p,
  allDayWillUnmount: p,
  slotMinWidth: Number,
  navLinks: Boolean,
  eventTimeFormat: O,
  rerenderDelay: Number,
  moreLinkText: p,
  moreLinkHint: p,
  selectMinDistance: Number,
  selectable: Boolean,
  selectLongPressDelay: Number,
  eventLongPressDelay: Number,
  selectMirror: Boolean,
  eventMaxStack: Number,
  eventMinHeight: Number,
  eventMinWidth: Number,
  eventShortHeight: Number,
  slotEventOverlap: Boolean,
  plugins: p,
  firstDay: Number,
  dayCount: Number,
  dateAlignment: String,
  dateIncrement: w,
  hiddenDays: p,
  fixedWeekCount: Boolean,
  validRange: p,
  visibleRange: p,
  titleFormat: p,
  eventInteractive: Boolean,
  noEventsText: String,
  viewHint: p,
  navLinkHint: p,
  closeHint: String,
  timeHint: String,
  eventHint: String,
  moreLinkClick: p,
  moreLinkClassNames: p,
  moreLinkContent: p,
  moreLinkDidMount: p,
  moreLinkWillUnmount: p,
  monthStartFormat: O,
  handleCustomRendering: p,
  customRenderingMetaMap: p,
  customRenderingReplacesEl: Boolean
}, Me = {
  eventDisplay: "auto",
  defaultRangeSeparator: " - ",
  titleRangeSeparator: " \u2013 ",
  defaultTimedEventDuration: "01:00:00",
  defaultAllDayEventDuration: { day: 1 },
  forceEventDuration: !1,
  nextDayThreshold: "00:00:00",
  dayHeaders: !0,
  initialView: "",
  aspectRatio: 1.35,
  headerToolbar: {
    start: "title",
    center: "",
    end: "today prev,next"
  },
  weekends: !0,
  weekNumbers: !1,
  weekNumberCalculation: "local",
  editable: !1,
  nowIndicator: !1,
  scrollTime: "06:00:00",
  scrollTimeReset: !0,
  slotMinTime: "00:00:00",
  slotMaxTime: "24:00:00",
  showNonCurrentDates: !0,
  lazyFetching: !0,
  startParam: "start",
  endParam: "end",
  timeZoneParam: "timeZone",
  timeZone: "local",
  locales: [],
  locale: "",
  themeSystem: "standard",
  dragRevertDuration: 500,
  dragScroll: !0,
  allDayMaintainDuration: !1,
  unselectAuto: !0,
  dropAccept: "*",
  eventOrder: "start,-duration,allDay,title",
  dayPopoverFormat: { month: "long", day: "numeric", year: "numeric" },
  handleWindowResize: !0,
  windowResizeDelay: 100,
  longPressDelay: 1e3,
  eventDragMinDistance: 5,
  expandRows: !1,
  navLinks: !1,
  selectable: !1,
  eventMinHeight: 15,
  eventMinWidth: 30,
  eventShortHeight: 30,
  monthStartFormat: { month: "long", day: "numeric" }
}, mr = {
  datesSet: p,
  eventsSet: p,
  eventAdd: p,
  eventChange: p,
  eventRemove: p,
  windowResize: p,
  eventClick: p,
  eventMouseEnter: p,
  eventMouseLeave: p,
  select: p,
  unselect: p,
  loading: p,
  _unmount: p,
  _beforeprint: p,
  _afterprint: p,
  _noEventDrop: p,
  _noEventResize: p,
  _resize: p,
  _scrollRequest: p
}, vr = {
  buttonText: p,
  buttonHints: p,
  views: p,
  plugins: p,
  initialEvents: p,
  events: p,
  eventSources: p
}, le = {
  headerToolbar: oe,
  footerToolbar: oe,
  buttonText: oe,
  buttonHints: oe,
  buttonIcons: oe,
  dateIncrement: oe,
  plugins: ze,
  events: ze,
  eventSources: ze,
  resources: ze
};
function oe(t, e) {
  return typeof t == "object" && typeof e == "object" && t && e ? V(t, e) : t === e;
}
function ze(t, e) {
  return Array.isArray(t) && Array.isArray(e) ? re(t, e) : t === e;
}
const fo = {
  type: String,
  component: p,
  buttonText: String,
  buttonTextKey: String,
  dateProfileGeneratorClass: p,
  usesMinMaxTime: Boolean,
  classNames: p,
  content: p,
  didMount: p,
  willUnmount: p
};
function _t(t) {
  return un(t, le);
}
function dn(t, e) {
  let n = {}, r = {};
  for (let i in e)
    i in t && (n[i] = e[i](t[i]));
  for (let i in t)
    i in e || (r[i] = t[i]);
  return { refined: n, extra: r };
}
function p(t) {
  return t;
}
const { hasOwnProperty: lt } = Object.prototype;
function un(t, e) {
  let n = {};
  if (e) {
    for (let r in e)
      if (e[r] === oe) {
        let i = [];
        for (let s = t.length - 1; s >= 0; s -= 1) {
          let l = t[s][r];
          if (typeof l == "object" && l)
            i.unshift(l);
          else if (l !== void 0) {
            n[r] = l;
            break;
          }
        }
        i.length && (n[r] = un(i));
      }
  }
  for (let r = t.length - 1; r >= 0; r -= 1) {
    let i = t[r];
    for (let s in i)
      s in n || (n[s] = i[s]);
  }
  return n;
}
function ue(t, e) {
  let n = {};
  for (let r in t)
    e(t[r], r) && (n[r] = t[r]);
  return n;
}
function Y(t, e) {
  let n = {};
  for (let r in t)
    n[r] = e(t[r], r);
  return n;
}
function gi(t) {
  let e = {};
  for (let n of t)
    e[n] = !0;
  return e;
}
function fn(t) {
  let e = [];
  for (let n in t)
    e.push(t[n]);
  return e;
}
function V(t, e) {
  if (t === e)
    return !0;
  for (let n in t)
    if (lt.call(t, n) && !(n in e))
      return !1;
  for (let n in e)
    if (lt.call(e, n) && t[n] !== e[n])
      return !1;
  return !0;
}
const ho = /^on[A-Z]/;
function go(t, e) {
  const n = Wt(t, e);
  for (let r of n)
    if (!ho.test(r))
      return !1;
  return !0;
}
function Wt(t, e) {
  let n = [];
  for (let r in t)
    lt.call(t, r) && (r in e || n.push(r));
  for (let r in e)
    lt.call(e, r) && t[r] !== e[r] && n.push(r);
  return n;
}
function Tt(t, e, n = {}) {
  if (t === e)
    return !0;
  for (let r in e)
    if (!(r in t && po(t[r], e[r], n[r])))
      return !1;
  for (let r in t)
    if (!(r in e))
      return !1;
  return !0;
}
function po(t, e, n) {
  return t === e || n === !0 ? !0 : n ? n(t, e) : !1;
}
function mo(t, e = 0, n, r = 1) {
  let i = [];
  n == null && (n = Object.keys(t).length);
  for (let s = e; s < n; s += r) {
    let l = t[s];
    l !== void 0 && i.push(l);
  }
  return i;
}
let pi = {};
function vo(t, e) {
  pi[t] = e;
}
function bo(t) {
  return new pi[t]();
}
class yo {
  getMarkerYear(e) {
    return e.getUTCFullYear();
  }
  getMarkerMonth(e) {
    return e.getUTCMonth();
  }
  getMarkerDay(e) {
    return e.getUTCDate();
  }
  arrayToMarker(e) {
    return L(e);
  }
  markerToArray(e) {
    return ee(e);
  }
}
vo("gregory", yo);
const Eo = /^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;
function So(t) {
  let e = Eo.exec(t);
  if (e) {
    let n = new Date(Date.UTC(Number(e[1]), e[3] ? Number(e[3]) - 1 : 0, Number(e[5] || 1), Number(e[7] || 0), Number(e[8] || 0), Number(e[10] || 0), e[12] ? Number(`0.${e[12]}`) * 1e3 : 0));
    if (fi(n)) {
      let r = null;
      return e[13] && (r = (e[15] === "-" ? -1 : 1) * (Number(e[16] || 0) * 60 + Number(e[18] || 0))), {
        marker: n,
        isTimeUnspecified: !e[6],
        timeZoneOffset: r
      };
    }
  }
  return null;
}
class Ao {
  constructor(e) {
    let n = this.timeZone = e.timeZone, r = n !== "local" && n !== "UTC";
    e.namedTimeZoneImpl && r && (this.namedTimeZoneImpl = new e.namedTimeZoneImpl(n)), this.canComputeOffset = Boolean(!r || this.namedTimeZoneImpl), this.calendarSystem = bo(e.calendarSystem), this.locale = e.locale, this.weekDow = e.locale.week.dow, this.weekDoy = e.locale.week.doy, e.weekNumberCalculation === "ISO" && (this.weekDow = 1, this.weekDoy = 4), typeof e.firstDay == "number" && (this.weekDow = e.firstDay), typeof e.weekNumberCalculation == "function" && (this.weekNumberFunc = e.weekNumberCalculation), this.weekText = e.weekText != null ? e.weekText : e.locale.options.weekText, this.weekTextLong = (e.weekTextLong != null ? e.weekTextLong : e.locale.options.weekTextLong) || this.weekText, this.cmdFormatter = e.cmdFormatter, this.defaultSeparator = e.defaultSeparator;
  }
  createMarker(e) {
    let n = this.createMarkerMeta(e);
    return n === null ? null : n.marker;
  }
  createNowMarker() {
    return this.canComputeOffset ? this.timestampToMarker(new Date().valueOf()) : L(dr(new Date()));
  }
  createMarkerMeta(e) {
    if (typeof e == "string")
      return this.parse(e);
    let n = null;
    return typeof e == "number" ? n = this.timestampToMarker(e) : e instanceof Date ? (e = e.valueOf(), isNaN(e) || (n = this.timestampToMarker(e))) : Array.isArray(e) && (n = L(e)), n === null || !fi(n) ? null : { marker: n, isTimeUnspecified: !1, forcedTzo: null };
  }
  parse(e) {
    let n = So(e);
    if (n === null)
      return null;
    let { marker: r } = n, i = null;
    return n.timeZoneOffset !== null && (this.canComputeOffset ? r = this.timestampToMarker(r.valueOf() - n.timeZoneOffset * 60 * 1e3) : i = n.timeZoneOffset), { marker: r, isTimeUnspecified: n.isTimeUnspecified, forcedTzo: i };
  }
  getYear(e) {
    return this.calendarSystem.getMarkerYear(e);
  }
  getMonth(e) {
    return this.calendarSystem.getMarkerMonth(e);
  }
  getDay(e) {
    return this.calendarSystem.getMarkerDay(e);
  }
  add(e, n) {
    let r = this.calendarSystem.markerToArray(e);
    return r[0] += n.years, r[1] += n.months, r[2] += n.days, r[6] += n.milliseconds, this.calendarSystem.arrayToMarker(r);
  }
  subtract(e, n) {
    let r = this.calendarSystem.markerToArray(e);
    return r[0] -= n.years, r[1] -= n.months, r[2] -= n.days, r[6] -= n.milliseconds, this.calendarSystem.arrayToMarker(r);
  }
  addYears(e, n) {
    let r = this.calendarSystem.markerToArray(e);
    return r[0] += n, this.calendarSystem.arrayToMarker(r);
  }
  addMonths(e, n) {
    let r = this.calendarSystem.markerToArray(e);
    return r[1] += n, this.calendarSystem.arrayToMarker(r);
  }
  diffWholeYears(e, n) {
    let { calendarSystem: r } = this;
    return te(e) === te(n) && r.getMarkerDay(e) === r.getMarkerDay(n) && r.getMarkerMonth(e) === r.getMarkerMonth(n) ? r.getMarkerYear(n) - r.getMarkerYear(e) : null;
  }
  diffWholeMonths(e, n) {
    let { calendarSystem: r } = this;
    return te(e) === te(n) && r.getMarkerDay(e) === r.getMarkerDay(n) ? r.getMarkerMonth(n) - r.getMarkerMonth(e) + (r.getMarkerYear(n) - r.getMarkerYear(e)) * 12 : null;
  }
  greatestWholeUnit(e, n) {
    let r = this.diffWholeYears(e, n);
    return r !== null ? { unit: "year", value: r } : (r = this.diffWholeMonths(e, n), r !== null ? { unit: "month", value: r } : (r = Fl(e, n), r !== null ? { unit: "week", value: r } : (r = rt(e, n), r !== null ? { unit: "day", value: r } : (r = Ll(e, n), $e(r) ? { unit: "hour", value: r } : (r = jl(e, n), $e(r) ? { unit: "minute", value: r } : (r = Ul(e, n), $e(r) ? { unit: "second", value: r } : { unit: "millisecond", value: n.valueOf() - e.valueOf() }))))));
  }
  countDurationsBetween(e, n, r) {
    let i;
    return r.years && (i = this.diffWholeYears(e, n), i !== null) ? i / Ol(r) : r.months && (i = this.diffWholeMonths(e, n), i !== null) ? i / Pl(r) : r.days && (i = rt(e, n), i !== null) ? i / Ee(r) : (n.valueOf() - e.valueOf()) / F(r);
  }
  startOf(e, n) {
    return n === "year" ? this.startOfYear(e) : n === "month" ? this.startOfMonth(e) : n === "week" ? this.startOfWeek(e) : n === "day" ? M(e) : n === "hour" ? Wl(e) : n === "minute" ? Vl(e) : n === "second" ? Gl(e) : null;
  }
  startOfYear(e) {
    return this.calendarSystem.arrayToMarker([
      this.calendarSystem.getMarkerYear(e)
    ]);
  }
  startOfMonth(e) {
    return this.calendarSystem.arrayToMarker([
      this.calendarSystem.getMarkerYear(e),
      this.calendarSystem.getMarkerMonth(e)
    ]);
  }
  startOfWeek(e) {
    return this.calendarSystem.arrayToMarker([
      this.calendarSystem.getMarkerYear(e),
      this.calendarSystem.getMarkerMonth(e),
      e.getUTCDate() - (e.getUTCDay() - this.weekDow + 7) % 7
    ]);
  }
  computeWeekNumber(e) {
    return this.weekNumberFunc ? this.weekNumberFunc(this.toDate(e)) : ql(e, this.weekDow, this.weekDoy);
  }
  format(e, n, r = {}) {
    return n.format({
      marker: e,
      timeZoneOffset: r.forcedTzo != null ? r.forcedTzo : this.offsetForMarker(e)
    }, this);
  }
  formatRange(e, n, r, i = {}) {
    return i.isEndExclusive && (n = ie(n, -1)), r.formatRange({
      marker: e,
      timeZoneOffset: i.forcedStartTzo != null ? i.forcedStartTzo : this.offsetForMarker(e)
    }, {
      marker: n,
      timeZoneOffset: i.forcedEndTzo != null ? i.forcedEndTzo : this.offsetForMarker(n)
    }, this, i.defaultSeparator);
  }
  formatIso(e, n = {}) {
    let r = null;
    return n.omitTimeZoneOffset || (n.forcedTzo != null ? r = n.forcedTzo : r = this.offsetForMarker(e)), hi(e, r, n.omitTime);
  }
  timestampToMarker(e) {
    return this.timeZone === "local" ? L(dr(new Date(e))) : this.timeZone === "UTC" || !this.namedTimeZoneImpl ? new Date(e) : L(this.namedTimeZoneImpl.timestampToArray(e));
  }
  offsetForMarker(e) {
    return this.timeZone === "local" ? -ur(ee(e)).getTimezoneOffset() : this.timeZone === "UTC" ? 0 : this.namedTimeZoneImpl ? this.namedTimeZoneImpl.offsetForArray(ee(e)) : null;
  }
  toDate(e, n) {
    return this.timeZone === "local" ? ur(ee(e)) : this.timeZone === "UTC" ? new Date(e.valueOf()) : this.namedTimeZoneImpl ? new Date(e.valueOf() - this.namedTimeZoneImpl.offsetForArray(ee(e)) * 1e3 * 60) : new Date(e.valueOf() - (n || 0));
  }
}
class Oe {
  constructor(e) {
    this.iconOverrideOption && this.setIconOverride(e[this.iconOverrideOption]);
  }
  setIconOverride(e) {
    let n, r;
    if (typeof e == "object" && e) {
      n = Object.assign({}, this.iconClasses);
      for (r in e)
        n[r] = this.applyIconOverridePrefix(e[r]);
      this.iconClasses = n;
    } else
      e === !1 && (this.iconClasses = {});
  }
  applyIconOverridePrefix(e) {
    let n = this.iconOverridePrefix;
    return n && e.indexOf(n) !== 0 && (e = n + e), e;
  }
  getClass(e) {
    return this.classes[e] || "";
  }
  getIconClass(e, n) {
    let r;
    return n && this.rtlIconClasses ? r = this.rtlIconClasses[e] || this.iconClasses[e] : r = this.iconClasses[e], r ? `${this.baseIconClass} ${r}` : "";
  }
  getCustomButtonIconClass(e) {
    let n;
    return this.iconOverrideCustomButtonOption && (n = e[this.iconOverrideCustomButtonOption], n) ? `${this.baseIconClass} ${this.applyIconOverridePrefix(n)}` : "";
  }
}
Oe.prototype.classes = {};
Oe.prototype.iconClasses = {};
Oe.prototype.baseIconClass = "";
Oe.prototype.iconOverridePrefix = "";
function br(t) {
  t();
  let e = S.debounceRendering, n = [];
  function r(i) {
    n.push(i);
  }
  for (S.debounceRendering = r, ke(g(Do, {}), document.createElement("div")); n.length; )
    n.shift()();
  S.debounceRendering = e;
}
class Do extends j {
  render() {
    return g("div", {});
  }
  componentDidMount() {
    this.setState({});
  }
}
function mi(t) {
  let e = Qs(t), n = e.Provider;
  return e.Provider = function() {
    let r = !this.getChildContext, i = n.apply(this, arguments);
    if (r) {
      let s = [];
      this.shouldComponentUpdate = (l) => {
        this.props.value !== l.value && s.forEach((o) => {
          o.context = l.value, o.forceUpdate();
        });
      }, this.sub = (l) => {
        s.push(l);
        let o = l.componentWillUnmount;
        l.componentWillUnmount = () => {
          s.splice(s.indexOf(l), 1), o && o.call(l);
        };
      };
    }
    return i;
  }, e;
}
class Co {
  constructor(e, n, r, i) {
    this.execFunc = e, this.emitter = n, this.scrollTime = r, this.scrollTimeReset = i, this.handleScrollRequest = (s) => {
      this.queuedRequest = Object.assign({}, this.queuedRequest || {}, s), this.drain();
    }, n.on("_scrollRequest", this.handleScrollRequest), this.fireInitialScroll();
  }
  detach() {
    this.emitter.off("_scrollRequest", this.handleScrollRequest);
  }
  update(e) {
    e && this.scrollTimeReset ? this.fireInitialScroll() : this.drain();
  }
  fireInitialScroll() {
    this.handleScrollRequest({
      time: this.scrollTime
    });
  }
  drain() {
    this.queuedRequest && this.execFunc(this.queuedRequest) && (this.queuedRequest = null);
  }
}
const $ = mi({});
function wo(t, e, n, r, i, s, l, o, a, d, c, f, h) {
  return {
    dateEnv: i,
    options: n,
    pluginHooks: l,
    emitter: d,
    dispatch: o,
    getCurrentData: a,
    calendarApi: c,
    viewSpec: t,
    viewApi: e,
    dateProfileGenerator: r,
    theme: s,
    isRtl: n.direction === "rtl",
    addResizeHandler(u) {
      d.on("_resize", u);
    },
    removeResizeHandler(u) {
      d.off("_resize", u);
    },
    createScrollResponder(u) {
      return new Co(u, d, w(n.scrollTime), n.scrollTimeReset);
    },
    registerInteractiveComponent: f,
    unregisterInteractiveComponent: h
  };
}
class me extends j {
  shouldComponentUpdate(e, n) {
    return this.debug && console.log(Wt(e, this.props), Wt(n, this.state)), !Tt(this.props, e, this.propEquality) || !Tt(this.state, n, this.stateEquality);
  }
  safeSetState(e) {
    Tt(this.state, Object.assign(Object.assign({}, this.state), e), this.stateEquality) || this.setState(e);
  }
}
me.addPropsEquality = Ro;
me.addStateEquality = _o;
me.contextType = $;
me.prototype.propEquality = {};
me.prototype.stateEquality = {};
class T extends me {
}
T.contextType = $;
function Ro(t) {
  let e = Object.create(this.prototype.propEquality);
  Object.assign(e, t), this.prototype.propEquality = e;
}
function _o(t) {
  let e = Object.create(this.prototype.stateEquality);
  Object.assign(e, t), this.prototype.stateEquality = e;
}
function Z(t, e) {
  typeof t == "function" ? t(e) : t && (t.current = e);
}
class hn extends T {
  constructor() {
    super(...arguments), this.id = ge(), this.queuedDomNodes = [], this.currentDomNodes = [], this.handleEl = (e) => {
      this.props.elRef && Z(this.props.elRef, e);
    };
  }
  render() {
    const { props: e, context: n } = this, { options: r } = n, { customGenerator: i, defaultGenerator: s, renderProps: l } = e, o = bi(e);
    let a = !1, d, c = [], f;
    if (i != null) {
      const h = typeof i == "function" ? i(l, g) : i;
      if (h === !0)
        a = !0;
      else {
        const u = h && typeof h == "object";
        u && "html" in h ? o.dangerouslySetInnerHTML = { __html: h.html } : u && "domNodes" in h ? c = Array.prototype.slice.call(h.domNodes) : !u && typeof h != "function" ? d = h : f = h;
      }
    } else
      a = !vi(e.generatorName, r);
    return a && s && (d = s(l)), this.queuedDomNodes = c, this.currentGeneratorMeta = f, g(e.elTag, o, d);
  }
  componentDidMount() {
    this.applyQueueudDomNodes(), this.triggerCustomRendering(!0);
  }
  componentDidUpdate() {
    this.applyQueueudDomNodes(), this.triggerCustomRendering(!0);
  }
  componentWillUnmount() {
    this.triggerCustomRendering(!1);
  }
  triggerCustomRendering(e) {
    var n;
    const { props: r, context: i } = this, { handleCustomRendering: s, customRenderingMetaMap: l } = i.options;
    if (s) {
      const o = (n = this.currentGeneratorMeta) !== null && n !== void 0 ? n : l == null ? void 0 : l[r.generatorName];
      o && s(Object.assign(Object.assign({
        id: this.id,
        isActive: e,
        containerEl: this.base,
        reportNewContainerEl: this.handleEl,
        generatorMeta: o
      }, r), { elClasses: (r.elClasses || []).filter(To) }));
    }
  }
  applyQueueudDomNodes() {
    const { queuedDomNodes: e, currentDomNodes: n } = this, r = this.base;
    if (!re(e, n)) {
      n.forEach(rn);
      for (let i of e)
        r.appendChild(i);
      this.currentDomNodes = e;
    }
  }
}
hn.addPropsEquality({
  elClasses: re,
  elStyle: V,
  elAttrs: go,
  renderProps: V
});
function vi(t, e) {
  var n;
  return Boolean(e.handleCustomRendering && t && ((n = e.customRenderingMetaMap) === null || n === void 0 ? void 0 : n[t]));
}
function bi(t, e) {
  const n = Object.assign(Object.assign({}, t.elAttrs), { ref: t.elRef });
  return (t.elClasses || e) && (n.className = (t.elClasses || []).concat(e || []).concat(n.className || []).filter(Boolean).join(" ")), t.elStyle && (n.style = t.elStyle), n;
}
function To(t) {
  return Boolean(t);
}
const yi = mi(0);
class z extends j {
  constructor() {
    super(...arguments), this.InnerContent = xo.bind(void 0, this), this.handleRootEl = (e) => {
      this.rootEl = e, this.props.elRef && Z(this.props.elRef, e);
    };
  }
  render() {
    const { props: e } = this, n = Mo(e.classNameGenerator, e.renderProps);
    if (e.children) {
      const r = bi(e, n), i = e.children(this.InnerContent, e.renderProps, r);
      return e.elTag ? g(e.elTag, r, i) : i;
    } else
      return g(hn, Object.assign(Object.assign({}, e), { elRef: this.handleRootEl, elTag: e.elTag || "div", elClasses: (e.elClasses || []).concat(n), renderId: this.context }));
  }
  componentDidMount() {
    var e, n;
    (n = (e = this.props).didMount) === null || n === void 0 || n.call(e, Object.assign(Object.assign({}, this.props.renderProps), { el: this.rootEl || this.base }));
  }
  componentWillUnmount() {
    var e, n;
    (n = (e = this.props).willUnmount) === null || n === void 0 || n.call(e, Object.assign(Object.assign({}, this.props.renderProps), { el: this.rootEl || this.base }));
  }
}
z.contextType = yi;
function xo(t, e) {
  const n = t.props;
  return g(hn, Object.assign({ renderProps: n.renderProps, generatorName: n.generatorName, customGenerator: n.customGenerator, defaultGenerator: n.defaultGenerator, renderId: t.context }, e));
}
function Mo(t, e) {
  const n = typeof t == "function" ? t(e) : t || [];
  return typeof n == "string" ? [n] : n;
}
class ot extends T {
  render() {
    let { props: e, context: n } = this, { options: r } = n, i = { view: n.viewApi };
    return g(z, Object.assign({}, e, { elTag: e.elTag || "div", elClasses: [
      ...Ei(e.viewSpec),
      ...e.elClasses || []
    ], renderProps: i, classNameGenerator: r.viewClassNames, generatorName: void 0, didMount: r.viewDidMount, willUnmount: r.viewWillUnmount }), () => e.children);
  }
}
function Ei(t) {
  return [
    `fc-${t.type}-view`,
    "fc-view"
  ];
}
function Io(t, e) {
  let n = null, r = null;
  return t.start && (n = e.createMarker(t.start)), t.end && (r = e.createMarker(t.end)), !n && !r || n && r && r < n ? null : { start: n, end: r };
}
function yr(t, e) {
  let n = [], { start: r } = e, i, s;
  for (t.sort(ko), i = 0; i < t.length; i += 1)
    s = t[i], s.start > r && n.push({ start: r, end: s.start }), s.end > r && (r = s.end);
  return r < e.end && n.push({ start: r, end: e.end }), n;
}
function ko(t, e) {
  return t.start.valueOf() - e.start.valueOf();
}
function fe(t, e) {
  let { start: n, end: r } = t, i = null;
  return e.start !== null && (n === null ? n = e.start : n = new Date(Math.max(n.valueOf(), e.start.valueOf()))), e.end != null && (r === null ? r = e.end : r = new Date(Math.min(r.valueOf(), e.end.valueOf()))), (n === null || r === null || n < r) && (i = { start: n, end: r }), i;
}
function No(t, e) {
  return (t.start === null ? null : t.start.valueOf()) === (e.start === null ? null : e.start.valueOf()) && (t.end === null ? null : t.end.valueOf()) === (e.end === null ? null : e.end.valueOf());
}
function gn(t, e) {
  return (t.end === null || e.start === null || t.end > e.start) && (t.start === null || e.end === null || t.start < e.end);
}
function vt(t, e) {
  return (t.start === null || e.start !== null && e.start >= t.start) && (t.end === null || e.end !== null && e.end <= t.end);
}
function Q(t, e) {
  return (t.start === null || e >= t.start) && (t.end === null || e < t.end);
}
function Oo(t, e) {
  return e.start != null && t < e.start ? e.start : e.end != null && t >= e.end ? new Date(e.end.valueOf() - 1) : t;
}
function Si(t) {
  let e = Math.floor(pe(t.start, t.end)) || 1, n = M(t.start), r = H(n, e);
  return { start: n, end: r };
}
function Ai(t, e = w(0)) {
  let n = null, r = null;
  if (t.end) {
    r = M(t.end);
    let i = t.end.valueOf() - r.valueOf();
    i && i >= F(e) && (r = H(r, 1));
  }
  return t.start && (n = M(t.start), r && r <= n && (r = H(n, 1))), { start: n, end: r };
}
function be(t, e, n, r) {
  return r === "year" ? w(n.diffWholeYears(t, e), "year") : r === "month" ? w(n.diffWholeMonths(t, e), "month") : zl(t, e);
}
function Po(t, e) {
  switch (e.type) {
    case "CHANGE_DATE":
      return e.dateMarker;
    default:
      return t;
  }
}
function Ho(t, e) {
  let n = t.initialDate;
  return n != null ? e.createMarker(n) : Pe(t.now, e);
}
function Pe(t, e) {
  return typeof t == "function" && (t = t()), t == null ? e.createNowMarker() : e.createMarker(t);
}
class Di {
  constructor(e) {
    this.props = e, this.nowDate = Pe(e.nowInput, e.dateEnv), this.initHiddenDays();
  }
  buildPrev(e, n, r) {
    let { dateEnv: i } = this.props, s = i.subtract(
      i.startOf(n, e.currentRangeUnit),
      e.dateIncrement
    );
    return this.build(s, -1, r);
  }
  buildNext(e, n, r) {
    let { dateEnv: i } = this.props, s = i.add(
      i.startOf(n, e.currentRangeUnit),
      e.dateIncrement
    );
    return this.build(s, 1, r);
  }
  build(e, n, r = !0) {
    let { props: i } = this, s, l, o, a, d, c;
    return s = this.buildValidRange(), s = this.trimHiddenDays(s), r && (e = Oo(e, s)), l = this.buildCurrentRangeInfo(e, n), o = /^(year|month|week|day)$/.test(l.unit), a = this.buildRenderRange(this.trimHiddenDays(l.range), l.unit, o), a = this.trimHiddenDays(a), d = a, i.showNonCurrentDates || (d = fe(d, l.range)), d = this.adjustActiveRange(d), d = fe(d, s), c = gn(l.range, s), Q(a, e) || (e = a.start), {
      currentDate: e,
      validRange: s,
      currentRange: l.range,
      currentRangeUnit: l.unit,
      isRangeAllDay: o,
      activeRange: d,
      renderRange: a,
      slotMinTime: i.slotMinTime,
      slotMaxTime: i.slotMaxTime,
      isValid: c,
      dateIncrement: this.buildDateIncrement(l.duration)
    };
  }
  buildValidRange() {
    let e = this.props.validRangeInput, n = typeof e == "function" ? e.call(this.props.calendarApi, this.nowDate) : e;
    return this.refineRange(n) || { start: null, end: null };
  }
  buildCurrentRangeInfo(e, n) {
    let { props: r } = this, i = null, s = null, l = null, o;
    return r.duration ? (i = r.duration, s = r.durationUnit, l = this.buildRangeFromDuration(e, n, i, s)) : (o = this.props.dayCount) ? (s = "day", l = this.buildRangeFromDayCount(e, n, o)) : (l = this.buildCustomVisibleRange(e)) ? s = r.dateEnv.greatestWholeUnit(l.start, l.end).unit : (i = this.getFallbackDuration(), s = Ft(i).unit, l = this.buildRangeFromDuration(e, n, i, s)), { duration: i, unit: s, range: l };
  }
  getFallbackDuration() {
    return w({ day: 1 });
  }
  adjustActiveRange(e) {
    let { dateEnv: n, usesMinMaxTime: r, slotMinTime: i, slotMaxTime: s } = this.props, { start: l, end: o } = e;
    return r && (Ee(i) < 0 && (l = M(l), l = n.add(l, i)), Ee(s) > 1 && (o = M(o), o = H(o, -1), o = n.add(o, s))), { start: l, end: o };
  }
  buildRangeFromDuration(e, n, r, i) {
    let { dateEnv: s, dateAlignment: l } = this.props, o, a, d;
    if (!l) {
      let { dateIncrement: f } = this.props;
      f && F(f) < F(r) ? l = Ft(f).unit : l = i;
    }
    Ee(r) <= 1 && this.isHiddenDay(o) && (o = this.skipHiddenDays(o, n), o = M(o));
    function c() {
      o = s.startOf(e, l), a = s.add(o, r), d = { start: o, end: a };
    }
    return c(), this.trimHiddenDays(d) || (e = this.skipHiddenDays(e, n), c()), d;
  }
  buildRangeFromDayCount(e, n, r) {
    let { dateEnv: i, dateAlignment: s } = this.props, l = 0, o = e, a;
    s && (o = i.startOf(o, s)), o = M(o), o = this.skipHiddenDays(o, n), a = o;
    do
      a = H(a, 1), this.isHiddenDay(a) || (l += 1);
    while (l < r);
    return { start: o, end: a };
  }
  buildCustomVisibleRange(e) {
    let { props: n } = this, r = n.visibleRangeInput, i = typeof r == "function" ? r.call(n.calendarApi, n.dateEnv.toDate(e)) : r, s = this.refineRange(i);
    return s && (s.start == null || s.end == null) ? null : s;
  }
  buildRenderRange(e, n, r) {
    return e;
  }
  buildDateIncrement(e) {
    let { dateIncrement: n } = this.props, r;
    return n || ((r = this.props.dateAlignment) ? w(1, r) : e || w({ days: 1 }));
  }
  refineRange(e) {
    if (e) {
      let n = Io(e, this.props.dateEnv);
      return n && (n = Ai(n)), n;
    }
    return null;
  }
  initHiddenDays() {
    let e = this.props.hiddenDays || [], n = [], r = 0, i;
    for (this.props.weekends === !1 && e.push(0, 6), i = 0; i < 7; i += 1)
      (n[i] = e.indexOf(i) !== -1) || (r += 1);
    if (!r)
      throw new Error("invalid hiddenDays");
    this.isHiddenDayHash = n;
  }
  trimHiddenDays(e) {
    let { start: n, end: r } = e;
    return n && (n = this.skipHiddenDays(n)), r && (r = this.skipHiddenDays(r, -1, !0)), n == null || r == null || n < r ? { start: n, end: r } : null;
  }
  isHiddenDay(e) {
    return e instanceof Date && (e = e.getUTCDay()), this.isHiddenDayHash[e];
  }
  skipHiddenDays(e, n = 1, r = !1) {
    for (; this.isHiddenDayHash[(e.getUTCDay() + (r ? n : 0) + 7) % 7]; )
      e = H(e, n);
    return e;
  }
}
function pn(t, e, n, r) {
  return {
    instanceId: ge(),
    defId: t,
    range: e,
    forcedStartTzo: n == null ? null : n,
    forcedEndTzo: r == null ? null : r
  };
}
function Bo(t, e, n, r) {
  for (let i = 0; i < r.length; i += 1) {
    let s = r[i].parse(t, n);
    if (s) {
      let { allDay: l } = t;
      return l == null && (l = e, l == null && (l = s.allDayGuess, l == null && (l = !1))), {
        allDay: l,
        duration: s.duration,
        typeData: s.typeData,
        typeId: i
      };
    }
  }
  return null;
}
function he(t, e, n) {
  let { dateEnv: r, pluginHooks: i, options: s } = n, { defs: l, instances: o } = t;
  o = ue(o, (a) => !l[a.defId].recurringDef);
  for (let a in l) {
    let d = l[a];
    if (d.recurringDef) {
      let { duration: c } = d.recurringDef;
      c || (c = d.allDay ? s.defaultAllDayEventDuration : s.defaultTimedEventDuration);
      let f = Lo(d, c, e, r, i.recurringTypes);
      for (let h of f) {
        let u = pn(a, {
          start: h,
          end: r.add(h, c)
        });
        o[u.instanceId] = u;
      }
    }
  }
  return { defs: l, instances: o };
}
function Lo(t, e, n, r, i) {
  let l = i[t.recurringDef.typeId].expand(t.recurringDef.typeData, {
    start: r.subtract(n.start, e),
    end: n.end
  }, r);
  return t.allDay && (l = l.map(M)), l;
}
const Je = {
  id: String,
  groupId: String,
  title: String,
  url: String,
  interactive: Boolean
}, Ci = {
  start: p,
  end: p,
  date: p,
  allDay: Boolean
}, jo = Object.assign(Object.assign(Object.assign({}, Je), Ci), { extendedProps: p });
function wi(t, e, n, r, i = mn(n), s, l) {
  let { refined: o, extra: a } = Ri(t, n, i), d = zo(e, n), c = Bo(o, d, n.dateEnv, n.pluginHooks.recurringTypes);
  if (c) {
    let h = Vt(o, a, e ? e.sourceId : "", c.allDay, Boolean(c.duration), n, s);
    return h.recurringDef = {
      typeId: c.typeId,
      typeData: c.typeData,
      duration: c.duration
    }, { def: h, instance: null };
  }
  let f = Uo(o, d, n, r);
  if (f) {
    let h = Vt(o, a, e ? e.sourceId : "", f.allDay, f.hasEnd, n, s), u = pn(h.defId, f.range, f.forcedStartTzo, f.forcedEndTzo);
    return l && h.publicId && l[h.publicId] && (u.instanceId = l[h.publicId]), { def: h, instance: u };
  }
  return null;
}
function Ri(t, e, n = mn(e)) {
  return dn(t, n);
}
function mn(t) {
  return Object.assign(Object.assign(Object.assign({}, at), jo), t.pluginHooks.eventRefiners);
}
function Vt(t, e, n, r, i, s, l) {
  let o = {
    title: t.title || "",
    groupId: t.groupId || "",
    publicId: t.id || "",
    url: t.url || "",
    recurringDef: null,
    defId: (l && t.id ? l[t.id] : "") || ge(),
    sourceId: n,
    allDay: r,
    hasEnd: i,
    interactive: t.interactive,
    ui: ct(t, s),
    extendedProps: Object.assign(Object.assign({}, t.extendedProps || {}), e)
  };
  for (let a of s.pluginHooks.eventDefMemberAdders)
    Object.assign(o, a(t));
  return Object.freeze(o.ui.classNames), Object.freeze(o.extendedProps), o;
}
function Uo(t, e, n, r) {
  let { allDay: i } = t, s, l = null, o = !1, a, d = null, c = t.start != null ? t.start : t.date;
  if (s = n.dateEnv.createMarkerMeta(c), s)
    l = s.marker;
  else if (!r)
    return null;
  return t.end != null && (a = n.dateEnv.createMarkerMeta(t.end)), i == null && (e != null ? i = e : i = (!s || s.isTimeUnspecified) && (!a || a.isTimeUnspecified)), i && l && (l = M(l)), a && (d = a.marker, i && (d = M(d)), l && d <= l && (d = null)), d ? o = !0 : r || (o = n.options.forceEventDuration || !1, d = n.dateEnv.add(l, i ? n.options.defaultAllDayEventDuration : n.options.defaultTimedEventDuration)), {
    allDay: i,
    hasEnd: o,
    range: { start: l, end: d },
    forcedStartTzo: s ? s.forcedTzo : null,
    forcedEndTzo: a ? a.forcedTzo : null
  };
}
function zo(t, e) {
  let n = null;
  return t && (n = t.defaultAllDay), n == null && (n = e.options.defaultAllDay), n;
}
function Ne(t, e, n, r, i, s) {
  let l = U(), o = mn(n);
  for (let a of t) {
    let d = wi(a, e, n, r, o, i, s);
    d && Gt(d, l);
  }
  return l;
}
function Gt(t, e = U()) {
  return e.defs[t.def.defId] = t.def, t.instance && (e.instances[t.instance.instanceId] = t.instance), e;
}
function vn(t, e) {
  let n = t.instances[e];
  if (n) {
    let r = t.defs[n.defId], i = bt(t, (s) => Fo(r, s));
    return i.defs[r.defId] = r, i.instances[n.instanceId] = n, i;
  }
  return U();
}
function Fo(t, e) {
  return Boolean(t.groupId && t.groupId === e.groupId);
}
function U() {
  return { defs: {}, instances: {} };
}
function bn(t, e) {
  return {
    defs: Object.assign(Object.assign({}, t.defs), e.defs),
    instances: Object.assign(Object.assign({}, t.instances), e.instances)
  };
}
function bt(t, e) {
  let n = ue(t.defs, e), r = ue(t.instances, (i) => n[i.defId]);
  return { defs: n, instances: r };
}
function Wo(t, e) {
  let { defs: n, instances: r } = t, i = {}, s = {};
  for (let l in n)
    e.defs[l] || (i[l] = n[l]);
  for (let l in r)
    !e.instances[l] && i[r[l].defId] && (s[l] = r[l]);
  return {
    defs: i,
    instances: s
  };
}
function Vo(t, e) {
  return Array.isArray(t) ? Ne(t, null, e, !0) : typeof t == "object" && t ? Ne([t], null, e, !0) : t != null ? String(t) : null;
}
function Er(t) {
  return Array.isArray(t) ? t : typeof t == "string" ? t.split(/\s+/) : [];
}
const at = {
  display: String,
  editable: Boolean,
  startEditable: Boolean,
  durationEditable: Boolean,
  constraint: p,
  overlap: p,
  allow: p,
  className: Er,
  classNames: Er,
  color: String,
  backgroundColor: String,
  borderColor: String,
  textColor: String
}, Go = {
  display: null,
  startEditable: null,
  durationEditable: null,
  constraints: [],
  overlap: null,
  allows: [],
  backgroundColor: "",
  borderColor: "",
  textColor: "",
  classNames: []
};
function ct(t, e) {
  let n = Vo(t.constraint, e);
  return {
    display: t.display || null,
    startEditable: t.startEditable != null ? t.startEditable : t.editable,
    durationEditable: t.durationEditable != null ? t.durationEditable : t.editable,
    constraints: n != null ? [n] : [],
    overlap: t.overlap != null ? t.overlap : null,
    allows: t.allow != null ? [t.allow] : [],
    backgroundColor: t.backgroundColor || t.color || "",
    borderColor: t.borderColor || t.color || "",
    textColor: t.textColor || "",
    classNames: (t.className || []).concat(t.classNames || [])
  };
}
function _i(t) {
  return t.reduce(qo, Go);
}
function qo(t, e) {
  return {
    display: e.display != null ? e.display : t.display,
    startEditable: e.startEditable != null ? e.startEditable : t.startEditable,
    durationEditable: e.durationEditable != null ? e.durationEditable : t.durationEditable,
    constraints: t.constraints.concat(e.constraints),
    overlap: typeof e.overlap == "boolean" ? e.overlap : t.overlap,
    allows: t.allows.concat(e.allows),
    backgroundColor: e.backgroundColor || t.backgroundColor,
    borderColor: e.borderColor || t.borderColor,
    textColor: e.textColor || t.textColor,
    classNames: t.classNames.concat(e.classNames)
  };
}
const Qo = {
  id: String,
  defaultAllDay: Boolean,
  url: String,
  format: String,
  events: p,
  eventDataTransform: p,
  success: p,
  failure: p
};
function Ti(t, e, n = xi(e)) {
  let r;
  if (typeof t == "string" ? r = { url: t } : typeof t == "function" || Array.isArray(t) ? r = { events: t } : typeof t == "object" && t && (r = t), r) {
    let { refined: i, extra: s } = dn(r, n), l = Yo(i, e);
    if (l)
      return {
        _raw: t,
        isFetching: !1,
        latestFetchId: "",
        fetchRange: null,
        defaultAllDay: i.defaultAllDay,
        eventDataTransform: i.eventDataTransform,
        success: i.success,
        failure: i.failure,
        publicId: i.id || "",
        sourceId: ge(),
        sourceDefId: l.sourceDefId,
        meta: l.meta,
        ui: ct(i, e),
        extendedProps: s
      };
  }
  return null;
}
function xi(t) {
  return Object.assign(Object.assign(Object.assign({}, at), Qo), t.pluginHooks.eventSourceRefiners);
}
function Yo(t, e) {
  let n = e.pluginHooks.eventSourceDefs;
  for (let r = n.length - 1; r >= 0; r -= 1) {
    let s = n[r].parseMeta(t);
    if (s)
      return { sourceDefId: r, meta: s };
  }
  return null;
}
function Zo(t, e, n, r, i) {
  switch (e.type) {
    case "RECEIVE_EVENTS":
      return $o(t, n[e.sourceId], e.fetchId, e.fetchRange, e.rawEvents, i);
    case "RESET_RAW_EVENTS":
      return Xo(t, n[e.sourceId], e.rawEvents, r.activeRange, i);
    case "ADD_EVENTS":
      return Jo(
        t,
        e.eventStore,
        r ? r.activeRange : null,
        i
      );
    case "RESET_EVENTS":
      return e.eventStore;
    case "MERGE_EVENTS":
      return bn(t, e.eventStore);
    case "PREV":
    case "NEXT":
    case "CHANGE_DATE":
    case "CHANGE_VIEW_TYPE":
      return r ? he(t, r.activeRange, i) : t;
    case "REMOVE_EVENTS":
      return Wo(t, e.eventStore);
    case "REMOVE_EVENT_SOURCE":
      return Ii(t, e.sourceId);
    case "REMOVE_ALL_EVENT_SOURCES":
      return bt(t, (s) => !s.sourceId);
    case "REMOVE_ALL_EVENTS":
      return U();
    default:
      return t;
  }
}
function $o(t, e, n, r, i, s) {
  if (e && n === e.latestFetchId) {
    let l = Ne(Mi(i, e, s), e, s);
    return r && (l = he(l, r, s)), bn(Ii(t, e.sourceId), l);
  }
  return t;
}
function Xo(t, e, n, r, i) {
  const { defIdMap: s, instanceIdMap: l } = ea(t);
  let o = Ne(Mi(n, e, i), e, i, !1, s, l);
  return he(o, r, i);
}
function Mi(t, e, n) {
  let r = n.options.eventDataTransform, i = e ? e.eventDataTransform : null;
  return i && (t = Sr(t, i)), r && (t = Sr(t, r)), t;
}
function Sr(t, e) {
  let n;
  if (!e)
    n = t;
  else {
    n = [];
    for (let r of t) {
      let i = e(r);
      i ? n.push(i) : i == null && n.push(r);
    }
  }
  return n;
}
function Jo(t, e, n, r) {
  return n && (e = he(e, n, r)), bn(t, e);
}
function Ar(t, e, n) {
  let { defs: r } = t, i = Y(t.instances, (s) => r[s.defId].allDay ? s : Object.assign(Object.assign({}, s), { range: {
    start: n.createMarker(e.toDate(s.range.start, s.forcedStartTzo)),
    end: n.createMarker(e.toDate(s.range.end, s.forcedEndTzo))
  }, forcedStartTzo: n.canComputeOffset ? null : s.forcedStartTzo, forcedEndTzo: n.canComputeOffset ? null : s.forcedEndTzo }));
  return { defs: r, instances: i };
}
function Ii(t, e) {
  return bt(t, (n) => n.sourceId !== e);
}
function Ko(t, e) {
  return {
    defs: t.defs,
    instances: ue(t.instances, (n) => !e[n.instanceId])
  };
}
function ea(t) {
  const { defs: e, instances: n } = t, r = {}, i = {};
  for (let s in e) {
    const l = e[s], { publicId: o } = l;
    o && (r[o] = s);
  }
  for (let s in n) {
    const l = n[s], o = e[l.defId], { publicId: a } = o;
    a && (i[a] = s);
  }
  return { defIdMap: r, instanceIdMap: i };
}
class yt {
  constructor() {
    this.handlers = {}, this.thisContext = null;
  }
  setThisContext(e) {
    this.thisContext = e;
  }
  setOptions(e) {
    this.options = e;
  }
  on(e, n) {
    ta(this.handlers, e, n);
  }
  off(e, n) {
    na(this.handlers, e, n);
  }
  trigger(e, ...n) {
    let r = this.handlers[e] || [], i = this.options && this.options[e], s = [].concat(i || [], r);
    for (let l of s)
      l.apply(this.thisContext, n);
  }
  hasHandlers(e) {
    return Boolean(this.handlers[e] && this.handlers[e].length || this.options && this.options[e]);
  }
}
function ta(t, e, n) {
  (t[e] || (t[e] = [])).push(n);
}
function na(t, e, n) {
  n ? t[e] && (t[e] = t[e].filter((r) => r !== n)) : delete t[e];
}
const ra = {
  startTime: "09:00",
  endTime: "17:00",
  daysOfWeek: [1, 2, 3, 4, 5],
  display: "inverse-background",
  classNames: "fc-non-business",
  groupId: "_businessHours"
};
function ia(t, e) {
  return Ne(sa(t), null, e);
}
function sa(t) {
  let e;
  return t === !0 ? e = [{}] : Array.isArray(t) ? e = t.filter((n) => n.daysOfWeek) : typeof t == "object" && t ? e = [t] : e = [], e = e.map((n) => Object.assign(Object.assign({}, ra), n)), e;
}
function ki(t, e, n) {
  n.emitter.trigger("select", Object.assign(Object.assign({}, yn(t, n)), { jsEvent: e ? e.origEvent : null, view: n.viewApi || n.calendarApi.view }));
}
function la(t, e) {
  e.emitter.trigger("unselect", {
    jsEvent: t ? t.origEvent : null,
    view: e.viewApi || e.calendarApi.view
  });
}
function yn(t, e) {
  let n = {};
  for (let r of e.pluginHooks.dateSpanTransforms)
    Object.assign(n, r(t, e));
  return Object.assign(n, Ea(t, e.dateEnv)), n;
}
function Dr(t, e, n) {
  let { dateEnv: r, options: i } = n, s = e;
  return t ? (s = M(s), s = r.add(s, i.defaultAllDayEventDuration)) : s = r.add(s, i.defaultTimedEventDuration), s;
}
function En(t, e, n, r) {
  let i = dt(t.defs, e), s = U();
  for (let l in t.defs) {
    let o = t.defs[l];
    s.defs[l] = oa(o, i[l], n, r);
  }
  for (let l in t.instances) {
    let o = t.instances[l], a = s.defs[o.defId];
    s.instances[l] = aa(o, a, i[o.defId], n, r);
  }
  return s;
}
function oa(t, e, n, r) {
  let i = n.standardProps || {};
  i.hasEnd == null && e.durationEditable && (n.startDelta || n.endDelta) && (i.hasEnd = !0);
  let s = Object.assign(Object.assign(Object.assign({}, t), i), { ui: Object.assign(Object.assign({}, t.ui), i.ui) });
  n.extendedProps && (s.extendedProps = Object.assign(Object.assign({}, s.extendedProps), n.extendedProps));
  for (let l of r.pluginHooks.eventDefMutationAppliers)
    l(s, n, r);
  return !s.hasEnd && r.options.forceEventDuration && (s.hasEnd = !0), s;
}
function aa(t, e, n, r, i) {
  let { dateEnv: s } = i, l = r.standardProps && r.standardProps.allDay === !0, o = r.standardProps && r.standardProps.hasEnd === !1, a = Object.assign({}, t);
  return l && (a.range = Si(a.range)), r.datesDelta && n.startEditable && (a.range = {
    start: s.add(a.range.start, r.datesDelta),
    end: s.add(a.range.end, r.datesDelta)
  }), r.startDelta && n.durationEditable && (a.range = {
    start: s.add(a.range.start, r.startDelta),
    end: a.range.end
  }), r.endDelta && n.durationEditable && (a.range = {
    start: a.range.start,
    end: s.add(a.range.end, r.endDelta)
  }), o && (a.range = {
    start: a.range.start,
    end: Dr(e.allDay, a.range.start, i)
  }), e.allDay && (a.range = {
    start: M(a.range.start),
    end: M(a.range.end)
  }), a.range.end < a.range.start && (a.range.end = Dr(e.allDay, a.range.start, i)), a;
}
class ve {
  constructor(e, n) {
    this.context = e, this.internalEventSource = n;
  }
  remove() {
    this.context.dispatch({
      type: "REMOVE_EVENT_SOURCE",
      sourceId: this.internalEventSource.sourceId
    });
  }
  refetch() {
    this.context.dispatch({
      type: "FETCH_EVENT_SOURCES",
      sourceIds: [this.internalEventSource.sourceId],
      isRefetch: !0
    });
  }
  get id() {
    return this.internalEventSource.publicId;
  }
  get url() {
    return this.internalEventSource.meta.url;
  }
  get format() {
    return this.internalEventSource.meta.format;
  }
}
class N {
  constructor(e, n, r) {
    this._context = e, this._def = n, this._instance = r || null;
  }
  setProp(e, n) {
    if (e in Ci)
      console.warn("Could not set date-related prop 'name'. Use one of the date-related methods instead.");
    else if (e === "id")
      n = Je[e](n), this.mutate({
        standardProps: { publicId: n }
      });
    else if (e in Je)
      n = Je[e](n), this.mutate({
        standardProps: { [e]: n }
      });
    else if (e in at) {
      let r = at[e](n);
      e === "color" ? r = { backgroundColor: n, borderColor: n } : e === "editable" ? r = { startEditable: n, durationEditable: n } : r = { [e]: n }, this.mutate({
        standardProps: { ui: r }
      });
    } else
      console.warn(`Could not set prop '${e}'. Use setExtendedProp instead.`);
  }
  setExtendedProp(e, n) {
    this.mutate({
      extendedProps: { [e]: n }
    });
  }
  setStart(e, n = {}) {
    let { dateEnv: r } = this._context, i = r.createMarker(e);
    if (i && this._instance) {
      let s = this._instance.range, l = be(s.start, i, r, n.granularity);
      n.maintainDuration ? this.mutate({ datesDelta: l }) : this.mutate({ startDelta: l });
    }
  }
  setEnd(e, n = {}) {
    let { dateEnv: r } = this._context, i;
    if (!(e != null && (i = r.createMarker(e), !i)) && this._instance)
      if (i) {
        let s = be(this._instance.range.end, i, r, n.granularity);
        this.mutate({ endDelta: s });
      } else
        this.mutate({ standardProps: { hasEnd: !1 } });
  }
  setDates(e, n, r = {}) {
    let { dateEnv: i } = this._context, s = { allDay: r.allDay }, l = i.createMarker(e), o;
    if (!!l && !(n != null && (o = i.createMarker(n), !o)) && this._instance) {
      let a = this._instance.range;
      r.allDay === !0 && (a = Si(a));
      let d = be(a.start, l, i, r.granularity);
      if (o) {
        let c = be(a.end, o, i, r.granularity);
        Il(d, c) ? this.mutate({ datesDelta: d, standardProps: s }) : this.mutate({ startDelta: d, endDelta: c, standardProps: s });
      } else
        s.hasEnd = !1, this.mutate({ datesDelta: d, standardProps: s });
    }
  }
  moveStart(e) {
    let n = w(e);
    n && this.mutate({ startDelta: n });
  }
  moveEnd(e) {
    let n = w(e);
    n && this.mutate({ endDelta: n });
  }
  moveDates(e) {
    let n = w(e);
    n && this.mutate({ datesDelta: n });
  }
  setAllDay(e, n = {}) {
    let r = { allDay: e }, { maintainDuration: i } = n;
    i == null && (i = this._context.options.allDayMaintainDuration), this._def.allDay !== e && (r.hasEnd = i), this.mutate({ standardProps: r });
  }
  formatRange(e) {
    let { dateEnv: n } = this._context, r = this._instance, i = O(e);
    return this._def.hasEnd ? n.formatRange(r.range.start, r.range.end, i, {
      forcedStartTzo: r.forcedStartTzo,
      forcedEndTzo: r.forcedEndTzo
    }) : n.format(r.range.start, i, {
      forcedTzo: r.forcedStartTzo
    });
  }
  mutate(e) {
    let n = this._instance;
    if (n) {
      let r = this._def, i = this._context, { eventStore: s } = i.getCurrentData(), l = vn(s, n.instanceId);
      l = En(l, {
        "": {
          display: "",
          startEditable: !0,
          durationEditable: !0,
          constraints: [],
          overlap: null,
          allows: [],
          backgroundColor: "",
          borderColor: "",
          textColor: "",
          classNames: []
        }
      }, e, i);
      let a = new N(i, r, n);
      this._def = l.defs[r.defId], this._instance = l.instances[n.instanceId], i.dispatch({
        type: "MERGE_EVENTS",
        eventStore: l
      }), i.emitter.trigger("eventChange", {
        oldEvent: a,
        event: this,
        relatedEvents: ce(l, i, n),
        revert() {
          i.dispatch({
            type: "RESET_EVENTS",
            eventStore: s
          });
        }
      });
    }
  }
  remove() {
    let e = this._context, n = Ni(this);
    e.dispatch({
      type: "REMOVE_EVENTS",
      eventStore: n
    }), e.emitter.trigger("eventRemove", {
      event: this,
      relatedEvents: [],
      revert() {
        e.dispatch({
          type: "MERGE_EVENTS",
          eventStore: n
        });
      }
    });
  }
  get source() {
    let { sourceId: e } = this._def;
    return e ? new ve(this._context, this._context.getCurrentData().eventSources[e]) : null;
  }
  get start() {
    return this._instance ? this._context.dateEnv.toDate(this._instance.range.start) : null;
  }
  get end() {
    return this._instance && this._def.hasEnd ? this._context.dateEnv.toDate(this._instance.range.end) : null;
  }
  get startStr() {
    let e = this._instance;
    return e ? this._context.dateEnv.formatIso(e.range.start, {
      omitTime: this._def.allDay,
      forcedTzo: e.forcedStartTzo
    }) : "";
  }
  get endStr() {
    let e = this._instance;
    return e && this._def.hasEnd ? this._context.dateEnv.formatIso(e.range.end, {
      omitTime: this._def.allDay,
      forcedTzo: e.forcedEndTzo
    }) : "";
  }
  get id() {
    return this._def.publicId;
  }
  get groupId() {
    return this._def.groupId;
  }
  get allDay() {
    return this._def.allDay;
  }
  get title() {
    return this._def.title;
  }
  get url() {
    return this._def.url;
  }
  get display() {
    return this._def.ui.display || "auto";
  }
  get startEditable() {
    return this._def.ui.startEditable;
  }
  get durationEditable() {
    return this._def.ui.durationEditable;
  }
  get constraint() {
    return this._def.ui.constraints[0] || null;
  }
  get overlap() {
    return this._def.ui.overlap;
  }
  get allow() {
    return this._def.ui.allows[0] || null;
  }
  get backgroundColor() {
    return this._def.ui.backgroundColor;
  }
  get borderColor() {
    return this._def.ui.borderColor;
  }
  get textColor() {
    return this._def.ui.textColor;
  }
  get classNames() {
    return this._def.ui.classNames;
  }
  get extendedProps() {
    return this._def.extendedProps;
  }
  toPlainObject(e = {}) {
    let n = this._def, { ui: r } = n, { startStr: i, endStr: s } = this, l = {
      allDay: n.allDay
    };
    return n.title && (l.title = n.title), i && (l.start = i), s && (l.end = s), n.publicId && (l.id = n.publicId), n.groupId && (l.groupId = n.groupId), n.url && (l.url = n.url), r.display && r.display !== "auto" && (l.display = r.display), e.collapseColor && r.backgroundColor && r.backgroundColor === r.borderColor ? l.color = r.backgroundColor : (r.backgroundColor && (l.backgroundColor = r.backgroundColor), r.borderColor && (l.borderColor = r.borderColor)), r.textColor && (l.textColor = r.textColor), r.classNames.length && (l.classNames = r.classNames), Object.keys(n.extendedProps).length && (e.collapseExtendedProps ? Object.assign(l, n.extendedProps) : l.extendedProps = n.extendedProps), l;
  }
  toJSON() {
    return this.toPlainObject();
  }
}
function Ni(t) {
  let e = t._def, n = t._instance;
  return {
    defs: { [e.defId]: e },
    instances: n ? { [n.instanceId]: n } : {}
  };
}
function ce(t, e, n) {
  let { defs: r, instances: i } = t, s = [], l = n ? n.instanceId : "";
  for (let o in i) {
    let a = i[o], d = r[a.defId];
    a.instanceId !== l && s.push(new N(e, d, a));
  }
  return s;
}
function Cr(t, e, n, r) {
  let i = {}, s = {}, l = {}, o = [], a = [], d = dt(t.defs, e);
  for (let c in t.defs) {
    let f = t.defs[c];
    d[f.defId].display === "inverse-background" && (f.groupId ? (i[f.groupId] = [], l[f.groupId] || (l[f.groupId] = f)) : s[c] = []);
  }
  for (let c in t.instances) {
    let f = t.instances[c], h = t.defs[f.defId], u = d[h.defId], m = f.range, v = !h.allDay && r ? Ai(m, r) : m, b = fe(v, n);
    b && (u.display === "inverse-background" ? h.groupId ? i[h.groupId].push(b) : s[f.defId].push(b) : u.display !== "none" && (u.display === "background" ? o : a).push({
      def: h,
      ui: u,
      instance: f,
      range: b,
      isStart: v.start && v.start.valueOf() === b.start.valueOf(),
      isEnd: v.end && v.end.valueOf() === b.end.valueOf()
    }));
  }
  for (let c in i) {
    let f = i[c], h = yr(f, n);
    for (let u of h) {
      let m = l[c], v = d[m.defId];
      o.push({
        def: m,
        ui: v,
        instance: null,
        range: u,
        isStart: !1,
        isEnd: !1
      });
    }
  }
  for (let c in s) {
    let f = s[c], h = yr(f, n);
    for (let u of h)
      o.push({
        def: t.defs[c],
        ui: d[c],
        instance: null,
        range: u,
        isStart: !1,
        isEnd: !1
      });
  }
  return { bg: o, fg: a };
}
function ca(t) {
  return t.ui.display === "background" || t.ui.display === "inverse-background";
}
function wr(t, e) {
  t.fcSeg = e;
}
function De(t) {
  return t.fcSeg || t.parentNode.fcSeg || null;
}
function dt(t, e) {
  return Y(t, (n) => Oi(n, e));
}
function Oi(t, e) {
  let n = [];
  return e[""] && n.push(e[""]), e[t.defId] && n.push(e[t.defId]), n.push(t.ui), _i(n);
}
function Pi(t, e) {
  let n = t.map(da);
  return n.sort((r, i) => Cl(r, i, e)), n.map((r) => r._seg);
}
function da(t) {
  let { eventRange: e } = t, n = e.def, r = e.instance ? e.instance.range : e.range, i = r.start ? r.start.valueOf() : 0, s = r.end ? r.end.valueOf() : 0;
  return Object.assign(Object.assign(Object.assign({}, n.extendedProps), n), {
    id: n.publicId,
    start: i,
    end: s,
    duration: s - i,
    allDay: Number(n.allDay),
    _seg: t
  });
}
function ua(t, e) {
  let { pluginHooks: n } = e, r = n.isDraggableTransformers, { def: i, ui: s } = t.eventRange, l = s.startEditable;
  for (let o of r)
    l = o(l, i, s, e);
  return l;
}
function fa(t, e) {
  return t.isStart && t.eventRange.ui.durationEditable && e.options.eventResizableFromStart;
}
function ha(t, e) {
  return t.isEnd && t.eventRange.ui.durationEditable;
}
function Hi(t, e, n, r, i, s, l) {
  let { dateEnv: o, options: a } = n, { displayEventTime: d, displayEventEnd: c } = a, f = t.eventRange.def, h = t.eventRange.instance;
  d == null && (d = r !== !1), c == null && (c = i !== !1);
  let u = h.range.start, m = h.range.end, v = s || t.start || t.eventRange.range.start, b = l || t.end || t.eventRange.range.end, y = M(u).valueOf() === M(v).valueOf(), E = M(ie(m, -1)).valueOf() === M(ie(b, -1)).valueOf();
  return d && !f.allDay && (y || E) ? (v = y ? u : v, b = E ? m : b, c && f.hasEnd ? o.formatRange(v, b, e, {
    forcedStartTzo: s ? null : h.forcedStartTzo,
    forcedEndTzo: l ? null : h.forcedEndTzo
  }) : o.format(v, e, {
    forcedTzo: s ? null : h.forcedStartTzo
  })) : "";
}
function ne(t, e, n) {
  let r = t.eventRange.range;
  return {
    isPast: r.end < (n || e.start),
    isFuture: r.start >= (n || e.end),
    isToday: e && Q(e, r.start)
  };
}
function ga(t) {
  let e = ["fc-event"];
  return t.isMirror && e.push("fc-event-mirror"), t.isDraggable && e.push("fc-event-draggable"), (t.isStartResizable || t.isEndResizable) && e.push("fc-event-resizable"), t.isDragging && e.push("fc-event-dragging"), t.isResizing && e.push("fc-event-resizing"), t.isSelected && e.push("fc-event-selected"), t.isStart && e.push("fc-event-start"), t.isEnd && e.push("fc-event-end"), t.isPast && e.push("fc-event-past"), t.isToday && e.push("fc-event-today"), t.isFuture && e.push("fc-event-future"), e;
}
function Bi(t) {
  return t.instance ? t.instance.instanceId : `${t.def.defId}:${t.range.start.toISOString()}`;
}
function Li(t, e) {
  let { def: n, instance: r } = t.eventRange, { url: i } = n;
  if (i)
    return { href: i };
  let { emitter: s, options: l } = e, { eventInteractive: o } = l;
  return o == null && (o = n.interactive, o == null && (o = Boolean(s.hasHandlers("eventClick")))), o ? ui((a) => {
    s.trigger("eventClick", {
      el: a.target,
      event: new N(e, n, r),
      jsEvent: a,
      view: e.viewApi
    });
  }) : {};
}
const pa = {
  start: p,
  end: p,
  allDay: Boolean
};
function ma(t, e, n) {
  let r = va(t, e), { range: i } = r;
  if (!i.start)
    return null;
  if (!i.end) {
    if (n == null)
      return null;
    i.end = e.add(i.start, n);
  }
  return r;
}
function va(t, e) {
  let { refined: n, extra: r } = dn(t, pa), i = n.start ? e.createMarkerMeta(n.start) : null, s = n.end ? e.createMarkerMeta(n.end) : null, { allDay: l } = n;
  return l == null && (l = i && i.isTimeUnspecified && (!s || s.isTimeUnspecified)), Object.assign({ range: {
    start: i ? i.marker : null,
    end: s ? s.marker : null
  }, allDay: l }, r);
}
function ba(t, e) {
  return No(t.range, e.range) && t.allDay === e.allDay && ya(t, e);
}
function ya(t, e) {
  for (let n in e)
    if (n !== "range" && n !== "allDay" && t[n] !== e[n])
      return !1;
  for (let n in t)
    if (!(n in e))
      return !1;
  return !0;
}
function Ea(t, e) {
  return Object.assign(Object.assign({}, Ui(t.range, e, t.allDay)), { allDay: t.allDay });
}
function ji(t, e, n) {
  return Object.assign(Object.assign({}, Ui(t, e, n)), { timeZone: e.timeZone });
}
function Ui(t, e, n) {
  return {
    start: e.toDate(t.start),
    end: e.toDate(t.end),
    startStr: e.formatIso(t.start, { omitTime: n }),
    endStr: e.formatIso(t.end, { omitTime: n })
  };
}
function Sa(t, e, n) {
  let r = Ri({ editable: !1 }, n), i = Vt(
    r.refined,
    r.extra,
    "",
    t.allDay,
    !0,
    n
  );
  return {
    def: i,
    ui: Oi(i, e),
    instance: pn(i.defId, t.range),
    range: t.range,
    isStart: !0,
    isEnd: !0
  };
}
function Aa(t, e, n) {
  let r = !1, i = function(o) {
    r || (r = !0, e(o));
  }, s = function(o) {
    r || (r = !0, n(o));
  }, l = t(i, s);
  l && typeof l.then == "function" && l.then(i, s);
}
class Rr extends Error {
  constructor(e, n) {
    super(e), this.response = n;
  }
}
function Da(t, e, n) {
  t = t.toUpperCase();
  const r = {
    method: t
  };
  return t === "GET" ? e += (e.indexOf("?") === -1 ? "?" : "&") + new URLSearchParams(n) : (r.body = new URLSearchParams(n), r.headers = {
    "Content-Type": "application/x-www-form-urlencoded"
  }), fetch(e, r).then((i) => {
    if (i.ok)
      return i.json().then((s) => [s, i], () => {
        throw new Rr("Failure parsing JSON", i);
      });
    throw new Rr("Request failed", i);
  });
}
let xt;
function zi() {
  return xt == null && (xt = Ca()), xt;
}
function Ca() {
  if (typeof document > "u")
    return !0;
  let t = document.createElement("div");
  t.style.position = "absolute", t.style.top = "0px", t.style.left = "0px", t.innerHTML = "<table><tr><td><div></div></td></tr></table>", t.querySelector("table").style.height = "100px", t.querySelector("div").style.height = "100%", document.body.appendChild(t);
  let n = t.querySelector("div").offsetHeight > 0;
  return document.body.removeChild(t), n;
}
class wa extends T {
  constructor() {
    super(...arguments), this.state = {
      forPrint: !1
    }, this.handleBeforePrint = () => {
      this.setState({ forPrint: !0 });
    }, this.handleAfterPrint = () => {
      this.setState({ forPrint: !1 });
    };
  }
  render() {
    let { props: e } = this, { options: n } = e, { forPrint: r } = this.state, i = r || n.height === "auto" || n.contentHeight === "auto", s = !i && n.height != null ? n.height : "", l = [
      "fc",
      r ? "fc-media-print" : "fc-media-screen",
      `fc-direction-${n.direction}`,
      e.theme.getClass("root")
    ];
    return zi() || l.push("fc-liquid-hack"), e.children(l, s, i, r);
  }
  componentDidMount() {
    let { emitter: e } = this.props;
    e.on("_beforeprint", this.handleBeforePrint), e.on("_afterprint", this.handleAfterPrint);
  }
  componentWillUnmount() {
    let { emitter: e } = this.props;
    e.off("_beforeprint", this.handleBeforePrint), e.off("_afterprint", this.handleAfterPrint);
  }
}
class we {
  constructor(e) {
    this.component = e.component, this.isHitComboAllowed = e.isHitComboAllowed || null;
  }
  destroy() {
  }
}
function Ra(t, e) {
  return {
    component: t,
    el: e.el,
    useEventCenter: e.useEventCenter != null ? e.useEventCenter : !0,
    isHitComboAllowed: e.isHitComboAllowed || null
  };
}
function Sn(t) {
  return {
    [t.component.uid]: t
  };
}
const qt = {};
class _a {
  getCurrentData() {
    return this.currentDataManager.getCurrentData();
  }
  dispatch(e) {
    this.currentDataManager.dispatch(e);
  }
  get view() {
    return this.getCurrentData().viewApi;
  }
  batchRendering(e) {
    e();
  }
  updateSize() {
    this.trigger("_resize", !0);
  }
  setOption(e, n) {
    this.dispatch({
      type: "SET_OPTION",
      optionName: e,
      rawOptionValue: n
    });
  }
  getOption(e) {
    return this.currentDataManager.currentCalendarOptionsInput[e];
  }
  getAvailableLocaleCodes() {
    return Object.keys(this.getCurrentData().availableRawLocales);
  }
  on(e, n) {
    let { currentDataManager: r } = this;
    r.currentCalendarOptionsRefiners[e] ? r.emitter.on(e, n) : console.warn(`Unknown listener name '${e}'`);
  }
  off(e, n) {
    this.currentDataManager.emitter.off(e, n);
  }
  trigger(e, ...n) {
    this.currentDataManager.emitter.trigger(e, ...n);
  }
  changeView(e, n) {
    this.batchRendering(() => {
      if (this.unselect(), n)
        if (n.start && n.end)
          this.dispatch({
            type: "CHANGE_VIEW_TYPE",
            viewType: e
          }), this.dispatch({
            type: "SET_OPTION",
            optionName: "visibleRange",
            rawOptionValue: n
          });
        else {
          let { dateEnv: r } = this.getCurrentData();
          this.dispatch({
            type: "CHANGE_VIEW_TYPE",
            viewType: e,
            dateMarker: r.createMarker(n)
          });
        }
      else
        this.dispatch({
          type: "CHANGE_VIEW_TYPE",
          viewType: e
        });
    });
  }
  zoomTo(e, n) {
    let r = this.getCurrentData(), i;
    n = n || "day", i = r.viewSpecs[n] || this.getUnitViewSpec(n), this.unselect(), i ? this.dispatch({
      type: "CHANGE_VIEW_TYPE",
      viewType: i.type,
      dateMarker: e
    }) : this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: e
    });
  }
  getUnitViewSpec(e) {
    let { viewSpecs: n, toolbarConfig: r } = this.getCurrentData(), i = [].concat(r.header ? r.header.viewsWithButtons : [], r.footer ? r.footer.viewsWithButtons : []), s, l;
    for (let o in n)
      i.push(o);
    for (s = 0; s < i.length; s += 1)
      if (l = n[i[s]], l && l.singleUnit === e)
        return l;
    return null;
  }
  prev() {
    this.unselect(), this.dispatch({ type: "PREV" });
  }
  next() {
    this.unselect(), this.dispatch({ type: "NEXT" });
  }
  prevYear() {
    let e = this.getCurrentData();
    this.unselect(), this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: e.dateEnv.addYears(e.currentDate, -1)
    });
  }
  nextYear() {
    let e = this.getCurrentData();
    this.unselect(), this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: e.dateEnv.addYears(e.currentDate, 1)
    });
  }
  today() {
    let e = this.getCurrentData();
    this.unselect(), this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: Pe(e.calendarOptions.now, e.dateEnv)
    });
  }
  gotoDate(e) {
    let n = this.getCurrentData();
    this.unselect(), this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: n.dateEnv.createMarker(e)
    });
  }
  incrementDate(e) {
    let n = this.getCurrentData(), r = w(e);
    r && (this.unselect(), this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: n.dateEnv.add(n.currentDate, r)
    }));
  }
  getDate() {
    let e = this.getCurrentData();
    return e.dateEnv.toDate(e.currentDate);
  }
  formatDate(e, n) {
    let { dateEnv: r } = this.getCurrentData();
    return r.format(r.createMarker(e), O(n));
  }
  formatRange(e, n, r) {
    let { dateEnv: i } = this.getCurrentData();
    return i.formatRange(i.createMarker(e), i.createMarker(n), O(r), r);
  }
  formatIso(e, n) {
    let { dateEnv: r } = this.getCurrentData();
    return r.formatIso(r.createMarker(e), { omitTime: n });
  }
  select(e, n) {
    let r;
    n == null ? e.start != null ? r = e : r = {
      start: e,
      end: null
    } : r = {
      start: e,
      end: n
    };
    let i = this.getCurrentData(), s = ma(r, i.dateEnv, w({ days: 1 }));
    s && (this.dispatch({ type: "SELECT_DATES", selection: s }), ki(s, null, i));
  }
  unselect(e) {
    let n = this.getCurrentData();
    n.dateSelection && (this.dispatch({ type: "UNSELECT_DATES" }), la(e, n));
  }
  addEvent(e, n) {
    if (e instanceof N) {
      let l = e._def, o = e._instance;
      return this.getCurrentData().eventStore.defs[l.defId] || (this.dispatch({
        type: "ADD_EVENTS",
        eventStore: Gt({ def: l, instance: o })
      }), this.triggerEventAdd(e)), e;
    }
    let r = this.getCurrentData(), i;
    if (n instanceof ve)
      i = n.internalEventSource;
    else if (typeof n == "boolean")
      n && ([i] = fn(r.eventSources));
    else if (n != null) {
      let l = this.getEventSourceById(n);
      if (!l)
        return console.warn(`Could not find an event source with ID "${n}"`), null;
      i = l.internalEventSource;
    }
    let s = wi(e, i, r, !1);
    if (s) {
      let l = new N(r, s.def, s.def.recurringDef ? null : s.instance);
      return this.dispatch({
        type: "ADD_EVENTS",
        eventStore: Gt(s)
      }), this.triggerEventAdd(l), l;
    }
    return null;
  }
  triggerEventAdd(e) {
    let { emitter: n } = this.getCurrentData();
    n.trigger("eventAdd", {
      event: e,
      relatedEvents: [],
      revert: () => {
        this.dispatch({
          type: "REMOVE_EVENTS",
          eventStore: Ni(e)
        });
      }
    });
  }
  getEventById(e) {
    let n = this.getCurrentData(), { defs: r, instances: i } = n.eventStore;
    e = String(e);
    for (let s in r) {
      let l = r[s];
      if (l.publicId === e) {
        if (l.recurringDef)
          return new N(n, l, null);
        for (let o in i) {
          let a = i[o];
          if (a.defId === l.defId)
            return new N(n, l, a);
        }
      }
    }
    return null;
  }
  getEvents() {
    let e = this.getCurrentData();
    return ce(e.eventStore, e);
  }
  removeAllEvents() {
    this.dispatch({ type: "REMOVE_ALL_EVENTS" });
  }
  getEventSources() {
    let e = this.getCurrentData(), n = e.eventSources, r = [];
    for (let i in n)
      r.push(new ve(e, n[i]));
    return r;
  }
  getEventSourceById(e) {
    let n = this.getCurrentData(), r = n.eventSources;
    e = String(e);
    for (let i in r)
      if (r[i].publicId === e)
        return new ve(n, r[i]);
    return null;
  }
  addEventSource(e) {
    let n = this.getCurrentData();
    if (e instanceof ve)
      return n.eventSources[e.internalEventSource.sourceId] || this.dispatch({
        type: "ADD_EVENT_SOURCES",
        sources: [e.internalEventSource]
      }), e;
    let r = Ti(e, n);
    return r ? (this.dispatch({ type: "ADD_EVENT_SOURCES", sources: [r] }), new ve(n, r)) : null;
  }
  removeAllEventSources() {
    this.dispatch({ type: "REMOVE_ALL_EVENT_SOURCES" });
  }
  refetchEvents() {
    this.dispatch({ type: "FETCH_EVENT_SOURCES", isRefetch: !0 });
  }
  scrollToTime(e) {
    let n = w(e);
    n && this.trigger("_scrollRequest", { time: n });
  }
}
function Ta(t, e) {
  return t.left >= e.left && t.left < e.right && t.top >= e.top && t.top < e.bottom;
}
function Fi(t, e) {
  let n = {
    left: Math.max(t.left, e.left),
    right: Math.min(t.right, e.right),
    top: Math.max(t.top, e.top),
    bottom: Math.min(t.bottom, e.bottom)
  };
  return n.left < n.right && n.top < n.bottom ? n : !1;
}
function xa(t, e) {
  return {
    left: Math.min(Math.max(t.left, e.left), e.right),
    top: Math.min(Math.max(t.top, e.top), e.bottom)
  };
}
function Ma(t) {
  return {
    left: (t.left + t.right) / 2,
    top: (t.top + t.bottom) / 2
  };
}
function Ia(t, e) {
  return {
    left: t.left - e.left,
    top: t.top - e.top
  };
}
const Mt = U();
class ka {
  constructor() {
    this.getKeysForEventDefs = A(this._getKeysForEventDefs), this.splitDateSelection = A(this._splitDateSpan), this.splitEventStore = A(this._splitEventStore), this.splitIndividualUi = A(this._splitIndividualUi), this.splitEventDrag = A(this._splitInteraction), this.splitEventResize = A(this._splitInteraction), this.eventUiBuilders = {};
  }
  splitProps(e) {
    let n = this.getKeyInfo(e), r = this.getKeysForEventDefs(e.eventStore), i = this.splitDateSelection(e.dateSelection), s = this.splitIndividualUi(e.eventUiBases, r), l = this.splitEventStore(e.eventStore, r), o = this.splitEventDrag(e.eventDrag), a = this.splitEventResize(e.eventResize), d = {};
    this.eventUiBuilders = Y(n, (c, f) => this.eventUiBuilders[f] || A(Na));
    for (let c in n) {
      let f = n[c], h = l[c] || Mt, u = this.eventUiBuilders[c];
      d[c] = {
        businessHours: f.businessHours || e.businessHours,
        dateSelection: i[c] || null,
        eventStore: h,
        eventUiBases: u(e.eventUiBases[""], f.ui, s[c]),
        eventSelection: h.instances[e.eventSelection] ? e.eventSelection : "",
        eventDrag: o[c] || null,
        eventResize: a[c] || null
      };
    }
    return d;
  }
  _splitDateSpan(e) {
    let n = {};
    if (e) {
      let r = this.getKeysForDateSpan(e);
      for (let i of r)
        n[i] = e;
    }
    return n;
  }
  _getKeysForEventDefs(e) {
    return Y(e.defs, (n) => this.getKeysForEventDef(n));
  }
  _splitEventStore(e, n) {
    let { defs: r, instances: i } = e, s = {};
    for (let l in r)
      for (let o of n[l])
        s[o] || (s[o] = U()), s[o].defs[l] = r[l];
    for (let l in i) {
      let o = i[l];
      for (let a of n[o.defId])
        s[a] && (s[a].instances[l] = o);
    }
    return s;
  }
  _splitIndividualUi(e, n) {
    let r = {};
    for (let i in e)
      if (i)
        for (let s of n[i])
          r[s] || (r[s] = {}), r[s][i] = e[i];
    return r;
  }
  _splitInteraction(e) {
    let n = {};
    if (e) {
      let r = this._splitEventStore(e.affectedEvents, this._getKeysForEventDefs(e.affectedEvents)), i = this._getKeysForEventDefs(e.mutatedEvents), s = this._splitEventStore(e.mutatedEvents, i), l = (o) => {
        n[o] || (n[o] = {
          affectedEvents: r[o] || Mt,
          mutatedEvents: s[o] || Mt,
          isEvent: e.isEvent
        });
      };
      for (let o in r)
        l(o);
      for (let o in s)
        l(o);
    }
    return n;
  }
}
function Na(t, e, n) {
  let r = [];
  t && r.push(t), e && r.push(e);
  let i = {
    "": _i(r)
  };
  return n && Object.assign(i, n), i;
}
function Wi(t, e, n, r) {
  return {
    dow: t.getUTCDay(),
    isDisabled: Boolean(r && !Q(r.activeRange, t)),
    isOther: Boolean(r && !Q(r.currentRange, t)),
    isToday: Boolean(e && Q(e, t)),
    isPast: Boolean(n ? t < n : e ? t < e.start : !1),
    isFuture: Boolean(n ? t > n : e ? t >= e.end : !1)
  };
}
function An(t, e) {
  let n = [
    "fc-day",
    `fc-day-${Hl[t.dow]}`
  ];
  return t.isDisabled ? n.push("fc-day-disabled") : (t.isToday && (n.push("fc-day-today"), n.push(e.getClass("today"))), t.isPast && n.push("fc-day-past"), t.isFuture && n.push("fc-day-future"), t.isOther && n.push("fc-day-other")), n;
}
const Oa = O({ year: "numeric", month: "long", day: "numeric" }), Pa = O({ week: "long" });
function ut(t, e, n = "day", r = !0) {
  const { dateEnv: i, options: s, calendarApi: l } = t;
  let o = i.format(e, n === "week" ? Pa : Oa);
  if (s.navLinks) {
    let a = i.toDate(e);
    const d = (c) => {
      let f = n === "day" ? s.navLinkDayClick : n === "week" ? s.navLinkWeekClick : null;
      typeof f == "function" ? f.call(l, i.toDate(e), c) : (typeof f == "string" && (n = f), l.zoomTo(e, n));
    };
    return Object.assign({ title: xe(s.navLinkHint, [o, a], o), "data-navlink": "" }, r ? di(d) : { onClick: d });
  }
  return { "aria-label": o };
}
let It = null;
function Ha() {
  return It === null && (It = Ba()), It;
}
function Ba() {
  let t = document.createElement("div");
  Te(t, {
    position: "absolute",
    top: -1e3,
    left: 0,
    border: 0,
    padding: 0,
    overflow: "scroll",
    direction: "rtl"
  }), t.innerHTML = "<div></div>", document.body.appendChild(t);
  let n = t.firstChild.getBoundingClientRect().left > t.getBoundingClientRect().left;
  return rn(t), n;
}
let kt;
function La() {
  return kt || (kt = ja()), kt;
}
function ja() {
  let t = document.createElement("div");
  t.style.overflow = "scroll", t.style.position = "absolute", t.style.top = "-9999px", t.style.left = "-9999px", document.body.appendChild(t);
  let e = Vi(t);
  return document.body.removeChild(t), e;
}
function Vi(t) {
  return {
    x: t.offsetHeight - t.clientHeight,
    y: t.offsetWidth - t.clientWidth
  };
}
function Ua(t, e = !1) {
  let n = window.getComputedStyle(t), r = parseInt(n.borderLeftWidth, 10) || 0, i = parseInt(n.borderRightWidth, 10) || 0, s = parseInt(n.borderTopWidth, 10) || 0, l = parseInt(n.borderBottomWidth, 10) || 0, o = Vi(t), a = o.y - r - i, d = o.x - s - l, c = {
    borderLeft: r,
    borderRight: i,
    borderTop: s,
    borderBottom: l,
    scrollbarBottom: d,
    scrollbarLeft: 0,
    scrollbarRight: 0
  };
  return Ha() && n.direction === "rtl" ? c.scrollbarLeft = a : c.scrollbarRight = a, e && (c.paddingLeft = parseInt(n.paddingLeft, 10) || 0, c.paddingRight = parseInt(n.paddingRight, 10) || 0, c.paddingTop = parseInt(n.paddingTop, 10) || 0, c.paddingBottom = parseInt(n.paddingBottom, 10) || 0), c;
}
function za(t, e = !1, n) {
  let r = n ? t.getBoundingClientRect() : Dn(t), i = Ua(t, e), s = {
    left: r.left + i.borderLeft + i.scrollbarLeft,
    right: r.right - i.borderRight - i.scrollbarRight,
    top: r.top + i.borderTop,
    bottom: r.bottom - i.borderBottom - i.scrollbarBottom
  };
  return e && (s.left += i.paddingLeft, s.right -= i.paddingRight, s.top += i.paddingTop, s.bottom -= i.paddingBottom), s;
}
function Dn(t) {
  let e = t.getBoundingClientRect();
  return {
    left: e.left + window.pageXOffset,
    top: e.top + window.pageYOffset,
    right: e.right + window.pageXOffset,
    bottom: e.bottom + window.pageYOffset
  };
}
function Fa(t) {
  let e = Gi(t), n = t.getBoundingClientRect();
  for (let r of e) {
    let i = Fi(n, r.getBoundingClientRect());
    if (i)
      n = i;
    else
      return null;
  }
  return n;
}
function Gi(t) {
  let e = [];
  for (; t instanceof HTMLElement; ) {
    let n = window.getComputedStyle(t);
    if (n.position === "fixed")
      break;
    /(auto|scroll)/.test(n.overflow + n.overflowY + n.overflowX) && e.push(t), t = t.parentNode;
  }
  return e;
}
class Ce {
  constructor(e, n, r, i) {
    this.els = n;
    let s = this.originClientRect = e.getBoundingClientRect();
    r && this.buildElHorizontals(s.left), i && this.buildElVerticals(s.top);
  }
  buildElHorizontals(e) {
    let n = [], r = [];
    for (let i of this.els) {
      let s = i.getBoundingClientRect();
      n.push(s.left - e), r.push(s.right - e);
    }
    this.lefts = n, this.rights = r;
  }
  buildElVerticals(e) {
    let n = [], r = [];
    for (let i of this.els) {
      let s = i.getBoundingClientRect();
      n.push(s.top - e), r.push(s.bottom - e);
    }
    this.tops = n, this.bottoms = r;
  }
  leftToIndex(e) {
    let { lefts: n, rights: r } = this, i = n.length, s;
    for (s = 0; s < i; s += 1)
      if (e >= n[s] && e < r[s])
        return s;
  }
  topToIndex(e) {
    let { tops: n, bottoms: r } = this, i = n.length, s;
    for (s = 0; s < i; s += 1)
      if (e >= n[s] && e < r[s])
        return s;
  }
  getWidth(e) {
    return this.rights[e] - this.lefts[e];
  }
  getHeight(e) {
    return this.bottoms[e] - this.tops[e];
  }
  similarTo(e) {
    return Fe(this.tops || [], e.tops || []) && Fe(this.bottoms || [], e.bottoms || []) && Fe(this.lefts || [], e.lefts || []) && Fe(this.rights || [], e.rights || []);
  }
}
function Fe(t, e) {
  const n = t.length;
  if (n !== e.length)
    return !1;
  for (let r = 0; r < n; r++)
    if (Math.round(t[r]) !== Math.round(e[r]))
      return !1;
  return !0;
}
class Cn {
  getMaxScrollTop() {
    return this.getScrollHeight() - this.getClientHeight();
  }
  getMaxScrollLeft() {
    return this.getScrollWidth() - this.getClientWidth();
  }
  canScrollVertically() {
    return this.getMaxScrollTop() > 0;
  }
  canScrollHorizontally() {
    return this.getMaxScrollLeft() > 0;
  }
  canScrollUp() {
    return this.getScrollTop() > 0;
  }
  canScrollDown() {
    return this.getScrollTop() < this.getMaxScrollTop();
  }
  canScrollLeft() {
    return this.getScrollLeft() > 0;
  }
  canScrollRight() {
    return this.getScrollLeft() < this.getMaxScrollLeft();
  }
}
class Wa extends Cn {
  constructor(e) {
    super(), this.el = e;
  }
  getScrollTop() {
    return this.el.scrollTop;
  }
  getScrollLeft() {
    return this.el.scrollLeft;
  }
  setScrollTop(e) {
    this.el.scrollTop = e;
  }
  setScrollLeft(e) {
    this.el.scrollLeft = e;
  }
  getScrollWidth() {
    return this.el.scrollWidth;
  }
  getScrollHeight() {
    return this.el.scrollHeight;
  }
  getClientHeight() {
    return this.el.clientHeight;
  }
  getClientWidth() {
    return this.el.clientWidth;
  }
}
class Va extends Cn {
  getScrollTop() {
    return window.pageYOffset;
  }
  getScrollLeft() {
    return window.pageXOffset;
  }
  setScrollTop(e) {
    window.scroll(window.pageXOffset, e);
  }
  setScrollLeft(e) {
    window.scroll(e, window.pageYOffset);
  }
  getScrollWidth() {
    return document.documentElement.scrollWidth;
  }
  getScrollHeight() {
    return document.documentElement.scrollHeight;
  }
  getClientHeight() {
    return document.documentElement.clientHeight;
  }
  getClientWidth() {
    return document.documentElement.clientWidth;
  }
}
class G extends T {
  constructor() {
    super(...arguments), this.uid = ge();
  }
  prepareHits() {
  }
  queryHit(e, n, r, i) {
    return null;
  }
  isValidSegDownEl(e) {
    return !this.props.eventDrag && !this.props.eventResize && !P(e, ".fc-event-mirror");
  }
  isValidDateDownEl(e) {
    return !P(e, ".fc-event:not(.fc-bg-event)") && !P(e, ".fc-more-link") && !P(e, "a[data-navlink]") && !P(e, ".fc-popover");
  }
}
class qi {
  constructor() {
    this.strictOrder = !1, this.allowReslicing = !1, this.maxCoord = -1, this.maxStackCnt = -1, this.levelCoords = [], this.entriesByLevel = [], this.stackCnts = {};
  }
  addSegs(e) {
    let n = [];
    for (let r of e)
      this.insertEntry(r, n);
    return n;
  }
  insertEntry(e, n) {
    let r = this.findInsertion(e);
    return this.isInsertionValid(r, e) ? (this.insertEntryAt(e, r), 1) : this.handleInvalidInsertion(r, e, n);
  }
  isInsertionValid(e, n) {
    return (this.maxCoord === -1 || e.levelCoord + n.thickness <= this.maxCoord) && (this.maxStackCnt === -1 || e.stackCnt < this.maxStackCnt);
  }
  handleInvalidInsertion(e, n, r) {
    return this.allowReslicing && e.touchingEntry ? this.splitEntry(n, e.touchingEntry, r) : (r.push(n), 0);
  }
  splitEntry(e, n, r) {
    let i = 0, s = [], l = e.span, o = n.span;
    return l.start < o.start && (i += this.insertEntry({
      index: e.index,
      thickness: e.thickness,
      span: { start: l.start, end: o.start }
    }, s)), l.end > o.end && (i += this.insertEntry({
      index: e.index,
      thickness: e.thickness,
      span: { start: o.end, end: l.end }
    }, s)), i ? (r.push({
      index: e.index,
      thickness: e.thickness,
      span: wn(o, l)
    }, ...s), i) : (r.push(e), 0);
  }
  insertEntryAt(e, n) {
    let { entriesByLevel: r, levelCoords: i } = this;
    n.lateral === -1 ? (Nt(i, n.level, n.levelCoord), Nt(r, n.level, [e])) : Nt(r[n.level], n.lateral, e), this.stackCnts[de(e)] = n.stackCnt;
  }
  findInsertion(e) {
    let { levelCoords: n, entriesByLevel: r, strictOrder: i, stackCnts: s } = this, l = n.length, o = 0, a = -1, d = -1, c = null, f = 0;
    for (let m = 0; m < l; m += 1) {
      let v = n[m];
      if (!i && v >= o + e.thickness)
        break;
      let b = r[m], y, E = Yt(b, e.span.start, Qt), C = E[0] + E[1];
      for (; (y = b[C]) && y.span.start < e.span.end; ) {
        let D = v + y.thickness;
        D > o && (o = D, c = y, a = m, d = C), D === o && (f = Math.max(f, s[de(y)] + 1)), C += 1;
      }
    }
    let h = 0;
    if (c)
      for (h = a + 1; h < l && n[h] < o; )
        h += 1;
    let u = -1;
    return h < l && n[h] === o && (u = Yt(r[h], e.span.end, Qt)[0]), {
      touchingLevel: a,
      touchingLateral: d,
      touchingEntry: c,
      stackCnt: f,
      levelCoord: o,
      level: h,
      lateral: u
    };
  }
  toRects() {
    let { entriesByLevel: e, levelCoords: n } = this, r = e.length, i = [];
    for (let s = 0; s < r; s += 1) {
      let l = e[s], o = n[s];
      for (let a of l)
        i.push(Object.assign(Object.assign({}, a), { levelCoord: o }));
    }
    return i;
  }
}
function Qt(t) {
  return t.span.end;
}
function de(t) {
  return t.index + ":" + t.span.start;
}
function Ga(t) {
  let e = [];
  for (let n of t) {
    let r = [], i = {
      span: n.span,
      entries: [n]
    };
    for (let s of e)
      wn(s.span, i.span) ? i = {
        entries: s.entries.concat(i.entries),
        span: qa(s.span, i.span)
      } : r.push(s);
    r.push(i), e = r;
  }
  return e;
}
function qa(t, e) {
  return {
    start: Math.min(t.start, e.start),
    end: Math.max(t.end, e.end)
  };
}
function wn(t, e) {
  let n = Math.max(t.start, e.start), r = Math.min(t.end, e.end);
  return n < r ? { start: n, end: r } : null;
}
function Nt(t, e, n) {
  t.splice(e, 0, n);
}
function Yt(t, e, n) {
  let r = 0, i = t.length;
  if (!i || e < n(t[r]))
    return [0, 0];
  if (e > n(t[i - 1]))
    return [i, 0];
  for (; r < i; ) {
    let s = Math.floor(r + (i - r) / 2), l = n(t[s]);
    if (e < l)
      i = s;
    else if (e > l)
      r = s + 1;
    else
      return [s, 1];
  }
  return [r, 0];
}
class Qa {
  constructor(e, n) {
    this.emitter = new yt();
  }
  destroy() {
  }
  setMirrorIsVisible(e) {
  }
  setMirrorNeedsRevert(e) {
  }
  setAutoScrollEnabled(e) {
  }
}
const Rn = {};
function Ya(t, e) {
  return !t || e > 10 ? O({ weekday: "short" }) : e > 1 ? O({ weekday: "short", month: "numeric", day: "numeric", omitCommas: !0 }) : O({ weekday: "long" });
}
const Qi = "fc-col-header-cell";
function Yi(t) {
  return t.text;
}
class Za extends T {
  render() {
    let { dateEnv: e, options: n, theme: r, viewApi: i } = this.context, { props: s } = this, { date: l, dateProfile: o } = s, a = Wi(l, s.todayRange, null, o), d = [Qi].concat(An(a, r)), c = e.format(l, s.dayHeaderFormat), f = !a.isDisabled && s.colCnt > 1 ? ut(this.context, l) : {}, h = Object.assign(Object.assign(Object.assign({ date: e.toDate(l), view: i }, s.extraRenderProps), { text: c }), a);
    return g(z, { elTag: "th", elClasses: d, elAttrs: Object.assign({ role: "columnheader", colSpan: s.colSpan, "data-date": a.isDisabled ? void 0 : an(l) }, s.extraDataAttrs), renderProps: h, generatorName: "dayHeaderContent", customGenerator: n.dayHeaderContent, defaultGenerator: Yi, classNameGenerator: n.dayHeaderClassNames, didMount: n.dayHeaderDidMount, willUnmount: n.dayHeaderWillUnmount }, (u) => g("div", { className: "fc-scrollgrid-sync-inner" }, !a.isDisabled && g(u, { elTag: "a", elAttrs: f, elClasses: [
      "fc-col-header-cell-cushion",
      s.isSticky && "fc-sticky"
    ] })));
  }
}
const $a = O({ weekday: "long" });
class Xa extends T {
  render() {
    let { props: e } = this, { dateEnv: n, theme: r, viewApi: i, options: s } = this.context, l = H(new Date(2592e5), e.dow), o = {
      dow: e.dow,
      isDisabled: !1,
      isFuture: !1,
      isPast: !1,
      isToday: !1,
      isOther: !1
    }, a = n.format(l, e.dayHeaderFormat), d = Object.assign(Object.assign(Object.assign(Object.assign({
      date: l
    }, o), { view: i }), e.extraRenderProps), { text: a });
    return g(z, { elTag: "th", elClasses: [
      Qi,
      ...An(o, r),
      ...e.extraClassNames || []
    ], elAttrs: Object.assign({ role: "columnheader", colSpan: e.colSpan }, e.extraDataAttrs), renderProps: d, generatorName: "dayHeaderContent", customGenerator: s.dayHeaderContent, defaultGenerator: Yi, classNameGenerator: s.dayHeaderClassNames, didMount: s.dayHeaderDidMount, willUnmount: s.dayHeaderWillUnmount }, (c) => g(
      "div",
      { className: "fc-scrollgrid-sync-inner" },
      g(c, { elTag: "a", elClasses: [
        "fc-col-header-cell-cushion",
        e.isSticky && "fc-sticky"
      ], elAttrs: {
        "aria-label": n.format(l, $a)
      } })
    ));
  }
}
class He extends j {
  constructor(e, n) {
    super(e, n), this.initialNowDate = Pe(n.options.now, n.dateEnv), this.initialNowQueriedMs = new Date().valueOf(), this.state = this.computeTiming().currentState;
  }
  render() {
    let { props: e, state: n } = this;
    return e.children(n.nowDate, n.todayRange);
  }
  componentDidMount() {
    this.setTimeout();
  }
  componentDidUpdate(e) {
    e.unit !== this.props.unit && (this.clearTimeout(), this.setTimeout());
  }
  componentWillUnmount() {
    this.clearTimeout();
  }
  computeTiming() {
    let { props: e, context: n } = this, r = ie(this.initialNowDate, new Date().valueOf() - this.initialNowQueriedMs), i = n.dateEnv.startOf(r, e.unit), s = n.dateEnv.add(i, w(1, e.unit)), l = s.valueOf() - r.valueOf();
    return l = Math.min(1e3 * 60 * 60 * 24, l), {
      currentState: { nowDate: i, todayRange: _r(i) },
      nextState: { nowDate: s, todayRange: _r(s) },
      waitMs: l
    };
  }
  setTimeout() {
    let { nextState: e, waitMs: n } = this.computeTiming();
    this.timeoutId = setTimeout(() => {
      this.setState(e, () => {
        this.setTimeout();
      });
    }, n);
  }
  clearTimeout() {
    this.timeoutId && clearTimeout(this.timeoutId);
  }
}
He.contextType = $;
function _r(t) {
  let e = M(t), n = H(e, 1);
  return { start: e, end: n };
}
class Zi extends T {
  constructor() {
    super(...arguments), this.createDayHeaderFormatter = A(Ja);
  }
  render() {
    let { context: e } = this, { dates: n, dateProfile: r, datesRepDistinctDays: i, renderIntro: s } = this.props, l = this.createDayHeaderFormatter(e.options.dayHeaderFormat, i, n.length);
    return g(He, { unit: "day" }, (o, a) => g(
      "tr",
      { role: "row" },
      s && s("day"),
      n.map((d) => i ? g(Za, { key: d.toISOString(), date: d, dateProfile: r, todayRange: a, colCnt: n.length, dayHeaderFormat: l }) : g(Xa, { key: d.getUTCDay(), dow: d.getUTCDay(), dayHeaderFormat: l }))
    ));
  }
}
function Ja(t, e, n) {
  return t || Ya(e, n);
}
class $i {
  constructor(e, n) {
    let r = e.start, { end: i } = e, s = [], l = [], o = -1;
    for (; r < i; )
      n.isHiddenDay(r) ? s.push(o + 0.5) : (o += 1, s.push(o), l.push(r)), r = H(r, 1);
    this.dates = l, this.indices = s, this.cnt = l.length;
  }
  sliceRange(e) {
    let n = this.getDateDayIndex(e.start), r = this.getDateDayIndex(H(e.end, -1)), i = Math.max(0, n), s = Math.min(this.cnt - 1, r);
    return i = Math.ceil(i), s = Math.floor(s), i <= s ? {
      firstIndex: i,
      lastIndex: s,
      isStart: n === i,
      isEnd: r === s
    } : null;
  }
  getDateDayIndex(e) {
    let { indices: n } = this, r = Math.floor(pe(this.dates[0], e));
    return r < 0 ? n[0] - 1 : r >= n.length ? n[n.length - 1] + 1 : n[r];
  }
}
class Xi {
  constructor(e, n) {
    let { dates: r } = e, i, s, l;
    if (n) {
      for (s = r[0].getUTCDay(), i = 1; i < r.length && r[i].getUTCDay() !== s; i += 1)
        ;
      l = Math.ceil(r.length / i);
    } else
      l = 1, i = r.length;
    this.rowCnt = l, this.colCnt = i, this.daySeries = e, this.cells = this.buildCells(), this.headerDates = this.buildHeaderDates();
  }
  buildCells() {
    let e = [];
    for (let n = 0; n < this.rowCnt; n += 1) {
      let r = [];
      for (let i = 0; i < this.colCnt; i += 1)
        r.push(this.buildCell(n, i));
      e.push(r);
    }
    return e;
  }
  buildCell(e, n) {
    let r = this.daySeries.dates[e * this.colCnt + n];
    return {
      key: r.toISOString(),
      date: r
    };
  }
  buildHeaderDates() {
    let e = [];
    for (let n = 0; n < this.colCnt; n += 1)
      e.push(this.cells[0][n].date);
    return e;
  }
  sliceRange(e) {
    let { colCnt: n } = this, r = this.daySeries.sliceRange(e), i = [];
    if (r) {
      let { firstIndex: s, lastIndex: l } = r, o = s;
      for (; o <= l; ) {
        let a = Math.floor(o / n), d = Math.min((a + 1) * n, l + 1);
        i.push({
          row: a,
          firstCol: o % n,
          lastCol: (d - 1) % n,
          isStart: r.isStart && o === s,
          isEnd: r.isEnd && d - 1 === l
        }), o = d;
      }
    }
    return i;
  }
}
class Ji {
  constructor() {
    this.sliceBusinessHours = A(this._sliceBusinessHours), this.sliceDateSelection = A(this._sliceDateSpan), this.sliceEventStore = A(this._sliceEventStore), this.sliceEventDrag = A(this._sliceInteraction), this.sliceEventResize = A(this._sliceInteraction), this.forceDayIfListItem = !1;
  }
  sliceProps(e, n, r, i, ...s) {
    let { eventUiBases: l } = e, o = this.sliceEventStore(e.eventStore, l, n, r, ...s);
    return {
      dateSelectionSegs: this.sliceDateSelection(e.dateSelection, n, r, l, i, ...s),
      businessHourSegs: this.sliceBusinessHours(e.businessHours, n, r, i, ...s),
      fgEventSegs: o.fg,
      bgEventSegs: o.bg,
      eventDrag: this.sliceEventDrag(e.eventDrag, l, n, r, ...s),
      eventResize: this.sliceEventResize(e.eventResize, l, n, r, ...s),
      eventSelection: e.eventSelection
    };
  }
  sliceNowDate(e, n, r, i, ...s) {
    return this._sliceDateSpan(
      { range: { start: e, end: ie(e, 1) }, allDay: !1 },
      n,
      r,
      {},
      i,
      ...s
    );
  }
  _sliceBusinessHours(e, n, r, i, ...s) {
    return e ? this._sliceEventStore(he(e, We(n, Boolean(r)), i), {}, n, r, ...s).bg : [];
  }
  _sliceEventStore(e, n, r, i, ...s) {
    if (e) {
      let l = Cr(e, n, We(r, Boolean(i)), i);
      return {
        bg: this.sliceEventRanges(l.bg, s),
        fg: this.sliceEventRanges(l.fg, s)
      };
    }
    return { bg: [], fg: [] };
  }
  _sliceInteraction(e, n, r, i, ...s) {
    if (!e)
      return null;
    let l = Cr(e.mutatedEvents, n, We(r, Boolean(i)), i);
    return {
      segs: this.sliceEventRanges(l.fg, s),
      affectedInstances: e.affectedEvents.instances,
      isEvent: e.isEvent
    };
  }
  _sliceDateSpan(e, n, r, i, s, ...l) {
    if (!e)
      return [];
    let o = We(n, Boolean(r)), a = fe(e.range, o);
    if (a) {
      e = Object.assign(Object.assign({}, e), { range: a });
      let d = Sa(e, i, s), c = this.sliceRange(e.range, ...l);
      for (let f of c)
        f.eventRange = d;
      return c;
    }
    return [];
  }
  sliceEventRanges(e, n) {
    let r = [];
    for (let i of e)
      r.push(...this.sliceEventRange(i, n));
    return r;
  }
  sliceEventRange(e, n) {
    let r = e.range;
    this.forceDayIfListItem && e.ui.display === "list-item" && (r = {
      start: r.start,
      end: H(r.start, 1)
    });
    let i = this.sliceRange(r, ...n);
    for (let s of i)
      s.eventRange = e, s.isStart = e.isStart && s.isStart, s.isEnd = e.isEnd && s.isEnd;
    return i;
  }
}
function We(t, e) {
  let n = t.activeRange;
  return e ? n : {
    start: ie(n.start, t.slotMinTime.milliseconds),
    end: ie(n.end, t.slotMaxTime.milliseconds - 864e5)
  };
}
function Ki(t, e, n) {
  let { instances: r } = t.mutatedEvents;
  for (let i in r)
    if (!vt(e.validRange, r[i].range))
      return !1;
  return es({ eventDrag: t }, n);
}
function Ka(t, e, n) {
  return vt(e.validRange, t.range) ? es({ dateSelection: t }, n) : !1;
}
function es(t, e) {
  let n = e.getCurrentData(), r = Object.assign({ businessHours: n.businessHours, dateSelection: "", eventStore: n.eventStore, eventUiBases: n.eventUiBases, eventSelection: "", eventDrag: null, eventResize: null }, t);
  return (e.pluginHooks.isPropsValid || ec)(r, e);
}
function ec(t, e, n = {}, r) {
  return !(t.eventDrag && !tc(t, e, n, r) || t.dateSelection && !nc(t, e, n, r));
}
function tc(t, e, n, r) {
  let i = e.getCurrentData(), s = t.eventDrag, l = s.mutatedEvents, o = l.defs, a = l.instances, d = dt(o, s.isEvent ? t.eventUiBases : { "": i.selectionConfig });
  r && (d = Y(d, r));
  let c = Ko(t.eventStore, s.affectedEvents.instances), f = c.defs, h = c.instances, u = dt(f, t.eventUiBases);
  for (let m in a) {
    let v = a[m], b = v.range, y = d[v.defId], E = o[v.defId];
    if (!ts(y.constraints, b, c, t.businessHours, e))
      return !1;
    let { eventOverlap: C } = e.options, D = typeof C == "function" ? C : null;
    for (let _ in h) {
      let k = h[_];
      if (gn(b, k.range) && (u[k.defId].overlap === !1 && s.isEvent || y.overlap === !1 || D && !D(
        new N(e, f[k.defId], k),
        new N(e, E, v)
      )))
        return !1;
    }
    let x = i.eventStore;
    for (let _ of y.allows) {
      let k = Object.assign(Object.assign({}, n), { range: v.range, allDay: E.allDay }), R = x.defs[E.defId], J = x.instances[m], Re;
      if (R ? Re = new N(e, R, J) : Re = new N(e, E), !_(yn(k, e), Re))
        return !1;
    }
  }
  return !0;
}
function nc(t, e, n, r) {
  let i = t.eventStore, s = i.defs, l = i.instances, o = t.dateSelection, a = o.range, { selectionConfig: d } = e.getCurrentData();
  if (r && (d = r(d)), !ts(d.constraints, a, i, t.businessHours, e))
    return !1;
  let { selectOverlap: c } = e.options, f = typeof c == "function" ? c : null;
  for (let h in l) {
    let u = l[h];
    if (gn(a, u.range) && (d.overlap === !1 || f && !f(new N(e, s[u.defId], u), null)))
      return !1;
  }
  for (let h of d.allows) {
    let u = Object.assign(Object.assign({}, n), o);
    if (!h(yn(u, e), null))
      return !1;
  }
  return !0;
}
function ts(t, e, n, r, i) {
  for (let s of t)
    if (!ic(rc(s, e, n, r, i), e))
      return !1;
  return !0;
}
function rc(t, e, n, r, i) {
  return t === "businessHours" ? Ot(he(r, e, i)) : typeof t == "string" ? Ot(bt(n, (s) => s.groupId === t)) : typeof t == "object" && t ? Ot(he(t, e, i)) : [];
}
function Ot(t) {
  let { instances: e } = t, n = [];
  for (let r in e)
    n.push(e[r].range);
  return n;
}
function ic(t, e) {
  for (let n of t)
    if (vt(n, e))
      return !0;
  return !1;
}
const Ve = /^(visible|hidden)$/;
class sc extends T {
  constructor() {
    super(...arguments), this.handleEl = (e) => {
      this.el = e, Z(this.props.elRef, e);
    };
  }
  render() {
    let { props: e } = this, { liquid: n, liquidIsAbsolute: r } = e, i = n && r, s = ["fc-scroller"];
    return n && (r ? s.push("fc-scroller-liquid-absolute") : s.push("fc-scroller-liquid")), g("div", { ref: this.handleEl, className: s.join(" "), style: {
      overflowX: e.overflowX,
      overflowY: e.overflowY,
      left: i && -(e.overcomeLeft || 0) || "",
      right: i && -(e.overcomeRight || 0) || "",
      bottom: i && -(e.overcomeBottom || 0) || "",
      marginLeft: !i && -(e.overcomeLeft || 0) || "",
      marginRight: !i && -(e.overcomeRight || 0) || "",
      marginBottom: !i && -(e.overcomeBottom || 0) || "",
      maxHeight: e.maxHeight || ""
    } }, e.children);
  }
  needsXScrolling() {
    if (Ve.test(this.props.overflowX))
      return !1;
    let { el: e } = this, n = this.el.getBoundingClientRect().width - this.getYScrollbarWidth(), { children: r } = e;
    for (let i = 0; i < r.length; i += 1)
      if (r[i].getBoundingClientRect().width > n)
        return !0;
    return !1;
  }
  needsYScrolling() {
    if (Ve.test(this.props.overflowY))
      return !1;
    let { el: e } = this, n = this.el.getBoundingClientRect().height - this.getXScrollbarWidth(), { children: r } = e;
    for (let i = 0; i < r.length; i += 1)
      if (r[i].getBoundingClientRect().height > n)
        return !0;
    return !1;
  }
  getXScrollbarWidth() {
    return Ve.test(this.props.overflowX) ? 0 : this.el.offsetHeight - this.el.clientHeight;
  }
  getYScrollbarWidth() {
    return Ve.test(this.props.overflowY) ? 0 : this.el.offsetWidth - this.el.clientWidth;
  }
}
class q {
  constructor(e) {
    this.masterCallback = e, this.currentMap = {}, this.depths = {}, this.callbackMap = {}, this.handleValue = (n, r) => {
      let { depths: i, currentMap: s } = this, l = !1, o = !1;
      n !== null ? (l = r in s, s[r] = n, i[r] = (i[r] || 0) + 1, o = !0) : (i[r] -= 1, i[r] || (delete s[r], delete this.callbackMap[r], l = !0)), this.masterCallback && (l && this.masterCallback(null, String(r)), o && this.masterCallback(n, String(r)));
    };
  }
  createRef(e) {
    let n = this.callbackMap[e];
    return n || (n = this.callbackMap[e] = (r) => {
      this.handleValue(r, String(e));
    }), n;
  }
  collect(e, n, r) {
    return mo(this.currentMap, e, n, r);
  }
  getAll() {
    return fn(this.currentMap);
  }
}
function lc(t) {
  let e = gl(t, ".fc-scrollgrid-shrink"), n = 0;
  for (let r of e)
    n = Math.max(n, Tl(r));
  return Math.ceil(n);
}
function ns(t, e) {
  return t.liquid && e.liquid;
}
function oc(t, e) {
  return e.maxHeight != null || ns(t, e);
}
function ac(t, e, n, r) {
  let { expandRows: i } = n;
  return typeof e.content == "function" ? e.content(n) : g("table", {
    role: "presentation",
    className: [
      e.tableClassName,
      t.syncRowHeights ? "fc-scrollgrid-sync-table" : ""
    ].join(" "),
    style: {
      minWidth: n.tableMinWidth,
      width: n.clientWidth,
      height: i ? n.clientHeight : ""
    }
  }, n.tableColGroupNode, g(r ? "thead" : "tbody", {
    role: "presentation"
  }, typeof e.rowContent == "function" ? e.rowContent(n) : e.rowContent));
}
function cc(t, e) {
  return re(t, e, V);
}
function dc(t, e) {
  let n = [];
  for (let r of t) {
    let i = r.span || 1;
    for (let s = 0; s < i; s += 1)
      n.push(g("col", { style: {
        width: r.width === "shrink" ? uc(e) : r.width || "",
        minWidth: r.minWidth || ""
      } }));
  }
  return g("colgroup", {}, ...n);
}
function uc(t) {
  return t == null ? 4 : t;
}
function fc(t) {
  for (let e of t)
    if (e.width === "shrink")
      return !0;
  return !1;
}
function hc(t, e) {
  let n = [
    "fc-scrollgrid",
    e.theme.getClass("table")
  ];
  return t && n.push("fc-scrollgrid-liquid"), n;
}
function gc(t, e) {
  let n = [
    "fc-scrollgrid-section",
    `fc-scrollgrid-section-${t.type}`,
    t.className
  ];
  return e && t.liquid && t.maxHeight == null && n.push("fc-scrollgrid-section-liquid"), t.isSticky && n.push("fc-scrollgrid-section-sticky"), n;
}
function Zt(t) {
  return g("div", { className: "fc-scrollgrid-sticky-shim", style: {
    width: t.clientWidth,
    minWidth: t.tableMinWidth
  } });
}
function ft(t) {
  let { stickyHeaderDates: e } = t;
  return (e == null || e === "auto") && (e = t.height === "auto" || t.viewHeight === "auto"), e;
}
function rs(t) {
  let { stickyFooterScrollbar: e } = t;
  return (e == null || e === "auto") && (e = t.height === "auto" || t.viewHeight === "auto"), e;
}
class _n extends T {
  constructor() {
    super(...arguments), this.processCols = A((e) => e, cc), this.renderMicroColGroup = A(dc), this.scrollerRefs = new q(), this.scrollerElRefs = new q(this._handleScrollerEl.bind(this)), this.state = {
      shrinkWidth: null,
      forceYScrollbars: !1,
      scrollerClientWidths: {},
      scrollerClientHeights: {}
    }, this.handleSizing = () => {
      this.safeSetState(Object.assign({ shrinkWidth: this.computeShrinkWidth() }, this.computeScrollerDims()));
    };
  }
  render() {
    let { props: e, state: n, context: r } = this, i = e.sections || [], s = this.processCols(e.cols), l = this.renderMicroColGroup(s, n.shrinkWidth), o = hc(e.liquid, r);
    e.collapsibleWidth && o.push("fc-scrollgrid-collapsible");
    let a = i.length, d = 0, c, f = [], h = [], u = [];
    for (; d < a && (c = i[d]).type === "header"; )
      f.push(this.renderSection(c, l, !0)), d += 1;
    for (; d < a && (c = i[d]).type === "body"; )
      h.push(this.renderSection(c, l, !1)), d += 1;
    for (; d < a && (c = i[d]).type === "footer"; )
      u.push(this.renderSection(c, l, !0)), d += 1;
    let m = !zi();
    const v = { role: "rowgroup" };
    return g("table", {
      role: "grid",
      className: o.join(" "),
      style: { height: e.height }
    }, Boolean(!m && f.length) && g("thead", v, ...f), Boolean(!m && h.length) && g("tbody", v, ...h), Boolean(!m && u.length) && g("tfoot", v, ...u), m && g("tbody", v, ...f, ...h, ...u));
  }
  renderSection(e, n, r) {
    return "outerContent" in e ? g(I, { key: e.key }, e.outerContent) : g("tr", { key: e.key, role: "presentation", className: gc(e, this.props.liquid).join(" ") }, this.renderChunkTd(e, n, e.chunk, r));
  }
  renderChunkTd(e, n, r, i) {
    if ("outerContent" in r)
      return r.outerContent;
    let { props: s } = this, { forceYScrollbars: l, scrollerClientWidths: o, scrollerClientHeights: a } = this.state, d = oc(s, e), c = ns(s, e), f = s.liquid ? l ? "scroll" : d ? "auto" : "hidden" : "visible", h = e.key, u = ac(e, r, {
      tableColGroupNode: n,
      tableMinWidth: "",
      clientWidth: !s.collapsibleWidth && o[h] !== void 0 ? o[h] : null,
      clientHeight: a[h] !== void 0 ? a[h] : null,
      expandRows: e.expandRows,
      syncRowHeights: !1,
      rowSyncHeights: [],
      reportRowHeightChange: () => {
      }
    }, i);
    return g(i ? "th" : "td", {
      ref: r.elRef,
      role: "presentation"
    }, g(
      "div",
      { className: `fc-scroller-harness${c ? " fc-scroller-harness-liquid" : ""}` },
      g(sc, { ref: this.scrollerRefs.createRef(h), elRef: this.scrollerElRefs.createRef(h), overflowY: f, overflowX: s.liquid ? "hidden" : "visible", maxHeight: e.maxHeight, liquid: c, liquidIsAbsolute: !0 }, u)
    ));
  }
  _handleScrollerEl(e, n) {
    let r = pc(this.props.sections, n);
    r && Z(r.chunk.scrollerElRef, e);
  }
  componentDidMount() {
    this.handleSizing(), this.context.addResizeHandler(this.handleSizing);
  }
  componentDidUpdate() {
    this.handleSizing();
  }
  componentWillUnmount() {
    this.context.removeResizeHandler(this.handleSizing);
  }
  computeShrinkWidth() {
    return fc(this.props.cols) ? lc(this.scrollerElRefs.getAll()) : 0;
  }
  computeScrollerDims() {
    let e = La(), { scrollerRefs: n, scrollerElRefs: r } = this, i = !1, s = {}, l = {};
    for (let o in n.currentMap) {
      let a = n.currentMap[o];
      if (a && a.needsYScrolling()) {
        i = !0;
        break;
      }
    }
    for (let o of this.props.sections) {
      let a = o.key, d = r.currentMap[a];
      if (d) {
        let c = d.parentNode;
        s[a] = Math.floor(c.getBoundingClientRect().width - (i ? e.y : 0)), l[a] = Math.floor(c.getBoundingClientRect().height);
      }
    }
    return { forceYScrollbars: i, scrollerClientWidths: s, scrollerClientHeights: l };
  }
}
_n.addStateEquality({
  scrollerClientWidths: V,
  scrollerClientHeights: V
});
function pc(t, e) {
  for (let n of t)
    if (n.key === e)
      return n;
  return null;
}
class Tn extends T {
  constructor() {
    super(...arguments), this.handleEl = (e) => {
      this.el = e, e && wr(e, this.props.seg);
    };
  }
  render() {
    const { props: e, context: n } = this, { options: r } = n, { seg: i } = e, { eventRange: s } = i, { ui: l } = s, o = {
      event: new N(n, s.def, s.instance),
      view: n.viewApi,
      timeText: e.timeText,
      textColor: l.textColor,
      backgroundColor: l.backgroundColor,
      borderColor: l.borderColor,
      isDraggable: !e.disableDragging && ua(i, n),
      isStartResizable: !e.disableResizing && fa(i, n),
      isEndResizable: !e.disableResizing && ha(i),
      isMirror: Boolean(e.isDragging || e.isResizing || e.isDateSelecting),
      isStart: Boolean(i.isStart),
      isEnd: Boolean(i.isEnd),
      isPast: Boolean(e.isPast),
      isFuture: Boolean(e.isFuture),
      isToday: Boolean(e.isToday),
      isSelected: Boolean(e.isSelected),
      isDragging: Boolean(e.isDragging),
      isResizing: Boolean(e.isResizing)
    };
    return g(z, Object.assign({}, e, { elRef: this.handleEl, elClasses: [
      ...ga(o),
      ...i.eventRange.ui.classNames,
      ...e.elClasses || []
    ], renderProps: o, generatorName: "eventContent", customGenerator: r.eventContent, defaultGenerator: e.defaultGenerator, classNameGenerator: r.eventClassNames, didMount: r.eventDidMount, willUnmount: r.eventWillUnmount }));
  }
  componentDidUpdate(e) {
    this.el && this.props.seg !== e.seg && wr(this.el, this.props.seg);
  }
}
class is extends T {
  render() {
    let { props: e, context: n } = this, { options: r } = n, { seg: i } = e, { ui: s } = i.eventRange, l = r.eventTimeFormat || e.defaultTimeFormat, o = Hi(i, l, n, e.defaultDisplayEventTime, e.defaultDisplayEventEnd);
    return g(Tn, Object.assign({}, e, { elTag: "a", elStyle: {
      borderColor: s.borderColor,
      backgroundColor: s.backgroundColor
    }, elAttrs: Li(i, n), defaultGenerator: mc, timeText: o }), (a, d) => g(
      I,
      null,
      g(a, { elTag: "div", elClasses: ["fc-event-main"], elStyle: { color: d.textColor } }),
      Boolean(d.isStartResizable) && g("div", { className: "fc-event-resizer fc-event-resizer-start" }),
      Boolean(d.isEndResizable) && g("div", { className: "fc-event-resizer fc-event-resizer-end" })
    ));
  }
}
function mc(t) {
  return g(
    "div",
    { className: "fc-event-main-frame" },
    t.timeText && g("div", { className: "fc-event-time" }, t.timeText),
    g(
      "div",
      { className: "fc-event-title-container" },
      g("div", { className: "fc-event-title fc-sticky" }, t.event.title || g(I, null, "\xA0"))
    )
  );
}
const xn = (t) => g($.Consumer, null, (e) => {
  let { options: n } = e, r = {
    isAxis: t.isAxis,
    date: e.dateEnv.toDate(t.date),
    view: e.viewApi
  };
  return g(z, Object.assign({}, t, { elTag: t.elTag || "div", renderProps: r, generatorName: "nowIndicatorContent", customGenerator: n.nowIndicatorContent, classNameGenerator: n.nowIndicatorClassNames, didMount: n.nowIndicatorDidMount, willUnmount: n.nowIndicatorWillUnmount }));
}), vc = O({ day: "numeric" });
class Mn extends T {
  constructor() {
    super(...arguments), this.refineRenderProps = Xe(bc);
  }
  render() {
    let { props: e, context: n } = this, { options: r } = n, i = this.refineRenderProps({
      date: e.date,
      dateProfile: e.dateProfile,
      todayRange: e.todayRange,
      isMonthStart: e.isMonthStart || !1,
      showDayNumber: e.showDayNumber,
      extraRenderProps: e.extraRenderProps,
      viewApi: n.viewApi,
      dateEnv: n.dateEnv,
      monthStartFormat: r.monthStartFormat
    });
    return g(z, Object.assign({}, e, { elClasses: [
      ...An(i, n.theme),
      ...e.elClasses || []
    ], elAttrs: Object.assign(Object.assign({}, e.elAttrs), i.isDisabled ? {} : { "data-date": an(e.date) }), renderProps: i, generatorName: "dayCellContent", customGenerator: r.dayCellContent, defaultGenerator: e.defaultGenerator, classNameGenerator: i.isDisabled ? void 0 : r.dayCellClassNames, didMount: r.dayCellDidMount, willUnmount: r.dayCellWillUnmount }));
  }
}
function In(t) {
  return Boolean(t.dayCellContent || vi("dayCellContent", t));
}
function bc(t) {
  let { date: e, dateEnv: n, dateProfile: r, isMonthStart: i } = t, s = Wi(e, t.todayRange, null, r), l = t.showDayNumber ? n.format(e, i ? t.monthStartFormat : vc) : "";
  return Object.assign(Object.assign(Object.assign({ date: n.toDate(e), view: t.viewApi }, s), {
    isMonthStart: i,
    dayNumberText: l
  }), t.extraRenderProps);
}
class ss extends T {
  render() {
    let { props: e } = this, { seg: n } = e;
    return g(Tn, { elTag: "div", elClasses: ["fc-bg-event"], elStyle: { backgroundColor: n.eventRange.ui.backgroundColor }, defaultGenerator: yc, seg: n, timeText: "", isDragging: !1, isResizing: !1, isDateSelecting: !1, isSelected: !1, isPast: e.isPast, isFuture: e.isFuture, isToday: e.isToday, disableDragging: !0, disableResizing: !0 });
  }
}
function yc(t) {
  let { title: e } = t.event;
  return e && g("div", { className: "fc-event-title" }, t.event.title);
}
function ls(t) {
  return g("div", { className: `fc-${t}` });
}
const os = (t) => g($.Consumer, null, (e) => {
  let { dateEnv: n, options: r } = e, { date: i } = t, s = r.weekNumberFormat || t.defaultFormat, l = n.computeWeekNumber(i), o = n.format(i, s);
  return g(
    z,
    Object.assign({}, t, { renderProps: { num: l, text: o, date: i }, generatorName: "weekNumberContent", customGenerator: r.weekNumberContent, defaultGenerator: Ec, classNameGenerator: r.weekNumberClassNames, didMount: r.weekNumberDidMount, willUnmount: r.weekNumberWillUnmount })
  );
});
function Ec(t) {
  return t.text;
}
const Pt = 10;
class Sc extends T {
  constructor() {
    super(...arguments), this.state = {
      titleId: pt()
    }, this.handleRootEl = (e) => {
      this.rootEl = e, this.props.elRef && Z(this.props.elRef, e);
    }, this.handleDocumentMouseDown = (e) => {
      const n = ai(e);
      this.rootEl.contains(n) || this.handleCloseClick();
    }, this.handleDocumentKeyDown = (e) => {
      e.key === "Escape" && this.handleCloseClick();
    }, this.handleCloseClick = () => {
      let { onClose: e } = this.props;
      e && e();
    };
  }
  render() {
    let { theme: e, options: n } = this.context, { props: r, state: i } = this, s = [
      "fc-popover",
      e.getClass("popover")
    ].concat(r.extraClassNames || []);
    return el(g(
      "div",
      Object.assign({}, r.extraAttrs, { id: r.id, className: s.join(" "), "aria-labelledby": i.titleId, ref: this.handleRootEl }),
      g(
        "div",
        { className: "fc-popover-header " + e.getClass("popoverHeader") },
        g("span", { className: "fc-popover-title", id: i.titleId }, r.title),
        g("span", { className: "fc-popover-close " + e.getIconClass("close"), title: n.closeHint, onClick: this.handleCloseClick })
      ),
      g("div", { className: "fc-popover-body " + e.getClass("popoverContent") }, r.children)
    ), r.parentEl);
  }
  componentDidMount() {
    document.addEventListener("mousedown", this.handleDocumentMouseDown), document.addEventListener("keydown", this.handleDocumentKeyDown), this.updateSize();
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleDocumentMouseDown), document.removeEventListener("keydown", this.handleDocumentKeyDown);
  }
  updateSize() {
    let { isRtl: e } = this.context, { alignmentEl: n, alignGridTop: r } = this.props, { rootEl: i } = this, s = Fa(n);
    if (s) {
      let l = i.getBoundingClientRect(), o = r ? P(n, ".fc-scrollgrid").getBoundingClientRect().top : s.top, a = e ? s.right - l.width : s.left;
      o = Math.max(o, Pt), a = Math.min(a, document.documentElement.clientWidth - Pt - l.width), a = Math.max(a, Pt);
      let d = i.offsetParent.getBoundingClientRect();
      Te(i, {
        top: o - d.top,
        left: a - d.left
      });
    }
  }
}
class Ac extends G {
  constructor() {
    super(...arguments), this.handleRootEl = (e) => {
      this.rootEl = e, e ? this.context.registerInteractiveComponent(this, {
        el: e,
        useEventCenter: !1
      }) : this.context.unregisterInteractiveComponent(this);
    };
  }
  render() {
    let { options: e, dateEnv: n } = this.context, { props: r } = this, { startDate: i, todayRange: s, dateProfile: l } = r, o = n.format(i, e.dayPopoverFormat);
    return g(Mn, { elRef: this.handleRootEl, date: i, dateProfile: l, todayRange: s }, (a, d, c) => g(
      Sc,
      { elRef: c.ref, id: r.id, title: o, extraClassNames: ["fc-more-popover"].concat(c.className || []), extraAttrs: c, parentEl: r.parentEl, alignmentEl: r.alignmentEl, alignGridTop: r.alignGridTop, onClose: r.onClose },
      In(e) && g(a, { elTag: "div", elClasses: ["fc-more-popover-misc"] }),
      r.children
    ));
  }
  queryHit(e, n, r, i) {
    let { rootEl: s, props: l } = this;
    return e >= 0 && e < r && n >= 0 && n < i ? {
      dateProfile: l.dateProfile,
      dateSpan: Object.assign({ allDay: !l.forceTimed, range: {
        start: l.startDate,
        end: l.endDate
      } }, l.extraDateSpan),
      dayEl: s,
      rect: {
        left: 0,
        top: 0,
        right: r,
        bottom: i
      },
      layer: 1
    } : null;
  }
}
class as extends T {
  constructor() {
    super(...arguments), this.state = {
      isPopoverOpen: !1,
      popoverId: pt()
    }, this.handleLinkEl = (e) => {
      this.linkEl = e, this.props.elRef && Z(this.props.elRef, e);
    }, this.handleClick = (e) => {
      let { props: n, context: r } = this, { moreLinkClick: i } = r.options, s = Tr(n).start;
      function l(o) {
        let { def: a, instance: d, range: c } = o.eventRange;
        return {
          event: new N(r, a, d),
          start: r.dateEnv.toDate(c.start),
          end: r.dateEnv.toDate(c.end),
          isStart: o.isStart,
          isEnd: o.isEnd
        };
      }
      typeof i == "function" && (i = i({
        date: s,
        allDay: Boolean(n.allDayDate),
        allSegs: n.allSegs.map(l),
        hiddenSegs: n.hiddenSegs.map(l),
        jsEvent: e,
        view: r.viewApi
      })), !i || i === "popover" ? this.setState({ isPopoverOpen: !0 }) : typeof i == "string" && r.calendarApi.zoomTo(s, i);
    }, this.handlePopoverClose = () => {
      this.setState({ isPopoverOpen: !1 });
    };
  }
  render() {
    let { props: e, state: n } = this;
    return g($.Consumer, null, (r) => {
      let { viewApi: i, options: s, calendarApi: l } = r, { moreLinkText: o } = s, { moreCnt: a } = e, d = Tr(e), c = typeof o == "function" ? o.call(l, a) : `+${a} ${o}`, f = xe(s.moreLinkHint, [a], c), h = {
        num: a,
        shortText: `+${a}`,
        text: c,
        view: i
      };
      return g(
        I,
        null,
        Boolean(e.moreCnt) && g(z, { elTag: e.elTag || "a", elRef: this.handleLinkEl, elClasses: [
          ...e.elClasses || [],
          "fc-more-link"
        ], elStyle: e.elStyle, elAttrs: Object.assign(Object.assign(Object.assign({}, e.elAttrs), di(this.handleClick)), { title: f, "aria-expanded": n.isPopoverOpen, "aria-controls": n.isPopoverOpen ? n.popoverId : "" }), renderProps: h, generatorName: "moreLinkContent", customGenerator: s.moreLinkContent, defaultGenerator: e.defaultGenerator || Dc, classNameGenerator: s.moreLinkClassNames, didMount: s.moreLinkDidMount, willUnmount: s.moreLinkWillUnmount }, e.children),
        n.isPopoverOpen && g(Ac, { id: n.popoverId, startDate: d.start, endDate: d.end, dateProfile: e.dateProfile, todayRange: e.todayRange, extraDateSpan: e.extraDateSpan, parentEl: this.parentEl, alignmentEl: e.alignmentElRef ? e.alignmentElRef.current : this.linkEl, alignGridTop: e.alignGridTop, forceTimed: e.forceTimed, onClose: this.handlePopoverClose }, e.popoverContent())
      );
    });
  }
  componentDidMount() {
    this.updateParentEl();
  }
  componentDidUpdate() {
    this.updateParentEl();
  }
  updateParentEl() {
    this.linkEl && (this.parentEl = P(this.linkEl, ".fc-view-harness"));
  }
}
function Dc(t) {
  return t.text;
}
function Tr(t) {
  if (t.allDayDate)
    return {
      start: t.allDayDate,
      end: H(t.allDayDate, 1)
    };
  let { hiddenSegs: e } = t;
  return {
    start: cs(e),
    end: wc(e)
  };
}
function cs(t) {
  return t.reduce(Cc).eventRange.range.start;
}
function Cc(t, e) {
  return t.eventRange.range.start < e.eventRange.range.start ? t : e;
}
function wc(t) {
  return t.reduce(Rc).eventRange.range.end;
}
function Rc(t, e) {
  return t.eventRange.range.end > e.eventRange.range.end ? t : e;
}
class _c {
  constructor() {
    this.handlers = [];
  }
  set(e) {
    this.currentValue = e;
    for (let n of this.handlers)
      n(e);
  }
  subscribe(e) {
    this.handlers.push(e), this.currentValue !== void 0 && e(this.currentValue);
  }
}
class Tc extends _c {
  constructor() {
    super(...arguments), this.map = /* @__PURE__ */ new Map();
  }
  handle(e) {
    const { map: n } = this;
    let r = !1;
    e.isActive ? (n.set(e.id, e), r = !0) : n.has(e.id) && (n.delete(e.id), r = !0), r && this.set(n);
  }
}
const xc = [], ds = {
  code: "en",
  week: {
    dow: 0,
    doy: 4
  },
  direction: "ltr",
  buttonText: {
    prev: "prev",
    next: "next",
    prevYear: "prev year",
    nextYear: "next year",
    year: "year",
    today: "today",
    month: "month",
    week: "week",
    day: "day",
    list: "list"
  },
  weekText: "W",
  weekTextLong: "Week",
  closeHint: "Close",
  timeHint: "Time",
  eventHint: "Event",
  allDayText: "all-day",
  moreLinkText: "more",
  noEventsText: "No events to display"
}, us = Object.assign(Object.assign({}, ds), {
  buttonHints: {
    prev: "Previous $0",
    next: "Next $0",
    today(t, e) {
      return e === "day" ? "Today" : `This ${t}`;
    }
  },
  viewHint: "$0 view",
  navLinkHint: "Go to $0",
  moreLinkHint(t) {
    return `Show ${t} more event${t === 1 ? "" : "s"}`;
  }
});
function Mc(t) {
  let e = t.length > 0 ? t[0].code : "en", n = xc.concat(t), r = {
    en: us
  };
  for (let i of n)
    r[i.code] = i;
  return {
    map: r,
    defaultCode: e
  };
}
function fs(t, e) {
  return typeof t == "object" && !Array.isArray(t) ? hs(t.code, [t.code], t) : Ic(t, e);
}
function Ic(t, e) {
  let n = [].concat(t || []), r = kc(n, e) || us;
  return hs(t, n, r);
}
function kc(t, e) {
  for (let n = 0; n < t.length; n += 1) {
    let r = t[n].toLocaleLowerCase().split("-");
    for (let i = r.length; i > 0; i -= 1) {
      let s = r.slice(0, i).join("-");
      if (e[s])
        return e[s];
    }
  }
  return null;
}
function hs(t, e, n) {
  let r = un([ds, n], ["buttonText"]);
  delete r.code;
  let { week: i } = r;
  return delete r.week, {
    codeArg: t,
    codes: e,
    week: i,
    simpleNumberFormat: new Intl.NumberFormat(t),
    options: r
  };
}
function X(t) {
  return {
    id: ge(),
    name: t.name,
    premiumReleaseDate: t.premiumReleaseDate ? new Date(t.premiumReleaseDate) : void 0,
    deps: t.deps || [],
    reducers: t.reducers || [],
    isLoadingFuncs: t.isLoadingFuncs || [],
    contextInit: [].concat(t.contextInit || []),
    eventRefiners: t.eventRefiners || {},
    eventDefMemberAdders: t.eventDefMemberAdders || [],
    eventSourceRefiners: t.eventSourceRefiners || {},
    isDraggableTransformers: t.isDraggableTransformers || [],
    eventDragMutationMassagers: t.eventDragMutationMassagers || [],
    eventDefMutationAppliers: t.eventDefMutationAppliers || [],
    dateSelectionTransformers: t.dateSelectionTransformers || [],
    datePointTransforms: t.datePointTransforms || [],
    dateSpanTransforms: t.dateSpanTransforms || [],
    views: t.views || {},
    viewPropsTransformers: t.viewPropsTransformers || [],
    isPropsValid: t.isPropsValid || null,
    externalDefTransforms: t.externalDefTransforms || [],
    viewContainerAppends: t.viewContainerAppends || [],
    eventDropTransformers: t.eventDropTransformers || [],
    componentInteractions: t.componentInteractions || [],
    calendarInteractions: t.calendarInteractions || [],
    themeClasses: t.themeClasses || {},
    eventSourceDefs: t.eventSourceDefs || [],
    cmdFormatter: t.cmdFormatter,
    recurringTypes: t.recurringTypes || [],
    namedTimeZonedImpl: t.namedTimeZonedImpl,
    initialView: t.initialView || "",
    elementDraggingImpl: t.elementDraggingImpl,
    optionChangeHandlers: t.optionChangeHandlers || {},
    scrollGridImpl: t.scrollGridImpl || null,
    listenerRefiners: t.listenerRefiners || {},
    optionRefiners: t.optionRefiners || {},
    propSetHandlers: t.propSetHandlers || {}
  };
}
function Nc(t, e) {
  let n = {}, r = {
    premiumReleaseDate: void 0,
    reducers: [],
    isLoadingFuncs: [],
    contextInit: [],
    eventRefiners: {},
    eventDefMemberAdders: [],
    eventSourceRefiners: {},
    isDraggableTransformers: [],
    eventDragMutationMassagers: [],
    eventDefMutationAppliers: [],
    dateSelectionTransformers: [],
    datePointTransforms: [],
    dateSpanTransforms: [],
    views: {},
    viewPropsTransformers: [],
    isPropsValid: null,
    externalDefTransforms: [],
    viewContainerAppends: [],
    eventDropTransformers: [],
    componentInteractions: [],
    calendarInteractions: [],
    themeClasses: {},
    eventSourceDefs: [],
    cmdFormatter: null,
    recurringTypes: [],
    namedTimeZonedImpl: null,
    initialView: "",
    elementDraggingImpl: null,
    optionChangeHandlers: {},
    scrollGridImpl: null,
    listenerRefiners: {},
    optionRefiners: {},
    propSetHandlers: {}
  };
  function i(s) {
    for (let l of s) {
      const o = l.name, a = n[o];
      a === void 0 ? (n[o] = l.id, i(l.deps), r = Pc(r, l)) : a !== l.id && console.warn(`Duplicate plugin '${o}'`);
    }
  }
  return t && i(t), i(e), r;
}
function Oc() {
  let t = [], e = [], n;
  return (r, i) => ((!n || !re(r, t) || !re(i, e)) && (n = Nc(r, i)), t = r, e = i, n);
}
function Pc(t, e) {
  return {
    premiumReleaseDate: Hc(t.premiumReleaseDate, e.premiumReleaseDate),
    reducers: t.reducers.concat(e.reducers),
    isLoadingFuncs: t.isLoadingFuncs.concat(e.isLoadingFuncs),
    contextInit: t.contextInit.concat(e.contextInit),
    eventRefiners: Object.assign(Object.assign({}, t.eventRefiners), e.eventRefiners),
    eventDefMemberAdders: t.eventDefMemberAdders.concat(e.eventDefMemberAdders),
    eventSourceRefiners: Object.assign(Object.assign({}, t.eventSourceRefiners), e.eventSourceRefiners),
    isDraggableTransformers: t.isDraggableTransformers.concat(e.isDraggableTransformers),
    eventDragMutationMassagers: t.eventDragMutationMassagers.concat(e.eventDragMutationMassagers),
    eventDefMutationAppliers: t.eventDefMutationAppliers.concat(e.eventDefMutationAppliers),
    dateSelectionTransformers: t.dateSelectionTransformers.concat(e.dateSelectionTransformers),
    datePointTransforms: t.datePointTransforms.concat(e.datePointTransforms),
    dateSpanTransforms: t.dateSpanTransforms.concat(e.dateSpanTransforms),
    views: Object.assign(Object.assign({}, t.views), e.views),
    viewPropsTransformers: t.viewPropsTransformers.concat(e.viewPropsTransformers),
    isPropsValid: e.isPropsValid || t.isPropsValid,
    externalDefTransforms: t.externalDefTransforms.concat(e.externalDefTransforms),
    viewContainerAppends: t.viewContainerAppends.concat(e.viewContainerAppends),
    eventDropTransformers: t.eventDropTransformers.concat(e.eventDropTransformers),
    calendarInteractions: t.calendarInteractions.concat(e.calendarInteractions),
    componentInteractions: t.componentInteractions.concat(e.componentInteractions),
    themeClasses: Object.assign(Object.assign({}, t.themeClasses), e.themeClasses),
    eventSourceDefs: t.eventSourceDefs.concat(e.eventSourceDefs),
    cmdFormatter: e.cmdFormatter || t.cmdFormatter,
    recurringTypes: t.recurringTypes.concat(e.recurringTypes),
    namedTimeZonedImpl: e.namedTimeZonedImpl || t.namedTimeZonedImpl,
    initialView: t.initialView || e.initialView,
    elementDraggingImpl: t.elementDraggingImpl || e.elementDraggingImpl,
    optionChangeHandlers: Object.assign(Object.assign({}, t.optionChangeHandlers), e.optionChangeHandlers),
    scrollGridImpl: e.scrollGridImpl || t.scrollGridImpl,
    listenerRefiners: Object.assign(Object.assign({}, t.listenerRefiners), e.listenerRefiners),
    optionRefiners: Object.assign(Object.assign({}, t.optionRefiners), e.optionRefiners),
    propSetHandlers: Object.assign(Object.assign({}, t.propSetHandlers), e.propSetHandlers)
  };
}
function Hc(t, e) {
  return t === void 0 ? e : e === void 0 ? t : new Date(Math.max(t.valueOf(), e.valueOf()));
}
class se extends Oe {
}
se.prototype.classes = {
  root: "fc-theme-standard",
  tableCellShaded: "fc-cell-shaded",
  buttonGroup: "fc-button-group",
  button: "fc-button fc-button-primary",
  buttonActive: "fc-button-active"
};
se.prototype.baseIconClass = "fc-icon";
se.prototype.iconClasses = {
  close: "fc-icon-x",
  prev: "fc-icon-chevron-left",
  next: "fc-icon-chevron-right",
  prevYear: "fc-icon-chevrons-left",
  nextYear: "fc-icon-chevrons-right"
};
se.prototype.rtlIconClasses = {
  prev: "fc-icon-chevron-right",
  next: "fc-icon-chevron-left",
  prevYear: "fc-icon-chevrons-right",
  nextYear: "fc-icon-chevrons-left"
};
se.prototype.iconOverrideOption = "buttonIcons";
se.prototype.iconOverrideCustomButtonOption = "icon";
se.prototype.iconOverridePrefix = "fc-icon-";
function Bc(t, e) {
  let n = {}, r;
  for (r in t)
    $t(r, n, t, e);
  for (r in e)
    $t(r, n, t, e);
  return n;
}
function $t(t, e, n, r) {
  if (e[t])
    return e[t];
  let i = Lc(t, e, n, r);
  return i && (e[t] = i), i;
}
function Lc(t, e, n, r) {
  let i = n[t], s = r[t], l = (c) => i && i[c] !== null ? i[c] : s && s[c] !== null ? s[c] : null, o = l("component"), a = l("superType"), d = null;
  if (a) {
    if (a === t)
      throw new Error("Can't have a custom view type that references itself");
    d = $t(a, e, n, r);
  }
  return !o && d && (o = d.component), o ? {
    type: t,
    component: o,
    defaults: Object.assign(Object.assign({}, d ? d.defaults : {}), i ? i.rawOptions : {}),
    overrides: Object.assign(Object.assign({}, d ? d.overrides : {}), s ? s.rawOptions : {})
  } : null;
}
function xr(t) {
  return Y(t, jc);
}
function jc(t) {
  let e = typeof t == "function" ? { component: t } : t, { component: n } = e;
  return e.content && (n = Uc(e)), {
    superType: e.type,
    component: n,
    rawOptions: e
  };
}
function Uc(t) {
  return (e) => g($.Consumer, null, (n) => g(z, { elTag: "div", elClasses: Ei(n.viewSpec), renderProps: Object.assign(Object.assign({}, e), { nextDayThreshold: n.options.nextDayThreshold }), generatorName: void 0, customGenerator: t.content, classNameGenerator: t.classNames, didMount: t.didMount, willUnmount: t.willUnmount }));
}
function zc(t, e, n, r) {
  let i = xr(t), s = xr(e.views), l = Bc(i, s);
  return Y(l, (o) => Fc(o, s, e, n, r));
}
function Fc(t, e, n, r, i) {
  let s = t.overrides.duration || t.defaults.duration || r.duration || n.duration, l = null, o = "", a = "", d = {};
  if (s && (l = Wc(s), l)) {
    let h = Ft(l);
    o = h.unit, h.value === 1 && (a = o, d = e[o] ? e[o].rawOptions : {});
  }
  let c = (h) => {
    let u = h.buttonText || {}, m = t.defaults.buttonTextKey;
    return m != null && u[m] != null ? u[m] : u[t.type] != null ? u[t.type] : u[a] != null ? u[a] : null;
  }, f = (h) => {
    let u = h.buttonHints || {}, m = t.defaults.buttonTextKey;
    return m != null && u[m] != null ? u[m] : u[t.type] != null ? u[t.type] : u[a] != null ? u[a] : null;
  };
  return {
    type: t.type,
    component: t.component,
    duration: l,
    durationUnit: o,
    singleUnit: a,
    optionDefaults: t.defaults,
    optionOverrides: Object.assign(Object.assign({}, d), t.overrides),
    buttonTextOverride: c(r) || c(n) || t.overrides.buttonText,
    buttonTextDefault: c(i) || t.defaults.buttonText || c(Me) || t.type,
    buttonTitleOverride: f(r) || f(n) || t.overrides.buttonHint,
    buttonTitleDefault: f(i) || t.defaults.buttonHint || f(Me)
  };
}
let Mr = {};
function Wc(t) {
  let e = JSON.stringify(t), n = Mr[e];
  return n === void 0 && (n = w(t), Mr[e] = n), n;
}
function Vc(t, e) {
  switch (e.type) {
    case "CHANGE_VIEW_TYPE":
      t = e.viewType;
  }
  return t;
}
function Gc(t, e) {
  switch (e.type) {
    case "SET_OPTION":
      return Object.assign(Object.assign({}, t), { [e.optionName]: e.rawOptionValue });
    default:
      return t;
  }
}
function qc(t, e, n, r) {
  let i;
  switch (e.type) {
    case "CHANGE_VIEW_TYPE":
      return r.build(e.dateMarker || n);
    case "CHANGE_DATE":
      return r.build(e.dateMarker);
    case "PREV":
      if (i = r.buildPrev(t, n), i.isValid)
        return i;
      break;
    case "NEXT":
      if (i = r.buildNext(t, n), i.isValid)
        return i;
      break;
  }
  return t;
}
function Qc(t, e, n) {
  let r = e ? e.activeRange : null;
  return ps({}, ed(t, n), r, n);
}
function Yc(t, e, n, r) {
  let i = n ? n.activeRange : null;
  switch (e.type) {
    case "ADD_EVENT_SOURCES":
      return ps(t, e.sources, i, r);
    case "REMOVE_EVENT_SOURCE":
      return $c(t, e.sourceId);
    case "PREV":
    case "NEXT":
    case "CHANGE_DATE":
    case "CHANGE_VIEW_TYPE":
      return n ? ms(t, i, r) : t;
    case "FETCH_EVENT_SOURCES":
      return kn(t, e.sourceIds ? gi(e.sourceIds) : vs(t, r), i, e.isRefetch || !1, r);
    case "RECEIVE_EVENTS":
    case "RECEIVE_EVENT_ERROR":
      return Kc(t, e.sourceId, e.fetchId, e.fetchRange);
    case "REMOVE_ALL_EVENT_SOURCES":
      return {};
    default:
      return t;
  }
}
function Zc(t, e, n) {
  let r = e ? e.activeRange : null;
  return kn(t, vs(t, n), r, !0, n);
}
function gs(t) {
  for (let e in t)
    if (t[e].isFetching)
      return !0;
  return !1;
}
function ps(t, e, n, r) {
  let i = {};
  for (let s of e)
    i[s.sourceId] = s;
  return n && (i = ms(i, n, r)), Object.assign(Object.assign({}, t), i);
}
function $c(t, e) {
  return ue(t, (n) => n.sourceId !== e);
}
function ms(t, e, n) {
  return kn(t, ue(t, (r) => Xc(r, e, n)), e, !1, n);
}
function Xc(t, e, n) {
  return bs(t, n) ? !n.options.lazyFetching || !t.fetchRange || t.isFetching || e.start < t.fetchRange.start || e.end > t.fetchRange.end : !t.latestFetchId;
}
function kn(t, e, n, r, i) {
  let s = {};
  for (let l in t) {
    let o = t[l];
    e[l] ? s[l] = Jc(o, n, r, i) : s[l] = o;
  }
  return s;
}
function Jc(t, e, n, r) {
  let { options: i, calendarApi: s } = r, l = r.pluginHooks.eventSourceDefs[t.sourceDefId], o = ge();
  return l.fetch({
    eventSource: t,
    range: e,
    isRefetch: n,
    context: r
  }, (a) => {
    let { rawEvents: d } = a;
    i.eventSourceSuccess && (d = i.eventSourceSuccess.call(s, d, a.response) || d), t.success && (d = t.success.call(s, d, a.response) || d), r.dispatch({
      type: "RECEIVE_EVENTS",
      sourceId: t.sourceId,
      fetchId: o,
      fetchRange: e,
      rawEvents: d
    });
  }, (a) => {
    let d = !1;
    i.eventSourceFailure && (i.eventSourceFailure.call(s, a), d = !0), t.failure && (t.failure(a), d = !0), d || console.warn(a.message, a), r.dispatch({
      type: "RECEIVE_EVENT_ERROR",
      sourceId: t.sourceId,
      fetchId: o,
      fetchRange: e,
      error: a
    });
  }), Object.assign(Object.assign({}, t), { isFetching: !0, latestFetchId: o });
}
function Kc(t, e, n, r) {
  let i = t[e];
  return i && n === i.latestFetchId ? Object.assign(Object.assign({}, t), { [e]: Object.assign(Object.assign({}, i), { isFetching: !1, fetchRange: r }) }) : t;
}
function vs(t, e) {
  return ue(t, (n) => bs(n, e));
}
function ed(t, e) {
  let n = xi(e), r = [].concat(t.eventSources || []), i = [];
  t.initialEvents && r.unshift(t.initialEvents), t.events && r.unshift(t.events);
  for (let s of r) {
    let l = Ti(s, e, n);
    l && i.push(l);
  }
  return i;
}
function bs(t, e) {
  return !e.pluginHooks.eventSourceDefs[t.sourceDefId].ignoreRange;
}
function td(t, e) {
  switch (e.type) {
    case "UNSELECT_DATES":
      return null;
    case "SELECT_DATES":
      return e.selection;
    default:
      return t;
  }
}
function nd(t, e) {
  switch (e.type) {
    case "UNSELECT_EVENT":
      return "";
    case "SELECT_EVENT":
      return e.eventInstanceId;
    default:
      return t;
  }
}
function rd(t, e) {
  let n;
  switch (e.type) {
    case "UNSET_EVENT_DRAG":
      return null;
    case "SET_EVENT_DRAG":
      return n = e.state, {
        affectedEvents: n.affectedEvents,
        mutatedEvents: n.mutatedEvents,
        isEvent: n.isEvent
      };
    default:
      return t;
  }
}
function id(t, e) {
  let n;
  switch (e.type) {
    case "UNSET_EVENT_RESIZE":
      return null;
    case "SET_EVENT_RESIZE":
      return n = e.state, {
        affectedEvents: n.affectedEvents,
        mutatedEvents: n.mutatedEvents,
        isEvent: n.isEvent
      };
    default:
      return t;
  }
}
function sd(t, e, n, r, i) {
  let s = t.headerToolbar ? Ir(t.headerToolbar, t, e, n, r, i) : null, l = t.footerToolbar ? Ir(t.footerToolbar, t, e, n, r, i) : null;
  return { header: s, footer: l };
}
function Ir(t, e, n, r, i, s) {
  let l = {}, o = [], a = !1;
  for (let d in t) {
    let c = t[d], f = ld(c, e, n, r, i, s);
    l[d] = f.widgets, o.push(...f.viewsWithButtons), a = a || f.hasTitle;
  }
  return { sectionWidgets: l, viewsWithButtons: o, hasTitle: a };
}
function ld(t, e, n, r, i, s) {
  let l = e.direction === "rtl", o = e.customButtons || {}, a = n.buttonText || {}, d = e.buttonText || {}, c = n.buttonHints || {}, f = e.buttonHints || {}, h = t ? t.split(" ") : [], u = [], m = !1;
  return { widgets: h.map((b) => b.split(",").map((y) => {
    if (y === "title")
      return m = !0, { buttonName: y };
    let E, C, D, x, _, k;
    if (E = o[y])
      D = (R) => {
        E.click && E.click.call(R.target, R, R.target);
      }, (x = r.getCustomButtonIconClass(E)) || (x = r.getIconClass(y, l)) || (_ = E.text), k = E.hint || E.text;
    else if (C = i[y]) {
      u.push(y), D = () => {
        s.changeView(y);
      }, (_ = C.buttonTextOverride) || (x = r.getIconClass(y, l)) || (_ = C.buttonTextDefault);
      let R = C.buttonTextOverride || C.buttonTextDefault;
      k = xe(
        C.buttonTitleOverride || C.buttonTitleDefault || e.viewHint,
        [R, y],
        R
      );
    } else if (s[y])
      if (D = () => {
        s[y]();
      }, (_ = a[y]) || (x = r.getIconClass(y, l)) || (_ = d[y]), y === "prevYear" || y === "nextYear") {
        let R = y === "prevYear" ? "prev" : "next";
        k = xe(c[R] || f[R], [
          d.year || "year",
          "year"
        ], d[y]);
      } else
        k = (R) => xe(c[y] || f[y], [
          d[R] || R,
          R
        ], d[y]);
    return { buttonName: y, buttonClick: D, buttonIcon: x, buttonText: _, buttonHint: k };
  })), viewsWithButtons: u, hasTitle: m };
}
class od {
  constructor(e, n, r) {
    this.type = e, this.getCurrentData = n, this.dateEnv = r;
  }
  get calendar() {
    return this.getCurrentData().calendarApi;
  }
  get title() {
    return this.getCurrentData().viewTitle;
  }
  get activeStart() {
    return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.start);
  }
  get activeEnd() {
    return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.end);
  }
  get currentStart() {
    return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.start);
  }
  get currentEnd() {
    return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.end);
  }
  getOption(e) {
    return this.getCurrentData().options[e];
  }
}
let ad = {
  ignoreRange: !0,
  parseMeta(t) {
    return Array.isArray(t.events) ? t.events : null;
  },
  fetch(t, e) {
    e({
      rawEvents: t.eventSource.meta
    });
  }
};
const cd = X({
  name: "array-event-source",
  eventSourceDefs: [ad]
});
let dd = {
  parseMeta(t) {
    return typeof t.events == "function" ? t.events : null;
  },
  fetch(t, e, n) {
    const { dateEnv: r } = t.context, i = t.eventSource.meta;
    Aa(i.bind(null, ji(t.range, r)), (s) => e({ rawEvents: s }), n);
  }
};
const ud = X({
  name: "func-event-source",
  eventSourceDefs: [dd]
}), fd = {
  method: String,
  extraParams: p,
  startParam: String,
  endParam: String,
  timeZoneParam: String
};
let hd = {
  parseMeta(t) {
    return t.url && (t.format === "json" || !t.format) ? {
      url: t.url,
      format: "json",
      method: (t.method || "GET").toUpperCase(),
      extraParams: t.extraParams,
      startParam: t.startParam,
      endParam: t.endParam,
      timeZoneParam: t.timeZoneParam
    } : null;
  },
  fetch(t, e, n) {
    const { meta: r } = t.eventSource, i = pd(r, t.range, t.context);
    Da(r.method, r.url, i).then(([s, l]) => {
      e({ rawEvents: s, response: l });
    }, n);
  }
};
const gd = X({
  name: "json-event-source",
  eventSourceRefiners: fd,
  eventSourceDefs: [hd]
});
function pd(t, e, n) {
  let { dateEnv: r, options: i } = n, s, l, o, a, d = {};
  return s = t.startParam, s == null && (s = i.startParam), l = t.endParam, l == null && (l = i.endParam), o = t.timeZoneParam, o == null && (o = i.timeZoneParam), typeof t.extraParams == "function" ? a = t.extraParams() : a = t.extraParams || {}, Object.assign(d, a), d[s] = r.formatIso(e.start), d[l] = r.formatIso(e.end), r.timeZone !== "local" && (d[o] = r.timeZone), d;
}
const md = {
  daysOfWeek: p,
  startTime: w,
  endTime: w,
  duration: w,
  startRecur: p,
  endRecur: p
};
let vd = {
  parse(t, e) {
    if (t.daysOfWeek || t.startTime || t.endTime || t.startRecur || t.endRecur) {
      let n = {
        daysOfWeek: t.daysOfWeek || null,
        startTime: t.startTime || null,
        endTime: t.endTime || null,
        startRecur: t.startRecur ? e.createMarker(t.startRecur) : null,
        endRecur: t.endRecur ? e.createMarker(t.endRecur) : null
      }, r;
      return t.duration && (r = t.duration), !r && t.startTime && t.endTime && (r = kl(t.endTime, t.startTime)), {
        allDayGuess: Boolean(!t.startTime && !t.endTime),
        duration: r,
        typeData: n
      };
    }
    return null;
  },
  expand(t, e, n) {
    let r = fe(e, { start: t.startRecur, end: t.endRecur });
    return r ? yd(t.daysOfWeek, t.startTime, r, n) : [];
  }
};
const bd = X({
  name: "simple-recurring-event",
  recurringTypes: [vd],
  eventRefiners: md
});
function yd(t, e, n, r) {
  let i = t ? gi(t) : null, s = M(n.start), l = n.end, o = [];
  for (; s < l; ) {
    let a;
    (!i || i[s.getUTCDay()]) && (e ? a = r.add(s, e) : a = s, o.push(a)), s = H(s, 1);
  }
  return o;
}
const Ed = X({
  name: "change-handler",
  optionChangeHandlers: {
    events(t, e) {
      kr([t], e);
    },
    eventSources: kr
  }
});
function kr(t, e) {
  let n = fn(e.getCurrentData().eventSources);
  if (n.length === 1 && t.length === 1 && Array.isArray(n[0]._raw) && Array.isArray(t[0])) {
    e.dispatch({
      type: "RESET_RAW_EVENTS",
      sourceId: n[0].sourceId,
      rawEvents: t[0]
    });
    return;
  }
  let r = [];
  for (let i of t) {
    let s = !1;
    for (let l = 0; l < n.length; l += 1)
      if (n[l]._raw === i) {
        n.splice(l, 1), s = !0;
        break;
      }
    s || r.push(i);
  }
  for (let i of n)
    e.dispatch({
      type: "REMOVE_EVENT_SOURCE",
      sourceId: i.sourceId
    });
  for (let i of r)
    e.calendarApi.addEventSource(i);
}
function Sd(t, e) {
  e.emitter.trigger("datesSet", Object.assign(Object.assign({}, ji(t.activeRange, e.dateEnv)), { view: e.viewApi }));
}
function Ad(t, e) {
  let { emitter: n } = e;
  n.hasHandlers("eventsSet") && n.trigger("eventsSet", ce(t, e));
}
const Dd = [
  cd,
  ud,
  gd,
  bd,
  Ed,
  X({
    name: "misc",
    isLoadingFuncs: [
      (t) => gs(t.eventSources)
    ],
    propSetHandlers: {
      dateProfile: Sd,
      eventStore: Ad
    }
  })
];
class Cd {
  constructor(e, n) {
    this.runTaskOption = e, this.drainedOption = n, this.queue = [], this.delayedRunner = new nn(this.drain.bind(this));
  }
  request(e, n) {
    this.queue.push(e), this.delayedRunner.request(n);
  }
  pause(e) {
    this.delayedRunner.pause(e);
  }
  resume(e, n) {
    this.delayedRunner.resume(e, n);
  }
  drain() {
    let { queue: e } = this;
    for (; e.length; ) {
      let n = [], r;
      for (; r = e.shift(); )
        this.runTask(r), n.push(r);
      this.drained(n);
    }
  }
  runTask(e) {
    this.runTaskOption && this.runTaskOption(e);
  }
  drained(e) {
    this.drainedOption && this.drainedOption(e);
  }
}
function wd(t, e, n) {
  let r;
  return /^(year|month)$/.test(t.currentRangeUnit) ? r = t.currentRange : r = t.activeRange, n.formatRange(r.start, r.end, O(e.titleFormat || Rd(t)), {
    isEndExclusive: t.isRangeAllDay,
    defaultSeparator: e.titleRangeSeparator
  });
}
function Rd(t) {
  let { currentRangeUnit: e } = t;
  if (e === "year")
    return { year: "numeric" };
  if (e === "month")
    return { year: "numeric", month: "long" };
  let n = rt(t.currentRange.start, t.currentRange.end);
  return n !== null && n > 1 ? { year: "numeric", month: "short", day: "numeric" } : { year: "numeric", month: "long", day: "numeric" };
}
class _d {
  constructor(e) {
    this.computeCurrentViewData = A(this._computeCurrentViewData), this.organizeRawLocales = A(Mc), this.buildLocale = A(fs), this.buildPluginHooks = Oc(), this.buildDateEnv = A(Td), this.buildTheme = A(xd), this.parseToolbars = A(sd), this.buildViewSpecs = A(zc), this.buildDateProfileGenerator = Xe(Md), this.buildViewApi = A(Id), this.buildViewUiProps = Xe(Od), this.buildEventUiBySource = A(kd, V), this.buildEventUiBases = A(Nd), this.parseContextBusinessHours = Xe(Pd), this.buildTitle = A(wd), this.emitter = new yt(), this.actionRunner = new Cd(this._handleAction.bind(this), this.updateData.bind(this)), this.currentCalendarOptionsInput = {}, this.currentCalendarOptionsRefined = {}, this.currentViewOptionsInput = {}, this.currentViewOptionsRefined = {}, this.currentCalendarOptionsRefiners = {}, this.optionsForRefining = [], this.optionsForHandling = [], this.getCurrentData = () => this.data, this.dispatch = (h) => {
      this.actionRunner.request(h);
    }, this.props = e, this.actionRunner.pause();
    let n = {}, r = this.computeOptionsData(e.optionOverrides, n, e.calendarApi), i = r.calendarOptions.initialView || r.pluginHooks.initialView, s = this.computeCurrentViewData(i, r, e.optionOverrides, n);
    e.calendarApi.currentDataManager = this, this.emitter.setThisContext(e.calendarApi), this.emitter.setOptions(s.options);
    let l = Ho(r.calendarOptions, r.dateEnv), o = s.dateProfileGenerator.build(l);
    Q(o.activeRange, l) || (l = o.currentRange.start);
    let a = {
      dateEnv: r.dateEnv,
      options: r.calendarOptions,
      pluginHooks: r.pluginHooks,
      calendarApi: e.calendarApi,
      dispatch: this.dispatch,
      emitter: this.emitter,
      getCurrentData: this.getCurrentData
    };
    for (let h of r.pluginHooks.contextInit)
      h(a);
    let d = Qc(r.calendarOptions, o, a), c = {
      dynamicOptionOverrides: n,
      currentViewType: i,
      currentDate: l,
      dateProfile: o,
      businessHours: this.parseContextBusinessHours(a),
      eventSources: d,
      eventUiBases: {},
      eventStore: U(),
      renderableEventStore: U(),
      dateSelection: null,
      eventSelection: "",
      eventDrag: null,
      eventResize: null,
      selectionConfig: this.buildViewUiProps(a).selectionConfig
    }, f = Object.assign(Object.assign({}, a), c);
    for (let h of r.pluginHooks.reducers)
      Object.assign(c, h(null, null, f));
    Ht(c, a) && this.emitter.trigger("loading", !0), this.state = c, this.updateData(), this.actionRunner.resume();
  }
  resetOptions(e, n) {
    let { props: r } = this;
    n === void 0 ? r.optionOverrides = e : (r.optionOverrides = Object.assign(Object.assign({}, r.optionOverrides || {}), e), this.optionsForRefining.push(...n)), (n === void 0 || n.length) && this.actionRunner.request({
      type: "NOTHING"
    });
  }
  _handleAction(e) {
    let { props: n, state: r, emitter: i } = this, s = Gc(r.dynamicOptionOverrides, e), l = this.computeOptionsData(n.optionOverrides, s, n.calendarApi), o = Vc(r.currentViewType, e), a = this.computeCurrentViewData(o, l, n.optionOverrides, s);
    n.calendarApi.currentDataManager = this, i.setThisContext(n.calendarApi), i.setOptions(a.options);
    let d = {
      dateEnv: l.dateEnv,
      options: l.calendarOptions,
      pluginHooks: l.pluginHooks,
      calendarApi: n.calendarApi,
      dispatch: this.dispatch,
      emitter: i,
      getCurrentData: this.getCurrentData
    }, { currentDate: c, dateProfile: f } = r;
    this.data && this.data.dateProfileGenerator !== a.dateProfileGenerator && (f = a.dateProfileGenerator.build(c)), c = Po(c, e), f = qc(f, e, c, a.dateProfileGenerator), (e.type === "PREV" || e.type === "NEXT" || !Q(f.currentRange, c)) && (c = f.currentRange.start);
    let h = Yc(r.eventSources, e, f, d), u = Zo(r.eventStore, e, h, f, d), v = gs(h) && !a.options.progressiveEventRendering && r.renderableEventStore || u, { eventUiSingleBase: b, selectionConfig: y } = this.buildViewUiProps(d), E = this.buildEventUiBySource(h), C = this.buildEventUiBases(v.defs, b, E), D = {
      dynamicOptionOverrides: s,
      currentViewType: o,
      currentDate: c,
      dateProfile: f,
      eventSources: h,
      eventStore: u,
      renderableEventStore: v,
      selectionConfig: y,
      eventUiBases: C,
      businessHours: this.parseContextBusinessHours(d),
      dateSelection: td(r.dateSelection, e),
      eventSelection: nd(r.eventSelection, e),
      eventDrag: rd(r.eventDrag, e),
      eventResize: id(r.eventResize, e)
    }, x = Object.assign(Object.assign({}, d), D);
    for (let R of l.pluginHooks.reducers)
      Object.assign(D, R(r, e, x));
    let _ = Ht(r, d), k = Ht(D, d);
    !_ && k ? i.trigger("loading", !0) : _ && !k && i.trigger("loading", !1), this.state = D, n.onAction && n.onAction(e);
  }
  updateData() {
    let { props: e, state: n } = this, r = this.data, i = this.computeOptionsData(e.optionOverrides, n.dynamicOptionOverrides, e.calendarApi), s = this.computeCurrentViewData(n.currentViewType, i, e.optionOverrides, n.dynamicOptionOverrides), l = this.data = Object.assign(Object.assign(Object.assign({ viewTitle: this.buildTitle(n.dateProfile, s.options, i.dateEnv), calendarApi: e.calendarApi, dispatch: this.dispatch, emitter: this.emitter, getCurrentData: this.getCurrentData }, i), s), n), o = i.pluginHooks.optionChangeHandlers, a = r && r.calendarOptions, d = i.calendarOptions;
    if (a && a !== d) {
      a.timeZone !== d.timeZone && (n.eventSources = l.eventSources = Zc(l.eventSources, n.dateProfile, l), n.eventStore = l.eventStore = Ar(l.eventStore, r.dateEnv, l.dateEnv), n.renderableEventStore = l.renderableEventStore = Ar(l.renderableEventStore, r.dateEnv, l.dateEnv));
      for (let c in o)
        (this.optionsForHandling.indexOf(c) !== -1 || a[c] !== d[c]) && o[c](d[c], l);
    }
    this.optionsForHandling = [], e.onData && e.onData(l);
  }
  computeOptionsData(e, n, r) {
    if (!this.optionsForRefining.length && e === this.stableOptionOverrides && n === this.stableDynamicOptionOverrides)
      return this.stableCalendarOptionsData;
    let { refinedOptions: i, pluginHooks: s, localeDefaults: l, availableLocaleData: o, extra: a } = this.processRawCalendarOptions(e, n);
    Nr(a);
    let d = this.buildDateEnv(i.timeZone, i.locale, i.weekNumberCalculation, i.firstDay, i.weekText, s, o, i.defaultRangeSeparator), c = this.buildViewSpecs(s.views, this.stableOptionOverrides, this.stableDynamicOptionOverrides, l), f = this.buildTheme(i, s), h = this.parseToolbars(i, this.stableOptionOverrides, f, c, r);
    return this.stableCalendarOptionsData = {
      calendarOptions: i,
      pluginHooks: s,
      dateEnv: d,
      viewSpecs: c,
      theme: f,
      toolbarConfig: h,
      localeDefaults: l,
      availableRawLocales: o.map
    };
  }
  processRawCalendarOptions(e, n) {
    let { locales: r, locale: i } = _t([
      Me,
      e,
      n
    ]), s = this.organizeRawLocales(r), l = s.map, o = this.buildLocale(i || s.defaultCode, l).options, a = this.buildPluginHooks(e.plugins || [], Dd), d = this.currentCalendarOptionsRefiners = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, pr), mr), vr), a.listenerRefiners), a.optionRefiners), c = {}, f = _t([
      Me,
      o,
      e,
      n
    ]), h = {}, u = this.currentCalendarOptionsInput, m = this.currentCalendarOptionsRefined, v = !1;
    for (let b in f)
      this.optionsForRefining.indexOf(b) === -1 && (f[b] === u[b] || le[b] && b in u && le[b](u[b], f[b])) ? h[b] = m[b] : d[b] ? (h[b] = d[b](f[b]), v = !0) : c[b] = u[b];
    return v && (this.currentCalendarOptionsInput = f, this.currentCalendarOptionsRefined = h, this.stableOptionOverrides = e, this.stableDynamicOptionOverrides = n), this.optionsForHandling.push(...this.optionsForRefining), this.optionsForRefining = [], {
      rawOptions: this.currentCalendarOptionsInput,
      refinedOptions: this.currentCalendarOptionsRefined,
      pluginHooks: a,
      availableLocaleData: s,
      localeDefaults: o,
      extra: c
    };
  }
  _computeCurrentViewData(e, n, r, i) {
    let s = n.viewSpecs[e];
    if (!s)
      throw new Error(`viewType "${e}" is not available. Please make sure you've loaded all neccessary plugins`);
    let { refinedOptions: l, extra: o } = this.processRawViewOptions(s, n.pluginHooks, n.localeDefaults, r, i);
    Nr(o);
    let a = this.buildDateProfileGenerator({
      dateProfileGeneratorClass: s.optionDefaults.dateProfileGeneratorClass,
      duration: s.duration,
      durationUnit: s.durationUnit,
      usesMinMaxTime: s.optionDefaults.usesMinMaxTime,
      dateEnv: n.dateEnv,
      calendarApi: this.props.calendarApi,
      slotMinTime: l.slotMinTime,
      slotMaxTime: l.slotMaxTime,
      showNonCurrentDates: l.showNonCurrentDates,
      dayCount: l.dayCount,
      dateAlignment: l.dateAlignment,
      dateIncrement: l.dateIncrement,
      hiddenDays: l.hiddenDays,
      weekends: l.weekends,
      nowInput: l.now,
      validRangeInput: l.validRange,
      visibleRangeInput: l.visibleRange,
      fixedWeekCount: l.fixedWeekCount
    }), d = this.buildViewApi(e, this.getCurrentData, n.dateEnv);
    return { viewSpec: s, options: l, dateProfileGenerator: a, viewApi: d };
  }
  processRawViewOptions(e, n, r, i, s) {
    let l = _t([
      Me,
      e.optionDefaults,
      r,
      i,
      e.optionOverrides,
      s
    ]), o = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, pr), mr), vr), fo), n.listenerRefiners), n.optionRefiners), a = {}, d = this.currentViewOptionsInput, c = this.currentViewOptionsRefined, f = !1, h = {};
    for (let u in l)
      l[u] === d[u] || le[u] && le[u](l[u], d[u]) ? a[u] = c[u] : (l[u] === this.currentCalendarOptionsInput[u] || le[u] && le[u](l[u], this.currentCalendarOptionsInput[u]) ? u in this.currentCalendarOptionsRefined && (a[u] = this.currentCalendarOptionsRefined[u]) : o[u] ? a[u] = o[u](l[u]) : h[u] = l[u], f = !0);
    return f && (this.currentViewOptionsInput = l, this.currentViewOptionsRefined = a), {
      rawOptions: this.currentViewOptionsInput,
      refinedOptions: this.currentViewOptionsRefined,
      extra: h
    };
  }
}
function Td(t, e, n, r, i, s, l, o) {
  let a = fs(e || l.defaultCode, l.map);
  return new Ao({
    calendarSystem: "gregory",
    timeZone: t,
    namedTimeZoneImpl: s.namedTimeZonedImpl,
    locale: a,
    weekNumberCalculation: n,
    firstDay: r,
    weekText: i,
    cmdFormatter: s.cmdFormatter,
    defaultSeparator: o
  });
}
function xd(t, e) {
  let n = e.themeClasses[t.themeSystem] || se;
  return new n(t);
}
function Md(t) {
  let e = t.dateProfileGeneratorClass || Di;
  return new e(t);
}
function Id(t, e, n) {
  return new od(t, e, n);
}
function kd(t) {
  return Y(t, (e) => e.ui);
}
function Nd(t, e, n) {
  let r = { "": e };
  for (let i in t) {
    let s = t[i];
    s.sourceId && n[s.sourceId] && (r[i] = n[s.sourceId]);
  }
  return r;
}
function Od(t) {
  let { options: e } = t;
  return {
    eventUiSingleBase: ct({
      display: e.eventDisplay,
      editable: e.editable,
      startEditable: e.eventStartEditable,
      durationEditable: e.eventDurationEditable,
      constraint: e.eventConstraint,
      overlap: typeof e.eventOverlap == "boolean" ? e.eventOverlap : void 0,
      allow: e.eventAllow,
      backgroundColor: e.eventBackgroundColor,
      borderColor: e.eventBorderColor,
      textColor: e.eventTextColor,
      color: e.eventColor
    }, t),
    selectionConfig: ct({
      constraint: e.selectConstraint,
      overlap: typeof e.selectOverlap == "boolean" ? e.selectOverlap : void 0,
      allow: e.selectAllow
    }, t)
  };
}
function Ht(t, e) {
  for (let n of e.pluginHooks.isLoadingFuncs)
    if (n(t))
      return !0;
  return !1;
}
function Pd(t) {
  return ia(t.options.businessHours, t);
}
function Nr(t, e) {
  for (let n in t)
    console.warn(`Unknown option '${n}'` + (e ? ` for view '${e}'` : ""));
}
class Hd extends T {
  render() {
    let e = this.props.widgetGroups.map((n) => this.renderWidgetGroup(n));
    return g("div", { className: "fc-toolbar-chunk" }, ...e);
  }
  renderWidgetGroup(e) {
    let { props: n } = this, { theme: r } = this.context, i = [], s = !0;
    for (let l of e) {
      let { buttonName: o, buttonClick: a, buttonText: d, buttonIcon: c, buttonHint: f } = l;
      if (o === "title")
        s = !1, i.push(g("h2", { className: "fc-toolbar-title", id: n.titleId }, n.title));
      else {
        let h = o === n.activeButton, u = !n.isTodayEnabled && o === "today" || !n.isPrevEnabled && o === "prev" || !n.isNextEnabled && o === "next", m = [`fc-${o}-button`, r.getClass("button")];
        h && m.push(r.getClass("buttonActive")), i.push(g("button", { type: "button", title: typeof f == "function" ? f(n.navUnit) : f, disabled: u, "aria-pressed": h, className: m.join(" "), onClick: a }, d || (c ? g("span", { className: c }) : "")));
      }
    }
    if (i.length > 1) {
      let l = s && r.getClass("buttonGroup") || "";
      return g("div", { className: l }, ...i);
    }
    return i[0];
  }
}
class Or extends T {
  render() {
    let { model: e, extraClassName: n } = this.props, r = !1, i, s, l = e.sectionWidgets, o = l.center;
    return l.left ? (r = !0, i = l.left) : i = l.start, l.right ? (r = !0, s = l.right) : s = l.end, g(
      "div",
      { className: [
        n || "",
        "fc-toolbar",
        r ? "fc-toolbar-ltr" : ""
      ].join(" ") },
      this.renderSection("start", i || []),
      this.renderSection("center", o || []),
      this.renderSection("end", s || [])
    );
  }
  renderSection(e, n) {
    let { props: r } = this;
    return g(Hd, { key: e, widgetGroups: n, title: r.title, navUnit: r.navUnit, activeButton: r.activeButton, isTodayEnabled: r.isTodayEnabled, isPrevEnabled: r.isPrevEnabled, isNextEnabled: r.isNextEnabled, titleId: r.titleId });
  }
}
class Bd extends T {
  constructor() {
    super(...arguments), this.state = {
      availableWidth: null
    }, this.handleEl = (e) => {
      this.el = e, Z(this.props.elRef, e), this.updateAvailableWidth();
    }, this.handleResize = () => {
      this.updateAvailableWidth();
    };
  }
  render() {
    let { props: e, state: n } = this, { aspectRatio: r } = e, i = [
      "fc-view-harness",
      r || e.liquid || e.height ? "fc-view-harness-active" : "fc-view-harness-passive"
    ], s = "", l = "";
    return r ? n.availableWidth !== null ? s = n.availableWidth / r : l = `${1 / r * 100}%` : s = e.height || "", g("div", { "aria-labelledby": e.labeledById, ref: this.handleEl, className: i.join(" "), style: { height: s, paddingBottom: l } }, e.children);
  }
  componentDidMount() {
    this.context.addResizeHandler(this.handleResize);
  }
  componentWillUnmount() {
    this.context.removeResizeHandler(this.handleResize);
  }
  updateAvailableWidth() {
    this.el && this.props.aspectRatio && this.setState({ availableWidth: this.el.offsetWidth });
  }
}
class Ld extends we {
  constructor(e) {
    super(e), this.handleSegClick = (n, r) => {
      let { component: i } = this, { context: s } = i, l = De(r);
      if (l && i.isValidSegDownEl(n.target)) {
        let o = P(n.target, ".fc-event-forced-url"), a = o ? o.querySelector("a[href]").href : "";
        s.emitter.trigger("eventClick", {
          el: r,
          event: new N(i.context, l.eventRange.def, l.eventRange.instance),
          jsEvent: n,
          view: s.viewApi
        }), a && !n.defaultPrevented && (window.location.href = a);
      }
    }, this.destroy = ci(
      e.el,
      "click",
      ".fc-event",
      this.handleSegClick
    );
  }
}
class jd extends we {
  constructor(e) {
    super(e), this.handleEventElRemove = (n) => {
      n === this.currentSegEl && this.handleSegLeave(null, this.currentSegEl);
    }, this.handleSegEnter = (n, r) => {
      De(r) && (this.currentSegEl = r, this.triggerEvent("eventMouseEnter", n, r));
    }, this.handleSegLeave = (n, r) => {
      this.currentSegEl && (this.currentSegEl = null, this.triggerEvent("eventMouseLeave", n, r));
    }, this.removeHoverListeners = vl(
      e.el,
      ".fc-event",
      this.handleSegEnter,
      this.handleSegLeave
    );
  }
  destroy() {
    this.removeHoverListeners();
  }
  triggerEvent(e, n, r) {
    let { component: i } = this, { context: s } = i, l = De(r);
    (!n || i.isValidSegDownEl(n.target)) && s.emitter.trigger(e, {
      el: r,
      event: new N(s, l.eventRange.def, l.eventRange.instance),
      jsEvent: n,
      view: s.viewApi
    });
  }
}
class Ud extends me {
  constructor() {
    super(...arguments), this.buildViewContext = A(wo), this.buildViewPropTransformers = A(Fd), this.buildToolbarProps = A(zd), this.headerRef = B(), this.footerRef = B(), this.interactionsStore = {}, this.state = {
      viewLabelId: pt()
    }, this.registerInteractiveComponent = (e, n) => {
      let r = Ra(e, n), l = [
        Ld,
        jd
      ].concat(this.props.pluginHooks.componentInteractions).map((o) => new o(r));
      this.interactionsStore[e.uid] = l, qt[e.uid] = r;
    }, this.unregisterInteractiveComponent = (e) => {
      let n = this.interactionsStore[e.uid];
      if (n) {
        for (let r of n)
          r.destroy();
        delete this.interactionsStore[e.uid];
      }
      delete qt[e.uid];
    }, this.resizeRunner = new nn(() => {
      this.props.emitter.trigger("_resize", !0), this.props.emitter.trigger("windowResize", { view: this.props.viewApi });
    }), this.handleWindowResize = (e) => {
      let { options: n } = this.props;
      n.handleWindowResize && e.target === window && this.resizeRunner.request(n.windowResizeDelay);
    };
  }
  render() {
    let { props: e } = this, { toolbarConfig: n, options: r } = e, i = this.buildToolbarProps(
      e.viewSpec,
      e.dateProfile,
      e.dateProfileGenerator,
      e.currentDate,
      Pe(e.options.now, e.dateEnv),
      e.viewTitle
    ), s = !1, l = "", o;
    e.isHeightAuto || e.forPrint ? l = "" : r.height != null ? s = !0 : r.contentHeight != null ? l = r.contentHeight : o = Math.max(r.aspectRatio, 0.5);
    let a = this.buildViewContext(e.viewSpec, e.viewApi, e.options, e.dateProfileGenerator, e.dateEnv, e.theme, e.pluginHooks, e.dispatch, e.getCurrentData, e.emitter, e.calendarApi, this.registerInteractiveComponent, this.unregisterInteractiveComponent), d = n.header && n.header.hasTitle ? this.state.viewLabelId : "";
    return g(
      $.Provider,
      { value: a },
      n.header && g(Or, Object.assign({ ref: this.headerRef, extraClassName: "fc-header-toolbar", model: n.header, titleId: d }, i)),
      g(
        Bd,
        { liquid: s, height: l, aspectRatio: o, labeledById: d },
        this.renderView(e),
        this.buildAppendContent()
      ),
      n.footer && g(Or, Object.assign({ ref: this.footerRef, extraClassName: "fc-footer-toolbar", model: n.footer, titleId: "" }, i))
    );
  }
  componentDidMount() {
    let { props: e } = this;
    this.calendarInteractions = e.pluginHooks.calendarInteractions.map((r) => new r(e)), window.addEventListener("resize", this.handleWindowResize);
    let { propSetHandlers: n } = e.pluginHooks;
    for (let r in n)
      n[r](e[r], e);
  }
  componentDidUpdate(e) {
    let { props: n } = this, { propSetHandlers: r } = n.pluginHooks;
    for (let i in r)
      n[i] !== e[i] && r[i](n[i], n);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize), this.resizeRunner.clear();
    for (let e of this.calendarInteractions)
      e.destroy();
    this.props.emitter.trigger("_unmount");
  }
  buildAppendContent() {
    let { props: e } = this, n = e.pluginHooks.viewContainerAppends.map((r) => r(e));
    return g(I, {}, ...n);
  }
  renderView(e) {
    let { pluginHooks: n } = e, { viewSpec: r } = e, i = {
      dateProfile: e.dateProfile,
      businessHours: e.businessHours,
      eventStore: e.renderableEventStore,
      eventUiBases: e.eventUiBases,
      dateSelection: e.dateSelection,
      eventSelection: e.eventSelection,
      eventDrag: e.eventDrag,
      eventResize: e.eventResize,
      isHeightAuto: e.isHeightAuto,
      forPrint: e.forPrint
    }, s = this.buildViewPropTransformers(n.viewPropsTransformers);
    for (let o of s)
      Object.assign(i, o.transform(i, e));
    let l = r.component;
    return g(l, Object.assign({}, i));
  }
}
function zd(t, e, n, r, i, s) {
  let l = n.build(i, void 0, !1), o = n.buildPrev(e, r, !1), a = n.buildNext(e, r, !1);
  return {
    title: s,
    activeButton: t.type,
    navUnit: t.singleUnit,
    isTodayEnabled: l.isValid && !Q(e.currentRange, i),
    isPrevEnabled: o.isValid,
    isNextEnabled: a.isValid
  };
}
function Fd(t) {
  return t.map((e) => new e());
}
class Wd extends _a {
  constructor(e, n = {}) {
    super(), this.isRendering = !1, this.isRendered = !1, this.currentClassNames = [], this.customContentRenderId = 0, this.handleAction = (r) => {
      switch (r.type) {
        case "SET_EVENT_DRAG":
        case "SET_EVENT_RESIZE":
          this.renderRunner.tryDrain();
      }
    }, this.handleData = (r) => {
      this.currentData = r, this.renderRunner.request(r.calendarOptions.rerenderDelay);
    }, this.handleRenderRequest = () => {
      if (this.isRendering) {
        this.isRendered = !0;
        let { currentData: r } = this;
        br(() => {
          ke(g(wa, { options: r.calendarOptions, theme: r.theme, emitter: r.emitter }, (i, s, l, o) => (this.setClassNames(i), this.setHeight(s), g(
            yi.Provider,
            { value: this.customContentRenderId },
            g(Ud, Object.assign({ isHeightAuto: l, forPrint: o }, r))
          ))), this.el);
        });
      } else
        this.isRendered && (this.isRendered = !1, ke(null, this.el), this.setClassNames([]), this.setHeight(""));
    }, al(e), this.el = e, this.renderRunner = new nn(this.handleRenderRequest), new _d({
      optionOverrides: n,
      calendarApi: this,
      onAction: this.handleAction,
      onData: this.handleData
    });
  }
  render() {
    let e = this.isRendering;
    e ? this.customContentRenderId += 1 : this.isRendering = !0, this.renderRunner.request(), e && this.updateSize();
  }
  destroy() {
    this.isRendering && (this.isRendering = !1, this.renderRunner.request());
  }
  updateSize() {
    br(() => {
      super.updateSize();
    });
  }
  batchRendering(e) {
    this.renderRunner.pause("batchRendering"), e(), this.renderRunner.resume("batchRendering");
  }
  pauseRendering() {
    this.renderRunner.pause("pauseRendering");
  }
  resumeRendering() {
    this.renderRunner.resume("pauseRendering", !0);
  }
  resetOptions(e, n) {
    this.currentDataManager.resetOptions(e, n);
  }
  setClassNames(e) {
    if (!re(e, this.currentClassNames)) {
      let { classList: n } = this.el;
      for (let r of this.currentClassNames)
        n.remove(r);
      for (let r of e)
        n.add(r);
      this.currentClassNames = e;
    }
  }
  setHeight(e) {
    oi(this.el, "height", e);
  }
}
const Vd = {
  headerToolbar: !0,
  footerToolbar: !0,
  events: !0,
  eventSources: !0,
  resources: !0
}, Gd = Kt({
  props: {
    options: Object
  },
  data() {
    return {
      renderId: 0,
      customRenderingMap: /* @__PURE__ */ new Map()
    };
  },
  methods: {
    getApi() {
      return this.calendar;
    },
    buildOptions(t) {
      return {
        ...t,
        customRenderingMetaMap: Zd(this.$slots),
        handleCustomRendering: this.handleCustomRendering
      };
    }
  },
  render() {
    const t = [];
    for (const e of this.customRenderingMap.values())
      t.push(Qe(Qd, {
        key: e.id,
        customRendering: e
      }));
    return Qe("div", {
      attrs: { "data-fc-render-id": this.renderId }
    }, Qe(Ps, t));
  },
  mounted() {
    const t = new Tc();
    this.handleCustomRendering = t.handle.bind(t);
    const e = this.buildOptions(this.options), n = new Wd(this.$el, e);
    this.calendar = n, n.render(), t.subscribe((r) => {
      this.customRenderingMap = r, this.renderId++, this.needCustomRenderingResize = !0;
    });
  },
  beforeUpdate() {
    this.getApi().resumeRendering();
  },
  updated() {
    this.needCustomRenderingResize && (this.needCustomRenderingResize = !1, this.getApi().updateSize());
  },
  beforeUnmount() {
    this.getApi().destroy();
  },
  watch: Yd()
}), qd = Gd, Qd = Kt({
  props: {
    customRendering: Object
  },
  render() {
    const t = this.customRendering, e = typeof t.generatorMeta == "function" ? t.generatorMeta(t.renderProps) : t.generatorMeta;
    return Qe(Hs, { to: t.containerEl }, e);
  }
});
function Yd() {
  let t = {
    options: {
      deep: !0,
      handler(e) {
        let n = this.getApi();
        n.pauseRendering();
        let r = this.buildOptions(e);
        n.resetOptions(r), this.renderId++;
      }
    }
  };
  for (let e in Vd)
    t[`options.${e}`] = {
      deep: !0,
      handler(n) {
        if (n !== void 0) {
          let r = this.getApi();
          r.pauseRendering(), r.resetOptions({
            [e]: n
          }, [e]), this.renderId++;
        }
      }
    };
  return t;
}
function Zd(t) {
  const e = {};
  for (const n in t)
    e[$d(n)] = t[n];
  return e;
}
function $d(t) {
  return t.split("-").map((e, n) => n ? Xd(e) : e).join("");
}
function Xd(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}
var Jd = ':root{--fc-daygrid-event-dot-width:8px}.fc-daygrid-day-events:after,.fc-daygrid-day-events:before,.fc-daygrid-day-frame:after,.fc-daygrid-day-frame:before,.fc-daygrid-event-harness:after,.fc-daygrid-event-harness:before{clear:both;content:"";display:table}.fc .fc-daygrid-body{position:relative;z-index:1}.fc .fc-daygrid-day.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-daygrid-day-frame{min-height:100%;position:relative}.fc .fc-daygrid-day-top{display:flex;flex-direction:row-reverse}.fc .fc-day-other .fc-daygrid-day-top{opacity:.3}.fc .fc-daygrid-day-number{padding:4px;position:relative;z-index:4}.fc .fc-daygrid-month-start{font-size:1.1em;font-weight:700}.fc .fc-daygrid-day-events{margin-top:1px}.fc .fc-daygrid-body-balanced .fc-daygrid-day-events{left:0;position:absolute;right:0}.fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events{min-height:2em;position:relative}.fc .fc-daygrid-body-natural .fc-daygrid-day-events{margin-bottom:1em}.fc .fc-daygrid-event-harness{position:relative}.fc .fc-daygrid-event-harness-abs{left:0;position:absolute;right:0;top:0}.fc .fc-daygrid-bg-harness{bottom:0;position:absolute;top:0}.fc .fc-daygrid-day-bg .fc-non-business{z-index:1}.fc .fc-daygrid-day-bg .fc-bg-event{z-index:2}.fc .fc-daygrid-day-bg .fc-highlight{z-index:3}.fc .fc-daygrid-event{margin-top:1px;z-index:6}.fc .fc-daygrid-event.fc-event-mirror{z-index:7}.fc .fc-daygrid-day-bottom{font-size:.85em;margin:0 2px}.fc .fc-daygrid-day-bottom:after,.fc .fc-daygrid-day-bottom:before{clear:both;content:"";display:table}.fc .fc-daygrid-more-link{border-radius:3px;cursor:pointer;line-height:1;margin-top:1px;max-width:100%;overflow:hidden;padding:2px;position:relative;white-space:nowrap;z-index:4}.fc .fc-daygrid-more-link:hover{background-color:rgba(0,0,0,.1)}.fc .fc-daygrid-week-number{background-color:var(--fc-neutral-bg-color);color:var(--fc-neutral-text-color);min-width:1.5em;padding:2px;position:absolute;text-align:center;top:0;z-index:5}.fc .fc-more-popover .fc-popover-body{min-width:220px;padding:10px}.fc-direction-ltr .fc-daygrid-event.fc-event-start,.fc-direction-rtl .fc-daygrid-event.fc-event-end{margin-left:2px}.fc-direction-ltr .fc-daygrid-event.fc-event-end,.fc-direction-rtl .fc-daygrid-event.fc-event-start{margin-right:2px}.fc-direction-ltr .fc-daygrid-more-link{float:left}.fc-direction-ltr .fc-daygrid-week-number{border-radius:0 0 3px 0;left:0}.fc-direction-rtl .fc-daygrid-more-link{float:right}.fc-direction-rtl .fc-daygrid-week-number{border-radius:0 0 0 3px;right:0}.fc-liquid-hack .fc-daygrid-day-frame{position:static}.fc-daygrid-event{border-radius:3px;font-size:var(--fc-small-font-size);position:relative;white-space:nowrap}.fc-daygrid-block-event .fc-event-time{font-weight:700}.fc-daygrid-block-event .fc-event-time,.fc-daygrid-block-event .fc-event-title{padding:1px}.fc-daygrid-dot-event{align-items:center;display:flex;padding:2px 0}.fc-daygrid-dot-event .fc-event-title{flex-grow:1;flex-shrink:1;font-weight:700;min-width:0;overflow:hidden}.fc-daygrid-dot-event.fc-event-mirror,.fc-daygrid-dot-event:hover{background:rgba(0,0,0,.1)}.fc-daygrid-dot-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-daygrid-event-dot{border:calc(var(--fc-daygrid-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-daygrid-event-dot-width)/2);box-sizing:content-box;height:0;margin:0 4px;width:0}.fc-direction-ltr .fc-daygrid-event .fc-event-time{margin-right:3px}.fc-direction-rtl .fc-daygrid-event .fc-event-time{margin-left:3px}';
tn(Jd);
function Ge(t, e) {
  let n = [];
  for (let r = 0; r < e; r += 1)
    n[r] = [];
  for (let r of t)
    n[r.row].push(r);
  return n;
}
function qe(t, e) {
  let n = [];
  for (let r = 0; r < e; r += 1)
    n[r] = [];
  for (let r of t)
    n[r.firstCol].push(r);
  return n;
}
function Pr(t, e) {
  let n = [];
  if (t) {
    for (let r = 0; r < e; r += 1)
      n[r] = {
        affectedInstances: t.affectedInstances,
        isEvent: t.isEvent,
        segs: []
      };
    for (let r of t.segs)
      n[r.row].segs.push(r);
  } else
    for (let r = 0; r < e; r += 1)
      n[r] = null;
  return n;
}
const ys = O({
  hour: "numeric",
  minute: "2-digit",
  omitZeroMinute: !0,
  meridiem: "narrow"
});
function Es(t) {
  let { display: e } = t.eventRange.ui;
  return e === "list-item" || e === "auto" && !t.eventRange.def.allDay && t.firstCol === t.lastCol && t.isStart && t.isEnd;
}
class Ss extends T {
  render() {
    let { props: e } = this;
    return g(is, Object.assign({}, e, { elClasses: ["fc-daygrid-event", "fc-daygrid-block-event", "fc-h-event"], defaultTimeFormat: ys, defaultDisplayEventEnd: e.defaultDisplayEventEnd, disableResizing: !e.seg.eventRange.def.allDay }));
  }
}
class As extends T {
  render() {
    let { props: e, context: n } = this, { options: r } = n, { seg: i } = e, s = r.eventTimeFormat || ys, l = Hi(i, s, n, !0, e.defaultDisplayEventEnd);
    return g(Tn, Object.assign({}, e, { elTag: "a", elClasses: ["fc-daygrid-event", "fc-daygrid-dot-event"], elAttrs: Li(e.seg, n), defaultGenerator: Kd, timeText: l, isResizing: !1, isDateSelecting: !1 }));
  }
}
function Kd(t) {
  return g(
    I,
    null,
    g("div", { className: "fc-daygrid-event-dot", style: { borderColor: t.borderColor || t.backgroundColor } }),
    t.timeText && g("div", { className: "fc-event-time" }, t.timeText),
    g("div", { className: "fc-event-title" }, t.event.title || g(I, null, "\xA0"))
  );
}
class eu extends T {
  constructor() {
    super(...arguments), this.compileSegs = A(tu);
  }
  render() {
    let { props: e } = this, { allSegs: n, invisibleSegs: r } = this.compileSegs(e.singlePlacements);
    return g(as, { elClasses: ["fc-daygrid-more-link"], dateProfile: e.dateProfile, todayRange: e.todayRange, allDayDate: e.allDayDate, moreCnt: e.moreCnt, allSegs: n, hiddenSegs: r, alignmentElRef: e.alignmentElRef, alignGridTop: e.alignGridTop, extraDateSpan: e.extraDateSpan, popoverContent: () => {
      let i = (e.eventDrag ? e.eventDrag.affectedInstances : null) || (e.eventResize ? e.eventResize.affectedInstances : null) || {};
      return g(I, null, n.map((s) => {
        let l = s.eventRange.instance.instanceId;
        return g("div", { className: "fc-daygrid-event-harness", key: l, style: {
          visibility: i[l] ? "hidden" : ""
        } }, Es(s) ? g(As, Object.assign({ seg: s, isDragging: !1, isSelected: l === e.eventSelection, defaultDisplayEventEnd: !1 }, ne(s, e.todayRange))) : g(Ss, Object.assign({ seg: s, isDragging: !1, isResizing: !1, isDateSelecting: !1, isSelected: l === e.eventSelection, defaultDisplayEventEnd: !1 }, ne(s, e.todayRange))));
      }));
    } });
  }
}
function tu(t) {
  let e = [], n = [];
  for (let r of t)
    e.push(r.seg), r.isVisible || n.push(r.seg);
  return { allSegs: e, invisibleSegs: n };
}
const nu = O({ week: "narrow" });
class ru extends G {
  constructor() {
    super(...arguments), this.rootElRef = B(), this.state = {
      dayNumberId: pt()
    }, this.handleRootEl = (e) => {
      Z(this.rootElRef, e), Z(this.props.elRef, e);
    };
  }
  render() {
    let { context: e, props: n, state: r, rootElRef: i } = this, { options: s, dateEnv: l } = e, { date: o, dateProfile: a } = n;
    const d = n.showDayNumber && su(o, a.currentRange, l);
    return g(Mn, { elTag: "td", elRef: this.handleRootEl, elClasses: [
      "fc-daygrid-day",
      ...n.extraClassNames || []
    ], elAttrs: Object.assign(Object.assign(Object.assign({}, n.extraDataAttrs), n.showDayNumber ? { "aria-labelledby": r.dayNumberId } : {}), { role: "gridcell" }), defaultGenerator: iu, date: o, dateProfile: a, todayRange: n.todayRange, showDayNumber: n.showDayNumber, isMonthStart: d, extraRenderProps: n.extraRenderProps }, (c, f) => g(
      "div",
      { ref: n.innerElRef, className: "fc-daygrid-day-frame fc-scrollgrid-sync-inner", style: { minHeight: n.minHeight } },
      n.showWeekNumber && g(os, { elTag: "a", elClasses: ["fc-daygrid-week-number"], elAttrs: ut(e, o, "week"), date: o, defaultFormat: nu }),
      !f.isDisabled && (n.showDayNumber || In(s) || n.forceDayTop) ? g(
        "div",
        { className: "fc-daygrid-day-top" },
        g(c, { elTag: "a", elClasses: [
          "fc-daygrid-day-number",
          d && "fc-daygrid-month-start"
        ], elAttrs: Object.assign(Object.assign({}, ut(e, o)), { id: r.dayNumberId }) })
      ) : n.showDayNumber ? g(
        "div",
        { className: "fc-daygrid-day-top", style: { visibility: "hidden" } },
        g("a", { className: "fc-daygrid-day-number" }, "\xA0")
      ) : void 0,
      g(
        "div",
        { className: "fc-daygrid-day-events", ref: n.fgContentElRef },
        n.fgContent,
        g(
          "div",
          { className: "fc-daygrid-day-bottom", style: { marginTop: n.moreMarginTop } },
          g(eu, { allDayDate: o, singlePlacements: n.singlePlacements, moreCnt: n.moreCnt, alignmentElRef: i, alignGridTop: !n.showDayNumber, extraDateSpan: n.extraDateSpan, dateProfile: n.dateProfile, eventSelection: n.eventSelection, eventDrag: n.eventDrag, eventResize: n.eventResize, todayRange: n.todayRange })
        )
      ),
      g("div", { className: "fc-daygrid-day-bg" }, n.bgContent)
    ));
  }
}
function iu(t) {
  return t.dayNumberText || g(I, null, "\xA0");
}
function su(t, e, n) {
  const { start: r, end: i } = e, s = ie(i, -1), l = n.getYear(r), o = n.getMonth(r), a = n.getYear(s), d = n.getMonth(s);
  return !(l === a && o === d) && Boolean(
    t.valueOf() === r.valueOf() || n.getDay(t) === 1 && t.valueOf() < i.valueOf()
  );
}
function lu(t, e, n, r, i, s, l) {
  let o = new cu();
  o.allowReslicing = !0, o.strictOrder = r, e === !0 || n === !0 ? (o.maxCoord = s, o.hiddenConsumes = !0) : typeof e == "number" ? o.maxStackCnt = e : typeof n == "number" && (o.maxStackCnt = n, o.hiddenConsumes = !0);
  let a = [], d = [];
  for (let y = 0; y < t.length; y += 1) {
    let E = t[y], { instanceId: C } = E.eventRange.instance, D = i[C];
    D != null ? a.push({
      index: y,
      thickness: D,
      span: {
        start: E.firstCol,
        end: E.lastCol + 1
      }
    }) : d.push(E);
  }
  let c = o.addSegs(a), f = o.toRects(), { singleColPlacements: h, multiColPlacements: u, leftoverMargins: m } = ou(f, t, l), v = [], b = [];
  for (let y of d) {
    u[y.firstCol].push({
      seg: y,
      isVisible: !1,
      isAbsolute: !0,
      absoluteTop: 0,
      marginTop: 0
    });
    for (let E = y.firstCol; E <= y.lastCol; E += 1)
      h[E].push({
        seg: Se(y, E, E + 1, l),
        isVisible: !1,
        isAbsolute: !1,
        absoluteTop: 0,
        marginTop: 0
      });
  }
  for (let y = 0; y < l.length; y += 1)
    v.push(0);
  for (let y of c) {
    let E = t[y.index], C = y.span;
    u[C.start].push({
      seg: Se(E, C.start, C.end, l),
      isVisible: !1,
      isAbsolute: !0,
      absoluteTop: 0,
      marginTop: 0
    });
    for (let D = C.start; D < C.end; D += 1)
      v[D] += 1, h[D].push({
        seg: Se(E, D, D + 1, l),
        isVisible: !1,
        isAbsolute: !1,
        absoluteTop: 0,
        marginTop: 0
      });
  }
  for (let y = 0; y < l.length; y += 1)
    b.push(m[y]);
  return { singleColPlacements: h, multiColPlacements: u, moreCnts: v, moreMarginTops: b };
}
function ou(t, e, n) {
  let r = au(t, n.length), i = [], s = [], l = [];
  for (let o = 0; o < n.length; o += 1) {
    let a = r[o], d = [], c = 0, f = 0;
    for (let u of a) {
      let m = e[u.index];
      d.push({
        seg: Se(m, o, o + 1, n),
        isVisible: !0,
        isAbsolute: !1,
        absoluteTop: u.levelCoord,
        marginTop: u.levelCoord - c
      }), c = u.levelCoord + u.thickness;
    }
    let h = [];
    c = 0, f = 0;
    for (let u of a) {
      let m = e[u.index], v = u.span.end - u.span.start > 1, b = u.span.start === o;
      f += u.levelCoord - c, c = u.levelCoord + u.thickness, v ? (f += u.thickness, b && h.push({
        seg: Se(m, u.span.start, u.span.end, n),
        isVisible: !0,
        isAbsolute: !0,
        absoluteTop: u.levelCoord,
        marginTop: 0
      })) : b && (h.push({
        seg: Se(m, u.span.start, u.span.end, n),
        isVisible: !0,
        isAbsolute: !1,
        absoluteTop: u.levelCoord,
        marginTop: f
      }), f = 0);
    }
    i.push(d), s.push(h), l.push(f);
  }
  return { singleColPlacements: i, multiColPlacements: s, leftoverMargins: l };
}
function au(t, e) {
  let n = [];
  for (let r = 0; r < e; r += 1)
    n.push([]);
  for (let r of t)
    for (let i = r.span.start; i < r.span.end; i += 1)
      n[i].push(r);
  return n;
}
function Se(t, e, n, r) {
  if (t.firstCol === e && t.lastCol === n - 1)
    return t;
  let i = t.eventRange, s = i.range, l = fe(s, {
    start: r[e].date,
    end: H(r[n - 1].date, 1)
  });
  return Object.assign(Object.assign({}, t), { firstCol: e, lastCol: n - 1, eventRange: {
    def: i.def,
    ui: Object.assign(Object.assign({}, i.ui), { durationEditable: !1 }),
    instance: i.instance,
    range: l
  }, isStart: t.isStart && l.start.valueOf() === s.start.valueOf(), isEnd: t.isEnd && l.end.valueOf() === s.end.valueOf() });
}
class cu extends qi {
  constructor() {
    super(...arguments), this.hiddenConsumes = !1, this.forceHidden = {};
  }
  addSegs(e) {
    const n = super.addSegs(e), { entriesByLevel: r } = this, i = (s) => !this.forceHidden[de(s)];
    for (let s = 0; s < r.length; s += 1)
      r[s] = r[s].filter(i);
    return n;
  }
  handleInvalidInsertion(e, n, r) {
    const { entriesByLevel: i, forceHidden: s } = this, { touchingEntry: l, touchingLevel: o, touchingLateral: a } = e;
    if (this.hiddenConsumes && l) {
      const d = de(l);
      if (!s[d])
        if (this.allowReslicing) {
          const c = Object.assign(Object.assign({}, l), { span: wn(l.span, n.span) }), f = de(c);
          s[f] = !0, i[o][a] = c, this.splitEntry(l, n, r);
        } else
          s[d] = !0, r.push(l);
    }
    return super.handleInvalidInsertion(e, n, r);
  }
}
class Ds extends G {
  constructor() {
    super(...arguments), this.cellElRefs = new q(), this.frameElRefs = new q(), this.fgElRefs = new q(), this.segHarnessRefs = new q(), this.rootElRef = B(), this.state = {
      framePositions: null,
      maxContentHeight: null,
      eventInstanceHeights: {}
    }, this.handleResize = (e) => {
      e && this.updateSizing(!0);
    };
  }
  render() {
    let { props: e, state: n, context: r } = this, { options: i } = r, s = e.cells.length, l = qe(e.businessHourSegs, s), o = qe(e.bgEventSegs, s), a = qe(this.getHighlightSegs(), s), d = qe(this.getMirrorSegs(), s), { singleColPlacements: c, multiColPlacements: f, moreCnts: h, moreMarginTops: u } = lu(Pi(e.fgEventSegs, i.eventOrder), e.dayMaxEvents, e.dayMaxEventRows, i.eventOrderStrict, n.eventInstanceHeights, n.maxContentHeight, e.cells), m = e.eventDrag && e.eventDrag.affectedInstances || e.eventResize && e.eventResize.affectedInstances || {};
    return g(
      "tr",
      { ref: this.rootElRef, role: "row" },
      e.renderIntro && e.renderIntro(),
      e.cells.map((v, b) => {
        let y = this.renderFgSegs(b, e.forPrint ? c[b] : f[b], e.todayRange, m), E = this.renderFgSegs(b, du(d[b], f), e.todayRange, {}, Boolean(e.eventDrag), Boolean(e.eventResize), !1);
        return g(ru, { key: v.key, elRef: this.cellElRefs.createRef(v.key), innerElRef: this.frameElRefs.createRef(v.key), dateProfile: e.dateProfile, date: v.date, showDayNumber: e.showDayNumbers, showWeekNumber: e.showWeekNumbers && b === 0, forceDayTop: e.showWeekNumbers, todayRange: e.todayRange, eventSelection: e.eventSelection, eventDrag: e.eventDrag, eventResize: e.eventResize, extraRenderProps: v.extraRenderProps, extraDataAttrs: v.extraDataAttrs, extraClassNames: v.extraClassNames, extraDateSpan: v.extraDateSpan, moreCnt: h[b], moreMarginTop: u[b], singlePlacements: c[b], fgContentElRef: this.fgElRefs.createRef(v.key), fgContent: g(
          I,
          null,
          g(I, null, y),
          g(I, null, E)
        ), bgContent: g(
          I,
          null,
          this.renderFillSegs(a[b], "highlight"),
          this.renderFillSegs(l[b], "non-business"),
          this.renderFillSegs(o[b], "bg-event")
        ), minHeight: e.cellMinHeight });
      })
    );
  }
  componentDidMount() {
    this.updateSizing(!0), this.context.addResizeHandler(this.handleResize);
  }
  componentDidUpdate(e, n) {
    let r = this.props;
    this.updateSizing(!V(e, r));
  }
  componentWillUnmount() {
    this.context.removeResizeHandler(this.handleResize);
  }
  getHighlightSegs() {
    let { props: e } = this;
    return e.eventDrag && e.eventDrag.segs.length ? e.eventDrag.segs : e.eventResize && e.eventResize.segs.length ? e.eventResize.segs : e.dateSelectionSegs;
  }
  getMirrorSegs() {
    let { props: e } = this;
    return e.eventResize && e.eventResize.segs.length ? e.eventResize.segs : [];
  }
  renderFgSegs(e, n, r, i, s, l, o) {
    let { context: a } = this, { eventSelection: d } = this.props, { framePositions: c } = this.state, f = this.props.cells.length === 1, h = s || l || o, u = [];
    if (c)
      for (let m of n) {
        let { seg: v } = m, { instanceId: b } = v.eventRange.instance, y = b + ":" + e, E = m.isVisible && !i[b], C = m.isAbsolute, D = "", x = "";
        C && (a.isRtl ? (x = 0, D = c.lefts[v.lastCol] - c.lefts[v.firstCol]) : (D = 0, x = c.rights[v.firstCol] - c.rights[v.lastCol])), u.push(g("div", { className: "fc-daygrid-event-harness" + (C ? " fc-daygrid-event-harness-abs" : ""), key: y, ref: h ? null : this.segHarnessRefs.createRef(y), style: {
          visibility: E ? "" : "hidden",
          marginTop: C ? "" : m.marginTop,
          top: C ? m.absoluteTop : "",
          left: D,
          right: x
        } }, Es(v) ? g(As, Object.assign({ seg: v, isDragging: s, isSelected: b === d, defaultDisplayEventEnd: f }, ne(v, r))) : g(Ss, Object.assign({ seg: v, isDragging: s, isResizing: l, isDateSelecting: o, isSelected: b === d, defaultDisplayEventEnd: f }, ne(v, r)))));
      }
    return u;
  }
  renderFillSegs(e, n) {
    let { isRtl: r } = this.context, { todayRange: i } = this.props, { framePositions: s } = this.state, l = [];
    if (s)
      for (let o of e) {
        let a = r ? {
          right: 0,
          left: s.lefts[o.lastCol] - s.lefts[o.firstCol]
        } : {
          left: 0,
          right: s.rights[o.firstCol] - s.rights[o.lastCol]
        };
        l.push(g("div", { key: Bi(o.eventRange), className: "fc-daygrid-bg-harness", style: a }, n === "bg-event" ? g(ss, Object.assign({ seg: o }, ne(o, i))) : ls(n)));
      }
    return g(I, {}, ...l);
  }
  updateSizing(e) {
    let { props: n, state: r, frameElRefs: i } = this;
    if (!n.forPrint && n.clientWidth !== null) {
      if (e) {
        let a = n.cells.map((d) => i.currentMap[d.key]);
        if (a.length) {
          let d = this.rootElRef.current, c = new Ce(
            d,
            a,
            !0,
            !1
          );
          (!r.framePositions || !r.framePositions.similarTo(c)) && this.setState({
            framePositions: new Ce(
              d,
              a,
              !0,
              !1
            )
          });
        }
      }
      const s = this.state.eventInstanceHeights, l = this.queryEventInstanceHeights(), o = n.dayMaxEvents === !0 || n.dayMaxEventRows === !0;
      this.safeSetState({
        eventInstanceHeights: Object.assign(Object.assign({}, s), l),
        maxContentHeight: o ? this.computeMaxContentHeight() : null
      });
    }
  }
  queryEventInstanceHeights() {
    let e = this.segHarnessRefs.currentMap, n = {};
    for (let r in e) {
      let i = Math.round(e[r].getBoundingClientRect().height), s = r.split(":")[0];
      n[s] = Math.max(n[s] || 0, i);
    }
    return n;
  }
  computeMaxContentHeight() {
    let e = this.props.cells[0].key, n = this.cellElRefs.currentMap[e], r = this.fgElRefs.currentMap[e];
    return n.getBoundingClientRect().bottom - r.getBoundingClientRect().top;
  }
  getCellEls() {
    let e = this.cellElRefs.currentMap;
    return this.props.cells.map((n) => e[n.key]);
  }
}
Ds.addStateEquality({
  eventInstanceHeights: V
});
function du(t, e) {
  if (!t.length)
    return [];
  let n = uu(e);
  return t.map((r) => ({
    seg: r,
    isVisible: !0,
    isAbsolute: !0,
    absoluteTop: n[r.eventRange.instance.instanceId],
    marginTop: 0
  }));
}
function uu(t) {
  let e = {};
  for (let n of t)
    for (let r of n)
      e[r.seg.eventRange.instance.instanceId] = r.absoluteTop;
  return e;
}
class fu extends G {
  constructor() {
    super(...arguments), this.splitBusinessHourSegs = A(Ge), this.splitBgEventSegs = A(Ge), this.splitFgEventSegs = A(Ge), this.splitDateSelectionSegs = A(Ge), this.splitEventDrag = A(Pr), this.splitEventResize = A(Pr), this.rowRefs = new q();
  }
  render() {
    let { props: e, context: n } = this, r = e.cells.length, i = this.splitBusinessHourSegs(e.businessHourSegs, r), s = this.splitBgEventSegs(e.bgEventSegs, r), l = this.splitFgEventSegs(e.fgEventSegs, r), o = this.splitDateSelectionSegs(e.dateSelectionSegs, r), a = this.splitEventDrag(e.eventDrag, r), d = this.splitEventResize(e.eventResize, r), c = r >= 7 && e.clientWidth ? e.clientWidth / n.options.aspectRatio / 6 : null;
    return g(He, { unit: "day" }, (f, h) => g(I, null, e.cells.map((u, m) => g(Ds, {
      ref: this.rowRefs.createRef(m),
      key: u.length ? u[0].date.toISOString() : m,
      showDayNumbers: r > 1,
      showWeekNumbers: e.showWeekNumbers,
      todayRange: h,
      dateProfile: e.dateProfile,
      cells: u,
      renderIntro: e.renderRowIntro,
      businessHourSegs: i[m],
      eventSelection: e.eventSelection,
      bgEventSegs: s[m].filter(hu),
      fgEventSegs: l[m],
      dateSelectionSegs: o[m],
      eventDrag: a[m],
      eventResize: d[m],
      dayMaxEvents: e.dayMaxEvents,
      dayMaxEventRows: e.dayMaxEventRows,
      clientWidth: e.clientWidth,
      clientHeight: e.clientHeight,
      cellMinHeight: c,
      forPrint: e.forPrint
    }))));
  }
  componentDidMount() {
    const e = this.rowRefs.currentMap[0].getCellEls()[0];
    this.rootEl = e ? e.closest(".fc-daygrid-body") : null, this.rootEl && this.context.registerInteractiveComponent(this, {
      el: this.rootEl,
      isHitComboAllowed: this.props.isHitComboAllowed
    });
  }
  componentWillUnmount() {
    this.rootEl && (this.context.unregisterInteractiveComponent(this), this.rootEl = null);
  }
  prepareHits() {
    this.rowPositions = new Ce(
      this.rootEl,
      this.rowRefs.collect().map((e) => e.getCellEls()[0]),
      !1,
      !0
    ), this.colPositions = new Ce(
      this.rootEl,
      this.rowRefs.currentMap[0].getCellEls(),
      !0,
      !1
    );
  }
  queryHit(e, n) {
    let { colPositions: r, rowPositions: i } = this, s = r.leftToIndex(e), l = i.topToIndex(n);
    if (l != null && s != null) {
      let o = this.props.cells[l][s];
      return {
        dateProfile: this.props.dateProfile,
        dateSpan: Object.assign({ range: this.getCellRange(l, s), allDay: !0 }, o.extraDateSpan),
        dayEl: this.getCellEl(l, s),
        rect: {
          left: r.lefts[s],
          right: r.rights[s],
          top: i.tops[l],
          bottom: i.bottoms[l]
        },
        layer: 0
      };
    }
    return null;
  }
  getCellEl(e, n) {
    return this.rowRefs.currentMap[e].getCellEls()[n];
  }
  getCellRange(e, n) {
    let r = this.props.cells[e][n].date, i = H(r, 1);
    return { start: r, end: i };
  }
}
function hu(t) {
  return t.eventRange.def.allDay;
}
class gu extends G {
  constructor() {
    super(...arguments), this.elRef = B(), this.needsScrollReset = !1;
  }
  render() {
    let { props: e } = this, { dayMaxEventRows: n, dayMaxEvents: r, expandRows: i } = e, s = r === !0 || n === !0;
    s && !i && (s = !1, n = null, r = null);
    let l = [
      "fc-daygrid-body",
      s ? "fc-daygrid-body-balanced" : "fc-daygrid-body-unbalanced",
      i ? "" : "fc-daygrid-body-natural"
    ];
    return g(
      "div",
      { ref: this.elRef, className: l.join(" "), style: {
        width: e.clientWidth,
        minWidth: e.tableMinWidth
      } },
      g(
        "table",
        { role: "presentation", className: "fc-scrollgrid-sync-table", style: {
          width: e.clientWidth,
          minWidth: e.tableMinWidth,
          height: i ? e.clientHeight : ""
        } },
        e.colGroupNode,
        g(
          "tbody",
          { role: "presentation" },
          g(fu, { dateProfile: e.dateProfile, cells: e.cells, renderRowIntro: e.renderRowIntro, showWeekNumbers: e.showWeekNumbers, clientWidth: e.clientWidth, clientHeight: e.clientHeight, businessHourSegs: e.businessHourSegs, bgEventSegs: e.bgEventSegs, fgEventSegs: e.fgEventSegs, dateSelectionSegs: e.dateSelectionSegs, eventSelection: e.eventSelection, eventDrag: e.eventDrag, eventResize: e.eventResize, dayMaxEvents: r, dayMaxEventRows: n, forPrint: e.forPrint, isHitComboAllowed: e.isHitComboAllowed })
        )
      )
    );
  }
  componentDidMount() {
    this.requestScrollReset();
  }
  componentDidUpdate(e) {
    e.dateProfile !== this.props.dateProfile ? this.requestScrollReset() : this.flushScrollReset();
  }
  requestScrollReset() {
    this.needsScrollReset = !0, this.flushScrollReset();
  }
  flushScrollReset() {
    if (this.needsScrollReset && this.props.clientWidth) {
      const e = pu(this.elRef.current, this.props.dateProfile);
      if (e) {
        const n = e.closest(".fc-daygrid-body"), r = n.closest(".fc-scroller"), i = e.getBoundingClientRect().top - n.getBoundingClientRect().top;
        r.scrollTop = i ? i + 1 : 0;
      }
      this.needsScrollReset = !1;
    }
  }
}
function pu(t, e) {
  let n;
  return e.currentRangeUnit.match(/year|month/) && (n = t.querySelector(`[data-date="${Yl(e.currentDate)}-01"]`)), n || (n = t.querySelector(`[data-date="${an(e.currentDate)}"]`)), n;
}
class mu extends Ji {
  constructor() {
    super(...arguments), this.forceDayIfListItem = !0;
  }
  sliceRange(e, n) {
    return n.sliceRange(e);
  }
}
class Cs extends G {
  constructor() {
    super(...arguments), this.slicer = new mu(), this.tableRef = B();
  }
  render() {
    let { props: e, context: n } = this;
    return g(gu, Object.assign({ ref: this.tableRef }, this.slicer.sliceProps(e, e.dateProfile, e.nextDayThreshold, n, e.dayTableModel), { dateProfile: e.dateProfile, cells: e.dayTableModel.cells, colGroupNode: e.colGroupNode, tableMinWidth: e.tableMinWidth, renderRowIntro: e.renderRowIntro, dayMaxEvents: e.dayMaxEvents, dayMaxEventRows: e.dayMaxEventRows, showWeekNumbers: e.showWeekNumbers, expandRows: e.expandRows, headerAlignElRef: e.headerAlignElRef, clientWidth: e.clientWidth, clientHeight: e.clientHeight, forPrint: e.forPrint }));
  }
}
class vu extends Di {
  buildRenderRange(e, n, r) {
    let i = super.buildRenderRange(e, n, r), { props: s } = this;
    return bu({
      currentRange: i,
      snapToWeek: /^(year|month)$/.test(n),
      fixedWeekCount: s.fixedWeekCount,
      dateEnv: s.dateEnv
    });
  }
}
function bu(t) {
  let { dateEnv: e, currentRange: n } = t, { start: r, end: i } = n, s;
  if (t.snapToWeek && (r = e.startOfWeek(r), s = e.startOfWeek(i), s.valueOf() !== i.valueOf() && (i = cr(s, 1))), t.fixedWeekCount) {
    let l = e.startOfWeek(e.startOfMonth(H(n.end, -1))), o = Math.ceil(
      Bl(l, i)
    );
    i = cr(i, 6 - o);
  }
  return { start: r, end: i };
}
class yu extends G {
  constructor() {
    super(...arguments), this.headerElRef = B();
  }
  renderSimpleLayout(e, n) {
    let { props: r, context: i } = this, s = [], l = ft(i.options);
    return e && s.push({
      type: "header",
      key: "header",
      isSticky: l,
      chunk: {
        elRef: this.headerElRef,
        tableClassName: "fc-col-header",
        rowContent: e
      }
    }), s.push({
      type: "body",
      key: "body",
      liquid: !0,
      chunk: { content: n }
    }), g(
      ot,
      { elClasses: ["fc-daygrid"], viewSpec: i.viewSpec },
      g(_n, { liquid: !r.isHeightAuto && !r.forPrint, collapsibleWidth: r.forPrint, cols: [], sections: s })
    );
  }
  renderHScrollLayout(e, n, r, i) {
    let s = this.context.pluginHooks.scrollGridImpl;
    if (!s)
      throw new Error("No ScrollGrid implementation");
    let { props: l, context: o } = this, a = !l.forPrint && ft(o.options), d = !l.forPrint && rs(o.options), c = [];
    return e && c.push({
      type: "header",
      key: "header",
      isSticky: a,
      chunks: [{
        key: "main",
        elRef: this.headerElRef,
        tableClassName: "fc-col-header",
        rowContent: e
      }]
    }), c.push({
      type: "body",
      key: "body",
      liquid: !0,
      chunks: [{
        key: "main",
        content: n
      }]
    }), d && c.push({
      type: "footer",
      key: "footer",
      isSticky: !0,
      chunks: [{
        key: "main",
        content: Zt
      }]
    }), g(
      ot,
      { elClasses: ["fc-daygrid"], viewSpec: o.viewSpec },
      g(s, { liquid: !l.isHeightAuto && !l.forPrint, forPrint: l.forPrint, collapsibleWidth: l.forPrint, colGroups: [{ cols: [{ span: r, minWidth: i }] }], sections: c })
    );
  }
}
class Eu extends yu {
  constructor() {
    super(...arguments), this.buildDayTableModel = A(Su), this.headerRef = B(), this.tableRef = B();
  }
  render() {
    let { options: e, dateProfileGenerator: n } = this.context, { props: r } = this, i = this.buildDayTableModel(r.dateProfile, n), s = e.dayHeaders && g(Zi, { ref: this.headerRef, dateProfile: r.dateProfile, dates: i.headerDates, datesRepDistinctDays: i.rowCnt === 1 }), l = (o) => g(Cs, { ref: this.tableRef, dateProfile: r.dateProfile, dayTableModel: i, businessHours: r.businessHours, dateSelection: r.dateSelection, eventStore: r.eventStore, eventUiBases: r.eventUiBases, eventSelection: r.eventSelection, eventDrag: r.eventDrag, eventResize: r.eventResize, nextDayThreshold: e.nextDayThreshold, colGroupNode: o.tableColGroupNode, tableMinWidth: o.tableMinWidth, dayMaxEvents: e.dayMaxEvents, dayMaxEventRows: e.dayMaxEventRows, showWeekNumbers: e.weekNumbers, expandRows: !r.isHeightAuto, headerAlignElRef: this.headerElRef, clientWidth: o.clientWidth, clientHeight: o.clientHeight, forPrint: r.forPrint });
    return e.dayMinWidth ? this.renderHScrollLayout(s, l, i.colCnt, e.dayMinWidth) : this.renderSimpleLayout(s, l);
  }
}
function Su(t, e) {
  let n = new $i(t.renderRange, e);
  return new Xi(n, /year|month|week/.test(t.currentRangeUnit));
}
var Au = X({
  name: "@fullcalendar/daygrid",
  initialView: "dayGridMonth",
  views: {
    dayGrid: {
      component: Eu,
      dateProfileGeneratorClass: vu
    },
    dayGridDay: {
      type: "dayGrid",
      duration: { days: 1 }
    },
    dayGridWeek: {
      type: "dayGrid",
      duration: { weeks: 1 }
    },
    dayGridMonth: {
      type: "dayGrid",
      duration: { months: 1 },
      fixedWeekCount: !0
    },
    dayGridYear: {
      type: "dayGrid",
      duration: { years: 1 }
    }
  }
});
class Du extends ka {
  getKeyInfo() {
    return {
      allDay: {},
      timed: {}
    };
  }
  getKeysForDateSpan(e) {
    return e.allDay ? ["allDay"] : ["timed"];
  }
  getKeysForEventDef(e) {
    return e.allDay ? ca(e) ? ["timed", "allDay"] : ["allDay"] : ["timed"];
  }
}
const Cu = O({
  hour: "numeric",
  minute: "2-digit",
  omitZeroMinute: !0,
  meridiem: "short"
});
function ws(t) {
  let e = [
    "fc-timegrid-slot",
    "fc-timegrid-slot-label",
    t.isLabeled ? "fc-scrollgrid-shrink" : "fc-timegrid-slot-minor"
  ];
  return g($.Consumer, null, (n) => {
    if (!t.isLabeled)
      return g("td", { className: e.join(" "), "data-time": t.isoTimeStr });
    let { dateEnv: r, options: i, viewApi: s } = n, l = i.slotLabelFormat == null ? Cu : Array.isArray(i.slotLabelFormat) ? O(i.slotLabelFormat[0]) : O(i.slotLabelFormat), o = {
      level: 0,
      time: t.time,
      date: r.toDate(t.date),
      view: s,
      text: r.format(t.date, l)
    };
    return g(z, { elTag: "td", elClasses: e, elAttrs: {
      "data-time": t.isoTimeStr
    }, renderProps: o, generatorName: "slotLabelContent", customGenerator: i.slotLabelContent, defaultGenerator: wu, classNameGenerator: i.slotLabelClassNames, didMount: i.slotLabelDidMount, willUnmount: i.slotLabelWillUnmount }, (a) => g(
      "div",
      { className: "fc-timegrid-slot-label-frame fc-scrollgrid-shrink-frame" },
      g(a, { elTag: "div", elClasses: [
        "fc-timegrid-slot-label-cushion",
        "fc-scrollgrid-shrink-cushion"
      ] })
    ));
  });
}
function wu(t) {
  return t.text;
}
class Ru extends T {
  render() {
    return this.props.slatMetas.map((e) => g(
      "tr",
      { key: e.key },
      g(ws, Object.assign({}, e))
    ));
  }
}
const _u = O({ week: "short" }), Tu = 5;
class xu extends G {
  constructor() {
    super(...arguments), this.allDaySplitter = new Du(), this.headerElRef = B(), this.rootElRef = B(), this.scrollerElRef = B(), this.state = {
      slatCoords: null
    }, this.handleScrollTopRequest = (e) => {
      let n = this.scrollerElRef.current;
      n && (n.scrollTop = e);
    }, this.renderHeadAxis = (e, n = "") => {
      let { options: r } = this.context, { dateProfile: i } = this.props, s = i.renderRange, o = pe(s.start, s.end) === 1 ? ut(this.context, s.start, "week") : {};
      return r.weekNumbers && e === "day" ? g(os, { elTag: "th", elClasses: [
        "fc-timegrid-axis",
        "fc-scrollgrid-shrink"
      ], elAttrs: {
        "aria-hidden": !0
      }, date: s.start, defaultFormat: _u }, (a) => g(
        "div",
        { className: [
          "fc-timegrid-axis-frame",
          "fc-scrollgrid-shrink-frame",
          "fc-timegrid-axis-frame-liquid"
        ].join(" "), style: { height: n } },
        g(a, { elTag: "a", elClasses: [
          "fc-timegrid-axis-cushion",
          "fc-scrollgrid-shrink-cushion",
          "fc-scrollgrid-sync-inner"
        ], elAttrs: o })
      )) : g(
        "th",
        { "aria-hidden": !0, className: "fc-timegrid-axis" },
        g("div", { className: "fc-timegrid-axis-frame", style: { height: n } })
      );
    }, this.renderTableRowAxis = (e) => {
      let { options: n, viewApi: r } = this.context, i = {
        text: n.allDayText,
        view: r
      };
      return g(z, { elTag: "td", elClasses: [
        "fc-timegrid-axis",
        "fc-scrollgrid-shrink"
      ], elAttrs: {
        "aria-hidden": !0
      }, renderProps: i, generatorName: "allDayContent", customGenerator: n.allDayContent, defaultGenerator: Mu, classNameGenerator: n.allDayClassNames, didMount: n.allDayDidMount, willUnmount: n.allDayWillUnmount }, (s) => g(
        "div",
        { className: [
          "fc-timegrid-axis-frame",
          "fc-scrollgrid-shrink-frame",
          e == null ? " fc-timegrid-axis-frame-liquid" : ""
        ].join(" "), style: { height: e } },
        g(s, { elTag: "span", elClasses: [
          "fc-timegrid-axis-cushion",
          "fc-scrollgrid-shrink-cushion",
          "fc-scrollgrid-sync-inner"
        ] })
      ));
    }, this.handleSlatCoords = (e) => {
      this.setState({ slatCoords: e });
    };
  }
  renderSimpleLayout(e, n, r) {
    let { context: i, props: s } = this, l = [], o = ft(i.options);
    return e && l.push({
      type: "header",
      key: "header",
      isSticky: o,
      chunk: {
        elRef: this.headerElRef,
        tableClassName: "fc-col-header",
        rowContent: e
      }
    }), n && (l.push({
      type: "body",
      key: "all-day",
      chunk: { content: n }
    }), l.push({
      type: "body",
      key: "all-day-divider",
      outerContent: g(
        "tr",
        { role: "presentation", className: "fc-scrollgrid-section" },
        g("td", { className: "fc-timegrid-divider " + i.theme.getClass("tableCellShaded") })
      )
    })), l.push({
      type: "body",
      key: "body",
      liquid: !0,
      expandRows: Boolean(i.options.expandRows),
      chunk: {
        scrollerElRef: this.scrollerElRef,
        content: r
      }
    }), g(
      ot,
      { elRef: this.rootElRef, elClasses: ["fc-timegrid"], viewSpec: i.viewSpec },
      g(_n, { liquid: !s.isHeightAuto && !s.forPrint, collapsibleWidth: s.forPrint, cols: [{ width: "shrink" }], sections: l })
    );
  }
  renderHScrollLayout(e, n, r, i, s, l, o) {
    let a = this.context.pluginHooks.scrollGridImpl;
    if (!a)
      throw new Error("No ScrollGrid implementation");
    let { context: d, props: c } = this, f = !c.forPrint && ft(d.options), h = !c.forPrint && rs(d.options), u = [];
    e && u.push({
      type: "header",
      key: "header",
      isSticky: f,
      syncRowHeights: !0,
      chunks: [
        {
          key: "axis",
          rowContent: (v) => g("tr", { role: "presentation" }, this.renderHeadAxis("day", v.rowSyncHeights[0]))
        },
        {
          key: "cols",
          elRef: this.headerElRef,
          tableClassName: "fc-col-header",
          rowContent: e
        }
      ]
    }), n && (u.push({
      type: "body",
      key: "all-day",
      syncRowHeights: !0,
      chunks: [
        {
          key: "axis",
          rowContent: (v) => g("tr", { role: "presentation" }, this.renderTableRowAxis(v.rowSyncHeights[0]))
        },
        {
          key: "cols",
          content: n
        }
      ]
    }), u.push({
      key: "all-day-divider",
      type: "body",
      outerContent: g(
        "tr",
        { role: "presentation", className: "fc-scrollgrid-section" },
        g("td", { colSpan: 2, className: "fc-timegrid-divider " + d.theme.getClass("tableCellShaded") })
      )
    }));
    let m = d.options.nowIndicator;
    return u.push({
      type: "body",
      key: "body",
      liquid: !0,
      expandRows: Boolean(d.options.expandRows),
      chunks: [
        {
          key: "axis",
          content: (v) => g(
            "div",
            { className: "fc-timegrid-axis-chunk" },
            g(
              "table",
              { "aria-hidden": !0, style: { height: v.expandRows ? v.clientHeight : "" } },
              v.tableColGroupNode,
              g(
                "tbody",
                null,
                g(Ru, { slatMetas: l })
              )
            ),
            g(
              "div",
              { className: "fc-timegrid-now-indicator-container" },
              g(He, { unit: m ? "minute" : "day" }, (b) => {
                let y = m && o && o.safeComputeTop(b);
                return typeof y == "number" ? g(xn, { elClasses: ["fc-timegrid-now-indicator-arrow"], elStyle: { top: y }, isAxis: !0, date: b }) : null;
              })
            )
          )
        },
        {
          key: "cols",
          scrollerElRef: this.scrollerElRef,
          content: r
        }
      ]
    }), h && u.push({
      key: "footer",
      type: "footer",
      isSticky: !0,
      chunks: [
        {
          key: "axis",
          content: Zt
        },
        {
          key: "cols",
          content: Zt
        }
      ]
    }), g(
      ot,
      { elRef: this.rootElRef, elClasses: ["fc-timegrid"], viewSpec: d.viewSpec },
      g(a, { liquid: !c.isHeightAuto && !c.forPrint, forPrint: c.forPrint, collapsibleWidth: !1, colGroups: [
        { width: "shrink", cols: [{ width: "shrink" }] },
        { cols: [{ span: i, minWidth: s }] }
      ], sections: u })
    );
  }
  getAllDayMaxEventProps() {
    let { dayMaxEvents: e, dayMaxEventRows: n } = this.context.options;
    return (e === !0 || n === !0) && (e = void 0, n = Tu), { dayMaxEvents: e, dayMaxEventRows: n };
  }
}
function Mu(t) {
  return t.text;
}
class Iu {
  constructor(e, n, r) {
    this.positions = e, this.dateProfile = n, this.slotDuration = r;
  }
  safeComputeTop(e) {
    let { dateProfile: n } = this;
    if (Q(n.currentRange, e)) {
      let r = M(e), i = e.valueOf() - r.valueOf();
      if (i >= F(n.slotMinTime) && i < F(n.slotMaxTime))
        return this.computeTimeTop(w(i));
    }
    return null;
  }
  computeDateTop(e, n) {
    return n || (n = M(e)), this.computeTimeTop(w(e.valueOf() - n.valueOf()));
  }
  computeTimeTop(e) {
    let { positions: n, dateProfile: r } = this, i = n.els.length, s = (e.milliseconds - F(r.slotMinTime)) / F(this.slotDuration), l, o;
    return s = Math.max(0, s), s = Math.min(i, s), l = Math.floor(s), l = Math.min(l, i - 1), o = s - l, n.tops[l] + n.getHeight(l) * o;
  }
}
class ku extends T {
  render() {
    let { props: e, context: n } = this, { options: r } = n, { slatElRefs: i } = e;
    return g("tbody", null, e.slatMetas.map((s, l) => {
      let o = {
        time: s.time,
        date: n.dateEnv.toDate(s.date),
        view: n.viewApi
      };
      return g(
        "tr",
        { key: s.key, ref: i.createRef(s.key) },
        e.axis && g(ws, Object.assign({}, s)),
        g(z, { elTag: "td", elClasses: [
          "fc-timegrid-slot",
          "fc-timegrid-slot-lane",
          !s.isLabeled && "fc-timegrid-slot-minor"
        ], elAttrs: {
          "data-time": s.isoTimeStr
        }, renderProps: o, generatorName: "slotLaneContent", customGenerator: r.slotLaneContent, classNameGenerator: r.slotLaneClassNames, didMount: r.slotLaneDidMount, willUnmount: r.slotLaneWillUnmount })
      );
    }));
  }
}
class Nu extends T {
  constructor() {
    super(...arguments), this.rootElRef = B(), this.slatElRefs = new q();
  }
  render() {
    let { props: e, context: n } = this;
    return g(
      "div",
      { ref: this.rootElRef, className: "fc-timegrid-slots" },
      g(
        "table",
        { "aria-hidden": !0, className: n.theme.getClass("table"), style: {
          minWidth: e.tableMinWidth,
          width: e.clientWidth,
          height: e.minHeight
        } },
        e.tableColGroupNode,
        g(ku, { slatElRefs: this.slatElRefs, axis: e.axis, slatMetas: e.slatMetas })
      )
    );
  }
  componentDidMount() {
    this.updateSizing();
  }
  componentDidUpdate() {
    this.updateSizing();
  }
  componentWillUnmount() {
    this.props.onCoords && this.props.onCoords(null);
  }
  updateSizing() {
    let { context: e, props: n } = this;
    n.onCoords && n.clientWidth !== null && this.rootElRef.current.offsetHeight && n.onCoords(new Iu(new Ce(this.rootElRef.current, Ou(this.slatElRefs.currentMap, n.slatMetas), !1, !0), this.props.dateProfile, e.options.slotDuration));
  }
}
function Ou(t, e) {
  return e.map((n) => t[n.key]);
}
function _e(t, e) {
  let n = [], r;
  for (r = 0; r < e; r += 1)
    n.push([]);
  if (t)
    for (r = 0; r < t.length; r += 1)
      n[t[r].col].push(t[r]);
  return n;
}
function Hr(t, e) {
  let n = [];
  if (t) {
    for (let r = 0; r < e; r += 1)
      n[r] = {
        affectedInstances: t.affectedInstances,
        isEvent: t.isEvent,
        segs: []
      };
    for (let r of t.segs)
      n[r.col].segs.push(r);
  } else
    for (let r = 0; r < e; r += 1)
      n[r] = null;
  return n;
}
class Pu extends T {
  render() {
    let { props: e } = this;
    return g(as, { elClasses: ["fc-timegrid-more-link"], elStyle: {
      top: e.top,
      bottom: e.bottom
    }, allDayDate: null, moreCnt: e.hiddenSegs.length, allSegs: e.hiddenSegs, hiddenSegs: e.hiddenSegs, extraDateSpan: e.extraDateSpan, dateProfile: e.dateProfile, todayRange: e.todayRange, popoverContent: () => _s(e.hiddenSegs, e), defaultGenerator: Hu, forceTimed: !0 }, (n) => g(n, { elTag: "div", elClasses: ["fc-timegrid-more-link-inner", "fc-sticky"] }));
  }
}
function Hu(t) {
  return t.shortText;
}
function Bu(t, e, n) {
  let r = new qi();
  e != null && (r.strictOrder = e), n != null && (r.maxStackCnt = n);
  let i = r.addSegs(t), s = Ga(i), l = Lu(r);
  return l = Fu(l, 1), { segRects: Wu(l), hiddenGroups: s };
}
function Lu(t) {
  const { entriesByLevel: e } = t, n = Nn((r, i) => r + ":" + i, (r, i) => {
    let s = zu(t, r, i), l = Br(s, n), o = e[r][i];
    return [
      Object.assign(Object.assign({}, o), { nextLevelNodes: l[0] }),
      o.thickness + l[1]
    ];
  });
  return Br(e.length ? { level: 0, lateralStart: 0, lateralEnd: e[0].length } : null, n)[0];
}
function Br(t, e) {
  if (!t)
    return [[], 0];
  let { level: n, lateralStart: r, lateralEnd: i } = t, s = r, l = [];
  for (; s < i; )
    l.push(e(n, s)), s += 1;
  return l.sort(ju), [
    l.map(Uu),
    l[0][1]
  ];
}
function ju(t, e) {
  return e[1] - t[1];
}
function Uu(t) {
  return t[0];
}
function zu(t, e, n) {
  let { levelCoords: r, entriesByLevel: i } = t, s = i[e][n], l = r[e] + s.thickness, o = r.length, a = e;
  for (; a < o && r[a] < l; a += 1)
    ;
  for (; a < o; a += 1) {
    let d = i[a], c, f = Yt(d, s.span.start, Qt), h = f[0] + f[1], u = h;
    for (; (c = d[u]) && c.span.start < s.span.end; )
      u += 1;
    if (h < u)
      return { level: a, lateralStart: h, lateralEnd: u };
  }
  return null;
}
function Fu(t, e) {
  const n = Nn((r, i, s) => de(r), (r, i, s) => {
    let { nextLevelNodes: l, thickness: o } = r, a = o + s, d = o / a, c, f = [];
    if (!l.length)
      c = e;
    else
      for (let u of l)
        if (c === void 0) {
          let m = n(u, i, a);
          c = m[0], f.push(m[1]);
        } else {
          let m = n(u, c, 0);
          f.push(m[1]);
        }
    let h = (c - i) * d;
    return [c - h, Object.assign(Object.assign({}, r), { thickness: h, nextLevelNodes: f })];
  });
  return t.map((r) => n(r, 0, 0)[1]);
}
function Wu(t) {
  let e = [];
  const n = Nn((i, s, l) => de(i), (i, s, l) => {
    let o = Object.assign(Object.assign({}, i), {
      levelCoord: s,
      stackDepth: l,
      stackForward: 0
    });
    return e.push(o), o.stackForward = r(i.nextLevelNodes, s + i.thickness, l + 1) + 1;
  });
  function r(i, s, l) {
    let o = 0;
    for (let a of i)
      o = Math.max(n(a, s, l), o);
    return o;
  }
  return r(t, 0, 0), e;
}
function Nn(t, e) {
  const n = {};
  return (...r) => {
    let i = t(...r);
    return i in n ? n[i] : n[i] = e(...r);
  };
}
function Lr(t, e, n = null, r = 0) {
  let i = [];
  if (n)
    for (let s = 0; s < t.length; s += 1) {
      let l = t[s], o = n.computeDateTop(l.start, e), a = Math.max(
        o + (r || 0),
        n.computeDateTop(l.end, e)
      );
      i.push({
        start: Math.round(o),
        end: Math.round(a)
      });
    }
  return i;
}
function Vu(t, e, n, r) {
  let i = [], s = [];
  for (let d = 0; d < t.length; d += 1) {
    let c = e[d];
    c ? i.push({
      index: d,
      thickness: 1,
      span: c
    }) : s.push(t[d]);
  }
  let { segRects: l, hiddenGroups: o } = Bu(i, n, r), a = [];
  for (let d of l)
    a.push({
      seg: t[d.index],
      rect: d
    });
  for (let d of s)
    a.push({ seg: d, rect: null });
  return { segPlacements: a, hiddenGroups: o };
}
const Gu = O({
  hour: "numeric",
  minute: "2-digit",
  meridiem: !1
});
class Rs extends T {
  render() {
    return g(is, Object.assign({}, this.props, { elClasses: [
      "fc-timegrid-event",
      "fc-v-event",
      this.props.isShort && "fc-timegrid-event-short"
    ], defaultTimeFormat: Gu }));
  }
}
class qu extends T {
  constructor() {
    super(...arguments), this.sortEventSegs = A(Pi);
  }
  render() {
    let { props: e, context: n } = this, { options: r } = n, i = r.selectMirror, s = e.eventDrag && e.eventDrag.segs || e.eventResize && e.eventResize.segs || i && e.dateSelectionSegs || [], l = e.eventDrag && e.eventDrag.affectedInstances || e.eventResize && e.eventResize.affectedInstances || {}, o = this.sortEventSegs(e.fgEventSegs, r.eventOrder);
    return g(Mn, { elTag: "td", elRef: e.elRef, elClasses: [
      "fc-timegrid-col",
      ...e.extraClassNames || []
    ], elAttrs: Object.assign({ role: "gridcell" }, e.extraDataAttrs), date: e.date, dateProfile: e.dateProfile, todayRange: e.todayRange, extraRenderProps: e.extraRenderProps }, (a) => g(
      "div",
      { className: "fc-timegrid-col-frame" },
      g(
        "div",
        { className: "fc-timegrid-col-bg" },
        this.renderFillSegs(e.businessHourSegs, "non-business"),
        this.renderFillSegs(e.bgEventSegs, "bg-event"),
        this.renderFillSegs(e.dateSelectionSegs, "highlight")
      ),
      g("div", { className: "fc-timegrid-col-events" }, this.renderFgSegs(o, l, !1, !1, !1)),
      g("div", { className: "fc-timegrid-col-events" }, this.renderFgSegs(s, {}, Boolean(e.eventDrag), Boolean(e.eventResize), Boolean(i), "mirror")),
      g("div", { className: "fc-timegrid-now-indicator-container" }, this.renderNowIndicator(e.nowIndicatorSegs)),
      In(r) && g(a, { elTag: "div", elClasses: ["fc-timegrid-col-misc"] })
    ));
  }
  renderFgSegs(e, n, r, i, s, l) {
    let { props: o } = this;
    return o.forPrint ? _s(e, o) : this.renderPositionedFgSegs(e, n, r, i, s, l);
  }
  renderPositionedFgSegs(e, n, r, i, s, l) {
    let { eventMaxStack: o, eventShortHeight: a, eventOrderStrict: d, eventMinHeight: c } = this.context.options, { date: f, slatCoords: h, eventSelection: u, todayRange: m, nowDate: v } = this.props, b = r || i || s, y = Lr(e, f, h, c), { segPlacements: E, hiddenGroups: C } = Vu(e, y, d, o);
    return g(
      I,
      null,
      this.renderHiddenGroups(C, e),
      E.map((D) => {
        let { seg: x, rect: _ } = D, k = x.eventRange.instance.instanceId, R = b || Boolean(!n[k] && _), J = Bt(_ && _.span), Re = !b && _ ? this.computeSegHStyle(_) : { left: 0, right: 0 }, Ns = Boolean(_) && _.stackForward > 0, Os = Boolean(_) && _.span.end - _.span.start < a;
        return g(
          "div",
          { className: "fc-timegrid-event-harness" + (Ns ? " fc-timegrid-event-harness-inset" : ""), key: l || k, style: Object.assign(Object.assign({ visibility: R ? "" : "hidden" }, J), Re) },
          g(Rs, Object.assign({ seg: x, isDragging: r, isResizing: i, isDateSelecting: s, isSelected: k === u, isShort: Os }, ne(x, m, v)))
        );
      })
    );
  }
  renderHiddenGroups(e, n) {
    let { extraDateSpan: r, dateProfile: i, todayRange: s, nowDate: l, eventSelection: o, eventDrag: a, eventResize: d } = this.props;
    return g(I, null, e.map((c) => {
      let f = Bt(c.span), h = Qu(c.entries, n);
      return g(Pu, { key: hi(cs(h)), hiddenSegs: h, top: f.top, bottom: f.bottom, extraDateSpan: r, dateProfile: i, todayRange: s, nowDate: l, eventSelection: o, eventDrag: a, eventResize: d });
    }));
  }
  renderFillSegs(e, n) {
    let { props: r, context: i } = this, l = Lr(e, r.date, r.slatCoords, i.options.eventMinHeight).map((o, a) => {
      let d = e[a];
      return g("div", { key: Bi(d.eventRange), className: "fc-timegrid-bg-harness", style: Bt(o) }, n === "bg-event" ? g(ss, Object.assign({ seg: d }, ne(d, r.todayRange, r.nowDate))) : ls(n));
    });
    return g(I, null, l);
  }
  renderNowIndicator(e) {
    let { slatCoords: n, date: r } = this.props;
    return n ? e.map((i, s) => g(
      xn,
      {
        key: s,
        elClasses: ["fc-timegrid-now-indicator-line"],
        elStyle: {
          top: n.computeDateTop(i.start, r)
        },
        isAxis: !1,
        date: r
      }
    )) : null;
  }
  computeSegHStyle(e) {
    let { isRtl: n, options: r } = this.context, i = r.slotEventOverlap, s = e.levelCoord, l = e.levelCoord + e.thickness, o, a;
    i && (l = Math.min(1, s + (l - s) * 2)), n ? (o = 1 - l, a = s) : (o = s, a = 1 - l);
    let d = {
      zIndex: e.stackDepth + 1,
      left: o * 100 + "%",
      right: a * 100 + "%"
    };
    return i && !e.stackForward && (d[n ? "marginLeft" : "marginRight"] = 10 * 2), d;
  }
}
function _s(t, { todayRange: e, nowDate: n, eventSelection: r, eventDrag: i, eventResize: s }) {
  let l = (i ? i.affectedInstances : null) || (s ? s.affectedInstances : null) || {};
  return g(I, null, t.map((o) => {
    let a = o.eventRange.instance.instanceId;
    return g(
      "div",
      { key: a, style: { visibility: l[a] ? "hidden" : "" } },
      g(Rs, Object.assign({ seg: o, isDragging: !1, isResizing: !1, isDateSelecting: !1, isSelected: a === r, isShort: !1 }, ne(o, e, n)))
    );
  }));
}
function Bt(t) {
  return t ? {
    top: t.start,
    bottom: -t.end
  } : { top: "", bottom: "" };
}
function Qu(t, e) {
  return t.map((n) => e[n.index]);
}
class Yu extends T {
  constructor() {
    super(...arguments), this.splitFgEventSegs = A(_e), this.splitBgEventSegs = A(_e), this.splitBusinessHourSegs = A(_e), this.splitNowIndicatorSegs = A(_e), this.splitDateSelectionSegs = A(_e), this.splitEventDrag = A(Hr), this.splitEventResize = A(Hr), this.rootElRef = B(), this.cellElRefs = new q();
  }
  render() {
    let { props: e, context: n } = this, r = n.options.nowIndicator && e.slatCoords && e.slatCoords.safeComputeTop(e.nowDate), i = e.cells.length, s = this.splitFgEventSegs(e.fgEventSegs, i), l = this.splitBgEventSegs(e.bgEventSegs, i), o = this.splitBusinessHourSegs(e.businessHourSegs, i), a = this.splitNowIndicatorSegs(e.nowIndicatorSegs, i), d = this.splitDateSelectionSegs(e.dateSelectionSegs, i), c = this.splitEventDrag(e.eventDrag, i), f = this.splitEventResize(e.eventResize, i);
    return g(
      "div",
      { className: "fc-timegrid-cols", ref: this.rootElRef },
      g(
        "table",
        { role: "presentation", style: {
          minWidth: e.tableMinWidth,
          width: e.clientWidth
        } },
        e.tableColGroupNode,
        g(
          "tbody",
          { role: "presentation" },
          g(
            "tr",
            { role: "row" },
            e.axis && g(
              "td",
              { "aria-hidden": !0, className: "fc-timegrid-col fc-timegrid-axis" },
              g(
                "div",
                { className: "fc-timegrid-col-frame" },
                g("div", { className: "fc-timegrid-now-indicator-container" }, typeof r == "number" && g(xn, { elClasses: ["fc-timegrid-now-indicator-arrow"], elStyle: { top: r }, isAxis: !0, date: e.nowDate }))
              )
            ),
            e.cells.map((h, u) => g(qu, { key: h.key, elRef: this.cellElRefs.createRef(h.key), dateProfile: e.dateProfile, date: h.date, nowDate: e.nowDate, todayRange: e.todayRange, extraRenderProps: h.extraRenderProps, extraDataAttrs: h.extraDataAttrs, extraClassNames: h.extraClassNames, extraDateSpan: h.extraDateSpan, fgEventSegs: s[u], bgEventSegs: l[u], businessHourSegs: o[u], nowIndicatorSegs: a[u], dateSelectionSegs: d[u], eventDrag: c[u], eventResize: f[u], slatCoords: e.slatCoords, eventSelection: e.eventSelection, forPrint: e.forPrint }))
          )
        )
      )
    );
  }
  componentDidMount() {
    this.updateCoords();
  }
  componentDidUpdate() {
    this.updateCoords();
  }
  updateCoords() {
    let { props: e } = this;
    e.onColCoords && e.clientWidth !== null && e.onColCoords(new Ce(
      this.rootElRef.current,
      Zu(this.cellElRefs.currentMap, e.cells),
      !0,
      !1
    ));
  }
}
function Zu(t, e) {
  return e.map((n) => t[n.key]);
}
class $u extends G {
  constructor() {
    super(...arguments), this.processSlotOptions = A(Xu), this.state = {
      slatCoords: null
    }, this.handleRootEl = (e) => {
      e ? this.context.registerInteractiveComponent(this, {
        el: e,
        isHitComboAllowed: this.props.isHitComboAllowed
      }) : this.context.unregisterInteractiveComponent(this);
    }, this.handleScrollRequest = (e) => {
      let { onScrollTopRequest: n } = this.props, { slatCoords: r } = this.state;
      if (n && r) {
        if (e.time) {
          let i = r.computeTimeTop(e.time);
          i = Math.ceil(i), i && (i += 1), n(i);
        }
        return !0;
      }
      return !1;
    }, this.handleColCoords = (e) => {
      this.colCoords = e;
    }, this.handleSlatCoords = (e) => {
      this.setState({ slatCoords: e }), this.props.onSlatCoords && this.props.onSlatCoords(e);
    };
  }
  render() {
    let { props: e, state: n } = this;
    return g(
      "div",
      { className: "fc-timegrid-body", ref: this.handleRootEl, style: {
        width: e.clientWidth,
        minWidth: e.tableMinWidth
      } },
      g(Nu, { axis: e.axis, dateProfile: e.dateProfile, slatMetas: e.slatMetas, clientWidth: e.clientWidth, minHeight: e.expandRows ? e.clientHeight : "", tableMinWidth: e.tableMinWidth, tableColGroupNode: e.axis ? e.tableColGroupNode : null, onCoords: this.handleSlatCoords }),
      g(Yu, { cells: e.cells, axis: e.axis, dateProfile: e.dateProfile, businessHourSegs: e.businessHourSegs, bgEventSegs: e.bgEventSegs, fgEventSegs: e.fgEventSegs, dateSelectionSegs: e.dateSelectionSegs, eventSelection: e.eventSelection, eventDrag: e.eventDrag, eventResize: e.eventResize, todayRange: e.todayRange, nowDate: e.nowDate, nowIndicatorSegs: e.nowIndicatorSegs, clientWidth: e.clientWidth, tableMinWidth: e.tableMinWidth, tableColGroupNode: e.tableColGroupNode, slatCoords: n.slatCoords, onColCoords: this.handleColCoords, forPrint: e.forPrint })
    );
  }
  componentDidMount() {
    this.scrollResponder = this.context.createScrollResponder(this.handleScrollRequest);
  }
  componentDidUpdate(e) {
    this.scrollResponder.update(e.dateProfile !== this.props.dateProfile);
  }
  componentWillUnmount() {
    this.scrollResponder.detach();
  }
  queryHit(e, n) {
    let { dateEnv: r, options: i } = this.context, { colCoords: s } = this, { dateProfile: l } = this.props, { slatCoords: o } = this.state, { snapDuration: a, snapsPerSlot: d } = this.processSlotOptions(this.props.slotDuration, i.snapDuration), c = s.leftToIndex(e), f = o.positions.topToIndex(n);
    if (c != null && f != null) {
      let h = this.props.cells[c], u = o.positions.tops[f], m = o.positions.getHeight(f), v = (n - u) / m, b = Math.floor(v * d), y = f * d + b, E = this.props.cells[c].date, C = zt(l.slotMinTime, Nl(a, y)), D = r.add(E, C), x = r.add(D, a);
      return {
        dateProfile: l,
        dateSpan: Object.assign({ range: { start: D, end: x }, allDay: !1 }, h.extraDateSpan),
        dayEl: s.els[c],
        rect: {
          left: s.lefts[c],
          right: s.rights[c],
          top: u,
          bottom: u + m
        },
        layer: 0
      };
    }
    return null;
  }
}
function Xu(t, e) {
  let n = e || t, r = on(t, n);
  return r === null && (n = t, r = 1), { snapDuration: n, snapsPerSlot: r };
}
class Ju extends Ji {
  sliceRange(e, n) {
    let r = [];
    for (let i = 0; i < n.length; i += 1) {
      let s = fe(e, n[i]);
      s && r.push({
        start: s.start,
        end: s.end,
        isStart: s.start.valueOf() === e.start.valueOf(),
        isEnd: s.end.valueOf() === e.end.valueOf(),
        col: i
      });
    }
    return r;
  }
}
class Ku extends G {
  constructor() {
    super(...arguments), this.buildDayRanges = A(ef), this.slicer = new Ju(), this.timeColsRef = B();
  }
  render() {
    let { props: e, context: n } = this, { dateProfile: r, dayTableModel: i } = e, { nowIndicator: s, nextDayThreshold: l } = n.options, o = this.buildDayRanges(i, r, n.dateEnv);
    return g(He, { unit: s ? "minute" : "day" }, (a, d) => g($u, Object.assign({ ref: this.timeColsRef }, this.slicer.sliceProps(e, r, null, n, o), { forPrint: e.forPrint, axis: e.axis, dateProfile: r, slatMetas: e.slatMetas, slotDuration: e.slotDuration, cells: i.cells[0], tableColGroupNode: e.tableColGroupNode, tableMinWidth: e.tableMinWidth, clientWidth: e.clientWidth, clientHeight: e.clientHeight, expandRows: e.expandRows, nowDate: a, nowIndicatorSegs: s && this.slicer.sliceNowDate(a, r, l, n, o), todayRange: d, onScrollTopRequest: e.onScrollTopRequest, onSlatCoords: e.onSlatCoords })));
  }
}
function ef(t, e, n) {
  let r = [];
  for (let i of t.headerDates)
    r.push({
      start: n.add(i, e.slotMinTime),
      end: n.add(i, e.slotMaxTime)
    });
  return r;
}
const jr = [
  { hours: 1 },
  { minutes: 30 },
  { minutes: 15 },
  { seconds: 30 },
  { seconds: 15 }
];
function tf(t, e, n, r, i) {
  let s = new Date(0), l = t, o = w(0), a = n || nf(r), d = [];
  for (; F(l) < F(e); ) {
    let c = i.add(s, l), f = on(o, a) !== null;
    d.push({
      date: c,
      time: l,
      key: c.toISOString(),
      isoTimeStr: Zl(c),
      isLabeled: f
    }), l = zt(l, r), o = zt(o, r);
  }
  return d;
}
function nf(t) {
  let e, n, r;
  for (e = jr.length - 1; e >= 0; e -= 1)
    if (n = w(jr[e]), r = on(n, t), r !== null && r > 1)
      return n;
  return t;
}
class rf extends xu {
  constructor() {
    super(...arguments), this.buildTimeColsModel = A(sf), this.buildSlatMetas = A(tf);
  }
  render() {
    let { options: e, dateEnv: n, dateProfileGenerator: r } = this.context, { props: i } = this, { dateProfile: s } = i, l = this.buildTimeColsModel(s, r), o = this.allDaySplitter.splitProps(i), a = this.buildSlatMetas(s.slotMinTime, s.slotMaxTime, e.slotLabelInterval, e.slotDuration, n), { dayMinWidth: d } = e, c = !d, f = d, h = e.dayHeaders && g(Zi, { dates: l.headerDates, dateProfile: s, datesRepDistinctDays: !0, renderIntro: c ? this.renderHeadAxis : null }), u = e.allDaySlot !== !1 && ((v) => g(Cs, Object.assign({}, o.allDay, { dateProfile: s, dayTableModel: l, nextDayThreshold: e.nextDayThreshold, tableMinWidth: v.tableMinWidth, colGroupNode: v.tableColGroupNode, renderRowIntro: c ? this.renderTableRowAxis : null, showWeekNumbers: !1, expandRows: !1, headerAlignElRef: this.headerElRef, clientWidth: v.clientWidth, clientHeight: v.clientHeight, forPrint: i.forPrint }, this.getAllDayMaxEventProps()))), m = (v) => g(Ku, Object.assign({}, o.timed, { dayTableModel: l, dateProfile: s, axis: c, slotDuration: e.slotDuration, slatMetas: a, forPrint: i.forPrint, tableColGroupNode: v.tableColGroupNode, tableMinWidth: v.tableMinWidth, clientWidth: v.clientWidth, clientHeight: v.clientHeight, onSlatCoords: this.handleSlatCoords, expandRows: v.expandRows, onScrollTopRequest: this.handleScrollTopRequest }));
    return f ? this.renderHScrollLayout(h, u, m, l.colCnt, d, a, this.state.slatCoords) : this.renderSimpleLayout(h, u, m);
  }
}
function sf(t, e) {
  let n = new $i(t.renderRange, e);
  return new Xi(n, !1);
}
var lf = '.fc-v-event{background-color:var(--fc-event-bg-color);border:1px solid var(--fc-event-border-color);display:block}.fc-v-event .fc-event-main{color:var(--fc-event-text-color);height:100%}.fc-v-event .fc-event-main-frame{display:flex;flex-direction:column;height:100%}.fc-v-event .fc-event-time{flex-grow:0;flex-shrink:0;max-height:100%;overflow:hidden}.fc-v-event .fc-event-title-container{flex-grow:1;flex-shrink:1;min-height:0}.fc-v-event .fc-event-title{bottom:0;max-height:100%;overflow:hidden;top:0}.fc-v-event:not(.fc-event-start){border-top-left-radius:0;border-top-right-radius:0;border-top-width:0}.fc-v-event:not(.fc-event-end){border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-width:0}.fc-v-event.fc-event-selected:before{left:-10px;right:-10px}.fc-v-event .fc-event-resizer-start{cursor:n-resize}.fc-v-event .fc-event-resizer-end{cursor:s-resize}.fc-v-event:not(.fc-event-selected) .fc-event-resizer{height:var(--fc-event-resizer-thickness);left:0;right:0}.fc-v-event:not(.fc-event-selected) .fc-event-resizer-start{top:calc(var(--fc-event-resizer-thickness)/-2)}.fc-v-event:not(.fc-event-selected) .fc-event-resizer-end{bottom:calc(var(--fc-event-resizer-thickness)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer{left:50%;margin-left:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer-start{top:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer-end{bottom:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc .fc-timegrid .fc-daygrid-body{z-index:2}.fc .fc-timegrid-divider{padding:0 0 2px}.fc .fc-timegrid-body{min-height:100%;position:relative;z-index:1}.fc .fc-timegrid-axis-chunk{position:relative}.fc .fc-timegrid-axis-chunk>table,.fc .fc-timegrid-slots{position:relative;z-index:1}.fc .fc-timegrid-slot{border-bottom:0;height:1.5em}.fc .fc-timegrid-slot:empty:before{content:"\\00a0"}.fc .fc-timegrid-slot-minor{border-top-style:dotted}.fc .fc-timegrid-slot-label-cushion{display:inline-block;white-space:nowrap}.fc .fc-timegrid-slot-label{vertical-align:middle}.fc .fc-timegrid-axis-cushion,.fc .fc-timegrid-slot-label-cushion{padding:0 4px}.fc .fc-timegrid-axis-frame-liquid{height:100%}.fc .fc-timegrid-axis-frame{align-items:center;display:flex;justify-content:flex-end;overflow:hidden}.fc .fc-timegrid-axis-cushion{flex-shrink:0;max-width:60px}.fc-direction-ltr .fc-timegrid-slot-label-frame{text-align:right}.fc-direction-rtl .fc-timegrid-slot-label-frame{text-align:left}.fc-liquid-hack .fc-timegrid-axis-frame-liquid{bottom:0;height:auto;left:0;position:absolute;right:0;top:0}.fc .fc-timegrid-col.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-timegrid-col-frame{min-height:100%;position:relative}.fc-media-screen.fc-liquid-hack .fc-timegrid-col-frame{bottom:0;height:auto;left:0;position:absolute;right:0;top:0}.fc-media-screen .fc-timegrid-cols{bottom:0;left:0;position:absolute;right:0;top:0}.fc-media-screen .fc-timegrid-cols>table{height:100%}.fc-media-screen .fc-timegrid-col-bg,.fc-media-screen .fc-timegrid-col-events,.fc-media-screen .fc-timegrid-now-indicator-container{left:0;position:absolute;right:0;top:0}.fc .fc-timegrid-col-bg{z-index:2}.fc .fc-timegrid-col-bg .fc-non-business{z-index:1}.fc .fc-timegrid-col-bg .fc-bg-event{z-index:2}.fc .fc-timegrid-col-bg .fc-highlight{z-index:3}.fc .fc-timegrid-bg-harness{left:0;position:absolute;right:0}.fc .fc-timegrid-col-events{z-index:3}.fc .fc-timegrid-now-indicator-container{bottom:0;overflow:hidden}.fc-direction-ltr .fc-timegrid-col-events{margin:0 2.5% 0 2px}.fc-direction-rtl .fc-timegrid-col-events{margin:0 2px 0 2.5%}.fc-timegrid-event-harness{position:absolute}.fc-timegrid-event-harness>.fc-timegrid-event{bottom:0;left:0;position:absolute;right:0;top:0}.fc-timegrid-event-harness-inset .fc-timegrid-event,.fc-timegrid-event.fc-event-mirror,.fc-timegrid-more-link{box-shadow:0 0 0 1px var(--fc-page-bg-color)}.fc-timegrid-event,.fc-timegrid-more-link{border-radius:3px;font-size:var(--fc-small-font-size)}.fc-timegrid-event{margin-bottom:1px}.fc-timegrid-event .fc-event-main{padding:1px 1px 0}.fc-timegrid-event .fc-event-time{font-size:var(--fc-small-font-size);margin-bottom:1px;white-space:nowrap}.fc-timegrid-event-short .fc-event-main-frame{flex-direction:row;overflow:hidden}.fc-timegrid-event-short .fc-event-time:after{content:"\\00a0-\\00a0"}.fc-timegrid-event-short .fc-event-title{font-size:var(--fc-small-font-size)}.fc-timegrid-more-link{background:var(--fc-more-link-bg-color);color:var(--fc-more-link-text-color);cursor:pointer;margin-bottom:1px;position:absolute;z-index:9999}.fc-timegrid-more-link-inner{padding:3px 2px;top:0}.fc-direction-ltr .fc-timegrid-more-link{right:0}.fc-direction-rtl .fc-timegrid-more-link{left:0}.fc .fc-timegrid-now-indicator-line{border-color:var(--fc-now-indicator-color);border-style:solid;border-width:1px 0 0;left:0;position:absolute;right:0;z-index:4}.fc .fc-timegrid-now-indicator-arrow{border-color:var(--fc-now-indicator-color);border-style:solid;margin-top:-5px;position:absolute;z-index:4}.fc-direction-ltr .fc-timegrid-now-indicator-arrow{border-bottom-color:transparent;border-top-color:transparent;border-width:5px 0 5px 6px;left:0}.fc-direction-rtl .fc-timegrid-now-indicator-arrow{border-bottom-color:transparent;border-top-color:transparent;border-width:5px 6px 5px 0;right:0}';
tn(lf);
const of = {
  allDaySlot: Boolean
};
var af = X({
  name: "@fullcalendar/timegrid",
  initialView: "timeGridWeek",
  optionRefiners: of,
  views: {
    timeGrid: {
      component: rf,
      usesMinMaxTime: !0,
      allDaySlot: !0,
      slotDuration: "00:30:00",
      slotEventOverlap: !0
    },
    timeGridDay: {
      type: "timeGrid",
      duration: { days: 1 }
    },
    timeGridWeek: {
      type: "timeGrid",
      duration: { weeks: 1 }
    }
  }
});
Rn.touchMouseIgnoreWait = 500;
let Xt = 0, ht = 0, Jt = !1;
class Ts {
  constructor(e) {
    this.subjectEl = null, this.selector = "", this.handleSelector = "", this.shouldIgnoreMove = !1, this.shouldWatchScroll = !0, this.isDragging = !1, this.isTouchDragging = !1, this.wasTouchScroll = !1, this.handleMouseDown = (n) => {
      if (!this.shouldIgnoreMouse() && cf(n) && this.tryStart(n)) {
        let r = this.createEventFromMouse(n, !0);
        this.emitter.trigger("pointerdown", r), this.initScrollWatch(r), this.shouldIgnoreMove || document.addEventListener("mousemove", this.handleMouseMove), document.addEventListener("mouseup", this.handleMouseUp);
      }
    }, this.handleMouseMove = (n) => {
      let r = this.createEventFromMouse(n);
      this.recordCoords(r), this.emitter.trigger("pointermove", r);
    }, this.handleMouseUp = (n) => {
      document.removeEventListener("mousemove", this.handleMouseMove), document.removeEventListener("mouseup", this.handleMouseUp), this.emitter.trigger("pointerup", this.createEventFromMouse(n)), this.cleanup();
    }, this.handleTouchStart = (n) => {
      if (this.tryStart(n)) {
        this.isTouchDragging = !0;
        let r = this.createEventFromTouch(n, !0);
        this.emitter.trigger("pointerdown", r), this.initScrollWatch(r);
        let i = n.target;
        this.shouldIgnoreMove || i.addEventListener("touchmove", this.handleTouchMove), i.addEventListener("touchend", this.handleTouchEnd), i.addEventListener("touchcancel", this.handleTouchEnd), window.addEventListener("scroll", this.handleTouchScroll, !0);
      }
    }, this.handleTouchMove = (n) => {
      let r = this.createEventFromTouch(n);
      this.recordCoords(r), this.emitter.trigger("pointermove", r);
    }, this.handleTouchEnd = (n) => {
      if (this.isDragging) {
        let r = n.target;
        r.removeEventListener("touchmove", this.handleTouchMove), r.removeEventListener("touchend", this.handleTouchEnd), r.removeEventListener("touchcancel", this.handleTouchEnd), window.removeEventListener("scroll", this.handleTouchScroll, !0), this.emitter.trigger("pointerup", this.createEventFromTouch(n)), this.cleanup(), this.isTouchDragging = !1, df();
      }
    }, this.handleTouchScroll = () => {
      this.wasTouchScroll = !0;
    }, this.handleScroll = (n) => {
      if (!this.shouldIgnoreMove) {
        let r = window.pageXOffset - this.prevScrollX + this.prevPageX, i = window.pageYOffset - this.prevScrollY + this.prevPageY;
        this.emitter.trigger("pointermove", {
          origEvent: n,
          isTouch: this.isTouchDragging,
          subjectEl: this.subjectEl,
          pageX: r,
          pageY: i,
          deltaX: r - this.origPageX,
          deltaY: i - this.origPageY
        });
      }
    }, this.containerEl = e, this.emitter = new yt(), e.addEventListener("mousedown", this.handleMouseDown), e.addEventListener("touchstart", this.handleTouchStart, { passive: !0 }), uf();
  }
  destroy() {
    this.containerEl.removeEventListener("mousedown", this.handleMouseDown), this.containerEl.removeEventListener("touchstart", this.handleTouchStart, { passive: !0 }), ff();
  }
  tryStart(e) {
    let n = this.querySubjectEl(e), r = e.target;
    return n && (!this.handleSelector || P(r, this.handleSelector)) ? (this.subjectEl = n, this.isDragging = !0, this.wasTouchScroll = !1, !0) : !1;
  }
  cleanup() {
    Jt = !1, this.isDragging = !1, this.subjectEl = null, this.destroyScrollWatch();
  }
  querySubjectEl(e) {
    return this.selector ? P(e.target, this.selector) : this.containerEl;
  }
  shouldIgnoreMouse() {
    return Xt || this.isTouchDragging;
  }
  cancelTouchScroll() {
    this.isDragging && (Jt = !0);
  }
  initScrollWatch(e) {
    this.shouldWatchScroll && (this.recordCoords(e), window.addEventListener("scroll", this.handleScroll, !0));
  }
  recordCoords(e) {
    this.shouldWatchScroll && (this.prevPageX = e.pageX, this.prevPageY = e.pageY, this.prevScrollX = window.pageXOffset, this.prevScrollY = window.pageYOffset);
  }
  destroyScrollWatch() {
    this.shouldWatchScroll && window.removeEventListener("scroll", this.handleScroll, !0);
  }
  createEventFromMouse(e, n) {
    let r = 0, i = 0;
    return n ? (this.origPageX = e.pageX, this.origPageY = e.pageY) : (r = e.pageX - this.origPageX, i = e.pageY - this.origPageY), {
      origEvent: e,
      isTouch: !1,
      subjectEl: this.subjectEl,
      pageX: e.pageX,
      pageY: e.pageY,
      deltaX: r,
      deltaY: i
    };
  }
  createEventFromTouch(e, n) {
    let r = e.touches, i, s, l = 0, o = 0;
    return r && r.length ? (i = r[0].pageX, s = r[0].pageY) : (i = e.pageX, s = e.pageY), n ? (this.origPageX = i, this.origPageY = s) : (l = i - this.origPageX, o = s - this.origPageY), {
      origEvent: e,
      isTouch: !0,
      subjectEl: this.subjectEl,
      pageX: i,
      pageY: s,
      deltaX: l,
      deltaY: o
    };
  }
}
function cf(t) {
  return t.button === 0 && !t.ctrlKey;
}
function df() {
  Xt += 1, setTimeout(() => {
    Xt -= 1;
  }, Rn.touchMouseIgnoreWait);
}
function uf() {
  ht += 1, ht === 1 && window.addEventListener("touchmove", xs, { passive: !1 });
}
function ff() {
  ht -= 1, ht || window.removeEventListener("touchmove", xs, { passive: !1 });
}
function xs(t) {
  Jt && t.preventDefault();
}
class hf {
  constructor() {
    this.isVisible = !1, this.sourceEl = null, this.mirrorEl = null, this.sourceElRect = null, this.parentNode = document.body, this.zIndex = 9999, this.revertDuration = 0;
  }
  start(e, n, r) {
    this.sourceEl = e, this.sourceElRect = this.sourceEl.getBoundingClientRect(), this.origScreenX = n - window.pageXOffset, this.origScreenY = r - window.pageYOffset, this.deltaX = 0, this.deltaY = 0, this.updateElPosition();
  }
  handleMove(e, n) {
    this.deltaX = e - window.pageXOffset - this.origScreenX, this.deltaY = n - window.pageYOffset - this.origScreenY, this.updateElPosition();
  }
  setIsVisible(e) {
    e ? this.isVisible || (this.mirrorEl && (this.mirrorEl.style.display = ""), this.isVisible = e, this.updateElPosition()) : this.isVisible && (this.mirrorEl && (this.mirrorEl.style.display = "none"), this.isVisible = e);
  }
  stop(e, n) {
    let r = () => {
      this.cleanup(), n();
    };
    e && this.mirrorEl && this.isVisible && this.revertDuration && (this.deltaX || this.deltaY) ? this.doRevertAnimation(r, this.revertDuration) : setTimeout(r, 0);
  }
  doRevertAnimation(e, n) {
    let r = this.mirrorEl, i = this.sourceEl.getBoundingClientRect();
    r.style.transition = "top " + n + "ms,left " + n + "ms", Te(r, {
      left: i.left,
      top: i.top
    }), bl(r, () => {
      r.style.transition = "", e();
    });
  }
  cleanup() {
    this.mirrorEl && (rn(this.mirrorEl), this.mirrorEl = null), this.sourceEl = null;
  }
  updateElPosition() {
    this.sourceEl && this.isVisible && Te(this.getMirrorEl(), {
      left: this.sourceElRect.left + this.deltaX,
      top: this.sourceElRect.top + this.deltaY
    });
  }
  getMirrorEl() {
    let e = this.sourceElRect, n = this.mirrorEl;
    return n || (n = this.mirrorEl = this.sourceEl.cloneNode(!0), n.style.userSelect = "none", n.classList.add("fc-event-dragging"), Te(n, {
      position: "fixed",
      zIndex: this.zIndex,
      visibility: "",
      boxSizing: "border-box",
      width: e.right - e.left,
      height: e.bottom - e.top,
      right: "auto",
      bottom: "auto",
      margin: 0
    }), this.parentNode.appendChild(n)), n;
  }
}
class Ms extends Cn {
  constructor(e, n) {
    super(), this.handleScroll = () => {
      this.scrollTop = this.scrollController.getScrollTop(), this.scrollLeft = this.scrollController.getScrollLeft(), this.handleScrollChange();
    }, this.scrollController = e, this.doesListening = n, this.scrollTop = this.origScrollTop = e.getScrollTop(), this.scrollLeft = this.origScrollLeft = e.getScrollLeft(), this.scrollWidth = e.getScrollWidth(), this.scrollHeight = e.getScrollHeight(), this.clientWidth = e.getClientWidth(), this.clientHeight = e.getClientHeight(), this.clientRect = this.computeClientRect(), this.doesListening && this.getEventTarget().addEventListener("scroll", this.handleScroll);
  }
  destroy() {
    this.doesListening && this.getEventTarget().removeEventListener("scroll", this.handleScroll);
  }
  getScrollTop() {
    return this.scrollTop;
  }
  getScrollLeft() {
    return this.scrollLeft;
  }
  setScrollTop(e) {
    this.scrollController.setScrollTop(e), this.doesListening || (this.scrollTop = Math.max(Math.min(e, this.getMaxScrollTop()), 0), this.handleScrollChange());
  }
  setScrollLeft(e) {
    this.scrollController.setScrollLeft(e), this.doesListening || (this.scrollLeft = Math.max(Math.min(e, this.getMaxScrollLeft()), 0), this.handleScrollChange());
  }
  getClientWidth() {
    return this.clientWidth;
  }
  getClientHeight() {
    return this.clientHeight;
  }
  getScrollWidth() {
    return this.scrollWidth;
  }
  getScrollHeight() {
    return this.scrollHeight;
  }
  handleScrollChange() {
  }
}
class Is extends Ms {
  constructor(e, n) {
    super(new Wa(e), n);
  }
  getEventTarget() {
    return this.scrollController.el;
  }
  computeClientRect() {
    return za(this.scrollController.el);
  }
}
class gf extends Ms {
  constructor(e) {
    super(new Va(), e);
  }
  getEventTarget() {
    return window;
  }
  computeClientRect() {
    return {
      left: this.scrollLeft,
      right: this.scrollLeft + this.clientWidth,
      top: this.scrollTop,
      bottom: this.scrollTop + this.clientHeight
    };
  }
  handleScrollChange() {
    this.clientRect = this.computeClientRect();
  }
}
const Ur = typeof performance == "function" ? performance.now : Date.now;
class pf {
  constructor() {
    this.isEnabled = !0, this.scrollQuery = [window, ".fc-scroller"], this.edgeThreshold = 50, this.maxVelocity = 300, this.pointerScreenX = null, this.pointerScreenY = null, this.isAnimating = !1, this.scrollCaches = null, this.everMovedUp = !1, this.everMovedDown = !1, this.everMovedLeft = !1, this.everMovedRight = !1, this.animate = () => {
      if (this.isAnimating) {
        let e = this.computeBestEdge(this.pointerScreenX + window.pageXOffset, this.pointerScreenY + window.pageYOffset);
        if (e) {
          let n = Ur();
          this.handleSide(e, (n - this.msSinceRequest) / 1e3), this.requestAnimation(n);
        } else
          this.isAnimating = !1;
      }
    };
  }
  start(e, n, r) {
    this.isEnabled && (this.scrollCaches = this.buildCaches(r), this.pointerScreenX = null, this.pointerScreenY = null, this.everMovedUp = !1, this.everMovedDown = !1, this.everMovedLeft = !1, this.everMovedRight = !1, this.handleMove(e, n));
  }
  handleMove(e, n) {
    if (this.isEnabled) {
      let r = e - window.pageXOffset, i = n - window.pageYOffset, s = this.pointerScreenY === null ? 0 : i - this.pointerScreenY, l = this.pointerScreenX === null ? 0 : r - this.pointerScreenX;
      s < 0 ? this.everMovedUp = !0 : s > 0 && (this.everMovedDown = !0), l < 0 ? this.everMovedLeft = !0 : l > 0 && (this.everMovedRight = !0), this.pointerScreenX = r, this.pointerScreenY = i, this.isAnimating || (this.isAnimating = !0, this.requestAnimation(Ur()));
    }
  }
  stop() {
    if (this.isEnabled) {
      this.isAnimating = !1;
      for (let e of this.scrollCaches)
        e.destroy();
      this.scrollCaches = null;
    }
  }
  requestAnimation(e) {
    this.msSinceRequest = e, requestAnimationFrame(this.animate);
  }
  handleSide(e, n) {
    let { scrollCache: r } = e, { edgeThreshold: i } = this, s = i - e.distance, l = s * s / (i * i) * this.maxVelocity * n, o = 1;
    switch (e.name) {
      case "left":
        o = -1;
      case "right":
        r.setScrollLeft(r.getScrollLeft() + l * o);
        break;
      case "top":
        o = -1;
      case "bottom":
        r.setScrollTop(r.getScrollTop() + l * o);
        break;
    }
  }
  computeBestEdge(e, n) {
    let { edgeThreshold: r } = this, i = null, s = this.scrollCaches || [];
    for (let l of s) {
      let o = l.clientRect, a = e - o.left, d = o.right - e, c = n - o.top, f = o.bottom - n;
      a >= 0 && d >= 0 && c >= 0 && f >= 0 && (c <= r && this.everMovedUp && l.canScrollUp() && (!i || i.distance > c) && (i = { scrollCache: l, name: "top", distance: c }), f <= r && this.everMovedDown && l.canScrollDown() && (!i || i.distance > f) && (i = { scrollCache: l, name: "bottom", distance: f }), a <= r && this.everMovedLeft && l.canScrollLeft() && (!i || i.distance > a) && (i = { scrollCache: l, name: "left", distance: a }), d <= r && this.everMovedRight && l.canScrollRight() && (!i || i.distance > d) && (i = { scrollCache: l, name: "right", distance: d }));
    }
    return i;
  }
  buildCaches(e) {
    return this.queryScrollEls(e).map((n) => n === window ? new gf(!1) : new Is(n, !1));
  }
  queryScrollEls(e) {
    let n = [];
    for (let r of this.scrollQuery)
      typeof r == "object" ? n.push(r) : n.push(...Array.prototype.slice.call(e.getRootNode().querySelectorAll(r)));
    return n;
  }
}
class Be extends Qa {
  constructor(e, n) {
    super(e), this.containerEl = e, this.delay = null, this.minDistance = 0, this.touchScrollAllowed = !0, this.mirrorNeedsRevert = !1, this.isInteracting = !1, this.isDragging = !1, this.isDelayEnded = !1, this.isDistanceSurpassed = !1, this.delayTimeoutId = null, this.onPointerDown = (i) => {
      this.isDragging || (this.isInteracting = !0, this.isDelayEnded = !1, this.isDistanceSurpassed = !1, yl(document.body), Sl(document.body), i.isTouch || i.origEvent.preventDefault(), this.emitter.trigger("pointerdown", i), this.isInteracting && !this.pointer.shouldIgnoreMove && (this.mirror.setIsVisible(!1), this.mirror.start(i.subjectEl, i.pageX, i.pageY), this.startDelay(i), this.minDistance || this.handleDistanceSurpassed(i)));
    }, this.onPointerMove = (i) => {
      if (this.isInteracting) {
        if (this.emitter.trigger("pointermove", i), !this.isDistanceSurpassed) {
          let s = this.minDistance, l, { deltaX: o, deltaY: a } = i;
          l = o * o + a * a, l >= s * s && this.handleDistanceSurpassed(i);
        }
        this.isDragging && (i.origEvent.type !== "scroll" && (this.mirror.handleMove(i.pageX, i.pageY), this.autoScroller.handleMove(i.pageX, i.pageY)), this.emitter.trigger("dragmove", i));
      }
    }, this.onPointerUp = (i) => {
      this.isInteracting && (this.isInteracting = !1, El(document.body), Al(document.body), this.emitter.trigger("pointerup", i), this.isDragging && (this.autoScroller.stop(), this.tryStopDrag(i)), this.delayTimeoutId && (clearTimeout(this.delayTimeoutId), this.delayTimeoutId = null));
    };
    let r = this.pointer = new Ts(e);
    r.emitter.on("pointerdown", this.onPointerDown), r.emitter.on("pointermove", this.onPointerMove), r.emitter.on("pointerup", this.onPointerUp), n && (r.selector = n), this.mirror = new hf(), this.autoScroller = new pf();
  }
  destroy() {
    this.pointer.destroy(), this.onPointerUp({});
  }
  startDelay(e) {
    typeof this.delay == "number" ? this.delayTimeoutId = setTimeout(() => {
      this.delayTimeoutId = null, this.handleDelayEnd(e);
    }, this.delay) : this.handleDelayEnd(e);
  }
  handleDelayEnd(e) {
    this.isDelayEnded = !0, this.tryStartDrag(e);
  }
  handleDistanceSurpassed(e) {
    this.isDistanceSurpassed = !0, this.tryStartDrag(e);
  }
  tryStartDrag(e) {
    this.isDelayEnded && this.isDistanceSurpassed && (!this.pointer.wasTouchScroll || this.touchScrollAllowed) && (this.isDragging = !0, this.mirrorNeedsRevert = !1, this.autoScroller.start(e.pageX, e.pageY, this.containerEl), this.emitter.trigger("dragstart", e), this.touchScrollAllowed === !1 && this.pointer.cancelTouchScroll());
  }
  tryStopDrag(e) {
    this.mirror.stop(this.mirrorNeedsRevert, this.stopDrag.bind(this, e));
  }
  stopDrag(e) {
    this.isDragging = !1, this.emitter.trigger("dragend", e);
  }
  setIgnoreMove(e) {
    this.pointer.shouldIgnoreMove = e;
  }
  setMirrorIsVisible(e) {
    this.mirror.setIsVisible(e);
  }
  setMirrorNeedsRevert(e) {
    this.mirrorNeedsRevert = e;
  }
  setAutoScrollEnabled(e) {
    this.autoScroller.isEnabled = e;
  }
}
class mf {
  constructor(e) {
    this.origRect = Dn(e), this.scrollCaches = Gi(e).map((n) => new Is(n, !0));
  }
  destroy() {
    for (let e of this.scrollCaches)
      e.destroy();
  }
  computeLeft() {
    let e = this.origRect.left;
    for (let n of this.scrollCaches)
      e += n.origScrollLeft - n.getScrollLeft();
    return e;
  }
  computeTop() {
    let e = this.origRect.top;
    for (let n of this.scrollCaches)
      e += n.origScrollTop - n.getScrollTop();
    return e;
  }
  isWithinClipping(e, n) {
    let r = { left: e, top: n };
    for (let i of this.scrollCaches)
      if (!vf(i.getEventTarget()) && !Ta(r, i.clientRect))
        return !1;
    return !0;
  }
}
function vf(t) {
  let e = t.tagName;
  return e === "HTML" || e === "BODY";
}
class Et {
  constructor(e, n) {
    this.useSubjectCenter = !1, this.requireInitial = !0, this.initialHit = null, this.movingHit = null, this.finalHit = null, this.handlePointerDown = (r) => {
      let { dragging: i } = this;
      this.initialHit = null, this.movingHit = null, this.finalHit = null, this.prepareHits(), this.processFirstCoord(r), this.initialHit || !this.requireInitial ? (i.setIgnoreMove(!1), this.emitter.trigger("pointerdown", r)) : i.setIgnoreMove(!0);
    }, this.handleDragStart = (r) => {
      this.emitter.trigger("dragstart", r), this.handleMove(r, !0);
    }, this.handleDragMove = (r) => {
      this.emitter.trigger("dragmove", r), this.handleMove(r);
    }, this.handlePointerUp = (r) => {
      this.releaseHits(), this.emitter.trigger("pointerup", r);
    }, this.handleDragEnd = (r) => {
      this.movingHit && this.emitter.trigger("hitupdate", null, !0, r), this.finalHit = this.movingHit, this.movingHit = null, this.emitter.trigger("dragend", r);
    }, this.droppableStore = n, e.emitter.on("pointerdown", this.handlePointerDown), e.emitter.on("dragstart", this.handleDragStart), e.emitter.on("dragmove", this.handleDragMove), e.emitter.on("pointerup", this.handlePointerUp), e.emitter.on("dragend", this.handleDragEnd), this.dragging = e, this.emitter = new yt();
  }
  processFirstCoord(e) {
    let n = { left: e.pageX, top: e.pageY }, r = n, i = e.subjectEl, s;
    i instanceof HTMLElement && (s = Dn(i), r = xa(r, s));
    let l = this.initialHit = this.queryHitForOffset(r.left, r.top);
    if (l) {
      if (this.useSubjectCenter && s) {
        let o = Fi(s, l.rect);
        o && (r = Ma(o));
      }
      this.coordAdjust = Ia(r, n);
    } else
      this.coordAdjust = { left: 0, top: 0 };
  }
  handleMove(e, n) {
    let r = this.queryHitForOffset(e.pageX + this.coordAdjust.left, e.pageY + this.coordAdjust.top);
    (n || !St(this.movingHit, r)) && (this.movingHit = r, this.emitter.trigger("hitupdate", r, !1, e));
  }
  prepareHits() {
    this.offsetTrackers = Y(this.droppableStore, (e) => (e.component.prepareHits(), new mf(e.el)));
  }
  releaseHits() {
    let { offsetTrackers: e } = this;
    for (let n in e)
      e[n].destroy();
    this.offsetTrackers = {};
  }
  queryHitForOffset(e, n) {
    let { droppableStore: r, offsetTrackers: i } = this, s = null;
    for (let l in r) {
      let o = r[l].component, a = i[l];
      if (a && a.isWithinClipping(e, n)) {
        let d = a.computeLeft(), c = a.computeTop(), f = e - d, h = n - c, { origRect: u } = a, m = u.right - u.left, v = u.bottom - u.top;
        if (f >= 0 && f < m && h >= 0 && h < v) {
          let b = o.queryHit(f, h, m, v);
          b && vt(b.dateProfile.activeRange, b.dateSpan.range) && (!s || b.layer > s.layer) && (b.componentId = l, b.context = o.context, b.rect.left += d, b.rect.right += d, b.rect.top += c, b.rect.bottom += c, s = b);
        }
      }
    }
    return s;
  }
}
function St(t, e) {
  return !t && !e ? !0 : Boolean(t) !== Boolean(e) ? !1 : ba(t.dateSpan, e.dateSpan);
}
function ks(t, e) {
  let n = {};
  for (let r of e.pluginHooks.datePointTransforms)
    Object.assign(n, r(t, e));
  return Object.assign(n, bf(t, e.dateEnv)), n;
}
function bf(t, e) {
  return {
    date: e.toDate(t.range.start),
    dateStr: e.formatIso(t.range.start, { omitTime: t.allDay }),
    allDay: t.allDay
  };
}
class yf extends we {
  constructor(e) {
    super(e), this.handlePointerDown = (r) => {
      let { dragging: i } = this, s = r.origEvent.target;
      i.setIgnoreMove(!this.component.isValidDateDownEl(s));
    }, this.handleDragEnd = (r) => {
      let { component: i } = this, { pointer: s } = this.dragging;
      if (!s.wasTouchScroll) {
        let { initialHit: l, finalHit: o } = this.hitDragging;
        if (l && o && St(l, o)) {
          let { context: a } = i, d = Object.assign(Object.assign({}, ks(l.dateSpan, a)), { dayEl: l.dayEl, jsEvent: r.origEvent, view: a.viewApi || a.calendarApi.view });
          a.emitter.trigger("dateClick", d);
        }
      }
    }, this.dragging = new Be(e.el), this.dragging.autoScroller.isEnabled = !1;
    let n = this.hitDragging = new Et(this.dragging, Sn(e));
    n.emitter.on("pointerdown", this.handlePointerDown), n.emitter.on("dragend", this.handleDragEnd);
  }
  destroy() {
    this.dragging.destroy();
  }
}
class Ef extends we {
  constructor(e) {
    super(e), this.dragSelection = null, this.handlePointerDown = (l) => {
      let { component: o, dragging: a } = this, { options: d } = o.context, c = d.selectable && o.isValidDateDownEl(l.origEvent.target);
      a.setIgnoreMove(!c), a.delay = l.isTouch ? Sf(o) : null;
    }, this.handleDragStart = (l) => {
      this.component.context.calendarApi.unselect(l);
    }, this.handleHitUpdate = (l, o) => {
      let { context: a } = this.component, d = null, c = !1;
      if (l) {
        let f = this.hitDragging.initialHit;
        l.componentId === f.componentId && this.isHitComboAllowed && !this.isHitComboAllowed(f, l) || (d = Af(f, l, a.pluginHooks.dateSelectionTransformers)), (!d || !Ka(d, l.dateProfile, a)) && (c = !0, d = null);
      }
      d ? a.dispatch({ type: "SELECT_DATES", selection: d }) : o || a.dispatch({ type: "UNSELECT_DATES" }), c ? sn() : ln(), o || (this.dragSelection = d);
    }, this.handlePointerUp = (l) => {
      this.dragSelection && (ki(this.dragSelection, l, this.component.context), this.dragSelection = null);
    };
    let { component: n } = e, { options: r } = n.context, i = this.dragging = new Be(e.el);
    i.touchScrollAllowed = !1, i.minDistance = r.selectMinDistance || 0, i.autoScroller.isEnabled = r.dragScroll;
    let s = this.hitDragging = new Et(this.dragging, Sn(e));
    s.emitter.on("pointerdown", this.handlePointerDown), s.emitter.on("dragstart", this.handleDragStart), s.emitter.on("hitupdate", this.handleHitUpdate), s.emitter.on("pointerup", this.handlePointerUp);
  }
  destroy() {
    this.dragging.destroy();
  }
}
function Sf(t) {
  let { options: e } = t.context, n = e.selectLongPressDelay;
  return n == null && (n = e.longPressDelay), n;
}
function Af(t, e, n) {
  let r = t.dateSpan, i = e.dateSpan, s = [
    r.range.start,
    r.range.end,
    i.range.start,
    i.range.end
  ];
  s.sort(_l);
  let l = {};
  for (let o of n) {
    let a = o(t, e);
    if (a === !1)
      return null;
    a && Object.assign(l, a);
  }
  return l.range = { start: s[0], end: s[3] }, l.allDay = r.allDay, l;
}
class Le extends we {
  constructor(e) {
    super(e), this.subjectEl = null, this.subjectSeg = null, this.isDragging = !1, this.eventRange = null, this.relevantEvents = null, this.receivingContext = null, this.validMutation = null, this.mutatedRelevantEvents = null, this.handlePointerDown = (l) => {
      let o = l.origEvent.target, { component: a, dragging: d } = this, { mirror: c } = d, { options: f } = a.context, h = a.context;
      this.subjectEl = l.subjectEl;
      let u = this.subjectSeg = De(l.subjectEl), v = (this.eventRange = u.eventRange).instance.instanceId;
      this.relevantEvents = vn(h.getCurrentData().eventStore, v), d.minDistance = l.isTouch ? 0 : f.eventDragMinDistance, d.delay = l.isTouch && v !== a.props.eventSelection ? Cf(a) : null, f.fixedMirrorParent ? c.parentNode = f.fixedMirrorParent : c.parentNode = P(o, ".fc"), c.revertDuration = f.dragRevertDuration;
      let b = a.isValidSegDownEl(o) && !P(o, ".fc-event-resizer");
      d.setIgnoreMove(!b), this.isDragging = b && l.subjectEl.classList.contains("fc-event-draggable");
    }, this.handleDragStart = (l) => {
      let o = this.component.context, a = this.eventRange, d = a.instance.instanceId;
      l.isTouch ? d !== this.component.props.eventSelection && o.dispatch({ type: "SELECT_EVENT", eventInstanceId: d }) : o.dispatch({ type: "UNSELECT_EVENT" }), this.isDragging && (o.calendarApi.unselect(l), o.emitter.trigger("eventDragStart", {
        el: this.subjectEl,
        event: new N(o, a.def, a.instance),
        jsEvent: l.origEvent,
        view: o.viewApi
      }));
    }, this.handleHitUpdate = (l, o) => {
      if (!this.isDragging)
        return;
      let a = this.relevantEvents, d = this.hitDragging.initialHit, c = this.component.context, f = null, h = null, u = null, m = !1, v = {
        affectedEvents: a,
        mutatedEvents: U(),
        isEvent: !0
      };
      if (l) {
        f = l.context;
        let b = f.options;
        c === f || b.editable && b.droppable ? (h = Df(d, l, f.getCurrentData().pluginHooks.eventDragMutationMassagers), h && (u = En(a, f.getCurrentData().eventUiBases, h, f), v.mutatedEvents = u, Ki(v, l.dateProfile, f) || (m = !0, h = null, u = null, v.mutatedEvents = U()))) : f = null;
      }
      this.displayDrag(f, v), m ? sn() : ln(), o || (c === f && St(d, l) && (h = null), this.dragging.setMirrorNeedsRevert(!h), this.dragging.setMirrorIsVisible(!l || !this.subjectEl.getRootNode().querySelector(".fc-event-mirror")), this.receivingContext = f, this.validMutation = h, this.mutatedRelevantEvents = u);
    }, this.handlePointerUp = () => {
      this.isDragging || this.cleanup();
    }, this.handleDragEnd = (l) => {
      if (this.isDragging) {
        let o = this.component.context, a = o.viewApi, { receivingContext: d, validMutation: c } = this, f = this.eventRange.def, h = this.eventRange.instance, u = new N(o, f, h), m = this.relevantEvents, v = this.mutatedRelevantEvents, { finalHit: b } = this.hitDragging;
        if (this.clearDrag(), o.emitter.trigger("eventDragStop", {
          el: this.subjectEl,
          event: u,
          jsEvent: l.origEvent,
          view: a
        }), c) {
          if (d === o) {
            let y = new N(o, v.defs[f.defId], h ? v.instances[h.instanceId] : null);
            o.dispatch({
              type: "MERGE_EVENTS",
              eventStore: v
            });
            let E = {
              oldEvent: u,
              event: y,
              relatedEvents: ce(v, o, h),
              revert() {
                o.dispatch({
                  type: "MERGE_EVENTS",
                  eventStore: m
                });
              }
            }, C = {};
            for (let D of o.getCurrentData().pluginHooks.eventDropTransformers)
              Object.assign(C, D(c, o));
            o.emitter.trigger("eventDrop", Object.assign(Object.assign(Object.assign({}, E), C), { el: l.subjectEl, delta: c.datesDelta, jsEvent: l.origEvent, view: a })), o.emitter.trigger("eventChange", E);
          } else if (d) {
            let y = {
              event: u,
              relatedEvents: ce(m, o, h),
              revert() {
                o.dispatch({
                  type: "MERGE_EVENTS",
                  eventStore: m
                });
              }
            };
            o.emitter.trigger("eventLeave", Object.assign(Object.assign({}, y), { draggedEl: l.subjectEl, view: a })), o.dispatch({
              type: "REMOVE_EVENTS",
              eventStore: m
            }), o.emitter.trigger("eventRemove", y);
            let E = v.defs[f.defId], C = v.instances[h.instanceId], D = new N(d, E, C);
            d.dispatch({
              type: "MERGE_EVENTS",
              eventStore: v
            });
            let x = {
              event: D,
              relatedEvents: ce(v, d, C),
              revert() {
                d.dispatch({
                  type: "REMOVE_EVENTS",
                  eventStore: v
                });
              }
            };
            d.emitter.trigger("eventAdd", x), l.isTouch && d.dispatch({
              type: "SELECT_EVENT",
              eventInstanceId: h.instanceId
            }), d.emitter.trigger("drop", Object.assign(Object.assign({}, ks(b.dateSpan, d)), { draggedEl: l.subjectEl, jsEvent: l.origEvent, view: b.context.viewApi })), d.emitter.trigger("eventReceive", Object.assign(Object.assign({}, x), { draggedEl: l.subjectEl, view: b.context.viewApi }));
          }
        } else
          o.emitter.trigger("_noEventDrop");
      }
      this.cleanup();
    };
    let { component: n } = this, { options: r } = n.context, i = this.dragging = new Be(e.el);
    i.pointer.selector = Le.SELECTOR, i.touchScrollAllowed = !1, i.autoScroller.isEnabled = r.dragScroll;
    let s = this.hitDragging = new Et(this.dragging, qt);
    s.useSubjectCenter = e.useEventCenter, s.emitter.on("pointerdown", this.handlePointerDown), s.emitter.on("dragstart", this.handleDragStart), s.emitter.on("hitupdate", this.handleHitUpdate), s.emitter.on("pointerup", this.handlePointerUp), s.emitter.on("dragend", this.handleDragEnd);
  }
  destroy() {
    this.dragging.destroy();
  }
  displayDrag(e, n) {
    let r = this.component.context, i = this.receivingContext;
    i && i !== e && (i === r ? i.dispatch({
      type: "SET_EVENT_DRAG",
      state: {
        affectedEvents: n.affectedEvents,
        mutatedEvents: U(),
        isEvent: !0
      }
    }) : i.dispatch({ type: "UNSET_EVENT_DRAG" })), e && e.dispatch({ type: "SET_EVENT_DRAG", state: n });
  }
  clearDrag() {
    let e = this.component.context, { receivingContext: n } = this;
    n && n.dispatch({ type: "UNSET_EVENT_DRAG" }), e !== n && e.dispatch({ type: "UNSET_EVENT_DRAG" });
  }
  cleanup() {
    this.subjectSeg = null, this.isDragging = !1, this.eventRange = null, this.relevantEvents = null, this.receivingContext = null, this.validMutation = null, this.mutatedRelevantEvents = null;
  }
}
Le.SELECTOR = ".fc-event-draggable, .fc-event-resizable";
function Df(t, e, n) {
  let r = t.dateSpan, i = e.dateSpan, s = r.range.start, l = i.range.start, o = {};
  r.allDay !== i.allDay && (o.allDay = i.allDay, o.hasEnd = e.context.options.allDayMaintainDuration, i.allDay && (s = M(s)));
  let a = be(s, l, t.context.dateEnv, t.componentId === e.componentId ? t.largeUnit : null);
  a.milliseconds && (o.allDay = !1);
  let d = {
    datesDelta: a,
    standardProps: o
  };
  for (let c of n)
    c(d, t, e);
  return d;
}
function Cf(t) {
  let { options: e } = t.context, n = e.eventLongPressDelay;
  return n == null && (n = e.longPressDelay), n;
}
class wf extends we {
  constructor(e) {
    super(e), this.draggingSegEl = null, this.draggingSeg = null, this.eventRange = null, this.relevantEvents = null, this.validMutation = null, this.mutatedRelevantEvents = null, this.handlePointerDown = (s) => {
      let { component: l } = this, o = this.querySegEl(s), a = De(o), d = this.eventRange = a.eventRange;
      this.dragging.minDistance = l.context.options.eventDragMinDistance, this.dragging.setIgnoreMove(!this.component.isValidSegDownEl(s.origEvent.target) || s.isTouch && this.component.props.eventSelection !== d.instance.instanceId);
    }, this.handleDragStart = (s) => {
      let { context: l } = this.component, o = this.eventRange;
      this.relevantEvents = vn(l.getCurrentData().eventStore, this.eventRange.instance.instanceId);
      let a = this.querySegEl(s);
      this.draggingSegEl = a, this.draggingSeg = De(a), l.calendarApi.unselect(), l.emitter.trigger("eventResizeStart", {
        el: a,
        event: new N(l, o.def, o.instance),
        jsEvent: s.origEvent,
        view: l.viewApi
      });
    }, this.handleHitUpdate = (s, l, o) => {
      let { context: a } = this.component, d = this.relevantEvents, c = this.hitDragging.initialHit, f = this.eventRange.instance, h = null, u = null, m = !1, v = {
        affectedEvents: d,
        mutatedEvents: U(),
        isEvent: !0
      };
      s && (s.componentId === c.componentId && this.isHitComboAllowed && !this.isHitComboAllowed(c, s) || (h = Rf(c, s, o.subjectEl.classList.contains("fc-event-resizer-start"), f.range))), h && (u = En(d, a.getCurrentData().eventUiBases, h, a), v.mutatedEvents = u, Ki(v, s.dateProfile, a) || (m = !0, h = null, u = null, v.mutatedEvents = null)), u ? a.dispatch({
        type: "SET_EVENT_RESIZE",
        state: v
      }) : a.dispatch({ type: "UNSET_EVENT_RESIZE" }), m ? sn() : ln(), l || (h && St(c, s) && (h = null), this.validMutation = h, this.mutatedRelevantEvents = u);
    }, this.handleDragEnd = (s) => {
      let { context: l } = this.component, o = this.eventRange.def, a = this.eventRange.instance, d = new N(l, o, a), c = this.relevantEvents, f = this.mutatedRelevantEvents;
      if (l.emitter.trigger("eventResizeStop", {
        el: this.draggingSegEl,
        event: d,
        jsEvent: s.origEvent,
        view: l.viewApi
      }), this.validMutation) {
        let h = new N(l, f.defs[o.defId], a ? f.instances[a.instanceId] : null);
        l.dispatch({
          type: "MERGE_EVENTS",
          eventStore: f
        });
        let u = {
          oldEvent: d,
          event: h,
          relatedEvents: ce(f, l, a),
          revert() {
            l.dispatch({
              type: "MERGE_EVENTS",
              eventStore: c
            });
          }
        };
        l.emitter.trigger("eventResize", Object.assign(Object.assign({}, u), { el: this.draggingSegEl, startDelta: this.validMutation.startDelta || w(0), endDelta: this.validMutation.endDelta || w(0), jsEvent: s.origEvent, view: l.viewApi })), l.emitter.trigger("eventChange", u);
      } else
        l.emitter.trigger("_noEventResize");
      this.draggingSeg = null, this.relevantEvents = null, this.validMutation = null;
    };
    let { component: n } = e, r = this.dragging = new Be(e.el);
    r.pointer.selector = ".fc-event-resizer", r.touchScrollAllowed = !1, r.autoScroller.isEnabled = n.context.options.dragScroll;
    let i = this.hitDragging = new Et(this.dragging, Sn(e));
    i.emitter.on("pointerdown", this.handlePointerDown), i.emitter.on("dragstart", this.handleDragStart), i.emitter.on("hitupdate", this.handleHitUpdate), i.emitter.on("dragend", this.handleDragEnd);
  }
  destroy() {
    this.dragging.destroy();
  }
  querySegEl(e) {
    return P(e.subjectEl, ".fc-event");
  }
}
function Rf(t, e, n, r) {
  let i = t.context.dateEnv, s = t.dateSpan.range.start, l = e.dateSpan.range.start, o = be(s, l, i, t.largeUnit);
  if (n) {
    if (i.add(r.start, o) < r.end)
      return { startDelta: o };
  } else if (i.add(r.end, o) > r.start)
    return { endDelta: o };
  return null;
}
class _f {
  constructor(e) {
    this.context = e, this.isRecentPointerDateSelect = !1, this.matchesCancel = !1, this.matchesEvent = !1, this.onSelect = (r) => {
      r.jsEvent && (this.isRecentPointerDateSelect = !0);
    }, this.onDocumentPointerDown = (r) => {
      let i = this.context.options.unselectCancel, s = ai(r.origEvent);
      this.matchesCancel = !!P(s, i), this.matchesEvent = !!P(s, Le.SELECTOR);
    }, this.onDocumentPointerUp = (r) => {
      let { context: i } = this, { documentPointer: s } = this, l = i.getCurrentData();
      if (!s.wasTouchScroll) {
        if (l.dateSelection && !this.isRecentPointerDateSelect) {
          let o = i.options.unselectAuto;
          o && (!o || !this.matchesCancel) && i.calendarApi.unselect(r);
        }
        l.eventSelection && !this.matchesEvent && i.dispatch({ type: "UNSELECT_EVENT" });
      }
      this.isRecentPointerDateSelect = !1;
    };
    let n = this.documentPointer = new Ts(document);
    n.shouldIgnoreMove = !0, n.shouldWatchScroll = !1, n.emitter.on("pointerdown", this.onDocumentPointerDown), n.emitter.on("pointerup", this.onDocumentPointerUp), e.emitter.on("select", this.onSelect);
  }
  destroy() {
    this.context.emitter.off("select", this.onSelect), this.documentPointer.destroy();
  }
}
const Tf = {
  fixedMirrorParent: p
}, xf = {
  dateClick: p,
  eventDragStart: p,
  eventDragStop: p,
  eventDrop: p,
  eventResizeStart: p,
  eventResizeStop: p,
  eventResize: p,
  drop: p,
  eventReceive: p,
  eventLeave: p
};
Rn.dataAttrPrefix = "";
var Mf = X({
  name: "@fullcalendar/interaction",
  componentInteractions: [yf, Ef, Le, wf],
  calendarInteractions: [_f],
  elementDraggingImpl: Be,
  optionRefiners: Tf,
  listenerRefiners: xf
});
const If = /* @__PURE__ */ Kt({
  __name: "index",
  props: {
    local: {
      type: String,
      default: "zh-cn"
    },
    initialView: {
      type: String,
      default: "dayGridMonth"
    },
    buttonText: {
      type: Object,
      default: () => ({
        today: "\u4ECA\u5929",
        month: "\u6708",
        week: "\u5468",
        day: "\u65E5",
        prevYear: "\u4E0A\u4E00\u5E74",
        nextYear: "\u4E0B\u4E00\u5E74",
        prev: "\u4E0A\u4E00\u6708",
        next: "\u4E0B\u4E00\u6708"
      })
    },
    headerToolbar: {
      type: Object,
      default: () => ({
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay"
      })
    },
    footerToolbar: {
      type: Object
    },
    events: {
      type: Array,
      default: () => []
    },
    eventContent: {
      type: Function
    }
  },
  emits: ["date-click", "event-click"],
  setup(t, { emit: e }) {
    const n = t, r = (d) => {
    }, i = (d) => {
      a.value = d;
    }, s = (d) => {
      e("date-click", d);
    }, l = (d) => {
      e("event-click", d);
    }, o = Bs({
      plugins: [
        Au,
        af,
        Mf
      ],
      headerToolbar: n.headerToolbar,
      footerToolbar: n.footerToolbar,
      locale: n.local,
      buttonText: n.buttonText,
      initialView: n.initialView,
      initialEvents: n.events,
      editable: !0,
      selectable: !0,
      selectMirror: !0,
      dayMaxEvents: !0,
      weekends: !0,
      displayEventEnd: !0,
      select: r,
      eventClick: l,
      dateClick: s,
      eventsSet: i
    }), a = Ls([]);
    return (d, c) => (js(), Us(On(qd), { options: On(o) }, {
      eventContent: zs((f) => [
        Pn("b", null, Hn(f.timeText), 1),
        Pn("i", null, Hn(f.event.title), 1)
      ]),
      _: 1
    }, 8, ["options"]));
  }
});
const kf = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [r, i] of e)
    n[r] = i;
  return n;
}, Nf = /* @__PURE__ */ kf(If, [["__scopeId", "data-v-ebd11953"]]), Pf = {
  install(t) {
    t.component("m-calendar", Nf);
  }
};
export {
  Pf as default
};
