{
  //若只有coData概念
  const coData = (s, e, fn) => {
    let start = s ? s : 0
    let end = e ? e : 0
    let func = fn ? fn : null
    return {
      range: function (a, b) {
        start = a - 1
        end = b
        return coData(start, end)
      },
      next: function () {
        if (start >= end) {
          return
        }
        start = Math.min(start, end)
        end = Math.max(start, end)
        start = ++start
        return coData(start, end)
      },
      map: function (num, fun) {
        func = fun
        return coData(start, end, func)
      },
      log: function () {
        console.log(start, end)
      },
      reverse: function (list) {
        return coData(end, start, func)
      },
      foreach: function (list, fun) {
        for (let i = start; i > end; i--) {
          list.next()
          fun(func(i))
        }
      }
    }
  }
  const co = coData()
  var numbers = co.range(1, 10)
  co.map(numbers, function (n) {
    return n * n
  })
  co.reverse(numbers).foreach(numbers, console.log)
}
/*
// -----------
//     co 是一個方法集合，裡面存有續傳的狀態跟回調
//     沒有錯但不夠漂亮，同時失去了 Algebra effect
//     range numbers 作為要被解構的 constructor 構造器
//     思路要改成使用 constructor/destructor 合成模式

//     構造器 負責構造一個 range iterator
//     解構器 解構物件並可調用各式 operators

//     另外要注意： 題目中要求的 range
//     必須是通用的構造器

//         range(1,10)
//         range(10, 5)
//         range(6, 14)
//         range(15, 12)

//     都要能成功
// -----------------
// */
// {
//   // constructor
//   const range = (s, e) => ({
//     s: s,
//     e: e,
//     d: Math.max(s, e) - Math.min(s, e),
//     add: (num) => ++num,
//     minus: (num) => --num,
//     next: (isReverse) => {
//       if (isReverse) {
//         e = s > e ? range().add(e) : range().minus(e)
//         return range(e, s)
//       }
//       s = s > e ? range().add(s) : range().minus(e)
//       return range(s, e)
//     }
//   })

//   //destructor
//   const coData = (range) => {
//     let { d, next } = range
//     let cache = {} //use cache to optimize destructor
//     return {
//       map: (fn) => {
//         cache['map'] = fn
//       },
//       reverse: () => {
//         cache['reverse'] = !cache['reverse'] ? !cache['reverse'] : false
//       },
//       foreach: (fn) => {
//         for (let j = 0; j < d; j++) {
//           const { s } = next(cache['reverse'])
//           fn(cache['map'](s))
//         }
//       }
//     }
//   }

//   const numbers = range(15, 10) //constructor state init
//   const x = coData(numbers) //give to the destructor use the destructor option
//   x.map(function (n) {
//     return n * n
//   })
//   x.reverse()
//   x.foreach(console.log)
// }

{
  //結合 迭代器 雛形
  // 建構器 解構器

  //數據
  const iterator = (start, end) => {
    return {
      next: () => {
        if (start < end) {
          return start++
        } else {
          return end--
        }
      },
      value: () => {}
    }
  }

  const coConStructor = (s, e) => {
    const { next, value } = iterator(s, e)
    return { next, value, d: Math.max(s, e) - Math.min(s, e) }
  }

  //  destructor
  const coDataRange = (start, end) => {
    let { next, d } = coConStructor(start, end)
    let cache = {}
    return {
      clg: () => {
        console.log(next(), d)
      },
      map: (fn) => {
        for (let i = 0; i < d; i++) {
          let j = next()
          return fn(j)
        }
      },
      reverse: (fn) => {}
    }
  }

  let x = coDataRange(1, 10)

  // x.map((x) => x * 10)
}
