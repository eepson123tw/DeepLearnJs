/*UIEvent UIEvent 介面是使用者介面的事件的基本型態。
-  event = new UIEvent(typeArg, UIEventInit);
- type  load, unload, abort, error, or select.
- options {}

UIEvent.which 返回一个对应（键盘）按下的数字类型的 keyCode ，或者一个字母数字键按下时的字符码 (charCode)。
UIEvent.detail Returns a long with details about the event, depending on the event type.
UIEvent.isChar  只读返回一个 Boolean，表示该事件是否产生了一个键盘字符（key character）。

UIEvent.sourceCapabilities 只讀屬性返回 InputDeviceCapabilities 接口的一個實例，該接口提供有關負責生成觸摸事件的物理設備的信息。
UIEvent.view 只讀屬性返回生成事件的 WindowProxy 對象。在瀏覽器中，這是事件發生的 Window 對象。
*/

console.dir(UIEvent.prototype);
