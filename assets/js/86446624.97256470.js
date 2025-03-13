"use strict";(self.webpackChunkcadence=self.webpackChunkcadence||[]).push([[55],{9078:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"go-client/activities","title":"Activity overview","description":"An is the implementation of a particular in the business logic.","source":"@site/docs/05-go-client/04-activities.md","sourceDirName":"05-go-client","slug":"/go-client/activities","permalink":"/Cadence-Docs/docs/go-client/activities","draft":false,"unlisted":false,"editUrl":"https://github.com/cadence-workflow/Cadence-Docs/tree/master/docs/05-go-client/04-activities.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"layout":"default","title":"Activity overview","permalink":"/docs/go-client/activities"},"sidebar":"docsSidebar","previous":{"title":"Starting workflows","permalink":"/Cadence-Docs/docs/go-client/starting-workflows"},"next":{"title":"Executing activities","permalink":"/Cadence-Docs/docs/go-client/execute-activity"}}');var a=i(4848),r=i(8453);const o={layout:"default",title:"Activity overview",permalink:"/docs/go-client/activities"},c="Activity overview",s={},l=[{value:"Overview",id:"overview",level:2},{value:"Declaration",id:"declaration",level:3},{value:"Implementation",id:"implementation",level:3},{value:"Heart Beating",id:"heart-beating",level:4},{value:"Cancellation",id:"cancellation",level:4},{value:"Registration",id:"registration",level:3},{value:"Failing an Activity",id:"failing-an-activity",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"activity-overview",children:"Activity overview"})}),"\n",(0,a.jsx)(t.p,{children:"An activity is the implementation of a particular task in the business logic."}),"\n",(0,a.jsxs)(t.p,{children:["Activities are implemented as functions. Data can be passed directly to an activity via function\nparameters. The parameters can be either basic types or structs, with the only requirement being that\nthe parameters must be serializable. Though it is not required, we recommend that the first parameter\nof an activity function is of type ",(0,a.jsx)(t.code,{children:"context.Context"}),", in order to allow the activity to interact with\nother framework methods. The function must return an ",(0,a.jsx)(t.code,{children:"error"})," value, and can optionally return a result\nvalue. The result value can be either a basic type or a struct with the only requirement being that\nit is serializable."]}),"\n",(0,a.jsx)(t.p,{children:"The values passed to activities through invocation parameters or returned through the result value\nare recorded in the execution history. The entire execution history is transferred from the Cadence\nservice to workflow_workers with every event that the workflow logic needs to process. A large execution\nhistory can thus adversely impact the performance of your workflow. Therefore, be mindful of the amount\nof data you transfer via activity invocation parameters or return values. Otherwise, no additional\nlimitations exist on activity implementations."}),"\n",(0,a.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsx)(t.p,{children:"The following example demonstrates a simple activity that accepts a string parameter, appends a word\nto it, and then returns a result."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",children:'package simple\n\nimport (\n    "context"\n\n    "go.uber.org/cadence/activity"\n    "go.uber.org/zap"\n)\n\nfunc init() {\n    activity.Register(SimpleActivity)\n}\n\n// SimpleActivity is a sample Cadence activity function that takes one parameter and\n// returns a string containing the parameter value.\nfunc SimpleActivity(ctx context.Context, value string) (string, error) {\n    activity.GetLogger(ctx).Info("SimpleActivity called.", zap.String("Value", value))\n    return "Processed: " + value, nil\n}\n'})}),"\n",(0,a.jsx)(t.p,{children:"Let's take a look at each component of this activity."}),"\n",(0,a.jsx)(t.h3,{id:"declaration",children:"Declaration"}),"\n",(0,a.jsx)(t.p,{children:"In the Cadence programing model, an activity is implemented with a function. The function declaration specifies the parameters the activity accepts as well as any values it might return. An activity function can take zero or many activity specific parameters and can return one or two values. It must always at least return an error value. The activity function can accept as parameters and return as results any serializable type."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.code,{children:"func SimpleActivity(ctx context.Context, value string) (string, error)"})}),"\n",(0,a.jsx)(t.p,{children:"The first parameter to the function is context.Context. This is an optional parameter and can be omitted. This parameter is the standard Go context.\nThe second string parameter is a custom activity specific parameter that can be used to pass data into the activity on start. An activity can have one or more such parameters. All parameters to an activity function must be serializable, which essentially means that params can\u2019t be channels, functions, variadic, or unsafe pointers.\nThe activity declares two return values: string and error. The string return value is used to return the result of the activity. The error return value is used to indicate that an error was encountered during execution."}),"\n",(0,a.jsx)(t.h3,{id:"implementation",children:"Implementation"}),"\n",(0,a.jsx)(t.p,{children:"You can write activity implementation code in the same way that you would any other Go service code.\nAdditionally, you can use the usual loggers and metrics controllers, and the standard Go concurrency\nconstructs."}),"\n",(0,a.jsx)(t.h4,{id:"heart-beating",children:"Heart Beating"}),"\n",(0,a.jsx)(t.p,{children:"For long-running activities, Cadence provides an API for the activity code to report both liveness and\nprogress back to the Cadence managed service."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",children:"progress := 0\nfor hasWork {\n    // Send heartbeat message to the server.\n    cadence.RecordActivityHeartbeat(ctx, progress)\n    // Do some work.\n    ...\n    progress++\n}\n"})}),"\n",(0,a.jsxs)(t.p,{children:["When an activity times out due to a missed heartbeat, the last value of the details (",(0,a.jsx)(t.code,{children:"progress"})," in the\nabove sample) is returned from the ",(0,a.jsx)(t.code,{children:"cadence.ExecuteActivity"})," function as the details field of ",(0,a.jsx)(t.code,{children:"TimeoutError"}),"\nwith ",(0,a.jsx)(t.code,{children:"TimeoutType_HEARTBEAT"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["New ",(0,a.jsx)(t.strong,{children:"auto heartbeat"})," option in ",(0,a.jsx)(t.a,{href:"https://github.com/cadence-workflow/cadence-go-client/releases/tag/v0.17.0",children:"Cadence Go Client 0.17.0 release"}),":\nIn case you don't need to report progress, but still want to report liveness of your worker through heartbeating for your long running activities, there's a new auto-heartbeat option that you can enable when you register your activity. When this option is enabled Cadence library will do the heartbeat for you in the background."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",children:"\tRegisterActivityOptions struct {\n\t\t...\n\t\t// Automatically send heartbeats for this activity at an interval that is less than the HeartbeatTimeout.\n\t\t// This option has no effect if the activity is executed with a HeartbeatTimeout of 0.\n\t\t// Default: false\n\t\tEnableAutoHeartbeat bool\n\t}\n"})}),"\n",(0,a.jsx)(t.p,{children:"You can also heartbeat an activity from an external source:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",children:"// Instantiate a Cadence service client.\ncadence.Client client = cadence.NewClient(...)\n\n// Record heartbeat.\nerr := client.RecordActivityHeartbeat(taskToken, details)\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The parameters of the ",(0,a.jsx)(t.code,{children:"RecordActivityHeartbeat"})," function are:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"taskToken"}),": The value of the binary ",(0,a.jsx)(t.code,{children:"TaskToken"})," field of the ",(0,a.jsx)(t.code,{children:"ActivityInfo"})," struct retrieved inside\nthe activity."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"details"}),": The serializable payload containing progress information."]}),"\n"]}),"\n",(0,a.jsx)(t.h4,{id:"cancellation",children:"Cancellation"}),"\n",(0,a.jsxs)(t.p,{children:["When an activity is cancelled, or its workflow_execution has completed or failed, the context passed\ninto its function is cancelled, which sets its channel\u2019s closed state to ",(0,a.jsx)(t.code,{children:"Done"}),". An activity can use that\nto perform any necessary cleanup and abort its execution. Cancellation is only delivered to activities\nthat call ",(0,a.jsx)(t.code,{children:"RecordActivityHeartbeat"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"registration",children:"Registration"}),"\n",(0,a.jsxs)(t.p,{children:["To make the activity visible to the worker process hosting it, the activity must be registered via a\ncall to ",(0,a.jsx)(t.code,{children:"activity.Register"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",children:"func init() {\n    activity.Register(SimpleActivity)\n}\n"})}),"\n",(0,a.jsx)(t.p,{children:"This call creates an in-memory mapping inside the worker process between the fully qualified function\nname and the implementation. If a worker receives a request to start an activity execution for an\nactivity type it does not know, it will fail that request."}),"\n",(0,a.jsx)(t.h2,{id:"failing-an-activity",children:"Failing an Activity"}),"\n",(0,a.jsxs)(t.p,{children:["To mark an activity as failed, the activity function must return an error via the ",(0,a.jsx)(t.code,{children:"error"})," return value."]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>c});var n=i(6540);const a={},r=n.createContext(a);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);