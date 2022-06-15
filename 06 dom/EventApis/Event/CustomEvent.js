/*CustomEvent
 - CustomEvent interface 是應用程式為了任意目的所初始化的事件。
 - CustomEvent.detail 初始化事件時傳送的任意資料。
 - event = new CustomEvent(typeArg, customEventInit);
 - var event = new CustomEvent("cat", {
  detail: {
      hazcheeseburger: true
    }
  });
  obj.dispatchEvent(event);


*/

var event = new CustomEvent("cat", {
  detail: {
    app: true,
  },
});

// console.log(event.detail);

console.dir(CustomEvent.prototype);
