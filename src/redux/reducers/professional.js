import { SAVE_PROFESSIONAL_DATA } from '../../services/types';

const INITIAL_STATE = {
  resume: '',
  role: '',
  description: '',
};

function professionalData(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SAVE_PROFESSIONAL_DATA:
    return {
      ...state,
      ...action.payload,
    };
  default:
    return state;
  }
}

export default professionalData;
