"use strict";(self.webpackChunkcadence=self.webpackChunkcadence||[]).push([[5371],{1715:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var o=t(9871),a=t(4848),i=t(8453);const r={title:"Understanding components of Cadence application",date:new Date("2023-07-01T00:00:00.000Z"),authors:"chopincode",tags:["deep-dive","introduction-to-cadence"]},s=void 0,c={authorsImageUrls:[void 0]},l=[];function d(e){const n={a:"a",li:"li",ol:"ol",p:"p",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Cadence is a powerful, scalable, and fault-tolerant workflow orchestration framework that helps developers implement and manage complex workflow tasks. In most cases, developers contribute activities and workflows directly to their codebases, and they may not have a full understanding of the components behind a running Cadence application. We receive numerous inquiries about setting up Cadence in a local environment from scratch for testing. Therefore, in this article, we will explore the components that power a Cadence cluster."}),"\n",(0,a.jsx)(n.p,{children:"There are three critical components that are essential for any Cadence application:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"A running Cadence backend server."}),"\n",(0,a.jsx)(n.li,{children:"A registered Cadence domain."}),"\n",(0,a.jsx)(n.li,{children:"A running Cadence worker that registers all workflows and activities."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Let's go over these components in more details."}),"\n",(0,a.jsxs)(n.p,{children:["The Cadence backend serves as the heart of your Cadence application. It is responsible for processing and scheduling your workflows and activities. While the backend relies on various dependencies, our team has conveniently packaged them into a single Docker image. You can follow the instructions provided ",(0,a.jsx)(n.a,{href:"/docs/get-started/server-installation",children:"here"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"The Cadence domain functions as the namespace for your Cadence workflows. It helps segregate your workflows into manageable groups. When running workflows, you must specify the domain on which you want to execute them."}),"\n",(0,a.jsx)(n.p,{children:"The Cadence worker, also known as the worker service, is a separate binary process that you need to implement in order to host your workflows and activities. When developing a worker, ensure that all your workflows and activities are properly registered with it. The worker is an actively running application, and you have the freedom to choose the hosting technologies that best suit your needs, such as a simple HTTP or gRPC application."}),"\n",(0,a.jsx)(n.p,{children:"Ultimately, you will need to set up two running processes on your local machine: the Cadence server and the worker. Additionally, you must register the Cadence domain as a resource. Our team has packaged all these components into user-friendly tools, which you can find on our website."})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>s});var o=t(6540);const a={},i=o.createContext(a);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),o.createElement(i.Provider,{value:n},e.children)}},9871:e=>{e.exports=JSON.parse('{"permalink":"/Cadence-Docs/blog/2023/06/28/components-of-cadence-application-setup","editUrl":"https://github.com/cadence-workflow/Cadence-Docs/tree/master/blog/2023-06-28-components-of-cadence-application-setup.md","source":"@site/blog/2023-06-28-components-of-cadence-application-setup.md","title":"Understanding components of Cadence application","description":"Cadence is a powerful, scalable, and fault-tolerant workflow orchestration framework that helps developers implement and manage complex workflow tasks. In most cases, developers contribute activities and workflows directly to their codebases, and they may not have a full understanding of the components behind a running Cadence application. We receive numerous inquiries about setting up Cadence in a local environment from scratch for testing. Therefore, in this article, we will explore the components that power a Cadence cluster.","date":"2023-07-01T00:00:00.000Z","tags":[{"inline":false,"label":"Deep Dives","permalink":"/Cadence-Docs/blog/tags/deep-dives","description":"Deep Dives tag description"},{"inline":false,"label":"Introduction to Cadence","permalink":"/Cadence-Docs/blog/tags/introduction-to-cadence","description":"Introduction to Cadence tag description"}],"readingTime":1.615,"hasTruncateMarker":true,"authors":[{"name":"Chris Qin","title":"Applications Developer @ Uber","url":"https://www.linkedin.com/in/chrisqin0610/","page":{"permalink":"/Cadence-Docs/blog/authors/chopincode"},"socials":{"linkedin":"https://www.linkedin.com/in/chrisqin0610/","github":"https://github.com/chopincode"},"imageURL":"https://github.com/chopincode.png","key":"chopincode"}],"frontMatter":{"title":"Understanding components of Cadence application","date":"2023-07-01T00:00:00.000Z","authors":"chopincode","tags":["deep-dive","introduction-to-cadence"]},"unlisted":false,"prevItem":{"title":"Implement a Cadence worker service from scratch","permalink":"/Cadence-Docs/blog/2023/07/05/implement-cadence-worker-from-scratch"},"nextItem":{"title":"Cadence Community Spotlight Update - June 2023","permalink":"/Cadence-Docs/blog/2023/06/30/community-spotlight-june-2023"}}')}}]);