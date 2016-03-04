import createEmptyFn from './utils/createEmpty';
import createWithContentFn from './utils/createWithContent';
import createWithTextFn from './utils/createWithText';

export default from './Editor';
export const createWithContent = createWithContentFn;
export const createWithText = createWithTextFn;
export const createEmpty = createEmptyFn;
