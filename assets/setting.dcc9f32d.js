import{d as I,r as E,p as T,o as O,a as U,b as g,s as f,e,f as t,ax as J,w as a,ay as c,R as m,Q as _,am as i,az as h,c as j,ak as P,D,ao as w,T as $,ad as L,aA as V,y as n,E as r}from"./vendor.acd6db4d.js";import{p as A,i as R}from"./index.59e32d71.js";var G="/assets/aria2-tip-1.e9ebfae4.png",z="/assets/aria2-tip-2.f3636f8d.png";const H={class:"list-page"},M=n(" \u7ED1\u5B9Atelegram "),Q=r("p",null,null,-1),q=n("Telegram\u7ED1\u5B9A"),K=r("a",{href:"https://t.me/PikPak_Bot",target:"_blank"},"Telegram\u673A\u5668\u4EBA\u5730\u5740",-1),W=n("aria2\u8BBE\u7F6E"),X=n("\u9009\u62E9\u6587\u4EF6\u5939\u65F6\u4FDD\u5B58\u6587\u4EF6\u5939\u7ED3\u6784"),Y=n("\u9009\u62E9\u6587\u4EF6\u5939\u65F6\u4EC5\u4FDD\u5B58\u6587\u4EF6"),Z=r("img",{src:G,alt:""},null,-1),uu=r("br",null,null,-1),eu=r("br",null,null,-1),tu=r("img",{src:z,alt:""},null,-1),au=n("\u6D4B\u8BD5\u5E76\u4FDD\u5B58"),lu=n("\u81EA\u52A8\u767B\u5F55\u8BBE\u7F6E"),ou=n("\u4FDD\u5B58"),su=r("p",null,null,-1),nu=n("\u4FDD\u5B58\u8BBE\u7F6E"),ru=n("\u6062\u590D\u9ED8\u8BA4"),iu=r("a",{href:"https://mypikpak.com/",target:"_blank",class:"n-button"},"\u5B98\u65B9\u7F51\u7AD9",-1),du=r("a",{href:"https://t.me/pikpak_userservice",target:"_blank"},"\u95EE\u9898\u53CD\u9988",-1),pu=r("br",null,null,-1),mu=I({setup(Fu){const k=E(["\u624B\u673A\u6CE8\u518C\u767B\u9646","\u6DFB\u52A0\u63A8\u5E7F\u4E0B\u8F7D","\u7ED1\u5B9ATelegram","\u76F4\u63A5\u5206\u4EAB\u529F\u80FD\uFF08\u4E0B\u7EBF\uFF09","\u4FEE\u6539\u4F20\u8F93\u81EA\u52A8\u8BF7\u6C42\u65B9\u5F0F","\u4F20\u8F93\u53EA\u663E\u793A\u4FDD\u5B58\u4E2D","\u81EA\u5B9A\u4E49\u83DC\u5355","\u8D44\u6E90\u5E93\u5206\u9875\uFF0C\u5206\u4EAB\u79D2\u4F20\u652F\u6301\u6587\u4EF6\u53CA","...."]),l=E({host:"",token:"",dir:!0}),y=()=>{let s={id:"",jsonrpc:"2.0",method:"aria2.getGlobalStat",params:[]};l.value.token&&s.params.splice(0,0,"token:"+l.value.token),fetch(l.value.host,{method:"POST",body:JSON.stringify(s),headers:new Headers({"Content-Type":"application/json"})}).then(u=>u.json()).then(u=>{u.error&&u.error.message?window.$message.error(u.error.message):u.result&&(window.localStorage.setItem("pikpakAria2",JSON.stringify(l.value)),window.$message.success("\u4FDD\u5B58\u6210\u529F"))}).catch(u=>console.error("Error:",u))},v=E(!1),d=E({username:"",password:""}),C=T(),x=()=>{v.value?C.warning({title:"\u8B66\u544A",content:"\u8BB0\u4F4F\u767B\u9646\u662F\u6307\u6D4F\u89C8\u5668\u672C\u5730\u660E\u6587\u4FDD\u5B58\u7528\u6237\u540D\u5BC6\u7801\u7528\u4E8E\u4E0B\u6B21\u81EA\u52A8\u767B\u9646\uFF0C\u8BF7\u52FF\u5728\u975E\u4FE1\u4EFB\u8BBE\u5907\u9009\u62E9",positiveText:"\u786E\u5B9A",negativeText:"\u4E0D\u786E\u5B9A",onPositiveClick:()=>{window.localStorage.setItem("pikpakLoginData",JSON.stringify(d.value))},onNegativeClick:()=>{}}):window.localStorage.removeItem("pikpakLoginData")},B=E(""),b=()=>{let s=B.value.split(`
`).filter(u=>u!="");window.localStorage.setItem("proxy",JSON.stringify(s)),window.localStorage.setItem("isSettingProxy","true")},S=()=>{window.localStorage.setItem("proxy",JSON.stringify(A)),window.localStorage.removeItem("isSettingProxy"),B.value=A.join(`
`)};O(()=>{let s=JSON.parse(window.localStorage.getItem("pikpakAria2")||"{}");s.dir===void 0&&(s.dir=!0),s.host&&(l.value=s);let u=JSON.parse(window.localStorage.getItem("pikpakLoginData")||"{}");u.username&&u.password&&(d.value=u,v.value=!0);let F=JSON.parse(window.localStorage.getItem("proxy")||"[]");F.length&&(B.value=F.join(`
`))});const p=E(),N=()=>{let s=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");if(!s&&!s.access_token)return window.$message.error("\u8BF7\u5148\u767B\u9646"),!1;let u=p.value&&decodeURIComponent(p.value).match(/(^|&)token=([^&]*)(&|$)/);if(console.log(u),!u||!u.length||u.length!=4)return window.$message.error("\u8BF7\u8F93\u5165\u6B63\u786E\u94FE\u63A5"),!1;R.post("https://api-drive.mypikpak.com/user/v1/bind",{accessToken:s.access_token,thirdType:"TG",thirdToken:u[2]}).then(F=>{p.value="",F.data.bound?window.$message.success("\u7ED1\u5B9A\u6210\u529F"):window.$message.error("\u7ED1\u5B9A\u5931\u8D25")})};return(s,u)=>{const F=U("n-text");return g(),f("div",H,[e(t(J),{"default-expanded-names":["-1","0","2","3","4"]},{default:a(()=>[e(t(c),{name:"-1"},{header:a(()=>[M]),default:a(()=>[e(t(m),{value:p.value,"onUpdate:value":u[0]||(u[0]=o=>p.value=o),placeholder:"\u590D\u5236telegram\u7ED1\u5B9A\u94FE\u63A5\u5230\u8FD9"},null,8,["value"]),Q,e(t(_),{disabled:!p.value,type:"primary",onClick:N},{default:a(()=>[q]),_:1},8,["disabled"]),K]),_:1}),e(t(c),{name:"0",title:"aria2\u8BBE\u7F6E"},{header:a(()=>[W]),default:a(()=>[e(t(w),{"label-width":"100px","label-align":"left","label-placement":"left"},{default:a(()=>[e(t(i),{label:"aria2\u94FE\u63A5\uFF1A"},{default:a(()=>[e(t(m),{value:l.value.host,"onUpdate:value":u[1]||(u[1]=o=>l.value.host=o),placeholder:"\u4F8B\u5982http://localhost:6800/jsonrpc"},null,8,["value"])]),_:1}),e(t(i),{label:"aria2Token\uFF1A"},{default:a(()=>[e(t(m),{value:l.value.token,"onUpdate:value":u[2]||(u[2]=o=>l.value.token=o),type:"password","show-password-on":"mousedown"},null,8,["value"])]),_:1}),e(t(i),{label:"\u6587\u4EF6\u5939\u8BBE\u7F6E\uFF1A"},{default:a(()=>[e(t(h),{value:l.value.dir,"onUpdate:value":u[3]||(u[3]=o=>l.value.dir=o)},{checked:a(()=>[X]),unchecked:a(()=>[Y]),_:1},8,["value"])]),_:1}),l.value.host&&l.value.host.indexOf("https://")===-1&&l.value.host.indexOf("http://localhost")==-1&&l.value.host.indexOf("http://127.0.0.1")===-1?(g(),j(t(P),{key:0,title:"\u7531\u4E8E\u6D4F\u89C8\u5668\u9650\u5236\uFF0C\u8BF7\u6309\u4E0B\u56FE\u8BBE\u7F6E\u5F00\u59CB\u6DF7\u5408\u6A21\u5F0F",type:"info"},{default:a(()=>[Z,uu,eu,tu]),_:1})):D("",!0),e(t(i),null,{default:a(()=>[e(t(_),{type:"primary",onClick:y},{default:a(()=>[au]),_:1})]),_:1})]),_:1})]),_:1}),e(t(c),{name:"1",title:"\u81EA\u52A8\u767B\u5F55\u8BBE\u7F6E"},{header:a(()=>[lu]),default:a(()=>[e(t(w),{"label-width":"100px","label-align":"left","label-placement":"left"},{default:a(()=>[e(t(i),{label:"\u662F\u5426\u5F00\u542F"},{default:a(()=>[e(t(h),{value:v.value,"onUpdate:value":u[4]||(u[4]=o=>v.value=o)},null,8,["value"])]),_:1}),v.value?(g(),f($,{key:0},[e(t(i),{label:"\u7528\u6237\u540D"},{default:a(()=>[e(t(m),{value:d.value.username,"onUpdate:value":u[5]||(u[5]=o=>d.value.username=o),placeholder:"\u7528\u6237\u540D"},null,8,["value"])]),_:1}),e(t(i),{label:"\u5BC6\u7801"},{default:a(()=>[e(t(m),{value:d.value.password,"onUpdate:value":u[6]||(u[6]=o=>d.value.password=o),type:"password","show-password-on":"mousedown"},null,8,["value"])]),_:1})],64)):D("",!0),e(t(i),null,{default:a(()=>[e(t(_),{type:"primary",onClick:x},{default:a(()=>[ou]),_:1})]),_:1})]),_:1})]),_:1}),e(t(c),{name:"3",title:"\u4EE3\u7406\u8BBE\u7F6E"},{default:a(()=>[e(t(m),{type:"textarea",value:B.value,"onUpdate:value":u[7]||(u[7]=o=>B.value=o),rows:"4",placeholder:"\u652F\u6301\u591A\u4E2A\u968F\u673A\uFF0C\u4E00\u884C\u4E00\u4E2A\uFF0C\u4E3A\u7A7A\u5219\u4E0D\u4EE3\u7406"},null,8,["value"]),su,e(t(_),{type:"primary",onClick:b},{default:a(()=>[nu]),_:1}),e(F,{onClick:S},{default:a(()=>[ru]),_:1})]),_:1}),e(t(c),{title:"\u5173\u4E8E",name:"2"},{default:a(()=>[e(t(L),null,{default:a(()=>[iu,du]),_:1}),pu]),_:1}),e(t(c),{title:"\u529F\u80FD\u5217\u8868",name:"3"},{default:a(()=>[e(t(V),{lines:k.value},null,8,["lines"])]),_:1})]),_:1})])}}});export{mu as default};
