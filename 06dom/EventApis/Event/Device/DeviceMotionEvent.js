/* DeviceMotionEvent 動作感測器

DeviceMotionEvent.DeviceMotionEvent()

DeviceMotionEvent.acceleration - 只读提供了设备在 X,Y,Z 轴方向上加速度的对象。加速度的单位为 m/s2。
DeviceMotionEvent.accelerationIncludingGravity - 只读提供了设备在 X,Y,Z 轴方向上带重力的加速度的对象。加速度的单位为 m/s2
DeviceMotionEvent.rotationRate - 只读提供了设备在 alpha，beta， gamma 轴方向上旋转的速率的对象。旋转速率的单位为度每秒。
DeviceMotionEvent.interval - 只读表示从设备获取数据的间隔时间，单位是毫秒。


*/
window.addEventListener("devicemotion", function (event) {
  console.log(event.acceleration.x + " m/s2");
});
// console.dir(DeviceMotionEvent);
