import { ReactElement, ReactNode } from 'react';
import { MentionPluginStore, PopperOptions } from '..';
interface PopoverProps {
    store: MentionPluginStore;
    children: ReactNode;
    className?: string;
    popperOptions?: PopperOptions;
}
export default function Popover({ store, children, className, popperOptions, }: PopoverProps): ReactElement;
export {};
