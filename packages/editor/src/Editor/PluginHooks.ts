import {
  ContentBlock,
  DraftEditorCommand,
  DraftHandleValue,
  DraftInlineStyle,
  EditorProps,
} from 'draft-js';
import { CSSProperties, KeyboardEvent } from 'react';
import { EditorCommand, EditorPlugin, PluginFunctions } from '..';

type EditorKeys = keyof EditorPlugin;
type EditorHandleKeys = keyof Pick<
  EditorPlugin,
  | 'handlePastedText'
  | 'handleBeforeInput'
  | 'handleDrop'
  | 'handleDroppedFiles'
  | 'handleKeyCommand'
  | 'handlePastedFiles'
  | 'handleReturn'
>;

type EditorEventKeys = keyof Pick<
  EditorPlugin,
  | 'onBlur'
  | 'onDownArrow'
  | 'onEscape'
  | 'onFocus'
  | 'onLeftArrow'
  | 'onRightArrow'
  | 'onTab'
  | 'onUpArrow'
>;

type EditorFnKeys = keyof Pick<
  EditorPlugin,
  'blockRendererFn' | 'blockStyleFn' | 'customStyleFn' | 'keyBindingFn'
>;

function isEditorHandleKey(key: EditorKeys): key is EditorHandleKeys {
  return key.startsWith('handle');
}
function isEditorEventKey(key: EditorKeys): key is EditorEventKeys {
  return key.startsWith('on');
}
function isEditorFnKey(key: EditorKeys): key is EditorFnKeys {
  return key.endsWith('Fn');
}

interface ResultBlock {
  props: Record<string, unknown>;
  component?: unknown;
}

function blockRendererFnHook(
  plugins: EditorPlugin[],
  pluginMethods: PluginFunctions
) {
  return (block: ContentBlock): unknown => {
    let resultBlock: ResultBlock = { props: {} };
    plugins.forEach((plugin) => {
      if (typeof plugin.blockRendererFn !== 'function') {
        return;
      }
      const result = plugin.blockRendererFn(block, pluginMethods);
      if (result !== undefined && result !== null) {
        const { props: pluginProps, ...pluginRest } = result; // eslint-disable-line no-use-before-define
        const { props, ...rest } = resultBlock; // eslint-disable-line no-use-before-define
        resultBlock = {
          ...rest,
          ...pluginRest,
          props: { ...props, ...pluginProps },
        };
      }
    });

    return resultBlock.component ? resultBlock : false;
  };
}

function blockStyleFnHook(
  plugins: EditorPlugin[],
  pluginMethods: PluginFunctions
) {
  return (block: ContentBlock): string => {
    const styles: string[] = [];
    plugins.forEach((plugin) => {
      if (typeof plugin.blockStyleFn !== 'function') {
        return;
      }
      const result = plugin.blockStyleFn(block, pluginMethods);
      if (result !== undefined && result !== null) {
        styles.push(result);
      }
    });

    return styles.join(' ');
  };
}

function customStyleFnHook(
  plugins: EditorPlugin[],
  pluginMethods: PluginFunctions
) {
  return (style: DraftInlineStyle, block: ContentBlock): CSSProperties => {
    let result: CSSProperties | undefined;
    const wasHandled = plugins.some((plugin) => {
      if (typeof plugin.customStyleFn !== 'function') {
        return false;
      }
      result = plugin.customStyleFn(style, block, pluginMethods);
      return result !== undefined;
    });
    return wasHandled && result ? result : {};
  };
}

function keyBindingFnHook(
  plugins: EditorPlugin[],
  pluginMethods: PluginFunctions
) {
  return (event: KeyboardEvent): DraftEditorCommand | null => {
    let result: EditorCommand | null | undefined = null;
    const wasHandled = plugins.some((plugin) => {
      if (typeof plugin.keyBindingFn !== 'function') {
        return false;
      }
      result = plugin.keyBindingFn(event, pluginMethods);
      return result !== undefined;
    });
    return wasHandled ? result : null;
  };
}

function createHandleHooks<T extends EditorHandleKeys>(
  methodName: T,
  plugins: EditorPlugin[],
  pluginMethods: PluginFunctions
) {
  return (...args: Parameters<Required<EditorProps>[T]>): DraftHandleValue =>
    plugins.some((plugin) => {
      const fn = plugin[methodName];
      return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        typeof fn === 'function' && fn(...args, pluginMethods) === 'handled'
      );
    })
      ? 'handled'
      : 'not-handled';
}

function createEventHooks<T extends EditorEventKeys>(
  methodName: T,
  plugins: EditorPlugin[],
  pluginMethods: PluginFunctions
) {
  return (...args: Parameters<Required<EditorProps>[T]>): boolean =>
    plugins.some((plugin) => {
      const fn = plugin[methodName];
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return typeof fn === 'function' && fn(...args, pluginMethods) === true;
    });
}

export function createPluginHooks(
  plugins: EditorPlugin[],
  pluginFunction: PluginFunctions
): Partial<EditorProps> {
  const pluginHooks: Partial<EditorProps> = {};

  //onchange is here ignored
  const handledAttributes = new Set<EditorKeys>(['onChange']);

  plugins.forEach((plugin: EditorPlugin) => {
    (Object.keys(plugin) as EditorKeys[]).forEach((attrName) => {
      // if `attrName` has been added as a hook key already, ignore this one
      if (handledAttributes.has(attrName)) {
        return;
      }
      handledAttributes.add(attrName);

      if (isEditorEventKey(attrName)) {
        pluginHooks[attrName] = createEventHooks(
          attrName,
          plugins,
          pluginFunction
        );
      } else if (isEditorHandleKey(attrName)) {
        pluginHooks[attrName] = createHandleHooks(
          attrName,
          plugins,
          pluginFunction
        );
      } else if (isEditorFnKey(attrName)) {
        if (attrName === 'blockRendererFn') {
          pluginHooks.blockRendererFn = blockRendererFnHook(
            plugins,
            pluginFunction
          );
        } else if (attrName === 'blockStyleFn') {
          pluginHooks.blockStyleFn = blockStyleFnHook(plugins, pluginFunction);
        } else if (attrName === 'customStyleFn') {
          pluginHooks.customStyleFn = customStyleFnHook(
            plugins,
            pluginFunction
          );
        } else if (attrName === 'keyBindingFn') {
          pluginHooks.keyBindingFn = keyBindingFnHook(plugins, pluginFunction);
        }
      }
    });
  });
  return pluginHooks;
}
