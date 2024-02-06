import frontmatter from 'front-matter';
import { readFileSync } from 'fs';
import { extname, join } from 'path';

function parseMarkdown(file: string, rawContent: string) {
  const { attributes, body } = frontmatter<Record<string, unknown>>(rawContent);
  return {
    ...attributes,
    content: body,
    __metadata: { id: file },
  };
}

function parseJson(file: string, rawContent: string) {
  return {
    ...JSON.parse(rawContent),
    __metadata: { id: file },
  };
}

export default function makeFileParser(rootPath: string) {
  return (file: string) => {
    const absolutePath = join(rootPath, file);
    const rawContent = readFileSync(absolutePath, 'utf8');
    const ext = extname(file).substring(1);

    switch (ext) {
      case 'md':
        return parseMarkdown(file, rawContent);
      case 'json':
        return parseJson(file, rawContent);
      default:
        throw Error(`Unhandled file type: ${file}`);
    }
  };
}
