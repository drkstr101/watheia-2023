import { LocalContentApi } from '../src/content-api';

describe('watheia.content-api', () => {
  describe('#resolve()', () => {
    it('fully resolves all content entries from default options', async () => {
      const api = await LocalContentApi.resolve();
      expect(api).toBeInstanceOf(LocalContentApi);
      // console.log(api.documents);
    });
  });
});
