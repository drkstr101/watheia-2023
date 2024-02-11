import model, { types } from '../src/index';

describe('watheia.content-model', () => {
  it('exports a content model', () => {
    expect(model).toBeInstanceOf(Object);
  });
  it('exports a dictionary of model property types', () => {
    expect(model).toBeTruthy();
    expect(types).toBeTruthy();
  });
});
