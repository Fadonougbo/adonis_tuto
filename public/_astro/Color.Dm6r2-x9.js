import{r as c}from"./index.BL7xzsR_.js";var x={exports:{}},u={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d;function f(){if(d)return u;d=1;var o=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function e(s,t,r){var i=null;if(r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),"key"in t){r={};for(var l in t)l!=="key"&&(r[l]=t[l])}else r=t;return t=r.ref,{$$typeof:o,type:s,key:i,ref:t!==void 0?t:null,props:r}}return u.Fragment=n,u.jsx=e,u.jsxs=e,u}var p;function R(){return p||(p=1,x.exports=f()),x.exports}var a=R();const h=()=>{const o=[0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];let n="#";for(let e=1;e<=6;e++){const s=Math.floor(Math.random()*15);n+=o[s]}return n},k=({defaultcolor:o})=>{const[n,e]=c.useState(o);c.useEffect(()=>{console.log("mount")});const s=()=>{const t=h();e(()=>t)};return a.jsxs("div",{children:[a.jsx("button",{onClick:s,type:"button",children:"change"}),a.jsx("span",{style:{width:"100px",height:"100px",display:"inline-block",background:n}})]})};export{k as Color};
