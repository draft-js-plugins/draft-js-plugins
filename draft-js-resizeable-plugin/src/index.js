import Decorator from './decorators/resizeable';

const resizeablePlugin = () => ({ });

export default resizeablePlugin;
export const ResizeableDecorator = options => Decorator(options);
