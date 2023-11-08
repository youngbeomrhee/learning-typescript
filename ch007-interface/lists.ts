// 7.1 타입별칭 vs 인터페이스
{
  type T = {
    s: string
    n: number
  }

  interface I {
    s: string
    n: number
  }

  //
  let valueLater: I

  valueLater = {
    s: 's',
  }

  valueLater = {
    n: 1,
  }

  valueLater = {
    s: 's',
    n: 1,
  }
}

// 7.2.2 읽기 전용 속성
{
  interface ReadOnly {
    readonly s: string
  }

  function tryChangeReadonly(p: ReadOnly) {
    console.log(p.s)
    p.s += '!'
  }

  const inferredReadOnly = {
    s: 'Hello, world',
  }
  inferredReadOnly.s += '!'
  tryChangeReadonly(inferredReadOnly)
}

// 7.2.3 함수와 메서드
{
  interface HasBothFunctionTypes {
    // readonly method(): string
    method(): string
    readonly property: () => string
  }
}

// 7.2.4 호출 시그니처
{
  type TCallSignature = (s: string) => number
  interface ICallSignature {
    (s: string): number
  }
  const tc: TCallSignature = (s) => s.length
  const ic: ICallSignature = (s) => s.length

  interface IFunctionWithProperty {
    p: number
    (): void
  }

  let ifwp: IFunctionWithProperty
  function hasProperty() {
    // hasProperty.p += 1
  }

  hasProperty.p = 1

  ifwp = hasProperty

  const ifwp2: IFunctionWithProperty = () => {}
  ifwp2.p = 1
}

// 7.2.5 인덱스 시그니처
{
  interface IIndexSignature {
    [k: string]: number
  }

  const o: IIndexSignature = {}
  o.a = 1
  o['b'] = 2
  // 동적 key는 제대로 검증하지 못한다
  o[0] = 2

  interface IMixPropertyNIndex {
    // p: string // 인덱스 시그니처와 다른 type 지정 불가
    p: number
    [i: string]: number
  }

  interface INumberIndexSignature {
    [i: string]: string
    [i: number]: string | number
  }

  interface INumberIndexSignature2 {
    [i: number]: string
    [i: string]: string | number
  }
}

// 7.2.6 중첩 인터페이스
{
  interface I {
    s: string
    i: INested
  }

  interface INested {
    n: number
    b: boolean
  }

  let i: I
  i = {
    s: '',
    i: {
      n: 1,
      b: true,
    },
  }

  // i = {
  //   s: '',
  //   i: {
  //     n: 1,
  //   },
  // }
}

// 7.3 인터페이스 확장
{
  interface IDerived extends ISuper {
    b: string
  }
  interface ISuper {
    a: string
  }

  let ok: IDerived = {
    a: '',
    b: '',
  }

  let missing: IDerived = {
    a: '',
  }
}

// 7.3.1 재정의 된 속성
{
  interface ISuper {
    s: string | null
  }
  interface IOverride extends ISuper {
    s: string
  }
  interface IOverride2 extends ISuper {
    s: number
  }

  interface ISuper2 {
    s: string
  }
  interface IOverride3 extends ISuper2 {
    s: string | null
  }
}

// 7.3.2 다중 인터페이스 확장
{
  interface IA {
    a: number
  }
  interface IB {
    b: string
  }
  interface IMultipleExtends extends IA, IB {
    c: boolean
  }
  function useIme(ime: IMultipleExtends) {
    ime.a
    ime.b
    ime.c
  }
}

// 7.4 인터페이스 병합
{
  interface IMerged {
    a: string
  }
  interface IMerged {
    b: string
  }

  function useIm(im: IMerged) {
    im.a
    im.b
  }
}

// 7.4.1 이름이 충돌되는 멤버
{
  interface IMerged {
    method(a: string): string
    p: string
    property: () => string
  }
  interface IMerged {
    // 메서드는 오버로딩 가능
    method(a: number): number
    // 속성은 오버로딩 불가
    property: () => number
    p: number
  }

  function useIm2(im: IMerged) {
    const a: number = im.method('s')
  }
}

{
  interface Checkable {
    check(name: string | number): boolean
  }

  class NameChecker implements Checkable {
    check(s: string) {
      // Notice no error here
      return s.toLowerCase() === 'ok'
      //         ^?
    }
  }
}
