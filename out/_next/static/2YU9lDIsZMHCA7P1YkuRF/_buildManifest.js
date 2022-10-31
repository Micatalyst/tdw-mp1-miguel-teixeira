(self.__BUILD_MANIFEST = (function (s) {
  return {
    __rewrites: { beforeFiles: [], afterFiles: [], fallback: [] },
    "/": [s, "static/chunks/pages/index-3425985c45207a7a.js"],
    "/_error": ["static/chunks/pages/_error-8353112a01355ec2.js"],
    "/posts/[slug]": [
      s,
      "static/css/cf121497002c184d.css",
      "static/chunks/pages/posts/[slug]-817cbf12f1c3b3da.js",
    ],
    sortedPages: ["/", "/_app", "/_error", "/posts/[slug]"],
  };
})("static/chunks/82-25c61eb792471368.js")),
  self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
