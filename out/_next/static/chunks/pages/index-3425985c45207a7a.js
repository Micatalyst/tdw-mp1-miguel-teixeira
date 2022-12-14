(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    5557: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return n(7907);
        },
      ]);
    },
    6734: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var s = n(5893),
        i = n(9383);
      function r(e) {
        let { name: t, picture: n } = e;
        return (0, s.jsxs)("div", {
          className: "flex items-center",
          children: [
            (0, s.jsx)("div", {
              className: "relative w-12 h-12 mr-4",
              children: (0, s.jsx)(i.Z, {
                src: n.url,
                layout: "fill",
                className: "rounded-full",
                alt: t,
              }),
            }),
            (0, s.jsx)("div", { className: "text-xl font-bold", children: t }),
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
      var s = n(5893);
      function i(e) {
        let { children: t } = e;
        return (0, s.jsx)("div", {
          className: "container mx-auto px-5",
          children: t,
        });
      }
    },
    9383: function (e, t, n) {
      "use strict";
      var s = n(5893),
        i = n(5675),
        r = n.n(i);
      let c = (e) => {
          let { src: t, width: n, quality: s } = e;
          return ""
            .concat(t, "?w=")
            .concat(n, "&q=")
            .concat(s || 75);
        },
        l = (e) => (0, s.jsx)(r(), { loader: c, ...e });
      t.Z = l;
    },
    3483: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var s = n(5893),
        i = n(9383),
        r = n(1664),
        c = n.n(r),
        l = n(4184),
        a = n.n(l);
      function o(e) {
        let { title: t, url: n, slug: r } = e,
          l = (0, s.jsx)(i.Z, {
            width: 2e3,
            height: 1e3,
            alt: "Cover Image for ".concat(t),
            className: a()("shadow-small", {
              "hover:shadow-medium transition-shadow duration-200": r,
            }),
            src: n,
          });
        return (0, s.jsx)("div", {
          className: "sm:mx-0",
          children: r
            ? (0, s.jsx)(c(), {
                href: "/posts/".concat(r),
                children: (0, s.jsx)("a", { "aria-label": t, children: l }),
              })
            : l,
        });
      }
    },
    2419: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var s = n(5893),
        i = n(8582);
      function r(e) {
        let { dateString: t } = e;
        return (0, s.jsx)("time", {
          dateTime: t,
          children: (0, i.Z)(new Date(t), "LLLL	d, yyyy"),
        });
      }
    },
    654: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return j;
        },
      });
      var s = n(5893),
        i = n(959),
        r = n(4184),
        c = n.n(r),
        l = n(1664),
        a = n.n(l),
        o = n(8299);
      function x(e) {
        let { preview: t } = e;
        return (0, s.jsx)("div", {
          className: c()("border-b", {
            "bg-accent-7 border-accent-7 text-white": t,
            "bg-accent-1 border-accent-2": !t,
          }),
          children: (0, s.jsx)(i.Z, {
            children: (0, s.jsx)("div", {
              className: "py-2 text-center text-sm",
              children: t
                ? (0, s.jsxs)(s.Fragment, {
                    children: [
                      "This is page is a preview.",
                      " ",
                      (0, s.jsxs)(a(), {
                        href: "/api/exit-preview",
                        children: [
                          (0, s.jsx)("a", {
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
                : (0, s.jsxs)(s.Fragment, {
                    children: [
                      "The source code for this blog is",
                      " ",
                      (0, s.jsx)(a(), {
                        href: "https://github.com/vercel/next.js/tree/canary/examples/".concat(
                          o.Ys
                        ),
                        children: (0, s.jsx)("a", {
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
      function d() {
        return (0, s.jsx)("footer", {
          className: "bg-accent-1 border-t border-accent-2",
          children: (0, s.jsx)(i.Z, {
            children: (0, s.jsxs)("div", {
              className: "py-28 flex flex-col lg:flex-row items-center",
              children: [
                (0, s.jsx)("h3", {
                  className:
                    "text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2",
                  children: "Statically Generated with Next.js.",
                }),
                (0, s.jsxs)("div", {
                  className:
                    "flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2",
                  children: [
                    (0, s.jsx)("a", {
                      href: "https://nextjs.org/docs/basic-features/pages",
                      className:
                        "mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0",
                      children: "Read Documentation",
                    }),
                    (0, s.jsx)("a", {
                      href: "https://github.com/vercel/next.js/tree/canary/examples/".concat(
                        o.Ys
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
      var u = n(9008),
        m = n.n(u);
      function g() {
        return (0, s.jsxs)(m(), {
          children: [
            (0, s.jsx)("link", {
              rel: "apple-touch-icon",
              sizes: "180x180",
              href: "/favicon/apple-touch-icon.png",
            }),
            (0, s.jsx)("link", {
              rel: "icon",
              type: "image/png",
              sizes: "32x32",
              href: "/favicon/favicon-32x32.png",
            }),
            (0, s.jsx)("link", {
              rel: "icon",
              type: "image/png",
              sizes: "16x16",
              href: "/favicon/favicon-16x16.png",
            }),
            (0, s.jsx)("link", {
              rel: "manifest",
              href: "/favicon/site.webmanifest",
            }),
            (0, s.jsx)("link", {
              rel: "mask-icon",
              href: "/favicon/safari-pinned-tab.svg",
              color: "#000000",
            }),
            (0, s.jsx)("link", {
              rel: "shortcut icon",
              href: "/favicon/favicon.ico",
            }),
            (0, s.jsx)("meta", {
              name: "msapplication-TileColor",
              content: "#000000",
            }),
            (0, s.jsx)("meta", {
              name: "msapplication-config",
              content: "/favicon/browserconfig.xml",
            }),
            (0, s.jsx)("meta", { name: "theme-color", content: "#000" }),
            (0, s.jsx)("link", {
              rel: "alternate",
              type: "application/rss+xml",
              href: "/feed.xml",
            }),
            (0, s.jsx)("meta", {
              name: "description",
              content:
                "A statically generated blog example using Next.js and ".concat(
                  o.yf,
                  "."
                ),
            }),
            (0, s.jsx)("meta", { property: "og:image", content: o.vC }),
          ],
        });
      }
      function j(e) {
        let { preview: t, children: n } = e;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(g, {}),
            (0, s.jsxs)("div", {
              className: "min-h-screen",
              children: [
                (0, s.jsx)(x, { preview: t }),
                (0, s.jsx)("main", { children: n }),
              ],
            }),
            (0, s.jsx)(d, {}),
          ],
        });
      }
    },
    9202: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return x;
        },
      });
      var s = n(5893),
        i = n(1664),
        r = n.n(i),
        c = n(6734),
        l = n(2419),
        a = n(3483);
      function o(e) {
        let {
          title: t,
          coverImage: n,
          date: i,
          excerpt: o,
          author: x,
          slug: d,
        } = e;
        return (0, s.jsxs)("div", {
          children: [
            (0, s.jsx)("div", {
              className: "mb-5",
              children: (0, s.jsx)(a.Z, { title: t, slug: d, url: n.url }),
            }),
            (0, s.jsx)("h3", {
              className: "text-3xl mb-3 leading-snug",
              children: (0, s.jsx)(r(), {
                href: "/posts/".concat(d),
                children: (0, s.jsx)("a", {
                  className: "hover:underline",
                  children: t,
                }),
              }),
            }),
            (0, s.jsx)("div", {
              className: "text-lg mb-4",
              children: (0, s.jsx)(l.Z, { dateString: i }),
            }),
            (0, s.jsx)("p", {
              className: "text-lg leading-relaxed mb-4",
              children: o,
            }),
            x && (0, s.jsx)(c.Z, { name: x.name, picture: x.picture }),
          ],
        });
      }
      function x(e) {
        let { posts: t } = e;
        return (0, s.jsxs)("section", {
          children: [
            (0, s.jsx)("h2", {
              className:
                "mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight",
              children: "More Stories",
            }),
            (0, s.jsx)("div", {
              className:
                "grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32",
              children: t.map((e) =>
                (0, s.jsx)(
                  o,
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
          return s;
        },
        oc: function () {
          return r;
        },
        vC: function () {
          return c;
        },
        yf: function () {
          return i;
        },
      });
      let s = "cms-contentful",
        i = "Contentful",
        r = "https://www.contentful.com",
        c =
          "https://og-image.vercel.app/Next.js%20Blog%20Example%20with%20**Contentful**.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg&images=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOSIgaGVpZ2h0PSIzMiI%2BCiAgPHBhdGggZmlsbD0iI0ZGRDg1RiIgZD0iTTkuNyAyMi4zQzggMjAuNyA3IDE4LjUgNyAxNnMxLTQuNyAyLjYtNi4zYzEuNC0xLjQgMS40LTMuNiAwLTVzLTMuNi0xLjQtNSAwQzEuOCA3LjYgMCAxMS42IDAgMTZzMS44IDguNCA0LjcgMTEuM2MxLjQgMS40IDMuNiAxLjQgNSAwIDEuMy0xLjQgMS4zLTMuNiAwLTV6Ij48L3BhdGg%2BCiAgPHBhdGggZmlsbD0iIzNCQjRFNyIgZD0iTTkuNyA5LjdDMTEuMyA4IDEzLjUgNyAxNiA3czQuNyAxIDYuMyAyLjZjMS40IDEuNCAzLjYgMS40IDUgMHMxLjQtMy42IDAtNUMyNC40IDEuOCAyMC40IDAgMTYgMFM3LjYgMS44IDQuNyA0LjdjLTEuNCAxLjQtMS40IDMuNiAwIDUgMS40IDEuMyAzLjYgMS4zIDUgMHoiPjwvcGF0aD4KICA8cGF0aCBmaWxsPSIjRUQ1QzY4IiBkPSJNMjIuMyAyMi4zQzIwLjcgMjQgMTguNSAyNSAxNiAyNXMtNC43LTEtNi4zLTIuNmMtMS40LTEuNC0zLjYtMS40LTUgMHMtMS40IDMuNiAwIDVDNy42IDMwLjIgMTEuNiAzMiAxNiAzMnM4LjQtMS44IDExLjMtNC43YzEuNC0xLjQgMS40LTMuNiAwLTUtMS40LTEuMy0zLjYtMS4zLTUgMHoiPjwvcGF0aD4KICA8Y2lyY2xlIGN4PSI3LjIiIGN5PSI3LjIiIHI9IjMuNSIgZmlsbD0iIzMwOEJDNSI%2BPC9jaXJjbGU%2BCiAgPGNpcmNsZSBjeD0iNy4yIiBjeT0iMjQuOCIgcj0iMy41IiBmaWxsPSIjRDU0NjVGIj48L2NpcmNsZT4KPC9zdmc%2B";
    },
    7907: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          __N_SSG: function () {
            return f;
          },
          default: function () {
            return N;
          },
        });
      var s = n(5893),
        i = n(959),
        r = n(9202),
        c = n(1664),
        l = n.n(c),
        a = n(6734),
        o = n(2419),
        x = n(3483);
      function d(e) {
        let {
          title: t,
          coverImage: n,
          date: i,
          excerpt: r,
          author: c,
          slug: d,
        } = e;
        return (0, s.jsxs)("section", {
          children: [
            (0, s.jsx)("div", {
              className: "mb-8 md:mb-16",
              children: (0, s.jsx)(x.Z, { title: t, slug: d, url: n.url }),
            }),
            (0, s.jsxs)("div", {
              className:
                "md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28",
              children: [
                (0, s.jsxs)("div", {
                  children: [
                    (0, s.jsx)("h3", {
                      className: "mb-4 text-4xl lg:text-6xl leading-tight",
                      children: (0, s.jsx)(l(), {
                        href: "/posts/".concat(d),
                        children: (0, s.jsx)("a", {
                          className: "hover:underline",
                          children: t,
                        }),
                      }),
                    }),
                    (0, s.jsx)("div", {
                      className: "mb-4 md:mb-0 text-lg",
                      children: (0, s.jsx)(o.Z, { dateString: i }),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, s.jsx)("p", {
                      className: "text-lg leading-relaxed mb-4",
                      children: r,
                    }),
                    c && (0, s.jsx)(a.Z, { name: c.name, picture: c.picture }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var u = n(8299);
      function m() {
        return (0, s.jsxs)("section", {
          className:
            "flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12",
          children: [
            (0, s.jsx)("h1", {
              className:
                "text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8",
              children: "Blog.",
            }),
            (0, s.jsxs)("h4", {
              className: "text-center md:text-left text-lg mt-5 md:pl-8",
              children: [
                "A statically generated blog example using",
                " ",
                (0, s.jsx)("a", {
                  href: "https://nextjs.org/",
                  className:
                    "underline hover:text-success duration-200 transition-colors",
                  children: "Next.js",
                }),
                " ",
                "and",
                " ",
                (0, s.jsx)("a", {
                  href: u.oc,
                  className:
                    "underline hover:text-success duration-200 transition-colors",
                  children: u.yf,
                }),
                ".",
              ],
            }),
          ],
        });
      }
      var g = n(654),
        j = n(9008),
        h = n.n(j),
        f = !0;
      function N(e) {
        let { preview: t, allPosts: n } = e,
          c = n[0],
          l = n.slice(1);
        return (0, s.jsx)(s.Fragment, {
          children: (0, s.jsxs)(g.Z, {
            preview: t,
            children: [
              (0, s.jsx)(h(), {
                children: (0, s.jsxs)("title", {
                  children: ["Next.js Blog Example with ", u.yf],
                }),
              }),
              (0, s.jsxs)(i.Z, {
                children: [
                  (0, s.jsx)(m, {}),
                  c &&
                    (0, s.jsx)(d, {
                      title: c.title,
                      coverImage: c.coverImage,
                      date: c.date,
                      author: c.author,
                      slug: c.slug,
                      excerpt: c.excerpt,
                    }),
                  l.length > 0 && (0, s.jsx)(r.Z, { posts: l }),
                ],
              }),
            ],
          }),
        });
      }
    },
  },
  function (e) {
    e.O(0, [82, 774, 888, 179], function () {
      return e((e.s = 5557));
    }),
      (_N_E = e.O());
  },
]);
