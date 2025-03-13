"use strict";(self.webpackChunkcadence=self.webpackChunkcadence||[]).push([[1032],{9930:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"go-client/signals","title":"Signals","description":"Signalsworkflow:. Previously, you had","source":"@site/docs/05-go-client/09-signals.md","sourceDirName":"05-go-client","slug":"/go-client/signals","permalink":"/Cadence-Docs/docs/go-client/signals","draft":false,"unlisted":false,"editUrl":"https://github.com/cadence-workflow/Cadence-Docs/tree/master/docs/05-go-client/09-signals.md","tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"layout":"default","title":"Signals","permalink":"/docs/go-client/signals"},"sidebar":"docsSidebar","previous":{"title":"Error handling","permalink":"/Cadence-Docs/docs/go-client/error-handling"},"next":{"title":"Continue as new","permalink":"/Cadence-Docs/docs/go-client/continue-as-new"}}');var o=t(4848),i=t(8453);const s={layout:"default",title:"Signals",permalink:"/docs/go-client/signals"},r="Signals",l={},c=[{value:"SignalWithStart",id:"signalwithstart",level:2}];function d(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.header,{children:(0,o.jsx)(e.h1,{id:"signals",children:"Signals"})}),"\n",(0,o.jsx)(e.p,{children:"Signals provide a mechanism to send data directly to a running workflow. Previously, you had\ntwo options for passing data to the workflow implementation:"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"Via start parameters"}),"\n",(0,o.jsx)(e.li,{children:"As return values from activities"}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:"With start parameters, we could only pass in values before workflow_execution began."}),"\n",(0,o.jsx)(e.p,{children:"Return values from activities allowed us to pass information to a running workflow, but this\napproach comes with its own complications. One major drawback is reliance on polling. This means\nthat the data needs to be stored in a third-party location until it's ready to be picked up by\nthe activity. Further, the lifecycle of this activity requires management, and the activity\nrequires manual restart if it fails before acquiring the data."}),"\n",(0,o.jsx)(e.p,{children:"Signals, on the other hand, provide a fully asynchronous and durable mechanism for providing data to\na running workflow. When a signal is received for a running workflow, Cadence persists the event\nand the payload in the workflow history. The workflow can then process the signal at any time\nafterwards without the risk of losing the information. The workflow also has the option to stop\nexecution by blocking on a signal channel."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-go",children:'var signalVal string\nsignalChan := workflow.GetSignalChannel(ctx, signalName)\n\ns := workflow.NewSelector(ctx)\ns.AddReceive(signalChan, func(c workflow.Channel, more bool) {\n    c.Receive(ctx, &signalVal)\n    workflow.GetLogger(ctx).Info("Received signal!", zap.String("signal", signalName), zap.String("value", signalVal))\n})\ns.Select(ctx)\n\nif len(signalVal) > 0 && signalVal != "SOME_VALUE" {\n    return errors.New("signalVal")\n}\n'})}),"\n",(0,o.jsxs)(e.p,{children:["In the example above, the workflow code uses ",(0,o.jsx)(e.strong,{children:"workflow.GetSignalChannel"})," to open a\n",(0,o.jsx)(e.strong,{children:"workflow.Channel"})," for the named signal. We then use a ",(0,o.jsx)(e.strong,{children:"workflow.Selector"})," to wait on this\nchannel and process the payload received with the signal."]}),"\n",(0,o.jsx)(e.h2,{id:"signalwithstart",children:"SignalWithStart"}),"\n",(0,o.jsxs)(e.p,{children:["You may not know if a workflow is running and can accept a signal. The\n",(0,o.jsx)(e.a,{href:"https://godoc.org/go.uber.org/cadence/client#Client",children:"client.SignalWithStartWorkflow"})," API\nallows you to send a signal to the current workflow instance if one exists or to create a new\nrun and then send the signal. ",(0,o.jsx)(e.code,{children:"SignalWithStartWorkflow"})," therefore doesn't take a run_ID as a\nparameter."]})]})}function h(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>s,x:()=>r});var a=t(6540);const o={},i=a.createContext(o);function s(n){const e=a.useContext(i);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:s(n.components),a.createElement(i.Provider,{value:e},n.children)}}}]);