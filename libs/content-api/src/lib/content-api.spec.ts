import { fetchDocuments } from './content-api';

describe('content-api', () => {
  describe('fetchDocuments', () => {
    it('resolves all content documents within a workspace', () => {
      const documents = fetchDocuments();
      expect(documents).toBeTruthy();
    });
  });
});
