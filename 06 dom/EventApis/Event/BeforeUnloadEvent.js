/* 接口表示提供与动画相关的信息的事件。
{
BeforeUnloadEvent  事件触发于 window、document 和它们的资源即将卸载时。 
当事件属性 returnValue 被赋值为非空字符串时，会弹出一个对话框，让用户确认是否离开页面（示例如下）。
BeforeUnloadEvent.returnValue 

window.addEventListener("beforeunload", function( event ) {
  event.returnValue = "\o/";
});


*/
console.dir(BeforeUnloadEvent.prototype);
