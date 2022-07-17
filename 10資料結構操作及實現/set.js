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
//
const union = (set1, set2) => {
  let res = [...set1, ...set2]
  return new Set(res)
}
//交集
const inter = (set1, set2) => {
  let newSet = new Set()
  for (const item of set1) {
    if (set2.has(item)) {
      newSet.add(item)
    }
  }
  return newSet
}
//差集
const diff = (set1, set2) => {
  for (const elem of set2) {
    set1.delete(elem)
  }
  return set1
}

const unionSet = union(s1, s2)
log('並集', unionSet)
const interSet = inter(s1, s2)
log('交集', interSet)
const diffSet = diff(s1, s2)
log('差集', diffSet)
