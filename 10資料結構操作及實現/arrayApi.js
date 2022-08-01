/* 
按照immutable 類 mutable 類 traversal 類 
分類array api 並實現這些方法，
Array 所有 method 都是為了操作 array's item 
所以實現上一定都需要 for 來 traversal item 
都可以是這種形式的變形

  function ArrayMethod(arr){

      let result = []

      for(let i=0; i<arr.length; i++) { ... }

      return result

  }
*/

/* 

immutable
*Array.prototype.values()
values() 方法返回一个新的 Array Iterator 对象，该对象包含数组每个索引的值。

---

mutable
*Array.prototype.unshift()
unshift() 方法将一个或多个元素添加到数组的开头，并返回该数组的新长度（该方法修改原有数组）。

---

immutable
*Array.prototype.toString()
toString() 返回一个字符串，表示指定的数组及其元素。



---

mutable
*Array.prototype.toLocaleString()
toLocaleString() 返回一个字符串表示数组中的元素。数组中的元素将使用各自的 toLocaleString 方法转成字符串，
这些字符串将使用一个特定语言环境的字符串（例如一个逗号 ","）隔开。
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString

---

mutable
*Array.prototype.splice()
splice() 方法通过删除或替换现有元素或者原地添加新的元素来修改数组，并以数组形式返回被修改的内容。此方法会改变原数组。
array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

---

mutable
*Array.prototype.sort() 刺激
sort() 方法用原地算法对数组的元素进行排序，并返回数组。
默认排序顺序是在将元素转换为字符串，然后比较它们的 UTF-16 代码单元值序列时构建的
arr.sort([compareFunction])


---

traversal
*Array.prototype.some()
some() 方法测试数组中是不是至少有 1 个元素通过了被提供的函数测试。它返回的是一个 Boolean 类型的值。
const array = [1, 2, 3, 4, 5];
const even = (element) => element % 2 === 0;
console.log(array.some(even));
expected output: true

---

immutable
*Array.prototype.slice()
arr.slice([begin[, end]])
slice() 方法返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括end）。
原始数组不会被改变。

---

mutable
*Array.prototype.shift() Done
shift() 方法从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。

---

mutable
*Array.prototype.reverse()
reverse() 方法将数组中元素的位置颠倒，并返回该数组。
数组的第一个元素会变成最后一个，数组的最后一个元素变成第一个。该方法会改变原数组。

---

traversal
*Array.prototype.reduceRight()
reduceRight() 方法接受一个函数作为累加器（accumulator）和数组的每个值（从右到左）将其减少为单个值。

---

traversal
*Array.prototype.reduce()  Done
reduce() 方法將一個累加器及陣列中每項元素（由左至右）傳入回呼函式，將陣列化為單一值。
arr.reduce(callback[accumulator, currentValue, currentIndex, array], initialValue)

---

mutable
*Array.prototype.push() Done
push() 方法會添加一個或多個元素至陣列的末端，並且回傳陣列的新長度。

---

mutable
*Array.prototype.pop() Done
pop() 方法會移除並回傳陣列的最後一個元素。此方法會改變陣列的長度。

---

mutable
*Array.of() Done
Array.of() 方法會由引數（arguments）的數量來建立一個新的 Array 實體，而不管引數的數量或類型為何。
Array.of(1);         // [1]
Array.of(1, 2, 3);   // [1, 2, 3]
Array.of(undefined); // [undefined]


---

immutable
*Array.prototype.map() Done
map() 方法會建立一個新的陣列，其內容為原陣列的每一個元素經由回呼函式運算後所回傳的結果之集合。

---

traversal
*Array.prototype.lastIndexOf()
lastIndexOf() 方法會回傳給定元素於陣列中最後一個被找到之索引，若不存在於陣列中則回傳 -1。
搜尋的方向為由陣列尾部向後（即向前）尋找，啟始於 fromIndex。

---

immutable
*Array.prototype.keys()
keys() 方法會回傳一個包含陣列中的每一個索引之鍵（keys）的新 Array Iterator 物件。

---

mutable
*Array.prototype.join() Done
join() 方法會將陣列（或一個類陣列（array-like）物件）中所有的元素連接、合併成一個字串，並回傳此字串。
console.log(elements.join());
expected output: "Fire,Air,Water"

---

traversal
*Array.isArray() Done
Array.isArray() 函式會檢查傳入的值是否為一個 Array。
Array.isArray([1, 2, 3]);  // true
---

traversal
*Array.prototype.indexOf() Done
indexOf() 方法會回傳給定元素於陣列中第一個被找到之索引，若不存在於陣列中則回傳 -1。
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison'));
expected output: 1


---

traversal
*Array.prototype.includes() Done
includes() 方法會判斷陣列是否包含特定的元素，並以此來回傳 true 或 false。
const array1 = [1, 2, 3];
console.log(array1.includes(2));
expected output: true
**如果 fromIndex大於或等於陣列長度, 會回傳false. 此陣列將不會被搜尋.**


---

immutable
*Array.prototype.groupToMap()

---

immutable
*Array.prototype.group()

const inventory = [
  { name: 'asparagus', type: 'vegetables', quantity: 5 },
  { name: 'bananas',  type: 'fruit', quantity: 0 },
  { name: 'goat', type: 'meat', quantity: 23 },
  { name: 'cherries', type: 'fruit', quantity: 5 },
  { name: 'fish', type: 'meat', quantity: 22 }
];
=> let result = inventory.group( ({ type }) => type );
{
  vegetables: [
    { name: 'asparagus', type: 'vegetables', quantity: 5 },
  ],
  fruit: [
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "cherries", type: "fruit", quantity: 5 }
  ],
  meat: [
    { name: "goat", type: "meat", quantity: 23 },
    { name: "fish", type: "meat", quantity: 22 }
  ]
}

---

immutable
*Array.from()
Array.from() 方法对一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。
console.log(Array.from('foo'));
expected output: Array ["f", "o", "o"]

---

traversal
*Array.prototype.forEach() Done
forEach() 方法对数组的每个元素执行一次给定的函数。
array1.forEach(element => console.log(element));

---

immutable
*Array.prototype.flatMap()
flatMap() 方法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。
它与 map 连着深度值为 1 的 flat 几乎相同，但 flatMap 通常在合并成一种方法的效率稍微高一些。
var new_array = arr.flatMap(function callback(currentValue[, index[, array]]) {
    // return element for new_array
}[, thisArg])

const arr1 = [1, 2, [3], [4, 5], 6, []];
const flattened = arr1.flatMap(num => num);
console.log(flattened);
 expected output: Array [1, 2, 3, 4, 5, 6]
---

mutable
*Array.prototype.flat() Done
flat() 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。
const arr1 = [0, 1, 2, [3, 4]];
console.log(arr1.flat());
expected output: [0, 1, 2, 3, 4]
---

traversal
*Array.prototype.findLastIndex()
findLastIndex() 方法返回数组中满足提供的测试函数条件的最后一个元素的索引。若没有找到对应元素，则返回 -1。


---

traversal
*Array.prototype.findLast()
findLast() 方法返回数组中满足提供的测试函数条件的最后一个元素的值。如果没有找到对应元素，则返回 undefined。
const array1 = [5, 12, 50, 130, 44];
const found = array1.findLast((element) => element > 45);
console.log(found); //130

---

traversal
*Array.prototype.findIndex() Done
findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回-1。
const array1 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(array1.findIndex(isLargeNumber)); //3


---

traversal
*Array.prototype.find() Done
find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。
arr.find(callback[, thisArg])

const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element > 10);
console.log(found);


---

traversal
*Array.prototype.filter() Done
filter() 方法创建一个新数组，其包含通过所提供函数实现的测试的所有元素。 
var newArray = arr.filter(callback(element[, index[, array]])[, thisArg])

---

mutable
*Array.prototype.fill() Done
fill() 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。
arr.fill(value[, start[, end]])


---

traversal
*Array.prototype.every() Done
方法测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值。
const isBelowThreshold = (currentValue) => currentValue < 40;
const array1 = [1, 30, 39, 29, 10, 13];
console.log(array1.every(isBelowThreshold)); //true


---

immutable
*Array.prototype.entries()
entries() 方法返回一个新的Array Iterator对象，该对象包含数组中每个索引的键/值对。
const array1 = ['a', 'b', 'c'];
const iterator1 = array1.entries();

---

mutable
*Array.prototype.copyWithin()
方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度。
arr.copyWithin(target[, start[, end]])
start
0 为基底的索引，开始复制元素的起始位置。如果是负数，start 将从末尾开始计算。
如果 start 被忽略，copyWithin 将会从 0 开始复制。
end
0 为基底的索引，开始复制元素的结束位置。copyWithin 将会拷贝到该位置，但不包括 end 这个位置的元素。
如果是负数， end 将从末尾开始计算。如果 end 被忽略，copyWithin 方法将会一直复制至数组结尾（默认为 arr.length）。


---

immutable
*Array.prototype.concat() Done
concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。
返回值=>新的 Array 实例。

---

immutable
*Array.prototype.at() Done
方法接收一个整数值并返回该索引的项目，允许正数和负数。负整数从数组中的最后一个项目开始倒数。
return =>匹配给定索引的数组中的元素。如果找不到指定的索引，则返回undefined。

const array1 = [5, 12, 8, 130, 44];
let index = 2;
array1.at(index) //8
*/

