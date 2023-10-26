"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CurriedCB_cb;
Object.defineProperty(exports, "__esModule", { value: true });
{
    function nonIdentity(input) {
        return input;
    }
    // 함수의 반환타입 역시 any
    nonIdentity(1); // any
    nonIdentity('s'); // any
    var a = { a: 1 };
    var identityA = nonIdentity(a); // any
    var identityA2 = nonIdentity({ a: 1 }); // any
    function nonIdentity2(input) {
        return input;
    }
}
{
    // 10.1 제네릭 함수
    function identity(input) {
        return input;
    }
    function identity2(input) {
        return input;
    }
    // 함수의 반환타입 역시 any
    identity(1); // function identity<1>(input: 1): 1
    identity('s'); // function identity<"s">(input: "s"): "s"
    var a = { a: 1 };
    var identityA = identity(a); // function identity<IA>(input: IA): IA
    var identityA2 = identity({ a: 1 }); // function identity<IA>(input: IA): IA
    var identityA3 = identity({ a: 1 });
    /*
    function identity<{
        a: number;
    }>(input: {
        a: number;
    }): {
        a: number;
    }
    */
    // 화살표 함수 사용
    var identity3 = function (input) { return input; };
}
{
    // 10.1.1 명시적 제네릭 호출 타입
    function logWrapper(cb) {
        return function (input) {
            cb(input);
        };
    }
    logWrapper(function (i) { return console.log(i.length); });
    logWrapper(function (i) { return console.log(i.length); }); // 'i' is of type 'unknown'.ts(18046)
    // 명시적 제네릭 타입 인수 정의
    logWrapper(function (i) { return console.log(i.length); });
}
{
    // 10.1.2 다중 함수 타입 매개변수
    function makeTuple(first, second) {
        return [first, second];
    }
    var tuple = makeTuple(true, 'a'); // tuple: readonly [boolean, string]
    function makePair(key, value) {
        return { key: key, value: value };
    }
    makePair('a', 1);
    makePair('a', 1);
    makePair('a', 1);
    makePair('a', 1);
    function multiple(a, b, c) { }
}
{
    var stringBox = {
        inside: 'abc',
    };
    var numberBox = {
        inside: 1,
    };
    var incorrectBox = {
        inside: false,
    };
    function getLast(node) {
        return node.next ? getLast(node.next) : node.value;
    }
    getLast({
        value: new Date(),
    });
    getLast({
        next: {
            value: 'z',
        },
        value: 'y',
    });
    getLast({
        next: {
            value: 'z',
        },
        value: 9,
    });
}
{
    // 10.3 제네릭 클래스
    var Secret = /** @class */ (function () {
        function Secret(key, value) {
            this.key = key;
            this.value = value;
        }
        Secret.prototype.getValue = function (key) {
            return this.key === key ? this.value : undefined;
        };
        return Secret;
    }());
    var storage = new Secret(1, 'a');
    var v = storage.getValue(1);
    var v2 = storage.getValue(2);
    // 10.3.1 명시적 제네릭 클래스 타입
    var CurriedCB = /** @class */ (function () {
        function CurriedCB(cb) {
            _CurriedCB_cb.set(this, void 0);
            __classPrivateFieldSet(this, _CurriedCB_cb, function (i) {
                cb(i);
            }, "f");
        }
        CurriedCB.prototype.call = function (i) {
            __classPrivateFieldGet(this, _CurriedCB_cb, "f").call(this, i);
        };
        return CurriedCB;
    }());
    _CurriedCB_cb = new WeakMap();
    new CurriedCB(function (i) { return console.log(i.length); });
    new CurriedCB(function (i) { return console.log(i.length); }); // 'i' is of type 'unknown'.ts(18046)
    // 명시적 타입 인수 제공
    new CurriedCB(function (i) { return console.log(i.length); });
    // 10.3.2 제네릭 클래스 확장
    var Quote = /** @class */ (function () {
        function Quote(lines) {
            this.lines = lines;
        }
        return Quote;
    }());
    var SpokenQuote = /** @class */ (function (_super) {
        __extends(SpokenQuote, _super);
        function SpokenQuote() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SpokenQuote.prototype.speak = function () {
            console.log(this.lines.join('\n'));
        };
        return SpokenQuote;
    }(Quote));
    new Quote('i say').lines;
    new Quote([1, 2, 3, 4, 5]).lines;
    new SpokenQuote(['I say', 'You say']).lines;
    new SpokenQuote([1, 2, 3, 4, 5]).lines;
    var AttributedQuote = /** @class */ (function (_super) {
        __extends(AttributedQuote, _super);
        function AttributedQuote(value, speaker) {
            var _this = _super.call(this, value) || this;
            _this.speaker = speaker;
            return _this;
        }
        AttributedQuote.prototype.say = function () {
            console.log("".concat(this.speaker, " is said"));
            console.log(this.lines);
        };
        return AttributedQuote;
    }(Quote));
    new AttributedQuote('I AM WHO I AM', 'God');
    var MoviePart = /** @class */ (function () {
        function MoviePart(role, speaking) {
            this.role = role;
            this.speaking = speaking;
        }
        return MoviePart;
    }());
    var mainPart = new MoviePart('주인공', true);
    mainPart.role;
    var IncorrectExtension = /** @class */ (function () {
        function IncorrectExtension() {
        }
        return IncorrectExtension;
    }());
    // 10.3.4 메서드 제네릭
    var FactoryPair = /** @class */ (function () {
        function FactoryPair(key) {
            this.key = key;
        }
        FactoryPair.prototype.createPair = function (value) {
            return { key: this.key, value: value };
        };
        return FactoryPair;
    }());
    var fp = new FactoryPair('role');
    fp.createPair(1);
    fp.createPair('a');
    // 10.3.5 정적 클래스 제네릭
    var BothLogger = /** @class */ (function () {
        function BothLogger() {
        }
        BothLogger.prototype.instanceLog = function (value) {
            return value;
        };
        BothLogger.staticLog = function (value) {
            var fromInstance; // Static members cannot reference class type parameters.ts(2302)
            return value;
        };
        return BothLogger;
    }());
}
{
    var strNumber = void 0;
    strNumber = function (str) { return str.length; };
    strNumber = function (str) { return str.toUpperCase(); };
    function handleResult(result) {
        if (result.succeed) {
            console.log(result.data.join('\n'));
        }
        else {
            console.error(result.error.message);
        }
        result.data;
    }
}
{
    var explicit = { value: 123 };
    var implicit = { value: "Just do it" };
    var mismatch = { value: 1 };
    var allExplicit = {
        key: 'rating',
        value: 10,
    };
    var oneDefaulting = {
        key: 'rating',
        value: 'ten',
    };
    var firstMissing = {
        key: 'rating',
        value: 10,
    };
    function inTheEnd() { }
    function inTheMiddle() { }
}
{
    function logWithLength(input) {
        console.log("logWithLength length: ".concat(input.length));
        return input;
    }
    logWithLength('str');
    logWithLength([false, true]);
    logWithLength({ length: 123 });
    logWithLength(function () { });
    logWithLength(new Date()); // Date에는 length property가 없다
    // 10.6.1 keyof와 제한된 타입 매개변수
    function get(container, key) {
        return container[key];
    }
    var obj = {
        a: 'str',
        b: [1, 2],
        c: 3,
    };
    var a = get(obj, 'a');
    var b = get(obj, 'b');
    var c = get(obj, 'c');
    var d = get(obj, 'd');
    function notGet(container, key) {
        return container[key];
    }
    // 실제로 넘기게 되는 2번째 인자와 상관없이 항상 string | number | number[] 의 union 타입을 가지게 됨
    var a2 = notGet(obj, 'a');
    var b2 = notGet(obj, 'b');
    var c2 = notGet(obj, 'c');
    var d2 = notGet(obj, 'd');
}
{
    // 10.7 Promise
    // new <T>(executor: (resolve: (value: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void): Promise<T>;
    var resolvesUnknown = new Promise(function (resolve, reject) {
        // reject('fail')
        setTimeout(function () { return resolve('#1 resolvesUnknown Done!'); }, 1000);
    })
        .then(function (result) {
        console.log('#1 resolvesUnknown done and then');
        console.log(result);
    })
        .catch(function (err) {
        console.error(err);
    });
    var resolvesString = new Promise(function (resolve, reject) {
        setTimeout(function () { return resolve('#2 resolvesString Done!'); }, 1000);
    }).then(function (result) {
        console.log('#2 resolvesString done and then');
        console.log(result);
    });
    var textEventually = new Promise(function (resolve) {
        setTimeout(function () { return resolve('#3 textEventually Done!'); }, 1000);
    });
    /*
    interface Promise<T> {
      then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
  
      catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    }
    */
    var lengthEventually = textEventually
        .then(function (text) {
        console.log(text);
        return text.length;
    })
        .then(function (result) {
        console.log('#3 textEventually done and then');
        console.log(result);
    });
    // 10.7.2 async 함수
    function lengthAfterSecond(text) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve) {
                            return setTimeout(function () {
                                resolve('#4 lengthAfterSecond Done!');
                            }, 2000);
                        })];
                    case 1:
                        res = _a.sent();
                        console.log(res);
                        return [2 /*return*/, text.length];
                }
            });
        });
    }
    lengthAfterSecond('lengthAfterSecond').then(function (res) {
        console.log('#4 lengthImmediately done and then');
        console.log(res);
    });
    function lengthImmediately(text) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log('#5 lengthImmediately Done!');
                return [2 /*return*/, text.length];
            });
        });
    }
    lengthImmediately('lengthImmediately').then(function (res) {
        console.log('#5 lengthImmediately done and then');
        console.log(res);
    });
}
exports.default = {};
