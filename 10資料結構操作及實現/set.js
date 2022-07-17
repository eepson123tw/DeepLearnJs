const { log, dir } = console

const s1 = new Set()
s1.add(1)
s1.add(2)
s1.add(3)
s1.add(4)
s1.add(5)
s1.add(5)
s1.add(5)
// log(s1.values())

const s2 = new Set()
s2.add(3)
s2.add(4)
s2.add(5)
s2.add(6)
s2.add(7)
s2.delete(6)

// log(s2.values())

/* 實現集合方法  */
//並集
const union = (set1, set2) => {
  let res = [...set1, ...set2]
  return new Set(res)
}
const inter = (set1, set2) => {} //交集
const diff = (set1, set2) => {} //差集

const unionSet = union(s1, s2)
log(unionSet)
