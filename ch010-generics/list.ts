{
  function nonIdentity(input) {
    return input
  }

  // 함수의 반환타입 역시 any
  const any = nonIdentity(1) // any
  const any2 = nonIdentity('s') // any
}

{
  // 10.1 제네릭 함수
  function identity<T>(input: T) {
    return input
  }

  // 함수의 반환타입 역시 any
  const one = identity(1) // function identity<1>(input: 1): 1
  const s = identity('s') // function identity<"s">(input: "s"): "s"

  // 화살표 함수 사용
  const identity2 = <T>(input: T) => input
  const two = identity2(2)
  const t = identity2('t')
}

{
  // 10.1.1 명시적 제네릭 호출 타입
  function logWrapper<Input>(cb: (i: Input) => void) {
    return (input: Input) => {
      cb(input)
    }
  }
  logWrapper((i: string) => console.log(i.length))
  logWrapper((i) => console.log(i.length)) // 'i' is of type 'unknown'.ts(18046)

  // 명시적 제네릭 타입 인수 정의
  logWrapper<string>((i) => console.log(i.length))
}

{
  // 10.1.2 다중 함수 타입 매개변수
  function makeTuple<First, Second>(first: First, second: Second) {
    return [first, second] as const
  }
  let tuple = makeTuple(true, 'a') // tuple: readonly [boolean, string]

  function makePair<Key, Value>(key: Key, value: Value) {
    return { key, value }
  }
  makePair('a', 1)
  makePair<string, number>('a', 1)
  makePair<'a', 1>('a', 1)
  makePair<string>('a', 1) // Expected 2 type arguments, but got 1.

  function multiple<A, B, C>(a: A, b: B, c: C) {}
}

{
  // 10.2 제네릭 인터페이스
  interface Box<T> {
    inside: T
  }
  let stringBox: Box<string> = {
    inside: 'abc',
  }
  let numberBox: Box<number> = {
    inside: 1,
  }
  let incorrectBox: Box<number> = {
    inside: false, // Type 'boolean' is not assignable to type 'number'.ts(2322)
  }

  // 10.2.1 유추된 제네릭 인터페이스 타입
  interface LinkedNode<Value> {
    next?: LinkedNode<Value>
    value: Value
  }

  function getLast<Value>(node: LinkedNode<Value>): Value {
    return node.next ? getLast(node.next) : node.value
  }

  getLast({
    value: new Date(),
  })
  getLast({
    next: {
      value: 'z',
    },
    value: 'y',
  })
  getLast({
    next: {
      value: 'z',
    },
    value: 9,
  })
}

{
  // 10.3 제네릭 클래스
  class Secret<Key, Value> {
    key: Key
    value: Value
    constructor(key: Key, value: Value) {
      this.key = key
      this.value = value
    }
    getValue(key: Key): Value | undefined {
      return this.key === key ? this.value : undefined
    }
  }

  const storage = new Secret(1, 'a')
  const v = storage.getValue(1)
  const v2 = storage.getValue(2)

  // 10.3.1 명시적 제네릭 클래스 타입
  class CurriedCB<Input> {
    #cb: (i: Input) => void
    constructor(cb: (i: Input) => void) {
      this.#cb = (i: Input) => {
        cb(i)
      }
    }
    call(i: Input) {
      this.#cb(i)
    }
  }

  new CurriedCB((i: string) => console.log(i.length))
  new CurriedCB((i) => console.log(i.length)) // 'i' is of type 'unknown'.ts(18046)

  // 명시적 타입 인수 제공
  new CurriedCB<string>((i) => console.log(i.length))

  // 10.3.2 제네릭 클래스 확장
  class Quote<T> {
    lines: T

    constructor(lines: T) {
      this.lines = lines
    }
  }

  class SpokenQuote extends Quote<string[]> {
    speak() {
      console.log(this.lines.join('\n'))
    }
  }

  new Quote('i say').lines
  new Quote([1, 2, 3, 4, 5]).lines

  new SpokenQuote(['I say', 'You say']).lines
  new SpokenQuote([1, 2, 3, 4, 5]).lines

  class AttributedQuote<Value> extends Quote<Value> {
    speaker: string
    constructor(value: Value, speaker: string) {
      super(value)
      this.speaker = speaker
    }
    say() {
      console.log(`${this.speaker} is said`)
      console.log(this.lines)
    }
  }
  new AttributedQuote('I AM WHO I AM', 'God')

  // 10.3.3 제네릭 인터페이스 구현
  interface ActingCredit<Role> {
    role: Role
  }

  class MoviePart implements ActingCredit<string> {
    role: string
    speaking: boolean

    constructor(role: string, speaking: boolean) {
      this.role = role
      this.speaking = speaking
    }
  }

  const mainPart = new MoviePart('주인공', true)

  mainPart.role

  class IncorrectExtension implements ActingCredit<string> {
    role: boolean
  }

  // 10.3.4 메서드 제네릭
  class FactoryPair<Key> {
    key: Key
    constructor(key: Key) {
      this.key = key
    }
    createPair<Value>(value: Value) {
      return { key: this.key, value }
    }
  }

  const fp = new FactoryPair('role')
  fp.createPair(1)
  fp.createPair('a')

  // 10.3.5 정적 클래스 제네릭
  class BothLogger<OnInstance> {
    instanceLog(value: OnInstance) {
      return value
    }
    static staticLog<OnStatic>(value: OnStatic) {
      let fromInstance: OnInstance // Static members cannot reference class type parameters.ts(2302)
      return value
    }
  }
}

