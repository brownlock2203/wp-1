(()=>{var e={4184:(e,o)=>{var t;!function(){"use strict";var n={}.hasOwnProperty;function l(){for(var e=[],o=0;o<arguments.length;o++){var t=arguments[o];if(t){var i=typeof t;if("string"===i||"number"===i)e.push(t);else if(Array.isArray(t)){if(t.length){var a=l.apply(null,t);a&&e.push(a)}}else if("object"===i)if(t.toString===Object.prototype.toString)for(var d in t)n.call(t,d)&&t[d]&&e.push(d);else e.push(t.toString())}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(t=function(){return l}.apply(o,[]))||(e.exports=t)}()},2819:e=>{"use strict";e.exports=window.lodash},9543:e=>{"use strict";e.exports=window.kadence.components},6222:e=>{"use strict";e.exports=window.kadence.helpers},9995:e=>{"use strict";e.exports=window.kadence.icons},2175:e=>{"use strict";e.exports=window.wp.blockEditor},4981:e=>{"use strict";e.exports=window.wp.blocks},5609:e=>{"use strict";e.exports=window.wp.components},9818:e=>{"use strict";e.exports=window.wp.data},9307:e=>{"use strict";e.exports=window.wp.element},5736:e=>{"use strict";e.exports=window.wp.i18n},444:e=>{"use strict";e.exports=window.wp.primitives}},o={};function t(n){var l=o[n];if(void 0!==l)return l.exports;var i=o[n]={exports:{}};return e[n](i,i.exports,t),i.exports}t.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return t.d(o,{a:o}),o},t.d=(e,o)=>{for(var n in o)t.o(o,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})},t.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};(()=>{"use strict";t.r(n);const e=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"title":"Single Button","name":"kadence/singlebtn","parent":["kadence/advancedbtn"],"category":"kadence-blocks","attributes":{"uniqueID":{"type":"string","default":""},"text":{"type":"string","default":"","__experimentalRole":"content"},"link":{"type":"string","default":"","__experimentalRole":"content"},"target":{"type":"string","default":"_self","__experimentalRole":"content"},"noFollow":{"type":"boolean","default":false,"__experimentalRole":"content"},"sponsored":{"type":"boolean","default":false,"__experimentalRole":"content"},"download":{"type":"boolean","default":false,"__experimentalRole":"content"},"style":{"type":"string","default":"basic"},"sizePreset":{"type":"string","default":"standard"},"gap":{"type":"array","default":["","",""]},"width":{"type":"array","default":["","",""]},"widthUnit":{"type":"string","default":"px"},"widthType":{"type":"string","default":"auto"},"padding":{"type":"array","default":["","","",""]},"tabletPadding":{"type":"array","default":["","","",""]},"mobilePadding":{"type":"array","default":["","","",""]},"paddingUnit":{"type":"string","default":"px"},"margin":{"type":"array","default":["","","",""]},"tabletMargin":{"type":"array","default":["","","",""]},"mobileMargin":{"type":"array","default":["","","",""]},"marginUnit":{"type":"string","default":"px"},"color":{"type":"string","default":""},"background":{"type":"string","default":""},"gradient":{"type":"string","default":""},"backgroundType":{"type":"string","default":"normal"},"colorHover":{"type":"string","default":""},"backgroundHover":{"type":"string","default":""},"backgroundHoverType":{"type":"string","default":"normal"},"gradientHover":{"type":"string","default":""},"borderStyle":{"type":"array","default":[{"top":["","",""],"right":["","",""],"bottom":["","",""],"left":["","",""],"unit":"px"}]},"tabletBorderStyle":{"type":"array","default":[{"top":["","",""],"right":["","",""],"bottom":["","",""],"left":["","",""],"unit":"px"}]},"mobileBorderStyle":{"type":"array","default":[{"top":["","",""],"right":["","",""],"bottom":["","",""],"left":["","",""],"unit":"px"}]},"borderHoverStyle":{"type":"array","default":[{"top":["","",""],"right":["","",""],"bottom":["","",""],"left":["","",""],"unit":"px"}]},"tabletBorderHoverStyle":{"type":"array","default":[{"top":["","",""],"right":["","",""],"bottom":["","",""],"left":["","",""],"unit":"px"}]},"mobileBorderHoverStyle":{"type":"array","default":[{"top":["","",""],"right":["","",""],"bottom":["","",""],"left":["","",""],"unit":"px"}]},"borderRadius":{"type":"array","default":["","","",""]},"tabletBorderRadius":{"type":"array","default":["","","",""]},"mobileBorderRadius":{"type":"array","default":["","","",""]},"borderRadiusUnit":{"type":"string","default":"px"},"borderHoverRadius":{"type":"array","default":["","","",""]},"tabletBorderHoverRadius":{"type":"array","default":["","","",""]},"mobileBorderHoverRadius":{"type":"array","default":["","","",""]},"borderHoverRadiusUnit":{"type":"string","default":"px"},"icon":{"type":"string","default":""},"iconColor":{"type":"string","default":""},"iconColorHover":{"type":"string","default":""},"iconSide":{"type":"string","default":"right"},"iconHover":{"type":"boolean","default":false},"iconPadding":{"type":"array","default":["","","",""]},"iconPaddingUnit":{"type":"string","default":"px"},"tabletIconPadding":{"type":"array","default":["","","",""]},"mobileIconPadding":{"type":"array","default":["","","",""]},"iconSize":{"type":"array","default":["","",""]},"iconSizeUnit":{"type":"string","default":"px"},"onlyIcon":{"type":"array","default":[false,"",""]},"label":{"type":"string","default":""},"inheritStyles":{"type":"string","default":"fill"},"typography":{"type":"array","default":[{"size":["","",""],"sizeType":"px","lineHeight":["","",""],"lineType":"","letterSpacing":["","",""],"letterType":"px","textTransform":"","family":"","google":"","style":"","weight":"","variant":"","subset":"","loadGoogle":true}]},"displayShadow":{"type":"boolean","default":false},"displayHoverShadow":{"type":"boolean","default":false},"shadow":{"type":"array","default":[{"color":"#000000","opacity":0.2,"spread":0,"blur":2,"hOffset":1,"vOffset":1,"inset":false}]},"shadowHover":{"type":"array","default":[{"color":"#000000","opacity":0.4,"spread":0,"blur":3,"hOffset":2,"vOffset":2,"inset":false}]},"inQueryBlock":{"type":"boolean","default":false},"anchor":{"type":"string"},"hideLink":{"type":"boolean","default":false},"noCustomDefaults":{"type":"boolean","default":false}},"supports":{"anchor":true,"ktanimate":true,"ktanimateadd":true,"ktanimatepreview":true,"ktdynamic":true,"html":false,"reusable":false,"kbMetadata":true,"kbContentLabel":"text"},"usesContext":["postId","queryId"]}');var o=t(9995),l=t(9307),i=t(6222),a=t(9543),d=t(4184),r=t.n(d),s=(t(2819),t(5736)),u=t(9818),v=t(444);const c=(0,l.createElement)(v.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,l.createElement)(v.Path,{d:"M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z"})),p=window.wp.keycodes;var g=t(2175),b=t(5609);const m=window.wp.hooks;(0,t(4981).registerBlockType)("kadence/singlebtn",{...e,title:(0,s.__)("Single Button","kadence-blocks"),description:(0,s.__)("Single button within a button block","kadence-blocks"),keywords:[(0,s.__)("Button","kadence-blocks"),(0,s.__)("btn","kadence-blocks"),"KB"],icon:{src:o.advancedBtnIcon},edit:function(o){var t,n,d,v,y,k,f,h,S,C,w,_,x,O,B,T,E,P,R,I,H,z,A,F,M;const{attributes:U,setAttributes:L,className:V,isSelected:D,context:N,clientId:$,name:K}=o,{uniqueID:q,text:G,link:j,target:W,sponsored:Q,download:J,noFollow:X,sizePreset:Y,padding:Z,tabletPadding:ee,mobilePadding:oe,paddingUnit:te,color:ne,background:le,backgroundType:ie,gradient:ae,colorHover:de,backgroundHover:re,backgroundHoverType:se,gradientHover:ue,borderStyle:ve,tabletBorderStyle:ce,mobileBorderStyle:pe,borderHoverStyle:ge,tabletBorderHoverStyle:be,mobileBorderHoverStyle:me,typography:ye,borderRadius:ke,tabletBorderRadius:fe,mobileBorderRadius:he,borderRadiusUnit:Se,borderHoverRadius:Ce,tabletBorderHoverRadius:we,mobileBorderHoverRadius:_e,borderHoverRadiusUnit:xe,icon:Oe,iconSide:Be,iconHover:Te,width:Ee,widthUnit:Pe,widthType:Re,displayShadow:Ie,shadow:He,displayHoverShadow:ze,shadowHover:Ae,inheritStyles:Fe,iconSize:Me,iconPadding:Ue,tabletIconPadding:Le,mobileIconPadding:Ve,iconPaddingUnit:De,onlyIcon:Ne,iconColor:$e,iconColorHover:Ke,label:qe,marginUnit:Ge,margin:je,iconSizeUnit:We,tabletMargin:Qe,mobileMargin:Je,kadenceAOSOptions:Xe,kadenceAnimation:Ye,hideLink:Ze,inQueryBlock:eo}=U,oo=""!==j?'<a href="'+j+'">'+G+"</a>":G;(0,m.addFilter)("rank_math_content","kadence/advbtn",(()=>oo));const{updateBlockAttributes:to}=(0,u.useDispatch)(g.store),{btnsBlock:no,rootID:lo}=(0,u.useSelect)((e=>{const{getBlockRootClientId:o,getBlocksByClientId:t}=e(g.store),n=o($),l=t(n);return{btnsBlock:void 0!==l?l:"",rootID:void 0!==n?n:""}}),[$]),io=(e,o)=>{to(lo,{[e]:o})},{addUniqueID:ao}=(0,u.useDispatch)("kadenceblocks/data"),{isUniqueID:ro,isUniqueBlock:so,previewDevice:uo,parentData:vo}=(0,u.useSelect)((e=>{var o,t;return{isUniqueID:o=>e("kadenceblocks/data").isUniqueID(o),isUniqueBlock:(o,t)=>e("kadenceblocks/data").isUniqueBlock(o,t),previewDevice:e("kadenceblocks/data").getPreviewDeviceType(),parentData:{rootBlock:e("core/block-editor").getBlock(e("core/block-editor").getBlockHierarchyRootClientId($)),postId:null!==(o=e("core/editor"))&&void 0!==o&&o.getCurrentPostId()?null===(t=e("core/editor"))||void 0===t?void 0:t.getCurrentPostId():"",reusableParent:e("core/block-editor").getBlockAttributes(e("core/block-editor").getBlockParentsByBlockName($,"core/block").slice(-1)[0]),editedPostId:!!e("core/edit-site")&&e("core/edit-site").getEditedPostId()}}}),[$]),co=(0,i.mouseOverVisualizer)(),po=(0,i.mouseOverVisualizer)();(0,l.useEffect)((()=>{(0,i.setBlockDefaults)("kadence/singlebtn",U);const e=(0,i.getPostOrFseId)(o,vo);let t=(0,i.getUniqueId)(q,$,ro,so,e);t!==q?(U.uniqueID=t,L({uniqueID:t}),ao(t,$)):ao(q,$),L({inQueryBlock:(0,i.getInQueryBlock)(N,eo)})}),[]);const[go,bo]=(0,l.useState)("general"),[mo,yo]=(0,l.useState)(!1);(0,l.useEffect)((()=>{D||yo(!1)}),[D]);const ko=e=>{const o=ye.map(((o,t)=>(0===t&&(o={...o,...e}),o)));L({typography:o})},fo=e=>{const o=He.map(((o,t)=>(0===t&&(o={...o,...e}),o)));L({shadow:o})},ho=e=>{const o=Ae.map(((o,t)=>(0===t&&(o={...o,...e}),o)));L({shadowHover:o})},So=[{value:"small",label:(0,s.__)("SM","kadence-blocks")},{value:"standard",label:(0,s.__)("MD","kadence-blocks")},{value:"large",label:(0,s.__)("LG","kadence-blocks")},{value:"xlarge",label:(0,s.__)("XL","kadence-blocks")}],Co=[{value:"auto",label:(0,s.__)("Auto","kadence-blocks")},{value:"fixed",label:(0,s.__)("Fixed","kadence-blocks")},{value:"full",label:(0,s.__)("Full","kadence-blocks")}],wo=[{value:"fill",label:(0,s.__)("Fill","kadence-blocks")},{value:"outline",label:(0,s.__)("Outline","kadence-blocks")},{value:"inherit",label:(0,s.__)("Theme","kadence-blocks")}],_o=(0,i.getPreviewSize)(uo,void 0!==(null==je?void 0:je[0])?je[0]:"",void 0!==(null==Qe?void 0:Qe[0])?Qe[0]:"",void 0!==(null==Je?void 0:Je[0])?Je[0]:""),xo=(0,i.getPreviewSize)(uo,void 0!==(null==je?void 0:je[1])?je[1]:"",void 0!==(null==Qe?void 0:Qe[1])?Qe[1]:"",void 0!==(null==Je?void 0:Je[1])?Je[1]:""),Oo=(0,i.getPreviewSize)(uo,void 0!==(null==je?void 0:je[2])?je[2]:"",void 0!==(null==Qe?void 0:Qe[2])?Qe[2]:"",void 0!==(null==Je?void 0:Je[2])?Je[2]:""),Bo=(0,i.getPreviewSize)(uo,void 0!==(null==je?void 0:je[3])?je[3]:"",void 0!==(null==Qe?void 0:Qe[3])?Qe[3]:"",void 0!==(null==Je?void 0:Je[3])?Je[3]:""),To=Ge||"px",Eo=(0,i.getPreviewSize)(uo,void 0!==(null==Z?void 0:Z[0])?Z[0]:"",void 0!==(null==ee?void 0:ee[0])?ee[0]:"",void 0!==(null==oe?void 0:oe[0])?oe[0]:""),Po=(0,i.getPreviewSize)(uo,void 0!==(null==Z?void 0:Z[1])?Z[1]:"",void 0!==(null==ee?void 0:ee[1])?ee[1]:"",void 0!==(null==oe?void 0:oe[1])?oe[1]:""),Ro=(0,i.getPreviewSize)(uo,void 0!==(null==Z?void 0:Z[2])?Z[2]:"",void 0!==(null==ee?void 0:ee[2])?ee[2]:"",void 0!==(null==oe?void 0:oe[2])?oe[2]:""),Io=(0,i.getPreviewSize)(uo,void 0!==(null==Z?void 0:Z[3])?Z[3]:"",void 0!==(null==ee?void 0:ee[3])?ee[3]:"",void 0!==(null==oe?void 0:oe[3])?oe[3]:""),Ho=(0,i.getPreviewSize)(uo,void 0!==ke?ke[0]:"",void 0!==fe?fe[0]:"",void 0!==he?he[0]:""),zo=(0,i.getPreviewSize)(uo,void 0!==ke?ke[1]:"",void 0!==fe?fe[1]:"",void 0!==he?he[1]:""),Ao=(0,i.getPreviewSize)(uo,void 0!==ke?ke[2]:"",void 0!==fe?fe[2]:"",void 0!==he?he[2]:""),Fo=(0,i.getPreviewSize)(uo,void 0!==ke?ke[3]:"",void 0!==fe?fe[3]:"",void 0!==he?he[3]:""),Mo=(0,i.getPreviewSize)(uo,void 0!==(null==Me?void 0:Me[0])?Me[0]:"",void 0!==(null==Me?void 0:Me[1])?Me[1]:"",void 0!==(null==Me?void 0:Me[2])?Me[2]:""),Uo=(0,i.getPreviewSize)(uo,void 0!==(null==Ue?void 0:Ue[0])?Ue[0]:"",void 0!==(null==Le?void 0:Le[0])?Le[0]:"",void 0!==(null==Ve?void 0:Ve[0])?Ve[0]:""),Lo=(0,i.getPreviewSize)(uo,void 0!==(null==Ue?void 0:Ue[1])?Ue[1]:"",void 0!==(null==Le?void 0:Le[1])?Le[1]:"",void 0!==(null==Ve?void 0:Ve[1])?Ve[1]:""),Vo=(0,i.getPreviewSize)(uo,void 0!==(null==Ue?void 0:Ue[2])?Ue[2]:"",void 0!==(null==Le?void 0:Le[2])?Le[2]:"",void 0!==(null==Ve?void 0:Ve[2])?Ve[2]:""),Do=(0,i.getPreviewSize)(uo,void 0!==(null==Ue?void 0:Ue[3])?Ue[3]:"",void 0!==(null==Le?void 0:Le[3])?Le[3]:"",void 0!==(null==Ve?void 0:Ve[3])?Ve[3]:""),No=(0,i.getPreviewSize)(uo,void 0!==(null==Ee?void 0:Ee[0])?Ee[0]:"",void 0!==(null==Ee?void 0:Ee[1])?Ee[1]:void 0,void 0!==(null==Ee?void 0:Ee[2])?Ee[2]:void 0),$o=(0,i.getBorderStyle)(uo,"top",ve,ce,pe),Ko=(0,i.getBorderStyle)(uo,"right",ve,ce,pe),qo=(0,i.getBorderStyle)(uo,"bottom",ve,ce,pe),Go=(0,i.getBorderStyle)(uo,"left",ve,ce,pe),jo=(0,i.getBorderColor)(uo,"top",ve,ce,pe),Wo=(0,i.getBorderColor)(uo,"right",ve,ce,pe),Qo=(0,i.getBorderColor)(uo,"bottom",ve,ce,pe),Jo=(0,i.getBorderColor)(uo,"left",ve,ce,pe),Xo=[ve,ce,pe],Yo=(0,i.getBorderStyle)(uo,"top",ge,be,me,Xo),Zo=(0,i.getBorderStyle)(uo,"right",ge,be,me,Xo),et=(0,i.getBorderStyle)(uo,"bottom",ge,be,me,Xo),ot=(0,i.getBorderStyle)(uo,"left",ge,be,me,Xo),tt=(0,i.getBorderColor)(uo,"top",ge,be,me,Xo),nt=(0,i.getBorderColor)(uo,"right",ge,be,me,Xo),lt=(0,i.getBorderColor)(uo,"bottom",ge,be,me,Xo),it=(0,i.getBorderColor)(uo,"left",ge,be,me,Xo),at=(0,i.getPreviewSize)(uo,void 0!==Ce?Ce[0]:"",void 0!==we?we[0]:"",void 0!==_e?_e[0]:""),dt=(0,i.getPreviewSize)(uo,void 0!==Ce?Ce[1]:"",void 0!==we?we[1]:"",void 0!==_e?_e[1]:""),rt=(0,i.getPreviewSize)(uo,void 0!==Ce?Ce[2]:"",void 0!==we?we[2]:"",void 0!==_e?_e[2]:""),st=(0,i.getPreviewSize)(uo,void 0!==Ce?Ce[3]:"",void 0!==we?we[3]:"",void 0!==_e?_e[3]:""),ut=(0,i.getPreviewSize)(uo,void 0!==(null==no||null===(t=no[0])||void 0===t||null===(n=t.attributes)||void 0===n?void 0:n.hAlign)?null==no||null===(d=no[0])||void 0===d||null===(v=d.attributes)||void 0===v?void 0:v.hAlign:"",void 0!==(null==no||null===(y=no[0])||void 0===y||null===(k=y.attributes)||void 0===k?void 0:k.thAlign)?null==no||null===(f=no[0])||void 0===f||null===(h=f.attributes)||void 0===h?void 0:h.thAlign:"",void 0!==(null==no||null===(S=no[0])||void 0===S||null===(C=S.attributes)||void 0===C?void 0:C.mhAlign)?null==no||null===(w=no[0])||void 0===w||null===(_=w.attributes)||void 0===_?void 0:_.mhAlign:""),vt=(0,i.getPreviewSize)(uo,void 0!==(null==no||null===(x=no[0])||void 0===x||null===(O=x.attributes)||void 0===O?void 0:O.vAlign)?null==no||null===(B=no[0])||void 0===B||null===(T=B.attributes)||void 0===T?void 0:T.vAlign:"",void 0!==(null==no||null===(E=no[0])||void 0===E||null===(P=E.attributes)||void 0===P?void 0:P.tvAlign)?null==no||null===(R=no[0])||void 0===R||null===(I=R.attributes)||void 0===I?void 0:I.tvAlign:"",void 0!==(null==no||null===(H=no[0])||void 0===H||null===(z=H.attributes)||void 0===z?void 0:z.mvAlign)?null==no||null===(A=no[0])||void 0===A||null===(F=A.attributes)||void 0===F?void 0:F.mvAlign:""),ct=(0,i.getPreviewSize)(uo,void 0!==(null==Ne?void 0:Ne[0])?Ne[0]:"",void 0!==(null==Ne?void 0:Ne[1])?Ne[1]:void 0,void 0!==(null==Ne?void 0:Ne[2])?Ne[2]:void 0);let pt;pt=void 0!==ie&&"gradient"===ie?ae:"transparent"===le||void 0===le?void 0:(0,i.KadenceColorOutput)(le);const gt=["hideLink","link","target","download","text","sponsor"],bt=r()({"kt-button":!0,[`kt-button-${q}`]:!0,[`kb-btn-global-${Fe}`]:Fe,"wp-block-button__link":Fe&&"inherit"===Fe,"kb-btn-has-icon":Oe,["kt-btn-svg-show-"+(Te?"hover":"always")]:Oe,"kb-btn-only-icon":ct,[`kt-btn-size-${Y||"standard"}`]:!0}),mt=r()({className:V,[`kb-single-btn-${q}`]:!0,[`kt-btn-width-type-${Re||"auto"}`]:!0}),yt=(0,g.useBlockProps)({className:mt,style:{width:void 0!==Re&&"fixed"===Re&&"%"===(void 0!==Pe?Pe:"px")&&""!==No?No+(void 0!==Pe?Pe:"px"):void 0}});let kt="0",ft="",ht="";const St="gradient"===se?ue:(0,i.KadenceColorOutput)(re);void 0!==ze&&ze&&void 0!==(null==Ae?void 0:Ae[0])&&void 0!==(null==Ae?void 0:Ae[0].inset)&&!1===(null==Ae?void 0:Ae[0].inset)&&(ft=(void 0!==(null==Ae?void 0:Ae[0].inset)&&Ae[0].inset?"inset ":"")+(void 0!==(null==Ae?void 0:Ae[0].hOffset)?Ae[0].hOffset:0)+"px "+(void 0!==(null==Ae?void 0:Ae[0].vOffset)?Ae[0].vOffset:0)+"px "+(void 0!==(null==Ae?void 0:Ae[0].blur)?Ae[0].blur:14)+"px "+(void 0!==(null==Ae?void 0:Ae[0].spread)?Ae[0].spread:0)+"px "+(0,i.KadenceColorOutput)(void 0!==(null==Ae?void 0:Ae[0].color)?Ae[0].color:"#000000",void 0!==(null==Ae?void 0:Ae[0].opacity)?Ae[0].opacity:1),ht="none",kt="0"),void 0!==ze&&ze&&void 0!==(null==Ae?void 0:Ae[0])&&void 0!==(null==Ae?void 0:Ae[0].inset)&&!0===(null==Ae?void 0:Ae[0].inset)&&(ht=(void 0!==(null==Ae?void 0:Ae[0].inset)&&Ae[0].inset?"inset ":"")+(void 0!==(null==Ae?void 0:Ae[0].hOffset)?Ae[0].hOffset:0)+"px "+(void 0!==(null==Ae?void 0:Ae[0].vOffset)?Ae[0].vOffset:0)+"px "+(void 0!==(null==Ae?void 0:Ae[0].blur)?Ae[0].blur:14)+"px "+(void 0!==(null==Ae?void 0:Ae[0].spread)?Ae[0].spread:0)+"px "+(0,i.KadenceColorOutput)(void 0!==(null==Ae?void 0:Ae[0].color)?Ae[0].color:"#000000",void 0!==(null==Ae?void 0:Ae[0].opacity)?Ae[0].opacity:1),kt=void 0!==ke?ke:"3",ft="none");const Ct=(0,i.typographyStyle)(ye,`.editor-styles-wrapper .wp-block-kadence-advancedbtn .kb-single-btn-${q} .kt-button-${q}`,uo),wt=(0,l.createElement)("style",null,""!==Ct?Ct:"",`.kb-single-btn-${q} .kt-button-${q}.kb-btn-global-outline {`,!$o&&jo?"border-top-color:"+jo+";":"",!Ko&&Wo?"border-right-color:"+Wo+";":"",!Go&&Jo?"border-left-color:"+Jo+";":"",!qo&&Qo?"border-bottom-color:"+Qo+";":"","}",`.kb-single-btn-${q} .kt-button-${q}.kb-btn-global-outline:hover {`,!Yo&&tt?"border-top-color:"+tt+";":"",!Zo&&nt?"border-right-color:"+nt+";":"",!ot&&it?"border-left-color:"+it+";":"",!et&&lt?"border-bottom-color:"+lt+";":"","}",`.kb-single-btn-${q} .kt-button-${q}:hover {`,de?"color:"+(0,i.KadenceColorOutput)(de)+"!important;":"",ft?"box-shadow:"+ft+"!important;":"",Yo?"border-top:"+Yo+"!important;":"",Zo?"border-right:"+Zo+"!important;":"",ot?"border-left:"+ot+"!important;":"",et?"border-bottom:"+et+"!important;":"",""!==at?"border-top-left-radius:"+at+(xe||"px")+"!important;":"",""!==dt?"border-top-right-radius:"+dt+(xe||"px")+"!important;":"",""!==st?"border-bottom-left-radius:"+st+(xe||"px")+"!important;":"",""!==rt?"border-bottom-right-radius:"+rt+(xe||"px")+"!important;":"","}",Ke?`.kb-single-btn-${q} .kt-button-${q}:hover .kt-btn-svg-icon { color:${(0,i.KadenceColorOutput)(Ke)} !important;}`:"",`.kb-single-btn-${q} .kt-button-${q}::before {`,St?"background:"+St+";":"",ht?"box-shadow:"+ht+";":"",kt?"border-radius:"+kt+"px;":"","}");return(0,l.createElement)("div",yt,wt,(0,l.createElement)(g.BlockControls,null,(0,l.createElement)(b.ToolbarGroup,null,(0,l.createElement)(g.JustifyContentControl,{value:ut,onChange:e=>{"Mobile"===uo?io("mhAlign",e||""):"Tablet"===uo?io("thAlign",e||""):io("hAlign",e||"center")}}),(0,l.createElement)(g.BlockVerticalAlignmentControl,{value:vt,onChange:e=>{"Mobile"===uo?io("mvAlign",e||""):"Tablet"===uo?io("tvAlign",e||""):io("vAlign",e||"center")}})),!Ze&&(0,l.createElement)(b.ToolbarGroup,null,(0,l.createElement)(b.ToolbarButton,{name:"link",icon:c,title:(0,s.__)("Link","kadence-blocks"),shortcut:p.displayShortcut.primary("k"),onClick:function(e){e.preventDefault(),yo(!0)}})),(0,l.createElement)(a.CopyPasteAttributes,{attributes:U,excludedAttrs:gt,defaultAttributes:e.attributes,blockSlug:e.name,onPaste:e=>L(e)})),!Ze&&D&&mo&&(0,l.createElement)(a.URLInputInline,{url:j,onChangeUrl:e=>{L({link:e})},additionalControls:!0,changeTargetType:!0,opensInNewTab:void 0!==W?W:"",onChangeTarget:e=>{L({target:e})},linkNoFollow:void 0!==X&&X,onChangeFollow:e=>{L({noFollow:e})},linkSponsored:void 0!==Q&&Q,onChangeSponsored:e=>{L({sponsored:e})},linkDownload:void 0!==J&&J,onChangeDownload:e=>{L({download:e})},dynamicAttribute:"link",allowClear:!0,isSelected:D,attributes:U,setAttributes:L,name:K,clientId:$,context:N}),(0,i.showSettings)("allSettings","kadence/advancedbtn")&&(0,l.createElement)(l.Fragment,null,(0,l.createElement)(g.InspectorControls,null,(0,l.createElement)(a.InspectorControlTabs,{panelName:"singlebtn",setActiveTab:e=>bo(e),activeTab:go}),"general"===go&&(0,l.createElement)(l.Fragment,null,(0,l.createElement)(a.KadencePanelBody,{title:(0,s.__)("Button Settings","kadence-blocks"),initialOpen:!0,panelName:"kb-adv-single-btn"},!Ze&&(0,l.createElement)(a.URLInputControl,{label:(0,s.__)("Button Link","kadence-blocks"),url:j,onChangeUrl:e=>{L({link:e})},additionalControls:!0,changeTargetType:!0,opensInNewTab:void 0!==W?W:"",onChangeTarget:e=>{L({target:e})},linkNoFollow:void 0!==X&&X,onChangeFollow:e=>{L({noFollow:e})},linkSponsored:void 0!==Q&&Q,onChangeSponsored:e=>{L({sponsored:e})},linkDownload:void 0!==J&&J,onChangeDownload:e=>{L({download:e})},dynamicAttribute:"link",allowClear:!0,isSelected:D,attributes:U,setAttributes:L,name:K,clientId:$,context:N}),(0,l.createElement)(a.KadenceRadioButtons,{value:Fe,options:wo,hideLabel:!1,label:(0,s.__)("Button Inherit Styles","kadence-blocks"),onChange:e=>{L({inheritStyles:e})}}),(0,i.showSettings)("sizeSettings","kadence/advancedbtn")&&(0,l.createElement)(l.Fragment,null,(0,l.createElement)(a.KadenceRadioButtons,{value:Y,options:So,hideLabel:!1,label:(0,s.__)("Button Size","kadence-blocks"),onChange:e=>{L({sizePreset:e})}}),(0,l.createElement)(a.KadenceRadioButtons,{value:Re,options:Co,hideLabel:!1,label:(0,s.__)("Button Width","kadence-blocks"),onChange:e=>{L({widthType:e})}}),"fixed"===Re&&(0,l.createElement)("div",{className:"kt-inner-sub-section"},(0,l.createElement)(a.ResponsiveRangeControls,{label:(0,s.__)("Fixed Width","kadence-blocks"),value:void 0!==(null==Ee?void 0:Ee[0])?Ee[0]:void 0,onChange:e=>{L({width:[e,void 0!==(null==Ee?void 0:Ee[1])?Ee[1]:"",void 0!==(null==Ee?void 0:Ee[2])?Ee[2]:""]})},tabletValue:void 0!==(null==Ee?void 0:Ee[1])?Ee[1]:void 0,onChangeTablet:e=>{L({width:[void 0!==(null==Ee?void 0:Ee[0])?Ee[0]:"",e,void 0!==(null==Ee?void 0:Ee[2])?Ee[2]:""]})},mobileValue:void 0!==(null==Ee?void 0:Ee[2])?Ee[2]:void 0,onChangeMobile:e=>{L({width:[void 0!==(null==Ee?void 0:Ee[0])?Ee[0]:"",void 0!==(null==Ee?void 0:Ee[1])?Ee[1]:"",e]})},min:0,max:"px"!==(Pe||"px")?100:600,step:1,unit:Pe||"px",onUnit:e=>{L({widthUnit:e})},units:["px","%"]}))))),"style"===go&&(0,l.createElement)(l.Fragment,null,(0,i.showSettings)("colorSettings","kadence/advancedbtn")&&(0,l.createElement)(a.KadencePanelBody,{title:(0,s.__)("Button Styles","kadence-blocks"),initialOpen:!0,panelName:"kb-adv-single-btn-styles"},(0,l.createElement)(a.HoverToggleControl,{hover:(0,l.createElement)(l.Fragment,null,(0,l.createElement)(a.PopColorControl,{label:(0,s.__)("Color Hover","kadence-blocks"),value:de||"",default:"",onChange:e=>L({colorHover:e})}),(0,l.createElement)(a.BackgroundTypeControl,{label:(0,s.__)("Hover Type","kadence-blocks"),type:se||"normal",onChange:e=>L({backgroundHoverType:e}),allowedTypes:["normal","gradient"]}),"gradient"===se&&(0,l.createElement)(a.GradientControl,{value:ue,onChange:e=>L({gradientHover:e}),gradients:[]}),"normal"===se&&(0,l.createElement)(a.PopColorControl,{label:(0,s.__)("Background Color","kadence-blocks"),value:re||"",default:"",onChange:e=>L({backgroundHover:e})}),(0,l.createElement)(a.ResponsiveBorderControl,{label:(0,s.__)("Border","kadence-blocks"),value:ge,tabletValue:be,mobileValue:me,onChange:e=>L({borderHoverStyle:e}),onChangeTablet:e=>L({tabletBorderHoverStyle:e}),onChangeMobile:e=>L({mobileBorderHoverStyle:e})}),(0,l.createElement)(a.ResponsiveMeasurementControls,{label:(0,s.__)("Border Radius","kadence-blocks"),value:Ce,tabletValue:we,mobileValue:_e,onChange:e=>L({borderHoverRadius:e}),onChangeTablet:e=>L({tabletBorderHoverRadius:e}),onChangeMobile:e=>L({mobileBorderHoverRadius:e}),unit:xe,units:["px","em","rem","%"],onUnit:e=>L({borderHoverRadiusUnit:e}),max:"em"===xe||"rem"===xe?24:500,step:"em"===xe||"rem"===xe?.1:1,min:0,isBorderRadius:!0,allowEmpty:!0}),(0,l.createElement)(a.BoxShadowControl,{label:(0,s.__)("Box Shadow","kadence-blocks"),enable:void 0!==ze&&ze,color:void 0!==Ae&&void 0!==Ae[0]&&void 0!==Ae[0].color?Ae[0].color:"#000000",colorDefault:"#000000",onArrayChange:(e,o)=>{ho({color:e,opacity:o})},opacity:void 0!==Ae&&void 0!==Ae[0]&&void 0!==Ae[0].opacity?Ae[0].opacity:.2,hOffset:void 0!==Ae&&void 0!==Ae[0]&&void 0!==Ae[0].hOffset?Ae[0].hOffset:0,vOffset:void 0!==Ae&&void 0!==Ae[0]&&void 0!==Ae[0].vOffset?Ae[0].vOffset:0,blur:void 0!==Ae&&void 0!==Ae[0]&&void 0!==Ae[0].blur?Ae[0].blur:14,spread:void 0!==Ae&&void 0!==Ae[0]&&void 0!==Ae[0].spread?Ae[0].spread:0,inset:void 0!==Ae&&void 0!==Ae[0]&&void 0!==Ae[0].inset&&Ae[0].inset,onEnableChange:e=>{L({displayHoverShadow:e})},onColorChange:e=>{ho({color:e})},onOpacityChange:e=>{ho({opacity:e})},onHOffsetChange:e=>{ho({hOffset:e})},onVOffsetChange:e=>{ho({vOffset:e})},onBlurChange:e=>{ho({blur:e})},onSpreadChange:e=>{ho({spread:e})},onInsetChange:e=>{ho({inset:e})}})),normal:(0,l.createElement)(l.Fragment,null,(0,l.createElement)(a.PopColorControl,{label:(0,s.__)("Color","kadence-blocks"),value:ne||"",default:"",onChange:e=>L({color:e})}),(0,l.createElement)(a.BackgroundTypeControl,{label:(0,s.__)("Type","kadence-blocks"),type:ie||"normal",onChange:e=>L({backgroundType:e}),allowedTypes:["normal","gradient"]}),"gradient"===ie&&(0,l.createElement)(a.GradientControl,{value:ae,onChange:e=>L({gradient:e}),gradients:[]}),"normal"===ie&&(0,l.createElement)(a.PopColorControl,{label:(0,s.__)("Background Color","kadence-blocks"),value:le||"",default:"",onChange:e=>L({background:e})}),(0,l.createElement)(a.ResponsiveBorderControl,{label:(0,s.__)("Border","kadence-blocks"),value:ve,tabletValue:ce,mobileValue:pe,onChange:e=>L({borderStyle:e}),onChangeTablet:e=>L({tabletBorderStyle:e}),onChangeMobile:e=>L({mobileBorderStyle:e})}),(0,l.createElement)(a.ResponsiveMeasurementControls,{label:(0,s.__)("Border Radius","kadence-blocks"),value:ke,tabletValue:fe,mobileValue:he,onChange:e=>L({borderRadius:e}),onChangeTablet:e=>L({tabletBorderRadius:e}),onChangeMobile:e=>L({mobileBorderRadius:e}),unit:Se,units:["px","em","rem","%"],onUnit:e=>L({borderRadiusUnit:e}),max:"em"===Se||"rem"===Se?24:500,step:"em"===Se||"rem"===Se?.1:1,min:0,isBorderRadius:!0,allowEmpty:!0}),(0,l.createElement)(a.BoxShadowControl,{label:(0,s.__)("Box Shadow","kadence-blocks"),enable:void 0!==Ie&&Ie,color:void 0!==He&&void 0!==He[0]&&void 0!==He[0].color?He[0].color:"#000000",colorDefault:"#000000",onArrayChange:(e,o)=>{fo({color:e,opacity:o})},opacity:void 0!==He&&void 0!==He[0]&&void 0!==He[0].opacity?He[0].opacity:.2,hOffset:void 0!==He&&void 0!==He[0]&&void 0!==He[0].hOffset?He[0].hOffset:0,vOffset:void 0!==He&&void 0!==He[0]&&void 0!==He[0].vOffset?He[0].vOffset:0,blur:void 0!==He&&void 0!==He[0]&&void 0!==He[0].blur?He[0].blur:14,spread:void 0!==He&&void 0!==He[0]&&void 0!==He[0].spread?He[0].spread:0,inset:void 0!==He&&void 0!==He[0]&&void 0!==He[0].inset&&He[0].inset,onEnableChange:e=>{L({displayShadow:e})},onColorChange:e=>{fo({color:e})},onOpacityChange:e=>{fo({opacity:e})},onHOffsetChange:e=>{fo({hOffset:e})},onVOffsetChange:e=>{fo({vOffset:e})},onBlurChange:e=>{fo({blur:e})},onSpreadChange:e=>{fo({spread:e})},onInsetChange:e=>{fo({inset:e})}}))})),(0,i.showSettings)("iconSettings","kadence/advancedbtn")&&(0,l.createElement)(a.KadencePanelBody,{title:(0,s.__)("Icon Settings","kadence-blocks"),initialOpen:!1,panelName:"kb-adv-single-btn-icons"},(0,l.createElement)("div",{className:"kt-select-icon-container"},(0,l.createElement)(a.KadenceIconPicker,{value:Oe,onChange:e=>{L({icon:e})},allowClear:!0})),(0,l.createElement)(a.SmallResponsiveControl,{label:(0,s.__)("Icon and Text Display","kadence-blocks"),desktopChildren:(0,l.createElement)(b.SelectControl,{value:void 0!==(null==Ne?void 0:Ne[0])&&Ne[0]?"true":"false",options:[{value:"false",label:(0,s.__)("Show Icon and Text","kadence-blocks")},{value:"true",label:(0,s.__)("Show Only Icon","kadence-blocks")}],onChange:e=>{L({onlyIcon:["true"===e,void 0!==(null==Ne?void 0:Ne[1])?Ne[1]:"",void 0!==(null==Ne?void 0:Ne[2])?Ne[2]:""]})}}),tabletChildren:(0,l.createElement)(b.SelectControl,{value:void 0!==(null==Ne?void 0:Ne[1])&&Ne[1]?"true":void 0!==(null==Ne?void 0:Ne[1])&&!1===Ne[1]?"false":"",options:[{value:"",label:(0,s.__)("Inherit","kadence-blocks")},{value:"false",label:(0,s.__)("Show Icon and Text","kadence-blocks")},{value:"true",label:(0,s.__)("Show Only Icon","kadence-blocks")}],onChange:e=>{let o=e;"true"===e?o=!0:"false"===e&&(o=!1),L({onlyIcon:[void 0!==(null==Ne?void 0:Ne[0])?Ne[0]:"",o,void 0!==(null==Ne?void 0:Ne[2])?Ne[2]:""]})}}),mobileChildren:(0,l.createElement)(b.SelectControl,{value:void 0!==(null==Ne?void 0:Ne[2])&&Ne[2]?"true":void 0!==(null==Ne?void 0:Ne[2])&&!1===Ne[2]?"false":"",options:[{value:"",label:(0,s.__)("Inherit","kadence-blocks")},{value:"false",label:(0,s.__)("Show Icon and Text","kadence-blocks")},{value:"true",label:(0,s.__)("Show Only Icon","kadence-blocks")}],onChange:e=>{let o=e;"true"===e?o=!0:"false"===e&&(o=!1),L({onlyIcon:[void 0!==(null==Ne?void 0:Ne[0])?Ne[0]:"",void 0!==(null==Ne?void 0:Ne[1])?Ne[1]:"",o]})}})}),(0,l.createElement)(b.SelectControl,{label:(0,s.__)("Icon Location","kadence-blocks"),value:Be,options:[{value:"right",label:(0,s.__)("Right")},{value:"left",label:(0,s.__)("Left")}],onChange:e=>{L({iconSide:e})}}),(0,l.createElement)(a.ResponsiveRangeControls,{label:(0,s.__)("Icon Size","kadence-blocks"),value:void 0!==(null==Me?void 0:Me[0])?Me[0]:"",onChange:e=>{L({iconSize:[e,void 0!==Me[1]?Me[1]:"",void 0!==(null==Me?void 0:Me[2])&&Me[2]?Me[2]:""]})},tabletValue:void 0!==(null==Me?void 0:Me[1])?Me[1]:"",onChangeTablet:e=>{L({iconSize:[void 0!==(null==Me?void 0:Me[0])?Me[0]:"",e,void 0!==(null==Me?void 0:Me[2])?Me[2]:""]})},mobileValue:void 0!==(null==Me?void 0:Me[2])?Me[2]:"",onChangeMobile:e=>{L({iconSize:[void 0!==(null==Me?void 0:Me[0])?Me[0]:"",void 0!==(null==Me?void 0:Me[1])?Me[1]:"",e]})},min:0,max:"px"!==(We||"px")?12:200,step:"px"!==(We||"px")?.1:1,unit:We||"px",onUnit:e=>{L({iconSizeUnit:e})},units:["px","em","rem"]}),(0,l.createElement)(a.PopColorControl,{label:(0,s.__)("Icon Color","kadence-blocks"),value:$e||"",default:"",onChange:e=>{L({iconColor:e})},swatchLabel2:(0,s.__)("Hover Color","kadence-blocks"),value2:Ke||"",default2:"",onChange2:e=>{L({iconColorHover:e})}}),(0,l.createElement)(a.ResponsiveMeasureRangeControl,{label:(0,s.__)("Icon Padding","kadence-blocks"),value:void 0!==Ue?Ue:["","","",""],tabletValue:void 0!==Le?Le:["","","",""],mobileValue:void 0!==Ve?Ve:["","","",""],onChange:e=>L({iconPadding:e}),onChangeTablet:e=>L({tabletIconPadding:e}),onChangeMobile:e=>L({mobileIconPadding:e}),min:"em"===De||"rem"===De?-2:-200,max:"em"===De||"rem"===De?12:200,step:"em"===De||"rem"===De?.1:1,unit:De,units:["px","em","rem"],onUnit:e=>L({iconPaddingUnit:e})})),(0,i.showSettings)("fontSettings","kadence/advancedbtn")&&(0,l.createElement)(a.KadencePanelBody,{title:(0,s.__)("Typography Settings","kadence-blocks"),initialOpen:!1,panelName:"kb-adv-btn-font-family"},(0,l.createElement)(a.TypographyControls,{fontGroup:"button",fontSize:ye[0].size,onFontSize:e=>ko({size:e}),fontSizeType:ye[0].sizeType,onFontSizeType:e=>ko({sizeType:e}),lineHeight:ye[0].lineHeight,onLineHeight:e=>ko({lineHeight:e}),lineHeightType:ye[0].lineType,onLineHeightType:e=>ko({lineType:e}),reLetterSpacing:ye[0].letterSpacing,onLetterSpacing:e=>ko({letterSpacing:e}),letterSpacingType:ye[0].letterType,onLetterSpacingType:e=>ko({letterType:e}),textTransform:ye[0].textTransform,onTextTransform:e=>ko({textTransform:e}),fontFamily:ye[0].family,onFontFamily:e=>ko({family:e}),onFontChange:e=>{ko({family:e.value,google:e.google})},onFontArrayChange:e=>ko(e),googleFont:ye[0].google,onGoogleFont:e=>ko({google:e}),loadGoogleFont:ye[0].loadGoogle,onLoadGoogleFont:e=>ko({loadGoogle:e}),fontVariant:ye[0].variant,onFontVariant:e=>ko({variant:e}),fontWeight:ye[0].weight,onFontWeight:e=>ko({weight:e}),fontStyle:ye[0].style,onFontStyle:e=>ko({style:e}),fontSubset:ye[0].subset,onFontSubset:e=>ko({subset:e})}))),"advanced"===go&&(0,l.createElement)(l.Fragment,null,(0,i.showSettings)("marginSettings","kadence/advancedbtn")&&(0,l.createElement)(l.Fragment,null,(0,l.createElement)(a.KadencePanelBody,{panelName:"kb-single-button-margin-settings"},(0,l.createElement)(a.ResponsiveMeasureRangeControl,{label:(0,s.__)("Padding","kadence-blocks"),value:Z,onChange:e=>L({padding:e}),tabletValue:ee,onChangeTablet:e=>L({tabletPadding:e}),mobileValue:oe,onChangeMobile:e=>L({mobilePadding:e}),min:"em"===te||"rem"===te?-25:-400,max:"em"===te||"rem"===te?25:400,step:"em"===te||"rem"===te?.1:1,unit:te,units:["px","em","rem"],onUnit:e=>L({paddingUnit:e}),onMouseOver:po.onMouseOver,onMouseOut:po.onMouseOut}),(0,l.createElement)(a.ResponsiveMeasureRangeControl,{label:(0,s.__)("Margin","kadence-blocks"),value:je,onChange:e=>L({margin:e}),tabletValue:Qe,onChangeTablet:e=>L({tabletMargin:e}),mobileValue:Je,onChangeMobile:e=>L({mobileMargin:e}),min:"em"===Ge||"rem"===Ge?-25:-400,max:"em"===Ge||"rem"===Ge?25:400,step:"em"===Ge||"rem"===Ge?.1:1,unit:Ge,units:["px","em","rem"],onUnit:e=>L({marginUnit:e}),onMouseOver:co.onMouseOver,onMouseOut:co.onMouseOut}),(0,l.createElement)(b.TextControl,{label:(0,s.__)("Add Aria Label","kadence-blocks"),value:qe||"",onChange:e=>L({label:e}),className:"kb-textbox-style"})),(0,l.createElement)("div",{className:"kt-sidebar-settings-spacer"})),(0,l.createElement)(a.KadenceBlockDefaults,{attributes:U,defaultAttributes:e.attributes,blockSlug:e.name,excludedAttrs:gt})))),(0,l.createElement)("div",{id:`animate-id${q}`,className:"btn-inner-wrap aos-animate kt-animation-wrap","data-aos":Ye||void 0,"data-aos-duration":Xe&&Xe[0]&&Xe[0].duration?Xe[0].duration:void 0,"data-aos-easing":Xe&&Xe[0]&&Xe[0].easing?Xe[0].easing:void 0},(0,l.createElement)("span",{className:bt,style:{paddingTop:""!==Eo?(0,i.getSpacingOptionOutput)(Eo,te):void 0,paddingRight:""!==Po?(0,i.getSpacingOptionOutput)(Po,te):void 0,paddingBottom:""!==Ro?(0,i.getSpacingOptionOutput)(Ro,te):void 0,paddingLeft:""!==Io?(0,i.getSpacingOptionOutput)(Io,te):void 0,marginTop:""!==_o?(0,i.getSpacingOptionOutput)(_o,To):void 0,marginRight:""!==xo?(0,i.getSpacingOptionOutput)(xo,To):void 0,marginBottom:""!==Oo?(0,i.getSpacingOptionOutput)(Oo,To):void 0,marginLeft:""!==Bo?(0,i.getSpacingOptionOutput)(Bo,To):void 0,borderTop:$o||void 0,borderRight:Ko||void 0,borderBottom:qo||void 0,borderLeft:Go||void 0,borderTopLeftRadius:""!==Ho?Ho+(Se||"px"):void 0,borderTopRightRadius:""!==zo?zo+(Se||"px"):void 0,borderBottomRightRadius:""!==Ao?Ao+(Se||"px"):void 0,borderBottomLeftRadius:""!==Fo?Fo+(Se||"px"):void 0,boxShadow:void 0!==Ie&&Ie&&void 0!==He&&void 0!==He[0]&&void 0!==He[0].color?(void 0!==He[0].inset&&He[0].inset?"inset ":"")+(void 0!==He[0].hOffset?He[0].hOffset:0)+"px "+(void 0!==He[0].vOffset?He[0].vOffset:0)+"px "+(void 0!==He[0].blur?He[0].blur:14)+"px "+(void 0!==He[0].spread?He[0].spread:0)+"px "+(0,i.KadenceColorOutput)(void 0!==He[0].color?He[0].color:"#000000",void 0!==He[0].opacity?He[0].opacity:1):void 0,background:void 0!==pt?pt:void 0,color:void 0!==ne?(0,i.KadenceColorOutput)(ne):void 0,width:void 0!==Re&&"fixed"===Re&&"px"===(void 0!==Pe?Pe:"px")&&""!==No?No+(void 0!==Pe?Pe:"px"):void 0}},Oe&&"left"===Be&&(0,l.createElement)(a.IconRender,{className:`kt-btn-svg-icon kt-btn-svg-icon-${Oe} kt-btn-side-${Be}`,name:Oe,size:"1em",style:{fontSize:Mo?(0,i.getFontSizeOptionOutput)(Mo,void 0!==We?We:"px"):void 0,color:""!==$e?(0,i.KadenceColorOutput)($e):void 0,paddingTop:Uo?(0,i.getSpacingOptionOutput)(Uo,De):void 0,paddingRight:Lo?(0,i.getSpacingOptionOutput)(Lo,De):void 0,paddingBottom:Vo?(0,i.getSpacingOptionOutput)(Vo,De):void 0,paddingLeft:Do?(0,i.getSpacingOptionOutput)(Do,De):void 0}}),(0,l.createElement)(g.RichText,{tagName:"div",placeholder:(0,s.__)("Button...","kadence-blocks"),value:G,onChange:e=>L({text:e}),allowedFormats:(0,m.applyFilters)("kadence.whitelist_richtext_formats",["kadence/insert-dynamic","core/bold","core/italic","core/strikethrough","toolset/inline-field"],"kadence/advancedbtn"),className:"kt-button-text",keepPlaceholderOnFocus:!0}),Oe&&"left"!==Be&&(0,l.createElement)(a.IconRender,{className:`kt-btn-svg-icon kt-btn-svg-icon-${Oe} kt-btn-side-${Be}`,name:Oe,size:"1em",style:{fontSize:Mo?(0,i.getFontSizeOptionOutput)(Mo,void 0!==We?We:"px"):void 0,color:""!==$e?(0,i.KadenceColorOutput)($e):void 0,paddingTop:Uo?(0,i.getSpacingOptionOutput)(Uo,De):void 0,paddingRight:Lo?(0,i.getSpacingOptionOutput)(Lo,De):void 0,paddingBottom:Vo?(0,i.getSpacingOptionOutput)(Vo,De):void 0,paddingLeft:Do?(0,i.getSpacingOptionOutput)(Do,De):void 0}}),(0,l.createElement)(a.SpacingVisualizer,{type:"inside",forceShow:po.isMouseOver,spacing:[(0,i.getSpacingOptionOutput)(Eo,te),(0,i.getSpacingOptionOutput)(Po,te),(0,i.getSpacingOptionOutput)(Ro,te),(0,i.getSpacingOptionOutput)(Io,te)]})),(0,l.createElement)(a.SpacingVisualizer,{type:"inside",forceShow:co.isMouseOver,spacing:[(0,i.getSpacingOptionOutput)(_o,To),(0,i.getSpacingOptionOutput)(xo,To),(0,i.getSpacingOptionOutput)(Oo,To),(0,i.getSpacingOptionOutput)(Bo,To)]}),(null==ye||null===(M=ye[0])||void 0===M?void 0:M.google)&&(0,l.createElement)(a.KadenceWebfontLoader,{typography:ye,clientId:$,id:"typography"})))},save:()=>null,example:{attributes:{text:(0,s.__)("Click Me!","kadence-blocks")}}})})(),(this.kadence=this.kadence||{})["blocks-singlebtn"]=n})();