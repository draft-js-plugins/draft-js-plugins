(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[500],{28230:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/plugin/divider",function(){return n(44287)}])},65721:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(52322),o=(n(2784),n(40489)),i=(n(90217),n(88441)),a=n.n(i);function s(e){var t=e.code,n=e.className,i=e.name,s=(0,o.Z)(a().root,n),c=i?a().name:a().hiddenName,l=(0,o.Z)(a().code,"language-".concat(i&&i.endsWith("css")?"css":"js"));return(0,r.jsxs)("div",{className:s,children:[(0,r.jsx)("div",{className:c,children:i}),(0,r.jsx)("pre",{className:l,children:(0,r.jsx)("code",{children:t})})]})}},14799:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(52322),o=(n(2784),n(40489)),i=(n(90217),n(4813)),a=n.n(i);function s(e){var t=e.code,n=e.className,i=(0,o.Z)(a().root,n);return(0,r.jsx)("span",{className:i,children:(0,r.jsx)("code",{dangerouslySetInnerHTML:{__html:t}})})}},16744:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(52322),o=n(18476),i=n.n(o),a=n(2784),s=n(82587),c=n(11497),l=n(26351),d=n(56895);function u(e){var t=e.children,n=e.filePath;return(0,a.useEffect)((function(){i().highlightAll()}),[]),(0,r.jsxs)("div",{children:[(0,r.jsx)(c.Z,{}),(0,r.jsx)(l.Z,{}),t,(0,r.jsx)(d.Z,{filePath:n}),(0,r.jsx)(s.Z,{})]})}},44287:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return H}});var r=n(90581),o=n(27805),i=n(64297),a=n(58408),s=n(52322),c=n(2784),l=n(67619),d=n(65721),u=n(66769),f=n(13706),p=n(47842),m=n(70865),g=n(1503),v=n(64705),y=n(95597),h=n(88189),S=n(40489),b=n(13980),E=n.n(b);function k(){return k=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},k.apply(this,arguments)}function x(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}var C=["block","className","theme"],j=["blockProps","customStyleMap","customStyleFn","decorator","forceSelection","offsetKey","selection","tree","contentState","blockStyleFn","preventScroll"];function w(e){e.block;var t=e.className,n=e.theme,r=void 0===n?{}:n,o=x(e,C);o.blockProps,o.customStyleMap,o.customStyleFn,o.decorator,o.forceSelection,o.offsetKey,o.selection,o.tree,o.contentState,o.blockStyleFn,o.preventScroll;var i=x(o,j),a=(0,S.Z)(r.divider,t);return c.createElement("hr",k({},i,{className:a}))}var N=function(e){var t=e.theme,n=void 0===t?{}:t,r=function(){var t=e.getEditorState();return t.getCurrentContent().getBlockForKey(t.getSelection().getStartKey()).getType()===e.blockType}()?(0,S.Z)(n.button,n.active):n.button;return c.createElement("div",{className:n.buttonWrapper,onMouseDown:function(e){e.preventDefault()}},c.createElement("button",{className:r,onClick:function(t){t.preventDefault();var n=e.getEditorState(),r=e.addDivider(n);e.setEditorState(r)},type:"button"},c.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},c.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),c.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}))))};N.propTypes={theme:E().object,getEditorState:E().func.isRequired,setEditorState:E().func.isRequired,addDivider:E().func.isRequired};var K=N;function _(e){return function(t,n){var r=t.getCurrentContent().createEntity(e,"IMMUTABLE",n).getLastCreatedEntityKey(),o=g.AtomicBlockUtils.insertAtomicBlock(t,r," ");return g.EditorState.forceSelection(o,o.getCurrentContent().getSelectionAfter())}}var B={divider:"d6zlymw"},Z=n(3956),P=n.n(Z),T=(0,y.Z)(),O=function(e){var t=void 0===e?{}:e,n=t.entityType,r=void 0===n?"divider":n,o=t.dividerComponent,i=void 0===o?w:o,a=t.buttonComponent,s=void 0===a?K:a,l=t.theme,d=void 0===l?B:l,u=t.decorator,f=i;"function"===typeof u&&(f=u(f));var p=function(e){return c.createElement(f,k({},e,{theme:d}))},m=s;return{blockRendererFn:function(e,t){var n=t.getEditorState;if("atomic"===e.getType()){var o=n().getCurrentContent(),i=e.getEntityAt(0);if(!i)return null;if(o.getEntity(i).getType()===r)return{component:p,editable:!1}}return null},DividerButton:function(e){return c.createElement(m,k({},e,{addDivider:_(r)}))},addDivider:_(r)}}({decorator:(0,v.lM)(T.decorator)}),R=O.DividerButton,F=(0,h.Z)(),A=F.SideToolbar,M=[T,O,F],D={entityMap:{0:{type:"divider",mutability:"IMMUTABLE",data:{}}},blocks:[{key:"9gm3s",text:"This is a simple example for divider plugin. Click side toolbar divider button.",type:"unstyled",depth:0,inlineStyleRanges:[],entityRanges:[],data:{}},{key:"ov7r",text:" ",type:"atomic",depth:0,inlineStyleRanges:[],entityRanges:[{offset:0,length:1,key:0}],data:{}}]},I=function(e){(0,i.Z)(n,e);var t=(0,a.Z)(n);function n(){var e;return(0,r.Z)(this,n),e=t.apply(this,arguments),(0,p.Z)((0,f.Z)(e),"state",{editorState:g.EditorState.createWithContent((0,g.convertFromRaw)(D))}),(0,p.Z)((0,f.Z)(e),"onChange",(function(t){e.setState({editorState:t})})),(0,p.Z)((0,f.Z)(e),"focus",(function(){e.editor.focus()})),e}return(0,o.Z)(n,[{key:"render",value:function(){var e=this;return(0,s.jsxs)("div",{className:P().editor,onClick:this.focus,children:[(0,s.jsx)(v.ZP,{editorState:this.state.editorState,onChange:this.onChange,plugins:M,ref:function(t){e.editor=t}}),(0,s.jsx)(A,{children:function(e){return(0,s.jsx)("div",{children:(0,s.jsx)(R,(0,m.Z)({},e))})}})]})}}]),n}(c.Component),L=n(90397),z=n(14799),W=n(16744),q=n(14670),U=n.n(q),H=function(e){(0,i.Z)(n,e);var t=(0,a.Z)(n);function n(){return(0,r.Z)(this,n),t.apply(this,arguments)}return(0,o.Z)(n,[{key:"render",value:function(){return(0,s.jsxs)(W.Z,{filePath:"packages/docs/pages/plugin/divider/index.js",children:[(0,s.jsxs)(u.Z,{children:[(0,s.jsx)(L.Z,{level:2,children:"Divider"}),(0,s.jsx)(L.Z,{level:3,children:"Supported Environment"}),(0,s.jsxs)("ul",{className:U().list,children:[(0,s.jsx)("li",{className:U().listEntry,children:"Desktop: Yes"}),(0,s.jsx)("li",{className:U().listEntry,children:"Mobile: Yes"}),(0,s.jsx)("li",{className:U().listEntry,children:"Screen-reader: Yes"})]})]}),(0,s.jsxs)(l.Z,{children:[(0,s.jsx)(L.Z,{level:2,children:"Getting Started"}),(0,s.jsx)(d.Z,{code:"npm install @draft-js-plugins/editor"}),(0,s.jsx)(d.Z,{code:"npm install @draft-js-plugins/divider"}),(0,s.jsx)(d.Z,{code:"// It is important to import the Editor which accepts plugins.\n\nimport Editor from '@draft-js-plugins/editor';\n\nimport createDividerPlugin from '@draft-js-plugins/divider';\nimport React from 'react';\n\nconst dividerPlugin = createDividerPlugin();\n\n// The Editor accepts an array of plugins. In this case, only the dividerPlugin\n// is passed in, although it is possible to pass in multiple plugins.\nconst MyEditor = ({ editorState, onChange }) => (\n  <Editor\n    editorState={editorState}\n    onChange={onChange}\n    plugins={[dividerPlugin]}\n  />\n);\n\nexport default MyEditor;\n",name:"gettingStarted.js"}),(0,s.jsx)(L.Z,{level:3,children:"Importing the default styles"}),(0,s.jsxs)("p",{children:["The plugin ships with a default styling available at this location in the installed package: \xa0",(0,s.jsx)(z.Z,{code:"node_modules/@draft-js-plugins/divider/lib/plugin.css"})]}),(0,s.jsx)(L.Z,{level:4,children:"Webpack Usage"}),(0,s.jsxs)("ul",{className:U().list,children:[(0,s.jsxs)("li",{className:U().listEntry,children:["1. Install Webpack loaders: \xa0",(0,s.jsx)(z.Z,{code:"npm i style-loader css-loader --save-dev"})]}),(0,s.jsxs)("li",{className:U().listEntry,children:["2. Add the below section to Webpack config (if your config already has a loaders array, simply add the below loader object to your existing list.",(0,s.jsx)(d.Z,{code:"module.exports = {\n  module: {\n    loaders: [\n      {\n        test: /plugin\\.css$/,\n        loaders: ['style-loader', 'css'],\n      },\n    ],\n  },\n};\n",className:U().guideCodeBlock})]}),(0,s.jsxs)("li",{className:U().listEntry,children:["3. Add the below import line to your component to tell Webpack to inject the style to your component.",(0,s.jsx)(d.Z,{code:"import '@draft-js-plugins/divider/lib/plugin.css';",className:U().guideCodeBlock})]}),(0,s.jsx)("li",{className:U().listEntry,children:"4. Restart Webpack."})]})]}),(0,s.jsxs)(u.Z,{children:[(0,s.jsx)(L.Z,{level:2,children:"Configuration Parameters"}),(0,s.jsxs)("div",{className:U().param,children:[(0,s.jsx)("span",{className:U().paramName,children:"theme"}),(0,s.jsx)("span",{children:"Object of CSS classes with the following keys."}),(0,s.jsx)("div",{className:U().subParams,children:(0,s.jsxs)("div",{className:U().subParam,children:[(0,s.jsx)("span",{className:U().subParamName,children:"divider:"})," CSS class for the divider."]})})]}),(0,s.jsxs)("div",{className:U().param,children:[(0,s.jsx)("span",{className:U().paramName,children:"entityType"}),(0,s.jsx)("span",{children:"Entity type for divider. default type is `divider`"})]}),(0,s.jsxs)("div",{className:U().param,children:[(0,s.jsx)("span",{className:U().paramName,children:"dividerComponent"}),(0,s.jsx)("span",{children:"Pass in a custom divider component to be rendered."})]})]}),(0,s.jsxs)(u.Z,{children:[(0,s.jsx)(L.Z,{level:2,children:"Divider + SideToolbar + Focus Example"}),(0,s.jsx)(I,{}),(0,s.jsx)(d.Z,{code:"import React, { Component } from 'react';\nimport { convertFromRaw, EditorState } from 'draft-js';\n\nimport Editor, { composeDecorators } from '@draft-js-plugins/editor';\nimport createFocusPlugin from '@draft-js-plugins/focus';\nimport createSideToolbarPlugin from '@draft-js-plugins/side-toolbar';\nimport createDividerPlugin from '@draft-js-plugins/divider';\n\nimport editorStyles from './editorStyles.module.css';\n\nconst focusPlugin = createFocusPlugin();\n\nconst decorator = composeDecorators(focusPlugin.decorator);\n\nconst dividerPlugin = createDividerPlugin({ decorator });\nconst { DividerButton } = dividerPlugin;\n\nconst sideToolbarPlugin = createSideToolbarPlugin();\nconst { SideToolbar } = sideToolbarPlugin;\n\nconst plugins = [focusPlugin, dividerPlugin, sideToolbarPlugin];\n\n/* eslint-disable */\nconst initialState = {\n  entityMap: {\n    0: {\n      type: 'divider',\n      mutability: 'IMMUTABLE',\n      data: {},\n    },\n  },\n  blocks: [\n    {\n      key: '9gm3s',\n      text:\n        'This is a simple example for divider plugin. Click side toolbar divider button.',\n      type: 'unstyled',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [],\n      data: {},\n    },\n    {\n      key: 'ov7r',\n      text: ' ',\n      type: 'atomic',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [\n        {\n          offset: 0,\n          length: 1,\n          key: 0,\n        },\n      ],\n      data: {},\n    },\n  ],\n};\n/* eslint-enable */\n\nexport default class CustomImageEditor extends Component {\n  state = {\n    editorState: EditorState.createWithContent(convertFromRaw(initialState)),\n  };\n\n  onChange = (editorState) => {\n    this.setState({\n      editorState,\n    });\n  };\n\n  focus = () => {\n    this.editor.focus();\n  };\n\n  render() {\n    return (\n      <div className={editorStyles.editor} onClick={this.focus}>\n        <Editor\n          editorState={this.state.editorState}\n          onChange={this.onChange}\n          plugins={plugins}\n          ref={(element) => {\n            this.editor = element;\n          }}\n        />\n\n        <SideToolbar>\n          {\n            // may be use React.Fragment instead of div to improve perfomance after React 16\n            (externalProps) => (\n              <div>\n                <DividerButton {...externalProps} />\n              </div>\n            )\n          }\n        </SideToolbar>\n      </div>\n    );\n  }\n}\n",name:"DividerWithSideToolbarEditor.js"}),(0,s.jsx)(d.Z,{code:".editor {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editor :global(.public-DraftEditor-content) {\n  min-height: 140px;\n}\n",name:"editorStyles.css"})]})]})}}]),n}(c.Component)},88441:function(e){e.exports={root:"Code_root__L5JtP",name:"Code_name__0g9Xm",hiddenName:"Code_hiddenName__iBe7o"}},3956:function(e){e.exports={editor:"editorStyles_editor__6f7Ao"}},4813:function(e){e.exports={root:"InlineCode_root__8ZQag"}},14670:function(e){e.exports={root:"styles_root__jIBJ4",param:"styles_param__laocT",paramBig:"styles_paramBig__Isnak",paramName:"styles_paramName__hxaQk",subParams:"styles_subParams__w4QVu",subParam:"styles_subParam__1Rfl_",subParamName:"styles_subParamName__MUGJh",list:"styles_list__U1Qf0",listEntry:"styles_listEntry__QI_VH",guideCodeBlock:"styles_guideCodeBlock__sZfte"}},95597:function(e,t,n){"use strict";n.d(t,{Z:function(){return S}});var r=n(1503),o=n(46670),i=n(52358),a=n.n(i),s=n(2784),c=n(40489);function l(e){var t=function(e,t,n){var o=t.getStartKey(),i=[];return e.getBlockMap().forEach((function(e,t){i.push(e),t===o&&i.push(n)})),e.merge({blockMap:r.BlockMapBuilder.createFromArray(i),selectionBefore:t,selectionAfter:t.merge({anchorKey:n.getKey(),anchorOffset:n.getLength(),focusKey:n.getKey(),focusOffset:n.getLength(),isBackward:!1})})}(e.getCurrentContent(),e.getSelection(),new r.ContentBlock({key:(0,r.genKey)(),type:"unstyled",text:"",characterList:(0,o.List)()})),n=t.merge({selectionAfter:t.getSelectionAfter().set("hasFocus",!0)});return r.EditorState.push(e,n,"insert-fragment")}var d=function(e,t,n,o){var i=e(),s=i.getSelection().getAnchorKey(),c="up"===n?i.getCurrentContent().getBlockBefore(s):i.getCurrentContent().getBlockAfter(s);if((!c||c.get("key")!==s)&&c){var l=a().encode(c.getKey(),0,0),d=document.querySelectorAll('[data-offset-key="'+l+'"]')[0],u=window.getSelection(),f=document.createRange();f.setStart(d,0),f.setEnd(d,0),u.removeAllRanges(),u.addRange(f);var p="up"===n?c.getLength():0;o.preventDefault(),t(r.EditorState.forceSelection(i,new r.SelectionState({anchorKey:c.getKey(),anchorOffset:p,focusKey:c.getKey(),focusOffset:p,isBackward:!1})))}};function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}var f=function(e){var t=e.theme,n=e.blockKeyStore;return function(e){var r=s.forwardRef((function(r,o){(0,s.useEffect)((function(){return n.add(r.block.getKey()),function(){n.remove(r.block.getKey())}}),[]);var i=r.blockProps,a=r.className,l=i.isFocused?(0,c.Z)(a,t.focused):(0,c.Z)(a,t.unfocused);return s.createElement(e,u({},r,{ref:o,onClick:function(e){e.preventDefault(),r.blockProps.isFocused||r.blockProps.setFocusToBlock()},className:l}))}));return r.displayName="BlockFocus("+function(e){var t=e.WrappedComponent||e;return t.displayName||t.name||"Component"}(e)+")",r.WrappedComponent=e.WrappedComponent||e,r}};var p=function(e,t,n){return e.getBlockMap().keySeq().skipUntil((function(e){return e===t})).takeUntil((function(e){return e===n})).concat([n])},m=function(e,t){var n=function(e){var t=e.getSelection(),n=e.getCurrentContent();return p(n,t.getStartKey(),t.getEndKey())}(e);return n.includes(t)};var g={unfocused:"uz5k6rs",focused:"f1vn2c6d"},v=function(e,t){var n=e.getSelection();if(n.getAnchorKey()!==n.getFocusKey())return!1;var r=e.getCurrentContent().getBlockForKey(n.getAnchorKey());return t.includes(r.getKey())},y=["backspace","backspace-word","backspace-to-start-of-line","delete","delete-word","delete-to-end-of-block"];function h(e){return r.EditorState.set(e,{selection:e.getSelection(),forceSelection:!0,nativelyRenderedContent:null,inlineStyleOverride:null})}var S=function(e){void 0===e&&(e={});var t,n,i=function(){var e=(0,o.List)();return{add:function(t){return e=e.push(t)},remove:function(t){return e=e.filter((function(e){return e!==t}))},includes:function(t){return e.includes(t)},getAll:function(){return e}}}(),s=e.theme?e.theme:g;return{handleReturn:function(e,t,n){var r=n.setEditorState;return v(t,i)?(r(l(t)),"handled"):"not-handled"},handleKeyCommand:function(e,t,n,o){var a=o.setEditorState;if(y.includes(e)&&v(t,i)){var s=t.getSelection().getStartKey(),c=function(e,t){var n=e.getCurrentContent(),o=n.getKeyBefore(t),i=n.getBlockForKey(o);if(void 0===i){var a=new r.SelectionState({anchorKey:t,anchorOffset:0,focusKey:t,focusOffset:1});n=r.Modifier.removeRange(n,a,"backward"),n=r.Modifier.setBlockType(n,a,"unstyled");var s=r.EditorState.push(e,n,"remove-range"),c=new r.SelectionState({anchorKey:t,anchorOffset:0,focusKey:t,focusOffset:0});return r.EditorState.forceSelection(s,c)}var l=new r.SelectionState({anchorKey:o,anchorOffset:i.getLength(),focusKey:t,focusOffset:1});n=r.Modifier.removeRange(n,l,"backward");var d=r.EditorState.push(e,n,"remove-range"),u=new r.SelectionState({anchorKey:o,anchorOffset:i.getLength(),focusKey:o,focusOffset:i.getLength()});return r.EditorState.forceSelection(d,u)}(t,s);if(c!==t)return a(c),"handled"}return"space"===e&&v(t,i)?"handled":"not-handled"},onChange:function(e){var r=e.getCurrentContent();if(!r.equals(n))return n=r,e;n=r;var o=e.getSelection();if(t&&o.equals(t))return t=e.getSelection(),e;var a=i.getAll();if(t&&p(r,t.getStartKey(),t.getEndKey()).some((function(e){return a.includes(e)})))return t=o,h(e);return p(r,o.getStartKey(),o.getEndKey()).some((function(e){return a.includes(e)}))?(t=o,h(e)):e},keyBindingFn:function(e,t){var n=t.getEditorState,r=t.setEditorState,o=n();if(v(o,i)){if(32===e.keyCode)return"space";if(37===e.keyCode&&d(n,r,"up",e),39===e.keyCode&&d(n,r,"down",e),38===e.keyCode&&d(n,r,"up",e),40===e.keyCode)return void d(n,r,"down",e)}if(!e.shiftKey){if(37===e.keyCode){var a=o.getSelection(),s=a.getAnchorKey(),c=o.getCurrentContent().getBlockBefore(s);c&&0===a.getAnchorOffset()&&i.includes(c.getKey())&&d(n,r,"up",e)}if(39===e.keyCode){var l=o.getSelection(),u=l.getFocusKey(),f=o.getCurrentContent().getBlockForKey(u),p=o.getCurrentContent().getBlockAfter(u),m="atomic"!==f.getType()&&f.getLength()===l.getFocusOffset();p&&m&&i.includes(p.getKey())&&d(n,r,"down",e)}if(38===e.keyCode){var g=o.getSelection().getAnchorKey(),y=o.getCurrentContent().getBlockBefore(g);y&&i.includes(y.getKey())&&d(n,r,"up",e)}if(40===e.keyCode){var h=o.getSelection().getAnchorKey(),S=o.getCurrentContent().getBlockAfter(h);S&&i.includes(S.getKey())&&d(n,r,"down",e)}}},blockRendererFn:function(e,t){var n=t.getEditorState,o=t.setEditorState;if("atomic"===e.getType()){var i=n();return{props:{isFocused:i.getSelection().getHasFocus()&&m(i,e.getKey()),isCollapsedSelection:i.getSelection().isCollapsed(),setFocusToBlock:function(){!function(e,t,n){var o=e(),i=a().encode(n.getKey(),0,0),s=document.querySelectorAll('[data-offset-key="'+i+'"]')[0],c=window.getSelection(),l=document.createRange();l.setStart(s,0),l.setEnd(s,0),c.removeAllRanges(),c.addRange(l),t(r.EditorState.forceSelection(o,new r.SelectionState({anchorKey:n.getKey(),anchorOffset:0,focusKey:n.getKey(),focusOffset:0,isBackward:!1})))}(n,o,e)}}}}},decorator:f({theme:s,blockKeyStore:i})}}},88189:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var r=n(2784),o=n(52367),i=n(52358),a=n.n(i),s=n(20138),c=n(35741);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function d(e){return{modifiers:[{name:"arrow",options:{element:e}},{name:"offset",options:{offset:[-4,-4]}}]}}function u(e){var t,n,o,i=e.theme,a=e.getEditorState,s=e.setEditorState,u=e.childNodes,f=e.referenceElement,p=e.show,m=e.rootReferenceElement,g=e.createBlockTypeSelectPopperOptions,v=void 0===g?d:g,y=(0,r.useCallback)((function(e){e.preventDefault(),e.stopPropagation()}),[]),h=(0,r.useState)(null),S=h[0],b=h[1],E=(0,r.useState)(null),k=E[0],x=E[1],C=(0,r.useMemo)((function(){return v(k)}),[k,v]),j=(0,c.D)(f,S,C),w=j.styles,N=j.attributes,K=j.update;return(0,r.useEffect)((function(){null==K||K()}),[m,K]),r.createElement("div",l({className:null==(t=i.blockTypeSelectStyles)?void 0:t.popup,ref:b,style:w.popper},N.popper,{"data-show":p,onMouseDown:y}),r.createElement("div",{className:null==(n=i.blockTypeSelectStyles)?void 0:n.popupFrame},u({getEditorState:a,setEditorState:s,theme:i.buttonStyles}),r.createElement("div",l({ref:x,style:w.arrow,className:null==(o=i.blockTypeSelectStyles)?void 0:o.arrow},N.popper))))}function f(e){var t=e.referenceElement,n=e.children,o=e.className,i=e.position,a=e.popperOptions,s=void 0===a?{placement:i,modifiers:[{name:"offset",options:{offset:[0,33]}}]}:a,d=(0,r.useState)(null),u=d[0],f=d[1],p=(0,c.D)(t,u,s),m=p.styles,g=p.attributes;return r.createElement("div",l({ref:f,style:m.popper},g.popper,{className:o}),n)}function p(e){return r.createElement("div",null,r.createElement(s.gS,e),r.createElement(s.oV,e),r.createElement(s.YC,e),r.createElement(s.Ou,e),r.createElement(s.cU,e),r.createElement(s.pu,e))}function m(e){var t,n,o=e.theme,i=e.position,s=e.popperOptions,c=e.store,l=e.createBlockTypeSelectPopperOptions,d=e.children,m=void 0===d?p:d,g=e.sideToolbarButtonComponent,v=(0,r.useState)(!1),y=v[0],h=v[1],S=(0,r.useState)(null),b=S[0],E=S[1],k=(0,r.useState)(null),x=k[0],C=k[1],j=(0,r.useCallback)((function(e){var t=e.getSelection();if(!t.getHasFocus())return E(null),void h(!1);var n=e.getCurrentContent().getBlockForKey(t.getStartKey()),r=a().encode(n.getKey(),0,0);setTimeout((function(){var e=document.querySelectorAll('[data-offset-key="'+r+'"]')[0];E(e)}),0)}),[]);return(0,r.useEffect)((function(){return c.subscribeToItem("editorState",j),function(){c.unsubscribeFromItem("editorState",j)}}),[c]),null===b?null:r.createElement(r.Fragment,null,r.createElement(f,{className:null==(t=o.toolbarStyles)?void 0:t.wrapper,referenceElement:b,position:i,popperOptions:s},r.createElement("div",{ref:C,onMouseEnter:function(){return h(!0)},onMouseLeave:function(){return h(!1)}},r.createElement(g,{className:null==(n=o.blockTypeSelectStyles)?void 0:n.blockType}))),r.createElement(u,{getEditorState:c.getItem("getEditorState"),setEditorState:c.getItem("setEditorState"),theme:o,childNodes:m,referenceElement:x,show:y,rootReferenceElement:b,createBlockTypeSelectPopperOptions:l}))}var g={buttonStyles:{buttonWrapper:"b1x6qj4x",button:"b1vm70k4",active:"ah6tpgz"},blockTypeSelectStyles:{blockType:"bloz0n9",popupFrame:"p98xzql",popup:"p1sbsapy",arrow:"a1f9fdzj"},toolbarStyles:{wrapper:"wev3spl"}};function v(e){var t=e.className;return r.createElement("div",{className:t},r.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),r.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"})))}var y=function(e){void 0===e&&(e={});var t=(0,o.MT)({isVisible:!1}),n=e,i=n.position,a=void 0===i?"left":i,s=n.theme,c=void 0===s?g:s,d=n.sideToolbarButtonComponent,u=void 0===d?v:d,f=n.popperOptions,p=n.createBlockTypeSelectPopperOptions;return{initialize:function(e){var n=e.setEditorState,r=e.getEditorState,o=e.getEditorRef;t.updateItem("getEditorState",r),t.updateItem("setEditorState",n),t.updateItem("getEditorRef",o)},onChange:function(e){return t.updateItem("editorState",e),e},SideToolbar:function(e){return r.createElement(m,l({},e,{store:t,theme:c,position:a,popperOptions:f,sideToolbarButtonComponent:u,createBlockTypeSelectPopperOptions:p}))}}}},27805:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,{Z:function(){return o}})}},function(e){e.O(0,[555,476,741,939,421,774,888,179],(function(){return t=28230,e(e.s=t);var t}));var t=e.O();_N_E=t}]);