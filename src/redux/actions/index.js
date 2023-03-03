import { SAVE_PERSONAL_DATA } from "../../services/types";

export const savePersonalDataInGlobalState = (param) => ({
  type: SAVE_PERSONAL_DATA,
  payload: param,
});
