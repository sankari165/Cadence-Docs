"use strict";(self.webpackChunkcadence=self.webpackChunkcadence||[]).push([[8770],{7770:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var i=n(1230),s=n(4848),a=n(8453);const o={title:"Bad practices and Anti-patterns with Cadence (Part 1)",date:new Date("2023-07-10T00:00:00.000Z"),authors:"chopincode",tags:["introduction-to-cadence","deep-dive"]},r=void 0,c={authorsImageUrls:[void 0]},d=[];function l(e){const t={code:"code",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"In the upcoming blog series, we will delve into a discussion about common bad practices and anti-patterns related to Cadence. As diverse teams often encounter distinct business use cases, it becomes imperative to address the most frequently reported issues in Cadence workflows. To provide valuable insights and guidance, the Cadence team has meticulously compiled these common challenges based on customer feedback."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Reusing the same workflow ID for very active/continuous running workflows"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Cadence organizes workflows based on their unique IDs, using a process called ",(0,s.jsx)("b",{children:"partitioning"}),". If a workflow receives a large number of updates in a short period of time or frequently starts new runs using the ",(0,s.jsx)(t.code,{children:"continueAsNew"}),' function, all these updates will be directed to the same shard. Unfortunately, the Cadence backend is not equipped to handle this concentrated workload efficiently. As a result, a situation known as a "hot shard" arises, overloading the Cadence backend and worsening the problem.']}),"\n",(0,s.jsx)(t.p,{children:"Solution:\nWell, the best way to avoid this is simply just design your workflow in the way such that each workflow owns a uniformly distributed workflow ID across your Cadence domain. This will make sure that Cadence backend is able to evenly distribute the traffic with proper partition on your workflowIDs."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Excessive batch jobs or an enormous number of timers triggered at the same time"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Cadence has the capability to handle a large number of concurrent tasks initiated simultaneously, but tampering with this feature can lead to issues within the Cadence system. Consider a scenario where millions of jobs are scheduled to start at the same time and are expected to finish within a specific time interval. Cadence faces the challenge of understanding the desired behavior of customers in such cases. It is uncertain whether the intention is to complete all jobs simultaneously, provide progressive updates in parallel, or finish all jobs before a given deadline. This ambiguity arises due to the independent nature of each job and the difficulty in predicting their outcomes."}),"\n",(0,s.jsxs)(t.p,{children:["Moreover, Cadence workers utilize a sticky cache by default to optimize the runtime of workflows. However, when an overwhelming number of parallel workflows cannot fit into the cache, it can result in ",(0,s.jsx)("b",{children:"cache thrashing"}),". This, in turn, leads to a quadratic increase in runtime complexity, specifically O(n^2), exacerbating the overall performance of the system."]}),"\n",(0,s.jsx)(t.p,{children:"Solution:\nThere are multiple ways to address this issue. Customers can either run jobs in a smaller batch or use start workflow jitter to randomly distribute timers within certain timeframe."})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var i=n(6540);const s={},a=i.createContext(s);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:t},e.children)}},1230:e=>{e.exports=JSON.parse('{"permalink":"/Cadence-Docs/blog/2023/07/10/cadence-bad-practices-part-1","editUrl":"https://github.com/cadence-workflow/Cadence-Docs/tree/master/blog/2023-07-10-cadence-bad-practices-part-1.md","source":"@site/blog/2023-07-10-cadence-bad-practices-part-1.md","title":"Bad practices and Anti-patterns with Cadence (Part 1)","description":"In the upcoming blog series, we will delve into a discussion about common bad practices and anti-patterns related to Cadence. As diverse teams often encounter distinct business use cases, it becomes imperative to address the most frequently reported issues in Cadence workflows. To provide valuable insights and guidance, the Cadence team has meticulously compiled these common challenges based on customer feedback.","date":"2023-07-10T00:00:00.000Z","tags":[{"inline":false,"label":"Introduction to Cadence","permalink":"/Cadence-Docs/blog/tags/introduction-to-cadence","description":"Introduction to Cadence tag description"},{"inline":false,"label":"Deep Dives","permalink":"/Cadence-Docs/blog/tags/deep-dives","description":"Deep Dives tag description"}],"readingTime":2.065,"hasTruncateMarker":true,"authors":[{"name":"Chris Qin","title":"Applications Developer @ Uber","url":"https://www.linkedin.com/in/chrisqin0610/","page":{"permalink":"/Cadence-Docs/blog/authors/chopincode"},"socials":{"linkedin":"https://www.linkedin.com/in/chrisqin0610/","github":"https://github.com/chopincode"},"imageURL":"https://github.com/chopincode.png","key":"chopincode"}],"frontMatter":{"title":"Bad practices and Anti-patterns with Cadence (Part 1)","date":"2023-07-10T00:00:00.000Z","authors":"chopincode","tags":["introduction-to-cadence","deep-dive"]},"unlisted":false,"prevItem":{"title":"Write your first workflow with Cadence","permalink":"/Cadence-Docs/blog/2023/07/16/2023-07-16-write-your-first-workflow-with-cadence/write-your-first-workflow-with-cadence"},"nextItem":{"title":"Implement a Cadence worker service from scratch","permalink":"/Cadence-Docs/blog/2023/07/05/implement-cadence-worker-from-scratch"}}')}}]);