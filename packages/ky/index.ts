import kyClientInstance from './kyClient';
import kyInstance, { createKyApis } from './kyInstance';

export const ky = createKyApis(kyInstance);
export const kyClient = createKyApis(kyClientInstance);
