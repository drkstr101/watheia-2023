import model from '@watheia/content-model';
import { globSync } from 'fast-glob';
import frontmatter from 'front-matter';
import { readFileSync } from 'fs';
import path from 'path';

// TODO use types?

// const pagesDir = sbConfig.pagesDir || 'content/pages';
// const dataDir = sbConfig.dataDir || 'content/data';

const allReferenceFields = {};

const supportedFileTypes = ['md', 'json'];

const globString = `**/*.{${supportedFileTypes.join(',')}}`;

Object.entries(model).forEach(([modelName, model]) => {
  model.fields?.forEach((field) => {
    if (
      field.type === 'reference' ||
      (field.type === 'list' && field.items?.type === 'reference')
    ) {
      allReferenceFields[modelName + ':' + field.name] = true;
    }
  });
});

function isRefField(modelName: string, fieldName: string) {
  return !!allReferenceFields[modelName + ':' + fieldName];
}

function contentFilesInPath(cwd: string) {
  const source = [`content/data/${globString}`, `content/pages/${globString}`];
  return globSync(source, { cwd }).map(readContent);
}

function readContent(file: string) {
  const rawContent = readFileSync(file, 'utf8');
  switch (path.extname(file).substring(1)) {
    case 'md':
      // eslint-disable-next-line no-case-declarations
      const parsedMd = frontmatter<Record<string, unknown>>(rawContent);
      return {
        ...parsedMd.attributes,
        content: parsedMd.body,
        __metadata: { id: file },
      };
    case 'json':
      return { ...JSON.parse(rawContent), __metadata: { id: file } };
    default:
      throw Error(`Unhandled file type: ${file}`);
  }
}

function resolveReferences(content, fileToContent) {
  if (!content || !content.type) return;

  const modelName = content.type;
  // Make Sourcebit-compatible
  if (!content.__metadata) content.__metadata = { modelName: content.type };

  for (const fieldName in content) {
    let fieldValue = content[fieldName];
    if (!fieldValue) continue;

    const isRef = isRefField(modelName, fieldName);
    if (Array.isArray(fieldValue)) {
      if (fieldValue.length === 0) continue;
      if (isRef && typeof fieldValue[0] === 'string') {
        fieldValue = fieldValue.map((filename) => fileToContent[filename]);
        content[fieldName] = fieldValue;
      }
      if (typeof fieldValue[0] === 'object') {
        fieldValue.forEach((o) => resolveReferences(o, fileToContent));
      }
    } else {
      if (isRef && typeof fieldValue === 'string') {
        fieldValue = fileToContent[fieldValue];
        content[fieldName] = fieldValue;
      }
      if (typeof fieldValue === 'object') {
        resolveReferences(fieldValue, fileToContent);
      }
    }
  }
}

export function fetchDocuments(schema = { rootPath: process.cwd() }) {
  const documents = contentFilesInPath(schema.rootPath);
  const fileToContent = Object.fromEntries(documents.map((e) => [e.__metadata.id, e]));

  documents.forEach((e) => resolveReferences(e, fileToContent));
  return documents;

  // pages.forEach((page) => {
  //   page.__metadata.urlPath = getPageUrl(page);
  // });

  // const site = data.find((e) => e.__metadata.modelName === model.Config.name);
  // return { objects, pages, props: { site: siteConfig } };
}
