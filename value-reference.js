const swap = (obj1, obj2) => {
  const temp = obj1
  obj1 = obj2
  obj2 = temp
}

const obj1 = { a: 1 }
const obj2 = { b: 2 }

swap(obj1, obj2)

console.log(obj1, obj2)
