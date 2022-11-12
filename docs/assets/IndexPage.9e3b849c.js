import{c as h,h as D,e as f}from"./QBtn.468c1c85.js";import{u as m,a as A}from"./use-ratio.891577bd.js";import{c as F,h as C,e as a,d as E,f as v,j as w,g as _,q as x,r as d,t as b,u as q,v as n,J as u,x as i,K as l,T as c,y as Q}from"./index.bdae1051.js";var B=h({name:"QVideo",props:{...m,src:{type:String,required:!0},title:String,fetchpriority:{type:String,default:"auto"},loading:{type:String,default:"eager"},referrerpolicy:{type:String,default:"strict-origin-when-cross-origin"}},setup(e){const o=A(e),s=F(()=>"q-video"+(e.ratio!==void 0?" q-video--responsive":""));return()=>C("div",{class:s.value,style:o.value},[C("iframe",{src:e.src,title:e.title,fetchpriority:e.fetchpriority,loading:e.loading,referrerpolicy:e.referrerpolicy,frameborder:"0",allowfullscreen:!0})])}}),S=h({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:o}){const{proxy:{$q:s}}=_(),t=E(v,a);if(t===a)return console.error("QPage needs to be a deep child of QLayout"),a;if(E(w,a)===a)return console.error("QPage needs to be child of QPageContainer"),a;const p=F(()=>{const r=(t.header.space===!0?t.header.size:0)+(t.footer.space===!0?t.footer.size:0);if(typeof e.styleFn=="function"){const g=t.isContainer.value===!0?t.containerHeight.value:s.screen.height;return e.styleFn(r,g)}return{minHeight:t.isContainer.value===!0?t.containerHeight.value-r+"px":s.screen.height===0?r!==0?`calc(100vh - ${r}px)`:"100vh":s.screen.height-r+"px"}}),y=F(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>C("main",{class:y.value,style:p.value},D(o.default))}});const T=u("span",{style:{color:"white",background:"rgb(118, 185, 0)"}},"NVIDIA",-1),j={class:"row items-center justify-evenly",style:{"backdrop-filter":"brightness(0.3)"},id:"intro"},I={class:"col-12 col-lg-6 items-center text-center q-py-xl q-px-lg"},P=u("h6",{class:"text-white"}," \u570B\u7ACB\u81FA\u7063\u5E2B\u7BC4\u5927\u5B78\u570B\u6587\u5B78\u7CFB\u7562\u696D\uFF0C\u6B63\u8077\u662F\u97F3\u6A02\u516C\u53F8\u4F01\u5283\uFF0C\u4E0B\u73ED\u5728 Twitch \u517C\u5DEE\u7576\u6B4C\u624B\u3002 \u66FE\u62FF\u904E\u6D41\u97F3\u4E4B\u661F\u5168\u570B\u9AD8\u4E2D\u8077\u5275\u4F5C\u66A8\u6B4C\u5531\u5927\u8CFD\u7368\u5531\u7D44\u7684\u4E9E\u8ECD\u3001\u653F\u5927\u91D1\u65CB\u734E\u7372\u5F97\u7368\u5531\u7D44\u51A0\u8ECD\uFF0C\u4F4E\u6C89\u7684\u55D3\u97F3\u70BA\u62DB\u724C\u7279\u8272\uFF0C\u6B4C\u8072\u4E2D\u5145\u6EFF\u611F\u60C5\uFF0C\u4E00\u958B\u53E3\u5C31\u4EE4\u4EBA\u60F3\u54ED\uFF0C\u88AB Twitch \u89C0\u773E\u6232\u7A31\u300C\u6BAF\u846C\u7CFB\u6B4C\u624B\u300D\u3002 2022/11/4\u8207\u674E\u4EE5\u6A02\u65BC Wirforce \u6236\u5916\u76F4\u64AD\u5DE7\u9047 Nvidia \u5275\u8FA6\u4EBA\u66A8\u57F7\u884C\u9577 \u9EC3\u4EC1\u52F3\uFF0C\u73FE\u5834\u5373\u8208\u9EDE\u64AD\u300AAlways Remember Us This Way\u300B\u7372\u5F97\u4E00\u7247\u597D\u8A55\u3002 ",-1),$={class:"row items-center justify-evenly"},V={class:"col-12 col-lg-6 items-center text-center q-py-xl q-px-lg"},k=u("h5",{class:"text-white"},"\u6700\u65B0\u55AE\u66F2 \u5BC2\u5BDE\u661F\u7403",-1),H=u("p",{class:"text-white"}," \u5C0F\u738B\u5B50\u66FE\u5C0D\u98DB\u884C\u54E1\u8AAA\u904E\uFF1A\u300C\u7576\u4E00\u500B\u4EBA\u597D\u54C0\u50B7\u597D\u54C0\u50B7\u7684\u6642\u5019\uFF0C\u5C31\u6703\u559C\u6B61\u770B\u843D\u65E5\u3002\u300D\u6240\u4EE5\u4ED6\u5728\u4E00\u5929\u88E1\u770B\u4E86\u56DB\u5341\u4E09\u6B21\u843D\u65E5\u3002 \u6211\u559C\u6B61\u843D\u65E5\uFF0C\u4E5F\u559C\u6B61\u843D\u65E5\u5F8C\u7684\u6EFF\u5929\u661F\u8FB0\u3002 \u6216\u8A31\u6BCF\u500B\u4EBA\u7684\u5FC3\u4E2D\u90FD\u4F4F\u8457\u4E00\u9846\u5BC2\u5BDE\u661F\u7403\uFF0C\u53EA\u6709\u5728\u4E16\u754C\u6C88\u975C\u6642\uFF0C\u624D\u80FD\u9589\u8D77\u773C\u775B\uFF0C\u770B\u898B\u9EDE\u9EDE\u661F\u5149\u3002 \u4F60\u77E5\u9053\u55CE\uFF1F\u6240\u6709\u5927\u4EBA\u90FD\u66FE\u7D93\u662F\u5C0F\u670B\u53CB\uFF0C\u53EA\u662F\u6211\u5011\u90FD\u5FD8\u8A18\u4E86\u3002 ",-1),N=u("div",{class:"row items-center justify-evenly"},[u("div",{class:"col-12 col-lg-6 items-center text-center q-py-xl"})],-1),L=x({__name:"IndexPage",setup(e){d(1),d({totalCount:1200});const o=()=>`${window.innerHeight-50}px`;return(s,t)=>(b(),q(S,{class:"items-center justify-evenly"},{default:n(()=>[u("div",{class:"row items-center justify-evenly heading",style:l({height:o()})},[i(c,{appear:"",class:"animated fadeInDown delay-1s slower"},{default:n(()=>[u("h2",{class:"text-white",style:l({"letter-spacing":"0.25em","margin-top":"20vh",position:"absolute","margin-right":"45vw"})}," \u674E\u6B23\u5EAD \xA0Isteen ",4)]),_:1}),i(c,{appear:"",class:"animated fadeInDown delay-1s slower"},{default:n(()=>[u("h4",{class:"text-white",style:l({"letter-spacing":"0.15em","margin-top":"50vh",position:"absolute","margin-left":"15vw"})},[T,Q(" \u5275\u8FA6\u4EBA\u66A8\u57F7\u884C\u9577 \u9EC3\u4EC1\u52F3\u8A8D\u8B49\u7684\u597D\u8072\u97F3 ")],4)]),_:1}),i(c,{appear:"",class:"animated infinite pulse slow",style:{"margin-top":"75vh",position:"absolute"}},{default:n(()=>[i(f,{round:"",outline:"",color:"white",icon:"keyboard_arrow_down",href:"#intro"})]),_:1})],4),u("div",j,[u("div",I,[P,i(B,{ratio:16/9,src:"https://www.youtube.com/embed/uL8KEzQ0J84"})]),u("div",$,[u("div",V,[k,H,i(B,{ratio:16/9,src:"https://www.youtube.com/embed/4bpT-MlCRmY"})])]),N])]),_:1}))}});export{L as default};
