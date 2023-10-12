type Book = {
  author?: string
  pages: number
}

const ok: Book = {
  author: 'Rita Dove',
  pages: 80,
}

const ok2: Book = {
  pages: 80,
}

const missing: Book = {
  // Property 'pages' is missing in type '{ author: string; }' but required in type 'Book'.ts(2741)
  author: 'Rita Dove',
}

// undefined를 포함한 union type과는 다름
type Writers = {
  author: string | undefined
  editor?: string
}

// Ok: author는 undefined로 제공됨
const hasRequired: Writers = {
  author: undefined,
}

const missingRequired: Writers = {}
// Property 'author' is missing in type '{}' but required in type 'Writers'.ts(2741)
