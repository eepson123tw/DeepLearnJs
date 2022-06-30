/*
PointerEvent 接口代表了由 指针 引发的 DOM 事件的状态，包括接触点的位置，引发事件的设备类型，接触表面受到的压力等。
很遺憾的，目前基本上只有微軟自家的 Internet Explorer（10+）有原生支援 Pointer event（不過也不大一樣，請參考 MSDN），
其他的瀏覽器，都僅支援 Touch Event；
而再加上 IE 本身並不支援 Touch Event，所以變成要跨瀏覽器處理觸控事件，就得寫兩個版本了…

PointerEvent.pointerId (en-US) 只读
触发事件的 pointer 的唯一标识符。
PointerEvent.width (en-US) 只读
Pointer 的接触面的 CSS 像素宽度（X 轴上的大小）。
PointerEvent.height (en-US) 只读
Pointer 的接触面的 CSS 像素高度（Y 轴上的大小）。
PointerEvent.pressure (en-US) 只读
归一化后的 pointer 压力值，范围在 [0,1] 区间。其中 0 和 1 分别代表硬件能够检测的最小和最大压力。
PointerEvent.tangentialPressure (en-US) 只读
归一化后的切向压力值（也称为桶压或cylinder stress），范围在 [-1, 1] 区间，0 表示控制设备中立状态时的值。
PointerEvent.tiltX (en-US) 只读
由输入设备（如手写笔）与 Y 轴构成的平面，和 Y-Z 平面之间的夹角（取值在 [-90, 90] 区间）。
PointerEvent.tiltY (en-US) 只读
由输入设备（如手写笔）与 X 轴构成的平面，和 X-Z 平面之间的夹角（取值在 [-90, 90] 区间）。
PointerEvent.twist (en-US) 只读
输入设备（如手写笔）围绕自身主轴顺时针旋转的角度，取值范围是 [0, 359] 度。
PointerEvent.pointerType (en-US) 只读
表示触发事件的设备类型（鼠标，触控笔，触摸板等）。
PointerEvent.isPrimary (en-US) 只读
标识一个 pointer 是否是当前设备类型的主 pointer。




var moveEvent = new PointerEvent("pointermove");

var downEvent = new PointerEvent("pointerdown",
   {pointerId: 1,
    bubbles: true,
    cancelable: true,
    pointerType: "touch",
    width: 100,
    height: 100,
    isPrimary: true
   });


*/

console.dir(PointerEvent.prototype);
