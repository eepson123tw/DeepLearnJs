/* 挑幾個lodash 及 underScore 的方法來實現 */
// _.difference([2, 1], [2, 3])
// _.differenceWith(array, [values], [comparator])
//https://lodash.com/docs/4.17.15#differenceWith

/* throttle_.throttle(function, wait, [options])
Creates and returns a new, throttled version of the passed function, that, when invoked repeatedly, will only actually call the original function at most once per every wait milliseconds. Useful for rate-limiting events that occur faster than you can keep up with.

By default, throttle will execute the function as soon as you call it
for the first time, and, if you call it again any number of times during the wait period, as soon as that period is over. 
If you'd like to disable the leading-edge call, pass {leading: false},
and if you'd like to disable the execution on the trailing-edge, pass
{trailing: false}.

var throttled = _.throttle(updatePosition, 100);
$(window).scroll(throttled);
If you need to cancel a scheduled throttle, you can call .cancel() on the throttled function.


*/

const throttleFn = (fn, wait = 0, options) => {
  let cbNow = new Date().getTime()

  return () => {
    if (new Date().getTime() - cbNow > wait) {
      fn()
      cbNow = new Date().getTime()
    }
  }
}

const debounce = (fn, sec) => {
  let timeFn
  if (timeFn) {
    clearTimeout(timeFn)
  }
  timeFn = () => setTimeout(() => fn, sec)
  return timeFn
}

let app = debounce(console.log(123), 1000)

/* 





debounce_.debounce(function, wait, [immediate])
Creates and returns a new debounced version of the passed function which will postpone its execution until after wait milliseconds
have elapsed since the last time it was invoked. 
Useful for implementing behavior that should only happen after the input has stopped arriving.
For example: rendering a preview of a Markdown comment, recalculating a layout after the window has stopped being resized, and so on.
At the end of the wait interval, the function will be called with the arguments that were passed most recently to the debounced function.
Pass true for the immediate argument to cause debounce to trigger the function on the leading instead of the trailing edge of the wait interval. Useful in circumstances like preventing accidental double-clicks on a "submit" button from firing a second time.

var lazyLayout = _.debounce(calculateLayout, 300);
$(window).resize(lazyLayout);
If you need to cancel a scheduled debounce, you can call .cancel() on the debounced function.

once_.once(function)
Creates a version of the function that can only be called one time. Repeated calls to the modified function will have no effect, returning the value from the original call. Useful for initialization functions, instead of having to set a boolean flag and then check it later.

var initialize = _.once(createApplication);
initialize();
initialize();
// Application is only created once. */
