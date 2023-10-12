let poetLater: {
  born: number
  name: string
}

poetLater = {
  born: 1935,
  name: 'Mary Oliver',
}

poetLater.born = 1910
poetLater.name = '이상'

poetLater = 'Sappho' // Type 'string' is not assignable to type '{ born: number; name: string; }'.
poetLater.born = 'Unknown' // Type 'string' is not assignable to type 'number'.ts(2322)
