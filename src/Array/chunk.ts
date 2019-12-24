// https://www.lodashjs.com/docs/latest#_chunkarray-size1

import * as Tools from "../Tools"
import * as _ from "lodash"

export function chunk(array: any[], size = 1) {
    return array.reduce((result: any[][], value, index) => {
        if (index % size === 0) {
            result.push([value])
        } else {
            result[result.length - 1].push(value)
        }
        return result
    }, [])
}

Tools.test(chunk(['a', 'b', 'c', 'd'], 2), [['a', 'b'], ['c', 'd']])
Tools.test(chunk(['a', 'b', 'c', 'd'], 3), [['a', 'b', 'c'], ['d']])

Tools.time(
    () => { chunk(['a', 'b', 'c', 'd'], 3) },   // 0.674ms
    () => { _.chunk(['a', 'b', 'c', 'd'], 3) }  // 0.975ms
)

/**

lodash的计算效率比自己的要慢，可能的原因是：
1. 新版的 v8 对一些自建方法有额外的优化。
2. lodash 的实现中有对参数的判定和处理，在 typescript 中并不需要。

 */
