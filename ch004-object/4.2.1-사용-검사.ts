// 정의된 property가 모두 존재해야 함
type FirstAndLastNames = {
  first: string
  last: string
}

const hasBoth: FirstAndLastNames = {
  first: 'Sarojini',
  last: 'Naidu',
}

const hasOnlyOne: FirstAndLastNames = {
  first: 'Sappho',
  // Property 'last' is missing in type '{ first: string; }' but required in type 'FirstAndLastNames'.ts(2741)
}

// property의 타입이 같아야 함
type TimeRange = {
  start: Date
}

const hasStartString: TimeRange = {
  start: '1879-02-13',
  // Type 'string' is not assignable to type 'Date'.ts(2322)
  // start: new Date('1879-02-13')
}

export default {}
