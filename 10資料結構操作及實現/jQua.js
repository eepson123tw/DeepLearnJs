;(function (x) {
  const JQua = function (y) {
    return JQua.fn.init(document.querySelector(y))
  }

  JQua.fn = JQua.prototype = {
    constructor: JQua,
    ver: '1.0.0',
    init: function (y) {
      this.elm = y
      return this
    }
  }

  JQua.extend = function () {}
  JQua.fn.extend = function () {}

  JQua.fn.init.prototype = JQua.fn

  if (x.$ === undefined) {
    x.$ = JQua
  }
})(window)

console.log($('h1'))
console.log($('h2'))
// console.dir($)
