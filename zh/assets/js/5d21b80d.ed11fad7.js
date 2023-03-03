"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[55978],{3905:(t,e,n)=>{n.d(e,{Zo:()=>k,kt:()=>d});var l=n(67294);function h(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){h(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,l,h=function(t,e){if(null==t)return{};var n,l,h={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(h[n]=t[n]);return h}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(h[n]=t[n])}return h}var r=l.createContext({}),o=function(t){var e=l.useContext(r),n=e;return t&&(n="function"==typeof t?t(e):u(u({},e),t)),n},k=function(t){var e=o(t.components);return l.createElement(r.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},p=l.forwardRef((function(t,e){var n=t.components,h=t.mdxType,a=t.originalType,r=t.parentName,k=i(t,["components","mdxType","originalType","parentName"]),c=o(n),p=h,d=c["".concat(r,".").concat(p)]||c[p]||m[p]||a;return n?l.createElement(d,u(u({ref:e},k),{},{components:n})):l.createElement(d,u({ref:e},k))}));function d(t,e){var n=arguments,h=e&&e.mdxType;if("string"==typeof t||h){var a=n.length,u=new Array(a);u[0]=p;var i={};for(var r in e)hasOwnProperty.call(e,r)&&(i[r]=e[r]);i.originalType=t,i[c]="string"==typeof t?t:h,u[1]=i;for(var o=2;o<a;o++)u[o]=n[o];return l.createElement.apply(null,u)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},36538:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>k});var l=n(87462),h=n(67294),a=n(3905);const u=t=>{const[e,n]=(0,h.useState)([]);(0,h.useEffect)((()=>{const l=t.repo??"apache/incubator-shenyu";e&&0!==e.length||fetch(`https://api.github.com/repos/${l}/contributors?page=1&per_page=10000`).then((function(t){return t.json()})).then((t=>{n(t)}))}));let l="<table>";return e&&Array.isArray(e)&&e.forEach(((t,n)=>{n%5==0&&(n>0&&(l+="</tr>"),l+="<tr>"),l+=`<td>\n                        <a href="${t.html_url}" target="_blank">\n                            <img src="${t.avatar_url}" height="20" /> \n                            <span style={{ whiteSpace: 'nowrap' }}>@${t.login}</span>\n                        </a>\n                    </td>`,n===e.length-1&&(l+="</tr>")})),l+="</table>",h.createElement("div",{dangerouslySetInnerHTML:{__html:l}})},i={title:"\u56e2\u961f",sidebar_position:0,description:"Apache ShenYu \u56e2\u961f",author:"hutaishi",categories:"Apache ShenYu",tags:["Team"]},r=void 0,o={type:"mdx",permalink:"/zh/team",source:"@site/i18n/zh/docusaurus-plugin-content-pages/team.mdx"},k=[{value:"Apache ShenYu \u56e2\u961f",id:"apache-shenyu-\u56e2\u961f",children:[]},{value:"\u6210\u5458",id:"\u6210\u5458",children:[]},{value:"\u8d21\u732e\u8005",id:"\u8d21\u732e\u8005",children:[{value:"Apache ShenYu",id:"apache-shenyu",children:[]},{value:"Apache ShenYu Dashboard",id:"apache-shenyu-dashboard",children:[]},{value:"Apache ShenYu Website",id:"apache-shenyu-website",children:[]},{value:"Apache ShenYu Helm Chart",id:"apache-shenyu-helm-chart",children:[]},{value:"Apache ShenYu Nginx",id:"apache-shenyu-nginx",children:[]},{value:"Apache ShenYu Client Python",id:"apache-shenyu-client-python",children:[]},{value:"Apache ShenYu Client Dotnet",id:"apache-shenyu-client-dotnet",children:[]},{value:"Apache ShenYu Client Golang",id:"apache-shenyu-client-golang",children:[]}]}],c={toc:k},m="wrapper";function p(t){let{components:e,...n}=t;return(0,a.kt)(m,(0,l.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"apache-shenyu-\u56e2\u961f"},"Apache ShenYu \u56e2\u961f"),(0,a.kt)("p",null,"\u9879\u76ee\u6b63\u5728\u4e0d\u65ad\u7684\u53d1\u5c55\u548c\u58ee\u5927\uff0c\u8fd9\u79bb\u4e0d\u5f00\u6bcf\u4e00\u4f4d\u6210\u5458\u548c\u8d21\u732e\u8005\u7684\u8d21\u732e\u3002\n\u56e2\u961f\u59cb\u7ec8\u575a\u6301\u793e\u533a\u5927\u4e8e\u4ee3\u7801\uff0c\u6211\u4eec\u671f\u5f85\u66f4\u591a\u7684\u4eba\u52a0\u5165\u56e2\u961f\uff0c\u548c\u793e\u533a\u5171\u540c\u6210\u957f\u3002"),(0,a.kt)("h2",{id:"\u6210\u5458"},"\u6210\u5458"),(0,a.kt)("table",{frame:"above",style:{textAlign:"center",borderCollapse:"collapse"},class:"table table-hover"},(0,a.kt)("tr",null,(0,a.kt)("th",{style:{width:"11%"}},(0,a.kt)("b",null)),(0,a.kt)("th",{style:{width:"21%"}},(0,a.kt)("b",null,"Public Name")),(0,a.kt)("th",null,(0,a.kt)("b",null,"Apache ID")),(0,a.kt)("th",null,(0,a.kt)("b",null,"GitHub")),(0,a.kt)("th",{style:{width:"20%"}},(0,a.kt)("b",null,"Role")),(0,a.kt)("th",null,(0,a.kt)("b",null))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/yu199195"},(0,a.kt)("img",{width:"64",src:"https://avatars.githubusercontent.com/u/9673503?v=4"}))),(0,a.kt)("td",null,"Yu Xiao"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://people.apache.org/committer-index.html#xiaoyu"},"xiaoyu")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/yu199195"},"yu199195")),(0,a.kt)("td",null,"Founder, V.P. and Chair of PMC "),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://twitter.com/yu199195"},(0,a.kt)("img",{width:"32",src:"https://shenyu.apache.org/img/community/twitterblue.png"}),"yu199195"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/tuohai666"},(0,a.kt)("img",{width:"64",src:"https://avatars.githubusercontent.com/u/24643893?v=4"}))),(0,a.kt)("td",null,"Yonglun Zhang"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://people.apache.org/committer-index.html#zhangyonglun"},"zhangyonglun")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/tuohai666"},"tuohai666")),(0,a.kt)("td",null,"PMC"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/WillemJiang"},(0,a.kt)("img",{width:"64",src:"https://avatars.githubusercontent.com/u/219644?v=4"}))),(0,a.kt)("td",null,"Willem Ning Jiang"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://people.apache.org/committer-index.html#ningjiang"},"ningjiang")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/WillemJiang"},"WillemJiang")),(0,a.kt)("td",null,"PMC"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/justinmclean"},(0,a.kt)("img",{width:"64",src:"https://avatars.githubusercontent.com/u/144504?v=4"}))),(0,a.kt)("td",null,"Justin Mclean"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://people.apache.org/committer-index.html#jmclean"},"jmclean")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/justinmclean"},"justinmclean")),(0,a.kt)("td",null,"PMC"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/Apache9"},(0,a.kt)("img",{width:"64",src:"https://avatars.githubusercontent.com/u/4958168?v=4"}))),(0,a.kt)("td",null,"Duo Zhang"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://people.apache.org/committer-index.html#zhangduo"},"zhangduo")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/Apache9"},"Apache9")),(0,a.kt)("td",null,"PMC"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/atris"},(0,a.kt)("img",{width:"64",src:"https://avatars.githubusercontent.com/u/1724131?v=4"}))),(0,a.kt)("td",null,"Atri Sharma"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://people.apache.org/committer-index.html#atri"},"atri")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/atris"},"atris")),(0,a.kt)("td",null,"PMC"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/sunjincheng121"},(0,a.kt)("img",{width:"64",src:"https://avatars.githubusercontent.com/u/22488084?v=4"}))),(0,a.kt)("td",null,"Jincheng Sun"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://people.apache.org/committer-index.html#jincheng"},"jincheng")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/sunjincheng121"},"sunjincheng121")),(0,a.kt)("td",null,"PMC"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/djkevincr"},(0,a.kt)("img",{width:"64",src:"https://avatars.githubusercontent.com/u/1346010?v=4"}))),(0,a.kt)("td",null,"Kevin Ratnasekera"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://people.apache.org/committer-index.html#djkevincr"},"djkevincr")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/djkevincr"},"djkevincr")),(0,a.kt)("td",null,"PMC"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/dengliming"},(0,a.kt)("img",{width:"64",src:"https://avatars.githubusercontent.com/u/7796156?v=4"}))),(0,a.kt)("td",null,"Liming Deng"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://people.apache.org/committer-index.html#dengliming"},"dengliming")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/dengliming"},"dengliming")),(0,a.kt)("td",null,"PMC"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/nuo-promise"},(0,a.kt)("img",{width:"64",src:"https://avatars.githubusercontent.com/u/46160170?v=4"}))),(0,a.kt)("td",null,"JianMing Ding"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://people.apache.org/committer-index.html#nuoyan"},"nuoyan")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/nuo-promise"},"nuo-promise")),(0,a.kt)("td",null,"PMC"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/tydhot"},(0,a.kt)("img",{width:"64",src:"https://avatars.githubusercontent.com/u/27889201?v=4"}))),(0,a.kt)("td",null,"Tang Yudong"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://people.apache.org/committer-index.html#tydhot"},"tydhot")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/tydhot"},"tydhot")),(0,a.kt)("td",null,"PMC"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/SaberSola"},(0,a.kt)("img",{width:"64",src:"https://avatars.githubusercontent.com/u/24998393?v=4"}))),(0,a.kt)("td",null,"Lei Zhang"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://people.apache.org/committer-index.html#sabersola"},"sabersola")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/SaberSola"},"SaberSola")),(0,a.kt)("td",null,"PMC"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/qicz"},(0,a.kt)("img",{width:"64",src:"https://avatars.githubusercontent.com/u/2174082?v=4"}))),(0,a.kt)("td",null,"Congqi Zhu"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://people.apache.org/committer-index.html#qicz"},"qicz")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/qicz"},"qicz")),(0,a.kt)("td",null,"PMC"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/HessTina-YuI"},(0,a.kt)("img",{width:"64",src:"https://avatars.githubusercontent.com/u/13451528?v=4"}))),(0,a.kt)("td",null,"Yi Liu"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://people.apache.org/committer-index.html#yui"},"yui")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/HessTina-YuI"},"HessTina-YuI")),(0,a.kt)("td",null,"PMC"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/dragon-zhang"},(0,a.kt)("img",{width:"64",src:"https://avatars.githubusercontent.com/u/38336731?v=4"}))),(0,a.kt)("td",null,"ZiCheng Zhang"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://people.apache.org/committer-index.html#zhangzicheng"},"zhangzicheng")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/dragon-zhang"},"dragon-zhang")),(0,a.kt)("td",null,"PMC"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/JooKS-me"},(0,a.kt)("img",{width:"64",src:"https://avatars.githubusercontent.com/u/62384022?v=4"}))),(0,a.kt)("td",null,"Kunshuai Zhu"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://people.apache.org/committer-index.html#jooks"},"jooks")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/JooKS-me"},"JooKS-me")),(0,a.kt)("td",null,"PMC"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/midnight2104"},(0,a.kt)("img",{width:"64",src:"https://avatars.githubusercontent.com/u/13334620?v=4"}))),(0,a.kt)("td",null,"Liang Liu"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://people.apache.org/committer-index.html#midnight2104"},"midnight2104")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/midnight2104"},"midnight2104")),(0,a.kt)("td",null,"PMC"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/li-keguo"},(0,a.kt)("img",{width:"64",src:"https://avatars.githubusercontent.com/u/33576070?v=4"}))),(0,a.kt)("td",null,"Keguo Li"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://people.apache.org/committer-index.html#likeguo"},"likeguo")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/li-keguo"},"li-keguo")),(0,a.kt)("td",null,"PMC"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/impactCn"},(0,a.kt)("img",{width:"64",src:"https://avatars.githubusercontent.com/u/35489877?v=4"}))),(0,a.kt)("td",null,"SiYing Zheng"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://people.apache.org/committer-index.html#impactcn"},"impactcn")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/impactCn"},"impactCn")),(0,a.kt)("td",null,"PMC"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/KevinClair"},(0,a.kt)("img",{width:"64",src:"https://avatars.githubusercontent.com/u/37257651?v=4"}))),(0,a.kt)("td",null,"MingJie Song"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://people.apache.org/committer-index.html#kevinclair"},"kevinclair")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/KevinClair"},"KevinClair")),(0,a.kt)("td",null,"PMC"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/fengzhenbing"},(0,a.kt)("img",{width:"64",src:"https://avatars.githubusercontent.com/u/4169359?v=4"}))),(0,a.kt)("td",null,"Zhenbing Feng"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://people.apache.org/committer-index.html#fengzhenbing"},"fengzhenbing")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/fengzhenbing"},"fengzhenbing")),(0,a.kt)("td",null,"PMC"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/asxing"},(0,a.kt)("img",{width:"64",src:"https://avatars.githubusercontent.com/u/22816271?v=4"}))),(0,a.kt)("td",null,"Asxing"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://people.apache.org/committer-index.html#asxing"},"asxing")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/asxing"},"asxing")),(0,a.kt)("td",null,"PMC"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/lw1243925457"},(0,a.kt)("img",{width:"64",src:"https://avatars.githubusercontent.com/u/11513436?v=4"}))),(0,a.kt)("td",null,"Wei Liu"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://people.apache.org/committer-index.html#lw1243925457"},"lw1243925457")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/lw1243925457"},"lw1243925457")),(0,a.kt)("td",null,"PMC"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/prFor"},(0,a.kt)("img",{width:"64",src:"https://avatars.githubusercontent.com/u/4089611?v=4"}))),(0,a.kt)("td",null,"Bin Chen"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://people.apache.org/committer-index.html#sixh"},"sixh")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/prFor"},"prFor")),(0,a.kt)("td",null,"Committer"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/haibo-duan"},(0,a.kt)("img",{width:"64",src:"https://avatars.githubusercontent.com/u/7974845?v=4"}))),(0,a.kt)("td",null,"Haibo Duan"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://people.apache.org/committer-index.html#haiboduan"},"haiboduan")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/haibo-duan"},"haibo-duan")),(0,a.kt)("td",null,"Committer"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/renzhuyan"},(0,a.kt)("img",{width:"64",src:"https://avatars.githubusercontent.com/u/21033025?v=4"}))),(0,a.kt)("td",null,"RenZhu Yan"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://people.apache.org/committer-index.html#renzhuyan"},"renzhuyan")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/renzhuyan"},"renzhuyan")),(0,a.kt)("td",null,"Committer"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/hgaol"},(0,a.kt)("img",{width:"64",src:"https://avatars.githubusercontent.com/u/11908658?v=4"}))),(0,a.kt)("td",null,"Han Gao"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://people.apache.org/committer-index.html#gaohan"},"gaohan")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/hgaol"},"hgaol")),(0,a.kt)("td",null,"Committer"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/hutaishi"},(0,a.kt)("img",{width:"64",src:"https://avatars.githubusercontent.com/u/12478263?v=4"}))),(0,a.kt)("td",null,"TaiShi Hu"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://people.apache.org/committer-index.html#hutaishi"},"hutaishi")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/hutaishi"},"hutaishi")),(0,a.kt)("td",null,"Committer"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/daiwenyu"},(0,a.kt)("img",{width:"64",src:"https://avatars.githubusercontent.com/u/16659386?v=4"}))),(0,a.kt)("td",null,"WenYu Dai"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://people.apache.org/committer-index.html#dayu"},"dayu")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/daiwenyu"},"daiwenyu")),(0,a.kt)("td",null,"Committer"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/lxl910128"},(0,a.kt)("img",{width:"64",src:"https://avatars.githubusercontent.com/u/8736745?v=4"}))),(0,a.kt)("td",null,"XiaoLong Luo"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://people.apache.org/committer-index.html#luoxiaolong"},"luoxiaolong")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/lxl910128"},"lxl910128")),(0,a.kt)("td",null,"Committer"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/ttttangzhen"},(0,a.kt)("img",{width:"64",src:"https://avatars.githubusercontent.com/u/74766688?v=4"}))),(0,a.kt)("td",null,"Zhen Tang"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://people.apache.org/committer-index.html#alextang"},"alextang")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/ttttangzhen"},"ttttangzhen")),(0,a.kt)("td",null,"Committer"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/fightingting"},(0,a.kt)("img",{width:"64",src:"https://avatars.githubusercontent.com/u/31699402?v=4"}))),(0,a.kt)("td",null,"TingTing Wang"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://people.apache.org/committer-index.html#fightingting"},"fightingting")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/fightingting"},"fightingting")),(0,a.kt)("td",null,"Committer"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/kimmking"},(0,a.kt)("img",{width:"64",src:"https://avatars.githubusercontent.com/u/807508?v=4"}))),(0,a.kt)("td",null,"Kimm King"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://people.apache.org/committer-index.html#kimmking"},"kimmking")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/kimmking"},"kimmking")),(0,a.kt)("td",null,"Committer"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/0x12FD16B"},(0,a.kt)("img",{width:"64",src:"https://avatars.githubusercontent.com/u/8335369?v=4"}))),(0,a.kt)("td",null,"David Liu"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://people.apache.org/committer-index.html#hex12fd16b"},"hex12fd16b")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/0x12FD16B"},"0x12FD16B")),(0,a.kt)("td",null,"Committer"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/huangxfchn"},(0,a.kt)("img",{width:"64",src:"https://avatars.githubusercontent.com/u/17267069?v=4"}))),(0,a.kt)("td",null,"XiaoFeng Huang"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://people.apache.org/committer-index.html#huangxfchn"},"huangxfchn")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/huangxfchn"},"huangxfchn")),(0,a.kt)("td",null,"Committer"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/xlgm"},(0,a.kt)("img",{width:"64",src:"https://avatars.githubusercontent.com/u/11422929?v=4"}))),(0,a.kt)("td",null,"Meng Gao"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://people.apache.org/committer-index.html#zjntgao"},"zjntgao")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/xlgm"},"xlgm")),(0,a.kt)("td",null,"Committer"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/SteNicholas"},(0,a.kt)("img",{width:"64",src:"https://avatars.githubusercontent.com/u/10048174?v=4"}))),(0,a.kt)("td",null,"Nicholas Jiang"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://people.apache.org/committer-index.html#nicholasjiang"},"nicholasjiang")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/SteNicholas"},"SteNicholas")),(0,a.kt)("td",null,"Committer"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/ccloomi"},(0,a.kt)("img",{width:"64",src:"https://avatars.githubusercontent.com/u/8596174?v=4"}))),(0,a.kt)("td",null,"Xianjun Chen"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://people.apache.org/committer-index.html#ccloomi"},"ccloomi")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/ccloomi"},"ccloomi")),(0,a.kt)("td",null,"Committer"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://github.com/moremind"},(0,a.kt)("img",{width:"64",src:"https://avatars.githubusercontent.com/u/20184263?v=4"}))),(0,a.kt)("td",null,"Fengen He"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://people.apache.org/committer-index.html#hefengen"},"hefengen")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/moremind"},"moremind")),(0,a.kt)("td",null,"Committer"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/lishuo5263"},(0,a.kt)("img",{width:"64",src:"https://avatars.githubusercontent.com/u/19170961?v=4"}))),(0,a.kt)("td",null,"Shuo Li"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://people.apache.org/committer-index.html#lishuo"},"lishuo")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/lishuo5263"},"lishuo5263")),(0,a.kt)("td",null,"Committer"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/lahmxu"},(0,a.kt)("img",{width:"64",src:"https://avatars.githubusercontent.com/u/31627887?v=4"}))),(0,a.kt)("td",null,"Jun Xu"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://people.apache.org/committer-index.html#lahmxu"},"lahmxu")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/lahmxu"},"lahmxu")),(0,a.kt)("td",null,"Committer"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/yunlongn"},(0,a.kt)("img",{width:"64",src:"https://avatars.githubusercontent.com/u/38271111?v=4"}))),(0,a.kt)("td",null,"Yunlong Lee"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://people.apache.org/committer-index.html#yunlong"},"yunlong")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/yunlongn"},"yunlongn")),(0,a.kt)("td",null,"Committer"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/zhc00"},(0,a.kt)("img",{width:"64",src:"https://avatars.githubusercontent.com/u/104989765?v=4"}))),(0,a.kt)("td",null,"Haochao Zhuang"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://people.apache.org/committer-index.html#daming"},"daming")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/zhc00"},"zhc00")),(0,a.kt)("td",null,"Committer"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/mahaitao617"},(0,a.kt)("img",{width:"64",src:"https://avatars.githubusercontent.com/u/12776225?v=4"}))),(0,a.kt)("td",null,"mahaitao"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://people.apache.org/committer-index.html#mahaitao"},"mahaitao")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/mahaitao617"},"mahaitao617")),(0,a.kt)("td",null,"Committer"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://github.com/ShawnJim"},(0,a.kt)("img",{width:"64",src:"https://avatars.githubusercontent.com/u/32192263?v=4"}))),(0,a.kt)("td",null,"Zhenxiao Jin"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://people.apache.org/committer-index.html#jinzhenxiao"},"jinzhenxiao")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"http://github.com/ShawnJim"},"Shawn Jim")),(0,a.kt)("td",null,"Committer"),(0,a.kt)("td",null))),(0,a.kt)("h2",{id:"\u8d21\u732e\u8005"},"\u8d21\u732e\u8005"),(0,a.kt)("p",null,"\u76ee\u524d\u5df2\u7ecf\u6709\u4e0a\u767e\u4f4d\u5c0f\u4f19\u4f34\u4e3aApache ShenYu \u8d21\u732e\u4e86\u6587\u7ae0\u548c\u4ee3\u7801\uff0c\u975e\u5e38\u611f\u8c22\u4ed6\u4eec\uff01"),(0,a.kt)("p",null,"\u60f3\u8981\u53c2\u4e0e\u8d21\u732e\uff0c\u53ef\u4ee5\u76f4\u63a5\u53bb",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/shenyu/"},"Apache ShenYu"),"\uff0c\u5e76fork\u3002"),(0,a.kt)("h3",{id:"apache-shenyu"},(0,a.kt)("a",{parentName:"h3",href:"https://github.com/apache/shenyu"},"Apache ShenYu")),(0,a.kt)(u,{repo:"apache/shenyu",mdxType:"Contributors"}),(0,a.kt)("h3",{id:"apache-shenyu-dashboard"},(0,a.kt)("a",{parentName:"h3",href:"https://github.com/apache/shenyu-dashboard"},"Apache ShenYu Dashboard")),(0,a.kt)(u,{repo:"apache/shenyu-dashboard",mdxType:"Contributors"}),(0,a.kt)("h3",{id:"apache-shenyu-website"},(0,a.kt)("a",{parentName:"h3",href:"https://github.com/apache/shenyu-website"},"Apache ShenYu Website")),(0,a.kt)(u,{repo:"apache/shenyu-website",mdxType:"Contributors"}),(0,a.kt)("h3",{id:"apache-shenyu-helm-chart"},(0,a.kt)("a",{parentName:"h3",href:"https://github.com/apache/shenyu-helm-chart"},"Apache ShenYu Helm Chart")),(0,a.kt)(u,{repo:"apache/shenyu-helm-chart",mdxType:"Contributors"}),(0,a.kt)("h3",{id:"apache-shenyu-nginx"},(0,a.kt)("a",{parentName:"h3",href:"https://github.com/apache/shenyu-nginx"},"Apache ShenYu Nginx")),(0,a.kt)(u,{repo:"apache/shenyu-nginx",mdxType:"Contributors"}),(0,a.kt)("h3",{id:"apache-shenyu-client-python"},(0,a.kt)("a",{parentName:"h3",href:"https://github.com/apache/shenyu-client-python"},"Apache ShenYu Client Python")),(0,a.kt)(u,{repo:"apache/shenyu-client-python",mdxType:"Contributors"}),(0,a.kt)("h3",{id:"apache-shenyu-client-dotnet"},(0,a.kt)("a",{parentName:"h3",href:"https://github.com/apache/shenyu-client-dotnet"},"Apache ShenYu Client Dotnet")),(0,a.kt)(u,{repo:"apache/shenyu-client-dotnet",mdxType:"Contributors"}),(0,a.kt)("h3",{id:"apache-shenyu-client-golang"},(0,a.kt)("a",{parentName:"h3",href:"https://github.com/apache/shenyu-client-golang"},"Apache ShenYu Client Golang")),(0,a.kt)(u,{repo:"apache/shenyu-client-golang",mdxType:"Contributors"}))}p.isMDXComponent=!0}}]);