const recursiveDeep = (ary, state) => {
  state = state ? state : []
  for (let item of ary) {
    if (typeof item === 'object' && Array.isArray(item)) {
      recursiveDeep(item, state)
    } else {
      state.push(item)
    }
  }
  return state
}

const coDataAry = (ary) => {
  return {
    find: (fn) => {
      let index = undefined
      for (let item in ary) {
        if (fn(item)) {
          index = item
          break
        }
      }
      return index
    },
    findIndex: (fn) => {
      let index = undefined
      for (let i = 0; i < ary.length; i++) {
        if (fn(ary[i])) {
          index = i
          break
        }
      }
      return index
    },
    fill: (value) => {
      if (!value) return console.error('no value')
      for (let i = 0; i < ary.length; i++) {
        ary[i] = value
      }
      return coDataAry(ary)
    },
    log: () => {
      console.log(ary)
    },
    push: (val) => {
      ary.length = ary.length + 1
      ary[ary.length - 1] = val
      return coDataAry(ary)
    },
    pop: () => {
      ary.length = ary.length - 1
      return coDataAry(ary)
    },
    unShift: (val) => {
      let result = []
      for (let i = 0; i <= ary.length; i++) {
        result[0] = val
        ary[i] && (result[i + 1] = ary[i])
      }
      return coDataAry(result)
    },
    shift: () => {
      let result = []
      for (let i = 0; i <= ary.length; i++) {
        ary[i + 1] && result.push(ary[i + 1])
      }
      return coDataAry(result)
    },
    of: (...val) => {
      if (!val.length) throw new Error()
      return coDataAry(val)
    },
    filter: (fn) => {
      let res = []
      for (let i = 0; i < ary.length; i++) {
        fn(ary[i]) && res.push(ary[i])
      }
      return coDataAry(res)
    },
    every: (fn) => {
      let isEveryPass = false
      for (let item of ary) {
        if (fn(item)) {
          isEveryPass = true
        } else {
          isEveryPass = false
        }
      }
      return isEveryPass
    },
    flat: () => {
      let resItem = recursiveDeep(ary)
      return coDataAry(resItem)
    },
    forEach: (fn) => {
      for (let i = 0; i < ary.length; i++) {
        fn(ary[i])
      }
    },
    reverse: () => {
      // let end = ary.length - 1
      // let start = 0
      // while (start < end) {
      //   // let s = ary[start]
      //   // let e = ary[end]
      //   // ary[start] = e
      //   // ary[end] = s

      //   start++
      //   end--
      // }

      for (let i = 0; i < ary.length; i++) {
        ;[ary[i], ary[i++]] = [ary[ary.length - 1], ary[ary.length - 1 - i]]
      }

      return coDataAry(ary)
    },
    isArray: () => {
      return ary instanceof Array
    },
    join: (val) => {
      let res = ''
      if (val) {
        for (let i = 0; i < ary.length; i++) {
          res += ary[i].toString() + `${val}`
        }
        return res
      } else {
        for (let i = 0; i < ary.length; i++) {
          res += ary[i]
        }
        return res
      }
    },
    map: (fn) => {
      let res = []
      for (let i = 0; i < ary.length; i++) {
        res[i] = fn(ary[i])
      }
      return coDataAry(res)
    },
    indexOf: (val) => {
      for (let i = 0; i < ary.length; i++) {
        if (val === ary[i]) {
          return i
        } else {
          return -1
        }
      }
    },
    concat: (...val) => {
      let newAry = [...ary, ...val]
      return coDataAry(newAry)
    },
    reduce: (fn, initVal) => {
      let newAry = [...ary]
      let i = 0
      let res
      while (i < newAry.length) {
        res = fn.call(
          undefined,
          res === undefined ? initVal : res,
          newAry[i],
          i,
          newAry
        )
        i++
      }
      return res
    },
    at(index) {
      let isNegative =
        Math.sign(index) === -1
          ? true
          : Math.sign(index) === 1
          ? false
          : Math.sign(index)
      let res
      if (typeof isNegative === 'boolean') {
        ary = isNegative ? ary.reverse() : ary
        let absIndex = Math.abs(index)

        for (let i = 0; i < ary.length; i++) {
          i === absIndex && (res = ary[absIndex])
        }
        return res
      } else if (isNegative === 0 || isNegative === -0) {
        return ary[isNegative]
      } else {
        return console.error('type is bizarre')
      }
    },
    includes(val, fromIndex = 0) {
      if (Math.abs(fromIndex) > ary.length) return false
      if (Math.sign(fromIndex) === -1) {
        ary.reverse()
      }
      let res = false
      for (fromIndex; fromIndex < ary.length; fromIndex++) {
        if (ary[fromIndex] === val) {
          return (res = true)
        }
      }
      return res
    }
  }
}

let ary = coDataAry([1, [2, 2, 3, [1, 3, [6]]]])
let a = ary.flat()

// a.concat(1, 2, 3).log()
// console.log(a.indexOf(1))
// a.map((x) => ({
//   app: x + 1
// })).log()
// console.log(a.join(' '))
// console.log(ary.isArray())
// console.log(ary.every((x) => x >= 1))
// console.log(ary.findIndex((x) => x >= 2))
// ary.filter((x) => x >= 3).log()
// ary.of().log()
// ary.shift().log()
// ary.pop().log()
// ary.push({ 123: 123 })
// ary.log()
// console.log(ary.find((x) => x >= 2))
// ary.fill(2)
// ary.log()
