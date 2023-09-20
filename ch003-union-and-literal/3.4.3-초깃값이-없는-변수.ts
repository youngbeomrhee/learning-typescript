export let mathematician: string
mathematician?.length // Error: Variable 'mathematician' is used before being assigned.ts(2454)

mathematician = 'Mark Goldberg'
mathematician?.length

export let mathematician2: string | undefined
mathematician2?.length

mathematician2 = 'Mark Goldberg'
mathematician2?.length
