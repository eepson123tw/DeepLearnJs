/*KeyboardEvent 对象描述了用户与键盘的交互。
每个事件都描述了用户与一个按键（或一个按键和修饰键的组合）的单个交互；事件类型keydown， keypress 与 keyup 用于识别不同的键盘活动类型。

键盘定位标识符
DOM_KEY_LOCATION_LEFT: 1
DOM_KEY_LOCATION_NUMPAD: 3
DOM_KEY_LOCATION_RIGHT: 2
DOM_KEY_LOCATION_STANDARD: 0

KeyboardEvent.altKey 只读
返回一个 Boolean，如果按键事件产生时， Alt 键被按下，则该值为 true 。

KeyboardEvent.ctrlKey 只读
返回一个 Boolean，如果按键事件发生时 Ctrl 键被按下，则该值为 true 。


KeyboardEvent.isComposing
如果在 compositionstart 之後和 compositionend 之前觸發了事件，則返回一個布爾值。

KeyboardEvent.key 只讀 
返回一個 DOMString，表示事件所代表的鍵的鍵值

KeyboardEvent.metaKey 只讀 
如果在生成鍵事件時 Meta 鍵（在 Mac 鍵盤上，⌘ Command 鍵；在 Windows 鍵盤上，Windows 鍵 (⊞)）處於活動狀態，則返回一個布爾值。

KeyboardEvent.shiftKey 只讀
 如果在生成鍵事件時 Shift 鍵處於活動狀態，則返回一個布爾值


KeyboardEvent.location 
返回一個數字，表示鍵盤或其他輸入設備上的鍵的位置。識別位置的常量列表顯示在上面的鍵盤位置中。


KeyboardEvent.repeat 只讀 如果鍵被按住以使其自動重複，則返回一個布爾值。

KeyboardEvent.code 只读
返回一个 DOMString，其 code 值代表触发事件的物理按键。

------ 棄用屬性
KeyboardEvent.charCode 
KeyboardEvent.char
KeyboardEvent.keyCode
KeyboardEvent.keyIdentifier (en-US)
KeyboardEvent.keyLocation
KeyboardEvent.which
*/

console.dir(KeyboardEvent.prototype);
