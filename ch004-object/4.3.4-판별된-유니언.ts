type PoemWithPages = {
  name: string
  pages: number
  type: 'pages'
}

type PoemWithRhymes = {
  name: string
  rhymes: boolean
  type: 'rhymes'
}

type Poem = PoemWithPages | PoemWithRhymes

const Poem: Poem =
  Math.random() > 0.5
    ? { name: 'The Double Image', pages: 7 }
    : { name: 'Her Kind', rhymes: true }

poem.name
poem.pages
poem.rhymes

export default {}
