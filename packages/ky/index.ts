import kyInstance, { createKyApis, prefix } from './kyInstance';

export const ky = createKyApis(kyInstance);
export const API_URL = prefix;
