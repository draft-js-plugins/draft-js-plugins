(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[647],{69694:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var a=n(52322),r=(n(2784),n(6277)),i=(n(29911),n(16822)),o=n.n(i);function s(e){var t=e.code,n=e.className,i=e.name,s=(0,r.Z)(o().root,n),l=i?o().name:o().hiddenName,c=(0,r.Z)(o().code,"language-".concat(i&&i.endsWith("css")?"css":"js"));return(0,a.jsxs)("div",{className:s,children:[(0,a.jsx)("div",{className:l,children:i}),(0,a.jsx)("pre",{className:c,children:(0,a.jsx)("code",{children:t})})]})}},78127:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var a=n(52322),r=(n(2784),n(6277)),i=(n(29911),n(7496)),o=n.n(i);function s(e){var t=e.code,n=e.className,i=(0,r.Z)(o().root,n);return(0,a.jsx)("span",{className:i,children:(0,a.jsx)("code",{dangerouslySetInnerHTML:{__html:t}})})}},97539:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var a=n(52322),r=n(2784),i=n(18476),o=n.n(i),s=n(98118),l=n(25949),c=n(97249),d=n(2137);function u(e){var t=e.children;return(0,r.useEffect)((function(){o().highlightAll()}),[]),(0,a.jsxs)("div",{children:[(0,a.jsx)(s.Z,{}),(0,a.jsx)(l.Z,{}),t,(0,a.jsx)(c.Z,{}),(0,a.jsx)(d.Z,{})]})}},55838:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return de}});var a=n(52322),r=n(84558),i=n(33831),o=n(64583),s=n(60942),l=n(10389),c=n(2784),d=n(96383),u=n(25567),m=n(41907),p=n(69410),g=n.n(p),f=n(69694),h=n(71520),y=n(77243),v=n(1503),x=n(64705),S=n(51747),b=n(94520),j=n.n(b);function C(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,l.Z)(e);if(t){var r=(0,l.Z)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return(0,s.Z)(this,n)}}var E=[(0,S.Z)()],Z={entityMap:{0:{type:"IMAGE",mutability:"IMMUTABLE",data:{src:"/images/canada-landscape-small.jpg"}}},blocks:[{key:"9gm3s",text:"You can have images in your text field. This is a very rudimentary example, but you can enhance the image plugin with resizing, focus or alignment plugins.",type:"unstyled",depth:0,inlineStyleRanges:[],entityRanges:[],data:{}},{key:"ov7r",text:" ",type:"atomic",depth:0,inlineStyleRanges:[],entityRanges:[{offset:0,length:1,key:0}],data:{}},{key:"e23a8",text:"See advanced examples further down \u2026",type:"unstyled",depth:0,inlineStyleRanges:[],entityRanges:[],data:{}}]},P=function(e){(0,o.Z)(n,e);var t=C(n);function n(){var e;(0,r.Z)(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return e=t.call.apply(t,[this].concat(i)),(0,y.Z)((0,h.Z)(e),"state",{editorState:v.EditorState.createWithContent((0,v.convertFromRaw)(Z))}),(0,y.Z)((0,h.Z)(e),"onChange",(function(t){e.setState({editorState:t})})),(0,y.Z)((0,h.Z)(e),"focus",(function(){e.editor.focus()})),e}return(0,i.Z)(n,[{key:"render",value:function(){var e=this;return(0,a.jsx)("div",{children:(0,a.jsx)("div",{className:j().editor,onClick:this.focus,children:(0,a.jsx)(x.ZP,{editorState:this.state.editorState,onChange:this.onChange,plugins:E,ref:function(t){e.editor=t}})})})}}]),n}(c.Component),k=n(16347),_=n(95597),R=n(53816),N=n(74782);function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function w(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"===typeof e)return I(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?I(e,t):void 0}}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var a=0;return function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function A(e){return new Promise((function(t){var n=new FileReader;n.onload=function(n){t({lastModifiedDate:e.lastModifiedDate,lastModified:e.lastModified,name:e.name,size:e.size,type:e.type,src:n.target.result})},0===e.type.indexOf("text/")||"application/json"===e.type?n.readAsText(e):0===e.type.indexOf("image/")?n.readAsDataURL(e):n.readAsBinaryString(e)}))}function B(e){return function(t,n,a){var r=a.getEditorState,i=a.setEditorState;if(e.handleUpload){for(var o,s={files:[],formData:new FormData},l=w(n);!(o=l()).done;){var c=o.value;c&&c instanceof File&&(s.formData.append("files",c),s.files.push(c))}return i(v.EditorState.acceptSelection(r(),t)),function(e){return Promise.all(e.map(A))}(s.files).then((function(t){var n=r();t.forEach((function(t){e.addImage&&(n=e.addImage(n,t.src))})),i(n)})),"handled"}return"not-handled"}}var D=function(e){return void 0===e&&(e={}),{handleDroppedFiles:B(e)}},M=n(2571),O=n.n(M);function T(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,l.Z)(e);if(t){var r=(0,l.Z)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return(0,s.Z)(this,n)}}var z=(0,_.Z)(),L=(0,R.Z)(),F=(0,N.Z)(),U=(0,k.Z)(),W=U.AlignmentTool,K=(0,x.lM)(L.decorator,U.decorator,z.decorator,F.decorator),G=(0,S.Z)({decorator:K}),Y=[D({handleUpload:function(e,t,n,a){!function n(r){a(r||1),100===r?Promise.all(e.files.map(A)).then((function(e){return t(e,{retainSrc:!0})})):setTimeout(n,250,(r||0)+10)}()},addImage:G.addImage}),F,z,U,L,G],X={entityMap:{0:{type:"IMAGE",mutability:"IMMUTABLE",data:{src:"/images/canada-landscape-small.jpg"}}},blocks:[{key:"9gm3s",text:"You can have images in your text field. This is a very rudimentary example, but you can enhance the image plugin with resizing, focus or alignment plugins.",type:"unstyled",depth:0,inlineStyleRanges:[],entityRanges:[],data:{}},{key:"ov7r",text:" ",type:"atomic",depth:0,inlineStyleRanges:[],entityRanges:[{offset:0,length:1,key:0}],data:{}},{key:"e23a8",text:"See advanced examples further down \u2026",type:"unstyled",depth:0,inlineStyleRanges:[],entityRanges:[],data:{}}]},q=function(e){(0,o.Z)(n,e);var t=T(n);function n(){var e;(0,r.Z)(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return e=t.call.apply(t,[this].concat(i)),(0,y.Z)((0,h.Z)(e),"state",{editorState:v.EditorState.createWithContent((0,v.convertFromRaw)(X))}),(0,y.Z)((0,h.Z)(e),"onChange",(function(t){e.setState({editorState:t})})),(0,y.Z)((0,h.Z)(e),"focus",(function(){e.editor.focus()})),e}return(0,i.Z)(n,[{key:"render",value:function(){var e=this;return(0,a.jsx)("div",{children:(0,a.jsxs)("div",{className:O().editor,onClick:this.focus,children:[(0,a.jsx)(x.ZP,{editorState:this.state.editorState,onChange:this.onChange,plugins:Y,ref:function(t){e.editor=t}}),(0,a.jsx)(W,{})]})})}}]),n}(c.Component),Q=n(29175),H=n.n(Q);function J(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,l.Z)(e);if(t){var r=(0,l.Z)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return(0,s.Z)(this,n)}}var V=function(e){(0,o.Z)(n,e);var t=J(n);function n(){var e;(0,r.Z)(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return e=t.call.apply(t,[this].concat(i)),(0,y.Z)((0,h.Z)(e),"state",{url:"",open:!1}),(0,y.Z)((0,h.Z)(e),"onPopoverClick",(function(){e.preventNextClose=!0})),(0,y.Z)((0,h.Z)(e),"openPopover",(function(){e.state.open||(e.preventNextClose=!0,e.setState({open:!0}))})),(0,y.Z)((0,h.Z)(e),"closePopover",(function(){!e.preventNextClose&&e.state.open&&e.setState({open:!1}),e.preventNextClose=!1})),(0,y.Z)((0,h.Z)(e),"addImage",(function(){var t=e.props,n=t.editorState;(0,t.onChange)(e.props.modifier(n,e.state.url))})),(0,y.Z)((0,h.Z)(e),"changeUrl",(function(t){e.setState({url:t.target.value})})),e}return(0,i.Z)(n,[{key:"componentDidMount",value:function(){document.addEventListener("click",this.closePopover)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this.closePopover)}},{key:"render",value:function(){var e=this.state.open?H().addImagePopover:H().addImageClosedPopover,t=this.state.open?H().addImagePressedButton:H().addImageButton;return(0,a.jsxs)("div",{className:H().addImage,children:[(0,a.jsx)("button",{className:t,onMouseUp:this.openPopover,type:"button",children:"+"}),(0,a.jsxs)("div",{className:e,onClick:this.onPopoverClick,children:[(0,a.jsx)("input",{type:"text",placeholder:"Paste the image url \u2026",className:H().addImageInput,onChange:this.changeUrl,value:this.state.url}),(0,a.jsx)("button",{className:H().addImageConfirmButton,type:"button",onClick:this.addImage,children:"Add"})]})]})}}]),n}(c.Component),$=n(1481),ee=n.n($);function te(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,l.Z)(e);if(t){var r=(0,l.Z)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return(0,s.Z)(this,n)}}var ne=(0,S.Z)(),ae=[ne],re='Click on the + button below and insert "/images/canada-landscape-small.jpg" to add the landscape image. Alternativly you can use any image url on the web.',ie=function(e){(0,o.Z)(n,e);var t=te(n);function n(){var e;(0,r.Z)(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return e=t.call.apply(t,[this].concat(i)),(0,y.Z)((0,h.Z)(e),"state",{editorState:(0,x.bf)(re)}),(0,y.Z)((0,h.Z)(e),"onChange",(function(t){e.setState({editorState:t})})),(0,y.Z)((0,h.Z)(e),"focus",(function(){e.editor.focus()})),e}return(0,i.Z)(n,[{key:"render",value:function(){var e=this;return(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:ee().editor,onClick:this.focus,children:(0,a.jsx)(x.ZP,{editorState:this.state.editorState,onChange:this.onChange,plugins:ae,ref:function(t){e.editor=t}})}),(0,a.jsx)(V,{editorState:this.state.editorState,onChange:this.onChange,modifier:ne.addImage})]})}}]),n}(c.Component),oe=n(72362),se=n(78127),le=n(97539);function ce(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,l.Z)(e);if(t){var r=(0,l.Z)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return(0,s.Z)(this,n)}}var de=function(e){(0,o.Z)(n,e);var t=ce(n);function n(){return(0,r.Z)(this,n),t.apply(this,arguments)}return(0,i.Z)(n,[{key:"render",value:function(){return(0,a.jsxs)(le.Z,{children:[(0,a.jsxs)(d.Z,{children:[(0,a.jsx)(m.Z,{level:2,children:"Image"}),(0,a.jsx)(m.Z,{level:3,children:"Supported Environment"}),(0,a.jsxs)("ul",{className:g().list,children:[(0,a.jsx)("li",{className:g().listEntry,children:"Desktop: Yes"}),(0,a.jsx)("li",{className:g().listEntry,children:"Mobile: Yes"}),(0,a.jsx)("li",{className:g().listEntry,children:"Screen-reader: No"})]})]}),(0,a.jsxs)(u.Z,{children:[(0,a.jsx)(m.Z,{level:2,children:"Getting Started"}),(0,a.jsx)(f.Z,{code:"npm install @draft-js-plugins/editor"}),(0,a.jsx)(f.Z,{code:"npm install @draft-js-plugins/image"}),(0,a.jsx)(f.Z,{code:"// It is important to import the Editor which accepts plugins.\n\nimport Editor from '@draft-js-plugins/editor';\n\nimport createImagePlugin from '@draft-js-plugins/image';\nimport React from 'react';\n\nconst imagePlugin = createImagePlugin();\n\n// The Editor accepts an array of plugins. In this case, only the imagePlugin\n// is passed in, although it is possible to pass in multiple plugins.\nconst MyEditor = ({ editorState, onChange }) => (\n  <Editor\n    editorState={editorState}\n    onChange={onChange}\n    plugins={[imagePlugin]}\n  />\n);\n\nexport default MyEditor;\n",name:"gettingStarted.js"}),(0,a.jsx)(m.Z,{level:3,children:"Importing the default styles"}),(0,a.jsxs)("p",{children:["The plugin ships with a default styling available at this location in the installed package: \xa0",(0,a.jsx)(se.Z,{code:"node_modules/@draft-js-plugins/image/lib/plugin.css"})]}),(0,a.jsx)(m.Z,{level:4,children:"Webpack Usage"}),(0,a.jsxs)("ul",{className:g().list,children:[(0,a.jsxs)("li",{className:g().listEntry,children:["1. Install Webpack loaders: \xa0",(0,a.jsx)(se.Z,{code:"npm i style-loader css-loader --save-dev"})]}),(0,a.jsxs)("li",{className:g().listEntry,children:["2. Add the below section to Webpack config (if your config already has a loaders array, simply add the below loader object to your existing list.",(0,a.jsx)(f.Z,{code:"module.exports = {\n  module: {\n    loaders: [\n      {\n        test: /plugin\\.css$/,\n        loaders: ['style-loader', 'css'],\n      },\n    ],\n  },\n};\n",className:g().guideCodeBlock})]}),(0,a.jsxs)("li",{className:g().listEntry,children:["3. Add the below import line to your component to tell Webpack to inject the style to your component.",(0,a.jsx)(f.Z,{code:"import '@draft-js-plugins/image/lib/plugin.css';",className:g().guideCodeBlock})]}),(0,a.jsx)("li",{className:g().listEntry,children:"4. Restart Webpack."})]}),(0,a.jsx)(m.Z,{level:4,children:"Browserify Usage"}),(0,a.jsxs)("p",{children:["Please help, by submiting a Pull Request to the"," ",(0,a.jsx)(oe.Z,{href:"https://github.com/draft-js-plugins/draft-js-plugins/blob/master/docs/client/components/pages/Image/index.js",children:"documentation"}),"."]})]}),(0,a.jsxs)(d.Z,{children:[(0,a.jsx)(m.Z,{level:2,children:"Configuration Parameters"}),(0,a.jsxs)("div",{className:g().param,children:[(0,a.jsx)("span",{className:g().paramName,children:"theme"}),(0,a.jsx)("span",{children:"Object of CSS classes with the following keys."}),(0,a.jsxs)("div",{className:g().subParams,children:[(0,a.jsxs)("div",{className:g().subParam,children:[(0,a.jsx)("span",{className:g().subParamName,children:"image:"})," CSS class for the image."]}),(0,a.jsxs)("div",{className:g().subParam,children:[(0,a.jsx)("span",{className:g().subParamName,children:"addImage:"})," CSS class."]}),(0,a.jsxs)("div",{className:g().subParam,children:[(0,a.jsx)("span",{className:g().subParamName,children:"addImagePopover:"})," ","CSS class."]}),(0,a.jsxs)("div",{className:g().subParam,children:[(0,a.jsx)("span",{className:g().subParamName,children:"addImageClosedPopover:"})," ","CSS class."]}),(0,a.jsxs)("div",{className:g().subParam,children:[(0,a.jsx)("span",{className:g().subParamName,children:"addImageBottomGradient:"})," ","CSS class."]}),(0,a.jsxs)("div",{className:g().subParam,children:[(0,a.jsx)("span",{className:g().subParamName,children:"addImageButton:"})," CSS class."]}),(0,a.jsxs)("div",{className:g().subParam,children:[(0,a.jsx)("span",{className:g().subParamName,children:"addImagePressedButton:"})," ","CSS class."]}),(0,a.jsxs)("div",{className:g().subParam,children:[(0,a.jsx)("span",{className:g().subParamName,children:"addImageInput:"})," CSS class."]}),(0,a.jsxs)("div",{className:g().subParam,children:[(0,a.jsx)("span",{className:g().subParamName,children:"addImageConfirmButton:"})," ","CSS class."]})]})]}),(0,a.jsxs)("div",{className:g().paramBig,children:[(0,a.jsx)("span",{className:g().paramName,children:"imageComponent"}),(0,a.jsx)("span",{children:"Pass in a custom image component to be rendered."})]}),(0,a.jsxs)("div",{className:g().paramBig,children:[(0,a.jsx)("span",{className:g().paramName,children:"addImageButtonContent"}),(0,a.jsx)("span",{children:"Content of button which opens add image popup. (Default content is \ud83d\udcf7)"})]})]}),(0,a.jsxs)(d.Z,{children:[(0,a.jsx)(m.Z,{level:2,children:"Simple Example"}),(0,a.jsx)(P,{}),(0,a.jsx)(f.Z,{code:"import React, { Component } from 'react';\nimport { convertFromRaw, EditorState } from 'draft-js';\n\nimport Editor from '@draft-js-plugins/editor';\n\nimport createImagePlugin from '@draft-js-plugins/image';\nimport editorStyles from './editorStyles.module.css';\n\nconst imagePlugin = createImagePlugin();\nconst plugins = [imagePlugin];\n\n/* eslint-disable */\nconst initialState = {\n  entityMap: {\n    0: {\n      type: 'IMAGE',\n      mutability: 'IMMUTABLE',\n      data: {\n        src: '/images/canada-landscape-small.jpg',\n      },\n    },\n  },\n  blocks: [\n    {\n      key: '9gm3s',\n      text:\n        'You can have images in your text field. This is a very rudimentary example, but you can enhance the image plugin with resizing, focus or alignment plugins.',\n      type: 'unstyled',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [],\n      data: {},\n    },\n    {\n      key: 'ov7r',\n      text: ' ',\n      type: 'atomic',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [\n        {\n          offset: 0,\n          length: 1,\n          key: 0,\n        },\n      ],\n      data: {},\n    },\n    {\n      key: 'e23a8',\n      text: 'See advanced examples further down \u2026',\n      type: 'unstyled',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [],\n      data: {},\n    },\n  ],\n};\n/* eslint-enable */\n\nexport default class SimpleImageEditor extends Component {\n  state = {\n    editorState: EditorState.createWithContent(convertFromRaw(initialState)),\n  };\n\n  onChange = (editorState) => {\n    this.setState({\n      editorState,\n    });\n  };\n\n  focus = () => {\n    this.editor.focus();\n  };\n\n  render() {\n    return (\n      <div>\n        <div className={editorStyles.editor} onClick={this.focus}>\n          <Editor\n            editorState={this.state.editorState}\n            onChange={this.onChange}\n            plugins={plugins}\n            ref={(element) => {\n              this.editor = element;\n            }}\n          />\n        </div>\n      </div>\n    );\n  }\n}\n",name:"SimpleImageEditor.js"}),(0,a.jsx)(f.Z,{code:".editor {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editor :global(.public-DraftEditor-content) {\n  min-height: 140px;\n}\n\n.options {\n  margin-bottom: 20px;\n}\n",name:"editorStyles.css"})]}),(0,a.jsxs)(d.Z,{children:[(0,a.jsx)(m.Z,{level:2,children:"Alignment + Resize + Focus + Drag'n'Drop + Drag'n'Drop Upload Example"}),(0,a.jsx)(q,{}),(0,a.jsx)(f.Z,{code:"import React, { Component } from 'react';\nimport { convertFromRaw, EditorState } from 'draft-js';\n\nimport Editor, { composeDecorators } from '@draft-js-plugins/editor';\n\nimport createImagePlugin from '@draft-js-plugins/image';\n\nimport createAlignmentPlugin from '@draft-js-plugins/alignment';\n\nimport createFocusPlugin from '@draft-js-plugins/focus';\n\nimport createResizeablePlugin from '@draft-js-plugins/resizeable';\n\nimport createBlockDndPlugin from '@draft-js-plugins/drag-n-drop';\n\nimport createDragNDropUploadPlugin from '@draft-js-plugins/drag-n-drop-upload';\nimport editorStyles from './editorStyles.module.css';\nimport mockUpload from './mockUpload';\n\nconst focusPlugin = createFocusPlugin();\nconst resizeablePlugin = createResizeablePlugin();\nconst blockDndPlugin = createBlockDndPlugin();\nconst alignmentPlugin = createAlignmentPlugin();\nconst { AlignmentTool } = alignmentPlugin;\n\nconst decorator = composeDecorators(\n  resizeablePlugin.decorator,\n  alignmentPlugin.decorator,\n  focusPlugin.decorator,\n  blockDndPlugin.decorator\n);\nconst imagePlugin = createImagePlugin({ decorator });\n\nconst dragNDropFileUploadPlugin = createDragNDropUploadPlugin({\n  handleUpload: mockUpload,\n  addImage: imagePlugin.addImage,\n});\n\nconst plugins = [\n  dragNDropFileUploadPlugin,\n  blockDndPlugin,\n  focusPlugin,\n  alignmentPlugin,\n  resizeablePlugin,\n  imagePlugin,\n];\n\n/* eslint-disable */\nconst initialState = {\n  entityMap: {\n    0: {\n      type: 'IMAGE',\n      mutability: 'IMMUTABLE',\n      data: {\n        src: '/images/canada-landscape-small.jpg',\n      },\n    },\n  },\n  blocks: [\n    {\n      key: '9gm3s',\n      text:\n        'You can have images in your text field. This is a very rudimentary example, but you can enhance the image plugin with resizing, focus or alignment plugins.',\n      type: 'unstyled',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [],\n      data: {},\n    },\n    {\n      key: 'ov7r',\n      text: ' ',\n      type: 'atomic',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [\n        {\n          offset: 0,\n          length: 1,\n          key: 0,\n        },\n      ],\n      data: {},\n    },\n    {\n      key: 'e23a8',\n      text: 'See advanced examples further down \u2026',\n      type: 'unstyled',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [],\n      data: {},\n    },\n  ],\n};\n/* eslint-enable */\n\nexport default class CustomImageEditor extends Component {\n  state = {\n    editorState: EditorState.createWithContent(convertFromRaw(initialState)),\n  };\n\n  onChange = (editorState) => {\n    this.setState({\n      editorState,\n    });\n  };\n\n  focus = () => {\n    this.editor.focus();\n  };\n\n  render() {\n    return (\n      <div>\n        <div className={editorStyles.editor} onClick={this.focus}>\n          <Editor\n            editorState={this.state.editorState}\n            onChange={this.onChange}\n            plugins={plugins}\n            ref={(element) => {\n              this.editor = element;\n            }}\n          />\n          <AlignmentTool />\n        </div>\n      </div>\n    );\n  }\n}\n",name:"AddImageEditor.js"}),(0,a.jsx)(f.Z,{code:".editor {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editor :global(.public-DraftEditor-content) {\n  min-height: 140px;\n}\n\n.options {\n  margin-bottom: 20px;\n}\n",name:"editorStyles.css"})]}),(0,a.jsxs)(d.Z,{children:[(0,a.jsx)(m.Z,{level:2,children:"Add Image Button Example"}),(0,a.jsx)(ie,{}),(0,a.jsx)(f.Z,{code:"import React, { Component } from 'react';\n\nimport Editor, { createEditorStateWithText } from '@draft-js-plugins/editor';\n\nimport createImagePlugin from '@draft-js-plugins/image';\nimport ImageAdd from './ImageAdd';\n\nimport editorStyles from './editorStyles.module.css';\n\nconst imagePlugin = createImagePlugin();\nconst plugins = [imagePlugin];\n\nconst text =\n  'Click on the + button below and insert \"/images/canada-landscape-small.jpg\" to add the landscape image. Alternativly you can use any image url on the web.';\n\nexport default class CustomImageEditor extends Component {\n  state = {\n    editorState: createEditorStateWithText(text),\n  };\n\n  onChange = (editorState) => {\n    this.setState({\n      editorState,\n    });\n  };\n\n  focus = () => {\n    this.editor.focus();\n  };\n\n  render() {\n    return (\n      <div>\n        <div className={editorStyles.editor} onClick={this.focus}>\n          <Editor\n            editorState={this.state.editorState}\n            onChange={this.onChange}\n            plugins={plugins}\n            ref={(element) => {\n              this.editor = element;\n            }}\n          />\n        </div>\n        <ImageAdd\n          editorState={this.state.editorState}\n          onChange={this.onChange}\n          modifier={imagePlugin.addImage}\n        />\n      </div>\n    );\n  }\n}\n",name:"AddImageEditor.js"}),(0,a.jsx)(f.Z,{code:".editor {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editor :global(.public-DraftEditor-content) {\n  min-height: 140px;\n}\n\n.options {\n  margin-bottom: 20px;\n}\n",name:"editorStyles.css"})]})]})}}]),n}(c.Component)},76468:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/plugin/image",function(){return n(55838)}])},16822:function(e){e.exports={root:"Code_root__32MsM",name:"Code_name__Asuq_",hiddenName:"Code_hiddenName__3h9eQ"}},29175:function(e){e.exports={addImage:"styles_addImage__1xY_q",addImagePopover:"styles_addImagePopover__3i69b",addImageClosedPopover:"styles_addImageClosedPopover__1Jq7k",addImageButton:"styles_addImageButton__3L2ZC",addImagePressedButton:"styles_addImagePressedButton__1RvA8 styles_addImageButton__3L2ZC",addImageBottomGradient:"styles_addImageBottomGradient__3ircD",addImageInput:"styles_addImageInput__1VLTX",addImageConfirmButton:"styles_addImageConfirmButton__1ke48"}},1481:function(e){e.exports={editor:"editorStyles_editor__2AWmD",options:"editorStyles_options__3CCGe"}},2571:function(e){e.exports={editor:"editorStyles_editor__1Tpwm",options:"editorStyles_options__1kqgG"}},94520:function(e){e.exports={editor:"editorStyles_editor__1burQ",options:"editorStyles_options__3xQKk"}},7496:function(e){e.exports={root:"InlineCode_root__1EGp7"}},69410:function(e){e.exports={root:"styles_root__2Zw7c",param:"styles_param__24TIr",paramBig:"styles_paramBig__18mcN",paramName:"styles_paramName__3RlGv",subParams:"styles_subParams__3fEXX",subParam:"styles_subParam__cOQn5",subParamName:"styles_subParamName__O3FFC",list:"styles_list__1gBQ7",listEntry:"styles_listEntry__1eLIS",guideCodeBlock:"styles_guideCodeBlock__OTTDR"}},74782:function(e,t,n){"use strict";var a=n(1503),r=n(46670),i=n(2784);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var s="DRAFTJS_BLOCK_KEY",l=function(e,t,n,i){var l=i.getEditorState,c=i.setEditorState,d=l(),u=t.data.getData("text"),m=u?u.split(":"):[];if(2!==m.length)return"not-handled";if(m[0]===s){var p=m[1],g=d.getCurrentContent(),f=g.getBlockForKey(p),h=g.getEntity(f.getEntityAt(0)),y=function(e,t){var n,r=e.getKeyAfter(t),i=e.getBlockForKey(r);n=i&&"unstyled"===i.getType()&&0===i.getLength()&&i===e.getBlockMap().last()?new a.SelectionState({anchorKey:t,anchorOffset:0,focusKey:r,focusOffset:0}):new a.SelectionState({anchorKey:t,anchorOffset:0,focusKey:t,focusOffset:1});var o=a.Modifier.setBlockType(e,n,"unstyled");return a.Modifier.removeRange(o,n,"backward")}(function(e,t,n,i,s,l){void 0===l&&(l=" ");var c,d,u=e.getCurrentContent(),m=t,p=a.Modifier.removeRange(u,m,"backward"),g=p.getSelectionAfter(),f=g.get("focusKey"),h=u.getBlockForKey(f),y=0===h.getLength()&&null===h.getEntityAt(0),v=0===m.getStartOffset();y||v?(c=g,d=p):c=(d=a.Modifier.splitBlock(p,g)).getSelectionAfter();var x=a.Modifier.setBlockType(d,c,n),S=x.createEntity(s||n,"IMMUTABLE",o({},i)).getLastCreatedEntityKey(),b=a.CharacterMetadata.create({entity:S}),j=[new a.ContentBlock({key:(0,a.genKey)(),type:n,text:l,characterList:(0,r.List)((0,r.Repeat)(b,l.length||1))}),new a.ContentBlock({key:(0,a.genKey)(),type:"unstyled",text:"",characterList:(0,r.List)()})],C=a.BlockMapBuilder.createFromArray(j);return a.Modifier.replaceWithFragment(x,c,C)}(d,e,f.getType(),h.getData(),h.getType()),p),v=new a.SelectionState({anchorKey:p,anchorOffset:0,focusKey:p,focusOffset:0}),x=a.EditorState.push(d,y,"insert-fragment");c(a.EditorState.forceSelection(x,v))}return"handled"},c=function(e){var t=e.store;return function(e){var n=i.forwardRef((function(n,a){var r=!t.getReadOnly||t.getReadOnly();return i.createElement(e,o({ref:a},n,{onDragStart:r?void 0:function(e){e.dataTransfer.dropEffect="move",e.dataTransfer.setData("text","DRAFTJS_BLOCK_KEY:"+n.block.getKey())}}))}));return n.displayName="BlockDraggable("+function(e){var t=e.WrappedComponent||e;return t.displayName||t.name||"Component"}(e)+")",n.WrappedComponent=e.WrappedComponent||e,n}};t.Z=function(){var e={getReadOnly:void 0};return{initialize:function(t){var n=t.getReadOnly;e.getReadOnly=n},decorator:c({store:e}),handleDrop:l}}},51747:function(e,t,n){"use strict";var a=n(2784),r=n(1503),i=n(6277);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}var l=function(e,t,n){var a=e.getCurrentContent().createEntity("IMAGE","IMMUTABLE",o({},n,{src:t})).getLastCreatedEntityKey(),i=r.AtomicBlockUtils.insertAtomicBlock(e,a," ");return r.EditorState.forceSelection(i,i.getCurrentContent().getSelectionAfter())},c=["block","className","theme"],d=["blockProps","customStyleMap","customStyleFn","decorator","forceSelection","offsetKey","selection","tree","blockStyleFn","preventScroll","contentState"],u=a.forwardRef((function(e,t){var n=e.block,r=e.className,l=e.theme,u=void 0===l?{}:l,m=s(e,c);m.blockProps,m.customStyleMap,m.customStyleFn,m.decorator,m.forceSelection,m.offsetKey,m.selection,m.tree,m.blockStyleFn,m.preventScroll;var p=m.contentState,g=s(m,d),f=(0,i.Z)(u.image,r),h=p.getEntity(n.getEntityAt(0)).getData().src;return a.createElement("img",o({},g,{ref:t,src:h,role:"presentation",className:f}))})),m={};t.Z=function(e){void 0===e&&(e={});var t=e.theme?e.theme:m,n=e.imageComponent||u;e.decorator&&(n=e.decorator(n));var r=function(e){return a.createElement(n,o({},e,{theme:t}))};return{blockRendererFn:function(e,t){var n=t.getEditorState;if("atomic"===e.getType()){var a=n().getCurrentContent(),i=e.getEntityAt(0);if(!i)return null;var o=a.getEntity(i).getType();return"IMAGE"===o||"image"===o?{component:r,editable:!1}:null}return null},addImage:l}}},53816:function(e,t,n){"use strict";var a=n(1503),r=n(2784);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var o=["blockProps","isResizable","resizeSteps"],s=function(e,t){return Math.ceil(e/t)*t},l=function(e){var t=e.config,n=e.store;return function(e){var a=r.forwardRef((function(a,l){var c=a.blockProps,d=a.isResizable,u=void 0===d||d,m=a.resizeSteps,p=void 0===m?1:m,g=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(a,o),f=t.vertical,h=void 0!==f&&f,y=t.horizontal,v=void 0===y?"relative":y,x=t.initialWidth,S=t.initialHeight,b=(0,r.useState)(!1),j=b[0],C=b[1],E=(0,r.useState)(0),Z=E[0],P=E[1],k=(0,r.useState)(0),_=k[0],R=k[1],N=(0,r.useState)({}),I=N[0],w=N[1],A=(0,r.useRef)(),B=(0,r.useCallback)((function(){j||w({})}),[j]),D=(0,r.useCallback)((function(e){var t=A.current.getBoundingClientRect(),n=e.clientX-t.left,a=e.clientY-t.top,r=!(!h||"auto"===h)&&a<6,i=!!v&&n<6,o=!!v&&n>=t.width-6,s=!(!h||"auto"===h)&&(a>=t.height-6&&a<t.height),l={isTop:r,isLeft:i,isRight:o,isBottom:s,canResize:(r||i||o||s)&&u};w((function(e){return Object.keys(l).filter((function(t){return e[t]!==l[t]})).length?l:e}))}),[h,v,u]),M=(0,r.useCallback)((function(e){if(I.canResize){e.preventDefault();var t=I.isTop,a=I.isLeft,r=I.isRight,i=I.isBottom,o=A.current,l=e.clientX,d=e.clientY,u=parseInt(document.defaultView.getComputedStyle(o).width,10),m=parseInt(document.defaultView.getComputedStyle(o).height,10),g=Z,f=_,y=function(e){var o=u+(a?l-e.clientX:e.clientX-l),c=m+e.clientY-d,y=n.getEditorRef(),x=y.refs&&y.refs.editor?y.refs.editor:y.editor;o=Math.min(x.clientWidth,o),c=Math.min(x.clientHeight,c);var S=100/x.clientWidth*o,b=100/x.clientHeight*c;(a||r)&&"relative"===v?(g=p?s(S,p):S,P(g)):(a||r)&&"absolute"===v&&(g=p?s(o,p):o,P(g)),(t||i)&&"relative"===h?(f=p?s(b,p):b,R(f)):(t||i)&&"absolute"===h&&(f=p?s(c,p):c,R(f)),e.preventDefault()};document.addEventListener("mousemove",y,!1),document.addEventListener("mouseup",(function e(){document.removeEventListener("mousemove",y,!1),document.removeEventListener("mouseup",e,!1),C(!1),c.setResizeData({width:g,height:f})}),!1),C(!0)}}),[I,Z,_,c]),O=(0,r.useMemo)((function(){var e={position:"relative"},t=I.isTop,n=I.isLeft,a=I.isRight,r=I.isBottom;if("auto"===v)e.width="auto";else if("relative"===v){var i=Z||c.resizeData.width;e.width=!i&&x?x:(i||40)+"%"}else if("absolute"===v){var o=Z||c.resizeData.width;e.width=!o&&x?x:(o||40)+"px"}if("auto"===h)e.height="auto";else if("relative"===h){var s=_||c.resizeData.height;e.height=!s&&S?S:(s||40)+"%"}else if("absolute"===h){var l=_||c.resizeData.height;e.height=!l&&S?S:(l||40)+"%"}return e.cursor=u?a&&r||n&&t?"nwse-resize":a&&t||r&&n?"nesw-resize":a||n?"ew-resize":r||t?"ns-resize":"default":"default",e}),[I,_,Z]),T=!n.getReadOnly||n.getReadOnly()?{}:{onMouseDown:M,onMouseMove:D,onMouseLeave:B};return r.createElement(e,i({},g,T,{blockProps:c,ref:function(e){A.current=e,"function"===typeof l?l(e):l&&(l.current=e)},style:O}))}));return a.displayName="BlockResizeable("+function(e){var t=e.WrappedComponent||e;return t.displayName||t.name||"Component"}(e)+")",a.WrappedComponent=e.WrappedComponent||e,a}},c=function(e,t){var n=t.getEditorState,r=t.setEditorState;return function(t){var o=e.getEntityAt(0);if(o){var s=n();s.getCurrentContent().mergeEntityData(o,i({},t)),r(a.EditorState.forceSelection(s,s.getSelection()))}}};t.Z=function(e){void 0===e&&(e={});var t={getEditorRef:void 0,getReadOnly:void 0,getEditorState:void 0,setEditorState:void 0};return{initialize:function(e){var n=e.getEditorRef,a=e.getReadOnly,r=e.getEditorState,i=e.setEditorState;t.getReadOnly=a,t.getEditorRef=n,t.getEditorState=r,t.setEditorState=i},decorator:l({config:e,store:t}),blockRendererFn:function(e,t){var n=t.getEditorState,a=t.setEditorState,r=e.getEntityAt(0),i=n().getCurrentContent();return{props:{resizeData:r?i.getEntity(r).getData():{},setResizeData:c(e,{getEditorState:n,setEditorState:a})}}}}}}},function(e){e.O(0,[774,371,476,919,138,888,179],(function(){return t=76468,e(e.s=t);var t}));var t=e.O();_N_E=t}]);