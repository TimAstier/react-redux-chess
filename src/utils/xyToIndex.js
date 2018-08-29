import algebricToIndex from './algebricToIndex';
import xyToAlgebric from './xyToAlgebric';

const xyToIndex = (x, y) => {
  return algebricToIndex(xyToAlgebric(x, y));
}

export default xyToIndex;
