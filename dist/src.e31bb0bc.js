// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"sass/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./../images/icons/arrow1.svg":[["arrow1.9dff3af1.svg","images/icons/arrow1.svg"],"images/icons/arrow1.svg"],"./../images/icons/arrow2.svg":[["arrow2.38b2b4e9.svg","images/icons/arrow2.svg"],"images/icons/arrow2.svg"],"./../images/content/tablet/hero-bg-tab.png":[["hero-bg-tab.620a06da.png","images/content/tablet/hero-bg-tab.png"],"images/content/tablet/hero-bg-tab.png"],"./../images/content/tablet/hero-bg-tab@2x.png":[["hero-bg-tab@2x.87a89b87.png","images/content/tablet/hero-bg-tab@2x.png"],"images/content/tablet/hero-bg-tab@2x.png"],"./../images/content/desktop/hero-bg-desk.png":[["hero-bg-desk.443020b0.png","images/content/desktop/hero-bg-desk.png"],"images/content/desktop/hero-bg-desk.png"],"./../images/content/desktop/hero-bg-desc@2x.png":[["hero-bg-desc@2x.3f61307c.png","images/content/desktop/hero-bg-desc@2x.png"],"images/content/desktop/hero-bg-desc@2x.png"],"./../images/icons/advantage-icon3.svg":[["advantage-icon3.ab1ebf24.svg","images/icons/advantage-icon3.svg"],"images/icons/advantage-icon3.svg"],"./../images/icons/advantage-icon3-desc.svg":[["advantage-icon3-desc.b007d4a7.svg","images/icons/advantage-icon3-desc.svg"],"images/icons/advantage-icon3-desc.svg"],"./../images/icons/advantage-icon2.svg":[["advantage-icon2.0cf98d2e.svg","images/icons/advantage-icon2.svg"],"images/icons/advantage-icon2.svg"],"./../images/icons/advantage-icon2-desc.svg":[["advantage-icon2-desc.9fb13abe.svg","images/icons/advantage-icon2-desc.svg"],"images/icons/advantage-icon2-desc.svg"],"./../images/icons/advantage-icon1.svg":[["advantage-icon1.51c87941.svg","images/icons/advantage-icon1.svg"],"images/icons/advantage-icon1.svg"],"./../images/icons/advantage-icon1-desc.svg":[["advantage-icon1-desc.8a39d38f.svg","images/icons/advantage-icon1-desc.svg"],"images/icons/advantage-icon1-desc.svg"],"./../images/icons/campfire.svg":[["campfire.6dc7ae9c.svg","images/icons/campfire.svg"],"images/icons/campfire.svg"],"./../images/content/mobile/program-mob.png":[["program-mob.e6047ae3.png","images/content/mobile/program-mob.png"],"images/content/mobile/program-mob.png"],"./../images/content/mobile/program-mob@2x.png":[["program-mob@2x.139dc49c.png","images/content/mobile/program-mob@2x.png"],"images/content/mobile/program-mob@2x.png"],"./../images/content/tablet/program-tab.png":[["program-tab.d1deced8.png","images/content/tablet/program-tab.png"],"images/content/tablet/program-tab.png"],"./../images/content/tablet/program-tab@2x.png":[["program-tab@2x.f3325676.png","images/content/tablet/program-tab@2x.png"],"images/content/tablet/program-tab@2x.png"],"./../images/content/desktop/program-desk.png":[["program-desk.36c951af.png","images/content/desktop/program-desk.png"],"images/content/desktop/program-desk.png"],"./../images/content/desktop/program-desk@2x.png":[["program-desk@2x.0b7ca464.png","images/content/desktop/program-desk@2x.png"],"images/content/desktop/program-desk@2x.png"],"./../images/icons/checked.svg":[["checked.b238f6ae.svg","images/icons/checked.svg"],"images/icons/checked.svg"],"./../images/icons/fire.svg":[["fire.baeb22dc.svg","images/icons/fire.svg"],"images/icons/fire.svg"],"./../images/content/mobile/contacts-mob.webp":[["contacts-mob.222b2af3.webp","images/content/mobile/contacts-mob.webp"],"images/content/mobile/contacts-mob.webp"],"./../images/content/mobile/contacts-mob@2x.webp":[["contacts-mob@2x.b0401b07.webp","images/content/mobile/contacts-mob@2x.webp"],"images/content/mobile/contacts-mob@2x.webp"],"./../images/content/tablet/contacts-tab.webp":[["contacts-tab.a435de6b.webp","images/content/tablet/contacts-tab.webp"],"images/content/tablet/contacts-tab.webp"],"./../images/content/tablet/contacts-tab@2x.webp":[["contacts-tab@2x.a8ea15db.webp","images/content/tablet/contacts-tab@2x.webp"],"images/content/tablet/contacts-tab@2x.webp"],"./../images/content/desktop/contacts-desk.webp":[["contacts-desk.42be04e6.webp","images/content/desktop/contacts-desk.webp"],"images/content/desktop/contacts-desk.webp"],"./../images/content/desktop/contacts-desk@2x.webp":[["contacts-desk@2x.ab0296bb.webp","images/content/desktop/contacts-desk@2x.webp"],"images/content/desktop/contacts-desk@2x.webp"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"index.js":[function(require,module,exports) {
"use strict";

