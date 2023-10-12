var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 8.2.1 함수 속성
{
    var C = /** @class */ (function () {
        function C() {
        }
        C.prototype.method = function () { };
        return C;
    }());
    console.log(new C().method === new C().method); // true
    console.log(new C().method === C.prototype.method); // true
    console.log(new C().property === new C().property); // true -> 둘 다 undefined. 책에서 false로 잘못 평가됨
    console.log(C.prototype.property); // undefined
}
// 8.4 클래스와 인터페이스
{
    var C = /** @class */ (function () {
        function C(s) {
            this.s = s;
        }
        C.prototype.f = function (n) { };
        return C;
    }());
    // Interface를 implements 했다고 타입까지 자동으로 추론해 주지는 않는다
    var C2 = /** @class */ (function () {
        function C2(s) {
            this.s = s;
        }
        C2.prototype.f = function (n) { };
        return C2;
    }());
}
// 8.5.4 재정의 된 속성
{
    var S = /** @class */ (function () {
        function S() {
        }
        return S;
    }());
    var C = /** @class */ (function (_super) {
        __extends(C, _super);
        function C(s) {
            var _this = _super.call(this) || this;
            _this.s = s;
            return _this;
        }
        return C;
    }(S));
    var S2 = /** @class */ (function () {
        function S2() {
            this.s = '';
        }
        return S2;
    }());
    var C2 = /** @class */ (function (_super) {
        __extends(C2, _super);
        function C2() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.s = Math.random() > 0.5 ? 1 : 'a';
            return _this;
        }
        return C2;
    }(S2));
}
// 8.7.1 정적 필드 제한자
{
    var C = /** @class */ (function () {
        function C() {
            this.p = 'protected';
        }
        C.s = 'static';
        C.ps = 'protected static';
        return C;
    }());
    var SubC = /** @class */ (function (_super) {
        __extends(SubC, _super);
        function SubC() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return SubC;
    }(C));
    console.log(SubC.s);
    console.log(SubC.ps);
    console.log(SubC.p);
}
