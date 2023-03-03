import { SAVE_PERSONAL_DATA } from '../../services/types';

const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  uf: '',
};

function personalData(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SAVE_PERSONAL_DATA:
    return {
      ...state,
      ...action.payload,
    };
  default:
    return state;
  }
}

export default personalData;
