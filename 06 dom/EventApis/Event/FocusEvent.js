/* FocusEvent  表示和焦点相关的事件比如 focus (en-US), blur (en-US), focusin (en-US), 和 focusout (en-US)。
继承了属性 UIEvent, 间接来自于 Event.

FocusEvent.relatedTarget - 此次事件的次要目标。在一些案例中，例如切换浏览器 tab 标签时，为了安全的原因，这个属性可能会被设置为 null 。

new FocusEvent(type, options)
type - blur, focus, focusin, or focusout.
options {}
*/

const type = new FocusEvent("blur", {});
console.log(type);

console.dir(FocusEvent.prototype);
