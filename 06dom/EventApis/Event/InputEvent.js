/* 接口用来构造和字符输入相关的事件对象。

InputEvent.data 只读
返回当前输入的字符串，如果是删除操作，则该值为空字符串。

InputEvent.isComposing 也就是表明当前输入的字符是输入法的中途输入。

vent = new InputEvent(typeArg, inputEventInit);

InputEvent.getTargetRanges()
返回一个静态范围数组，如果输入事件未取消，内容会受到 DOM 更改而变化。


*/

console.dir(InputEvent.prototype);
