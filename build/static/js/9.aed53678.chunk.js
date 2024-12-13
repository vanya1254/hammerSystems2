(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[9],{457:function(e,t,c){"use strict";var s=c(458),a=c.n(s),n=c(35),r=c(459).a(),i=c(27),l=c(262);const o=a.a.create({baseURL:n.a,timeout:6e4}),d="/auth/login";o.interceptors.request.use((e=>{const t=localStorage.getItem(i.b);return t&&(e.headers.authorization=t),t||e.headers["public-request"]||(r.push(d),window.location.reload()),e}),(e=>{l.a.error({message:"Error"}),Promise.reject(e)})),o.interceptors.response.use((e=>e.data),(e=>{let t={message:""};return 400!==e.response.status&&403!==e.response.status||(t.message="Authentication Fail",t.description="Please login again",localStorage.removeItem(i.b),r.push(d),window.location.reload()),404===e.response.status&&(t.message="Not Found"),500===e.response.status&&(t.message="Internal Server Error"),508===e.response.status&&(t.message="Time Out"),l.a.error(t),Promise.reject(e)}));var j=o;const h={login:function(e){return j({url:"/posts",method:"post",headers:{"public-request":"true"},data:e})},signUp:function(e){return j({url:"/auth/signup",method:"post",headers:{"public-request":"true"},data:e})}};t.a=h},462:function(e,t,c){"use strict";var s=c(0),a=c.n(s),n=c(40),r=c(4),i=c(2),l=c(7),o=c.n(l),d=c(77),j=function(e,t){var c={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(c[s]=e[s]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(s=Object.getOwnPropertySymbols(e);a<s.length;a++)t.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(e,s[a])&&(c[s[a]]=e[s[a]])}return c},h=function(e){var t=s.useContext(d.b),c=t.getPrefixCls,a=t.direction,n=e.prefixCls,l=e.type,h=void 0===l?"horizontal":l,m=e.orientation,b=void 0===m?"center":m,u=e.orientationMargin,x=e.className,g=e.children,p=e.dashed,O=e.plain,f=j(e,["prefixCls","type","orientation","orientationMargin","className","children","dashed","plain"]),v=c("divider",n),w=b.length>0?"-".concat(b):b,y=!!g,C="left"===b&&null!=u,N="right"===b&&null!=u,F=o()(v,"".concat(v,"-").concat(h),Object(i.a)(Object(i.a)(Object(i.a)(Object(i.a)(Object(i.a)(Object(i.a)(Object(i.a)({},"".concat(v,"-with-text"),y),"".concat(v,"-with-text").concat(w),y),"".concat(v,"-dashed"),!!p),"".concat(v,"-plain"),!!O),"".concat(v,"-rtl"),"rtl"===a),"".concat(v,"-no-default-orientation-margin-left"),C),"".concat(v,"-no-default-orientation-margin-right"),N),x),k=Object(r.a)(Object(r.a)({},C&&{marginLeft:u}),N&&{marginRight:u});return s.createElement("div",Object(r.a)({className:F},f,{role:"separator"}),g&&"vertical"!==h&&s.createElement("span",{className:"".concat(v,"-inner-text"),style:k},g))},m=c(126),b=c(505),u=c(504),x=c(438),g=c(506),p=c(507),O=c(5);const f=()=>Object(O.jsx)("svg",{viewBox:"0 0 1024 1024",width:"1em",height:"1em",fill:"currentColor",children:Object(O.jsxs)("g",{children:[Object(O.jsx)("path",{fill:"#59C36A",d:"M827.301,875.968c-84.521,71.388-194.169,116.693-313.528,116.693c-177.609,0-333.52-97.848-418.041-240.62\r l31.646-145.858l140.255-26.039c32.553,105.078,130.779,182.178,246.141,182.178c55.964,0,107.937-17.703,150.767-49.112\r l134.777,20.558L827.301,875.968z"}),Object(O.jsx)("path",{fill:"#00A66C",d:"M827.301,875.968l-27.984-142.201l-134.777-20.558c-42.83,31.409-94.803,49.112-150.767,49.112v230.34\r C633.132,992.661,742.779,947.355,827.301,875.968z"}),Object(O.jsx)("g",{id:"Connected_Home_1_",children:Object(O.jsx)("g",{children:Object(O.jsx)("g",{children:Object(O.jsx)("g",{children:Object(O.jsx)("path",{fill:"#FFDA2D",d:"M256.781,505.331c0,26.267,3.998,51.396,10.851,74.813l-171.9,171.897\r c-42.83-71.957-69.29-156.48-69.29-246.71c0-90.233,26.46-174.754,69.29-246.711l137.965,23.743l33.936,148.154\r C260.779,453.932,256.781,479.06,256.781,505.331L256.781,505.331z"})})})})}),Object(O.jsx)("path",{fill:"#4086F4",d:"M1001.103,505.331c0,148.48-68.719,281.547-173.802,370.637L664.539,713.209\r c33.121-23.988,61.107-55.971,79.384-93.66h-230.15c-15.993,0-28.556-12.567-28.556-28.554V419.666\r c0-15.99,12.563-28.554,28.556-28.554h450.78c13.707,0,25.698,9.708,27.983,23.412\r C998.247,444.225,1001.103,475.063,1001.103,505.331L1001.103,505.331z"}),Object(O.jsx)("path",{fill:"#4175DF",d:"M743.924,619.549c-18.275,37.689-46.264,69.672-79.382,93.66l162.759,162.759\r c105.083-89.09,173.802-222.153,173.802-370.637c0-30.269-2.855-61.106-8.567-90.807c-2.284-13.704-14.278-23.412-27.984-23.412\r H513.772v228.437H743.924z"}),Object(O.jsx)("path",{fill:"#FF641A",d:"M835.297,154.107c0.571,7.996-2.855,15.422-7.996,21.131L705.086,296.881\r c-9.704,10.278-25.694,11.421-37.118,2.855c-45.119-33.693-98.231-51.396-154.195-51.396\r c-115.361,0-213.588,77.095-246.141,182.178L95.731,258.62C180.253,115.848,336.163,18,513.772,18\r c113.647,0,224.439,41.88,311.244,114.978C831.298,138.119,834.723,146.112,835.297,154.107L835.297,154.107z"}),Object(O.jsx)("path",{fill:"#F03800",d:"M667.966,299.736c11.422,8.567,27.411,7.423,37.119-2.855l122.214-121.643\r c5.143-5.709,8.569-13.133,7.996-21.131c-0.575-7.997-3.999-15.988-10.279-21.13C738.212,59.88,627.42,18,513.772,18v230.34\r C569.736,248.34,622.849,266.043,667.966,299.736z"})]})}),v=()=>Object(O.jsx)("svg",{viewBox:"0 0 1024 1024",width:"1em",height:"1em",fill:"currentColor",children:Object(O.jsxs)("g",{children:[Object(O.jsx)("path",{fill:"#4A7AFF",d:"M1015.363,506.525c0,279.749-226.775,506.524-506.525,506.524c-279.749,0-506.524-226.775-506.524-506.524\r C2.313,226.775,229.089,0,508.838,0C788.588,0,1015.363,226.775,1015.363,506.525z"}),Object(O.jsx)("path",{fill:"#FFFFFF",d:"M663.688,149.015v114.697c0,0-131.686-19.113-131.686,65.843v84.957h118.941L636.08,544.072H532.002v337.709\r H400.316V544.072l-112.572-2.126V414.512H398.19V316.81c0,0-7.288-145.343,135.938-172.038\r C593.602,133.68,663.688,149.015,663.688,149.015z"}),Object(O.jsx)("path",{fill:"#DCE1EB",d:"M663.688,263.712V149.015c0,0-70.086-15.335-129.56-4.243c-9.291,1.73-17.932,3.973-25.993,6.623v730.387\r h23.867V544.072h104.07l14.871-129.561H532.002c0,0,0,0,0-84.957C532.002,244.599,663.688,263.712,663.688,263.712z"})]})});var w=c(3),y=c(14),C=c(111),N=c(71),F=["className","component","viewBox","spin","rotate","tabIndex","onClick","children"],k=s.forwardRef((function(e,t){var c=e.className,a=e.component,n=e.viewBox,r=e.spin,l=e.rotate,d=e.tabIndex,j=e.onClick,h=e.children,m=Object(y.a)(e,F);Object(N.g)(Boolean(a||h),"Should have `component` prop or `children`."),Object(N.f)();var b=s.useContext(C.a),u=b.prefixCls,x=void 0===u?"anticon":u,g=b.rootClassName,p=o()(g,x,c),O=o()(Object(i.a)({},"".concat(x,"-spin"),!!r)),f=l?{msTransform:"rotate(".concat(l,"deg)"),transform:"rotate(".concat(l,"deg)")}:void 0,v=Object(w.a)(Object(w.a)({},N.e),{},{className:O,style:f,viewBox:n});n||delete v.viewBox;var k=d;return void 0===k&&j&&(k=-1),s.createElement("span",Object(w.a)(Object(w.a)({role:"img"},m),{},{ref:t,tabIndex:k,onClick:j,className:p}),a?s.createElement(a,Object(w.a)({},v),h):h?(Object(N.g)(Boolean(n)||1===s.Children.count(h)&&s.isValidElement(h)&&"use"===s.Children.only(h).type,"Make sure that you provide correct `viewBox` prop (default `0 0 1024 1024`) to the icon."),s.createElement("svg",Object(w.a)(Object(w.a)({},v),{},{viewBox:n}),h)):null)}));k.displayName="AntdIcon";var M=k;var P=a.a.forwardRef(((e,t)=>Object(O.jsx)(M,{component:e.svg,className:e.className}))),I=c(58),z=c(457),B=c(45),E=c(461);const L=e=>{let t=Object(B.g)();const{otherSignIn:c,showForgetPassword:a,hideAuthMessage:n,onForgetPasswordClick:r,showLoading:i,extra:l,loading:o,showMessage:d,message:j,authenticated:w,showAuthMessage:y,token:C,redirect:N,allowRedirect:F}=e;Object(s.useEffect)((()=>{null!==C&&F&&t.push(N),d&&setTimeout((()=>{n()}),3e3)}));const k=Object(O.jsxs)("div",{children:[Object(O.jsx)(h,{children:Object(O.jsx)("span",{className:"text-muted font-size-base font-weight-normal",children:"or connect with"})}),Object(O.jsxs)("div",{className:"d-flex justify-content-center",children:[Object(O.jsx)(m.a,{onClick:()=>{i()},className:"mr-2",disabled:o,icon:Object(O.jsx)(P,{svg:f}),children:"Google"}),Object(O.jsx)(m.a,{onClick:()=>{i()},icon:Object(O.jsx)(P,{svg:v}),disabled:o,children:"Facebook"})]})]});return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(E.a.div,{initial:{opacity:0,marginBottom:0},animate:{opacity:d?1:0,marginBottom:d?20:0},children:Object(O.jsx)(b.a,{type:"error",showIcon:!0,message:j})}),Object(O.jsxs)(u.a,{layout:"vertical",name:"login-form",onFinish:e=>{i();z.a.login(e).then((e=>{w("fakeToken")})).then((e=>{y(e)}))},children:[Object(O.jsx)(u.a.Item,{name:"email",label:"Email",rules:[{required:!0,message:"Please input your email"},{type:"email",message:"Please enter a validate email!"}],children:Object(O.jsx)(x.a,{prefix:Object(O.jsx)(g.a,{className:"text-primary"})})}),Object(O.jsx)(u.a.Item,{name:"password",label:Object(O.jsxs)("div",{className:"".concat(a?"d-flex justify-content-between w-100 align-items-center":""),children:[Object(O.jsx)("span",{children:"Password"}),a&&Object(O.jsx)("span",{onClick:()=>r,className:"cursor-pointer font-size-sm font-weight-normal text-muted",children:"Forget Password?"})]}),rules:[{required:!0,message:"Please input your password"}],children:Object(O.jsx)(x.a.Password,{prefix:Object(O.jsx)(p.a,{className:"text-primary"})})}),Object(O.jsx)(u.a.Item,{children:Object(O.jsx)(m.a,{type:"primary",htmlType:"submit",block:!0,loading:o,children:"Sign In"})}),c?k:null,l]})]})};L.defaultProps={otherSignIn:!0,showForgetPassword:!1};const A={showAuthMessage:I.c,showLoading:I.d,hideAuthMessage:I.b,authenticated:I.a};t.a=Object(n.b)((e=>{let{auth:t}=e;const{loading:c,message:s,showMessage:a,token:n,redirect:r}=t;return{loading:c,message:s,showMessage:a,token:n,redirect:r}}),A)(L)},497:function(e,t,c){"use strict";c.r(t);var s=c(3),a=(c(0),c(462)),n=c(492),r=c(493),i=c(40),l=c(5);const o={backgroundImage:"url(".concat("/img/others/img-17.jpg",")"),backgroundRepeat:"no-repeat",backgroundSize:"cover"};t.default=e=>{const t=Object(i.c)((e=>e.theme.currentTheme));return Object(l.jsx)("div",{className:"h-100 ".concat("light"===t?"bg-white":""),children:Object(l.jsxs)(n.a,{justify:"center",className:"align-items-stretch h-100",children:[Object(l.jsx)(r.a,{xs:20,sm:20,md:24,lg:16,children:Object(l.jsx)("div",{className:"container d-flex flex-column justify-content-center h-100",children:Object(l.jsx)(n.a,{justify:"center",children:Object(l.jsxs)(r.a,{xs:24,sm:24,md:20,lg:12,xl:8,children:[Object(l.jsx)("h1",{children:"Sign In"}),Object(l.jsxs)("p",{children:["Don't have an account yet? ",Object(l.jsx)("a",{href:"/auth/register-2",children:"Sign Up"})]}),Object(l.jsx)("div",{className:"mt-4",children:Object(l.jsx)(a.a,Object(s.a)({},e))})]})})})}),Object(l.jsx)(r.a,{xs:0,sm:0,md:0,lg:8,children:Object(l.jsxs)("div",{className:"d-flex flex-column justify-content-between h-100 px-4",style:o,children:[Object(l.jsx)("div",{className:"text-right",children:Object(l.jsx)("img",{src:"/img/logo-white.png",alt:"logo"})}),Object(l.jsx)(n.a,{justify:"center",children:Object(l.jsxs)(r.a,{xs:0,sm:0,md:0,lg:20,children:[Object(l.jsx)("img",{className:"img-fluid mb-5",src:"/img/others/img-18.png",alt:""}),Object(l.jsx)("h1",{className:"text-white",children:"Welcome to emilus"}),Object(l.jsx)("p",{className:"text-white",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper nisl erat, vel convallis elit fermentum pellentesque."})]})}),Object(l.jsx)("div",{className:"d-flex justify-content-end pb-4",children:Object(l.jsxs)("div",{children:[Object(l.jsx)("a",{className:"text-white",href:"/#",onClick:e=>e.preventDefault(),children:"Term & Conditions"}),Object(l.jsx)("span",{className:"mx-2 text-white",children:" | "}),Object(l.jsx)("a",{className:"text-white",href:"/#",onClick:e=>e.preventDefault(),children:"Privacy & Policy"})]})})]})})]})})}}}]);
//# sourceMappingURL=9.aed53678.chunk.js.map