/* 
    對於 function 來說，封裝是將一堆代碼放在 function 中
    當我們想要執行這一堆代碼的時候不用重複編寫
    而只需要調用 function ，就能夠做到同樣的事情
*/
/* 
    基礎封裝 四種返回

    ()=>()
    ()=>{}
    ()=>[]
    ()=>x?x:y

    function(){
        return
    }
*/
// 一，返回 function
{
  // (m)=>(n)=> m+n
  function a(m) {
      return function (n) {
          return m + n
      }
  }

  a(10)(20)

  // (m)=>(fn)=> fn(m)  
  function save(m) {
      return function (fn) {
          return fn(m)
      }
  }
  var A = save(50)
  A(x => x + 900)
  A(x => x - 40)
  A(x => x * x)
}
// 二，返回 object
{
  // ({...obj}) => {...obj} 
  function a({ ...obj }) {
      return {
          ...obj
      }
  }
  var b = { a: 1, b: 2, c: 3 }
  var c = a(b)

}
{
  // 返回帶有方法的 {}
  function todo(fn) {
      var name = 'xxx'
      var todo = fn
      return {
          name,
          do: todo
      }
  }
  var a = todo(() => 5)
  a.do()

  // 先記憶一個初始值，返回一個對象，擁有兩個方法操作初始值
  function save(m) {
      var box = m
      return {
          do: (fn) => box = fn(box),
          my: () => box
      }
  }

  var eat = (m) => m - 100
  var john = save(500)

  john.do(eat)
  john.my()

}
// 三，返回 array
{
  // 剔除非數字的子項
  const arr = [1, 3, 'a', 'd', 5, 8, '9']
  const newArr = []
  arr.forEach(item => {
      if (typeof item === 'number') {
          newArr.push(item)
      }
  })
  log(newArr)

  // 封裝
  function getNumbers(arr) {
      const newArr = []
      arr.forEach(item => {
          if (typeof item === 'number') {
              newArr.push(item)
          }
      })
      return newArr
  }
  getNumbers(arr)
}
{
  // (...item)=>[...item]
  function a(...item) {
      return [...item]
  }
  a(1, 2, 3) // [1,2,3]

}
{
  function useState(x) {
      var _state = x
      function setState(newV) {
          _state = newV
          console.log(_state)
      }
      return [
          _state,
          setState
      ]
  }

  var [n, addN] = useState(50)

  addN(n + 50)

}
// 四，返回 condition
{
  function tellme(b) {
      return b === true ? '可' : '不可'
  }
  tellme(false)

  function abs(x) {
      return x >= 0 ? x : -x
  }

  abs(-10)
  abs(7)


  function notEqual(x, y) {
      return x > y || x < y
  }

  notEqual(5, 5)
  notEqual(5, 6)

}
{
  var plus = (a, b) => a + b
  var minus = (a, b) => a - b
  function AplusabsB(a, b) {
      return (b >= 0 ? plus : minus)(a, b)
  }

  AplusabsB(5, 6)
  AplusabsB(5, -6)

}
/* 
  基礎封裝  匿名函數
*/
{
  (function (root, undefined) {
      // 私有狀態
      const age = 20
      const name = 'john'
      let money = 0

      function show(x) {
          return x === 'you'
              ? `Your name is  ${name} and ${age} years old.`
              : x === 'money'
                  ? `your money is ` + money
                  : 'what?'
      }
      function getMoney() {
          return `your money is ` + money
      }
      function setMoney(m) {
          return money += m
      }

      // 將引用保存在外部，一種簡單的對外開放方法的方式
      root.Who = { show, getMoney, setMoney }
  })(window)

  Who.show('you')
  Who.show('age')
  Who.setMoney(100)
  Who.show('money')
}