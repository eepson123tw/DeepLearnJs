/*
{

---查驗文檔

Document.readyState
  -  屬性描述文件的讀取狀態

Document.title
  - 文檔標題

Document.visibilityState
  - 返回document的可见性, 即当前可见元素的上下文环境. 由此可以知道当前文档(即为页面)是在背后, 或是不可见的隐藏的标签

----



---寫文檔
Document.write() 
  - document.write(markup);
  - 方法将一个文本字符串写入一个由 document.open() 打开的文档流（document stream）。
---

--- 全頻相關
Document.webkitFullscreenEnabled
  - 全屏啟用”屬性指示全屏模式是否可用。
Document.webkitIsFullScreen
  - 是否在全屏模式。
Document.exitFullscreen()
  - 用于让当前文档退出全屏模式

document.fullscreenElement //返回当前文档中正在以全屏模式显示的Element节点,如果没有使用全屏模式,则返回null.
document.fullscreenEnabled //返回一个布尔值,表明浏览器是否支持全屏模式.
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
---



--- 獲取元素資訊

Node.nodeType  //唯讀屬性表示了節點物件的類型。
  -  document.nodeType 9 (Node.DOCUMENT_NODE)

Node.previousSibling //返回当前节点的前一个兄弟节点
Element.nextElementSibling // 返回当前元素在其父元素的子元素节点中的后一个元素节点,如果该元素已经是最后一个元素节点,则返回null
Element.previousElementSibling  //返回当前元素在其父元素的子元素节点中的前一个元素节点,如果该元素已经是第一个元素节点,则返回null
Element.classList //唯讀屬性代表了該元素所擁有之類別屬性（Class Attribute）的即時更新集－DOMTokenList。
Element.className  // 获取或设置指定元素的class属性的值。

Element.innerHTML // 屬性獲取或設置元素中包含的HTML或XML標記 


Element.getBoundingClientRect()
  - 返回元素的大小及其相对于视口的位置。
  - 如果是标准盒子模型，元素的尺寸等于width/height + padding + border-width的总和。
  - 如果box-sizing: border-box，元素的的尺寸等于 width/height。


Element.querySelector()
  - baseElement.querySelector(selectors)
  - 返回与指定的选择器组匹配的元素的后代的第一个元素。

Element.querySelectorAll()
  - 返回一个non-live的NodeList, 它包含所有元素的非活动节点，该元素来自与其匹配指定的CSS选择器组的元素。
  - baseElement.querySelectorAll(selectors);

Node.cloneNode() 
 - var dupNode = node.cloneNode(deep{true||false}); //如果为true,则该节点的所有后代节点也都会被克隆
  - fn 回傳一個呼叫此方法之節點物件的拷貝 
Node.contains() 
  - document.body.contains(node) ex. document.body.contains(document.querySelector('body') //true
  - 返回的是一个布尔值，来表示传入的节点是否为该节点的后代节点 


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


Element.getAttribute()
  - align = div1.getAttribute("align");
  - 函式會回傳該網頁元素的屬性。 如果該屬性不存在，其回傳值會是null或 "" (空字串);
Element.getAttributeNS()
  - 命名空间仅在 XML 文档中受支持
  - 返回具有指定命名空间和名称的属性的字符串值。如果命名属性不存在，则返回值将为 null 或 "" （空字符串）
Element.getAttributeNames()
  - let attributeNames = element.getAttributeNames();
  - 返回一个Array，该数组包含指定元素（Element）的所有属性名称，如果该元素不包含任何属性，则返回一个空数组。

Element.hasAttribute()
  - element.hasAttribute(attName);
  - 返回一个布尔值，指示该元素是否包含有指定的属性（attribute）

---


--- 設定元素

Element.attributes //把特定節點裡所有的屬性變成一個集合,然後回傳出來 // NamedNodeMap 並非一個陣列.attributes 是一個鍵/值的配對

Element.toggleAttribute()
  - Element.toggleAttribute(name [, force]);
  - 切换给定元素的某个布尔值属性的状态（如果属性不存在则添加属性，属性存在则移除属性）

Element.setAttribute() 
  - element.setAttribute(name, value);
  - 设置指定元素上的某个属性值。如果属性已经存在，则更新该值


Element.before()
  - child.before(span);
  - 方法可以在ChildNode这个节点的父节点中插入一些列的 Node 或者 DOMString 对象，
  - 位置就是在ChildNode节点的前面，DOMString 对象其实和 Text节点一样的方式来完成插入的。

Element.after() 
  - after(... nodes)
  - 方法会在其父节点的子节点列表中插入一些 Node 或 DOMString 对象。插入位置为该节点之后。DOMString 对象会被以 Text 的形式插入。
  
Element.append()
  - parent.append(p);
  - 在 Element的最后一个子节点之后插入一组 Node 对象或 DOMString 对象。
  - 没有返回值, Node.appendChild() 返回追加對象

Element.prepend()
  - Element.prepend((Node or DOMString)... nodes);
  - 在父节点的第一个子节点之前插入一系列Node对象或者DOMString对象。
  

Element.insertAdjacentElement()
  - element.insertAdjacentElement(position, element);
  - activeElem.insertAdjacentElement('afterend',div)
  - 将一个给定的元素节点插入到相对于被调用的元素的给定的一个位置。
  'beforebegin': 在该元素本身的前面.
  'afterbegin':只在该元素当中, 在该元素第一个子孩子前面.
  'beforeend':只在该元素当中, 在该元素最后一个子孩子后面.
  'afterend': 在该元素本身的后面.

Element.insertAdjacentHTML()
  -insertAdjacentHTML() 把傳入的字串解析成 HTML 或 XML，並把該節點插入到 DOM 樹指定的位置。
  -它不會重新解析被使用的元素，因此他不會破壞該元素裡面原有的元素。
  - element.insertAdjacentHTML(position, text);
  - position like top
  - d1.insertAdjacentHTML('afterend', '<div id="two">two</div>');

Element.insertAdjacentText()
  - 将一个给定的文本节点插入在相对于被调用的元素给定的位置。
  - element.insertAdjacentText(position, element);
  - position like top 
  - para.insertAdjacentText('afterbegin',textInput.value);

Element.replaceChildren()
  - Element.replaceChildren(...nodesOrDOMStrings)
  - 将一个 Node 的后代替换为指定的后代集合。这些新的后代可以为 DOMString 或 Node 对象

Element.replaceWith()
  - child.replaceWith(span);
  - Node 对象或者 DOMString 对象，替换了该节点父节点下的子节点 。

----




---移除

Node.removeChild()
  - node.removeChild(child);
  -從 DOM 移除一個子節點，並傳回移除的節點。 可刪除被v8binding的 dom映射，立即無法使用且不可挽回。

Node.replaceChild()
  - parentNode.replaceChild(newChild, oldChild);
  - 用指定的节点替换当前节点的一个子节点，并返回被替换掉的节点。 
  - 可探討DOM binding 還在嗎?


Element.remove()
  - node.remove();
  - 把对象从它所属的 DOM 树中删除。

Element.removeAttribute()
  - element.removeAttribute(attrName);
  - 指定的元素中删除一个属性。

----





location  对象的位置（URL),含有文檔的 URL 相關的信息，并提供了改變該 URL 和加載其他 URL 的方法。
----
  document.location
  document.location === window.location 接口位置相等
  document.location.href //url整個 
  document.location.host //返回域名(包含port) 192.168.31.121:8080
  document.location.search  //返回URL参数包含(?)
  document.location.hash   // 返回標示符URL参数包含(#)。
  document.location.reload // fn重仔頁面資源
  document.location.replace // fn 用給定的URl跳轉至該頁面，不會有紀錄
---


可設定功能類型
---
document.designMode // 控制整個文件是否能夠編輯 = "on" || "off"
document.dir // 文档的文字朝向 = 'ltr' || 'rtl'
---


}
*/