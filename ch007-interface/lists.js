{
    //
    var valueLater = void 0;
    valueLater = {
        s: 's',
    };
    valueLater = {
        n: 1,
    };
    valueLater = {
        s: 's',
        n: 1,
    };
}
var ex7_2_readonly;
(function (ex7_2_readonly) {
    function tryChangeReadonly(p) {
        console.log(p.s);
        p.s += '!';
    }
    var inferredReadOnly = {
        s: 'Hello, world',
    };
    inferredReadOnly.s += '!';
    tryChangeReadonly(inferredReadOnly);
})(ex7_2_readonly || (ex7_2_readonly = {}));
