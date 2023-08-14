export interface VinylRecord {
  artist: string;
  title: string;
  year: string;
}

export interface FeathersRecord {
  id: number;
  createdAt: string;
  updatedAt: string;
}

export interface FeathersQueryParams<ServiceType> {
  $limit?: number;
  $skip?: number;
  $sort?: {
    [key in keyof Partial<ServiceType>]: 1 | -1;
  };
}

export type FeathersFieldParam =
  | number
  | string
  | boolean
  | { $in: number[] }
  | { $nin: number[] }
  | { $lt: number | string }
  | { $lte: number | string }
  | { $gt: number | string }
  | { $gte: number | string }
  | { $ne: number | string }
  | { $or: any[] };

export type FeathersFieldParams<ServiceType> = Partial<
  Record<keyof ServiceType, FeathersFieldParam>
>;

/** Defines how we can query a record with Feathers, via:
 * Overall query params like $sort
 * Individual field params like $in
 * */
export type QueryParams<ServiceType> = FeathersQueryParam<ServiceType> &
  FeathersFieldParam<ServiceType>;

export interface FindResult<ServiceType> {
  limit: number;
  skip: number;
  total: number;
  items: ServiceType[];
}

export interface InfiniteQueryResult<ServiceType> {
  pages: FindResult<ServiceType>[];
  pageParams: number[];
}

export interface User {
  id: number;
  email: string;
  password?: string;
  googleId?: string;
  profilePicture?: string;
  facebookId?: string;
  discogsId?: number;
}

export type StackParamsList = {
  Login: undefined;
  Collection: undefined;
  AddRecordSearch: undefined;
  AddRecordForm: undefined;
};

export interface Record extends FeathersRecord {
  artist: {
    name: string;
  };
  name: string;
  year: number;
  smallImageUrl: string;
  largeImageUrl: string;
  discogsMasterId?: number;
  genres: string[];
}

interface SvgProps {
  color?: string;
}
