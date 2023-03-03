import { SAVE_PERSONAL_DATA, SAVE_PROFESSIONAL_DATA } from '../../services/types';

export const savePersonalDataInGlobalState = (param) => ({
  type: SAVE_PERSONAL_DATA,
  payload: param,
});

export const saveProfessionalDataInGlobalState = (param) => ({
  type: SAVE_PROFESSIONAL_DATA,
  payload: param,
});
