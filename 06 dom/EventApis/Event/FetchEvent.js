/* FetchEvent 搭配sevice Worker  使用的event

*/

if ("serviceWorker" in navigator) {
  console.log(navigator);
  // 瀏覽器支援 Service Worker，可使用！
}
//https://cythilya.github.io/2017/07/16/service-worker/
//https://developer.mozilla.org/zh-CN/docs/Web/API/FetchEvent
console.dir(FetchEvent.prototype);
