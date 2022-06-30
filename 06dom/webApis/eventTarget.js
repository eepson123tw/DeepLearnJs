

/*
EventTarget
-介面定義了其實作的物件具有接收事件的能力，也可能擁有處理事件的監聽器。
{ 

  EventTarget.addEventListener()
    - keypress,keyup,click... https://developer.mozilla.org/en-US/docs/Web/Events
    - addEventListener(type, listener, useCapture);
    - https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
    - Event https://developer.mozilla.org/zh-CN/docs/Web/API/Event

  EventTarget.dispatchEvent()
    - 可供元素触发自定义事件的方,向一个指定的事件目标派发一个事件,  并以合适的顺序同步调用目标元素相关的事件处理函数。
    - 可以被 removeEventListener
    - target.dispatchEvent(event)
      const h2 = document.querySelector('h2')
      h2.addEventListener("myEvent", function(e) { console.log(e.detail) });
      var event = new CustomEvent("myEvent", {"detail":{"username":123}});
      h2.dispatchEvent(event);

    EventTarget.removeEventListener()
    - 方法可以移除先前由 addEventListener() 所註冊的事件監聽器。
    - target.removeEventListener(type, listener[, options]);
}
*/


console.dir(EventTarget.prototype)


// const h2 = document.querySelector('h2')
// h2.addEventListener("myEvent", function(e) { console.log(e.detail) });
// var event = new CustomEvent("myEvent", {"detail":{"username":123}});
// h2.removeEventListener('myEvent')
// h2.dispatchEvent(event);
