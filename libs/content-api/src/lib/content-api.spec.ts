import { join } from 'path';
import { LocalContentApi } from './content-api';
import defaultModel from './model';

const testOptions = {
  rootPath: join(__dirname, '../../__mock__'),
  models: Object.values(defaultModel),
  include: ['content/data', 'content/pages'],
};

describe('content-api', () => {
  describe('LocalContentApi', () => {
    describe('#resolve()', () => {
      it('fully resolves all documents from the file-system', () => {
        const api = new LocalContentApi(testOptions).resolve();
        expect(api).toBeTruthy();
      });
    });
  });
});
