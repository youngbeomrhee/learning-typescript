// 7.1 타입별칭 vs 인터페이스
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
// 7.2.2 읽기 전용 속성
{
    function tryChangeReadonly(p) {
        console.log(p.s);
        p.s += '!';
    }
    var inferredReadOnly = {
        s: 'Hello, world',
    };
    inferredReadOnly.s += '!';
    tryChangeReadonly(inferredReadOnly);
}
// 7.2.3 함수와 메서드
{
}
// 7.2.4 호출 시그니처
{
    var tc = function (s) { return s.length; };
    var ic = function (s) { return s.length; };
    var ifwp = void 0;
    function hasProperty() {
        // hasProperty.p += 1
    }
    hasProperty.p = 1;
    ifwp = hasProperty;
    var ifwp2 = function () { };
    ifwp2.p = 1;
}
// 7.2.5 인덱스 시그니처
{
    var o = {};
    o.a = 1;
    o['b'] = 2;
    // 동적 key는 제대로 검증하지 못한다
    o[0] = 2;
}
// 7.2.6 중첩 인터페이스
{
    var i = void 0;
    i = {
        s: '',
        i: {
            n: 1,
            b: true,
        },
    };
    // i = {
    //   s: '',
    //   i: {
    //     n: 1,
    //   },
    // }
}
// 7.3 인터페이스 확장
{
    var ok = {
        a: '',
        b: '',
    };
    var missing = {
        a: '',
    };
}
// 7.3.1 재정의 된 속성
{
}
// 7.3.2 다중 인터페이스 확장
{
    function useIme(ime) {
        ime.a;
        ime.b;
        ime.c;
    }
}
// 7.4 인터페이스 병합
{
    function useIm(im) {
        im.a;
        im.b;
    }
}
// 7.4.1 이름이 충돌되는 멤버
{
    function useIm2(im) {
        var a = im.method('s');
    }
}
{
    var NameChecker = /** @class */ (function () {
        function NameChecker() {
        }
        NameChecker.prototype.check = function (s) {
            // Notice no error here
            return s.toLowerCase() === 'ok';
            //         ^?
        };
        return NameChecker;
    }());
}
