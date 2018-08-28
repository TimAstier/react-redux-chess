import { ALGEBRIC_NOTATIONS } from '../constants';

const algebricToIndex = algebric => {
  return ALGEBRIC_NOTATIONS.findIndex(e => e === algebric);
}

export default algebricToIndex;
