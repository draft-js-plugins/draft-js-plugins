(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[16],{44222:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/plugin/counter",function(){return e(26995)}])},65721:function(t,n,e){"use strict";e.d(n,{Z:function(){return a}});var r=e(52322),o=(e(2784),e(40489)),i=(e(90217),e(88441)),s=e.n(i);function a(t){var n=t.code,e=t.className,i=t.name,a=(0,o.Z)(s().root,e),c=i?s().name:s().hiddenName,l=(0,o.Z)(s().code,"language-".concat(i&&i.endsWith("css")?"css":"js"));return(0,r.jsxs)("div",{className:a,children:[(0,r.jsx)("div",{className:c,children:i}),(0,r.jsx)("pre",{className:l,children:(0,r.jsx)("code",{children:n})})]})}},14799:function(t,n,e){"use strict";e.d(n,{Z:function(){return a}});var r=e(52322),o=(e(2784),e(40489)),i=(e(90217),e(4813)),s=e.n(i);function a(t){var n=t.code,e=t.className,i=(0,o.Z)(s().root,e);return(0,r.jsx)("span",{className:i,children:(0,r.jsx)("code",{dangerouslySetInnerHTML:{__html:n}})})}},16744:function(t,n,e){"use strict";e.d(n,{Z:function(){return d}});var r=e(52322),o=e(18476),i=e.n(o),s=e(2784),a=e(82587),c=e(11497),l=e(26351),u=e(56895);function d(t){var n=t.children,e=t.filePath;return(0,s.useEffect)((function(){i().highlightAll()}),[]),(0,r.jsxs)("div",{children:[(0,r.jsx)(c.Z,{}),(0,r.jsx)(l.Z,{}),n,(0,r.jsx)(u.Z,{filePath:e}),(0,r.jsx)(a.Z,{})]})}},26995:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return vt}});var r=e(90581),o=e(27805),i=e(64297),s=e(58408),a=e(52322),c=e(2784),l=e(67619),u=e(65721),d=e(66769),h=e(13706),m=e(47842),p=e(64705),f=e(13980),g=e.n(f),x=e(40489);const v=2147483647,C=36,j=/^xn--/,y=/[^\0-\x7F]/,b=/[\x2E\u3002\uFF0E\uFF61]/g,S={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},w=Math.floor,Z=String.fromCharCode;function _(t){throw new RangeError(S[t])}function N(t,n){const e=t.split("@");let r="";e.length>1&&(r=e[0]+"@",t=e[1]);const o=function(t,n){const e=[];let r=t.length;for(;r--;)e[r]=n(t[r]);return e}((t=t.replace(b,".")).split("."),n).join(".");return r+o}function E(t){const n=[];let e=0;const r=t.length;for(;e<r;){const o=t.charCodeAt(e++);if(o>=55296&&o<=56319&&e<r){const r=t.charCodeAt(e++);56320==(64512&r)?n.push(((1023&o)<<10)+(1023&r)+65536):(n.push(o),e--)}else n.push(o)}return n}const P=function(t,n){return t+22+75*(t<26)-((0!=n)<<5)},k=function(t,n,e){let r=0;for(t=e?w(t/700):t>>1,t+=w(t/n);t>455;r+=C)t=w(t/35);return w(r+36*t/(t+38))},T=function(t){const n=[],e=t.length;let r=0,o=128,i=72,s=t.lastIndexOf("-");s<0&&(s=0);for(let c=0;c<s;++c)t.charCodeAt(c)>=128&&_("not-basic"),n.push(t.charCodeAt(c));for(let c=s>0?s+1:0;c<e;){const s=r;for(let n=1,o=C;;o+=C){c>=e&&_("invalid-input");const s=(a=t.charCodeAt(c++))>=48&&a<58?a-48+26:a>=65&&a<91?a-65:a>=97&&a<123?a-97:C;s>=C&&_("invalid-input"),s>w((v-r)/n)&&_("overflow"),r+=s*n;const l=o<=i?1:o>=i+26?26:o-i;if(s<l)break;const u=C-l;n>w(v/u)&&_("overflow"),n*=u}const l=n.length+1;i=k(r-s,l,0==s),w(r/l)>v-o&&_("overflow"),o+=w(r/l),r%=l,n.splice(r++,0,o)}var a;return String.fromCodePoint(...n)},A=function(t){const n=[],e=(t=E(t)).length;let r=128,o=0,i=72;for(const c of t)c<128&&n.push(Z(c));const s=n.length;let a=s;for(s&&n.push("-");a<e;){let e=v;for(const n of t)n>=r&&n<e&&(e=n);const c=a+1;e-r>w((v-o)/c)&&_("overflow"),o+=(e-r)*c,r=e;for(const l of t)if(l<r&&++o>v&&_("overflow"),l===r){let t=o;for(let e=C;;e+=C){const r=e<=i?1:e>=i+26?26:e-i;if(t<r)break;const o=t-r,s=C-r;n.push(Z(P(r+o%s,0))),t=w(o/s)}n.push(Z(P(t,0))),i=k(o,c,a===s),o=0,++a}++o,++r}return n.join("")};var L={version:"2.3.1",ucs2:{decode:E,encode:t=>String.fromCodePoint(...t)},decode:T,encode:A,toASCII:function(t){return N(t,(function(t){return y.test(t)?"xn--"+A(t):t}))},toUnicode:function(t){return N(t,(function(t){return j.test(t)?T(t.slice(4).toLowerCase()):t}))}};function O(){return O=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},O.apply(this,arguments)}var F=function(t){var n=t.theme,e=void 0===n?{}:n,r=t.className,o=t.store,i=t.limit,s=function(t){var n,e=t.getCurrentContent().getPlainText("").replace(/(?:\r\n|\r|\n)/g,"").trim();return(n=e,L.ucs2.decode(n)).length}(o.getEditorState()),a=function(t){var n=(0,x.Z)(e.counter,r),o=(0,x.Z)(e.counterOverLimit,r);return t>i?o:n}(s);return c.createElement("span",{className:a},s)};F.propTypes={theme:g().any,className:g().any,store:g().any,limit:g().any};var W=F,B=function(t){var n=t.store,e=t.limit,r=t.theme,o=void 0===r?{}:r,i=t.className,s=function(t){var n=t.getCurrentContent().getPlainText("").replace(/(?:\r\n|\r|\n)/g," ").trim().match(/\S+/g);return n?n.length:0}(n.getEditorState()),a=function(t){var n=(0,x.Z)(o.counter,i),r=(0,x.Z)(o.counterOverLimit,i);return t>e?r:n}(s);return c.createElement("span",{className:a},s)};B.propTypes={theme:g().any,limit:g().number};var I=B,R=function(t){var n=t.store,e=t.limit,r=t.theme,o=void 0===r?{}:r,i=t.className,s=function(t){var n=t.getCurrentContent().getBlocksAsArray();return n?n.length:null}(n.getEditorState()),a=function(t){var n=(0,x.Z)(o.counter,i),r=(0,x.Z)(o.counterOverLimit,i);return t>e?r:n}(s);return c.createElement("span",{className:a},s)};R.propTypes={theme:g().any,store:g().any,className:g().any,limit:g().number};var M=R,U=function(t){var n=t.store,e=t.limit,r=void 0===e?0:e,o=t.countFunction,i=t.theme,s=void 0===i?{}:i,a=t.className,l=o(n.getEditorState().getCurrentContent().getPlainText("")),u=function(t){var n=(0,x.Z)(s.counter,a),e=(0,x.Z)(s.counterOverLimit,a);return t>r?e:n}(l);return c.createElement("span",{className:u},l)};U.propTypes={theme:g().any,store:g().any,className:g().any,limit:g().number,countFunction:g().func.isRequired};var X=U,Y={counter:"c1svg00",counterOverLimit:"c6sdxe3"},z=function(t){void 0===t&&(t={});var n={getEditorState:void 0,setEditorState:void 0},e=t.theme?t.theme:Y;return{CharCounter:function(t){return c.createElement(W,O({},t,{theme:e,store:n}))},WordCounter:function(t){return c.createElement(I,O({},t,{theme:e,store:n}))},LineCounter:function(t){return c.createElement(M,O({},t,{theme:e,store:n}))},CustomCounter:function(t){return c.createElement(X,O({},t,{theme:e,store:n}))},initialize:function(t){var e=t.getEditorState,r=t.setEditorState;n.getEditorState=e,n.setEditorState=r}}},J=e(97627),D=e.n(J),G=e(9226),Q=e.n(G),q=z({theme:{counter:Q().counter,counterOverLimit:Q().counterOverLimit}}),H=q.CharCounter,$=q.WordCounter,K=q.LineCounter,V=q.CustomCounter,tt=[q],nt="This editor has counters below!\nTry typing here and watch the numbers go up. \ud83d\ude4c\n\nNote that the color changes when you pass one of the following limits:\n- 200 characters\n- 30 words\n- 10 lines\n",et=function(t){(0,i.Z)(e,t);var n=(0,s.Z)(e);function e(){var t;return(0,r.Z)(this,e),t=n.apply(this,arguments),(0,m.Z)((0,h.Z)(t),"state",{editorState:(0,p.bf)(nt)}),(0,m.Z)((0,h.Z)(t),"onChange",(function(n){t.setState({editorState:n})})),(0,m.Z)((0,h.Z)(t),"focus",(function(){t.editor.focus()})),t}return(0,o.Z)(e,[{key:"customCountFunction",value:function(t){var n=t.match(/\S+/g);return n?n.length:0}},{key:"render",value:function(){var t=this;return(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:D().editor,onClick:this.focus,children:(0,a.jsx)(p.ZP,{editorState:this.state.editorState,onChange:this.onChange,plugins:tt,ref:function(n){t.editor=n}})}),(0,a.jsxs)("div",{children:[(0,a.jsx)(H,{limit:200})," characters"]}),(0,a.jsxs)("div",{children:[(0,a.jsx)($,{limit:30})," words"]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(K,{limit:10})," lines"]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(V,{limit:40,countFunction:this.customCountFunction}),(0,a.jsx)("span",{children:" words (custom function)"})]}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{})]})}}]),e}(c.Component),rt=e(16922),ot=e.n(rt),it=z(),st=it.CharCounter,at=it.WordCounter,ct=it.LineCounter,lt=it.CustomCounter,ut=[it],dt="This editor has counters below!\nTry typing here and watch the numbers go up. \ud83d\ude4c\n\nNote that the color changes when you pass one of the following limits:\n- 200 characters\n- 30 words\n- 10 lines\n",ht=function(t){(0,i.Z)(e,t);var n=(0,s.Z)(e);function e(){var t;return(0,r.Z)(this,e),t=n.apply(this,arguments),(0,m.Z)((0,h.Z)(t),"state",{editorState:(0,p.bf)(dt)}),(0,m.Z)((0,h.Z)(t),"onChange",(function(n){t.setState({editorState:n})})),(0,m.Z)((0,h.Z)(t),"focus",(function(){t.editor.focus()})),t}return(0,o.Z)(e,[{key:"customCountFunction",value:function(t){var n=t.match(/\S+/g);return n?n.length:0}},{key:"render",value:function(){var t=this;return(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:ot().editor,onClick:this.focus,children:(0,a.jsx)(p.ZP,{editorState:this.state.editorState,onChange:this.onChange,plugins:ut,ref:function(n){t.editor=n}})}),(0,a.jsxs)("div",{children:[(0,a.jsx)(st,{limit:200})," characters"]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(at,{limit:30})," words"]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(ct,{limit:10})," lines"]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(lt,{limit:40,countFunction:this.customCountFunction}),(0,a.jsx)("span",{children:" words (custom function)"})]}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{})]})}}]),e}(c.Component),mt=e(90397),pt=e(14799),ft=e(16744),gt=e(88053),xt=e.n(gt),vt=function(t){(0,i.Z)(e,t);var n=(0,s.Z)(e);function e(){return(0,r.Z)(this,e),n.apply(this,arguments)}return(0,o.Z)(e,[{key:"render",value:function(){return(0,a.jsxs)(ft.Z,{filePath:"packages/docs/pages/plugin/counter/index.js",children:[(0,a.jsxs)(d.Z,{children:[(0,a.jsx)(mt.Z,{level:2,children:"Counter"}),(0,a.jsx)("p",{children:"A simple counter plugin for all your counting needs. You can even set a limit to change the color past a certain threshold."}),(0,a.jsx)(mt.Z,{level:3,children:"Usage"}),(0,a.jsx)("p",{children:"To use, simply import and instantiate the counter plugin, and then use one of the available counter components in your JSX. Out of the box, the following counters are included:"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:"Character Counter"}),(0,a.jsx)("li",{children:"Word Counter"}),(0,a.jsx)("li",{children:"Line Counter"}),(0,a.jsx)("li",{children:"Custom Counter"})]}),(0,a.jsx)("p",{children:"The Custom Counter allows you to bring your own counting function. This will be a function that takes plain text (as a string) from the editor as input and returns a numerical value."}),(0,a.jsx)(mt.Z,{level:3,children:"Supported Environment"}),(0,a.jsxs)("ul",{className:xt().list,children:[(0,a.jsx)("li",{className:xt().listEntry,children:"Desktop: Yes"}),(0,a.jsx)("li",{className:xt().listEntry,children:"Mobile: Yes"}),(0,a.jsx)("li",{className:xt().listEntry,children:"Screen-reader: Yes"})]})]}),(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(mt.Z,{level:2,children:"Getting Started"}),(0,a.jsx)(u.Z,{code:"npm install @draft-js-plugins/editor"}),(0,a.jsx)(u.Z,{code:"npm install @draft-js-plugins/counter"}),(0,a.jsx)(u.Z,{code:"// It is important to import the Editor which accepts plugins.\nimport Editor from '@draft-js-plugins/editor';\nimport createCounterPlugin from '@draft-js-plugins/counter';\nimport React from 'react';\n\n// Creates an Instance. At this step, a configuration object can be passed in\n// as an argument.\nconst counterPlugin = createCounterPlugin();\n\n// Extract a counter from the plugin.\nconst { CharCounter } = counterPlugin;\n\n// The Editor accepts an array of plugins. In this case, only the counterPlugin is\n// passed in, although it is possible to pass in multiple plugins.\n// The Counter is placed after the Editor.\nconst MyEditor = ({ editorState, onChange }) => (\n  <div>\n    <Editor\n      editorState={editorState}\n      onChange={onChange}\n      plugins={[counterPlugin]}\n    />\n    <CharCounter editorState={this.state.editorState} limit={200} />\n  </div>\n);\n\nexport default MyEditor;\n",name:"gettingStarted.js"}),(0,a.jsx)(mt.Z,{level:3,children:"Importing the default styles"}),(0,a.jsxs)("p",{children:["The plugin ships with a default styling available at this location in the installed package: \xa0",(0,a.jsx)(pt.Z,{code:"node_modules/@draft-js-plugins/counter/lib/plugin.css"})]}),(0,a.jsx)(mt.Z,{level:4,children:"Webpack Usage"}),(0,a.jsxs)("ul",{className:xt().list,children:[(0,a.jsxs)("li",{className:xt().listEntry,children:["1. Install Webpack loaders: \xa0",(0,a.jsx)(pt.Z,{code:"npm i style-loader css-loader --save-dev"})]}),(0,a.jsxs)("li",{className:xt().listEntry,children:["2. Add the below section to Webpack config (if your config already has a loaders array, simply add the below loader object to your existing list.",(0,a.jsx)(u.Z,{code:"module.exports = {\n  module: {\n    loaders: [\n      {\n        test: /plugin\\.css$/,\n        loaders: ['style-loader', 'css'],\n      },\n    ],\n  },\n};\n",className:xt().guideCodeBlock})]}),(0,a.jsxs)("li",{className:xt().listEntry,children:["3. Add the below import line to your component to tell Webpack to inject the style to your component.",(0,a.jsx)(u.Z,{code:"import '@draft-js-plugins/counter/lib/plugin.css';",className:xt().guideCodeBlock})]}),(0,a.jsx)("li",{className:xt().listEntry,children:"4. Restart Webpack."})]})]}),(0,a.jsxs)(d.Z,{children:[(0,a.jsx)(mt.Z,{level:2,children:"Configuration Parameters"}),(0,a.jsxs)("div",{className:xt().param,children:[(0,a.jsx)("div",{className:xt().paramName,children:"theme"}),(0,a.jsxs)("div",{children:["Javascript object of CSS classes with the following keys.",(0,a.jsxs)("div",{className:xt().subParams,children:[(0,a.jsxs)("div",{className:xt().subParam,children:[(0,a.jsx)("span",{className:xt().subParamName,children:"counter:"})," CSS class to be applied to the number displayed when not over the specified limit"]}),(0,a.jsxs)("div",{className:xt().subParam,children:[(0,a.jsx)("span",{className:xt().subParamName,children:"counterOverLimit:"})," ","CSS class to be applied to the number displayed when over the specified limit"]})]})]})]}),(0,a.jsx)(mt.Z,{level:2,children:"Component Properties"}),(0,a.jsxs)("div",{className:xt().param,children:[(0,a.jsx)("div",{className:xt().paramName,children:"limit"}),(0,a.jsx)("div",{children:"A limit to indicate to the user that a threshold has passed."})]}),(0,a.jsxs)("div",{className:xt().param,children:[(0,a.jsx)("div",{className:xt().paramName,children:"countFunction"}),(0,a.jsx)("div",{children:"A custom counting function for the Custom Counter. The function will receive plain text from the editor (as a string) as input and should return a numerical value."})]})]}),(0,a.jsxs)(d.Z,{children:[(0,a.jsx)(mt.Z,{level:2,children:"Simple Example"}),(0,a.jsx)(ht,{}),(0,a.jsx)(u.Z,{code:"import React, { Component } from 'react';\nimport Editor, { createEditorStateWithText } from '@draft-js-plugins/editor';\nimport createCounterPlugin from '@draft-js-plugins/counter';\nimport editorStyles from './editorStyles.module.css';\n\nconst counterPlugin = createCounterPlugin();\nconst { CharCounter, WordCounter, LineCounter, CustomCounter } = counterPlugin;\nconst plugins = [counterPlugin];\nconst text = `This editor has counters below!\nTry typing here and watch the numbers go up. \ud83d\ude4c\n\nNote that the color changes when you pass one of the following limits:\n- 200 characters\n- 30 words\n- 10 lines\n`;\n\nexport default class SimpleCounterEditor extends Component {\n  state = {\n    editorState: createEditorStateWithText(text),\n  };\n\n  onChange = (editorState) => {\n    this.setState({ editorState });\n  };\n\n  focus = () => {\n    this.editor.focus();\n  };\n\n  customCountFunction(str) {\n    const wordArray = str.match(/\\S+/g); // matches words according to whitespace\n    return wordArray ? wordArray.length : 0;\n  }\n\n  render() {\n    return (\n      <div>\n        <div className={editorStyles.editor} onClick={this.focus}>\n          <Editor\n            editorState={this.state.editorState}\n            onChange={this.onChange}\n            plugins={plugins}\n            ref={(element) => {\n              this.editor = element;\n            }}\n          />\n        </div>\n        <div>\n          <CharCounter limit={200} /> characters\n        </div>\n        <div>\n          <WordCounter limit={30} /> words\n        </div>\n        <div>\n          <LineCounter limit={10} /> lines\n        </div>\n        <div>\n          <CustomCounter limit={40} countFunction={this.customCountFunction} />\n          <span> words (custom function)</span>\n        </div>\n        <br />\n        <br />\n      </div>\n    );\n  }\n}\n",name:"SimpleCounterEditor.js"}),(0,a.jsx)(u.Z,{code:".editor {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editor :global(.public-DraftEditor-content) {\n  min-height: 140px;\n}\n",name:"editorStyles.css"})]}),(0,a.jsxs)(d.Z,{children:[(0,a.jsx)(mt.Z,{level:2,children:"Themed Example"}),(0,a.jsx)(et,{}),(0,a.jsx)(u.Z,{code:"import React, { Component } from 'react';\nimport Editor, { createEditorStateWithText } from '@draft-js-plugins/editor';\nimport createCounterPlugin from '@draft-js-plugins/counter';\nimport editorStyles from './editorStyles.module.css';\nimport counterStyles from './counterStyles.module.css';\n\nconst theme = {\n  counter: counterStyles.counter,\n  counterOverLimit: counterStyles.counterOverLimit,\n};\nconst counterPlugin = createCounterPlugin({ theme });\nconst { CharCounter, WordCounter, LineCounter, CustomCounter } = counterPlugin;\nconst plugins = [counterPlugin];\nconst text = `This editor has counters below!\nTry typing here and watch the numbers go up. \ud83d\ude4c\n\nNote that the color changes when you pass one of the following limits:\n- 200 characters\n- 30 words\n- 10 lines\n`;\n\nexport default class CustomCounterEditor extends Component {\n  state = {\n    editorState: createEditorStateWithText(text),\n  };\n\n  onChange = (editorState) => {\n    this.setState({ editorState });\n  };\n\n  focus = () => {\n    this.editor.focus();\n  };\n\n  // eslint-disable-next-line class-methods-use-this\n  customCountFunction(str) {\n    const wordArray = str.match(/\\S+/g); // matches words according to whitespace\n    return wordArray ? wordArray.length : 0;\n  }\n\n  render() {\n    return (\n      <div>\n        <div className={editorStyles.editor} onClick={this.focus}>\n          <Editor\n            editorState={this.state.editorState}\n            onChange={this.onChange}\n            plugins={plugins}\n            ref={(element) => {\n              this.editor = element;\n            }}\n          />\n        </div>\n        <div>\n          <CharCounter limit={200} /> characters\n        </div>\n        <div>\n          <WordCounter limit={30} /> words\n        </div>\n        <div>\n          <LineCounter limit={10} /> lines\n        </div>\n        <div>\n          <CustomCounter limit={40} countFunction={this.customCountFunction} />\n          <span> words (custom function)</span>\n        </div>\n        <br />\n        <br />\n      </div>\n    );\n  }\n}\n",name:"CustomCounterEditor.js"}),(0,a.jsx)(u.Z,{code:".counter {\n  color: white;\n  background-color: #353535;\n  display: inline-block;\n  min-width: 50px;\n  border-radius: 10px;\n  padding: 2px;\n  text-align: center;\n  margin-bottom: 5px;\n}\n\n.counterOverLimit {\n  color: tomato;\n  background-color: #353535;\n  display: inline-block;\n  min-width: 50px;\n  border-radius: 10px;\n  padding: 2px;\n  text-align: center;\n  margin-bottom: 5px;\n}\n",name:"counterStyles.css"}),(0,a.jsx)(u.Z,{code:".editor {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editor :global(.public-DraftEditor-content) {\n  min-height: 140px;\n}\n",name:"editorStyles.css"})]})]})}}]),e}(c.Component)},88441:function(t){t.exports={root:"Code_root__L5JtP",name:"Code_name__0g9Xm",hiddenName:"Code_hiddenName__iBe7o"}},9226:function(t){t.exports={counter:"counterStyles_counter__iI2dQ",counterOverLimit:"counterStyles_counterOverLimit__RyMB0"}},97627:function(t){t.exports={editor:"editorStyles_editor__843A8"}},16922:function(t){t.exports={editor:"editorStyles_editor__mPFSv"}},4813:function(t){t.exports={root:"InlineCode_root__8ZQag"}},88053:function(t){t.exports={root:"styles_root__dgZtx",center:"styles_center__h0_1N",param:"styles_param__CG7gc",paramName:"styles_paramName__yMnyR",subParams:"styles_subParams__3u_Bv",subParam:"styles_subParam__fa3nX",subParamName:"styles_subParamName___amJY",list:"styles_list__32zAo",listEntry:"styles_listEntry__keTUx",guideCodeBlock:"styles_guideCodeBlock__wU4ip"}},27805:function(t,n,e){"use strict";function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,n,e){return n&&r(t.prototype,n),e&&r(t,e),t}e.d(n,{Z:function(){return o}})}},function(t){t.O(0,[555,476,939,774,888,179],(function(){return n=44222,t(t.s=n);var n}));var n=t.O();_N_E=n}]);