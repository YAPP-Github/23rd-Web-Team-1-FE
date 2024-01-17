import { cdnHandler } from './mocks/cdn';
import { feedHandlers } from './mocks/feed';

export const handlers = [...cdnHandler, ...feedHandlers];
