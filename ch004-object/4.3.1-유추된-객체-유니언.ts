const poem =
  Math.random() > 0.5
    ? { name: 'The Double Image', pages: 7 }
    : { name: 'Her Kind', rhymes: true }

/*
const poem: {
    name: string;
    pages: number;
    rhymes?: undefined;
} | {
    name: string;
    rhymes: boolean;
    pages?: undefined;
}
*/

poem.name
poem.pages
poem.rhymes
