import { Model } from '@stackbit/types';

export interface ContentApi {
  resolve: () => ContentApi;
}

export interface LocalContentSchema {
  rootPath: string;
  models: Model[];
  include: string[];
}

export interface MetaTag {
  property: string;
  content: string;
  format: 'property' | 'name';
}
