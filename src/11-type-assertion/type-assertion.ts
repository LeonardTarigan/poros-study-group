let urlQuery: string[] | string | undefined;

function fetchName(q: string) {
  console.log(`Fetching names containing ${q}`);
}

fetchName(urlQuery as string);
