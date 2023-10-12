// 4.4 교차 타입
{
  type A = {
    a: string
  }

  type B = {
    b: string
  }

  type AandB = A & B

  const ab: AandB = {
    a: 'a',
    b: 'b',
  }
}

{
  type UandI = {
    a: string
  } & (
    | {
        b: string
        d: string
      }
    | {
        c: string
        d: string
      }
  )
  const uAndI: UandI = {
    a: '',
    b: '',
    d: '',
  }

  const uAndI1_2: UandI = {
    a: '',
    b: '',
    d: '',
  }
  type UandI2 =
    | {
        b: string
        d: string
      }
    | {
        c: string
        d: string
      }

  const uAndI2: UandI2 = {
    b: '',
    d: '',
  }

  const uAndI2_2: UandI2 = {
    b: '',
    d: '',
  }

  type BD = {
    b: string
    d: string
  }
  type CD = {
    c: string
    d: string
  }

  type BDunionCD = BD | CD

  const bDUnionCD: BDunionCD = {
    b: '',
    d: '',
  }

  const bDUnionCD2: BDunionCD = {
    c: '',
    d: '',
  }

  const bDUnionCD3: BDunionCD = {
    b: '',
    c: '',
    d: '',
  }
}

type Confused = ({ a: string } & { b: string }) | { c: string } | { d: string }
