import {
  __commonJS
} from "./chunk-ROME4SDB.js";

// node_modules/highlight.js/lib/languages/erb.js
var require_erb = __commonJS({
  "node_modules/highlight.js/lib/languages/erb.js"(exports, module) {
    function erb(hljs) {
      return {
        name: "ERB",
        subLanguage: "xml",
        contains: [
          hljs.COMMENT("<%#", "%>"),
          {
            begin: "<%[%=-]?",
            end: "[%-]?%>",
            subLanguage: "ruby",
            excludeBegin: true,
            excludeEnd: true
          }
        ]
      };
    }
    module.exports = erb;
  }
});

export {
  require_erb
};
//# sourceMappingURL=chunk-SYCDBH6M.js.map
