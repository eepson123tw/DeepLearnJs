/* 接口表示一个变化事件，当 URL 中的片段标识符发生改变时，会触发此事件。


HashChangeEvent.newURL 只读window 即将导航到达的新 URL。
HashChangeEvent.oldURL 只读window 此前导航到达过的 URL。
window.onhashchange = funcRef;
window.addEventListener('hashchange', locationHashChanged);
<body onhashchange="funcRef();">
*/

console.dir(HashChangeEvent.prototype);