require("./sass/main.scss");

$(function () {
  $('.slider').slick({
    slidesToShow: 7,
    speed: 600,
    initialSlide: 0,
    asNavFor: ".comments-list",
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        initialSlide: 0
      }
    }]
  });
  $('.comments-list').slick({
    arrows: true,
    asNavFor: ".slider",
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false
      }
    }]
  });
});
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);

  function animOnScroll(params) {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;
      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (pageYOffset > animItemOffset - animItemPoint && pageYOffset < animItemOffset + animItemHeight) {
        animItem.classList.add('_active');
      } else {
        if (!animItem.classList.contains('_anim-no-hide')) {
          animItem.classList.remove('_active');
        }
      }
    }
  }

  function offset(el) {
    const rect = el.getBoundingClientRect(),
          scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
          scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft
    };
  }

  setTimeout(() => {
    animOnScroll();
  }, 400);
}

(() => {
  const refs = {
    openMobileModalBtn: document.querySelector('[burger]'),
    closeBurger1Btn: document.querySelector('[burger-1]'),
    closeBurger2Btn: document.querySelector('[burger-2]'),
    closeBurger3Btn: document.querySelector('[burger-3]'),
    closeBurger4Btn: document.querySelector('[burger-4]'),
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    openBackdropModalBtn: document.querySelector('[data-modal-open-2]'),
    modalMobile: document.querySelector('[data-menu]'),
    modal: document.querySelector('[data-modal]'),
    mod: document.getElementsByTagName('body')[0],
    burger: document.querySelector('[burger]'),
    logo: document.querySelector('[mobile-logo]')
  };
  refs.openMobileModalBtn.addEventListener('click', toggleModalMobile);
  refs.closeBurger1Btn.addEventListener('click', toggleModalMobile);
  refs.closeBurger2Btn.addEventListener('click', toggleModalMobile);
  refs.closeBurger3Btn.addEventListener('click', toggleModalMobile);
  refs.closeBurger4Btn.addEventListener('click', toggleModalMobile);
  refs.openBackdropModalBtn.addEventListener('click', modal);
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModalMobile() {
    refs.modalMobile.classList.toggle('is-open');
    refs.mod.classList.toggle('no-scrol');
    refs.burger.classList.toggle('burger-active');
    refs.logo.classList.toggle('mobile-menu-logo');
  }

  function modal() {
    refs.modalMobile.classList.toggle('is-open');
    refs.burger.classList.toggle('burger-active');
    refs.logo.classList.toggle('mobile-menu-logo');
    refs.modal.classList.toggle('is-hidden');
  }

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.mod.classList.toggle('no-scrol');
  }

  const anchors = document.querySelectorAll('a[href*="#"]');

  for (let anchor of anchors) {
    anchor.addEventListener("click", function (event) {
      event.preventDefault();
      const blockID = anchor.getAttribute('href');
      document.querySelector('' + blockID).scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  }
})();
},{"./sass/main.scss":"sass/main.scss"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59260" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map