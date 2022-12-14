(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [922],
  {
    4129: function (e, t, n) {
      "use strict";
      var r,
        i,
        l = n(7294),
        a = l && "object" == typeof l && "default" in l ? l.default : l,
        c = function () {
          return (c =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }).apply(this, arguments);
        },
        o =
          "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof window
            ? window
            : void 0 !== n.g
            ? n.g
            : "undefined" != typeof self
            ? self
            : {};
      function u(e) {
        return e &&
          e.__esModule &&
          Object.prototype.hasOwnProperty.call(e, "default")
          ? e.default
          : e;
      }
      function s(e, t) {
        return e((t = { exports: {} }), t.exports), t.exports;
      }
      var E = s(function (e, t) {
        var n;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.BLOCKS = void 0),
          ((n = t.BLOCKS || (t.BLOCKS = {})).DOCUMENT = "document"),
          (n.PARAGRAPH = "paragraph"),
          (n.HEADING_1 = "heading-1"),
          (n.HEADING_2 = "heading-2"),
          (n.HEADING_3 = "heading-3"),
          (n.HEADING_4 = "heading-4"),
          (n.HEADING_5 = "heading-5"),
          (n.HEADING_6 = "heading-6"),
          (n.OL_LIST = "ordered-list"),
          (n.UL_LIST = "unordered-list"),
          (n.LIST_ITEM = "list-item"),
          (n.HR = "hr"),
          (n.QUOTE = "blockquote"),
          (n.EMBEDDED_ENTRY = "embedded-entry-block"),
          (n.EMBEDDED_ASSET = "embedded-asset-block"),
          (n.TABLE = "table"),
          (n.TABLE_ROW = "table-row"),
          (n.TABLE_CELL = "table-cell"),
          (n.TABLE_HEADER_CELL = "table-header-cell");
      });
      u(E), E.BLOCKS;
      var L = s(function (e, t) {
        var n;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.INLINES = void 0),
          ((n = t.INLINES || (t.INLINES = {})).HYPERLINK = "hyperlink"),
          (n.ENTRY_HYPERLINK = "entry-hyperlink"),
          (n.ASSET_HYPERLINK = "asset-hyperlink"),
          (n.EMBEDDED_ENTRY = "embedded-entry-inline");
      });
      u(L), L.INLINES;
      var d = s(function (e, t) {
        var n, r;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          ((r = n || (n = {})).BOLD = "bold"),
          (r.ITALIC = "italic"),
          (r.UNDERLINE = "underline"),
          (r.CODE = "code"),
          (t.default = n);
      });
      u(d);
      var S = s(function (e, t) {
        var n,
          r =
            (o && o.__spreadArray) ||
            function (e, t, n) {
              if (n || 2 == arguments.length)
                for (var r, i = 0, l = t.length; i < l; i++)
                  (!r && i in t) ||
                    (r || (r = Array.prototype.slice.call(t, 0, i)),
                    (r[i] = t[i]));
              return e.concat(r || Array.prototype.slice.call(t));
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.V1_NODE_TYPES =
            t.TEXT_CONTAINERS =
            t.HEADINGS =
            t.CONTAINERS =
            t.VOID_BLOCKS =
            t.TABLE_BLOCKS =
            t.LIST_ITEM_BLOCKS =
            t.TOP_LEVEL_BLOCKS =
              void 0),
          (t.TOP_LEVEL_BLOCKS = [
            E.BLOCKS.PARAGRAPH,
            E.BLOCKS.HEADING_1,
            E.BLOCKS.HEADING_2,
            E.BLOCKS.HEADING_3,
            E.BLOCKS.HEADING_4,
            E.BLOCKS.HEADING_5,
            E.BLOCKS.HEADING_6,
            E.BLOCKS.OL_LIST,
            E.BLOCKS.UL_LIST,
            E.BLOCKS.HR,
            E.BLOCKS.QUOTE,
            E.BLOCKS.EMBEDDED_ENTRY,
            E.BLOCKS.EMBEDDED_ASSET,
            E.BLOCKS.TABLE,
          ]),
          (t.LIST_ITEM_BLOCKS = [
            E.BLOCKS.PARAGRAPH,
            E.BLOCKS.HEADING_1,
            E.BLOCKS.HEADING_2,
            E.BLOCKS.HEADING_3,
            E.BLOCKS.HEADING_4,
            E.BLOCKS.HEADING_5,
            E.BLOCKS.HEADING_6,
            E.BLOCKS.OL_LIST,
            E.BLOCKS.UL_LIST,
            E.BLOCKS.HR,
            E.BLOCKS.QUOTE,
            E.BLOCKS.EMBEDDED_ENTRY,
            E.BLOCKS.EMBEDDED_ASSET,
          ]),
          (t.TABLE_BLOCKS = [
            E.BLOCKS.TABLE,
            E.BLOCKS.TABLE_ROW,
            E.BLOCKS.TABLE_CELL,
            E.BLOCKS.TABLE_HEADER_CELL,
          ]),
          (t.VOID_BLOCKS = [
            E.BLOCKS.HR,
            E.BLOCKS.EMBEDDED_ENTRY,
            E.BLOCKS.EMBEDDED_ASSET,
          ]),
          (t.CONTAINERS =
            (((n = {})[E.BLOCKS.OL_LIST] = [E.BLOCKS.LIST_ITEM]),
            (n[E.BLOCKS.UL_LIST] = [E.BLOCKS.LIST_ITEM]),
            (n[E.BLOCKS.LIST_ITEM] = t.LIST_ITEM_BLOCKS),
            (n[E.BLOCKS.QUOTE] = [E.BLOCKS.PARAGRAPH]),
            (n[E.BLOCKS.TABLE] = [E.BLOCKS.TABLE_ROW]),
            (n[E.BLOCKS.TABLE_ROW] = [
              E.BLOCKS.TABLE_CELL,
              E.BLOCKS.TABLE_HEADER_CELL,
            ]),
            (n[E.BLOCKS.TABLE_CELL] = [E.BLOCKS.PARAGRAPH]),
            (n[E.BLOCKS.TABLE_HEADER_CELL] = [E.BLOCKS.PARAGRAPH]),
            n)),
          (t.HEADINGS = [
            E.BLOCKS.HEADING_1,
            E.BLOCKS.HEADING_2,
            E.BLOCKS.HEADING_3,
            E.BLOCKS.HEADING_4,
            E.BLOCKS.HEADING_5,
            E.BLOCKS.HEADING_6,
          ]),
          (t.TEXT_CONTAINERS = r([E.BLOCKS.PARAGRAPH], t.HEADINGS, !0)),
          (t.V1_NODE_TYPES = [
            E.BLOCKS.DOCUMENT,
            E.BLOCKS.PARAGRAPH,
            E.BLOCKS.HEADING_1,
            E.BLOCKS.HEADING_2,
            E.BLOCKS.HEADING_3,
            E.BLOCKS.HEADING_4,
            E.BLOCKS.HEADING_5,
            E.BLOCKS.HEADING_6,
            E.BLOCKS.OL_LIST,
            E.BLOCKS.UL_LIST,
            E.BLOCKS.LIST_ITEM,
            E.BLOCKS.HR,
            E.BLOCKS.QUOTE,
            E.BLOCKS.EMBEDDED_ENTRY,
            E.BLOCKS.EMBEDDED_ASSET,
            L.INLINES.HYPERLINK,
            L.INLINES.ENTRY_HYPERLINK,
            L.INLINES.ASSET_HYPERLINK,
            L.INLINES.EMBEDDED_ENTRY,
            "text",
          ]);
      });
      u(S),
        S.V1_NODE_TYPES,
        S.TEXT_CONTAINERS,
        S.HEADINGS,
        S.CONTAINERS,
        S.VOID_BLOCKS,
        S.TABLE_BLOCKS,
        S.LIST_ITEM_BLOCKS,
        S.TOP_LEVEL_BLOCKS;
      var _ = s(function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 });
      });
      u(_);
      var O = s(function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 });
      });
      u(O);
      var N = s(function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = {
          nodeType: E.BLOCKS.DOCUMENT,
          data: {},
          content: [
            {
              nodeType: E.BLOCKS.PARAGRAPH,
              data: {},
              content: [{ nodeType: "text", value: "", marks: [], data: {} }],
            },
          ],
        };
        t.default = n;
      });
      u(N);
      var f = s(function (e, t) {
        function n(e, t) {
          for (var n = 0, r = Object.keys(e); n < r.length; n++)
            if (t === e[r[n]]) return !0;
          return !1;
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isText = t.isBlock = t.isInline = void 0),
          (t.isInline = function (e) {
            return n(L.INLINES, e.nodeType);
          }),
          (t.isBlock = function (e) {
            return n(E.BLOCKS, e.nodeType);
          }),
          (t.isText = function (e) {
            return "text" === e.nodeType;
          });
      });
      u(f), f.isText, f.isBlock, f.isInline;
      var I = s(function (e, t) {
        var n =
            (o && o.__createBinding) ||
            (Object.create
              ? function (e, t, n, r) {
                  void 0 === r && (r = n);
                  var i = Object.getOwnPropertyDescriptor(t, n);
                  (!i ||
                    ("get" in i
                      ? !t.__esModule
                      : i.writable || i.configurable)) &&
                    (i = {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    }),
                    Object.defineProperty(e, r, i);
                }
              : function (e, t, n, r) {
                  void 0 === r && (r = n), (e[r] = t[n]);
                }),
          r =
            (o && o.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  });
                }
              : function (e, t) {
                  e.default = t;
                }),
          i =
            (o && o.__exportStar) ||
            function (e, t) {
              for (var r in e)
                "default" === r ||
                  Object.prototype.hasOwnProperty.call(t, r) ||
                  n(t, e, r);
            },
          l =
            (o && o.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e)
                for (var i in e)
                  "default" !== i &&
                    Object.prototype.hasOwnProperty.call(e, i) &&
                    n(t, e, i);
              return r(t, e), t;
            },
          a =
            (o && o.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.helpers =
            t.EMPTY_DOCUMENT =
            t.MARKS =
            t.INLINES =
            t.BLOCKS =
              void 0),
          Object.defineProperty(t, "BLOCKS", {
            enumerable: !0,
            get: function () {
              return E.BLOCKS;
            },
          }),
          Object.defineProperty(t, "INLINES", {
            enumerable: !0,
            get: function () {
              return L.INLINES;
            },
          }),
          Object.defineProperty(t, "MARKS", {
            enumerable: !0,
            get: function () {
              return a(d).default;
            },
          }),
          i(S, t),
          i(_, t),
          i(O, t),
          Object.defineProperty(t, "EMPTY_DOCUMENT", {
            enumerable: !0,
            get: function () {
              return a(N).default;
            },
          });
        var c = l(f);
        t.helpers = c;
      });
      u(I);
      var B = I.helpers;
      I.EMPTY_DOCUMENT;
      var C = I.MARKS,
        A = I.INLINES,
        T = I.BLOCKS,
        D =
          (((r = {})[T.DOCUMENT] = function (e, t) {
            return t;
          }),
          (r[T.PARAGRAPH] = function (e, t) {
            return a.createElement("p", null, t);
          }),
          (r[T.HEADING_1] = function (e, t) {
            return a.createElement("h1", null, t);
          }),
          (r[T.HEADING_2] = function (e, t) {
            return a.createElement("h2", null, t);
          }),
          (r[T.HEADING_3] = function (e, t) {
            return a.createElement("h3", null, t);
          }),
          (r[T.HEADING_4] = function (e, t) {
            return a.createElement("h4", null, t);
          }),
          (r[T.HEADING_5] = function (e, t) {
            return a.createElement("h5", null, t);
          }),
          (r[T.HEADING_6] = function (e, t) {
            return a.createElement("h6", null, t);
          }),
          (r[T.EMBEDDED_ENTRY] = function (e, t) {
            return a.createElement("div", null, t);
          }),
          (r[T.UL_LIST] = function (e, t) {
            return a.createElement("ul", null, t);
          }),
          (r[T.OL_LIST] = function (e, t) {
            return a.createElement("ol", null, t);
          }),
          (r[T.LIST_ITEM] = function (e, t) {
            return a.createElement("li", null, t);
          }),
          (r[T.QUOTE] = function (e, t) {
            return a.createElement("blockquote", null, t);
          }),
          (r[T.HR] = function () {
            return a.createElement("hr", null);
          }),
          (r[T.TABLE] = function (e, t) {
            return a.createElement(
              "table",
              null,
              a.createElement("tbody", null, t)
            );
          }),
          (r[T.TABLE_ROW] = function (e, t) {
            return a.createElement("tr", null, t);
          }),
          (r[T.TABLE_HEADER_CELL] = function (e, t) {
            return a.createElement("th", null, t);
          }),
          (r[T.TABLE_CELL] = function (e, t) {
            return a.createElement("td", null, t);
          }),
          (r[A.ASSET_HYPERLINK] = function (e) {
            return x(A.ASSET_HYPERLINK, e);
          }),
          (r[A.ENTRY_HYPERLINK] = function (e) {
            return x(A.ENTRY_HYPERLINK, e);
          }),
          (r[A.EMBEDDED_ENTRY] = function (e) {
            return x(A.EMBEDDED_ENTRY, e);
          }),
          (r[A.HYPERLINK] = function (e, t) {
            return a.createElement("a", { href: e.data.uri }, t);
          }),
          r),
        m =
          (((i = {})[C.BOLD] = function (e) {
            return a.createElement("b", null, e);
          }),
          (i[C.ITALIC] = function (e) {
            return a.createElement("i", null, e);
          }),
          (i[C.UNDERLINE] = function (e) {
            return a.createElement("u", null, e);
          }),
          (i[C.CODE] = function (e) {
            return a.createElement("code", null, e);
          }),
          i);
      function x(e, t) {
        return a.createElement(
          "span",
          { key: t.data.target.sys.id },
          "type: ",
          t.nodeType,
          " id: ",
          t.data.target.sys.id
        );
      }
      t.h = function (e, t) {
        return (void 0 === t && (t = {}), e)
          ? (function e(t, n) {
              var r = n.renderNode,
                i = n.renderMark,
                c = n.renderText;
              if (B.isText(t))
                return t.marks.reduce(
                  function (e, t) {
                    return i[t.type] ? i[t.type](e) : e;
                  },
                  c ? c(t.value) : t.value
                );
              var o = t.content.map(function (t, r) {
                var i;
                return (
                  (i = e(t, n)),
                  l.isValidElement(i) && null === i.key
                    ? l.cloneElement(i, { key: r })
                    : i
                );
              });
              return t.nodeType && r[t.nodeType]
                ? r[t.nodeType](t, o)
                : a.createElement(a.Fragment, null, o);
            })(e, {
              renderNode: c(c({}, D), t.renderNode),
              renderMark: c(c({}, m), t.renderMark),
              renderText: t.renderText,
            })
          : null;
      };
    },
    549: function (e, t) {
      "use strict";
      var n;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.BLOCKS = void 0),
        ((n = t.BLOCKS || (t.BLOCKS = {})).DOCUMENT = "document"),
        (n.PARAGRAPH = "paragraph"),
        (n.HEADING_1 = "heading-1"),
        (n.HEADING_2 = "heading-2"),
        (n.HEADING_3 = "heading-3"),
        (n.HEADING_4 = "heading-4"),
        (n.HEADING_5 = "heading-5"),
        (n.HEADING_6 = "heading-6"),
        (n.OL_LIST = "ordered-list"),
        (n.UL_LIST = "unordered-list"),
        (n.LIST_ITEM = "list-item"),
        (n.HR = "hr"),
        (n.QUOTE = "blockquote"),
        (n.EMBEDDED_ENTRY = "embedded-entry-block"),
        (n.EMBEDDED_ASSET = "embedded-asset-block"),
        (n.TABLE = "table"),
        (n.TABLE_ROW = "table-row"),
        (n.TABLE_CELL = "table-cell"),
        (n.TABLE_HEADER_CELL = "table-header-cell");
    },
    1928: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(549),
        i = {
          nodeType: r.BLOCKS.DOCUMENT,
          data: {},
          content: [
            {
              nodeType: r.BLOCKS.PARAGRAPH,
              data: {},
              content: [{ nodeType: "text", value: "", marks: [], data: {} }],
            },
          ],
        };
      t.default = i;
    },
    6061: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isText = t.isBlock = t.isInline = void 0);
      var r = n(549),
        i = n(7845);
      function l(e, t) {
        for (var n = 0, r = Object.keys(e); n < r.length; n++)
          if (t === e[r[n]]) return !0;
        return !1;
      }
      (t.isInline = function (e) {
        return l(i.INLINES, e.nodeType);
      }),
        (t.isBlock = function (e) {
          return l(r.BLOCKS, e.nodeType);
        }),
        (t.isText = function (e) {
          return "text" === e.nodeType;
        });
    },
    6437: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  });
              }
            : function (e, t, n, r) {
                void 0 === r && (r = n), (e[r] = t[n]);
              }),
        i =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e.default = t;
              }),
        l =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var n in e)
              "default" === n ||
                Object.prototype.hasOwnProperty.call(t, n) ||
                r(t, e, n);
          },
        a =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                "default" !== n &&
                  Object.prototype.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return i(t, e), t;
          },
        c =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.helpers =
          t.EMPTY_DOCUMENT =
          t.MARKS =
          t.INLINES =
          t.BLOCKS =
            void 0);
      var o = n(549);
      Object.defineProperty(t, "BLOCKS", {
        enumerable: !0,
        get: function () {
          return o.BLOCKS;
        },
      });
      var u = n(7845);
      Object.defineProperty(t, "INLINES", {
        enumerable: !0,
        get: function () {
          return u.INLINES;
        },
      });
      var s = n(1376);
      Object.defineProperty(t, "MARKS", {
        enumerable: !0,
        get: function () {
          return c(s).default;
        },
      }),
        l(n(7951), t),
        l(n(167), t),
        l(n(1911), t);
      var E = n(1928);
      Object.defineProperty(t, "EMPTY_DOCUMENT", {
        enumerable: !0,
        get: function () {
          return c(E).default;
        },
      });
      var L = a(n(6061));
      t.helpers = L;
    },
    7845: function (e, t) {
      "use strict";
      var n;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.INLINES = void 0),
        ((n = t.INLINES || (t.INLINES = {})).HYPERLINK = "hyperlink"),
        (n.ENTRY_HYPERLINK = "entry-hyperlink"),
        (n.ASSET_HYPERLINK = "asset-hyperlink"),
        (n.EMBEDDED_ENTRY = "embedded-entry-inline");
    },
    1376: function (e, t) {
      "use strict";
      var n, r;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        ((r = n || (n = {})).BOLD = "bold"),
        (r.ITALIC = "italic"),
        (r.UNDERLINE = "underline"),
        (r.CODE = "code"),
        (t.default = n);
    },
    1911: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    7951: function (e, t, n) {
      "use strict";
      var r,
        i =
          (this && this.__spreadArray) ||
          function (e, t, n) {
            if (n || 2 == arguments.length)
              for (var r, i = 0, l = t.length; i < l; i++)
                (!r && i in t) ||
                  (r || (r = Array.prototype.slice.call(t, 0, i)),
                  (r[i] = t[i]));
            return e.concat(r || Array.prototype.slice.call(t));
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.V1_NODE_TYPES =
          t.TEXT_CONTAINERS =
          t.HEADINGS =
          t.CONTAINERS =
          t.VOID_BLOCKS =
          t.TABLE_BLOCKS =
          t.LIST_ITEM_BLOCKS =
          t.TOP_LEVEL_BLOCKS =
            void 0);
      var l = n(549),
        a = n(7845);
      (t.TOP_LEVEL_BLOCKS = [
        l.BLOCKS.PARAGRAPH,
        l.BLOCKS.HEADING_1,
        l.BLOCKS.HEADING_2,
        l.BLOCKS.HEADING_3,
        l.BLOCKS.HEADING_4,
        l.BLOCKS.HEADING_5,
        l.BLOCKS.HEADING_6,
        l.BLOCKS.OL_LIST,
        l.BLOCKS.UL_LIST,
        l.BLOCKS.HR,
        l.BLOCKS.QUOTE,
        l.BLOCKS.EMBEDDED_ENTRY,
        l.BLOCKS.EMBEDDED_ASSET,
        l.BLOCKS.TABLE,
      ]),
        (t.LIST_ITEM_BLOCKS = [
          l.BLOCKS.PARAGRAPH,
          l.BLOCKS.HEADING_1,
          l.BLOCKS.HEADING_2,
          l.BLOCKS.HEADING_3,
          l.BLOCKS.HEADING_4,
          l.BLOCKS.HEADING_5,
          l.BLOCKS.HEADING_6,
          l.BLOCKS.OL_LIST,
          l.BLOCKS.UL_LIST,
          l.BLOCKS.HR,
          l.BLOCKS.QUOTE,
          l.BLOCKS.EMBEDDED_ENTRY,
          l.BLOCKS.EMBEDDED_ASSET,
        ]),
        (t.TABLE_BLOCKS = [
          l.BLOCKS.TABLE,
          l.BLOCKS.TABLE_ROW,
          l.BLOCKS.TABLE_CELL,
          l.BLOCKS.TABLE_HEADER_CELL,
        ]),
        (t.VOID_BLOCKS = [
          l.BLOCKS.HR,
          l.BLOCKS.EMBEDDED_ENTRY,
          l.BLOCKS.EMBEDDED_ASSET,
        ]),
        (t.CONTAINERS =
          (((r = {})[l.BLOCKS.OL_LIST] = [l.BLOCKS.LIST_ITEM]),
          (r[l.BLOCKS.UL_LIST] = [l.BLOCKS.LIST_ITEM]),
          (r[l.BLOCKS.LIST_ITEM] = t.LIST_ITEM_BLOCKS),
          (r[l.BLOCKS.QUOTE] = [l.BLOCKS.PARAGRAPH]),
          (r[l.BLOCKS.TABLE] = [l.BLOCKS.TABLE_ROW]),
          (r[l.BLOCKS.TABLE_ROW] = [
            l.BLOCKS.TABLE_CELL,
            l.BLOCKS.TABLE_HEADER_CELL,
          ]),
          (r[l.BLOCKS.TABLE_CELL] = [l.BLOCKS.PARAGRAPH]),
          (r[l.BLOCKS.TABLE_HEADER_CELL] = [l.BLOCKS.PARAGRAPH]),
          r)),
        (t.HEADINGS = [
          l.BLOCKS.HEADING_1,
          l.BLOCKS.HEADING_2,
          l.BLOCKS.HEADING_3,
          l.BLOCKS.HEADING_4,
          l.BLOCKS.HEADING_5,
          l.BLOCKS.HEADING_6,
        ]),
        (t.TEXT_CONTAINERS = i([l.BLOCKS.PARAGRAPH], t.HEADINGS, !0)),
        (t.V1_NODE_TYPES = [
          l.BLOCKS.DOCUMENT,
          l.BLOCKS.PARAGRAPH,
          l.BLOCKS.HEADING_1,
          l.BLOCKS.HEADING_2,
          l.BLOCKS.HEADING_3,
          l.BLOCKS.HEADING_4,
          l.BLOCKS.HEADING_5,
          l.BLOCKS.HEADING_6,
          l.BLOCKS.OL_LIST,
          l.BLOCKS.UL_LIST,
          l.BLOCKS.LIST_ITEM,
          l.BLOCKS.HR,
          l.BLOCKS.QUOTE,
          l.BLOCKS.EMBEDDED_ENTRY,
          l.BLOCKS.EMBEDDED_ASSET,
          a.INLINES.HYPERLINK,
          a.INLINES.ENTRY_HYPERLINK,
          a.INLINES.ASSET_HYPERLINK,
          a.INLINES.EMBEDDED_ENTRY,
          "text",
        ]);
    },
    167: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    843: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/posts/[slug]",
        function () {
          return n(2150);
        },
      ]);
    },
    6734: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var r = n(5893),
        i = n(9383);
      function l(e) {
        let { name: t, picture: n } = e;
        return (0, r.jsxs)("div", {
          className: "flex items-center",
          children: [
            (0, r.jsx)("div", {
              className: "relative w-12 h-12 mr-4",
              children: (0, r.jsx)(i.Z, {
                src: n.url,
                layout: "fill",
                className: "rounded-full",
                alt: t,
              }),
            }),
            (0, r.jsx)("div", { className: "text-xl font-bold", children: t }),
          ],
        });
      }
    },
    959: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var r = n(5893);
      function i(e) {
        let { children: t } = e;
        return (0, r.jsx)("div", {
          className: "container mx-auto px-5",
          children: t,
        });
      }
    },
    9383: function (e, t, n) {
      "use strict";
      var r = n(5893),
        i = n(5675),
        l = n.n(i);
      let a = (e) => {
          let { src: t, width: n, quality: r } = e;
          return ""
            .concat(t, "?w=")
            .concat(n, "&q=")
            .concat(r || 75);
        },
        c = (e) => (0, r.jsx)(l(), { loader: a, ...e });
      t.Z = c;
    },
    3483: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var r = n(5893),
        i = n(9383),
        l = n(1664),
        a = n.n(l),
        c = n(4184),
        o = n.n(c);
      function u(e) {
        let { title: t, url: n, slug: l } = e,
          c = (0, r.jsx)(i.Z, {
            width: 2e3,
            height: 1e3,
            alt: "Cover Image for ".concat(t),
            className: o()("shadow-small", {
              "hover:shadow-medium transition-shadow duration-200": l,
            }),
            src: n,
          });
        return (0, r.jsx)("div", {
          className: "sm:mx-0",
          children: l
            ? (0, r.jsx)(a(), {
                href: "/posts/".concat(l),
                children: (0, r.jsx)("a", { "aria-label": t, children: c }),
              })
            : c,
        });
      }
    },
    2419: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var r = n(5893),
        i = n(8582);
      function l(e) {
        let { dateString: t } = e;
        return (0, r.jsx)("time", {
          dateTime: t,
          children: (0, i.Z)(new Date(t), "LLLL	d, yyyy"),
        });
      }
    },
    654: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return _;
        },
      });
      var r = n(5893),
        i = n(959),
        l = n(4184),
        a = n.n(l),
        c = n(1664),
        o = n.n(c),
        u = n(8299);
      function s(e) {
        let { preview: t } = e;
        return (0, r.jsx)("div", {
          className: a()("border-b", {
            "bg-accent-7 border-accent-7 text-white": t,
            "bg-accent-1 border-accent-2": !t,
          }),
          children: (0, r.jsx)(i.Z, {
            children: (0, r.jsx)("div", {
              className: "py-2 text-center text-sm",
              children: t
                ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      "This is page is a preview.",
                      " ",
                      (0, r.jsxs)(o(), {
                        href: "/api/exit-preview",
                        children: [
                          (0, r.jsx)("a", {
                            className:
                              "underline hover:text-cyan duration-200 transition-colors",
                            children: "Click here",
                          }),
                          " ",
                        ],
                      }),
                      "to exit preview mode.",
                    ],
                  })
                : (0, r.jsxs)(r.Fragment, {
                    children: [
                      "The source code for this blog is",
                      " ",
                      (0, r.jsx)(o(), {
                        href: "https://github.com/vercel/next.js/tree/canary/examples/".concat(
                          u.Ys
                        ),
                        children: (0, r.jsx)("a", {
                          className:
                            "underline hover:text-success duration-200 transition-colors",
                          children: "available on GitHub",
                        }),
                      }),
                      ".",
                    ],
                  }),
            }),
          }),
        });
      }
      function E() {
        return (0, r.jsx)("footer", {
          className: "bg-accent-1 border-t border-accent-2",
          children: (0, r.jsx)(i.Z, {
            children: (0, r.jsxs)("div", {
              className: "py-28 flex flex-col lg:flex-row items-center",
              children: [
                (0, r.jsx)("h3", {
                  className:
                    "text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2",
                  children: "Statically Generated with Next.js.",
                }),
                (0, r.jsxs)("div", {
                  className:
                    "flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2",
                  children: [
                    (0, r.jsx)("a", {
                      href: "https://nextjs.org/docs/basic-features/pages",
                      className:
                        "mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0",
                      children: "Read Documentation",
                    }),
                    (0, r.jsx)("a", {
                      href: "https://github.com/vercel/next.js/tree/canary/examples/".concat(
                        u.Ys
                      ),
                      className: "mx-3 font-bold hover:underline",
                      children: "View on GitHub",
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      }
      var L = n(9008),
        d = n.n(L);
      function S() {
        return (0, r.jsxs)(d(), {
          children: [
            (0, r.jsx)("link", {
              rel: "apple-touch-icon",
              sizes: "180x180",
              href: "/favicon/apple-touch-icon.png",
            }),
            (0, r.jsx)("link", {
              rel: "icon",
              type: "image/png",
              sizes: "32x32",
              href: "/favicon/favicon-32x32.png",
            }),
            (0, r.jsx)("link", {
              rel: "icon",
              type: "image/png",
              sizes: "16x16",
              href: "/favicon/favicon-16x16.png",
            }),
            (0, r.jsx)("link", {
              rel: "manifest",
              href: "/favicon/site.webmanifest",
            }),
            (0, r.jsx)("link", {
              rel: "mask-icon",
              href: "/favicon/safari-pinned-tab.svg",
              color: "#000000",
            }),
            (0, r.jsx)("link", {
              rel: "shortcut icon",
              href: "/favicon/favicon.ico",
            }),
            (0, r.jsx)("meta", {
              name: "msapplication-TileColor",
              content: "#000000",
            }),
            (0, r.jsx)("meta", {
              name: "msapplication-config",
              content: "/favicon/browserconfig.xml",
            }),
            (0, r.jsx)("meta", { name: "theme-color", content: "#000" }),
            (0, r.jsx)("link", {
              rel: "alternate",
              type: "application/rss+xml",
              href: "/feed.xml",
            }),
            (0, r.jsx)("meta", {
              name: "description",
              content:
                "A statically generated blog example using Next.js and ".concat(
                  u.yf,
                  "."
                ),
            }),
            (0, r.jsx)("meta", { property: "og:image", content: u.vC }),
          ],
        });
      }
      function _(e) {
        let { preview: t, children: n } = e;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(S, {}),
            (0, r.jsxs)("div", {
              className: "min-h-screen",
              children: [
                (0, r.jsx)(s, { preview: t }),
                (0, r.jsx)("main", { children: n }),
              ],
            }),
            (0, r.jsx)(E, {}),
          ],
        });
      }
    },
    9202: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var r = n(5893),
        i = n(1664),
        l = n.n(i),
        a = n(6734),
        c = n(2419),
        o = n(3483);
      function u(e) {
        let {
          title: t,
          coverImage: n,
          date: i,
          excerpt: u,
          author: s,
          slug: E,
        } = e;
        return (0, r.jsxs)("div", {
          children: [
            (0, r.jsx)("div", {
              className: "mb-5",
              children: (0, r.jsx)(o.Z, { title: t, slug: E, url: n.url }),
            }),
            (0, r.jsx)("h3", {
              className: "text-3xl mb-3 leading-snug",
              children: (0, r.jsx)(l(), {
                href: "/posts/".concat(E),
                children: (0, r.jsx)("a", {
                  className: "hover:underline",
                  children: t,
                }),
              }),
            }),
            (0, r.jsx)("div", {
              className: "text-lg mb-4",
              children: (0, r.jsx)(c.Z, { dateString: i }),
            }),
            (0, r.jsx)("p", {
              className: "text-lg leading-relaxed mb-4",
              children: u,
            }),
            s && (0, r.jsx)(a.Z, { name: s.name, picture: s.picture }),
          ],
        });
      }
      function s(e) {
        let { posts: t } = e;
        return (0, r.jsxs)("section", {
          children: [
            (0, r.jsx)("h2", {
              className:
                "mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight",
              children: "More Stories",
            }),
            (0, r.jsx)("div", {
              className:
                "grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32",
              children: t.map((e) =>
                (0, r.jsx)(
                  u,
                  {
                    title: e.title,
                    coverImage: e.coverImage,
                    date: e.date,
                    author: e.author,
                    slug: e.slug,
                    excerpt: e.excerpt,
                  },
                  e.slug
                )
              ),
            }),
          ],
        });
      }
    },
    8299: function (e, t, n) {
      "use strict";
      n.d(t, {
        Ys: function () {
          return r;
        },
        oc: function () {
          return l;
        },
        vC: function () {
          return a;
        },
        yf: function () {
          return i;
        },
      });
      let r = "cms-contentful",
        i = "Contentful",
        l = "https://www.contentful.com",
        a =
          "https://og-image.vercel.app/Next.js%20Blog%20Example%20with%20**Contentful**.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg&images=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOSIgaGVpZ2h0PSIzMiI%2BCiAgPHBhdGggZmlsbD0iI0ZGRDg1RiIgZD0iTTkuNyAyMi4zQzggMjAuNyA3IDE4LjUgNyAxNnMxLTQuNyAyLjYtNi4zYzEuNC0xLjQgMS40LTMuNiAwLTVzLTMuNi0xLjQtNSAwQzEuOCA3LjYgMCAxMS42IDAgMTZzMS44IDguNCA0LjcgMTEuM2MxLjQgMS40IDMuNiAxLjQgNSAwIDEuMy0xLjQgMS4zLTMuNiAwLTV6Ij48L3BhdGg%2BCiAgPHBhdGggZmlsbD0iIzNCQjRFNyIgZD0iTTkuNyA5LjdDMTEuMyA4IDEzLjUgNyAxNiA3czQuNyAxIDYuMyAyLjZjMS40IDEuNCAzLjYgMS40IDUgMHMxLjQtMy42IDAtNUMyNC40IDEuOCAyMC40IDAgMTYgMFM3LjYgMS44IDQuNyA0LjdjLTEuNCAxLjQtMS40IDMuNiAwIDUgMS40IDEuMyAzLjYgMS4zIDUgMHoiPjwvcGF0aD4KICA8cGF0aCBmaWxsPSIjRUQ1QzY4IiBkPSJNMjIuMyAyMi4zQzIwLjcgMjQgMTguNSAyNSAxNiAyNXMtNC43LTEtNi4zLTIuNmMtMS40LTEuNC0zLjYtMS40LTUgMHMtMS40IDMuNiAwIDVDNy42IDMwLjIgMTEuNiAzMiAxNiAzMnM4LjQtMS44IDExLjMtNC43YzEuNC0xLjQgMS40LTMuNiAwLTUtMS40LTEuMy0zLjYtMS4zLTUgMHoiPjwvcGF0aD4KICA8Y2lyY2xlIGN4PSI3LjIiIGN5PSI3LjIiIHI9IjMuNSIgZmlsbD0iIzMwOEJDNSI%2BPC9jaXJjbGU%2BCiAgPGNpcmNsZSBjeD0iNy4yIiBjeT0iMjQuOCIgcj0iMy41IiBmaWxsPSIjRDU0NjVGIj48L2NpcmNsZT4KPC9zdmc%2B";
    },
    2150: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          __N_SSG: function () {
            return j;
          },
          default: function () {
            return g;
          },
        });
      var r = n(5893),
        i = n(1163),
        l = n(9008),
        a = n.n(l),
        c = n(2918),
        o = n(959),
        u = n(4129),
        s = n(6437),
        E = n(6873),
        L = n.n(E),
        d = n(5675),
        S = n.n(d);
      function _(e) {
        let { id: t, assets: n } = e,
          i = null == n ? void 0 : n.find((e) => e.sys.id === t);
        return (null == i ? void 0 : i.url)
          ? (0, r.jsx)(S(), { src: i.url, layout: "fill", alt: i.description })
          : null;
      }
      let O = (e) => ({
        renderNode: {
          [s.BLOCKS.EMBEDDED_ASSET]: (t) =>
            (0, r.jsx)(_, {
              id: t.data.target.sys.id,
              assets: e.links.assets.block,
            }),
        },
      });
      function N(e) {
        let { content: t } = e;
        return (0, r.jsx)("div", {
          className: "max-w-2xl mx-auto",
          children: (0, r.jsx)("div", {
            className: L().markdown,
            children: (0, u.h)(t.json, O(t)),
          }),
        });
      }
      var f = n(9202),
        I = n(1664),
        B = n.n(I);
      function C() {
        return (0, r.jsxs)("h2", {
          className:
            "text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8",
          children: [
            (0, r.jsx)(B(), {
              href: "/",
              children: (0, r.jsx)("a", {
                className: "hover:underline",
                children: "Blog",
              }),
            }),
            ".",
          ],
        });
      }
      var A = n(6734),
        T = n(2419),
        D = n(3483);
      function m(e) {
        let { children: t } = e;
        return (0, r.jsx)("h1", {
          className:
            "text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left",
          children: t,
        });
      }
      function x(e) {
        let { title: t, coverImage: n, date: i, author: l } = e;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(m, { children: t }),
            (0, r.jsx)("div", {
              className: "hidden md:block md:mb-12",
              children:
                l && (0, r.jsx)(A.Z, { name: l.name, picture: l.picture }),
            }),
            (0, r.jsx)("div", {
              className: "mb-8 md:mb-16 sm:mx-0",
              children: (0, r.jsx)(D.Z, { title: t, url: n.url }),
            }),
            (0, r.jsxs)("div", {
              className: "max-w-2xl mx-auto",
              children: [
                (0, r.jsx)("div", {
                  className: "block md:hidden mb-6",
                  children:
                    l && (0, r.jsx)(A.Z, { name: l.name, picture: l.picture }),
                }),
                (0, r.jsx)("div", {
                  className: "mb-6 text-lg",
                  children: (0, r.jsx)(T.Z, { dateString: i }),
                }),
              ],
            }),
          ],
        });
      }
      function K() {
        return (0, r.jsx)("hr", { className: "border-accent-2 mt-28 mb-24" });
      }
      var h = n(654),
        p = n(8299),
        j = !0;
      function g(e) {
        let { post: t, morePosts: n, preview: l } = e,
          u = (0, i.useRouter)();
        return u.isFallback || t
          ? (0, r.jsx)(h.Z, {
              preview: l,
              children: (0, r.jsxs)(o.Z, {
                children: [
                  (0, r.jsx)(C, {}),
                  u.isFallback
                    ? (0, r.jsx)(m, { children: "Loading???" })
                    : (0, r.jsxs)(r.Fragment, {
                        children: [
                          (0, r.jsxs)("article", {
                            children: [
                              (0, r.jsxs)(a(), {
                                children: [
                                  (0, r.jsxs)("title", {
                                    children: [
                                      t.title,
                                      " | Next.js Blog Example with ",
                                      p.yf,
                                    ],
                                  }),
                                  (0, r.jsx)("meta", {
                                    property: "og:image",
                                    content: t.coverImage.url,
                                  }),
                                ],
                              }),
                              (0, r.jsx)(x, {
                                title: t.title,
                                coverImage: t.coverImage,
                                date: t.date,
                                author: t.author,
                              }),
                              (0, r.jsx)(N, { content: t.content }),
                            ],
                          }),
                          (0, r.jsx)(K, {}),
                          n && n.length > 0 && (0, r.jsx)(f.Z, { posts: n }),
                        ],
                      }),
                ],
              }),
            })
          : (0, r.jsx)(c.default, { statusCode: 404 });
      }
    },
    6873: function (e) {
      e.exports = { markdown: "markdown-styles_markdown__h_8de" };
    },
    2918: function (e, t, n) {
      e.exports = n(67);
    },
    1163: function (e, t, n) {
      e.exports = n(880);
    },
  },
  function (e) {
    e.O(0, [82, 774, 888, 179], function () {
      return e((e.s = 843));
    }),
      (_N_E = e.O());
  },
]);
