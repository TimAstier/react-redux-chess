import algebricToIndex from '../algebricToIndex';

describe('algebricToIndex', () => {
  it('converts an algebric notation into its index', () => {
    expect(algebricToIndex('e4')).toEqual(36);
    expect(algebricToIndex('a8')).toEqual(0);
    expect(algebricToIndex('h1')).toEqual(63);
  });
});
