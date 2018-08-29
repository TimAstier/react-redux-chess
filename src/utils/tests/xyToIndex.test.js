import xyToIndex from '../xyToIndex';

describe('xyToIndex', () => {
  it('converts (x,y) coordinates into square index', () => {
    expect(xyToIndex(1, 1)).toEqual(56);
    expect(xyToIndex(3, 2)).toEqual(50);
    expect(xyToIndex(5, 6)).toEqual(20);
    expect(xyToIndex(8, 8)).toEqual(7);
  });
});
