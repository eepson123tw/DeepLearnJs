

/*
Node
{ 
--- 12種節點
Node.ELEMENT_NODE 1
Node.ATTRIBUTE_NODE 	
Node.TEXT_NODE	3
Node.CDATA_SECTION_NODE Deprecated	4
Node.ENTITY_REFERENCE_NODE Deprecated	5
Node.ENTITY_NODE Deprecated	6
Node.PROCESSING_INSTRUCTION_NODE	7
Node.COMMENT_NODE	8
Node.DOCUMENT_NODE	9
Node.DOCUMENT_TYPE_NODE	10
Node.DOCUMENT_FRAGMENT_NODE	11
Node.NOTATION_NODE Deprecated
---
--- 节点的位置关系
Node 比较当前节点与任意文档中的另一个节点的位置关系
Node.DOCUMENT_POSITION_DISCONNECTED	1	不在同一文档中
Node.DOCUMENT_POSITION_PRECEDING	2	otherNode在node之前
Node.DOCUMENT_POSITION_FOLLOWING	4	otherNode在node之后
Node.DOCUMENT_POSITION_CONTAINS	8	otherNode包含node
Node.DOCUMENT_POSITION_CONTAINED_BY	16	otherNode被node包含
Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC	32	待定
---

--- 節點資訊
Node.firstChild  //属性返回树中节点的第一个子节点，如果节点是无子节点，则返回 null。
Node.lastChild  //属性返回树中节点的最後一个子节点，如果节点是无子节点，则返回 null。
Node.childNodes  //會回傳一個即時更新的動態集合（ NodeList）
Node.nextSibling // 返回其父节点的 childNodes 列表中紧跟在其后面的节点 
Node.nodeName  //會回傳目前節點名稱的字串。
  - document.nodeName // #document
Node.nodeType  //唯讀屬性表示了節點物件的類型。
  -  document.nodeType 9 (Node.DOCUMENT_NODE)
Node.nodeValue  //属性返回或设置当前节点的值(有的话)。
Node.ownerDocument //會回傳一個此節點所屬的的頂層 document 物件。#document
Node.parentElement  // 返回当前节点的父元素节点
Node.previousSibling //返回当前节点的前一个兄弟节点
Node.textContent // 屬性表示了節點或其後代的文字內容 (会获取所有元素的内容，会返回节点中的每一个元素，具有更好的性能)
  - document.body.textContent
---

Node.isConnected //返回 布尔值 (en-US) — 如果该节点与 DOM 树连接则返回 true, 否则返回 false。
Node.baseURI //返回一个节点的绝对基址 URL 


操作節點 (**同一個節點並不會同時出現在兩個地方**)
---

-插入-
Node.appendChild() 
  - fn 将一个节点附加到指定父节点的子节点列表的末尾处 *如果要插入的节点已存在，會将它从原先的位置移动到新的位置
Node.insertBefore()
  - var insertedNode = parentNode.insertBefore(newNode, referenceNode);
  - fn 方法將一個節點安插在參考節點之前，作為某個特定父節點之子節點。

-移除-  
Node.removeChild()
  - node.removeChild(child);
  -從 DOM 移除一個子節點，並傳回移除的節點。 可刪除被v8binding的 dom映射，立即無法使用且不可挽回。
Node.replaceChild()
  - parentNode.replaceChild(newChild, oldChild);
  - 用指定的节点替换当前节点的一个子节点，并返回被替换掉的节点。 
  - 可探討DOM binding 還在嗎?
-查詢-
Node.cloneNode() 
 - var dupNode = node.cloneNode(deep{true||false}); //如果为true,则该节点的所有后代节点也都会被克隆
  - fn 回傳一個呼叫此方法之節點物件的拷貝 
Node.contains() 
  - document.body.contains(node) ex. document.body.contains(document.querySelector('body') //true
  - 返回的是一个布尔值，来表示传入的节点是否为该节点的后代节点
Node.getRootNode()
  - node.getRootNode(options) ex. document.body.getRootNode()
  - 方法返回上下文中的根节点，如果 shadow DOM 可用，则对 shadow DOM 同样适用
Node.hasChildNodes()
  - element.hasChildNodes()  ex. document.body.hasChildNodes() //true
  - 方法返回一个布尔值,表明当前节点是否包含有子节点.
Node.isEqualNode()
  - var isEqualNode = node.isEqualNode(otherNode);
  - 可以判断两个节点是否相等。

-規範-
Node.normalize()
  - 方法将当前节点和它的后代节点”规范化“（normalized）。在一个"规范化"后的DOM树中，不存在一个空的文本节点，或者两个相邻的文本节点。

---



-------- 這啥小?

Node.compareDocumentPosition()
  - compareMask = node.compareDocumentPosition( otherNode )
  - 返回值為上方的POSITION_XXXX

Node.isDefaultNamespace()
  - result = node.isDefaultNamespace(namespaceURI)
  - 接受一个命名空间URI作为参数,如果该命名空间是当前节点的默认命名空间,则返回true,否则返回false.

Node.lookupNamespaceURI()
  - 返回当前节点上与指定命名空间前缀绑定的命名空间URI,如果没有,返回null,如果参数为null,返回默认的命名空间.

Node.lookupPrefix()
  - document.lookupPrefix('111') // null
  - 返回一个和指定命名空间URI绑定的命名空间前缀.如果没有,返回null. 如果有多个绑定的前缀, 返回的结果根据浏览器实现而定.


Node.isSameNode() <--已死去 判断两个节点是否是相同的节点,即指向同一个对象.


}
*/


console.dir(Node.prototype)
