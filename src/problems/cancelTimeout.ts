type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn = (...args: JSONValue[]) => void

function cancellable(fn: Fn, args: JSONValue[], t: number): Function {
    // cancelFn function//
    const cancelFn = function () {
        clearTimeout(timer);
    };
    const timer = setTimeout(() => {
        fn(...args)
    }, t);
    return cancelFn;
};

const result: number[] = []

const fn = (x: number) => x * 5
const args = [2], t = 20, cancelT = 50

const log = (...argsArr: JSONValue[]) => {
    result.push(fn(...argsArr as [any]))
}

const cancel = cancellable(fn as any, args, t);

setTimeout(() => {
    cancel()
    console.log(result) // [{"time":20,"returned":10}]
}, cancelT)
