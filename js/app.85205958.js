(self["webpackChunkvue3_echarts"]=self["webpackChunkvue3_echarts"]||[]).push([[143],{8435:function(e){e.exports=[{url:"/bar/selectTypeData",type:"post",response:()=>({code:200,data:[{name:"电脑",value:(1500*Math.random()).toFixed(2)},{name:"手机",value:(1500*Math.random()).toFixed(2)},{name:"汽车",value:(1500*Math.random()).toFixed(2)},{name:"空调",value:(1500*Math.random()).toFixed(2)},{name:"冰箱",value:(1500*Math.random()).toFixed(2)},{name:"电视",value:(1500*Math.random()).toFixed(2)}]})},{url:"/word/selectWordData",type:"post",response:()=>({code:200,data:[{name:"小米",value:(1e3*Math.random()).toFixed(2)},{name:"联想",value:(1e3*Math.random()).toFixed(2)},{name:"华为",value:(1e3*Math.random()).toFixed(2)},{name:"格力",value:(1e3*Math.random()).toFixed(2)},{name:"海尔",value:(1e3*Math.random()).toFixed(2)},{name:"华硕",value:(1e3*Math.random()).toFixed(2)},{name:"法拉利",value:(1e3*Math.random()).toFixed(2)},{name:"苹果",value:(1e3*Math.random()).toFixed(2)},{name:"三星",value:(1e3*Math.random()).toFixed(2)},{name:"索尼",value:(1e3*Math.random()).toFixed(2)},{name:"劳斯莱斯",value:(1e3*Math.random()).toFixed(2)},{name:"保时捷",value:(1e3*Math.random()).toFixed(2)}]})},{url:"/box/selectBoxData",type:"post",response:()=>({code:200,data:[{name:"18岁以下",value:parseInt(1200*Math.random())},{name:"18-25",value:parseInt(2e3*Math.random())},{name:"25-35",value:parseInt(1800*Math.random())},{name:"35-50",value:parseInt(1700*Math.random())},{name:"50-65",value:parseInt(1500*Math.random())},{name:"65以上",value:parseInt(1400*Math.random())}]})},{url:"/line/selectOtherData",type:"post",response:()=>({code:200,data:[{name:"1月",value:(70*Math.random()+20).toFixed(2),other:(50*Math.random()).toFixed(2)},{name:"2月",value:(70*Math.random()+20).toFixed(2),other:(50*Math.random()).toFixed(2)},{name:"3月",value:(70*Math.random()+20).toFixed(2),other:(50*Math.random()).toFixed(2)},{name:"4月",value:(70*Math.random()+20).toFixed(2),other:(50*Math.random()).toFixed(2)},{name:"5月",value:(70*Math.random()+20).toFixed(2),other:(50*Math.random()).toFixed(2)},{name:"6月",value:(70*Math.random()+20).toFixed(2),other:(50*Math.random()).toFixed(2)},{name:"7月",value:(70*Math.random()+20).toFixed(2),other:(50*Math.random()).toFixed(2)},{name:"8月",value:(70*Math.random()+20).toFixed(2),other:(50*Math.random()).toFixed(2)},{name:"9月",value:(70*Math.random()+20).toFixed(2),other:(50*Math.random()).toFixed(2)},{name:"10月",value:(70*Math.random()+20).toFixed(2),other:(50*Math.random()).toFixed(2)},{name:"11月",value:(70*Math.random()+20).toFixed(2),other:(50*Math.random()).toFixed(2)},{name:"12月",value:(70*Math.random()+20).toFixed(2),other:(50*Math.random()).toFixed(2)}]})},{url:"/liquid/selectYearValue",type:"post",response:()=>({code:200,data:{value:(5e3*Math.random()+300).toFixed(1)}})}]},8954:function(e,t,a){const o=a(1269),{param2Obj:n}=a(3015),r=a(8222),m=a(8435),s=[...m];function i(){function e(e){return function(t){let a=null;if(e instanceof Function){const{body:o,type:m,url:s}=t;a=e({method:m,body:r.parse(o),query:n(s)})}else a=e;return o.mock(a)}}o.XHR.prototype.proxy_send=o.XHR.prototype.send,o.XHR.prototype.send=function(){this.custom.xhr&&(this.custom.xhr.withCredentials=this.withCredentials||!1,this.responseType&&(this.custom.xhr.responseType=this.responseType)),this.proxy_send(...arguments)};for(const t of s)o.mock(new RegExp(t.url),t.type||"get",e(t.response))}console.log(s),e.exports={mocks:s,mockXHR:i}},3015:function(e){function t(e){const t=decodeURIComponent(e.split("?")[1]).replace(/\+/g," ");if(!t)return{};const a={},o=t.split("&");return o.forEach((e=>{const t=e.indexOf("=");if(-1!==t){const o=e.substring(0,t),n=e.substring(t+1,e.length);a[o]=n}})),a}e.exports={param2Obj:t}},3547:function(e,t,a){"use strict";a.d(t,{Z:function(){return m}});var o=a(7506),n=a(3677),r=a(9897);function m(){const e=(0,n.oR)(),t=(0,r.tv)();let a=(0,o.Fl)((()=>e.state.mapInfo[e.state.mapInfo.length-1].code)),m=(0,o.Fl)((()=>e.state.year)),s=(0,o.Fl)((()=>e.state.mapInfo));const i=(0,o.Fl)((()=>e.state.sum)),d=t=>{e.commit("SET_YEAR",t)},u=t=>{e.commit("ADD_INFO",t)},c=t=>{e.commit("REMOVE_INFO",t)},l=t=>{e.commit("SET_SUM",t)},h=e=>{t.push(e)};return{abcode:a,sum:i,year:m,parentInfo:s,setCommitYear:d,setCommitSum:l,removeCommitMapInfo:c,setCommitMapInfo:u,routerChange:h}}},2879:function(e,t,a){"use strict";var o=a(6271),n=a(7506);function r(e,t){const a=(0,n.up)("router-view");return(0,n.wg)(),(0,n.j4)(a)}var m=a(2885);const s={},i=(0,m.Z)(s,[["render",r]]);var d=i,u=a(9897);const c={class:"app-container"},l={class:"main-container"};function h(e,t,a,o,r,m){const s=(0,n.up)("nav-bar"),i=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)("div",c,[(0,n.Wm)(s),(0,n._)("div",l,[(0,n.Wm)(i,null,{default:(0,n.w5)((({Component:e})=>[((0,n.wg)(),(0,n.j4)(n.Ob,{include:"homepage,more"},[((0,n.wg)(),(0,n.j4)((0,n.LL)(e)))],1024))])),_:1})])])}var p=a(3771);const v={class:"nav-wrapper"},M={class:"time"},x={key:0,class:"mapChoose"},F=["onClick"],f={class:"icon"};function g(e,t,a,r,m,s){return(0,n.wg)(),(0,n.iD)("div",v,[(0,n._)("div",{class:"bar-title",onClick:t[0]||(t[0]=(0,o.iM)(((...e)=>r.toHome&&r.toHome(...e)),["stop"]))},"大数据分析系统"),(0,n._)("div",M,(0,p.zw)(r.date)+" "+(0,p.zw)(r.time),1),r.parentInfo.length>1&&r.isHome?((0,n.wg)(),(0,n.iD)("div",x,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(r.parentInfo,((e,t)=>((0,n.wg)(),(0,n.iD)("span",{key:e.code},[(0,n._)("span",{class:"title",onClick:a=>r.chooseArea(e,t)},(0,p.zw)("全国"==e.cityName?"中国":e.cityName),9,F),(0,n.wy)((0,n._)("span",f,">",512),[[o.F8,t+1!=r.parentInfo.length]])])))),128))])):(0,n.kq)("",!0)])}var y=a(8028);function I(){const e=new Date;return e.getFullYear()+"-"+_(e.getMonth()+1)+"-"+_(e.getDate())}function w(){const e=new Date;return _(e.getHours())+":"+_(e.getMinutes())+":"+_(e.getSeconds())}function _(e){return e>9?e:"0"+e}var b=a(3547),k={name:"navBar",setup(){const e=(0,y.iH)(I()),t=(0,y.iH)(w()),a=(0,u.tv)(),o=(0,u.yj)(),{parentInfo:r,removeCommitMapInfo:m}=(0,b.Z)();let s=(0,n.Fl)((()=>"/homepage"==o.path));const i=(e,t)=>{r.value.length!==t+1&&m(t+1)},d=()=>{"/homepage"!=o.path&&a.push("/homepage")};return setInterval((()=>{t.value=w()}),1e3),{date:e,time:t,parentInfo:r,chooseArea:i,toHome:d,isHome:s}}};const C=(0,m.Z)(k,[["render",g],["__scopeId","data-v-d1ca2338"]]);var D=C,H={name:"layout-view",components:{navBar:D},setup(){const e=(0,u.yj)().meta.keepAlive;return{keepAlive:e}}};const O=(0,m.Z)(H,[["render",h],["__scopeId","data-v-58205b54"]]);var E=O;const R=[{path:"/",component:E,redirect:"/homepage",children:[{path:"/homepage",name:"homepage",component:()=>Promise.all([a.e(883),a.e(174),a.e(321)]).then(a.bind(a,5321)),meta:{title:"首页"}},{path:"/more",name:"more",component:()=>Promise.all([a.e(883),a.e(200)]).then(a.bind(a,200)),meta:{title:"更多"}}]}],T=(0,u.p7)({history:(0,u.r5)(),routes:R});var A=T,S=a(3677),j=(0,S.MT)({state:{mapInfo:[{cityName:"全国",code:1e5}],year:2016,sum:0},mutations:{ADD_INFO:(e,t)=>{e.mapInfo.push(t)},REMOVE_INFO:(e,t)=>{e.mapInfo.splice(t)},SET_YEAR:(e,t)=>{e.year=t},SET_SUM:(e,t)=>{e.sum=t}}});{const{mockXHR:e}=a(8954);e()}const N=(0,o.ri)(d);N.use(j).use(A).mount("#app")}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[114],(function(){return t(2879)}));e.O()}]);