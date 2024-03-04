"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[987],{76987:function(e,t,n){n.d(t,{ZP:function(){return ee},zk:function(){return te}});var o=n(46670),r=n(2784),i=n(40489),s=n(1503),a=n(13980),c=n.n(a),u=n(187),p=n(95598),l=n(97885),f=n(22758),d=u.Z?u.Z.prototype:void 0,g=d?d.toString:void 0;var m=function e(t){if("string"==typeof t)return t;if((0,l.Z)(t))return(0,p.Z)(t,e)+"";if((0,f.Z)(t))return g?g.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n};var v=function(e){return null==e?"":m(e)},h=/[\\^$.*+?()[\]{}|]/g,y=RegExp(h.source);var E=function(e){return(e=v(e))&&y.test(e)?e.replace(h,"\\$&"):e},S=n(54707),b=n(35741);function C(){return C=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},C.apply(this,arguments)}function O(e,t){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},O(e,t)}function x(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function A(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"===typeof e)return k(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?k(e,t):void 0}}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var o=0;return function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function w(e){var t=e.mention,n=e.children,o=e.className;return r.createElement("a",{href:t.link,className:o,spellCheck:!1,"data-testid":"mentionLink"},n)}function I(e){var t=e.children,n=e.className;return r.createElement("span",{className:n,spellCheck:!1,"data-testid":"mentionText"},t)}function M(e){var t=e.entityKey,n=e.theme,o=void 0===n?{}:n,s=e.mentionComponent,a=e.children,c=e.decoratedText,u=e.className,p=e.contentState,l=(0,i.Z)(o.mention,u),f=p.getEntity(t).getData().mention,d=s||(f.link?w:I);return r.createElement(d,{entityKey:t,mention:f,theme:o,className:l,decoratedText:c},a)}var P=function(e,t,n){var o=t.getAnchorKey(),r=t.getAnchorOffset();return function(e,t,n){for(var o,r=e.substr(0,t),i=n.map((function(e){return E(e)})).join("|"),s=new RegExp("(\\s|^)("+i+")","g"),a=0,c=0,u=A(r.matchAll(s));!(o=u()).done;){var p=o.value,l=p[1].length,f=p[2].length;c=(a=(p.index||0)+l)+f}var d=r.slice(c);return{begin:a,end:r.length,matchingString:d}}(e.getCurrentContent().getBlockForKey(o).getText(),r,n)};function T(e){return"@"===e?"mention":e+"mention"}var D=function(e){var t=e.split("-"),n=t[0],o=t[1],r=t[2];return{blockKey:n,decoratorKey:parseInt(o,10),leafKey:parseInt(r,10)}};function R(e){return void 0!==e}var K=function e(t){return t?"static"!==window.getComputedStyle(t).getPropertyValue("position")?t:e(t.parentElement):null};function F(e){var t,n=e.decoratorRect,o=e.popover,r=e.props,i=K(o.parentElement);if(i){var s=i.getBoundingClientRect();t={scrollLeft:i.scrollLeft,scrollTop:i.scrollTop,left:n.left-s.left,top:n.bottom-s.top}}else t={scrollTop:window.pageYOffset||document.documentElement.scrollTop,scrollLeft:window.pageXOffset||document.documentElement.scrollLeft,top:n.bottom,left:n.left};var a,c,u=t.left+t.scrollLeft,p=t.top+t.scrollTop;return r.open&&(r.suggestions.length>0?(a="scale(1)",c="all 0.25s cubic-bezier(.3,1.2,.2,1)"):(a="scale(0)",c="all 0.35s cubic-bezier(.3,1,.2,1)")),{left:u+"px",top:p+"px",transform:a,transformOrigin:"1em 0%",transition:c}}var N=(0,S.Z)((function(e){0}));function V(e){var t=e.mention,n=e.theme,o=void 0===n?{}:n;return t.avatar?r.createElement("img",{src:t.avatar,className:o.mentionSuggestionsEntryAvatar,role:"presentation"}):null}var j=["mention","theme","isFocused","searchValue","selectMention"];function B(e){var t=e.mention,n=e.theme,o=e.isFocused;e.searchValue,e.selectMention;var i=x(e,j);return r.createElement("div",C({},i,{"aria-selected":o}),r.createElement(V,{mention:t,theme:n}),r.createElement("span",{className:null==n?void 0:n.mentionSuggestionsEntryText},t.name))}var L=function(e){var t=e.onMentionSelect,n=e.mention,o=e.theme,i=e.index,s=e.onMentionFocus,a=e.isFocused,c=e.id,u=e.searchValue,p=e.entryComponent,l=(0,r.useRef)(!1),f=(0,r.useRef)(null);(0,r.useEffect)((function(){a&&requestAnimationFrame((function(){var e;return null==(e=f.current)?void 0:e.scrollIntoView({behavior:"smooth",block:"nearest"})}))}),[a]),(0,r.useEffect)((function(){l.current=!1}));var d=a?o.mentionSuggestionsEntryFocused:o.mentionSuggestionsEntry;return r.createElement("div",{ref:f},r.createElement(p,{className:d,onMouseDown:function(e){e.preventDefault(),l.current=!0},onMouseUp:function(){l.current&&(t(n),l.current=!1)},onMouseEnter:function(){s(i)},role:"option",id:c,"aria-selected":a?"true":void 0,theme:o,mention:n,isFocused:a,searchValue:u,selectMention:t}))};L.propTypes={entryComponent:c().any.isRequired,searchValue:c().string,onMentionSelect:c().func};var q=L;function Z(e){var t=e.store,n=e.children,o=e.theme,s=e.popperOptions,a=void 0===s?{placement:"bottom-start"}:s,c=(0,r.useState)((function(){return(0,i.Z)(o.mentionSuggestions,o.mentionSuggestionsPopup)})),u=c[0],p=c[1],l=(0,r.useState)(null),f=l[0],d=l[1],g=(0,b.D)(t.getReferenceElement(),f,a),m=g.styles,v=g.attributes;return(0,r.useEffect)((function(){requestAnimationFrame((function(){return p((0,i.Z)(o.mentionSuggestions,o.mentionSuggestionsPopup,o.mentionSuggestionsPopupVisible))}))}),[o]),r.createElement("div",C({ref:d,style:m.popper},v.popper,{className:u,role:"listbox"}),n)}var U=["entryComponent","popoverComponent","popperOptions","popoverContainer","onOpenChange","onAddMention","onSearchChange","suggestions","ariaProps","callbacks","theme","store","entityMutability","positionSuggestions","mentionTriggers","mentionPrefix"],_=function(e){var t,n;function o(t){var n;return(n=e.call(this,t)||this).state={focusedOptionIndex:0},n.key=(0,s.genKey)(),n.lastActiveTrigger="",n.onEditorStateChange=function(e){var t=n.props.store.getAllSearches();if(0===t.size)return e;var o=function(e,t,n){var o=e.getSelection(),r=o.getAnchorKey(),i=o.getAnchorOffset();if(!o.isCollapsed()||!o.getHasFocus())return null;var s=t.map((function(e){return D(e)})).filter((function(e){return e.blockKey===r})).map((function(t){return e.getBlockTree(t.blockKey).getIn([t.decoratorKey])}));if(s.every((function(e){return void 0===e})))return null;var a=e.getCurrentContent().getBlockForKey(r).getText(),c=s.filter(R).map((function(e){var t=e.start,o=e.end;return n.map((function(e){return 0===t&&i>=t+e.length&&a.substr(0,e.length)===e&&i<=o||n.length>1&&i>=t+e.length&&(a.substr(t+1,e.length)===e||a.substr(t,e.length)===e)&&i<=o||1===n.length&&i>=t+e.length&&i<=o?e:void 0})).filter(R)[0]})).filter(R);if(c.isEmpty())return null;var u=c.entrySeq().first();return{activeOffsetKey:u[0],activeTrigger:u[1]}}(e,t,n.props.mentionTriggers);if(!o)return n.props.store.resetEscapedSearch(),n.closeDropdown(),e;var r=n.activeOffsetKey;return n.activeOffsetKey=o.activeOffsetKey,n.onSearchChange(e,e.getSelection(),n.activeOffsetKey,r,o.activeTrigger),n.props.store.isEscaped(n.activeOffsetKey||"")||n.props.store.resetEscapedSearch(),n.props.open||n.props.store.isEscaped(n.activeOffsetKey||"")||n.openDropdown(),r!==n.activeOffsetKey&&n.setState({focusedOptionIndex:0}),e},n.onSearchChange=function(e,t,o,r,i){var s=P(e,t,[i]).matchingString;n.lastActiveTrigger===i&&n.lastSearchValue===s&&o===r||(n.lastActiveTrigger=i,n.lastSearchValue=s,n.props.onSearchChange({trigger:i,value:s}),n.setState({focusedOptionIndex:0}))},n.onDownArrow=function(e){e.preventDefault();var t=n.state.focusedOptionIndex+1;n.onMentionFocus(t>=n.props.suggestions.length?0:t)},n.onTab=function(e){e.preventDefault(),n.commitSelection()},n.onUpArrow=function(e){if(e.preventDefault(),n.props.suggestions.length>0){var t=n.state.focusedOptionIndex-1;n.onMentionFocus(t<0?n.props.suggestions.length-1:t)}},n.onEscape=function(e){e.preventDefault(),n.props.store.escapeSearch(n.activeOffsetKey||""),n.closeDropdown(),n.props.store.setEditorState(n.props.store.getEditorState())},n.onMentionSelect=function(e){if(e){n.props.onAddMention&&n.props.onAddMention(e),n.closeDropdown();var t=function(e,t,n,o,r){var i=e.getCurrentContent().createEntity(T(o),r,{mention:t}).getLastCreatedEntityKey(),a=e.getSelection(),c=P(e,a,[o]),u=c.begin,p=c.end,l=a.merge({anchorOffset:u,focusOffset:p}),f=s.Modifier.replaceText(e.getCurrentContent(),l,""+("string"===typeof n?n:n(o))+t.name,e.getCurrentInlineStyle(),i),d=l.getAnchorKey();e.getCurrentContent().getBlockForKey(d).getLength()===p&&(f=s.Modifier.insertText(f,f.getSelectionAfter()," "));var g=s.EditorState.push(e,f,"insert-fragment");return s.EditorState.forceSelection(g,f.getSelectionAfter())}(n.props.store.getEditorState(),e,n.props.mentionPrefix,n.lastActiveTrigger||"",n.props.entityMutability);n.props.store.setEditorState(t)}},n.onMentionFocus=function(e){var t="mention-option-"+n.key+"-"+e;n.props.ariaProps.ariaActiveDescendantID=t,n.setState({focusedOptionIndex:e}),n.props.store.setEditorState(n.props.store.getEditorState())},n.commitSelection=function(){var e=n.props.suggestions[n.state.focusedOptionIndex];return n.props.store.getIsOpened()&&e?(n.onMentionSelect(e),"handled"):"not-handled"},n.openDropdown=function(){n.props.callbacks.handleReturn=n.commitSelection,n.props.callbacks.keyBindingFn=function(e){40===e.keyCode&&n.onDownArrow(e),38===e.keyCode&&n.onUpArrow(e),27===e.keyCode&&n.onEscape(e),9===e.keyCode&&n.onTab(e)};var e="mention-option-"+n.key+"-"+n.state.focusedOptionIndex;n.props.ariaProps.ariaActiveDescendantID=e,n.props.ariaProps.ariaOwneeID="mentions-list-"+n.key,n.props.ariaProps.ariaHasPopup="true",n.props.ariaProps.ariaExpanded=!0,n.props.onOpenChange(!0)},n.closeDropdown=function(){n.props.callbacks.handleReturn=void 0,n.props.callbacks.keyBindingFn=void 0,n.props.ariaProps.ariaHasPopup="false",n.props.ariaProps.ariaExpanded=!1,n.props.ariaProps.ariaActiveDescendantID=void 0,n.props.ariaProps.ariaOwneeID=void 0,n.props.onOpenChange(!1)},n.props.callbacks.onChange=n.onEditorStateChange,n}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,O(t,n);var i=o.prototype;return i.componentDidUpdate=function(){if(this.popover){var e=this.props.suggestions.length;if(e>0&&this.state.focusedOptionIndex>=e&&this.setState({focusedOptionIndex:e-1}),!this.props.store.getAllSearches().has(this.activeOffsetKey))return;for(var t=this.props.store.getPortalClientRect(this.activeOffsetKey),n=(this.props.positionSuggestions||F)({decoratorRect:t,props:this.props,popover:this.popover}),o=0,r=Object.entries(n);o<r.length;o++){var i=r[o],s=i[0],a=i[1];this.popover.style[s]=a}}},i.componentWillUnmount=function(){this.props.callbacks.onChange=void 0},i.render=function(){var e=this;if(!this.props.open)return null;var t=this.props,n=t.entryComponent,o=t.popoverComponent,i=t.popperOptions,s=t.popoverContainer,a=void 0===s?Z:s;t.onOpenChange,t.onAddMention,t.onSearchChange,t.suggestions,t.ariaProps,t.callbacks;var c=t.theme,u=void 0===c?{}:c;t.store,t.entityMutability;var p=t.positionSuggestions;t.mentionTriggers,t.mentionPrefix;var l=x(t,U);return o||p?(N("The properties `popoverComponent` and `positionSuggestions` are deprecated and will be removed in @draft-js-plugins/mentions 6.0 . Use `popperOptions` instead"),r.cloneElement(o||r.createElement("div",null),C({},l,{className:u.mentionSuggestions,role:"listbox",id:"mentions-list-"+this.key,ref:function(t){e.popover=t}}),this.props.suggestions.map((function(t,o){return r.createElement(q,{key:null!=t.id?t.id:t.name,onMentionSelect:e.onMentionSelect,onMentionFocus:e.onMentionFocus,isFocused:e.state.focusedOptionIndex===o,mention:t,index:o,id:"mention-option-"+e.key+"-"+o,theme:u,searchValue:e.lastSearchValue,entryComponent:n||B})})))):this.props.renderEmptyPopup||0!==this.props.suggestions.length?r.createElement(a,{store:this.props.store,popperOptions:i,theme:u},this.props.suggestions.map((function(t,o){return r.createElement(q,{key:null!=t.id?t.id:t.name,onMentionSelect:e.onMentionSelect,onMentionFocus:e.onMentionFocus,isFocused:e.state.focusedOptionIndex===o,mention:t,index:o,id:"mention-option-"+e.key+"-"+o,theme:u,searchValue:e.lastSearchValue,entryComponent:n||B})}))):null},o}(r.Component);_.propTypes={open:c().bool.isRequired,onOpenChange:c().func.isRequired,entityMutability:c().oneOf(["SEGMENTED","IMMUTABLE","MUTABLE"]),entryComponent:c().func,onAddMention:c().func,suggestions:c().array.isRequired};var z=_,H="undefined"!==typeof window?r.useLayoutEffect:r.useEffect;function $(e){var t=(0,r.useRef)(),n=function(e){e.store.updatePortalClientRect(e.offsetKey,(function(){return t.current.getBoundingClientRect()}))};return H((function(){return e.store.register(e.offsetKey),e.store.setIsOpened(!0),n(e),e.store.setEditorState(e.store.getEditorState()),function(){e.store.unregister(e.offsetKey),e.store.setIsOpened(!1),e.store.setReferenceElement(null)}}),[]),(0,r.useEffect)((function(){t.current&&e.store.setReferenceElement(t.current)}),[t.current]),(0,r.useEffect)((function(){n(e)})),r.createElement("span",{ref:function(n){t.current=n,e.store.setReferenceElement(n)}},e.children)}var G={mention:"m6zwb4v",mentionSuggestions:"mnw6qvm",mentionSuggestionsPopup:"m1ymsnxd",mentionSuggestionsPopupVisible:"m126ak5t",mentionSuggestionsEntry:"mtiwdxc",mentionSuggestionsEntryFocused:"myz2dw1",mentionSuggestionsEntryText:"mpqdcgq",mentionSuggestionsEntryAvatar:"m1mfvffo"},W=function(e){return function(t,n,o){t.findEntityRanges((function(t){var n=t.getEntity();return null!==n&&e.some((function(e){return o.getEntity(n).getType()===T(e)}))}),n)}},X=/\s/;function Y(e,t){return 0===t||X.test(e[t-1])}var J=function(e,t,n,o){var r=t.getText();t.findEntityRanges((function(e){return!e.getEntity()}),(function(t,i){var s=r.slice(t,i);n?function(e,t,n,o){for(var r,i,s=e.lastIndex;null!==(r=e.exec(t))&&e.lastIndex!==s;){s=e.lastIndex;var a=(i=n+r.index)+r[0].length;Y(t,r.index)&&o(i,a)}}(e,s,t,o):function(e,t,n,o){for(var r,i,s=e.lastIndex;null!==(r=e.exec(t))&&e.lastIndex!==s;){s=e.lastIndex;var a=(i=n+r.index)+r[0].length;X.test(t[i])&&(i+=1),o(i,a)}}(e,s,t,o)}))},Q=function(e,t,n){var o="("+e.map((function(e){return E(e)})).join("|")+")",r=t?new RegExp(o+"("+n+"|\\s)*","g"):new RegExp("(\\s|^)"+o+n+"*","g");return function(e,n){J(r,e,t,n)}},ee=function(e){void 0===e&&(e={});var t,n,i={keyBindingFn:void 0,handleKeyCommand:void 0,handleReturn:void 0,onChange:void 0},s={ariaHasPopup:"false",ariaExpanded:!1,ariaOwneeID:void 0,ariaActiveDescendantID:void 0},a=(0,o.Map)(),c=(0,o.Map)(),u=!1,p={getEditorState:void 0,setEditorState:void 0,getPortalClientRect:function(e){return c.get(e)()},getAllSearches:function(){return a},isEscaped:function(e){return t===e},escapeSearch:function(e){t=e},resetEscapedSearch:function(){t=void 0},register:function(e){a=a.set(e,e)},updatePortalClientRect:function(e,t){c=c.set(e,t)},unregister:function(e){a=a.delete(e),c=c.delete(e)},getIsOpened:function(){return u},setIsOpened:function(e){u=e},getReferenceElement:function(){return n},setReferenceElement:function(e){n=e}},l=e,f=l.mentionPrefix,d=void 0===f?"":f,g=l.theme,m=void 0===g?G:g,v=l.positionSuggestions,h=l.mentionComponent,y=l.mentionSuggestionsComponent,E=void 0===y?z:y,S=l.entityMutability,b=void 0===S?"SEGMENTED":S,O=l.mentionTrigger,x=void 0===O?"@":O,k=l.mentionRegExp,A=void 0===k?"[\\w-\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u0148\u014a-\u017f\u0410-\u044f\u3005-\u3006\u3040-\u309f\u30a0-\u30ff\u3130-\u318f\uac00-\ud7a3\u4e00-\u9fa5\u0600-\u06ff\xc0-\u1ef9]":k,w=l.supportWhitespace,I=void 0!==w&&w,P=l.popperOptions,T="string"===typeof x?[x]:x,D={ariaProps:s,callbacks:i,theme:m,store:p,entityMutability:b,positionSuggestions:v,mentionTriggers:T,mentionPrefix:d,popperOptions:P};return{MentionSuggestions:function(e){return r.createElement(E,C({},e,D))},decorators:[{strategy:W(T),component:function(e){return r.createElement(M,C({},e,{theme:m,mentionComponent:h}))}},{strategy:Q(T,I,A),component:function(e){return r.createElement($,C({},e,{store:p}))}}],getAccessibilityProps:function(){return{role:"combobox",ariaAutoComplete:"list",ariaHasPopup:s.ariaHasPopup,ariaExpanded:s.ariaExpanded,ariaActiveDescendantID:s.ariaActiveDescendantID,ariaOwneeID:s.ariaOwneeID}},initialize:function(e){var t=e.getEditorState,n=e.setEditorState;p.getEditorState=t,p.setEditorState=n},keyBindingFn:function(e){return i.keyBindingFn&&i.keyBindingFn(e)},handleReturn:function(e){return i.handleReturn&&i.handleReturn(e)},onChange:function(e){return i.onChange?i.onChange(e):e}}},te=function(e,t,n){var o=e.toLowerCase(),r=(n&&!Array.isArray(t)?t[n]:t).filter((function(e){return!o||e.name.toLowerCase().indexOf(o)>-1})),i=r.length<5?r.length:5;return r.slice(0,i)}}}]);