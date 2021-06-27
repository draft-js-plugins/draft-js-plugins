import { ReactElement } from 'react';
import { MentionData } from '../../';
import { MentionPluginTheme } from '../../theme';
interface DefaultEntryComponentProps {
    mention: MentionData;
    theme?: MentionPluginTheme;
    isFocused: boolean;
    searchValue?: string;
}
export default function DefaultEntryComponent(props: DefaultEntryComponentProps): ReactElement;
export {};
