import { Record } from '@src/types';

type RecordParts = Pick<
  Record,
  'id' | 'artist' | 'title' | 'year' | 'smallImageUrl'
>;

export default function useRecordsList(): {
  data: {
    items: RecordParts[];
  };
} {
  const recordsResponse: any[] = [
    {
      id: 1100678,
      instance_id: 942501139,
      date_added: '2022-02-09T18:40:10-08:00',
      rating: 0,
      basic_information: {
        id: 1100678,
        master_id: 90462,
        master_url: 'https://api.discogs.com/masters/90462',
        resource_url: 'https://api.discogs.com/releases/1100678',
        thumb:
          'https://i.discogs.com/sTHsk75OhiKPRUDwz2nTN2tBpI9aUiigS_yN-DmwEJg/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExMDA2/NzgtMTMyMDAzMjMz/NC5qcGVn.jpeg',
        cover_image:
          'https://i.discogs.com/oNpC_DMxFOhd9R1pxj7Lnyo8f_4ffsuv4x-NP4o7gIM/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExMDA2/NzgtMTMyMDAzMjMz/NC5qcGVn.jpeg',
        title: 'I Wrote A Simple Song',
        year: 1971,
        formats: [
          {
            name: 'Vinyl',
            qty: '1',
            text: 'Gatefold, Monarch',
            descriptions: ['LP', 'Album'],
          },
        ],
        artists: [
          {
            name: 'Billy Preston',
            anv: '',
            join: '',
            role: '',
            tracks: '',
            id: 46767,
            resource_url: 'https://api.discogs.com/artists/46767',
          },
        ],
        labels: [
          {
            name: 'A&M Records',
            catno: 'SP-3507',
            entity_type: '1',
            entity_type_name: 'Label',
            id: 904,
            resource_url: 'https://api.discogs.com/labels/904',
          },
        ],
        genres: ['Funk / Soul', 'Blues'],
        styles: ['Rhythm & Blues', 'Soul', 'Funk'],
      },
      folder_id: 1,
      notes: [
        {
          field_id: 1,
          value: 'Very Good Plus (VG+)',
        },
      ],
    },
    {
      id: 245644,
      instance_id: 917601283,
      date_added: '2022-01-17T18:26:53-08:00',
      rating: 0,
      basic_information: {
        id: 245644,
        master_id: 16844,
        master_url: 'https://api.discogs.com/masters/16844',
        resource_url: 'https://api.discogs.com/releases/245644',
        thumb:
          'https://i.discogs.com/u43xBCsT5IlVBfgfSMaiTf_kSx-giqDK4ZLszUS73uM/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI0NTY0/NC0xNTQzNDQ1ODM1/LTc5MzIuanBlZw.jpeg',
        cover_image:
          'https://i.discogs.com/tSRLzNLh5XJ7973SehiWHJlcInIBhQ--we0H3RmAm0Q/rs:fit/g:sm/q:90/h:592/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI0NTY0/NC0xNTQzNDQ1ODM1/LTc5MzIuanBlZw.jpeg',
        title: 'Right On Time',
        year: 1977,
        formats: [
          {
            name: 'Vinyl',
            qty: '1',
            text: 'Terre Haute Pressing',
            descriptions: ['LP', 'Album', 'Stereo'],
          },
        ],
        artists: [
          {
            name: 'Brothers Johnson',
            anv: 'The Brothers Johnson',
            join: '',
            role: '',
            tracks: '',
            id: 88606,
            resource_url: 'https://api.discogs.com/artists/88606',
          },
        ],
        labels: [
          {
            name: 'A&M Records',
            catno: 'SP-4644',
            entity_type: '1',
            entity_type_name: 'Label',
            id: 904,
            resource_url: 'https://api.discogs.com/labels/904',
          },
        ],
        genres: ['Funk / Soul'],
        styles: ['Soul', 'Funk'],
      },
      folder_id: 1,
      notes: [
        {
          field_id: 1,
          value: 'Very Good Plus (VG+)',
        },
      ],
    },
  ];

  const items: RecordParts[] = recordsResponse.map(
    ({
      id,
      basic_information: {
        artists = [],
        title = '',
        year = '',
        thumb = '',
        cover_image = '',
      } = {},
    }) => ({
      id,
      artist: artists[0]?.name,
      title,
      year,
      smallImageUrl: thumb,
      largeImageUrl: cover_image,
    }),
  );

  return { data: { items } };
}
