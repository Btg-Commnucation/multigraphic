// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"jjTIW":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "cc9c7c3c11da2c2f";
module.bundle.HMR_BUNDLE_ID = "f59011da9b68b7ee";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"jRErf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _typefaceQuicksand = require("typeface-quicksand");
var _leafletCss = require("leaflet/dist/leaflet.css");
var _leaflet = require("leaflet");
var _leafletDefault = parcelHelpers.interopDefault(_leaflet);
var _bundle = require("swiper/bundle");
var _bundleDefault = parcelHelpers.interopDefault(_bundle);
var _bundle1 = require("swiper/css/bundle");
const header = document.querySelector("header");
if (header) // Si on scroll un peu dans la page, le header devient en position fixed
window.addEventListener("scroll", ()=>{
    if (window.scrollY > 0) header.classList.add("fixed");
    else header.classList.remove("fixed");
});
const windowWidth = window.innerWidth;
const productPage = document.getElementById("product");
const brands = document.querySelectorAll(".marque-list");
if (productPage) {
    const swiperThumbs = new (0, _bundleDefault.default)(".swiper-thumbs", {
        spaceBetween: 21,
        slidesPerView: 4,
        loop: false,
        freeMode: true,
        loopedSlides: 4,
        watchSlidesProgress: true
    });
    const swiper = new (0, _bundleDefault.default)(".swiper", {
        direction: "horizontal",
        loop: true,
        loopedSlides: 4,
        effect: "fade",
        fadeEffect: {
            crossFade: true
        },
        thumbs: {
            swiper: swiperThumbs
        }
    });
}
const newsletterToggle = document.querySelectorAll(".newsletter-toggle");
const newsletter = document.getElementById("newsletter-show");
const closeNewsletter = document.getElementById("close-newsletter");
const responsiveMenu = document.getElementById("responsive-menu-container");
const burger = document.getElementById("burger");
const closeBurger = document.getElementById("close-burger");
const categoriesBtn = document.querySelectorAll(".categories > ul > li > .btn");
const posts = document.querySelectorAll("#home-template > .container-narrow > article > .posts > li");
if (responsiveMenu && burger) burger.addEventListener("click", ()=>{
    responsiveMenu.classList.toggle("open");
});
if (responsiveMenu && closeBurger) closeBurger.addEventListener("click", ()=>{
    responsiveMenu.classList.remove("open");
});
if (newsletterToggle && newsletter) newsletterToggle.forEach((element)=>{
    element.addEventListener("click", ()=>{
        newsletter.classList.remove("hidden");
        if (responsiveMenu && responsiveMenu.classList.contains("open")) responsiveMenu.classList.remove("open");
    });
});
if (closeNewsletter && newsletter) closeNewsletter.addEventListener("click", ()=>{
    newsletter.classList.add("hidden");
});
const handleShowPosts = (element, posts)=>{
    if (element.id === "all") posts.forEach((post)=>post.classList.remove("hidden"));
    else posts.forEach((post)=>{
        post.classList.remove("hidden");
        !post.classList.contains(element.id) && post.classList.add("hidden");
    });
};
if (categoriesBtn && posts) categoriesBtn.forEach((element)=>{
    element.addEventListener("click", ()=>{
        categoriesBtn.forEach((element)=>element.classList.remove("current"));
        element.classList.add("current");
        handleShowPosts(element, posts);
    });
});
const mapCheck = document.getElementById("map");
if (mapCheck) {
    let map = (0, _leafletDefault.default).map("map", {
        scrollWheelZoom: false
    }).setView([
        48.91286,
        2.21152
    ], 16);
    (0, _leafletDefault.default).tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "OpenStreetMap"
    }).addTo(map);
    let icon = (0, _leafletDefault.default).icon({
        iconUrl: "../wp-content/themes/multigraphic-theme/public/marker-icon.png",
        iconSize: [
            25,
            41
        ]
    });
    let marker = (0, _leafletDefault.default).marker([
        48.912860750660975,
        2.2125231830327623
    ], {
        icon: icon
    }).addTo(map);
    marker.bindPopup("<strong class='popupstrong'>Multigraphic</strong>").openPopup();
}
const closeDevis = document.getElementById("close-devis");
const devisPopup = document.querySelector(".devis-container");
const devisToggle = document.getElementById("devis-toggle");
const formSecretFieldElement = document.getElementById("hidden");
const formSecretField = formSecretFieldElement instanceof HTMLInputElement ? formSecretFieldElement : null;
const formPageTitle = document.querySelector("#product > .hero-banner > .container-narrow > .content > h1");
const lastBreadcrumb = document.getElementById("last-breadcrumb");
if (closeDevis && devisPopup) closeDevis.addEventListener("click", ()=>{
    devisPopup.classList.add("hidden");
});
if (devisToggle && devisPopup) devisToggle.addEventListener("click", ()=>{
    devisPopup.classList.remove("hidden");
    setTimeout(()=>{
        if (formPageTitle !== null && formSecretField !== null) {
            formSecretField.value = formPageTitle.textContent || "";
            console.log(formSecretField.value);
        }
    }, 500);
});
const boutiquePage = document.querySelector("#boutique.category-product__page");
const boutique = document.querySelector("#boutique");
if (boutique) {
    const showFilters = document.getElementById("show-filters");
    const closeFilters = document.getElementById("close-filters");
    const filters = document.querySelector(".filters-section > .background-black");
    closeFilters.addEventListener("click", ()=>{
        filters.classList.add("hidden");
    });
    showFilters.addEventListener("click", ()=>{
        filters.classList.remove("hidden");
    });
}
if (boutiquePage) {
    const checkboxes = document.querySelectorAll(".checkbox");
    const pageTitle = document.querySelector("h1");
    const url = new URL(window.location.href);
    const searchParams = new URLSearchParams(url.search);
    const breadcrumb = document.getElementById("last-breadcrumb");
    const products = document.querySelectorAll(".product-element");
    const handleCheckboxChange = (checkbox)=>{
        products.forEach((product)=>{
            if (checkbox.checked) {
                checkboxes.forEach((otherCheckbox)=>{
                    if (otherCheckbox !== checkbox) otherCheckbox.checked = false;
                });
                searchParams.set("category", checkbox.value);
                url.search = searchParams.toString();
                window.history.pushState({}, "", url.toString());
                breadcrumb.textContent = checkbox.name;
                product.classList.contains(checkbox.value) ? product.classList.remove("hidden") : product.classList.add("hidden");
            } else {
                searchParams.delete("category");
                url.search = searchParams.toString();
                window.history.pushState({}, "", url.toString());
                breadcrumb.textContent = pageTitle.textContent;
                product.classList.remove("hidden");
            }
        });
    };
    checkboxes.forEach((checkbox)=>{
        if (searchParams.get("category") === checkbox.value) {
            checkbox.checked = true;
            handleCheckboxChange(checkbox);
        }
        checkbox.addEventListener("change", ()=>{
            handleCheckboxChange(checkbox);
        });
    });
}
if (brands) {
    if (windowWidth > 1330) switch(brands.length % 5){
        case 3:
            brands[brands.length - 1].style.gridColumn = "4";
            brands[brands.length - 2].style.gridColumn = "3";
            brands[brands.length - 3].style.gridColumn = "2";
            break;
        case 2:
            brands[brands.length - 1].style.gridColumn = "4 / 6";
            brands[brands.length - 2].style.gridColumn = "1 / 3";
            break;
        case 1:
            brands[brands.length - 1].style.gridColumn = "3";
            break;
    }
    else if (windowWidth > 768 && windowWidth <= 1330) switch(brands.length % 4){
        case 2:
            brands[brands.length - 1].style.gridColumn = "3 / 5";
            brands[brands.length - 2].style.gridColumn = "1 / 3";
            break;
        case 1:
            brands[brands.length - 1].style.gridColumn = "1 / 5";
            break;
    }
    else if (windowWidth <= 768 && windowWidth > 620) switch(brands.length % 3){
        case 1:
            brands[brands.length - 1].style.gridColumn = "1 / 4";
            break;
    }
    else if (windowWidth <= 620 && windowWidth > 500) switch(brands.length % 2){
        case 1:
            brands[brands.length - 1].style.gridColumn = "1 / 3";
            break;
    }
}
const heroBanner = document.querySelector("#front-page > .hero-banner");
const sliderFront = document.querySelector("#front-page > .slider-front");
if (heroBanner) {
    const swiper = new (0, _bundleDefault.default)(".mySwiper", {
        direction: "horizontal",
        loop: true,
        effect: "fade",
        fadeEffect: {
            crossFade: true
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function(index, className) {
                return '<span class="' + className + '" aria-label=Slide "' + (index + 1) + '"></span>';
            }
        }
    });
}
if (sliderFront) {
    const swiper = new (0, _bundleDefault.default)(".cate-swiper", {
        direction: "horizontal",
        loop: true,
        effect: "fade",
        fadeEffect: {
            crossFade: true
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function(index, className) {
                return '<span class="' + className + '" aria-label=Slide "' + (index + 1) + '"></span>';
            }
        }
    });
}

},{"typeface-quicksand":"sOuFC","leaflet/dist/leaflet.css":"ccXQa","leaflet":"hEHKY","swiper/bundle":"lhpcO","swiper/css/bundle":"1LunN","@parcel/transformer-js/src/esmodule-helpers.js":"iy9MI"}],"sOuFC":[function() {},{}],"ccXQa":[function() {},{}],"hEHKY":[function(require,module,exports) {
/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */ (function(global, factory) {
    factory(exports);
})(this, function(exports1) {
    "use strict";
    var version = "1.9.4";
    /*
   * @namespace Util
   *
   * Various utility functions, used by Leaflet internally.
   */ // @function extend(dest: Object, src?: Object): Object
    // Merges the properties of the `src` object (or multiple objects) into `dest` object and returns the latter. Has an `L.extend` shortcut.
    function extend(dest) {
        var i, j, len, src;
        for(j = 1, len = arguments.length; j < len; j++){
            src = arguments[j];
            for(i in src)dest[i] = src[i];
        }
        return dest;
    }
    // @function create(proto: Object, properties?: Object): Object
    // Compatibility polyfill for [Object.create](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/create)
    var create$2 = Object.create || function() {
        function F() {}
        return function(proto) {
            F.prototype = proto;
            return new F();
        };
    }();
    // @function bind(fn: Function, …): Function
    // Returns a new function bound to the arguments passed, like [Function.prototype.bind](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
    // Has a `L.bind()` shortcut.
    function bind(fn, obj) {
        var slice = Array.prototype.slice;
        if (fn.bind) return fn.bind.apply(fn, slice.call(arguments, 1));
        var args = slice.call(arguments, 2);
        return function() {
            return fn.apply(obj, args.length ? args.concat(slice.call(arguments)) : arguments);
        };
    }
    // @property lastId: Number
    // Last unique ID used by [`stamp()`](#util-stamp)
    var lastId = 0;
    // @function stamp(obj: Object): Number
    // Returns the unique ID of an object, assigning it one if it doesn't have it.
    function stamp(obj) {
        if (!("_leaflet_id" in obj)) obj["_leaflet_id"] = ++lastId;
        return obj._leaflet_id;
    }
    // @function throttle(fn: Function, time: Number, context: Object): Function
    // Returns a function which executes function `fn` with the given scope `context`
    // (so that the `this` keyword refers to `context` inside `fn`'s code). The function
    // `fn` will be called no more than one time per given amount of `time`. The arguments
    // received by the bound function will be any arguments passed when binding the
    // function, followed by any arguments passed when invoking the bound function.
    // Has an `L.throttle` shortcut.
    function throttle(fn, time, context) {
        var lock, args, wrapperFn, later;
        later = function() {
            // reset lock and call if queued
            lock = false;
            if (args) {
                wrapperFn.apply(context, args);
                args = false;
            }
        };
        wrapperFn = function() {
            if (lock) // called too soon, queue to call later
            args = arguments;
            else {
                // call and lock until later
                fn.apply(context, arguments);
                setTimeout(later, time);
                lock = true;
            }
        };
        return wrapperFn;
    }
    // @function wrapNum(num: Number, range: Number[], includeMax?: Boolean): Number
    // Returns the number `num` modulo `range` in such a way so it lies within
    // `range[0]` and `range[1]`. The returned value will be always smaller than
    // `range[1]` unless `includeMax` is set to `true`.
    function wrapNum(x, range, includeMax) {
        var max = range[1], min = range[0], d = max - min;
        return x === max && includeMax ? x : ((x - min) % d + d) % d + min;
    }
    // @function falseFn(): Function
    // Returns a function which always returns `false`.
    function falseFn() {
        return false;
    }
    // @function formatNum(num: Number, precision?: Number|false): Number
    // Returns the number `num` rounded with specified `precision`.
    // The default `precision` value is 6 decimal places.
    // `false` can be passed to skip any processing (can be useful to avoid round-off errors).
    function formatNum(num, precision) {
        if (precision === false) return num;
        var pow = Math.pow(10, precision === undefined ? 6 : precision);
        return Math.round(num * pow) / pow;
    }
    // @function trim(str: String): String
    // Compatibility polyfill for [String.prototype.trim](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)
    function trim(str) {
        return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
    }
    // @function splitWords(str: String): String[]
    // Trims and splits the string on whitespace and returns the array of parts.
    function splitWords(str) {
        return trim(str).split(/\s+/);
    }
    // @function setOptions(obj: Object, options: Object): Object
    // Merges the given properties to the `options` of the `obj` object, returning the resulting options. See `Class options`. Has an `L.setOptions` shortcut.
    function setOptions(obj, options) {
        if (!Object.prototype.hasOwnProperty.call(obj, "options")) obj.options = obj.options ? create$2(obj.options) : {};
        for(var i in options)obj.options[i] = options[i];
        return obj.options;
    }
    // @function getParamString(obj: Object, existingUrl?: String, uppercase?: Boolean): String
    // Converts an object into a parameter URL string, e.g. `{a: "foo", b: "bar"}`
    // translates to `'?a=foo&b=bar'`. If `existingUrl` is set, the parameters will
    // be appended at the end. If `uppercase` is `true`, the parameter names will
    // be uppercased (e.g. `'?A=foo&B=bar'`)
    function getParamString(obj, existingUrl, uppercase) {
        var params = [];
        for(var i in obj)params.push(encodeURIComponent(uppercase ? i.toUpperCase() : i) + "=" + encodeURIComponent(obj[i]));
        return (!existingUrl || existingUrl.indexOf("?") === -1 ? "?" : "&") + params.join("&");
    }
    var templateRe = /\{ *([\w_ -]+) *\}/g;
    // @function template(str: String, data: Object): String
    // Simple templating facility, accepts a template string of the form `'Hello {a}, {b}'`
    // and a data object like `{a: 'foo', b: 'bar'}`, returns evaluated string
    // `('Hello foo, bar')`. You can also specify functions instead of strings for
    // data values — they will be evaluated passing `data` as an argument.
    function template(str, data) {
        return str.replace(templateRe, function(str, key) {
            var value = data[key];
            if (value === undefined) throw new Error("No value provided for variable " + str);
            else if (typeof value === "function") value = value(data);
            return value;
        });
    }
    // @function isArray(obj): Boolean
    // Compatibility polyfill for [Array.isArray](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
    var isArray = Array.isArray || function(obj) {
        return Object.prototype.toString.call(obj) === "[object Array]";
    };
    // @function indexOf(array: Array, el: Object): Number
    // Compatibility polyfill for [Array.prototype.indexOf](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
    function indexOf(array, el) {
        for(var i = 0; i < array.length; i++){
            if (array[i] === el) return i;
        }
        return -1;
    }
    // @property emptyImageUrl: String
    // Data URI string containing a base64-encoded empty GIF image.
    // Used as a hack to free memory from unused images on WebKit-powered
    // mobile devices (by setting image `src` to this string).
    var emptyImageUrl = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
    // inspired by https://paulirish.com/2011/requestanimationframe-for-smart-animating/
    function getPrefixed(name) {
        return window["webkit" + name] || window["moz" + name] || window["ms" + name];
    }
    var lastTime = 0;
    // fallback for IE 7-8
    function timeoutDefer(fn) {
        var time = +new Date(), timeToCall = Math.max(0, 16 - (time - lastTime));
        lastTime = time + timeToCall;
        return window.setTimeout(fn, timeToCall);
    }
    var requestFn = window.requestAnimationFrame || getPrefixed("RequestAnimationFrame") || timeoutDefer;
    var cancelFn = window.cancelAnimationFrame || getPrefixed("CancelAnimationFrame") || getPrefixed("CancelRequestAnimationFrame") || function(id) {
        window.clearTimeout(id);
    };
    // @function requestAnimFrame(fn: Function, context?: Object, immediate?: Boolean): Number
    // Schedules `fn` to be executed when the browser repaints. `fn` is bound to
    // `context` if given. When `immediate` is set, `fn` is called immediately if
    // the browser doesn't have native support for
    // [`window.requestAnimationFrame`](https://developer.mozilla.org/docs/Web/API/window/requestAnimationFrame),
    // otherwise it's delayed. Returns a request ID that can be used to cancel the request.
    function requestAnimFrame(fn, context, immediate) {
        if (immediate && requestFn === timeoutDefer) fn.call(context);
        else return requestFn.call(window, bind(fn, context));
    }
    // @function cancelAnimFrame(id: Number): undefined
    // Cancels a previous `requestAnimFrame`. See also [window.cancelAnimationFrame](https://developer.mozilla.org/docs/Web/API/window/cancelAnimationFrame).
    function cancelAnimFrame(id) {
        if (id) cancelFn.call(window, id);
    }
    var Util = {
        __proto__: null,
        extend: extend,
        create: create$2,
        bind: bind,
        get lastId () {
            return lastId;
        },
        stamp: stamp,
        throttle: throttle,
        wrapNum: wrapNum,
        falseFn: falseFn,
        formatNum: formatNum,
        trim: trim,
        splitWords: splitWords,
        setOptions: setOptions,
        getParamString: getParamString,
        template: template,
        isArray: isArray,
        indexOf: indexOf,
        emptyImageUrl: emptyImageUrl,
        requestFn: requestFn,
        cancelFn: cancelFn,
        requestAnimFrame: requestAnimFrame,
        cancelAnimFrame: cancelAnimFrame
    };
    // @class Class
    // @aka L.Class
    // @section
    // @uninheritable
    // Thanks to John Resig and Dean Edwards for inspiration!
    function Class() {}
    Class.extend = function(props) {
        // @function extend(props: Object): Function
        // [Extends the current class](#class-inheritance) given the properties to be included.
        // Returns a Javascript function that is a class constructor (to be called with `new`).
        var NewClass = function() {
            setOptions(this);
            // call the constructor
            if (this.initialize) this.initialize.apply(this, arguments);
            // call all constructor hooks
            this.callInitHooks();
        };
        var parentProto = NewClass.__super__ = this.prototype;
        var proto = create$2(parentProto);
        proto.constructor = NewClass;
        NewClass.prototype = proto;
        // inherit parent's statics
        for(var i in this)if (Object.prototype.hasOwnProperty.call(this, i) && i !== "prototype" && i !== "__super__") NewClass[i] = this[i];
        // mix static properties into the class
        if (props.statics) extend(NewClass, props.statics);
        // mix includes into the prototype
        if (props.includes) {
            checkDeprecatedMixinEvents(props.includes);
            extend.apply(null, [
                proto
            ].concat(props.includes));
        }
        // mix given properties into the prototype
        extend(proto, props);
        delete proto.statics;
        delete proto.includes;
        // merge options
        if (proto.options) {
            proto.options = parentProto.options ? create$2(parentProto.options) : {};
            extend(proto.options, props.options);
        }
        proto._initHooks = [];
        // add method for calling all hooks
        proto.callInitHooks = function() {
            if (this._initHooksCalled) return;
            if (parentProto.callInitHooks) parentProto.callInitHooks.call(this);
            this._initHooksCalled = true;
            for(var i = 0, len = proto._initHooks.length; i < len; i++)proto._initHooks[i].call(this);
        };
        return NewClass;
    };
    // @function include(properties: Object): this
    // [Includes a mixin](#class-includes) into the current class.
    Class.include = function(props) {
        var parentOptions = this.prototype.options;
        extend(this.prototype, props);
        if (props.options) {
            this.prototype.options = parentOptions;
            this.mergeOptions(props.options);
        }
        return this;
    };
    // @function mergeOptions(options: Object): this
    // [Merges `options`](#class-options) into the defaults of the class.
    Class.mergeOptions = function(options) {
        extend(this.prototype.options, options);
        return this;
    };
    // @function addInitHook(fn: Function): this
    // Adds a [constructor hook](#class-constructor-hooks) to the class.
    Class.addInitHook = function(fn) {
        var args = Array.prototype.slice.call(arguments, 1);
        var init = typeof fn === "function" ? fn : function() {
            this[fn].apply(this, args);
        };
        this.prototype._initHooks = this.prototype._initHooks || [];
        this.prototype._initHooks.push(init);
        return this;
    };
    function checkDeprecatedMixinEvents(includes) {
        /* global L: true */ if (typeof L === "undefined" || !L || !L.Mixin) return;
        includes = isArray(includes) ? includes : [
            includes
        ];
        for(var i = 0; i < includes.length; i++)if (includes[i] === L.Mixin.Events) console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", new Error().stack);
    }
    /*
   * @class Evented
   * @aka L.Evented
   * @inherits Class
   *
   * A set of methods shared between event-powered classes (like `Map` and `Marker`). Generally, events allow you to execute some function when something happens with an object (e.g. the user clicks on the map, causing the map to fire `'click'` event).
   *
   * @example
   *
   * ```js
   * map.on('click', function(e) {
   * 	alert(e.latlng);
   * } );
   * ```
   *
   * Leaflet deals with event listeners by reference, so if you want to add a listener and then remove it, define it as a function:
   *
   * ```js
   * function onClick(e) { ... }
   *
   * map.on('click', onClick);
   * map.off('click', onClick);
   * ```
   */ var Events = {
        /* @method on(type: String, fn: Function, context?: Object): this
  	 * Adds a listener function (`fn`) to a particular event type of the object. You can optionally specify the context of the listener (object the this keyword will point to). You can also pass several space-separated types (e.g. `'click dblclick'`).
  	 *
  	 * @alternative
  	 * @method on(eventMap: Object): this
  	 * Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
  	 */ on: function(types, fn, context) {
            // types can be a map of types/handlers
            if (typeof types === "object") for(var type in types)// we don't process space-separated events here for performance;
            // it's a hot path since Layer uses the on(obj) syntax
            this._on(type, types[type], fn);
            else {
                // types can be a string of space-separated words
                types = splitWords(types);
                for(var i = 0, len = types.length; i < len; i++)this._on(types[i], fn, context);
            }
            return this;
        },
        /* @method off(type: String, fn?: Function, context?: Object): this
  	 * Removes a previously added listener function. If no function is specified, it will remove all the listeners of that particular event from the object. Note that if you passed a custom context to `on`, you must pass the same context to `off` in order to remove the listener.
  	 *
  	 * @alternative
  	 * @method off(eventMap: Object): this
  	 * Removes a set of type/listener pairs.
  	 *
  	 * @alternative
  	 * @method off: this
  	 * Removes all listeners to all events on the object. This includes implicitly attached events.
  	 */ off: function(types, fn, context) {
            if (!arguments.length) // clear all listeners if called without arguments
            delete this._events;
            else if (typeof types === "object") for(var type in types)this._off(type, types[type], fn);
            else {
                types = splitWords(types);
                var removeAll = arguments.length === 1;
                for(var i = 0, len = types.length; i < len; i++)if (removeAll) this._off(types[i]);
                else this._off(types[i], fn, context);
            }
            return this;
        },
        // attach listener (without syntactic sugar now)
        _on: function(type, fn, context, _once) {
            if (typeof fn !== "function") {
                console.warn("wrong listener type: " + typeof fn);
                return;
            }
            // check if fn already there
            if (this._listens(type, fn, context) !== false) return;
            if (context === this) // Less memory footprint.
            context = undefined;
            var newListener = {
                fn: fn,
                ctx: context
            };
            if (_once) newListener.once = true;
            this._events = this._events || {};
            this._events[type] = this._events[type] || [];
            this._events[type].push(newListener);
        },
        _off: function(type, fn, context) {
            var listeners, i, len;
            if (!this._events) return;
            listeners = this._events[type];
            if (!listeners) return;
            if (arguments.length === 1) {
                if (this._firingCount) // Set all removed listeners to noop
                // so they are not called if remove happens in fire
                for(i = 0, len = listeners.length; i < len; i++)listeners[i].fn = falseFn;
                // clear all listeners for a type if function isn't specified
                delete this._events[type];
                return;
            }
            if (typeof fn !== "function") {
                console.warn("wrong listener type: " + typeof fn);
                return;
            }
            // find fn and remove it
            var index = this._listens(type, fn, context);
            if (index !== false) {
                var listener = listeners[index];
                if (this._firingCount) {
                    // set the removed listener to noop so that's not called if remove happens in fire
                    listener.fn = falseFn;
                    /* copy array in case events are being fired */ this._events[type] = listeners = listeners.slice();
                }
                listeners.splice(index, 1);
            }
        },
        // @method fire(type: String, data?: Object, propagate?: Boolean): this
        // Fires an event of the specified type. You can optionally provide a data
        // object — the first argument of the listener function will contain its
        // properties. The event can optionally be propagated to event parents.
        fire: function(type, data, propagate) {
            if (!this.listens(type, propagate)) return this;
            var event = extend({}, data, {
                type: type,
                target: this,
                sourceTarget: data && data.sourceTarget || this
            });
            if (this._events) {
                var listeners = this._events[type];
                if (listeners) {
                    this._firingCount = this._firingCount + 1 || 1;
                    for(var i = 0, len = listeners.length; i < len; i++){
                        var l = listeners[i];
                        // off overwrites l.fn, so we need to copy fn to a var
                        var fn = l.fn;
                        if (l.once) this.off(type, fn, l.ctx);
                        fn.call(l.ctx || this, event);
                    }
                    this._firingCount--;
                }
            }
            if (propagate) // propagate the event to parents (set with addEventParent)
            this._propagateEvent(event);
            return this;
        },
        // @method listens(type: String, propagate?: Boolean): Boolean
        // @method listens(type: String, fn: Function, context?: Object, propagate?: Boolean): Boolean
        // Returns `true` if a particular event type has any listeners attached to it.
        // The verification can optionally be propagated, it will return `true` if parents have the listener attached to it.
        listens: function(type, fn, context, propagate) {
            if (typeof type !== "string") console.warn('"string" type argument expected');
            // we don't overwrite the input `fn` value, because we need to use it for propagation
            var _fn = fn;
            if (typeof fn !== "function") {
                propagate = !!fn;
                _fn = undefined;
                context = undefined;
            }
            var listeners = this._events && this._events[type];
            if (listeners && listeners.length) {
                if (this._listens(type, _fn, context) !== false) return true;
            }
            if (propagate) // also check parents for listeners if event propagates
            for(var id in this._eventParents){
                if (this._eventParents[id].listens(type, fn, context, propagate)) return true;
            }
            return false;
        },
        // returns the index (number) or false
        _listens: function(type, fn, context) {
            if (!this._events) return false;
            var listeners = this._events[type] || [];
            if (!fn) return !!listeners.length;
            if (context === this) // Less memory footprint.
            context = undefined;
            for(var i = 0, len = listeners.length; i < len; i++){
                if (listeners[i].fn === fn && listeners[i].ctx === context) return i;
            }
            return false;
        },
        // @method once(…): this
        // Behaves as [`on(…)`](#evented-on), except the listener will only get fired once and then removed.
        once: function(types, fn, context) {
            // types can be a map of types/handlers
            if (typeof types === "object") for(var type in types)// we don't process space-separated events here for performance;
            // it's a hot path since Layer uses the on(obj) syntax
            this._on(type, types[type], fn, true);
            else {
                // types can be a string of space-separated words
                types = splitWords(types);
                for(var i = 0, len = types.length; i < len; i++)this._on(types[i], fn, context, true);
            }
            return this;
        },
        // @method addEventParent(obj: Evented): this
        // Adds an event parent - an `Evented` that will receive propagated events
        addEventParent: function(obj) {
            this._eventParents = this._eventParents || {};
            this._eventParents[stamp(obj)] = obj;
            return this;
        },
        // @method removeEventParent(obj: Evented): this
        // Removes an event parent, so it will stop receiving propagated events
        removeEventParent: function(obj) {
            if (this._eventParents) delete this._eventParents[stamp(obj)];
            return this;
        },
        _propagateEvent: function(e) {
            for(var id in this._eventParents)this._eventParents[id].fire(e.type, extend({
                layer: e.target,
                propagatedFrom: e.target
            }, e), true);
        }
    };
    // aliases; we should ditch those eventually
    // @method addEventListener(…): this
    // Alias to [`on(…)`](#evented-on)
    Events.addEventListener = Events.on;
    // @method removeEventListener(…): this
    // Alias to [`off(…)`](#evented-off)
    // @method clearAllEventListeners(…): this
    // Alias to [`off()`](#evented-off)
    Events.removeEventListener = Events.clearAllEventListeners = Events.off;
    // @method addOneTimeEventListener(…): this
    // Alias to [`once(…)`](#evented-once)
    Events.addOneTimeEventListener = Events.once;
    // @method fireEvent(…): this
    // Alias to [`fire(…)`](#evented-fire)
    Events.fireEvent = Events.fire;
    // @method hasEventListeners(…): Boolean
    // Alias to [`listens(…)`](#evented-listens)
    Events.hasEventListeners = Events.listens;
    var Evented = Class.extend(Events);
    /*
   * @class Point
   * @aka L.Point
   *
   * Represents a point with `x` and `y` coordinates in pixels.
   *
   * @example
   *
   * ```js
   * var point = L.point(200, 300);
   * ```
   *
   * All Leaflet methods and options that accept `Point` objects also accept them in a simple Array form (unless noted otherwise), so these lines are equivalent:
   *
   * ```js
   * map.panBy([200, 300]);
   * map.panBy(L.point(200, 300));
   * ```
   *
   * Note that `Point` does not inherit from Leaflet's `Class` object,
   * which means new classes can't inherit from it, and new methods
   * can't be added to it with the `include` function.
   */ function Point(x, y, round) {
        // @property x: Number; The `x` coordinate of the point
        this.x = round ? Math.round(x) : x;
        // @property y: Number; The `y` coordinate of the point
        this.y = round ? Math.round(y) : y;
    }
    var trunc = Math.trunc || function(v) {
        return v > 0 ? Math.floor(v) : Math.ceil(v);
    };
    Point.prototype = {
        // @method clone(): Point
        // Returns a copy of the current point.
        clone: function() {
            return new Point(this.x, this.y);
        },
        // @method add(otherPoint: Point): Point
        // Returns the result of addition of the current and the given points.
        add: function(point) {
            // non-destructive, returns a new point
            return this.clone()._add(toPoint(point));
        },
        _add: function(point) {
            // destructive, used directly for performance in situations where it's safe to modify existing point
            this.x += point.x;
            this.y += point.y;
            return this;
        },
        // @method subtract(otherPoint: Point): Point
        // Returns the result of subtraction of the given point from the current.
        subtract: function(point) {
            return this.clone()._subtract(toPoint(point));
        },
        _subtract: function(point) {
            this.x -= point.x;
            this.y -= point.y;
            return this;
        },
        // @method divideBy(num: Number): Point
        // Returns the result of division of the current point by the given number.
        divideBy: function(num) {
            return this.clone()._divideBy(num);
        },
        _divideBy: function(num) {
            this.x /= num;
            this.y /= num;
            return this;
        },
        // @method multiplyBy(num: Number): Point
        // Returns the result of multiplication of the current point by the given number.
        multiplyBy: function(num) {
            return this.clone()._multiplyBy(num);
        },
        _multiplyBy: function(num) {
            this.x *= num;
            this.y *= num;
            return this;
        },
        // @method scaleBy(scale: Point): Point
        // Multiply each coordinate of the current point by each coordinate of
        // `scale`. In linear algebra terms, multiply the point by the
        // [scaling matrix](https://en.wikipedia.org/wiki/Scaling_%28geometry%29#Matrix_representation)
        // defined by `scale`.
        scaleBy: function(point) {
            return new Point(this.x * point.x, this.y * point.y);
        },
        // @method unscaleBy(scale: Point): Point
        // Inverse of `scaleBy`. Divide each coordinate of the current point by
        // each coordinate of `scale`.
        unscaleBy: function(point) {
            return new Point(this.x / point.x, this.y / point.y);
        },
        // @method round(): Point
        // Returns a copy of the current point with rounded coordinates.
        round: function() {
            return this.clone()._round();
        },
        _round: function() {
            this.x = Math.round(this.x);
            this.y = Math.round(this.y);
            return this;
        },
        // @method floor(): Point
        // Returns a copy of the current point with floored coordinates (rounded down).
        floor: function() {
            return this.clone()._floor();
        },
        _floor: function() {
            this.x = Math.floor(this.x);
            this.y = Math.floor(this.y);
            return this;
        },
        // @method ceil(): Point
        // Returns a copy of the current point with ceiled coordinates (rounded up).
        ceil: function() {
            return this.clone()._ceil();
        },
        _ceil: function() {
            this.x = Math.ceil(this.x);
            this.y = Math.ceil(this.y);
            return this;
        },
        // @method trunc(): Point
        // Returns a copy of the current point with truncated coordinates (rounded towards zero).
        trunc: function() {
            return this.clone()._trunc();
        },
        _trunc: function() {
            this.x = trunc(this.x);
            this.y = trunc(this.y);
            return this;
        },
        // @method distanceTo(otherPoint: Point): Number
        // Returns the cartesian distance between the current and the given points.
        distanceTo: function(point) {
            point = toPoint(point);
            var x = point.x - this.x, y = point.y - this.y;
            return Math.sqrt(x * x + y * y);
        },
        // @method equals(otherPoint: Point): Boolean
        // Returns `true` if the given point has the same coordinates.
        equals: function(point) {
            point = toPoint(point);
            return point.x === this.x && point.y === this.y;
        },
        // @method contains(otherPoint: Point): Boolean
        // Returns `true` if both coordinates of the given point are less than the corresponding current point coordinates (in absolute values).
        contains: function(point) {
            point = toPoint(point);
            return Math.abs(point.x) <= Math.abs(this.x) && Math.abs(point.y) <= Math.abs(this.y);
        },
        // @method toString(): String
        // Returns a string representation of the point for debugging purposes.
        toString: function() {
            return "Point(" + formatNum(this.x) + ", " + formatNum(this.y) + ")";
        }
    };
    // @factory L.point(x: Number, y: Number, round?: Boolean)
    // Creates a Point object with the given `x` and `y` coordinates. If optional `round` is set to true, rounds the `x` and `y` values.
    // @alternative
    // @factory L.point(coords: Number[])
    // Expects an array of the form `[x, y]` instead.
    // @alternative
    // @factory L.point(coords: Object)
    // Expects a plain object of the form `{x: Number, y: Number}` instead.
    function toPoint(x, y, round) {
        if (x instanceof Point) return x;
        if (isArray(x)) return new Point(x[0], x[1]);
        if (x === undefined || x === null) return x;
        if (typeof x === "object" && "x" in x && "y" in x) return new Point(x.x, x.y);
        return new Point(x, y, round);
    }
    /*
   * @class Bounds
   * @aka L.Bounds
   *
   * Represents a rectangular area in pixel coordinates.
   *
   * @example
   *
   * ```js
   * var p1 = L.point(10, 10),
   * p2 = L.point(40, 60),
   * bounds = L.bounds(p1, p2);
   * ```
   *
   * All Leaflet methods that accept `Bounds` objects also accept them in a simple Array form (unless noted otherwise), so the bounds example above can be passed like this:
   *
   * ```js
   * otherBounds.intersects([[10, 10], [40, 60]]);
   * ```
   *
   * Note that `Bounds` does not inherit from Leaflet's `Class` object,
   * which means new classes can't inherit from it, and new methods
   * can't be added to it with the `include` function.
   */ function Bounds(a, b) {
        if (!a) return;
        var points = b ? [
            a,
            b
        ] : a;
        for(var i = 0, len = points.length; i < len; i++)this.extend(points[i]);
    }
    Bounds.prototype = {
        // @method extend(point: Point): this
        // Extends the bounds to contain the given point.
        // @alternative
        // @method extend(otherBounds: Bounds): this
        // Extend the bounds to contain the given bounds
        extend: function(obj) {
            var min2, max2;
            if (!obj) return this;
            if (obj instanceof Point || typeof obj[0] === "number" || "x" in obj) min2 = max2 = toPoint(obj);
            else {
                obj = toBounds(obj);
                min2 = obj.min;
                max2 = obj.max;
                if (!min2 || !max2) return this;
            }
            // @property min: Point
            // The top left corner of the rectangle.
            // @property max: Point
            // The bottom right corner of the rectangle.
            if (!this.min && !this.max) {
                this.min = min2.clone();
                this.max = max2.clone();
            } else {
                this.min.x = Math.min(min2.x, this.min.x);
                this.max.x = Math.max(max2.x, this.max.x);
                this.min.y = Math.min(min2.y, this.min.y);
                this.max.y = Math.max(max2.y, this.max.y);
            }
            return this;
        },
        // @method getCenter(round?: Boolean): Point
        // Returns the center point of the bounds.
        getCenter: function(round) {
            return toPoint((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, round);
        },
        // @method getBottomLeft(): Point
        // Returns the bottom-left point of the bounds.
        getBottomLeft: function() {
            return toPoint(this.min.x, this.max.y);
        },
        // @method getTopRight(): Point
        // Returns the top-right point of the bounds.
        getTopRight: function() {
            return toPoint(this.max.x, this.min.y);
        },
        // @method getTopLeft(): Point
        // Returns the top-left point of the bounds (i.e. [`this.min`](#bounds-min)).
        getTopLeft: function() {
            return this.min; // left, top
        },
        // @method getBottomRight(): Point
        // Returns the bottom-right point of the bounds (i.e. [`this.max`](#bounds-max)).
        getBottomRight: function() {
            return this.max; // right, bottom
        },
        // @method getSize(): Point
        // Returns the size of the given bounds
        getSize: function() {
            return this.max.subtract(this.min);
        },
        // @method contains(otherBounds: Bounds): Boolean
        // Returns `true` if the rectangle contains the given one.
        // @alternative
        // @method contains(point: Point): Boolean
        // Returns `true` if the rectangle contains the given point.
        contains: function(obj) {
            var min, max;
            if (typeof obj[0] === "number" || obj instanceof Point) obj = toPoint(obj);
            else obj = toBounds(obj);
            if (obj instanceof Bounds) {
                min = obj.min;
                max = obj.max;
            } else min = max = obj;
            return min.x >= this.min.x && max.x <= this.max.x && min.y >= this.min.y && max.y <= this.max.y;
        },
        // @method intersects(otherBounds: Bounds): Boolean
        // Returns `true` if the rectangle intersects the given bounds. Two bounds
        // intersect if they have at least one point in common.
        intersects: function(bounds) {
            bounds = toBounds(bounds);
            var min = this.min, max = this.max, min2 = bounds.min, max2 = bounds.max, xIntersects = max2.x >= min.x && min2.x <= max.x, yIntersects = max2.y >= min.y && min2.y <= max.y;
            return xIntersects && yIntersects;
        },
        // @method overlaps(otherBounds: Bounds): Boolean
        // Returns `true` if the rectangle overlaps the given bounds. Two bounds
        // overlap if their intersection is an area.
        overlaps: function(bounds) {
            bounds = toBounds(bounds);
            var min = this.min, max = this.max, min2 = bounds.min, max2 = bounds.max, xOverlaps = max2.x > min.x && min2.x < max.x, yOverlaps = max2.y > min.y && min2.y < max.y;
            return xOverlaps && yOverlaps;
        },
        // @method isValid(): Boolean
        // Returns `true` if the bounds are properly initialized.
        isValid: function() {
            return !!(this.min && this.max);
        },
        // @method pad(bufferRatio: Number): Bounds
        // Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
        // For example, a ratio of 0.5 extends the bounds by 50% in each direction.
        // Negative values will retract the bounds.
        pad: function(bufferRatio) {
            var min = this.min, max = this.max, heightBuffer = Math.abs(min.x - max.x) * bufferRatio, widthBuffer = Math.abs(min.y - max.y) * bufferRatio;
            return toBounds(toPoint(min.x - heightBuffer, min.y - widthBuffer), toPoint(max.x + heightBuffer, max.y + widthBuffer));
        },
        // @method equals(otherBounds: Bounds): Boolean
        // Returns `true` if the rectangle is equivalent to the given bounds.
        equals: function(bounds) {
            if (!bounds) return false;
            bounds = toBounds(bounds);
            return this.min.equals(bounds.getTopLeft()) && this.max.equals(bounds.getBottomRight());
        }
    };
    // @factory L.bounds(corner1: Point, corner2: Point)
    // Creates a Bounds object from two corners coordinate pairs.
    // @alternative
    // @factory L.bounds(points: Point[])
    // Creates a Bounds object from the given array of points.
    function toBounds(a, b) {
        if (!a || a instanceof Bounds) return a;
        return new Bounds(a, b);
    }
    /*
   * @class LatLngBounds
   * @aka L.LatLngBounds
   *
   * Represents a rectangular geographical area on a map.
   *
   * @example
   *
   * ```js
   * var corner1 = L.latLng(40.712, -74.227),
   * corner2 = L.latLng(40.774, -74.125),
   * bounds = L.latLngBounds(corner1, corner2);
   * ```
   *
   * All Leaflet methods that accept LatLngBounds objects also accept them in a simple Array form (unless noted otherwise), so the bounds example above can be passed like this:
   *
   * ```js
   * map.fitBounds([
   * 	[40.712, -74.227],
   * 	[40.774, -74.125]
   * ]);
   * ```
   *
   * Caution: if the area crosses the antimeridian (often confused with the International Date Line), you must specify corners _outside_ the [-180, 180] degrees longitude range.
   *
   * Note that `LatLngBounds` does not inherit from Leaflet's `Class` object,
   * which means new classes can't inherit from it, and new methods
   * can't be added to it with the `include` function.
   */ function LatLngBounds(corner1, corner2) {
        if (!corner1) return;
        var latlngs = corner2 ? [
            corner1,
            corner2
        ] : corner1;
        for(var i = 0, len = latlngs.length; i < len; i++)this.extend(latlngs[i]);
    }
    LatLngBounds.prototype = {
        // @method extend(latlng: LatLng): this
        // Extend the bounds to contain the given point
        // @alternative
        // @method extend(otherBounds: LatLngBounds): this
        // Extend the bounds to contain the given bounds
        extend: function(obj) {
            var sw = this._southWest, ne = this._northEast, sw2, ne2;
            if (obj instanceof LatLng) {
                sw2 = obj;
                ne2 = obj;
            } else if (obj instanceof LatLngBounds) {
                sw2 = obj._southWest;
                ne2 = obj._northEast;
                if (!sw2 || !ne2) return this;
            } else return obj ? this.extend(toLatLng(obj) || toLatLngBounds(obj)) : this;
            if (!sw && !ne) {
                this._southWest = new LatLng(sw2.lat, sw2.lng);
                this._northEast = new LatLng(ne2.lat, ne2.lng);
            } else {
                sw.lat = Math.min(sw2.lat, sw.lat);
                sw.lng = Math.min(sw2.lng, sw.lng);
                ne.lat = Math.max(ne2.lat, ne.lat);
                ne.lng = Math.max(ne2.lng, ne.lng);
            }
            return this;
        },
        // @method pad(bufferRatio: Number): LatLngBounds
        // Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
        // For example, a ratio of 0.5 extends the bounds by 50% in each direction.
        // Negative values will retract the bounds.
        pad: function(bufferRatio) {
            var sw = this._southWest, ne = this._northEast, heightBuffer = Math.abs(sw.lat - ne.lat) * bufferRatio, widthBuffer = Math.abs(sw.lng - ne.lng) * bufferRatio;
            return new LatLngBounds(new LatLng(sw.lat - heightBuffer, sw.lng - widthBuffer), new LatLng(ne.lat + heightBuffer, ne.lng + widthBuffer));
        },
        // @method getCenter(): LatLng
        // Returns the center point of the bounds.
        getCenter: function() {
            return new LatLng((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2);
        },
        // @method getSouthWest(): LatLng
        // Returns the south-west point of the bounds.
        getSouthWest: function() {
            return this._southWest;
        },
        // @method getNorthEast(): LatLng
        // Returns the north-east point of the bounds.
        getNorthEast: function() {
            return this._northEast;
        },
        // @method getNorthWest(): LatLng
        // Returns the north-west point of the bounds.
        getNorthWest: function() {
            return new LatLng(this.getNorth(), this.getWest());
        },
        // @method getSouthEast(): LatLng
        // Returns the south-east point of the bounds.
        getSouthEast: function() {
            return new LatLng(this.getSouth(), this.getEast());
        },
        // @method getWest(): Number
        // Returns the west longitude of the bounds
        getWest: function() {
            return this._southWest.lng;
        },
        // @method getSouth(): Number
        // Returns the south latitude of the bounds
        getSouth: function() {
            return this._southWest.lat;
        },
        // @method getEast(): Number
        // Returns the east longitude of the bounds
        getEast: function() {
            return this._northEast.lng;
        },
        // @method getNorth(): Number
        // Returns the north latitude of the bounds
        getNorth: function() {
            return this._northEast.lat;
        },
        // @method contains(otherBounds: LatLngBounds): Boolean
        // Returns `true` if the rectangle contains the given one.
        // @alternative
        // @method contains (latlng: LatLng): Boolean
        // Returns `true` if the rectangle contains the given point.
        contains: function(obj) {
            if (typeof obj[0] === "number" || obj instanceof LatLng || "lat" in obj) obj = toLatLng(obj);
            else obj = toLatLngBounds(obj);
            var sw = this._southWest, ne = this._northEast, sw2, ne2;
            if (obj instanceof LatLngBounds) {
                sw2 = obj.getSouthWest();
                ne2 = obj.getNorthEast();
            } else sw2 = ne2 = obj;
            return sw2.lat >= sw.lat && ne2.lat <= ne.lat && sw2.lng >= sw.lng && ne2.lng <= ne.lng;
        },
        // @method intersects(otherBounds: LatLngBounds): Boolean
        // Returns `true` if the rectangle intersects the given bounds. Two bounds intersect if they have at least one point in common.
        intersects: function(bounds) {
            bounds = toLatLngBounds(bounds);
            var sw = this._southWest, ne = this._northEast, sw2 = bounds.getSouthWest(), ne2 = bounds.getNorthEast(), latIntersects = ne2.lat >= sw.lat && sw2.lat <= ne.lat, lngIntersects = ne2.lng >= sw.lng && sw2.lng <= ne.lng;
            return latIntersects && lngIntersects;
        },
        // @method overlaps(otherBounds: LatLngBounds): Boolean
        // Returns `true` if the rectangle overlaps the given bounds. Two bounds overlap if their intersection is an area.
        overlaps: function(bounds) {
            bounds = toLatLngBounds(bounds);
            var sw = this._southWest, ne = this._northEast, sw2 = bounds.getSouthWest(), ne2 = bounds.getNorthEast(), latOverlaps = ne2.lat > sw.lat && sw2.lat < ne.lat, lngOverlaps = ne2.lng > sw.lng && sw2.lng < ne.lng;
            return latOverlaps && lngOverlaps;
        },
        // @method toBBoxString(): String
        // Returns a string with bounding box coordinates in a 'southwest_lng,southwest_lat,northeast_lng,northeast_lat' format. Useful for sending requests to web services that return geo data.
        toBBoxString: function() {
            return [
                this.getWest(),
                this.getSouth(),
                this.getEast(),
                this.getNorth()
            ].join(",");
        },
        // @method equals(otherBounds: LatLngBounds, maxMargin?: Number): Boolean
        // Returns `true` if the rectangle is equivalent (within a small margin of error) to the given bounds. The margin of error can be overridden by setting `maxMargin` to a small number.
        equals: function(bounds, maxMargin) {
            if (!bounds) return false;
            bounds = toLatLngBounds(bounds);
            return this._southWest.equals(bounds.getSouthWest(), maxMargin) && this._northEast.equals(bounds.getNorthEast(), maxMargin);
        },
        // @method isValid(): Boolean
        // Returns `true` if the bounds are properly initialized.
        isValid: function() {
            return !!(this._southWest && this._northEast);
        }
    };
    // TODO International date line?
    // @factory L.latLngBounds(corner1: LatLng, corner2: LatLng)
    // Creates a `LatLngBounds` object by defining two diagonally opposite corners of the rectangle.
    // @alternative
    // @factory L.latLngBounds(latlngs: LatLng[])
    // Creates a `LatLngBounds` object defined by the geographical points it contains. Very useful for zooming the map to fit a particular set of locations with [`fitBounds`](#map-fitbounds).
    function toLatLngBounds(a, b) {
        if (a instanceof LatLngBounds) return a;
        return new LatLngBounds(a, b);
    }
    /* @class LatLng
   * @aka L.LatLng
   *
   * Represents a geographical point with a certain latitude and longitude.
   *
   * @example
   *
   * ```
   * var latlng = L.latLng(50.5, 30.5);
   * ```
   *
   * All Leaflet methods that accept LatLng objects also accept them in a simple Array form and simple object form (unless noted otherwise), so these lines are equivalent:
   *
   * ```
   * map.panTo([50, 30]);
   * map.panTo({lon: 30, lat: 50});
   * map.panTo({lat: 50, lng: 30});
   * map.panTo(L.latLng(50, 30));
   * ```
   *
   * Note that `LatLng` does not inherit from Leaflet's `Class` object,
   * which means new classes can't inherit from it, and new methods
   * can't be added to it with the `include` function.
   */ function LatLng(lat, lng, alt) {
        if (isNaN(lat) || isNaN(lng)) throw new Error("Invalid LatLng object: (" + lat + ", " + lng + ")");
        // @property lat: Number
        // Latitude in degrees
        this.lat = +lat;
        // @property lng: Number
        // Longitude in degrees
        this.lng = +lng;
        // @property alt: Number
        // Altitude in meters (optional)
        if (alt !== undefined) this.alt = +alt;
    }
    LatLng.prototype = {
        // @method equals(otherLatLng: LatLng, maxMargin?: Number): Boolean
        // Returns `true` if the given `LatLng` point is at the same position (within a small margin of error). The margin of error can be overridden by setting `maxMargin` to a small number.
        equals: function(obj, maxMargin) {
            if (!obj) return false;
            obj = toLatLng(obj);
            var margin = Math.max(Math.abs(this.lat - obj.lat), Math.abs(this.lng - obj.lng));
            return margin <= (maxMargin === undefined ? 1.0E-9 : maxMargin);
        },
        // @method toString(): String
        // Returns a string representation of the point (for debugging purposes).
        toString: function(precision) {
            return "LatLng(" + formatNum(this.lat, precision) + ", " + formatNum(this.lng, precision) + ")";
        },
        // @method distanceTo(otherLatLng: LatLng): Number
        // Returns the distance (in meters) to the given `LatLng` calculated using the [Spherical Law of Cosines](https://en.wikipedia.org/wiki/Spherical_law_of_cosines).
        distanceTo: function(other) {
            return Earth.distance(this, toLatLng(other));
        },
        // @method wrap(): LatLng
        // Returns a new `LatLng` object with the longitude wrapped so it's always between -180 and +180 degrees.
        wrap: function() {
            return Earth.wrapLatLng(this);
        },
        // @method toBounds(sizeInMeters: Number): LatLngBounds
        // Returns a new `LatLngBounds` object in which each boundary is `sizeInMeters/2` meters apart from the `LatLng`.
        toBounds: function(sizeInMeters) {
            var latAccuracy = 180 * sizeInMeters / 40075017, lngAccuracy = latAccuracy / Math.cos(Math.PI / 180 * this.lat);
            return toLatLngBounds([
                this.lat - latAccuracy,
                this.lng - lngAccuracy
            ], [
                this.lat + latAccuracy,
                this.lng + lngAccuracy
            ]);
        },
        clone: function() {
            return new LatLng(this.lat, this.lng, this.alt);
        }
    };
    // @factory L.latLng(latitude: Number, longitude: Number, altitude?: Number): LatLng
    // Creates an object representing a geographical point with the given latitude and longitude (and optionally altitude).
    // @alternative
    // @factory L.latLng(coords: Array): LatLng
    // Expects an array of the form `[Number, Number]` or `[Number, Number, Number]` instead.
    // @alternative
    // @factory L.latLng(coords: Object): LatLng
    // Expects an plain object of the form `{lat: Number, lng: Number}` or `{lat: Number, lng: Number, alt: Number}` instead.
    function toLatLng(a, b, c) {
        if (a instanceof LatLng) return a;
        if (isArray(a) && typeof a[0] !== "object") {
            if (a.length === 3) return new LatLng(a[0], a[1], a[2]);
            if (a.length === 2) return new LatLng(a[0], a[1]);
            return null;
        }
        if (a === undefined || a === null) return a;
        if (typeof a === "object" && "lat" in a) return new LatLng(a.lat, "lng" in a ? a.lng : a.lon, a.alt);
        if (b === undefined) return null;
        return new LatLng(a, b, c);
    }
    /*
   * @namespace CRS
   * @crs L.CRS.Base
   * Object that defines coordinate reference systems for projecting
   * geographical points into pixel (screen) coordinates and back (and to
   * coordinates in other units for [WMS](https://en.wikipedia.org/wiki/Web_Map_Service) services). See
   * [spatial reference system](https://en.wikipedia.org/wiki/Spatial_reference_system).
   *
   * Leaflet defines the most usual CRSs by default. If you want to use a
   * CRS not defined by default, take a look at the
   * [Proj4Leaflet](https://github.com/kartena/Proj4Leaflet) plugin.
   *
   * Note that the CRS instances do not inherit from Leaflet's `Class` object,
   * and can't be instantiated. Also, new classes can't inherit from them,
   * and methods can't be added to them with the `include` function.
   */ var CRS = {
        // @method latLngToPoint(latlng: LatLng, zoom: Number): Point
        // Projects geographical coordinates into pixel coordinates for a given zoom.
        latLngToPoint: function(latlng, zoom) {
            var projectedPoint = this.projection.project(latlng), scale = this.scale(zoom);
            return this.transformation._transform(projectedPoint, scale);
        },
        // @method pointToLatLng(point: Point, zoom: Number): LatLng
        // The inverse of `latLngToPoint`. Projects pixel coordinates on a given
        // zoom into geographical coordinates.
        pointToLatLng: function(point, zoom) {
            var scale = this.scale(zoom), untransformedPoint = this.transformation.untransform(point, scale);
            return this.projection.unproject(untransformedPoint);
        },
        // @method project(latlng: LatLng): Point
        // Projects geographical coordinates into coordinates in units accepted for
        // this CRS (e.g. meters for EPSG:3857, for passing it to WMS services).
        project: function(latlng) {
            return this.projection.project(latlng);
        },
        // @method unproject(point: Point): LatLng
        // Given a projected coordinate returns the corresponding LatLng.
        // The inverse of `project`.
        unproject: function(point) {
            return this.projection.unproject(point);
        },
        // @method scale(zoom: Number): Number
        // Returns the scale used when transforming projected coordinates into
        // pixel coordinates for a particular zoom. For example, it returns
        // `256 * 2^zoom` for Mercator-based CRS.
        scale: function(zoom) {
            return 256 * Math.pow(2, zoom);
        },
        // @method zoom(scale: Number): Number
        // Inverse of `scale()`, returns the zoom level corresponding to a scale
        // factor of `scale`.
        zoom: function(scale) {
            return Math.log(scale / 256) / Math.LN2;
        },
        // @method getProjectedBounds(zoom: Number): Bounds
        // Returns the projection's bounds scaled and transformed for the provided `zoom`.
        getProjectedBounds: function(zoom) {
            if (this.infinite) return null;
            var b = this.projection.bounds, s = this.scale(zoom), min = this.transformation.transform(b.min, s), max = this.transformation.transform(b.max, s);
            return new Bounds(min, max);
        },
        // @method distance(latlng1: LatLng, latlng2: LatLng): Number
        // Returns the distance between two geographical coordinates.
        // @property code: String
        // Standard code name of the CRS passed into WMS services (e.g. `'EPSG:3857'`)
        //
        // @property wrapLng: Number[]
        // An array of two numbers defining whether the longitude (horizontal) coordinate
        // axis wraps around a given range and how. Defaults to `[-180, 180]` in most
        // geographical CRSs. If `undefined`, the longitude axis does not wrap around.
        //
        // @property wrapLat: Number[]
        // Like `wrapLng`, but for the latitude (vertical) axis.
        // wrapLng: [min, max],
        // wrapLat: [min, max],
        // @property infinite: Boolean
        // If true, the coordinate space will be unbounded (infinite in both axes)
        infinite: false,
        // @method wrapLatLng(latlng: LatLng): LatLng
        // Returns a `LatLng` where lat and lng has been wrapped according to the
        // CRS's `wrapLat` and `wrapLng` properties, if they are outside the CRS's bounds.
        wrapLatLng: function(latlng) {
            var lng = this.wrapLng ? wrapNum(latlng.lng, this.wrapLng, true) : latlng.lng, lat = this.wrapLat ? wrapNum(latlng.lat, this.wrapLat, true) : latlng.lat, alt = latlng.alt;
            return new LatLng(lat, lng, alt);
        },
        // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
        // Returns a `LatLngBounds` with the same size as the given one, ensuring
        // that its center is within the CRS's bounds.
        // Only accepts actual `L.LatLngBounds` instances, not arrays.
        wrapLatLngBounds: function(bounds) {
            var center = bounds.getCenter(), newCenter = this.wrapLatLng(center), latShift = center.lat - newCenter.lat, lngShift = center.lng - newCenter.lng;
            if (latShift === 0 && lngShift === 0) return bounds;
            var sw = bounds.getSouthWest(), ne = bounds.getNorthEast(), newSw = new LatLng(sw.lat - latShift, sw.lng - lngShift), newNe = new LatLng(ne.lat - latShift, ne.lng - lngShift);
            return new LatLngBounds(newSw, newNe);
        }
    };
    /*
   * @namespace CRS
   * @crs L.CRS.Earth
   *
   * Serves as the base for CRS that are global such that they cover the earth.
   * Can only be used as the base for other CRS and cannot be used directly,
   * since it does not have a `code`, `projection` or `transformation`. `distance()` returns
   * meters.
   */ var Earth = extend({}, CRS, {
        wrapLng: [
            -180,
            180
        ],
        // Mean Earth Radius, as recommended for use by
        // the International Union of Geodesy and Geophysics,
        // see https://rosettacode.org/wiki/Haversine_formula
        R: 6371000,
        // distance between two geographical points using spherical law of cosines approximation
        distance: function(latlng1, latlng2) {
            var rad = Math.PI / 180, lat1 = latlng1.lat * rad, lat2 = latlng2.lat * rad, sinDLat = Math.sin((latlng2.lat - latlng1.lat) * rad / 2), sinDLon = Math.sin((latlng2.lng - latlng1.lng) * rad / 2), a = sinDLat * sinDLat + Math.cos(lat1) * Math.cos(lat2) * sinDLon * sinDLon, c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            return this.R * c;
        }
    });
    /*
   * @namespace Projection
   * @projection L.Projection.SphericalMercator
   *
   * Spherical Mercator projection — the most common projection for online maps,
   * used by almost all free and commercial tile providers. Assumes that Earth is
   * a sphere. Used by the `EPSG:3857` CRS.
   */ var earthRadius = 6378137;
    var SphericalMercator = {
        R: earthRadius,
        MAX_LATITUDE: 85.0511287798,
        project: function(latlng) {
            var d = Math.PI / 180, max = this.MAX_LATITUDE, lat = Math.max(Math.min(max, latlng.lat), -max), sin = Math.sin(lat * d);
            return new Point(this.R * latlng.lng * d, this.R * Math.log((1 + sin) / (1 - sin)) / 2);
        },
        unproject: function(point) {
            var d = 180 / Math.PI;
            return new LatLng((2 * Math.atan(Math.exp(point.y / this.R)) - Math.PI / 2) * d, point.x * d / this.R);
        },
        bounds: function() {
            var d = earthRadius * Math.PI;
            return new Bounds([
                -d,
                -d
            ], [
                d,
                d
            ]);
        }()
    };
    /*
   * @class Transformation
   * @aka L.Transformation
   *
   * Represents an affine transformation: a set of coefficients `a`, `b`, `c`, `d`
   * for transforming a point of a form `(x, y)` into `(a*x + b, c*y + d)` and doing
   * the reverse. Used by Leaflet in its projections code.
   *
   * @example
   *
   * ```js
   * var transformation = L.transformation(2, 5, -1, 10),
   * 	p = L.point(1, 2),
   * 	p2 = transformation.transform(p), //  L.point(7, 8)
   * 	p3 = transformation.untransform(p2); //  L.point(1, 2)
   * ```
   */ // factory new L.Transformation(a: Number, b: Number, c: Number, d: Number)
    // Creates a `Transformation` object with the given coefficients.
    function Transformation(a, b, c, d) {
        if (isArray(a)) {
            // use array properties
            this._a = a[0];
            this._b = a[1];
            this._c = a[2];
            this._d = a[3];
            return;
        }
        this._a = a;
        this._b = b;
        this._c = c;
        this._d = d;
    }
    Transformation.prototype = {
        // @method transform(point: Point, scale?: Number): Point
        // Returns a transformed point, optionally multiplied by the given scale.
        // Only accepts actual `L.Point` instances, not arrays.
        transform: function(point, scale) {
            return this._transform(point.clone(), scale);
        },
        // destructive transform (faster)
        _transform: function(point, scale) {
            scale = scale || 1;
            point.x = scale * (this._a * point.x + this._b);
            point.y = scale * (this._c * point.y + this._d);
            return point;
        },
        // @method untransform(point: Point, scale?: Number): Point
        // Returns the reverse transformation of the given point, optionally divided
        // by the given scale. Only accepts actual `L.Point` instances, not arrays.
        untransform: function(point, scale) {
            scale = scale || 1;
            return new Point((point.x / scale - this._b) / this._a, (point.y / scale - this._d) / this._c);
        }
    };
    // factory L.transformation(a: Number, b: Number, c: Number, d: Number)
    // @factory L.transformation(a: Number, b: Number, c: Number, d: Number)
    // Instantiates a Transformation object with the given coefficients.
    // @alternative
    // @factory L.transformation(coefficients: Array): Transformation
    // Expects an coefficients array of the form
    // `[a: Number, b: Number, c: Number, d: Number]`.
    function toTransformation(a, b, c, d) {
        return new Transformation(a, b, c, d);
    }
    /*
   * @namespace CRS
   * @crs L.CRS.EPSG3857
   *
   * The most common CRS for online maps, used by almost all free and commercial
   * tile providers. Uses Spherical Mercator projection. Set in by default in
   * Map's `crs` option.
   */ var EPSG3857 = extend({}, Earth, {
        code: "EPSG:3857",
        projection: SphericalMercator,
        transformation: function() {
            var scale = 0.5 / (Math.PI * SphericalMercator.R);
            return toTransformation(scale, 0.5, -scale, 0.5);
        }()
    });
    var EPSG900913 = extend({}, EPSG3857, {
        code: "EPSG:900913"
    });
    // @namespace SVG; @section
    // There are several static functions which can be called without instantiating L.SVG:
    // @function create(name: String): SVGElement
    // Returns a instance of [SVGElement](https://developer.mozilla.org/docs/Web/API/SVGElement),
    // corresponding to the class name passed. For example, using 'line' will return
    // an instance of [SVGLineElement](https://developer.mozilla.org/docs/Web/API/SVGLineElement).
    function svgCreate(name) {
        return document.createElementNS("http://www.w3.org/2000/svg", name);
    }
    // @function pointsToPath(rings: Point[], closed: Boolean): String
    // Generates a SVG path string for multiple rings, with each ring turning
    // into "M..L..L.." instructions
    function pointsToPath(rings, closed) {
        var str = "", i, j, len, len2, points, p;
        for(i = 0, len = rings.length; i < len; i++){
            points = rings[i];
            for(j = 0, len2 = points.length; j < len2; j++){
                p = points[j];
                str += (j ? "L" : "M") + p.x + " " + p.y;
            }
            // closes the ring for polygons; "x" is VML syntax
            str += closed ? Browser.svg ? "z" : "x" : "";
        }
        // SVG complains about empty path strings
        return str || "M0 0";
    }
    /*
   * @namespace Browser
   * @aka L.Browser
   *
   * A namespace with static properties for browser/feature detection used by Leaflet internally.
   *
   * @example
   *
   * ```js
   * if (L.Browser.ielt9) {
   *   alert('Upgrade your browser, dude!');
   * }
   * ```
   */ var style = document.documentElement.style;
    // @property ie: Boolean; `true` for all Internet Explorer versions (not Edge).
    var ie = "ActiveXObject" in window;
    // @property ielt9: Boolean; `true` for Internet Explorer versions less than 9.
    var ielt9 = ie && !document.addEventListener;
    // @property edge: Boolean; `true` for the Edge web browser.
    var edge = "msLaunchUri" in navigator && !("documentMode" in document);
    // @property webkit: Boolean;
    // `true` for webkit-based browsers like Chrome and Safari (including mobile versions).
    var webkit = userAgentContains("webkit");
    // @property android: Boolean
    // **Deprecated.** `true` for any browser running on an Android platform.
    var android = userAgentContains("android");
    // @property android23: Boolean; **Deprecated.** `true` for browsers running on Android 2 or Android 3.
    var android23 = userAgentContains("android 2") || userAgentContains("android 3");
    /* See https://stackoverflow.com/a/17961266 for details on detecting stock Android */ var webkitVer = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10); // also matches AppleWebKit
    // @property androidStock: Boolean; **Deprecated.** `true` for the Android stock browser (i.e. not Chrome)
    var androidStock = android && userAgentContains("Google") && webkitVer < 537 && !("AudioNode" in window);
    // @property opera: Boolean; `true` for the Opera browser
    var opera = !!window.opera;
    // @property chrome: Boolean; `true` for the Chrome browser.
    var chrome = !edge && userAgentContains("chrome");
    // @property gecko: Boolean; `true` for gecko-based browsers like Firefox.
    var gecko = userAgentContains("gecko") && !webkit && !opera && !ie;
    // @property safari: Boolean; `true` for the Safari browser.
    var safari = !chrome && userAgentContains("safari");
    var phantom = userAgentContains("phantom");
    // @property opera12: Boolean
    // `true` for the Opera browser supporting CSS transforms (version 12 or later).
    var opera12 = "OTransition" in style;
    // @property win: Boolean; `true` when the browser is running in a Windows platform
    var win = navigator.platform.indexOf("Win") === 0;
    // @property ie3d: Boolean; `true` for all Internet Explorer versions supporting CSS transforms.
    var ie3d = ie && "transition" in style;
    // @property webkit3d: Boolean; `true` for webkit-based browsers supporting CSS transforms.
    var webkit3d = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix() && !android23;
    // @property gecko3d: Boolean; `true` for gecko-based browsers supporting CSS transforms.
    var gecko3d = "MozPerspective" in style;
    // @property any3d: Boolean
    // `true` for all browsers supporting CSS transforms.
    var any3d = !window.L_DISABLE_3D && (ie3d || webkit3d || gecko3d) && !opera12 && !phantom;
    // @property mobile: Boolean; `true` for all browsers running in a mobile device.
    var mobile = typeof orientation !== "undefined" || userAgentContains("mobile");
    // @property mobileWebkit: Boolean; `true` for all webkit-based browsers in a mobile device.
    var mobileWebkit = mobile && webkit;
    // @property mobileWebkit3d: Boolean
    // `true` for all webkit-based browsers in a mobile device supporting CSS transforms.
    var mobileWebkit3d = mobile && webkit3d;
    // @property msPointer: Boolean
    // `true` for browsers implementing the Microsoft touch events model (notably IE10).
    var msPointer = !window.PointerEvent && window.MSPointerEvent;
    // @property pointer: Boolean
    // `true` for all browsers supporting [pointer events](https://msdn.microsoft.com/en-us/library/dn433244%28v=vs.85%29.aspx).
    var pointer = !!(window.PointerEvent || msPointer);
    // @property touchNative: Boolean
    // `true` for all browsers supporting [touch events](https://developer.mozilla.org/docs/Web/API/Touch_events).
    // **This does not necessarily mean** that the browser is running in a computer with
    // a touchscreen, it only means that the browser is capable of understanding
    // touch events.
    var touchNative = "ontouchstart" in window || !!window.TouchEvent;
    // @property touch: Boolean
    // `true` for all browsers supporting either [touch](#browser-touch) or [pointer](#browser-pointer) events.
    // Note: pointer events will be preferred (if available), and processed for all `touch*` listeners.
    var touch = !window.L_NO_TOUCH && (touchNative || pointer);
    // @property mobileOpera: Boolean; `true` for the Opera browser in a mobile device.
    var mobileOpera = mobile && opera;
    // @property mobileGecko: Boolean
    // `true` for gecko-based browsers running in a mobile device.
    var mobileGecko = mobile && gecko;
    // @property retina: Boolean
    // `true` for browsers on a high-resolution "retina" screen or on any screen when browser's display zoom is more than 100%.
    var retina = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1;
    // @property passiveEvents: Boolean
    // `true` for browsers that support passive events.
    var passiveEvents = function() {
        var supportsPassiveOption = false;
        try {
            var opts = Object.defineProperty({}, "passive", {
                get: function() {
                    supportsPassiveOption = true;
                }
            });
            window.addEventListener("testPassiveEventSupport", falseFn, opts);
            window.removeEventListener("testPassiveEventSupport", falseFn, opts);
        } catch (e) {
        // Errors can safely be ignored since this is only a browser support test.
        }
        return supportsPassiveOption;
    }();
    // @property canvas: Boolean
    // `true` when the browser supports [`<canvas>`](https://developer.mozilla.org/docs/Web/API/Canvas_API).
    var canvas$1 = function() {
        return !!document.createElement("canvas").getContext;
    }();
    // @property svg: Boolean
    // `true` when the browser supports [SVG](https://developer.mozilla.org/docs/Web/SVG).
    var svg$1 = !!(document.createElementNS && svgCreate("svg").createSVGRect);
    var inlineSvg = !!svg$1 && function() {
        var div = document.createElement("div");
        div.innerHTML = "<svg/>";
        return (div.firstChild && div.firstChild.namespaceURI) === "http://www.w3.org/2000/svg";
    }();
    // @property vml: Boolean
    // `true` if the browser supports [VML](https://en.wikipedia.org/wiki/Vector_Markup_Language).
    var vml = !svg$1 && function() {
        try {
            var div = document.createElement("div");
            div.innerHTML = '<v:shape adj="1"/>';
            var shape = div.firstChild;
            shape.style.behavior = "url(#default#VML)";
            return shape && typeof shape.adj === "object";
        } catch (e) {
            return false;
        }
    }();
    // @property mac: Boolean; `true` when the browser is running in a Mac platform
    var mac = navigator.platform.indexOf("Mac") === 0;
    // @property mac: Boolean; `true` when the browser is running in a Linux platform
    var linux = navigator.platform.indexOf("Linux") === 0;
    function userAgentContains(str) {
        return navigator.userAgent.toLowerCase().indexOf(str) >= 0;
    }
    var Browser = {
        ie: ie,
        ielt9: ielt9,
        edge: edge,
        webkit: webkit,
        android: android,
        android23: android23,
        androidStock: androidStock,
        opera: opera,
        chrome: chrome,
        gecko: gecko,
        safari: safari,
        phantom: phantom,
        opera12: opera12,
        win: win,
        ie3d: ie3d,
        webkit3d: webkit3d,
        gecko3d: gecko3d,
        any3d: any3d,
        mobile: mobile,
        mobileWebkit: mobileWebkit,
        mobileWebkit3d: mobileWebkit3d,
        msPointer: msPointer,
        pointer: pointer,
        touch: touch,
        touchNative: touchNative,
        mobileOpera: mobileOpera,
        mobileGecko: mobileGecko,
        retina: retina,
        passiveEvents: passiveEvents,
        canvas: canvas$1,
        svg: svg$1,
        vml: vml,
        inlineSvg: inlineSvg,
        mac: mac,
        linux: linux
    };
    /*
   * Extends L.DomEvent to provide touch support for Internet Explorer and Windows-based devices.
   */ var POINTER_DOWN = Browser.msPointer ? "MSPointerDown" : "pointerdown";
    var POINTER_MOVE = Browser.msPointer ? "MSPointerMove" : "pointermove";
    var POINTER_UP = Browser.msPointer ? "MSPointerUp" : "pointerup";
    var POINTER_CANCEL = Browser.msPointer ? "MSPointerCancel" : "pointercancel";
    var pEvent = {
        touchstart: POINTER_DOWN,
        touchmove: POINTER_MOVE,
        touchend: POINTER_UP,
        touchcancel: POINTER_CANCEL
    };
    var handle = {
        touchstart: _onPointerStart,
        touchmove: _handlePointer,
        touchend: _handlePointer,
        touchcancel: _handlePointer
    };
    var _pointers = {};
    var _pointerDocListener = false;
    // Provides a touch events wrapper for (ms)pointer events.
    // ref https://www.w3.org/TR/pointerevents/ https://www.w3.org/Bugs/Public/show_bug.cgi?id=22890
    function addPointerListener(obj, type, handler) {
        if (type === "touchstart") _addPointerDocListener();
        if (!handle[type]) {
            console.warn("wrong event specified:", type);
            return falseFn;
        }
        handler = handle[type].bind(this, handler);
        obj.addEventListener(pEvent[type], handler, false);
        return handler;
    }
    function removePointerListener(obj, type, handler) {
        if (!pEvent[type]) {
            console.warn("wrong event specified:", type);
            return;
        }
        obj.removeEventListener(pEvent[type], handler, false);
    }
    function _globalPointerDown(e) {
        _pointers[e.pointerId] = e;
    }
    function _globalPointerMove(e) {
        if (_pointers[e.pointerId]) _pointers[e.pointerId] = e;
    }
    function _globalPointerUp(e) {
        delete _pointers[e.pointerId];
    }
    function _addPointerDocListener() {
        // need to keep track of what pointers and how many are active to provide e.touches emulation
        if (!_pointerDocListener) {
            // we listen document as any drags that end by moving the touch off the screen get fired there
            document.addEventListener(POINTER_DOWN, _globalPointerDown, true);
            document.addEventListener(POINTER_MOVE, _globalPointerMove, true);
            document.addEventListener(POINTER_UP, _globalPointerUp, true);
            document.addEventListener(POINTER_CANCEL, _globalPointerUp, true);
            _pointerDocListener = true;
        }
    }
    function _handlePointer(handler, e) {
        if (e.pointerType === (e.MSPOINTER_TYPE_MOUSE || "mouse")) return;
        e.touches = [];
        for(var i in _pointers)e.touches.push(_pointers[i]);
        e.changedTouches = [
            e
        ];
        handler(e);
    }
    function _onPointerStart(handler, e) {
        // IE10 specific: MsTouch needs preventDefault. See #2000
        if (e.MSPOINTER_TYPE_TOUCH && e.pointerType === e.MSPOINTER_TYPE_TOUCH) preventDefault(e);
        _handlePointer(handler, e);
    }
    /*
   * Extends the event handling code with double tap support for mobile browsers.
   *
   * Note: currently most browsers fire native dblclick, with only a few exceptions
   * (see https://github.com/Leaflet/Leaflet/issues/7012#issuecomment-595087386)
   */ function makeDblclick(event) {
        // in modern browsers `type` cannot be just overridden:
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Getter_only
        var newEvent = {}, prop, i;
        for(i in event){
            prop = event[i];
            newEvent[i] = prop && prop.bind ? prop.bind(event) : prop;
        }
        event = newEvent;
        newEvent.type = "dblclick";
        newEvent.detail = 2;
        newEvent.isTrusted = false;
        newEvent._simulated = true; // for debug purposes
        return newEvent;
    }
    var delay = 200;
    function addDoubleTapListener(obj, handler) {
        // Most browsers handle double tap natively
        obj.addEventListener("dblclick", handler);
        // On some platforms the browser doesn't fire native dblclicks for touch events.
        // It seems that in all such cases `detail` property of `click` event is always `1`.
        // So here we rely on that fact to avoid excessive 'dblclick' simulation when not needed.
        var last = 0, detail;
        function simDblclick(e) {
            if (e.detail !== 1) {
                detail = e.detail; // keep in sync to avoid false dblclick in some cases
                return;
            }
            if (e.pointerType === "mouse" || e.sourceCapabilities && !e.sourceCapabilities.firesTouchEvents) return;
            // When clicking on an <input>, the browser generates a click on its
            // <label> (and vice versa) triggering two clicks in quick succession.
            // This ignores clicks on elements which are a label with a 'for'
            // attribute (or children of such a label), but not children of
            // a <input>.
            var path = getPropagationPath(e);
            if (path.some(function(el) {
                return el instanceof HTMLLabelElement && el.attributes.for;
            }) && !path.some(function(el) {
                return el instanceof HTMLInputElement || el instanceof HTMLSelectElement;
            })) return;
            var now = Date.now();
            if (now - last <= delay) {
                detail++;
                if (detail === 2) handler(makeDblclick(e));
            } else detail = 1;
            last = now;
        }
        obj.addEventListener("click", simDblclick);
        return {
            dblclick: handler,
            simDblclick: simDblclick
        };
    }
    function removeDoubleTapListener(obj, handlers) {
        obj.removeEventListener("dblclick", handlers.dblclick);
        obj.removeEventListener("click", handlers.simDblclick);
    }
    /*
   * @namespace DomUtil
   *
   * Utility functions to work with the [DOM](https://developer.mozilla.org/docs/Web/API/Document_Object_Model)
   * tree, used by Leaflet internally.
   *
   * Most functions expecting or returning a `HTMLElement` also work for
   * SVG elements. The only difference is that classes refer to CSS classes
   * in HTML and SVG classes in SVG.
   */ // @property TRANSFORM: String
    // Vendor-prefixed transform style name (e.g. `'webkitTransform'` for WebKit).
    var TRANSFORM = testProp([
        "transform",
        "webkitTransform",
        "OTransform",
        "MozTransform",
        "msTransform"
    ]);
    // webkitTransition comes first because some browser versions that drop vendor prefix don't do
    // the same for the transitionend event, in particular the Android 4.1 stock browser
    // @property TRANSITION: String
    // Vendor-prefixed transition style name.
    var TRANSITION = testProp([
        "webkitTransition",
        "transition",
        "OTransition",
        "MozTransition",
        "msTransition"
    ]);
    // @property TRANSITION_END: String
    // Vendor-prefixed transitionend event name.
    var TRANSITION_END = TRANSITION === "webkitTransition" || TRANSITION === "OTransition" ? TRANSITION + "End" : "transitionend";
    // @function get(id: String|HTMLElement): HTMLElement
    // Returns an element given its DOM id, or returns the element itself
    // if it was passed directly.
    function get(id) {
        return typeof id === "string" ? document.getElementById(id) : id;
    }
    // @function getStyle(el: HTMLElement, styleAttrib: String): String
    // Returns the value for a certain style attribute on an element,
    // including computed values or values set through CSS.
    function getStyle(el, style) {
        var value = el.style[style] || el.currentStyle && el.currentStyle[style];
        if ((!value || value === "auto") && document.defaultView) {
            var css = document.defaultView.getComputedStyle(el, null);
            value = css ? css[style] : null;
        }
        return value === "auto" ? null : value;
    }
    // @function create(tagName: String, className?: String, container?: HTMLElement): HTMLElement
    // Creates an HTML element with `tagName`, sets its class to `className`, and optionally appends it to `container` element.
    function create$1(tagName, className, container) {
        var el = document.createElement(tagName);
        el.className = className || "";
        if (container) container.appendChild(el);
        return el;
    }
    // @function remove(el: HTMLElement)
    // Removes `el` from its parent element
    function remove(el) {
        var parent = el.parentNode;
        if (parent) parent.removeChild(el);
    }
    // @function empty(el: HTMLElement)
    // Removes all of `el`'s children elements from `el`
    function empty(el) {
        while(el.firstChild)el.removeChild(el.firstChild);
    }
    // @function toFront(el: HTMLElement)
    // Makes `el` the last child of its parent, so it renders in front of the other children.
    function toFront(el) {
        var parent = el.parentNode;
        if (parent && parent.lastChild !== el) parent.appendChild(el);
    }
    // @function toBack(el: HTMLElement)
    // Makes `el` the first child of its parent, so it renders behind the other children.
    function toBack(el) {
        var parent = el.parentNode;
        if (parent && parent.firstChild !== el) parent.insertBefore(el, parent.firstChild);
    }
    // @function hasClass(el: HTMLElement, name: String): Boolean
    // Returns `true` if the element's class attribute contains `name`.
    function hasClass(el, name) {
        if (el.classList !== undefined) return el.classList.contains(name);
        var className = getClass(el);
        return className.length > 0 && new RegExp("(^|\\s)" + name + "(\\s|$)").test(className);
    }
    // @function addClass(el: HTMLElement, name: String)
    // Adds `name` to the element's class attribute.
    function addClass(el, name) {
        if (el.classList !== undefined) {
            var classes = splitWords(name);
            for(var i = 0, len = classes.length; i < len; i++)el.classList.add(classes[i]);
        } else if (!hasClass(el, name)) {
            var className = getClass(el);
            setClass(el, (className ? className + " " : "") + name);
        }
    }
    // @function removeClass(el: HTMLElement, name: String)
    // Removes `name` from the element's class attribute.
    function removeClass(el, name) {
        if (el.classList !== undefined) el.classList.remove(name);
        else setClass(el, trim((" " + getClass(el) + " ").replace(" " + name + " ", " ")));
    }
    // @function setClass(el: HTMLElement, name: String)
    // Sets the element's class.
    function setClass(el, name) {
        if (el.className.baseVal === undefined) el.className = name;
        else // in case of SVG element
        el.className.baseVal = name;
    }
    // @function getClass(el: HTMLElement): String
    // Returns the element's class.
    function getClass(el) {
        // Check if the element is an SVGElementInstance and use the correspondingElement instead
        // (Required for linked SVG elements in IE11.)
        if (el.correspondingElement) el = el.correspondingElement;
        return el.className.baseVal === undefined ? el.className : el.className.baseVal;
    }
    // @function setOpacity(el: HTMLElement, opacity: Number)
    // Set the opacity of an element (including old IE support).
    // `opacity` must be a number from `0` to `1`.
    function setOpacity(el, value) {
        if ("opacity" in el.style) el.style.opacity = value;
        else if ("filter" in el.style) _setOpacityIE(el, value);
    }
    function _setOpacityIE(el, value) {
        var filter = false, filterName = "DXImageTransform.Microsoft.Alpha";
        // filters collection throws an error if we try to retrieve a filter that doesn't exist
        try {
            filter = el.filters.item(filterName);
        } catch (e) {
            // don't set opacity to 1 if we haven't already set an opacity,
            // it isn't needed and breaks transparent pngs.
            if (value === 1) return;
        }
        value = Math.round(value * 100);
        if (filter) {
            filter.Enabled = value !== 100;
            filter.Opacity = value;
        } else el.style.filter += " progid:" + filterName + "(opacity=" + value + ")";
    }
    // @function testProp(props: String[]): String|false
    // Goes through the array of style names and returns the first name
    // that is a valid style name for an element. If no such name is found,
    // it returns false. Useful for vendor-prefixed styles like `transform`.
    function testProp(props) {
        var style = document.documentElement.style;
        for(var i = 0; i < props.length; i++){
            if (props[i] in style) return props[i];
        }
        return false;
    }
    // @function setTransform(el: HTMLElement, offset: Point, scale?: Number)
    // Resets the 3D CSS transform of `el` so it is translated by `offset` pixels
    // and optionally scaled by `scale`. Does not have an effect if the
    // browser doesn't support 3D CSS transforms.
    function setTransform(el, offset, scale) {
        var pos = offset || new Point(0, 0);
        el.style[TRANSFORM] = (Browser.ie3d ? "translate(" + pos.x + "px," + pos.y + "px)" : "translate3d(" + pos.x + "px," + pos.y + "px,0)") + (scale ? " scale(" + scale + ")" : "");
    }
    // @function setPosition(el: HTMLElement, position: Point)
    // Sets the position of `el` to coordinates specified by `position`,
    // using CSS translate or top/left positioning depending on the browser
    // (used by Leaflet internally to position its layers).
    function setPosition(el, point) {
        /*eslint-disable */ el._leaflet_pos = point;
        /* eslint-enable */ if (Browser.any3d) setTransform(el, point);
        else {
            el.style.left = point.x + "px";
            el.style.top = point.y + "px";
        }
    }
    // @function getPosition(el: HTMLElement): Point
    // Returns the coordinates of an element previously positioned with setPosition.
    function getPosition(el) {
        // this method is only used for elements previously positioned using setPosition,
        // so it's safe to cache the position for performance
        return el._leaflet_pos || new Point(0, 0);
    }
    // @function disableTextSelection()
    // Prevents the user from generating `selectstart` DOM events, usually generated
    // when the user drags the mouse through a page with text. Used internally
    // by Leaflet to override the behaviour of any click-and-drag interaction on
    // the map. Affects drag interactions on the whole document.
    // @function enableTextSelection()
    // Cancels the effects of a previous [`L.DomUtil.disableTextSelection`](#domutil-disabletextselection).
    var disableTextSelection;
    var enableTextSelection;
    var _userSelect;
    if ("onselectstart" in document) {
        disableTextSelection = function() {
            on(window, "selectstart", preventDefault);
        };
        enableTextSelection = function() {
            off(window, "selectstart", preventDefault);
        };
    } else {
        var userSelectProperty = testProp([
            "userSelect",
            "WebkitUserSelect",
            "OUserSelect",
            "MozUserSelect",
            "msUserSelect"
        ]);
        disableTextSelection = function() {
            if (userSelectProperty) {
                var style = document.documentElement.style;
                _userSelect = style[userSelectProperty];
                style[userSelectProperty] = "none";
            }
        };
        enableTextSelection = function() {
            if (userSelectProperty) {
                document.documentElement.style[userSelectProperty] = _userSelect;
                _userSelect = undefined;
            }
        };
    }
    // @function disableImageDrag()
    // As [`L.DomUtil.disableTextSelection`](#domutil-disabletextselection), but
    // for `dragstart` DOM events, usually generated when the user drags an image.
    function disableImageDrag() {
        on(window, "dragstart", preventDefault);
    }
    // @function enableImageDrag()
    // Cancels the effects of a previous [`L.DomUtil.disableImageDrag`](#domutil-disabletextselection).
    function enableImageDrag() {
        off(window, "dragstart", preventDefault);
    }
    var _outlineElement, _outlineStyle;
    // @function preventOutline(el: HTMLElement)
    // Makes the [outline](https://developer.mozilla.org/docs/Web/CSS/outline)
    // of the element `el` invisible. Used internally by Leaflet to prevent
    // focusable elements from displaying an outline when the user performs a
    // drag interaction on them.
    function preventOutline(element) {
        while(element.tabIndex === -1)element = element.parentNode;
        if (!element.style) return;
        restoreOutline();
        _outlineElement = element;
        _outlineStyle = element.style.outlineStyle;
        element.style.outlineStyle = "none";
        on(window, "keydown", restoreOutline);
    }
    // @function restoreOutline()
    // Cancels the effects of a previous [`L.DomUtil.preventOutline`]().
    function restoreOutline() {
        if (!_outlineElement) return;
        _outlineElement.style.outlineStyle = _outlineStyle;
        _outlineElement = undefined;
        _outlineStyle = undefined;
        off(window, "keydown", restoreOutline);
    }
    // @function getSizedParentNode(el: HTMLElement): HTMLElement
    // Finds the closest parent node which size (width and height) is not null.
    function getSizedParentNode(element) {
        do element = element.parentNode;
        while ((!element.offsetWidth || !element.offsetHeight) && element !== document.body);
        return element;
    }
    // @function getScale(el: HTMLElement): Object
    // Computes the CSS scale currently applied on the element.
    // Returns an object with `x` and `y` members as horizontal and vertical scales respectively,
    // and `boundingClientRect` as the result of [`getBoundingClientRect()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect).
    function getScale(element) {
        var rect = element.getBoundingClientRect(); // Read-only in old browsers.
        return {
            x: rect.width / element.offsetWidth || 1,
            y: rect.height / element.offsetHeight || 1,
            boundingClientRect: rect
        };
    }
    var DomUtil = {
        __proto__: null,
        TRANSFORM: TRANSFORM,
        TRANSITION: TRANSITION,
        TRANSITION_END: TRANSITION_END,
        get: get,
        getStyle: getStyle,
        create: create$1,
        remove: remove,
        empty: empty,
        toFront: toFront,
        toBack: toBack,
        hasClass: hasClass,
        addClass: addClass,
        removeClass: removeClass,
        setClass: setClass,
        getClass: getClass,
        setOpacity: setOpacity,
        testProp: testProp,
        setTransform: setTransform,
        setPosition: setPosition,
        getPosition: getPosition,
        get disableTextSelection () {
            return disableTextSelection;
        },
        get enableTextSelection () {
            return enableTextSelection;
        },
        disableImageDrag: disableImageDrag,
        enableImageDrag: enableImageDrag,
        preventOutline: preventOutline,
        restoreOutline: restoreOutline,
        getSizedParentNode: getSizedParentNode,
        getScale: getScale
    };
    /*
   * @namespace DomEvent
   * Utility functions to work with the [DOM events](https://developer.mozilla.org/docs/Web/API/Event), used by Leaflet internally.
   */ // Inspired by John Resig, Dean Edwards and YUI addEvent implementations.
    // @function on(el: HTMLElement, types: String, fn: Function, context?: Object): this
    // Adds a listener function (`fn`) to a particular DOM event type of the
    // element `el`. You can optionally specify the context of the listener
    // (object the `this` keyword will point to). You can also pass several
    // space-separated types (e.g. `'click dblclick'`).
    // @alternative
    // @function on(el: HTMLElement, eventMap: Object, context?: Object): this
    // Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
    function on(obj, types, fn, context) {
        if (types && typeof types === "object") for(var type in types)addOne(obj, type, types[type], fn);
        else {
            types = splitWords(types);
            for(var i = 0, len = types.length; i < len; i++)addOne(obj, types[i], fn, context);
        }
        return this;
    }
    var eventsKey = "_leaflet_events";
    // @function off(el: HTMLElement, types: String, fn: Function, context?: Object): this
    // Removes a previously added listener function.
    // Note that if you passed a custom context to on, you must pass the same
    // context to `off` in order to remove the listener.
    // @alternative
    // @function off(el: HTMLElement, eventMap: Object, context?: Object): this
    // Removes a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
    // @alternative
    // @function off(el: HTMLElement, types: String): this
    // Removes all previously added listeners of given types.
    // @alternative
    // @function off(el: HTMLElement): this
    // Removes all previously added listeners from given HTMLElement
    function off(obj, types, fn, context) {
        if (arguments.length === 1) {
            batchRemove(obj);
            delete obj[eventsKey];
        } else if (types && typeof types === "object") for(var type in types)removeOne(obj, type, types[type], fn);
        else {
            types = splitWords(types);
            if (arguments.length === 2) batchRemove(obj, function(type) {
                return indexOf(types, type) !== -1;
            });
            else for(var i = 0, len = types.length; i < len; i++)removeOne(obj, types[i], fn, context);
        }
        return this;
    }
    function batchRemove(obj, filterFn) {
        for(var id in obj[eventsKey]){
            var type = id.split(/\d/)[0];
            if (!filterFn || filterFn(type)) removeOne(obj, type, null, null, id);
        }
    }
    var mouseSubst = {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        wheel: !("onwheel" in window) && "mousewheel"
    };
    function addOne(obj, type, fn, context) {
        var id = type + stamp(fn) + (context ? "_" + stamp(context) : "");
        if (obj[eventsKey] && obj[eventsKey][id]) return this;
        var handler = function(e) {
            return fn.call(context || obj, e || window.event);
        };
        var originalHandler = handler;
        if (!Browser.touchNative && Browser.pointer && type.indexOf("touch") === 0) // Needs DomEvent.Pointer.js
        handler = addPointerListener(obj, type, handler);
        else if (Browser.touch && type === "dblclick") handler = addDoubleTapListener(obj, handler);
        else if ("addEventListener" in obj) {
            if (type === "touchstart" || type === "touchmove" || type === "wheel" || type === "mousewheel") obj.addEventListener(mouseSubst[type] || type, handler, Browser.passiveEvents ? {
                passive: false
            } : false);
            else if (type === "mouseenter" || type === "mouseleave") {
                handler = function(e) {
                    e = e || window.event;
                    if (isExternalTarget(obj, e)) originalHandler(e);
                };
                obj.addEventListener(mouseSubst[type], handler, false);
            } else obj.addEventListener(type, originalHandler, false);
        } else obj.attachEvent("on" + type, handler);
        obj[eventsKey] = obj[eventsKey] || {};
        obj[eventsKey][id] = handler;
    }
    function removeOne(obj, type, fn, context, id) {
        id = id || type + stamp(fn) + (context ? "_" + stamp(context) : "");
        var handler = obj[eventsKey] && obj[eventsKey][id];
        if (!handler) return this;
        if (!Browser.touchNative && Browser.pointer && type.indexOf("touch") === 0) removePointerListener(obj, type, handler);
        else if (Browser.touch && type === "dblclick") removeDoubleTapListener(obj, handler);
        else if ("removeEventListener" in obj) obj.removeEventListener(mouseSubst[type] || type, handler, false);
        else obj.detachEvent("on" + type, handler);
        obj[eventsKey][id] = null;
    }
    // @function stopPropagation(ev: DOMEvent): this
    // Stop the given event from propagation to parent elements. Used inside the listener functions:
    // ```js
    // L.DomEvent.on(div, 'click', function (ev) {
    // 	L.DomEvent.stopPropagation(ev);
    // });
    // ```
    function stopPropagation(e) {
        if (e.stopPropagation) e.stopPropagation();
        else if (e.originalEvent) e.originalEvent._stopped = true;
        else e.cancelBubble = true;
        return this;
    }
    // @function disableScrollPropagation(el: HTMLElement): this
    // Adds `stopPropagation` to the element's `'wheel'` events (plus browser variants).
    function disableScrollPropagation(el) {
        addOne(el, "wheel", stopPropagation);
        return this;
    }
    // @function disableClickPropagation(el: HTMLElement): this
    // Adds `stopPropagation` to the element's `'click'`, `'dblclick'`, `'contextmenu'`,
    // `'mousedown'` and `'touchstart'` events (plus browser variants).
    function disableClickPropagation(el) {
        on(el, "mousedown touchstart dblclick contextmenu", stopPropagation);
        el["_leaflet_disable_click"] = true;
        return this;
    }
    // @function preventDefault(ev: DOMEvent): this
    // Prevents the default action of the DOM Event `ev` from happening (such as
    // following a link in the href of the a element, or doing a POST request
    // with page reload when a `<form>` is submitted).
    // Use it inside listener functions.
    function preventDefault(e) {
        if (e.preventDefault) e.preventDefault();
        else e.returnValue = false;
        return this;
    }
    // @function stop(ev: DOMEvent): this
    // Does `stopPropagation` and `preventDefault` at the same time.
    function stop(e) {
        preventDefault(e);
        stopPropagation(e);
        return this;
    }
    // @function getPropagationPath(ev: DOMEvent): Array
    // Compatibility polyfill for [`Event.composedPath()`](https://developer.mozilla.org/en-US/docs/Web/API/Event/composedPath).
    // Returns an array containing the `HTMLElement`s that the given DOM event
    // should propagate to (if not stopped).
    function getPropagationPath(ev) {
        if (ev.composedPath) return ev.composedPath();
        var path = [];
        var el = ev.target;
        while(el){
            path.push(el);
            el = el.parentNode;
        }
        return path;
    }
    // @function getMousePosition(ev: DOMEvent, container?: HTMLElement): Point
    // Gets normalized mouse position from a DOM event relative to the
    // `container` (border excluded) or to the whole page if not specified.
    function getMousePosition(e, container) {
        if (!container) return new Point(e.clientX, e.clientY);
        var scale = getScale(container), offset = scale.boundingClientRect; // left and top  values are in page scale (like the event clientX/Y)
        return new Point(// offset.left/top values are in page scale (like clientX/Y),
        // whereas clientLeft/Top (border width) values are the original values (before CSS scale applies).
        (e.clientX - offset.left) / scale.x - container.clientLeft, (e.clientY - offset.top) / scale.y - container.clientTop);
    }
    //  except , Safari and
    // We need double the scroll pixels (see #7403 and #4538) for all Browsers
    // except OSX (Mac) -> 3x, Chrome running on Linux 1x
    var wheelPxFactor = Browser.linux && Browser.chrome ? window.devicePixelRatio : Browser.mac ? window.devicePixelRatio * 3 : window.devicePixelRatio > 0 ? 2 * window.devicePixelRatio : 1;
    // @function getWheelDelta(ev: DOMEvent): Number
    // Gets normalized wheel delta from a wheel DOM event, in vertical
    // pixels scrolled (negative if scrolling down).
    // Events from pointing devices without precise scrolling are mapped to
    // a best guess of 60 pixels.
    function getWheelDelta(e) {
        return Browser.edge ? e.wheelDeltaY / 2 : e.deltaY && e.deltaMode === 0 ? -e.deltaY / wheelPxFactor : e.deltaY && e.deltaMode === 1 ? -e.deltaY * 20 : e.deltaY && e.deltaMode === 2 ? -e.deltaY * 60 : e.deltaX || e.deltaZ ? 0 : e.wheelDelta ? (e.wheelDeltaY || e.wheelDelta) / 2 : e.detail && Math.abs(e.detail) < 32765 ? -e.detail * 20 : e.detail ? e.detail / -32765 * 60 : 0;
    }
    // check if element really left/entered the event target (for mouseenter/mouseleave)
    function isExternalTarget(el, e) {
        var related = e.relatedTarget;
        if (!related) return true;
        try {
            while(related && related !== el)related = related.parentNode;
        } catch (err) {
            return false;
        }
        return related !== el;
    }
    var DomEvent = {
        __proto__: null,
        on: on,
        off: off,
        stopPropagation: stopPropagation,
        disableScrollPropagation: disableScrollPropagation,
        disableClickPropagation: disableClickPropagation,
        preventDefault: preventDefault,
        stop: stop,
        getPropagationPath: getPropagationPath,
        getMousePosition: getMousePosition,
        getWheelDelta: getWheelDelta,
        isExternalTarget: isExternalTarget,
        addListener: on,
        removeListener: off
    };
    /*
   * @class PosAnimation
   * @aka L.PosAnimation
   * @inherits Evented
   * Used internally for panning animations, utilizing CSS3 Transitions for modern browsers and a timer fallback for IE6-9.
   *
   * @example
   * ```js
   * var myPositionMarker = L.marker([48.864716, 2.294694]).addTo(map);
   *
   * myPositionMarker.on("click", function() {
   * 	var pos = map.latLngToLayerPoint(myPositionMarker.getLatLng());
   * 	pos.y -= 25;
   * 	var fx = new L.PosAnimation();
   *
   * 	fx.once('end',function() {
   * 		pos.y += 25;
   * 		fx.run(myPositionMarker._icon, pos, 0.8);
   * 	});
   *
   * 	fx.run(myPositionMarker._icon, pos, 0.3);
   * });
   *
   * ```
   *
   * @constructor L.PosAnimation()
   * Creates a `PosAnimation` object.
   *
   */ var PosAnimation = Evented.extend({
        // @method run(el: HTMLElement, newPos: Point, duration?: Number, easeLinearity?: Number)
        // Run an animation of a given element to a new position, optionally setting
        // duration in seconds (`0.25` by default) and easing linearity factor (3rd
        // argument of the [cubic bezier curve](https://cubic-bezier.com/#0,0,.5,1),
        // `0.5` by default).
        run: function(el, newPos, duration, easeLinearity) {
            this.stop();
            this._el = el;
            this._inProgress = true;
            this._duration = duration || 0.25;
            this._easeOutPower = 1 / Math.max(easeLinearity || 0.5, 0.2);
            this._startPos = getPosition(el);
            this._offset = newPos.subtract(this._startPos);
            this._startTime = +new Date();
            // @event start: Event
            // Fired when the animation starts
            this.fire("start");
            this._animate();
        },
        // @method stop()
        // Stops the animation (if currently running).
        stop: function() {
            if (!this._inProgress) return;
            this._step(true);
            this._complete();
        },
        _animate: function() {
            // animation loop
            this._animId = requestAnimFrame(this._animate, this);
            this._step();
        },
        _step: function(round) {
            var elapsed = +new Date() - this._startTime, duration = this._duration * 1000;
            if (elapsed < duration) this._runFrame(this._easeOut(elapsed / duration), round);
            else {
                this._runFrame(1);
                this._complete();
            }
        },
        _runFrame: function(progress, round) {
            var pos = this._startPos.add(this._offset.multiplyBy(progress));
            if (round) pos._round();
            setPosition(this._el, pos);
            // @event step: Event
            // Fired continuously during the animation.
            this.fire("step");
        },
        _complete: function() {
            cancelAnimFrame(this._animId);
            this._inProgress = false;
            // @event end: Event
            // Fired when the animation ends.
            this.fire("end");
        },
        _easeOut: function(t) {
            return 1 - Math.pow(1 - t, this._easeOutPower);
        }
    });
    /*
   * @class Map
   * @aka L.Map
   * @inherits Evented
   *
   * The central class of the API — it is used to create a map on a page and manipulate it.
   *
   * @example
   *
   * ```js
   * // initialize the map on the "map" div with a given center and zoom
   * var map = L.map('map', {
   * 	center: [51.505, -0.09],
   * 	zoom: 13
   * });
   * ```
   *
   */ var Map = Evented.extend({
        options: {
            // @section Map State Options
            // @option crs: CRS = L.CRS.EPSG3857
            // The [Coordinate Reference System](#crs) to use. Don't change this if you're not
            // sure what it means.
            crs: EPSG3857,
            // @option center: LatLng = undefined
            // Initial geographic center of the map
            center: undefined,
            // @option zoom: Number = undefined
            // Initial map zoom level
            zoom: undefined,
            // @option minZoom: Number = *
            // Minimum zoom level of the map.
            // If not specified and at least one `GridLayer` or `TileLayer` is in the map,
            // the lowest of their `minZoom` options will be used instead.
            minZoom: undefined,
            // @option maxZoom: Number = *
            // Maximum zoom level of the map.
            // If not specified and at least one `GridLayer` or `TileLayer` is in the map,
            // the highest of their `maxZoom` options will be used instead.
            maxZoom: undefined,
            // @option layers: Layer[] = []
            // Array of layers that will be added to the map initially
            layers: [],
            // @option maxBounds: LatLngBounds = null
            // When this option is set, the map restricts the view to the given
            // geographical bounds, bouncing the user back if the user tries to pan
            // outside the view. To set the restriction dynamically, use
            // [`setMaxBounds`](#map-setmaxbounds) method.
            maxBounds: undefined,
            // @option renderer: Renderer = *
            // The default method for drawing vector layers on the map. `L.SVG`
            // or `L.Canvas` by default depending on browser support.
            renderer: undefined,
            // @section Animation Options
            // @option zoomAnimation: Boolean = true
            // Whether the map zoom animation is enabled. By default it's enabled
            // in all browsers that support CSS3 Transitions except Android.
            zoomAnimation: true,
            // @option zoomAnimationThreshold: Number = 4
            // Won't animate zoom if the zoom difference exceeds this value.
            zoomAnimationThreshold: 4,
            // @option fadeAnimation: Boolean = true
            // Whether the tile fade animation is enabled. By default it's enabled
            // in all browsers that support CSS3 Transitions except Android.
            fadeAnimation: true,
            // @option markerZoomAnimation: Boolean = true
            // Whether markers animate their zoom with the zoom animation, if disabled
            // they will disappear for the length of the animation. By default it's
            // enabled in all browsers that support CSS3 Transitions except Android.
            markerZoomAnimation: true,
            // @option transform3DLimit: Number = 2^23
            // Defines the maximum size of a CSS translation transform. The default
            // value should not be changed unless a web browser positions layers in
            // the wrong place after doing a large `panBy`.
            transform3DLimit: 8388608,
            // @section Interaction Options
            // @option zoomSnap: Number = 1
            // Forces the map's zoom level to always be a multiple of this, particularly
            // right after a [`fitBounds()`](#map-fitbounds) or a pinch-zoom.
            // By default, the zoom level snaps to the nearest integer; lower values
            // (e.g. `0.5` or `0.1`) allow for greater granularity. A value of `0`
            // means the zoom level will not be snapped after `fitBounds` or a pinch-zoom.
            zoomSnap: 1,
            // @option zoomDelta: Number = 1
            // Controls how much the map's zoom level will change after a
            // [`zoomIn()`](#map-zoomin), [`zoomOut()`](#map-zoomout), pressing `+`
            // or `-` on the keyboard, or using the [zoom controls](#control-zoom).
            // Values smaller than `1` (e.g. `0.5`) allow for greater granularity.
            zoomDelta: 1,
            // @option trackResize: Boolean = true
            // Whether the map automatically handles browser window resize to update itself.
            trackResize: true
        },
        initialize: function(id, options) {
            options = setOptions(this, options);
            // Make sure to assign internal flags at the beginning,
            // to avoid inconsistent state in some edge cases.
            this._handlers = [];
            this._layers = {};
            this._zoomBoundLayers = {};
            this._sizeChanged = true;
            this._initContainer(id);
            this._initLayout();
            // hack for https://github.com/Leaflet/Leaflet/issues/1980
            this._onResize = bind(this._onResize, this);
            this._initEvents();
            if (options.maxBounds) this.setMaxBounds(options.maxBounds);
            if (options.zoom !== undefined) this._zoom = this._limitZoom(options.zoom);
            if (options.center && options.zoom !== undefined) this.setView(toLatLng(options.center), options.zoom, {
                reset: true
            });
            this.callInitHooks();
            // don't animate on browsers without hardware-accelerated transitions or old Android/Opera
            this._zoomAnimated = TRANSITION && Browser.any3d && !Browser.mobileOpera && this.options.zoomAnimation;
            // zoom transitions run with the same duration for all layers, so if one of transitionend events
            // happens after starting zoom animation (propagating to the map pane), we know that it ended globally
            if (this._zoomAnimated) {
                this._createAnimProxy();
                on(this._proxy, TRANSITION_END, this._catchTransitionEnd, this);
            }
            this._addLayers(this.options.layers);
        },
        // @section Methods for modifying map state
        // @method setView(center: LatLng, zoom: Number, options?: Zoom/pan options): this
        // Sets the view of the map (geographical center and zoom) with the given
        // animation options.
        setView: function(center, zoom, options) {
            zoom = zoom === undefined ? this._zoom : this._limitZoom(zoom);
            center = this._limitCenter(toLatLng(center), zoom, this.options.maxBounds);
            options = options || {};
            this._stop();
            if (this._loaded && !options.reset && options !== true) {
                if (options.animate !== undefined) {
                    options.zoom = extend({
                        animate: options.animate
                    }, options.zoom);
                    options.pan = extend({
                        animate: options.animate,
                        duration: options.duration
                    }, options.pan);
                }
                // try animating pan or zoom
                var moved = this._zoom !== zoom ? this._tryAnimatedZoom && this._tryAnimatedZoom(center, zoom, options.zoom) : this._tryAnimatedPan(center, options.pan);
                if (moved) {
                    // prevent resize handler call, the view will refresh after animation anyway
                    clearTimeout(this._sizeTimer);
                    return this;
                }
            }
            // animation didn't start, just reset the map view
            this._resetView(center, zoom, options.pan && options.pan.noMoveStart);
            return this;
        },
        // @method setZoom(zoom: Number, options?: Zoom/pan options): this
        // Sets the zoom of the map.
        setZoom: function(zoom, options) {
            if (!this._loaded) {
                this._zoom = zoom;
                return this;
            }
            return this.setView(this.getCenter(), zoom, {
                zoom: options
            });
        },
        // @method zoomIn(delta?: Number, options?: Zoom options): this
        // Increases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
        zoomIn: function(delta, options) {
            delta = delta || (Browser.any3d ? this.options.zoomDelta : 1);
            return this.setZoom(this._zoom + delta, options);
        },
        // @method zoomOut(delta?: Number, options?: Zoom options): this
        // Decreases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
        zoomOut: function(delta, options) {
            delta = delta || (Browser.any3d ? this.options.zoomDelta : 1);
            return this.setZoom(this._zoom - delta, options);
        },
        // @method setZoomAround(latlng: LatLng, zoom: Number, options: Zoom options): this
        // Zooms the map while keeping a specified geographical point on the map
        // stationary (e.g. used internally for scroll zoom and double-click zoom).
        // @alternative
        // @method setZoomAround(offset: Point, zoom: Number, options: Zoom options): this
        // Zooms the map while keeping a specified pixel on the map (relative to the top-left corner) stationary.
        setZoomAround: function(latlng, zoom, options) {
            var scale = this.getZoomScale(zoom), viewHalf = this.getSize().divideBy(2), containerPoint = latlng instanceof Point ? latlng : this.latLngToContainerPoint(latlng), centerOffset = containerPoint.subtract(viewHalf).multiplyBy(1 - 1 / scale), newCenter = this.containerPointToLatLng(viewHalf.add(centerOffset));
            return this.setView(newCenter, zoom, {
                zoom: options
            });
        },
        _getBoundsCenterZoom: function(bounds, options) {
            options = options || {};
            bounds = bounds.getBounds ? bounds.getBounds() : toLatLngBounds(bounds);
            var paddingTL = toPoint(options.paddingTopLeft || options.padding || [
                0,
                0
            ]), paddingBR = toPoint(options.paddingBottomRight || options.padding || [
                0,
                0
            ]), zoom = this.getBoundsZoom(bounds, false, paddingTL.add(paddingBR));
            zoom = typeof options.maxZoom === "number" ? Math.min(options.maxZoom, zoom) : zoom;
            if (zoom === Infinity) return {
                center: bounds.getCenter(),
                zoom: zoom
            };
            var paddingOffset = paddingBR.subtract(paddingTL).divideBy(2), swPoint = this.project(bounds.getSouthWest(), zoom), nePoint = this.project(bounds.getNorthEast(), zoom), center = this.unproject(swPoint.add(nePoint).divideBy(2).add(paddingOffset), zoom);
            return {
                center: center,
                zoom: zoom
            };
        },
        // @method fitBounds(bounds: LatLngBounds, options?: fitBounds options): this
        // Sets a map view that contains the given geographical bounds with the
        // maximum zoom level possible.
        fitBounds: function(bounds, options) {
            bounds = toLatLngBounds(bounds);
            if (!bounds.isValid()) throw new Error("Bounds are not valid.");
            var target = this._getBoundsCenterZoom(bounds, options);
            return this.setView(target.center, target.zoom, options);
        },
        // @method fitWorld(options?: fitBounds options): this
        // Sets a map view that mostly contains the whole world with the maximum
        // zoom level possible.
        fitWorld: function(options) {
            return this.fitBounds([
                [
                    -90,
                    -180
                ],
                [
                    90,
                    180
                ]
            ], options);
        },
        // @method panTo(latlng: LatLng, options?: Pan options): this
        // Pans the map to a given center.
        panTo: function(center, options) {
            return this.setView(center, this._zoom, {
                pan: options
            });
        },
        // @method panBy(offset: Point, options?: Pan options): this
        // Pans the map by a given number of pixels (animated).
        panBy: function(offset, options) {
            offset = toPoint(offset).round();
            options = options || {};
            if (!offset.x && !offset.y) return this.fire("moveend");
            // If we pan too far, Chrome gets issues with tiles
            // and makes them disappear or appear in the wrong place (slightly offset) #2602
            if (options.animate !== true && !this.getSize().contains(offset)) {
                this._resetView(this.unproject(this.project(this.getCenter()).add(offset)), this.getZoom());
                return this;
            }
            if (!this._panAnim) {
                this._panAnim = new PosAnimation();
                this._panAnim.on({
                    "step": this._onPanTransitionStep,
                    "end": this._onPanTransitionEnd
                }, this);
            }
            // don't fire movestart if animating inertia
            if (!options.noMoveStart) this.fire("movestart");
            // animate pan unless animate: false specified
            if (options.animate !== false) {
                addClass(this._mapPane, "leaflet-pan-anim");
                var newPos = this._getMapPanePos().subtract(offset).round();
                this._panAnim.run(this._mapPane, newPos, options.duration || 0.25, options.easeLinearity);
            } else {
                this._rawPanBy(offset);
                this.fire("move").fire("moveend");
            }
            return this;
        },
        // @method flyTo(latlng: LatLng, zoom?: Number, options?: Zoom/pan options): this
        // Sets the view of the map (geographical center and zoom) performing a smooth
        // pan-zoom animation.
        flyTo: function(targetCenter, targetZoom, options) {
            options = options || {};
            if (options.animate === false || !Browser.any3d) return this.setView(targetCenter, targetZoom, options);
            this._stop();
            var from = this.project(this.getCenter()), to = this.project(targetCenter), size = this.getSize(), startZoom = this._zoom;
            targetCenter = toLatLng(targetCenter);
            targetZoom = targetZoom === undefined ? startZoom : targetZoom;
            var w0 = Math.max(size.x, size.y), w1 = w0 * this.getZoomScale(startZoom, targetZoom), u1 = to.distanceTo(from) || 1, rho = 1.42, rho2 = rho * rho;
            function r(i) {
                var s1 = i ? -1 : 1, s2 = i ? w1 : w0, t1 = w1 * w1 - w0 * w0 + s1 * rho2 * rho2 * u1 * u1, b1 = 2 * s2 * rho2 * u1, b = t1 / b1, sq = Math.sqrt(b * b + 1) - b;
                // workaround for floating point precision bug when sq = 0, log = -Infinite,
                // thus triggering an infinite loop in flyTo
                var log = sq < 0.000000001 ? -18 : Math.log(sq);
                return log;
            }
            function sinh(n) {
                return (Math.exp(n) - Math.exp(-n)) / 2;
            }
            function cosh(n) {
                return (Math.exp(n) + Math.exp(-n)) / 2;
            }
            function tanh(n) {
                return sinh(n) / cosh(n);
            }
            var r0 = r(0);
            function w(s) {
                return w0 * (cosh(r0) / cosh(r0 + rho * s));
            }
            function u(s) {
                return w0 * (cosh(r0) * tanh(r0 + rho * s) - sinh(r0)) / rho2;
            }
            function easeOut(t) {
                return 1 - Math.pow(1 - t, 1.5);
            }
            var start = Date.now(), S = (r(1) - r0) / rho, duration = options.duration ? 1000 * options.duration : 1000 * S * 0.8;
            function frame() {
                var t = (Date.now() - start) / duration, s = easeOut(t) * S;
                if (t <= 1) {
                    this._flyToFrame = requestAnimFrame(frame, this);
                    this._move(this.unproject(from.add(to.subtract(from).multiplyBy(u(s) / u1)), startZoom), this.getScaleZoom(w0 / w(s), startZoom), {
                        flyTo: true
                    });
                } else this._move(targetCenter, targetZoom)._moveEnd(true);
            }
            this._moveStart(true, options.noMoveStart);
            frame.call(this);
            return this;
        },
        // @method flyToBounds(bounds: LatLngBounds, options?: fitBounds options): this
        // Sets the view of the map with a smooth animation like [`flyTo`](#map-flyto),
        // but takes a bounds parameter like [`fitBounds`](#map-fitbounds).
        flyToBounds: function(bounds, options) {
            var target = this._getBoundsCenterZoom(bounds, options);
            return this.flyTo(target.center, target.zoom, options);
        },
        // @method setMaxBounds(bounds: LatLngBounds): this
        // Restricts the map view to the given bounds (see the [maxBounds](#map-maxbounds) option).
        setMaxBounds: function(bounds) {
            bounds = toLatLngBounds(bounds);
            if (this.listens("moveend", this._panInsideMaxBounds)) this.off("moveend", this._panInsideMaxBounds);
            if (!bounds.isValid()) {
                this.options.maxBounds = null;
                return this;
            }
            this.options.maxBounds = bounds;
            if (this._loaded) this._panInsideMaxBounds();
            return this.on("moveend", this._panInsideMaxBounds);
        },
        // @method setMinZoom(zoom: Number): this
        // Sets the lower limit for the available zoom levels (see the [minZoom](#map-minzoom) option).
        setMinZoom: function(zoom) {
            var oldZoom = this.options.minZoom;
            this.options.minZoom = zoom;
            if (this._loaded && oldZoom !== zoom) {
                this.fire("zoomlevelschange");
                if (this.getZoom() < this.options.minZoom) return this.setZoom(zoom);
            }
            return this;
        },
        // @method setMaxZoom(zoom: Number): this
        // Sets the upper limit for the available zoom levels (see the [maxZoom](#map-maxzoom) option).
        setMaxZoom: function(zoom) {
            var oldZoom = this.options.maxZoom;
            this.options.maxZoom = zoom;
            if (this._loaded && oldZoom !== zoom) {
                this.fire("zoomlevelschange");
                if (this.getZoom() > this.options.maxZoom) return this.setZoom(zoom);
            }
            return this;
        },
        // @method panInsideBounds(bounds: LatLngBounds, options?: Pan options): this
        // Pans the map to the closest view that would lie inside the given bounds (if it's not already), controlling the animation using the options specific, if any.
        panInsideBounds: function(bounds, options) {
            this._enforcingBounds = true;
            var center = this.getCenter(), newCenter = this._limitCenter(center, this._zoom, toLatLngBounds(bounds));
            if (!center.equals(newCenter)) this.panTo(newCenter, options);
            this._enforcingBounds = false;
            return this;
        },
        // @method panInside(latlng: LatLng, options?: padding options): this
        // Pans the map the minimum amount to make the `latlng` visible. Use
        // padding options to fit the display to more restricted bounds.
        // If `latlng` is already within the (optionally padded) display bounds,
        // the map will not be panned.
        panInside: function(latlng, options) {
            options = options || {};
            var paddingTL = toPoint(options.paddingTopLeft || options.padding || [
                0,
                0
            ]), paddingBR = toPoint(options.paddingBottomRight || options.padding || [
                0,
                0
            ]), pixelCenter = this.project(this.getCenter()), pixelPoint = this.project(latlng), pixelBounds = this.getPixelBounds(), paddedBounds = toBounds([
                pixelBounds.min.add(paddingTL),
                pixelBounds.max.subtract(paddingBR)
            ]), paddedSize = paddedBounds.getSize();
            if (!paddedBounds.contains(pixelPoint)) {
                this._enforcingBounds = true;
                var centerOffset = pixelPoint.subtract(paddedBounds.getCenter());
                var offset = paddedBounds.extend(pixelPoint).getSize().subtract(paddedSize);
                pixelCenter.x += centerOffset.x < 0 ? -offset.x : offset.x;
                pixelCenter.y += centerOffset.y < 0 ? -offset.y : offset.y;
                this.panTo(this.unproject(pixelCenter), options);
                this._enforcingBounds = false;
            }
            return this;
        },
        // @method invalidateSize(options: Zoom/pan options): this
        // Checks if the map container size changed and updates the map if so —
        // call it after you've changed the map size dynamically, also animating
        // pan by default. If `options.pan` is `false`, panning will not occur.
        // If `options.debounceMoveend` is `true`, it will delay `moveend` event so
        // that it doesn't happen often even if the method is called many
        // times in a row.
        // @alternative
        // @method invalidateSize(animate: Boolean): this
        // Checks if the map container size changed and updates the map if so —
        // call it after you've changed the map size dynamically, also animating
        // pan by default.
        invalidateSize: function(options) {
            if (!this._loaded) return this;
            options = extend({
                animate: false,
                pan: true
            }, options === true ? {
                animate: true
            } : options);
            var oldSize = this.getSize();
            this._sizeChanged = true;
            this._lastCenter = null;
            var newSize = this.getSize(), oldCenter = oldSize.divideBy(2).round(), newCenter = newSize.divideBy(2).round(), offset = oldCenter.subtract(newCenter);
            if (!offset.x && !offset.y) return this;
            if (options.animate && options.pan) this.panBy(offset);
            else {
                if (options.pan) this._rawPanBy(offset);
                this.fire("move");
                if (options.debounceMoveend) {
                    clearTimeout(this._sizeTimer);
                    this._sizeTimer = setTimeout(bind(this.fire, this, "moveend"), 200);
                } else this.fire("moveend");
            }
            // @section Map state change events
            // @event resize: ResizeEvent
            // Fired when the map is resized.
            return this.fire("resize", {
                oldSize: oldSize,
                newSize: newSize
            });
        },
        // @section Methods for modifying map state
        // @method stop(): this
        // Stops the currently running `panTo` or `flyTo` animation, if any.
        stop: function() {
            this.setZoom(this._limitZoom(this._zoom));
            if (!this.options.zoomSnap) this.fire("viewreset");
            return this._stop();
        },
        // @section Geolocation methods
        // @method locate(options?: Locate options): this
        // Tries to locate the user using the Geolocation API, firing a [`locationfound`](#map-locationfound)
        // event with location data on success or a [`locationerror`](#map-locationerror) event on failure,
        // and optionally sets the map view to the user's location with respect to
        // detection accuracy (or to the world view if geolocation failed).
        // Note that, if your page doesn't use HTTPS, this method will fail in
        // modern browsers ([Chrome 50 and newer](https://sites.google.com/a/chromium.org/dev/Home/chromium-security/deprecating-powerful-features-on-insecure-origins))
        // See `Locate options` for more details.
        locate: function(options) {
            options = this._locateOptions = extend({
                timeout: 10000,
                watch: false
            }, options);
            if (!("geolocation" in navigator)) {
                this._handleGeolocationError({
                    code: 0,
                    message: "Geolocation not supported."
                });
                return this;
            }
            var onResponse = bind(this._handleGeolocationResponse, this), onError = bind(this._handleGeolocationError, this);
            if (options.watch) this._locationWatchId = navigator.geolocation.watchPosition(onResponse, onError, options);
            else navigator.geolocation.getCurrentPosition(onResponse, onError, options);
            return this;
        },
        // @method stopLocate(): this
        // Stops watching location previously initiated by `map.locate({watch: true})`
        // and aborts resetting the map view if map.locate was called with
        // `{setView: true}`.
        stopLocate: function() {
            if (navigator.geolocation && navigator.geolocation.clearWatch) navigator.geolocation.clearWatch(this._locationWatchId);
            if (this._locateOptions) this._locateOptions.setView = false;
            return this;
        },
        _handleGeolocationError: function(error) {
            if (!this._container._leaflet_id) return;
            var c = error.code, message = error.message || (c === 1 ? "permission denied" : c === 2 ? "position unavailable" : "timeout");
            if (this._locateOptions.setView && !this._loaded) this.fitWorld();
            // @section Location events
            // @event locationerror: ErrorEvent
            // Fired when geolocation (using the [`locate`](#map-locate) method) failed.
            this.fire("locationerror", {
                code: c,
                message: "Geolocation error: " + message + "."
            });
        },
        _handleGeolocationResponse: function(pos) {
            if (!this._container._leaflet_id) return;
            var lat = pos.coords.latitude, lng = pos.coords.longitude, latlng = new LatLng(lat, lng), bounds = latlng.toBounds(pos.coords.accuracy * 2), options = this._locateOptions;
            if (options.setView) {
                var zoom = this.getBoundsZoom(bounds);
                this.setView(latlng, options.maxZoom ? Math.min(zoom, options.maxZoom) : zoom);
            }
            var data = {
                latlng: latlng,
                bounds: bounds,
                timestamp: pos.timestamp
            };
            for(var i in pos.coords)if (typeof pos.coords[i] === "number") data[i] = pos.coords[i];
            // @event locationfound: LocationEvent
            // Fired when geolocation (using the [`locate`](#map-locate) method)
            // went successfully.
            this.fire("locationfound", data);
        },
        // TODO Appropriate docs section?
        // @section Other Methods
        // @method addHandler(name: String, HandlerClass: Function): this
        // Adds a new `Handler` to the map, given its name and constructor function.
        addHandler: function(name, HandlerClass) {
            if (!HandlerClass) return this;
            var handler = this[name] = new HandlerClass(this);
            this._handlers.push(handler);
            if (this.options[name]) handler.enable();
            return this;
        },
        // @method remove(): this
        // Destroys the map and clears all related event listeners.
        remove: function() {
            this._initEvents(true);
            if (this.options.maxBounds) this.off("moveend", this._panInsideMaxBounds);
            if (this._containerId !== this._container._leaflet_id) throw new Error("Map container is being reused by another instance");
            try {
                // throws error in IE6-8
                delete this._container._leaflet_id;
                delete this._containerId;
            } catch (e) {
                /*eslint-disable */ this._container._leaflet_id = undefined;
                /* eslint-enable */ this._containerId = undefined;
            }
            if (this._locationWatchId !== undefined) this.stopLocate();
            this._stop();
            remove(this._mapPane);
            if (this._clearControlPos) this._clearControlPos();
            if (this._resizeRequest) {
                cancelAnimFrame(this._resizeRequest);
                this._resizeRequest = null;
            }
            this._clearHandlers();
            if (this._loaded) // @section Map state change events
            // @event unload: Event
            // Fired when the map is destroyed with [remove](#map-remove) method.
            this.fire("unload");
            var i;
            for(i in this._layers)this._layers[i].remove();
            for(i in this._panes)remove(this._panes[i]);
            this._layers = [];
            this._panes = [];
            delete this._mapPane;
            delete this._renderer;
            return this;
        },
        // @section Other Methods
        // @method createPane(name: String, container?: HTMLElement): HTMLElement
        // Creates a new [map pane](#map-pane) with the given name if it doesn't exist already,
        // then returns it. The pane is created as a child of `container`, or
        // as a child of the main map pane if not set.
        createPane: function(name, container) {
            var className = "leaflet-pane" + (name ? " leaflet-" + name.replace("Pane", "") + "-pane" : ""), pane = create$1("div", className, container || this._mapPane);
            if (name) this._panes[name] = pane;
            return pane;
        },
        // @section Methods for Getting Map State
        // @method getCenter(): LatLng
        // Returns the geographical center of the map view
        getCenter: function() {
            this._checkIfLoaded();
            if (this._lastCenter && !this._moved()) return this._lastCenter.clone();
            return this.layerPointToLatLng(this._getCenterLayerPoint());
        },
        // @method getZoom(): Number
        // Returns the current zoom level of the map view
        getZoom: function() {
            return this._zoom;
        },
        // @method getBounds(): LatLngBounds
        // Returns the geographical bounds visible in the current map view
        getBounds: function() {
            var bounds = this.getPixelBounds(), sw = this.unproject(bounds.getBottomLeft()), ne = this.unproject(bounds.getTopRight());
            return new LatLngBounds(sw, ne);
        },
        // @method getMinZoom(): Number
        // Returns the minimum zoom level of the map (if set in the `minZoom` option of the map or of any layers), or `0` by default.
        getMinZoom: function() {
            return this.options.minZoom === undefined ? this._layersMinZoom || 0 : this.options.minZoom;
        },
        // @method getMaxZoom(): Number
        // Returns the maximum zoom level of the map (if set in the `maxZoom` option of the map or of any layers).
        getMaxZoom: function() {
            return this.options.maxZoom === undefined ? this._layersMaxZoom === undefined ? Infinity : this._layersMaxZoom : this.options.maxZoom;
        },
        // @method getBoundsZoom(bounds: LatLngBounds, inside?: Boolean, padding?: Point): Number
        // Returns the maximum zoom level on which the given bounds fit to the map
        // view in its entirety. If `inside` (optional) is set to `true`, the method
        // instead returns the minimum zoom level on which the map view fits into
        // the given bounds in its entirety.
        getBoundsZoom: function(bounds, inside, padding) {
            bounds = toLatLngBounds(bounds);
            padding = toPoint(padding || [
                0,
                0
            ]);
            var zoom = this.getZoom() || 0, min = this.getMinZoom(), max = this.getMaxZoom(), nw = bounds.getNorthWest(), se = bounds.getSouthEast(), size = this.getSize().subtract(padding), boundsSize = toBounds(this.project(se, zoom), this.project(nw, zoom)).getSize(), snap = Browser.any3d ? this.options.zoomSnap : 1, scalex = size.x / boundsSize.x, scaley = size.y / boundsSize.y, scale = inside ? Math.max(scalex, scaley) : Math.min(scalex, scaley);
            zoom = this.getScaleZoom(scale, zoom);
            if (snap) {
                zoom = Math.round(zoom / (snap / 100)) * (snap / 100); // don't jump if within 1% of a snap level
                zoom = inside ? Math.ceil(zoom / snap) * snap : Math.floor(zoom / snap) * snap;
            }
            return Math.max(min, Math.min(max, zoom));
        },
        // @method getSize(): Point
        // Returns the current size of the map container (in pixels).
        getSize: function() {
            if (!this._size || this._sizeChanged) {
                this._size = new Point(this._container.clientWidth || 0, this._container.clientHeight || 0);
                this._sizeChanged = false;
            }
            return this._size.clone();
        },
        // @method getPixelBounds(): Bounds
        // Returns the bounds of the current map view in projected pixel
        // coordinates (sometimes useful in layer and overlay implementations).
        getPixelBounds: function(center, zoom) {
            var topLeftPoint = this._getTopLeftPoint(center, zoom);
            return new Bounds(topLeftPoint, topLeftPoint.add(this.getSize()));
        },
        // TODO: Check semantics - isn't the pixel origin the 0,0 coord relative to
        // the map pane? "left point of the map layer" can be confusing, specially
        // since there can be negative offsets.
        // @method getPixelOrigin(): Point
        // Returns the projected pixel coordinates of the top left point of
        // the map layer (useful in custom layer and overlay implementations).
        getPixelOrigin: function() {
            this._checkIfLoaded();
            return this._pixelOrigin;
        },
        // @method getPixelWorldBounds(zoom?: Number): Bounds
        // Returns the world's bounds in pixel coordinates for zoom level `zoom`.
        // If `zoom` is omitted, the map's current zoom level is used.
        getPixelWorldBounds: function(zoom) {
            return this.options.crs.getProjectedBounds(zoom === undefined ? this.getZoom() : zoom);
        },
        // @section Other Methods
        // @method getPane(pane: String|HTMLElement): HTMLElement
        // Returns a [map pane](#map-pane), given its name or its HTML element (its identity).
        getPane: function(pane) {
            return typeof pane === "string" ? this._panes[pane] : pane;
        },
        // @method getPanes(): Object
        // Returns a plain object containing the names of all [panes](#map-pane) as keys and
        // the panes as values.
        getPanes: function() {
            return this._panes;
        },
        // @method getContainer: HTMLElement
        // Returns the HTML element that contains the map.
        getContainer: function() {
            return this._container;
        },
        // @section Conversion Methods
        // @method getZoomScale(toZoom: Number, fromZoom: Number): Number
        // Returns the scale factor to be applied to a map transition from zoom level
        // `fromZoom` to `toZoom`. Used internally to help with zoom animations.
        getZoomScale: function(toZoom, fromZoom) {
            // TODO replace with universal implementation after refactoring projections
            var crs = this.options.crs;
            fromZoom = fromZoom === undefined ? this._zoom : fromZoom;
            return crs.scale(toZoom) / crs.scale(fromZoom);
        },
        // @method getScaleZoom(scale: Number, fromZoom: Number): Number
        // Returns the zoom level that the map would end up at, if it is at `fromZoom`
        // level and everything is scaled by a factor of `scale`. Inverse of
        // [`getZoomScale`](#map-getZoomScale).
        getScaleZoom: function(scale, fromZoom) {
            var crs = this.options.crs;
            fromZoom = fromZoom === undefined ? this._zoom : fromZoom;
            var zoom = crs.zoom(scale * crs.scale(fromZoom));
            return isNaN(zoom) ? Infinity : zoom;
        },
        // @method project(latlng: LatLng, zoom: Number): Point
        // Projects a geographical coordinate `LatLng` according to the projection
        // of the map's CRS, then scales it according to `zoom` and the CRS's
        // `Transformation`. The result is pixel coordinate relative to
        // the CRS origin.
        project: function(latlng, zoom) {
            zoom = zoom === undefined ? this._zoom : zoom;
            return this.options.crs.latLngToPoint(toLatLng(latlng), zoom);
        },
        // @method unproject(point: Point, zoom: Number): LatLng
        // Inverse of [`project`](#map-project).
        unproject: function(point, zoom) {
            zoom = zoom === undefined ? this._zoom : zoom;
            return this.options.crs.pointToLatLng(toPoint(point), zoom);
        },
        // @method layerPointToLatLng(point: Point): LatLng
        // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
        // returns the corresponding geographical coordinate (for the current zoom level).
        layerPointToLatLng: function(point) {
            var projectedPoint = toPoint(point).add(this.getPixelOrigin());
            return this.unproject(projectedPoint);
        },
        // @method latLngToLayerPoint(latlng: LatLng): Point
        // Given a geographical coordinate, returns the corresponding pixel coordinate
        // relative to the [origin pixel](#map-getpixelorigin).
        latLngToLayerPoint: function(latlng) {
            var projectedPoint = this.project(toLatLng(latlng))._round();
            return projectedPoint._subtract(this.getPixelOrigin());
        },
        // @method wrapLatLng(latlng: LatLng): LatLng
        // Returns a `LatLng` where `lat` and `lng` has been wrapped according to the
        // map's CRS's `wrapLat` and `wrapLng` properties, if they are outside the
        // CRS's bounds.
        // By default this means longitude is wrapped around the dateline so its
        // value is between -180 and +180 degrees.
        wrapLatLng: function(latlng) {
            return this.options.crs.wrapLatLng(toLatLng(latlng));
        },
        // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
        // Returns a `LatLngBounds` with the same size as the given one, ensuring that
        // its center is within the CRS's bounds.
        // By default this means the center longitude is wrapped around the dateline so its
        // value is between -180 and +180 degrees, and the majority of the bounds
        // overlaps the CRS's bounds.
        wrapLatLngBounds: function(latlng) {
            return this.options.crs.wrapLatLngBounds(toLatLngBounds(latlng));
        },
        // @method distance(latlng1: LatLng, latlng2: LatLng): Number
        // Returns the distance between two geographical coordinates according to
        // the map's CRS. By default this measures distance in meters.
        distance: function(latlng1, latlng2) {
            return this.options.crs.distance(toLatLng(latlng1), toLatLng(latlng2));
        },
        // @method containerPointToLayerPoint(point: Point): Point
        // Given a pixel coordinate relative to the map container, returns the corresponding
        // pixel coordinate relative to the [origin pixel](#map-getpixelorigin).
        containerPointToLayerPoint: function(point) {
            return toPoint(point).subtract(this._getMapPanePos());
        },
        // @method layerPointToContainerPoint(point: Point): Point
        // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
        // returns the corresponding pixel coordinate relative to the map container.
        layerPointToContainerPoint: function(point) {
            return toPoint(point).add(this._getMapPanePos());
        },
        // @method containerPointToLatLng(point: Point): LatLng
        // Given a pixel coordinate relative to the map container, returns
        // the corresponding geographical coordinate (for the current zoom level).
        containerPointToLatLng: function(point) {
            var layerPoint = this.containerPointToLayerPoint(toPoint(point));
            return this.layerPointToLatLng(layerPoint);
        },
        // @method latLngToContainerPoint(latlng: LatLng): Point
        // Given a geographical coordinate, returns the corresponding pixel coordinate
        // relative to the map container.
        latLngToContainerPoint: function(latlng) {
            return this.layerPointToContainerPoint(this.latLngToLayerPoint(toLatLng(latlng)));
        },
        // @method mouseEventToContainerPoint(ev: MouseEvent): Point
        // Given a MouseEvent object, returns the pixel coordinate relative to the
        // map container where the event took place.
        mouseEventToContainerPoint: function(e) {
            return getMousePosition(e, this._container);
        },
        // @method mouseEventToLayerPoint(ev: MouseEvent): Point
        // Given a MouseEvent object, returns the pixel coordinate relative to
        // the [origin pixel](#map-getpixelorigin) where the event took place.
        mouseEventToLayerPoint: function(e) {
            return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(e));
        },
        // @method mouseEventToLatLng(ev: MouseEvent): LatLng
        // Given a MouseEvent object, returns geographical coordinate where the
        // event took place.
        mouseEventToLatLng: function(e) {
            return this.layerPointToLatLng(this.mouseEventToLayerPoint(e));
        },
        // map initialization methods
        _initContainer: function(id) {
            var container = this._container = get(id);
            if (!container) throw new Error("Map container not found.");
            else if (container._leaflet_id) throw new Error("Map container is already initialized.");
            on(container, "scroll", this._onScroll, this);
            this._containerId = stamp(container);
        },
        _initLayout: function() {
            var container = this._container;
            this._fadeAnimated = this.options.fadeAnimation && Browser.any3d;
            addClass(container, "leaflet-container" + (Browser.touch ? " leaflet-touch" : "") + (Browser.retina ? " leaflet-retina" : "") + (Browser.ielt9 ? " leaflet-oldie" : "") + (Browser.safari ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
            var position = getStyle(container, "position");
            if (position !== "absolute" && position !== "relative" && position !== "fixed" && position !== "sticky") container.style.position = "relative";
            this._initPanes();
            if (this._initControlPos) this._initControlPos();
        },
        _initPanes: function() {
            var panes = this._panes = {};
            this._paneRenderers = {};
            // @section
            //
            // Panes are DOM elements used to control the ordering of layers on the map. You
            // can access panes with [`map.getPane`](#map-getpane) or
            // [`map.getPanes`](#map-getpanes) methods. New panes can be created with the
            // [`map.createPane`](#map-createpane) method.
            //
            // Every map has the following default panes that differ only in zIndex.
            //
            // @pane mapPane: HTMLElement = 'auto'
            // Pane that contains all other map panes
            this._mapPane = this.createPane("mapPane", this._container);
            setPosition(this._mapPane, new Point(0, 0));
            // @pane tilePane: HTMLElement = 200
            // Pane for `GridLayer`s and `TileLayer`s
            this.createPane("tilePane");
            // @pane overlayPane: HTMLElement = 400
            // Pane for vectors (`Path`s, like `Polyline`s and `Polygon`s), `ImageOverlay`s and `VideoOverlay`s
            this.createPane("overlayPane");
            // @pane shadowPane: HTMLElement = 500
            // Pane for overlay shadows (e.g. `Marker` shadows)
            this.createPane("shadowPane");
            // @pane markerPane: HTMLElement = 600
            // Pane for `Icon`s of `Marker`s
            this.createPane("markerPane");
            // @pane tooltipPane: HTMLElement = 650
            // Pane for `Tooltip`s.
            this.createPane("tooltipPane");
            // @pane popupPane: HTMLElement = 700
            // Pane for `Popup`s.
            this.createPane("popupPane");
            if (!this.options.markerZoomAnimation) {
                addClass(panes.markerPane, "leaflet-zoom-hide");
                addClass(panes.shadowPane, "leaflet-zoom-hide");
            }
        },
        // private methods that modify map state
        // @section Map state change events
        _resetView: function(center, zoom, noMoveStart) {
            setPosition(this._mapPane, new Point(0, 0));
            var loading = !this._loaded;
            this._loaded = true;
            zoom = this._limitZoom(zoom);
            this.fire("viewprereset");
            var zoomChanged = this._zoom !== zoom;
            this._moveStart(zoomChanged, noMoveStart)._move(center, zoom)._moveEnd(zoomChanged);
            // @event viewreset: Event
            // Fired when the map needs to redraw its content (this usually happens
            // on map zoom or load). Very useful for creating custom overlays.
            this.fire("viewreset");
            // @event load: Event
            // Fired when the map is initialized (when its center and zoom are set
            // for the first time).
            if (loading) this.fire("load");
        },
        _moveStart: function(zoomChanged, noMoveStart) {
            // @event zoomstart: Event
            // Fired when the map zoom is about to change (e.g. before zoom animation).
            // @event movestart: Event
            // Fired when the view of the map starts changing (e.g. user starts dragging the map).
            if (zoomChanged) this.fire("zoomstart");
            if (!noMoveStart) this.fire("movestart");
            return this;
        },
        _move: function(center, zoom, data, supressEvent) {
            if (zoom === undefined) zoom = this._zoom;
            var zoomChanged = this._zoom !== zoom;
            this._zoom = zoom;
            this._lastCenter = center;
            this._pixelOrigin = this._getNewPixelOrigin(center);
            if (!supressEvent) {
                // @event zoom: Event
                // Fired repeatedly during any change in zoom level,
                // including zoom and fly animations.
                if (zoomChanged || data && data.pinch) this.fire("zoom", data);
                // @event move: Event
                // Fired repeatedly during any movement of the map,
                // including pan and fly animations.
                this.fire("move", data);
            } else if (data && data.pinch) this.fire("zoom", data);
            return this;
        },
        _moveEnd: function(zoomChanged) {
            // @event zoomend: Event
            // Fired when the map zoom changed, after any animations.
            if (zoomChanged) this.fire("zoomend");
            // @event moveend: Event
            // Fired when the center of the map stops changing
            // (e.g. user stopped dragging the map or after non-centered zoom).
            return this.fire("moveend");
        },
        _stop: function() {
            cancelAnimFrame(this._flyToFrame);
            if (this._panAnim) this._panAnim.stop();
            return this;
        },
        _rawPanBy: function(offset) {
            setPosition(this._mapPane, this._getMapPanePos().subtract(offset));
        },
        _getZoomSpan: function() {
            return this.getMaxZoom() - this.getMinZoom();
        },
        _panInsideMaxBounds: function() {
            if (!this._enforcingBounds) this.panInsideBounds(this.options.maxBounds);
        },
        _checkIfLoaded: function() {
            if (!this._loaded) throw new Error("Set map center and zoom first.");
        },
        // DOM event handling
        // @section Interaction events
        _initEvents: function(remove) {
            this._targets = {};
            this._targets[stamp(this._container)] = this;
            var onOff = remove ? off : on;
            // @event click: MouseEvent
            // Fired when the user clicks (or taps) the map.
            // @event dblclick: MouseEvent
            // Fired when the user double-clicks (or double-taps) the map.
            // @event mousedown: MouseEvent
            // Fired when the user pushes the mouse button on the map.
            // @event mouseup: MouseEvent
            // Fired when the user releases the mouse button on the map.
            // @event mouseover: MouseEvent
            // Fired when the mouse enters the map.
            // @event mouseout: MouseEvent
            // Fired when the mouse leaves the map.
            // @event mousemove: MouseEvent
            // Fired while the mouse moves over the map.
            // @event contextmenu: MouseEvent
            // Fired when the user pushes the right mouse button on the map, prevents
            // default browser context menu from showing if there are listeners on
            // this event. Also fired on mobile when the user holds a single touch
            // for a second (also called long press).
            // @event keypress: KeyboardEvent
            // Fired when the user presses a key from the keyboard that produces a character value while the map is focused.
            // @event keydown: KeyboardEvent
            // Fired when the user presses a key from the keyboard while the map is focused. Unlike the `keypress` event,
            // the `keydown` event is fired for keys that produce a character value and for keys
            // that do not produce a character value.
            // @event keyup: KeyboardEvent
            // Fired when the user releases a key from the keyboard while the map is focused.
            onOff(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this);
            if (this.options.trackResize) onOff(window, "resize", this._onResize, this);
            if (Browser.any3d && this.options.transform3DLimit) (remove ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
        },
        _onResize: function() {
            cancelAnimFrame(this._resizeRequest);
            this._resizeRequest = requestAnimFrame(function() {
                this.invalidateSize({
                    debounceMoveend: true
                });
            }, this);
        },
        _onScroll: function() {
            this._container.scrollTop = 0;
            this._container.scrollLeft = 0;
        },
        _onMoveEnd: function() {
            var pos = this._getMapPanePos();
            if (Math.max(Math.abs(pos.x), Math.abs(pos.y)) >= this.options.transform3DLimit) // https://bugzilla.mozilla.org/show_bug.cgi?id=1203873 but Webkit also have
            // a pixel offset on very high values, see: https://jsfiddle.net/dg6r5hhb/
            this._resetView(this.getCenter(), this.getZoom());
        },
        _findEventTargets: function(e, type) {
            var targets = [], target, isHover = type === "mouseout" || type === "mouseover", src = e.target || e.srcElement, dragging = false;
            while(src){
                target = this._targets[stamp(src)];
                if (target && (type === "click" || type === "preclick") && this._draggableMoved(target)) {
                    // Prevent firing click after you just dragged an object.
                    dragging = true;
                    break;
                }
                if (target && target.listens(type, true)) {
                    if (isHover && !isExternalTarget(src, e)) break;
                    targets.push(target);
                    if (isHover) break;
                }
                if (src === this._container) break;
                src = src.parentNode;
            }
            if (!targets.length && !dragging && !isHover && this.listens(type, true)) targets = [
                this
            ];
            return targets;
        },
        _isClickDisabled: function(el) {
            while(el && el !== this._container){
                if (el["_leaflet_disable_click"]) return true;
                el = el.parentNode;
            }
        },
        _handleDOMEvent: function(e) {
            var el = e.target || e.srcElement;
            if (!this._loaded || el["_leaflet_disable_events"] || e.type === "click" && this._isClickDisabled(el)) return;
            var type = e.type;
            if (type === "mousedown") // prevents outline when clicking on keyboard-focusable element
            preventOutline(el);
            this._fireDOMEvent(e, type);
        },
        _mouseEvents: [
            "click",
            "dblclick",
            "mouseover",
            "mouseout",
            "contextmenu"
        ],
        _fireDOMEvent: function(e, type, canvasTargets) {
            if (e.type === "click") {
                // Fire a synthetic 'preclick' event which propagates up (mainly for closing popups).
                // @event preclick: MouseEvent
                // Fired before mouse click on the map (sometimes useful when you
                // want something to happen on click before any existing click
                // handlers start running).
                var synth = extend({}, e);
                synth.type = "preclick";
                this._fireDOMEvent(synth, synth.type, canvasTargets);
            }
            // Find the layer the event is propagating from and its parents.
            var targets = this._findEventTargets(e, type);
            if (canvasTargets) {
                var filtered = []; // pick only targets with listeners
                for(var i = 0; i < canvasTargets.length; i++)if (canvasTargets[i].listens(type, true)) filtered.push(canvasTargets[i]);
                targets = filtered.concat(targets);
            }
            if (!targets.length) return;
            if (type === "contextmenu") preventDefault(e);
            var target = targets[0];
            var data = {
                originalEvent: e
            };
            if (e.type !== "keypress" && e.type !== "keydown" && e.type !== "keyup") {
                var isMarker = target.getLatLng && (!target._radius || target._radius <= 10);
                data.containerPoint = isMarker ? this.latLngToContainerPoint(target.getLatLng()) : this.mouseEventToContainerPoint(e);
                data.layerPoint = this.containerPointToLayerPoint(data.containerPoint);
                data.latlng = isMarker ? target.getLatLng() : this.layerPointToLatLng(data.layerPoint);
            }
            for(i = 0; i < targets.length; i++){
                targets[i].fire(type, data, true);
                if (data.originalEvent._stopped || targets[i].options.bubblingMouseEvents === false && indexOf(this._mouseEvents, type) !== -1) return;
            }
        },
        _draggableMoved: function(obj) {
            obj = obj.dragging && obj.dragging.enabled() ? obj : this;
            return obj.dragging && obj.dragging.moved() || this.boxZoom && this.boxZoom.moved();
        },
        _clearHandlers: function() {
            for(var i = 0, len = this._handlers.length; i < len; i++)this._handlers[i].disable();
        },
        // @section Other Methods
        // @method whenReady(fn: Function, context?: Object): this
        // Runs the given function `fn` when the map gets initialized with
        // a view (center and zoom) and at least one layer, or immediately
        // if it's already initialized, optionally passing a function context.
        whenReady: function(callback, context) {
            if (this._loaded) callback.call(context || this, {
                target: this
            });
            else this.on("load", callback, context);
            return this;
        },
        // private methods for getting map state
        _getMapPanePos: function() {
            return getPosition(this._mapPane) || new Point(0, 0);
        },
        _moved: function() {
            var pos = this._getMapPanePos();
            return pos && !pos.equals([
                0,
                0
            ]);
        },
        _getTopLeftPoint: function(center, zoom) {
            var pixelOrigin = center && zoom !== undefined ? this._getNewPixelOrigin(center, zoom) : this.getPixelOrigin();
            return pixelOrigin.subtract(this._getMapPanePos());
        },
        _getNewPixelOrigin: function(center, zoom) {
            var viewHalf = this.getSize()._divideBy(2);
            return this.project(center, zoom)._subtract(viewHalf)._add(this._getMapPanePos())._round();
        },
        _latLngToNewLayerPoint: function(latlng, zoom, center) {
            var topLeft = this._getNewPixelOrigin(center, zoom);
            return this.project(latlng, zoom)._subtract(topLeft);
        },
        _latLngBoundsToNewLayerBounds: function(latLngBounds, zoom, center) {
            var topLeft = this._getNewPixelOrigin(center, zoom);
            return toBounds([
                this.project(latLngBounds.getSouthWest(), zoom)._subtract(topLeft),
                this.project(latLngBounds.getNorthWest(), zoom)._subtract(topLeft),
                this.project(latLngBounds.getSouthEast(), zoom)._subtract(topLeft),
                this.project(latLngBounds.getNorthEast(), zoom)._subtract(topLeft)
            ]);
        },
        // layer point of the current center
        _getCenterLayerPoint: function() {
            return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
        },
        // offset of the specified place to the current center in pixels
        _getCenterOffset: function(latlng) {
            return this.latLngToLayerPoint(latlng).subtract(this._getCenterLayerPoint());
        },
        // adjust center for view to get inside bounds
        _limitCenter: function(center, zoom, bounds) {
            if (!bounds) return center;
            var centerPoint = this.project(center, zoom), viewHalf = this.getSize().divideBy(2), viewBounds = new Bounds(centerPoint.subtract(viewHalf), centerPoint.add(viewHalf)), offset = this._getBoundsOffset(viewBounds, bounds, zoom);
            // If offset is less than a pixel, ignore.
            // This prevents unstable projections from getting into
            // an infinite loop of tiny offsets.
            if (Math.abs(offset.x) <= 1 && Math.abs(offset.y) <= 1) return center;
            return this.unproject(centerPoint.add(offset), zoom);
        },
        // adjust offset for view to get inside bounds
        _limitOffset: function(offset, bounds) {
            if (!bounds) return offset;
            var viewBounds = this.getPixelBounds(), newBounds = new Bounds(viewBounds.min.add(offset), viewBounds.max.add(offset));
            return offset.add(this._getBoundsOffset(newBounds, bounds));
        },
        // returns offset needed for pxBounds to get inside maxBounds at a specified zoom
        _getBoundsOffset: function(pxBounds, maxBounds, zoom) {
            var projectedMaxBounds = toBounds(this.project(maxBounds.getNorthEast(), zoom), this.project(maxBounds.getSouthWest(), zoom)), minOffset = projectedMaxBounds.min.subtract(pxBounds.min), maxOffset = projectedMaxBounds.max.subtract(pxBounds.max), dx = this._rebound(minOffset.x, -maxOffset.x), dy = this._rebound(minOffset.y, -maxOffset.y);
            return new Point(dx, dy);
        },
        _rebound: function(left, right) {
            return left + right > 0 ? Math.round(left - right) / 2 : Math.max(0, Math.ceil(left)) - Math.max(0, Math.floor(right));
        },
        _limitZoom: function(zoom) {
            var min = this.getMinZoom(), max = this.getMaxZoom(), snap = Browser.any3d ? this.options.zoomSnap : 1;
            if (snap) zoom = Math.round(zoom / snap) * snap;
            return Math.max(min, Math.min(max, zoom));
        },
        _onPanTransitionStep: function() {
            this.fire("move");
        },
        _onPanTransitionEnd: function() {
            removeClass(this._mapPane, "leaflet-pan-anim");
            this.fire("moveend");
        },
        _tryAnimatedPan: function(center, options) {
            // difference between the new and current centers in pixels
            var offset = this._getCenterOffset(center)._trunc();
            // don't animate too far unless animate: true specified in options
            if ((options && options.animate) !== true && !this.getSize().contains(offset)) return false;
            this.panBy(offset, options);
            return true;
        },
        _createAnimProxy: function() {
            var proxy = this._proxy = create$1("div", "leaflet-proxy leaflet-zoom-animated");
            this._panes.mapPane.appendChild(proxy);
            this.on("zoomanim", function(e) {
                var prop = TRANSFORM, transform = this._proxy.style[prop];
                setTransform(this._proxy, this.project(e.center, e.zoom), this.getZoomScale(e.zoom, 1));
                // workaround for case when transform is the same and so transitionend event is not fired
                if (transform === this._proxy.style[prop] && this._animatingZoom) this._onZoomTransitionEnd();
            }, this);
            this.on("load moveend", this._animMoveEnd, this);
            this._on("unload", this._destroyAnimProxy, this);
        },
        _destroyAnimProxy: function() {
            remove(this._proxy);
            this.off("load moveend", this._animMoveEnd, this);
            delete this._proxy;
        },
        _animMoveEnd: function() {
            var c = this.getCenter(), z = this.getZoom();
            setTransform(this._proxy, this.project(c, z), this.getZoomScale(z, 1));
        },
        _catchTransitionEnd: function(e) {
            if (this._animatingZoom && e.propertyName.indexOf("transform") >= 0) this._onZoomTransitionEnd();
        },
        _nothingToAnimate: function() {
            return !this._container.getElementsByClassName("leaflet-zoom-animated").length;
        },
        _tryAnimatedZoom: function(center, zoom, options) {
            if (this._animatingZoom) return true;
            options = options || {};
            // don't animate if disabled, not supported or zoom difference is too large
            if (!this._zoomAnimated || options.animate === false || this._nothingToAnimate() || Math.abs(zoom - this._zoom) > this.options.zoomAnimationThreshold) return false;
            // offset is the pixel coords of the zoom origin relative to the current center
            var scale = this.getZoomScale(zoom), offset = this._getCenterOffset(center)._divideBy(1 - 1 / scale);
            // don't animate if the zoom origin isn't within one screen from the current center, unless forced
            if (options.animate !== true && !this.getSize().contains(offset)) return false;
            requestAnimFrame(function() {
                this._moveStart(true, options.noMoveStart || false)._animateZoom(center, zoom, true);
            }, this);
            return true;
        },
        _animateZoom: function(center, zoom, startAnim, noUpdate) {
            if (!this._mapPane) return;
            if (startAnim) {
                this._animatingZoom = true;
                // remember what center/zoom to set after animation
                this._animateToCenter = center;
                this._animateToZoom = zoom;
                addClass(this._mapPane, "leaflet-zoom-anim");
            }
            // @section Other Events
            // @event zoomanim: ZoomAnimEvent
            // Fired at least once per zoom animation. For continuous zoom, like pinch zooming, fired once per frame during zoom.
            this.fire("zoomanim", {
                center: center,
                zoom: zoom,
                noUpdate: noUpdate
            });
            if (!this._tempFireZoomEvent) this._tempFireZoomEvent = this._zoom !== this._animateToZoom;
            this._move(this._animateToCenter, this._animateToZoom, undefined, true);
            // Work around webkit not firing 'transitionend', see https://github.com/Leaflet/Leaflet/issues/3689, 2693
            setTimeout(bind(this._onZoomTransitionEnd, this), 250);
        },
        _onZoomTransitionEnd: function() {
            if (!this._animatingZoom) return;
            if (this._mapPane) removeClass(this._mapPane, "leaflet-zoom-anim");
            this._animatingZoom = false;
            this._move(this._animateToCenter, this._animateToZoom, undefined, true);
            if (this._tempFireZoomEvent) this.fire("zoom");
            delete this._tempFireZoomEvent;
            this.fire("move");
            this._moveEnd(true);
        }
    });
    // @section
    // @factory L.map(id: String, options?: Map options)
    // Instantiates a map object given the DOM ID of a `<div>` element
    // and optionally an object literal with `Map options`.
    //
    // @alternative
    // @factory L.map(el: HTMLElement, options?: Map options)
    // Instantiates a map object given an instance of a `<div>` HTML element
    // and optionally an object literal with `Map options`.
    function createMap(id, options) {
        return new Map(id, options);
    }
    /*
   * @class Control
   * @aka L.Control
   * @inherits Class
   *
   * L.Control is a base class for implementing map controls. Handles positioning.
   * All other controls extend from this class.
   */ var Control = Class.extend({
        // @section
        // @aka Control Options
        options: {
            // @option position: String = 'topright'
            // The position of the control (one of the map corners). Possible values are `'topleft'`,
            // `'topright'`, `'bottomleft'` or `'bottomright'`
            position: "topright"
        },
        initialize: function(options) {
            setOptions(this, options);
        },
        /* @section
  	 * Classes extending L.Control will inherit the following methods:
  	 *
  	 * @method getPosition: string
  	 * Returns the position of the control.
  	 */ getPosition: function() {
            return this.options.position;
        },
        // @method setPosition(position: string): this
        // Sets the position of the control.
        setPosition: function(position) {
            var map = this._map;
            if (map) map.removeControl(this);
            this.options.position = position;
            if (map) map.addControl(this);
            return this;
        },
        // @method getContainer: HTMLElement
        // Returns the HTMLElement that contains the control.
        getContainer: function() {
            return this._container;
        },
        // @method addTo(map: Map): this
        // Adds the control to the given map.
        addTo: function(map) {
            this.remove();
            this._map = map;
            var container = this._container = this.onAdd(map), pos = this.getPosition(), corner = map._controlCorners[pos];
            addClass(container, "leaflet-control");
            if (pos.indexOf("bottom") !== -1) corner.insertBefore(container, corner.firstChild);
            else corner.appendChild(container);
            this._map.on("unload", this.remove, this);
            return this;
        },
        // @method remove: this
        // Removes the control from the map it is currently active on.
        remove: function() {
            if (!this._map) return this;
            remove(this._container);
            if (this.onRemove) this.onRemove(this._map);
            this._map.off("unload", this.remove, this);
            this._map = null;
            return this;
        },
        _refocusOnMap: function(e) {
            // if map exists and event is not a keyboard event
            if (this._map && e && e.screenX > 0 && e.screenY > 0) this._map.getContainer().focus();
        }
    });
    var control = function(options) {
        return new Control(options);
    };
    /* @section Extension methods
   * @uninheritable
   *
   * Every control should extend from `L.Control` and (re-)implement the following methods.
   *
   * @method onAdd(map: Map): HTMLElement
   * Should return the container DOM element for the control and add listeners on relevant map events. Called on [`control.addTo(map)`](#control-addTo).
   *
   * @method onRemove(map: Map)
   * Optional method. Should contain all clean up code that removes the listeners previously added in [`onAdd`](#control-onadd). Called on [`control.remove()`](#control-remove).
   */ /* @namespace Map
   * @section Methods for Layers and Controls
   */ Map.include({
        // @method addControl(control: Control): this
        // Adds the given control to the map
        addControl: function(control) {
            control.addTo(this);
            return this;
        },
        // @method removeControl(control: Control): this
        // Removes the given control from the map
        removeControl: function(control) {
            control.remove();
            return this;
        },
        _initControlPos: function() {
            var corners = this._controlCorners = {}, l = "leaflet-", container = this._controlContainer = create$1("div", l + "control-container", this._container);
            function createCorner(vSide, hSide) {
                var className = l + vSide + " " + l + hSide;
                corners[vSide + hSide] = create$1("div", className, container);
            }
            createCorner("top", "left");
            createCorner("top", "right");
            createCorner("bottom", "left");
            createCorner("bottom", "right");
        },
        _clearControlPos: function() {
            for(var i in this._controlCorners)remove(this._controlCorners[i]);
            remove(this._controlContainer);
            delete this._controlCorners;
            delete this._controlContainer;
        }
    });
    /*
   * @class Control.Layers
   * @aka L.Control.Layers
   * @inherits Control
   *
   * The layers control gives users the ability to switch between different base layers and switch overlays on/off (check out the [detailed example](https://leafletjs.com/examples/layers-control/)). Extends `Control`.
   *
   * @example
   *
   * ```js
   * var baseLayers = {
   * 	"Mapbox": mapbox,
   * 	"OpenStreetMap": osm
   * };
   *
   * var overlays = {
   * 	"Marker": marker,
   * 	"Roads": roadsLayer
   * };
   *
   * L.control.layers(baseLayers, overlays).addTo(map);
   * ```
   *
   * The `baseLayers` and `overlays` parameters are object literals with layer names as keys and `Layer` objects as values:
   *
   * ```js
   * {
   *     "<someName1>": layer1,
   *     "<someName2>": layer2
   * }
   * ```
   *
   * The layer names can contain HTML, which allows you to add additional styling to the items:
   *
   * ```js
   * {"<img src='my-layer-icon' /> <span class='my-layer-item'>My Layer</span>": myLayer}
   * ```
   */ var Layers = Control.extend({
        // @section
        // @aka Control.Layers options
        options: {
            // @option collapsed: Boolean = true
            // If `true`, the control will be collapsed into an icon and expanded on mouse hover, touch, or keyboard activation.
            collapsed: true,
            position: "topright",
            // @option autoZIndex: Boolean = true
            // If `true`, the control will assign zIndexes in increasing order to all of its layers so that the order is preserved when switching them on/off.
            autoZIndex: true,
            // @option hideSingleBase: Boolean = false
            // If `true`, the base layers in the control will be hidden when there is only one.
            hideSingleBase: false,
            // @option sortLayers: Boolean = false
            // Whether to sort the layers. When `false`, layers will keep the order
            // in which they were added to the control.
            sortLayers: false,
            // @option sortFunction: Function = *
            // A [compare function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
            // that will be used for sorting the layers, when `sortLayers` is `true`.
            // The function receives both the `L.Layer` instances and their names, as in
            // `sortFunction(layerA, layerB, nameA, nameB)`.
            // By default, it sorts layers alphabetically by their name.
            sortFunction: function(layerA, layerB, nameA, nameB) {
                return nameA < nameB ? -1 : nameB < nameA ? 1 : 0;
            }
        },
        initialize: function(baseLayers, overlays, options) {
            setOptions(this, options);
            this._layerControlInputs = [];
            this._layers = [];
            this._lastZIndex = 0;
            this._handlingClick = false;
            this._preventClick = false;
            for(var i in baseLayers)this._addLayer(baseLayers[i], i);
            for(i in overlays)this._addLayer(overlays[i], i, true);
        },
        onAdd: function(map) {
            this._initLayout();
            this._update();
            this._map = map;
            map.on("zoomend", this._checkDisabledLayers, this);
            for(var i = 0; i < this._layers.length; i++)this._layers[i].layer.on("add remove", this._onLayerChange, this);
            return this._container;
        },
        addTo: function(map) {
            Control.prototype.addTo.call(this, map);
            // Trigger expand after Layers Control has been inserted into DOM so that is now has an actual height.
            return this._expandIfNotCollapsed();
        },
        onRemove: function() {
            this._map.off("zoomend", this._checkDisabledLayers, this);
            for(var i = 0; i < this._layers.length; i++)this._layers[i].layer.off("add remove", this._onLayerChange, this);
        },
        // @method addBaseLayer(layer: Layer, name: String): this
        // Adds a base layer (radio button entry) with the given name to the control.
        addBaseLayer: function(layer, name) {
            this._addLayer(layer, name);
            return this._map ? this._update() : this;
        },
        // @method addOverlay(layer: Layer, name: String): this
        // Adds an overlay (checkbox entry) with the given name to the control.
        addOverlay: function(layer, name) {
            this._addLayer(layer, name, true);
            return this._map ? this._update() : this;
        },
        // @method removeLayer(layer: Layer): this
        // Remove the given layer from the control.
        removeLayer: function(layer) {
            layer.off("add remove", this._onLayerChange, this);
            var obj = this._getLayer(stamp(layer));
            if (obj) this._layers.splice(this._layers.indexOf(obj), 1);
            return this._map ? this._update() : this;
        },
        // @method expand(): this
        // Expand the control container if collapsed.
        expand: function() {
            addClass(this._container, "leaflet-control-layers-expanded");
            this._section.style.height = null;
            var acceptableHeight = this._map.getSize().y - (this._container.offsetTop + 50);
            if (acceptableHeight < this._section.clientHeight) {
                addClass(this._section, "leaflet-control-layers-scrollbar");
                this._section.style.height = acceptableHeight + "px";
            } else removeClass(this._section, "leaflet-control-layers-scrollbar");
            this._checkDisabledLayers();
            return this;
        },
        // @method collapse(): this
        // Collapse the control container if expanded.
        collapse: function() {
            removeClass(this._container, "leaflet-control-layers-expanded");
            return this;
        },
        _initLayout: function() {
            var className = "leaflet-control-layers", container = this._container = create$1("div", className), collapsed = this.options.collapsed;
            // makes this work on IE touch devices by stopping it from firing a mouseout event when the touch is released
            container.setAttribute("aria-haspopup", true);
            disableClickPropagation(container);
            disableScrollPropagation(container);
            var section = this._section = create$1("section", className + "-list");
            if (collapsed) {
                this._map.on("click", this.collapse, this);
                on(container, {
                    mouseenter: this._expandSafely,
                    mouseleave: this.collapse
                }, this);
            }
            var link = this._layersLink = create$1("a", className + "-toggle", container);
            link.href = "#";
            link.title = "Layers";
            link.setAttribute("role", "button");
            on(link, {
                keydown: function(e) {
                    if (e.keyCode === 13) this._expandSafely();
                },
                // Certain screen readers intercept the key event and instead send a click event
                click: function(e) {
                    preventDefault(e);
                    this._expandSafely();
                }
            }, this);
            if (!collapsed) this.expand();
            this._baseLayersList = create$1("div", className + "-base", section);
            this._separator = create$1("div", className + "-separator", section);
            this._overlaysList = create$1("div", className + "-overlays", section);
            container.appendChild(section);
        },
        _getLayer: function(id) {
            for(var i = 0; i < this._layers.length; i++){
                if (this._layers[i] && stamp(this._layers[i].layer) === id) return this._layers[i];
            }
        },
        _addLayer: function(layer, name, overlay) {
            if (this._map) layer.on("add remove", this._onLayerChange, this);
            this._layers.push({
                layer: layer,
                name: name,
                overlay: overlay
            });
            if (this.options.sortLayers) this._layers.sort(bind(function(a, b) {
                return this.options.sortFunction(a.layer, b.layer, a.name, b.name);
            }, this));
            if (this.options.autoZIndex && layer.setZIndex) {
                this._lastZIndex++;
                layer.setZIndex(this._lastZIndex);
            }
            this._expandIfNotCollapsed();
        },
        _update: function() {
            if (!this._container) return this;
            empty(this._baseLayersList);
            empty(this._overlaysList);
            this._layerControlInputs = [];
            var baseLayersPresent, overlaysPresent, i, obj, baseLayersCount = 0;
            for(i = 0; i < this._layers.length; i++){
                obj = this._layers[i];
                this._addItem(obj);
                overlaysPresent = overlaysPresent || obj.overlay;
                baseLayersPresent = baseLayersPresent || !obj.overlay;
                baseLayersCount += !obj.overlay ? 1 : 0;
            }
            // Hide base layers section if there's only one layer.
            if (this.options.hideSingleBase) {
                baseLayersPresent = baseLayersPresent && baseLayersCount > 1;
                this._baseLayersList.style.display = baseLayersPresent ? "" : "none";
            }
            this._separator.style.display = overlaysPresent && baseLayersPresent ? "" : "none";
            return this;
        },
        _onLayerChange: function(e) {
            if (!this._handlingClick) this._update();
            var obj = this._getLayer(stamp(e.target));
            // @namespace Map
            // @section Layer events
            // @event baselayerchange: LayersControlEvent
            // Fired when the base layer is changed through the [layers control](#control-layers).
            // @event overlayadd: LayersControlEvent
            // Fired when an overlay is selected through the [layers control](#control-layers).
            // @event overlayremove: LayersControlEvent
            // Fired when an overlay is deselected through the [layers control](#control-layers).
            // @namespace Control.Layers
            var type = obj.overlay ? e.type === "add" ? "overlayadd" : "overlayremove" : e.type === "add" ? "baselayerchange" : null;
            if (type) this._map.fire(type, obj);
        },
        // IE7 bugs out if you create a radio dynamically, so you have to do it this hacky way (see https://stackoverflow.com/a/119079)
        _createRadioElement: function(name, checked) {
            var radioHtml = '<input type="radio" class="leaflet-control-layers-selector" name="' + name + '"' + (checked ? ' checked="checked"' : "") + "/>";
            var radioFragment = document.createElement("div");
            radioFragment.innerHTML = radioHtml;
            return radioFragment.firstChild;
        },
        _addItem: function(obj) {
            var label = document.createElement("label"), checked = this._map.hasLayer(obj.layer), input;
            if (obj.overlay) {
                input = document.createElement("input");
                input.type = "checkbox";
                input.className = "leaflet-control-layers-selector";
                input.defaultChecked = checked;
            } else input = this._createRadioElement("leaflet-base-layers_" + stamp(this), checked);
            this._layerControlInputs.push(input);
            input.layerId = stamp(obj.layer);
            on(input, "click", this._onInputClick, this);
            var name = document.createElement("span");
            name.innerHTML = " " + obj.name;
            // Helps from preventing layer control flicker when checkboxes are disabled
            // https://github.com/Leaflet/Leaflet/issues/2771
            var holder = document.createElement("span");
            label.appendChild(holder);
            holder.appendChild(input);
            holder.appendChild(name);
            var container = obj.overlay ? this._overlaysList : this._baseLayersList;
            container.appendChild(label);
            this._checkDisabledLayers();
            return label;
        },
        _onInputClick: function() {
            // expanding the control on mobile with a click can cause adding a layer - we don't want this
            if (this._preventClick) return;
            var inputs = this._layerControlInputs, input, layer;
            var addedLayers = [], removedLayers = [];
            this._handlingClick = true;
            for(var i = inputs.length - 1; i >= 0; i--){
                input = inputs[i];
                layer = this._getLayer(input.layerId).layer;
                if (input.checked) addedLayers.push(layer);
                else if (!input.checked) removedLayers.push(layer);
            }
            // Bugfix issue 2318: Should remove all old layers before readding new ones
            for(i = 0; i < removedLayers.length; i++)if (this._map.hasLayer(removedLayers[i])) this._map.removeLayer(removedLayers[i]);
            for(i = 0; i < addedLayers.length; i++)if (!this._map.hasLayer(addedLayers[i])) this._map.addLayer(addedLayers[i]);
            this._handlingClick = false;
            this._refocusOnMap();
        },
        _checkDisabledLayers: function() {
            var inputs = this._layerControlInputs, input, layer, zoom = this._map.getZoom();
            for(var i = inputs.length - 1; i >= 0; i--){
                input = inputs[i];
                layer = this._getLayer(input.layerId).layer;
                input.disabled = layer.options.minZoom !== undefined && zoom < layer.options.minZoom || layer.options.maxZoom !== undefined && zoom > layer.options.maxZoom;
            }
        },
        _expandIfNotCollapsed: function() {
            if (this._map && !this.options.collapsed) this.expand();
            return this;
        },
        _expandSafely: function() {
            var section = this._section;
            this._preventClick = true;
            on(section, "click", preventDefault);
            this.expand();
            var that = this;
            setTimeout(function() {
                off(section, "click", preventDefault);
                that._preventClick = false;
            });
        }
    });
    // @factory L.control.layers(baselayers?: Object, overlays?: Object, options?: Control.Layers options)
    // Creates a layers control with the given layers. Base layers will be switched with radio buttons, while overlays will be switched with checkboxes. Note that all base layers should be passed in the base layers object, but only one should be added to the map during map instantiation.
    var layers = function(baseLayers, overlays, options) {
        return new Layers(baseLayers, overlays, options);
    };
    /*
   * @class Control.Zoom
   * @aka L.Control.Zoom
   * @inherits Control
   *
   * A basic zoom control with two buttons (zoom in and zoom out). It is put on the map by default unless you set its [`zoomControl` option](#map-zoomcontrol) to `false`. Extends `Control`.
   */ var Zoom = Control.extend({
        // @section
        // @aka Control.Zoom options
        options: {
            position: "topleft",
            // @option zoomInText: String = '<span aria-hidden="true">+</span>'
            // The text set on the 'zoom in' button.
            zoomInText: '<span aria-hidden="true">+</span>',
            // @option zoomInTitle: String = 'Zoom in'
            // The title set on the 'zoom in' button.
            zoomInTitle: "Zoom in",
            // @option zoomOutText: String = '<span aria-hidden="true">&#x2212;</span>'
            // The text set on the 'zoom out' button.
            zoomOutText: '<span aria-hidden="true">&#x2212;</span>',
            // @option zoomOutTitle: String = 'Zoom out'
            // The title set on the 'zoom out' button.
            zoomOutTitle: "Zoom out"
        },
        onAdd: function(map) {
            var zoomName = "leaflet-control-zoom", container = create$1("div", zoomName + " leaflet-bar"), options = this.options;
            this._zoomInButton = this._createButton(options.zoomInText, options.zoomInTitle, zoomName + "-in", container, this._zoomIn);
            this._zoomOutButton = this._createButton(options.zoomOutText, options.zoomOutTitle, zoomName + "-out", container, this._zoomOut);
            this._updateDisabled();
            map.on("zoomend zoomlevelschange", this._updateDisabled, this);
            return container;
        },
        onRemove: function(map) {
            map.off("zoomend zoomlevelschange", this._updateDisabled, this);
        },
        disable: function() {
            this._disabled = true;
            this._updateDisabled();
            return this;
        },
        enable: function() {
            this._disabled = false;
            this._updateDisabled();
            return this;
        },
        _zoomIn: function(e) {
            if (!this._disabled && this._map._zoom < this._map.getMaxZoom()) this._map.zoomIn(this._map.options.zoomDelta * (e.shiftKey ? 3 : 1));
        },
        _zoomOut: function(e) {
            if (!this._disabled && this._map._zoom > this._map.getMinZoom()) this._map.zoomOut(this._map.options.zoomDelta * (e.shiftKey ? 3 : 1));
        },
        _createButton: function(html, title, className, container, fn) {
            var link = create$1("a", className, container);
            link.innerHTML = html;
            link.href = "#";
            link.title = title;
            /*
  		 * Will force screen readers like VoiceOver to read this as "Zoom in - button"
  		 */ link.setAttribute("role", "button");
            link.setAttribute("aria-label", title);
            disableClickPropagation(link);
            on(link, "click", stop);
            on(link, "click", fn, this);
            on(link, "click", this._refocusOnMap, this);
            return link;
        },
        _updateDisabled: function() {
            var map = this._map, className = "leaflet-disabled";
            removeClass(this._zoomInButton, className);
            removeClass(this._zoomOutButton, className);
            this._zoomInButton.setAttribute("aria-disabled", "false");
            this._zoomOutButton.setAttribute("aria-disabled", "false");
            if (this._disabled || map._zoom === map.getMinZoom()) {
                addClass(this._zoomOutButton, className);
                this._zoomOutButton.setAttribute("aria-disabled", "true");
            }
            if (this._disabled || map._zoom === map.getMaxZoom()) {
                addClass(this._zoomInButton, className);
                this._zoomInButton.setAttribute("aria-disabled", "true");
            }
        }
    });
    // @namespace Map
    // @section Control options
    // @option zoomControl: Boolean = true
    // Whether a [zoom control](#control-zoom) is added to the map by default.
    Map.mergeOptions({
        zoomControl: true
    });
    Map.addInitHook(function() {
        if (this.options.zoomControl) {
            // @section Controls
            // @property zoomControl: Control.Zoom
            // The default zoom control (only available if the
            // [`zoomControl` option](#map-zoomcontrol) was `true` when creating the map).
            this.zoomControl = new Zoom();
            this.addControl(this.zoomControl);
        }
    });
    // @namespace Control.Zoom
    // @factory L.control.zoom(options: Control.Zoom options)
    // Creates a zoom control
    var zoom = function(options) {
        return new Zoom(options);
    };
    /*
   * @class Control.Scale
   * @aka L.Control.Scale
   * @inherits Control
   *
   * A simple scale control that shows the scale of the current center of screen in metric (m/km) and imperial (mi/ft) systems. Extends `Control`.
   *
   * @example
   *
   * ```js
   * L.control.scale().addTo(map);
   * ```
   */ var Scale = Control.extend({
        // @section
        // @aka Control.Scale options
        options: {
            position: "bottomleft",
            // @option maxWidth: Number = 100
            // Maximum width of the control in pixels. The width is set dynamically to show round values (e.g. 100, 200, 500).
            maxWidth: 100,
            // @option metric: Boolean = True
            // Whether to show the metric scale line (m/km).
            metric: true,
            // @option imperial: Boolean = True
            // Whether to show the imperial scale line (mi/ft).
            imperial: true
        },
        onAdd: function(map) {
            var className = "leaflet-control-scale", container = create$1("div", className), options = this.options;
            this._addScales(options, className + "-line", container);
            map.on(options.updateWhenIdle ? "moveend" : "move", this._update, this);
            map.whenReady(this._update, this);
            return container;
        },
        onRemove: function(map) {
            map.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this);
        },
        _addScales: function(options, className, container) {
            if (options.metric) this._mScale = create$1("div", className, container);
            if (options.imperial) this._iScale = create$1("div", className, container);
        },
        _update: function() {
            var map = this._map, y = map.getSize().y / 2;
            var maxMeters = map.distance(map.containerPointToLatLng([
                0,
                y
            ]), map.containerPointToLatLng([
                this.options.maxWidth,
                y
            ]));
            this._updateScales(maxMeters);
        },
        _updateScales: function(maxMeters) {
            if (this.options.metric && maxMeters) this._updateMetric(maxMeters);
            if (this.options.imperial && maxMeters) this._updateImperial(maxMeters);
        },
        _updateMetric: function(maxMeters) {
            var meters = this._getRoundNum(maxMeters), label = meters < 1000 ? meters + " m" : meters / 1000 + " km";
            this._updateScale(this._mScale, label, meters / maxMeters);
        },
        _updateImperial: function(maxMeters) {
            var maxFeet = maxMeters * 3.2808399, maxMiles, miles, feet;
            if (maxFeet > 5280) {
                maxMiles = maxFeet / 5280;
                miles = this._getRoundNum(maxMiles);
                this._updateScale(this._iScale, miles + " mi", miles / maxMiles);
            } else {
                feet = this._getRoundNum(maxFeet);
                this._updateScale(this._iScale, feet + " ft", feet / maxFeet);
            }
        },
        _updateScale: function(scale, text, ratio) {
            scale.style.width = Math.round(this.options.maxWidth * ratio) + "px";
            scale.innerHTML = text;
        },
        _getRoundNum: function(num) {
            var pow10 = Math.pow(10, (Math.floor(num) + "").length - 1), d = num / pow10;
            d = d >= 10 ? 10 : d >= 5 ? 5 : d >= 3 ? 3 : d >= 2 ? 2 : 1;
            return pow10 * d;
        }
    });
    // @factory L.control.scale(options?: Control.Scale options)
    // Creates an scale control with the given options.
    var scale = function(options) {
        return new Scale(options);
    };
    var ukrainianFlag = '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>';
    /*
   * @class Control.Attribution
   * @aka L.Control.Attribution
   * @inherits Control
   *
   * The attribution control allows you to display attribution data in a small text box on a map. It is put on the map by default unless you set its [`attributionControl` option](#map-attributioncontrol) to `false`, and it fetches attribution texts from layers with the [`getAttribution` method](#layer-getattribution) automatically. Extends Control.
   */ var Attribution = Control.extend({
        // @section
        // @aka Control.Attribution options
        options: {
            position: "bottomright",
            // @option prefix: String|false = 'Leaflet'
            // The HTML text shown before the attributions. Pass `false` to disable.
            prefix: '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' + (Browser.inlineSvg ? ukrainianFlag + " " : "") + "Leaflet</a>"
        },
        initialize: function(options) {
            setOptions(this, options);
            this._attributions = {};
        },
        onAdd: function(map) {
            map.attributionControl = this;
            this._container = create$1("div", "leaflet-control-attribution");
            disableClickPropagation(this._container);
            // TODO ugly, refactor
            for(var i in map._layers)if (map._layers[i].getAttribution) this.addAttribution(map._layers[i].getAttribution());
            this._update();
            map.on("layeradd", this._addAttribution, this);
            return this._container;
        },
        onRemove: function(map) {
            map.off("layeradd", this._addAttribution, this);
        },
        _addAttribution: function(ev) {
            if (ev.layer.getAttribution) {
                this.addAttribution(ev.layer.getAttribution());
                ev.layer.once("remove", function() {
                    this.removeAttribution(ev.layer.getAttribution());
                }, this);
            }
        },
        // @method setPrefix(prefix: String|false): this
        // The HTML text shown before the attributions. Pass `false` to disable.
        setPrefix: function(prefix) {
            this.options.prefix = prefix;
            this._update();
            return this;
        },
        // @method addAttribution(text: String): this
        // Adds an attribution text (e.g. `'&copy; OpenStreetMap contributors'`).
        addAttribution: function(text) {
            if (!text) return this;
            if (!this._attributions[text]) this._attributions[text] = 0;
            this._attributions[text]++;
            this._update();
            return this;
        },
        // @method removeAttribution(text: String): this
        // Removes an attribution text.
        removeAttribution: function(text) {
            if (!text) return this;
            if (this._attributions[text]) {
                this._attributions[text]--;
                this._update();
            }
            return this;
        },
        _update: function() {
            if (!this._map) return;
            var attribs = [];
            for(var i in this._attributions)if (this._attributions[i]) attribs.push(i);
            var prefixAndAttribs = [];
            if (this.options.prefix) prefixAndAttribs.push(this.options.prefix);
            if (attribs.length) prefixAndAttribs.push(attribs.join(", "));
            this._container.innerHTML = prefixAndAttribs.join(' <span aria-hidden="true">|</span> ');
        }
    });
    // @namespace Map
    // @section Control options
    // @option attributionControl: Boolean = true
    // Whether a [attribution control](#control-attribution) is added to the map by default.
    Map.mergeOptions({
        attributionControl: true
    });
    Map.addInitHook(function() {
        if (this.options.attributionControl) new Attribution().addTo(this);
    });
    // @namespace Control.Attribution
    // @factory L.control.attribution(options: Control.Attribution options)
    // Creates an attribution control.
    var attribution = function(options) {
        return new Attribution(options);
    };
    Control.Layers = Layers;
    Control.Zoom = Zoom;
    Control.Scale = Scale;
    Control.Attribution = Attribution;
    control.layers = layers;
    control.zoom = zoom;
    control.scale = scale;
    control.attribution = attribution;
    /*
  	L.Handler is a base class for handler classes that are used internally to inject
  	interaction features like dragging to classes like Map and Marker.
  */ // @class Handler
    // @aka L.Handler
    // Abstract class for map interaction handlers
    var Handler = Class.extend({
        initialize: function(map) {
            this._map = map;
        },
        // @method enable(): this
        // Enables the handler
        enable: function() {
            if (this._enabled) return this;
            this._enabled = true;
            this.addHooks();
            return this;
        },
        // @method disable(): this
        // Disables the handler
        disable: function() {
            if (!this._enabled) return this;
            this._enabled = false;
            this.removeHooks();
            return this;
        },
        // @method enabled(): Boolean
        // Returns `true` if the handler is enabled
        enabled: function() {
            return !!this._enabled;
        }
    });
    // @section There is static function which can be called without instantiating L.Handler:
    // @function addTo(map: Map, name: String): this
    // Adds a new Handler to the given map with the given name.
    Handler.addTo = function(map, name) {
        map.addHandler(name, this);
        return this;
    };
    var Mixin = {
        Events: Events
    };
    /*
   * @class Draggable
   * @aka L.Draggable
   * @inherits Evented
   *
   * A class for making DOM elements draggable (including touch support).
   * Used internally for map and marker dragging. Only works for elements
   * that were positioned with [`L.DomUtil.setPosition`](#domutil-setposition).
   *
   * @example
   * ```js
   * var draggable = new L.Draggable(elementToDrag);
   * draggable.enable();
   * ```
   */ var START = Browser.touch ? "touchstart mousedown" : "mousedown";
    var Draggable = Evented.extend({
        options: {
            // @section
            // @aka Draggable options
            // @option clickTolerance: Number = 3
            // The max number of pixels a user can shift the mouse pointer during a click
            // for it to be considered a valid click (as opposed to a mouse drag).
            clickTolerance: 3
        },
        // @constructor L.Draggable(el: HTMLElement, dragHandle?: HTMLElement, preventOutline?: Boolean, options?: Draggable options)
        // Creates a `Draggable` object for moving `el` when you start dragging the `dragHandle` element (equals `el` itself by default).
        initialize: function(element, dragStartTarget, preventOutline, options) {
            setOptions(this, options);
            this._element = element;
            this._dragStartTarget = dragStartTarget || element;
            this._preventOutline = preventOutline;
        },
        // @method enable()
        // Enables the dragging ability
        enable: function() {
            if (this._enabled) return;
            on(this._dragStartTarget, START, this._onDown, this);
            this._enabled = true;
        },
        // @method disable()
        // Disables the dragging ability
        disable: function() {
            if (!this._enabled) return;
            // If we're currently dragging this draggable,
            // disabling it counts as first ending the drag.
            if (Draggable._dragging === this) this.finishDrag(true);
            off(this._dragStartTarget, START, this._onDown, this);
            this._enabled = false;
            this._moved = false;
        },
        _onDown: function(e) {
            // Ignore the event if disabled; this happens in IE11
            // under some circumstances, see #3666.
            if (!this._enabled) return;
            this._moved = false;
            if (hasClass(this._element, "leaflet-zoom-anim")) return;
            if (e.touches && e.touches.length !== 1) {
                // Finish dragging to avoid conflict with touchZoom
                if (Draggable._dragging === this) this.finishDrag();
                return;
            }
            if (Draggable._dragging || e.shiftKey || e.which !== 1 && e.button !== 1 && !e.touches) return;
            Draggable._dragging = this; // Prevent dragging multiple objects at once.
            if (this._preventOutline) preventOutline(this._element);
            disableImageDrag();
            disableTextSelection();
            if (this._moving) return;
            // @event down: Event
            // Fired when a drag is about to start.
            this.fire("down");
            var first = e.touches ? e.touches[0] : e, sizedParent = getSizedParentNode(this._element);
            this._startPoint = new Point(first.clientX, first.clientY);
            this._startPos = getPosition(this._element);
            // Cache the scale, so that we can continuously compensate for it during drag (_onMove).
            this._parentScale = getScale(sizedParent);
            var mouseevent = e.type === "mousedown";
            on(document, mouseevent ? "mousemove" : "touchmove", this._onMove, this);
            on(document, mouseevent ? "mouseup" : "touchend touchcancel", this._onUp, this);
        },
        _onMove: function(e) {
            // Ignore the event if disabled; this happens in IE11
            // under some circumstances, see #3666.
            if (!this._enabled) return;
            if (e.touches && e.touches.length > 1) {
                this._moved = true;
                return;
            }
            var first = e.touches && e.touches.length === 1 ? e.touches[0] : e, offset = new Point(first.clientX, first.clientY)._subtract(this._startPoint);
            if (!offset.x && !offset.y) return;
            if (Math.abs(offset.x) + Math.abs(offset.y) < this.options.clickTolerance) return;
            // We assume that the parent container's position, border and scale do not change for the duration of the drag.
            // Therefore there is no need to account for the position and border (they are eliminated by the subtraction)
            // and we can use the cached value for the scale.
            offset.x /= this._parentScale.x;
            offset.y /= this._parentScale.y;
            preventDefault(e);
            if (!this._moved) {
                // @event dragstart: Event
                // Fired when a drag starts
                this.fire("dragstart");
                this._moved = true;
                addClass(document.body, "leaflet-dragging");
                this._lastTarget = e.target || e.srcElement;
                // IE and Edge do not give the <use> element, so fetch it
                // if necessary
                if (window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance) this._lastTarget = this._lastTarget.correspondingUseElement;
                addClass(this._lastTarget, "leaflet-drag-target");
            }
            this._newPos = this._startPos.add(offset);
            this._moving = true;
            this._lastEvent = e;
            this._updatePosition();
        },
        _updatePosition: function() {
            var e = {
                originalEvent: this._lastEvent
            };
            // @event predrag: Event
            // Fired continuously during dragging *before* each corresponding
            // update of the element's position.
            this.fire("predrag", e);
            setPosition(this._element, this._newPos);
            // @event drag: Event
            // Fired continuously during dragging.
            this.fire("drag", e);
        },
        _onUp: function() {
            // Ignore the event if disabled; this happens in IE11
            // under some circumstances, see #3666.
            if (!this._enabled) return;
            this.finishDrag();
        },
        finishDrag: function(noInertia) {
            removeClass(document.body, "leaflet-dragging");
            if (this._lastTarget) {
                removeClass(this._lastTarget, "leaflet-drag-target");
                this._lastTarget = null;
            }
            off(document, "mousemove touchmove", this._onMove, this);
            off(document, "mouseup touchend touchcancel", this._onUp, this);
            enableImageDrag();
            enableTextSelection();
            var fireDragend = this._moved && this._moving;
            this._moving = false;
            Draggable._dragging = false;
            if (fireDragend) // @event dragend: DragEndEvent
            // Fired when the drag ends.
            this.fire("dragend", {
                noInertia: noInertia,
                distance: this._newPos.distanceTo(this._startPos)
            });
        }
    });
    /*
   * @namespace PolyUtil
   * Various utility functions for polygon geometries.
   */ /* @function clipPolygon(points: Point[], bounds: Bounds, round?: Boolean): Point[]
   * Clips the polygon geometry defined by the given `points` by the given bounds (using the [Sutherland-Hodgman algorithm](https://en.wikipedia.org/wiki/Sutherland%E2%80%93Hodgman_algorithm)).
   * Used by Leaflet to only show polygon points that are on the screen or near, increasing
   * performance. Note that polygon points needs different algorithm for clipping
   * than polyline, so there's a separate method for it.
   */ function clipPolygon(points, bounds, round) {
        var clippedPoints, edges = [
            1,
            4,
            2,
            8
        ], i, j, k, a, b, len, edge, p;
        for(i = 0, len = points.length; i < len; i++)points[i]._code = _getBitCode(points[i], bounds);
        // for each edge (left, bottom, right, top)
        for(k = 0; k < 4; k++){
            edge = edges[k];
            clippedPoints = [];
            for(i = 0, len = points.length, j = len - 1; i < len; j = i++){
                a = points[i];
                b = points[j];
                // if a is inside the clip window
                if (!(a._code & edge)) {
                    // if b is outside the clip window (a->b goes out of screen)
                    if (b._code & edge) {
                        p = _getEdgeIntersection(b, a, edge, bounds, round);
                        p._code = _getBitCode(p, bounds);
                        clippedPoints.push(p);
                    }
                    clippedPoints.push(a);
                // else if b is inside the clip window (a->b enters the screen)
                } else if (!(b._code & edge)) {
                    p = _getEdgeIntersection(b, a, edge, bounds, round);
                    p._code = _getBitCode(p, bounds);
                    clippedPoints.push(p);
                }
            }
            points = clippedPoints;
        }
        return points;
    }
    /* @function polygonCenter(latlngs: LatLng[], crs: CRS): LatLng
   * Returns the center ([centroid](http://en.wikipedia.org/wiki/Centroid)) of the passed LatLngs (first ring) from a polygon.
   */ function polygonCenter(latlngs, crs) {
        var i, j, p1, p2, f, area, x, y, center;
        if (!latlngs || latlngs.length === 0) throw new Error("latlngs not passed");
        if (!isFlat(latlngs)) {
            console.warn("latlngs are not flat! Only the first ring will be used");
            latlngs = latlngs[0];
        }
        var centroidLatLng = toLatLng([
            0,
            0
        ]);
        var bounds = toLatLngBounds(latlngs);
        var areaBounds = bounds.getNorthWest().distanceTo(bounds.getSouthWest()) * bounds.getNorthEast().distanceTo(bounds.getNorthWest());
        // tests showed that below 1700 rounding errors are happening
        if (areaBounds < 1700) // getting a inexact center, to move the latlngs near to [0, 0] to prevent rounding errors
        centroidLatLng = centroid(latlngs);
        var len = latlngs.length;
        var points = [];
        for(i = 0; i < len; i++){
            var latlng = toLatLng(latlngs[i]);
            points.push(crs.project(toLatLng([
                latlng.lat - centroidLatLng.lat,
                latlng.lng - centroidLatLng.lng
            ])));
        }
        area = x = y = 0;
        // polygon centroid algorithm;
        for(i = 0, j = len - 1; i < len; j = i++){
            p1 = points[i];
            p2 = points[j];
            f = p1.y * p2.x - p2.y * p1.x;
            x += (p1.x + p2.x) * f;
            y += (p1.y + p2.y) * f;
            area += f * 3;
        }
        if (area === 0) // Polygon is so small that all points are on same pixel.
        center = points[0];
        else center = [
            x / area,
            y / area
        ];
        var latlngCenter = crs.unproject(toPoint(center));
        return toLatLng([
            latlngCenter.lat + centroidLatLng.lat,
            latlngCenter.lng + centroidLatLng.lng
        ]);
    }
    /* @function centroid(latlngs: LatLng[]): LatLng
   * Returns the 'center of mass' of the passed LatLngs.
   */ function centroid(coords) {
        var latSum = 0;
        var lngSum = 0;
        var len = 0;
        for(var i = 0; i < coords.length; i++){
            var latlng = toLatLng(coords[i]);
            latSum += latlng.lat;
            lngSum += latlng.lng;
            len++;
        }
        return toLatLng([
            latSum / len,
            lngSum / len
        ]);
    }
    var PolyUtil = {
        __proto__: null,
        clipPolygon: clipPolygon,
        polygonCenter: polygonCenter,
        centroid: centroid
    };
    /*
   * @namespace LineUtil
   *
   * Various utility functions for polyline points processing, used by Leaflet internally to make polylines lightning-fast.
   */ // Simplify polyline with vertex reduction and Douglas-Peucker simplification.
    // Improves rendering performance dramatically by lessening the number of points to draw.
    // @function simplify(points: Point[], tolerance: Number): Point[]
    // Dramatically reduces the number of points in a polyline while retaining
    // its shape and returns a new array of simplified points, using the
    // [Ramer-Douglas-Peucker algorithm](https://en.wikipedia.org/wiki/Ramer-Douglas-Peucker_algorithm).
    // Used for a huge performance boost when processing/displaying Leaflet polylines for
    // each zoom level and also reducing visual noise. tolerance affects the amount of
    // simplification (lesser value means higher quality but slower and with more points).
    // Also released as a separated micro-library [Simplify.js](https://mourner.github.io/simplify-js/).
    function simplify(points, tolerance) {
        if (!tolerance || !points.length) return points.slice();
        var sqTolerance = tolerance * tolerance;
        // stage 1: vertex reduction
        points = _reducePoints(points, sqTolerance);
        // stage 2: Douglas-Peucker simplification
        points = _simplifyDP(points, sqTolerance);
        return points;
    }
    // @function pointToSegmentDistance(p: Point, p1: Point, p2: Point): Number
    // Returns the distance between point `p` and segment `p1` to `p2`.
    function pointToSegmentDistance(p, p1, p2) {
        return Math.sqrt(_sqClosestPointOnSegment(p, p1, p2, true));
    }
    // @function closestPointOnSegment(p: Point, p1: Point, p2: Point): Number
    // Returns the closest point from a point `p` on a segment `p1` to `p2`.
    function closestPointOnSegment(p, p1, p2) {
        return _sqClosestPointOnSegment(p, p1, p2);
    }
    // Ramer-Douglas-Peucker simplification, see https://en.wikipedia.org/wiki/Ramer-Douglas-Peucker_algorithm
    function _simplifyDP(points, sqTolerance) {
        var len = points.length, ArrayConstructor = typeof Uint8Array !== "undefined" ? Uint8Array : Array, markers = new ArrayConstructor(len);
        markers[0] = markers[len - 1] = 1;
        _simplifyDPStep(points, markers, sqTolerance, 0, len - 1);
        var i, newPoints = [];
        for(i = 0; i < len; i++)if (markers[i]) newPoints.push(points[i]);
        return newPoints;
    }
    function _simplifyDPStep(points, markers, sqTolerance, first, last) {
        var maxSqDist = 0, index, i, sqDist;
        for(i = first + 1; i <= last - 1; i++){
            sqDist = _sqClosestPointOnSegment(points[i], points[first], points[last], true);
            if (sqDist > maxSqDist) {
                index = i;
                maxSqDist = sqDist;
            }
        }
        if (maxSqDist > sqTolerance) {
            markers[index] = 1;
            _simplifyDPStep(points, markers, sqTolerance, first, index);
            _simplifyDPStep(points, markers, sqTolerance, index, last);
        }
    }
    // reduce points that are too close to each other to a single point
    function _reducePoints(points, sqTolerance) {
        var reducedPoints = [
            points[0]
        ];
        for(var i = 1, prev = 0, len = points.length; i < len; i++)if (_sqDist(points[i], points[prev]) > sqTolerance) {
            reducedPoints.push(points[i]);
            prev = i;
        }
        if (prev < len - 1) reducedPoints.push(points[len - 1]);
        return reducedPoints;
    }
    var _lastCode;
    // @function clipSegment(a: Point, b: Point, bounds: Bounds, useLastCode?: Boolean, round?: Boolean): Point[]|Boolean
    // Clips the segment a to b by rectangular bounds with the
    // [Cohen-Sutherland algorithm](https://en.wikipedia.org/wiki/Cohen%E2%80%93Sutherland_algorithm)
    // (modifying the segment points directly!). Used by Leaflet to only show polyline
    // points that are on the screen or near, increasing performance.
    function clipSegment(a, b, bounds, useLastCode, round) {
        var codeA = useLastCode ? _lastCode : _getBitCode(a, bounds), codeB = _getBitCode(b, bounds), codeOut, p, newCode;
        // save 2nd code to avoid calculating it on the next segment
        _lastCode = codeB;
        while(true){
            // if a,b is inside the clip window (trivial accept)
            if (!(codeA | codeB)) return [
                a,
                b
            ];
            // if a,b is outside the clip window (trivial reject)
            if (codeA & codeB) return false;
            // other cases
            codeOut = codeA || codeB;
            p = _getEdgeIntersection(a, b, codeOut, bounds, round);
            newCode = _getBitCode(p, bounds);
            if (codeOut === codeA) {
                a = p;
                codeA = newCode;
            } else {
                b = p;
                codeB = newCode;
            }
        }
    }
    function _getEdgeIntersection(a, b, code, bounds, round) {
        var dx = b.x - a.x, dy = b.y - a.y, min = bounds.min, max = bounds.max, x, y;
        if (code & 8) {
            x = a.x + dx * (max.y - a.y) / dy;
            y = max.y;
        } else if (code & 4) {
            x = a.x + dx * (min.y - a.y) / dy;
            y = min.y;
        } else if (code & 2) {
            x = max.x;
            y = a.y + dy * (max.x - a.x) / dx;
        } else if (code & 1) {
            x = min.x;
            y = a.y + dy * (min.x - a.x) / dx;
        }
        return new Point(x, y, round);
    }
    function _getBitCode(p, bounds) {
        var code = 0;
        if (p.x < bounds.min.x) code |= 1;
        else if (p.x > bounds.max.x) code |= 2;
        if (p.y < bounds.min.y) code |= 4;
        else if (p.y > bounds.max.y) code |= 8;
        return code;
    }
    // square distance (to avoid unnecessary Math.sqrt calls)
    function _sqDist(p1, p2) {
        var dx = p2.x - p1.x, dy = p2.y - p1.y;
        return dx * dx + dy * dy;
    }
    // return closest point on segment or distance to that point
    function _sqClosestPointOnSegment(p, p1, p2, sqDist) {
        var x = p1.x, y = p1.y, dx = p2.x - x, dy = p2.y - y, dot = dx * dx + dy * dy, t;
        if (dot > 0) {
            t = ((p.x - x) * dx + (p.y - y) * dy) / dot;
            if (t > 1) {
                x = p2.x;
                y = p2.y;
            } else if (t > 0) {
                x += dx * t;
                y += dy * t;
            }
        }
        dx = p.x - x;
        dy = p.y - y;
        return sqDist ? dx * dx + dy * dy : new Point(x, y);
    }
    // @function isFlat(latlngs: LatLng[]): Boolean
    // Returns true if `latlngs` is a flat array, false is nested.
    function isFlat(latlngs) {
        return !isArray(latlngs[0]) || typeof latlngs[0][0] !== "object" && typeof latlngs[0][0] !== "undefined";
    }
    function _flat(latlngs) {
        console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead.");
        return isFlat(latlngs);
    }
    /* @function polylineCenter(latlngs: LatLng[], crs: CRS): LatLng
   * Returns the center ([centroid](http://en.wikipedia.org/wiki/Centroid)) of the passed LatLngs (first ring) from a polyline.
   */ function polylineCenter(latlngs, crs) {
        var i, halfDist, segDist, dist, p1, p2, ratio, center;
        if (!latlngs || latlngs.length === 0) throw new Error("latlngs not passed");
        if (!isFlat(latlngs)) {
            console.warn("latlngs are not flat! Only the first ring will be used");
            latlngs = latlngs[0];
        }
        var centroidLatLng = toLatLng([
            0,
            0
        ]);
        var bounds = toLatLngBounds(latlngs);
        var areaBounds = bounds.getNorthWest().distanceTo(bounds.getSouthWest()) * bounds.getNorthEast().distanceTo(bounds.getNorthWest());
        // tests showed that below 1700 rounding errors are happening
        if (areaBounds < 1700) // getting a inexact center, to move the latlngs near to [0, 0] to prevent rounding errors
        centroidLatLng = centroid(latlngs);
        var len = latlngs.length;
        var points = [];
        for(i = 0; i < len; i++){
            var latlng = toLatLng(latlngs[i]);
            points.push(crs.project(toLatLng([
                latlng.lat - centroidLatLng.lat,
                latlng.lng - centroidLatLng.lng
            ])));
        }
        for(i = 0, halfDist = 0; i < len - 1; i++)halfDist += points[i].distanceTo(points[i + 1]) / 2;
        // The line is so small in the current view that all points are on the same pixel.
        if (halfDist === 0) center = points[0];
        else for(i = 0, dist = 0; i < len - 1; i++){
            p1 = points[i];
            p2 = points[i + 1];
            segDist = p1.distanceTo(p2);
            dist += segDist;
            if (dist > halfDist) {
                ratio = (dist - halfDist) / segDist;
                center = [
                    p2.x - ratio * (p2.x - p1.x),
                    p2.y - ratio * (p2.y - p1.y)
                ];
                break;
            }
        }
        var latlngCenter = crs.unproject(toPoint(center));
        return toLatLng([
            latlngCenter.lat + centroidLatLng.lat,
            latlngCenter.lng + centroidLatLng.lng
        ]);
    }
    var LineUtil = {
        __proto__: null,
        simplify: simplify,
        pointToSegmentDistance: pointToSegmentDistance,
        closestPointOnSegment: closestPointOnSegment,
        clipSegment: clipSegment,
        _getEdgeIntersection: _getEdgeIntersection,
        _getBitCode: _getBitCode,
        _sqClosestPointOnSegment: _sqClosestPointOnSegment,
        isFlat: isFlat,
        _flat: _flat,
        polylineCenter: polylineCenter
    };
    /*
   * @namespace Projection
   * @section
   * Leaflet comes with a set of already defined Projections out of the box:
   *
   * @projection L.Projection.LonLat
   *
   * Equirectangular, or Plate Carree projection — the most simple projection,
   * mostly used by GIS enthusiasts. Directly maps `x` as longitude, and `y` as
   * latitude. Also suitable for flat worlds, e.g. game maps. Used by the
   * `EPSG:4326` and `Simple` CRS.
   */ var LonLat = {
        project: function(latlng) {
            return new Point(latlng.lng, latlng.lat);
        },
        unproject: function(point) {
            return new LatLng(point.y, point.x);
        },
        bounds: new Bounds([
            -180,
            -90
        ], [
            180,
            90
        ])
    };
    /*
   * @namespace Projection
   * @projection L.Projection.Mercator
   *
   * Elliptical Mercator projection — more complex than Spherical Mercator. Assumes that Earth is an ellipsoid. Used by the EPSG:3395 CRS.
   */ var Mercator = {
        R: 6378137,
        R_MINOR: 6356752.314245179,
        bounds: new Bounds([
            -20037508.34279,
            -15496570.73972
        ], [
            20037508.34279,
            18764656.23138
        ]),
        project: function(latlng) {
            var d = Math.PI / 180, r = this.R, y = latlng.lat * d, tmp = this.R_MINOR / r, e = Math.sqrt(1 - tmp * tmp), con = e * Math.sin(y);
            var ts = Math.tan(Math.PI / 4 - y / 2) / Math.pow((1 - con) / (1 + con), e / 2);
            y = -r * Math.log(Math.max(ts, 1E-10));
            return new Point(latlng.lng * d * r, y);
        },
        unproject: function(point) {
            var d = 180 / Math.PI, r = this.R, tmp = this.R_MINOR / r, e = Math.sqrt(1 - tmp * tmp), ts = Math.exp(-point.y / r), phi = Math.PI / 2 - 2 * Math.atan(ts);
            for(var i = 0, dphi = 0.1, con; i < 15 && Math.abs(dphi) > 1e-7; i++){
                con = e * Math.sin(phi);
                con = Math.pow((1 - con) / (1 + con), e / 2);
                dphi = Math.PI / 2 - 2 * Math.atan(ts * con) - phi;
                phi += dphi;
            }
            return new LatLng(phi * d, point.x * d / r);
        }
    };
    /*
   * @class Projection

   * An object with methods for projecting geographical coordinates of the world onto
   * a flat surface (and back). See [Map projection](https://en.wikipedia.org/wiki/Map_projection).

   * @property bounds: Bounds
   * The bounds (specified in CRS units) where the projection is valid

   * @method project(latlng: LatLng): Point
   * Projects geographical coordinates into a 2D point.
   * Only accepts actual `L.LatLng` instances, not arrays.

   * @method unproject(point: Point): LatLng
   * The inverse of `project`. Projects a 2D point into a geographical location.
   * Only accepts actual `L.Point` instances, not arrays.

   * Note that the projection instances do not inherit from Leaflet's `Class` object,
   * and can't be instantiated. Also, new classes can't inherit from them,
   * and methods can't be added to them with the `include` function.

   */ var index = {
        __proto__: null,
        LonLat: LonLat,
        Mercator: Mercator,
        SphericalMercator: SphericalMercator
    };
    /*
   * @namespace CRS
   * @crs L.CRS.EPSG3395
   *
   * Rarely used by some commercial tile providers. Uses Elliptical Mercator projection.
   */ var EPSG3395 = extend({}, Earth, {
        code: "EPSG:3395",
        projection: Mercator,
        transformation: function() {
            var scale = 0.5 / (Math.PI * Mercator.R);
            return toTransformation(scale, 0.5, -scale, 0.5);
        }()
    });
    /*
   * @namespace CRS
   * @crs L.CRS.EPSG4326
   *
   * A common CRS among GIS enthusiasts. Uses simple Equirectangular projection.
   *
   * Leaflet 1.0.x complies with the [TMS coordinate scheme for EPSG:4326](https://wiki.osgeo.org/wiki/Tile_Map_Service_Specification#global-geodetic),
   * which is a breaking change from 0.7.x behaviour.  If you are using a `TileLayer`
   * with this CRS, ensure that there are two 256x256 pixel tiles covering the
   * whole earth at zoom level zero, and that the tile coordinate origin is (-180,+90),
   * or (-180,-90) for `TileLayer`s with [the `tms` option](#tilelayer-tms) set.
   */ var EPSG4326 = extend({}, Earth, {
        code: "EPSG:4326",
        projection: LonLat,
        transformation: toTransformation(1 / 180, 1, -1 / 180, 0.5)
    });
    /*
   * @namespace CRS
   * @crs L.CRS.Simple
   *
   * A simple CRS that maps longitude and latitude into `x` and `y` directly.
   * May be used for maps of flat surfaces (e.g. game maps). Note that the `y`
   * axis should still be inverted (going from bottom to top). `distance()` returns
   * simple euclidean distance.
   */ var Simple = extend({}, CRS, {
        projection: LonLat,
        transformation: toTransformation(1, 0, -1, 0),
        scale: function(zoom) {
            return Math.pow(2, zoom);
        },
        zoom: function(scale) {
            return Math.log(scale) / Math.LN2;
        },
        distance: function(latlng1, latlng2) {
            var dx = latlng2.lng - latlng1.lng, dy = latlng2.lat - latlng1.lat;
            return Math.sqrt(dx * dx + dy * dy);
        },
        infinite: true
    });
    CRS.Earth = Earth;
    CRS.EPSG3395 = EPSG3395;
    CRS.EPSG3857 = EPSG3857;
    CRS.EPSG900913 = EPSG900913;
    CRS.EPSG4326 = EPSG4326;
    CRS.Simple = Simple;
    /*
   * @class Layer
   * @inherits Evented
   * @aka L.Layer
   * @aka ILayer
   *
   * A set of methods from the Layer base class that all Leaflet layers use.
   * Inherits all methods, options and events from `L.Evented`.
   *
   * @example
   *
   * ```js
   * var layer = L.marker(latlng).addTo(map);
   * layer.addTo(map);
   * layer.remove();
   * ```
   *
   * @event add: Event
   * Fired after the layer is added to a map
   *
   * @event remove: Event
   * Fired after the layer is removed from a map
   */ var Layer = Evented.extend({
        // Classes extending `L.Layer` will inherit the following options:
        options: {
            // @option pane: String = 'overlayPane'
            // By default the layer will be added to the map's [overlay pane](#map-overlaypane). Overriding this option will cause the layer to be placed on another pane by default.
            pane: "overlayPane",
            // @option attribution: String = null
            // String to be shown in the attribution control, e.g. "© OpenStreetMap contributors". It describes the layer data and is often a legal obligation towards copyright holders and tile providers.
            attribution: null,
            bubblingMouseEvents: true
        },
        /* @section
  	 * Classes extending `L.Layer` will inherit the following methods:
  	 *
  	 * @method addTo(map: Map|LayerGroup): this
  	 * Adds the layer to the given map or layer group.
  	 */ addTo: function(map) {
            map.addLayer(this);
            return this;
        },
        // @method remove: this
        // Removes the layer from the map it is currently active on.
        remove: function() {
            return this.removeFrom(this._map || this._mapToAdd);
        },
        // @method removeFrom(map: Map): this
        // Removes the layer from the given map
        //
        // @alternative
        // @method removeFrom(group: LayerGroup): this
        // Removes the layer from the given `LayerGroup`
        removeFrom: function(obj) {
            if (obj) obj.removeLayer(this);
            return this;
        },
        // @method getPane(name? : String): HTMLElement
        // Returns the `HTMLElement` representing the named pane on the map. If `name` is omitted, returns the pane for this layer.
        getPane: function(name) {
            return this._map.getPane(name ? this.options[name] || name : this.options.pane);
        },
        addInteractiveTarget: function(targetEl) {
            this._map._targets[stamp(targetEl)] = this;
            return this;
        },
        removeInteractiveTarget: function(targetEl) {
            delete this._map._targets[stamp(targetEl)];
            return this;
        },
        // @method getAttribution: String
        // Used by the `attribution control`, returns the [attribution option](#gridlayer-attribution).
        getAttribution: function() {
            return this.options.attribution;
        },
        _layerAdd: function(e) {
            var map = e.target;
            // check in case layer gets added and then removed before the map is ready
            if (!map.hasLayer(this)) return;
            this._map = map;
            this._zoomAnimated = map._zoomAnimated;
            if (this.getEvents) {
                var events = this.getEvents();
                map.on(events, this);
                this.once("remove", function() {
                    map.off(events, this);
                }, this);
            }
            this.onAdd(map);
            this.fire("add");
            map.fire("layeradd", {
                layer: this
            });
        }
    });
    /* @section Extension methods
   * @uninheritable
   *
   * Every layer should extend from `L.Layer` and (re-)implement the following methods.
   *
   * @method onAdd(map: Map): this
   * Should contain code that creates DOM elements for the layer, adds them to `map panes` where they should belong and puts listeners on relevant map events. Called on [`map.addLayer(layer)`](#map-addlayer).
   *
   * @method onRemove(map: Map): this
   * Should contain all clean up code that removes the layer's elements from the DOM and removes listeners previously added in [`onAdd`](#layer-onadd). Called on [`map.removeLayer(layer)`](#map-removelayer).
   *
   * @method getEvents(): Object
   * This optional method should return an object like `{ viewreset: this._reset }` for [`addEventListener`](#evented-addeventlistener). The event handlers in this object will be automatically added and removed from the map with your layer.
   *
   * @method getAttribution(): String
   * This optional method should return a string containing HTML to be shown on the `Attribution control` whenever the layer is visible.
   *
   * @method beforeAdd(map: Map): this
   * Optional method. Called on [`map.addLayer(layer)`](#map-addlayer), before the layer is added to the map, before events are initialized, without waiting until the map is in a usable state. Use for early initialization only.
   */ /* @namespace Map
   * @section Layer events
   *
   * @event layeradd: LayerEvent
   * Fired when a new layer is added to the map.
   *
   * @event layerremove: LayerEvent
   * Fired when some layer is removed from the map
   *
   * @section Methods for Layers and Controls
   */ Map.include({
        // @method addLayer(layer: Layer): this
        // Adds the given layer to the map
        addLayer: function(layer) {
            if (!layer._layerAdd) throw new Error("The provided object is not a Layer.");
            var id = stamp(layer);
            if (this._layers[id]) return this;
            this._layers[id] = layer;
            layer._mapToAdd = this;
            if (layer.beforeAdd) layer.beforeAdd(this);
            this.whenReady(layer._layerAdd, layer);
            return this;
        },
        // @method removeLayer(layer: Layer): this
        // Removes the given layer from the map.
        removeLayer: function(layer) {
            var id = stamp(layer);
            if (!this._layers[id]) return this;
            if (this._loaded) layer.onRemove(this);
            delete this._layers[id];
            if (this._loaded) {
                this.fire("layerremove", {
                    layer: layer
                });
                layer.fire("remove");
            }
            layer._map = layer._mapToAdd = null;
            return this;
        },
        // @method hasLayer(layer: Layer): Boolean
        // Returns `true` if the given layer is currently added to the map
        hasLayer: function(layer) {
            return stamp(layer) in this._layers;
        },
        /* @method eachLayer(fn: Function, context?: Object): this
  	 * Iterates over the layers of the map, optionally specifying context of the iterator function.
  	 * ```
  	 * map.eachLayer(function(layer){
  	 *     layer.bindPopup('Hello');
  	 * });
  	 * ```
  	 */ eachLayer: function(method, context) {
            for(var i in this._layers)method.call(context, this._layers[i]);
            return this;
        },
        _addLayers: function(layers) {
            layers = layers ? isArray(layers) ? layers : [
                layers
            ] : [];
            for(var i = 0, len = layers.length; i < len; i++)this.addLayer(layers[i]);
        },
        _addZoomLimit: function(layer) {
            if (!isNaN(layer.options.maxZoom) || !isNaN(layer.options.minZoom)) {
                this._zoomBoundLayers[stamp(layer)] = layer;
                this._updateZoomLevels();
            }
        },
        _removeZoomLimit: function(layer) {
            var id = stamp(layer);
            if (this._zoomBoundLayers[id]) {
                delete this._zoomBoundLayers[id];
                this._updateZoomLevels();
            }
        },
        _updateZoomLevels: function() {
            var minZoom = Infinity, maxZoom = -Infinity, oldZoomSpan = this._getZoomSpan();
            for(var i in this._zoomBoundLayers){
                var options = this._zoomBoundLayers[i].options;
                minZoom = options.minZoom === undefined ? minZoom : Math.min(minZoom, options.minZoom);
                maxZoom = options.maxZoom === undefined ? maxZoom : Math.max(maxZoom, options.maxZoom);
            }
            this._layersMaxZoom = maxZoom === -Infinity ? undefined : maxZoom;
            this._layersMinZoom = minZoom === Infinity ? undefined : minZoom;
            // @section Map state change events
            // @event zoomlevelschange: Event
            // Fired when the number of zoomlevels on the map is changed due
            // to adding or removing a layer.
            if (oldZoomSpan !== this._getZoomSpan()) this.fire("zoomlevelschange");
            if (this.options.maxZoom === undefined && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom) this.setZoom(this._layersMaxZoom);
            if (this.options.minZoom === undefined && this._layersMinZoom && this.getZoom() < this._layersMinZoom) this.setZoom(this._layersMinZoom);
        }
    });
    /*
   * @class LayerGroup
   * @aka L.LayerGroup
   * @inherits Interactive layer
   *
   * Used to group several layers and handle them as one. If you add it to the map,
   * any layers added or removed from the group will be added/removed on the map as
   * well. Extends `Layer`.
   *
   * @example
   *
   * ```js
   * L.layerGroup([marker1, marker2])
   * 	.addLayer(polyline)
   * 	.addTo(map);
   * ```
   */ var LayerGroup = Layer.extend({
        initialize: function(layers, options) {
            setOptions(this, options);
            this._layers = {};
            var i, len;
            if (layers) for(i = 0, len = layers.length; i < len; i++)this.addLayer(layers[i]);
        },
        // @method addLayer(layer: Layer): this
        // Adds the given layer to the group.
        addLayer: function(layer) {
            var id = this.getLayerId(layer);
            this._layers[id] = layer;
            if (this._map) this._map.addLayer(layer);
            return this;
        },
        // @method removeLayer(layer: Layer): this
        // Removes the given layer from the group.
        // @alternative
        // @method removeLayer(id: Number): this
        // Removes the layer with the given internal ID from the group.
        removeLayer: function(layer) {
            var id = layer in this._layers ? layer : this.getLayerId(layer);
            if (this._map && this._layers[id]) this._map.removeLayer(this._layers[id]);
            delete this._layers[id];
            return this;
        },
        // @method hasLayer(layer: Layer): Boolean
        // Returns `true` if the given layer is currently added to the group.
        // @alternative
        // @method hasLayer(id: Number): Boolean
        // Returns `true` if the given internal ID is currently added to the group.
        hasLayer: function(layer) {
            var layerId = typeof layer === "number" ? layer : this.getLayerId(layer);
            return layerId in this._layers;
        },
        // @method clearLayers(): this
        // Removes all the layers from the group.
        clearLayers: function() {
            return this.eachLayer(this.removeLayer, this);
        },
        // @method invoke(methodName: String, …): this
        // Calls `methodName` on every layer contained in this group, passing any
        // additional parameters. Has no effect if the layers contained do not
        // implement `methodName`.
        invoke: function(methodName) {
            var args = Array.prototype.slice.call(arguments, 1), i, layer;
            for(i in this._layers){
                layer = this._layers[i];
                if (layer[methodName]) layer[methodName].apply(layer, args);
            }
            return this;
        },
        onAdd: function(map) {
            this.eachLayer(map.addLayer, map);
        },
        onRemove: function(map) {
            this.eachLayer(map.removeLayer, map);
        },
        // @method eachLayer(fn: Function, context?: Object): this
        // Iterates over the layers of the group, optionally specifying context of the iterator function.
        // ```js
        // group.eachLayer(function (layer) {
        // 	layer.bindPopup('Hello');
        // });
        // ```
        eachLayer: function(method, context) {
            for(var i in this._layers)method.call(context, this._layers[i]);
            return this;
        },
        // @method getLayer(id: Number): Layer
        // Returns the layer with the given internal ID.
        getLayer: function(id) {
            return this._layers[id];
        },
        // @method getLayers(): Layer[]
        // Returns an array of all the layers added to the group.
        getLayers: function() {
            var layers = [];
            this.eachLayer(layers.push, layers);
            return layers;
        },
        // @method setZIndex(zIndex: Number): this
        // Calls `setZIndex` on every layer contained in this group, passing the z-index.
        setZIndex: function(zIndex) {
            return this.invoke("setZIndex", zIndex);
        },
        // @method getLayerId(layer: Layer): Number
        // Returns the internal ID for a layer
        getLayerId: function(layer) {
            return stamp(layer);
        }
    });
    // @factory L.layerGroup(layers?: Layer[], options?: Object)
    // Create a layer group, optionally given an initial set of layers and an `options` object.
    var layerGroup = function(layers, options) {
        return new LayerGroup(layers, options);
    };
    /*
   * @class FeatureGroup
   * @aka L.FeatureGroup
   * @inherits LayerGroup
   *
   * Extended `LayerGroup` that makes it easier to do the same thing to all its member layers:
   *  * [`bindPopup`](#layer-bindpopup) binds a popup to all of the layers at once (likewise with [`bindTooltip`](#layer-bindtooltip))
   *  * Events are propagated to the `FeatureGroup`, so if the group has an event
   * handler, it will handle events from any of the layers. This includes mouse events
   * and custom events.
   *  * Has `layeradd` and `layerremove` events
   *
   * @example
   *
   * ```js
   * L.featureGroup([marker1, marker2, polyline])
   * 	.bindPopup('Hello world!')
   * 	.on('click', function() { alert('Clicked on a member of the group!'); })
   * 	.addTo(map);
   * ```
   */ var FeatureGroup = LayerGroup.extend({
        addLayer: function(layer) {
            if (this.hasLayer(layer)) return this;
            layer.addEventParent(this);
            LayerGroup.prototype.addLayer.call(this, layer);
            // @event layeradd: LayerEvent
            // Fired when a layer is added to this `FeatureGroup`
            return this.fire("layeradd", {
                layer: layer
            });
        },
        removeLayer: function(layer) {
            if (!this.hasLayer(layer)) return this;
            if (layer in this._layers) layer = this._layers[layer];
            layer.removeEventParent(this);
            LayerGroup.prototype.removeLayer.call(this, layer);
            // @event layerremove: LayerEvent
            // Fired when a layer is removed from this `FeatureGroup`
            return this.fire("layerremove", {
                layer: layer
            });
        },
        // @method setStyle(style: Path options): this
        // Sets the given path options to each layer of the group that has a `setStyle` method.
        setStyle: function(style) {
            return this.invoke("setStyle", style);
        },
        // @method bringToFront(): this
        // Brings the layer group to the top of all other layers
        bringToFront: function() {
            return this.invoke("bringToFront");
        },
        // @method bringToBack(): this
        // Brings the layer group to the back of all other layers
        bringToBack: function() {
            return this.invoke("bringToBack");
        },
        // @method getBounds(): LatLngBounds
        // Returns the LatLngBounds of the Feature Group (created from bounds and coordinates of its children).
        getBounds: function() {
            var bounds = new LatLngBounds();
            for(var id in this._layers){
                var layer = this._layers[id];
                bounds.extend(layer.getBounds ? layer.getBounds() : layer.getLatLng());
            }
            return bounds;
        }
    });
    // @factory L.featureGroup(layers?: Layer[], options?: Object)
    // Create a feature group, optionally given an initial set of layers and an `options` object.
    var featureGroup = function(layers, options) {
        return new FeatureGroup(layers, options);
    };
    /*
   * @class Icon
   * @aka L.Icon
   *
   * Represents an icon to provide when creating a marker.
   *
   * @example
   *
   * ```js
   * var myIcon = L.icon({
   *     iconUrl: 'my-icon.png',
   *     iconRetinaUrl: 'my-icon@2x.png',
   *     iconSize: [38, 95],
   *     iconAnchor: [22, 94],
   *     popupAnchor: [-3, -76],
   *     shadowUrl: 'my-icon-shadow.png',
   *     shadowRetinaUrl: 'my-icon-shadow@2x.png',
   *     shadowSize: [68, 95],
   *     shadowAnchor: [22, 94]
   * });
   *
   * L.marker([50.505, 30.57], {icon: myIcon}).addTo(map);
   * ```
   *
   * `L.Icon.Default` extends `L.Icon` and is the blue icon Leaflet uses for markers by default.
   *
   */ var Icon = Class.extend({
        /* @section
  	 * @aka Icon options
  	 *
  	 * @option iconUrl: String = null
  	 * **(required)** The URL to the icon image (absolute or relative to your script path).
  	 *
  	 * @option iconRetinaUrl: String = null
  	 * The URL to a retina sized version of the icon image (absolute or relative to your
  	 * script path). Used for Retina screen devices.
  	 *
  	 * @option iconSize: Point = null
  	 * Size of the icon image in pixels.
  	 *
  	 * @option iconAnchor: Point = null
  	 * The coordinates of the "tip" of the icon (relative to its top left corner). The icon
  	 * will be aligned so that this point is at the marker's geographical location. Centered
  	 * by default if size is specified, also can be set in CSS with negative margins.
  	 *
  	 * @option popupAnchor: Point = [0, 0]
  	 * The coordinates of the point from which popups will "open", relative to the icon anchor.
  	 *
  	 * @option tooltipAnchor: Point = [0, 0]
  	 * The coordinates of the point from which tooltips will "open", relative to the icon anchor.
  	 *
  	 * @option shadowUrl: String = null
  	 * The URL to the icon shadow image. If not specified, no shadow image will be created.
  	 *
  	 * @option shadowRetinaUrl: String = null
  	 *
  	 * @option shadowSize: Point = null
  	 * Size of the shadow image in pixels.
  	 *
  	 * @option shadowAnchor: Point = null
  	 * The coordinates of the "tip" of the shadow (relative to its top left corner) (the same
  	 * as iconAnchor if not specified).
  	 *
  	 * @option className: String = ''
  	 * A custom class name to assign to both icon and shadow images. Empty by default.
  	 */ options: {
            popupAnchor: [
                0,
                0
            ],
            tooltipAnchor: [
                0,
                0
            ],
            // @option crossOrigin: Boolean|String = false
            // Whether the crossOrigin attribute will be added to the tiles.
            // If a String is provided, all tiles will have their crossOrigin attribute set to the String provided. This is needed if you want to access tile pixel data.
            // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
            crossOrigin: false
        },
        initialize: function(options) {
            setOptions(this, options);
        },
        // @method createIcon(oldIcon?: HTMLElement): HTMLElement
        // Called internally when the icon has to be shown, returns a `<img>` HTML element
        // styled according to the options.
        createIcon: function(oldIcon) {
            return this._createIcon("icon", oldIcon);
        },
        // @method createShadow(oldIcon?: HTMLElement): HTMLElement
        // As `createIcon`, but for the shadow beneath it.
        createShadow: function(oldIcon) {
            return this._createIcon("shadow", oldIcon);
        },
        _createIcon: function(name, oldIcon) {
            var src = this._getIconUrl(name);
            if (!src) {
                if (name === "icon") throw new Error("iconUrl not set in Icon options (see the docs).");
                return null;
            }
            var img = this._createImg(src, oldIcon && oldIcon.tagName === "IMG" ? oldIcon : null);
            this._setIconStyles(img, name);
            if (this.options.crossOrigin || this.options.crossOrigin === "") img.crossOrigin = this.options.crossOrigin === true ? "" : this.options.crossOrigin;
            return img;
        },
        _setIconStyles: function(img, name) {
            var options = this.options;
            var sizeOption = options[name + "Size"];
            if (typeof sizeOption === "number") sizeOption = [
                sizeOption,
                sizeOption
            ];
            var size = toPoint(sizeOption), anchor = toPoint(name === "shadow" && options.shadowAnchor || options.iconAnchor || size && size.divideBy(2, true));
            img.className = "leaflet-marker-" + name + " " + (options.className || "");
            if (anchor) {
                img.style.marginLeft = -anchor.x + "px";
                img.style.marginTop = -anchor.y + "px";
            }
            if (size) {
                img.style.width = size.x + "px";
                img.style.height = size.y + "px";
            }
        },
        _createImg: function(src, el) {
            el = el || document.createElement("img");
            el.src = src;
            return el;
        },
        _getIconUrl: function(name) {
            return Browser.retina && this.options[name + "RetinaUrl"] || this.options[name + "Url"];
        }
    });
    // @factory L.icon(options: Icon options)
    // Creates an icon instance with the given options.
    function icon(options) {
        return new Icon(options);
    }
    /*
   * @miniclass Icon.Default (Icon)
   * @aka L.Icon.Default
   * @section
   *
   * A trivial subclass of `Icon`, represents the icon to use in `Marker`s when
   * no icon is specified. Points to the blue marker image distributed with Leaflet
   * releases.
   *
   * In order to customize the default icon, just change the properties of `L.Icon.Default.prototype.options`
   * (which is a set of `Icon options`).
   *
   * If you want to _completely_ replace the default icon, override the
   * `L.Marker.prototype.options.icon` with your own icon instead.
   */ var IconDefault = Icon.extend({
        options: {
            iconUrl: "marker-icon.png",
            iconRetinaUrl: "marker-icon-2x.png",
            shadowUrl: "marker-shadow.png",
            iconSize: [
                25,
                41
            ],
            iconAnchor: [
                12,
                41
            ],
            popupAnchor: [
                1,
                -34
            ],
            tooltipAnchor: [
                16,
                -28
            ],
            shadowSize: [
                41,
                41
            ]
        },
        _getIconUrl: function(name) {
            if (typeof IconDefault.imagePath !== "string") IconDefault.imagePath = this._detectIconPath();
            // @option imagePath: String
            // `Icon.Default` will try to auto-detect the location of the
            // blue icon images. If you are placing these images in a non-standard
            // way, set this option to point to the right path.
            return (this.options.imagePath || IconDefault.imagePath) + Icon.prototype._getIconUrl.call(this, name);
        },
        _stripUrl: function(path) {
            var strip = function(str, re, idx) {
                var match = re.exec(str);
                return match && match[idx];
            };
            path = strip(path, /^url\((['"])?(.+)\1\)$/, 2);
            return path && strip(path, /^(.*)marker-icon\.png$/, 1);
        },
        _detectIconPath: function() {
            var el = create$1("div", "leaflet-default-icon-path", document.body);
            var path = getStyle(el, "background-image") || getStyle(el, "backgroundImage"); // IE8
            document.body.removeChild(el);
            path = this._stripUrl(path);
            if (path) return path;
            var link = document.querySelector('link[href$="leaflet.css"]');
            if (!link) return "";
            return link.href.substring(0, link.href.length - 11 - 1);
        }
    });
    /*
   * L.Handler.MarkerDrag is used internally by L.Marker to make the markers draggable.
   */ /* @namespace Marker
   * @section Interaction handlers
   *
   * Interaction handlers are properties of a marker instance that allow you to control interaction behavior in runtime, enabling or disabling certain features such as dragging (see `Handler` methods). Example:
   *
   * ```js
   * marker.dragging.disable();
   * ```
   *
   * @property dragging: Handler
   * Marker dragging handler (by both mouse and touch). Only valid when the marker is on the map (Otherwise set [`marker.options.draggable`](#marker-draggable)).
   */ var MarkerDrag = Handler.extend({
        initialize: function(marker) {
            this._marker = marker;
        },
        addHooks: function() {
            var icon = this._marker._icon;
            if (!this._draggable) this._draggable = new Draggable(icon, icon, true);
            this._draggable.on({
                dragstart: this._onDragStart,
                predrag: this._onPreDrag,
                drag: this._onDrag,
                dragend: this._onDragEnd
            }, this).enable();
            addClass(icon, "leaflet-marker-draggable");
        },
        removeHooks: function() {
            this._draggable.off({
                dragstart: this._onDragStart,
                predrag: this._onPreDrag,
                drag: this._onDrag,
                dragend: this._onDragEnd
            }, this).disable();
            if (this._marker._icon) removeClass(this._marker._icon, "leaflet-marker-draggable");
        },
        moved: function() {
            return this._draggable && this._draggable._moved;
        },
        _adjustPan: function(e) {
            var marker = this._marker, map = marker._map, speed = this._marker.options.autoPanSpeed, padding = this._marker.options.autoPanPadding, iconPos = getPosition(marker._icon), bounds = map.getPixelBounds(), origin = map.getPixelOrigin();
            var panBounds = toBounds(bounds.min._subtract(origin).add(padding), bounds.max._subtract(origin).subtract(padding));
            if (!panBounds.contains(iconPos)) {
                // Compute incremental movement
                var movement = toPoint((Math.max(panBounds.max.x, iconPos.x) - panBounds.max.x) / (bounds.max.x - panBounds.max.x) - (Math.min(panBounds.min.x, iconPos.x) - panBounds.min.x) / (bounds.min.x - panBounds.min.x), (Math.max(panBounds.max.y, iconPos.y) - panBounds.max.y) / (bounds.max.y - panBounds.max.y) - (Math.min(panBounds.min.y, iconPos.y) - panBounds.min.y) / (bounds.min.y - panBounds.min.y)).multiplyBy(speed);
                map.panBy(movement, {
                    animate: false
                });
                this._draggable._newPos._add(movement);
                this._draggable._startPos._add(movement);
                setPosition(marker._icon, this._draggable._newPos);
                this._onDrag(e);
                this._panRequest = requestAnimFrame(this._adjustPan.bind(this, e));
            }
        },
        _onDragStart: function() {
            // @section Dragging events
            // @event dragstart: Event
            // Fired when the user starts dragging the marker.
            // @event movestart: Event
            // Fired when the marker starts moving (because of dragging).
            this._oldLatLng = this._marker.getLatLng();
            // When using ES6 imports it could not be set when `Popup` was not imported as well
            this._marker.closePopup && this._marker.closePopup();
            this._marker.fire("movestart").fire("dragstart");
        },
        _onPreDrag: function(e) {
            if (this._marker.options.autoPan) {
                cancelAnimFrame(this._panRequest);
                this._panRequest = requestAnimFrame(this._adjustPan.bind(this, e));
            }
        },
        _onDrag: function(e) {
            var marker = this._marker, shadow = marker._shadow, iconPos = getPosition(marker._icon), latlng = marker._map.layerPointToLatLng(iconPos);
            // update shadow position
            if (shadow) setPosition(shadow, iconPos);
            marker._latlng = latlng;
            e.latlng = latlng;
            e.oldLatLng = this._oldLatLng;
            // @event drag: Event
            // Fired repeatedly while the user drags the marker.
            marker.fire("move", e).fire("drag", e);
        },
        _onDragEnd: function(e) {
            // @event dragend: DragEndEvent
            // Fired when the user stops dragging the marker.
            cancelAnimFrame(this._panRequest);
            // @event moveend: Event
            // Fired when the marker stops moving (because of dragging).
            delete this._oldLatLng;
            this._marker.fire("moveend").fire("dragend", e);
        }
    });
    /*
   * @class Marker
   * @inherits Interactive layer
   * @aka L.Marker
   * L.Marker is used to display clickable/draggable icons on the map. Extends `Layer`.
   *
   * @example
   *
   * ```js
   * L.marker([50.5, 30.5]).addTo(map);
   * ```
   */ var Marker = Layer.extend({
        // @section
        // @aka Marker options
        options: {
            // @option icon: Icon = *
            // Icon instance to use for rendering the marker.
            // See [Icon documentation](#L.Icon) for details on how to customize the marker icon.
            // If not specified, a common instance of `L.Icon.Default` is used.
            icon: new IconDefault(),
            // Option inherited from "Interactive layer" abstract class
            interactive: true,
            // @option keyboard: Boolean = true
            // Whether the marker can be tabbed to with a keyboard and clicked by pressing enter.
            keyboard: true,
            // @option title: String = ''
            // Text for the browser tooltip that appear on marker hover (no tooltip by default).
            // [Useful for accessibility](https://leafletjs.com/examples/accessibility/#markers-must-be-labelled).
            title: "",
            // @option alt: String = 'Marker'
            // Text for the `alt` attribute of the icon image.
            // [Useful for accessibility](https://leafletjs.com/examples/accessibility/#markers-must-be-labelled).
            alt: "Marker",
            // @option zIndexOffset: Number = 0
            // By default, marker images zIndex is set automatically based on its latitude. Use this option if you want to put the marker on top of all others (or below), specifying a high value like `1000` (or high negative value, respectively).
            zIndexOffset: 0,
            // @option opacity: Number = 1.0
            // The opacity of the marker.
            opacity: 1,
            // @option riseOnHover: Boolean = false
            // If `true`, the marker will get on top of others when you hover the mouse over it.
            riseOnHover: false,
            // @option riseOffset: Number = 250
            // The z-index offset used for the `riseOnHover` feature.
            riseOffset: 250,
            // @option pane: String = 'markerPane'
            // `Map pane` where the markers icon will be added.
            pane: "markerPane",
            // @option shadowPane: String = 'shadowPane'
            // `Map pane` where the markers shadow will be added.
            shadowPane: "shadowPane",
            // @option bubblingMouseEvents: Boolean = false
            // When `true`, a mouse event on this marker will trigger the same event on the map
            // (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
            bubblingMouseEvents: false,
            // @option autoPanOnFocus: Boolean = true
            // When `true`, the map will pan whenever the marker is focused (via
            // e.g. pressing `tab` on the keyboard) to ensure the marker is
            // visible within the map's bounds
            autoPanOnFocus: true,
            // @section Draggable marker options
            // @option draggable: Boolean = false
            // Whether the marker is draggable with mouse/touch or not.
            draggable: false,
            // @option autoPan: Boolean = false
            // Whether to pan the map when dragging this marker near its edge or not.
            autoPan: false,
            // @option autoPanPadding: Point = Point(50, 50)
            // Distance (in pixels to the left/right and to the top/bottom) of the
            // map edge to start panning the map.
            autoPanPadding: [
                50,
                50
            ],
            // @option autoPanSpeed: Number = 10
            // Number of pixels the map should pan by.
            autoPanSpeed: 10
        },
        /* @section
  	 *
  	 * In addition to [shared layer methods](#Layer) like `addTo()` and `remove()` and [popup methods](#Popup) like bindPopup() you can also use the following methods:
  	 */ initialize: function(latlng, options) {
            setOptions(this, options);
            this._latlng = toLatLng(latlng);
        },
        onAdd: function(map) {
            this._zoomAnimated = this._zoomAnimated && map.options.markerZoomAnimation;
            if (this._zoomAnimated) map.on("zoomanim", this._animateZoom, this);
            this._initIcon();
            this.update();
        },
        onRemove: function(map) {
            if (this.dragging && this.dragging.enabled()) {
                this.options.draggable = true;
                this.dragging.removeHooks();
            }
            delete this.dragging;
            if (this._zoomAnimated) map.off("zoomanim", this._animateZoom, this);
            this._removeIcon();
            this._removeShadow();
        },
        getEvents: function() {
            return {
                zoom: this.update,
                viewreset: this.update
            };
        },
        // @method getLatLng: LatLng
        // Returns the current geographical position of the marker.
        getLatLng: function() {
            return this._latlng;
        },
        // @method setLatLng(latlng: LatLng): this
        // Changes the marker position to the given point.
        setLatLng: function(latlng) {
            var oldLatLng = this._latlng;
            this._latlng = toLatLng(latlng);
            this.update();
            // @event move: Event
            // Fired when the marker is moved via [`setLatLng`](#marker-setlatlng) or by [dragging](#marker-dragging). Old and new coordinates are included in event arguments as `oldLatLng`, `latlng`.
            return this.fire("move", {
                oldLatLng: oldLatLng,
                latlng: this._latlng
            });
        },
        // @method setZIndexOffset(offset: Number): this
        // Changes the [zIndex offset](#marker-zindexoffset) of the marker.
        setZIndexOffset: function(offset) {
            this.options.zIndexOffset = offset;
            return this.update();
        },
        // @method getIcon: Icon
        // Returns the current icon used by the marker
        getIcon: function() {
            return this.options.icon;
        },
        // @method setIcon(icon: Icon): this
        // Changes the marker icon.
        setIcon: function(icon) {
            this.options.icon = icon;
            if (this._map) {
                this._initIcon();
                this.update();
            }
            if (this._popup) this.bindPopup(this._popup, this._popup.options);
            return this;
        },
        getElement: function() {
            return this._icon;
        },
        update: function() {
            if (this._icon && this._map) {
                var pos = this._map.latLngToLayerPoint(this._latlng).round();
                this._setPos(pos);
            }
            return this;
        },
        _initIcon: function() {
            var options = this.options, classToAdd = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
            var icon = options.icon.createIcon(this._icon), addIcon = false;
            // if we're not reusing the icon, remove the old one and init new one
            if (icon !== this._icon) {
                if (this._icon) this._removeIcon();
                addIcon = true;
                if (options.title) icon.title = options.title;
                if (icon.tagName === "IMG") icon.alt = options.alt || "";
            }
            addClass(icon, classToAdd);
            if (options.keyboard) {
                icon.tabIndex = "0";
                icon.setAttribute("role", "button");
            }
            this._icon = icon;
            if (options.riseOnHover) this.on({
                mouseover: this._bringToFront,
                mouseout: this._resetZIndex
            });
            if (this.options.autoPanOnFocus) on(icon, "focus", this._panOnFocus, this);
            var newShadow = options.icon.createShadow(this._shadow), addShadow = false;
            if (newShadow !== this._shadow) {
                this._removeShadow();
                addShadow = true;
            }
            if (newShadow) {
                addClass(newShadow, classToAdd);
                newShadow.alt = "";
            }
            this._shadow = newShadow;
            if (options.opacity < 1) this._updateOpacity();
            if (addIcon) this.getPane().appendChild(this._icon);
            this._initInteraction();
            if (newShadow && addShadow) this.getPane(options.shadowPane).appendChild(this._shadow);
        },
        _removeIcon: function() {
            if (this.options.riseOnHover) this.off({
                mouseover: this._bringToFront,
                mouseout: this._resetZIndex
            });
            if (this.options.autoPanOnFocus) off(this._icon, "focus", this._panOnFocus, this);
            remove(this._icon);
            this.removeInteractiveTarget(this._icon);
            this._icon = null;
        },
        _removeShadow: function() {
            if (this._shadow) remove(this._shadow);
            this._shadow = null;
        },
        _setPos: function(pos) {
            if (this._icon) setPosition(this._icon, pos);
            if (this._shadow) setPosition(this._shadow, pos);
            this._zIndex = pos.y + this.options.zIndexOffset;
            this._resetZIndex();
        },
        _updateZIndex: function(offset) {
            if (this._icon) this._icon.style.zIndex = this._zIndex + offset;
        },
        _animateZoom: function(opt) {
            var pos = this._map._latLngToNewLayerPoint(this._latlng, opt.zoom, opt.center).round();
            this._setPos(pos);
        },
        _initInteraction: function() {
            if (!this.options.interactive) return;
            addClass(this._icon, "leaflet-interactive");
            this.addInteractiveTarget(this._icon);
            if (MarkerDrag) {
                var draggable = this.options.draggable;
                if (this.dragging) {
                    draggable = this.dragging.enabled();
                    this.dragging.disable();
                }
                this.dragging = new MarkerDrag(this);
                if (draggable) this.dragging.enable();
            }
        },
        // @method setOpacity(opacity: Number): this
        // Changes the opacity of the marker.
        setOpacity: function(opacity) {
            this.options.opacity = opacity;
            if (this._map) this._updateOpacity();
            return this;
        },
        _updateOpacity: function() {
            var opacity = this.options.opacity;
            if (this._icon) setOpacity(this._icon, opacity);
            if (this._shadow) setOpacity(this._shadow, opacity);
        },
        _bringToFront: function() {
            this._updateZIndex(this.options.riseOffset);
        },
        _resetZIndex: function() {
            this._updateZIndex(0);
        },
        _panOnFocus: function() {
            var map = this._map;
            if (!map) return;
            var iconOpts = this.options.icon.options;
            var size = iconOpts.iconSize ? toPoint(iconOpts.iconSize) : toPoint(0, 0);
            var anchor = iconOpts.iconAnchor ? toPoint(iconOpts.iconAnchor) : toPoint(0, 0);
            map.panInside(this._latlng, {
                paddingTopLeft: anchor,
                paddingBottomRight: size.subtract(anchor)
            });
        },
        _getPopupAnchor: function() {
            return this.options.icon.options.popupAnchor;
        },
        _getTooltipAnchor: function() {
            return this.options.icon.options.tooltipAnchor;
        }
    });
    // factory L.marker(latlng: LatLng, options? : Marker options)
    // @factory L.marker(latlng: LatLng, options? : Marker options)
    // Instantiates a Marker object given a geographical point and optionally an options object.
    function marker(latlng, options) {
        return new Marker(latlng, options);
    }
    /*
   * @class Path
   * @aka L.Path
   * @inherits Interactive layer
   *
   * An abstract class that contains options and constants shared between vector
   * overlays (Polygon, Polyline, Circle). Do not use it directly. Extends `Layer`.
   */ var Path = Layer.extend({
        // @section
        // @aka Path options
        options: {
            // @option stroke: Boolean = true
            // Whether to draw stroke along the path. Set it to `false` to disable borders on polygons or circles.
            stroke: true,
            // @option color: String = '#3388ff'
            // Stroke color
            color: "#3388ff",
            // @option weight: Number = 3
            // Stroke width in pixels
            weight: 3,
            // @option opacity: Number = 1.0
            // Stroke opacity
            opacity: 1,
            // @option lineCap: String= 'round'
            // A string that defines [shape to be used at the end](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linecap) of the stroke.
            lineCap: "round",
            // @option lineJoin: String = 'round'
            // A string that defines [shape to be used at the corners](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linejoin) of the stroke.
            lineJoin: "round",
            // @option dashArray: String = null
            // A string that defines the stroke [dash pattern](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dasharray). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
            dashArray: null,
            // @option dashOffset: String = null
            // A string that defines the [distance into the dash pattern to start the dash](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dashoffset). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
            dashOffset: null,
            // @option fill: Boolean = depends
            // Whether to fill the path with color. Set it to `false` to disable filling on polygons or circles.
            fill: false,
            // @option fillColor: String = *
            // Fill color. Defaults to the value of the [`color`](#path-color) option
            fillColor: null,
            // @option fillOpacity: Number = 0.2
            // Fill opacity.
            fillOpacity: 0.2,
            // @option fillRule: String = 'evenodd'
            // A string that defines [how the inside of a shape](https://developer.mozilla.org/docs/Web/SVG/Attribute/fill-rule) is determined.
            fillRule: "evenodd",
            // className: '',
            // Option inherited from "Interactive layer" abstract class
            interactive: true,
            // @option bubblingMouseEvents: Boolean = true
            // When `true`, a mouse event on this path will trigger the same event on the map
            // (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
            bubblingMouseEvents: true
        },
        beforeAdd: function(map) {
            // Renderer is set here because we need to call renderer.getEvents
            // before this.getEvents.
            this._renderer = map.getRenderer(this);
        },
        onAdd: function() {
            this._renderer._initPath(this);
            this._reset();
            this._renderer._addPath(this);
        },
        onRemove: function() {
            this._renderer._removePath(this);
        },
        // @method redraw(): this
        // Redraws the layer. Sometimes useful after you changed the coordinates that the path uses.
        redraw: function() {
            if (this._map) this._renderer._updatePath(this);
            return this;
        },
        // @method setStyle(style: Path options): this
        // Changes the appearance of a Path based on the options in the `Path options` object.
        setStyle: function(style) {
            setOptions(this, style);
            if (this._renderer) {
                this._renderer._updateStyle(this);
                if (this.options.stroke && style && Object.prototype.hasOwnProperty.call(style, "weight")) this._updateBounds();
            }
            return this;
        },
        // @method bringToFront(): this
        // Brings the layer to the top of all path layers.
        bringToFront: function() {
            if (this._renderer) this._renderer._bringToFront(this);
            return this;
        },
        // @method bringToBack(): this
        // Brings the layer to the bottom of all path layers.
        bringToBack: function() {
            if (this._renderer) this._renderer._bringToBack(this);
            return this;
        },
        getElement: function() {
            return this._path;
        },
        _reset: function() {
            // defined in child classes
            this._project();
            this._update();
        },
        _clickTolerance: function() {
            // used when doing hit detection for Canvas layers
            return (this.options.stroke ? this.options.weight / 2 : 0) + (this._renderer.options.tolerance || 0);
        }
    });
    /*
   * @class CircleMarker
   * @aka L.CircleMarker
   * @inherits Path
   *
   * A circle of a fixed size with radius specified in pixels. Extends `Path`.
   */ var CircleMarker = Path.extend({
        // @section
        // @aka CircleMarker options
        options: {
            fill: true,
            // @option radius: Number = 10
            // Radius of the circle marker, in pixels
            radius: 10
        },
        initialize: function(latlng, options) {
            setOptions(this, options);
            this._latlng = toLatLng(latlng);
            this._radius = this.options.radius;
        },
        // @method setLatLng(latLng: LatLng): this
        // Sets the position of a circle marker to a new location.
        setLatLng: function(latlng) {
            var oldLatLng = this._latlng;
            this._latlng = toLatLng(latlng);
            this.redraw();
            // @event move: Event
            // Fired when the marker is moved via [`setLatLng`](#circlemarker-setlatlng). Old and new coordinates are included in event arguments as `oldLatLng`, `latlng`.
            return this.fire("move", {
                oldLatLng: oldLatLng,
                latlng: this._latlng
            });
        },
        // @method getLatLng(): LatLng
        // Returns the current geographical position of the circle marker
        getLatLng: function() {
            return this._latlng;
        },
        // @method setRadius(radius: Number): this
        // Sets the radius of a circle marker. Units are in pixels.
        setRadius: function(radius) {
            this.options.radius = this._radius = radius;
            return this.redraw();
        },
        // @method getRadius(): Number
        // Returns the current radius of the circle
        getRadius: function() {
            return this._radius;
        },
        setStyle: function(options) {
            var radius = options && options.radius || this._radius;
            Path.prototype.setStyle.call(this, options);
            this.setRadius(radius);
            return this;
        },
        _project: function() {
            this._point = this._map.latLngToLayerPoint(this._latlng);
            this._updateBounds();
        },
        _updateBounds: function() {
            var r = this._radius, r2 = this._radiusY || r, w = this._clickTolerance(), p = [
                r + w,
                r2 + w
            ];
            this._pxBounds = new Bounds(this._point.subtract(p), this._point.add(p));
        },
        _update: function() {
            if (this._map) this._updatePath();
        },
        _updatePath: function() {
            this._renderer._updateCircle(this);
        },
        _empty: function() {
            return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
        },
        // Needed by the `Canvas` renderer for interactivity
        _containsPoint: function(p) {
            return p.distanceTo(this._point) <= this._radius + this._clickTolerance();
        }
    });
    // @factory L.circleMarker(latlng: LatLng, options?: CircleMarker options)
    // Instantiates a circle marker object given a geographical point, and an optional options object.
    function circleMarker(latlng, options) {
        return new CircleMarker(latlng, options);
    }
    /*
   * @class Circle
   * @aka L.Circle
   * @inherits CircleMarker
   *
   * A class for drawing circle overlays on a map. Extends `CircleMarker`.
   *
   * It's an approximation and starts to diverge from a real circle closer to poles (due to projection distortion).
   *
   * @example
   *
   * ```js
   * L.circle([50.5, 30.5], {radius: 200}).addTo(map);
   * ```
   */ var Circle = CircleMarker.extend({
        initialize: function(latlng, options, legacyOptions) {
            if (typeof options === "number") // Backwards compatibility with 0.7.x factory (latlng, radius, options?)
            options = extend({}, legacyOptions, {
                radius: options
            });
            setOptions(this, options);
            this._latlng = toLatLng(latlng);
            if (isNaN(this.options.radius)) throw new Error("Circle radius cannot be NaN");
            // @section
            // @aka Circle options
            // @option radius: Number; Radius of the circle, in meters.
            this._mRadius = this.options.radius;
        },
        // @method setRadius(radius: Number): this
        // Sets the radius of a circle. Units are in meters.
        setRadius: function(radius) {
            this._mRadius = radius;
            return this.redraw();
        },
        // @method getRadius(): Number
        // Returns the current radius of a circle. Units are in meters.
        getRadius: function() {
            return this._mRadius;
        },
        // @method getBounds(): LatLngBounds
        // Returns the `LatLngBounds` of the path.
        getBounds: function() {
            var half = [
                this._radius,
                this._radiusY || this._radius
            ];
            return new LatLngBounds(this._map.layerPointToLatLng(this._point.subtract(half)), this._map.layerPointToLatLng(this._point.add(half)));
        },
        setStyle: Path.prototype.setStyle,
        _project: function() {
            var lng = this._latlng.lng, lat = this._latlng.lat, map = this._map, crs = map.options.crs;
            if (crs.distance === Earth.distance) {
                var d = Math.PI / 180, latR = this._mRadius / Earth.R / d, top = map.project([
                    lat + latR,
                    lng
                ]), bottom = map.project([
                    lat - latR,
                    lng
                ]), p = top.add(bottom).divideBy(2), lat2 = map.unproject(p).lat, lngR = Math.acos((Math.cos(latR * d) - Math.sin(lat * d) * Math.sin(lat2 * d)) / (Math.cos(lat * d) * Math.cos(lat2 * d))) / d;
                if (isNaN(lngR) || lngR === 0) lngR = latR / Math.cos(Math.PI / 180 * lat); // Fallback for edge case, #2425
                this._point = p.subtract(map.getPixelOrigin());
                this._radius = isNaN(lngR) ? 0 : p.x - map.project([
                    lat2,
                    lng - lngR
                ]).x;
                this._radiusY = p.y - top.y;
            } else {
                var latlng2 = crs.unproject(crs.project(this._latlng).subtract([
                    this._mRadius,
                    0
                ]));
                this._point = map.latLngToLayerPoint(this._latlng);
                this._radius = this._point.x - map.latLngToLayerPoint(latlng2).x;
            }
            this._updateBounds();
        }
    });
    // @factory L.circle(latlng: LatLng, options?: Circle options)
    // Instantiates a circle object given a geographical point, and an options object
    // which contains the circle radius.
    // @alternative
    // @factory L.circle(latlng: LatLng, radius: Number, options?: Circle options)
    // Obsolete way of instantiating a circle, for compatibility with 0.7.x code.
    // Do not use in new applications or plugins.
    function circle(latlng, options, legacyOptions) {
        return new Circle(latlng, options, legacyOptions);
    }
    /*
   * @class Polyline
   * @aka L.Polyline
   * @inherits Path
   *
   * A class for drawing polyline overlays on a map. Extends `Path`.
   *
   * @example
   *
   * ```js
   * // create a red polyline from an array of LatLng points
   * var latlngs = [
   * 	[45.51, -122.68],
   * 	[37.77, -122.43],
   * 	[34.04, -118.2]
   * ];
   *
   * var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);
   *
   * // zoom the map to the polyline
   * map.fitBounds(polyline.getBounds());
   * ```
   *
   * You can also pass a multi-dimensional array to represent a `MultiPolyline` shape:
   *
   * ```js
   * // create a red polyline from an array of arrays of LatLng points
   * var latlngs = [
   * 	[[45.51, -122.68],
   * 	 [37.77, -122.43],
   * 	 [34.04, -118.2]],
   * 	[[40.78, -73.91],
   * 	 [41.83, -87.62],
   * 	 [32.76, -96.72]]
   * ];
   * ```
   */ var Polyline = Path.extend({
        // @section
        // @aka Polyline options
        options: {
            // @option smoothFactor: Number = 1.0
            // How much to simplify the polyline on each zoom level. More means
            // better performance and smoother look, and less means more accurate representation.
            smoothFactor: 1.0,
            // @option noClip: Boolean = false
            // Disable polyline clipping.
            noClip: false
        },
        initialize: function(latlngs, options) {
            setOptions(this, options);
            this._setLatLngs(latlngs);
        },
        // @method getLatLngs(): LatLng[]
        // Returns an array of the points in the path, or nested arrays of points in case of multi-polyline.
        getLatLngs: function() {
            return this._latlngs;
        },
        // @method setLatLngs(latlngs: LatLng[]): this
        // Replaces all the points in the polyline with the given array of geographical points.
        setLatLngs: function(latlngs) {
            this._setLatLngs(latlngs);
            return this.redraw();
        },
        // @method isEmpty(): Boolean
        // Returns `true` if the Polyline has no LatLngs.
        isEmpty: function() {
            return !this._latlngs.length;
        },
        // @method closestLayerPoint(p: Point): Point
        // Returns the point closest to `p` on the Polyline.
        closestLayerPoint: function(p) {
            var minDistance = Infinity, minPoint = null, closest = _sqClosestPointOnSegment, p1, p2;
            for(var j = 0, jLen = this._parts.length; j < jLen; j++){
                var points = this._parts[j];
                for(var i = 1, len = points.length; i < len; i++){
                    p1 = points[i - 1];
                    p2 = points[i];
                    var sqDist = closest(p, p1, p2, true);
                    if (sqDist < minDistance) {
                        minDistance = sqDist;
                        minPoint = closest(p, p1, p2);
                    }
                }
            }
            if (minPoint) minPoint.distance = Math.sqrt(minDistance);
            return minPoint;
        },
        // @method getCenter(): LatLng
        // Returns the center ([centroid](https://en.wikipedia.org/wiki/Centroid)) of the polyline.
        getCenter: function() {
            // throws error when not yet added to map as this center calculation requires projected coordinates
            if (!this._map) throw new Error("Must add layer to map before using getCenter()");
            return polylineCenter(this._defaultShape(), this._map.options.crs);
        },
        // @method getBounds(): LatLngBounds
        // Returns the `LatLngBounds` of the path.
        getBounds: function() {
            return this._bounds;
        },
        // @method addLatLng(latlng: LatLng, latlngs?: LatLng[]): this
        // Adds a given point to the polyline. By default, adds to the first ring of
        // the polyline in case of a multi-polyline, but can be overridden by passing
        // a specific ring as a LatLng array (that you can earlier access with [`getLatLngs`](#polyline-getlatlngs)).
        addLatLng: function(latlng, latlngs) {
            latlngs = latlngs || this._defaultShape();
            latlng = toLatLng(latlng);
            latlngs.push(latlng);
            this._bounds.extend(latlng);
            return this.redraw();
        },
        _setLatLngs: function(latlngs) {
            this._bounds = new LatLngBounds();
            this._latlngs = this._convertLatLngs(latlngs);
        },
        _defaultShape: function() {
            return isFlat(this._latlngs) ? this._latlngs : this._latlngs[0];
        },
        // recursively convert latlngs input into actual LatLng instances; calculate bounds along the way
        _convertLatLngs: function(latlngs) {
            var result = [], flat = isFlat(latlngs);
            for(var i = 0, len = latlngs.length; i < len; i++)if (flat) {
                result[i] = toLatLng(latlngs[i]);
                this._bounds.extend(result[i]);
            } else result[i] = this._convertLatLngs(latlngs[i]);
            return result;
        },
        _project: function() {
            var pxBounds = new Bounds();
            this._rings = [];
            this._projectLatlngs(this._latlngs, this._rings, pxBounds);
            if (this._bounds.isValid() && pxBounds.isValid()) {
                this._rawPxBounds = pxBounds;
                this._updateBounds();
            }
        },
        _updateBounds: function() {
            var w = this._clickTolerance(), p = new Point(w, w);
            if (!this._rawPxBounds) return;
            this._pxBounds = new Bounds([
                this._rawPxBounds.min.subtract(p),
                this._rawPxBounds.max.add(p)
            ]);
        },
        // recursively turns latlngs into a set of rings with projected coordinates
        _projectLatlngs: function(latlngs, result, projectedBounds) {
            var flat = latlngs[0] instanceof LatLng, len = latlngs.length, i, ring;
            if (flat) {
                ring = [];
                for(i = 0; i < len; i++){
                    ring[i] = this._map.latLngToLayerPoint(latlngs[i]);
                    projectedBounds.extend(ring[i]);
                }
                result.push(ring);
            } else for(i = 0; i < len; i++)this._projectLatlngs(latlngs[i], result, projectedBounds);
        },
        // clip polyline by renderer bounds so that we have less to render for performance
        _clipPoints: function() {
            var bounds = this._renderer._bounds;
            this._parts = [];
            if (!this._pxBounds || !this._pxBounds.intersects(bounds)) return;
            if (this.options.noClip) {
                this._parts = this._rings;
                return;
            }
            var parts = this._parts, i, j, k, len, len2, segment, points;
            for(i = 0, k = 0, len = this._rings.length; i < len; i++){
                points = this._rings[i];
                for(j = 0, len2 = points.length; j < len2 - 1; j++){
                    segment = clipSegment(points[j], points[j + 1], bounds, j, true);
                    if (!segment) continue;
                    parts[k] = parts[k] || [];
                    parts[k].push(segment[0]);
                    // if segment goes out of screen, or it's the last one, it's the end of the line part
                    if (segment[1] !== points[j + 1] || j === len2 - 2) {
                        parts[k].push(segment[1]);
                        k++;
                    }
                }
            }
        },
        // simplify each clipped part of the polyline for performance
        _simplifyPoints: function() {
            var parts = this._parts, tolerance = this.options.smoothFactor;
            for(var i = 0, len = parts.length; i < len; i++)parts[i] = simplify(parts[i], tolerance);
        },
        _update: function() {
            if (!this._map) return;
            this._clipPoints();
            this._simplifyPoints();
            this._updatePath();
        },
        _updatePath: function() {
            this._renderer._updatePoly(this);
        },
        // Needed by the `Canvas` renderer for interactivity
        _containsPoint: function(p, closed) {
            var i, j, k, len, len2, part, w = this._clickTolerance();
            if (!this._pxBounds || !this._pxBounds.contains(p)) return false;
            // hit detection for polylines
            for(i = 0, len = this._parts.length; i < len; i++){
                part = this._parts[i];
                for(j = 0, len2 = part.length, k = len2 - 1; j < len2; k = j++){
                    if (!closed && j === 0) continue;
                    if (pointToSegmentDistance(p, part[k], part[j]) <= w) return true;
                }
            }
            return false;
        }
    });
    // @factory L.polyline(latlngs: LatLng[], options?: Polyline options)
    // Instantiates a polyline object given an array of geographical points and
    // optionally an options object. You can create a `Polyline` object with
    // multiple separate lines (`MultiPolyline`) by passing an array of arrays
    // of geographic points.
    function polyline(latlngs, options) {
        return new Polyline(latlngs, options);
    }
    // Retrocompat. Allow plugins to support Leaflet versions before and after 1.1.
    Polyline._flat = _flat;
    /*
   * @class Polygon
   * @aka L.Polygon
   * @inherits Polyline
   *
   * A class for drawing polygon overlays on a map. Extends `Polyline`.
   *
   * Note that points you pass when creating a polygon shouldn't have an additional last point equal to the first one — it's better to filter out such points.
   *
   *
   * @example
   *
   * ```js
   * // create a red polygon from an array of LatLng points
   * var latlngs = [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]];
   *
   * var polygon = L.polygon(latlngs, {color: 'red'}).addTo(map);
   *
   * // zoom the map to the polygon
   * map.fitBounds(polygon.getBounds());
   * ```
   *
   * You can also pass an array of arrays of latlngs, with the first array representing the outer shape and the other arrays representing holes in the outer shape:
   *
   * ```js
   * var latlngs = [
   *   [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]], // outer ring
   *   [[37.29, -108.58],[40.71, -108.58],[40.71, -102.50],[37.29, -102.50]] // hole
   * ];
   * ```
   *
   * Additionally, you can pass a multi-dimensional array to represent a MultiPolygon shape.
   *
   * ```js
   * var latlngs = [
   *   [ // first polygon
   *     [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]], // outer ring
   *     [[37.29, -108.58],[40.71, -108.58],[40.71, -102.50],[37.29, -102.50]] // hole
   *   ],
   *   [ // second polygon
   *     [[41, -111.03],[45, -111.04],[45, -104.05],[41, -104.05]]
   *   ]
   * ];
   * ```
   */ var Polygon = Polyline.extend({
        options: {
            fill: true
        },
        isEmpty: function() {
            return !this._latlngs.length || !this._latlngs[0].length;
        },
        // @method getCenter(): LatLng
        // Returns the center ([centroid](http://en.wikipedia.org/wiki/Centroid)) of the Polygon.
        getCenter: function() {
            // throws error when not yet added to map as this center calculation requires projected coordinates
            if (!this._map) throw new Error("Must add layer to map before using getCenter()");
            return polygonCenter(this._defaultShape(), this._map.options.crs);
        },
        _convertLatLngs: function(latlngs) {
            var result = Polyline.prototype._convertLatLngs.call(this, latlngs), len = result.length;
            // remove last point if it equals first one
            if (len >= 2 && result[0] instanceof LatLng && result[0].equals(result[len - 1])) result.pop();
            return result;
        },
        _setLatLngs: function(latlngs) {
            Polyline.prototype._setLatLngs.call(this, latlngs);
            if (isFlat(this._latlngs)) this._latlngs = [
                this._latlngs
            ];
        },
        _defaultShape: function() {
            return isFlat(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
        },
        _clipPoints: function() {
            // polygons need a different clipping algorithm so we redefine that
            var bounds = this._renderer._bounds, w = this.options.weight, p = new Point(w, w);
            // increase clip padding by stroke width to avoid stroke on clip edges
            bounds = new Bounds(bounds.min.subtract(p), bounds.max.add(p));
            this._parts = [];
            if (!this._pxBounds || !this._pxBounds.intersects(bounds)) return;
            if (this.options.noClip) {
                this._parts = this._rings;
                return;
            }
            for(var i = 0, len = this._rings.length, clipped; i < len; i++){
                clipped = clipPolygon(this._rings[i], bounds, true);
                if (clipped.length) this._parts.push(clipped);
            }
        },
        _updatePath: function() {
            this._renderer._updatePoly(this, true);
        },
        // Needed by the `Canvas` renderer for interactivity
        _containsPoint: function(p) {
            var inside = false, part, p1, p2, i, j, k, len, len2;
            if (!this._pxBounds || !this._pxBounds.contains(p)) return false;
            // ray casting algorithm for detecting if point is in polygon
            for(i = 0, len = this._parts.length; i < len; i++){
                part = this._parts[i];
                for(j = 0, len2 = part.length, k = len2 - 1; j < len2; k = j++){
                    p1 = part[j];
                    p2 = part[k];
                    if (p1.y > p.y !== p2.y > p.y && p.x < (p2.x - p1.x) * (p.y - p1.y) / (p2.y - p1.y) + p1.x) inside = !inside;
                }
            }
            // also check if it's on polygon stroke
            return inside || Polyline.prototype._containsPoint.call(this, p, true);
        }
    });
    // @factory L.polygon(latlngs: LatLng[], options?: Polyline options)
    function polygon(latlngs, options) {
        return new Polygon(latlngs, options);
    }
    /*
   * @class GeoJSON
   * @aka L.GeoJSON
   * @inherits FeatureGroup
   *
   * Represents a GeoJSON object or an array of GeoJSON objects. Allows you to parse
   * GeoJSON data and display it on the map. Extends `FeatureGroup`.
   *
   * @example
   *
   * ```js
   * L.geoJSON(data, {
   * 	style: function (feature) {
   * 		return {color: feature.properties.color};
   * 	}
   * }).bindPopup(function (layer) {
   * 	return layer.feature.properties.description;
   * }).addTo(map);
   * ```
   */ var GeoJSON = FeatureGroup.extend({
        /* @section
  	 * @aka GeoJSON options
  	 *
  	 * @option pointToLayer: Function = *
  	 * A `Function` defining how GeoJSON points spawn Leaflet layers. It is internally
  	 * called when data is added, passing the GeoJSON point feature and its `LatLng`.
  	 * The default is to spawn a default `Marker`:
  	 * ```js
  	 * function(geoJsonPoint, latlng) {
  	 * 	return L.marker(latlng);
  	 * }
  	 * ```
  	 *
  	 * @option style: Function = *
  	 * A `Function` defining the `Path options` for styling GeoJSON lines and polygons,
  	 * called internally when data is added.
  	 * The default value is to not override any defaults:
  	 * ```js
  	 * function (geoJsonFeature) {
  	 * 	return {}
  	 * }
  	 * ```
  	 *
  	 * @option onEachFeature: Function = *
  	 * A `Function` that will be called once for each created `Feature`, after it has
  	 * been created and styled. Useful for attaching events and popups to features.
  	 * The default is to do nothing with the newly created layers:
  	 * ```js
  	 * function (feature, layer) {}
  	 * ```
  	 *
  	 * @option filter: Function = *
  	 * A `Function` that will be used to decide whether to include a feature or not.
  	 * The default is to include all features:
  	 * ```js
  	 * function (geoJsonFeature) {
  	 * 	return true;
  	 * }
  	 * ```
  	 * Note: dynamically changing the `filter` option will have effect only on newly
  	 * added data. It will _not_ re-evaluate already included features.
  	 *
  	 * @option coordsToLatLng: Function = *
  	 * A `Function` that will be used for converting GeoJSON coordinates to `LatLng`s.
  	 * The default is the `coordsToLatLng` static method.
  	 *
  	 * @option markersInheritOptions: Boolean = false
  	 * Whether default Markers for "Point" type Features inherit from group options.
  	 */ initialize: function(geojson, options) {
            setOptions(this, options);
            this._layers = {};
            if (geojson) this.addData(geojson);
        },
        // @method addData( <GeoJSON> data ): this
        // Adds a GeoJSON object to the layer.
        addData: function(geojson) {
            var features = isArray(geojson) ? geojson : geojson.features, i, len, feature;
            if (features) {
                for(i = 0, len = features.length; i < len; i++){
                    // only add this if geometry or geometries are set and not null
                    feature = features[i];
                    if (feature.geometries || feature.geometry || feature.features || feature.coordinates) this.addData(feature);
                }
                return this;
            }
            var options = this.options;
            if (options.filter && !options.filter(geojson)) return this;
            var layer = geometryToLayer(geojson, options);
            if (!layer) return this;
            layer.feature = asFeature(geojson);
            layer.defaultOptions = layer.options;
            this.resetStyle(layer);
            if (options.onEachFeature) options.onEachFeature(geojson, layer);
            return this.addLayer(layer);
        },
        // @method resetStyle( <Path> layer? ): this
        // Resets the given vector layer's style to the original GeoJSON style, useful for resetting style after hover events.
        // If `layer` is omitted, the style of all features in the current layer is reset.
        resetStyle: function(layer) {
            if (layer === undefined) return this.eachLayer(this.resetStyle, this);
            // reset any custom styles
            layer.options = extend({}, layer.defaultOptions);
            this._setLayerStyle(layer, this.options.style);
            return this;
        },
        // @method setStyle( <Function> style ): this
        // Changes styles of GeoJSON vector layers with the given style function.
        setStyle: function(style) {
            return this.eachLayer(function(layer) {
                this._setLayerStyle(layer, style);
            }, this);
        },
        _setLayerStyle: function(layer, style) {
            if (layer.setStyle) {
                if (typeof style === "function") style = style(layer.feature);
                layer.setStyle(style);
            }
        }
    });
    // @section
    // There are several static functions which can be called without instantiating L.GeoJSON:
    // @function geometryToLayer(featureData: Object, options?: GeoJSON options): Layer
    // Creates a `Layer` from a given GeoJSON feature. Can use a custom
    // [`pointToLayer`](#geojson-pointtolayer) and/or [`coordsToLatLng`](#geojson-coordstolatlng)
    // functions if provided as options.
    function geometryToLayer(geojson, options) {
        var geometry = geojson.type === "Feature" ? geojson.geometry : geojson, coords = geometry ? geometry.coordinates : null, layers = [], pointToLayer = options && options.pointToLayer, _coordsToLatLng = options && options.coordsToLatLng || coordsToLatLng, latlng, latlngs, i, len;
        if (!coords && !geometry) return null;
        switch(geometry.type){
            case "Point":
                latlng = _coordsToLatLng(coords);
                return _pointToLayer(pointToLayer, geojson, latlng, options);
            case "MultiPoint":
                for(i = 0, len = coords.length; i < len; i++){
                    latlng = _coordsToLatLng(coords[i]);
                    layers.push(_pointToLayer(pointToLayer, geojson, latlng, options));
                }
                return new FeatureGroup(layers);
            case "LineString":
            case "MultiLineString":
                latlngs = coordsToLatLngs(coords, geometry.type === "LineString" ? 0 : 1, _coordsToLatLng);
                return new Polyline(latlngs, options);
            case "Polygon":
            case "MultiPolygon":
                latlngs = coordsToLatLngs(coords, geometry.type === "Polygon" ? 1 : 2, _coordsToLatLng);
                return new Polygon(latlngs, options);
            case "GeometryCollection":
                for(i = 0, len = geometry.geometries.length; i < len; i++){
                    var geoLayer = geometryToLayer({
                        geometry: geometry.geometries[i],
                        type: "Feature",
                        properties: geojson.properties
                    }, options);
                    if (geoLayer) layers.push(geoLayer);
                }
                return new FeatureGroup(layers);
            case "FeatureCollection":
                for(i = 0, len = geometry.features.length; i < len; i++){
                    var featureLayer = geometryToLayer(geometry.features[i], options);
                    if (featureLayer) layers.push(featureLayer);
                }
                return new FeatureGroup(layers);
            default:
                throw new Error("Invalid GeoJSON object.");
        }
    }
    function _pointToLayer(pointToLayerFn, geojson, latlng, options) {
        return pointToLayerFn ? pointToLayerFn(geojson, latlng) : new Marker(latlng, options && options.markersInheritOptions && options);
    }
    // @function coordsToLatLng(coords: Array): LatLng
    // Creates a `LatLng` object from an array of 2 numbers (longitude, latitude)
    // or 3 numbers (longitude, latitude, altitude) used in GeoJSON for points.
    function coordsToLatLng(coords) {
        return new LatLng(coords[1], coords[0], coords[2]);
    }
    // @function coordsToLatLngs(coords: Array, levelsDeep?: Number, coordsToLatLng?: Function): Array
    // Creates a multidimensional array of `LatLng`s from a GeoJSON coordinates array.
    // `levelsDeep` specifies the nesting level (0 is for an array of points, 1 for an array of arrays of points, etc., 0 by default).
    // Can use a custom [`coordsToLatLng`](#geojson-coordstolatlng) function.
    function coordsToLatLngs(coords, levelsDeep, _coordsToLatLng) {
        var latlngs = [];
        for(var i = 0, len = coords.length, latlng; i < len; i++){
            latlng = levelsDeep ? coordsToLatLngs(coords[i], levelsDeep - 1, _coordsToLatLng) : (_coordsToLatLng || coordsToLatLng)(coords[i]);
            latlngs.push(latlng);
        }
        return latlngs;
    }
    // @function latLngToCoords(latlng: LatLng, precision?: Number|false): Array
    // Reverse of [`coordsToLatLng`](#geojson-coordstolatlng)
    // Coordinates values are rounded with [`formatNum`](#util-formatnum) function.
    function latLngToCoords(latlng, precision) {
        latlng = toLatLng(latlng);
        return latlng.alt !== undefined ? [
            formatNum(latlng.lng, precision),
            formatNum(latlng.lat, precision),
            formatNum(latlng.alt, precision)
        ] : [
            formatNum(latlng.lng, precision),
            formatNum(latlng.lat, precision)
        ];
    }
    // @function latLngsToCoords(latlngs: Array, levelsDeep?: Number, closed?: Boolean, precision?: Number|false): Array
    // Reverse of [`coordsToLatLngs`](#geojson-coordstolatlngs)
    // `closed` determines whether the first point should be appended to the end of the array to close the feature, only used when `levelsDeep` is 0. False by default.
    // Coordinates values are rounded with [`formatNum`](#util-formatnum) function.
    function latLngsToCoords(latlngs, levelsDeep, closed, precision) {
        var coords = [];
        for(var i = 0, len = latlngs.length; i < len; i++)// Check for flat arrays required to ensure unbalanced arrays are correctly converted in recursion
        coords.push(levelsDeep ? latLngsToCoords(latlngs[i], isFlat(latlngs[i]) ? 0 : levelsDeep - 1, closed, precision) : latLngToCoords(latlngs[i], precision));
        if (!levelsDeep && closed && coords.length > 0) coords.push(coords[0].slice());
        return coords;
    }
    function getFeature(layer, newGeometry) {
        return layer.feature ? extend({}, layer.feature, {
            geometry: newGeometry
        }) : asFeature(newGeometry);
    }
    // @function asFeature(geojson: Object): Object
    // Normalize GeoJSON geometries/features into GeoJSON features.
    function asFeature(geojson) {
        if (geojson.type === "Feature" || geojson.type === "FeatureCollection") return geojson;
        return {
            type: "Feature",
            properties: {},
            geometry: geojson
        };
    }
    var PointToGeoJSON = {
        toGeoJSON: function(precision) {
            return getFeature(this, {
                type: "Point",
                coordinates: latLngToCoords(this.getLatLng(), precision)
            });
        }
    };
    // @namespace Marker
    // @section Other methods
    // @method toGeoJSON(precision?: Number|false): Object
    // Coordinates values are rounded with [`formatNum`](#util-formatnum) function with given `precision`.
    // Returns a [`GeoJSON`](https://en.wikipedia.org/wiki/GeoJSON) representation of the marker (as a GeoJSON `Point` Feature).
    Marker.include(PointToGeoJSON);
    // @namespace CircleMarker
    // @method toGeoJSON(precision?: Number|false): Object
    // Coordinates values are rounded with [`formatNum`](#util-formatnum) function with given `precision`.
    // Returns a [`GeoJSON`](https://en.wikipedia.org/wiki/GeoJSON) representation of the circle marker (as a GeoJSON `Point` Feature).
    Circle.include(PointToGeoJSON);
    CircleMarker.include(PointToGeoJSON);
    // @namespace Polyline
    // @method toGeoJSON(precision?: Number|false): Object
    // Coordinates values are rounded with [`formatNum`](#util-formatnum) function with given `precision`.
    // Returns a [`GeoJSON`](https://en.wikipedia.org/wiki/GeoJSON) representation of the polyline (as a GeoJSON `LineString` or `MultiLineString` Feature).
    Polyline.include({
        toGeoJSON: function(precision) {
            var multi = !isFlat(this._latlngs);
            var coords = latLngsToCoords(this._latlngs, multi ? 1 : 0, false, precision);
            return getFeature(this, {
                type: (multi ? "Multi" : "") + "LineString",
                coordinates: coords
            });
        }
    });
    // @namespace Polygon
    // @method toGeoJSON(precision?: Number|false): Object
    // Coordinates values are rounded with [`formatNum`](#util-formatnum) function with given `precision`.
    // Returns a [`GeoJSON`](https://en.wikipedia.org/wiki/GeoJSON) representation of the polygon (as a GeoJSON `Polygon` or `MultiPolygon` Feature).
    Polygon.include({
        toGeoJSON: function(precision) {
            var holes = !isFlat(this._latlngs), multi = holes && !isFlat(this._latlngs[0]);
            var coords = latLngsToCoords(this._latlngs, multi ? 2 : holes ? 1 : 0, true, precision);
            if (!holes) coords = [
                coords
            ];
            return getFeature(this, {
                type: (multi ? "Multi" : "") + "Polygon",
                coordinates: coords
            });
        }
    });
    // @namespace LayerGroup
    LayerGroup.include({
        toMultiPoint: function(precision) {
            var coords = [];
            this.eachLayer(function(layer) {
                coords.push(layer.toGeoJSON(precision).geometry.coordinates);
            });
            return getFeature(this, {
                type: "MultiPoint",
                coordinates: coords
            });
        },
        // @method toGeoJSON(precision?: Number|false): Object
        // Coordinates values are rounded with [`formatNum`](#util-formatnum) function with given `precision`.
        // Returns a [`GeoJSON`](https://en.wikipedia.org/wiki/GeoJSON) representation of the layer group (as a GeoJSON `FeatureCollection`, `GeometryCollection`, or `MultiPoint`).
        toGeoJSON: function(precision) {
            var type = this.feature && this.feature.geometry && this.feature.geometry.type;
            if (type === "MultiPoint") return this.toMultiPoint(precision);
            var isGeometryCollection = type === "GeometryCollection", jsons = [];
            this.eachLayer(function(layer) {
                if (layer.toGeoJSON) {
                    var json = layer.toGeoJSON(precision);
                    if (isGeometryCollection) jsons.push(json.geometry);
                    else {
                        var feature = asFeature(json);
                        // Squash nested feature collections
                        if (feature.type === "FeatureCollection") jsons.push.apply(jsons, feature.features);
                        else jsons.push(feature);
                    }
                }
            });
            if (isGeometryCollection) return getFeature(this, {
                geometries: jsons,
                type: "GeometryCollection"
            });
            return {
                type: "FeatureCollection",
                features: jsons
            };
        }
    });
    // @namespace GeoJSON
    // @factory L.geoJSON(geojson?: Object, options?: GeoJSON options)
    // Creates a GeoJSON layer. Optionally accepts an object in
    // [GeoJSON format](https://tools.ietf.org/html/rfc7946) to display on the map
    // (you can alternatively add it later with `addData` method) and an `options` object.
    function geoJSON(geojson, options) {
        return new GeoJSON(geojson, options);
    }
    // Backward compatibility.
    var geoJson = geoJSON;
    /*
   * @class ImageOverlay
   * @aka L.ImageOverlay
   * @inherits Interactive layer
   *
   * Used to load and display a single image over specific bounds of the map. Extends `Layer`.
   *
   * @example
   *
   * ```js
   * var imageUrl = 'https://maps.lib.utexas.edu/maps/historical/newark_nj_1922.jpg',
   * 	imageBounds = [[40.712216, -74.22655], [40.773941, -74.12544]];
   * L.imageOverlay(imageUrl, imageBounds).addTo(map);
   * ```
   */ var ImageOverlay = Layer.extend({
        // @section
        // @aka ImageOverlay options
        options: {
            // @option opacity: Number = 1.0
            // The opacity of the image overlay.
            opacity: 1,
            // @option alt: String = ''
            // Text for the `alt` attribute of the image (useful for accessibility).
            alt: "",
            // @option interactive: Boolean = false
            // If `true`, the image overlay will emit [mouse events](#interactive-layer) when clicked or hovered.
            interactive: false,
            // @option crossOrigin: Boolean|String = false
            // Whether the crossOrigin attribute will be added to the image.
            // If a String is provided, the image will have its crossOrigin attribute set to the String provided. This is needed if you want to access image pixel data.
            // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
            crossOrigin: false,
            // @option errorOverlayUrl: String = ''
            // URL to the overlay image to show in place of the overlay that failed to load.
            errorOverlayUrl: "",
            // @option zIndex: Number = 1
            // The explicit [zIndex](https://developer.mozilla.org/docs/Web/CSS/CSS_Positioning/Understanding_z_index) of the overlay layer.
            zIndex: 1,
            // @option className: String = ''
            // A custom class name to assign to the image. Empty by default.
            className: ""
        },
        initialize: function(url, bounds, options) {
            this._url = url;
            this._bounds = toLatLngBounds(bounds);
            setOptions(this, options);
        },
        onAdd: function() {
            if (!this._image) {
                this._initImage();
                if (this.options.opacity < 1) this._updateOpacity();
            }
            if (this.options.interactive) {
                addClass(this._image, "leaflet-interactive");
                this.addInteractiveTarget(this._image);
            }
            this.getPane().appendChild(this._image);
            this._reset();
        },
        onRemove: function() {
            remove(this._image);
            if (this.options.interactive) this.removeInteractiveTarget(this._image);
        },
        // @method setOpacity(opacity: Number): this
        // Sets the opacity of the overlay.
        setOpacity: function(opacity) {
            this.options.opacity = opacity;
            if (this._image) this._updateOpacity();
            return this;
        },
        setStyle: function(styleOpts) {
            if (styleOpts.opacity) this.setOpacity(styleOpts.opacity);
            return this;
        },
        // @method bringToFront(): this
        // Brings the layer to the top of all overlays.
        bringToFront: function() {
            if (this._map) toFront(this._image);
            return this;
        },
        // @method bringToBack(): this
        // Brings the layer to the bottom of all overlays.
        bringToBack: function() {
            if (this._map) toBack(this._image);
            return this;
        },
        // @method setUrl(url: String): this
        // Changes the URL of the image.
        setUrl: function(url) {
            this._url = url;
            if (this._image) this._image.src = url;
            return this;
        },
        // @method setBounds(bounds: LatLngBounds): this
        // Update the bounds that this ImageOverlay covers
        setBounds: function(bounds) {
            this._bounds = toLatLngBounds(bounds);
            if (this._map) this._reset();
            return this;
        },
        getEvents: function() {
            var events = {
                zoom: this._reset,
                viewreset: this._reset
            };
            if (this._zoomAnimated) events.zoomanim = this._animateZoom;
            return events;
        },
        // @method setZIndex(value: Number): this
        // Changes the [zIndex](#imageoverlay-zindex) of the image overlay.
        setZIndex: function(value) {
            this.options.zIndex = value;
            this._updateZIndex();
            return this;
        },
        // @method getBounds(): LatLngBounds
        // Get the bounds that this ImageOverlay covers
        getBounds: function() {
            return this._bounds;
        },
        // @method getElement(): HTMLElement
        // Returns the instance of [`HTMLImageElement`](https://developer.mozilla.org/docs/Web/API/HTMLImageElement)
        // used by this overlay.
        getElement: function() {
            return this._image;
        },
        _initImage: function() {
            var wasElementSupplied = this._url.tagName === "IMG";
            var img = this._image = wasElementSupplied ? this._url : create$1("img");
            addClass(img, "leaflet-image-layer");
            if (this._zoomAnimated) addClass(img, "leaflet-zoom-animated");
            if (this.options.className) addClass(img, this.options.className);
            img.onselectstart = falseFn;
            img.onmousemove = falseFn;
            // @event load: Event
            // Fired when the ImageOverlay layer has loaded its image
            img.onload = bind(this.fire, this, "load");
            img.onerror = bind(this._overlayOnError, this, "error");
            if (this.options.crossOrigin || this.options.crossOrigin === "") img.crossOrigin = this.options.crossOrigin === true ? "" : this.options.crossOrigin;
            if (this.options.zIndex) this._updateZIndex();
            if (wasElementSupplied) {
                this._url = img.src;
                return;
            }
            img.src = this._url;
            img.alt = this.options.alt;
        },
        _animateZoom: function(e) {
            var scale = this._map.getZoomScale(e.zoom), offset = this._map._latLngBoundsToNewLayerBounds(this._bounds, e.zoom, e.center).min;
            setTransform(this._image, offset, scale);
        },
        _reset: function() {
            var image = this._image, bounds = new Bounds(this._map.latLngToLayerPoint(this._bounds.getNorthWest()), this._map.latLngToLayerPoint(this._bounds.getSouthEast())), size = bounds.getSize();
            setPosition(image, bounds.min);
            image.style.width = size.x + "px";
            image.style.height = size.y + "px";
        },
        _updateOpacity: function() {
            setOpacity(this._image, this.options.opacity);
        },
        _updateZIndex: function() {
            if (this._image && this.options.zIndex !== undefined && this.options.zIndex !== null) this._image.style.zIndex = this.options.zIndex;
        },
        _overlayOnError: function() {
            // @event error: Event
            // Fired when the ImageOverlay layer fails to load its image
            this.fire("error");
            var errorUrl = this.options.errorOverlayUrl;
            if (errorUrl && this._url !== errorUrl) {
                this._url = errorUrl;
                this._image.src = errorUrl;
            }
        },
        // @method getCenter(): LatLng
        // Returns the center of the ImageOverlay.
        getCenter: function() {
            return this._bounds.getCenter();
        }
    });
    // @factory L.imageOverlay(imageUrl: String, bounds: LatLngBounds, options?: ImageOverlay options)
    // Instantiates an image overlay object given the URL of the image and the
    // geographical bounds it is tied to.
    var imageOverlay = function(url, bounds, options) {
        return new ImageOverlay(url, bounds, options);
    };
    /*
   * @class VideoOverlay
   * @aka L.VideoOverlay
   * @inherits ImageOverlay
   *
   * Used to load and display a video player over specific bounds of the map. Extends `ImageOverlay`.
   *
   * A video overlay uses the [`<video>`](https://developer.mozilla.org/docs/Web/HTML/Element/video)
   * HTML5 element.
   *
   * @example
   *
   * ```js
   * var videoUrl = 'https://www.mapbox.com/bites/00188/patricia_nasa.webm',
   * 	videoBounds = [[ 32, -130], [ 13, -100]];
   * L.videoOverlay(videoUrl, videoBounds ).addTo(map);
   * ```
   */ var VideoOverlay = ImageOverlay.extend({
        // @section
        // @aka VideoOverlay options
        options: {
            // @option autoplay: Boolean = true
            // Whether the video starts playing automatically when loaded.
            // On some browsers autoplay will only work with `muted: true`
            autoplay: true,
            // @option loop: Boolean = true
            // Whether the video will loop back to the beginning when played.
            loop: true,
            // @option keepAspectRatio: Boolean = true
            // Whether the video will save aspect ratio after the projection.
            // Relevant for supported browsers. See [browser compatibility](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
            keepAspectRatio: true,
            // @option muted: Boolean = false
            // Whether the video starts on mute when loaded.
            muted: false,
            // @option playsInline: Boolean = true
            // Mobile browsers will play the video right where it is instead of open it up in fullscreen mode.
            playsInline: true
        },
        _initImage: function() {
            var wasElementSupplied = this._url.tagName === "VIDEO";
            var vid = this._image = wasElementSupplied ? this._url : create$1("video");
            addClass(vid, "leaflet-image-layer");
            if (this._zoomAnimated) addClass(vid, "leaflet-zoom-animated");
            if (this.options.className) addClass(vid, this.options.className);
            vid.onselectstart = falseFn;
            vid.onmousemove = falseFn;
            // @event load: Event
            // Fired when the video has finished loading the first frame
            vid.onloadeddata = bind(this.fire, this, "load");
            if (wasElementSupplied) {
                var sourceElements = vid.getElementsByTagName("source");
                var sources = [];
                for(var j = 0; j < sourceElements.length; j++)sources.push(sourceElements[j].src);
                this._url = sourceElements.length > 0 ? sources : [
                    vid.src
                ];
                return;
            }
            if (!isArray(this._url)) this._url = [
                this._url
            ];
            if (!this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(vid.style, "objectFit")) vid.style["objectFit"] = "fill";
            vid.autoplay = !!this.options.autoplay;
            vid.loop = !!this.options.loop;
            vid.muted = !!this.options.muted;
            vid.playsInline = !!this.options.playsInline;
            for(var i = 0; i < this._url.length; i++){
                var source = create$1("source");
                source.src = this._url[i];
                vid.appendChild(source);
            }
        }
    });
    // @factory L.videoOverlay(video: String|Array|HTMLVideoElement, bounds: LatLngBounds, options?: VideoOverlay options)
    // Instantiates an image overlay object given the URL of the video (or array of URLs, or even a video element) and the
    // geographical bounds it is tied to.
    function videoOverlay(video, bounds, options) {
        return new VideoOverlay(video, bounds, options);
    }
    /*
   * @class SVGOverlay
   * @aka L.SVGOverlay
   * @inherits ImageOverlay
   *
   * Used to load, display and provide DOM access to an SVG file over specific bounds of the map. Extends `ImageOverlay`.
   *
   * An SVG overlay uses the [`<svg>`](https://developer.mozilla.org/docs/Web/SVG/Element/svg) element.
   *
   * @example
   *
   * ```js
   * var svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
   * svgElement.setAttribute('xmlns', "http://www.w3.org/2000/svg");
   * svgElement.setAttribute('viewBox', "0 0 200 200");
   * svgElement.innerHTML = '<rect width="200" height="200"/><rect x="75" y="23" width="50" height="50" style="fill:red"/><rect x="75" y="123" width="50" height="50" style="fill:#0013ff"/>';
   * var svgElementBounds = [ [ 32, -130 ], [ 13, -100 ] ];
   * L.svgOverlay(svgElement, svgElementBounds).addTo(map);
   * ```
   */ var SVGOverlay = ImageOverlay.extend({
        _initImage: function() {
            var el = this._image = this._url;
            addClass(el, "leaflet-image-layer");
            if (this._zoomAnimated) addClass(el, "leaflet-zoom-animated");
            if (this.options.className) addClass(el, this.options.className);
            el.onselectstart = falseFn;
            el.onmousemove = falseFn;
        }
    });
    // @factory L.svgOverlay(svg: String|SVGElement, bounds: LatLngBounds, options?: SVGOverlay options)
    // Instantiates an image overlay object given an SVG element and the geographical bounds it is tied to.
    // A viewBox attribute is required on the SVG element to zoom in and out properly.
    function svgOverlay(el, bounds, options) {
        return new SVGOverlay(el, bounds, options);
    }
    /*
   * @class DivOverlay
   * @inherits Interactive layer
   * @aka L.DivOverlay
   * Base model for L.Popup and L.Tooltip. Inherit from it for custom overlays like plugins.
   */ // @namespace DivOverlay
    var DivOverlay = Layer.extend({
        // @section
        // @aka DivOverlay options
        options: {
            // @option interactive: Boolean = false
            // If true, the popup/tooltip will listen to the mouse events.
            interactive: false,
            // @option offset: Point = Point(0, 0)
            // The offset of the overlay position.
            offset: [
                0,
                0
            ],
            // @option className: String = ''
            // A custom CSS class name to assign to the overlay.
            className: "",
            // @option pane: String = undefined
            // `Map pane` where the overlay will be added.
            pane: undefined,
            // @option content: String|HTMLElement|Function = ''
            // Sets the HTML content of the overlay while initializing. If a function is passed the source layer will be
            // passed to the function. The function should return a `String` or `HTMLElement` to be used in the overlay.
            content: ""
        },
        initialize: function(options, source) {
            if (options && (options instanceof LatLng || isArray(options))) {
                this._latlng = toLatLng(options);
                setOptions(this, source);
            } else {
                setOptions(this, options);
                this._source = source;
            }
            if (this.options.content) this._content = this.options.content;
        },
        // @method openOn(map: Map): this
        // Adds the overlay to the map.
        // Alternative to `map.openPopup(popup)`/`.openTooltip(tooltip)`.
        openOn: function(map) {
            map = arguments.length ? map : this._source._map; // experimental, not the part of public api
            if (!map.hasLayer(this)) map.addLayer(this);
            return this;
        },
        // @method close(): this
        // Closes the overlay.
        // Alternative to `map.closePopup(popup)`/`.closeTooltip(tooltip)`
        // and `layer.closePopup()`/`.closeTooltip()`.
        close: function() {
            if (this._map) this._map.removeLayer(this);
            return this;
        },
        // @method toggle(layer?: Layer): this
        // Opens or closes the overlay bound to layer depending on its current state.
        // Argument may be omitted only for overlay bound to layer.
        // Alternative to `layer.togglePopup()`/`.toggleTooltip()`.
        toggle: function(layer) {
            if (this._map) this.close();
            else {
                if (arguments.length) this._source = layer;
                else layer = this._source;
                this._prepareOpen();
                // open the overlay on the map
                this.openOn(layer._map);
            }
            return this;
        },
        onAdd: function(map) {
            this._zoomAnimated = map._zoomAnimated;
            if (!this._container) this._initLayout();
            if (map._fadeAnimated) setOpacity(this._container, 0);
            clearTimeout(this._removeTimeout);
            this.getPane().appendChild(this._container);
            this.update();
            if (map._fadeAnimated) setOpacity(this._container, 1);
            this.bringToFront();
            if (this.options.interactive) {
                addClass(this._container, "leaflet-interactive");
                this.addInteractiveTarget(this._container);
            }
        },
        onRemove: function(map) {
            if (map._fadeAnimated) {
                setOpacity(this._container, 0);
                this._removeTimeout = setTimeout(bind(remove, undefined, this._container), 200);
            } else remove(this._container);
            if (this.options.interactive) {
                removeClass(this._container, "leaflet-interactive");
                this.removeInteractiveTarget(this._container);
            }
        },
        // @namespace DivOverlay
        // @method getLatLng: LatLng
        // Returns the geographical point of the overlay.
        getLatLng: function() {
            return this._latlng;
        },
        // @method setLatLng(latlng: LatLng): this
        // Sets the geographical point where the overlay will open.
        setLatLng: function(latlng) {
            this._latlng = toLatLng(latlng);
            if (this._map) {
                this._updatePosition();
                this._adjustPan();
            }
            return this;
        },
        // @method getContent: String|HTMLElement
        // Returns the content of the overlay.
        getContent: function() {
            return this._content;
        },
        // @method setContent(htmlContent: String|HTMLElement|Function): this
        // Sets the HTML content of the overlay. If a function is passed the source layer will be passed to the function.
        // The function should return a `String` or `HTMLElement` to be used in the overlay.
        setContent: function(content) {
            this._content = content;
            this.update();
            return this;
        },
        // @method getElement: String|HTMLElement
        // Returns the HTML container of the overlay.
        getElement: function() {
            return this._container;
        },
        // @method update: null
        // Updates the overlay content, layout and position. Useful for updating the overlay after something inside changed, e.g. image loaded.
        update: function() {
            if (!this._map) return;
            this._container.style.visibility = "hidden";
            this._updateContent();
            this._updateLayout();
            this._updatePosition();
            this._container.style.visibility = "";
            this._adjustPan();
        },
        getEvents: function() {
            var events = {
                zoom: this._updatePosition,
                viewreset: this._updatePosition
            };
            if (this._zoomAnimated) events.zoomanim = this._animateZoom;
            return events;
        },
        // @method isOpen: Boolean
        // Returns `true` when the overlay is visible on the map.
        isOpen: function() {
            return !!this._map && this._map.hasLayer(this);
        },
        // @method bringToFront: this
        // Brings this overlay in front of other overlays (in the same map pane).
        bringToFront: function() {
            if (this._map) toFront(this._container);
            return this;
        },
        // @method bringToBack: this
        // Brings this overlay to the back of other overlays (in the same map pane).
        bringToBack: function() {
            if (this._map) toBack(this._container);
            return this;
        },
        // prepare bound overlay to open: update latlng pos / content source (for FeatureGroup)
        _prepareOpen: function(latlng) {
            var source = this._source;
            if (!source._map) return false;
            if (source instanceof FeatureGroup) {
                source = null;
                var layers = this._source._layers;
                for(var id in layers)if (layers[id]._map) {
                    source = layers[id];
                    break;
                }
                if (!source) return false;
                 // Unable to get source layer.
                // set overlay source to this layer
                this._source = source;
            }
            if (!latlng) {
                if (source.getCenter) latlng = source.getCenter();
                else if (source.getLatLng) latlng = source.getLatLng();
                else if (source.getBounds) latlng = source.getBounds().getCenter();
                else throw new Error("Unable to get source layer LatLng.");
            }
            this.setLatLng(latlng);
            if (this._map) // update the overlay (content, layout, etc...)
            this.update();
            return true;
        },
        _updateContent: function() {
            if (!this._content) return;
            var node = this._contentNode;
            var content = typeof this._content === "function" ? this._content(this._source || this) : this._content;
            if (typeof content === "string") node.innerHTML = content;
            else {
                while(node.hasChildNodes())node.removeChild(node.firstChild);
                node.appendChild(content);
            }
            // @namespace DivOverlay
            // @section DivOverlay events
            // @event contentupdate: Event
            // Fired when the content of the overlay is updated
            this.fire("contentupdate");
        },
        _updatePosition: function() {
            if (!this._map) return;
            var pos = this._map.latLngToLayerPoint(this._latlng), offset = toPoint(this.options.offset), anchor = this._getAnchor();
            if (this._zoomAnimated) setPosition(this._container, pos.add(anchor));
            else offset = offset.add(pos).add(anchor);
            var bottom = this._containerBottom = -offset.y, left = this._containerLeft = -Math.round(this._containerWidth / 2) + offset.x;
            // bottom position the overlay in case the height of the overlay changes (images loading etc)
            this._container.style.bottom = bottom + "px";
            this._container.style.left = left + "px";
        },
        _getAnchor: function() {
            return [
                0,
                0
            ];
        }
    });
    Map.include({
        _initOverlay: function(OverlayClass, content, latlng, options) {
            var overlay = content;
            if (!(overlay instanceof OverlayClass)) overlay = new OverlayClass(options).setContent(content);
            if (latlng) overlay.setLatLng(latlng);
            return overlay;
        }
    });
    Layer.include({
        _initOverlay: function(OverlayClass, old, content, options) {
            var overlay = content;
            if (overlay instanceof OverlayClass) {
                setOptions(overlay, options);
                overlay._source = this;
            } else {
                overlay = old && !options ? old : new OverlayClass(options, this);
                overlay.setContent(content);
            }
            return overlay;
        }
    });
    /*
   * @class Popup
   * @inherits DivOverlay
   * @aka L.Popup
   * Used to open popups in certain places of the map. Use [Map.openPopup](#map-openpopup) to
   * open popups while making sure that only one popup is open at one time
   * (recommended for usability), or use [Map.addLayer](#map-addlayer) to open as many as you want.
   *
   * @example
   *
   * If you want to just bind a popup to marker click and then open it, it's really easy:
   *
   * ```js
   * marker.bindPopup(popupContent).openPopup();
   * ```
   * Path overlays like polylines also have a `bindPopup` method.
   *
   * A popup can be also standalone:
   *
   * ```js
   * var popup = L.popup()
   * 	.setLatLng(latlng)
   * 	.setContent('<p>Hello world!<br />This is a nice popup.</p>')
   * 	.openOn(map);
   * ```
   * or
   * ```js
   * var popup = L.popup(latlng, {content: '<p>Hello world!<br />This is a nice popup.</p>')
   * 	.openOn(map);
   * ```
   */ // @namespace Popup
    var Popup = DivOverlay.extend({
        // @section
        // @aka Popup options
        options: {
            // @option pane: String = 'popupPane'
            // `Map pane` where the popup will be added.
            pane: "popupPane",
            // @option offset: Point = Point(0, 7)
            // The offset of the popup position.
            offset: [
                0,
                7
            ],
            // @option maxWidth: Number = 300
            // Max width of the popup, in pixels.
            maxWidth: 300,
            // @option minWidth: Number = 50
            // Min width of the popup, in pixels.
            minWidth: 50,
            // @option maxHeight: Number = null
            // If set, creates a scrollable container of the given height
            // inside a popup if its content exceeds it.
            // The scrollable container can be styled using the
            // `leaflet-popup-scrolled` CSS class selector.
            maxHeight: null,
            // @option autoPan: Boolean = true
            // Set it to `false` if you don't want the map to do panning animation
            // to fit the opened popup.
            autoPan: true,
            // @option autoPanPaddingTopLeft: Point = null
            // The margin between the popup and the top left corner of the map
            // view after autopanning was performed.
            autoPanPaddingTopLeft: null,
            // @option autoPanPaddingBottomRight: Point = null
            // The margin between the popup and the bottom right corner of the map
            // view after autopanning was performed.
            autoPanPaddingBottomRight: null,
            // @option autoPanPadding: Point = Point(5, 5)
            // Equivalent of setting both top left and bottom right autopan padding to the same value.
            autoPanPadding: [
                5,
                5
            ],
            // @option keepInView: Boolean = false
            // Set it to `true` if you want to prevent users from panning the popup
            // off of the screen while it is open.
            keepInView: false,
            // @option closeButton: Boolean = true
            // Controls the presence of a close button in the popup.
            closeButton: true,
            // @option autoClose: Boolean = true
            // Set it to `false` if you want to override the default behavior of
            // the popup closing when another popup is opened.
            autoClose: true,
            // @option closeOnEscapeKey: Boolean = true
            // Set it to `false` if you want to override the default behavior of
            // the ESC key for closing of the popup.
            closeOnEscapeKey: true,
            // @option closeOnClick: Boolean = *
            // Set it if you want to override the default behavior of the popup closing when user clicks
            // on the map. Defaults to the map's [`closePopupOnClick`](#map-closepopuponclick) option.
            // @option className: String = ''
            // A custom CSS class name to assign to the popup.
            className: ""
        },
        // @namespace Popup
        // @method openOn(map: Map): this
        // Alternative to `map.openPopup(popup)`.
        // Adds the popup to the map and closes the previous one.
        openOn: function(map) {
            map = arguments.length ? map : this._source._map; // experimental, not the part of public api
            if (!map.hasLayer(this) && map._popup && map._popup.options.autoClose) map.removeLayer(map._popup);
            map._popup = this;
            return DivOverlay.prototype.openOn.call(this, map);
        },
        onAdd: function(map) {
            DivOverlay.prototype.onAdd.call(this, map);
            // @namespace Map
            // @section Popup events
            // @event popupopen: PopupEvent
            // Fired when a popup is opened in the map
            map.fire("popupopen", {
                popup: this
            });
            if (this._source) {
                // @namespace Layer
                // @section Popup events
                // @event popupopen: PopupEvent
                // Fired when a popup bound to this layer is opened
                this._source.fire("popupopen", {
                    popup: this
                }, true);
                // For non-path layers, we toggle the popup when clicking
                // again the layer, so prevent the map to reopen it.
                if (!(this._source instanceof Path)) this._source.on("preclick", stopPropagation);
            }
        },
        onRemove: function(map) {
            DivOverlay.prototype.onRemove.call(this, map);
            // @namespace Map
            // @section Popup events
            // @event popupclose: PopupEvent
            // Fired when a popup in the map is closed
            map.fire("popupclose", {
                popup: this
            });
            if (this._source) {
                // @namespace Layer
                // @section Popup events
                // @event popupclose: PopupEvent
                // Fired when a popup bound to this layer is closed
                this._source.fire("popupclose", {
                    popup: this
                }, true);
                if (!(this._source instanceof Path)) this._source.off("preclick", stopPropagation);
            }
        },
        getEvents: function() {
            var events = DivOverlay.prototype.getEvents.call(this);
            if (this.options.closeOnClick !== undefined ? this.options.closeOnClick : this._map.options.closePopupOnClick) events.preclick = this.close;
            if (this.options.keepInView) events.moveend = this._adjustPan;
            return events;
        },
        _initLayout: function() {
            var prefix = "leaflet-popup", container = this._container = create$1("div", prefix + " " + (this.options.className || "") + " leaflet-zoom-animated");
            var wrapper = this._wrapper = create$1("div", prefix + "-content-wrapper", container);
            this._contentNode = create$1("div", prefix + "-content", wrapper);
            disableClickPropagation(container);
            disableScrollPropagation(this._contentNode);
            on(container, "contextmenu", stopPropagation);
            this._tipContainer = create$1("div", prefix + "-tip-container", container);
            this._tip = create$1("div", prefix + "-tip", this._tipContainer);
            if (this.options.closeButton) {
                var closeButton = this._closeButton = create$1("a", prefix + "-close-button", container);
                closeButton.setAttribute("role", "button"); // overrides the implicit role=link of <a> elements #7399
                closeButton.setAttribute("aria-label", "Close popup");
                closeButton.href = "#close";
                closeButton.innerHTML = '<span aria-hidden="true">&#215;</span>';
                on(closeButton, "click", function(ev) {
                    preventDefault(ev);
                    this.close();
                }, this);
            }
        },
        _updateLayout: function() {
            var container = this._contentNode, style = container.style;
            style.width = "";
            style.whiteSpace = "nowrap";
            var width = container.offsetWidth;
            width = Math.min(width, this.options.maxWidth);
            width = Math.max(width, this.options.minWidth);
            style.width = width + 1 + "px";
            style.whiteSpace = "";
            style.height = "";
            var height = container.offsetHeight, maxHeight = this.options.maxHeight, scrolledClass = "leaflet-popup-scrolled";
            if (maxHeight && height > maxHeight) {
                style.height = maxHeight + "px";
                addClass(container, scrolledClass);
            } else removeClass(container, scrolledClass);
            this._containerWidth = this._container.offsetWidth;
        },
        _animateZoom: function(e) {
            var pos = this._map._latLngToNewLayerPoint(this._latlng, e.zoom, e.center), anchor = this._getAnchor();
            setPosition(this._container, pos.add(anchor));
        },
        _adjustPan: function() {
            if (!this.options.autoPan) return;
            if (this._map._panAnim) this._map._panAnim.stop();
            // We can endlessly recurse if keepInView is set and the view resets.
            // Let's guard against that by exiting early if we're responding to our own autopan.
            if (this._autopanning) {
                this._autopanning = false;
                return;
            }
            var map = this._map, marginBottom = parseInt(getStyle(this._container, "marginBottom"), 10) || 0, containerHeight = this._container.offsetHeight + marginBottom, containerWidth = this._containerWidth, layerPos = new Point(this._containerLeft, -containerHeight - this._containerBottom);
            layerPos._add(getPosition(this._container));
            var containerPos = map.layerPointToContainerPoint(layerPos), padding = toPoint(this.options.autoPanPadding), paddingTL = toPoint(this.options.autoPanPaddingTopLeft || padding), paddingBR = toPoint(this.options.autoPanPaddingBottomRight || padding), size = map.getSize(), dx = 0, dy = 0;
            if (containerPos.x + containerWidth + paddingBR.x > size.x) dx = containerPos.x + containerWidth - size.x + paddingBR.x;
            if (containerPos.x - dx - paddingTL.x < 0) dx = containerPos.x - paddingTL.x;
            if (containerPos.y + containerHeight + paddingBR.y > size.y) dy = containerPos.y + containerHeight - size.y + paddingBR.y;
            if (containerPos.y - dy - paddingTL.y < 0) dy = containerPos.y - paddingTL.y;
            // @namespace Map
            // @section Popup events
            // @event autopanstart: Event
            // Fired when the map starts autopanning when opening a popup.
            if (dx || dy) {
                // Track that we're autopanning, as this function will be re-ran on moveend
                if (this.options.keepInView) this._autopanning = true;
                map.fire("autopanstart").panBy([
                    dx,
                    dy
                ]);
            }
        },
        _getAnchor: function() {
            // Where should we anchor the popup on the source layer?
            return toPoint(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [
                0,
                0
            ]);
        }
    });
    // @namespace Popup
    // @factory L.popup(options?: Popup options, source?: Layer)
    // Instantiates a `Popup` object given an optional `options` object that describes its appearance and location and an optional `source` object that is used to tag the popup with a reference to the Layer to which it refers.
    // @alternative
    // @factory L.popup(latlng: LatLng, options?: Popup options)
    // Instantiates a `Popup` object given `latlng` where the popup will open and an optional `options` object that describes its appearance and location.
    var popup = function(options, source) {
        return new Popup(options, source);
    };
    /* @namespace Map
   * @section Interaction Options
   * @option closePopupOnClick: Boolean = true
   * Set it to `false` if you don't want popups to close when user clicks the map.
   */ Map.mergeOptions({
        closePopupOnClick: true
    });
    // @namespace Map
    // @section Methods for Layers and Controls
    Map.include({
        // @method openPopup(popup: Popup): this
        // Opens the specified popup while closing the previously opened (to make sure only one is opened at one time for usability).
        // @alternative
        // @method openPopup(content: String|HTMLElement, latlng: LatLng, options?: Popup options): this
        // Creates a popup with the specified content and options and opens it in the given point on a map.
        openPopup: function(popup, latlng, options) {
            this._initOverlay(Popup, popup, latlng, options).openOn(this);
            return this;
        },
        // @method closePopup(popup?: Popup): this
        // Closes the popup previously opened with [openPopup](#map-openpopup) (or the given one).
        closePopup: function(popup) {
            popup = arguments.length ? popup : this._popup;
            if (popup) popup.close();
            return this;
        }
    });
    /*
   * @namespace Layer
   * @section Popup methods example
   *
   * All layers share a set of methods convenient for binding popups to it.
   *
   * ```js
   * var layer = L.Polygon(latlngs).bindPopup('Hi There!').addTo(map);
   * layer.openPopup();
   * layer.closePopup();
   * ```
   *
   * Popups will also be automatically opened when the layer is clicked on and closed when the layer is removed from the map or another popup is opened.
   */ // @section Popup methods
    Layer.include({
        // @method bindPopup(content: String|HTMLElement|Function|Popup, options?: Popup options): this
        // Binds a popup to the layer with the passed `content` and sets up the
        // necessary event listeners. If a `Function` is passed it will receive
        // the layer as the first argument and should return a `String` or `HTMLElement`.
        bindPopup: function(content, options) {
            this._popup = this._initOverlay(Popup, this._popup, content, options);
            if (!this._popupHandlersAdded) {
                this.on({
                    click: this._openPopup,
                    keypress: this._onKeyPress,
                    remove: this.closePopup,
                    move: this._movePopup
                });
                this._popupHandlersAdded = true;
            }
            return this;
        },
        // @method unbindPopup(): this
        // Removes the popup previously bound with `bindPopup`.
        unbindPopup: function() {
            if (this._popup) {
                this.off({
                    click: this._openPopup,
                    keypress: this._onKeyPress,
                    remove: this.closePopup,
                    move: this._movePopup
                });
                this._popupHandlersAdded = false;
                this._popup = null;
            }
            return this;
        },
        // @method openPopup(latlng?: LatLng): this
        // Opens the bound popup at the specified `latlng` or at the default popup anchor if no `latlng` is passed.
        openPopup: function(latlng) {
            if (this._popup) {
                if (!(this instanceof FeatureGroup)) this._popup._source = this;
                if (this._popup._prepareOpen(latlng || this._latlng)) // open the popup on the map
                this._popup.openOn(this._map);
            }
            return this;
        },
        // @method closePopup(): this
        // Closes the popup bound to this layer if it is open.
        closePopup: function() {
            if (this._popup) this._popup.close();
            return this;
        },
        // @method togglePopup(): this
        // Opens or closes the popup bound to this layer depending on its current state.
        togglePopup: function() {
            if (this._popup) this._popup.toggle(this);
            return this;
        },
        // @method isPopupOpen(): boolean
        // Returns `true` if the popup bound to this layer is currently open.
        isPopupOpen: function() {
            return this._popup ? this._popup.isOpen() : false;
        },
        // @method setPopupContent(content: String|HTMLElement|Popup): this
        // Sets the content of the popup bound to this layer.
        setPopupContent: function(content) {
            if (this._popup) this._popup.setContent(content);
            return this;
        },
        // @method getPopup(): Popup
        // Returns the popup bound to this layer.
        getPopup: function() {
            return this._popup;
        },
        _openPopup: function(e) {
            if (!this._popup || !this._map) return;
            // prevent map click
            stop(e);
            var target = e.layer || e.target;
            if (this._popup._source === target && !(target instanceof Path)) {
                // treat it like a marker and figure out
                // if we should toggle it open/closed
                if (this._map.hasLayer(this._popup)) this.closePopup();
                else this.openPopup(e.latlng);
                return;
            }
            this._popup._source = target;
            this.openPopup(e.latlng);
        },
        _movePopup: function(e) {
            this._popup.setLatLng(e.latlng);
        },
        _onKeyPress: function(e) {
            if (e.originalEvent.keyCode === 13) this._openPopup(e);
        }
    });
    /*
   * @class Tooltip
   * @inherits DivOverlay
   * @aka L.Tooltip
   * Used to display small texts on top of map layers.
   *
   * @example
   * If you want to just bind a tooltip to marker:
   *
   * ```js
   * marker.bindTooltip("my tooltip text").openTooltip();
   * ```
   * Path overlays like polylines also have a `bindTooltip` method.
   *
   * A tooltip can be also standalone:
   *
   * ```js
   * var tooltip = L.tooltip()
   * 	.setLatLng(latlng)
   * 	.setContent('Hello world!<br />This is a nice tooltip.')
   * 	.addTo(map);
   * ```
   * or
   * ```js
   * var tooltip = L.tooltip(latlng, {content: 'Hello world!<br />This is a nice tooltip.'})
   * 	.addTo(map);
   * ```
   *
   *
   * Note about tooltip offset. Leaflet takes two options in consideration
   * for computing tooltip offsetting:
   * - the `offset` Tooltip option: it defaults to [0, 0], and it's specific to one tooltip.
   *   Add a positive x offset to move the tooltip to the right, and a positive y offset to
   *   move it to the bottom. Negatives will move to the left and top.
   * - the `tooltipAnchor` Icon option: this will only be considered for Marker. You
   *   should adapt this value if you use a custom icon.
   */ // @namespace Tooltip
    var Tooltip = DivOverlay.extend({
        // @section
        // @aka Tooltip options
        options: {
            // @option pane: String = 'tooltipPane'
            // `Map pane` where the tooltip will be added.
            pane: "tooltipPane",
            // @option offset: Point = Point(0, 0)
            // Optional offset of the tooltip position.
            offset: [
                0,
                0
            ],
            // @option direction: String = 'auto'
            // Direction where to open the tooltip. Possible values are: `right`, `left`,
            // `top`, `bottom`, `center`, `auto`.
            // `auto` will dynamically switch between `right` and `left` according to the tooltip
            // position on the map.
            direction: "auto",
            // @option permanent: Boolean = false
            // Whether to open the tooltip permanently or only on mouseover.
            permanent: false,
            // @option sticky: Boolean = false
            // If true, the tooltip will follow the mouse instead of being fixed at the feature center.
            sticky: false,
            // @option opacity: Number = 0.9
            // Tooltip container opacity.
            opacity: 0.9
        },
        onAdd: function(map) {
            DivOverlay.prototype.onAdd.call(this, map);
            this.setOpacity(this.options.opacity);
            // @namespace Map
            // @section Tooltip events
            // @event tooltipopen: TooltipEvent
            // Fired when a tooltip is opened in the map.
            map.fire("tooltipopen", {
                tooltip: this
            });
            if (this._source) {
                this.addEventParent(this._source);
                // @namespace Layer
                // @section Tooltip events
                // @event tooltipopen: TooltipEvent
                // Fired when a tooltip bound to this layer is opened.
                this._source.fire("tooltipopen", {
                    tooltip: this
                }, true);
            }
        },
        onRemove: function(map) {
            DivOverlay.prototype.onRemove.call(this, map);
            // @namespace Map
            // @section Tooltip events
            // @event tooltipclose: TooltipEvent
            // Fired when a tooltip in the map is closed.
            map.fire("tooltipclose", {
                tooltip: this
            });
            if (this._source) {
                this.removeEventParent(this._source);
                // @namespace Layer
                // @section Tooltip events
                // @event tooltipclose: TooltipEvent
                // Fired when a tooltip bound to this layer is closed.
                this._source.fire("tooltipclose", {
                    tooltip: this
                }, true);
            }
        },
        getEvents: function() {
            var events = DivOverlay.prototype.getEvents.call(this);
            if (!this.options.permanent) events.preclick = this.close;
            return events;
        },
        _initLayout: function() {
            var prefix = "leaflet-tooltip", className = prefix + " " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
            this._contentNode = this._container = create$1("div", className);
            this._container.setAttribute("role", "tooltip");
            this._container.setAttribute("id", "leaflet-tooltip-" + stamp(this));
        },
        _updateLayout: function() {},
        _adjustPan: function() {},
        _setPosition: function(pos) {
            var subX, subY, map = this._map, container = this._container, centerPoint = map.latLngToContainerPoint(map.getCenter()), tooltipPoint = map.layerPointToContainerPoint(pos), direction = this.options.direction, tooltipWidth = container.offsetWidth, tooltipHeight = container.offsetHeight, offset = toPoint(this.options.offset), anchor = this._getAnchor();
            if (direction === "top") {
                subX = tooltipWidth / 2;
                subY = tooltipHeight;
            } else if (direction === "bottom") {
                subX = tooltipWidth / 2;
                subY = 0;
            } else if (direction === "center") {
                subX = tooltipWidth / 2;
                subY = tooltipHeight / 2;
            } else if (direction === "right") {
                subX = 0;
                subY = tooltipHeight / 2;
            } else if (direction === "left") {
                subX = tooltipWidth;
                subY = tooltipHeight / 2;
            } else if (tooltipPoint.x < centerPoint.x) {
                direction = "right";
                subX = 0;
                subY = tooltipHeight / 2;
            } else {
                direction = "left";
                subX = tooltipWidth + (offset.x + anchor.x) * 2;
                subY = tooltipHeight / 2;
            }
            pos = pos.subtract(toPoint(subX, subY, true)).add(offset).add(anchor);
            removeClass(container, "leaflet-tooltip-right");
            removeClass(container, "leaflet-tooltip-left");
            removeClass(container, "leaflet-tooltip-top");
            removeClass(container, "leaflet-tooltip-bottom");
            addClass(container, "leaflet-tooltip-" + direction);
            setPosition(container, pos);
        },
        _updatePosition: function() {
            var pos = this._map.latLngToLayerPoint(this._latlng);
            this._setPosition(pos);
        },
        setOpacity: function(opacity) {
            this.options.opacity = opacity;
            if (this._container) setOpacity(this._container, opacity);
        },
        _animateZoom: function(e) {
            var pos = this._map._latLngToNewLayerPoint(this._latlng, e.zoom, e.center);
            this._setPosition(pos);
        },
        _getAnchor: function() {
            // Where should we anchor the tooltip on the source layer?
            return toPoint(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [
                0,
                0
            ]);
        }
    });
    // @namespace Tooltip
    // @factory L.tooltip(options?: Tooltip options, source?: Layer)
    // Instantiates a `Tooltip` object given an optional `options` object that describes its appearance and location and an optional `source` object that is used to tag the tooltip with a reference to the Layer to which it refers.
    // @alternative
    // @factory L.tooltip(latlng: LatLng, options?: Tooltip options)
    // Instantiates a `Tooltip` object given `latlng` where the tooltip will open and an optional `options` object that describes its appearance and location.
    var tooltip = function(options, source) {
        return new Tooltip(options, source);
    };
    // @namespace Map
    // @section Methods for Layers and Controls
    Map.include({
        // @method openTooltip(tooltip: Tooltip): this
        // Opens the specified tooltip.
        // @alternative
        // @method openTooltip(content: String|HTMLElement, latlng: LatLng, options?: Tooltip options): this
        // Creates a tooltip with the specified content and options and open it.
        openTooltip: function(tooltip, latlng, options) {
            this._initOverlay(Tooltip, tooltip, latlng, options).openOn(this);
            return this;
        },
        // @method closeTooltip(tooltip: Tooltip): this
        // Closes the tooltip given as parameter.
        closeTooltip: function(tooltip) {
            tooltip.close();
            return this;
        }
    });
    /*
   * @namespace Layer
   * @section Tooltip methods example
   *
   * All layers share a set of methods convenient for binding tooltips to it.
   *
   * ```js
   * var layer = L.Polygon(latlngs).bindTooltip('Hi There!').addTo(map);
   * layer.openTooltip();
   * layer.closeTooltip();
   * ```
   */ // @section Tooltip methods
    Layer.include({
        // @method bindTooltip(content: String|HTMLElement|Function|Tooltip, options?: Tooltip options): this
        // Binds a tooltip to the layer with the passed `content` and sets up the
        // necessary event listeners. If a `Function` is passed it will receive
        // the layer as the first argument and should return a `String` or `HTMLElement`.
        bindTooltip: function(content, options) {
            if (this._tooltip && this.isTooltipOpen()) this.unbindTooltip();
            this._tooltip = this._initOverlay(Tooltip, this._tooltip, content, options);
            this._initTooltipInteractions();
            if (this._tooltip.options.permanent && this._map && this._map.hasLayer(this)) this.openTooltip();
            return this;
        },
        // @method unbindTooltip(): this
        // Removes the tooltip previously bound with `bindTooltip`.
        unbindTooltip: function() {
            if (this._tooltip) {
                this._initTooltipInteractions(true);
                this.closeTooltip();
                this._tooltip = null;
            }
            return this;
        },
        _initTooltipInteractions: function(remove) {
            if (!remove && this._tooltipHandlersAdded) return;
            var onOff = remove ? "off" : "on", events = {
                remove: this.closeTooltip,
                move: this._moveTooltip
            };
            if (!this._tooltip.options.permanent) {
                events.mouseover = this._openTooltip;
                events.mouseout = this.closeTooltip;
                events.click = this._openTooltip;
                if (this._map) this._addFocusListeners();
                else events.add = this._addFocusListeners;
            } else events.add = this._openTooltip;
            if (this._tooltip.options.sticky) events.mousemove = this._moveTooltip;
            this[onOff](events);
            this._tooltipHandlersAdded = !remove;
        },
        // @method openTooltip(latlng?: LatLng): this
        // Opens the bound tooltip at the specified `latlng` or at the default tooltip anchor if no `latlng` is passed.
        openTooltip: function(latlng) {
            if (this._tooltip) {
                if (!(this instanceof FeatureGroup)) this._tooltip._source = this;
                if (this._tooltip._prepareOpen(latlng)) {
                    // open the tooltip on the map
                    this._tooltip.openOn(this._map);
                    if (this.getElement) this._setAriaDescribedByOnLayer(this);
                    else if (this.eachLayer) this.eachLayer(this._setAriaDescribedByOnLayer, this);
                }
            }
            return this;
        },
        // @method closeTooltip(): this
        // Closes the tooltip bound to this layer if it is open.
        closeTooltip: function() {
            if (this._tooltip) return this._tooltip.close();
        },
        // @method toggleTooltip(): this
        // Opens or closes the tooltip bound to this layer depending on its current state.
        toggleTooltip: function() {
            if (this._tooltip) this._tooltip.toggle(this);
            return this;
        },
        // @method isTooltipOpen(): boolean
        // Returns `true` if the tooltip bound to this layer is currently open.
        isTooltipOpen: function() {
            return this._tooltip.isOpen();
        },
        // @method setTooltipContent(content: String|HTMLElement|Tooltip): this
        // Sets the content of the tooltip bound to this layer.
        setTooltipContent: function(content) {
            if (this._tooltip) this._tooltip.setContent(content);
            return this;
        },
        // @method getTooltip(): Tooltip
        // Returns the tooltip bound to this layer.
        getTooltip: function() {
            return this._tooltip;
        },
        _addFocusListeners: function() {
            if (this.getElement) this._addFocusListenersOnLayer(this);
            else if (this.eachLayer) this.eachLayer(this._addFocusListenersOnLayer, this);
        },
        _addFocusListenersOnLayer: function(layer) {
            var el = typeof layer.getElement === "function" && layer.getElement();
            if (el) {
                on(el, "focus", function() {
                    this._tooltip._source = layer;
                    this.openTooltip();
                }, this);
                on(el, "blur", this.closeTooltip, this);
            }
        },
        _setAriaDescribedByOnLayer: function(layer) {
            var el = typeof layer.getElement === "function" && layer.getElement();
            if (el) el.setAttribute("aria-describedby", this._tooltip._container.id);
        },
        _openTooltip: function(e) {
            if (!this._tooltip || !this._map) return;
            // If the map is moving, we will show the tooltip after it's done.
            if (this._map.dragging && this._map.dragging.moving() && !this._openOnceFlag) {
                this._openOnceFlag = true;
                var that = this;
                this._map.once("moveend", function() {
                    that._openOnceFlag = false;
                    that._openTooltip(e);
                });
                return;
            }
            this._tooltip._source = e.layer || e.target;
            this.openTooltip(this._tooltip.options.sticky ? e.latlng : undefined);
        },
        _moveTooltip: function(e) {
            var latlng = e.latlng, containerPoint, layerPoint;
            if (this._tooltip.options.sticky && e.originalEvent) {
                containerPoint = this._map.mouseEventToContainerPoint(e.originalEvent);
                layerPoint = this._map.containerPointToLayerPoint(containerPoint);
                latlng = this._map.layerPointToLatLng(layerPoint);
            }
            this._tooltip.setLatLng(latlng);
        }
    });
    /*
   * @class DivIcon
   * @aka L.DivIcon
   * @inherits Icon
   *
   * Represents a lightweight icon for markers that uses a simple `<div>`
   * element instead of an image. Inherits from `Icon` but ignores the `iconUrl` and shadow options.
   *
   * @example
   * ```js
   * var myIcon = L.divIcon({className: 'my-div-icon'});
   * // you can set .my-div-icon styles in CSS
   *
   * L.marker([50.505, 30.57], {icon: myIcon}).addTo(map);
   * ```
   *
   * By default, it has a 'leaflet-div-icon' CSS class and is styled as a little white square with a shadow.
   */ var DivIcon = Icon.extend({
        options: {
            // @section
            // @aka DivIcon options
            iconSize: [
                12,
                12
            ],
            // iconAnchor: (Point),
            // popupAnchor: (Point),
            // @option html: String|HTMLElement = ''
            // Custom HTML code to put inside the div element, empty by default. Alternatively,
            // an instance of `HTMLElement`.
            html: false,
            // @option bgPos: Point = [0, 0]
            // Optional relative position of the background, in pixels
            bgPos: null,
            className: "leaflet-div-icon"
        },
        createIcon: function(oldIcon) {
            var div = oldIcon && oldIcon.tagName === "DIV" ? oldIcon : document.createElement("div"), options = this.options;
            if (options.html instanceof Element) {
                empty(div);
                div.appendChild(options.html);
            } else div.innerHTML = options.html !== false ? options.html : "";
            if (options.bgPos) {
                var bgPos = toPoint(options.bgPos);
                div.style.backgroundPosition = -bgPos.x + "px " + -bgPos.y + "px";
            }
            this._setIconStyles(div, "icon");
            return div;
        },
        createShadow: function() {
            return null;
        }
    });
    // @factory L.divIcon(options: DivIcon options)
    // Creates a `DivIcon` instance with the given options.
    function divIcon(options) {
        return new DivIcon(options);
    }
    Icon.Default = IconDefault;
    /*
   * @class GridLayer
   * @inherits Layer
   * @aka L.GridLayer
   *
   * Generic class for handling a tiled grid of HTML elements. This is the base class for all tile layers and replaces `TileLayer.Canvas`.
   * GridLayer can be extended to create a tiled grid of HTML elements like `<canvas>`, `<img>` or `<div>`. GridLayer will handle creating and animating these DOM elements for you.
   *
   *
   * @section Synchronous usage
   * @example
   *
   * To create a custom layer, extend GridLayer and implement the `createTile()` method, which will be passed a `Point` object with the `x`, `y`, and `z` (zoom level) coordinates to draw your tile.
   *
   * ```js
   * var CanvasLayer = L.GridLayer.extend({
   *     createTile: function(coords){
   *         // create a <canvas> element for drawing
   *         var tile = L.DomUtil.create('canvas', 'leaflet-tile');
   *
   *         // setup tile width and height according to the options
   *         var size = this.getTileSize();
   *         tile.width = size.x;
   *         tile.height = size.y;
   *
   *         // get a canvas context and draw something on it using coords.x, coords.y and coords.z
   *         var ctx = tile.getContext('2d');
   *
   *         // return the tile so it can be rendered on screen
   *         return tile;
   *     }
   * });
   * ```
   *
   * @section Asynchronous usage
   * @example
   *
   * Tile creation can also be asynchronous, this is useful when using a third-party drawing library. Once the tile is finished drawing it can be passed to the `done()` callback.
   *
   * ```js
   * var CanvasLayer = L.GridLayer.extend({
   *     createTile: function(coords, done){
   *         var error;
   *
   *         // create a <canvas> element for drawing
   *         var tile = L.DomUtil.create('canvas', 'leaflet-tile');
   *
   *         // setup tile width and height according to the options
   *         var size = this.getTileSize();
   *         tile.width = size.x;
   *         tile.height = size.y;
   *
   *         // draw something asynchronously and pass the tile to the done() callback
   *         setTimeout(function() {
   *             done(error, tile);
   *         }, 1000);
   *
   *         return tile;
   *     }
   * });
   * ```
   *
   * @section
   */ var GridLayer = Layer.extend({
        // @section
        // @aka GridLayer options
        options: {
            // @option tileSize: Number|Point = 256
            // Width and height of tiles in the grid. Use a number if width and height are equal, or `L.point(width, height)` otherwise.
            tileSize: 256,
            // @option opacity: Number = 1.0
            // Opacity of the tiles. Can be used in the `createTile()` function.
            opacity: 1,
            // @option updateWhenIdle: Boolean = (depends)
            // Load new tiles only when panning ends.
            // `true` by default on mobile browsers, in order to avoid too many requests and keep smooth navigation.
            // `false` otherwise in order to display new tiles _during_ panning, since it is easy to pan outside the
            // [`keepBuffer`](#gridlayer-keepbuffer) option in desktop browsers.
            updateWhenIdle: Browser.mobile,
            // @option updateWhenZooming: Boolean = true
            // By default, a smooth zoom animation (during a [touch zoom](#map-touchzoom) or a [`flyTo()`](#map-flyto)) will update grid layers every integer zoom level. Setting this option to `false` will update the grid layer only when the smooth animation ends.
            updateWhenZooming: true,
            // @option updateInterval: Number = 200
            // Tiles will not update more than once every `updateInterval` milliseconds when panning.
            updateInterval: 200,
            // @option zIndex: Number = 1
            // The explicit zIndex of the tile layer.
            zIndex: 1,
            // @option bounds: LatLngBounds = undefined
            // If set, tiles will only be loaded inside the set `LatLngBounds`.
            bounds: null,
            // @option minZoom: Number = 0
            // The minimum zoom level down to which this layer will be displayed (inclusive).
            minZoom: 0,
            // @option maxZoom: Number = undefined
            // The maximum zoom level up to which this layer will be displayed (inclusive).
            maxZoom: undefined,
            // @option maxNativeZoom: Number = undefined
            // Maximum zoom number the tile source has available. If it is specified,
            // the tiles on all zoom levels higher than `maxNativeZoom` will be loaded
            // from `maxNativeZoom` level and auto-scaled.
            maxNativeZoom: undefined,
            // @option minNativeZoom: Number = undefined
            // Minimum zoom number the tile source has available. If it is specified,
            // the tiles on all zoom levels lower than `minNativeZoom` will be loaded
            // from `minNativeZoom` level and auto-scaled.
            minNativeZoom: undefined,
            // @option noWrap: Boolean = false
            // Whether the layer is wrapped around the antimeridian. If `true`, the
            // GridLayer will only be displayed once at low zoom levels. Has no
            // effect when the [map CRS](#map-crs) doesn't wrap around. Can be used
            // in combination with [`bounds`](#gridlayer-bounds) to prevent requesting
            // tiles outside the CRS limits.
            noWrap: false,
            // @option pane: String = 'tilePane'
            // `Map pane` where the grid layer will be added.
            pane: "tilePane",
            // @option className: String = ''
            // A custom class name to assign to the tile layer. Empty by default.
            className: "",
            // @option keepBuffer: Number = 2
            // When panning the map, keep this many rows and columns of tiles before unloading them.
            keepBuffer: 2
        },
        initialize: function(options) {
            setOptions(this, options);
        },
        onAdd: function() {
            this._initContainer();
            this._levels = {};
            this._tiles = {};
            this._resetView(); // implicit _update() call
        },
        beforeAdd: function(map) {
            map._addZoomLimit(this);
        },
        onRemove: function(map) {
            this._removeAllTiles();
            remove(this._container);
            map._removeZoomLimit(this);
            this._container = null;
            this._tileZoom = undefined;
        },
        // @method bringToFront: this
        // Brings the tile layer to the top of all tile layers.
        bringToFront: function() {
            if (this._map) {
                toFront(this._container);
                this._setAutoZIndex(Math.max);
            }
            return this;
        },
        // @method bringToBack: this
        // Brings the tile layer to the bottom of all tile layers.
        bringToBack: function() {
            if (this._map) {
                toBack(this._container);
                this._setAutoZIndex(Math.min);
            }
            return this;
        },
        // @method getContainer: HTMLElement
        // Returns the HTML element that contains the tiles for this layer.
        getContainer: function() {
            return this._container;
        },
        // @method setOpacity(opacity: Number): this
        // Changes the [opacity](#gridlayer-opacity) of the grid layer.
        setOpacity: function(opacity) {
            this.options.opacity = opacity;
            this._updateOpacity();
            return this;
        },
        // @method setZIndex(zIndex: Number): this
        // Changes the [zIndex](#gridlayer-zindex) of the grid layer.
        setZIndex: function(zIndex) {
            this.options.zIndex = zIndex;
            this._updateZIndex();
            return this;
        },
        // @method isLoading: Boolean
        // Returns `true` if any tile in the grid layer has not finished loading.
        isLoading: function() {
            return this._loading;
        },
        // @method redraw: this
        // Causes the layer to clear all the tiles and request them again.
        redraw: function() {
            if (this._map) {
                this._removeAllTiles();
                var tileZoom = this._clampZoom(this._map.getZoom());
                if (tileZoom !== this._tileZoom) {
                    this._tileZoom = tileZoom;
                    this._updateLevels();
                }
                this._update();
            }
            return this;
        },
        getEvents: function() {
            var events = {
                viewprereset: this._invalidateAll,
                viewreset: this._resetView,
                zoom: this._resetView,
                moveend: this._onMoveEnd
            };
            if (!this.options.updateWhenIdle) {
                // update tiles on move, but not more often than once per given interval
                if (!this._onMove) this._onMove = throttle(this._onMoveEnd, this.options.updateInterval, this);
                events.move = this._onMove;
            }
            if (this._zoomAnimated) events.zoomanim = this._animateZoom;
            return events;
        },
        // @section Extension methods
        // Layers extending `GridLayer` shall reimplement the following method.
        // @method createTile(coords: Object, done?: Function): HTMLElement
        // Called only internally, must be overridden by classes extending `GridLayer`.
        // Returns the `HTMLElement` corresponding to the given `coords`. If the `done` callback
        // is specified, it must be called when the tile has finished loading and drawing.
        createTile: function() {
            return document.createElement("div");
        },
        // @section
        // @method getTileSize: Point
        // Normalizes the [tileSize option](#gridlayer-tilesize) into a point. Used by the `createTile()` method.
        getTileSize: function() {
            var s = this.options.tileSize;
            return s instanceof Point ? s : new Point(s, s);
        },
        _updateZIndex: function() {
            if (this._container && this.options.zIndex !== undefined && this.options.zIndex !== null) this._container.style.zIndex = this.options.zIndex;
        },
        _setAutoZIndex: function(compare) {
            // go through all other layers of the same pane, set zIndex to max + 1 (front) or min - 1 (back)
            var layers = this.getPane().children, edgeZIndex = -compare(-Infinity, Infinity); // -Infinity for max, Infinity for min
            for(var i = 0, len = layers.length, zIndex; i < len; i++){
                zIndex = layers[i].style.zIndex;
                if (layers[i] !== this._container && zIndex) edgeZIndex = compare(edgeZIndex, +zIndex);
            }
            if (isFinite(edgeZIndex)) {
                this.options.zIndex = edgeZIndex + compare(-1, 1);
                this._updateZIndex();
            }
        },
        _updateOpacity: function() {
            if (!this._map) return;
            // IE doesn't inherit filter opacity properly, so we're forced to set it on tiles
            if (Browser.ielt9) return;
            setOpacity(this._container, this.options.opacity);
            var now = +new Date(), nextFrame = false, willPrune = false;
            for(var key in this._tiles){
                var tile = this._tiles[key];
                if (!tile.current || !tile.loaded) continue;
                var fade = Math.min(1, (now - tile.loaded) / 200);
                setOpacity(tile.el, fade);
                if (fade < 1) nextFrame = true;
                else {
                    if (tile.active) willPrune = true;
                    else this._onOpaqueTile(tile);
                    tile.active = true;
                }
            }
            if (willPrune && !this._noPrune) this._pruneTiles();
            if (nextFrame) {
                cancelAnimFrame(this._fadeFrame);
                this._fadeFrame = requestAnimFrame(this._updateOpacity, this);
            }
        },
        _onOpaqueTile: falseFn,
        _initContainer: function() {
            if (this._container) return;
            this._container = create$1("div", "leaflet-layer " + (this.options.className || ""));
            this._updateZIndex();
            if (this.options.opacity < 1) this._updateOpacity();
            this.getPane().appendChild(this._container);
        },
        _updateLevels: function() {
            var zoom = this._tileZoom, maxZoom = this.options.maxZoom;
            if (zoom === undefined) return undefined;
            for(var z in this._levels){
                z = Number(z);
                if (this._levels[z].el.children.length || z === zoom) {
                    this._levels[z].el.style.zIndex = maxZoom - Math.abs(zoom - z);
                    this._onUpdateLevel(z);
                } else {
                    remove(this._levels[z].el);
                    this._removeTilesAtZoom(z);
                    this._onRemoveLevel(z);
                    delete this._levels[z];
                }
            }
            var level = this._levels[zoom], map = this._map;
            if (!level) {
                level = this._levels[zoom] = {};
                level.el = create$1("div", "leaflet-tile-container leaflet-zoom-animated", this._container);
                level.el.style.zIndex = maxZoom;
                level.origin = map.project(map.unproject(map.getPixelOrigin()), zoom).round();
                level.zoom = zoom;
                this._setZoomTransform(level, map.getCenter(), map.getZoom());
                // force the browser to consider the newly added element for transition
                falseFn(level.el.offsetWidth);
                this._onCreateLevel(level);
            }
            this._level = level;
            return level;
        },
        _onUpdateLevel: falseFn,
        _onRemoveLevel: falseFn,
        _onCreateLevel: falseFn,
        _pruneTiles: function() {
            if (!this._map) return;
            var key, tile;
            var zoom = this._map.getZoom();
            if (zoom > this.options.maxZoom || zoom < this.options.minZoom) {
                this._removeAllTiles();
                return;
            }
            for(key in this._tiles){
                tile = this._tiles[key];
                tile.retain = tile.current;
            }
            for(key in this._tiles){
                tile = this._tiles[key];
                if (tile.current && !tile.active) {
                    var coords = tile.coords;
                    if (!this._retainParent(coords.x, coords.y, coords.z, coords.z - 5)) this._retainChildren(coords.x, coords.y, coords.z, coords.z + 2);
                }
            }
            for(key in this._tiles)if (!this._tiles[key].retain) this._removeTile(key);
        },
        _removeTilesAtZoom: function(zoom) {
            for(var key in this._tiles){
                if (this._tiles[key].coords.z !== zoom) continue;
                this._removeTile(key);
            }
        },
        _removeAllTiles: function() {
            for(var key in this._tiles)this._removeTile(key);
        },
        _invalidateAll: function() {
            for(var z in this._levels){
                remove(this._levels[z].el);
                this._onRemoveLevel(Number(z));
                delete this._levels[z];
            }
            this._removeAllTiles();
            this._tileZoom = undefined;
        },
        _retainParent: function(x, y, z, minZoom) {
            var x2 = Math.floor(x / 2), y2 = Math.floor(y / 2), z2 = z - 1, coords2 = new Point(+x2, +y2);
            coords2.z = +z2;
            var key = this._tileCoordsToKey(coords2), tile = this._tiles[key];
            if (tile && tile.active) {
                tile.retain = true;
                return true;
            } else if (tile && tile.loaded) tile.retain = true;
            if (z2 > minZoom) return this._retainParent(x2, y2, z2, minZoom);
            return false;
        },
        _retainChildren: function(x, y, z, maxZoom) {
            for(var i = 2 * x; i < 2 * x + 2; i++)for(var j = 2 * y; j < 2 * y + 2; j++){
                var coords = new Point(i, j);
                coords.z = z + 1;
                var key = this._tileCoordsToKey(coords), tile = this._tiles[key];
                if (tile && tile.active) {
                    tile.retain = true;
                    continue;
                } else if (tile && tile.loaded) tile.retain = true;
                if (z + 1 < maxZoom) this._retainChildren(i, j, z + 1, maxZoom);
            }
        },
        _resetView: function(e) {
            var animating = e && (e.pinch || e.flyTo);
            this._setView(this._map.getCenter(), this._map.getZoom(), animating, animating);
        },
        _animateZoom: function(e) {
            this._setView(e.center, e.zoom, true, e.noUpdate);
        },
        _clampZoom: function(zoom) {
            var options = this.options;
            if (undefined !== options.minNativeZoom && zoom < options.minNativeZoom) return options.minNativeZoom;
            if (undefined !== options.maxNativeZoom && options.maxNativeZoom < zoom) return options.maxNativeZoom;
            return zoom;
        },
        _setView: function(center, zoom, noPrune, noUpdate) {
            var tileZoom = Math.round(zoom);
            if (this.options.maxZoom !== undefined && tileZoom > this.options.maxZoom || this.options.minZoom !== undefined && tileZoom < this.options.minZoom) tileZoom = undefined;
            else tileZoom = this._clampZoom(tileZoom);
            var tileZoomChanged = this.options.updateWhenZooming && tileZoom !== this._tileZoom;
            if (!noUpdate || tileZoomChanged) {
                this._tileZoom = tileZoom;
                if (this._abortLoading) this._abortLoading();
                this._updateLevels();
                this._resetGrid();
                if (tileZoom !== undefined) this._update(center);
                if (!noPrune) this._pruneTiles();
                // Flag to prevent _updateOpacity from pruning tiles during
                // a zoom anim or a pinch gesture
                this._noPrune = !!noPrune;
            }
            this._setZoomTransforms(center, zoom);
        },
        _setZoomTransforms: function(center, zoom) {
            for(var i in this._levels)this._setZoomTransform(this._levels[i], center, zoom);
        },
        _setZoomTransform: function(level, center, zoom) {
            var scale = this._map.getZoomScale(zoom, level.zoom), translate = level.origin.multiplyBy(scale).subtract(this._map._getNewPixelOrigin(center, zoom)).round();
            if (Browser.any3d) setTransform(level.el, translate, scale);
            else setPosition(level.el, translate);
        },
        _resetGrid: function() {
            var map = this._map, crs = map.options.crs, tileSize = this._tileSize = this.getTileSize(), tileZoom = this._tileZoom;
            var bounds = this._map.getPixelWorldBounds(this._tileZoom);
            if (bounds) this._globalTileRange = this._pxBoundsToTileRange(bounds);
            this._wrapX = crs.wrapLng && !this.options.noWrap && [
                Math.floor(map.project([
                    0,
                    crs.wrapLng[0]
                ], tileZoom).x / tileSize.x),
                Math.ceil(map.project([
                    0,
                    crs.wrapLng[1]
                ], tileZoom).x / tileSize.y)
            ];
            this._wrapY = crs.wrapLat && !this.options.noWrap && [
                Math.floor(map.project([
                    crs.wrapLat[0],
                    0
                ], tileZoom).y / tileSize.x),
                Math.ceil(map.project([
                    crs.wrapLat[1],
                    0
                ], tileZoom).y / tileSize.y)
            ];
        },
        _onMoveEnd: function() {
            if (!this._map || this._map._animatingZoom) return;
            this._update();
        },
        _getTiledPixelBounds: function(center) {
            var map = this._map, mapZoom = map._animatingZoom ? Math.max(map._animateToZoom, map.getZoom()) : map.getZoom(), scale = map.getZoomScale(mapZoom, this._tileZoom), pixelCenter = map.project(center, this._tileZoom).floor(), halfSize = map.getSize().divideBy(scale * 2);
            return new Bounds(pixelCenter.subtract(halfSize), pixelCenter.add(halfSize));
        },
        // Private method to load tiles in the grid's active zoom level according to map bounds
        _update: function(center) {
            var map = this._map;
            if (!map) return;
            var zoom = this._clampZoom(map.getZoom());
            if (center === undefined) center = map.getCenter();
            if (this._tileZoom === undefined) return;
             // if out of minzoom/maxzoom
            var pixelBounds = this._getTiledPixelBounds(center), tileRange = this._pxBoundsToTileRange(pixelBounds), tileCenter = tileRange.getCenter(), queue = [], margin = this.options.keepBuffer, noPruneRange = new Bounds(tileRange.getBottomLeft().subtract([
                margin,
                -margin
            ]), tileRange.getTopRight().add([
                margin,
                -margin
            ]));
            // Sanity check: panic if the tile range contains Infinity somewhere.
            if (!(isFinite(tileRange.min.x) && isFinite(tileRange.min.y) && isFinite(tileRange.max.x) && isFinite(tileRange.max.y))) throw new Error("Attempted to load an infinite number of tiles");
            for(var key in this._tiles){
                var c = this._tiles[key].coords;
                if (c.z !== this._tileZoom || !noPruneRange.contains(new Point(c.x, c.y))) this._tiles[key].current = false;
            }
            // _update just loads more tiles. If the tile zoom level differs too much
            // from the map's, let _setView reset levels and prune old tiles.
            if (Math.abs(zoom - this._tileZoom) > 1) {
                this._setView(center, zoom);
                return;
            }
            // create a queue of coordinates to load tiles from
            for(var j = tileRange.min.y; j <= tileRange.max.y; j++)for(var i = tileRange.min.x; i <= tileRange.max.x; i++){
                var coords = new Point(i, j);
                coords.z = this._tileZoom;
                if (!this._isValidTile(coords)) continue;
                var tile = this._tiles[this._tileCoordsToKey(coords)];
                if (tile) tile.current = true;
                else queue.push(coords);
            }
            // sort tile queue to load tiles in order of their distance to center
            queue.sort(function(a, b) {
                return a.distanceTo(tileCenter) - b.distanceTo(tileCenter);
            });
            if (queue.length !== 0) {
                // if it's the first batch of tiles to load
                if (!this._loading) {
                    this._loading = true;
                    // @event loading: Event
                    // Fired when the grid layer starts loading tiles.
                    this.fire("loading");
                }
                // create DOM fragment to append tiles in one batch
                var fragment = document.createDocumentFragment();
                for(i = 0; i < queue.length; i++)this._addTile(queue[i], fragment);
                this._level.el.appendChild(fragment);
            }
        },
        _isValidTile: function(coords) {
            var crs = this._map.options.crs;
            if (!crs.infinite) {
                // don't load tile if it's out of bounds and not wrapped
                var bounds = this._globalTileRange;
                if (!crs.wrapLng && (coords.x < bounds.min.x || coords.x > bounds.max.x) || !crs.wrapLat && (coords.y < bounds.min.y || coords.y > bounds.max.y)) return false;
            }
            if (!this.options.bounds) return true;
            // don't load tile if it doesn't intersect the bounds in options
            var tileBounds = this._tileCoordsToBounds(coords);
            return toLatLngBounds(this.options.bounds).overlaps(tileBounds);
        },
        _keyToBounds: function(key) {
            return this._tileCoordsToBounds(this._keyToTileCoords(key));
        },
        _tileCoordsToNwSe: function(coords) {
            var map = this._map, tileSize = this.getTileSize(), nwPoint = coords.scaleBy(tileSize), sePoint = nwPoint.add(tileSize), nw = map.unproject(nwPoint, coords.z), se = map.unproject(sePoint, coords.z);
            return [
                nw,
                se
            ];
        },
        // converts tile coordinates to its geographical bounds
        _tileCoordsToBounds: function(coords) {
            var bp = this._tileCoordsToNwSe(coords), bounds = new LatLngBounds(bp[0], bp[1]);
            if (!this.options.noWrap) bounds = this._map.wrapLatLngBounds(bounds);
            return bounds;
        },
        // converts tile coordinates to key for the tile cache
        _tileCoordsToKey: function(coords) {
            return coords.x + ":" + coords.y + ":" + coords.z;
        },
        // converts tile cache key to coordinates
        _keyToTileCoords: function(key) {
            var k = key.split(":"), coords = new Point(+k[0], +k[1]);
            coords.z = +k[2];
            return coords;
        },
        _removeTile: function(key) {
            var tile = this._tiles[key];
            if (!tile) return;
            remove(tile.el);
            delete this._tiles[key];
            // @event tileunload: TileEvent
            // Fired when a tile is removed (e.g. when a tile goes off the screen).
            this.fire("tileunload", {
                tile: tile.el,
                coords: this._keyToTileCoords(key)
            });
        },
        _initTile: function(tile) {
            addClass(tile, "leaflet-tile");
            var tileSize = this.getTileSize();
            tile.style.width = tileSize.x + "px";
            tile.style.height = tileSize.y + "px";
            tile.onselectstart = falseFn;
            tile.onmousemove = falseFn;
            // update opacity on tiles in IE7-8 because of filter inheritance problems
            if (Browser.ielt9 && this.options.opacity < 1) setOpacity(tile, this.options.opacity);
        },
        _addTile: function(coords, container) {
            var tilePos = this._getTilePos(coords), key = this._tileCoordsToKey(coords);
            var tile = this.createTile(this._wrapCoords(coords), bind(this._tileReady, this, coords));
            this._initTile(tile);
            // if createTile is defined with a second argument ("done" callback),
            // we know that tile is async and will be ready later; otherwise
            if (this.createTile.length < 2) // mark tile as ready, but delay one frame for opacity animation to happen
            requestAnimFrame(bind(this._tileReady, this, coords, null, tile));
            setPosition(tile, tilePos);
            // save tile in cache
            this._tiles[key] = {
                el: tile,
                coords: coords,
                current: true
            };
            container.appendChild(tile);
            // @event tileloadstart: TileEvent
            // Fired when a tile is requested and starts loading.
            this.fire("tileloadstart", {
                tile: tile,
                coords: coords
            });
        },
        _tileReady: function(coords, err, tile) {
            if (err) // @event tileerror: TileErrorEvent
            // Fired when there is an error loading a tile.
            this.fire("tileerror", {
                error: err,
                tile: tile,
                coords: coords
            });
            var key = this._tileCoordsToKey(coords);
            tile = this._tiles[key];
            if (!tile) return;
            tile.loaded = +new Date();
            if (this._map._fadeAnimated) {
                setOpacity(tile.el, 0);
                cancelAnimFrame(this._fadeFrame);
                this._fadeFrame = requestAnimFrame(this._updateOpacity, this);
            } else {
                tile.active = true;
                this._pruneTiles();
            }
            if (!err) {
                addClass(tile.el, "leaflet-tile-loaded");
                // @event tileload: TileEvent
                // Fired when a tile loads.
                this.fire("tileload", {
                    tile: tile.el,
                    coords: coords
                });
            }
            if (this._noTilesToLoad()) {
                this._loading = false;
                // @event load: Event
                // Fired when the grid layer loaded all visible tiles.
                this.fire("load");
                if (Browser.ielt9 || !this._map._fadeAnimated) requestAnimFrame(this._pruneTiles, this);
                else // Wait a bit more than 0.2 secs (the duration of the tile fade-in)
                // to trigger a pruning.
                setTimeout(bind(this._pruneTiles, this), 250);
            }
        },
        _getTilePos: function(coords) {
            return coords.scaleBy(this.getTileSize()).subtract(this._level.origin);
        },
        _wrapCoords: function(coords) {
            var newCoords = new Point(this._wrapX ? wrapNum(coords.x, this._wrapX) : coords.x, this._wrapY ? wrapNum(coords.y, this._wrapY) : coords.y);
            newCoords.z = coords.z;
            return newCoords;
        },
        _pxBoundsToTileRange: function(bounds) {
            var tileSize = this.getTileSize();
            return new Bounds(bounds.min.unscaleBy(tileSize).floor(), bounds.max.unscaleBy(tileSize).ceil().subtract([
                1,
                1
            ]));
        },
        _noTilesToLoad: function() {
            for(var key in this._tiles){
                if (!this._tiles[key].loaded) return false;
            }
            return true;
        }
    });
    // @factory L.gridLayer(options?: GridLayer options)
    // Creates a new instance of GridLayer with the supplied options.
    function gridLayer(options) {
        return new GridLayer(options);
    }
    /*
   * @class TileLayer
   * @inherits GridLayer
   * @aka L.TileLayer
   * Used to load and display tile layers on the map. Note that most tile servers require attribution, which you can set under `Layer`. Extends `GridLayer`.
   *
   * @example
   *
   * ```js
   * L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);
   * ```
   *
   * @section URL template
   * @example
   *
   * A string of the following form:
   *
   * ```
   * 'https://{s}.somedomain.com/blabla/{z}/{x}/{y}{r}.png'
   * ```
   *
   * `{s}` means one of the available subdomains (used sequentially to help with browser parallel requests per domain limitation; subdomain values are specified in options; `a`, `b` or `c` by default, can be omitted), `{z}` — zoom level, `{x}` and `{y}` — tile coordinates. `{r}` can be used to add "&commat;2x" to the URL to load retina tiles.
   *
   * You can use custom keys in the template, which will be [evaluated](#util-template) from TileLayer options, like this:
   *
   * ```
   * L.tileLayer('https://{s}.somedomain.com/{foo}/{z}/{x}/{y}.png', {foo: 'bar'});
   * ```
   */ var TileLayer = GridLayer.extend({
        // @section
        // @aka TileLayer options
        options: {
            // @option minZoom: Number = 0
            // The minimum zoom level down to which this layer will be displayed (inclusive).
            minZoom: 0,
            // @option maxZoom: Number = 18
            // The maximum zoom level up to which this layer will be displayed (inclusive).
            maxZoom: 18,
            // @option subdomains: String|String[] = 'abc'
            // Subdomains of the tile service. Can be passed in the form of one string (where each letter is a subdomain name) or an array of strings.
            subdomains: "abc",
            // @option errorTileUrl: String = ''
            // URL to the tile image to show in place of the tile that failed to load.
            errorTileUrl: "",
            // @option zoomOffset: Number = 0
            // The zoom number used in tile URLs will be offset with this value.
            zoomOffset: 0,
            // @option tms: Boolean = false
            // If `true`, inverses Y axis numbering for tiles (turn this on for [TMS](https://en.wikipedia.org/wiki/Tile_Map_Service) services).
            tms: false,
            // @option zoomReverse: Boolean = false
            // If set to true, the zoom number used in tile URLs will be reversed (`maxZoom - zoom` instead of `zoom`)
            zoomReverse: false,
            // @option detectRetina: Boolean = false
            // If `true` and user is on a retina display, it will request four tiles of half the specified size and a bigger zoom level in place of one to utilize the high resolution.
            detectRetina: false,
            // @option crossOrigin: Boolean|String = false
            // Whether the crossOrigin attribute will be added to the tiles.
            // If a String is provided, all tiles will have their crossOrigin attribute set to the String provided. This is needed if you want to access tile pixel data.
            // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
            crossOrigin: false,
            // @option referrerPolicy: Boolean|String = false
            // Whether the referrerPolicy attribute will be added to the tiles.
            // If a String is provided, all tiles will have their referrerPolicy attribute set to the String provided.
            // This may be needed if your map's rendering context has a strict default but your tile provider expects a valid referrer
            // (e.g. to validate an API token).
            // Refer to [HTMLImageElement.referrerPolicy](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/referrerPolicy) for valid String values.
            referrerPolicy: false
        },
        initialize: function(url, options) {
            this._url = url;
            options = setOptions(this, options);
            // detecting retina displays, adjusting tileSize and zoom levels
            if (options.detectRetina && Browser.retina && options.maxZoom > 0) {
                options.tileSize = Math.floor(options.tileSize / 2);
                if (!options.zoomReverse) {
                    options.zoomOffset++;
                    options.maxZoom = Math.max(options.minZoom, options.maxZoom - 1);
                } else {
                    options.zoomOffset--;
                    options.minZoom = Math.min(options.maxZoom, options.minZoom + 1);
                }
                options.minZoom = Math.max(0, options.minZoom);
            } else if (!options.zoomReverse) // make sure maxZoom is gte minZoom
            options.maxZoom = Math.max(options.minZoom, options.maxZoom);
            else // make sure minZoom is lte maxZoom
            options.minZoom = Math.min(options.maxZoom, options.minZoom);
            if (typeof options.subdomains === "string") options.subdomains = options.subdomains.split("");
            this.on("tileunload", this._onTileRemove);
        },
        // @method setUrl(url: String, noRedraw?: Boolean): this
        // Updates the layer's URL template and redraws it (unless `noRedraw` is set to `true`).
        // If the URL does not change, the layer will not be redrawn unless
        // the noRedraw parameter is set to false.
        setUrl: function(url, noRedraw) {
            if (this._url === url && noRedraw === undefined) noRedraw = true;
            this._url = url;
            if (!noRedraw) this.redraw();
            return this;
        },
        // @method createTile(coords: Object, done?: Function): HTMLElement
        // Called only internally, overrides GridLayer's [`createTile()`](#gridlayer-createtile)
        // to return an `<img>` HTML element with the appropriate image URL given `coords`. The `done`
        // callback is called when the tile has been loaded.
        createTile: function(coords, done) {
            var tile = document.createElement("img");
            on(tile, "load", bind(this._tileOnLoad, this, done, tile));
            on(tile, "error", bind(this._tileOnError, this, done, tile));
            if (this.options.crossOrigin || this.options.crossOrigin === "") tile.crossOrigin = this.options.crossOrigin === true ? "" : this.options.crossOrigin;
            // for this new option we follow the documented behavior
            // more closely by only setting the property when string
            if (typeof this.options.referrerPolicy === "string") tile.referrerPolicy = this.options.referrerPolicy;
            // The alt attribute is set to the empty string,
            // allowing screen readers to ignore the decorative image tiles.
            // https://www.w3.org/WAI/tutorials/images/decorative/
            // https://www.w3.org/TR/html-aria/#el-img-empty-alt
            tile.alt = "";
            tile.src = this.getTileUrl(coords);
            return tile;
        },
        // @section Extension methods
        // @uninheritable
        // Layers extending `TileLayer` might reimplement the following method.
        // @method getTileUrl(coords: Object): String
        // Called only internally, returns the URL for a tile given its coordinates.
        // Classes extending `TileLayer` can override this function to provide custom tile URL naming schemes.
        getTileUrl: function(coords) {
            var data = {
                r: Browser.retina ? "@2x" : "",
                s: this._getSubdomain(coords),
                x: coords.x,
                y: coords.y,
                z: this._getZoomForUrl()
            };
            if (this._map && !this._map.options.crs.infinite) {
                var invertedY = this._globalTileRange.max.y - coords.y;
                if (this.options.tms) data["y"] = invertedY;
                data["-y"] = invertedY;
            }
            return template(this._url, extend(data, this.options));
        },
        _tileOnLoad: function(done, tile) {
            // For https://github.com/Leaflet/Leaflet/issues/3332
            if (Browser.ielt9) setTimeout(bind(done, this, null, tile), 0);
            else done(null, tile);
        },
        _tileOnError: function(done, tile, e) {
            var errorUrl = this.options.errorTileUrl;
            if (errorUrl && tile.getAttribute("src") !== errorUrl) tile.src = errorUrl;
            done(e, tile);
        },
        _onTileRemove: function(e) {
            e.tile.onload = null;
        },
        _getZoomForUrl: function() {
            var zoom = this._tileZoom, maxZoom = this.options.maxZoom, zoomReverse = this.options.zoomReverse, zoomOffset = this.options.zoomOffset;
            if (zoomReverse) zoom = maxZoom - zoom;
            return zoom + zoomOffset;
        },
        _getSubdomain: function(tilePoint) {
            var index = Math.abs(tilePoint.x + tilePoint.y) % this.options.subdomains.length;
            return this.options.subdomains[index];
        },
        // stops loading all tiles in the background layer
        _abortLoading: function() {
            var i, tile;
            for(i in this._tiles)if (this._tiles[i].coords.z !== this._tileZoom) {
                tile = this._tiles[i].el;
                tile.onload = falseFn;
                tile.onerror = falseFn;
                if (!tile.complete) {
                    tile.src = emptyImageUrl;
                    var coords = this._tiles[i].coords;
                    remove(tile);
                    delete this._tiles[i];
                    // @event tileabort: TileEvent
                    // Fired when a tile was loading but is now not wanted.
                    this.fire("tileabort", {
                        tile: tile,
                        coords: coords
                    });
                }
            }
        },
        _removeTile: function(key) {
            var tile = this._tiles[key];
            if (!tile) return;
            // Cancels any pending http requests associated with the tile
            tile.el.setAttribute("src", emptyImageUrl);
            return GridLayer.prototype._removeTile.call(this, key);
        },
        _tileReady: function(coords, err, tile) {
            if (!this._map || tile && tile.getAttribute("src") === emptyImageUrl) return;
            return GridLayer.prototype._tileReady.call(this, coords, err, tile);
        }
    });
    // @factory L.tilelayer(urlTemplate: String, options?: TileLayer options)
    // Instantiates a tile layer object given a `URL template` and optionally an options object.
    function tileLayer(url, options) {
        return new TileLayer(url, options);
    }
    /*
   * @class TileLayer.WMS
   * @inherits TileLayer
   * @aka L.TileLayer.WMS
   * Used to display [WMS](https://en.wikipedia.org/wiki/Web_Map_Service) services as tile layers on the map. Extends `TileLayer`.
   *
   * @example
   *
   * ```js
   * var nexrad = L.tileLayer.wms("http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi", {
   * 	layers: 'nexrad-n0r-900913',
   * 	format: 'image/png',
   * 	transparent: true,
   * 	attribution: "Weather data © 2012 IEM Nexrad"
   * });
   * ```
   */ var TileLayerWMS = TileLayer.extend({
        // @section
        // @aka TileLayer.WMS options
        // If any custom options not documented here are used, they will be sent to the
        // WMS server as extra parameters in each request URL. This can be useful for
        // [non-standard vendor WMS parameters](https://docs.geoserver.org/stable/en/user/services/wms/vendor.html).
        defaultWmsParams: {
            service: "WMS",
            request: "GetMap",
            // @option layers: String = ''
            // **(required)** Comma-separated list of WMS layers to show.
            layers: "",
            // @option styles: String = ''
            // Comma-separated list of WMS styles.
            styles: "",
            // @option format: String = 'image/jpeg'
            // WMS image format (use `'image/png'` for layers with transparency).
            format: "image/jpeg",
            // @option transparent: Boolean = false
            // If `true`, the WMS service will return images with transparency.
            transparent: false,
            // @option version: String = '1.1.1'
            // Version of the WMS service to use
            version: "1.1.1"
        },
        options: {
            // @option crs: CRS = null
            // Coordinate Reference System to use for the WMS requests, defaults to
            // map CRS. Don't change this if you're not sure what it means.
            crs: null,
            // @option uppercase: Boolean = false
            // If `true`, WMS request parameter keys will be uppercase.
            uppercase: false
        },
        initialize: function(url, options) {
            this._url = url;
            var wmsParams = extend({}, this.defaultWmsParams);
            // all keys that are not TileLayer options go to WMS params
            for(var i in options)if (!(i in this.options)) wmsParams[i] = options[i];
            options = setOptions(this, options);
            var realRetina = options.detectRetina && Browser.retina ? 2 : 1;
            var tileSize = this.getTileSize();
            wmsParams.width = tileSize.x * realRetina;
            wmsParams.height = tileSize.y * realRetina;
            this.wmsParams = wmsParams;
        },
        onAdd: function(map) {
            this._crs = this.options.crs || map.options.crs;
            this._wmsVersion = parseFloat(this.wmsParams.version);
            var projectionKey = this._wmsVersion >= 1.3 ? "crs" : "srs";
            this.wmsParams[projectionKey] = this._crs.code;
            TileLayer.prototype.onAdd.call(this, map);
        },
        getTileUrl: function(coords) {
            var tileBounds = this._tileCoordsToNwSe(coords), crs = this._crs, bounds = toBounds(crs.project(tileBounds[0]), crs.project(tileBounds[1])), min = bounds.min, max = bounds.max, bbox = (this._wmsVersion >= 1.3 && this._crs === EPSG4326 ? [
                min.y,
                min.x,
                max.y,
                max.x
            ] : [
                min.x,
                min.y,
                max.x,
                max.y
            ]).join(","), url = TileLayer.prototype.getTileUrl.call(this, coords);
            return url + getParamString(this.wmsParams, url, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + bbox;
        },
        // @method setParams(params: Object, noRedraw?: Boolean): this
        // Merges an object with the new parameters and re-requests tiles on the current screen (unless `noRedraw` was set to true).
        setParams: function(params, noRedraw) {
            extend(this.wmsParams, params);
            if (!noRedraw) this.redraw();
            return this;
        }
    });
    // @factory L.tileLayer.wms(baseUrl: String, options: TileLayer.WMS options)
    // Instantiates a WMS tile layer object given a base URL of the WMS service and a WMS parameters/options object.
    function tileLayerWMS(url, options) {
        return new TileLayerWMS(url, options);
    }
    TileLayer.WMS = TileLayerWMS;
    tileLayer.wms = tileLayerWMS;
    /*
   * @class Renderer
   * @inherits Layer
   * @aka L.Renderer
   *
   * Base class for vector renderer implementations (`SVG`, `Canvas`). Handles the
   * DOM container of the renderer, its bounds, and its zoom animation.
   *
   * A `Renderer` works as an implicit layer group for all `Path`s - the renderer
   * itself can be added or removed to the map. All paths use a renderer, which can
   * be implicit (the map will decide the type of renderer and use it automatically)
   * or explicit (using the [`renderer`](#path-renderer) option of the path).
   *
   * Do not use this class directly, use `SVG` and `Canvas` instead.
   *
   * @event update: Event
   * Fired when the renderer updates its bounds, center and zoom, for example when
   * its map has moved
   */ var Renderer = Layer.extend({
        // @section
        // @aka Renderer options
        options: {
            // @option padding: Number = 0.1
            // How much to extend the clip area around the map view (relative to its size)
            // e.g. 0.1 would be 10% of map view in each direction
            padding: 0.1
        },
        initialize: function(options) {
            setOptions(this, options);
            stamp(this);
            this._layers = this._layers || {};
        },
        onAdd: function() {
            if (!this._container) {
                this._initContainer(); // defined by renderer implementations
                // always keep transform-origin as 0 0
                addClass(this._container, "leaflet-zoom-animated");
            }
            this.getPane().appendChild(this._container);
            this._update();
            this.on("update", this._updatePaths, this);
        },
        onRemove: function() {
            this.off("update", this._updatePaths, this);
            this._destroyContainer();
        },
        getEvents: function() {
            var events = {
                viewreset: this._reset,
                zoom: this._onZoom,
                moveend: this._update,
                zoomend: this._onZoomEnd
            };
            if (this._zoomAnimated) events.zoomanim = this._onAnimZoom;
            return events;
        },
        _onAnimZoom: function(ev) {
            this._updateTransform(ev.center, ev.zoom);
        },
        _onZoom: function() {
            this._updateTransform(this._map.getCenter(), this._map.getZoom());
        },
        _updateTransform: function(center, zoom) {
            var scale = this._map.getZoomScale(zoom, this._zoom), viewHalf = this._map.getSize().multiplyBy(0.5 + this.options.padding), currentCenterPoint = this._map.project(this._center, zoom), topLeftOffset = viewHalf.multiplyBy(-scale).add(currentCenterPoint).subtract(this._map._getNewPixelOrigin(center, zoom));
            if (Browser.any3d) setTransform(this._container, topLeftOffset, scale);
            else setPosition(this._container, topLeftOffset);
        },
        _reset: function() {
            this._update();
            this._updateTransform(this._center, this._zoom);
            for(var id in this._layers)this._layers[id]._reset();
        },
        _onZoomEnd: function() {
            for(var id in this._layers)this._layers[id]._project();
        },
        _updatePaths: function() {
            for(var id in this._layers)this._layers[id]._update();
        },
        _update: function() {
            // Update pixel bounds of renderer container (for positioning/sizing/clipping later)
            // Subclasses are responsible of firing the 'update' event.
            var p = this.options.padding, size = this._map.getSize(), min = this._map.containerPointToLayerPoint(size.multiplyBy(-p)).round();
            this._bounds = new Bounds(min, min.add(size.multiplyBy(1 + p * 2)).round());
            this._center = this._map.getCenter();
            this._zoom = this._map.getZoom();
        }
    });
    /*
   * @class Canvas
   * @inherits Renderer
   * @aka L.Canvas
   *
   * Allows vector layers to be displayed with [`<canvas>`](https://developer.mozilla.org/docs/Web/API/Canvas_API).
   * Inherits `Renderer`.
   *
   * Due to [technical limitations](https://caniuse.com/canvas), Canvas is not
   * available in all web browsers, notably IE8, and overlapping geometries might
   * not display properly in some edge cases.
   *
   * @example
   *
   * Use Canvas by default for all paths in the map:
   *
   * ```js
   * var map = L.map('map', {
   * 	renderer: L.canvas()
   * });
   * ```
   *
   * Use a Canvas renderer with extra padding for specific vector geometries:
   *
   * ```js
   * var map = L.map('map');
   * var myRenderer = L.canvas({ padding: 0.5 });
   * var line = L.polyline( coordinates, { renderer: myRenderer } );
   * var circle = L.circle( center, { renderer: myRenderer } );
   * ```
   */ var Canvas = Renderer.extend({
        // @section
        // @aka Canvas options
        options: {
            // @option tolerance: Number = 0
            // How much to extend the click tolerance around a path/object on the map.
            tolerance: 0
        },
        getEvents: function() {
            var events = Renderer.prototype.getEvents.call(this);
            events.viewprereset = this._onViewPreReset;
            return events;
        },
        _onViewPreReset: function() {
            // Set a flag so that a viewprereset+moveend+viewreset only updates&redraws once
            this._postponeUpdatePaths = true;
        },
        onAdd: function() {
            Renderer.prototype.onAdd.call(this);
            // Redraw vectors since canvas is cleared upon removal,
            // in case of removing the renderer itself from the map.
            this._draw();
        },
        _initContainer: function() {
            var container = this._container = document.createElement("canvas");
            on(container, "mousemove", this._onMouseMove, this);
            on(container, "click dblclick mousedown mouseup contextmenu", this._onClick, this);
            on(container, "mouseout", this._handleMouseOut, this);
            container["_leaflet_disable_events"] = true;
            this._ctx = container.getContext("2d");
        },
        _destroyContainer: function() {
            cancelAnimFrame(this._redrawRequest);
            delete this._ctx;
            remove(this._container);
            off(this._container);
            delete this._container;
        },
        _updatePaths: function() {
            if (this._postponeUpdatePaths) return;
            var layer;
            this._redrawBounds = null;
            for(var id in this._layers){
                layer = this._layers[id];
                layer._update();
            }
            this._redraw();
        },
        _update: function() {
            if (this._map._animatingZoom && this._bounds) return;
            Renderer.prototype._update.call(this);
            var b = this._bounds, container = this._container, size = b.getSize(), m = Browser.retina ? 2 : 1;
            setPosition(container, b.min);
            // set canvas size (also clearing it); use double size on retina
            container.width = m * size.x;
            container.height = m * size.y;
            container.style.width = size.x + "px";
            container.style.height = size.y + "px";
            if (Browser.retina) this._ctx.scale(2, 2);
            // translate so we use the same path coordinates after canvas element moves
            this._ctx.translate(-b.min.x, -b.min.y);
            // Tell paths to redraw themselves
            this.fire("update");
        },
        _reset: function() {
            Renderer.prototype._reset.call(this);
            if (this._postponeUpdatePaths) {
                this._postponeUpdatePaths = false;
                this._updatePaths();
            }
        },
        _initPath: function(layer) {
            this._updateDashArray(layer);
            this._layers[stamp(layer)] = layer;
            var order = layer._order = {
                layer: layer,
                prev: this._drawLast,
                next: null
            };
            if (this._drawLast) this._drawLast.next = order;
            this._drawLast = order;
            this._drawFirst = this._drawFirst || this._drawLast;
        },
        _addPath: function(layer) {
            this._requestRedraw(layer);
        },
        _removePath: function(layer) {
            var order = layer._order;
            var next = order.next;
            var prev = order.prev;
            if (next) next.prev = prev;
            else this._drawLast = prev;
            if (prev) prev.next = next;
            else this._drawFirst = next;
            delete layer._order;
            delete this._layers[stamp(layer)];
            this._requestRedraw(layer);
        },
        _updatePath: function(layer) {
            // Redraw the union of the layer's old pixel
            // bounds and the new pixel bounds.
            this._extendRedrawBounds(layer);
            layer._project();
            layer._update();
            // The redraw will extend the redraw bounds
            // with the new pixel bounds.
            this._requestRedraw(layer);
        },
        _updateStyle: function(layer) {
            this._updateDashArray(layer);
            this._requestRedraw(layer);
        },
        _updateDashArray: function(layer) {
            if (typeof layer.options.dashArray === "string") {
                var parts = layer.options.dashArray.split(/[, ]+/), dashArray = [], dashValue, i;
                for(i = 0; i < parts.length; i++){
                    dashValue = Number(parts[i]);
                    // Ignore dash array containing invalid lengths
                    if (isNaN(dashValue)) return;
                    dashArray.push(dashValue);
                }
                layer.options._dashArray = dashArray;
            } else layer.options._dashArray = layer.options.dashArray;
        },
        _requestRedraw: function(layer) {
            if (!this._map) return;
            this._extendRedrawBounds(layer);
            this._redrawRequest = this._redrawRequest || requestAnimFrame(this._redraw, this);
        },
        _extendRedrawBounds: function(layer) {
            if (layer._pxBounds) {
                var padding = (layer.options.weight || 0) + 1;
                this._redrawBounds = this._redrawBounds || new Bounds();
                this._redrawBounds.extend(layer._pxBounds.min.subtract([
                    padding,
                    padding
                ]));
                this._redrawBounds.extend(layer._pxBounds.max.add([
                    padding,
                    padding
                ]));
            }
        },
        _redraw: function() {
            this._redrawRequest = null;
            if (this._redrawBounds) {
                this._redrawBounds.min._floor();
                this._redrawBounds.max._ceil();
            }
            this._clear(); // clear layers in redraw bounds
            this._draw(); // draw layers
            this._redrawBounds = null;
        },
        _clear: function() {
            var bounds = this._redrawBounds;
            if (bounds) {
                var size = bounds.getSize();
                this._ctx.clearRect(bounds.min.x, bounds.min.y, size.x, size.y);
            } else {
                this._ctx.save();
                this._ctx.setTransform(1, 0, 0, 1, 0, 0);
                this._ctx.clearRect(0, 0, this._container.width, this._container.height);
                this._ctx.restore();
            }
        },
        _draw: function() {
            var layer, bounds = this._redrawBounds;
            this._ctx.save();
            if (bounds) {
                var size = bounds.getSize();
                this._ctx.beginPath();
                this._ctx.rect(bounds.min.x, bounds.min.y, size.x, size.y);
                this._ctx.clip();
            }
            this._drawing = true;
            for(var order = this._drawFirst; order; order = order.next){
                layer = order.layer;
                if (!bounds || layer._pxBounds && layer._pxBounds.intersects(bounds)) layer._updatePath();
            }
            this._drawing = false;
            this._ctx.restore(); // Restore state before clipping.
        },
        _updatePoly: function(layer, closed) {
            if (!this._drawing) return;
            var i, j, len2, p, parts = layer._parts, len = parts.length, ctx = this._ctx;
            if (!len) return;
            ctx.beginPath();
            for(i = 0; i < len; i++){
                for(j = 0, len2 = parts[i].length; j < len2; j++){
                    p = parts[i][j];
                    ctx[j ? "lineTo" : "moveTo"](p.x, p.y);
                }
                if (closed) ctx.closePath();
            }
            this._fillStroke(ctx, layer);
        // TODO optimization: 1 fill/stroke for all features with equal style instead of 1 for each feature
        },
        _updateCircle: function(layer) {
            if (!this._drawing || layer._empty()) return;
            var p = layer._point, ctx = this._ctx, r = Math.max(Math.round(layer._radius), 1), s = (Math.max(Math.round(layer._radiusY), 1) || r) / r;
            if (s !== 1) {
                ctx.save();
                ctx.scale(1, s);
            }
            ctx.beginPath();
            ctx.arc(p.x, p.y / s, r, 0, Math.PI * 2, false);
            if (s !== 1) ctx.restore();
            this._fillStroke(ctx, layer);
        },
        _fillStroke: function(ctx, layer) {
            var options = layer.options;
            if (options.fill) {
                ctx.globalAlpha = options.fillOpacity;
                ctx.fillStyle = options.fillColor || options.color;
                ctx.fill(options.fillRule || "evenodd");
            }
            if (options.stroke && options.weight !== 0) {
                if (ctx.setLineDash) ctx.setLineDash(layer.options && layer.options._dashArray || []);
                ctx.globalAlpha = options.opacity;
                ctx.lineWidth = options.weight;
                ctx.strokeStyle = options.color;
                ctx.lineCap = options.lineCap;
                ctx.lineJoin = options.lineJoin;
                ctx.stroke();
            }
        },
        // Canvas obviously doesn't have mouse events for individual drawn objects,
        // so we emulate that by calculating what's under the mouse on mousemove/click manually
        _onClick: function(e) {
            var point = this._map.mouseEventToLayerPoint(e), layer, clickedLayer;
            for(var order = this._drawFirst; order; order = order.next){
                layer = order.layer;
                if (layer.options.interactive && layer._containsPoint(point)) {
                    if (!(e.type === "click" || e.type === "preclick") || !this._map._draggableMoved(layer)) clickedLayer = layer;
                }
            }
            this._fireEvent(clickedLayer ? [
                clickedLayer
            ] : false, e);
        },
        _onMouseMove: function(e) {
            if (!this._map || this._map.dragging.moving() || this._map._animatingZoom) return;
            var point = this._map.mouseEventToLayerPoint(e);
            this._handleMouseHover(e, point);
        },
        _handleMouseOut: function(e) {
            var layer = this._hoveredLayer;
            if (layer) {
                // if we're leaving the layer, fire mouseout
                removeClass(this._container, "leaflet-interactive");
                this._fireEvent([
                    layer
                ], e, "mouseout");
                this._hoveredLayer = null;
                this._mouseHoverThrottled = false;
            }
        },
        _handleMouseHover: function(e, point) {
            if (this._mouseHoverThrottled) return;
            var layer, candidateHoveredLayer;
            for(var order = this._drawFirst; order; order = order.next){
                layer = order.layer;
                if (layer.options.interactive && layer._containsPoint(point)) candidateHoveredLayer = layer;
            }
            if (candidateHoveredLayer !== this._hoveredLayer) {
                this._handleMouseOut(e);
                if (candidateHoveredLayer) {
                    addClass(this._container, "leaflet-interactive"); // change cursor
                    this._fireEvent([
                        candidateHoveredLayer
                    ], e, "mouseover");
                    this._hoveredLayer = candidateHoveredLayer;
                }
            }
            this._fireEvent(this._hoveredLayer ? [
                this._hoveredLayer
            ] : false, e);
            this._mouseHoverThrottled = true;
            setTimeout(bind(function() {
                this._mouseHoverThrottled = false;
            }, this), 32);
        },
        _fireEvent: function(layers, e, type) {
            this._map._fireDOMEvent(e, type || e.type, layers);
        },
        _bringToFront: function(layer) {
            var order = layer._order;
            if (!order) return;
            var next = order.next;
            var prev = order.prev;
            if (next) next.prev = prev;
            else // Already last
            return;
            if (prev) prev.next = next;
            else if (next) // Update first entry unless this is the
            // single entry
            this._drawFirst = next;
            order.prev = this._drawLast;
            this._drawLast.next = order;
            order.next = null;
            this._drawLast = order;
            this._requestRedraw(layer);
        },
        _bringToBack: function(layer) {
            var order = layer._order;
            if (!order) return;
            var next = order.next;
            var prev = order.prev;
            if (prev) prev.next = next;
            else // Already first
            return;
            if (next) next.prev = prev;
            else if (prev) // Update last entry unless this is the
            // single entry
            this._drawLast = prev;
            order.prev = null;
            order.next = this._drawFirst;
            this._drawFirst.prev = order;
            this._drawFirst = order;
            this._requestRedraw(layer);
        }
    });
    // @factory L.canvas(options?: Renderer options)
    // Creates a Canvas renderer with the given options.
    function canvas(options) {
        return Browser.canvas ? new Canvas(options) : null;
    }
    /*
   * Thanks to Dmitry Baranovsky and his Raphael library for inspiration!
   */ var vmlCreate = function() {
        try {
            document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml");
            return function(name) {
                return document.createElement("<lvml:" + name + ' class="lvml">');
            };
        } catch (e) {
        // Do not return fn from catch block so `e` can be garbage collected
        // See https://github.com/Leaflet/Leaflet/pull/7279
        }
        return function(name) {
            return document.createElement("<" + name + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
        };
    }();
    /*
   * @class SVG
   *
   *
   * VML was deprecated in 2012, which means VML functionality exists only for backwards compatibility
   * with old versions of Internet Explorer.
   */ // mixin to redefine some SVG methods to handle VML syntax which is similar but with some differences
    var vmlMixin = {
        _initContainer: function() {
            this._container = create$1("div", "leaflet-vml-container");
        },
        _update: function() {
            if (this._map._animatingZoom) return;
            Renderer.prototype._update.call(this);
            this.fire("update");
        },
        _initPath: function(layer) {
            var container = layer._container = vmlCreate("shape");
            addClass(container, "leaflet-vml-shape " + (this.options.className || ""));
            container.coordsize = "1 1";
            layer._path = vmlCreate("path");
            container.appendChild(layer._path);
            this._updateStyle(layer);
            this._layers[stamp(layer)] = layer;
        },
        _addPath: function(layer) {
            var container = layer._container;
            this._container.appendChild(container);
            if (layer.options.interactive) layer.addInteractiveTarget(container);
        },
        _removePath: function(layer) {
            var container = layer._container;
            remove(container);
            layer.removeInteractiveTarget(container);
            delete this._layers[stamp(layer)];
        },
        _updateStyle: function(layer) {
            var stroke = layer._stroke, fill = layer._fill, options = layer.options, container = layer._container;
            container.stroked = !!options.stroke;
            container.filled = !!options.fill;
            if (options.stroke) {
                if (!stroke) stroke = layer._stroke = vmlCreate("stroke");
                container.appendChild(stroke);
                stroke.weight = options.weight + "px";
                stroke.color = options.color;
                stroke.opacity = options.opacity;
                if (options.dashArray) stroke.dashStyle = isArray(options.dashArray) ? options.dashArray.join(" ") : options.dashArray.replace(/( *, *)/g, " ");
                else stroke.dashStyle = "";
                stroke.endcap = options.lineCap.replace("butt", "flat");
                stroke.joinstyle = options.lineJoin;
            } else if (stroke) {
                container.removeChild(stroke);
                layer._stroke = null;
            }
            if (options.fill) {
                if (!fill) fill = layer._fill = vmlCreate("fill");
                container.appendChild(fill);
                fill.color = options.fillColor || options.color;
                fill.opacity = options.fillOpacity;
            } else if (fill) {
                container.removeChild(fill);
                layer._fill = null;
            }
        },
        _updateCircle: function(layer) {
            var p = layer._point.round(), r = Math.round(layer._radius), r2 = Math.round(layer._radiusY || r);
            this._setPath(layer, layer._empty() ? "M0 0" : "AL " + p.x + "," + p.y + " " + r + "," + r2 + " 0," + 23592600);
        },
        _setPath: function(layer, path) {
            layer._path.v = path;
        },
        _bringToFront: function(layer) {
            toFront(layer._container);
        },
        _bringToBack: function(layer) {
            toBack(layer._container);
        }
    };
    var create = Browser.vml ? vmlCreate : svgCreate;
    /*
   * @class SVG
   * @inherits Renderer
   * @aka L.SVG
   *
   * Allows vector layers to be displayed with [SVG](https://developer.mozilla.org/docs/Web/SVG).
   * Inherits `Renderer`.
   *
   * Due to [technical limitations](https://caniuse.com/svg), SVG is not
   * available in all web browsers, notably Android 2.x and 3.x.
   *
   * Although SVG is not available on IE7 and IE8, these browsers support
   * [VML](https://en.wikipedia.org/wiki/Vector_Markup_Language)
   * (a now deprecated technology), and the SVG renderer will fall back to VML in
   * this case.
   *
   * @example
   *
   * Use SVG by default for all paths in the map:
   *
   * ```js
   * var map = L.map('map', {
   * 	renderer: L.svg()
   * });
   * ```
   *
   * Use a SVG renderer with extra padding for specific vector geometries:
   *
   * ```js
   * var map = L.map('map');
   * var myRenderer = L.svg({ padding: 0.5 });
   * var line = L.polyline( coordinates, { renderer: myRenderer } );
   * var circle = L.circle( center, { renderer: myRenderer } );
   * ```
   */ var SVG = Renderer.extend({
        _initContainer: function() {
            this._container = create("svg");
            // makes it possible to click through svg root; we'll reset it back in individual paths
            this._container.setAttribute("pointer-events", "none");
            this._rootGroup = create("g");
            this._container.appendChild(this._rootGroup);
        },
        _destroyContainer: function() {
            remove(this._container);
            off(this._container);
            delete this._container;
            delete this._rootGroup;
            delete this._svgSize;
        },
        _update: function() {
            if (this._map._animatingZoom && this._bounds) return;
            Renderer.prototype._update.call(this);
            var b = this._bounds, size = b.getSize(), container = this._container;
            // set size of svg-container if changed
            if (!this._svgSize || !this._svgSize.equals(size)) {
                this._svgSize = size;
                container.setAttribute("width", size.x);
                container.setAttribute("height", size.y);
            }
            // movement: update container viewBox so that we don't have to change coordinates of individual layers
            setPosition(container, b.min);
            container.setAttribute("viewBox", [
                b.min.x,
                b.min.y,
                size.x,
                size.y
            ].join(" "));
            this.fire("update");
        },
        // methods below are called by vector layers implementations
        _initPath: function(layer) {
            var path = layer._path = create("path");
            // @namespace Path
            // @option className: String = null
            // Custom class name set on an element. Only for SVG renderer.
            if (layer.options.className) addClass(path, layer.options.className);
            if (layer.options.interactive) addClass(path, "leaflet-interactive");
            this._updateStyle(layer);
            this._layers[stamp(layer)] = layer;
        },
        _addPath: function(layer) {
            if (!this._rootGroup) this._initContainer();
            this._rootGroup.appendChild(layer._path);
            layer.addInteractiveTarget(layer._path);
        },
        _removePath: function(layer) {
            remove(layer._path);
            layer.removeInteractiveTarget(layer._path);
            delete this._layers[stamp(layer)];
        },
        _updatePath: function(layer) {
            layer._project();
            layer._update();
        },
        _updateStyle: function(layer) {
            var path = layer._path, options = layer.options;
            if (!path) return;
            if (options.stroke) {
                path.setAttribute("stroke", options.color);
                path.setAttribute("stroke-opacity", options.opacity);
                path.setAttribute("stroke-width", options.weight);
                path.setAttribute("stroke-linecap", options.lineCap);
                path.setAttribute("stroke-linejoin", options.lineJoin);
                if (options.dashArray) path.setAttribute("stroke-dasharray", options.dashArray);
                else path.removeAttribute("stroke-dasharray");
                if (options.dashOffset) path.setAttribute("stroke-dashoffset", options.dashOffset);
                else path.removeAttribute("stroke-dashoffset");
            } else path.setAttribute("stroke", "none");
            if (options.fill) {
                path.setAttribute("fill", options.fillColor || options.color);
                path.setAttribute("fill-opacity", options.fillOpacity);
                path.setAttribute("fill-rule", options.fillRule || "evenodd");
            } else path.setAttribute("fill", "none");
        },
        _updatePoly: function(layer, closed) {
            this._setPath(layer, pointsToPath(layer._parts, closed));
        },
        _updateCircle: function(layer) {
            var p = layer._point, r = Math.max(Math.round(layer._radius), 1), r2 = Math.max(Math.round(layer._radiusY), 1) || r, arc = "a" + r + "," + r2 + " 0 1,0 ";
            // drawing a circle with two half-arcs
            var d = layer._empty() ? "M0 0" : "M" + (p.x - r) + "," + p.y + arc + r * 2 + ",0 " + arc + -r * 2 + ",0 ";
            this._setPath(layer, d);
        },
        _setPath: function(layer, path) {
            layer._path.setAttribute("d", path);
        },
        // SVG does not have the concept of zIndex so we resort to changing the DOM order of elements
        _bringToFront: function(layer) {
            toFront(layer._path);
        },
        _bringToBack: function(layer) {
            toBack(layer._path);
        }
    });
    if (Browser.vml) SVG.include(vmlMixin);
    // @namespace SVG
    // @factory L.svg(options?: Renderer options)
    // Creates a SVG renderer with the given options.
    function svg(options) {
        return Browser.svg || Browser.vml ? new SVG(options) : null;
    }
    Map.include({
        // @namespace Map; @method getRenderer(layer: Path): Renderer
        // Returns the instance of `Renderer` that should be used to render the given
        // `Path`. It will ensure that the `renderer` options of the map and paths
        // are respected, and that the renderers do exist on the map.
        getRenderer: function(layer) {
            // @namespace Path; @option renderer: Renderer
            // Use this specific instance of `Renderer` for this path. Takes
            // precedence over the map's [default renderer](#map-renderer).
            var renderer = layer.options.renderer || this._getPaneRenderer(layer.options.pane) || this.options.renderer || this._renderer;
            if (!renderer) renderer = this._renderer = this._createRenderer();
            if (!this.hasLayer(renderer)) this.addLayer(renderer);
            return renderer;
        },
        _getPaneRenderer: function(name) {
            if (name === "overlayPane" || name === undefined) return false;
            var renderer = this._paneRenderers[name];
            if (renderer === undefined) {
                renderer = this._createRenderer({
                    pane: name
                });
                this._paneRenderers[name] = renderer;
            }
            return renderer;
        },
        _createRenderer: function(options) {
            // @namespace Map; @option preferCanvas: Boolean = false
            // Whether `Path`s should be rendered on a `Canvas` renderer.
            // By default, all `Path`s are rendered in a `SVG` renderer.
            return this.options.preferCanvas && canvas(options) || svg(options);
        }
    });
    /*
   * L.Rectangle extends Polygon and creates a rectangle when passed a LatLngBounds object.
   */ /*
   * @class Rectangle
   * @aka L.Rectangle
   * @inherits Polygon
   *
   * A class for drawing rectangle overlays on a map. Extends `Polygon`.
   *
   * @example
   *
   * ```js
   * // define rectangle geographical bounds
   * var bounds = [[54.559322, -5.767822], [56.1210604, -3.021240]];
   *
   * // create an orange rectangle
   * L.rectangle(bounds, {color: "#ff7800", weight: 1}).addTo(map);
   *
   * // zoom the map to the rectangle bounds
   * map.fitBounds(bounds);
   * ```
   *
   */ var Rectangle = Polygon.extend({
        initialize: function(latLngBounds, options) {
            Polygon.prototype.initialize.call(this, this._boundsToLatLngs(latLngBounds), options);
        },
        // @method setBounds(latLngBounds: LatLngBounds): this
        // Redraws the rectangle with the passed bounds.
        setBounds: function(latLngBounds) {
            return this.setLatLngs(this._boundsToLatLngs(latLngBounds));
        },
        _boundsToLatLngs: function(latLngBounds) {
            latLngBounds = toLatLngBounds(latLngBounds);
            return [
                latLngBounds.getSouthWest(),
                latLngBounds.getNorthWest(),
                latLngBounds.getNorthEast(),
                latLngBounds.getSouthEast()
            ];
        }
    });
    // @factory L.rectangle(latLngBounds: LatLngBounds, options?: Polyline options)
    function rectangle(latLngBounds, options) {
        return new Rectangle(latLngBounds, options);
    }
    SVG.create = create;
    SVG.pointsToPath = pointsToPath;
    GeoJSON.geometryToLayer = geometryToLayer;
    GeoJSON.coordsToLatLng = coordsToLatLng;
    GeoJSON.coordsToLatLngs = coordsToLatLngs;
    GeoJSON.latLngToCoords = latLngToCoords;
    GeoJSON.latLngsToCoords = latLngsToCoords;
    GeoJSON.getFeature = getFeature;
    GeoJSON.asFeature = asFeature;
    /*
   * L.Handler.BoxZoom is used to add shift-drag zoom interaction to the map
   * (zoom to a selected bounding box), enabled by default.
   */ // @namespace Map
    // @section Interaction Options
    Map.mergeOptions({
        // @option boxZoom: Boolean = true
        // Whether the map can be zoomed to a rectangular area specified by
        // dragging the mouse while pressing the shift key.
        boxZoom: true
    });
    var BoxZoom = Handler.extend({
        initialize: function(map) {
            this._map = map;
            this._container = map._container;
            this._pane = map._panes.overlayPane;
            this._resetStateTimeout = 0;
            map.on("unload", this._destroy, this);
        },
        addHooks: function() {
            on(this._container, "mousedown", this._onMouseDown, this);
        },
        removeHooks: function() {
            off(this._container, "mousedown", this._onMouseDown, this);
        },
        moved: function() {
            return this._moved;
        },
        _destroy: function() {
            remove(this._pane);
            delete this._pane;
        },
        _resetState: function() {
            this._resetStateTimeout = 0;
            this._moved = false;
        },
        _clearDeferredResetState: function() {
            if (this._resetStateTimeout !== 0) {
                clearTimeout(this._resetStateTimeout);
                this._resetStateTimeout = 0;
            }
        },
        _onMouseDown: function(e) {
            if (!e.shiftKey || e.which !== 1 && e.button !== 1) return false;
            // Clear the deferred resetState if it hasn't executed yet, otherwise it
            // will interrupt the interaction and orphan a box element in the container.
            this._clearDeferredResetState();
            this._resetState();
            disableTextSelection();
            disableImageDrag();
            this._startPoint = this._map.mouseEventToContainerPoint(e);
            on(document, {
                contextmenu: stop,
                mousemove: this._onMouseMove,
                mouseup: this._onMouseUp,
                keydown: this._onKeyDown
            }, this);
        },
        _onMouseMove: function(e) {
            if (!this._moved) {
                this._moved = true;
                this._box = create$1("div", "leaflet-zoom-box", this._container);
                addClass(this._container, "leaflet-crosshair");
                this._map.fire("boxzoomstart");
            }
            this._point = this._map.mouseEventToContainerPoint(e);
            var bounds = new Bounds(this._point, this._startPoint), size = bounds.getSize();
            setPosition(this._box, bounds.min);
            this._box.style.width = size.x + "px";
            this._box.style.height = size.y + "px";
        },
        _finish: function() {
            if (this._moved) {
                remove(this._box);
                removeClass(this._container, "leaflet-crosshair");
            }
            enableTextSelection();
            enableImageDrag();
            off(document, {
                contextmenu: stop,
                mousemove: this._onMouseMove,
                mouseup: this._onMouseUp,
                keydown: this._onKeyDown
            }, this);
        },
        _onMouseUp: function(e) {
            if (e.which !== 1 && e.button !== 1) return;
            this._finish();
            if (!this._moved) return;
            // Postpone to next JS tick so internal click event handling
            // still see it as "moved".
            this._clearDeferredResetState();
            this._resetStateTimeout = setTimeout(bind(this._resetState, this), 0);
            var bounds = new LatLngBounds(this._map.containerPointToLatLng(this._startPoint), this._map.containerPointToLatLng(this._point));
            this._map.fitBounds(bounds).fire("boxzoomend", {
                boxZoomBounds: bounds
            });
        },
        _onKeyDown: function(e) {
            if (e.keyCode === 27) {
                this._finish();
                this._clearDeferredResetState();
                this._resetState();
            }
        }
    });
    // @section Handlers
    // @property boxZoom: Handler
    // Box (shift-drag with mouse) zoom handler.
    Map.addInitHook("addHandler", "boxZoom", BoxZoom);
    /*
   * L.Handler.DoubleClickZoom is used to handle double-click zoom on the map, enabled by default.
   */ // @namespace Map
    // @section Interaction Options
    Map.mergeOptions({
        // @option doubleClickZoom: Boolean|String = true
        // Whether the map can be zoomed in by double clicking on it and
        // zoomed out by double clicking while holding shift. If passed
        // `'center'`, double-click zoom will zoom to the center of the
        //  view regardless of where the mouse was.
        doubleClickZoom: true
    });
    var DoubleClickZoom = Handler.extend({
        addHooks: function() {
            this._map.on("dblclick", this._onDoubleClick, this);
        },
        removeHooks: function() {
            this._map.off("dblclick", this._onDoubleClick, this);
        },
        _onDoubleClick: function(e) {
            var map = this._map, oldZoom = map.getZoom(), delta = map.options.zoomDelta, zoom = e.originalEvent.shiftKey ? oldZoom - delta : oldZoom + delta;
            if (map.options.doubleClickZoom === "center") map.setZoom(zoom);
            else map.setZoomAround(e.containerPoint, zoom);
        }
    });
    // @section Handlers
    //
    // Map properties include interaction handlers that allow you to control
    // interaction behavior in runtime, enabling or disabling certain features such
    // as dragging or touch zoom (see `Handler` methods). For example:
    //
    // ```js
    // map.doubleClickZoom.disable();
    // ```
    //
    // @property doubleClickZoom: Handler
    // Double click zoom handler.
    Map.addInitHook("addHandler", "doubleClickZoom", DoubleClickZoom);
    /*
   * L.Handler.MapDrag is used to make the map draggable (with panning inertia), enabled by default.
   */ // @namespace Map
    // @section Interaction Options
    Map.mergeOptions({
        // @option dragging: Boolean = true
        // Whether the map is draggable with mouse/touch or not.
        dragging: true,
        // @section Panning Inertia Options
        // @option inertia: Boolean = *
        // If enabled, panning of the map will have an inertia effect where
        // the map builds momentum while dragging and continues moving in
        // the same direction for some time. Feels especially nice on touch
        // devices. Enabled by default.
        inertia: true,
        // @option inertiaDeceleration: Number = 3000
        // The rate with which the inertial movement slows down, in pixels/second².
        inertiaDeceleration: 3400,
        // @option inertiaMaxSpeed: Number = Infinity
        // Max speed of the inertial movement, in pixels/second.
        inertiaMaxSpeed: Infinity,
        // @option easeLinearity: Number = 0.2
        easeLinearity: 0.2,
        // TODO refactor, move to CRS
        // @option worldCopyJump: Boolean = false
        // With this option enabled, the map tracks when you pan to another "copy"
        // of the world and seamlessly jumps to the original one so that all overlays
        // like markers and vector layers are still visible.
        worldCopyJump: false,
        // @option maxBoundsViscosity: Number = 0.0
        // If `maxBounds` is set, this option will control how solid the bounds
        // are when dragging the map around. The default value of `0.0` allows the
        // user to drag outside the bounds at normal speed, higher values will
        // slow down map dragging outside bounds, and `1.0` makes the bounds fully
        // solid, preventing the user from dragging outside the bounds.
        maxBoundsViscosity: 0.0
    });
    var Drag = Handler.extend({
        addHooks: function() {
            if (!this._draggable) {
                var map = this._map;
                this._draggable = new Draggable(map._mapPane, map._container);
                this._draggable.on({
                    dragstart: this._onDragStart,
                    drag: this._onDrag,
                    dragend: this._onDragEnd
                }, this);
                this._draggable.on("predrag", this._onPreDragLimit, this);
                if (map.options.worldCopyJump) {
                    this._draggable.on("predrag", this._onPreDragWrap, this);
                    map.on("zoomend", this._onZoomEnd, this);
                    map.whenReady(this._onZoomEnd, this);
                }
            }
            addClass(this._map._container, "leaflet-grab leaflet-touch-drag");
            this._draggable.enable();
            this._positions = [];
            this._times = [];
        },
        removeHooks: function() {
            removeClass(this._map._container, "leaflet-grab");
            removeClass(this._map._container, "leaflet-touch-drag");
            this._draggable.disable();
        },
        moved: function() {
            return this._draggable && this._draggable._moved;
        },
        moving: function() {
            return this._draggable && this._draggable._moving;
        },
        _onDragStart: function() {
            var map = this._map;
            map._stop();
            if (this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
                var bounds = toLatLngBounds(this._map.options.maxBounds);
                this._offsetLimit = toBounds(this._map.latLngToContainerPoint(bounds.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(bounds.getSouthEast()).multiplyBy(-1).add(this._map.getSize()));
                this._viscosity = Math.min(1.0, Math.max(0.0, this._map.options.maxBoundsViscosity));
            } else this._offsetLimit = null;
            map.fire("movestart").fire("dragstart");
            if (map.options.inertia) {
                this._positions = [];
                this._times = [];
            }
        },
        _onDrag: function(e) {
            if (this._map.options.inertia) {
                var time = this._lastTime = +new Date(), pos = this._lastPos = this._draggable._absPos || this._draggable._newPos;
                this._positions.push(pos);
                this._times.push(time);
                this._prunePositions(time);
            }
            this._map.fire("move", e).fire("drag", e);
        },
        _prunePositions: function(time) {
            while(this._positions.length > 1 && time - this._times[0] > 50){
                this._positions.shift();
                this._times.shift();
            }
        },
        _onZoomEnd: function() {
            var pxCenter = this._map.getSize().divideBy(2), pxWorldCenter = this._map.latLngToLayerPoint([
                0,
                0
            ]);
            this._initialWorldOffset = pxWorldCenter.subtract(pxCenter).x;
            this._worldWidth = this._map.getPixelWorldBounds().getSize().x;
        },
        _viscousLimit: function(value, threshold) {
            return value - (value - threshold) * this._viscosity;
        },
        _onPreDragLimit: function() {
            if (!this._viscosity || !this._offsetLimit) return;
            var offset = this._draggable._newPos.subtract(this._draggable._startPos);
            var limit = this._offsetLimit;
            if (offset.x < limit.min.x) offset.x = this._viscousLimit(offset.x, limit.min.x);
            if (offset.y < limit.min.y) offset.y = this._viscousLimit(offset.y, limit.min.y);
            if (offset.x > limit.max.x) offset.x = this._viscousLimit(offset.x, limit.max.x);
            if (offset.y > limit.max.y) offset.y = this._viscousLimit(offset.y, limit.max.y);
            this._draggable._newPos = this._draggable._startPos.add(offset);
        },
        _onPreDragWrap: function() {
            // TODO refactor to be able to adjust map pane position after zoom
            var worldWidth = this._worldWidth, halfWidth = Math.round(worldWidth / 2), dx = this._initialWorldOffset, x = this._draggable._newPos.x, newX1 = (x - halfWidth + dx) % worldWidth + halfWidth - dx, newX2 = (x + halfWidth + dx) % worldWidth - halfWidth - dx, newX = Math.abs(newX1 + dx) < Math.abs(newX2 + dx) ? newX1 : newX2;
            this._draggable._absPos = this._draggable._newPos.clone();
            this._draggable._newPos.x = newX;
        },
        _onDragEnd: function(e) {
            var map = this._map, options = map.options, noInertia = !options.inertia || e.noInertia || this._times.length < 2;
            map.fire("dragend", e);
            if (noInertia) map.fire("moveend");
            else {
                this._prunePositions(+new Date());
                var direction = this._lastPos.subtract(this._positions[0]), duration = (this._lastTime - this._times[0]) / 1000, ease = options.easeLinearity, speedVector = direction.multiplyBy(ease / duration), speed = speedVector.distanceTo([
                    0,
                    0
                ]), limitedSpeed = Math.min(options.inertiaMaxSpeed, speed), limitedSpeedVector = speedVector.multiplyBy(limitedSpeed / speed), decelerationDuration = limitedSpeed / (options.inertiaDeceleration * ease), offset = limitedSpeedVector.multiplyBy(-decelerationDuration / 2).round();
                if (!offset.x && !offset.y) map.fire("moveend");
                else {
                    offset = map._limitOffset(offset, map.options.maxBounds);
                    requestAnimFrame(function() {
                        map.panBy(offset, {
                            duration: decelerationDuration,
                            easeLinearity: ease,
                            noMoveStart: true,
                            animate: true
                        });
                    });
                }
            }
        }
    });
    // @section Handlers
    // @property dragging: Handler
    // Map dragging handler (by both mouse and touch).
    Map.addInitHook("addHandler", "dragging", Drag);
    /*
   * L.Map.Keyboard is handling keyboard interaction with the map, enabled by default.
   */ // @namespace Map
    // @section Keyboard Navigation Options
    Map.mergeOptions({
        // @option keyboard: Boolean = true
        // Makes the map focusable and allows users to navigate the map with keyboard
        // arrows and `+`/`-` keys.
        keyboard: true,
        // @option keyboardPanDelta: Number = 80
        // Amount of pixels to pan when pressing an arrow key.
        keyboardPanDelta: 80
    });
    var Keyboard = Handler.extend({
        keyCodes: {
            left: [
                37
            ],
            right: [
                39
            ],
            down: [
                40
            ],
            up: [
                38
            ],
            zoomIn: [
                187,
                107,
                61,
                171
            ],
            zoomOut: [
                189,
                109,
                54,
                173
            ]
        },
        initialize: function(map) {
            this._map = map;
            this._setPanDelta(map.options.keyboardPanDelta);
            this._setZoomDelta(map.options.zoomDelta);
        },
        addHooks: function() {
            var container = this._map._container;
            // make the container focusable by tabbing
            if (container.tabIndex <= 0) container.tabIndex = "0";
            on(container, {
                focus: this._onFocus,
                blur: this._onBlur,
                mousedown: this._onMouseDown
            }, this);
            this._map.on({
                focus: this._addHooks,
                blur: this._removeHooks
            }, this);
        },
        removeHooks: function() {
            this._removeHooks();
            off(this._map._container, {
                focus: this._onFocus,
                blur: this._onBlur,
                mousedown: this._onMouseDown
            }, this);
            this._map.off({
                focus: this._addHooks,
                blur: this._removeHooks
            }, this);
        },
        _onMouseDown: function() {
            if (this._focused) return;
            var body = document.body, docEl = document.documentElement, top = body.scrollTop || docEl.scrollTop, left = body.scrollLeft || docEl.scrollLeft;
            this._map._container.focus();
            window.scrollTo(left, top);
        },
        _onFocus: function() {
            this._focused = true;
            this._map.fire("focus");
        },
        _onBlur: function() {
            this._focused = false;
            this._map.fire("blur");
        },
        _setPanDelta: function(panDelta) {
            var keys = this._panKeys = {}, codes = this.keyCodes, i, len;
            for(i = 0, len = codes.left.length; i < len; i++)keys[codes.left[i]] = [
                -1 * panDelta,
                0
            ];
            for(i = 0, len = codes.right.length; i < len; i++)keys[codes.right[i]] = [
                panDelta,
                0
            ];
            for(i = 0, len = codes.down.length; i < len; i++)keys[codes.down[i]] = [
                0,
                panDelta
            ];
            for(i = 0, len = codes.up.length; i < len; i++)keys[codes.up[i]] = [
                0,
                -1 * panDelta
            ];
        },
        _setZoomDelta: function(zoomDelta) {
            var keys = this._zoomKeys = {}, codes = this.keyCodes, i, len;
            for(i = 0, len = codes.zoomIn.length; i < len; i++)keys[codes.zoomIn[i]] = zoomDelta;
            for(i = 0, len = codes.zoomOut.length; i < len; i++)keys[codes.zoomOut[i]] = -zoomDelta;
        },
        _addHooks: function() {
            on(document, "keydown", this._onKeyDown, this);
        },
        _removeHooks: function() {
            off(document, "keydown", this._onKeyDown, this);
        },
        _onKeyDown: function(e) {
            if (e.altKey || e.ctrlKey || e.metaKey) return;
            var key = e.keyCode, map = this._map, offset;
            if (key in this._panKeys) {
                if (!map._panAnim || !map._panAnim._inProgress) {
                    offset = this._panKeys[key];
                    if (e.shiftKey) offset = toPoint(offset).multiplyBy(3);
                    if (map.options.maxBounds) offset = map._limitOffset(toPoint(offset), map.options.maxBounds);
                    if (map.options.worldCopyJump) {
                        var newLatLng = map.wrapLatLng(map.unproject(map.project(map.getCenter()).add(offset)));
                        map.panTo(newLatLng);
                    } else map.panBy(offset);
                }
            } else if (key in this._zoomKeys) map.setZoom(map.getZoom() + (e.shiftKey ? 3 : 1) * this._zoomKeys[key]);
            else if (key === 27 && map._popup && map._popup.options.closeOnEscapeKey) map.closePopup();
            else return;
            stop(e);
        }
    });
    // @section Handlers
    // @section Handlers
    // @property keyboard: Handler
    // Keyboard navigation handler.
    Map.addInitHook("addHandler", "keyboard", Keyboard);
    /*
   * L.Handler.ScrollWheelZoom is used by L.Map to enable mouse scroll wheel zoom on the map.
   */ // @namespace Map
    // @section Interaction Options
    Map.mergeOptions({
        // @section Mouse wheel options
        // @option scrollWheelZoom: Boolean|String = true
        // Whether the map can be zoomed by using the mouse wheel. If passed `'center'`,
        // it will zoom to the center of the view regardless of where the mouse was.
        scrollWheelZoom: true,
        // @option wheelDebounceTime: Number = 40
        // Limits the rate at which a wheel can fire (in milliseconds). By default
        // user can't zoom via wheel more often than once per 40 ms.
        wheelDebounceTime: 40,
        // @option wheelPxPerZoomLevel: Number = 60
        // How many scroll pixels (as reported by [L.DomEvent.getWheelDelta](#domevent-getwheeldelta))
        // mean a change of one full zoom level. Smaller values will make wheel-zooming
        // faster (and vice versa).
        wheelPxPerZoomLevel: 60
    });
    var ScrollWheelZoom = Handler.extend({
        addHooks: function() {
            on(this._map._container, "wheel", this._onWheelScroll, this);
            this._delta = 0;
        },
        removeHooks: function() {
            off(this._map._container, "wheel", this._onWheelScroll, this);
        },
        _onWheelScroll: function(e) {
            var delta = getWheelDelta(e);
            var debounce = this._map.options.wheelDebounceTime;
            this._delta += delta;
            this._lastMousePos = this._map.mouseEventToContainerPoint(e);
            if (!this._startTime) this._startTime = +new Date();
            var left = Math.max(debounce - (+new Date() - this._startTime), 0);
            clearTimeout(this._timer);
            this._timer = setTimeout(bind(this._performZoom, this), left);
            stop(e);
        },
        _performZoom: function() {
            var map = this._map, zoom = map.getZoom(), snap = this._map.options.zoomSnap || 0;
            map._stop(); // stop panning and fly animations if any
            // map the delta with a sigmoid function to -4..4 range leaning on -1..1
            var d2 = this._delta / (this._map.options.wheelPxPerZoomLevel * 4), d3 = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(d2)))) / Math.LN2, d4 = snap ? Math.ceil(d3 / snap) * snap : d3, delta = map._limitZoom(zoom + (this._delta > 0 ? d4 : -d4)) - zoom;
            this._delta = 0;
            this._startTime = null;
            if (!delta) return;
            if (map.options.scrollWheelZoom === "center") map.setZoom(zoom + delta);
            else map.setZoomAround(this._lastMousePos, zoom + delta);
        }
    });
    // @section Handlers
    // @property scrollWheelZoom: Handler
    // Scroll wheel zoom handler.
    Map.addInitHook("addHandler", "scrollWheelZoom", ScrollWheelZoom);
    /*
   * L.Map.TapHold is used to simulate `contextmenu` event on long hold,
   * which otherwise is not fired by mobile Safari.
   */ var tapHoldDelay = 600;
    // @namespace Map
    // @section Interaction Options
    Map.mergeOptions({
        // @section Touch interaction options
        // @option tapHold: Boolean
        // Enables simulation of `contextmenu` event, default is `true` for mobile Safari.
        tapHold: Browser.touchNative && Browser.safari && Browser.mobile,
        // @option tapTolerance: Number = 15
        // The max number of pixels a user can shift his finger during touch
        // for it to be considered a valid tap.
        tapTolerance: 15
    });
    var TapHold = Handler.extend({
        addHooks: function() {
            on(this._map._container, "touchstart", this._onDown, this);
        },
        removeHooks: function() {
            off(this._map._container, "touchstart", this._onDown, this);
        },
        _onDown: function(e) {
            clearTimeout(this._holdTimeout);
            if (e.touches.length !== 1) return;
            var first = e.touches[0];
            this._startPos = this._newPos = new Point(first.clientX, first.clientY);
            this._holdTimeout = setTimeout(bind(function() {
                this._cancel();
                if (!this._isTapValid()) return;
                // prevent simulated mouse events https://w3c.github.io/touch-events/#mouse-events
                on(document, "touchend", preventDefault);
                on(document, "touchend touchcancel", this._cancelClickPrevent);
                this._simulateEvent("contextmenu", first);
            }, this), tapHoldDelay);
            on(document, "touchend touchcancel contextmenu", this._cancel, this);
            on(document, "touchmove", this._onMove, this);
        },
        _cancelClickPrevent: function cancelClickPrevent() {
            off(document, "touchend", preventDefault);
            off(document, "touchend touchcancel", cancelClickPrevent);
        },
        _cancel: function() {
            clearTimeout(this._holdTimeout);
            off(document, "touchend touchcancel contextmenu", this._cancel, this);
            off(document, "touchmove", this._onMove, this);
        },
        _onMove: function(e) {
            var first = e.touches[0];
            this._newPos = new Point(first.clientX, first.clientY);
        },
        _isTapValid: function() {
            return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
        },
        _simulateEvent: function(type, e) {
            var simulatedEvent = new MouseEvent(type, {
                bubbles: true,
                cancelable: true,
                view: window,
                // detail: 1,
                screenX: e.screenX,
                screenY: e.screenY,
                clientX: e.clientX,
                clientY: e.clientY
            });
            simulatedEvent._simulated = true;
            e.target.dispatchEvent(simulatedEvent);
        }
    });
    // @section Handlers
    // @property tapHold: Handler
    // Long tap handler to simulate `contextmenu` event (useful in mobile Safari).
    Map.addInitHook("addHandler", "tapHold", TapHold);
    /*
   * L.Handler.TouchZoom is used by L.Map to add pinch zoom on supported mobile browsers.
   */ // @namespace Map
    // @section Interaction Options
    Map.mergeOptions({
        // @section Touch interaction options
        // @option touchZoom: Boolean|String = *
        // Whether the map can be zoomed by touch-dragging with two fingers. If
        // passed `'center'`, it will zoom to the center of the view regardless of
        // where the touch events (fingers) were. Enabled for touch-capable web
        // browsers.
        touchZoom: Browser.touch,
        // @option bounceAtZoomLimits: Boolean = true
        // Set it to false if you don't want the map to zoom beyond min/max zoom
        // and then bounce back when pinch-zooming.
        bounceAtZoomLimits: true
    });
    var TouchZoom = Handler.extend({
        addHooks: function() {
            addClass(this._map._container, "leaflet-touch-zoom");
            on(this._map._container, "touchstart", this._onTouchStart, this);
        },
        removeHooks: function() {
            removeClass(this._map._container, "leaflet-touch-zoom");
            off(this._map._container, "touchstart", this._onTouchStart, this);
        },
        _onTouchStart: function(e) {
            var map = this._map;
            if (!e.touches || e.touches.length !== 2 || map._animatingZoom || this._zooming) return;
            var p1 = map.mouseEventToContainerPoint(e.touches[0]), p2 = map.mouseEventToContainerPoint(e.touches[1]);
            this._centerPoint = map.getSize()._divideBy(2);
            this._startLatLng = map.containerPointToLatLng(this._centerPoint);
            if (map.options.touchZoom !== "center") this._pinchStartLatLng = map.containerPointToLatLng(p1.add(p2)._divideBy(2));
            this._startDist = p1.distanceTo(p2);
            this._startZoom = map.getZoom();
            this._moved = false;
            this._zooming = true;
            map._stop();
            on(document, "touchmove", this._onTouchMove, this);
            on(document, "touchend touchcancel", this._onTouchEnd, this);
            preventDefault(e);
        },
        _onTouchMove: function(e) {
            if (!e.touches || e.touches.length !== 2 || !this._zooming) return;
            var map = this._map, p1 = map.mouseEventToContainerPoint(e.touches[0]), p2 = map.mouseEventToContainerPoint(e.touches[1]), scale = p1.distanceTo(p2) / this._startDist;
            this._zoom = map.getScaleZoom(scale, this._startZoom);
            if (!map.options.bounceAtZoomLimits && (this._zoom < map.getMinZoom() && scale < 1 || this._zoom > map.getMaxZoom() && scale > 1)) this._zoom = map._limitZoom(this._zoom);
            if (map.options.touchZoom === "center") {
                this._center = this._startLatLng;
                if (scale === 1) return;
            } else {
                // Get delta from pinch to center, so centerLatLng is delta applied to initial pinchLatLng
                var delta = p1._add(p2)._divideBy(2)._subtract(this._centerPoint);
                if (scale === 1 && delta.x === 0 && delta.y === 0) return;
                this._center = map.unproject(map.project(this._pinchStartLatLng, this._zoom).subtract(delta), this._zoom);
            }
            if (!this._moved) {
                map._moveStart(true, false);
                this._moved = true;
            }
            cancelAnimFrame(this._animRequest);
            var moveFn = bind(map._move, map, this._center, this._zoom, {
                pinch: true,
                round: false
            }, undefined);
            this._animRequest = requestAnimFrame(moveFn, this, true);
            preventDefault(e);
        },
        _onTouchEnd: function() {
            if (!this._moved || !this._zooming) {
                this._zooming = false;
                return;
            }
            this._zooming = false;
            cancelAnimFrame(this._animRequest);
            off(document, "touchmove", this._onTouchMove, this);
            off(document, "touchend touchcancel", this._onTouchEnd, this);
            // Pinch updates GridLayers' levels only when zoomSnap is off, so zoomSnap becomes noUpdate.
            if (this._map.options.zoomAnimation) this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), true, this._map.options.zoomSnap);
            else this._map._resetView(this._center, this._map._limitZoom(this._zoom));
        }
    });
    // @section Handlers
    // @property touchZoom: Handler
    // Touch zoom handler.
    Map.addInitHook("addHandler", "touchZoom", TouchZoom);
    Map.BoxZoom = BoxZoom;
    Map.DoubleClickZoom = DoubleClickZoom;
    Map.Drag = Drag;
    Map.Keyboard = Keyboard;
    Map.ScrollWheelZoom = ScrollWheelZoom;
    Map.TapHold = TapHold;
    Map.TouchZoom = TouchZoom;
    exports1.Bounds = Bounds;
    exports1.Browser = Browser;
    exports1.CRS = CRS;
    exports1.Canvas = Canvas;
    exports1.Circle = Circle;
    exports1.CircleMarker = CircleMarker;
    exports1.Class = Class;
    exports1.Control = Control;
    exports1.DivIcon = DivIcon;
    exports1.DivOverlay = DivOverlay;
    exports1.DomEvent = DomEvent;
    exports1.DomUtil = DomUtil;
    exports1.Draggable = Draggable;
    exports1.Evented = Evented;
    exports1.FeatureGroup = FeatureGroup;
    exports1.GeoJSON = GeoJSON;
    exports1.GridLayer = GridLayer;
    exports1.Handler = Handler;
    exports1.Icon = Icon;
    exports1.ImageOverlay = ImageOverlay;
    exports1.LatLng = LatLng;
    exports1.LatLngBounds = LatLngBounds;
    exports1.Layer = Layer;
    exports1.LayerGroup = LayerGroup;
    exports1.LineUtil = LineUtil;
    exports1.Map = Map;
    exports1.Marker = Marker;
    exports1.Mixin = Mixin;
    exports1.Path = Path;
    exports1.Point = Point;
    exports1.PolyUtil = PolyUtil;
    exports1.Polygon = Polygon;
    exports1.Polyline = Polyline;
    exports1.Popup = Popup;
    exports1.PosAnimation = PosAnimation;
    exports1.Projection = index;
    exports1.Rectangle = Rectangle;
    exports1.Renderer = Renderer;
    exports1.SVG = SVG;
    exports1.SVGOverlay = SVGOverlay;
    exports1.TileLayer = TileLayer;
    exports1.Tooltip = Tooltip;
    exports1.Transformation = Transformation;
    exports1.Util = Util;
    exports1.VideoOverlay = VideoOverlay;
    exports1.bind = bind;
    exports1.bounds = toBounds;
    exports1.canvas = canvas;
    exports1.circle = circle;
    exports1.circleMarker = circleMarker;
    exports1.control = control;
    exports1.divIcon = divIcon;
    exports1.extend = extend;
    exports1.featureGroup = featureGroup;
    exports1.geoJSON = geoJSON;
    exports1.geoJson = geoJson;
    exports1.gridLayer = gridLayer;
    exports1.icon = icon;
    exports1.imageOverlay = imageOverlay;
    exports1.latLng = toLatLng;
    exports1.latLngBounds = toLatLngBounds;
    exports1.layerGroup = layerGroup;
    exports1.map = createMap;
    exports1.marker = marker;
    exports1.point = toPoint;
    exports1.polygon = polygon;
    exports1.polyline = polyline;
    exports1.popup = popup;
    exports1.rectangle = rectangle;
    exports1.setOptions = setOptions;
    exports1.stamp = stamp;
    exports1.svg = svg;
    exports1.svgOverlay = svgOverlay;
    exports1.tileLayer = tileLayer;
    exports1.tooltip = tooltip;
    exports1.transformation = toTransformation;
    exports1.version = version;
    exports1.videoOverlay = videoOverlay;
    var oldL = window.L;
    exports1.noConflict = function() {
        window.L = oldL;
        return this;
    };
    // Always export us to window global (see #2364)
    window.L = exports1;
});

},{}],"lhpcO":[function(require,module,exports) {
/**
 * Swiper 10.2.0
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2023 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: August 17, 2023
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Swiper", ()=>(0, _swiperCoreMjs.S));
parcelHelpers.export(exports, "default", ()=>(0, _swiperCoreMjs.S));
var _swiperCoreMjs = require("./shared/swiper-core.mjs");
var _virtualMjs = require("./modules/virtual.mjs");
var _virtualMjsDefault = parcelHelpers.interopDefault(_virtualMjs);
var _keyboardMjs = require("./modules/keyboard.mjs");
var _keyboardMjsDefault = parcelHelpers.interopDefault(_keyboardMjs);
var _mousewheelMjs = require("./modules/mousewheel.mjs");
var _mousewheelMjsDefault = parcelHelpers.interopDefault(_mousewheelMjs);
var _navigationMjs = require("./modules/navigation.mjs");
var _navigationMjsDefault = parcelHelpers.interopDefault(_navigationMjs);
var _paginationMjs = require("./modules/pagination.mjs");
var _paginationMjsDefault = parcelHelpers.interopDefault(_paginationMjs);
var _scrollbarMjs = require("./modules/scrollbar.mjs");
var _scrollbarMjsDefault = parcelHelpers.interopDefault(_scrollbarMjs);
var _parallaxMjs = require("./modules/parallax.mjs");
var _parallaxMjsDefault = parcelHelpers.interopDefault(_parallaxMjs);
var _zoomMjs = require("./modules/zoom.mjs");
var _zoomMjsDefault = parcelHelpers.interopDefault(_zoomMjs);
var _controllerMjs = require("./modules/controller.mjs");
var _controllerMjsDefault = parcelHelpers.interopDefault(_controllerMjs);
var _a11YMjs = require("./modules/a11y.mjs");
var _a11YMjsDefault = parcelHelpers.interopDefault(_a11YMjs);
var _historyMjs = require("./modules/history.mjs");
var _historyMjsDefault = parcelHelpers.interopDefault(_historyMjs);
var _hashNavigationMjs = require("./modules/hash-navigation.mjs");
var _hashNavigationMjsDefault = parcelHelpers.interopDefault(_hashNavigationMjs);
var _autoplayMjs = require("./modules/autoplay.mjs");
var _autoplayMjsDefault = parcelHelpers.interopDefault(_autoplayMjs);
var _thumbsMjs = require("./modules/thumbs.mjs");
var _thumbsMjsDefault = parcelHelpers.interopDefault(_thumbsMjs);
var _freeModeMjs = require("./modules/free-mode.mjs");
var _freeModeMjsDefault = parcelHelpers.interopDefault(_freeModeMjs);
var _gridMjs = require("./modules/grid.mjs");
var _gridMjsDefault = parcelHelpers.interopDefault(_gridMjs);
var _manipulationMjs = require("./modules/manipulation.mjs");
var _manipulationMjsDefault = parcelHelpers.interopDefault(_manipulationMjs);
var _effectFadeMjs = require("./modules/effect-fade.mjs");
var _effectFadeMjsDefault = parcelHelpers.interopDefault(_effectFadeMjs);
var _effectCubeMjs = require("./modules/effect-cube.mjs");
var _effectCubeMjsDefault = parcelHelpers.interopDefault(_effectCubeMjs);
var _effectFlipMjs = require("./modules/effect-flip.mjs");
var _effectFlipMjsDefault = parcelHelpers.interopDefault(_effectFlipMjs);
var _effectCoverflowMjs = require("./modules/effect-coverflow.mjs");
var _effectCoverflowMjsDefault = parcelHelpers.interopDefault(_effectCoverflowMjs);
var _effectCreativeMjs = require("./modules/effect-creative.mjs");
var _effectCreativeMjsDefault = parcelHelpers.interopDefault(_effectCreativeMjs);
var _effectCardsMjs = require("./modules/effect-cards.mjs");
var _effectCardsMjsDefault = parcelHelpers.interopDefault(_effectCardsMjs);
// Swiper Class
const modules = [
    (0, _virtualMjsDefault.default),
    (0, _keyboardMjsDefault.default),
    (0, _mousewheelMjsDefault.default),
    (0, _navigationMjsDefault.default),
    (0, _paginationMjsDefault.default),
    (0, _scrollbarMjsDefault.default),
    (0, _parallaxMjsDefault.default),
    (0, _zoomMjsDefault.default),
    (0, _controllerMjsDefault.default),
    (0, _a11YMjsDefault.default),
    (0, _historyMjsDefault.default),
    (0, _hashNavigationMjsDefault.default),
    (0, _autoplayMjsDefault.default),
    (0, _thumbsMjsDefault.default),
    (0, _freeModeMjsDefault.default),
    (0, _gridMjsDefault.default),
    (0, _manipulationMjsDefault.default),
    (0, _effectFadeMjsDefault.default),
    (0, _effectCubeMjsDefault.default),
    (0, _effectFlipMjsDefault.default),
    (0, _effectCoverflowMjsDefault.default),
    (0, _effectCreativeMjsDefault.default),
    (0, _effectCardsMjsDefault.default)
];
(0, _swiperCoreMjs.S).use(modules);

},{"./shared/swiper-core.mjs":"dbiFf","./modules/virtual.mjs":"ftlmY","./modules/keyboard.mjs":"74Pup","./modules/mousewheel.mjs":"48bGd","./modules/navigation.mjs":"4V8R7","./modules/pagination.mjs":"dMW4g","./modules/scrollbar.mjs":"l6Rg0","./modules/parallax.mjs":"4bHB9","./modules/zoom.mjs":"7To7b","./modules/controller.mjs":"jnu9I","./modules/a11y.mjs":"hHVOd","./modules/history.mjs":"5s2H0","./modules/hash-navigation.mjs":"aTYGM","./modules/autoplay.mjs":"GJIkV","./modules/thumbs.mjs":"f5lqN","./modules/free-mode.mjs":"5YtPu","./modules/grid.mjs":"4aO5r","./modules/manipulation.mjs":"1sKVs","./modules/effect-fade.mjs":"jnh8d","./modules/effect-cube.mjs":"hERqB","./modules/effect-flip.mjs":"c549g","./modules/effect-coverflow.mjs":"7p7Y9","./modules/effect-creative.mjs":"fiqcG","./modules/effect-cards.mjs":"7PG6B","@parcel/transformer-js/src/esmodule-helpers.js":"iy9MI"}],"dbiFf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "S", ()=>Swiper);
parcelHelpers.export(exports, "d", ()=>defaults);
var _ssrWindowEsmMjs = require("./ssr-window.esm.mjs");
var _utilsMjs = require("./utils.mjs");
let support;
function calcSupport() {
    const window1 = (0, _ssrWindowEsmMjs.a)();
    const document1 = (0, _ssrWindowEsmMjs.g)();
    return {
        smoothScroll: document1.documentElement && document1.documentElement.style && "scrollBehavior" in document1.documentElement.style,
        touch: !!("ontouchstart" in window1 || window1.DocumentTouch && document1 instanceof window1.DocumentTouch)
    };
}
function getSupport() {
    if (!support) support = calcSupport();
    return support;
}
let deviceCached;
function calcDevice(_temp) {
    let { userAgent } = _temp === void 0 ? {} : _temp;
    const support = getSupport();
    const window1 = (0, _ssrWindowEsmMjs.a)();
    const platform = window1.navigator.platform;
    const ua = userAgent || window1.navigator.userAgent;
    const device = {
        ios: false,
        android: false
    };
    const screenWidth = window1.screen.width;
    const screenHeight = window1.screen.height;
    const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
    let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
    const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
    const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
    const windows = platform === "Win32";
    let macos = platform === "MacIntel";
    // iPadOs 13 fix
    const iPadScreens = [
        "1024x1366",
        "1366x1024",
        "834x1194",
        "1194x834",
        "834x1112",
        "1112x834",
        "768x1024",
        "1024x768",
        "820x1180",
        "1180x820",
        "810x1080",
        "1080x810"
    ];
    if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
        ipad = ua.match(/(Version)\/([\d.]+)/);
        if (!ipad) ipad = [
            0,
            1,
            "13_0_0"
        ];
        macos = false;
    }
    // Android
    if (android && !windows) {
        device.os = "android";
        device.android = true;
    }
    if (ipad || iphone || ipod) {
        device.os = "ios";
        device.ios = true;
    }
    // Export object
    return device;
}
function getDevice(overrides) {
    if (overrides === void 0) overrides = {};
    if (!deviceCached) deviceCached = calcDevice(overrides);
    return deviceCached;
}
let browser;
function calcBrowser() {
    const window1 = (0, _ssrWindowEsmMjs.a)();
    let needPerspectiveFix = false;
    function isSafari() {
        const ua = window1.navigator.userAgent.toLowerCase();
        return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
    }
    if (isSafari()) {
        const ua = String(window1.navigator.userAgent);
        if (ua.includes("Version/")) {
            const [major, minor] = ua.split("Version/")[1].split(" ")[0].split(".").map((num)=>Number(num));
            needPerspectiveFix = major < 16 || major === 16 && minor < 2;
        }
    }
    return {
        isSafari: needPerspectiveFix || isSafari(),
        needPerspectiveFix,
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window1.navigator.userAgent)
    };
}
function getBrowser() {
    if (!browser) browser = calcBrowser();
    return browser;
}
function Resize(_ref) {
    let { swiper, on, emit } = _ref;
    const window1 = (0, _ssrWindowEsmMjs.a)();
    let observer = null;
    let animationFrame = null;
    const resizeHandler = ()=>{
        if (!swiper || swiper.destroyed || !swiper.initialized) return;
        emit("beforeResize");
        emit("resize");
    };
    const createObserver = ()=>{
        if (!swiper || swiper.destroyed || !swiper.initialized) return;
        observer = new ResizeObserver((entries)=>{
            animationFrame = window1.requestAnimationFrame(()=>{
                const { width, height } = swiper;
                let newWidth = width;
                let newHeight = height;
                entries.forEach((_ref2)=>{
                    let { contentBoxSize, contentRect, target } = _ref2;
                    if (target && target !== swiper.el) return;
                    newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                    newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
                });
                if (newWidth !== width || newHeight !== height) resizeHandler();
            });
        });
        observer.observe(swiper.el);
    };
    const removeObserver = ()=>{
        if (animationFrame) window1.cancelAnimationFrame(animationFrame);
        if (observer && observer.unobserve && swiper.el) {
            observer.unobserve(swiper.el);
            observer = null;
        }
    };
    const orientationChangeHandler = ()=>{
        if (!swiper || swiper.destroyed || !swiper.initialized) return;
        emit("orientationchange");
    };
    on("init", ()=>{
        if (swiper.params.resizeObserver && typeof window1.ResizeObserver !== "undefined") {
            createObserver();
            return;
        }
        window1.addEventListener("resize", resizeHandler);
        window1.addEventListener("orientationchange", orientationChangeHandler);
    });
    on("destroy", ()=>{
        removeObserver();
        window1.removeEventListener("resize", resizeHandler);
        window1.removeEventListener("orientationchange", orientationChangeHandler);
    });
}
function Observer(_ref) {
    let { swiper, extendParams, on, emit } = _ref;
    const observers = [];
    const window1 = (0, _ssrWindowEsmMjs.a)();
    const attach = function(target, options) {
        if (options === void 0) options = {};
        const ObserverFunc = window1.MutationObserver || window1.WebkitMutationObserver;
        const observer = new ObserverFunc((mutations)=>{
            // The observerUpdate event should only be triggered
            // once despite the number of mutations.  Additional
            // triggers are redundant and are very costly
            if (swiper.__preventObserver__) return;
            if (mutations.length === 1) {
                emit("observerUpdate", mutations[0]);
                return;
            }
            const observerUpdate = function observerUpdate() {
                emit("observerUpdate", mutations[0]);
            };
            if (window1.requestAnimationFrame) window1.requestAnimationFrame(observerUpdate);
            else window1.setTimeout(observerUpdate, 0);
        });
        observer.observe(target, {
            attributes: typeof options.attributes === "undefined" ? true : options.attributes,
            childList: typeof options.childList === "undefined" ? true : options.childList,
            characterData: typeof options.characterData === "undefined" ? true : options.characterData
        });
        observers.push(observer);
    };
    const init = ()=>{
        if (!swiper.params.observer) return;
        if (swiper.params.observeParents) {
            const containerParents = (0, _utilsMjs.a)(swiper.hostEl);
            for(let i = 0; i < containerParents.length; i += 1)attach(containerParents[i]);
        }
        // Observe container
        attach(swiper.hostEl, {
            childList: swiper.params.observeSlideChildren
        });
        // Observe wrapper
        attach(swiper.wrapperEl, {
            attributes: false
        });
    };
    const destroy = ()=>{
        observers.forEach((observer)=>{
            observer.disconnect();
        });
        observers.splice(0, observers.length);
    };
    extendParams({
        observer: false,
        observeParents: false,
        observeSlideChildren: false
    });
    on("init", init);
    on("destroy", destroy);
}
/* eslint-disable no-underscore-dangle */ var eventsEmitter = {
    on (events, handler, priority) {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (typeof handler !== "function") return self;
        const method = priority ? "unshift" : "push";
        events.split(" ").forEach((event)=>{
            if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
            self.eventsListeners[event][method](handler);
        });
        return self;
    },
    once (events, handler, priority) {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (typeof handler !== "function") return self;
        function onceHandler() {
            self.off(events, onceHandler);
            if (onceHandler.__emitterProxy) delete onceHandler.__emitterProxy;
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
            handler.apply(self, args);
        }
        onceHandler.__emitterProxy = handler;
        return self.on(events, onceHandler, priority);
    },
    onAny (handler, priority) {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (typeof handler !== "function") return self;
        const method = priority ? "unshift" : "push";
        if (self.eventsAnyListeners.indexOf(handler) < 0) self.eventsAnyListeners[method](handler);
        return self;
    },
    offAny (handler) {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (!self.eventsAnyListeners) return self;
        const index = self.eventsAnyListeners.indexOf(handler);
        if (index >= 0) self.eventsAnyListeners.splice(index, 1);
        return self;
    },
    off (events, handler) {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (!self.eventsListeners) return self;
        events.split(" ").forEach((event)=>{
            if (typeof handler === "undefined") self.eventsListeners[event] = [];
            else if (self.eventsListeners[event]) self.eventsListeners[event].forEach((eventHandler, index)=>{
                if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) self.eventsListeners[event].splice(index, 1);
            });
        });
        return self;
    },
    emit () {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (!self.eventsListeners) return self;
        let events;
        let data;
        let context;
        for(var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)args[_key2] = arguments[_key2];
        if (typeof args[0] === "string" || Array.isArray(args[0])) {
            events = args[0];
            data = args.slice(1, args.length);
            context = self;
        } else {
            events = args[0].events;
            data = args[0].data;
            context = args[0].context || self;
        }
        data.unshift(context);
        const eventsArray = Array.isArray(events) ? events : events.split(" ");
        eventsArray.forEach((event)=>{
            if (self.eventsAnyListeners && self.eventsAnyListeners.length) self.eventsAnyListeners.forEach((eventHandler)=>{
                eventHandler.apply(context, [
                    event,
                    ...data
                ]);
            });
            if (self.eventsListeners && self.eventsListeners[event]) self.eventsListeners[event].forEach((eventHandler)=>{
                eventHandler.apply(context, data);
            });
        });
        return self;
    }
};
function updateSize() {
    const swiper = this;
    let width;
    let height;
    const el = swiper.el;
    if (typeof swiper.params.width !== "undefined" && swiper.params.width !== null) width = swiper.params.width;
    else width = el.clientWidth;
    if (typeof swiper.params.height !== "undefined" && swiper.params.height !== null) height = swiper.params.height;
    else height = el.clientHeight;
    if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) return;
    // Subtract paddings
    width = width - parseInt((0, _utilsMjs.l)(el, "padding-left") || 0, 10) - parseInt((0, _utilsMjs.l)(el, "padding-right") || 0, 10);
    height = height - parseInt((0, _utilsMjs.l)(el, "padding-top") || 0, 10) - parseInt((0, _utilsMjs.l)(el, "padding-bottom") || 0, 10);
    if (Number.isNaN(width)) width = 0;
    if (Number.isNaN(height)) height = 0;
    Object.assign(swiper, {
        width,
        height,
        size: swiper.isHorizontal() ? width : height
    });
}
function updateSlides() {
    const swiper = this;
    function getDirectionLabel(property) {
        if (swiper.isHorizontal()) return property;
        // prettier-ignore
        return ({
            "width": "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            "marginRight": "marginBottom"
        })[property];
    }
    function getDirectionPropertyValue(node, label) {
        return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
    }
    const params = swiper.params;
    const { wrapperEl, slidesEl, size: swiperSize, rtlTranslate: rtl, wrongRTL } = swiper;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
    const slides = (0, _utilsMjs.e)(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
    const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
    let snapGrid = [];
    const slidesGrid = [];
    const slidesSizesGrid = [];
    let offsetBefore = params.slidesOffsetBefore;
    if (typeof offsetBefore === "function") offsetBefore = params.slidesOffsetBefore.call(swiper);
    let offsetAfter = params.slidesOffsetAfter;
    if (typeof offsetAfter === "function") offsetAfter = params.slidesOffsetAfter.call(swiper);
    const previousSnapGridLength = swiper.snapGrid.length;
    const previousSlidesGridLength = swiper.slidesGrid.length;
    let spaceBetween = params.spaceBetween;
    let slidePosition = -offsetBefore;
    let prevSlideSize = 0;
    let index = 0;
    if (typeof swiperSize === "undefined") return;
    if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize;
    else if (typeof spaceBetween === "string") spaceBetween = parseFloat(spaceBetween);
    swiper.virtualSize = -spaceBetween;
    // reset margins
    slides.forEach((slideEl)=>{
        if (rtl) slideEl.style.marginLeft = "";
        else slideEl.style.marginRight = "";
        slideEl.style.marginBottom = "";
        slideEl.style.marginTop = "";
    });
    // reset cssMode offsets
    if (params.centeredSlides && params.cssMode) {
        (0, _utilsMjs.s)(wrapperEl, "--swiper-centered-offset-before", "");
        (0, _utilsMjs.s)(wrapperEl, "--swiper-centered-offset-after", "");
    }
    const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
    if (gridEnabled) swiper.grid.initSlides(slidesLength);
    // Calc slides
    let slideSize;
    const shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter((key)=>{
        return typeof params.breakpoints[key].slidesPerView !== "undefined";
    }).length > 0;
    for(let i = 0; i < slidesLength; i += 1){
        slideSize = 0;
        let slide;
        if (slides[i]) slide = slides[i];
        if (gridEnabled) swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel);
        if (slides[i] && (0, _utilsMjs.l)(slide, "display") === "none") continue; // eslint-disable-line
        if (params.slidesPerView === "auto") {
            if (shouldResetSlideSize) slides[i].style[getDirectionLabel("width")] = ``;
            const slideStyles = getComputedStyle(slide);
            const currentTransform = slide.style.transform;
            const currentWebKitTransform = slide.style.webkitTransform;
            if (currentTransform) slide.style.transform = "none";
            if (currentWebKitTransform) slide.style.webkitTransform = "none";
            if (params.roundLengths) slideSize = swiper.isHorizontal() ? (0, _utilsMjs.f)(slide, "width", true) : (0, _utilsMjs.f)(slide, "height", true);
            else {
                // eslint-disable-next-line
                const width = getDirectionPropertyValue(slideStyles, "width");
                const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
                const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
                const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
                const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
                const boxSizing = slideStyles.getPropertyValue("box-sizing");
                if (boxSizing && boxSizing === "border-box") slideSize = width + marginLeft + marginRight;
                else {
                    const { clientWidth, offsetWidth } = slide;
                    slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
                }
            }
            if (currentTransform) slide.style.transform = currentTransform;
            if (currentWebKitTransform) slide.style.webkitTransform = currentWebKitTransform;
            if (params.roundLengths) slideSize = Math.floor(slideSize);
        } else {
            slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
            if (params.roundLengths) slideSize = Math.floor(slideSize);
            if (slides[i]) slides[i].style[getDirectionLabel("width")] = `${slideSize}px`;
        }
        if (slides[i]) slides[i].swiperSlideSize = slideSize;
        slidesSizesGrid.push(slideSize);
        if (params.centeredSlides) {
            slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
            if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
            if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
            if (Math.abs(slidePosition) < 0.001) slidePosition = 0;
            if (params.roundLengths) slidePosition = Math.floor(slidePosition);
            if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
            slidesGrid.push(slidePosition);
        } else {
            if (params.roundLengths) slidePosition = Math.floor(slidePosition);
            if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
            slidesGrid.push(slidePosition);
            slidePosition = slidePosition + slideSize + spaceBetween;
        }
        swiper.virtualSize += slideSize + spaceBetween;
        prevSlideSize = slideSize;
        index += 1;
    }
    swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
    if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
    if (params.setWrapperSize) wrapperEl.style[getDirectionLabel("width")] = `${swiper.virtualSize + spaceBetween}px`;
    if (gridEnabled) swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
    // Remove last grid elements depending on width
    if (!params.centeredSlides) {
        const newSlidesGrid = [];
        for(let i = 0; i < snapGrid.length; i += 1){
            let slidesGridItem = snapGrid[i];
            if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
            if (snapGrid[i] <= swiper.virtualSize - swiperSize) newSlidesGrid.push(slidesGridItem);
        }
        snapGrid = newSlidesGrid;
        if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) snapGrid.push(swiper.virtualSize - swiperSize);
    }
    if (isVirtual && params.loop) {
        const size = slidesSizesGrid[0] + spaceBetween;
        if (params.slidesPerGroup > 1) {
            const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
            const groupSize = size * params.slidesPerGroup;
            for(let i = 0; i < groups; i += 1)snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
        }
        for(let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1){
            if (params.slidesPerGroup === 1) snapGrid.push(snapGrid[snapGrid.length - 1] + size);
            slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
            swiper.virtualSize += size;
        }
    }
    if (snapGrid.length === 0) snapGrid = [
        0
    ];
    if (spaceBetween !== 0) {
        const key = swiper.isHorizontal() && rtl ? "marginLeft" : getDirectionLabel("marginRight");
        slides.filter((_, slideIndex)=>{
            if (!params.cssMode || params.loop) return true;
            if (slideIndex === slides.length - 1) return false;
            return true;
        }).forEach((slideEl)=>{
            slideEl.style[key] = `${spaceBetween}px`;
        });
    }
    if (params.centeredSlides && params.centeredSlidesBounds) {
        let allSlidesSize = 0;
        slidesSizesGrid.forEach((slideSizeValue)=>{
            allSlidesSize += slideSizeValue + (spaceBetween || 0);
        });
        allSlidesSize -= spaceBetween;
        const maxSnap = allSlidesSize - swiperSize;
        snapGrid = snapGrid.map((snap)=>{
            if (snap <= 0) return -offsetBefore;
            if (snap > maxSnap) return maxSnap + offsetAfter;
            return snap;
        });
    }
    if (params.centerInsufficientSlides) {
        let allSlidesSize = 0;
        slidesSizesGrid.forEach((slideSizeValue)=>{
            allSlidesSize += slideSizeValue + (spaceBetween || 0);
        });
        allSlidesSize -= spaceBetween;
        if (allSlidesSize < swiperSize) {
            const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
            snapGrid.forEach((snap, snapIndex)=>{
                snapGrid[snapIndex] = snap - allSlidesOffset;
            });
            slidesGrid.forEach((snap, snapIndex)=>{
                slidesGrid[snapIndex] = snap + allSlidesOffset;
            });
        }
    }
    Object.assign(swiper, {
        slides,
        snapGrid,
        slidesGrid,
        slidesSizesGrid
    });
    if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
        (0, _utilsMjs.s)(wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
        (0, _utilsMjs.s)(wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
        const addToSnapGrid = -swiper.snapGrid[0];
        const addToSlidesGrid = -swiper.slidesGrid[0];
        swiper.snapGrid = swiper.snapGrid.map((v)=>v + addToSnapGrid);
        swiper.slidesGrid = swiper.slidesGrid.map((v)=>v + addToSlidesGrid);
    }
    if (slidesLength !== previousSlidesLength) swiper.emit("slidesLengthChange");
    if (snapGrid.length !== previousSnapGridLength) {
        if (swiper.params.watchOverflow) swiper.checkOverflow();
        swiper.emit("snapGridLengthChange");
    }
    if (slidesGrid.length !== previousSlidesGridLength) swiper.emit("slidesGridLengthChange");
    if (params.watchSlidesProgress) swiper.updateSlidesOffset();
    if (!isVirtual && !params.cssMode && (params.effect === "slide" || params.effect === "fade")) {
        const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
        const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
        if (slidesLength <= params.maxBackfaceHiddenSlides) {
            if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
        } else if (hasClassBackfaceClassAdded) swiper.el.classList.remove(backFaceHiddenClass);
    }
}
function updateAutoHeight(speed) {
    const swiper = this;
    const activeSlides = [];
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    let newHeight = 0;
    let i;
    if (typeof speed === "number") swiper.setTransition(speed);
    else if (speed === true) swiper.setTransition(swiper.params.speed);
    const getSlideByIndex = (index)=>{
        if (isVirtual) return swiper.slides[swiper.getSlideIndexByData(index)];
        return swiper.slides[index];
    };
    // Find slides currently in view
    if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1) {
        if (swiper.params.centeredSlides) (swiper.visibleSlides || []).forEach((slide)=>{
            activeSlides.push(slide);
        });
        else for(i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1){
            const index = swiper.activeIndex + i;
            if (index > swiper.slides.length && !isVirtual) break;
            activeSlides.push(getSlideByIndex(index));
        }
    } else activeSlides.push(getSlideByIndex(swiper.activeIndex));
    // Find new height from highest slide in view
    for(i = 0; i < activeSlides.length; i += 1)if (typeof activeSlides[i] !== "undefined") {
        const height = activeSlides[i].offsetHeight;
        newHeight = height > newHeight ? height : newHeight;
    }
    // Update Height
    if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = `${newHeight}px`;
}
function updateSlidesOffset() {
    const swiper = this;
    const slides = swiper.slides;
    // eslint-disable-next-line
    const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
    for(let i = 0; i < slides.length; i += 1)slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
}
function updateSlidesProgress(translate) {
    if (translate === void 0) translate = this && this.translate || 0;
    const swiper = this;
    const params = swiper.params;
    const { slides, rtlTranslate: rtl, snapGrid } = swiper;
    if (slides.length === 0) return;
    if (typeof slides[0].swiperSlideOffset === "undefined") swiper.updateSlidesOffset();
    let offsetCenter = -translate;
    if (rtl) offsetCenter = translate;
    // Visible Slides
    slides.forEach((slideEl)=>{
        slideEl.classList.remove(params.slideVisibleClass);
    });
    swiper.visibleSlidesIndexes = [];
    swiper.visibleSlides = [];
    let spaceBetween = params.spaceBetween;
    if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiper.size;
    else if (typeof spaceBetween === "string") spaceBetween = parseFloat(spaceBetween);
    for(let i = 0; i < slides.length; i += 1){
        const slide = slides[i];
        let slideOffset = slide.swiperSlideOffset;
        if (params.cssMode && params.centeredSlides) slideOffset -= slides[0].swiperSlideOffset;
        const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
        const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
        const slideBefore = -(offsetCenter - slideOffset);
        const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
        const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
        if (isVisible) {
            swiper.visibleSlides.push(slide);
            swiper.visibleSlidesIndexes.push(i);
            slides[i].classList.add(params.slideVisibleClass);
        }
        slide.progress = rtl ? -slideProgress : slideProgress;
        slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
    }
}
function updateProgress(translate) {
    const swiper = this;
    if (typeof translate === "undefined") {
        const multiplier = swiper.rtlTranslate ? -1 : 1;
        // eslint-disable-next-line
        translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
    }
    const params = swiper.params;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    let { progress, isBeginning, isEnd, progressLoop } = swiper;
    const wasBeginning = isBeginning;
    const wasEnd = isEnd;
    if (translatesDiff === 0) {
        progress = 0;
        isBeginning = true;
        isEnd = true;
    } else {
        progress = (translate - swiper.minTranslate()) / translatesDiff;
        const isBeginningRounded = Math.abs(translate - swiper.minTranslate()) < 1;
        const isEndRounded = Math.abs(translate - swiper.maxTranslate()) < 1;
        isBeginning = isBeginningRounded || progress <= 0;
        isEnd = isEndRounded || progress >= 1;
        if (isBeginningRounded) progress = 0;
        if (isEndRounded) progress = 1;
    }
    if (params.loop) {
        const firstSlideIndex = swiper.getSlideIndexByData(0);
        const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
        const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
        const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
        const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
        const translateAbs = Math.abs(translate);
        if (translateAbs >= firstSlideTranslate) progressLoop = (translateAbs - firstSlideTranslate) / translateMax;
        else progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
        if (progressLoop > 1) progressLoop -= 1;
    }
    Object.assign(swiper, {
        progress,
        progressLoop,
        isBeginning,
        isEnd
    });
    if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
    if (isBeginning && !wasBeginning) swiper.emit("reachBeginning toEdge");
    if (isEnd && !wasEnd) swiper.emit("reachEnd toEdge");
    if (wasBeginning && !isBeginning || wasEnd && !isEnd) swiper.emit("fromEdge");
    swiper.emit("progress", progress);
}
function updateSlidesClasses() {
    const swiper = this;
    const { slides, params, slidesEl, activeIndex } = swiper;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    const getFilteredSlide = (selector)=>{
        return (0, _utilsMjs.e)(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
    };
    slides.forEach((slideEl)=>{
        slideEl.classList.remove(params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
    });
    let activeSlide;
    if (isVirtual) {
        if (params.loop) {
            let slideIndex = activeIndex - swiper.virtual.slidesBefore;
            if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
            if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
            activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
        } else activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`);
    } else activeSlide = slides[activeIndex];
    if (activeSlide) {
        // Active classes
        activeSlide.classList.add(params.slideActiveClass);
        // Next Slide
        let nextSlide = (0, _utilsMjs.m)(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
        if (params.loop && !nextSlide) nextSlide = slides[0];
        if (nextSlide) nextSlide.classList.add(params.slideNextClass);
        // Prev Slide
        let prevSlide = (0, _utilsMjs.o)(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
        params.loop;
        if (prevSlide) prevSlide.classList.add(params.slidePrevClass);
    }
    swiper.emitSlidesClasses();
}
const processLazyPreloader = (swiper, imageEl)=>{
    if (!swiper || swiper.destroyed || !swiper.params) return;
    const slideSelector = ()=>swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
    const slideEl = imageEl.closest(slideSelector());
    if (slideEl) {
        let lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
        if (!lazyEl && swiper.isElement) lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
        if (lazyEl) lazyEl.remove();
    }
};
const unlazy = (swiper, index)=>{
    if (!swiper.slides[index]) return;
    const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
    if (imageEl) imageEl.removeAttribute("loading");
};
const preload = (swiper)=>{
    if (!swiper || swiper.destroyed || !swiper.params) return;
    let amount = swiper.params.lazyPreloadPrevNext;
    const len = swiper.slides.length;
    if (!len || !amount || amount < 0) return;
    amount = Math.min(amount, len);
    const slidesPerView = swiper.params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
    const activeIndex = swiper.activeIndex;
    if (swiper.params.grid && swiper.params.grid.rows > 1) {
        const activeColumn = activeIndex;
        const preloadColumns = [
            activeColumn - amount
        ];
        preloadColumns.push(...Array.from({
            length: amount
        }).map((_, i)=>{
            return activeColumn + slidesPerView + i;
        }));
        swiper.slides.forEach((slideEl, i)=>{
            if (preloadColumns.includes(slideEl.column)) unlazy(swiper, i);
        });
        return;
    }
    const slideIndexLastInView = activeIndex + slidesPerView - 1;
    if (swiper.params.rewind || swiper.params.loop) for(let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1){
        const realIndex = (i % len + len) % len;
        if (realIndex < activeIndex || realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
    }
    else {
        for(let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1)if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) unlazy(swiper, i);
    }
};
function getActiveIndexByTranslate(swiper) {
    const { slidesGrid, params } = swiper;
    const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    let activeIndex;
    for(let i = 0; i < slidesGrid.length; i += 1){
        if (typeof slidesGrid[i + 1] !== "undefined") {
            if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) activeIndex = i;
            else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) activeIndex = i + 1;
        } else if (translate >= slidesGrid[i]) activeIndex = i;
    }
    // Normalize slideIndex
    if (params.normalizeSlideIndex) {
        if (activeIndex < 0 || typeof activeIndex === "undefined") activeIndex = 0;
    }
    return activeIndex;
}
function updateActiveIndex(newActiveIndex) {
    const swiper = this;
    const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    const { snapGrid, params, activeIndex: previousIndex, realIndex: previousRealIndex, snapIndex: previousSnapIndex } = swiper;
    let activeIndex = newActiveIndex;
    let snapIndex;
    const getVirtualRealIndex = (aIndex)=>{
        let realIndex = aIndex - swiper.virtual.slidesBefore;
        if (realIndex < 0) realIndex = swiper.virtual.slides.length + realIndex;
        if (realIndex >= swiper.virtual.slides.length) realIndex -= swiper.virtual.slides.length;
        return realIndex;
    };
    if (typeof activeIndex === "undefined") activeIndex = getActiveIndexByTranslate(swiper);
    if (snapGrid.indexOf(translate) >= 0) snapIndex = snapGrid.indexOf(translate);
    else {
        const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
        snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
    }
    if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
    if (activeIndex === previousIndex) {
        if (snapIndex !== previousSnapIndex) {
            swiper.snapIndex = snapIndex;
            swiper.emit("snapIndexChange");
        }
        if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) swiper.realIndex = getVirtualRealIndex(activeIndex);
        return;
    }
    // Get real index
    let realIndex;
    if (swiper.virtual && params.virtual.enabled && params.loop) realIndex = getVirtualRealIndex(activeIndex);
    else if (swiper.slides[activeIndex]) realIndex = parseInt(swiper.slides[activeIndex].getAttribute("data-swiper-slide-index") || activeIndex, 10);
    else realIndex = activeIndex;
    Object.assign(swiper, {
        previousSnapIndex,
        snapIndex,
        previousRealIndex,
        realIndex,
        previousIndex,
        activeIndex
    });
    if (swiper.initialized) preload(swiper);
    swiper.emit("activeIndexChange");
    swiper.emit("snapIndexChange");
    if (previousRealIndex !== realIndex) swiper.emit("realIndexChange");
    if (swiper.initialized || swiper.params.runCallbacksOnInit) swiper.emit("slideChange");
}
function updateClickedSlide(e) {
    const swiper = this;
    const params = swiper.params;
    const slide = e.closest(`.${params.slideClass}, swiper-slide`);
    let slideFound = false;
    let slideIndex;
    if (slide) {
        for(let i = 0; i < swiper.slides.length; i += 1)if (swiper.slides[i] === slide) {
            slideFound = true;
            slideIndex = i;
            break;
        }
    }
    if (slide && slideFound) {
        swiper.clickedSlide = slide;
        if (swiper.virtual && swiper.params.virtual.enabled) swiper.clickedIndex = parseInt(slide.getAttribute("data-swiper-slide-index"), 10);
        else swiper.clickedIndex = slideIndex;
    } else {
        swiper.clickedSlide = undefined;
        swiper.clickedIndex = undefined;
        return;
    }
    if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) swiper.slideToClickedSlide();
}
var update = {
    updateSize,
    updateSlides,
    updateAutoHeight,
    updateSlidesOffset,
    updateSlidesProgress,
    updateProgress,
    updateSlidesClasses,
    updateActiveIndex,
    updateClickedSlide
};
function getSwiperTranslate(axis) {
    if (axis === void 0) axis = this.isHorizontal() ? "x" : "y";
    const swiper = this;
    const { params, rtlTranslate: rtl, translate, wrapperEl } = swiper;
    if (params.virtualTranslate) return rtl ? -translate : translate;
    if (params.cssMode) return translate;
    let currentTranslate = (0, _utilsMjs.h)(wrapperEl, axis);
    currentTranslate += swiper.cssOverflowAdjustment();
    if (rtl) currentTranslate = -currentTranslate;
    return currentTranslate || 0;
}
function setTranslate(translate, byController) {
    const swiper = this;
    const { rtlTranslate: rtl, params, wrapperEl, progress } = swiper;
    let x = 0;
    let y = 0;
    const z = 0;
    if (swiper.isHorizontal()) x = rtl ? -translate : translate;
    else y = translate;
    if (params.roundLengths) {
        x = Math.floor(x);
        y = Math.floor(y);
    }
    swiper.previousTranslate = swiper.translate;
    swiper.translate = swiper.isHorizontal() ? x : y;
    if (params.cssMode) wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y;
    else if (!params.virtualTranslate) {
        if (swiper.isHorizontal()) x -= swiper.cssOverflowAdjustment();
        else y -= swiper.cssOverflowAdjustment();
        wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
    }
    // Check if we need to update progress
    let newProgress;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) newProgress = 0;
    else newProgress = (translate - swiper.minTranslate()) / translatesDiff;
    if (newProgress !== progress) swiper.updateProgress(translate);
    swiper.emit("setTranslate", swiper.translate, byController);
}
function minTranslate() {
    return -this.snapGrid[0];
}
function maxTranslate() {
    return -this.snapGrid[this.snapGrid.length - 1];
}
function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
    if (translate === void 0) translate = 0;
    if (speed === void 0) speed = this.params.speed;
    if (runCallbacks === void 0) runCallbacks = true;
    if (translateBounds === void 0) translateBounds = true;
    const swiper = this;
    const { params, wrapperEl } = swiper;
    if (swiper.animating && params.preventInteractionOnTransition) return false;
    const minTranslate = swiper.minTranslate();
    const maxTranslate = swiper.maxTranslate();
    let newTranslate;
    if (translateBounds && translate > minTranslate) newTranslate = minTranslate;
    else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;
    else newTranslate = translate;
    // Update progress
    swiper.updateProgress(newTranslate);
    if (params.cssMode) {
        const isH = swiper.isHorizontal();
        if (speed === 0) wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate;
        else {
            if (!swiper.support.smoothScroll) {
                (0, _utilsMjs.p)({
                    swiper,
                    targetPosition: -newTranslate,
                    side: isH ? "left" : "top"
                });
                return true;
            }
            wrapperEl.scrollTo({
                [isH ? "left" : "top"]: -newTranslate,
                behavior: "smooth"
            });
        }
        return true;
    }
    if (speed === 0) {
        swiper.setTransition(0);
        swiper.setTranslate(newTranslate);
        if (runCallbacks) {
            swiper.emit("beforeTransitionStart", speed, internal);
            swiper.emit("transitionEnd");
        }
    } else {
        swiper.setTransition(speed);
        swiper.setTranslate(newTranslate);
        if (runCallbacks) {
            swiper.emit("beforeTransitionStart", speed, internal);
            swiper.emit("transitionStart");
        }
        if (!swiper.animating) {
            swiper.animating = true;
            if (!swiper.onTranslateToWrapperTransitionEnd) swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                if (!swiper || swiper.destroyed) return;
                if (e.target !== this) return;
                swiper.wrapperEl.removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                swiper.onTranslateToWrapperTransitionEnd = null;
                delete swiper.onTranslateToWrapperTransitionEnd;
                if (runCallbacks) swiper.emit("transitionEnd");
            };
            swiper.wrapperEl.addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
        }
    }
    return true;
}
var translate = {
    getTranslate: getSwiperTranslate,
    setTranslate,
    minTranslate,
    maxTranslate,
    translateTo
};
function setTransition(duration, byController) {
    const swiper = this;
    if (!swiper.params.cssMode) {
        swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
        swiper.wrapperEl.style.transitionDelay = duration === 0 ? `0ms` : "";
    }
    swiper.emit("setTransition", duration, byController);
}
function transitionEmit(_ref) {
    let { swiper, runCallbacks, direction, step } = _ref;
    const { activeIndex, previousIndex } = swiper;
    let dir = direction;
    if (!dir) {
        if (activeIndex > previousIndex) dir = "next";
        else if (activeIndex < previousIndex) dir = "prev";
        else dir = "reset";
    }
    swiper.emit(`transition${step}`);
    if (runCallbacks && activeIndex !== previousIndex) {
        if (dir === "reset") {
            swiper.emit(`slideResetTransition${step}`);
            return;
        }
        swiper.emit(`slideChangeTransition${step}`);
        if (dir === "next") swiper.emit(`slideNextTransition${step}`);
        else swiper.emit(`slidePrevTransition${step}`);
    }
}
function transitionStart(runCallbacks, direction) {
    if (runCallbacks === void 0) runCallbacks = true;
    const swiper = this;
    const { params } = swiper;
    if (params.cssMode) return;
    if (params.autoHeight) swiper.updateAutoHeight();
    transitionEmit({
        swiper,
        runCallbacks,
        direction,
        step: "Start"
    });
}
function transitionEnd(runCallbacks, direction) {
    if (runCallbacks === void 0) runCallbacks = true;
    const swiper = this;
    const { params } = swiper;
    swiper.animating = false;
    if (params.cssMode) return;
    swiper.setTransition(0);
    transitionEmit({
        swiper,
        runCallbacks,
        direction,
        step: "End"
    });
}
var transition = {
    setTransition,
    transitionStart,
    transitionEnd
};
function slideTo(index, speed, runCallbacks, internal, initial) {
    if (index === void 0) index = 0;
    if (speed === void 0) speed = this.params.speed;
    if (runCallbacks === void 0) runCallbacks = true;
    if (typeof index === "string") index = parseInt(index, 10);
    const swiper = this;
    let slideIndex = index;
    if (slideIndex < 0) slideIndex = 0;
    const { params, snapGrid, slidesGrid, previousIndex, activeIndex, rtlTranslate: rtl, wrapperEl, enabled } = swiper;
    if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) return false;
    const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
    let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
    if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
    const translate = -snapGrid[snapIndex];
    // Normalize slideIndex
    if (params.normalizeSlideIndex) for(let i = 0; i < slidesGrid.length; i += 1){
        const normalizedTranslate = -Math.floor(translate * 100);
        const normalizedGrid = Math.floor(slidesGrid[i] * 100);
        const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
        if (typeof slidesGrid[i + 1] !== "undefined") {
            if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) slideIndex = i;
            else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) slideIndex = i + 1;
        } else if (normalizedTranslate >= normalizedGrid) slideIndex = i;
    }
    // Directions locks
    if (swiper.initialized && slideIndex !== activeIndex) {
        if (!swiper.allowSlideNext && (rtl ? translate > swiper.translate && translate > swiper.minTranslate() : translate < swiper.translate && translate < swiper.minTranslate())) return false;
        if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
            if ((activeIndex || 0) !== slideIndex) return false;
        }
    }
    if (slideIndex !== (previousIndex || 0) && runCallbacks) swiper.emit("beforeSlideChangeStart");
    // Update progress
    swiper.updateProgress(translate);
    let direction;
    if (slideIndex > activeIndex) direction = "next";
    else if (slideIndex < activeIndex) direction = "prev";
    else direction = "reset";
    // Update Index
    if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
        swiper.updateActiveIndex(slideIndex);
        // Update Height
        if (params.autoHeight) swiper.updateAutoHeight();
        swiper.updateSlidesClasses();
        if (params.effect !== "slide") swiper.setTranslate(translate);
        if (direction !== "reset") {
            swiper.transitionStart(runCallbacks, direction);
            swiper.transitionEnd(runCallbacks, direction);
        }
        return false;
    }
    if (params.cssMode) {
        const isH = swiper.isHorizontal();
        const t = rtl ? translate : -translate;
        if (speed === 0) {
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            if (isVirtual) {
                swiper.wrapperEl.style.scrollSnapType = "none";
                swiper._immediateVirtual = true;
            }
            if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
                swiper._cssModeVirtualInitialSet = true;
                requestAnimationFrame(()=>{
                    wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                });
            } else wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
            if (isVirtual) requestAnimationFrame(()=>{
                swiper.wrapperEl.style.scrollSnapType = "";
                swiper._immediateVirtual = false;
            });
        } else {
            if (!swiper.support.smoothScroll) {
                (0, _utilsMjs.p)({
                    swiper,
                    targetPosition: t,
                    side: isH ? "left" : "top"
                });
                return true;
            }
            wrapperEl.scrollTo({
                [isH ? "left" : "top"]: t,
                behavior: "smooth"
            });
        }
        return true;
    }
    swiper.setTransition(speed);
    swiper.setTranslate(translate);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit("beforeTransitionStart", speed, internal);
    swiper.transitionStart(runCallbacks, direction);
    if (speed === 0) swiper.transitionEnd(runCallbacks, direction);
    else if (!swiper.animating) {
        swiper.animating = true;
        if (!swiper.onSlideToWrapperTransitionEnd) swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
            if (!swiper || swiper.destroyed) return;
            if (e.target !== this) return;
            swiper.wrapperEl.removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
            swiper.onSlideToWrapperTransitionEnd = null;
            delete swiper.onSlideToWrapperTransitionEnd;
            swiper.transitionEnd(runCallbacks, direction);
        };
        swiper.wrapperEl.addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
    }
    return true;
}
function slideToLoop(index, speed, runCallbacks, internal) {
    if (index === void 0) index = 0;
    if (speed === void 0) speed = this.params.speed;
    if (runCallbacks === void 0) runCallbacks = true;
    if (typeof index === "string") {
        const indexAsNumber = parseInt(index, 10);
        index = indexAsNumber;
    }
    const swiper = this;
    let newIndex = index;
    if (swiper.params.loop) {
        if (swiper.virtual && swiper.params.virtual.enabled) // eslint-disable-next-line
        newIndex = newIndex + swiper.virtual.slidesBefore;
        else newIndex = swiper.getSlideIndexByData(newIndex);
    }
    return swiper.slideTo(newIndex, speed, runCallbacks, internal);
}
/* eslint no-unused-vars: "off" */ function slideNext(speed, runCallbacks, internal) {
    if (speed === void 0) speed = this.params.speed;
    if (runCallbacks === void 0) runCallbacks = true;
    const swiper = this;
    const { enabled, params, animating } = swiper;
    if (!enabled) return swiper;
    let perGroup = params.slidesPerGroup;
    if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
    const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    if (params.loop) {
        if (animating && !isVirtual && params.loopPreventsSliding) return false;
        swiper.loopFix({
            direction: "next"
        });
        // eslint-disable-next-line
        swiper._clientLeft = swiper.wrapperEl.clientLeft;
    }
    if (params.rewind && swiper.isEnd) return swiper.slideTo(0, speed, runCallbacks, internal);
    return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
}
/* eslint no-unused-vars: "off" */ function slidePrev(speed, runCallbacks, internal) {
    if (speed === void 0) speed = this.params.speed;
    if (runCallbacks === void 0) runCallbacks = true;
    const swiper = this;
    const { params, snapGrid, slidesGrid, rtlTranslate, enabled, animating } = swiper;
    if (!enabled) return swiper;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    if (params.loop) {
        if (animating && !isVirtual && params.loopPreventsSliding) return false;
        swiper.loopFix({
            direction: "prev"
        });
        // eslint-disable-next-line
        swiper._clientLeft = swiper.wrapperEl.clientLeft;
    }
    const translate = rtlTranslate ? swiper.translate : -swiper.translate;
    function normalize(val) {
        if (val < 0) return -Math.floor(Math.abs(val));
        return Math.floor(val);
    }
    const normalizedTranslate = normalize(translate);
    const normalizedSnapGrid = snapGrid.map((val)=>normalize(val));
    let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
    if (typeof prevSnap === "undefined" && params.cssMode) {
        let prevSnapIndex;
        snapGrid.forEach((snap, snapIndex)=>{
            if (normalizedTranslate >= snap) // prevSnap = snap;
            prevSnapIndex = snapIndex;
        });
        if (typeof prevSnapIndex !== "undefined") prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
    }
    let prevIndex = 0;
    if (typeof prevSnap !== "undefined") {
        prevIndex = slidesGrid.indexOf(prevSnap);
        if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
        if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
            prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
            prevIndex = Math.max(prevIndex, 0);
        }
    }
    if (params.rewind && swiper.isBeginning) {
        const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
        return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
    }
    return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}
/* eslint no-unused-vars: "off" */ function slideReset(speed, runCallbacks, internal) {
    if (speed === void 0) speed = this.params.speed;
    if (runCallbacks === void 0) runCallbacks = true;
    const swiper = this;
    return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}
/* eslint no-unused-vars: "off" */ function slideToClosest(speed, runCallbacks, internal, threshold) {
    if (speed === void 0) speed = this.params.speed;
    if (runCallbacks === void 0) runCallbacks = true;
    if (threshold === void 0) threshold = 0.5;
    const swiper = this;
    let index = swiper.activeIndex;
    const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
    const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
    const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    if (translate >= swiper.snapGrid[snapIndex]) {
        // The current translate is on or after the current snap index, so the choice
        // is between the current index and the one after it.
        const currentSnap = swiper.snapGrid[snapIndex];
        const nextSnap = swiper.snapGrid[snapIndex + 1];
        if (translate - currentSnap > (nextSnap - currentSnap) * threshold) index += swiper.params.slidesPerGroup;
    } else {
        // The current translate is before the current snap index, so the choice
        // is between the current index and the one before it.
        const prevSnap = swiper.snapGrid[snapIndex - 1];
        const currentSnap = swiper.snapGrid[snapIndex];
        if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) index -= swiper.params.slidesPerGroup;
    }
    index = Math.max(index, 0);
    index = Math.min(index, swiper.slidesGrid.length - 1);
    return swiper.slideTo(index, speed, runCallbacks, internal);
}
function slideToClickedSlide() {
    const swiper = this;
    const { params, slidesEl } = swiper;
    const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView;
    let slideToIndex = swiper.clickedIndex;
    let realIndex;
    const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
    if (params.loop) {
        if (swiper.animating) return;
        realIndex = parseInt(swiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
        if (params.centeredSlides) {
            if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
                swiper.loopFix();
                slideToIndex = swiper.getSlideIndex((0, _utilsMjs.e)(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
                (0, _utilsMjs.n)(()=>{
                    swiper.slideTo(slideToIndex);
                });
            } else swiper.slideTo(slideToIndex);
        } else if (slideToIndex > swiper.slides.length - slidesPerView) {
            swiper.loopFix();
            slideToIndex = swiper.getSlideIndex((0, _utilsMjs.e)(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
            (0, _utilsMjs.n)(()=>{
                swiper.slideTo(slideToIndex);
            });
        } else swiper.slideTo(slideToIndex);
    } else swiper.slideTo(slideToIndex);
}
var slide = {
    slideTo,
    slideToLoop,
    slideNext,
    slidePrev,
    slideReset,
    slideToClosest,
    slideToClickedSlide
};
function loopCreate(slideRealIndex) {
    const swiper = this;
    const { params, slidesEl } = swiper;
    if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
    const slides = (0, _utilsMjs.e)(slidesEl, `.${params.slideClass}, swiper-slide`);
    slides.forEach((el, index)=>{
        el.setAttribute("data-swiper-slide-index", index);
    });
    swiper.loopFix({
        slideRealIndex,
        direction: params.centeredSlides ? undefined : "next"
    });
}
function loopFix(_temp) {
    let { slideRealIndex, slideTo = true, direction, setTranslate, activeSlideIndex, byController, byMousewheel } = _temp === void 0 ? {} : _temp;
    const swiper = this;
    if (!swiper.params.loop) return;
    swiper.emit("beforeLoopFix");
    const { slides, allowSlidePrev, allowSlideNext, slidesEl, params } = swiper;
    swiper.allowSlidePrev = true;
    swiper.allowSlideNext = true;
    if (swiper.virtual && params.virtual.enabled) {
        if (slideTo) {
            if (!params.centeredSlides && swiper.snapIndex === 0) swiper.slideTo(swiper.virtual.slides.length, 0, false, true);
            else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true);
            else if (swiper.snapIndex === swiper.snapGrid.length - 1) swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
        }
        swiper.allowSlidePrev = allowSlidePrev;
        swiper.allowSlideNext = allowSlideNext;
        swiper.emit("loopFix");
        return;
    }
    const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10));
    let loopedSlides = params.loopedSlides || slidesPerView;
    if (loopedSlides % params.slidesPerGroup !== 0) loopedSlides += params.slidesPerGroup - loopedSlides % params.slidesPerGroup;
    swiper.loopedSlides = loopedSlides;
    const prependSlidesIndexes = [];
    const appendSlidesIndexes = [];
    let activeIndex = swiper.activeIndex;
    if (typeof activeSlideIndex === "undefined") activeSlideIndex = swiper.getSlideIndex(swiper.slides.filter((el)=>el.classList.contains(params.slideActiveClass))[0]);
    else activeIndex = activeSlideIndex;
    const isNext = direction === "next" || !direction;
    const isPrev = direction === "prev" || !direction;
    let slidesPrepended = 0;
    let slidesAppended = 0;
    // prepend last slides before start
    if (activeSlideIndex < loopedSlides) {
        slidesPrepended = Math.max(loopedSlides - activeSlideIndex, params.slidesPerGroup);
        for(let i = 0; i < loopedSlides - activeSlideIndex; i += 1){
            const index = i - Math.floor(i / slides.length) * slides.length;
            prependSlidesIndexes.push(slides.length - index - 1);
        }
    } else if (activeSlideIndex /* + slidesPerView */  > swiper.slides.length - loopedSlides * 2) {
        slidesAppended = Math.max(activeSlideIndex - (swiper.slides.length - loopedSlides * 2), params.slidesPerGroup);
        for(let i = 0; i < slidesAppended; i += 1){
            const index = i - Math.floor(i / slides.length) * slides.length;
            appendSlidesIndexes.push(index);
        }
    }
    if (isPrev) prependSlidesIndexes.forEach((index)=>{
        swiper.slides[index].swiperLoopMoveDOM = true;
        slidesEl.prepend(swiper.slides[index]);
        swiper.slides[index].swiperLoopMoveDOM = false;
    });
    if (isNext) appendSlidesIndexes.forEach((index)=>{
        swiper.slides[index].swiperLoopMoveDOM = true;
        slidesEl.append(swiper.slides[index]);
        swiper.slides[index].swiperLoopMoveDOM = false;
    });
    swiper.recalcSlides();
    if (params.slidesPerView === "auto") swiper.updateSlides();
    if (params.watchSlidesProgress) swiper.updateSlidesOffset();
    if (slideTo) {
        if (prependSlidesIndexes.length > 0 && isPrev) {
            if (typeof slideRealIndex === "undefined") {
                const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
                const diff = newSlideTranslate - currentSlideTranslate;
                if (byMousewheel) swiper.setTranslate(swiper.translate - diff);
                else {
                    swiper.slideTo(activeIndex + slidesPrepended, 0, false, true);
                    if (setTranslate) {
                        swiper.touches[swiper.isHorizontal() ? "startX" : "startY"] += diff;
                        swiper.touchEventsData.currentTranslate = swiper.translate;
                    }
                }
            } else if (setTranslate) {
                swiper.slideToLoop(slideRealIndex, 0, false, true);
                swiper.touchEventsData.currentTranslate = swiper.translate;
            }
        } else if (appendSlidesIndexes.length > 0 && isNext) {
            if (typeof slideRealIndex === "undefined") {
                const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
                const diff = newSlideTranslate - currentSlideTranslate;
                if (byMousewheel) swiper.setTranslate(swiper.translate - diff);
                else {
                    swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
                    if (setTranslate) {
                        swiper.touches[swiper.isHorizontal() ? "startX" : "startY"] += diff;
                        swiper.touchEventsData.currentTranslate = swiper.translate;
                    }
                }
            } else swiper.slideToLoop(slideRealIndex, 0, false, true);
        }
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    if (swiper.controller && swiper.controller.control && !byController) {
        const loopParams = {
            slideRealIndex,
            direction,
            setTranslate,
            activeSlideIndex,
            byController: true
        };
        if (Array.isArray(swiper.controller.control)) swiper.controller.control.forEach((c)=>{
            if (!c.destroyed && c.params.loop) c.loopFix({
                ...loopParams,
                slideTo: c.params.slidesPerView === params.slidesPerView ? slideTo : false
            });
        });
        else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) swiper.controller.control.loopFix({
            ...loopParams,
            slideTo: swiper.controller.control.params.slidesPerView === params.slidesPerView ? slideTo : false
        });
    }
    swiper.emit("loopFix");
}
function loopDestroy() {
    const swiper = this;
    const { params, slidesEl } = swiper;
    if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
    swiper.recalcSlides();
    const newSlidesOrder = [];
    swiper.slides.forEach((slideEl)=>{
        const index = typeof slideEl.swiperSlideIndex === "undefined" ? slideEl.getAttribute("data-swiper-slide-index") * 1 : slideEl.swiperSlideIndex;
        newSlidesOrder[index] = slideEl;
    });
    swiper.slides.forEach((slideEl)=>{
        slideEl.removeAttribute("data-swiper-slide-index");
    });
    newSlidesOrder.forEach((slideEl)=>{
        slidesEl.append(slideEl);
    });
    swiper.recalcSlides();
    swiper.slideTo(swiper.realIndex, 0);
}
var loop = {
    loopCreate,
    loopFix,
    loopDestroy
};
function setGrabCursor(moving) {
    const swiper = this;
    if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
    const el = swiper.params.touchEventsTarget === "container" ? swiper.el : swiper.wrapperEl;
    if (swiper.isElement) swiper.__preventObserver__ = true;
    el.style.cursor = "move";
    el.style.cursor = moving ? "grabbing" : "grab";
    if (swiper.isElement) requestAnimationFrame(()=>{
        swiper.__preventObserver__ = false;
    });
}
function unsetGrabCursor() {
    const swiper = this;
    if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
    if (swiper.isElement) swiper.__preventObserver__ = true;
    swiper[swiper.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "";
    if (swiper.isElement) requestAnimationFrame(()=>{
        swiper.__preventObserver__ = false;
    });
}
var grabCursor = {
    setGrabCursor,
    unsetGrabCursor
};
// Modified from https://stackoverflow.com/questions/54520554/custom-element-getrootnode-closest-function-crossing-multiple-parent-shadowd
function closestElement(selector, base) {
    if (base === void 0) base = this;
    function __closestFrom(el) {
        if (!el || el === (0, _ssrWindowEsmMjs.g)() || el === (0, _ssrWindowEsmMjs.a)()) return null;
        if (el.assignedSlot) el = el.assignedSlot;
        const found = el.closest(selector);
        if (!found && !el.getRootNode) return null;
        return found || __closestFrom(el.getRootNode().host);
    }
    return __closestFrom(base);
}
function onTouchStart(event) {
    const swiper = this;
    const document1 = (0, _ssrWindowEsmMjs.g)();
    const window1 = (0, _ssrWindowEsmMjs.a)();
    const data = swiper.touchEventsData;
    data.evCache.push(event);
    const { params, touches, enabled } = swiper;
    if (!enabled) return;
    if (!params.simulateTouch && event.pointerType === "mouse") return;
    if (swiper.animating && params.preventInteractionOnTransition) return;
    if (!swiper.animating && params.cssMode && params.loop) swiper.loopFix();
    let e = event;
    if (e.originalEvent) e = e.originalEvent;
    let targetEl = e.target;
    if (params.touchEventsTarget === "wrapper") {
        if (!swiper.wrapperEl.contains(targetEl)) return;
    }
    if ("which" in e && e.which === 3) return;
    if ("button" in e && e.button > 0) return;
    if (data.isTouched && data.isMoved) return;
    // change target el for shadow root component
    const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "";
    // eslint-disable-next-line
    const eventPath = event.composedPath ? event.composedPath() : event.path;
    if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) targetEl = eventPath[0];
    const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
    const isTargetShadow = !!(e.target && e.target.shadowRoot);
    // use closestElement for shadow root element to get the actual closest for nested shadow root element
    if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
        swiper.allowClick = true;
        return;
    }
    if (params.swipeHandler) {
        if (!targetEl.closest(params.swipeHandler)) return;
    }
    touches.currentX = e.pageX;
    touches.currentY = e.pageY;
    const startX = touches.currentX;
    const startY = touches.currentY;
    // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore
    const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
    const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
    if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window1.innerWidth - edgeSwipeThreshold)) {
        if (edgeSwipeDetection === "prevent") event.preventDefault();
        else return;
    }
    Object.assign(data, {
        isTouched: true,
        isMoved: false,
        allowTouchCallbacks: true,
        isScrolling: undefined,
        startMoving: undefined
    });
    touches.startX = startX;
    touches.startY = startY;
    data.touchStartTime = (0, _utilsMjs.d)();
    swiper.allowClick = true;
    swiper.updateSize();
    swiper.swipeDirection = undefined;
    if (params.threshold > 0) data.allowThresholdMove = false;
    let preventDefault = true;
    if (targetEl.matches(data.focusableElements)) {
        preventDefault = false;
        if (targetEl.nodeName === "SELECT") data.isTouched = false;
    }
    if (document1.activeElement && document1.activeElement.matches(data.focusableElements) && document1.activeElement !== targetEl) document1.activeElement.blur();
    const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
    if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) e.preventDefault();
    if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) swiper.freeMode.onTouchStart();
    swiper.emit("touchStart", e);
}
function onTouchMove(event) {
    const document1 = (0, _ssrWindowEsmMjs.g)();
    const swiper = this;
    const data = swiper.touchEventsData;
    const { params, touches, rtlTranslate: rtl, enabled } = swiper;
    if (!enabled) return;
    if (!params.simulateTouch && event.pointerType === "mouse") return;
    let e = event;
    if (e.originalEvent) e = e.originalEvent;
    if (!data.isTouched) {
        if (data.startMoving && data.isScrolling) swiper.emit("touchMoveOpposite", e);
        return;
    }
    const pointerIndex = data.evCache.findIndex((cachedEv)=>cachedEv.pointerId === e.pointerId);
    if (pointerIndex >= 0) data.evCache[pointerIndex] = e;
    const targetTouch = data.evCache.length > 1 ? data.evCache[0] : e;
    const pageX = targetTouch.pageX;
    const pageY = targetTouch.pageY;
    if (e.preventedByNestedSwiper) {
        touches.startX = pageX;
        touches.startY = pageY;
        return;
    }
    if (!swiper.allowTouchMove) {
        if (!e.target.matches(data.focusableElements)) swiper.allowClick = false;
        if (data.isTouched) {
            Object.assign(touches, {
                startX: pageX,
                startY: pageY,
                prevX: swiper.touches.currentX,
                prevY: swiper.touches.currentY,
                currentX: pageX,
                currentY: pageY
            });
            data.touchStartTime = (0, _utilsMjs.d)();
        }
        return;
    }
    if (params.touchReleaseOnEdges && !params.loop) {
        if (swiper.isVertical()) // Vertical
        {
            if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                data.isTouched = false;
                data.isMoved = false;
                return;
            }
        } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) return;
    }
    if (document1.activeElement) {
        if (e.target === document1.activeElement && e.target.matches(data.focusableElements)) {
            data.isMoved = true;
            swiper.allowClick = false;
            return;
        }
    }
    if (data.allowTouchCallbacks) swiper.emit("touchMove", e);
    if (e.targetTouches && e.targetTouches.length > 1) return;
    touches.currentX = pageX;
    touches.currentY = pageY;
    const diffX = touches.currentX - touches.startX;
    const diffY = touches.currentY - touches.startY;
    if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
    if (typeof data.isScrolling === "undefined") {
        let touchAngle;
        if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) data.isScrolling = false;
        else // eslint-disable-next-line
        if (diffX * diffX + diffY * diffY >= 25) {
            touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
            data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
        }
    }
    if (data.isScrolling) swiper.emit("touchMoveOpposite", e);
    if (typeof data.startMoving === "undefined") {
        if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) data.startMoving = true;
    }
    if (data.isScrolling || swiper.zoom && swiper.params.zoom && swiper.params.zoom.enabled && data.evCache.length > 1) {
        data.isTouched = false;
        return;
    }
    if (!data.startMoving) return;
    swiper.allowClick = false;
    if (!params.cssMode && e.cancelable) e.preventDefault();
    if (params.touchMoveStopPropagation && !params.nested) e.stopPropagation();
    let diff = swiper.isHorizontal() ? diffX : diffY;
    let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
    if (params.oneWayMovement) {
        diff = Math.abs(diff) * (rtl ? 1 : -1);
        touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
    }
    touches.diff = diff;
    diff *= params.touchRatio;
    if (rtl) {
        diff = -diff;
        touchesDiff = -touchesDiff;
    }
    const prevTouchesDirection = swiper.touchesDirection;
    swiper.swipeDirection = diff > 0 ? "prev" : "next";
    swiper.touchesDirection = touchesDiff > 0 ? "prev" : "next";
    const isLoop = swiper.params.loop && !params.cssMode;
    if (!data.isMoved) {
        if (isLoop) swiper.loopFix({
            direction: swiper.swipeDirection
        });
        data.startTranslate = swiper.getTranslate();
        swiper.setTransition(0);
        if (swiper.animating) {
            const evt = new window.CustomEvent("transitionend", {
                bubbles: true,
                cancelable: true
            });
            swiper.wrapperEl.dispatchEvent(evt);
        }
        data.allowMomentumBounce = false;
        // Grab Cursor
        if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(true);
        swiper.emit("sliderFirstMove", e);
    }
    let loopFixed;
    if (data.isMoved && prevTouchesDirection !== swiper.touchesDirection && isLoop && Math.abs(diff) >= 1) {
        // need another loop fix
        swiper.loopFix({
            direction: swiper.swipeDirection,
            setTranslate: true
        });
        loopFixed = true;
    }
    swiper.emit("sliderMove", e);
    data.isMoved = true;
    data.currentTranslate = diff + data.startTranslate;
    let disableParentSwiper = true;
    let resistanceRatio = params.resistanceRatio;
    if (params.touchReleaseOnEdges) resistanceRatio = 0;
    if (diff > 0) {
        if (isLoop && !loopFixed && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.size / 2 : swiper.minTranslate())) swiper.loopFix({
            direction: "prev",
            setTranslate: true,
            activeSlideIndex: 0
        });
        if (data.currentTranslate > swiper.minTranslate()) {
            disableParentSwiper = false;
            if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
        }
    } else if (diff < 0) {
        if (isLoop && !loopFixed && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.size / 2 : swiper.maxTranslate())) swiper.loopFix({
            direction: "next",
            setTranslate: true,
            activeSlideIndex: swiper.slides.length - (params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
        });
        if (data.currentTranslate < swiper.maxTranslate()) {
            disableParentSwiper = false;
            if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
        }
    }
    if (disableParentSwiper) e.preventedByNestedSwiper = true;
    // Directions locks
    if (!swiper.allowSlideNext && swiper.swipeDirection === "next" && data.currentTranslate < data.startTranslate) data.currentTranslate = data.startTranslate;
    if (!swiper.allowSlidePrev && swiper.swipeDirection === "prev" && data.currentTranslate > data.startTranslate) data.currentTranslate = data.startTranslate;
    if (!swiper.allowSlidePrev && !swiper.allowSlideNext) data.currentTranslate = data.startTranslate;
    // Threshold
    if (params.threshold > 0) {
        if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
            if (!data.allowThresholdMove) {
                data.allowThresholdMove = true;
                touches.startX = touches.currentX;
                touches.startY = touches.currentY;
                data.currentTranslate = data.startTranslate;
                touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                return;
            }
        } else {
            data.currentTranslate = data.startTranslate;
            return;
        }
    }
    if (!params.followFinger || params.cssMode) return;
    // Update active index in free mode
    if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
    }
    if (params.freeMode && params.freeMode.enabled && swiper.freeMode) swiper.freeMode.onTouchMove();
    // Update progress
    swiper.updateProgress(data.currentTranslate);
    // Update translate
    swiper.setTranslate(data.currentTranslate);
}
function onTouchEnd(event) {
    const swiper = this;
    const data = swiper.touchEventsData;
    const pointerIndex = data.evCache.findIndex((cachedEv)=>cachedEv.pointerId === event.pointerId);
    if (pointerIndex >= 0) data.evCache.splice(pointerIndex, 1);
    if ([
        "pointercancel",
        "pointerout",
        "pointerleave",
        "contextmenu"
    ].includes(event.type)) {
        const proceed = [
            "pointercancel",
            "contextmenu"
        ].includes(event.type) && (swiper.browser.isSafari || swiper.browser.isWebView);
        if (!proceed) return;
    }
    const { params, touches, rtlTranslate: rtl, slidesGrid, enabled } = swiper;
    if (!enabled) return;
    if (!params.simulateTouch && event.pointerType === "mouse") return;
    let e = event;
    if (e.originalEvent) e = e.originalEvent;
    if (data.allowTouchCallbacks) swiper.emit("touchEnd", e);
    data.allowTouchCallbacks = false;
    if (!data.isTouched) {
        if (data.isMoved && params.grabCursor) swiper.setGrabCursor(false);
        data.isMoved = false;
        data.startMoving = false;
        return;
    }
    // Return Grab Cursor
    if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(false);
    // Time diff
    const touchEndTime = (0, _utilsMjs.d)();
    const timeDiff = touchEndTime - data.touchStartTime;
    // Tap, doubleTap, Click
    if (swiper.allowClick) {
        const pathTree = e.path || e.composedPath && e.composedPath();
        swiper.updateClickedSlide(pathTree && pathTree[0] || e.target);
        swiper.emit("tap click", e);
        if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) swiper.emit("doubleTap doubleClick", e);
    }
    data.lastClickTime = (0, _utilsMjs.d)();
    (0, _utilsMjs.n)(()=>{
        if (!swiper.destroyed) swiper.allowClick = true;
    });
    if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
        data.isTouched = false;
        data.isMoved = false;
        data.startMoving = false;
        return;
    }
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    let currentPos;
    if (params.followFinger) currentPos = rtl ? swiper.translate : -swiper.translate;
    else currentPos = -data.currentTranslate;
    if (params.cssMode) return;
    if (params.freeMode && params.freeMode.enabled) {
        swiper.freeMode.onTouchEnd({
            currentPos
        });
        return;
    }
    // Find current slide
    let stopIndex = 0;
    let groupSize = swiper.slidesSizesGrid[0];
    for(let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup){
        const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
        if (typeof slidesGrid[i + increment] !== "undefined") {
            if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
                stopIndex = i;
                groupSize = slidesGrid[i + increment] - slidesGrid[i];
            }
        } else if (currentPos >= slidesGrid[i]) {
            stopIndex = i;
            groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
        }
    }
    let rewindFirstIndex = null;
    let rewindLastIndex = null;
    if (params.rewind) {
        if (swiper.isBeginning) rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
        else if (swiper.isEnd) rewindFirstIndex = 0;
    }
    // Find current slide size
    const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
    const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (timeDiff > params.longSwipesMs) {
        // Long touches
        if (!params.longSwipes) {
            swiper.slideTo(swiper.activeIndex);
            return;
        }
        if (swiper.swipeDirection === "next") {
            if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);
            else swiper.slideTo(stopIndex);
        }
        if (swiper.swipeDirection === "prev") {
            if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment);
            else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) swiper.slideTo(rewindLastIndex);
            else swiper.slideTo(stopIndex);
        }
    } else {
        // Short swipes
        if (!params.shortSwipes) {
            swiper.slideTo(swiper.activeIndex);
            return;
        }
        const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
        if (!isNavButtonTarget) {
            if (swiper.swipeDirection === "next") swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
            if (swiper.swipeDirection === "prev") swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
        } else if (e.target === swiper.navigation.nextEl) swiper.slideTo(stopIndex + increment);
        else swiper.slideTo(stopIndex);
    }
}
function onResize() {
    const swiper = this;
    const { params, el } = swiper;
    if (el && el.offsetWidth === 0) return;
    // Breakpoints
    if (params.breakpoints) swiper.setBreakpoint();
    // Save locks
    const { allowSlideNext, allowSlidePrev, snapGrid } = swiper;
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    // Disable locks on resize
    swiper.allowSlideNext = true;
    swiper.allowSlidePrev = true;
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateSlidesClasses();
    const isVirtualLoop = isVirtual && params.loop;
    if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) swiper.slideTo(swiper.slides.length - 1, 0, false, true);
    else if (swiper.params.loop && !isVirtual) swiper.slideToLoop(swiper.realIndex, 0, false, true);
    else swiper.slideTo(swiper.activeIndex, 0, false, true);
    if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
        clearTimeout(swiper.autoplay.resizeTimeout);
        swiper.autoplay.resizeTimeout = setTimeout(()=>{
            if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) swiper.autoplay.resume();
        }, 500);
    }
    // Return locks after resize
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
}
function onClick(e) {
    const swiper = this;
    if (!swiper.enabled) return;
    if (!swiper.allowClick) {
        if (swiper.params.preventClicks) e.preventDefault();
        if (swiper.params.preventClicksPropagation && swiper.animating) {
            e.stopPropagation();
            e.stopImmediatePropagation();
        }
    }
}
function onScroll() {
    const swiper = this;
    const { wrapperEl, rtlTranslate, enabled } = swiper;
    if (!enabled) return;
    swiper.previousTranslate = swiper.translate;
    if (swiper.isHorizontal()) swiper.translate = -wrapperEl.scrollLeft;
    else swiper.translate = -wrapperEl.scrollTop;
    // eslint-disable-next-line
    if (swiper.translate === 0) swiper.translate = 0;
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
    let newProgress;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) newProgress = 0;
    else newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
    if (newProgress !== swiper.progress) swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
    swiper.emit("setTranslate", swiper.translate, false);
}
function onLoad(e) {
    const swiper = this;
    processLazyPreloader(swiper, e.target);
    if (swiper.params.cssMode || swiper.params.slidesPerView !== "auto" && !swiper.params.autoHeight) return;
    swiper.update();
}
let dummyEventAttached = false;
function dummyEventListener() {}
const events = (swiper, method)=>{
    const document1 = (0, _ssrWindowEsmMjs.g)();
    const { params, el, wrapperEl, device } = swiper;
    const capture = !!params.nested;
    const domMethod = method === "on" ? "addEventListener" : "removeEventListener";
    const swiperMethod = method;
    // Touch Events
    el[domMethod]("pointerdown", swiper.onTouchStart, {
        passive: false
    });
    document1[domMethod]("pointermove", swiper.onTouchMove, {
        passive: false,
        capture
    });
    document1[domMethod]("pointerup", swiper.onTouchEnd, {
        passive: true
    });
    document1[domMethod]("pointercancel", swiper.onTouchEnd, {
        passive: true
    });
    document1[domMethod]("pointerout", swiper.onTouchEnd, {
        passive: true
    });
    document1[domMethod]("pointerleave", swiper.onTouchEnd, {
        passive: true
    });
    document1[domMethod]("contextmenu", swiper.onTouchEnd, {
        passive: true
    });
    // Prevent Links Clicks
    if (params.preventClicks || params.preventClicksPropagation) el[domMethod]("click", swiper.onClick, true);
    if (params.cssMode) wrapperEl[domMethod]("scroll", swiper.onScroll);
    // Resize handler
    if (params.updateOnWindowResize) swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true);
    else swiper[swiperMethod]("observerUpdate", onResize, true);
    // Images loader
    el[domMethod]("load", swiper.onLoad, {
        capture: true
    });
};
function attachEvents() {
    const swiper = this;
    const document1 = (0, _ssrWindowEsmMjs.g)();
    const { params } = swiper;
    swiper.onTouchStart = onTouchStart.bind(swiper);
    swiper.onTouchMove = onTouchMove.bind(swiper);
    swiper.onTouchEnd = onTouchEnd.bind(swiper);
    if (params.cssMode) swiper.onScroll = onScroll.bind(swiper);
    swiper.onClick = onClick.bind(swiper);
    swiper.onLoad = onLoad.bind(swiper);
    if (!dummyEventAttached) {
        document1.addEventListener("touchstart", dummyEventListener);
        dummyEventAttached = true;
    }
    events(swiper, "on");
}
function detachEvents() {
    const swiper = this;
    events(swiper, "off");
}
var events$1 = {
    attachEvents,
    detachEvents
};
const isGridEnabled = (swiper, params)=>{
    return swiper.grid && params.grid && params.grid.rows > 1;
};
function setBreakpoint() {
    const swiper = this;
    const { realIndex, initialized, params, el } = swiper;
    const breakpoints = params.breakpoints;
    if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return;
    // Get breakpoint for window width and update parameters
    const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
    if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
    const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
    const breakpointParams = breakpointOnlyParams || swiper.originalParams;
    const wasMultiRow = isGridEnabled(swiper, params);
    const isMultiRow = isGridEnabled(swiper, breakpointParams);
    const wasEnabled = params.enabled;
    if (wasMultiRow && !isMultiRow) {
        el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
        swiper.emitContainerClasses();
    } else if (!wasMultiRow && isMultiRow) {
        el.classList.add(`${params.containerModifierClass}grid`);
        if (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") el.classList.add(`${params.containerModifierClass}grid-column`);
        swiper.emitContainerClasses();
    }
    // Toggle navigation, pagination, scrollbar
    [
        "navigation",
        "pagination",
        "scrollbar"
    ].forEach((prop)=>{
        if (typeof breakpointParams[prop] === "undefined") return;
        const wasModuleEnabled = params[prop] && params[prop].enabled;
        const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
        if (wasModuleEnabled && !isModuleEnabled) swiper[prop].disable();
        if (!wasModuleEnabled && isModuleEnabled) swiper[prop].enable();
    });
    const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
    const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
    if (directionChanged && initialized) swiper.changeDirection();
    (0, _utilsMjs.q)(swiper.params, breakpointParams);
    const isEnabled = swiper.params.enabled;
    Object.assign(swiper, {
        allowTouchMove: swiper.params.allowTouchMove,
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev
    });
    if (wasEnabled && !isEnabled) swiper.disable();
    else if (!wasEnabled && isEnabled) swiper.enable();
    swiper.currentBreakpoint = breakpoint;
    swiper.emit("_beforeBreakpoint", breakpointParams);
    if (needsReLoop && initialized) {
        swiper.loopDestroy();
        swiper.loopCreate(realIndex);
        swiper.updateSlides();
    }
    swiper.emit("breakpoint", breakpointParams);
}
function getBreakpoint(breakpoints, base, containerEl) {
    if (base === void 0) base = "window";
    if (!breakpoints || base === "container" && !containerEl) return undefined;
    let breakpoint = false;
    const window1 = (0, _ssrWindowEsmMjs.a)();
    const currentHeight = base === "window" ? window1.innerHeight : containerEl.clientHeight;
    const points = Object.keys(breakpoints).map((point)=>{
        if (typeof point === "string" && point.indexOf("@") === 0) {
            const minRatio = parseFloat(point.substr(1));
            const value = currentHeight * minRatio;
            return {
                value,
                point
            };
        }
        return {
            value: point,
            point
        };
    });
    points.sort((a, b)=>parseInt(a.value, 10) - parseInt(b.value, 10));
    for(let i = 0; i < points.length; i += 1){
        const { point, value } = points[i];
        if (base === "window") {
            if (window1.matchMedia(`(min-width: ${value}px)`).matches) breakpoint = point;
        } else if (value <= containerEl.clientWidth) breakpoint = point;
    }
    return breakpoint || "max";
}
var breakpoints = {
    setBreakpoint,
    getBreakpoint
};
function prepareClasses(entries, prefix) {
    const resultClasses = [];
    entries.forEach((item)=>{
        if (typeof item === "object") Object.keys(item).forEach((classNames)=>{
            if (item[classNames]) resultClasses.push(prefix + classNames);
        });
        else if (typeof item === "string") resultClasses.push(prefix + item);
    });
    return resultClasses;
}
function addClasses() {
    const swiper = this;
    const { classNames, params, rtl, el, device } = swiper;
    // prettier-ignore
    const suffixes = prepareClasses([
        "initialized",
        params.direction,
        {
            "free-mode": swiper.params.freeMode && params.freeMode.enabled
        },
        {
            "autoheight": params.autoHeight
        },
        {
            "rtl": rtl
        },
        {
            "grid": params.grid && params.grid.rows > 1
        },
        {
            "grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column"
        },
        {
            "android": device.android
        },
        {
            "ios": device.ios
        },
        {
            "css-mode": params.cssMode
        },
        {
            "centered": params.cssMode && params.centeredSlides
        },
        {
            "watch-progress": params.watchSlidesProgress
        }
    ], params.containerModifierClass);
    classNames.push(...suffixes);
    el.classList.add(...classNames);
    swiper.emitContainerClasses();
}
function removeClasses() {
    const swiper = this;
    const { el, classNames } = swiper;
    el.classList.remove(...classNames);
    swiper.emitContainerClasses();
}
var classes = {
    addClasses,
    removeClasses
};
function checkOverflow() {
    const swiper = this;
    const { isLocked: wasLocked, params } = swiper;
    const { slidesOffsetBefore } = params;
    if (slidesOffsetBefore) {
        const lastSlideIndex = swiper.slides.length - 1;
        const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
        swiper.isLocked = swiper.size > lastSlideRightEdge;
    } else swiper.isLocked = swiper.snapGrid.length === 1;
    if (params.allowSlideNext === true) swiper.allowSlideNext = !swiper.isLocked;
    if (params.allowSlidePrev === true) swiper.allowSlidePrev = !swiper.isLocked;
    if (wasLocked && wasLocked !== swiper.isLocked) swiper.isEnd = false;
    if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? "lock" : "unlock");
}
var checkOverflow$1 = {
    checkOverflow
};
var defaults = {
    init: true,
    direction: "horizontal",
    oneWayMovement: false,
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: false,
    updateOnWindowResize: true,
    resizeObserver: true,
    nested: false,
    createElements: false,
    enabled: true,
    focusableElements: "input, select, option, textarea, button, video, label",
    // Overrides
    width: null,
    height: null,
    //
    preventInteractionOnTransition: false,
    // ssr
    userAgent: null,
    url: null,
    // To support iOS's swipe-to-go-back gesture (when being used in-app).
    edgeSwipeDetection: false,
    edgeSwipeThreshold: 20,
    // Autoheight
    autoHeight: false,
    // Set wrapper width
    setWrapperSize: false,
    // Virtual Translate
    virtualTranslate: false,
    // Effects
    effect: "slide",
    // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
    // Breakpoints
    breakpoints: undefined,
    breakpointsBase: "window",
    // Slides grid
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: false,
    centeredSlides: false,
    centeredSlidesBounds: false,
    slidesOffsetBefore: 0,
    // in px
    slidesOffsetAfter: 0,
    // in px
    normalizeSlideIndex: true,
    centerInsufficientSlides: false,
    // Disable swiper and hide navigation when container not overflow
    watchOverflow: true,
    // Round length
    roundLengths: false,
    // Touches
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: true,
    shortSwipes: true,
    longSwipes: true,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: true,
    allowTouchMove: true,
    threshold: 5,
    touchMoveStopPropagation: false,
    touchStartPreventDefault: true,
    touchStartForcePreventDefault: false,
    touchReleaseOnEdges: false,
    // Unique Navigation Elements
    uniqueNavElements: true,
    // Resistance
    resistance: true,
    resistanceRatio: 0.85,
    // Progress
    watchSlidesProgress: false,
    // Cursor
    grabCursor: false,
    // Clicks
    preventClicks: true,
    preventClicksPropagation: true,
    slideToClickedSlide: false,
    // loop
    loop: false,
    loopedSlides: null,
    loopPreventsSliding: true,
    // rewind
    rewind: false,
    // Swiping/no swiping
    allowSlidePrev: true,
    allowSlideNext: true,
    swipeHandler: null,
    // '.swipe-handler',
    noSwiping: true,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    // Passive Listeners
    passiveListeners: true,
    maxBackfaceHiddenSlides: 10,
    // NS
    containerModifierClass: "swiper-",
    // NEW
    slideClass: "swiper-slide",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    // Callbacks
    runCallbacksOnInit: true,
    // Internals
    _emitClasses: false
};
function moduleExtendParams(params, allModulesParams) {
    return function extendParams(obj) {
        if (obj === void 0) obj = {};
        const moduleParamName = Object.keys(obj)[0];
        const moduleParams = obj[moduleParamName];
        if (typeof moduleParams !== "object" || moduleParams === null) {
            (0, _utilsMjs.q)(allModulesParams, obj);
            return;
        }
        if ([
            "navigation",
            "pagination",
            "scrollbar"
        ].indexOf(moduleParamName) >= 0 && params[moduleParamName] === true) params[moduleParamName] = {
            auto: true
        };
        if (!(moduleParamName in params && "enabled" in moduleParams)) {
            (0, _utilsMjs.q)(allModulesParams, obj);
            return;
        }
        if (params[moduleParamName] === true) params[moduleParamName] = {
            enabled: true
        };
        if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) params[moduleParamName].enabled = true;
        if (!params[moduleParamName]) params[moduleParamName] = {
            enabled: false
        };
        (0, _utilsMjs.q)(allModulesParams, obj);
    };
}
/* eslint no-param-reassign: "off" */ const prototypes = {
    eventsEmitter,
    update,
    translate,
    transition,
    slide,
    loop,
    grabCursor,
    events: events$1,
    breakpoints,
    checkOverflow: checkOverflow$1,
    classes
};
const extendedDefaults = {};
class Swiper {
    constructor(){
        let el;
        let params;
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") params = args[0];
        else [el, params] = args;
        if (!params) params = {};
        params = (0, _utilsMjs.q)({}, params);
        if (el && !params.el) params.el = el;
        const document1 = (0, _ssrWindowEsmMjs.g)();
        if (params.el && typeof params.el === "string" && document1.querySelectorAll(params.el).length > 1) {
            const swipers = [];
            document1.querySelectorAll(params.el).forEach((containerEl)=>{
                const newParams = (0, _utilsMjs.q)({}, params, {
                    el: containerEl
                });
                swipers.push(new Swiper(newParams));
            });
            // eslint-disable-next-line no-constructor-return
            return swipers;
        }
        // Swiper Instance
        const swiper = this;
        swiper.__swiper__ = true;
        swiper.support = getSupport();
        swiper.device = getDevice({
            userAgent: params.userAgent
        });
        swiper.browser = getBrowser();
        swiper.eventsListeners = {};
        swiper.eventsAnyListeners = [];
        swiper.modules = [
            ...swiper.__modules__
        ];
        if (params.modules && Array.isArray(params.modules)) swiper.modules.push(...params.modules);
        const allModulesParams = {};
        swiper.modules.forEach((mod)=>{
            mod({
                params,
                swiper,
                extendParams: moduleExtendParams(params, allModulesParams),
                on: swiper.on.bind(swiper),
                once: swiper.once.bind(swiper),
                off: swiper.off.bind(swiper),
                emit: swiper.emit.bind(swiper)
            });
        });
        // Extend defaults with modules params
        const swiperParams = (0, _utilsMjs.q)({}, defaults, allModulesParams);
        // Extend defaults with passed params
        swiper.params = (0, _utilsMjs.q)({}, swiperParams, extendedDefaults, params);
        swiper.originalParams = (0, _utilsMjs.q)({}, swiper.params);
        swiper.passedParams = (0, _utilsMjs.q)({}, params);
        // add event listeners
        if (swiper.params && swiper.params.on) Object.keys(swiper.params.on).forEach((eventName)=>{
            swiper.on(eventName, swiper.params.on[eventName]);
        });
        if (swiper.params && swiper.params.onAny) swiper.onAny(swiper.params.onAny);
        // Extend Swiper
        Object.assign(swiper, {
            enabled: swiper.params.enabled,
            el,
            // Classes
            classNames: [],
            // Slides
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            // isDirection
            isHorizontal () {
                return swiper.params.direction === "horizontal";
            },
            isVertical () {
                return swiper.params.direction === "vertical";
            },
            // Indexes
            activeIndex: 0,
            realIndex: 0,
            //
            isBeginning: true,
            isEnd: false,
            // Props
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: false,
            cssOverflowAdjustment () {
                // Returns 0 unless `translate` is > 2**23
                // Should be subtracted from css values to prevent overflow
                return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
            },
            // Locks
            allowSlideNext: swiper.params.allowSlideNext,
            allowSlidePrev: swiper.params.allowSlidePrev,
            // Touch Events
            touchEventsData: {
                isTouched: undefined,
                isMoved: undefined,
                allowTouchCallbacks: undefined,
                touchStartTime: undefined,
                isScrolling: undefined,
                currentTranslate: undefined,
                startTranslate: undefined,
                allowThresholdMove: undefined,
                // Form elements to match
                focusableElements: swiper.params.focusableElements,
                // Last click time
                lastClickTime: 0,
                clickTimeout: undefined,
                // Velocities
                velocities: [],
                allowMomentumBounce: undefined,
                startMoving: undefined,
                evCache: []
            },
            // Clicks
            allowClick: true,
            // Touches
            allowTouchMove: swiper.params.allowTouchMove,
            touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            },
            // Images
            imagesToLoad: [],
            imagesLoaded: 0
        });
        swiper.emit("_swiper");
        // Init
        if (swiper.params.init) swiper.init();
        // Return app instance
        // eslint-disable-next-line no-constructor-return
        return swiper;
    }
    getSlideIndex(slideEl) {
        const { slidesEl, params } = this;
        const slides = (0, _utilsMjs.e)(slidesEl, `.${params.slideClass}, swiper-slide`);
        const firstSlideIndex = (0, _utilsMjs.g)(slides[0]);
        return (0, _utilsMjs.g)(slideEl) - firstSlideIndex;
    }
    getSlideIndexByData(index) {
        return this.getSlideIndex(this.slides.filter((slideEl)=>slideEl.getAttribute("data-swiper-slide-index") * 1 === index)[0]);
    }
    recalcSlides() {
        const swiper = this;
        const { slidesEl, params } = swiper;
        swiper.slides = (0, _utilsMjs.e)(slidesEl, `.${params.slideClass}, swiper-slide`);
    }
    enable() {
        const swiper = this;
        if (swiper.enabled) return;
        swiper.enabled = true;
        if (swiper.params.grabCursor) swiper.setGrabCursor();
        swiper.emit("enable");
    }
    disable() {
        const swiper = this;
        if (!swiper.enabled) return;
        swiper.enabled = false;
        if (swiper.params.grabCursor) swiper.unsetGrabCursor();
        swiper.emit("disable");
    }
    setProgress(progress, speed) {
        const swiper = this;
        progress = Math.min(Math.max(progress, 0), 1);
        const min = swiper.minTranslate();
        const max = swiper.maxTranslate();
        const current = (max - min) * progress + min;
        swiper.translateTo(current, typeof speed === "undefined" ? 0 : speed);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
    }
    emitContainerClasses() {
        const swiper = this;
        if (!swiper.params._emitClasses || !swiper.el) return;
        const cls = swiper.el.className.split(" ").filter((className)=>{
            return className.indexOf("swiper") === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
        });
        swiper.emit("_containerClasses", cls.join(" "));
    }
    getSlideClasses(slideEl) {
        const swiper = this;
        if (swiper.destroyed) return "";
        return slideEl.className.split(" ").filter((className)=>{
            return className.indexOf("swiper-slide") === 0 || className.indexOf(swiper.params.slideClass) === 0;
        }).join(" ");
    }
    emitSlidesClasses() {
        const swiper = this;
        if (!swiper.params._emitClasses || !swiper.el) return;
        const updates = [];
        swiper.slides.forEach((slideEl)=>{
            const classNames = swiper.getSlideClasses(slideEl);
            updates.push({
                slideEl,
                classNames
            });
            swiper.emit("_slideClass", slideEl, classNames);
        });
        swiper.emit("_slideClasses", updates);
    }
    slidesPerViewDynamic(view, exact) {
        if (view === void 0) view = "current";
        if (exact === void 0) exact = false;
        const swiper = this;
        const { params, slides, slidesGrid, slidesSizesGrid, size: swiperSize, activeIndex } = swiper;
        let spv = 1;
        if (params.centeredSlides) {
            let slideSize = slides[activeIndex] ? slides[activeIndex].swiperSlideSize : 0;
            let breakLoop;
            for(let i = activeIndex + 1; i < slides.length; i += 1)if (slides[i] && !breakLoop) {
                slideSize += slides[i].swiperSlideSize;
                spv += 1;
                if (slideSize > swiperSize) breakLoop = true;
            }
            for(let i = activeIndex - 1; i >= 0; i -= 1)if (slides[i] && !breakLoop) {
                slideSize += slides[i].swiperSlideSize;
                spv += 1;
                if (slideSize > swiperSize) breakLoop = true;
            }
        } else {
            // eslint-disable-next-line
            if (view === "current") for(let i = activeIndex + 1; i < slides.length; i += 1){
                const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
                if (slideInView) spv += 1;
            }
            else // previous
            for(let i = activeIndex - 1; i >= 0; i -= 1){
                const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
                if (slideInView) spv += 1;
            }
        }
        return spv;
    }
    update() {
        const swiper = this;
        if (!swiper || swiper.destroyed) return;
        const { snapGrid, params } = swiper;
        // Breakpoints
        if (params.breakpoints) swiper.setBreakpoint();
        [
            ...swiper.el.querySelectorAll('[loading="lazy"]')
        ].forEach((imageEl)=>{
            if (imageEl.complete) processLazyPreloader(swiper, imageEl);
        });
        swiper.updateSize();
        swiper.updateSlides();
        swiper.updateProgress();
        swiper.updateSlidesClasses();
        function setTranslate() {
            const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
            const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
            swiper.setTranslate(newTranslate);
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        }
        let translated;
        if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
            setTranslate();
            if (params.autoHeight) swiper.updateAutoHeight();
        } else {
            if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
                const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
                translated = swiper.slideTo(slides.length - 1, 0, false, true);
            } else translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
            if (!translated) setTranslate();
        }
        if (params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
        swiper.emit("update");
    }
    changeDirection(newDirection, needUpdate) {
        if (needUpdate === void 0) needUpdate = true;
        const swiper = this;
        const currentDirection = swiper.params.direction;
        if (!newDirection) // eslint-disable-next-line
        newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
        if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") return swiper;
        swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
        swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
        swiper.emitContainerClasses();
        swiper.params.direction = newDirection;
        swiper.slides.forEach((slideEl)=>{
            if (newDirection === "vertical") slideEl.style.width = "";
            else slideEl.style.height = "";
        });
        swiper.emit("changeDirection");
        if (needUpdate) swiper.update();
        return swiper;
    }
    changeLanguageDirection(direction) {
        const swiper = this;
        if (swiper.rtl && direction === "rtl" || !swiper.rtl && direction === "ltr") return;
        swiper.rtl = direction === "rtl";
        swiper.rtlTranslate = swiper.params.direction === "horizontal" && swiper.rtl;
        if (swiper.rtl) {
            swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
            swiper.el.dir = "rtl";
        } else {
            swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
            swiper.el.dir = "ltr";
        }
        swiper.update();
    }
    mount(element) {
        const swiper = this;
        if (swiper.mounted) return true;
        // Find el
        let el = element || swiper.params.el;
        if (typeof el === "string") el = document.querySelector(el);
        if (!el) return false;
        el.swiper = swiper;
        if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === "SWIPER-CONTAINER") swiper.isElement = true;
        const getWrapperSelector = ()=>{
            return `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
        };
        const getWrapper = ()=>{
            if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                const res = el.shadowRoot.querySelector(getWrapperSelector());
                // Children needs to return slot items
                return res;
            }
            return (0, _utilsMjs.e)(el, getWrapperSelector())[0];
        };
        // Find Wrapper
        let wrapperEl = getWrapper();
        if (!wrapperEl && swiper.params.createElements) {
            wrapperEl = (0, _utilsMjs.c)("div", swiper.params.wrapperClass);
            el.append(wrapperEl);
            (0, _utilsMjs.e)(el, `.${swiper.params.slideClass}`).forEach((slideEl)=>{
                wrapperEl.append(slideEl);
            });
        }
        Object.assign(swiper, {
            el,
            wrapperEl,
            slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
            hostEl: swiper.isElement ? el.parentNode.host : el,
            mounted: true,
            // RTL
            rtl: el.dir.toLowerCase() === "rtl" || (0, _utilsMjs.l)(el, "direction") === "rtl",
            rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || (0, _utilsMjs.l)(el, "direction") === "rtl"),
            wrongRTL: (0, _utilsMjs.l)(wrapperEl, "display") === "-webkit-box"
        });
        return true;
    }
    init(el) {
        const swiper = this;
        if (swiper.initialized) return swiper;
        const mounted = swiper.mount(el);
        if (mounted === false) return swiper;
        swiper.emit("beforeInit");
        // Set breakpoint
        if (swiper.params.breakpoints) swiper.setBreakpoint();
        // Add Classes
        swiper.addClasses();
        // Update size
        swiper.updateSize();
        // Update slides
        swiper.updateSlides();
        if (swiper.params.watchOverflow) swiper.checkOverflow();
        // Set Grab Cursor
        if (swiper.params.grabCursor && swiper.enabled) swiper.setGrabCursor();
        // Slide To Initial Slide
        if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true);
        else swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
        // Create loop
        if (swiper.params.loop) swiper.loopCreate();
        // Attach events
        swiper.attachEvents();
        const lazyElements = [
            ...swiper.el.querySelectorAll('[loading="lazy"]')
        ];
        if (swiper.isElement) lazyElements.push(...swiper.hostEl.querySelectorAll('[loading="lazy"]'));
        lazyElements.forEach((imageEl)=>{
            if (imageEl.complete) processLazyPreloader(swiper, imageEl);
            else imageEl.addEventListener("load", (e)=>{
                processLazyPreloader(swiper, e.target);
            });
        });
        preload(swiper);
        // Init Flag
        swiper.initialized = true;
        preload(swiper);
        // Emit
        swiper.emit("init");
        swiper.emit("afterInit");
        return swiper;
    }
    destroy(deleteInstance, cleanStyles) {
        if (deleteInstance === void 0) deleteInstance = true;
        if (cleanStyles === void 0) cleanStyles = true;
        const swiper = this;
        const { params, el, wrapperEl, slides } = swiper;
        if (typeof swiper.params === "undefined" || swiper.destroyed) return null;
        swiper.emit("beforeDestroy");
        // Init Flag
        swiper.initialized = false;
        // Detach events
        swiper.detachEvents();
        // Destroy loop
        if (params.loop) swiper.loopDestroy();
        // Cleanup styles
        if (cleanStyles) {
            swiper.removeClasses();
            el.removeAttribute("style");
            wrapperEl.removeAttribute("style");
            if (slides && slides.length) slides.forEach((slideEl)=>{
                slideEl.classList.remove(params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
                slideEl.removeAttribute("style");
                slideEl.removeAttribute("data-swiper-slide-index");
            });
        }
        swiper.emit("destroy");
        // Detach emitter events
        Object.keys(swiper.eventsListeners).forEach((eventName)=>{
            swiper.off(eventName);
        });
        if (deleteInstance !== false) {
            swiper.el.swiper = null;
            (0, _utilsMjs.r)(swiper);
        }
        swiper.destroyed = true;
        return null;
    }
    static extendDefaults(newDefaults) {
        (0, _utilsMjs.q)(extendedDefaults, newDefaults);
    }
    static get extendedDefaults() {
        return extendedDefaults;
    }
    static get defaults() {
        return defaults;
    }
    static installModule(mod) {
        if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
        const modules = Swiper.prototype.__modules__;
        if (typeof mod === "function" && modules.indexOf(mod) < 0) modules.push(mod);
    }
    static use(module) {
        if (Array.isArray(module)) {
            module.forEach((m)=>Swiper.installModule(m));
            return Swiper;
        }
        Swiper.installModule(module);
        return Swiper;
    }
}
Object.keys(prototypes).forEach((prototypeGroup)=>{
    Object.keys(prototypes[prototypeGroup]).forEach((protoMethod)=>{
        Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
    });
});
Swiper.use([
    Resize,
    Observer
]);

},{"./ssr-window.esm.mjs":"7eDmS","./utils.mjs":"jk3lb","@parcel/transformer-js/src/esmodule-helpers.js":"iy9MI"}],"7eDmS":[function(require,module,exports) {
/**
 * SSR Window 4.0.2
 * Better handling for window object in SSR environment
 * https://github.com/nolimits4web/ssr-window
 *
 * Copyright 2021, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: December 13, 2021
 */ /* eslint-disable no-param-reassign */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "a", ()=>getWindow);
parcelHelpers.export(exports, "g", ()=>getDocument);
function isObject(obj) {
    return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
}
function extend(target, src) {
    if (target === void 0) target = {};
    if (src === void 0) src = {};
    Object.keys(src).forEach((key)=>{
        if (typeof target[key] === "undefined") target[key] = src[key];
        else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) extend(target[key], src[key]);
    });
}
const ssrDocument = {
    body: {},
    addEventListener () {},
    removeEventListener () {},
    activeElement: {
        blur () {},
        nodeName: ""
    },
    querySelector () {
        return null;
    },
    querySelectorAll () {
        return [];
    },
    getElementById () {
        return null;
    },
    createEvent () {
        return {
            initEvent () {}
        };
    },
    createElement () {
        return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute () {},
            getElementsByTagName () {
                return [];
            }
        };
    },
    createElementNS () {
        return {};
    },
    importNode () {
        return null;
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    }
};
function getDocument() {
    const doc = typeof document !== "undefined" ? document : {};
    extend(doc, ssrDocument);
    return doc;
}
const ssrWindow = {
    document: ssrDocument,
    navigator: {
        userAgent: ""
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    },
    history: {
        replaceState () {},
        pushState () {},
        go () {},
        back () {}
    },
    CustomEvent: function CustomEvent() {
        return this;
    },
    addEventListener () {},
    removeEventListener () {},
    getComputedStyle () {
        return {
            getPropertyValue () {
                return "";
            }
        };
    },
    Image () {},
    Date () {},
    screen: {},
    setTimeout () {},
    clearTimeout () {},
    matchMedia () {
        return {};
    },
    requestAnimationFrame (callback) {
        if (typeof setTimeout === "undefined") {
            callback();
            return null;
        }
        return setTimeout(callback, 0);
    },
    cancelAnimationFrame (id) {
        if (typeof setTimeout === "undefined") return;
        clearTimeout(id);
    }
};
function getWindow() {
    const win = typeof window !== "undefined" ? window : {};
    extend(win, ssrWindow);
    return win;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iy9MI"}],"iy9MI":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"jk3lb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "a", ()=>elementParents);
parcelHelpers.export(exports, "b", ()=>elementOffset);
parcelHelpers.export(exports, "c", ()=>createElement);
parcelHelpers.export(exports, "d", ()=>now);
parcelHelpers.export(exports, "e", ()=>elementChildren);
parcelHelpers.export(exports, "f", ()=>elementOuterSize);
parcelHelpers.export(exports, "g", ()=>elementIndex);
parcelHelpers.export(exports, "h", ()=>getTranslate);
parcelHelpers.export(exports, "i", ()=>elementTransitionEnd);
parcelHelpers.export(exports, "j", ()=>isObject);
parcelHelpers.export(exports, "k", ()=>getSlideTransformEl);
parcelHelpers.export(exports, "l", ()=>elementStyle);
parcelHelpers.export(exports, "m", ()=>elementNextAll);
parcelHelpers.export(exports, "n", ()=>nextTick);
parcelHelpers.export(exports, "o", ()=>elementPrevAll);
parcelHelpers.export(exports, "p", ()=>animateCSSModeScroll);
parcelHelpers.export(exports, "q", ()=>extend);
parcelHelpers.export(exports, "r", ()=>deleteProps);
parcelHelpers.export(exports, "s", ()=>setCSSProperty);
var _ssrWindowEsmMjs = require("./ssr-window.esm.mjs");
function deleteProps(obj) {
    const object = obj;
    Object.keys(object).forEach((key)=>{
        try {
            object[key] = null;
        } catch (e) {
        // no getter for object
        }
        try {
            delete object[key];
        } catch (e) {
        // something got wrong
        }
    });
}
function nextTick(callback, delay) {
    if (delay === void 0) delay = 0;
    return setTimeout(callback, delay);
}
function now() {
    return Date.now();
}
function getComputedStyle(el) {
    const window1 = (0, _ssrWindowEsmMjs.a)();
    let style;
    if (window1.getComputedStyle) style = window1.getComputedStyle(el, null);
    if (!style && el.currentStyle) style = el.currentStyle;
    if (!style) style = el.style;
    return style;
}
function getTranslate(el, axis) {
    if (axis === void 0) axis = "x";
    const window1 = (0, _ssrWindowEsmMjs.a)();
    let matrix;
    let curTransform;
    let transformMatrix;
    const curStyle = getComputedStyle(el);
    if (window1.WebKitCSSMatrix) {
        curTransform = curStyle.transform || curStyle.webkitTransform;
        if (curTransform.split(",").length > 6) curTransform = curTransform.split(", ").map((a)=>a.replace(",", ".")).join(", ");
        // Some old versions of Webkit choke when 'none' is passed; pass
        // empty string instead in this case
        transformMatrix = new window1.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
    } else {
        transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
        matrix = transformMatrix.toString().split(",");
    }
    if (axis === "x") {
        // Latest Chrome and webkits Fix
        if (window1.WebKitCSSMatrix) curTransform = transformMatrix.m41;
        else if (matrix.length === 16) curTransform = parseFloat(matrix[12]);
        else curTransform = parseFloat(matrix[4]);
    }
    if (axis === "y") {
        // Latest Chrome and webkits Fix
        if (window1.WebKitCSSMatrix) curTransform = transformMatrix.m42;
        else if (matrix.length === 16) curTransform = parseFloat(matrix[13]);
        else curTransform = parseFloat(matrix[5]);
    }
    return curTransform || 0;
}
function isObject(o) {
    return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
}
function isNode(node) {
    // eslint-disable-next-line
    if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") return node instanceof HTMLElement;
    return node && (node.nodeType === 1 || node.nodeType === 11);
}
function extend() {
    const to = Object(arguments.length <= 0 ? undefined : arguments[0]);
    const noExtend = [
        "__proto__",
        "constructor",
        "prototype"
    ];
    for(let i = 1; i < arguments.length; i += 1){
        const nextSource = i < 0 || arguments.length <= i ? undefined : arguments[i];
        if (nextSource !== undefined && nextSource !== null && !isNode(nextSource)) {
            const keysArray = Object.keys(Object(nextSource)).filter((key)=>noExtend.indexOf(key) < 0);
            for(let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1){
                const nextKey = keysArray[nextIndex];
                const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                if (desc !== undefined && desc.enumerable) {
                    if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
                        if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey];
                        else extend(to[nextKey], nextSource[nextKey]);
                    } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
                        to[nextKey] = {};
                        if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey];
                        else extend(to[nextKey], nextSource[nextKey]);
                    } else to[nextKey] = nextSource[nextKey];
                }
            }
        }
    }
    return to;
}
function setCSSProperty(el, varName, varValue) {
    el.style.setProperty(varName, varValue);
}
function animateCSSModeScroll(_ref) {
    let { swiper, targetPosition, side } = _ref;
    const window1 = (0, _ssrWindowEsmMjs.a)();
    const startPosition = -swiper.translate;
    let startTime = null;
    let time;
    const duration = swiper.params.speed;
    swiper.wrapperEl.style.scrollSnapType = "none";
    window1.cancelAnimationFrame(swiper.cssModeFrameID);
    const dir = targetPosition > startPosition ? "next" : "prev";
    const isOutOfBound = (current, target)=>{
        return dir === "next" && current >= target || dir === "prev" && current <= target;
    };
    const animate = ()=>{
        time = new Date().getTime();
        if (startTime === null) startTime = time;
        const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
        const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
        let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
        if (isOutOfBound(currentPosition, targetPosition)) currentPosition = targetPosition;
        swiper.wrapperEl.scrollTo({
            [side]: currentPosition
        });
        if (isOutOfBound(currentPosition, targetPosition)) {
            swiper.wrapperEl.style.overflow = "hidden";
            swiper.wrapperEl.style.scrollSnapType = "";
            setTimeout(()=>{
                swiper.wrapperEl.style.overflow = "";
                swiper.wrapperEl.scrollTo({
                    [side]: currentPosition
                });
            });
            window1.cancelAnimationFrame(swiper.cssModeFrameID);
            return;
        }
        swiper.cssModeFrameID = window1.requestAnimationFrame(animate);
    };
    animate();
}
function getSlideTransformEl(slideEl) {
    return slideEl.querySelector(".swiper-slide-transform") || slideEl.shadowRoot && slideEl.shadowRoot.querySelector(".swiper-slide-transform") || slideEl;
}
function elementChildren(element, selector) {
    if (selector === void 0) selector = "";
    return [
        ...element.children
    ].filter((el)=>el.matches(selector));
}
function createElement(tag, classes) {
    if (classes === void 0) classes = [];
    const el = document.createElement(tag);
    el.classList.add(...Array.isArray(classes) ? classes : [
        classes
    ]);
    return el;
}
function elementOffset(el) {
    const window1 = (0, _ssrWindowEsmMjs.a)();
    const document1 = (0, _ssrWindowEsmMjs.g)();
    const box = el.getBoundingClientRect();
    const body = document1.body;
    const clientTop = el.clientTop || body.clientTop || 0;
    const clientLeft = el.clientLeft || body.clientLeft || 0;
    const scrollTop = el === window1 ? window1.scrollY : el.scrollTop;
    const scrollLeft = el === window1 ? window1.scrollX : el.scrollLeft;
    return {
        top: box.top + scrollTop - clientTop,
        left: box.left + scrollLeft - clientLeft
    };
}
function elementPrevAll(el, selector) {
    const prevEls = [];
    while(el.previousElementSibling){
        const prev = el.previousElementSibling; // eslint-disable-line
        if (selector) {
            if (prev.matches(selector)) prevEls.push(prev);
        } else prevEls.push(prev);
        el = prev;
    }
    return prevEls;
}
function elementNextAll(el, selector) {
    const nextEls = [];
    while(el.nextElementSibling){
        const next = el.nextElementSibling; // eslint-disable-line
        if (selector) {
            if (next.matches(selector)) nextEls.push(next);
        } else nextEls.push(next);
        el = next;
    }
    return nextEls;
}
function elementStyle(el, prop) {
    const window1 = (0, _ssrWindowEsmMjs.a)();
    return window1.getComputedStyle(el, null).getPropertyValue(prop);
}
function elementIndex(el) {
    let child = el;
    let i;
    if (child) {
        i = 0;
        // eslint-disable-next-line
        while((child = child.previousSibling) !== null)if (child.nodeType === 1) i += 1;
        return i;
    }
    return undefined;
}
function elementParents(el, selector) {
    const parents = []; // eslint-disable-line
    let parent = el.parentElement; // eslint-disable-line
    while(parent){
        if (selector) {
            if (parent.matches(selector)) parents.push(parent);
        } else parents.push(parent);
        parent = parent.parentElement;
    }
    return parents;
}
function elementTransitionEnd(el, callback) {
    function fireCallBack(e) {
        if (e.target !== el) return;
        callback.call(el, e);
        el.removeEventListener("transitionend", fireCallBack);
    }
    if (callback) el.addEventListener("transitionend", fireCallBack);
}
function elementOuterSize(el, size, includeMargins) {
    const window1 = (0, _ssrWindowEsmMjs.a)();
    if (includeMargins) return el[size === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(window1.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-right" : "margin-top")) + parseFloat(window1.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-left" : "margin-bottom"));
    return el.offsetWidth;
}

},{"./ssr-window.esm.mjs":"7eDmS","@parcel/transformer-js/src/esmodule-helpers.js":"iy9MI"}],"ftlmY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Virtual);
var _ssrWindowEsmMjs = require("../shared/ssr-window.esm.mjs");
var _utilsMjs = require("../shared/utils.mjs");
function Virtual(_ref) {
    let { swiper, extendParams, on, emit } = _ref;
    extendParams({
        virtual: {
            enabled: false,
            slides: [],
            cache: true,
            renderSlide: null,
            renderExternal: null,
            renderExternalUpdate: true,
            addSlidesBefore: 0,
            addSlidesAfter: 0
        }
    });
    let cssModeTimeout;
    const document = (0, _ssrWindowEsmMjs.g)();
    swiper.virtual = {
        cache: {},
        from: undefined,
        to: undefined,
        slides: [],
        offset: 0,
        slidesGrid: []
    };
    const tempDOM = document.createElement("div");
    function renderSlide(slide, index) {
        const params = swiper.params.virtual;
        if (params.cache && swiper.virtual.cache[index]) return swiper.virtual.cache[index];
        // eslint-disable-next-line
        let slideEl;
        if (params.renderSlide) {
            slideEl = params.renderSlide.call(swiper, slide, index);
            if (typeof slideEl === "string") {
                tempDOM.innerHTML = slideEl;
                slideEl = tempDOM.children[0];
            }
        } else if (swiper.isElement) slideEl = (0, _utilsMjs.c)("swiper-slide");
        else slideEl = (0, _utilsMjs.c)("div", swiper.params.slideClass);
        slideEl.setAttribute("data-swiper-slide-index", index);
        if (!params.renderSlide) slideEl.innerHTML = slide;
        if (params.cache) swiper.virtual.cache[index] = slideEl;
        return slideEl;
    }
    function update(force) {
        const { slidesPerView, slidesPerGroup, centeredSlides, loop: isLoop } = swiper.params;
        const { addSlidesBefore, addSlidesAfter } = swiper.params.virtual;
        const { from: previousFrom, to: previousTo, slides, slidesGrid: previousSlidesGrid, offset: previousOffset } = swiper.virtual;
        if (!swiper.params.cssMode) swiper.updateActiveIndex();
        const activeIndex = swiper.activeIndex || 0;
        let offsetProp;
        if (swiper.rtlTranslate) offsetProp = "right";
        else offsetProp = swiper.isHorizontal() ? "left" : "top";
        let slidesAfter;
        let slidesBefore;
        if (centeredSlides) {
            slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
            slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
        } else {
            slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
            slidesBefore = (isLoop ? slidesPerView : slidesPerGroup) + addSlidesBefore;
        }
        let from = activeIndex - slidesBefore;
        let to = activeIndex + slidesAfter;
        if (!isLoop) {
            from = Math.max(from, 0);
            to = Math.min(to, slides.length - 1);
        }
        let offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
        if (isLoop && activeIndex >= slidesBefore) {
            from -= slidesBefore;
            if (!centeredSlides) offset += swiper.slidesGrid[0];
        } else if (isLoop && activeIndex < slidesBefore) {
            from = -slidesBefore;
            if (centeredSlides) offset += swiper.slidesGrid[0];
        }
        Object.assign(swiper.virtual, {
            from,
            to,
            offset,
            slidesGrid: swiper.slidesGrid,
            slidesBefore,
            slidesAfter
        });
        function onRendered() {
            swiper.updateSlides();
            swiper.updateProgress();
            swiper.updateSlidesClasses();
            emit("virtualUpdate");
        }
        if (previousFrom === from && previousTo === to && !force) {
            if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) swiper.slides.forEach((slideEl)=>{
                slideEl.style[offsetProp] = `${offset - Math.abs(swiper.cssOverflowAdjustment())}px`;
            });
            swiper.updateProgress();
            emit("virtualUpdate");
            return;
        }
        if (swiper.params.virtual.renderExternal) {
            swiper.params.virtual.renderExternal.call(swiper, {
                offset,
                from,
                to,
                slides: function getSlides() {
                    const slidesToRender = [];
                    for(let i = from; i <= to; i += 1)slidesToRender.push(slides[i]);
                    return slidesToRender;
                }()
            });
            if (swiper.params.virtual.renderExternalUpdate) onRendered();
            else emit("virtualUpdate");
            return;
        }
        const prependIndexes = [];
        const appendIndexes = [];
        const getSlideIndex = (index)=>{
            let slideIndex = index;
            if (index < 0) slideIndex = slides.length + index;
            else if (slideIndex >= slides.length) // eslint-disable-next-line
            slideIndex = slideIndex - slides.length;
            return slideIndex;
        };
        if (force) swiper.slidesEl.querySelectorAll(`.${swiper.params.slideClass}, swiper-slide`).forEach((slideEl)=>{
            slideEl.remove();
        });
        else {
            for(let i = previousFrom; i <= previousTo; i += 1)if (i < from || i > to) {
                const slideIndex = getSlideIndex(i);
                swiper.slidesEl.querySelectorAll(`.${swiper.params.slideClass}[data-swiper-slide-index="${slideIndex}"], swiper-slide[data-swiper-slide-index="${slideIndex}"]`).forEach((slideEl)=>{
                    slideEl.remove();
                });
            }
        }
        const loopFrom = isLoop ? -slides.length : 0;
        const loopTo = isLoop ? slides.length * 2 : slides.length;
        for(let i = loopFrom; i < loopTo; i += 1)if (i >= from && i <= to) {
            const slideIndex = getSlideIndex(i);
            if (typeof previousTo === "undefined" || force) appendIndexes.push(slideIndex);
            else {
                if (i > previousTo) appendIndexes.push(slideIndex);
                if (i < previousFrom) prependIndexes.push(slideIndex);
            }
        }
        appendIndexes.forEach((index)=>{
            swiper.slidesEl.append(renderSlide(slides[index], index));
        });
        if (isLoop) for(let i = prependIndexes.length - 1; i >= 0; i -= 1){
            const index = prependIndexes[i];
            swiper.slidesEl.prepend(renderSlide(slides[index], index));
        }
        else {
            prependIndexes.sort((a, b)=>b - a);
            prependIndexes.forEach((index)=>{
                swiper.slidesEl.prepend(renderSlide(slides[index], index));
            });
        }
        (0, _utilsMjs.e)(swiper.slidesEl, ".swiper-slide, swiper-slide").forEach((slideEl)=>{
            slideEl.style[offsetProp] = `${offset - Math.abs(swiper.cssOverflowAdjustment())}px`;
        });
        onRendered();
    }
    function appendSlide(slides) {
        if (typeof slides === "object" && "length" in slides) {
            for(let i = 0; i < slides.length; i += 1)if (slides[i]) swiper.virtual.slides.push(slides[i]);
        } else swiper.virtual.slides.push(slides);
        update(true);
    }
    function prependSlide(slides) {
        const activeIndex = swiper.activeIndex;
        let newActiveIndex = activeIndex + 1;
        let numberOfNewSlides = 1;
        if (Array.isArray(slides)) {
            for(let i = 0; i < slides.length; i += 1)if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
            newActiveIndex = activeIndex + slides.length;
            numberOfNewSlides = slides.length;
        } else swiper.virtual.slides.unshift(slides);
        if (swiper.params.virtual.cache) {
            const cache = swiper.virtual.cache;
            const newCache = {};
            Object.keys(cache).forEach((cachedIndex)=>{
                const cachedEl = cache[cachedIndex];
                const cachedElIndex = cachedEl.getAttribute("data-swiper-slide-index");
                if (cachedElIndex) cachedEl.setAttribute("data-swiper-slide-index", parseInt(cachedElIndex, 10) + numberOfNewSlides);
                newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = cachedEl;
            });
            swiper.virtual.cache = newCache;
        }
        update(true);
        swiper.slideTo(newActiveIndex, 0);
    }
    function removeSlide(slidesIndexes) {
        if (typeof slidesIndexes === "undefined" || slidesIndexes === null) return;
        let activeIndex = swiper.activeIndex;
        if (Array.isArray(slidesIndexes)) for(let i = slidesIndexes.length - 1; i >= 0; i -= 1){
            swiper.virtual.slides.splice(slidesIndexes[i], 1);
            if (swiper.params.virtual.cache) delete swiper.virtual.cache[slidesIndexes[i]];
            if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
            activeIndex = Math.max(activeIndex, 0);
        }
        else {
            swiper.virtual.slides.splice(slidesIndexes, 1);
            if (swiper.params.virtual.cache) delete swiper.virtual.cache[slidesIndexes];
            if (slidesIndexes < activeIndex) activeIndex -= 1;
            activeIndex = Math.max(activeIndex, 0);
        }
        update(true);
        swiper.slideTo(activeIndex, 0);
    }
    function removeAllSlides() {
        swiper.virtual.slides = [];
        if (swiper.params.virtual.cache) swiper.virtual.cache = {};
        update(true);
        swiper.slideTo(0, 0);
    }
    on("beforeInit", ()=>{
        if (!swiper.params.virtual.enabled) return;
        let domSlidesAssigned;
        if (typeof swiper.passedParams.virtual.slides === "undefined") {
            const slides = [
                ...swiper.slidesEl.children
            ].filter((el)=>el.matches(`.${swiper.params.slideClass}, swiper-slide`));
            if (slides && slides.length) {
                swiper.virtual.slides = [
                    ...slides
                ];
                domSlidesAssigned = true;
                slides.forEach((slideEl, slideIndex)=>{
                    slideEl.setAttribute("data-swiper-slide-index", slideIndex);
                    swiper.virtual.cache[slideIndex] = slideEl;
                    slideEl.remove();
                });
            }
        }
        if (!domSlidesAssigned) swiper.virtual.slides = swiper.params.virtual.slides;
        swiper.classNames.push(`${swiper.params.containerModifierClass}virtual`);
        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
        if (!swiper.params.initialSlide) update();
    });
    on("setTranslate", ()=>{
        if (!swiper.params.virtual.enabled) return;
        if (swiper.params.cssMode && !swiper._immediateVirtual) {
            clearTimeout(cssModeTimeout);
            cssModeTimeout = setTimeout(()=>{
                update();
            }, 100);
        } else update();
    });
    on("init update resize", ()=>{
        if (!swiper.params.virtual.enabled) return;
        if (swiper.params.cssMode) (0, _utilsMjs.s)(swiper.wrapperEl, "--swiper-virtual-size", `${swiper.virtualSize}px`);
    });
    Object.assign(swiper.virtual, {
        appendSlide,
        prependSlide,
        removeSlide,
        removeAllSlides,
        update
    });
}

},{"../shared/ssr-window.esm.mjs":"7eDmS","../shared/utils.mjs":"jk3lb","@parcel/transformer-js/src/esmodule-helpers.js":"iy9MI"}],"74Pup":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Keyboard);
var _ssrWindowEsmMjs = require("../shared/ssr-window.esm.mjs");
var _utilsMjs = require("../shared/utils.mjs");
/* eslint-disable consistent-return */ function Keyboard(_ref) {
    let { swiper, extendParams, on, emit } = _ref;
    const document = (0, _ssrWindowEsmMjs.g)();
    const window = (0, _ssrWindowEsmMjs.a)();
    swiper.keyboard = {
        enabled: false
    };
    extendParams({
        keyboard: {
            enabled: false,
            onlyInViewport: true,
            pageUpDown: true
        }
    });
    function handle(event) {
        if (!swiper.enabled) return;
        const { rtlTranslate: rtl } = swiper;
        let e = event;
        if (e.originalEvent) e = e.originalEvent; // jquery fix
        const kc = e.keyCode || e.charCode;
        const pageUpDown = swiper.params.keyboard.pageUpDown;
        const isPageUp = pageUpDown && kc === 33;
        const isPageDown = pageUpDown && kc === 34;
        const isArrowLeft = kc === 37;
        const isArrowRight = kc === 39;
        const isArrowUp = kc === 38;
        const isArrowDown = kc === 40;
        // Directions locks
        if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) return false;
        if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) return false;
        if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) return undefined;
        if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === "input" || document.activeElement.nodeName.toLowerCase() === "textarea")) return undefined;
        if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
            let inView = false;
            // Check that swiper should be inside of visible area of window
            if ((0, _utilsMjs.a)(swiper.el, `.${swiper.params.slideClass}, swiper-slide`).length > 0 && (0, _utilsMjs.a)(swiper.el, `.${swiper.params.slideActiveClass}`).length === 0) return undefined;
            const el = swiper.el;
            const swiperWidth = el.clientWidth;
            const swiperHeight = el.clientHeight;
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            const swiperOffset = (0, _utilsMjs.b)(el);
            if (rtl) swiperOffset.left -= el.scrollLeft;
            const swiperCoord = [
                [
                    swiperOffset.left,
                    swiperOffset.top
                ],
                [
                    swiperOffset.left + swiperWidth,
                    swiperOffset.top
                ],
                [
                    swiperOffset.left,
                    swiperOffset.top + swiperHeight
                ],
                [
                    swiperOffset.left + swiperWidth,
                    swiperOffset.top + swiperHeight
                ]
            ];
            for(let i = 0; i < swiperCoord.length; i += 1){
                const point = swiperCoord[i];
                if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
                    if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line
                    inView = true;
                }
            }
            if (!inView) return undefined;
        }
        if (swiper.isHorizontal()) {
            if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
                if (e.preventDefault) e.preventDefault();
                else e.returnValue = false;
            }
            if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
            if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
        } else {
            if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
                if (e.preventDefault) e.preventDefault();
                else e.returnValue = false;
            }
            if (isPageDown || isArrowDown) swiper.slideNext();
            if (isPageUp || isArrowUp) swiper.slidePrev();
        }
        emit("keyPress", kc);
        return undefined;
    }
    function enable() {
        if (swiper.keyboard.enabled) return;
        document.addEventListener("keydown", handle);
        swiper.keyboard.enabled = true;
    }
    function disable() {
        if (!swiper.keyboard.enabled) return;
        document.removeEventListener("keydown", handle);
        swiper.keyboard.enabled = false;
    }
    on("init", ()=>{
        if (swiper.params.keyboard.enabled) enable();
    });
    on("destroy", ()=>{
        if (swiper.keyboard.enabled) disable();
    });
    Object.assign(swiper.keyboard, {
        enable,
        disable
    });
}

},{"../shared/ssr-window.esm.mjs":"7eDmS","../shared/utils.mjs":"jk3lb","@parcel/transformer-js/src/esmodule-helpers.js":"iy9MI"}],"48bGd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Mousewheel);
var _ssrWindowEsmMjs = require("../shared/ssr-window.esm.mjs");
var _utilsMjs = require("../shared/utils.mjs");
/* eslint-disable consistent-return */ function Mousewheel(_ref) {
    let { swiper, extendParams, on, emit } = _ref;
    const window = (0, _ssrWindowEsmMjs.a)();
    extendParams({
        mousewheel: {
            enabled: false,
            releaseOnEdges: false,
            invert: false,
            forceToAxis: false,
            sensitivity: 1,
            eventsTarget: "container",
            thresholdDelta: null,
            thresholdTime: null,
            noMousewheelClass: "swiper-no-mousewheel"
        }
    });
    swiper.mousewheel = {
        enabled: false
    };
    let timeout;
    let lastScrollTime = (0, _utilsMjs.d)();
    let lastEventBeforeSnap;
    const recentWheelEvents = [];
    function normalize(e) {
        // Reasonable defaults
        const PIXEL_STEP = 10;
        const LINE_HEIGHT = 40;
        const PAGE_HEIGHT = 800;
        let sX = 0;
        let sY = 0; // spinX, spinY
        let pX = 0;
        let pY = 0; // pixelX, pixelY
        // Legacy
        if ("detail" in e) sY = e.detail;
        if ("wheelDelta" in e) sY = -e.wheelDelta / 120;
        if ("wheelDeltaY" in e) sY = -e.wheelDeltaY / 120;
        if ("wheelDeltaX" in e) sX = -e.wheelDeltaX / 120;
        // side scrolling on FF with DOMMouseScroll
        if ("axis" in e && e.axis === e.HORIZONTAL_AXIS) {
            sX = sY;
            sY = 0;
        }
        pX = sX * PIXEL_STEP;
        pY = sY * PIXEL_STEP;
        if ("deltaY" in e) pY = e.deltaY;
        if ("deltaX" in e) pX = e.deltaX;
        if (e.shiftKey && !pX) {
            // if user scrolls with shift he wants horizontal scroll
            pX = pY;
            pY = 0;
        }
        if ((pX || pY) && e.deltaMode) {
            if (e.deltaMode === 1) {
                // delta in LINE units
                pX *= LINE_HEIGHT;
                pY *= LINE_HEIGHT;
            } else {
                // delta in PAGE units
                pX *= PAGE_HEIGHT;
                pY *= PAGE_HEIGHT;
            }
        }
        // Fall-back if spin cannot be determined
        if (pX && !sX) sX = pX < 1 ? -1 : 1;
        if (pY && !sY) sY = pY < 1 ? -1 : 1;
        return {
            spinX: sX,
            spinY: sY,
            pixelX: pX,
            pixelY: pY
        };
    }
    function handleMouseEnter() {
        if (!swiper.enabled) return;
        swiper.mouseEntered = true;
    }
    function handleMouseLeave() {
        if (!swiper.enabled) return;
        swiper.mouseEntered = false;
    }
    function animateSlider(newEvent) {
        if (swiper.params.mousewheel.thresholdDelta && newEvent.delta < swiper.params.mousewheel.thresholdDelta) // Prevent if delta of wheel scroll delta is below configured threshold
        return false;
        if (swiper.params.mousewheel.thresholdTime && (0, _utilsMjs.d)() - lastScrollTime < swiper.params.mousewheel.thresholdTime) // Prevent if time between scrolls is below configured threshold
        return false;
        // If the movement is NOT big enough and
        // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
        //   Don't go any further (avoid insignificant scroll movement).
        if (newEvent.delta >= 6 && (0, _utilsMjs.d)() - lastScrollTime < 60) // Return false as a default
        return true;
        // If user is scrolling towards the end:
        //   If the slider hasn't hit the latest slide or
        //   if the slider is a loop and
        //   if the slider isn't moving right now:
        //     Go to next slide and
        //     emit a scroll event.
        // Else (the user is scrolling towards the beginning) and
        // if the slider hasn't hit the first slide or
        // if the slider is a loop and
        // if the slider isn't moving right now:
        //   Go to prev slide and
        //   emit a scroll event.
        if (newEvent.direction < 0) {
            if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
                swiper.slideNext();
                emit("scroll", newEvent.raw);
            }
        } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
            swiper.slidePrev();
            emit("scroll", newEvent.raw);
        }
        // If you got here is because an animation has been triggered so store the current time
        lastScrollTime = new window.Date().getTime();
        // Return false as a default
        return false;
    }
    function releaseScroll(newEvent) {
        const params = swiper.params.mousewheel;
        if (newEvent.direction < 0) {
            if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) // Return true to animate scroll on edges
            return true;
        } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) // Return true to animate scroll on edges
        return true;
        return false;
    }
    function handle(event1) {
        let e = event1;
        let disableParentSwiper = true;
        if (!swiper.enabled) return;
        // Ignore event if the target or its parents have the swiper-no-mousewheel class
        if (event1.target.closest(`.${swiper.params.mousewheel.noMousewheelClass}`)) return;
        const params = swiper.params.mousewheel;
        if (swiper.params.cssMode) e.preventDefault();
        let targetEl = swiper.el;
        if (swiper.params.mousewheel.eventsTarget !== "container") targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
        const targetElContainsTarget = targetEl && targetEl.contains(e.target);
        if (!swiper.mouseEntered && !targetElContainsTarget && !params.releaseOnEdges) return true;
        if (e.originalEvent) e = e.originalEvent; // jquery fix
        let delta = 0;
        const rtlFactor = swiper.rtlTranslate ? -1 : 1;
        const data = normalize(e);
        if (params.forceToAxis) {
            if (swiper.isHorizontal()) {
                if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;
                else return true;
            } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;
            else return true;
        } else delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
        if (delta === 0) return true;
        if (params.invert) delta = -delta;
        // Get the scroll positions
        let positions = swiper.getTranslate() + delta * params.sensitivity;
        if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
        if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate();
        // When loop is true:
        //     the disableParentSwiper will be true.
        // When loop is false:
        //     if the scroll positions is not on edge,
        //     then the disableParentSwiper will be true.
        //     if the scroll on edge positions,
        //     then the disableParentSwiper will be false.
        disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
        if (disableParentSwiper && swiper.params.nested) e.stopPropagation();
        if (!swiper.params.freeMode || !swiper.params.freeMode.enabled) {
            // Register the new event in a variable which stores the relevant data
            const newEvent = {
                time: (0, _utilsMjs.d)(),
                delta: Math.abs(delta),
                direction: Math.sign(delta),
                raw: event1
            };
            // Keep the most recent events
            if (recentWheelEvents.length >= 2) recentWheelEvents.shift(); // only store the last N events
            const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
            recentWheelEvents.push(newEvent);
            // If there is at least one previous recorded event:
            //   If direction has changed or
            //   if the scroll is quicker than the previous one:
            //     Animate the slider.
            // Else (this is the first time the wheel is moved):
            //     Animate the slider.
            if (prevEvent) {
                if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) animateSlider(newEvent);
            } else animateSlider(newEvent);
            // If it's time to release the scroll:
            //   Return now so you don't hit the preventDefault.
            if (releaseScroll(newEvent)) return true;
        } else {
            // Freemode or scrollContainer:
            // If we recently snapped after a momentum scroll, then ignore wheel events
            // to give time for the deceleration to finish. Stop ignoring after 500 msecs
            // or if it's a new scroll (larger delta or inverse sign as last event before
            // an end-of-momentum snap).
            const newEvent = {
                time: (0, _utilsMjs.d)(),
                delta: Math.abs(delta),
                direction: Math.sign(delta)
            };
            const ignoreWheelEvents = lastEventBeforeSnap && newEvent.time < lastEventBeforeSnap.time + 500 && newEvent.delta <= lastEventBeforeSnap.delta && newEvent.direction === lastEventBeforeSnap.direction;
            if (!ignoreWheelEvents) {
                lastEventBeforeSnap = undefined;
                let position = swiper.getTranslate() + delta * params.sensitivity;
                const wasBeginning = swiper.isBeginning;
                const wasEnd = swiper.isEnd;
                if (position >= swiper.minTranslate()) position = swiper.minTranslate();
                if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
                swiper.setTransition(0);
                swiper.setTranslate(position);
                swiper.updateProgress();
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
                if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) swiper.updateSlidesClasses();
                if (swiper.params.loop) swiper.loopFix({
                    direction: newEvent.direction < 0 ? "next" : "prev",
                    byMousewheel: true
                });
                if (swiper.params.freeMode.sticky) {
                    // When wheel scrolling starts with sticky (aka snap) enabled, then detect
                    // the end of a momentum scroll by storing recent (N=15?) wheel events.
                    // 1. do all N events have decreasing or same (absolute value) delta?
                    // 2. did all N events arrive in the last M (M=500?) msecs?
                    // 3. does the earliest event have an (absolute value) delta that's
                    //    at least P (P=1?) larger than the most recent event's delta?
                    // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
                    // If 1-4 are "yes" then we're near the end of a momentum scroll deceleration.
                    // Snap immediately and ignore remaining wheel events in this scroll.
                    // See comment above for "remaining wheel events in this scroll" determination.
                    // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
                    clearTimeout(timeout);
                    timeout = undefined;
                    if (recentWheelEvents.length >= 15) recentWheelEvents.shift(); // only store the last N events
                    const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
                    const firstEvent = recentWheelEvents[0];
                    recentWheelEvents.push(newEvent);
                    if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
                    recentWheelEvents.splice(0);
                    else if (recentWheelEvents.length >= 15 && newEvent.time - firstEvent.time < 500 && firstEvent.delta - newEvent.delta >= 1 && newEvent.delta <= 6) {
                        // We're at the end of the deceleration of a momentum scroll, so there's no need
                        // to wait for more events. Snap ASAP on the next tick.
                        // Also, because there's some remaining momentum we'll bias the snap in the
                        // direction of the ongoing scroll because it's better UX for the scroll to snap
                        // in the same direction as the scroll instead of reversing to snap.  Therefore,
                        // if it's already scrolled more than 20% in the current direction, keep going.
                        const snapToThreshold = delta > 0 ? 0.8 : 0.2;
                        lastEventBeforeSnap = newEvent;
                        recentWheelEvents.splice(0);
                        timeout = (0, _utilsMjs.n)(()=>{
                            swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
                        }, 0); // no delay; move on next tick
                    }
                    if (!timeout) // if we get here, then we haven't detected the end of a momentum scroll, so
                    // we'll consider a scroll "complete" when there haven't been any wheel events
                    // for 500ms.
                    timeout = (0, _utilsMjs.n)(()=>{
                        const snapToThreshold = 0.5;
                        lastEventBeforeSnap = newEvent;
                        recentWheelEvents.splice(0);
                        swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
                    }, 500);
                }
                // Emit event
                if (!ignoreWheelEvents) emit("scroll", e);
                // Stop autoplay
                if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop();
                // Return page scroll on edge positions
                if (params.releaseOnEdges && (position === swiper.minTranslate() || position === swiper.maxTranslate())) return true;
            }
        }
        if (e.preventDefault) e.preventDefault();
        else e.returnValue = false;
        return false;
    }
    function events(method) {
        let targetEl = swiper.el;
        if (swiper.params.mousewheel.eventsTarget !== "container") targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
        targetEl[method]("mouseenter", handleMouseEnter);
        targetEl[method]("mouseleave", handleMouseLeave);
        targetEl[method]("wheel", handle);
    }
    function enable() {
        if (swiper.params.cssMode) {
            swiper.wrapperEl.removeEventListener("wheel", handle);
            return true;
        }
        if (swiper.mousewheel.enabled) return false;
        events("addEventListener");
        swiper.mousewheel.enabled = true;
        return true;
    }
    function disable() {
        if (swiper.params.cssMode) {
            swiper.wrapperEl.addEventListener(event, handle);
            return true;
        }
        if (!swiper.mousewheel.enabled) return false;
        events("removeEventListener");
        swiper.mousewheel.enabled = false;
        return true;
    }
    on("init", ()=>{
        if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) disable();
        if (swiper.params.mousewheel.enabled) enable();
    });
    on("destroy", ()=>{
        if (swiper.params.cssMode) enable();
        if (swiper.mousewheel.enabled) disable();
    });
    Object.assign(swiper.mousewheel, {
        enable,
        disable
    });
}

},{"../shared/ssr-window.esm.mjs":"7eDmS","../shared/utils.mjs":"jk3lb","@parcel/transformer-js/src/esmodule-helpers.js":"iy9MI"}],"4V8R7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Navigation);
var _createElementIfNotDefinedMjs = require("../shared/create-element-if-not-defined.mjs");
function Navigation(_ref) {
    let { swiper, extendParams, on, emit } = _ref;
    extendParams({
        navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: false,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
            navigationDisabledClass: "swiper-navigation-disabled"
        }
    });
    swiper.navigation = {
        nextEl: null,
        prevEl: null
    };
    const makeElementsArray = (el)=>(Array.isArray(el) ? el : [
            el
        ]).filter((e)=>!!e);
    function getEl(el) {
        let res;
        if (el && typeof el === "string" && swiper.isElement) {
            res = swiper.el.querySelector(el);
            if (res) return res;
        }
        if (el) {
            if (typeof el === "string") res = [
                ...document.querySelectorAll(el)
            ];
            if (swiper.params.uniqueNavElements && typeof el === "string" && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) res = swiper.el.querySelector(el);
        }
        if (el && !res) return el;
        // if (Array.isArray(res) && res.length === 1) res = res[0];
        return res;
    }
    function toggleEl(el, disabled) {
        const params = swiper.params.navigation;
        el = makeElementsArray(el);
        el.forEach((subEl)=>{
            if (subEl) {
                subEl.classList[disabled ? "add" : "remove"](...params.disabledClass.split(" "));
                if (subEl.tagName === "BUTTON") subEl.disabled = disabled;
                if (swiper.params.watchOverflow && swiper.enabled) subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
            }
        });
    }
    function update() {
        // Update Navigation Buttons
        const { nextEl, prevEl } = swiper.navigation;
        if (swiper.params.loop) {
            toggleEl(prevEl, false);
            toggleEl(nextEl, false);
            return;
        }
        toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
        toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
    }
    function onPrevClick(e) {
        e.preventDefault();
        if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
        swiper.slidePrev();
        emit("navigationPrev");
    }
    function onNextClick(e) {
        e.preventDefault();
        if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
        swiper.slideNext();
        emit("navigationNext");
    }
    function init() {
        const params = swiper.params.navigation;
        swiper.params.navigation = (0, _createElementIfNotDefinedMjs.c)(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
            nextEl: "swiper-button-next",
            prevEl: "swiper-button-prev"
        });
        if (!(params.nextEl || params.prevEl)) return;
        let nextEl = getEl(params.nextEl);
        let prevEl = getEl(params.prevEl);
        Object.assign(swiper.navigation, {
            nextEl,
            prevEl
        });
        nextEl = makeElementsArray(nextEl);
        prevEl = makeElementsArray(prevEl);
        const initButton = (el, dir)=>{
            if (el) el.addEventListener("click", dir === "next" ? onNextClick : onPrevClick);
            if (!swiper.enabled && el) el.classList.add(...params.lockClass.split(" "));
        };
        nextEl.forEach((el)=>initButton(el, "next"));
        prevEl.forEach((el)=>initButton(el, "prev"));
    }
    function destroy() {
        let { nextEl, prevEl } = swiper.navigation;
        nextEl = makeElementsArray(nextEl);
        prevEl = makeElementsArray(prevEl);
        const destroyButton = (el, dir)=>{
            el.removeEventListener("click", dir === "next" ? onNextClick : onPrevClick);
            el.classList.remove(...swiper.params.navigation.disabledClass.split(" "));
        };
        nextEl.forEach((el)=>destroyButton(el, "next"));
        prevEl.forEach((el)=>destroyButton(el, "prev"));
    }
    on("init", ()=>{
        if (swiper.params.navigation.enabled === false) // eslint-disable-next-line
        disable();
        else {
            init();
            update();
        }
    });
    on("toEdge fromEdge lock unlock", ()=>{
        update();
    });
    on("destroy", ()=>{
        destroy();
    });
    on("enable disable", ()=>{
        let { nextEl, prevEl } = swiper.navigation;
        nextEl = makeElementsArray(nextEl);
        prevEl = makeElementsArray(prevEl);
        [
            ...nextEl,
            ...prevEl
        ].filter((el)=>!!el).forEach((el)=>el.classList[swiper.enabled ? "remove" : "add"](swiper.params.navigation.lockClass));
    });
    on("click", (_s, e)=>{
        let { nextEl, prevEl } = swiper.navigation;
        nextEl = makeElementsArray(nextEl);
        prevEl = makeElementsArray(prevEl);
        const targetEl = e.target;
        if (swiper.params.navigation.hideOnClick && !prevEl.includes(targetEl) && !nextEl.includes(targetEl)) {
            if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
            let isHidden;
            if (nextEl.length) isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass);
            else if (prevEl.length) isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);
            if (isHidden === true) emit("navigationShow");
            else emit("navigationHide");
            [
                ...nextEl,
                ...prevEl
            ].filter((el)=>!!el).forEach((el)=>el.classList.toggle(swiper.params.navigation.hiddenClass));
        }
    });
    const enable = ()=>{
        swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(" "));
        init();
        update();
    };
    const disable = ()=>{
        swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(" "));
        destroy();
    };
    Object.assign(swiper.navigation, {
        enable,
        disable,
        update,
        init,
        destroy
    });
}

},{"../shared/create-element-if-not-defined.mjs":"bfXnP","@parcel/transformer-js/src/esmodule-helpers.js":"iy9MI"}],"bfXnP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "c", ()=>createElementIfNotDefined);
var _utilsMjs = require("./utils.mjs");
function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
    if (swiper.params.createElements) Object.keys(checkProps).forEach((key)=>{
        if (!params[key] && params.auto === true) {
            let element = (0, _utilsMjs.e)(swiper.el, `.${checkProps[key]}`)[0];
            if (!element) {
                element = (0, _utilsMjs.c)("div", checkProps[key]);
                element.className = checkProps[key];
                swiper.el.append(element);
            }
            params[key] = element;
            originalParams[key] = element;
        }
    });
    return params;
}

},{"./utils.mjs":"jk3lb","@parcel/transformer-js/src/esmodule-helpers.js":"iy9MI"}],"dMW4g":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Pagination);
var _classesToSelectorMjs = require("../shared/classes-to-selector.mjs");
var _createElementIfNotDefinedMjs = require("../shared/create-element-if-not-defined.mjs");
var _utilsMjs = require("../shared/utils.mjs");
function Pagination(_ref) {
    let { swiper, extendParams, on, emit } = _ref;
    const pfx = "swiper-pagination";
    extendParams({
        pagination: {
            el: null,
            bulletElement: "span",
            clickable: false,
            hideOnClick: false,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: false,
            type: "bullets",
            // 'bullets' or 'progressbar' or 'fraction' or 'custom'
            dynamicBullets: false,
            dynamicMainBullets: 1,
            formatFractionCurrent: (number)=>number,
            formatFractionTotal: (number)=>number,
            bulletClass: `${pfx}-bullet`,
            bulletActiveClass: `${pfx}-bullet-active`,
            modifierClass: `${pfx}-`,
            currentClass: `${pfx}-current`,
            totalClass: `${pfx}-total`,
            hiddenClass: `${pfx}-hidden`,
            progressbarFillClass: `${pfx}-progressbar-fill`,
            progressbarOppositeClass: `${pfx}-progressbar-opposite`,
            clickableClass: `${pfx}-clickable`,
            lockClass: `${pfx}-lock`,
            horizontalClass: `${pfx}-horizontal`,
            verticalClass: `${pfx}-vertical`,
            paginationDisabledClass: `${pfx}-disabled`
        }
    });
    swiper.pagination = {
        el: null,
        bullets: []
    };
    let bulletSize;
    let dynamicBulletIndex = 0;
    const makeElementsArray = (el)=>(Array.isArray(el) ? el : [
            el
        ]).filter((e)=>!!e);
    function isPaginationDisabled() {
        return !swiper.params.pagination.el || !swiper.pagination.el || Array.isArray(swiper.pagination.el) && swiper.pagination.el.length === 0;
    }
    function setSideBullets(bulletEl, position) {
        const { bulletActiveClass } = swiper.params.pagination;
        if (!bulletEl) return;
        bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
        if (bulletEl) {
            bulletEl.classList.add(`${bulletActiveClass}-${position}`);
            bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
            if (bulletEl) bulletEl.classList.add(`${bulletActiveClass}-${position}-${position}`);
        }
    }
    function onBulletClick(e) {
        const bulletEl = e.target.closest((0, _classesToSelectorMjs.c)(swiper.params.pagination.bulletClass));
        if (!bulletEl) return;
        e.preventDefault();
        const index = (0, _utilsMjs.g)(bulletEl) * swiper.params.slidesPerGroup;
        if (swiper.params.loop) {
            if (swiper.realIndex === index) return;
            const realIndex = swiper.realIndex;
            const newSlideIndex = swiper.getSlideIndexByData(index);
            const currentSlideIndex = swiper.getSlideIndexByData(swiper.realIndex);
            if (newSlideIndex > swiper.slides.length - swiper.loopedSlides) {
                const indexBeforeLoopFix = swiper.activeIndex;
                swiper.loopFix({
                    direction: newSlideIndex > currentSlideIndex ? "next" : "prev",
                    activeSlideIndex: newSlideIndex,
                    slideTo: false
                });
                const indexAfterFix = swiper.activeIndex;
                if (indexBeforeLoopFix === indexAfterFix) swiper.slideToLoop(realIndex, 0, false, true);
            }
            swiper.slideToLoop(index);
        } else swiper.slideTo(index);
    }
    function update() {
        // Render || Update Pagination bullets/items
        const rtl = swiper.rtl;
        const params = swiper.params.pagination;
        if (isPaginationDisabled()) return;
        let el = swiper.pagination.el;
        el = makeElementsArray(el);
        // Current/Total
        let current;
        let previousIndex;
        const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
        const total = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
        if (swiper.params.loop) {
            previousIndex = swiper.previousRealIndex || 0;
            current = swiper.params.slidesPerGroup > 1 ? Math.floor(swiper.realIndex / swiper.params.slidesPerGroup) : swiper.realIndex;
        } else if (typeof swiper.snapIndex !== "undefined") {
            current = swiper.snapIndex;
            previousIndex = swiper.previousSnapIndex;
        } else {
            previousIndex = swiper.previousIndex || 0;
            current = swiper.activeIndex || 0;
        }
        // Types
        if (params.type === "bullets" && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
            const bullets = swiper.pagination.bullets;
            let firstIndex;
            let lastIndex;
            let midIndex;
            if (params.dynamicBullets) {
                bulletSize = (0, _utilsMjs.f)(bullets[0], swiper.isHorizontal() ? "width" : "height", true);
                el.forEach((subEl)=>{
                    subEl.style[swiper.isHorizontal() ? "width" : "height"] = `${bulletSize * (params.dynamicMainBullets + 4)}px`;
                });
                if (params.dynamicMainBullets > 1 && previousIndex !== undefined) {
                    dynamicBulletIndex += current - (previousIndex || 0);
                    if (dynamicBulletIndex > params.dynamicMainBullets - 1) dynamicBulletIndex = params.dynamicMainBullets - 1;
                    else if (dynamicBulletIndex < 0) dynamicBulletIndex = 0;
                }
                firstIndex = Math.max(current - dynamicBulletIndex, 0);
                lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
                midIndex = (lastIndex + firstIndex) / 2;
            }
            bullets.forEach((bulletEl)=>{
                const classesToRemove = [
                    ...[
                        "",
                        "-next",
                        "-next-next",
                        "-prev",
                        "-prev-prev",
                        "-main"
                    ].map((suffix)=>`${params.bulletActiveClass}${suffix}`)
                ].map((s)=>typeof s === "string" && s.includes(" ") ? s.split(" ") : s).flat();
                bulletEl.classList.remove(...classesToRemove);
            });
            if (el.length > 1) bullets.forEach((bullet)=>{
                const bulletIndex = (0, _utilsMjs.g)(bullet);
                if (bulletIndex === current) bullet.classList.add(...params.bulletActiveClass.split(" "));
                else if (swiper.isElement) bullet.setAttribute("part", "bullet");
                if (params.dynamicBullets) {
                    if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) bullet.classList.add(...`${params.bulletActiveClass}-main`.split(" "));
                    if (bulletIndex === firstIndex) setSideBullets(bullet, "prev");
                    if (bulletIndex === lastIndex) setSideBullets(bullet, "next");
                }
            });
            else {
                const bullet = bullets[current];
                if (bullet) bullet.classList.add(...params.bulletActiveClass.split(" "));
                if (swiper.isElement) bullets.forEach((bulletEl, bulletIndex)=>{
                    bulletEl.setAttribute("part", bulletIndex === current ? "bullet-active" : "bullet");
                });
                if (params.dynamicBullets) {
                    const firstDisplayedBullet = bullets[firstIndex];
                    const lastDisplayedBullet = bullets[lastIndex];
                    for(let i = firstIndex; i <= lastIndex; i += 1)if (bullets[i]) bullets[i].classList.add(...`${params.bulletActiveClass}-main`.split(" "));
                    setSideBullets(firstDisplayedBullet, "prev");
                    setSideBullets(lastDisplayedBullet, "next");
                }
            }
            if (params.dynamicBullets) {
                const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
                const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
                const offsetProp = rtl ? "right" : "left";
                bullets.forEach((bullet)=>{
                    bullet.style[swiper.isHorizontal() ? offsetProp : "top"] = `${bulletsOffset}px`;
                });
            }
        }
        el.forEach((subEl, subElIndex)=>{
            if (params.type === "fraction") {
                subEl.querySelectorAll((0, _classesToSelectorMjs.c)(params.currentClass)).forEach((fractionEl)=>{
                    fractionEl.textContent = params.formatFractionCurrent(current + 1);
                });
                subEl.querySelectorAll((0, _classesToSelectorMjs.c)(params.totalClass)).forEach((totalEl)=>{
                    totalEl.textContent = params.formatFractionTotal(total);
                });
            }
            if (params.type === "progressbar") {
                let progressbarDirection;
                if (params.progressbarOpposite) progressbarDirection = swiper.isHorizontal() ? "vertical" : "horizontal";
                else progressbarDirection = swiper.isHorizontal() ? "horizontal" : "vertical";
                const scale = (current + 1) / total;
                let scaleX = 1;
                let scaleY = 1;
                if (progressbarDirection === "horizontal") scaleX = scale;
                else scaleY = scale;
                subEl.querySelectorAll((0, _classesToSelectorMjs.c)(params.progressbarFillClass)).forEach((progressEl)=>{
                    progressEl.style.transform = `translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`;
                    progressEl.style.transitionDuration = `${swiper.params.speed}ms`;
                });
            }
            if (params.type === "custom" && params.renderCustom) {
                subEl.innerHTML = params.renderCustom(swiper, current + 1, total);
                if (subElIndex === 0) emit("paginationRender", subEl);
            } else {
                if (subElIndex === 0) emit("paginationRender", subEl);
                emit("paginationUpdate", subEl);
            }
            if (swiper.params.watchOverflow && swiper.enabled) subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
        });
    }
    function render() {
        // Render Container
        const params = swiper.params.pagination;
        if (isPaginationDisabled()) return;
        const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
        let el = swiper.pagination.el;
        el = makeElementsArray(el);
        let paginationHTML = "";
        if (params.type === "bullets") {
            let numberOfBullets = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
            if (swiper.params.freeMode && swiper.params.freeMode.enabled && numberOfBullets > slidesLength) numberOfBullets = slidesLength;
            for(let i = 0; i < numberOfBullets; i += 1)if (params.renderBullet) paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
            else // prettier-ignore
            paginationHTML += `<${params.bulletElement} ${swiper.isElement ? 'part="bullet"' : ""} class="${params.bulletClass}"></${params.bulletElement}>`;
        }
        if (params.type === "fraction") {
            if (params.renderFraction) paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
            else paginationHTML = `<span class="${params.currentClass}"></span>` + " / " + `<span class="${params.totalClass}"></span>`;
        }
        if (params.type === "progressbar") {
            if (params.renderProgressbar) paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
            else paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
        }
        swiper.pagination.bullets = [];
        el.forEach((subEl)=>{
            if (params.type !== "custom") subEl.innerHTML = paginationHTML || "";
            if (params.type === "bullets") swiper.pagination.bullets.push(...subEl.querySelectorAll((0, _classesToSelectorMjs.c)(params.bulletClass)));
        });
        if (params.type !== "custom") emit("paginationRender", el[0]);
    }
    function init() {
        swiper.params.pagination = (0, _createElementIfNotDefinedMjs.c)(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
            el: "swiper-pagination"
        });
        const params = swiper.params.pagination;
        if (!params.el) return;
        let el;
        if (typeof params.el === "string" && swiper.isElement) el = swiper.el.querySelector(params.el);
        if (!el && typeof params.el === "string") el = [
            ...document.querySelectorAll(params.el)
        ];
        if (!el) el = params.el;
        if (!el || el.length === 0) return;
        if (swiper.params.uniqueNavElements && typeof params.el === "string" && Array.isArray(el) && el.length > 1) {
            el = [
                ...swiper.el.querySelectorAll(params.el)
            ];
            // check if it belongs to another nested Swiper
            if (el.length > 1) el = el.filter((subEl)=>{
                if ((0, _utilsMjs.a)(subEl, ".swiper")[0] !== swiper.el) return false;
                return true;
            })[0];
        }
        if (Array.isArray(el) && el.length === 1) el = el[0];
        Object.assign(swiper.pagination, {
            el
        });
        el = makeElementsArray(el);
        el.forEach((subEl)=>{
            if (params.type === "bullets" && params.clickable) subEl.classList.add(...(params.clickableClass || "").split(" "));
            subEl.classList.add(params.modifierClass + params.type);
            subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
            if (params.type === "bullets" && params.dynamicBullets) {
                subEl.classList.add(`${params.modifierClass}${params.type}-dynamic`);
                dynamicBulletIndex = 0;
                if (params.dynamicMainBullets < 1) params.dynamicMainBullets = 1;
            }
            if (params.type === "progressbar" && params.progressbarOpposite) subEl.classList.add(params.progressbarOppositeClass);
            if (params.clickable) subEl.addEventListener("click", onBulletClick);
            if (!swiper.enabled) subEl.classList.add(params.lockClass);
        });
    }
    function destroy() {
        const params = swiper.params.pagination;
        if (isPaginationDisabled()) return;
        let el = swiper.pagination.el;
        if (el) {
            el = makeElementsArray(el);
            el.forEach((subEl)=>{
                subEl.classList.remove(params.hiddenClass);
                subEl.classList.remove(params.modifierClass + params.type);
                subEl.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                if (params.clickable) {
                    subEl.classList.remove(...(params.clickableClass || "").split(" "));
                    subEl.removeEventListener("click", onBulletClick);
                }
            });
        }
        if (swiper.pagination.bullets) swiper.pagination.bullets.forEach((subEl)=>subEl.classList.remove(...params.bulletActiveClass.split(" ")));
    }
    on("changeDirection", ()=>{
        if (!swiper.pagination || !swiper.pagination.el) return;
        const params = swiper.params.pagination;
        let { el } = swiper.pagination;
        el = makeElementsArray(el);
        el.forEach((subEl)=>{
            subEl.classList.remove(params.horizontalClass, params.verticalClass);
            subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
        });
    });
    on("init", ()=>{
        if (swiper.params.pagination.enabled === false) // eslint-disable-next-line
        disable();
        else {
            init();
            render();
            update();
        }
    });
    on("activeIndexChange", ()=>{
        if (typeof swiper.snapIndex === "undefined") update();
    });
    on("snapIndexChange", ()=>{
        update();
    });
    on("snapGridLengthChange", ()=>{
        render();
        update();
    });
    on("destroy", ()=>{
        destroy();
    });
    on("enable disable", ()=>{
        let { el } = swiper.pagination;
        if (el) {
            el = makeElementsArray(el);
            el.forEach((subEl)=>subEl.classList[swiper.enabled ? "remove" : "add"](swiper.params.pagination.lockClass));
        }
    });
    on("lock unlock", ()=>{
        update();
    });
    on("click", (_s, e)=>{
        const targetEl = e.target;
        const el = makeElementsArray(swiper.pagination.el);
        if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && el && el.length > 0 && !targetEl.classList.contains(swiper.params.pagination.bulletClass)) {
            if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
            const isHidden = el[0].classList.contains(swiper.params.pagination.hiddenClass);
            if (isHidden === true) emit("paginationShow");
            else emit("paginationHide");
            el.forEach((subEl)=>subEl.classList.toggle(swiper.params.pagination.hiddenClass));
        }
    });
    const enable = ()=>{
        swiper.el.classList.remove(swiper.params.pagination.paginationDisabledClass);
        let { el } = swiper.pagination;
        if (el) {
            el = makeElementsArray(el);
            el.forEach((subEl)=>subEl.classList.remove(swiper.params.pagination.paginationDisabledClass));
        }
        init();
        render();
        update();
    };
    const disable = ()=>{
        swiper.el.classList.add(swiper.params.pagination.paginationDisabledClass);
        let { el } = swiper.pagination;
        if (el) {
            el = makeElementsArray(el);
            el.forEach((subEl)=>subEl.classList.add(swiper.params.pagination.paginationDisabledClass));
        }
        destroy();
    };
    Object.assign(swiper.pagination, {
        enable,
        disable,
        render,
        update,
        init,
        destroy
    });
}

},{"../shared/classes-to-selector.mjs":"3VvOj","../shared/create-element-if-not-defined.mjs":"bfXnP","../shared/utils.mjs":"jk3lb","@parcel/transformer-js/src/esmodule-helpers.js":"iy9MI"}],"3VvOj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "c", ()=>classesToSelector);
function classesToSelector(classes) {
    if (classes === void 0) classes = "";
    return `.${classes.trim().replace(/([\.:!+\/])/g, "\\$1") // eslint-disable-line
    .replace(/ /g, ".")}`;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iy9MI"}],"l6Rg0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Scrollbar);
var _ssrWindowEsmMjs = require("../shared/ssr-window.esm.mjs");
var _utilsMjs = require("../shared/utils.mjs");
var _createElementIfNotDefinedMjs = require("../shared/create-element-if-not-defined.mjs");
function Scrollbar(_ref) {
    let { swiper, extendParams, on, emit } = _ref;
    const document = (0, _ssrWindowEsmMjs.g)();
    let isTouched = false;
    let timeout = null;
    let dragTimeout = null;
    let dragStartPos;
    let dragSize;
    let trackSize;
    let divider;
    extendParams({
        scrollbar: {
            el: null,
            dragSize: "auto",
            hide: false,
            draggable: false,
            snapOnRelease: true,
            lockClass: "swiper-scrollbar-lock",
            dragClass: "swiper-scrollbar-drag",
            scrollbarDisabledClass: "swiper-scrollbar-disabled",
            horizontalClass: `swiper-scrollbar-horizontal`,
            verticalClass: `swiper-scrollbar-vertical`
        }
    });
    swiper.scrollbar = {
        el: null,
        dragEl: null
    };
    function setTranslate() {
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        const { scrollbar, rtlTranslate: rtl } = swiper;
        const { dragEl, el } = scrollbar;
        const params = swiper.params.scrollbar;
        const progress = swiper.params.loop ? swiper.progressLoop : swiper.progress;
        let newSize = dragSize;
        let newPos = (trackSize - dragSize) * progress;
        if (rtl) {
            newPos = -newPos;
            if (newPos > 0) {
                newSize = dragSize - newPos;
                newPos = 0;
            } else if (-newPos + dragSize > trackSize) newSize = trackSize + newPos;
        } else if (newPos < 0) {
            newSize = dragSize + newPos;
            newPos = 0;
        } else if (newPos + dragSize > trackSize) newSize = trackSize - newPos;
        if (swiper.isHorizontal()) {
            dragEl.style.transform = `translate3d(${newPos}px, 0, 0)`;
            dragEl.style.width = `${newSize}px`;
        } else {
            dragEl.style.transform = `translate3d(0px, ${newPos}px, 0)`;
            dragEl.style.height = `${newSize}px`;
        }
        if (params.hide) {
            clearTimeout(timeout);
            el.style.opacity = 1;
            timeout = setTimeout(()=>{
                el.style.opacity = 0;
                el.style.transitionDuration = "400ms";
            }, 1000);
        }
    }
    function setTransition(duration) {
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        swiper.scrollbar.dragEl.style.transitionDuration = `${duration}ms`;
    }
    function updateSize() {
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        const { scrollbar } = swiper;
        const { dragEl, el } = scrollbar;
        dragEl.style.width = "";
        dragEl.style.height = "";
        trackSize = swiper.isHorizontal() ? el.offsetWidth : el.offsetHeight;
        divider = swiper.size / (swiper.virtualSize + swiper.params.slidesOffsetBefore - (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0));
        if (swiper.params.scrollbar.dragSize === "auto") dragSize = trackSize * divider;
        else dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
        if (swiper.isHorizontal()) dragEl.style.width = `${dragSize}px`;
        else dragEl.style.height = `${dragSize}px`;
        if (divider >= 1) el.style.display = "none";
        else el.style.display = "";
        if (swiper.params.scrollbar.hide) el.style.opacity = 0;
        if (swiper.params.watchOverflow && swiper.enabled) scrollbar.el.classList[swiper.isLocked ? "add" : "remove"](swiper.params.scrollbar.lockClass);
    }
    function getPointerPosition(e) {
        return swiper.isHorizontal() ? e.clientX : e.clientY;
    }
    function setDragPosition(e) {
        const { scrollbar, rtlTranslate: rtl } = swiper;
        const { el } = scrollbar;
        let positionRatio;
        positionRatio = (getPointerPosition(e) - (0, _utilsMjs.b)(el)[swiper.isHorizontal() ? "left" : "top"] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
        positionRatio = Math.max(Math.min(positionRatio, 1), 0);
        if (rtl) positionRatio = 1 - positionRatio;
        const position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
        swiper.updateProgress(position);
        swiper.setTranslate(position);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
    }
    function onDragStart(e) {
        const params = swiper.params.scrollbar;
        const { scrollbar, wrapperEl } = swiper;
        const { el, dragEl } = scrollbar;
        isTouched = true;
        dragStartPos = e.target === dragEl ? getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? "left" : "top"] : null;
        e.preventDefault();
        e.stopPropagation();
        wrapperEl.style.transitionDuration = "100ms";
        dragEl.style.transitionDuration = "100ms";
        setDragPosition(e);
        clearTimeout(dragTimeout);
        el.style.transitionDuration = "0ms";
        if (params.hide) el.style.opacity = 1;
        if (swiper.params.cssMode) swiper.wrapperEl.style["scroll-snap-type"] = "none";
        emit("scrollbarDragStart", e);
    }
    function onDragMove(e) {
        const { scrollbar, wrapperEl } = swiper;
        const { el, dragEl } = scrollbar;
        if (!isTouched) return;
        if (e.preventDefault) e.preventDefault();
        else e.returnValue = false;
        setDragPosition(e);
        wrapperEl.style.transitionDuration = "0ms";
        el.style.transitionDuration = "0ms";
        dragEl.style.transitionDuration = "0ms";
        emit("scrollbarDragMove", e);
    }
    function onDragEnd(e) {
        const params = swiper.params.scrollbar;
        const { scrollbar, wrapperEl } = swiper;
        const { el } = scrollbar;
        if (!isTouched) return;
        isTouched = false;
        if (swiper.params.cssMode) {
            swiper.wrapperEl.style["scroll-snap-type"] = "";
            wrapperEl.style.transitionDuration = "";
        }
        if (params.hide) {
            clearTimeout(dragTimeout);
            dragTimeout = (0, _utilsMjs.n)(()=>{
                el.style.opacity = 0;
                el.style.transitionDuration = "400ms";
            }, 1000);
        }
        emit("scrollbarDragEnd", e);
        if (params.snapOnRelease) swiper.slideToClosest();
    }
    function events(method) {
        const { scrollbar, params } = swiper;
        const el = scrollbar.el;
        if (!el) return;
        const target = el;
        const activeListener = params.passiveListeners ? {
            passive: false,
            capture: false
        } : false;
        const passiveListener = params.passiveListeners ? {
            passive: true,
            capture: false
        } : false;
        if (!target) return;
        const eventMethod = method === "on" ? "addEventListener" : "removeEventListener";
        target[eventMethod]("pointerdown", onDragStart, activeListener);
        document[eventMethod]("pointermove", onDragMove, activeListener);
        document[eventMethod]("pointerup", onDragEnd, passiveListener);
    }
    function enableDraggable() {
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        events("on");
    }
    function disableDraggable() {
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        events("off");
    }
    function init() {
        const { scrollbar, el: swiperEl } = swiper;
        swiper.params.scrollbar = (0, _createElementIfNotDefinedMjs.c)(swiper, swiper.originalParams.scrollbar, swiper.params.scrollbar, {
            el: "swiper-scrollbar"
        });
        const params = swiper.params.scrollbar;
        if (!params.el) return;
        let el;
        if (typeof params.el === "string" && swiper.isElement) el = swiper.el.querySelector(params.el);
        if (!el && typeof params.el === "string") el = document.querySelectorAll(params.el);
        else if (!el) el = params.el;
        if (swiper.params.uniqueNavElements && typeof params.el === "string" && el.length > 1 && swiperEl.querySelectorAll(params.el).length === 1) el = swiperEl.querySelector(params.el);
        if (el.length > 0) el = el[0];
        el.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
        let dragEl;
        if (el) {
            dragEl = el.querySelector(`.${swiper.params.scrollbar.dragClass}`);
            if (!dragEl) {
                dragEl = (0, _utilsMjs.c)("div", swiper.params.scrollbar.dragClass);
                el.append(dragEl);
            }
        }
        Object.assign(scrollbar, {
            el,
            dragEl
        });
        if (params.draggable) enableDraggable();
        if (el) el.classList[swiper.enabled ? "remove" : "add"](swiper.params.scrollbar.lockClass);
    }
    function destroy() {
        const params = swiper.params.scrollbar;
        const el = swiper.scrollbar.el;
        if (el) el.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
        disableDraggable();
    }
    on("init", ()=>{
        if (swiper.params.scrollbar.enabled === false) // eslint-disable-next-line
        disable();
        else {
            init();
            updateSize();
            setTranslate();
        }
    });
    on("update resize observerUpdate lock unlock", ()=>{
        updateSize();
    });
    on("setTranslate", ()=>{
        setTranslate();
    });
    on("setTransition", (_s, duration)=>{
        setTransition(duration);
    });
    on("enable disable", ()=>{
        const { el } = swiper.scrollbar;
        if (el) el.classList[swiper.enabled ? "remove" : "add"](swiper.params.scrollbar.lockClass);
    });
    on("destroy", ()=>{
        destroy();
    });
    const enable = ()=>{
        swiper.el.classList.remove(swiper.params.scrollbar.scrollbarDisabledClass);
        if (swiper.scrollbar.el) swiper.scrollbar.el.classList.remove(swiper.params.scrollbar.scrollbarDisabledClass);
        init();
        updateSize();
        setTranslate();
    };
    const disable = ()=>{
        swiper.el.classList.add(swiper.params.scrollbar.scrollbarDisabledClass);
        if (swiper.scrollbar.el) swiper.scrollbar.el.classList.add(swiper.params.scrollbar.scrollbarDisabledClass);
        destroy();
    };
    Object.assign(swiper.scrollbar, {
        enable,
        disable,
        updateSize,
        setTranslate,
        init,
        destroy
    });
}

},{"../shared/ssr-window.esm.mjs":"7eDmS","../shared/utils.mjs":"jk3lb","../shared/create-element-if-not-defined.mjs":"bfXnP","@parcel/transformer-js/src/esmodule-helpers.js":"iy9MI"}],"4bHB9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Parallax);
var _utilsMjs = require("../shared/utils.mjs");
function Parallax(_ref) {
    let { swiper, extendParams, on } = _ref;
    extendParams({
        parallax: {
            enabled: false
        }
    });
    const elementsSelector = "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]";
    const setTransform = (el, progress)=>{
        const { rtl } = swiper;
        const rtlFactor = rtl ? -1 : 1;
        const p = el.getAttribute("data-swiper-parallax") || "0";
        let x = el.getAttribute("data-swiper-parallax-x");
        let y = el.getAttribute("data-swiper-parallax-y");
        const scale = el.getAttribute("data-swiper-parallax-scale");
        const opacity = el.getAttribute("data-swiper-parallax-opacity");
        const rotate = el.getAttribute("data-swiper-parallax-rotate");
        if (x || y) {
            x = x || "0";
            y = y || "0";
        } else if (swiper.isHorizontal()) {
            x = p;
            y = "0";
        } else {
            y = p;
            x = "0";
        }
        if (x.indexOf("%") >= 0) x = `${parseInt(x, 10) * progress * rtlFactor}%`;
        else x = `${x * progress * rtlFactor}px`;
        if (y.indexOf("%") >= 0) y = `${parseInt(y, 10) * progress}%`;
        else y = `${y * progress}px`;
        if (typeof opacity !== "undefined" && opacity !== null) {
            const currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
            el.style.opacity = currentOpacity;
        }
        let transform = `translate3d(${x}, ${y}, 0px)`;
        if (typeof scale !== "undefined" && scale !== null) {
            const currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
            transform += ` scale(${currentScale})`;
        }
        if (rotate && typeof rotate !== "undefined" && rotate !== null) {
            const currentRotate = rotate * progress * -1;
            transform += ` rotate(${currentRotate}deg)`;
        }
        el.style.transform = transform;
    };
    const setTranslate = ()=>{
        const { el, slides, progress, snapGrid, isElement } = swiper;
        const elements = (0, _utilsMjs.e)(el, elementsSelector);
        if (swiper.isElement) elements.push(...(0, _utilsMjs.e)(swiper.hostEl, elementsSelector));
        elements.forEach((subEl)=>{
            setTransform(subEl, progress);
        });
        slides.forEach((slideEl, slideIndex)=>{
            let slideProgress = slideEl.progress;
            if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== "auto") slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
            slideProgress = Math.min(Math.max(slideProgress, -1), 1);
            slideEl.querySelectorAll(`${elementsSelector}, [data-swiper-parallax-rotate]`).forEach((subEl)=>{
                setTransform(subEl, slideProgress);
            });
        });
    };
    const setTransition = function(duration) {
        if (duration === void 0) duration = swiper.params.speed;
        const { el, hostEl } = swiper;
        const elements = [
            ...el.querySelectorAll(elementsSelector)
        ];
        if (swiper.isElement) elements.push(...hostEl.querySelectorAll(elementsSelector));
        elements.forEach((parallaxEl)=>{
            let parallaxDuration = parseInt(parallaxEl.getAttribute("data-swiper-parallax-duration"), 10) || duration;
            if (duration === 0) parallaxDuration = 0;
            parallaxEl.style.transitionDuration = `${parallaxDuration}ms`;
        });
    };
    on("beforeInit", ()=>{
        if (!swiper.params.parallax.enabled) return;
        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
    });
    on("init", ()=>{
        if (!swiper.params.parallax.enabled) return;
        setTranslate();
    });
    on("setTranslate", ()=>{
        if (!swiper.params.parallax.enabled) return;
        setTranslate();
    });
    on("setTransition", (_swiper, duration)=>{
        if (!swiper.params.parallax.enabled) return;
        setTransition(duration);
    });
}

},{"../shared/utils.mjs":"jk3lb","@parcel/transformer-js/src/esmodule-helpers.js":"iy9MI"}],"7To7b":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Zoom);
var _ssrWindowEsmMjs = require("../shared/ssr-window.esm.mjs");
var _utilsMjs = require("../shared/utils.mjs");
function Zoom(_ref) {
    let { swiper, extendParams, on, emit } = _ref;
    const window = (0, _ssrWindowEsmMjs.a)();
    extendParams({
        zoom: {
            enabled: false,
            maxRatio: 3,
            minRatio: 1,
            toggle: true,
            containerClass: "swiper-zoom-container",
            zoomedSlideClass: "swiper-slide-zoomed"
        }
    });
    swiper.zoom = {
        enabled: false
    };
    let currentScale = 1;
    let isScaling = false;
    let fakeGestureTouched;
    let fakeGestureMoved;
    const evCache = [];
    const gesture = {
        originX: 0,
        originY: 0,
        slideEl: undefined,
        slideWidth: undefined,
        slideHeight: undefined,
        imageEl: undefined,
        imageWrapEl: undefined,
        maxRatio: 3
    };
    const image = {
        isTouched: undefined,
        isMoved: undefined,
        currentX: undefined,
        currentY: undefined,
        minX: undefined,
        minY: undefined,
        maxX: undefined,
        maxY: undefined,
        width: undefined,
        height: undefined,
        startX: undefined,
        startY: undefined,
        touchesStart: {},
        touchesCurrent: {}
    };
    const velocity = {
        x: undefined,
        y: undefined,
        prevPositionX: undefined,
        prevPositionY: undefined,
        prevTime: undefined
    };
    let scale = 1;
    Object.defineProperty(swiper.zoom, "scale", {
        get () {
            return scale;
        },
        set (value) {
            if (scale !== value) {
                const imageEl = gesture.imageEl;
                const slideEl = gesture.slideEl;
                emit("zoomChange", value, imageEl, slideEl);
            }
            scale = value;
        }
    });
    function getDistanceBetweenTouches() {
        if (evCache.length < 2) return 1;
        const x1 = evCache[0].pageX;
        const y1 = evCache[0].pageY;
        const x2 = evCache[1].pageX;
        const y2 = evCache[1].pageY;
        const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        return distance;
    }
    function getScaleOrigin() {
        if (evCache.length < 2) return {
            x: null,
            y: null
        };
        const box = gesture.imageEl.getBoundingClientRect();
        return [
            (evCache[0].pageX + (evCache[1].pageX - evCache[0].pageX) / 2 - box.x) / currentScale,
            (evCache[0].pageY + (evCache[1].pageY - evCache[0].pageY) / 2 - box.y) / currentScale
        ];
    }
    function getSlideSelector() {
        return swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
    }
    function eventWithinSlide(e) {
        const slideSelector = getSlideSelector();
        if (e.target.matches(slideSelector)) return true;
        if (swiper.slides.filter((slideEl)=>slideEl.contains(e.target)).length > 0) return true;
        return false;
    }
    function eventWithinZoomContainer(e) {
        const selector = `.${swiper.params.zoom.containerClass}`;
        if (e.target.matches(selector)) return true;
        if ([
            ...swiper.hostEl.querySelectorAll(selector)
        ].filter((containerEl)=>containerEl.contains(e.target)).length > 0) return true;
        return false;
    }
    // Events
    function onGestureStart(e) {
        if (e.pointerType === "mouse") evCache.splice(0, evCache.length);
        if (!eventWithinSlide(e)) return;
        const params = swiper.params.zoom;
        fakeGestureTouched = false;
        fakeGestureMoved = false;
        evCache.push(e);
        if (evCache.length < 2) return;
        fakeGestureTouched = true;
        gesture.scaleStart = getDistanceBetweenTouches();
        if (!gesture.slideEl) {
            gesture.slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
            if (!gesture.slideEl) gesture.slideEl = swiper.slides[swiper.activeIndex];
            let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
            if (imageEl) imageEl = imageEl.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0];
            gesture.imageEl = imageEl;
            if (imageEl) gesture.imageWrapEl = (0, _utilsMjs.a)(gesture.imageEl, `.${params.containerClass}`)[0];
            else gesture.imageWrapEl = undefined;
            if (!gesture.imageWrapEl) {
                gesture.imageEl = undefined;
                return;
            }
            gesture.maxRatio = gesture.imageWrapEl.getAttribute("data-swiper-zoom") || params.maxRatio;
        }
        if (gesture.imageEl) {
            const [originX, originY] = getScaleOrigin();
            gesture.originX = originX;
            gesture.originY = originY;
            gesture.imageEl.style.transitionDuration = "0ms";
        }
        isScaling = true;
    }
    function onGestureChange(e) {
        if (!eventWithinSlide(e)) return;
        const params = swiper.params.zoom;
        const zoom = swiper.zoom;
        const pointerIndex = evCache.findIndex((cachedEv)=>cachedEv.pointerId === e.pointerId);
        if (pointerIndex >= 0) evCache[pointerIndex] = e;
        if (evCache.length < 2) return;
        fakeGestureMoved = true;
        gesture.scaleMove = getDistanceBetweenTouches();
        if (!gesture.imageEl) return;
        zoom.scale = gesture.scaleMove / gesture.scaleStart * currentScale;
        if (zoom.scale > gesture.maxRatio) zoom.scale = gesture.maxRatio - 1 + (zoom.scale - gesture.maxRatio + 1) ** 0.5;
        if (zoom.scale < params.minRatio) zoom.scale = params.minRatio + 1 - (params.minRatio - zoom.scale + 1) ** 0.5;
        gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
    }
    function onGestureEnd(e) {
        if (!eventWithinSlide(e)) return;
        if (e.pointerType === "mouse" && e.type === "pointerout") return;
        const params = swiper.params.zoom;
        const zoom = swiper.zoom;
        const pointerIndex = evCache.findIndex((cachedEv)=>cachedEv.pointerId === e.pointerId);
        if (pointerIndex >= 0) evCache.splice(pointerIndex, 1);
        if (!fakeGestureTouched || !fakeGestureMoved) return;
        fakeGestureTouched = false;
        fakeGestureMoved = false;
        if (!gesture.imageEl) return;
        zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
        gesture.imageEl.style.transitionDuration = `${swiper.params.speed}ms`;
        gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
        currentScale = zoom.scale;
        isScaling = false;
        if (zoom.scale > 1 && gesture.slideEl) gesture.slideEl.classList.add(`${params.zoomedSlideClass}`);
        else if (zoom.scale <= 1 && gesture.slideEl) gesture.slideEl.classList.remove(`${params.zoomedSlideClass}`);
        if (zoom.scale === 1) {
            gesture.originX = 0;
            gesture.originY = 0;
            gesture.slideEl = undefined;
        }
    }
    function onTouchStart(e) {
        const device = swiper.device;
        if (!gesture.imageEl) return;
        if (image.isTouched) return;
        if (device.android && e.cancelable) e.preventDefault();
        image.isTouched = true;
        const event = evCache.length > 0 ? evCache[0] : e;
        image.touchesStart.x = event.pageX;
        image.touchesStart.y = event.pageY;
    }
    function onTouchMove(e) {
        if (!eventWithinSlide(e) || !eventWithinZoomContainer(e)) return;
        const zoom = swiper.zoom;
        if (!gesture.imageEl) return;
        if (!image.isTouched || !gesture.slideEl) return;
        if (!image.isMoved) {
            image.width = gesture.imageEl.offsetWidth;
            image.height = gesture.imageEl.offsetHeight;
            image.startX = (0, _utilsMjs.h)(gesture.imageWrapEl, "x") || 0;
            image.startY = (0, _utilsMjs.h)(gesture.imageWrapEl, "y") || 0;
            gesture.slideWidth = gesture.slideEl.offsetWidth;
            gesture.slideHeight = gesture.slideEl.offsetHeight;
            gesture.imageWrapEl.style.transitionDuration = "0ms";
        }
        // Define if we need image drag
        const scaledWidth = image.width * zoom.scale;
        const scaledHeight = image.height * zoom.scale;
        if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return;
        image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
        image.maxX = -image.minX;
        image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
        image.maxY = -image.minY;
        image.touchesCurrent.x = evCache.length > 0 ? evCache[0].pageX : e.pageX;
        image.touchesCurrent.y = evCache.length > 0 ? evCache[0].pageY : e.pageY;
        const touchesDiff = Math.max(Math.abs(image.touchesCurrent.x - image.touchesStart.x), Math.abs(image.touchesCurrent.y - image.touchesStart.y));
        if (touchesDiff > 5) swiper.allowClick = false;
        if (!image.isMoved && !isScaling) {
            if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
                image.isTouched = false;
                return;
            }
            if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
                image.isTouched = false;
                return;
            }
        }
        if (e.cancelable) e.preventDefault();
        e.stopPropagation();
        image.isMoved = true;
        const scaleRatio = (zoom.scale - currentScale) / (gesture.maxRatio - swiper.params.zoom.minRatio);
        const { originX, originY } = gesture;
        image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX + scaleRatio * (image.width - originX * 2);
        image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY + scaleRatio * (image.height - originY * 2);
        if (image.currentX < image.minX) image.currentX = image.minX + 1 - (image.minX - image.currentX + 1) ** 0.8;
        if (image.currentX > image.maxX) image.currentX = image.maxX - 1 + (image.currentX - image.maxX + 1) ** 0.8;
        if (image.currentY < image.minY) image.currentY = image.minY + 1 - (image.minY - image.currentY + 1) ** 0.8;
        if (image.currentY > image.maxY) image.currentY = image.maxY - 1 + (image.currentY - image.maxY + 1) ** 0.8;
        // Velocity
        if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
        if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
        if (!velocity.prevTime) velocity.prevTime = Date.now();
        velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
        velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
        if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
        if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
        velocity.prevPositionX = image.touchesCurrent.x;
        velocity.prevPositionY = image.touchesCurrent.y;
        velocity.prevTime = Date.now();
        gesture.imageWrapEl.style.transform = `translate3d(${image.currentX}px, ${image.currentY}px,0)`;
    }
    function onTouchEnd() {
        const zoom = swiper.zoom;
        if (!gesture.imageEl) return;
        if (!image.isTouched || !image.isMoved) {
            image.isTouched = false;
            image.isMoved = false;
            return;
        }
        image.isTouched = false;
        image.isMoved = false;
        let momentumDurationX = 300;
        let momentumDurationY = 300;
        const momentumDistanceX = velocity.x * momentumDurationX;
        const newPositionX = image.currentX + momentumDistanceX;
        const momentumDistanceY = velocity.y * momentumDurationY;
        const newPositionY = image.currentY + momentumDistanceY;
        // Fix duration
        if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
        if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
        const momentumDuration = Math.max(momentumDurationX, momentumDurationY);
        image.currentX = newPositionX;
        image.currentY = newPositionY;
        // Define if we need image drag
        const scaledWidth = image.width * zoom.scale;
        const scaledHeight = image.height * zoom.scale;
        image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
        image.maxX = -image.minX;
        image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
        image.maxY = -image.minY;
        image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
        image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
        gesture.imageWrapEl.style.transitionDuration = `${momentumDuration}ms`;
        gesture.imageWrapEl.style.transform = `translate3d(${image.currentX}px, ${image.currentY}px,0)`;
    }
    function onTransitionEnd() {
        const zoom = swiper.zoom;
        if (gesture.slideEl && swiper.activeIndex !== swiper.slides.indexOf(gesture.slideEl)) {
            if (gesture.imageEl) gesture.imageEl.style.transform = "translate3d(0,0,0) scale(1)";
            if (gesture.imageWrapEl) gesture.imageWrapEl.style.transform = "translate3d(0,0,0)";
            gesture.slideEl.classList.remove(`${swiper.params.zoom.zoomedSlideClass}`);
            zoom.scale = 1;
            currentScale = 1;
            gesture.slideEl = undefined;
            gesture.imageEl = undefined;
            gesture.imageWrapEl = undefined;
            gesture.originX = 0;
            gesture.originY = 0;
        }
    }
    function zoomIn(e) {
        const zoom = swiper.zoom;
        const params = swiper.params.zoom;
        if (!gesture.slideEl) {
            if (e && e.target) gesture.slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
            if (!gesture.slideEl) {
                if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) gesture.slideEl = (0, _utilsMjs.e)(swiper.slidesEl, `.${swiper.params.slideActiveClass}`)[0];
                else gesture.slideEl = swiper.slides[swiper.activeIndex];
            }
            let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
            if (imageEl) imageEl = imageEl.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0];
            gesture.imageEl = imageEl;
            if (imageEl) gesture.imageWrapEl = (0, _utilsMjs.a)(gesture.imageEl, `.${params.containerClass}`)[0];
            else gesture.imageWrapEl = undefined;
        }
        if (!gesture.imageEl || !gesture.imageWrapEl) return;
        if (swiper.params.cssMode) {
            swiper.wrapperEl.style.overflow = "hidden";
            swiper.wrapperEl.style.touchAction = "none";
        }
        gesture.slideEl.classList.add(`${params.zoomedSlideClass}`);
        let touchX;
        let touchY;
        let offsetX;
        let offsetY;
        let diffX;
        let diffY;
        let translateX;
        let translateY;
        let imageWidth;
        let imageHeight;
        let scaledWidth;
        let scaledHeight;
        let translateMinX;
        let translateMinY;
        let translateMaxX;
        let translateMaxY;
        let slideWidth;
        let slideHeight;
        if (typeof image.touchesStart.x === "undefined" && e) {
            touchX = e.pageX;
            touchY = e.pageY;
        } else {
            touchX = image.touchesStart.x;
            touchY = image.touchesStart.y;
        }
        const forceZoomRatio = typeof e === "number" ? e : null;
        if (currentScale === 1 && forceZoomRatio) {
            touchX = undefined;
            touchY = undefined;
        }
        zoom.scale = forceZoomRatio || gesture.imageWrapEl.getAttribute("data-swiper-zoom") || params.maxRatio;
        currentScale = forceZoomRatio || gesture.imageWrapEl.getAttribute("data-swiper-zoom") || params.maxRatio;
        if (e && !(currentScale === 1 && forceZoomRatio)) {
            slideWidth = gesture.slideEl.offsetWidth;
            slideHeight = gesture.slideEl.offsetHeight;
            offsetX = (0, _utilsMjs.b)(gesture.slideEl).left + window.scrollX;
            offsetY = (0, _utilsMjs.b)(gesture.slideEl).top + window.scrollY;
            diffX = offsetX + slideWidth / 2 - touchX;
            diffY = offsetY + slideHeight / 2 - touchY;
            imageWidth = gesture.imageEl.offsetWidth;
            imageHeight = gesture.imageEl.offsetHeight;
            scaledWidth = imageWidth * zoom.scale;
            scaledHeight = imageHeight * zoom.scale;
            translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
            translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
            translateMaxX = -translateMinX;
            translateMaxY = -translateMinY;
            translateX = diffX * zoom.scale;
            translateY = diffY * zoom.scale;
            if (translateX < translateMinX) translateX = translateMinX;
            if (translateX > translateMaxX) translateX = translateMaxX;
            if (translateY < translateMinY) translateY = translateMinY;
            if (translateY > translateMaxY) translateY = translateMaxY;
        } else {
            translateX = 0;
            translateY = 0;
        }
        if (forceZoomRatio && zoom.scale === 1) {
            gesture.originX = 0;
            gesture.originY = 0;
        }
        gesture.imageWrapEl.style.transitionDuration = "300ms";
        gesture.imageWrapEl.style.transform = `translate3d(${translateX}px, ${translateY}px,0)`;
        gesture.imageEl.style.transitionDuration = "300ms";
        gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
    }
    function zoomOut() {
        const zoom = swiper.zoom;
        const params = swiper.params.zoom;
        if (!gesture.slideEl) {
            if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) gesture.slideEl = (0, _utilsMjs.e)(swiper.slidesEl, `.${swiper.params.slideActiveClass}`)[0];
            else gesture.slideEl = swiper.slides[swiper.activeIndex];
            let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
            if (imageEl) imageEl = imageEl.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0];
            gesture.imageEl = imageEl;
            if (imageEl) gesture.imageWrapEl = (0, _utilsMjs.a)(gesture.imageEl, `.${params.containerClass}`)[0];
            else gesture.imageWrapEl = undefined;
        }
        if (!gesture.imageEl || !gesture.imageWrapEl) return;
        if (swiper.params.cssMode) {
            swiper.wrapperEl.style.overflow = "";
            swiper.wrapperEl.style.touchAction = "";
        }
        zoom.scale = 1;
        currentScale = 1;
        gesture.imageWrapEl.style.transitionDuration = "300ms";
        gesture.imageWrapEl.style.transform = "translate3d(0,0,0)";
        gesture.imageEl.style.transitionDuration = "300ms";
        gesture.imageEl.style.transform = "translate3d(0,0,0) scale(1)";
        gesture.slideEl.classList.remove(`${params.zoomedSlideClass}`);
        gesture.slideEl = undefined;
        gesture.originX = 0;
        gesture.originY = 0;
    }
    // Toggle Zoom
    function zoomToggle(e) {
        const zoom = swiper.zoom;
        if (zoom.scale && zoom.scale !== 1) // Zoom Out
        zoomOut();
        else // Zoom In
        zoomIn(e);
    }
    function getListeners() {
        const passiveListener = swiper.params.passiveListeners ? {
            passive: true,
            capture: false
        } : false;
        const activeListenerWithCapture = swiper.params.passiveListeners ? {
            passive: false,
            capture: true
        } : true;
        return {
            passiveListener,
            activeListenerWithCapture
        };
    }
    // Attach/Detach Events
    function enable() {
        const zoom = swiper.zoom;
        if (zoom.enabled) return;
        zoom.enabled = true;
        const { passiveListener, activeListenerWithCapture } = getListeners();
        // Scale image
        swiper.wrapperEl.addEventListener("pointerdown", onGestureStart, passiveListener);
        swiper.wrapperEl.addEventListener("pointermove", onGestureChange, activeListenerWithCapture);
        [
            "pointerup",
            "pointercancel",
            "pointerout"
        ].forEach((eventName)=>{
            swiper.wrapperEl.addEventListener(eventName, onGestureEnd, passiveListener);
        });
        // Move image
        swiper.wrapperEl.addEventListener("pointermove", onTouchMove, activeListenerWithCapture);
    }
    function disable() {
        const zoom = swiper.zoom;
        if (!zoom.enabled) return;
        zoom.enabled = false;
        const { passiveListener, activeListenerWithCapture } = getListeners();
        // Scale image
        swiper.wrapperEl.removeEventListener("pointerdown", onGestureStart, passiveListener);
        swiper.wrapperEl.removeEventListener("pointermove", onGestureChange, activeListenerWithCapture);
        [
            "pointerup",
            "pointercancel",
            "pointerout"
        ].forEach((eventName)=>{
            swiper.wrapperEl.removeEventListener(eventName, onGestureEnd, passiveListener);
        });
        // Move image
        swiper.wrapperEl.removeEventListener("pointermove", onTouchMove, activeListenerWithCapture);
    }
    on("init", ()=>{
        if (swiper.params.zoom.enabled) enable();
    });
    on("destroy", ()=>{
        disable();
    });
    on("touchStart", (_s, e)=>{
        if (!swiper.zoom.enabled) return;
        onTouchStart(e);
    });
    on("touchEnd", (_s, e)=>{
        if (!swiper.zoom.enabled) return;
        onTouchEnd();
    });
    on("doubleTap", (_s, e)=>{
        if (!swiper.animating && swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) zoomToggle(e);
    });
    on("transitionEnd", ()=>{
        if (swiper.zoom.enabled && swiper.params.zoom.enabled) onTransitionEnd();
    });
    on("slideChange", ()=>{
        if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) onTransitionEnd();
    });
    Object.assign(swiper.zoom, {
        enable,
        disable,
        in: zoomIn,
        out: zoomOut,
        toggle: zoomToggle
    });
}

},{"../shared/ssr-window.esm.mjs":"7eDmS","../shared/utils.mjs":"jk3lb","@parcel/transformer-js/src/esmodule-helpers.js":"iy9MI"}],"jnu9I":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Controller);
var _utilsMjs = require("../shared/utils.mjs");
/* eslint no-bitwise: ["error", { "allow": [">>"] }] */ function Controller(_ref) {
    let { swiper, extendParams, on } = _ref;
    extendParams({
        controller: {
            control: undefined,
            inverse: false,
            by: "slide" // or 'container'
        }
    });
    swiper.controller = {
        control: undefined
    };
    function LinearSpline(x, y) {
        const binarySearch = function search() {
            let maxIndex;
            let minIndex;
            let guess;
            return (array, val)=>{
                minIndex = -1;
                maxIndex = array.length;
                while(maxIndex - minIndex > 1){
                    guess = maxIndex + minIndex >> 1;
                    if (array[guess] <= val) minIndex = guess;
                    else maxIndex = guess;
                }
                return maxIndex;
            };
        }();
        this.x = x;
        this.y = y;
        this.lastIndex = x.length - 1;
        // Given an x value (x2), return the expected y2 value:
        // (x1,y1) is the known point before given value,
        // (x3,y3) is the known point after given value.
        let i1;
        let i3;
        this.interpolate = function interpolate(x2) {
            if (!x2) return 0;
            // Get the indexes of x1 and x3 (the array indexes before and after given x2):
            i3 = binarySearch(this.x, x2);
            i1 = i3 - 1;
            // We have our indexes i1 & i3, so we can calculate already:
            // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
            return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
        };
        return this;
    }
    function getInterpolateFunction(c) {
        swiper.controller.spline = swiper.params.loop ? new LinearSpline(swiper.slidesGrid, c.slidesGrid) : new LinearSpline(swiper.snapGrid, c.snapGrid);
    }
    function setTranslate(_t, byController) {
        const controlled = swiper.controller.control;
        let multiplier;
        let controlledTranslate;
        const Swiper = swiper.constructor;
        function setControlledTranslate(c) {
            if (c.destroyed) return;
            // this will create an Interpolate function based on the snapGrids
            // x is the Grid of the scrolled scroller and y will be the controlled scroller
            // it makes sense to create this only once and recall it for the interpolation
            // the function does a lot of value caching for performance
            const translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
            if (swiper.params.controller.by === "slide") {
                getInterpolateFunction(c);
                // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
                // but it did not work out
                controlledTranslate = -swiper.controller.spline.interpolate(-translate);
            }
            if (!controlledTranslate || swiper.params.controller.by === "container") {
                multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
                if (Number.isNaN(multiplier) || !Number.isFinite(multiplier)) multiplier = 1;
                controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
            }
            if (swiper.params.controller.inverse) controlledTranslate = c.maxTranslate() - controlledTranslate;
            c.updateProgress(controlledTranslate);
            c.setTranslate(controlledTranslate, swiper);
            c.updateActiveIndex();
            c.updateSlidesClasses();
        }
        if (Array.isArray(controlled)) {
            for(let i = 0; i < controlled.length; i += 1)if (controlled[i] !== byController && controlled[i] instanceof Swiper) setControlledTranslate(controlled[i]);
        } else if (controlled instanceof Swiper && byController !== controlled) setControlledTranslate(controlled);
    }
    function setTransition(duration, byController) {
        const Swiper = swiper.constructor;
        const controlled = swiper.controller.control;
        let i;
        function setControlledTransition(c) {
            if (c.destroyed) return;
            c.setTransition(duration, swiper);
            if (duration !== 0) {
                c.transitionStart();
                if (c.params.autoHeight) (0, _utilsMjs.n)(()=>{
                    c.updateAutoHeight();
                });
                (0, _utilsMjs.i)(c.wrapperEl, ()=>{
                    if (!controlled) return;
                    c.transitionEnd();
                });
            }
        }
        if (Array.isArray(controlled)) {
            for(i = 0; i < controlled.length; i += 1)if (controlled[i] !== byController && controlled[i] instanceof Swiper) setControlledTransition(controlled[i]);
        } else if (controlled instanceof Swiper && byController !== controlled) setControlledTransition(controlled);
    }
    function removeSpline() {
        if (!swiper.controller.control) return;
        if (swiper.controller.spline) {
            swiper.controller.spline = undefined;
            delete swiper.controller.spline;
        }
    }
    on("beforeInit", ()=>{
        if (typeof window !== "undefined" && // eslint-disable-line
        (typeof swiper.params.controller.control === "string" || swiper.params.controller.control instanceof HTMLElement)) {
            const controlElement = document.querySelector(swiper.params.controller.control);
            if (controlElement && controlElement.swiper) swiper.controller.control = controlElement.swiper;
            else if (controlElement) {
                const onControllerSwiper = (e)=>{
                    swiper.controller.control = e.detail[0];
                    swiper.update();
                    controlElement.removeEventListener("init", onControllerSwiper);
                };
                controlElement.addEventListener("init", onControllerSwiper);
            }
            return;
        }
        swiper.controller.control = swiper.params.controller.control;
    });
    on("update", ()=>{
        removeSpline();
    });
    on("resize", ()=>{
        removeSpline();
    });
    on("observerUpdate", ()=>{
        removeSpline();
    });
    on("setTranslate", (_s, translate, byController)=>{
        if (!swiper.controller.control || swiper.controller.control.destroyed) return;
        swiper.controller.setTranslate(translate, byController);
    });
    on("setTransition", (_s, duration, byController)=>{
        if (!swiper.controller.control || swiper.controller.control.destroyed) return;
        swiper.controller.setTransition(duration, byController);
    });
    Object.assign(swiper.controller, {
        setTranslate,
        setTransition
    });
}

},{"../shared/utils.mjs":"jk3lb","@parcel/transformer-js/src/esmodule-helpers.js":"iy9MI"}],"hHVOd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>A11y);
var _classesToSelectorMjs = require("../shared/classes-to-selector.mjs");
var _utilsMjs = require("../shared/utils.mjs");
function A11y(_ref) {
    let { swiper, extendParams, on } = _ref;
    extendParams({
        a11y: {
            enabled: true,
            notificationClass: "swiper-notification",
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}",
            slideLabelMessage: "{{index}} / {{slidesLength}}",
            containerMessage: null,
            containerRoleDescriptionMessage: null,
            itemRoleDescriptionMessage: null,
            slideRole: "group",
            id: null
        }
    });
    swiper.a11y = {
        clicked: false
    };
    let liveRegion = null;
    function notify(message) {
        const notification = liveRegion;
        if (notification.length === 0) return;
        notification.innerHTML = "";
        notification.innerHTML = message;
    }
    const makeElementsArray = (el)=>(Array.isArray(el) ? el : [
            el
        ]).filter((e)=>!!e);
    function getRandomNumber(size) {
        if (size === void 0) size = 16;
        const randomChar = ()=>Math.round(16 * Math.random()).toString(16);
        return "x".repeat(size).replace(/x/g, randomChar);
    }
    function makeElFocusable(el) {
        el = makeElementsArray(el);
        el.forEach((subEl)=>{
            subEl.setAttribute("tabIndex", "0");
        });
    }
    function makeElNotFocusable(el) {
        el = makeElementsArray(el);
        el.forEach((subEl)=>{
            subEl.setAttribute("tabIndex", "-1");
        });
    }
    function addElRole(el, role) {
        el = makeElementsArray(el);
        el.forEach((subEl)=>{
            subEl.setAttribute("role", role);
        });
    }
    function addElRoleDescription(el, description) {
        el = makeElementsArray(el);
        el.forEach((subEl)=>{
            subEl.setAttribute("aria-roledescription", description);
        });
    }
    function addElControls(el, controls) {
        el = makeElementsArray(el);
        el.forEach((subEl)=>{
            subEl.setAttribute("aria-controls", controls);
        });
    }
    function addElLabel(el, label) {
        el = makeElementsArray(el);
        el.forEach((subEl)=>{
            subEl.setAttribute("aria-label", label);
        });
    }
    function addElId(el, id) {
        el = makeElementsArray(el);
        el.forEach((subEl)=>{
            subEl.setAttribute("id", id);
        });
    }
    function addElLive(el, live) {
        el = makeElementsArray(el);
        el.forEach((subEl)=>{
            subEl.setAttribute("aria-live", live);
        });
    }
    function disableEl(el) {
        el = makeElementsArray(el);
        el.forEach((subEl)=>{
            subEl.setAttribute("aria-disabled", true);
        });
    }
    function enableEl(el) {
        el = makeElementsArray(el);
        el.forEach((subEl)=>{
            subEl.setAttribute("aria-disabled", false);
        });
    }
    function onEnterOrSpaceKey(e) {
        if (e.keyCode !== 13 && e.keyCode !== 32) return;
        const params = swiper.params.a11y;
        const targetEl = e.target;
        if (swiper.pagination && swiper.pagination.el && (targetEl === swiper.pagination.el || swiper.pagination.el.contains(e.target))) {
            if (!e.target.matches((0, _classesToSelectorMjs.c)(swiper.params.pagination.bulletClass))) return;
        }
        if (swiper.navigation && swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl) {
            if (!(swiper.isEnd && !swiper.params.loop)) swiper.slideNext();
            if (swiper.isEnd) notify(params.lastSlideMessage);
            else notify(params.nextSlideMessage);
        }
        if (swiper.navigation && swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl) {
            if (!(swiper.isBeginning && !swiper.params.loop)) swiper.slidePrev();
            if (swiper.isBeginning) notify(params.firstSlideMessage);
            else notify(params.prevSlideMessage);
        }
        if (swiper.pagination && targetEl.matches((0, _classesToSelectorMjs.c)(swiper.params.pagination.bulletClass))) targetEl.click();
    }
    function updateNavigation() {
        if (swiper.params.loop || swiper.params.rewind || !swiper.navigation) return;
        const { nextEl, prevEl } = swiper.navigation;
        if (prevEl) {
            if (swiper.isBeginning) {
                disableEl(prevEl);
                makeElNotFocusable(prevEl);
            } else {
                enableEl(prevEl);
                makeElFocusable(prevEl);
            }
        }
        if (nextEl) {
            if (swiper.isEnd) {
                disableEl(nextEl);
                makeElNotFocusable(nextEl);
            } else {
                enableEl(nextEl);
                makeElFocusable(nextEl);
            }
        }
    }
    function hasPagination() {
        return swiper.pagination && swiper.pagination.bullets && swiper.pagination.bullets.length;
    }
    function hasClickablePagination() {
        return hasPagination() && swiper.params.pagination.clickable;
    }
    function updatePagination() {
        const params = swiper.params.a11y;
        if (!hasPagination()) return;
        swiper.pagination.bullets.forEach((bulletEl)=>{
            if (swiper.params.pagination.clickable) {
                makeElFocusable(bulletEl);
                if (!swiper.params.pagination.renderBullet) {
                    addElRole(bulletEl, "button");
                    addElLabel(bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, (0, _utilsMjs.g)(bulletEl) + 1));
                }
            }
            if (bulletEl.matches((0, _classesToSelectorMjs.c)(swiper.params.pagination.bulletActiveClass))) bulletEl.setAttribute("aria-current", "true");
            else bulletEl.removeAttribute("aria-current");
        });
    }
    const initNavEl = (el, wrapperId, message)=>{
        makeElFocusable(el);
        if (el.tagName !== "BUTTON") {
            addElRole(el, "button");
            el.addEventListener("keydown", onEnterOrSpaceKey);
        }
        addElLabel(el, message);
        addElControls(el, wrapperId);
    };
    const handlePointerDown = ()=>{
        swiper.a11y.clicked = true;
    };
    const handlePointerUp = ()=>{
        requestAnimationFrame(()=>{
            requestAnimationFrame(()=>{
                if (!swiper.destroyed) swiper.a11y.clicked = false;
            });
        });
    };
    const handleFocus = (e)=>{
        if (swiper.a11y.clicked) return;
        const slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
        if (!slideEl || !swiper.slides.includes(slideEl)) return;
        const isActive = swiper.slides.indexOf(slideEl) === swiper.activeIndex;
        const isVisible = swiper.params.watchSlidesProgress && swiper.visibleSlides && swiper.visibleSlides.includes(slideEl);
        if (isActive || isVisible) return;
        if (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) return;
        if (swiper.isHorizontal()) swiper.el.scrollLeft = 0;
        else swiper.el.scrollTop = 0;
        swiper.slideTo(swiper.slides.indexOf(slideEl), 0);
    };
    const initSlides = ()=>{
        const params = swiper.params.a11y;
        if (params.itemRoleDescriptionMessage) addElRoleDescription(swiper.slides, params.itemRoleDescriptionMessage);
        if (params.slideRole) addElRole(swiper.slides, params.slideRole);
        const slidesLength = swiper.slides.length;
        if (params.slideLabelMessage) swiper.slides.forEach((slideEl, index)=>{
            const slideIndex = swiper.params.loop ? parseInt(slideEl.getAttribute("data-swiper-slide-index"), 10) : index;
            const ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength);
            addElLabel(slideEl, ariaLabelMessage);
        });
    };
    const init = ()=>{
        const params = swiper.params.a11y;
        swiper.el.append(liveRegion);
        // Container
        const containerEl = swiper.el;
        if (params.containerRoleDescriptionMessage) addElRoleDescription(containerEl, params.containerRoleDescriptionMessage);
        if (params.containerMessage) addElLabel(containerEl, params.containerMessage);
        // Wrapper
        const wrapperEl = swiper.wrapperEl;
        const wrapperId = params.id || wrapperEl.getAttribute("id") || `swiper-wrapper-${getRandomNumber(16)}`;
        const live = swiper.params.autoplay && swiper.params.autoplay.enabled ? "off" : "polite";
        addElId(wrapperEl, wrapperId);
        addElLive(wrapperEl, live);
        // Slide
        initSlides();
        // Navigation
        let { nextEl, prevEl } = swiper.navigation ? swiper.navigation : {};
        nextEl = makeElementsArray(nextEl);
        prevEl = makeElementsArray(prevEl);
        if (nextEl) nextEl.forEach((el)=>initNavEl(el, wrapperId, params.nextSlideMessage));
        if (prevEl) prevEl.forEach((el)=>initNavEl(el, wrapperId, params.prevSlideMessage));
        // Pagination
        if (hasClickablePagination()) {
            const paginationEl = Array.isArray(swiper.pagination.el) ? swiper.pagination.el : [
                swiper.pagination.el
            ];
            paginationEl.forEach((el)=>{
                el.addEventListener("keydown", onEnterOrSpaceKey);
            });
        }
        // Tab focus
        swiper.el.addEventListener("focus", handleFocus, true);
        swiper.el.addEventListener("pointerdown", handlePointerDown, true);
        swiper.el.addEventListener("pointerup", handlePointerUp, true);
    };
    function destroy() {
        if (liveRegion) liveRegion.remove();
        let { nextEl, prevEl } = swiper.navigation ? swiper.navigation : {};
        nextEl = makeElementsArray(nextEl);
        prevEl = makeElementsArray(prevEl);
        if (nextEl) nextEl.forEach((el)=>el.removeEventListener("keydown", onEnterOrSpaceKey));
        if (prevEl) prevEl.forEach((el)=>el.removeEventListener("keydown", onEnterOrSpaceKey));
        // Pagination
        if (hasClickablePagination()) {
            const paginationEl = Array.isArray(swiper.pagination.el) ? swiper.pagination.el : [
                swiper.pagination.el
            ];
            paginationEl.forEach((el)=>{
                el.removeEventListener("keydown", onEnterOrSpaceKey);
            });
        }
        // Tab focus
        swiper.el.removeEventListener("focus", handleFocus, true);
        swiper.el.removeEventListener("pointerdown", handlePointerDown, true);
        swiper.el.removeEventListener("pointerup", handlePointerUp, true);
    }
    on("beforeInit", ()=>{
        liveRegion = (0, _utilsMjs.c)("span", swiper.params.a11y.notificationClass);
        liveRegion.setAttribute("aria-live", "assertive");
        liveRegion.setAttribute("aria-atomic", "true");
    });
    on("afterInit", ()=>{
        if (!swiper.params.a11y.enabled) return;
        init();
    });
    on("slidesLengthChange snapGridLengthChange slidesGridLengthChange", ()=>{
        if (!swiper.params.a11y.enabled) return;
        initSlides();
    });
    on("fromEdge toEdge afterInit lock unlock", ()=>{
        if (!swiper.params.a11y.enabled) return;
        updateNavigation();
    });
    on("paginationUpdate", ()=>{
        if (!swiper.params.a11y.enabled) return;
        updatePagination();
    });
    on("destroy", ()=>{
        if (!swiper.params.a11y.enabled) return;
        destroy();
    });
}

},{"../shared/classes-to-selector.mjs":"3VvOj","../shared/utils.mjs":"jk3lb","@parcel/transformer-js/src/esmodule-helpers.js":"iy9MI"}],"5s2H0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>History);
var _ssrWindowEsmMjs = require("../shared/ssr-window.esm.mjs");
function History(_ref) {
    let { swiper, extendParams, on } = _ref;
    extendParams({
        history: {
            enabled: false,
            root: "",
            replaceState: false,
            key: "slides",
            keepQuery: false
        }
    });
    let initialized = false;
    let paths = {};
    const slugify = (text)=>{
        return text.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
    };
    const getPathValues = (urlOverride)=>{
        const window = (0, _ssrWindowEsmMjs.a)();
        let location;
        if (urlOverride) location = new URL(urlOverride);
        else location = window.location;
        const pathArray = location.pathname.slice(1).split("/").filter((part)=>part !== "");
        const total = pathArray.length;
        const key = pathArray[total - 2];
        const value = pathArray[total - 1];
        return {
            key,
            value
        };
    };
    const setHistory = (key, index)=>{
        const window = (0, _ssrWindowEsmMjs.a)();
        if (!initialized || !swiper.params.history.enabled) return;
        let location;
        if (swiper.params.url) location = new URL(swiper.params.url);
        else location = window.location;
        const slide = swiper.slides[index];
        let value = slugify(slide.getAttribute("data-history"));
        if (swiper.params.history.root.length > 0) {
            let root = swiper.params.history.root;
            if (root[root.length - 1] === "/") root = root.slice(0, root.length - 1);
            value = `${root}/${key ? `${key}/` : ""}${value}`;
        } else if (!location.pathname.includes(key)) value = `${key ? `${key}/` : ""}${value}`;
        if (swiper.params.history.keepQuery) value += location.search;
        const currentState = window.history.state;
        if (currentState && currentState.value === value) return;
        if (swiper.params.history.replaceState) window.history.replaceState({
            value
        }, null, value);
        else window.history.pushState({
            value
        }, null, value);
    };
    const scrollToSlide = (speed, value, runCallbacks)=>{
        if (value) for(let i = 0, length = swiper.slides.length; i < length; i += 1){
            const slide = swiper.slides[i];
            const slideHistory = slugify(slide.getAttribute("data-history"));
            if (slideHistory === value) {
                const index = swiper.getSlideIndex(slide);
                swiper.slideTo(index, speed, runCallbacks);
            }
        }
        else swiper.slideTo(0, speed, runCallbacks);
    };
    const setHistoryPopState = ()=>{
        paths = getPathValues(swiper.params.url);
        scrollToSlide(swiper.params.speed, paths.value, false);
    };
    const init = ()=>{
        const window = (0, _ssrWindowEsmMjs.a)();
        if (!swiper.params.history) return;
        if (!window.history || !window.history.pushState) {
            swiper.params.history.enabled = false;
            swiper.params.hashNavigation.enabled = true;
            return;
        }
        initialized = true;
        paths = getPathValues(swiper.params.url);
        if (!paths.key && !paths.value) {
            if (!swiper.params.history.replaceState) window.addEventListener("popstate", setHistoryPopState);
            return;
        }
        scrollToSlide(0, paths.value, swiper.params.runCallbacksOnInit);
        if (!swiper.params.history.replaceState) window.addEventListener("popstate", setHistoryPopState);
    };
    const destroy = ()=>{
        const window = (0, _ssrWindowEsmMjs.a)();
        if (!swiper.params.history.replaceState) window.removeEventListener("popstate", setHistoryPopState);
    };
    on("init", ()=>{
        if (swiper.params.history.enabled) init();
    });
    on("destroy", ()=>{
        if (swiper.params.history.enabled) destroy();
    });
    on("transitionEnd _freeModeNoMomentumRelease", ()=>{
        if (initialized) setHistory(swiper.params.history.key, swiper.activeIndex);
    });
    on("slideChange", ()=>{
        if (initialized && swiper.params.cssMode) setHistory(swiper.params.history.key, swiper.activeIndex);
    });
}

},{"../shared/ssr-window.esm.mjs":"7eDmS","@parcel/transformer-js/src/esmodule-helpers.js":"iy9MI"}],"aTYGM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>HashNavigation);
var _ssrWindowEsmMjs = require("../shared/ssr-window.esm.mjs");
var _utilsMjs = require("../shared/utils.mjs");
function HashNavigation(_ref) {
    let { swiper, extendParams, emit, on } = _ref;
    let initialized = false;
    const document = (0, _ssrWindowEsmMjs.g)();
    const window = (0, _ssrWindowEsmMjs.a)();
    extendParams({
        hashNavigation: {
            enabled: false,
            replaceState: false,
            watchState: false,
            getSlideIndex (_s, hash) {
                if (swiper.virtual && swiper.params.virtual.enabled) {
                    const slideWithHash = swiper.slides.filter((slideEl)=>slideEl.getAttribute("data-hash") === hash)[0];
                    if (!slideWithHash) return 0;
                    const index = parseInt(slideWithHash.getAttribute("data-swiper-slide-index"), 10);
                    return index;
                }
                return swiper.getSlideIndex((0, _utilsMjs.e)(swiper.slidesEl, `.${swiper.params.slideClass}[data-hash="${hash}"], swiper-slide[data-hash="${hash}"]`)[0]);
            }
        }
    });
    const onHashChange = ()=>{
        emit("hashChange");
        const newHash = document.location.hash.replace("#", "");
        const activeSlideEl = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${swiper.activeIndex}"]`) : swiper.slides[swiper.activeIndex];
        const activeSlideHash = activeSlideEl ? activeSlideEl.getAttribute("data-hash") : "";
        if (newHash !== activeSlideHash) {
            const newIndex = swiper.params.hashNavigation.getSlideIndex(swiper, newHash);
            if (typeof newIndex === "undefined" || Number.isNaN(newIndex)) return;
            swiper.slideTo(newIndex);
        }
    };
    const setHash = ()=>{
        if (!initialized || !swiper.params.hashNavigation.enabled) return;
        const activeSlideEl = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${swiper.activeIndex}"]`) : swiper.slides[swiper.activeIndex];
        const activeSlideHash = activeSlideEl ? activeSlideEl.getAttribute("data-hash") || activeSlideEl.getAttribute("data-history") : "";
        if (swiper.params.hashNavigation.replaceState && window.history && window.history.replaceState) {
            window.history.replaceState(null, null, `#${activeSlideHash}` || "");
            emit("hashSet");
        } else {
            document.location.hash = activeSlideHash || "";
            emit("hashSet");
        }
    };
    const init = ()=>{
        if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
        initialized = true;
        const hash = document.location.hash.replace("#", "");
        if (hash) {
            const speed = 0;
            const index = swiper.params.hashNavigation.getSlideIndex(swiper, hash);
            swiper.slideTo(index || 0, speed, swiper.params.runCallbacksOnInit, true);
        }
        if (swiper.params.hashNavigation.watchState) window.addEventListener("hashchange", onHashChange);
    };
    const destroy = ()=>{
        if (swiper.params.hashNavigation.watchState) window.removeEventListener("hashchange", onHashChange);
    };
    on("init", ()=>{
        if (swiper.params.hashNavigation.enabled) init();
    });
    on("destroy", ()=>{
        if (swiper.params.hashNavigation.enabled) destroy();
    });
    on("transitionEnd _freeModeNoMomentumRelease", ()=>{
        if (initialized) setHash();
    });
    on("slideChange", ()=>{
        if (initialized && swiper.params.cssMode) setHash();
    });
}

},{"../shared/ssr-window.esm.mjs":"7eDmS","../shared/utils.mjs":"jk3lb","@parcel/transformer-js/src/esmodule-helpers.js":"iy9MI"}],"GJIkV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Autoplay);
var _ssrWindowEsmMjs = require("../shared/ssr-window.esm.mjs");
/* eslint no-underscore-dangle: "off" */ /* eslint no-use-before-define: "off" */ function Autoplay(_ref) {
    let { swiper, extendParams, on, emit, params } = _ref;
    swiper.autoplay = {
        running: false,
        paused: false,
        timeLeft: 0
    };
    extendParams({
        autoplay: {
            enabled: false,
            delay: 3000,
            waitForTransition: true,
            disableOnInteraction: true,
            stopOnLastSlide: false,
            reverseDirection: false,
            pauseOnMouseEnter: false
        }
    });
    let timeout;
    let raf;
    let autoplayDelayTotal = params && params.autoplay ? params.autoplay.delay : 3000;
    let autoplayDelayCurrent = params && params.autoplay ? params.autoplay.delay : 3000;
    let autoplayTimeLeft;
    let autoplayStartTime = new Date().getTime;
    let wasPaused;
    let isTouched;
    let pausedByTouch;
    let touchStartTimeout;
    let slideChanged;
    let pausedByInteraction;
    function onTransitionEnd(e) {
        if (!swiper || swiper.destroyed || !swiper.wrapperEl) return;
        if (e.target !== swiper.wrapperEl) return;
        swiper.wrapperEl.removeEventListener("transitionend", onTransitionEnd);
        resume();
    }
    const calcTimeLeft = ()=>{
        if (swiper.destroyed || !swiper.autoplay.running) return;
        if (swiper.autoplay.paused) wasPaused = true;
        else if (wasPaused) {
            autoplayDelayCurrent = autoplayTimeLeft;
            wasPaused = false;
        }
        const timeLeft = swiper.autoplay.paused ? autoplayTimeLeft : autoplayStartTime + autoplayDelayCurrent - new Date().getTime();
        swiper.autoplay.timeLeft = timeLeft;
        emit("autoplayTimeLeft", timeLeft, timeLeft / autoplayDelayTotal);
        raf = requestAnimationFrame(()=>{
            calcTimeLeft();
        });
    };
    const getSlideDelay = ()=>{
        let activeSlideEl;
        if (swiper.virtual && swiper.params.virtual.enabled) activeSlideEl = swiper.slides.filter((slideEl)=>slideEl.classList.contains("swiper-slide-active"))[0];
        else activeSlideEl = swiper.slides[swiper.activeIndex];
        if (!activeSlideEl) return undefined;
        const currentSlideDelay = parseInt(activeSlideEl.getAttribute("data-swiper-autoplay"), 10);
        return currentSlideDelay;
    };
    const run = (delayForce)=>{
        if (swiper.destroyed || !swiper.autoplay.running) return;
        cancelAnimationFrame(raf);
        calcTimeLeft();
        let delay = typeof delayForce === "undefined" ? swiper.params.autoplay.delay : delayForce;
        autoplayDelayTotal = swiper.params.autoplay.delay;
        autoplayDelayCurrent = swiper.params.autoplay.delay;
        const currentSlideDelay = getSlideDelay();
        if (!Number.isNaN(currentSlideDelay) && currentSlideDelay > 0 && typeof delayForce === "undefined") {
            delay = currentSlideDelay;
            autoplayDelayTotal = currentSlideDelay;
            autoplayDelayCurrent = currentSlideDelay;
        }
        autoplayTimeLeft = delay;
        const speed = swiper.params.speed;
        const proceed = ()=>{
            if (!swiper || swiper.destroyed) return;
            if (swiper.params.autoplay.reverseDirection) {
                if (!swiper.isBeginning || swiper.params.loop || swiper.params.rewind) {
                    swiper.slidePrev(speed, true, true);
                    emit("autoplay");
                } else if (!swiper.params.autoplay.stopOnLastSlide) {
                    swiper.slideTo(swiper.slides.length - 1, speed, true, true);
                    emit("autoplay");
                }
            } else {
                if (!swiper.isEnd || swiper.params.loop || swiper.params.rewind) {
                    swiper.slideNext(speed, true, true);
                    emit("autoplay");
                } else if (!swiper.params.autoplay.stopOnLastSlide) {
                    swiper.slideTo(0, speed, true, true);
                    emit("autoplay");
                }
            }
            if (swiper.params.cssMode) {
                autoplayStartTime = new Date().getTime();
                requestAnimationFrame(()=>{
                    run();
                });
            }
        };
        if (delay > 0) {
            clearTimeout(timeout);
            timeout = setTimeout(()=>{
                proceed();
            }, delay);
        } else requestAnimationFrame(()=>{
            proceed();
        });
        // eslint-disable-next-line
        return delay;
    };
    const start = ()=>{
        swiper.autoplay.running = true;
        run();
        emit("autoplayStart");
    };
    const stop = ()=>{
        swiper.autoplay.running = false;
        clearTimeout(timeout);
        cancelAnimationFrame(raf);
        emit("autoplayStop");
    };
    const pause = (internal, reset)=>{
        if (swiper.destroyed || !swiper.autoplay.running) return;
        clearTimeout(timeout);
        if (!internal) pausedByInteraction = true;
        const proceed = ()=>{
            emit("autoplayPause");
            if (swiper.params.autoplay.waitForTransition) swiper.wrapperEl.addEventListener("transitionend", onTransitionEnd);
            else resume();
        };
        swiper.autoplay.paused = true;
        if (reset) {
            if (slideChanged) autoplayTimeLeft = swiper.params.autoplay.delay;
            slideChanged = false;
            proceed();
            return;
        }
        const delay = autoplayTimeLeft || swiper.params.autoplay.delay;
        autoplayTimeLeft = delay - (new Date().getTime() - autoplayStartTime);
        if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop) return;
        if (autoplayTimeLeft < 0) autoplayTimeLeft = 0;
        proceed();
    };
    const resume = ()=>{
        if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop || swiper.destroyed || !swiper.autoplay.running) return;
        autoplayStartTime = new Date().getTime();
        if (pausedByInteraction) {
            pausedByInteraction = false;
            run(autoplayTimeLeft);
        } else run();
        swiper.autoplay.paused = false;
        emit("autoplayResume");
    };
    const onVisibilityChange = ()=>{
        if (swiper.destroyed || !swiper.autoplay.running) return;
        const document = (0, _ssrWindowEsmMjs.g)();
        if (document.visibilityState === "hidden") {
            pausedByInteraction = true;
            pause(true);
        }
        if (document.visibilityState === "visible") resume();
    };
    const onPointerEnter = (e)=>{
        if (e.pointerType !== "mouse") return;
        pausedByInteraction = true;
        if (swiper.animating || swiper.autoplay.paused) return;
        pause(true);
    };
    const onPointerLeave = (e)=>{
        if (e.pointerType !== "mouse") return;
        if (swiper.autoplay.paused) resume();
    };
    const attachMouseEvents = ()=>{
        if (swiper.params.autoplay.pauseOnMouseEnter) {
            swiper.el.addEventListener("pointerenter", onPointerEnter);
            swiper.el.addEventListener("pointerleave", onPointerLeave);
        }
    };
    const detachMouseEvents = ()=>{
        swiper.el.removeEventListener("pointerenter", onPointerEnter);
        swiper.el.removeEventListener("pointerleave", onPointerLeave);
    };
    const attachDocumentEvents = ()=>{
        const document = (0, _ssrWindowEsmMjs.g)();
        document.addEventListener("visibilitychange", onVisibilityChange);
    };
    const detachDocumentEvents = ()=>{
        const document = (0, _ssrWindowEsmMjs.g)();
        document.removeEventListener("visibilitychange", onVisibilityChange);
    };
    on("init", ()=>{
        if (swiper.params.autoplay.enabled) {
            attachMouseEvents();
            attachDocumentEvents();
            autoplayStartTime = new Date().getTime();
            start();
        }
    });
    on("destroy", ()=>{
        detachMouseEvents();
        detachDocumentEvents();
        if (swiper.autoplay.running) stop();
    });
    on("beforeTransitionStart", (_s, speed, internal)=>{
        if (swiper.destroyed || !swiper.autoplay.running) return;
        if (internal || !swiper.params.autoplay.disableOnInteraction) pause(true, true);
        else stop();
    });
    on("sliderFirstMove", ()=>{
        if (swiper.destroyed || !swiper.autoplay.running) return;
        if (swiper.params.autoplay.disableOnInteraction) {
            stop();
            return;
        }
        isTouched = true;
        pausedByTouch = false;
        pausedByInteraction = false;
        touchStartTimeout = setTimeout(()=>{
            pausedByInteraction = true;
            pausedByTouch = true;
            pause(true);
        }, 200);
    });
    on("touchEnd", ()=>{
        if (swiper.destroyed || !swiper.autoplay.running || !isTouched) return;
        clearTimeout(touchStartTimeout);
        clearTimeout(timeout);
        if (swiper.params.autoplay.disableOnInteraction) {
            pausedByTouch = false;
            isTouched = false;
            return;
        }
        if (pausedByTouch && swiper.params.cssMode) resume();
        pausedByTouch = false;
        isTouched = false;
    });
    on("slideChange", ()=>{
        if (swiper.destroyed || !swiper.autoplay.running) return;
        slideChanged = true;
    });
    Object.assign(swiper.autoplay, {
        start,
        stop,
        pause,
        resume
    });
}

},{"../shared/ssr-window.esm.mjs":"7eDmS","@parcel/transformer-js/src/esmodule-helpers.js":"iy9MI"}],"f5lqN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Thumb);
var _ssrWindowEsmMjs = require("../shared/ssr-window.esm.mjs");
var _utilsMjs = require("../shared/utils.mjs");
function Thumb(_ref) {
    let { swiper, extendParams, on } = _ref;
    extendParams({
        thumbs: {
            swiper: null,
            multipleActiveThumbs: true,
            autoScrollOffset: 0,
            slideThumbActiveClass: "swiper-slide-thumb-active",
            thumbsContainerClass: "swiper-thumbs"
        }
    });
    let initialized = false;
    let swiperCreated = false;
    swiper.thumbs = {
        swiper: null
    };
    function onThumbClick() {
        const thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper || thumbsSwiper.destroyed) return;
        const clickedIndex = thumbsSwiper.clickedIndex;
        const clickedSlide = thumbsSwiper.clickedSlide;
        if (clickedSlide && clickedSlide.classList.contains(swiper.params.thumbs.slideThumbActiveClass)) return;
        if (typeof clickedIndex === "undefined" || clickedIndex === null) return;
        let slideToIndex;
        if (thumbsSwiper.params.loop) slideToIndex = parseInt(thumbsSwiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
        else slideToIndex = clickedIndex;
        if (swiper.params.loop) swiper.slideToLoop(slideToIndex);
        else swiper.slideTo(slideToIndex);
    }
    function init() {
        const { thumbs: thumbsParams } = swiper.params;
        if (initialized) return false;
        initialized = true;
        const SwiperClass = swiper.constructor;
        if (thumbsParams.swiper instanceof SwiperClass) {
            swiper.thumbs.swiper = thumbsParams.swiper;
            Object.assign(swiper.thumbs.swiper.originalParams, {
                watchSlidesProgress: true,
                slideToClickedSlide: false
            });
            Object.assign(swiper.thumbs.swiper.params, {
                watchSlidesProgress: true,
                slideToClickedSlide: false
            });
            swiper.thumbs.swiper.update();
        } else if ((0, _utilsMjs.j)(thumbsParams.swiper)) {
            const thumbsSwiperParams = Object.assign({}, thumbsParams.swiper);
            Object.assign(thumbsSwiperParams, {
                watchSlidesProgress: true,
                slideToClickedSlide: false
            });
            swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams);
            swiperCreated = true;
        }
        swiper.thumbs.swiper.el.classList.add(swiper.params.thumbs.thumbsContainerClass);
        swiper.thumbs.swiper.on("tap", onThumbClick);
        return true;
    }
    function update(initial) {
        const thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper || thumbsSwiper.destroyed) return;
        const slidesPerView = thumbsSwiper.params.slidesPerView === "auto" ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;
        // Activate thumbs
        let thumbsToActivate = 1;
        const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;
        if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) thumbsToActivate = swiper.params.slidesPerView;
        if (!swiper.params.thumbs.multipleActiveThumbs) thumbsToActivate = 1;
        thumbsToActivate = Math.floor(thumbsToActivate);
        thumbsSwiper.slides.forEach((slideEl)=>slideEl.classList.remove(thumbActiveClass));
        if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) for(let i = 0; i < thumbsToActivate; i += 1)(0, _utilsMjs.e)(thumbsSwiper.slidesEl, `[data-swiper-slide-index="${swiper.realIndex + i}"]`).forEach((slideEl)=>{
            slideEl.classList.add(thumbActiveClass);
        });
        else {
            for(let i = 0; i < thumbsToActivate; i += 1)if (thumbsSwiper.slides[swiper.realIndex + i]) thumbsSwiper.slides[swiper.realIndex + i].classList.add(thumbActiveClass);
        }
        const autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
        const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
        if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
            const currentThumbsIndex = thumbsSwiper.activeIndex;
            let newThumbsIndex;
            let direction;
            if (thumbsSwiper.params.loop) {
                const newThumbsSlide = thumbsSwiper.slides.filter((slideEl)=>slideEl.getAttribute("data-swiper-slide-index") === `${swiper.realIndex}`)[0];
                newThumbsIndex = thumbsSwiper.slides.indexOf(newThumbsSlide);
                direction = swiper.activeIndex > swiper.previousIndex ? "next" : "prev";
            } else {
                newThumbsIndex = swiper.realIndex;
                direction = newThumbsIndex > swiper.previousIndex ? "next" : "prev";
            }
            if (useOffset) newThumbsIndex += direction === "next" ? autoScrollOffset : -1 * autoScrollOffset;
            if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
                if (thumbsSwiper.params.centeredSlides) {
                    if (newThumbsIndex > currentThumbsIndex) newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
                    else newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
                } else newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup;
                thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
            }
        }
    }
    on("beforeInit", ()=>{
        const { thumbs } = swiper.params;
        if (!thumbs || !thumbs.swiper) return;
        if (typeof thumbs.swiper === "string" || thumbs.swiper instanceof HTMLElement) {
            const document = (0, _ssrWindowEsmMjs.g)();
            const getThumbsElementAndInit = ()=>{
                const thumbsElement = typeof thumbs.swiper === "string" ? document.querySelector(thumbs.swiper) : thumbs.swiper;
                if (thumbsElement && thumbsElement.swiper) {
                    thumbs.swiper = thumbsElement.swiper;
                    init();
                    update(true);
                } else if (thumbsElement) {
                    const onThumbsSwiper = (e)=>{
                        thumbs.swiper = e.detail[0];
                        thumbsElement.removeEventListener("init", onThumbsSwiper);
                        init();
                        update(true);
                        thumbs.swiper.update();
                        swiper.update();
                    };
                    thumbsElement.addEventListener("init", onThumbsSwiper);
                }
                return thumbsElement;
            };
            const watchForThumbsToAppear = ()=>{
                if (swiper.destroyed) return;
                const thumbsElement = getThumbsElementAndInit();
                if (!thumbsElement) requestAnimationFrame(watchForThumbsToAppear);
            };
            requestAnimationFrame(watchForThumbsToAppear);
        } else {
            init();
            update(true);
        }
    });
    on("slideChange update resize observerUpdate", ()=>{
        update();
    });
    on("setTransition", (_s, duration)=>{
        const thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper || thumbsSwiper.destroyed) return;
        thumbsSwiper.setTransition(duration);
    });
    on("beforeDestroy", ()=>{
        const thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper || thumbsSwiper.destroyed) return;
        if (swiperCreated) thumbsSwiper.destroy();
    });
    Object.assign(swiper.thumbs, {
        init,
        update
    });
}

},{"../shared/ssr-window.esm.mjs":"7eDmS","../shared/utils.mjs":"jk3lb","@parcel/transformer-js/src/esmodule-helpers.js":"iy9MI"}],"5YtPu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>freeMode);
var _utilsMjs = require("../shared/utils.mjs");
function freeMode(_ref) {
    let { swiper, extendParams, emit, once } = _ref;
    extendParams({
        freeMode: {
            enabled: false,
            momentum: true,
            momentumRatio: 1,
            momentumBounce: true,
            momentumBounceRatio: 1,
            momentumVelocityRatio: 1,
            sticky: false,
            minimumVelocity: 0.02
        }
    });
    function onTouchStart() {
        if (swiper.params.cssMode) return;
        const translate = swiper.getTranslate();
        swiper.setTranslate(translate);
        swiper.setTransition(0);
        swiper.touchEventsData.velocities.length = 0;
        swiper.freeMode.onTouchEnd({
            currentPos: swiper.rtl ? swiper.translate : -swiper.translate
        });
    }
    function onTouchMove() {
        if (swiper.params.cssMode) return;
        const { touchEventsData: data, touches } = swiper;
        // Velocity
        if (data.velocities.length === 0) data.velocities.push({
            position: touches[swiper.isHorizontal() ? "startX" : "startY"],
            time: data.touchStartTime
        });
        data.velocities.push({
            position: touches[swiper.isHorizontal() ? "currentX" : "currentY"],
            time: (0, _utilsMjs.d)()
        });
    }
    function onTouchEnd(_ref2) {
        let { currentPos } = _ref2;
        if (swiper.params.cssMode) return;
        const { params, wrapperEl, rtlTranslate: rtl, snapGrid, touchEventsData: data } = swiper;
        // Time diff
        const touchEndTime = (0, _utilsMjs.d)();
        const timeDiff = touchEndTime - data.touchStartTime;
        if (currentPos < -swiper.minTranslate()) {
            swiper.slideTo(swiper.activeIndex);
            return;
        }
        if (currentPos > -swiper.maxTranslate()) {
            if (swiper.slides.length < snapGrid.length) swiper.slideTo(snapGrid.length - 1);
            else swiper.slideTo(swiper.slides.length - 1);
            return;
        }
        if (params.freeMode.momentum) {
            if (data.velocities.length > 1) {
                const lastMoveEvent = data.velocities.pop();
                const velocityEvent = data.velocities.pop();
                const distance = lastMoveEvent.position - velocityEvent.position;
                const time = lastMoveEvent.time - velocityEvent.time;
                swiper.velocity = distance / time;
                swiper.velocity /= 2;
                if (Math.abs(swiper.velocity) < params.freeMode.minimumVelocity) swiper.velocity = 0;
                // this implies that the user stopped moving a finger then released.
                // There would be no events with distance zero, so the last event is stale.
                if (time > 150 || (0, _utilsMjs.d)() - lastMoveEvent.time > 300) swiper.velocity = 0;
            } else swiper.velocity = 0;
            swiper.velocity *= params.freeMode.momentumVelocityRatio;
            data.velocities.length = 0;
            let momentumDuration = 1000 * params.freeMode.momentumRatio;
            const momentumDistance = swiper.velocity * momentumDuration;
            let newPosition = swiper.translate + momentumDistance;
            if (rtl) newPosition = -newPosition;
            let doBounce = false;
            let afterBouncePosition;
            const bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeMode.momentumBounceRatio;
            let needsLoopFix;
            if (newPosition < swiper.maxTranslate()) {
                if (params.freeMode.momentumBounce) {
                    if (newPosition + swiper.maxTranslate() < -bounceAmount) newPosition = swiper.maxTranslate() - bounceAmount;
                    afterBouncePosition = swiper.maxTranslate();
                    doBounce = true;
                    data.allowMomentumBounce = true;
                } else newPosition = swiper.maxTranslate();
                if (params.loop && params.centeredSlides) needsLoopFix = true;
            } else if (newPosition > swiper.minTranslate()) {
                if (params.freeMode.momentumBounce) {
                    if (newPosition - swiper.minTranslate() > bounceAmount) newPosition = swiper.minTranslate() + bounceAmount;
                    afterBouncePosition = swiper.minTranslate();
                    doBounce = true;
                    data.allowMomentumBounce = true;
                } else newPosition = swiper.minTranslate();
                if (params.loop && params.centeredSlides) needsLoopFix = true;
            } else if (params.freeMode.sticky) {
                let nextSlide;
                for(let j = 0; j < snapGrid.length; j += 1)if (snapGrid[j] > -newPosition) {
                    nextSlide = j;
                    break;
                }
                if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === "next") newPosition = snapGrid[nextSlide];
                else newPosition = snapGrid[nextSlide - 1];
                newPosition = -newPosition;
            }
            if (needsLoopFix) once("transitionEnd", ()=>{
                swiper.loopFix();
            });
            // Fix duration
            if (swiper.velocity !== 0) {
                if (rtl) momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
                else momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
                if (params.freeMode.sticky) {
                    // If freeMode.sticky is active and the user ends a swipe with a slow-velocity
                    // event, then durations can be 20+ seconds to slide one (or zero!) slides.
                    // It's easy to see this when simulating touch with mouse events. To fix this,
                    // limit single-slide swipes to the default slide duration. This also has the
                    // nice side effect of matching slide speed if the user stopped moving before
                    // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
                    // For faster swipes, also apply limits (albeit higher ones).
                    const moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
                    const currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];
                    if (moveDistance < currentSlideSize) momentumDuration = params.speed;
                    else if (moveDistance < 2 * currentSlideSize) momentumDuration = params.speed * 1.5;
                    else momentumDuration = params.speed * 2.5;
                }
            } else if (params.freeMode.sticky) {
                swiper.slideToClosest();
                return;
            }
            if (params.freeMode.momentumBounce && doBounce) {
                swiper.updateProgress(afterBouncePosition);
                swiper.setTransition(momentumDuration);
                swiper.setTranslate(newPosition);
                swiper.transitionStart(true, swiper.swipeDirection);
                swiper.animating = true;
                (0, _utilsMjs.i)(wrapperEl, ()=>{
                    if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
                    emit("momentumBounce");
                    swiper.setTransition(params.speed);
                    setTimeout(()=>{
                        swiper.setTranslate(afterBouncePosition);
                        (0, _utilsMjs.i)(wrapperEl, ()=>{
                            if (!swiper || swiper.destroyed) return;
                            swiper.transitionEnd();
                        });
                    }, 0);
                });
            } else if (swiper.velocity) {
                emit("_freeModeNoMomentumRelease");
                swiper.updateProgress(newPosition);
                swiper.setTransition(momentumDuration);
                swiper.setTranslate(newPosition);
                swiper.transitionStart(true, swiper.swipeDirection);
                if (!swiper.animating) {
                    swiper.animating = true;
                    (0, _utilsMjs.i)(wrapperEl, ()=>{
                        if (!swiper || swiper.destroyed) return;
                        swiper.transitionEnd();
                    });
                }
            } else swiper.updateProgress(newPosition);
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        } else if (params.freeMode.sticky) {
            swiper.slideToClosest();
            return;
        } else if (params.freeMode) emit("_freeModeNoMomentumRelease");
        if (!params.freeMode.momentum || timeDiff >= params.longSwipesMs) {
            swiper.updateProgress();
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        }
    }
    Object.assign(swiper, {
        freeMode: {
            onTouchStart,
            onTouchMove,
            onTouchEnd
        }
    });
}

},{"../shared/utils.mjs":"jk3lb","@parcel/transformer-js/src/esmodule-helpers.js":"iy9MI"}],"4aO5r":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Grid);
function Grid(_ref) {
    let { swiper, extendParams } = _ref;
    extendParams({
        grid: {
            rows: 1,
            fill: "column"
        }
    });
    let slidesNumberEvenToRows;
    let slidesPerRow;
    let numFullColumns;
    const getSpaceBetween = ()=>{
        let spaceBetween = swiper.params.spaceBetween;
        if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiper.size;
        else if (typeof spaceBetween === "string") spaceBetween = parseFloat(spaceBetween);
        return spaceBetween;
    };
    const initSlides = (slidesLength)=>{
        const { slidesPerView } = swiper.params;
        const { rows, fill } = swiper.params.grid;
        numFullColumns = Math.floor(slidesLength / rows);
        if (Math.floor(slidesLength / rows) === slidesLength / rows) slidesNumberEvenToRows = slidesLength;
        else slidesNumberEvenToRows = Math.ceil(slidesLength / rows) * rows;
        if (slidesPerView !== "auto" && fill === "row") slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, slidesPerView * rows);
        slidesPerRow = slidesNumberEvenToRows / rows;
    };
    const updateSlide = (i, slide, slidesLength, getDirectionLabel)=>{
        const { slidesPerGroup } = swiper.params;
        const spaceBetween = getSpaceBetween();
        const { rows, fill } = swiper.params.grid;
        // Set slides order
        let newSlideOrderIndex;
        let column;
        let row;
        if (fill === "row" && slidesPerGroup > 1) {
            const groupIndex = Math.floor(i / (slidesPerGroup * rows));
            const slideIndexInGroup = i - rows * slidesPerGroup * groupIndex;
            const columnsInGroup = groupIndex === 0 ? slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * rows * slidesPerGroup) / rows), slidesPerGroup);
            row = Math.floor(slideIndexInGroup / columnsInGroup);
            column = slideIndexInGroup - row * columnsInGroup + groupIndex * slidesPerGroup;
            newSlideOrderIndex = column + row * slidesNumberEvenToRows / rows;
            slide.style.order = newSlideOrderIndex;
        } else if (fill === "column") {
            column = Math.floor(i / rows);
            row = i - column * rows;
            if (column > numFullColumns || column === numFullColumns && row === rows - 1) {
                row += 1;
                if (row >= rows) {
                    row = 0;
                    column += 1;
                }
            }
        } else {
            row = Math.floor(i / slidesPerRow);
            column = i - row * slidesPerRow;
        }
        slide.row = row;
        slide.column = column;
        slide.style[getDirectionLabel("margin-top")] = row !== 0 ? spaceBetween && `${spaceBetween}px` : "";
    };
    const updateWrapperSize = (slideSize, snapGrid, getDirectionLabel)=>{
        const { centeredSlides, roundLengths } = swiper.params;
        const spaceBetween = getSpaceBetween();
        const { rows } = swiper.params.grid;
        swiper.virtualSize = (slideSize + spaceBetween) * slidesNumberEvenToRows;
        swiper.virtualSize = Math.ceil(swiper.virtualSize / rows) - spaceBetween;
        swiper.wrapperEl.style[getDirectionLabel("width")] = `${swiper.virtualSize + spaceBetween}px`;
        if (centeredSlides) {
            const newSlidesGrid = [];
            for(let i = 0; i < snapGrid.length; i += 1){
                let slidesGridItem = snapGrid[i];
                if (roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                if (snapGrid[i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
            }
            snapGrid.splice(0, snapGrid.length);
            snapGrid.push(...newSlidesGrid);
        }
    };
    swiper.grid = {
        initSlides,
        updateSlide,
        updateWrapperSize
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iy9MI"}],"1sKVs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Manipulation);
function appendSlide(slides) {
    const swiper = this;
    const { params, slidesEl } = swiper;
    if (params.loop) swiper.loopDestroy();
    const appendElement = (slideEl)=>{
        if (typeof slideEl === "string") {
            const tempDOM = document.createElement("div");
            tempDOM.innerHTML = slideEl;
            slidesEl.append(tempDOM.children[0]);
            tempDOM.innerHTML = "";
        } else slidesEl.append(slideEl);
    };
    if (typeof slides === "object" && "length" in slides) {
        for(let i = 0; i < slides.length; i += 1)if (slides[i]) appendElement(slides[i]);
    } else appendElement(slides);
    swiper.recalcSlides();
    if (params.loop) swiper.loopCreate();
    if (!params.observer || swiper.isElement) swiper.update();
}
function prependSlide(slides) {
    const swiper = this;
    const { params, activeIndex, slidesEl } = swiper;
    if (params.loop) swiper.loopDestroy();
    let newActiveIndex = activeIndex + 1;
    const prependElement = (slideEl)=>{
        if (typeof slideEl === "string") {
            const tempDOM = document.createElement("div");
            tempDOM.innerHTML = slideEl;
            slidesEl.prepend(tempDOM.children[0]);
            tempDOM.innerHTML = "";
        } else slidesEl.prepend(slideEl);
    };
    if (typeof slides === "object" && "length" in slides) {
        for(let i = 0; i < slides.length; i += 1)if (slides[i]) prependElement(slides[i]);
        newActiveIndex = activeIndex + slides.length;
    } else prependElement(slides);
    swiper.recalcSlides();
    if (params.loop) swiper.loopCreate();
    if (!params.observer || swiper.isElement) swiper.update();
    swiper.slideTo(newActiveIndex, 0, false);
}
function addSlide(index, slides) {
    const swiper = this;
    const { params, activeIndex, slidesEl } = swiper;
    let activeIndexBuffer = activeIndex;
    if (params.loop) {
        activeIndexBuffer -= swiper.loopedSlides;
        swiper.loopDestroy();
        swiper.recalcSlides();
    }
    const baseLength = swiper.slides.length;
    if (index <= 0) {
        swiper.prependSlide(slides);
        return;
    }
    if (index >= baseLength) {
        swiper.appendSlide(slides);
        return;
    }
    let newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
    const slidesBuffer = [];
    for(let i = baseLength - 1; i >= index; i -= 1){
        const currentSlide = swiper.slides[i];
        currentSlide.remove();
        slidesBuffer.unshift(currentSlide);
    }
    if (typeof slides === "object" && "length" in slides) {
        for(let i = 0; i < slides.length; i += 1)if (slides[i]) slidesEl.append(slides[i]);
        newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
    } else slidesEl.append(slides);
    for(let i = 0; i < slidesBuffer.length; i += 1)slidesEl.append(slidesBuffer[i]);
    swiper.recalcSlides();
    if (params.loop) swiper.loopCreate();
    if (!params.observer || swiper.isElement) swiper.update();
    if (params.loop) swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    else swiper.slideTo(newActiveIndex, 0, false);
}
function removeSlide(slidesIndexes) {
    const swiper = this;
    const { params, activeIndex } = swiper;
    let activeIndexBuffer = activeIndex;
    if (params.loop) {
        activeIndexBuffer -= swiper.loopedSlides;
        swiper.loopDestroy();
    }
    let newActiveIndex = activeIndexBuffer;
    let indexToRemove;
    if (typeof slidesIndexes === "object" && "length" in slidesIndexes) {
        for(let i = 0; i < slidesIndexes.length; i += 1){
            indexToRemove = slidesIndexes[i];
            if (swiper.slides[indexToRemove]) swiper.slides[indexToRemove].remove();
            if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
        }
        newActiveIndex = Math.max(newActiveIndex, 0);
    } else {
        indexToRemove = slidesIndexes;
        if (swiper.slides[indexToRemove]) swiper.slides[indexToRemove].remove();
        if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
        newActiveIndex = Math.max(newActiveIndex, 0);
    }
    swiper.recalcSlides();
    if (params.loop) swiper.loopCreate();
    if (!params.observer || swiper.isElement) swiper.update();
    if (params.loop) swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    else swiper.slideTo(newActiveIndex, 0, false);
}
function removeAllSlides() {
    const swiper = this;
    const slidesIndexes = [];
    for(let i = 0; i < swiper.slides.length; i += 1)slidesIndexes.push(i);
    swiper.removeSlide(slidesIndexes);
}
function Manipulation(_ref) {
    let { swiper } = _ref;
    Object.assign(swiper, {
        appendSlide: appendSlide.bind(swiper),
        prependSlide: prependSlide.bind(swiper),
        addSlide: addSlide.bind(swiper),
        removeSlide: removeSlide.bind(swiper),
        removeAllSlides: removeAllSlides.bind(swiper)
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iy9MI"}],"jnh8d":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>EffectFade);
var _effectInitMjs = require("../shared/effect-init.mjs");
var _effectTargetMjs = require("../shared/effect-target.mjs");
var _effectVirtualTransitionEndMjs = require("../shared/effect-virtual-transition-end.mjs");
var _utilsMjs = require("../shared/utils.mjs");
function EffectFade(_ref) {
    let { swiper, extendParams, on } = _ref;
    extendParams({
        fadeEffect: {
            crossFade: false
        }
    });
    const setTranslate = ()=>{
        const { slides } = swiper;
        const params = swiper.params.fadeEffect;
        for(let i = 0; i < slides.length; i += 1){
            const slideEl = swiper.slides[i];
            const offset = slideEl.swiperSlideOffset;
            let tx = -offset;
            if (!swiper.params.virtualTranslate) tx -= swiper.translate;
            let ty = 0;
            if (!swiper.isHorizontal()) {
                ty = tx;
                tx = 0;
            }
            const slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(slideEl.progress), 0) : 1 + Math.min(Math.max(slideEl.progress, -1), 0);
            const targetEl = (0, _effectTargetMjs.e)(params, slideEl);
            targetEl.style.opacity = slideOpacity;
            targetEl.style.transform = `translate3d(${tx}px, ${ty}px, 0px)`;
        }
    };
    const setTransition = (duration)=>{
        const transformElements = swiper.slides.map((slideEl)=>(0, _utilsMjs.k)(slideEl));
        transformElements.forEach((el)=>{
            el.style.transitionDuration = `${duration}ms`;
        });
        (0, _effectVirtualTransitionEndMjs.e)({
            swiper,
            duration,
            transformElements,
            allSlides: true
        });
    };
    (0, _effectInitMjs.e)({
        effect: "fade",
        swiper,
        on,
        setTranslate,
        setTransition,
        overwriteParams: ()=>({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: true,
                spaceBetween: 0,
                virtualTranslate: !swiper.params.cssMode
            })
    });
}

},{"../shared/effect-init.mjs":"h2i2x","../shared/effect-target.mjs":"eGDYf","../shared/effect-virtual-transition-end.mjs":"chf5C","../shared/utils.mjs":"jk3lb","@parcel/transformer-js/src/esmodule-helpers.js":"iy9MI"}],"h2i2x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "e", ()=>effectInit);
function effectInit(params) {
    const { effect, swiper, on, setTranslate, setTransition, overwriteParams, perspective, recreateShadows, getEffectParams } = params;
    on("beforeInit", ()=>{
        if (swiper.params.effect !== effect) return;
        swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`);
        if (perspective && perspective()) swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
        const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
        Object.assign(swiper.params, overwriteParamsResult);
        Object.assign(swiper.originalParams, overwriteParamsResult);
    });
    on("setTranslate", ()=>{
        if (swiper.params.effect !== effect) return;
        setTranslate();
    });
    on("setTransition", (_s, duration)=>{
        if (swiper.params.effect !== effect) return;
        setTransition(duration);
    });
    on("transitionEnd", ()=>{
        if (swiper.params.effect !== effect) return;
        if (recreateShadows) {
            if (!getEffectParams || !getEffectParams().slideShadows) return;
            // remove shadows
            swiper.slides.forEach((slideEl)=>{
                slideEl.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((shadowEl)=>shadowEl.remove());
            });
            // create new one
            recreateShadows();
        }
    });
    let requireUpdateOnVirtual;
    on("virtualUpdate", ()=>{
        if (swiper.params.effect !== effect) return;
        if (!swiper.slides.length) requireUpdateOnVirtual = true;
        requestAnimationFrame(()=>{
            if (requireUpdateOnVirtual && swiper.slides && swiper.slides.length) {
                setTranslate();
                requireUpdateOnVirtual = false;
            }
        });
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iy9MI"}],"eGDYf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "e", ()=>effectTarget);
var _utilsMjs = require("./utils.mjs");
function effectTarget(effectParams, slideEl) {
    const transformEl = (0, _utilsMjs.k)(slideEl);
    if (transformEl !== slideEl) {
        transformEl.style.backfaceVisibility = "hidden";
        transformEl.style["-webkit-backface-visibility"] = "hidden";
    }
    return transformEl;
}

},{"./utils.mjs":"jk3lb","@parcel/transformer-js/src/esmodule-helpers.js":"iy9MI"}],"chf5C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "e", ()=>effectVirtualTransitionEnd);
var _utilsMjs = require("./utils.mjs");
function effectVirtualTransitionEnd(_ref) {
    let { swiper, duration, transformElements, allSlides } = _ref;
    const { activeIndex } = swiper;
    const getSlide = (el)=>{
        if (!el.parentElement) {
            // assume shadow root
            const slide = swiper.slides.filter((slideEl)=>slideEl.shadowRoot && slideEl.shadowRoot === el.parentNode)[0];
            return slide;
        }
        return el.parentElement;
    };
    if (swiper.params.virtualTranslate && duration !== 0) {
        let eventTriggered = false;
        let transitionEndTarget;
        if (allSlides) transitionEndTarget = transformElements;
        else transitionEndTarget = transformElements.filter((transformEl)=>{
            const el = transformEl.classList.contains("swiper-slide-transform") ? getSlide(transformEl) : transformEl;
            return swiper.getSlideIndex(el) === activeIndex;
        });
        transitionEndTarget.forEach((el)=>{
            (0, _utilsMjs.i)(el, ()=>{
                if (eventTriggered) return;
                if (!swiper || swiper.destroyed) return;
                eventTriggered = true;
                swiper.animating = false;
                const evt = new window.CustomEvent("transitionend", {
                    bubbles: true,
                    cancelable: true
                });
                swiper.wrapperEl.dispatchEvent(evt);
            });
        });
    }
}

},{"./utils.mjs":"jk3lb","@parcel/transformer-js/src/esmodule-helpers.js":"iy9MI"}],"hERqB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>EffectCube);
var _effectInitMjs = require("../shared/effect-init.mjs");
var _utilsMjs = require("../shared/utils.mjs");
function EffectCube(_ref) {
    let { swiper, extendParams, on } = _ref;
    extendParams({
        cubeEffect: {
            slideShadows: true,
            shadow: true,
            shadowOffset: 20,
            shadowScale: 0.94
        }
    });
    const createSlideShadows = (slideEl, progress, isHorizontal)=>{
        let shadowBefore = isHorizontal ? slideEl.querySelector(".swiper-slide-shadow-left") : slideEl.querySelector(".swiper-slide-shadow-top");
        let shadowAfter = isHorizontal ? slideEl.querySelector(".swiper-slide-shadow-right") : slideEl.querySelector(".swiper-slide-shadow-bottom");
        if (!shadowBefore) {
            shadowBefore = (0, _utilsMjs.c)("div", `swiper-slide-shadow-cube swiper-slide-shadow-${isHorizontal ? "left" : "top"}`.split(" "));
            slideEl.append(shadowBefore);
        }
        if (!shadowAfter) {
            shadowAfter = (0, _utilsMjs.c)("div", `swiper-slide-shadow-cube swiper-slide-shadow-${isHorizontal ? "right" : "bottom"}`.split(" "));
            slideEl.append(shadowAfter);
        }
        if (shadowBefore) shadowBefore.style.opacity = Math.max(-progress, 0);
        if (shadowAfter) shadowAfter.style.opacity = Math.max(progress, 0);
    };
    const recreateShadows = ()=>{
        // create new ones
        const isHorizontal = swiper.isHorizontal();
        swiper.slides.forEach((slideEl)=>{
            const progress = Math.max(Math.min(slideEl.progress, 1), -1);
            createSlideShadows(slideEl, progress, isHorizontal);
        });
    };
    const setTranslate = ()=>{
        const { el, wrapperEl, slides, width: swiperWidth, height: swiperHeight, rtlTranslate: rtl, size: swiperSize, browser } = swiper;
        const params = swiper.params.cubeEffect;
        const isHorizontal = swiper.isHorizontal();
        const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
        let wrapperRotate = 0;
        let cubeShadowEl;
        if (params.shadow) {
            if (isHorizontal) {
                cubeShadowEl = swiper.wrapperEl.querySelector(".swiper-cube-shadow");
                if (!cubeShadowEl) {
                    cubeShadowEl = (0, _utilsMjs.c)("div", "swiper-cube-shadow");
                    swiper.wrapperEl.append(cubeShadowEl);
                }
                cubeShadowEl.style.height = `${swiperWidth}px`;
            } else {
                cubeShadowEl = el.querySelector(".swiper-cube-shadow");
                if (!cubeShadowEl) {
                    cubeShadowEl = (0, _utilsMjs.c)("div", "swiper-cube-shadow");
                    el.append(cubeShadowEl);
                }
            }
        }
        for(let i = 0; i < slides.length; i += 1){
            const slideEl = slides[i];
            let slideIndex = i;
            if (isVirtual) slideIndex = parseInt(slideEl.getAttribute("data-swiper-slide-index"), 10);
            let slideAngle = slideIndex * 90;
            let round = Math.floor(slideAngle / 360);
            if (rtl) {
                slideAngle = -slideAngle;
                round = Math.floor(-slideAngle / 360);
            }
            const progress = Math.max(Math.min(slideEl.progress, 1), -1);
            let tx = 0;
            let ty = 0;
            let tz = 0;
            if (slideIndex % 4 === 0) {
                tx = -round * 4 * swiperSize;
                tz = 0;
            } else if ((slideIndex - 1) % 4 === 0) {
                tx = 0;
                tz = -round * 4 * swiperSize;
            } else if ((slideIndex - 2) % 4 === 0) {
                tx = swiperSize + round * 4 * swiperSize;
                tz = swiperSize;
            } else if ((slideIndex - 3) % 4 === 0) {
                tx = -swiperSize;
                tz = 3 * swiperSize + swiperSize * 4 * round;
            }
            if (rtl) tx = -tx;
            if (!isHorizontal) {
                ty = tx;
                tx = 0;
            }
            const transform = `rotateX(${isHorizontal ? 0 : -slideAngle}deg) rotateY(${isHorizontal ? slideAngle : 0}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;
            if (progress <= 1 && progress > -1) {
                wrapperRotate = slideIndex * 90 + progress * 90;
                if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
            }
            slideEl.style.transform = transform;
            if (params.slideShadows) createSlideShadows(slideEl, progress, isHorizontal);
        }
        wrapperEl.style.transformOrigin = `50% 50% -${swiperSize / 2}px`;
        wrapperEl.style["-webkit-transform-origin"] = `50% 50% -${swiperSize / 2}px`;
        if (params.shadow) {
            if (isHorizontal) cubeShadowEl.style.transform = `translate3d(0px, ${swiperWidth / 2 + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(90deg) rotateZ(0deg) scale(${params.shadowScale})`;
            else {
                const shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
                const multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
                const scale1 = params.shadowScale;
                const scale2 = params.shadowScale / multiplier;
                const offset = params.shadowOffset;
                cubeShadowEl.style.transform = `scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${swiperHeight / 2 + offset}px, ${-swiperHeight / 2 / scale2}px) rotateX(-90deg)`;
            }
        }
        const zFactor = (browser.isSafari || browser.isWebView) && browser.needPerspectiveFix ? -swiperSize / 2 : 0;
        wrapperEl.style.transform = `translate3d(0px,0,${zFactor}px) rotateX(${swiper.isHorizontal() ? 0 : wrapperRotate}deg) rotateY(${swiper.isHorizontal() ? -wrapperRotate : 0}deg)`;
        wrapperEl.style.setProperty("--swiper-cube-translate-z", `${zFactor}px`);
    };
    const setTransition = (duration)=>{
        const { el, slides } = swiper;
        slides.forEach((slideEl)=>{
            slideEl.style.transitionDuration = `${duration}ms`;
            slideEl.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((subEl)=>{
                subEl.style.transitionDuration = `${duration}ms`;
            });
        });
        if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
            const shadowEl = el.querySelector(".swiper-cube-shadow");
            if (shadowEl) shadowEl.style.transitionDuration = `${duration}ms`;
        }
    };
    (0, _effectInitMjs.e)({
        effect: "cube",
        swiper,
        on,
        setTranslate,
        setTransition,
        recreateShadows,
        getEffectParams: ()=>swiper.params.cubeEffect,
        perspective: ()=>true,
        overwriteParams: ()=>({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: true,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: false,
                virtualTranslate: true
            })
    });
}

},{"../shared/effect-init.mjs":"h2i2x","../shared/utils.mjs":"jk3lb","@parcel/transformer-js/src/esmodule-helpers.js":"iy9MI"}],"c549g":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>EffectFlip);
var _createShadowMjs = require("../shared/create-shadow.mjs");
var _effectInitMjs = require("../shared/effect-init.mjs");
var _effectTargetMjs = require("../shared/effect-target.mjs");
var _effectVirtualTransitionEndMjs = require("../shared/effect-virtual-transition-end.mjs");
var _utilsMjs = require("../shared/utils.mjs");
function EffectFlip(_ref) {
    let { swiper, extendParams, on } = _ref;
    extendParams({
        flipEffect: {
            slideShadows: true,
            limitRotation: true
        }
    });
    const createSlideShadows = (slideEl, progress)=>{
        let shadowBefore = swiper.isHorizontal() ? slideEl.querySelector(".swiper-slide-shadow-left") : slideEl.querySelector(".swiper-slide-shadow-top");
        let shadowAfter = swiper.isHorizontal() ? slideEl.querySelector(".swiper-slide-shadow-right") : slideEl.querySelector(".swiper-slide-shadow-bottom");
        if (!shadowBefore) shadowBefore = (0, _createShadowMjs.c)("flip", slideEl, swiper.isHorizontal() ? "left" : "top");
        if (!shadowAfter) shadowAfter = (0, _createShadowMjs.c)("flip", slideEl, swiper.isHorizontal() ? "right" : "bottom");
        if (shadowBefore) shadowBefore.style.opacity = Math.max(-progress, 0);
        if (shadowAfter) shadowAfter.style.opacity = Math.max(progress, 0);
    };
    const recreateShadows = ()=>{
        // Set shadows
        swiper.params.flipEffect;
        swiper.slides.forEach((slideEl)=>{
            let progress = slideEl.progress;
            if (swiper.params.flipEffect.limitRotation) progress = Math.max(Math.min(slideEl.progress, 1), -1);
            createSlideShadows(slideEl, progress);
        });
    };
    const setTranslate = ()=>{
        const { slides, rtlTranslate: rtl } = swiper;
        const params = swiper.params.flipEffect;
        for(let i = 0; i < slides.length; i += 1){
            const slideEl = slides[i];
            let progress = slideEl.progress;
            if (swiper.params.flipEffect.limitRotation) progress = Math.max(Math.min(slideEl.progress, 1), -1);
            const offset = slideEl.swiperSlideOffset;
            const rotate = -180 * progress;
            let rotateY = rotate;
            let rotateX = 0;
            let tx = swiper.params.cssMode ? -offset - swiper.translate : -offset;
            let ty = 0;
            if (!swiper.isHorizontal()) {
                ty = tx;
                tx = 0;
                rotateX = -rotateY;
                rotateY = 0;
            } else if (rtl) rotateY = -rotateY;
            slideEl.style.zIndex = -Math.abs(Math.round(progress)) + slides.length;
            if (params.slideShadows) createSlideShadows(slideEl, progress);
            const transform = `translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            const targetEl = (0, _effectTargetMjs.e)(params, slideEl);
            targetEl.style.transform = transform;
        }
    };
    const setTransition = (duration)=>{
        const transformElements = swiper.slides.map((slideEl)=>(0, _utilsMjs.k)(slideEl));
        transformElements.forEach((el)=>{
            el.style.transitionDuration = `${duration}ms`;
            el.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((shadowEl)=>{
                shadowEl.style.transitionDuration = `${duration}ms`;
            });
        });
        (0, _effectVirtualTransitionEndMjs.e)({
            swiper,
            duration,
            transformElements
        });
    };
    (0, _effectInitMjs.e)({
        effect: "flip",
        swiper,
        on,
        setTranslate,
        setTransition,
        recreateShadows,
        getEffectParams: ()=>swiper.params.flipEffect,
        perspective: ()=>true,
        overwriteParams: ()=>({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: true,
                spaceBetween: 0,
                virtualTranslate: !swiper.params.cssMode
            })
    });
}

},{"../shared/create-shadow.mjs":"94z1n","../shared/effect-init.mjs":"h2i2x","../shared/effect-target.mjs":"eGDYf","../shared/effect-virtual-transition-end.mjs":"chf5C","../shared/utils.mjs":"jk3lb","@parcel/transformer-js/src/esmodule-helpers.js":"iy9MI"}],"94z1n":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "c", ()=>createShadow);
var _utilsMjs = require("./utils.mjs");
function createShadow(suffix, slideEl, side) {
    const shadowClass = `swiper-slide-shadow${side ? `-${side}` : ""}${suffix ? ` swiper-slide-shadow-${suffix}` : ""}`;
    const shadowContainer = (0, _utilsMjs.k)(slideEl);
    let shadowEl = shadowContainer.querySelector(`.${shadowClass.split(" ").join(".")}`);
    if (!shadowEl) {
        shadowEl = (0, _utilsMjs.c)("div", shadowClass.split(" "));
        shadowContainer.append(shadowEl);
    }
    return shadowEl;
}

},{"./utils.mjs":"jk3lb","@parcel/transformer-js/src/esmodule-helpers.js":"iy9MI"}],"7p7Y9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>EffectCoverflow);
var _createShadowMjs = require("../shared/create-shadow.mjs");
var _effectInitMjs = require("../shared/effect-init.mjs");
var _effectTargetMjs = require("../shared/effect-target.mjs");
var _utilsMjs = require("../shared/utils.mjs");
function EffectCoverflow(_ref) {
    let { swiper, extendParams, on } = _ref;
    extendParams({
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            scale: 1,
            modifier: 1,
            slideShadows: true
        }
    });
    const setTranslate = ()=>{
        const { width: swiperWidth, height: swiperHeight, slides, slidesSizesGrid } = swiper;
        const params = swiper.params.coverflowEffect;
        const isHorizontal = swiper.isHorizontal();
        const transform = swiper.translate;
        const center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
        const rotate = isHorizontal ? params.rotate : -params.rotate;
        const translate = params.depth;
        // Each slide offset from center
        for(let i = 0, length = slides.length; i < length; i += 1){
            const slideEl = slides[i];
            const slideSize = slidesSizesGrid[i];
            const slideOffset = slideEl.swiperSlideOffset;
            const centerOffset = (center - slideOffset - slideSize / 2) / slideSize;
            const offsetMultiplier = typeof params.modifier === "function" ? params.modifier(centerOffset) : centerOffset * params.modifier;
            let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
            let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
            // var rotateZ = 0
            let translateZ = -translate * Math.abs(offsetMultiplier);
            let stretch = params.stretch;
            // Allow percentage to make a relative stretch for responsive sliders
            if (typeof stretch === "string" && stretch.indexOf("%") !== -1) stretch = parseFloat(params.stretch) / 100 * slideSize;
            let translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
            let translateX = isHorizontal ? stretch * offsetMultiplier : 0;
            let scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier);
            // Fix for ultra small values
            if (Math.abs(translateX) < 0.001) translateX = 0;
            if (Math.abs(translateY) < 0.001) translateY = 0;
            if (Math.abs(translateZ) < 0.001) translateZ = 0;
            if (Math.abs(rotateY) < 0.001) rotateY = 0;
            if (Math.abs(rotateX) < 0.001) rotateX = 0;
            if (Math.abs(scale) < 0.001) scale = 0;
            const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
            const targetEl = (0, _effectTargetMjs.e)(params, slideEl);
            targetEl.style.transform = slideTransform;
            slideEl.style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
            if (params.slideShadows) {
                // Set shadows
                let shadowBeforeEl = isHorizontal ? slideEl.querySelector(".swiper-slide-shadow-left") : slideEl.querySelector(".swiper-slide-shadow-top");
                let shadowAfterEl = isHorizontal ? slideEl.querySelector(".swiper-slide-shadow-right") : slideEl.querySelector(".swiper-slide-shadow-bottom");
                if (!shadowBeforeEl) shadowBeforeEl = (0, _createShadowMjs.c)("coverflow", slideEl, isHorizontal ? "left" : "top");
                if (!shadowAfterEl) shadowAfterEl = (0, _createShadowMjs.c)("coverflow", slideEl, isHorizontal ? "right" : "bottom");
                if (shadowBeforeEl) shadowBeforeEl.style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
                if (shadowAfterEl) shadowAfterEl.style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
            }
        }
    };
    const setTransition = (duration)=>{
        const transformElements = swiper.slides.map((slideEl)=>(0, _utilsMjs.k)(slideEl));
        transformElements.forEach((el)=>{
            el.style.transitionDuration = `${duration}ms`;
            el.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((shadowEl)=>{
                shadowEl.style.transitionDuration = `${duration}ms`;
            });
        });
    };
    (0, _effectInitMjs.e)({
        effect: "coverflow",
        swiper,
        on,
        setTranslate,
        setTransition,
        perspective: ()=>true,
        overwriteParams: ()=>({
                watchSlidesProgress: true
            })
    });
}

},{"../shared/create-shadow.mjs":"94z1n","../shared/effect-init.mjs":"h2i2x","../shared/effect-target.mjs":"eGDYf","../shared/utils.mjs":"jk3lb","@parcel/transformer-js/src/esmodule-helpers.js":"iy9MI"}],"fiqcG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>EffectCreative);
var _createShadowMjs = require("../shared/create-shadow.mjs");
var _effectInitMjs = require("../shared/effect-init.mjs");
var _effectTargetMjs = require("../shared/effect-target.mjs");
var _effectVirtualTransitionEndMjs = require("../shared/effect-virtual-transition-end.mjs");
var _utilsMjs = require("../shared/utils.mjs");
function EffectCreative(_ref) {
    let { swiper, extendParams, on } = _ref;
    extendParams({
        creativeEffect: {
            limitProgress: 1,
            shadowPerProgress: false,
            progressMultiplier: 1,
            perspective: true,
            prev: {
                translate: [
                    0,
                    0,
                    0
                ],
                rotate: [
                    0,
                    0,
                    0
                ],
                opacity: 1,
                scale: 1
            },
            next: {
                translate: [
                    0,
                    0,
                    0
                ],
                rotate: [
                    0,
                    0,
                    0
                ],
                opacity: 1,
                scale: 1
            }
        }
    });
    const getTranslateValue = (value)=>{
        if (typeof value === "string") return value;
        return `${value}px`;
    };
    const setTranslate = ()=>{
        const { slides, wrapperEl, slidesSizesGrid } = swiper;
        const params = swiper.params.creativeEffect;
        const { progressMultiplier: multiplier } = params;
        const isCenteredSlides = swiper.params.centeredSlides;
        if (isCenteredSlides) {
            const margin = slidesSizesGrid[0] / 2 - swiper.params.slidesOffsetBefore || 0;
            wrapperEl.style.transform = `translateX(calc(50% - ${margin}px))`;
        }
        for(let i = 0; i < slides.length; i += 1){
            const slideEl = slides[i];
            const slideProgress = slideEl.progress;
            const progress = Math.min(Math.max(slideEl.progress, -params.limitProgress), params.limitProgress);
            let originalProgress = progress;
            if (!isCenteredSlides) originalProgress = Math.min(Math.max(slideEl.originalProgress, -params.limitProgress), params.limitProgress);
            const offset = slideEl.swiperSlideOffset;
            const t = [
                swiper.params.cssMode ? -offset - swiper.translate : -offset,
                0,
                0
            ];
            const r = [
                0,
                0,
                0
            ];
            let custom = false;
            if (!swiper.isHorizontal()) {
                t[1] = t[0];
                t[0] = 0;
            }
            let data = {
                translate: [
                    0,
                    0,
                    0
                ],
                rotate: [
                    0,
                    0,
                    0
                ],
                scale: 1,
                opacity: 1
            };
            if (progress < 0) {
                data = params.next;
                custom = true;
            } else if (progress > 0) {
                data = params.prev;
                custom = true;
            }
            // set translate
            t.forEach((value, index)=>{
                t[index] = `calc(${value}px + (${getTranslateValue(data.translate[index])} * ${Math.abs(progress * multiplier)}))`;
            });
            // set rotates
            r.forEach((value, index)=>{
                r[index] = data.rotate[index] * Math.abs(progress * multiplier);
            });
            slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
            const translateString = t.join(", ");
            const rotateString = `rotateX(${r[0]}deg) rotateY(${r[1]}deg) rotateZ(${r[2]}deg)`;
            const scaleString = originalProgress < 0 ? `scale(${1 + (1 - data.scale) * originalProgress * multiplier})` : `scale(${1 - (1 - data.scale) * originalProgress * multiplier})`;
            const opacityString = originalProgress < 0 ? 1 + (1 - data.opacity) * originalProgress * multiplier : 1 - (1 - data.opacity) * originalProgress * multiplier;
            const transform = `translate3d(${translateString}) ${rotateString} ${scaleString}`;
            // Set shadows
            if (custom && data.shadow || !custom) {
                let shadowEl = slideEl.querySelector(".swiper-slide-shadow");
                if (!shadowEl && data.shadow) shadowEl = (0, _createShadowMjs.c)("creative", slideEl);
                if (shadowEl) {
                    const shadowOpacity = params.shadowPerProgress ? progress * (1 / params.limitProgress) : progress;
                    shadowEl.style.opacity = Math.min(Math.max(Math.abs(shadowOpacity), 0), 1);
                }
            }
            const targetEl = (0, _effectTargetMjs.e)(params, slideEl);
            targetEl.style.transform = transform;
            targetEl.style.opacity = opacityString;
            if (data.origin) targetEl.style.transformOrigin = data.origin;
        }
    };
    const setTransition = (duration)=>{
        const transformElements = swiper.slides.map((slideEl)=>(0, _utilsMjs.k)(slideEl));
        transformElements.forEach((el)=>{
            el.style.transitionDuration = `${duration}ms`;
            el.querySelectorAll(".swiper-slide-shadow").forEach((shadowEl)=>{
                shadowEl.style.transitionDuration = `${duration}ms`;
            });
        });
        (0, _effectVirtualTransitionEndMjs.e)({
            swiper,
            duration,
            transformElements,
            allSlides: true
        });
    };
    (0, _effectInitMjs.e)({
        effect: "creative",
        swiper,
        on,
        setTranslate,
        setTransition,
        perspective: ()=>swiper.params.creativeEffect.perspective,
        overwriteParams: ()=>({
                watchSlidesProgress: true,
                virtualTranslate: !swiper.params.cssMode
            })
    });
}

},{"../shared/create-shadow.mjs":"94z1n","../shared/effect-init.mjs":"h2i2x","../shared/effect-target.mjs":"eGDYf","../shared/effect-virtual-transition-end.mjs":"chf5C","../shared/utils.mjs":"jk3lb","@parcel/transformer-js/src/esmodule-helpers.js":"iy9MI"}],"7PG6B":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>EffectCards);
var _createShadowMjs = require("../shared/create-shadow.mjs");
var _effectInitMjs = require("../shared/effect-init.mjs");
var _effectTargetMjs = require("../shared/effect-target.mjs");
var _effectVirtualTransitionEndMjs = require("../shared/effect-virtual-transition-end.mjs");
var _utilsMjs = require("../shared/utils.mjs");
function EffectCards(_ref) {
    let { swiper, extendParams, on } = _ref;
    extendParams({
        cardsEffect: {
            slideShadows: true,
            rotate: true,
            perSlideRotate: 2,
            perSlideOffset: 8
        }
    });
    const setTranslate = ()=>{
        const { slides, activeIndex, rtlTranslate: rtl } = swiper;
        const params = swiper.params.cardsEffect;
        const { startTranslate, isTouched } = swiper.touchEventsData;
        const currentTranslate = rtl ? -swiper.translate : swiper.translate;
        for(let i = 0; i < slides.length; i += 1){
            const slideEl = slides[i];
            const slideProgress = slideEl.progress;
            const progress = Math.min(Math.max(slideProgress, -4), 4);
            let offset = slideEl.swiperSlideOffset;
            if (swiper.params.centeredSlides && !swiper.params.cssMode) swiper.wrapperEl.style.transform = `translateX(${swiper.minTranslate()}px)`;
            if (swiper.params.centeredSlides && swiper.params.cssMode) offset -= slides[0].swiperSlideOffset;
            let tX = swiper.params.cssMode ? -offset - swiper.translate : -offset;
            let tY = 0;
            const tZ = -100 * Math.abs(progress);
            let scale = 1;
            let rotate = -params.perSlideRotate * progress;
            let tXAdd = params.perSlideOffset - Math.abs(progress) * 0.75;
            const slideIndex = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.from + i : i;
            const isSwipeToNext = (slideIndex === activeIndex || slideIndex === activeIndex - 1) && progress > 0 && progress < 1 && (isTouched || swiper.params.cssMode) && currentTranslate < startTranslate;
            const isSwipeToPrev = (slideIndex === activeIndex || slideIndex === activeIndex + 1) && progress < 0 && progress > -1 && (isTouched || swiper.params.cssMode) && currentTranslate > startTranslate;
            if (isSwipeToNext || isSwipeToPrev) {
                const subProgress = (1 - Math.abs((Math.abs(progress) - 0.5) / 0.5)) ** 0.5;
                rotate += -28 * progress * subProgress;
                scale += -0.5 * subProgress;
                tXAdd += 96 * subProgress;
                tY = `${-25 * subProgress * Math.abs(progress)}%`;
            }
            if (progress < 0) // next
            tX = `calc(${tX}px ${rtl ? "-" : "+"} (${tXAdd * Math.abs(progress)}%))`;
            else if (progress > 0) // prev
            tX = `calc(${tX}px ${rtl ? "-" : "+"} (-${tXAdd * Math.abs(progress)}%))`;
            else tX = `${tX}px`;
            if (!swiper.isHorizontal()) {
                const prevY = tY;
                tY = tX;
                tX = prevY;
            }
            const scaleString = progress < 0 ? `${1 + (1 - scale) * progress}` : `${1 - (1 - scale) * progress}`;
            /* eslint-disable */ const transform = `
        translate3d(${tX}, ${tY}, ${tZ}px)
        rotateZ(${params.rotate ? rtl ? -rotate : rotate : 0}deg)
        scale(${scaleString})
      `;
            /* eslint-enable */ if (params.slideShadows) {
                // Set shadows
                let shadowEl = slideEl.querySelector(".swiper-slide-shadow");
                if (!shadowEl) shadowEl = (0, _createShadowMjs.c)("cards", slideEl);
                if (shadowEl) shadowEl.style.opacity = Math.min(Math.max((Math.abs(progress) - 0.5) / 0.5, 0), 1);
            }
            slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
            const targetEl = (0, _effectTargetMjs.e)(params, slideEl);
            targetEl.style.transform = transform;
        }
    };
    const setTransition = (duration)=>{
        const transformElements = swiper.slides.map((slideEl)=>(0, _utilsMjs.k)(slideEl));
        transformElements.forEach((el)=>{
            el.style.transitionDuration = `${duration}ms`;
            el.querySelectorAll(".swiper-slide-shadow").forEach((shadowEl)=>{
                shadowEl.style.transitionDuration = `${duration}ms`;
            });
        });
        (0, _effectVirtualTransitionEndMjs.e)({
            swiper,
            duration,
            transformElements
        });
    };
    (0, _effectInitMjs.e)({
        effect: "cards",
        swiper,
        on,
        setTranslate,
        setTransition,
        perspective: ()=>true,
        overwriteParams: ()=>({
                watchSlidesProgress: true,
                virtualTranslate: !swiper.params.cssMode
            })
    });
}

},{"../shared/create-shadow.mjs":"94z1n","../shared/effect-init.mjs":"h2i2x","../shared/effect-target.mjs":"eGDYf","../shared/effect-virtual-transition-end.mjs":"chf5C","../shared/utils.mjs":"jk3lb","@parcel/transformer-js/src/esmodule-helpers.js":"iy9MI"}],"1LunN":[function() {},{}]},["jjTIW","jRErf"], "jRErf", "parcelRequireb67c")

//# sourceMappingURL=index.9b68b7ee.js.map