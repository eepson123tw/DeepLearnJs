/* CloseEvent
當 WebSocket 連線關閉時，客戶端會收到一個 CloseEvent，由 WebSocket 物件 onclose 屬性表示的監聽器接收。
  - code	unsigned long	WebSocket 伺服器給予的連線關閉代碼。「狀態代碼」列有所有可能值。
  - reason	DOMString	表示伺服器關閉連線的原因，這因不同的伺服器與子協定而定。
  - wasClean	boolean	表示連線關閉情況是否乾淨。
  https://developer.mozilla.org/zh-TW/docs/Web/API/CloseEvent
*/
console.dir(CloseEvent.prototype);
