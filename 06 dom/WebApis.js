/* 

    重要作業 手動整理API


    合格的資深前端工程師，一輩子中要整理過一次所有宿主環境的 APIs
    唯有透過整理、測試、歸納 -> 才能形成自己的知識體系
    讓自己在與人交流時，清楚知道講的是什麼？怎麼用？分類屬於什麼？趨勢？...等
    自信的說出論點，而不是瞎說

    這個方式對於其他的程式語言也受用，要精通一門語言就要對其：執行環境、運行時、APIs 有清晰的認識
    不需要背這些 APIs、而是透過整理過一遍，有印象 
    
 */



// 瀏覽器 Web APIs 整理

/* 

    方法如下：
        １． 從 Window 的屬性中找到 API 名稱
        ２． 查 MDN 、 Google，找出 API 所在的標準
        ３． 閱讀標準，手工或者用代碼整理出標準中包含的API
        ４． 用代碼在 Window 的屬性中過濾掉標準中涉及的API

    重複這個過程，可以找到所有的 API 對應的標準與使用方式


*/


// 列出所有掛載在 Globla Object 上的方法

Object.getOwnPropertyNames(window) // 一千多..會包含使用者本地裝的外掛..




{ // 移除 ECMA 262 定義的  JS native Api
    var js = new Set()
    var objects = ["BigInt", "BigInt64Array", "BigUint64Array", "Infinity", "NaN", "undefined", "eval", "isFinite",
        "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent",
        "Array", "Date", "RegExp", "Promise", "Proxy", "Map", "WeakMap", "Set", "WeakSet", "Function",
        "Boolean", "String", "Number", "Symbol", "Object", "Error", "EvalError", "RangeError", "ReferenceError",
        "SyntaxError", "TypeError", "URIError", "ArrayBuffer", "SharedArrayBuffer", "DataView", "Float32Array",
        "Float64Array", "Int8Array", "Int16Array", "Int32Array", "Uint8Array", "Uint16Array", "Uint32Array",
        "Uint8ClampedArray", "Atomics", "JSON", "Math", "Reflect", "escape", "unescape"
    ]
    objects.forEach(o => js.add(o))
    var names = Object.getOwnPropertyNames(window)
    names = names.filter(e => !js.has(e))
    console.log(names);
}


// 取出繼承自 Node 
node = names.filter(e => {
    try {
        return (window[e].prototype instanceof Node)
    } catch (err) { return false }
})
// 158 個



// 取出繼承自 Element 
var element = names.filter(e => {
    try {
        return (window[e].prototype instanceof Element)
    } catch (err) { return false }
})
// 145 個

// 取出繼承自 Node 且非 Element
var notElement = node.filter(e => {
    try {
        return !(window[e].prototype instanceof Element)
    } catch (err) { return true }
})

// 13 個

var htmlEle = element.filter(e => {
    try {
        return (window[e].prototype instanceof HTMLElement)
    } catch (err) { return false }
})

// 繼承自 Event
var  eventTarget = names.filter(e => {
    try {
        return (window[e].prototype instanceof EventTarget)
    } catch (err) { return false }
})
//241個


// media相關
var  mediaEle = names.filter(e => {
    try {
        return (window[e].prototype instanceof HTMLMediaElement)
    } catch (err) { return false }
})
//3個

var documentEle = names.filter(e => {
    try {
        return (window[e].prototype instanceof Document)
    } catch (err) { return false }
})
// 2個
console.log(documentEle);

const Map = {
    node,
    element,
    notElement,
    htmlEle,
}

// console.log(Map);