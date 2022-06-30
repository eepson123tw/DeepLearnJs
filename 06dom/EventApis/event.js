/*
{

Event.target - 对事件原始目标的引用，这里的原始目标指最初派发（dispatch）事件时指定的目标。

Event.timeStamp - 事件创建时的时间戳（精度为毫秒）。**不同的浏览器中，对此时间戳的定义也有所不同

Event.type - 事件的类型

Event.bubbles - 布林值，表示事件是否會向上冒泡傳遞;

Event.cancelBubble
-由於歷史性因素，此屬性的效果等同於 stopPropagation() 方法。若在事件處理器回傳前設定此值為 true，可阻止事件繼續向上冒泡傳遞。

Event.cancelable - 布林值，表示事件是否能被取消。

Event.composed - 布林值，表示事件是否可以穿过 Shadow DOM 和常规 DOM 之间的隔阂进行冒泡。


Event.currentTarget -对事件当前注册的目标的引用。这是一个当前计划将事件发送到的对象。**它是有可能在重定向的过程中被改变的**

Event.defaultPrevented - 布尔值，表示 event.preventDefault() 方法是否取消了事件的默认行为。

Event.eventPhase -表示事件流正被处理到了哪个阶段。
 

Event.constructor() --> Event()

Event.preventDefault()
  - 取消事件（如果该事件可取消）。

Event.composedPath() 
  - Event.composedPath();
  - 返回事件的路径（将在该对象上调用监听器）。

Event.stopPropagation()
  - 停止冒泡，阻止事件在 DOM 中继续冒泡。

Event.stopImmediatePropagation()
  - event.stopImmediatePropagation();
  - 对这个特定的事件而言，没有其他监听器被调用。这个事件既不会添加到相同的元素上，也不会添加到以后将要遍历的元素上（例如在捕获阶段）。


---IE 遺毒
Event.srcElement
  - 旧版 Internet Explorer 对 Event.target 的非标准别称。出于兼容原因，一些其他浏览器也支持此别称。

Event.returnValue 
  - 旧版 Internet Explorer 引入的一个非标准历史属性，为保证依赖此属性的网页正常运作，此属性最终被收入规范。
  - 可用 Event.preventDefault() 与 Event.defaultPrevented 代替


---已废弃  
Event.initEvent() -来初始化由Document.createEvent() 创建的 event 实例。

---未知
Event.path

}
*/
console.dir(Event.prototype);
