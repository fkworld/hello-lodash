// 一些测试方法

/**
 * 测试是否实现功能
 * @param test_name
 * @param real_return
 * @param right_return
 */
export function test(real_return: any, right_return: any) {
    if (JSON.stringify(real_return) === JSON.stringify(right_return)) {
        console.log("ok!")
    } else {
        console.log("error!", real_return, right_return)
    }
}

/**
 * 测试执行的效率
 * @param f
 * @param count
 */
export function time(f_self: Function, f_lodash: Function, count = 1000) {
    console.log(`测试次数 = ${count}`)
    console.time("自己的实现")
    for (let i = 0; i < count; i += 1) { f_self() }
    console.timeEnd("自己的实现")
    console.time("lodash 的实现")
    for (let i = 0; i < count; i += 1) { f_lodash() }
    console.timeEnd("lodash 的实现")
}
