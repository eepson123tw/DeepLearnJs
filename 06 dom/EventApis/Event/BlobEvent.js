/* 
BlobEvent() 構造函數返回一個新創建的帶有關聯 Blob 的 BlobEvent 對象。
  - new BlobEvent(type, options)
BlobEvent.data  只讀屬性表示與事件關聯的 Blob。
BlobEvent.timecode //屬性是一個 DOMHighResTimeStamp ，指示數據中第一個塊的時間戳與此記錄器產生的第一個 BlobEvent 中的第一個塊的時間戳之間的差異。
 - DOMHighResTimeStamp 是一个 double 类型，用于存储毫秒级的时间值。这种类型可以用来描述离散的时间点或者一段时间（两个离散时间点之间的时间差）。

*/
console.dir(BlobEvent.prototype);
