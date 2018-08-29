import sortNestedArray from '../sortNestedArray';

describe('sortNestedArray', () => {
  it('sorts a 2x2 array of XY coordinates', () => {
    const array = [ [5, 4], [5, 3], [2, 9], [1, 10], [4, 8] ];
    expect(sortNestedArray(array))
      .toEqual([ [1, 10], [2, 9], [4, 8], [5, 3], [5, 4] ]);  
  });
});