{
  // 10.4 제네릭 타입 별칭
  type Nullish<T> = T | null | undefined

  type InputOutput<Input, Output> = (input: Input) => Output
  let strNumber: InputOutput<string, number>
  strNumber = (str) => str.length
  strNumber = (str) => str.toUpperCase()

  // 10.4.1 제네릭 판별된 유니언
  interface FailureResult {
    error: Error
    succeed: false
  }
  interface SuccessfulResult<Data> {
    data: Data
    succeed: true
  }
  type Result<Data> = FailureResult | SuccessfulResult<Data>

  function handleResult(result: Result<String[]>) {
    if (result.succeed) {
      console.log(result.data.join('\n'))
    } else {
      console.error(result.error.message)
    }

    result.data
  }
}
{
  // 10.5 제네릭 제한자
  interface Quote<T = string> {
    value: T
  }
  let explicit: Quote<number> = { value: 123 }
  let implicit: Quote = { value: `Just do it` }
  let mismatch: Quote = { value: 1 }

  interface KeyValuePair<Key, Value = Key> {
    key: Key
    value: Value
  }
  let allExplicit: KeyValuePair<string, number> = {
    key: 'rating',
    value: 10,
  }
  let oneDefaulting: KeyValuePair<string> = {
    key: 'rating',
    value: 'ten',
  }
  let firstMissing: KeyValuePair = {
    key: 'rating',
    value: 10,
  }

  function inTheEnd<First, Second, Third = number, Fourth = string>() {}
  function inTheMiddle<First, Second = boolean, Third = number, Fourth>() {}
}

{
  // 10.6 제한된 제네릭 타입
  interface WithLength {
    length: number
  }

  function logWithLength<T extends WithLength>(input: T) {
    console.log(`logWithLength length: ${input.length}`)
    return input
  }

  logWithLength('str')
  logWithLength([false, true])
  logWithLength({ length: 123 })
  logWithLength(() => {})
  logWithLength(new Date()) // Date에는 length property가 없다

  // 10.6.1 keyof와 제한된 타입 매개변수
  function get<T, Key extends keyof T>(container: T, key: Key) {
    return container[key]
  }
  const obj = {
    a: 'str',
    b: [1, 2],
    c: 3,
  }
  const a = get(obj, 'a')
  const b = get(obj, 'b')
  const c = get(obj, 'c')
  const d = get(obj, 'd')

  function notGet<T>(container: T, key: keyof T) {
    return container[key]
  }

  // 실제로 넘기게 되는 2번째 인자와 상관없이 항상 string | number | number[] 의 union 타입을 가지게 됨
  const a2 = notGet(obj, 'a')
  const b2 = notGet(obj, 'b')
  const c2 = notGet(obj, 'c')
  const d2 = notGet(obj, 'd')
}

{
  // 10.7 Promise
  // new <T>(executor: (resolve: (value: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void): Promise<T>;
  const resolvesUnknown = new Promise((resolve, reject) => {
    // reject('fail')
    setTimeout(() => resolve('#1 resolvesUnknown Done!'), 1000)
  })
    .then((result) => {
      console.log('#1 resolvesUnknown done and then')
      console.log(result)
    })
    .catch((err: Error) => {
      console.error(err)
    })

  new Promise(() => {})

  const resolvesString = new Promise<string>((resolve, reject) => {
    setTimeout(() => resolve('#2 resolvesString Done!'), 1000)
  }).then((result) => {
    console.log('#2 resolvesString done and then')
    console.log(result)
  })

  const textEventually = new Promise<string>((resolve) => {
    setTimeout(() => resolve('#3 textEventually Done!'), 1000)
  })

  /*
  interface Promise<T> {
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;

    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
  }
  */
  const lengthEventually = textEventually
    .then((text) => {
      console.log(text)
      return text.length
    })
    .then((result) => {
      console.log('#3 textEventually done and then')
      console.log(result)
    })

  // 10.7.2 async 함수
  async function lengthAfterSecond(text: string) {
    const res = await new Promise((resolve) =>
      setTimeout(() => {
        resolve('#4 lengthAfterSecond Done!')
      }, 2000),
    )
    console.log(res)
    return text.length
  }

  lengthAfterSecond('lengthAfterSecond').then((res) => {
    console.log('#4 lengthImmediately done and then')
    console.log(res)
  })

  async function lengthImmediately(text: string) {
    console.log('#5 lengthImmediately Done!')
    return text.length
  }
  lengthImmediately('lengthImmediately').then((res) => {
    console.log('#5 lengthImmediately done and then')
    console.log(res)
  })

  async function givesPromiseForString(): Promise<string> {
    return 'Done!'
  }
  async function givesString(): string {
    return 'Done!'
  }
}

export default {}
