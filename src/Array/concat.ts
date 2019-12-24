// https://www.lodashjs.com/docs/latest#_concatarray-values

import _ from "lodash"
import * as Tools from "../Tools"

export function concat(array: any[], ...values: any[]) {
    return values.reduce((result, value) => {
        if (value instanceof Array) {
            result.push(...value)
        } else {
            result.push(value)
        }
        return result
    }, [...array])
}

Tools.test(concat([1], 2, [3], [[4]]), [1, 2, 3, [4]])
Tools.test(concat([1], 2, [3, 4]), [1, 2, 3, 4])

Tools.time(
    () => { concat([1], 2, [3, 4]) },   // 0.817ms
    () => { _.concat([1], 2, [3, 4]) }, // 1.510ms
)

/**

参考：https://stackoverflow.com/questions/22289727/difference-between-using-array-isarray-and-instanceof-array
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
Array.isArray 与 instanceof 的区别为：
Array.isArray 方法是一个 ES5 的方法，可以可靠的确定对象是否为 Array，其实现方法为 Object.prototype.toString
instanceof 不可靠，在于其不可以跨帧检测（iframes），其实现方法为判定是否拥有 Array 的原型链。

 */
