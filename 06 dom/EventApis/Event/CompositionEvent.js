/*CompositionEvent
-DOM 接口 CompositionEvent 表示用户间接输入文本（如使用输入法）时发生的事件。
- new CompositionEvent(type, options)
  - type 帶有事件名稱的字符串。它區分大小寫，瀏覽器將其設置為 compositionstart、compositionupdate 或 compositionend。
  - options new UIEvent(type, options)

  CompositionEvent.data 只讀屬性返回引發事件的輸入法生成的字符

--- 死亡
CompositionEvent.initCompositionEvent()
*/
console.dir(CompositionEvent.prototype);
