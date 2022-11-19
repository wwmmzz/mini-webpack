
      (() => {
      // webpackBootstrap
      var __webpack_modules__ = {
        
            "src/b.js": (module, __unused_webpack_exports, __webpack_require__) => {
            console.log("b load");
const b = 'b';
module.exports = b;
          }
        ,
            "src/a.js": (module, __unused_webpack_exports, __webpack_require__) => {
            const b = __webpack_require__("src/b.js");
const a = 'a';
console.log("a load", b);
module.exports = a;
          }
        
      };

      var __webpack_module_cache__ = {};

      function __webpack_require__(moduleId) {
        // Check if module is in cache
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== undefined) {
          return cachedModule.exports;
        }
        // Create a new module (and put it into the cache)
        var module = (__webpack_module_cache__[moduleId] = {
          exports: {},
        });

        // Execute the module function
        __webpack_modules__[moduleId](
          module,
          module.exports,
          __webpack_require__
        );

        // Return the exports of the module
        return module.exports;
      }

      var __webpack_exports__ = {};
      // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
      (() => {
       const a = __webpack_require__("src/a.js");
console.log('entry load', a);;
      })();
    })()
    