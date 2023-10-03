(() => {
var exports = {};
exports.id = 931;
exports.ids = [931];
exports.modules = {

/***/ 8038:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 8704:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-dom/server-rendering-stub");

/***/ }),

/***/ 7897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-server-dom-webpack/client");

/***/ }),

/***/ 6786:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ }),

/***/ 5868:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/app-render");

/***/ }),

/***/ 1844:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/get-segment-param");

/***/ }),

/***/ 6624:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/helpers/interception-routes");

/***/ }),

/***/ 5281:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module");

/***/ }),

/***/ 7085:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context");

/***/ }),

/***/ 199:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hash");

/***/ }),

/***/ 9569:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hooks-client-context");

/***/ }),

/***/ 893:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix");

/***/ }),

/***/ 7887:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/handle-smooth-scroll");

/***/ }),

/***/ 8735:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot");

/***/ }),

/***/ 8231:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path");

/***/ }),

/***/ 4614:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix");

/***/ }),

/***/ 3750:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash");

/***/ }),

/***/ 9618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/server-inserted-html");

/***/ }),

/***/ 3192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default.a),
/* harmony export */   __next_app__: () => (/* binding */ __next_app__),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   tree: () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7262);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9513);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1823);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2502);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__) if(["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
// @ts-ignore this need to be imported from next/dist to be external


const AppPageRouteModule = next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__.AppPageRouteModule;
// We inject the tree and pages here so that we can use them in the route
// module.
const tree = {
        children: [
        '',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2838)), "C:\\Users\\caleb\\Desktop\\reactPortfolio\\portfolio\\app\\page.tsx"],
          
        }]
      },
        {
        'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1921)), "C:\\Users\\caleb\\Desktop\\reactPortfolio\\portfolio\\app\\layout.tsx"],
'not-found': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5493, 23)), "next/dist/client/components/not-found-error"],
        
      }
      ]
      }.children;
const pages = ["C:\\Users\\caleb\\Desktop\\reactPortfolio\\portfolio\\app\\page.tsx"];

// @ts-expect-error - replaced by webpack/turbopack loader

const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__/* .RouteKind */ .x.APP_PAGE,
        page: "/page",
        pathname: "/",
        // The following aren't used in production.
        bundlePath: "",
        filename: "",
        appPaths: []
    },
    userland: {
        loaderTree: tree
    }
});

//# sourceMappingURL=app-page.js.map

/***/ }),

/***/ 9304:
/***/ (() => {



/***/ }),

/***/ 7035:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4457))

/***/ }),

/***/ 2988:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6505, 23))

/***/ }),

/***/ 4457:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/next/dist/client/components/noop-head.js
var noop_head = __webpack_require__(9081);
var noop_head_default = /*#__PURE__*/__webpack_require__.n(noop_head);
// EXTERNAL MODULE: ./app/styles/background.css
var background = __webpack_require__(9912);
;// CONCATENATED MODULE: ./app/components/bg-spotlight.tsx



const Background = ({ children })=>{
    let mouseX = 0;
    let mouseY = 0;
    let radialGradient = null;
    (0,react_.useEffect)(()=>{
        background();
        window.addEventListener("resize", background);
        setupGradientFollow();
        gradientFollow();
        radialGradient = document.querySelectorAll(".dot");
    }, []);
    const background = ()=>{
        let nodes = [];
        const background = document.getElementById("background");
        for(let i = 0; i < window.innerWidth; i += 50){
            for(let j = 0; j < window.innerHeight; j += 50){
                let div = document.createElement("div");
                div.style.width = "4px";
                div.style.height = "4px";
                div.style.borderRadius = "30px";
                div.className = "dot";
                div.style.position = "absolute";
                div.style.left = `${i}px`;
                div.style.top = `${j}px`;
                nodes.push(div);
            }
        }
        background?.append(...nodes);
    };
    const gradientFollow = ()=>{
        const vw = window.innerWidth;
        const maxDistance = 10 / 100 * vw; // Adjust the maximum distance for scaling and opacity changes
        if (radialGradient) {
            for (const item of radialGradient){
                const x = item.offsetLeft + item.offsetWidth / 2;
                const y = item.offsetTop + item.offsetHeight / 2;
                const distance = Math.sqrt((mouseX - x) ** 2 + (mouseY - y) ** 2);
                // Calculate a factor based on the distance
                const factor = 1 - Math.min(distance / maxDistance, 1);
                // Use linear interpolation (lerp) to smoothly adjust scale and opacity
                const scale = 1 + factor; // Start with a scale of 1 and interpolate towards 2
                const opacity = 0.18 + factor * 0.7; // Start with an opacity of 0.4 and interpolate towards 1
                item.style.transform = `scale(${scale})`;
                item.style.opacity = opacity.toString();
            }
        }
        requestAnimationFrame(gradientFollow);
    };
    const setupGradientFollow = ()=>{
        document.addEventListener("mousemove", (event)=>{
            mouseX = event.pageX - window.scrollX;
            mouseY = event.pageY - window.scrollY;
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "background",
                className: "fixed top-0 left-0"
            }),
            children
        ]
    });
};
/* harmony default export */ const bg_spotlight = (Background);

