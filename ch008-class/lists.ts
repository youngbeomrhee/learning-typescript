// 8.2.1 함수 속성
{
  class C {
    method() {}
    property: () => {}
    // strict 모드 (tsc --init으로 설정시 초깃값)에서는 오류
    property2!: () => {}
    // Non-null assertion operator 로 null 체크 비활성화
  }

  console.log(new C().method === new C().method) // true
  console.log(new C().method === C.prototype.method) // true

  console.log(new C().property === new C().property) // true -> 둘 다 undefined. 책에서 false로 잘못 평가됨
  console.log(C.prototype.property) // undefined
}

// 8.4 클래스와 인터페이스
{
  interface I {
    s: string
    f(n: number): void
  }
  class C implements I {
    s: string

    constructor(s: string) {
      this.s = s
    }

    f(n: number) {}
  }

  // Interface를 implements 했다고 타입까지 자동으로 추론해 주지는 않는다
  class C2 implements I {
    s

    constructor(s) {
      this.s = s
    }

    f(n) {}
  }
}

// 8.5.4 재정의 된 속성
{
  class S {
    s?: number
  }
  class C extends S {
    s: number

    constructor(s: number) {
      super()
      this.s = s
    }
  }
  class S2 {
    s = ''
  }
  class C2 extends S2 {
    s = Math.random() > 0.5 ? 1 : 'a'
  }
}

// 8.7.1 정적 필드 제한자
{
  class C {
    static s = 'static'
    protected static ps = 'protected static'
    protected p = 'protected'
  }

  class SubC extends C {}

  console.log(SubC.s)
  console.log(SubC.ps)
  console.log(SubC.p)
}
