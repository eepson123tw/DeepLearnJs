/*MouseEvent 滑鼠事件


- event = new MouseEvent(typeArg, mouseEventInit);
-type dblclick, mousedown, mouseenter, mouseleave, mousemove, mouseout, mouseover, or mouseup.

MouseEvent.altKey - 只读当鼠标事件触发的时，如果alt 键被按下，返回 true;
MouseEvent.ctrlKey - 只读当鼠标事件触发时，如果 control 键被按下，则返回 true；
MouseEvent.metaKey - 只读当鼠标事件触发时，如果 meta键被按下，则返回 true；
MouseEvent.shiftKey -  只读当鼠标事件触发时，如果 shift 键被按下，则返回 true；


MouseEvent.button - 只读当鼠标事件触发的时，如果鼠标按钮被按下（如果有的话），将会返回一个数值。
MouseEvent.buttons - 只读当鼠标事件触发的时，如果多个鼠标按钮被按下（如果有的话），将会返回一个或者多个代表鼠标按钮的数字。


MouseEvent.region - 只读返回被点击事件影响的点击区域的 id，如果没有区域被影响则返回 null。
MouseEvent.relatedTarget - 只读鼠标事件的次要目标（如果有的话



MouseEvent.which Non-Standard 只读当鼠标事件触发时，表示被按下的按钮。

MouseEvent.movementX - 只读鼠标指针相对于最后mousemove (en-US)事件位置的 X 坐标。
MouseEvent.movementY - 只读鼠标指针相对于最后mousemove (en-US)事件位置的 Y 坐标。
MouseEvent.clientX -  只读鼠标指针在点击元素（DOM）中的 X 坐标。
MouseEvent.clientY - 只读鼠标指针在点击元素（DOM）中的 Y 坐标。
MouseEvent.offsetX - 只读鼠标指针相对于目标节点内边位置的 X 坐标
MouseEvent.offsetY - 只读鼠标指针相对于目标节点内边位置的 Y 坐标
MouseEvent.pageX - 只读鼠标指针相对于整个文档的 X 坐标；
MouseEvent.pageY - 只读鼠标指针相对于整个文档的 Y 坐标；
MouseEvent.screenX - 只读鼠标指针相对于全局（屏幕）的 X 坐标；
MouseEvent.screenY - 只读鼠标指针相对于全局（屏幕）的 Y 坐标；

MouseEvent.x 只读MouseEvent.clientX的别名。
MouseEvent.y 只读MouseEvent.clientY的别名。



MouseEvent.getModifierState() 方法返回指定修飾鍵的當前狀態：
var active =​ event.getModifierState(keyArg);


---死去
MouseEvent.initMouseEvent()
MouseEvent.layerX
MouseEvent.layerY
MouseEvent.toElement
fromElement
*/

// window.addEventListener("click", (e) => {
//   console.log(e);
// });
// const event = new MouseEvent("dblclick", {});
// console.log(event);
console.dir(MouseEvent.prototype);
