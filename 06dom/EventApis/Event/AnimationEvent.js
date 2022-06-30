/* 接口表示提供与动画相关的信息的事件。
{
AnimationEvent.animationName //包含與過渡關聯的動畫名稱 CSS 屬性的值。
AnimationEvent.elapsedTime //只讀屬性是一個浮點數，它給出了在觸發此事件時動畫已運行的時間量（以秒為單位），不包括動畫暫停的任何時間。
AnimationEvent.pseudoElement //只讀屬性是一個字符串，以 '::' 開頭，包含運行動畫的偽元素的名稱。

}
*/
console.dir(AnimationEvent.prototype);
