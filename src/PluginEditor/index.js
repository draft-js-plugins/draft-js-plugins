import createEmptyFn from './createEmpty';
import createWithContentFn from './createWithContent';
import createWithTextFn from './createWithText';

export default from './Editor';
export const createWithContent = createWithContentFn;
export const createWithText = createWithTextFn;
export const createEmpty = createEmptyFn;
