

/*
Element
{ 

Element.id   // id 属性表示元素的标识符，与全局属性 id 对应。
Element.tagName // 返回当前元素的标签名
Element.localName //  只读属性，返回本地名称的.
  - document.body.localName //body
Element.namespaceURI // 一个只读属性，它返回元素的命名空间，若该元素不在命名空间中则返回null .
Element.part // 表示元素的部分標識符（即使用part 屬性設置），返回為DOMTokenList.
Element.prefix //返回指定元素的命名空间前缀，如果未指定前缀，则返回null。

獲取元素資訊
---

-屬性

Element.attributes //把特定節點裡所有的屬性變成一個集合,然後回傳出來 // NamedNodeMap 並非一個陣列.attributes 是一個鍵/值的配對

Element.toggleAttribute()
  - Element.toggleAttribute(name [, force]);
  - 切换给定元素的某个布尔值属性的状态（如果属性不存在则添加属性，属性存在则移除属性）

Element.setAttribute() 
  - element.setAttribute(name, value);
  - 设置指定元素上的某个属性值。如果属性已经存在，则更新该值
Element.setAttributeNS()
  - element.setAttributeNS(namespace,name,value)
  - 添加一个新属性或更改具有给定命名空间和名称的一个属性的值。
Element.setAttributeNodeNS()
  - element.setAttributeNodeNS(attributeNode)
  -  可以给一个元素添加一个新的命名空间的属性节点


Element.getAttribute()
  - align = div1.getAttribute("align");
  - 函式會回傳該網頁元素的屬性。 如果該屬性不存在，其回傳值會是null或 "" (空字串);
Element.getAttributeNS()
  - 命名空间仅在 XML 文档中受支持
  - 返回具有指定命名空间和名称的属性的字符串值。如果命名属性不存在，则返回值将为 null 或 "" （空字符串）
Element.getAttributeNames()
  - let attributeNames = element.getAttributeNames();
  - 返回一个Array，该数组包含指定元素（Element）的所有属性名称，如果该元素不包含任何属性，则返回一个空数组。
Element.getAttributeNode()
  -var attrNode = element.getAttributeNode(attrName);
  - 返回指定元素的指定属性节点
Element.getAttributeNodeNS()
  -attributeNode = element.getAttributeNodeNS(namespace,nodeName)
  - document.body.getAttributeNodeNS('123','h2')
  -通过命名空间 URI 和名称来获取属性节点。


Element.hasAttribute()
  - element.hasAttribute(attName);
  - 返回一个布尔值，指示该元素是否包含有指定的属性（attribute）
Element.hasAttributes()
  - targetNode.hasAttributes()
  - 属性返回一个布尔值true或false,来表明当前元素节点是否有至少一个的属性(attribute).
Element.hasAttributeNS()
  - element.hasAttributeNS(namespace,localName)
  - 返回一个布尔值，指示该元素是否包含有指定的属性（attribute）


Element.removeAttribute()
  - element.removeAttribute(attrName);
  - 指定的元素中删除一个属性。
Element.removeAttributeNS()
  - element.removeAttributeNS(namespace,attrName);
  - 移除元素的指定属性
Element.removeAttributeNode()
  - element.removeAttributeNode(attributeNode)
  - 从当前的 element(元素节点) 删除指定的属性

-

-子元素
Element.firstElementChild //只读属性，返回对象的第一个子 元素, 如果没有子元素，则为null。
Element.lastElementChild //只读属性，返回对象的最後一个子 元素, 如果没有子元素，则为null。
Element.childElementCount //只读属性返回一个无符号长整型数字，表示给定元素的子元素数。
Element.children //一个只读属性，返回 一个Node的子elements ，是一个动态更新的 HTMLCollection。
Element.nextElementSibling // 返回当前元素在其父元素的子元素节点中的后一个元素节点,如果该元素已经是最后一个元素节点,则返回null
Element.previousElementSibling  //返回当前元素在其父元素的子元素节点中的前一个元素节点,如果该元素已经是第一个元素节点,则返回null
-

-CLASS 屬性
Element.classList //唯讀屬性代表了該元素所擁有之類別屬性（Class Attribute）的即時更新集－DOMTokenList。
Element.className  // 获取或设置指定元素的class属性的值。
-

Element.computedStyleMap()
  - document.body.computedStyleMap()
  - 返回一個 StylePropertyMapReadOnly 接口，它提供 CSS 聲明塊的只讀表示，它是 CSSStyleDeclaration 的替代方案
---

---元素狀態
Element.clientHeight // 會回傳元素內部高度（像素），包含 padding 但並未包含水平滾動條、border、margin。
Element.clientLeft // 表示一个元素的左边框的宽度，以像素表示。 不包括左外边距和左内边距
Element.clientTop //一个元素顶部边框的宽度（以像素表示）。不包括顶部外边距或内边距。clientTop 是只读的。
Element.clientWidth //表示元素的内部宽度，以像素计。该属性包括内边距 padding，但不包括边框 border、外边距 margin 和垂直滚动条（如果有的话）。
Element.getBoundingClientRect()
  - 返回元素的大小及其相对于视口的位置。
  - 如果是标准盒子模型，元素的尺寸等于width/height + padding + border-width的总和。
  - 如果box-sizing: border-box，元素的的尺寸等于 width/height。
Element.getClientRects()
  - 方法返回一个指向客户端中每一个盒子的边界矩形的矩形集合。
  - 这些属性值是相对于视口的top-left的。即使当表格的标题在表格的边框外面，该标题仍会被计算在内。
  - DOMRectList
---


--- 獲取element
Element.getElementsByClassName()
  - element.getElementsByClassName(names)
  - 返回一个即时更新的（live） HTMLCollection
  - 包含了所有拥有指定 class 的子元素
Element.getElementsByTagName() 
  - element.getElementsByTagName(tagName)
  - 返回一个动态的包含所有指定标签名的元素的HTML集合HTMLCollection。
  - 不包括元素自己
Element.getElementsByTagNameNS()
  - element.getElementsByTagNameNS(namespaceURI, localName)
  - 返回在指定命名空间内带有指定名称的动态HTML元素集合

Element.querySelector()
  - baseElement.querySelector(selectors)
  - 返回与指定的选择器组匹配的元素的后代的第一个元素。

Element.querySelectorAll()
  - 返回一个non-live的NodeList, 它包含所有元素的非活动节点，该元素来自与其匹配指定的CSS选择器组的元素。
  - baseElement.querySelectorAll(selectors);
---


--- 節點操作

Element.innerHTML // 屬性獲取或設置元素中包含的HTML或XML標記 
  - document.body.innerHTML || element.innerHTML = htmlString;

Element.outerHTML // 获取描述元素（包括其后代）的序列化HTML片段。它也可以设置为用从给定字符串解析的节点替换元素。
  

--插入--
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


--獲取資訊--
Element.closest() 
  - var closestElement = targetElement.closest(selectors)
  - 方法用来获取：匹配特定选择器且离当前元素最近的祖先元素
Element.matches()
  -  element.matches(selectorString);
  - selectorString 是个css选择器字符串.
  - 元素被指定的选择器字符串选择，返回true; 否则返回false。

--刪除--
Element.remove()
  - node.remove();
  - 把对象从它所属的 DOM 树中删除。

---



---動畫
  Element.animate()
  - 是一个创建新Animation的便捷方法，将它应用于元素，然后运行动画。它将返回一个新建的 Animation 对象实例
  - var animation = element.animate(keyframes, options); // keyFrames animation
  target.animate([
      { width: 0 },
      { width: `${afterWidth}px` },
    ],
    {
      duration: textAfterLength * 100,
      easing: `steps(${textAfterLength})`
    })

  Element.getAnimations()
  - animations = Element.getAnimations(options);
  - 返回影响此元素或计划在将来这样做的所有 Animation 对象的数组。它也可以选择为后代元素返回 Animation 对象。
---

---copy&paste {還須研究,資料很少}
Element.beforecopy
  - <ELEMENT beforecopy="handler">
  - document.addEventListener ("beforecopy", handler, useCapture);
  - 將項目發送到剪貼板之前
  - 添加自己的頁腳的站點很有用，例如 CNET 在末尾添加文章。或者想要轉換 URL 的地方。
Element.onbeforecut
  - 在從文檔中剪切選擇之前發生，並提供啟用剪切菜單項的可能性。
  - <ELEMENT onbeforecut="handler">
  - document.addEventListener ("beforecut", handler, useCapture);
Element.onbeforepaste
  - 在剪貼板的內容粘貼到文檔之前發生，並提供啟用“粘貼”菜單項的可能性
  - <ELEMENT onbeforepaste="handler">
  - document.addEventListener ("onbeforepaste", handler, useCapture);
---

--- 效能
  elementTiming
  -目的是讓 Web 開發人員或分析工具能夠測量頁面上關鍵元素的渲染時間，比起 LCP ，我們能夠自己來定義關鍵元素，這正是Element Timing 的最大魅力。
​   -Element Timing 支援的元素有：
    - <img> 元素
    - <svg> 中的 <img> 元素
    - <video> 中的 poster image
    - 擁有 background-image 的元素
    - 一組文字節點
  - https://juejin.cn/post/7076718319461466148
---

---shadow    
Element.slot //会返回已插入元素所在的Shadow DOM slot的名称
Element.shadowRoot  
  - shadowroot = element.shadowRoot;
  - 只读属性，表示元素挂载的shadow root
Element.attachShadow()
  - var shadowroot = element.attachShadow(shadowRootInit);
  - 方法给指定的元素挂载一个Shadow DOM，并且返回对 ShadowRoot 的引用。
---

---aria 系列
ElementInternals.ariaAutoComplete // 屬性指示輸入文本是否可以觸發顯示一個或多個對組合框、搜索框或文本框的用戶預期值的預測，並指定在做出預測時如何呈現預測。
  -[Exception: TypeError: Illegal invocation at Element.<anonymous> (<anonymous>:1:29)]  //是防止 亂綁定 然後調用方法 會提示的錯誤
console.dir(Object.keys(Element.prototype).filter(d=>d.includes('aria'))) //38個可以自己查
---

--- 指针
Element.hasPointerCapture()
  - 方法检查调用它的元素是否具有由给定指针 ID 标识的指针的指针捕获。
  - 如果元素确实有指针捕获，则为 true ,否则为 false 。
Element.releasePointerCapture()
  - （停止）先前為特定指針設置的指針捕獲
Element.setPointerCapture()
  - 用于将特定元素指定为未来指针事件的捕获目标。指针的后续事件将以捕获元素为目标，直到捕获被释放（通过)
Element.requestPointerLock() 
  - 允许您异步地请求将鼠标指针锁定在指定元素上。
---

--- 滾動
Element.scrollLeft // 可以读取或设置元素滚动条到元素左边的距离。
Element.scrollWidth // 元素内容宽度的一种度量，包括由于overflow溢出而在屏幕上不可见的内容。
Element.scrollTop  // 可以获取或设置一个元素的内容垂直滚动的像素数 
  - **一个元素的 scrollTop 值是这个元素的内容顶部（卷起来的）到它的视口可见内容（的顶部）的距离的度量。


Element.scrollTo()
  - element.scrollTo(x-coord, y-coord) || element.scroll(options)
  - 可以使界面滚动到给定元素的指定坐标位置

Element.scroll()
  - element.scroll(x-coord, y-coord) || element.scroll(options)
  - 用于在给定的元素中滚动到某个特定坐标的 Element 接口
Element.scrollBy()
  - element.scrollBy(x-coord, y-coord) || element.scroll(options)
  - 使得元素滚动一段特定距离的 Element 接口
Element.scrollIntoView()
  - 会滚动元素的父容器，使被调用scrollIntoView()的元素对用户可见。
Element.scrollIntoViewIfNeeded()
  - 用来将不在浏览器窗口的可见区域内的元素滚动到浏览器窗口的可见区域。
  
---
--- 螢幕相關
Element.onfullscreenchange
  - targetDocument.onfullscreenchange = fullscreenChangeHandler;
  - 元素过渡到或过渡到全屏模式时触发的全屏更改事件的事件处理程序。
Element.onfullscreenerror
  - targetElement.onfullscreenerror = fullscreenErrorHandler;
  - 在Element 过渡到或退出全屏模式发生错误后处理事件fullscreenerror (en-US)的事件处理程序。

Element.requestFullscreen() 
  - var Promise = Element.requestFullscreen(options);
  - 用于发出异步请求使元素进入全屏模式
---

---事件類
onsearch //事件在用户按下"ENTER（回车）" 按键或点击 type="search" 的 <input> 元素的 "x(搜索)" 按钮时触发。

---

---- 這是啥?
Element.attributeStyleMap
Element.getInnerHTML
Element.onwebkitfullscreenchange
Element.onwebkitfullscreenerror
Element.webkitMatchesSelector: ƒ webkitMatchesSelector()
Element.webkitRequestFullScreen: ƒ webkitRequestFullScreen()
Element.webkitRequestFullscreen: ƒ webkitRequestFullscreen()

}
*/


console.dir(Element.prototype)
console.dir(document.body.outerHTML )