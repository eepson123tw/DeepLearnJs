

/*
document
{ 

元素類的 document property
---
  document.defaultView // 指向 global object
  document.documentElement // 是 html 
  document.all //返回html集合 [html, head, meta, meta, meta, title, body, script, viewport: meta]  / HTMLAllCollection
  document.body // 是 body
  document.activeElement //是body
  document.head // 是 head
  document.links  // HTMLCollection // 所有 a 標籤的集合
  document.embeds  // HTMLCollection  // 所有 embeds 標籤的集合
  document.forms  // HTMLCollection  // 所有 forms 標籤的集合
  document.images  // HTMLCollection  // 所有 images 標籤的集合
  document.embeds //所有 embed 標籤的集合 /  HTMLCollection
  document.head  //回傳當前文件的 <head> (en-US) 元素。如果該文件有超過一個 <head> 元素，那只會回傳第一個 <head> 元素。


  document.childElementCount //返回表示给定元素的子元素数。
  document.childNodes //返回表示给定元素的子節點。 / NodeList
  document.firstChild //返回树中节点的第一个子节点 / 繼承自Node
  document.lastChild //返回树中节点的最後一个子节点 / 繼承自Node
  document.firstElementChild //返回对象的第一个子 元素 繼承自Element
  document.lastElementChild //返回对象的最後一个子 元素 繼承自Element
  document.children //Node的子elements /  HTMLCollection

---

location  对象的位置（URL),含有文檔的 URL 相關的信息，并提供了改變該 URL 和加載其他 URL 的方法。
----
  document.location
  document.location === window.location 接口位置相等
  document.location.href //url整個 
  document.location.protocol //返回URL協議
  document.location.host //返回域名(包含port) 192.168.31.121:8080
  document.location.hostname //返回域名 192.168.31.121
  document.location.port //返回port號
  document.location.pathname //返回URL中路徑部分 /06%20dom/webApis.html
  document.location.search  //返回URL参数包含(?)
  document.location.hash   // 返回標示符URL参数包含(#)
  document.location.origin // 返回頁面来源預名的標準形式
  document.location.assign // fn 加载给定URL的内容资源到这个Location对象所关联的对象上。
  document.location.reload // fn重仔頁面資源
  document.location.replace // fn 用給定的URl跳轉至該頁面，不會有紀錄
  document.location.toString // fn 返回一个DOMString，包含整个URL

  document.location.username //返回username <--功能已死
  document.location.password  //返回password <--功能已死
---

可設定功能類型
---
document.designMode // 控制整個文件是否能夠編輯 = "on" || "off"
document.dir // 文档的文字朝向 = 'ltr' || 'rtl'
document.cookie //获取并设置与当前文档相关联的 cookie
---

字符編碼
---
document.characterSet //返回當前文檔的字符编码 ex.UTF-8
document.charset //返回當前文檔的字符编码ex.UTF-8
---

URL
---
document.URL //返回當前頁面URL
document.documentURI //以字符串的形式返回文档的位置（location）
document.baseURI //返回一个节点的绝对基址 URL。 來自Node
---

當前文檔資訊
---
document.lastModified //返回一个字符串,其中包含了当前文档的最后修改日期和时间，對現在有 ajax 的網站來說沒用處了
document.fonts //属性接口返回文档的 FontFaceSet (內有方法，可以應用在加载新字体、检查已加载字体的加载状态)
document.fullscreenElement //返回当前文档中正在以全屏模式显示的Element节点,如果没有使用全屏模式,则返回null.
document.fullscreenEnabled //返回一个布尔值,表明浏览器是否支持全屏模式.
document.hidden //返回布尔值，表示页面是（true）否（false）隐藏 來自node
document.isConnected//返回 布尔值 (en-US) — 如果该节点与 DOM 树连接则返回 true, 否则返回 false。



document.currentScript // 属性返回当前正在运行的脚本所属的 <script> 元素。(只在脚本被解析后首次运行时有效)
document.contentType //返回當前資源的 media type ex.text/html
document.compatMode //返回當前文檔的渲染模式 CSS1Compat<--標準模式
document.doctype //返回当前文档关联的文档类型定义(DTD).
document.documentElement // 返回目前文件（document）中的根元素（Element）
document.implementation// 返回一个和当前文档相关联的DOMImplementation对象。
document.adoptedStyleSheets // 將由CSSStyleSheet定義的屬性應用到給定的DOM子樹
---

這啥小?
---
document.featurePolicy // 返回一個feature????
document.fragmentDirective // ??
---

嗚嗚嗚被淘汰
---
document.domain //属性获取/设置当前文档的原始域部分 <--功能已死
document.alinkColor // 返回或设置文档体内的活动链接的颜色。<--功能已死
document.bgColor // 获取/设置当前文档的背景颜色。<--功能已死
document.fgColor//用来获取或设置当前文档的前景色或者文本颜色 <--功能已死
document.linkColor // 用来获取和设置文档内链接元素(<a>)的颜色.
document.fullscreen //文档当前是否以全屏模式显示内容 <--功能已死
document.inputEncoding //返回當前文檔的字符编码<--功能已死
document.applets  // HTMLCollection // 所有 applets 對象 -->已死
document.anchors  // HTMLCollection // 所有 a 標籤的集合 -->已死
---

}
*/















