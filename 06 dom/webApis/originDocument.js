/*
Document
{ 

documentObject.xmlStandalone
  - 设置或返回文档是否为 standalone

Document.readyState
  -  屬性描述文件的讀取狀態

Document.title
  - 文檔標題

Document.timeline
  - 只读属性表示当前文档的默认时间轴

Document.webkitHidden 
  - 返回document的可见性

Document.visibilityState
  - 返回document的可见性, 即当前可见元素的上下文环境. 由此可以知道当前文档(即为页面)是在背后, 或是不可见的隐藏的标签

Document.scripts
  - 返回一个HTMLCollection对象,包含了当前文档中所有<script>元素的集合.

Document.write() 
  - document.write(markup);
  - 方法将一个文本字符串写入一个由 document.open() 打开的文档流（document stream）。

Document.writeln()
  - document.writeln("<p>enter password:</p>");
  - 向文档中写入一串文本，并紧跟着一个换行符。

Document.referrer
  -  返回的是一个 URI  

Document.wasDiscarded
  - 先前的网页是否被丢弃了

Document.activeElement // 只读属性，用来返回当前在DOM或者shadow DOM树中处于聚焦状态的Element
  - 没有焦点元素，会返回 <body> 或者 null

Document.styleSheets
  - 返回 CSSStyleSheet 物件的 StyleSheetList

Document.scrollingElement
  - 返回滚动文档的 Element 对象的引用,通常是 document.documentElement

Document.requestStorageAccess()
  - 返回一個 Promise，該 Promise 解析是否授予了對第一方存儲的訪問許可權，如果訪問被拒絕，則拒絕該承諾。

Document.adoptNode() 
  - node = document.adoptNode(externalNode);
  - 从其他的document文档中获取一个节点。 该节点以及它的子树上的所有节点都会从原文档删除 

Document.open()
  - 指定的名称将指定的资源加载到浏览器上下文

Document.close()
  - 用于结束由 对文档的 Document.write() 写入操作

Document.evaluate()
  - 传入的 XPath (en-US) 表达式以及其他参数，返回一个 XPathResult (en-US) 对象。

Document.webkitFullscreenEnabled
  - 全屏啟用”屬性指示全屏模式是否可用。

Document.webkitIsFullScreen
  - 是否在全屏模式。

Document.webkitFullscreenElement
  - 返回当前文档中正在以全屏模式显示的Element节点

Document.exitFullscreen()
  - 用于让当前文档退出全屏模式
Document.webkitCancelFullScreen()
  - 用于让当前文档退出全屏模式

Document.pictureInPictureEnabled
  - 畫中畫模式是否可用

Document.pictureInPictureElement
  - 返回當前在此文檔中以畫中畫模式顯示的元素

Document.exitPictureInPicture（）
  - 將此文檔中包含的當前浮動的視頻從畫中畫模式中取出，從而還原螢幕的先前狀態。


Document.pointerLockElement
  - 鼠标事件中当目标被锁定时的元素集和

Document.exitPointerLock()
  - 方法可异步的解锁鼠标



Document.hasFocus()
  - 返回一个 Boolean，表明当前文档或者当前文档内的节点是否获得了焦点。

Document.hasStorageAccess()
  - 返回了一个Promise来判断该文档是否有访问第一方储存的权限。

Document.importNode()
  - var node = document.importNode(externalNode, deep);
  - 将外部文档的一个节点拷贝一份,然后可以把这个拷贝的节点插入到当前文档中.


Document.queryCommandEnabled()  // 可查询浏览器中指定的编辑指令是否可用
  - var flg = document.queryCommandEnabled("SelectAll");

---shadow  
DocumentOrShadowRoot.elementFromPoint()
  - var element = document.elementFromPoint(x, y);
  - 返回给定坐标点下最上层的 element 元素。 
DocumentOrShadowRoot.elementsFromPoint()
  -var elements = document.elementsFromPoint(x, y);
  - 返还在特定坐标点下的HTML元素数组。
---

--- Range 物件

Document.createRange()
  -  Range 物件。(可用來當富文本切割)
  - var range = document.createRange();
    range.setStart(startNode, startOffset);
    range.setEnd(endNode, endOffset);

Document.caretRangeFromPoint()
  - var range = document.caretRangeFromPoint(float x, float y);
  - 返回一个 Range 对象（指定坐标的文档片段）。
---

--- 事件函數
Object.keys(Document.prototype).filter((d)=> /^[on]/.test(d)) //108
---



--- 創建類(Dom/元素/comment/event)

Document.createAttribute()
  - attribute = document.createAttribute(name)
  - 创建并返回一个新的属性节点

Document.createElement()
  - document.createElement(tagName[, options]);
  - 创建一个由标签名称 tagName 指定的 HTML 元素。如果用户代理无法识别 tagName，则会生成一个未知 HTML 元素 HTMLUnknownElement。

Document.createDocumentFragment()
  - let fragment = document.createDocumentFragment();
  - 创建一个新的空白的文档片段，文档片段存在于内存中，并不在DOM树中，
  - 所以将子元素插入到文档片段时不会引起页面回流（对元素位置和几何上的计算）。因此，使用文档片段通常会带来更好的性能。

Document.createTextNode()
  - var text = document.createTextNode(data);
  - 創建一個新的文字節點.
 
Document.createTreeWalker()
  - treeWalker = document.createTreeWalker(root, whatToShow, filter, entityReferenceExpansion);
  - 能建立一個 TreeWalker (en-US) 物件並傳回. 


Document.createElementNS()
  - document.createElementNS(namespaceURI, qualifiedName[, options])
  - 创建一个具有指定的命名空间URI和限定名称的元素
  

Document.createExpression()
  - 编译生成一个 XPathExpression ,可以用来多次的执行.


Document.createComment()
  - var commentNode = document.createComment(data)
  - 用来创建并返回一个注释节点.

Document.createEvent(type)
  - 創建一個事件對象
  - type KeyboardEvent MouseEvent PageTransitionEvent PopStateEvent ProgressEvent StorageEvent TouchEvent TransitionEvent ...

Document.createNodeIterator()
  - 返回一个新的 NodeIterator 对象。
  - https://developer.mozilla.org/zh-CN/docs/Web/API/Document/createNodeIterator

Document.createProcessingInstruction()
  - 创建一个新的处理指令节点

Document.createCDATASection()
  - var CDATASectionNode = document.createCDATASection(data);
  - 创建并返回一个新的 CDATA 片段节点。

Document.createNSResolver()
  - 创建一个 XPathNSResolver

---

--- 獲取元素
Document.getElementById()
  - document.getElementById(id);
  - 返回一个匹配特定 ID的元素.

Document.getElementsByClassName()
  - document.getElementsByClassName(names);
  - 返回一个包含了所有指定类名的子元素的类数组对象。

Document.getElementsByName()
  -  document.getElementsByName(name)
  - 返回一个在 (X)HTML document的节点列表集合。

Document.getElementsByTagName()
  -  document.getElementsByTagName(name);
  - 返回一个包括所有给定标签名称的元素的HTML集合HTMLCollection。

Document.getElementsByTagNameNS()
  - 返回带有指定名称和命名空间的元素集合。

Document.getSelection()
  - 返回一個 Selection 物件，該物件表示用戶選擇的文字範圍或插入符號的當前位置

---




----可參考 Element.js
Document.append() 
Document.querySelector()
Document.querySelectorAll()
Document.prepend()   // 跟Element的很像
Document.getAnimations（） // 跟Element的很像
Document.replaceChildren() // 跟Element的很像
----
---- 詳細 document.js 有說明
Document.URL 
Document.applets 
Document.all 
Document.body 
Document.alinkColor 
Document.anchors 
Document.bgColor 
Document.characterSet
Document.charset
Document.childElementCount
Document.children
Document.compatMode
Document.contentType
Document.cookie
Document.currentScript
Document.defaultView
Document.designMode
Document.dir
Document.doctype
Document.documentElement
Document.documentURI
Document.domain
Document.embeds
Document.featurePolicy
Document.fgColor 
Document.firstElementChild 
Document.fonts 
Document.forms 
Document.fragmentDirective 
Document.fullscreen 
Document.fullscreenElement 
Document.fullscreenEnabled 
Document.head 
Document.hidden 
Document.images 
Document.implementation 
Document.inputEncoding 
Document.lastElementChild 
Document.lastModified 
Document.linkColor 
Document.links 

---



--- 已死
Document.xmlEncoding
Document.captureEvents() -->已死
Document.clear() //早期版本的Mozilla中清除整个指定文档
Document.execCommand() // 作為操控目前可編輯區域的指令
Document.Plugin  //插件接口提供有关浏览器
Document.queryCommandState() //返回 指定命令 在对象内的状态码
Document.queryCommandSupported() //确定浏览器是否支持指定的编辑指令
Document.queryCommandValue
Document.releaseEvents()
Document.rootElement
Document.vlinkColor
Document.xmlVersion


--- 未知
Document adoptedStyleSheets  
Document.createAttributeNS
Document.queryCommandIndeterm(String command)
Document.Symbol.toStringTag 是一个内置 symbol，它通常作为对象的属性键使用
Document.Symbol.unscopables 指用于指定对象值，其对象自身和继承的从关联对象的 with 环境绑定中排除的属性名称。
---
}
*/







console.dir(Document.prototype)
console.log(document.webkitIsFullScreen);
