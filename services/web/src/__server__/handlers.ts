import { cdnHandler } from './mocks/cdn';
import { contactHandlers } from './mocks/contact';
import { feedHandlers } from './mocks/feed';

export const handlers = [...cdnHandler, ...feedHandlers, ...contactHandlers];
