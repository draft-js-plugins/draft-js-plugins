(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[289],{61787:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/plugin/alignment",function(){return t(38115)}])},65721:function(n,e,t){"use strict";t.d(e,{Z:function(){return a}});var o=t(52322),r=(t(2784),t(40489)),i=(t(90217),t(88441)),l=t.n(i);function a(n){var e=n.code,t=n.className,i=n.name,a=(0,r.Z)(l().root,t),s=i?l().name:l().hiddenName,c=(0,r.Z)(l().code,"language-".concat(i&&i.endsWith("css")?"css":"js"));return(0,o.jsxs)("div",{className:a,children:[(0,o.jsx)("div",{className:s,children:i}),(0,o.jsx)("pre",{className:c,children:(0,o.jsx)("code",{children:e})})]})}},14799:function(n,e,t){"use strict";t.d(e,{Z:function(){return a}});var o=t(52322),r=(t(2784),t(40489)),i=(t(90217),t(4813)),l=t.n(i);function a(n){var e=n.code,t=n.className,i=(0,r.Z)(l().root,t);return(0,o.jsx)("span",{className:i,children:(0,o.jsx)("code",{dangerouslySetInnerHTML:{__html:e}})})}},16744:function(n,e,t){"use strict";t.d(e,{Z:function(){return u}});var o=t(52322),r=t(18476),i=t.n(r),l=t(2784),a=t(82587),s=t(11497),c=t(26351),d=t(56895);function u(n){var e=n.children,t=n.filePath;return(0,l.useEffect)((function(){i().highlightAll()}),[]),(0,o.jsxs)("div",{children:[(0,o.jsx)(s.Z,{}),(0,o.jsx)(c.Z,{}),e,(0,o.jsx)(d.Z,{filePath:t}),(0,o.jsx)(a.Z,{})]})}},38115:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return on}});var o=t(90581),r=t(27805),i=t(64297),l=t(58408),a=t(52322),s=t(2784),c=t(67619),d=t(65721),u=t(66769),p=t(13706),m=t(47842),g=t(1503),f=t(35369),h=t(64705),y=t(16347),b=t(95597),x=t(70865),k=t(96670),S=t(26297),v=s.forwardRef((function(n,e){n.block,n.blockProps,n.customStyleMap,n.customStyleFn,n.decorator,n.forceSelection,n.offsetKey,n.selection,n.tree,n.contentState,n.blockStyleFn,n.preventScroll;var t=n.style,o=(0,S.Z)(n,["block","blockProps","customStyleMap","customStyleFn","decorator","forceSelection","offsetKey","selection","tree","contentState","blockStyleFn","preventScroll","style"]);return(0,a.jsx)("div",(0,k.Z)((0,x.Z)({ref:e},o),{style:(0,x.Z)({width:200,height:80,backgroundColor:"#9bc0c7"},t)}))}));v.displayName="ColorBlock";var j=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.decorator?n.decorator(v):v;return{blockRendererFn:function(n,t){var o=t.getEditorState;if("atomic"===n.getType()&&"colorBlock"===o().getCurrentContent().getEntity(n.getEntityAt(0)).getType())return{component:e,editable:!1};return null}}},_=t(23201),Z=t.n(_),P=(0,b.Z)(),C=(0,y.Z)(),w=C.AlignmentTool,R=[P,C,j({decorator:(0,h.lM)(C.decorator,P.decorator)})],B={entityMap:{0:{type:"colorBlock",mutability:"IMMUTABLE",data:{}}},blocks:[{key:"9gm3s",text:"This is a simple example. Focus the block by clicking on it and change alignment via the toolbar.",type:"unstyled",depth:0,inlineStyleRanges:[],entityRanges:[],data:{}},{key:"ov7r",text:" ",type:"atomic",depth:0,inlineStyleRanges:[],entityRanges:[{offset:0,length:1,key:0}],data:{}},{key:"e23a8",text:"More text here to demonstrate how inline left/right alignment works \u2026",type:"unstyled",depth:0,inlineStyleRanges:[],entityRanges:[],data:{}}]};function E(n){var e=n.children;return(0,a.jsx)("div",{className:Z().wrapper,children:e})}var M=f.ZP.Map({atomic:{element:"figure",wrapper:(0,a.jsx)(E,{})}}),N=g.DefaultDraftBlockRenderMap.merge(M),T=function(n){(0,i.Z)(t,n);var e=(0,l.Z)(t);function t(){var n;return(0,o.Z)(this,t),n=e.apply(this,arguments),(0,m.Z)((0,p.Z)(n),"state",{editorState:g.EditorState.createWithContent((0,g.convertFromRaw)(B))}),(0,m.Z)((0,p.Z)(n),"onChange",(function(e){n.setState({editorState:e})})),(0,m.Z)((0,p.Z)(n),"focus",(function(){n.editor.focus()})),n}return(0,r.Z)(t,[{key:"render",value:function(){var n=this;return(0,a.jsx)("div",{children:(0,a.jsxs)("div",{className:Z().editor,onClick:this.focus,children:[(0,a.jsx)(h.ZP,{editorState:this.state.editorState,onChange:this.onChange,plugins:R,ref:function(e){n.editor=e},blockRenderMap:N}),(0,a.jsx)(w,{})]})})}}]),t}(s.Component),A=s.forwardRef((function(n,e){n.block,n.blockProps,n.customStyleMap,n.customStyleFn,n.decorator,n.forceSelection,n.offsetKey,n.selection,n.tree,n.contentState,n.blockStyleFn,n.preventScroll;var t=n.style,o=(0,S.Z)(n,["block","blockProps","customStyleMap","customStyleFn","decorator","forceSelection","offsetKey","selection","tree","contentState","blockStyleFn","preventScroll","style"]);return(0,a.jsx)("div",(0,k.Z)((0,x.Z)({ref:e},o),{style:(0,x.Z)({width:200,height:80,backgroundColor:"#9bc0c7"},t)}))}));A.displayName="ColorBlock";var F=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.decorator?n.decorator(A):A;return{blockRendererFn:function(n,t){var o=t.getEditorState;if("atomic"===n.getType()&&"colorBlock"===o().getCurrentContent().getEntity(n.getEntityAt(0)).getType())return{component:e,editable:!1};return null}}},D=t(80573),W=t.n(D),I=t(3648),z=t.n(I),K=t(26039),L=t.n(K),U=(0,b.Z)(),X=(0,y.Z)({theme:{alignmentToolStyles:z(),buttonStyles:L()}}),Y=X.AlignmentTool,Q=[U,X,F({decorator:(0,h.lM)(X.decorator,U.decorator)})],O={entityMap:{0:{type:"colorBlock",mutability:"IMMUTABLE",data:{}}},blocks:[{key:"9gm3s",text:"This is a simple example. Focus the block by clicking on it and change alignment via the toolbar.",type:"unstyled",depth:0,inlineStyleRanges:[],entityRanges:[],data:{}},{key:"ov7r",text:" ",type:"atomic",depth:0,inlineStyleRanges:[],entityRanges:[{offset:0,length:1,key:0}],data:{}},{key:"e23a8",text:"More text here to demonstrate how inline left/right alignment works \u2026",type:"unstyled",depth:0,inlineStyleRanges:[],entityRanges:[],data:{}}]};function q(n){var e=n.children;return(0,a.jsx)("div",{className:W().wrapper,children:e})}var G=f.ZP.Map({atomic:{element:"figure",wrapper:(0,a.jsx)(q,{})}}),H=g.DefaultDraftBlockRenderMap.merge(G),V=function(n){(0,i.Z)(t,n);var e=(0,l.Z)(t);function t(){var n;return(0,o.Z)(this,t),n=e.apply(this,arguments),(0,m.Z)((0,p.Z)(n),"state",{editorState:g.EditorState.createWithContent((0,g.convertFromRaw)(O))}),(0,m.Z)((0,p.Z)(n),"onChange",(function(e){n.setState({editorState:e})})),(0,m.Z)((0,p.Z)(n),"focus",(function(){n.editor.focus()})),n}return(0,r.Z)(t,[{key:"render",value:function(){var n=this;return(0,a.jsx)("div",{children:(0,a.jsxs)("div",{className:W().editor,onClick:this.focus,children:[(0,a.jsx)(h.ZP,{editorState:this.state.editorState,onChange:this.onChange,plugins:Q,ref:function(e){n.editor=e},blockRenderMap:H}),(0,a.jsx)(Y,{})]})})}}]),t}(s.Component),J=t(90397),$=t(14799),nn=t(16744),en=t(92836),tn=t.n(en),on=function(n){(0,i.Z)(t,n);var e=(0,l.Z)(t);function t(){return(0,o.Z)(this,t),e.apply(this,arguments)}return(0,r.Z)(t,[{key:"render",value:function(){return(0,a.jsxs)(nn.Z,{filePath:"packages/docs/pages/plugin/alignment/index.js",children:[(0,a.jsxs)(u.Z,{children:[(0,a.jsx)(J.Z,{level:2,children:"Alignment"}),(0,a.jsx)(J.Z,{level:3,children:"Prerequisite"}),(0,a.jsx)("p",{children:"This plugin exposes a decorator for blocks. You can use it in combination with any kind of plugin that manages a Draft.js block e.g. image or video. Keep in mind the plugin must accept a decorator for the block. The `Simple Alignment Example` further down contains an example plugin rendering a colored div. In addition this plugin only works in combination with the @draft-js-plugins/focus."}),(0,a.jsx)(J.Z,{level:3,children:"Usage"}),(0,a.jsx)("p",{children:"Select (via mouse or keyboard) a block supporting alignment modifications. A tooltip will pop up and you can update the alignment."}),(0,a.jsx)(J.Z,{level:3,children:"Supported Environment"}),(0,a.jsxs)("ul",{className:tn().list,children:[(0,a.jsx)("li",{className:tn().listEntry,children:"Desktop: Yes"}),(0,a.jsx)("li",{className:tn().listEntry,children:"Mobile: No"}),(0,a.jsx)("li",{className:tn().listEntry,children:"Screen-reader: No"})]})]}),(0,a.jsxs)(c.Z,{children:[(0,a.jsx)(J.Z,{level:2,children:"Getting Started"}),(0,a.jsx)(d.Z,{code:"npm install @draft-js-plugins/editor"}),(0,a.jsx)(d.Z,{code:"npm install @draft-js-plugins/focus"}),(0,a.jsx)(d.Z,{code:"npm install @draft-js-plugins/alignment"}),(0,a.jsx)(J.Z,{level:3,children:"Importing the default styles"}),(0,a.jsxs)("p",{children:["The plugin ships with a default styling available at this location in the installed package: \xa0",(0,a.jsx)($.Z,{code:"node_modules/@draft-js-plugins/alignment/lib/plugin.css"})]}),(0,a.jsx)(J.Z,{level:4,children:"Webpack Usage"}),(0,a.jsxs)("ul",{className:tn().list,children:[(0,a.jsxs)("li",{className:tn().listEntry,children:["1. Install Webpack loaders: \xa0",(0,a.jsx)($.Z,{code:"npm i style-loader css-loader --save-dev"})]}),(0,a.jsxs)("li",{className:tn().listEntry,children:["2. Add the below section to Webpack config (if your config already has a loaders array, simply add the below loader object to your existing list.",(0,a.jsx)(d.Z,{code:"module.exports = {\n  module: {\n    loaders: [\n      {\n        test: /plugin\\.css$/,\n        loaders: ['style-loader', 'css'],\n      },\n    ],\n  },\n};\n",className:tn().guideCodeBlock})]}),(0,a.jsxs)("li",{className:tn().listEntry,children:["3. Add the below import line to your component to tell Webpack to inject the style to your component.",(0,a.jsx)(d.Z,{code:"import '@draft-js-plugins/alignment/lib/plugin.css';",className:tn().guideCodeBlock})]}),(0,a.jsx)("li",{className:tn().listEntry,children:"4. Restart Webpack."})]})]}),(0,a.jsx)(u.Z,{children:(0,a.jsx)(J.Z,{level:2,children:"Configuration Parameters"})}),(0,a.jsxs)(u.Z,{children:[(0,a.jsx)(J.Z,{level:2,children:"Simple Alignment Example"}),(0,a.jsx)(T,{}),(0,a.jsx)(d.Z,{code:"import React, { Component } from 'react';\nimport {\n  convertFromRaw,\n  DefaultDraftBlockRenderMap,\n  EditorState,\n} from 'draft-js';\nimport Immutable from 'immutable';\n\nimport Editor, { composeDecorators } from '@draft-js-plugins/editor';\n\nimport createAlignmentPlugin from '@draft-js-plugins/alignment';\n\nimport createFocusPlugin from '@draft-js-plugins/focus';\nimport createColorBlockPlugin from './colorBlockPlugin';\nimport editorStyles from './editorStyles.module.css';\n\nconst focusPlugin = createFocusPlugin();\nconst alignmentPlugin = createAlignmentPlugin();\nconst { AlignmentTool } = alignmentPlugin;\n\nconst decorator = composeDecorators(\n  alignmentPlugin.decorator,\n  focusPlugin.decorator\n);\n\nconst colorBlockPlugin = createColorBlockPlugin({ decorator });\nconst plugins = [focusPlugin, alignmentPlugin, colorBlockPlugin];\n\n/* eslint-disable */\nconst initialState = {\n  entityMap: {\n    0: {\n      type: 'colorBlock',\n      mutability: 'IMMUTABLE',\n      data: {},\n    },\n  },\n  blocks: [\n    {\n      key: '9gm3s',\n      text:\n        'This is a simple example. Focus the block by clicking on it and change alignment via the toolbar.',\n      type: 'unstyled',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [],\n      data: {},\n    },\n    {\n      key: 'ov7r',\n      text: ' ',\n      type: 'atomic',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [\n        {\n          offset: 0,\n          length: 1,\n          key: 0,\n        },\n      ],\n      data: {},\n    },\n    {\n      key: 'e23a8',\n      text:\n        'More text here to demonstrate how inline left/right alignment works \u2026',\n      type: 'unstyled',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [],\n      data: {},\n    },\n  ],\n};\n/* eslint-enable */\n\nfunction BlockWrapper({ children }) {\n  return <div className={editorStyles.wrapper}>{children}</div>;\n}\n\nconst blockRenderMap = Immutable.Map({\n  atomic: {\n    element: 'figure',\n    wrapper: <BlockWrapper />,\n  },\n});\nconst extendedBlockRenderMap = DefaultDraftBlockRenderMap.merge(blockRenderMap);\n\nexport default class SimpleAlignmentEditor extends Component {\n  state = {\n    editorState: EditorState.createWithContent(convertFromRaw(initialState)),\n  };\n\n  onChange = (editorState) => {\n    this.setState({\n      editorState,\n    });\n  };\n\n  focus = () => {\n    this.editor.focus();\n  };\n\n  render() {\n    return (\n      <div>\n        <div className={editorStyles.editor} onClick={this.focus}>\n          <Editor\n            editorState={this.state.editorState}\n            onChange={this.onChange}\n            plugins={plugins}\n            ref={(element) => {\n              this.editor = element;\n            }}\n            blockRenderMap={extendedBlockRenderMap}\n          />\n          <AlignmentTool />\n        </div>\n      </div>\n    );\n  }\n}\n",name:"SimpleAlignmentEditor.js"}),(0,a.jsx)(d.Z,{code:"import React from 'react';\n\nconst ColorBlock = React.forwardRef(\n  (\n    {\n      block, // eslint-disable-line no-unused-vars\n      blockProps, // eslint-disable-line no-unused-vars\n      customStyleMap, // eslint-disable-line no-unused-vars\n      customStyleFn, // eslint-disable-line no-unused-vars\n      decorator, // eslint-disable-line no-unused-vars\n      forceSelection, // eslint-disable-line no-unused-vars\n      offsetKey, // eslint-disable-line no-unused-vars\n      selection, // eslint-disable-line no-unused-vars\n      tree, // eslint-disable-line no-unused-vars\n      contentState, // eslint-disable-line no-unused-vars\n      blockStyleFn, // eslint-disable-line no-unused-vars\n      preventScroll, // eslint-disable-line no-unused-vars\n      style,\n      ...elementProps\n    },\n    ref\n  ) => (\n    <div\n      ref={ref}\n      {...elementProps}\n      style={{ width: 200, height: 80, backgroundColor: '#9bc0c7', ...style }}\n    />\n  )\n);\n\nconst createColorBlockPlugin = (config = {}) => {\n  const component = config.decorator\n    ? config.decorator(ColorBlock)\n    : ColorBlock;\n  return {\n    blockRendererFn: (block, { getEditorState }) => {\n      if (block.getType() === 'atomic') {\n        const contentState = getEditorState().getCurrentContent();\n        const entity = contentState.getEntity(block.getEntityAt(0));\n        const type = entity.getType();\n        if (type === 'colorBlock') {\n          return {\n            component,\n            editable: false,\n          };\n        }\n      }\n      return null;\n    },\n  };\n};\nColorBlock.displayName = 'ColorBlock';\nexport default createColorBlockPlugin;\n",name:"colorBlockPlugin.js"}),(0,a.jsx)(d.Z,{code:".editor {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ababab;\n  background: #fefefe;\n}\n\n.editor :global(.public-DraftEditor-content) {\n  min-height: 140px;\n}\n\n.options {\n  margin-bottom: 20px;\n}\n\n.wrapper {\n  position: relative;\n  z-index: 1;\n}\n",name:"editorStyles.css"})]}),(0,a.jsxs)(u.Z,{children:[(0,a.jsx)(J.Z,{level:2,children:"Themed Alignment Example"}),(0,a.jsx)(V,{}),(0,a.jsx)(d.Z,{code:"import React, { Component } from 'react';\nimport {\n  convertFromRaw,\n  DefaultDraftBlockRenderMap,\n  EditorState,\n} from 'draft-js';\nimport Immutable from 'immutable';\nimport Editor, { composeDecorators } from '@draft-js-plugins/editor';\nimport createAlignmentPlugin from '@draft-js-plugins/alignment';\nimport createFocusPlugin from '@draft-js-plugins/focus';\nimport createColorBlockPlugin from './colorBlockPlugin';\nimport editorStyles from './editorStyles.module.css';\nimport alignmentToolStyles from './alignmentToolStyles.module.css';\nimport buttonStyles from './buttonStyles.module.css';\n\nconst focusPlugin = createFocusPlugin();\nconst alignmentPlugin = createAlignmentPlugin({\n  theme: {\n    alignmentToolStyles,\n    buttonStyles,\n  },\n});\nconst { AlignmentTool } = alignmentPlugin;\n\nconst decorator = composeDecorators(\n  alignmentPlugin.decorator,\n  focusPlugin.decorator\n);\n\nconst colorBlockPlugin = createColorBlockPlugin({ decorator });\nconst plugins = [focusPlugin, alignmentPlugin, colorBlockPlugin];\n\n/* eslint-disable */\nconst initialState = {\n  entityMap: {\n    0: {\n      type: 'colorBlock',\n      mutability: 'IMMUTABLE',\n      data: {},\n    },\n  },\n  blocks: [\n    {\n      key: '9gm3s',\n      text:\n        'This is a simple example. Focus the block by clicking on it and change alignment via the toolbar.',\n      type: 'unstyled',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [],\n      data: {},\n    },\n    {\n      key: 'ov7r',\n      text: ' ',\n      type: 'atomic',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [\n        {\n          offset: 0,\n          length: 1,\n          key: 0,\n        },\n      ],\n      data: {},\n    },\n    {\n      key: 'e23a8',\n      text:\n        'More text here to demonstrate how inline left/right alignment works \u2026',\n      type: 'unstyled',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [],\n      data: {},\n    },\n  ],\n};\n/* eslint-enable */\n\nfunction BlockWrapper({ children }) {\n  return <div className={editorStyles.wrapper}>{children}</div>;\n}\n\nconst blockRenderMap = Immutable.Map({\n  atomic: {\n    element: 'figure',\n    wrapper: <BlockWrapper />,\n  },\n});\nconst extendedBlockRenderMap = DefaultDraftBlockRenderMap.merge(blockRenderMap);\n\nexport default class ThemedAlignmentEditor extends Component {\n  state = {\n    editorState: EditorState.createWithContent(convertFromRaw(initialState)),\n  };\n\n  onChange = (editorState) => {\n    this.setState({\n      editorState,\n    });\n  };\n\n  focus = () => {\n    this.editor.focus();\n  };\n\n  render() {\n    return (\n      <div>\n        <div className={editorStyles.editor} onClick={this.focus}>\n          <Editor\n            editorState={this.state.editorState}\n            onChange={this.onChange}\n            plugins={plugins}\n            ref={(element) => {\n              this.editor = element;\n            }}\n            blockRenderMap={extendedBlockRenderMap}\n          />\n          <AlignmentTool />\n        </div>\n      </div>\n    );\n  }\n}\n",name:"SimpleAlignmentEditor.js"}),(0,a.jsx)(d.Z,{code:".editor {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ababab;\n  background: #fefefe;\n}\n\n.editor :global(.public-DraftEditor-content) {\n  min-height: 140px;\n}\n\n.options {\n  margin-bottom: 20px;\n}\n\n.wrapper {\n  position: relative;\n  z-index: 1;\n}\n",name:"editorStyles.css"}),(0,a.jsx)(d.Z,{code:'.alignmentTool {\n  left: 50%;\n  transform: translate(-50%) scale(0);\n  position: absolute;\n  border: 1px solid #111;\n  background: #333;\n  border-radius: 4px;\n  box-shadow: 0px 1px 3px 0px rgba(220, 220, 220, 1);\n  z-index: 2;\n  box-sizing: border-box;\n}\n\n.alignmentTool:after,\n.alignmentTool:before {\n  top: 100%;\n  left: 50%;\n  border: solid transparent;\n  content: " ";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n}\n\n.alignmentTool:after {\n  border-color: rgba(255, 255, 255, 0);\n  border-top-color: #333;\n  border-width: 4px;\n  margin-left: -4px;\n}\n\n.alignmentTool:before {\n  border-color: rgba(221, 221, 221, 0);\n  border-top-color: #111;\n  border-width: 6px;\n  margin-left: -6px;\n}\n',name:"alignmentToolStyles.css"}),(0,a.jsx)(d.Z,{code:".buttonWrapper {\n  display: inline-block;\n}\n\n.button {\n  background: #333;\n  color: #ddd;\n  font-size: 18px;\n  border: 0;\n  padding-top: 5px;\n  vertical-align: bottom;\n  height: 34px;\n  width: 36px;\n  border-radius: 4px;\n}\n\n.button svg {\n  fill: #ddd;\n}\n\n.button:hover,\n.button:focus {\n  background: #444;\n  outline: 0; /* reset for :focus */\n}\n\n.active {\n  color: #6a9cc9;\n}\n\n.active svg {\n  fill: #6a9cc9;\n}\n",name:"buttonStyles.css"})]})]})}}]),t}(s.Component)},88441:function(n){n.exports={root:"Code_root__L5JtP",name:"Code_name__0g9Xm",hiddenName:"Code_hiddenName__iBe7o"}},23201:function(n){n.exports={editor:"editorStyles_editor__6OqVI",options:"editorStyles_options__52n1U",wrapper:"editorStyles_wrapper__s9_p2"}},3648:function(n){n.exports={alignmentTool:"alignmentToolStyles_alignmentTool__wVh_W"}},26039:function(n){n.exports={buttonWrapper:"buttonStyles_buttonWrapper__Ei1lS",button:"buttonStyles_button__jNoYu",active:"buttonStyles_active__nPIYM"}},80573:function(n){n.exports={editor:"editorStyles_editor__XIj_l",options:"editorStyles_options__5rzDL",wrapper:"editorStyles_wrapper__y4nQW"}},4813:function(n){n.exports={root:"InlineCode_root__8ZQag"}},92836:function(n){n.exports={root:"styles_root__AesYu",param:"styles_param__SfmSr",paramBig:"styles_paramBig__HQysz",paramName:"styles_paramName__acXYX",subParams:"styles_subParams__zxYtG",subParam:"styles_subParam__P_yck",subParamName:"styles_subParamName__0BQve",list:"styles_list__Xg0Cw",listEntry:"styles_listEntry__5bQsP",guideCodeBlock:"styles_guideCodeBlock__K3_Md"}},27805:function(n,e,t){"use strict";function o(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function r(n,e,t){return e&&o(n.prototype,e),t&&o(n,t),n}t.d(e,{Z:function(){return r}})}},function(n){n.O(0,[555,476,369,939,421,138,774,888,179],(function(){return e=61787,n(n.s=e);var e}));var e=n.O();_N_E=e}]);