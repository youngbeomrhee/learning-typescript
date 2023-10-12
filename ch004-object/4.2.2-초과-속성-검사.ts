type Poet = {
  born: number
  name: string
}

// OK
const poetMatch: Poet = {
  born: 1928,
  name: 'Maya Angelou',
}

const extraProperty: Poet = {
  activity: 'walking',
  // Object literal may only specify known properties, and 'activity' does not exist in type 'Poet'.ts(2353)
  born: 1935,
  name: 'Mary Oliver',
}

// 기존 객체 리터럴을 제공하면 초과 속성 검사를 우회
const existingObject = {
  activity: 'walking',
  born: 1935,
  name: 'Mary Oliver',
}

const extraPropertyButOk: Poet = existingObject // OK
