import { globSync } from 'fast-glob';
import { LocalContentSchema } from './content-api.types';
import makeFileParser from './local-file-resolver';
import defaultModel from './model';

const defaultOptions = {
  rootPath: process.env['WORKSPACE_ROOT'] ?? process.cwd(),
  models: Object.values(defaultModel),
  include: ['content/data', 'content/pages'],
};

const SUPPORTED_EXTENSIONS = ['json', 'yml', 'yaml', 'md', 'mdx'];

const GLOB_STR = `**/*.{${SUPPORTED_EXTENSIONS.join(',')}}`;

export class LocalContentApi {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public documents: unknown[] = [];

  constructor(public readonly options: LocalContentSchema = defaultOptions) {}

  resolve(): LocalContentApi {
    const { rootPath, include } = this.options;

    const parser = makeFileParser(rootPath);
    const source = include.map((str) => `${str}/${GLOB_STR}`);
    const documents = globSync(source, { cwd: rootPath }).map(parser);

    // const fileToContent = Object.fromEntries(documents.map((doc) => [doc.__metadata.id, doc]));
    // this.documents = documents.map((doc) => resolveReferences(doc, fileToContent));

    this.documents = documents;

    return this;
  }
}
