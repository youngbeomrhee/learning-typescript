type PoemWithPages = {
  name: string
  pages: number
}

type PoemWithRhymes = {
  name: string
  rhymes: boolean
}

type Poem = PoemWithPages | PoemWithRhymes

const poem: Poem =
  Math.random() > 0.5
    ? { name: 'The Double Image', pages: 7 }
    : { name: 'Her Kind', rhymes: true }

const Poem2: Poem = { name: 'The Double Image', pages: 7 }

poem.name
poem.pages
poem.rhymes

export default {}
