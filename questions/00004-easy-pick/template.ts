type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

// 1、返回一个对象
// 2、遍历keys，
// 3、看看key在不在todo中
// 4、在todo中取值赋给返回的类型对象
// function MyPick(todo, keys) {
//   const obj = {}
//   keys.forEach((k) => {
//     if (k in todo) {
//       obj[k] = todo[k]
//     }
//   })
//   return obj
// }
