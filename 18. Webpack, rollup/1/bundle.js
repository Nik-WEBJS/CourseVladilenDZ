
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
'use strict';

var e = [],
    t = [];

function n(n, r) {
  if (n && "undefined" != typeof document) {
    var a,
        s = !0 === r.prepend ? "prepend" : "append",
        d = !0 === r.singleTag,
        i = "string" == typeof r.container ? document.querySelector(r.container) : document.getElementsByTagName("head")[0];

    if (d) {
      var u = e.indexOf(i);
      -1 === u && (u = e.push(i) - 1, t[u] = {}), a = t[u] && t[u][s] ? t[u][s] : t[u][s] = c();
    } else a = c();

    65279 === n.charCodeAt(0) && (n = n.substring(1)), a.styleSheet ? a.styleSheet.cssText += n : a.appendChild(document.createTextNode(n));
  }

  function c() {
    var e = document.createElement("style");
    if (e.setAttribute("type", "text/css"), r.attributes) for (var t = Object.keys(r.attributes), n = 0; n < t.length; n++) e.setAttribute(t[n], r.attributes[t[n]]);
    var a = "prepend" === s ? "afterbegin" : "beforeend";
    return i.insertAdjacentElement(a, e), e;
  }
}

var css = "text{\r\n    color: white;\r\n}\r\n\r\nbody{\r\n    background: black;\r\n}";
n(css,{});

var img = "data:image/png;base64,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";

console.log('hello World');
const h1HTMLElement = document.createElement('h1');
const imgHTMLElement = document.createElement('img');
h1HTMLElement.textContent = 'I love JavaScript';
imgHTMLElement.src = img;
document.body.append(h1HTMLElement);
document.body.append(imgHTMLElement);
