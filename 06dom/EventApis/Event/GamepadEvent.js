/* GamepadEvent 是 Gamepad API 的接口，包含对连接到系统的游戏手柄的引用，也就是游戏手柄事件

gamepadconnected - 控制器已连接于


gamepaddisconnected - 控制器已断开

window.addEventListener("gamepadconnected", function(e) {
  console.log("控制器已连接于 %d 位：%s。 %d 个按键，%d 个坐标方向。",
  e.gamepad.index, e.gamepad.id,
  e.gamepad.buttons.length, e.gamepad.axes.length);
});


*/

// console.dir(GamepadEvent.prototype);
