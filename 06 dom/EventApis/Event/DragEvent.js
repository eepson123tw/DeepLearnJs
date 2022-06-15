/*DragEvent 
介面是一種 DOM event，定義了拖放操作時產生的事件物件。
使用者藉由把指標裝置 (例如滑鼠) 放到有效區域並拖移到另一個新的位置 ( 如另外一個 DOM 元素 )來開始一個拖動的動作。
而應用程式可以自由地決定互動的方式來達到符合該應用程式的使用情境。

- new DragEvent(type, dragEventInit)

drag (en-US) 在『被選擇的物件』被拖曳時觸發。
dragend (en-US) 在『被選擇的物件』結束拖曳時觸發 (就是放開滑鼠鍵、或按下 Esc 鍵時)。
dragenter (en-US) 當『被選擇的物件』被拖曳到『可以當目標的物件』時, 在『進入』該目標物件上方的瞬間觸發。注意, 不是『被選擇的物件』觸發此事件, 而是『可以當目標的物件』。

dragleave (en-US)
當『被選擇的物件』被拖曳到『可以當目標的物件』時, 在『離開』該目標物件上方的瞬間觸發。注意, 不是『被選擇的物件』觸發此事件, 而是『可以當目標的物件』。
dragover (en-US)
當『被選擇的物件』被拖曳到『可以當目標的物件』的上方時觸發 (頻率大約每秒數次)。注意, 不是『被選擇的物件』觸發此事件, 而是『可以當目標的物件』 。
dragstart (en-US)
在『被選擇的物件』開始拖曳時觸發。
drop (en-US)
當『被選擇的物件』被拖曳、放到『目標物件』時觸發。注意, 不是『被選擇的物件』觸發此事件, 而是『目標物件』。
https://developer.mozilla.org/en-US/docs/Web/API/Document/drag_event
*/

console.dir(DragEvent.prototype);
