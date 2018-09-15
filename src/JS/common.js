// 深度拷贝
var oldObj = {name: 'jack', old: 23}
function deepClone (obj) {
  var newObj = obj instanceof Array ? [] : {}
  for (var i in obj) {
    newObj[i] = typeof obj[i] === 'object'
      ? deepClone(obj[i]) : obj[i]
  }
  return newObj
}
var newObj1 = deepClone(oldObj)
var newObj2 = JSON.parse(JSON.stringify(oldObj))

// 计算数组中的重复项
var cars = ['BMW', 'Benz', 'Benz', 'Tesla', 'BMW', 'Toyota']
var carsObj = cars.reduce(function (obj, name) {
  obj[name] = obj[name] ? ++obj[name] : 1
  return obj
}, {})
carsObj // => { BMW: 2, Benz: 2, Tesla: 1, Toyota: 1 }

// 数组去重
let arr = [1, 1, 2, 2, 3, 3]
let deduped = [...new Set(arr)] // [1, 2, 3]

// 将一个数组追加在另一个数组后面
// ES5的 写法
var arr1 = [0, 1, 2]
var arr2 = [3, 4, 5]
Array.prototype.push.apply(arr1, arr2)
// ES6 的写法
let arr1 = [0, 1, 2]
let arr2 = [3, 4, 5]
arr1.push(...arr2)

// 数组深复制
// ES5的 写法
const a1 = [1, 2]
const a2 = a1.concat()
a2[0] = 2
a1 // [1, 2]

// ES6 的写法
const a1 = [1, 2]
// 写法一
const a2 = [...a1]
// 写法二
const [...a2] = a1

// 合并数组
const arr1 = ['a', 'b']
const arr2 = ['c']
const arr3 = ['d', 'e']
// ES5 的合并数组
arr1.concat(arr2, arr3);
// [ 'a', 'b', 'c', 'd', 'e' ]
// ES6 的合并数组
[...arr1, ...arr2, ...arr3]
// [ 'a', 'b', 'c', 'd', 'e' ]
