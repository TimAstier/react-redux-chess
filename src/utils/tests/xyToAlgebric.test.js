import xyToAlgebric from '../xyToAlgebric';

describe('xyToAlgebric', () => {
  it('converts (x,y) coordinates into algebric square notation', () => {
    expect(xyToAlgebric(1, 1)).toEqual('a1');
    expect(xyToAlgebric(3, 2)).toEqual('c2');
    expect(xyToAlgebric(5, 6)).toEqual('e6');
    expect(xyToAlgebric(8, 8)).toEqual('h8');
  });
});
