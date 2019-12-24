// https://www.lodashjs.com/docs/latest#_compactarray

import * as Tools from "../Tools"
import _ from "lodash"

export function compact(array: any[]) {
    return array.filter(v => !!v)
}

Tools.test(compact([0, 1, false, 2, '', 3]), [1, 2, 3])

Tools.time(
    () => { compact([0, 1, false, 2, '', 3]) },     // 0.346ms
    () => { _.compact([0, 1, false, 2, '', 3]) },   // 0.355ms
)

/**

实现很简单
lodash 喜欢在源码中使用 while 循环

 */
