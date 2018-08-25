import squareCoordinateToIndex from '../squareCoordinateToIndex';

describe('squareCoordinateToIndex', () => {
  it('converts a coordinate into its index', () => {
    expect(squareCoordinateToIndex('e4')).toEqual(36);
    expect(squareCoordinateToIndex('a8')).toEqual(0);
    expect(squareCoordinateToIndex('h1')).toEqual(63);
  });
});
