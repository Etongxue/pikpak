import{d as J,r as F,p as j,o as P,a as s,b as B,s as h,e as u,w as t,c as $,D,T as V,y as r,E as i}from"./vendor.85e1f5e0.js";import{p as w,i as L}from"./index.2e4fb436.js";var G="/assets/aria2-tip-1.e9ebfae4.png",R="/assets/aria2-tip-2.f3636f8d.png";const H={class:"list-page"},M=r(" \u7ED1\u5B9Atelegram "),q=i("p",null,null,-1),z=r("Telegram\u7ED1\u5B9A"),K=i("a",{href:"https://t.me/PikPak_Bot",target:"_blank"},"Telegram\u673A\u5668\u4EBA\u5730\u5740",-1),Q=r("aria2\u8BBE\u7F6E"),W=r("\u9009\u62E9\u6587\u4EF6\u5939\u65F6\u4FDD\u5B58\u6587\u4EF6\u5939\u7ED3\u6784"),X=r("\u9009\u62E9\u6587\u4EF6\u5939\u65F6\u4EC5\u4FDD\u5B58\u6587\u4EF6"),Y=i("img",{src:G,alt:""},null,-1),Z=i("br",null,null,-1),ee=i("br",null,null,-1),ue=i("img",{src:R,alt:""},null,-1),te=r("\u6D4B\u8BD5\u5E76\u4FDD\u5B58"),ae=r("\u81EA\u52A8\u767B\u5F55\u8BBE\u7F6E"),oe=r("\u4FDD\u5B58"),le=i("p",null,null,-1),ne=r("\u4FDD\u5B58\u8BBE\u7F6E"),se=r("\u6062\u590D\u9ED8\u8BA4"),re=i("a",{href:"https://mypikpak.com/",target:"_blank",class:"n-button"},"\u5B98\u65B9\u7F51\u7AD9",-1),ie=i("a",{href:"https://t.me/pikpak_userservice",target:"_blank"},"\u95EE\u9898\u53CD\u9988",-1),de=i("br",null,null,-1),Fe=J({setup(pe){const A=F(["\u624B\u673A\u6CE8\u518C\u767B\u9646","\u6DFB\u52A0\u63A8\u5E7F\u4E0B\u8F7D","\u7ED1\u5B9ATelegram","\u76F4\u63A5\u5206\u4EAB\u529F\u80FD\uFF08\u4E0B\u7EBF\uFF09","\u4FEE\u6539\u4F20\u8F93\u81EA\u52A8\u8BF7\u6C42\u65B9\u5F0F","\u4F20\u8F93\u53EA\u663E\u793A\u4FDD\u5B58\u4E2D","\u81EA\u5B9A\u4E49\u83DC\u5355","\u8D44\u6E90\u5E93\u5206\u9875\uFF0C\u5206\u4EAB\u79D2\u4F20\u652F\u6301\u6587\u4EF6\u53CA","...."]),a=F({host:"",token:"",dir:!0}),k=()=>{let l={id:"",jsonrpc:"2.0",method:"aria2.getGlobalStat",params:[]};a.value.token&&l.params.splice(0,0,"token:"+a.value.token),fetch(a.value.host,{method:"POST",body:JSON.stringify(l),headers:new Headers({"Content-Type":"application/json"})}).then(e=>e.json()).then(e=>{e.error&&e.error.message?window.$message.error(e.error.message):e.result&&(window.localStorage.setItem("pikpakAria2",JSON.stringify(a.value)),window.$message.success("\u4FDD\u5B58\u6210\u529F"))}).catch(e=>console.error("Error:",e))},m=F(!1),p=F({username:"",password:""}),y=j(),C=()=>{m.value?y.warning({title:"\u8B66\u544A",content:"\u8BB0\u4F4F\u767B\u9646\u662F\u6307\u6D4F\u89C8\u5668\u672C\u5730\u660E\u6587\u4FDD\u5B58\u7528\u6237\u540D\u5BC6\u7801\u7528\u4E8E\u4E0B\u6B21\u81EA\u52A8\u767B\u9646\uFF0C\u8BF7\u52FF\u5728\u975E\u4FE1\u4EFB\u8BBE\u5907\u9009\u62E9",positiveText:"\u786E\u5B9A",negativeText:"\u4E0D\u786E\u5B9A",onPositiveClick:()=>{window.localStorage.setItem("pikpakLoginData",JSON.stringify(p.value))},onNegativeClick:()=>{}}):window.localStorage.removeItem("pikpakLoginData")},E=F(""),b=()=>{let l=E.value.split(`
`).filter(e=>e!="");window.localStorage.setItem("proxy",JSON.stringify(l)),window.localStorage.setItem("isSettingProxy","true")},x=()=>{window.localStorage.setItem("proxy",JSON.stringify(w)),window.localStorage.removeItem("isSettingProxy"),E.value=w.join(`
`)};P(()=>{let l=JSON.parse(window.localStorage.getItem("pikpakAria2")||"{}");l.dir===void 0&&(l.dir=!0),l.host&&(a.value=l);let e=JSON.parse(window.localStorage.getItem("pikpakLoginData")||"{}");e.username&&e.password&&(p.value=e,m.value=!0);let n=JSON.parse(window.localStorage.getItem("proxy")||"[]");n.length&&(E.value=n.join(`
`))});const _=F(),S=()=>{let l=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");if(!l&&!l.access_token)return window.$message.error("\u8BF7\u5148\u767B\u9646"),!1;let e=_.value&&decodeURIComponent(_.value).match(/(^|&)token=([^&]*)(&|$)/);if(console.log(e),!e||!e.length||e.length!=4)return window.$message.error("\u8BF7\u8F93\u5165\u6B63\u786E\u94FE\u63A5"),!1;L.post("https://api-drive.mypikpak.com/user/v1/bind",{accessToken:l.access_token,thirdType:"TG",thirdToken:e[2]}).then(n=>{_.value="",n.data.bound?window.$message.success("\u7ED1\u5B9A\u6210\u529F"):window.$message.error("\u7ED1\u5B9A\u5931\u8D25")})};return(l,e)=>{const n=s("n-input"),v=s("n-button"),c=s("n-collapse-item"),d=s("n-form-item"),g=s("n-switch"),T=s("n-alert"),f=s("n-form"),N=s("n-text"),O=s("n-space"),I=s("n-log"),U=s("n-collapse");return B(),h("div",H,[u(U,{"default-expanded-names":["-1","0","2","3","4"]},{default:t(()=>[u(c,{name:"-1"},{header:t(()=>[M]),default:t(()=>[u(n,{value:_.value,"onUpdate:value":e[0]||(e[0]=o=>_.value=o),placeholder:"\u590D\u5236telegram\u7ED1\u5B9A\u94FE\u63A5\u5230\u8FD9"},null,8,["value"]),q,u(v,{disabled:!_.value,type:"primary",onClick:S},{default:t(()=>[z]),_:1},8,["disabled"]),K]),_:1}),u(c,{name:"0",title:"aria2\u8BBE\u7F6E"},{header:t(()=>[Q]),default:t(()=>[u(f,{"label-width":"100px","label-align":"left","label-placement":"left"},{default:t(()=>[u(d,{label:"aria2\u94FE\u63A5\uFF1A"},{default:t(()=>[u(n,{value:a.value.host,"onUpdate:value":e[1]||(e[1]=o=>a.value.host=o),placeholder:"\u4F8B\u5982http://localhost:6800/jsonrpc"},null,8,["value"])]),_:1}),u(d,{label:"aria2Token\uFF1A"},{default:t(()=>[u(n,{value:a.value.token,"onUpdate:value":e[2]||(e[2]=o=>a.value.token=o),type:"password","show-password-on":"mousedown"},null,8,["value"])]),_:1}),u(d,{label:"\u6587\u4EF6\u5939\u8BBE\u7F6E\uFF1A"},{default:t(()=>[u(g,{value:a.value.dir,"onUpdate:value":e[3]||(e[3]=o=>a.value.dir=o)},{checked:t(()=>[W]),unchecked:t(()=>[X]),_:1},8,["value"])]),_:1}),a.value.host&&a.value.host.indexOf("https://")===-1&&a.value.host.indexOf("http://localhost")==-1&&a.value.host.indexOf("http://127.0.0.1")===-1?(B(),$(T,{key:0,title:"\u7531\u4E8E\u6D4F\u89C8\u5668\u9650\u5236\uFF0C\u8BF7\u6309\u4E0B\u56FE\u8BBE\u7F6E\u5F00\u59CB\u6DF7\u5408\u6A21\u5F0F",type:"info"},{default:t(()=>[Y,Z,ee,ue]),_:1})):D("",!0),u(d,null,{default:t(()=>[u(v,{type:"primary",onClick:k},{default:t(()=>[te]),_:1})]),_:1})]),_:1})]),_:1}),u(c,{name:"1",title:"\u81EA\u52A8\u767B\u5F55\u8BBE\u7F6E"},{header:t(()=>[ae]),default:t(()=>[u(f,{"label-width":"100px","label-align":"left","label-placement":"left"},{default:t(()=>[u(d,{label:"\u662F\u5426\u5F00\u542F"},{default:t(()=>[u(g,{value:m.value,"onUpdate:value":e[4]||(e[4]=o=>m.value=o)},null,8,["value"])]),_:1}),m.value?(B(),h(V,{key:0},[u(d,{label:"\u7528\u6237\u540D"},{default:t(()=>[u(n,{value:p.value.username,"onUpdate:value":e[5]||(e[5]=o=>p.value.username=o),placeholder:"\u7528\u6237\u540D"},null,8,["value"])]),_:1}),u(d,{label:"\u5BC6\u7801"},{default:t(()=>[u(n,{value:p.value.password,"onUpdate:value":e[6]||(e[6]=o=>p.value.password=o),type:"password","show-password-on":"mousedown"},null,8,["value"])]),_:1})],64)):D("",!0),u(d,null,{default:t(()=>[u(v,{type:"primary",onClick:C},{default:t(()=>[oe]),_:1})]),_:1})]),_:1})]),_:1}),u(c,{name:"3",title:"\u4EE3\u7406\u8BBE\u7F6E"},{default:t(()=>[u(n,{type:"textarea",value:E.value,"onUpdate:value":e[7]||(e[7]=o=>E.value=o),rows:"4",placeholder:"\u652F\u6301\u591A\u4E2A\u968F\u673A\uFF0C\u4E00\u884C\u4E00\u4E2A\uFF0C\u4E3A\u7A7A\u5219\u4E0D\u4EE3\u7406"},null,8,["value"]),le,u(v,{type:"primary",onClick:b},{default:t(()=>[ne]),_:1}),u(N,{onClick:x},{default:t(()=>[se]),_:1})]),_:1}),u(c,{title:"\u5173\u4E8E",name:"2"},{default:t(()=>[u(O,null,{default:t(()=>[re,ie]),_:1}),de]),_:1}),u(c,{title:"\u529F\u80FD\u5217\u8868",name:"3"},{default:t(()=>[u(I,{lines:A.value},null,8,["lines"])]),_:1})]),_:1})])}}});export{Fe as default};
