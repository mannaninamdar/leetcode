type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

function argumentsLengthNew(...args: JSONValue[]): number {
    return args.length;
};


console.log(argumentsLengthNew(1, 3, 6, {}, [])); // 3

