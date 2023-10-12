type Poem = {
  author: {
    firstName: string
    lastName: string
  }
  name: string
}

const poenMatch: Poem = {
  author: {
    firstName: 'Sylvia',
    lastName: 'Plath',
  },
  name: 'Lady Lazarus',
}

const poemMismatch: Poem = {
  author: {
    name: 'Sylvia',
    // Object literal may only specify known properties, and 'name' does not exist in type '{ firstName: string; lastName: string; }'.ts(2353)
  },
  name: 'Tulips',
}

// 중첩된 타입을 자체 타입 별칭으로 추출
type Author = {
  firstName: string
  lastName: string
}

type Poem2 = {
  author: Author
  name: string
}

const poemMismatch2: Poem2 = {
  author: {
    name: 'Sylvia Plath',
    // Object literal may only specify known properties, and 'name' does not exist in type 'Author'.ts(2353)
  },
  name: 'Tulips',
}
