/* 
ClipboardEvent 介面表示了與修改剪貼簿相關的事件，包括 cut、copy  及 paste  事件。
ClipboardEvent.clipboardData 属性保存了一个 DataTransfer 对象，这个对象可用于：

-var clipboardEvent = new ClipboardEvent(type[, options]);
 -typ 描述了 ClipboardEvent  事件类型的名字，大小写敏感，可以是：'copy'、 'cut'或者 'paste'。
 -options  clipboardData 一個 DataTransfer 包含剪貼板事件所涉及的數據。

*/
const a = new DataTransfer();
a.setData("text/plain", "wwww");
var clipboardEvent = new ClipboardEvent("cut", { clipboardData: a });
console.log(clipboardEvent.clipboardData);
console.dir(ClipboardEvent.prototype);