// EXTERNAL MODULE: ./app/styles/indicator.css
var indicator = __webpack_require__(3982);
;// CONCATENATED MODULE: ./app/components/scrollIndicator.tsx



function Scrollbar() {
    let scalingElement;
    (0,react_.useEffect)(()=>{
        scalingElement = document.getElementById("selected");
        setInterval(toggleScale, 2000);
    }, []);
    let isFullSize = true;
    function toggleScale() {
        console.log(scalingElement);
        if (isFullSize && scalingElement) {
            scalingElement.style.transform = "scale(0.6)";
        } else if (scalingElement) {
            scalingElement.style.transform = "scale(1)";
        }
        isFullSize = !isFullSize;
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "fixed inset-y-1/2 right-6 -translate-y-1/2 h-fit flex justify-center items-center flex-col",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "selected",
                className: "w-6 h-6 my-2 bg-neutral-50 rounded-full indicator"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-6 h-6 my-2 bg-neutral-50 rounded-full indicator"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-6 h-6 my-2 bg-neutral-50 rounded-full indicator"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./app/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




function Home() {
    (0,react_.useEffect)(()=>{
    //beginBlink();
    }, []);
    const beginBlink = ()=>{
        const blinkElements = document.querySelectorAll(".blink");
        Array.from(blinkElements).forEach((el)=>{
            let isVisible = true;
            setInterval(()=>{
                isVisible = !isVisible;
                if (el instanceof HTMLElement) {
                    el.style.visibility = isVisible ? "visible" : "hidden";
                }
            }, 900);
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((noop_head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Caleb Davey"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.googleapis.com"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.gstatic.com"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap",
                        rel: "stylesheet"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Scrollbar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(bg_spotlight, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                    className: "bg-zinc-950 snap-y snap-mandatory overflow-y-auto overflow-x-hidden h-screen",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "snap-center h-screen w-screen overflow-hidden select-none flex justify-center items-center flex-col",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "text-8xl font-light flex m-3",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        className: "uppercase font-light",
                                        children: "Hey"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        className: "blink",
                                        children: "."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        children: "\xa0"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        className: "uppercase font-light",
                                        children: "I'm Caleb"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "snap-center h-screen w-screen overflow-hidden select-none flex justify-center items-center flex-col",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "text-4xl font-light",
                                children: "More coming soon"
                            })
                        })
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 1921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout),
/* harmony export */   metadata: () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7272);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_globals_css__WEBPACK_IMPORTED_MODULE_1__);


const metadata = {
    title: "Caleb Davey",
    description: "Created by me"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("body", {
            children: children
        })
    });
}


/***/ }),

/***/ 2838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\caleb\Desktop\reactPortfolio\portfolio\app\page.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 7272:
/***/ (() => {



/***/ }),

/***/ 9912:
/***/ (() => {



/***/ }),

/***/ 3982:
/***/ (() => {



/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [748], () => (__webpack_exec__(3192)));
module.exports = __webpack_exports__;

})();