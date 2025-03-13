"use strict";(self.webpackChunkcadence=self.webpackChunkcadence||[]).push([[4120],{1493:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var o=t(9871),a=t(4848),i=t(8453);const c={title:"Understanding components of Cadence application",date:new Date("2023-07-01T00:00:00.000Z"),authors:"chopincode",tags:["deep-dive","introduction-to-cadence"]},r=void 0,s={authorsImageUrls:[void 0]},l=[];function d(e){const n={li:"li",ol:"ol",p:"p",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Cadence is a powerful, scalable, and fault-tolerant workflow orchestration framework that helps developers implement and manage complex workflow tasks. In most cases, developers contribute activities and workflows directly to their codebases, and they may not have a full understanding of the components behind a running Cadence application. We receive numerous inquiries about setting up Cadence in a local environment from scratch for testing. Therefore, in this article, we will explore the components that power a Cadence cluster."}),"\n",(0,a.jsx)(n.p,{children:"There are three critical components that are essential for any Cadence application:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"A running Cadence backend server."}),"\n",(0,a.jsx)(n.li,{children:"A registered Cadence domain."}),"\n",(0,a.jsx)(n.li,{children:"A running Cadence worker that registers all workflows and activities."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Let's go over these components in more details."})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>r});var o=t(6540);const a={},i=o.createContext(a);function c(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),o.createElement(i.Provider,{value:n},e.children)}},9871:e=>{e.exports=JSON.parse('{"permalink":"/Cadence-Docs/blog/2023/06/28/components-of-cadence-application-setup","editUrl":"https://github.com/cadence-workflow/Cadence-Docs/tree/master/blog/2023-06-28-components-of-cadence-application-setup.md","source":"@site/blog/2023-06-28-components-of-cadence-application-setup.md","title":"Understanding components of Cadence application","description":"Cadence is a powerful, scalable, and fault-tolerant workflow orchestration framework that helps developers implement and manage complex workflow tasks. In most cases, developers contribute activities and workflows directly to their codebases, and they may not have a full understanding of the components behind a running Cadence application. We receive numerous inquiries about setting up Cadence in a local environment from scratch for testing. Therefore, in this article, we will explore the components that power a Cadence cluster.","date":"2023-07-01T00:00:00.000Z","tags":[{"inline":false,"label":"Deep Dives","permalink":"/Cadence-Docs/blog/tags/deep-dives","description":"Deep Dives tag description"},{"inline":false,"label":"Introduction to Cadence","permalink":"/Cadence-Docs/blog/tags/introduction-to-cadence","description":"Introduction to Cadence tag description"}],"readingTime":1.615,"hasTruncateMarker":true,"authors":[{"name":"Chris Qin","title":"Applications Developer @ Uber","url":"https://www.linkedin.com/in/chrisqin0610/","page":{"permalink":"/Cadence-Docs/blog/authors/chopincode"},"socials":{"linkedin":"https://www.linkedin.com/in/chrisqin0610/","github":"https://github.com/chopincode"},"imageURL":"https://github.com/chopincode.png","key":"chopincode"}],"frontMatter":{"title":"Understanding components of Cadence application","date":"2023-07-01T00:00:00.000Z","authors":"chopincode","tags":["deep-dive","introduction-to-cadence"]},"unlisted":false,"prevItem":{"title":"Implement a Cadence worker service from scratch","permalink":"/Cadence-Docs/blog/2023/07/05/implement-cadence-worker-from-scratch"},"nextItem":{"title":"Cadence Community Spotlight Update - June 2023","permalink":"/Cadence-Docs/blog/2023/06/30/community-spotlight-june-2023"}}')}}]);