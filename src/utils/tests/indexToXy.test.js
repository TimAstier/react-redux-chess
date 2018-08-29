import indexToXy from '../indexToXy';

describe('indexToXy', () => {
  
  it('returns [x, y] coordinates from squareIndex', () => {
    expect(indexToXy(0)).toEqual([1, 8]);
    expect(indexToXy(7)).toEqual([8, 8]);
    expect(indexToXy(8)).toEqual([1, 7]);
    expect(indexToXy(52)).toEqual([5, 2]);
  });
  
});
