/**
 * Created by ThinkPad-wzw on 2017/1/7.
 * DESC: 工程的路由合并文件，请勿修改。
 */

import * as routeconfig from './components'

// console.log('%%%%%%%%%%%%%%%%%%')
// console.log(routeconfig)
// console.log('%%%%%%%%%%%%%%%%%%')

// 为了使用for of循环，需要使用Generator函数将对象重新包装，略显复杂
/*
function* entries (obj) {
  for (let key of Object.keys(obj)) {
    yield [key, obj[key]]
  }
}

for (let [key, value] of entries(routeconfig)) {
  console.log(key, '->', value)
  for (let [k, v] of entries(value)) {
    console.log(k, '->', v)
  }
}
*/
let routeConf = []
// 另一种使用for of的方法是使用Object.keys方法将对象的键名生成一个数组，然后遍历这个数组
for (let key of Object.keys(routeconfig)) {
  // console.log(key, '->', routeconfig[key])
  let value = routeconfig[key]
  for (let k of Object.keys(value)) {
    // console.log(value[k])
    // 这里得到的就是数据，需要在外面定义变量在这里
    routeConf = routeConf.concat(value[k])
  }
}

// console.log('routeConf')
// console.log(routeConf)

export { routeConf }
