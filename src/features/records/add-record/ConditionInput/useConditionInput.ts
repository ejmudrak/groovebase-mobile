// Uses Goldmine Standards via https://support.discogs.com/hc/en-us/articles/360001566193-How-To-Grade-Items
export default function () {
  const conditions = [
    {
      id: 1,
      name: 'Mint',
      abbreviation: 'M',
    },
    {
      id: 2,
      name: 'Near Mint',
      abbreviation: 'NM/M-',
    },
    {
      id: 3,
      name: 'Very Good Plus',
      abbreviation: 'VG+',
    },
    {
      id: 4,
      name: 'Very Good',
      abbreviation: 'VG',
    },
    {
      id: 5,
      name: 'Good Plus',
      abbreviation: 'G+',
    },
    {
      id: 6,
      name: 'Good',
      abbreviation: 'G',
    },
    {
      id: 7,
      name: 'Fair',
      abbreviation: 'F',
    },
    {
      id: 8,
      name: 'Poor',
      abbreviation: 'P',
    },
  ];

  const conditionOptions = conditions.map((c) => ({
    value: c.id.toString(),
    label: `${c.name} (${c.abbreviation})`,
  }));

  return { conditions, conditionOptions };
}
