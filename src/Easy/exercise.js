function argumentsLengthNew() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.length;
}
;
console.log(argumentsLengthNew(1, 3)); // 3
