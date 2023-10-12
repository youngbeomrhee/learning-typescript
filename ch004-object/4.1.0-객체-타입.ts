const poet = {
  born: 1935,
  name: 'Mary Oliver',
}

poet['born']
poet.name

poet.end // Property 'end' does not exist on type '{ born: number; name: string; }'.ts(2339)
