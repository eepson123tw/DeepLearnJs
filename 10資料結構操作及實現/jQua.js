;(function (x) {
  const JQua = function (y) {
    return new JQua.fn.init(document.querySelector(y))
  }

  JQua.fn = JQua.prototype = {
    constructor: JQua,
    ver: '1.0.0',
    init: function (y) {
      this.elm = y
      return this
    }
  }

  JQua.extend = function () {
    console.log(123)
  }
  JQua.fn.extend = function () {
    console.log(123)
  }

  JQua.fn.init.prototype = JQua.fn

  if (x.$ === undefined) {
    x.$ = JQua
  }
})(window)

// console.dir($('h1').extend())
// console.log($('h2'))
// console.dir($)
