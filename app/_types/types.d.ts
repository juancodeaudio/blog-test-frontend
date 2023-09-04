export interface Article {
  data: Datum[];
  meta: Meta;
}

export interface Datum {
  id:         number;
  attributes: DatumAttributes;
}

export interface DatumAttributes {
  title:       string;
  description: string;
  slug:        string;
  createdAt:   Date;
  updatedAt:   Date;
  publishedAt: Date;
  content:     string;
  likes:       number;
  cover:       Cover;
  category:    Category;
  author:      Author;
}

export interface Author {
  data: AuthorData;
}

export interface AuthorData {
  id:         number;
  attributes: PurpleAttributes;
}

export interface PurpleAttributes {
  name:        string;
  website:     string;
  biography:   string;
  slug:        string;
  createdAt:   Date;
  updatedAt:   Date;
  publishedAt: Date;
  username:    string;
}

export interface Category {
  data: CategoryData;
}

export interface CategoryData {
  id:         number;
  attributes: FluffyAttributes;
}

export interface FluffyAttributes {
  name:        string;
  description: null;
  slug:        string;
  createdAt:   Date;
  updatedAt:   Date;
  publishedAt: Date;
  cover:       Cover;
  author:      Author;
  category:    Category;
}

export interface Cover {
  data: CoverData;
}

export interface CoverData {
  id:         number;
  attributes: TentacledAttributes;
}

export interface TentacledAttributes {
  name:              string;
  alternativeText:   null;
  caption:           null;
  width:             number;
  height:            number;
  formats:           Formats;
  hash:              string;
  ext:               EXT;
  mime:              MIME;
  size:              number;
  url:               string;
  previewUrl:        null;
  provider:          string;
  provider_metadata: null;
  createdAt:         Date;
  updatedAt:         Date;
}

export enum EXT {
  Jpg = ".jpg",
}

export interface Formats {
  thumbnail: Large;
  small:     Large;
  medium:    Large;
  large?:    Large;
}

export interface Large {
  name:   string;
  hash:   string;
  ext:    EXT;
  mime:   MIME;
  path:   null;
  width:  number;
  height: number;
  size:   number;
  url:    string;
}

export enum MIME {
  ImageJPEG = "image/jpeg",
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page:      number;
  pageSize:  number;
  pageCount: number;
  total:     number;
}

export interface Author {
  data: AuthorDatum[];
  meta: Meta;
}

export interface AuthorDatum {
  id:         number;
  attributes: PurpleAttributes;
}

export interface PurpleAttributes {
  name:        string;
  website:     string;
  biography:   string;
  slug:        string;
  createdAt:   Date;
  updatedAt:   Date;
  publishedAt: Date;
  username:    string;
  avatar:      Avatar;
  articles:    Articles;
  background:  Avatar;
}

export interface Articles {
  data: ArticlesDatum[];
}

export interface ArticlesDatum {
  id:         number;
  attributes: FluffyAttributes;
}

export interface FluffyAttributes {
  title:       string;
  description: string;
  slug:        string;
  createdAt:   Date;
  updatedAt:   Date;
  publishedAt: Date;
  content:     string;
  likes:       number;
  blocks:      any[];
}

export interface Avatar {
  data: Data;
}

export interface Data {
  id:         number;
  attributes: DataAttributes;
}

export interface DataAttributes {
  name:              string;
  alternativeText:   null;
  caption:           null;
  width:             number;
  height:            number;
  formats:           Formats | null;
  hash:              string;
  ext:               EXT;
  mime:              MIME;
  size:              number;
  url:               string;
  previewUrl:        null;
  provider:          Provider;
  provider_metadata: null;
  createdAt:         Date;
  updatedAt:         Date;
}

export enum EXT {
  JPEG = ".jpeg",
  Jpg = ".jpg",
}

export interface Formats {
  thumbnail: Large;
  medium:    Large;
  large?:    Large;
  small:     Large;
}

export interface Large {
  name:   string;
  hash:   string;
  ext:    EXT;
  mime:   MIME;
  path:   null;
  width:  number;
  height: number;
  size:   number;
  url:    string;
}

export enum MIME {
  ImageJPEG = "image/jpeg",
}

export enum Provider {
  Local = "local",
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page:      number;
  pageSize:  number;
  pageCount: number;
  total:     number;
}
