(this["webpackJsonpcal-count"]=this["webpackJsonpcal-count"]||[]).push([[0],{102:function(e,t,c){},137:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c.n(s),n=c(10),r=c.n(n),i=(c(95),c(13)),l=c(11),o=c(19),j="CREATE_DISH",d="GET_DISH",b="UPDATE_DISH",h="DELETE_DISH",u="SELECT_DISH",O="CLEAR_DISH",x="DELETE_SELECTED_DISH",p="LOGIN",m="LOGOUT",f="LOGIN_ADMIN",g=c(1),v=function(e){var t=e.dish,c=e.index,s=e.selectAll,a=Object(l.b)(),n=t.proteins,r=t.carbs,i=t.fats,j=t.calories,d=t.id;return Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{children:Object(g.jsxs)("div",{className:"custom-control custom-checkbox",children:[Object(g.jsx)("input",{checked:s,type:"checkbox",className:"custom-control-input"}),Object(g.jsx)("label",{className:"custom-control-label"})]})}),Object(g.jsx)("th",{scope:"row",children:c+1}),Object(g.jsx)("td",{children:t.name}),Object(g.jsx)("td",{children:n}),Object(g.jsx)("td",{children:r}),Object(g.jsx)("td",{children:i}),Object(g.jsx)("td",{children:j}),Object(g.jsxs)("td",{className:"actions",children:[Object(g.jsx)(o.b,{to:"/admin/edit/".concat(d),children:Object(g.jsx)("span",{className:"material-icons",children:"edit"})}),Object(g.jsx)("button",{class:"deleteDish",children:Object(g.jsx)("span",{className:"material-icons text-danger",onClick:function(){return a(function(e){return{type:h,payload:e}}(d))},children:"remove_circle"})})]})]})},y=function(){var e=Object(l.b)(),t=Object(s.useState)(!1),c=Object(i.a)(t,2),a=c[0],n=c[1],r=Object(l.c)((function(e){return e.Dish.Dishes})),o=Object(l.c)((function(e){return e.Dish.selectedDishes}));return Object(s.useEffect)((function(){var t;e(a?(t=r.map((function(e){return e.id})),{type:u,payload:t}):{type:O})}),[a]),Object(g.jsxs)("div",{children:[o.length>0?Object(g.jsx)("button",{className:"btn btn-danger mb-3",onClick:function(){return e({type:x})},children:"Delete All"}):null,Object(g.jsxs)("table",{id:"adminTable",class:"table shadow table-striped caption-top",children:[Object(g.jsx)("caption",{children:"List of dishes"}),Object(g.jsx)("thead",{className:"bg-danger text-white",children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{children:Object(g.jsxs)("div",{className:"custom-control custom-checkbox",children:[Object(g.jsx)("input",{id:"selectAll",type:"checkbox",className:"custom-control-input",value:a,onClick:function(){return n(!a)}}),Object(g.jsx)("label",{htmlFor:"selectAll",className:"custom-control-label"})]})}),Object(g.jsx)("th",{children:"No."}),Object(g.jsx)("th",{children:"Name"}),Object(g.jsx)("th",{children:"Proteins"}),Object(g.jsx)("th",{children:"Carbs"}),Object(g.jsx)("th",{children:"Fats"}),Object(g.jsx)("th",{children:"Calories"}),Object(g.jsx)("th",{children:"Actions"})]})}),Object(g.jsx)("tbody",{children:r.map((function(e,t){return Object(g.jsx)(v,{dish:e,index:t,selectAll:a},e.id)}))})]})]})},N=function(){var e=Object(l.c)((function(e){return e.Auth})),t=e.isAdmin;return Object(g.jsx)("nav",{className:"navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary",children:Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)(o.b,{to:"/",className:"navbar-brand",children:"Dishes"}),Object(g.jsxs)("div",{class:"btn-group",role:"group","aria-label":"Basic example",children:[t?Object(g.jsx)(o.b,{to:"/admin/add",className:"btn buttonsassy text-center btn-secondary",children:"AddDish"}):null,t?Object(g.jsx)(o.b,{to:"/admin",className:"btn buttonsassy text-center btn-secondary",children:"Admin"}):null,e.userName?Object(g.jsx)(o.b,{to:"/logout",className:"btn buttonsassy text-center btn-secondary",children:"LOGOUT"}):Object(g.jsx)(o.b,{to:"/login",className:"btn buttonsassy text-center btn-secondary",children:"LOGIN"})]})]})})},M=(c(102),c(30)),D=c(74),w=c(55),k=c(75),C=c(79),S=c(14),E={Dishes:[],Dish:null,selectedDishes:[]},A={userName:null,isAdmin:!1},F=c(76),_={key:"root",storage:c.n(F).a,whitelist:["Dish","Auth"]},H=Object(M.combineReducers)({Dish:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(S.a)(Object(S.a)({},e),{},{Dishes:[t.payload].concat(Object(C.a)(e.Dishes))});case d:var c=e.Dishes.filter((function(e){return e.id==t.payload}));c=c.values();var s,a=Object(k.a)(c);try{for(a.s();!(s=a.n()).done;){var n=s.value;c=n}}catch(r){a.e(r)}finally{a.f()}return Object(S.a)(Object(S.a)({},e),{},{Dish:c});case b:return Object(S.a)(Object(S.a)({},e),{},{Dishes:e.Dishes.map((function(e){return e.id==t.payload.id?t.payload:e}))});case h:return Object(S.a)(Object(S.a)({},e),{},{Dishes:e.Dishes.filter((function(e){return e.id!=t.payload}))});case x:return Object(S.a)(Object(S.a)({},e),{},{Dishes:[]});case u:return Object(S.a)(Object(S.a)({},e),{},{selectedDishes:t.payload});case O:return Object(S.a)(Object(S.a)({},e),{},{selectedDishes:[]});default:return e}},Auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return console.log("logineducer"),Object(S.a)(Object(S.a)({},e),{},{userName:t.payload});case m:return console.log("logouteducer"),Object(S.a)(Object(S.a)({},e),{},{userName:null,isAdmin:!1});case f:return console.log("loginadmineducer"),Object(S.a)(Object(S.a)({},e),{},{userName:t.payload,isAdmin:!0});default:return e}}}),L=Object(w.a)(_,H),I=Object(M.createStore)(L,Object(D.composeWithDevTools)()),T=Object(w.b)(I),z=function(e){var t=e.bgcolor,c=e.completed,s=e.cal,a=(e.type,e.total),n={height:"100%",width:"".concat(100*s/a,"%"),backgroundColor:t,borderRadius:"inherit",textAlign:"right"};return Object(g.jsx)("div",{style:{display:"flex",backgroundColor:"#e0e0de",borderRadius:50,float:"left",height:"0.75em",width:"60%",margin:"1em",marginLeft:"4em",marginTop:"-0.5em"},children:Object(g.jsx)("div",{style:n,children:Object(g.jsx)("span",{style:{padding:5,color:"black",fontWeight:"bold",marginLeft:10},children:"".concat(c,"g")})})})},B=c(77),W=c.n(B),G=function(e){var t=e.dish,c=(e.index,t.proteins),a=t.carbs,n=t.fats,r=t.calories,l=t.id,o=Object(s.useState)("O1ubEmW8eXvuVaxkrinN-GwpbPyq_0dtEFTsNmZoluU"),j=Object(i.a)(o,2),d=j[0],b=(j[1],Object(s.useState)([])),h=Object(i.a)(b,2),u=h[0],O=h[1],x=Object(s.useState)(""),p=Object(i.a)(x,2),m=p[0],f=p[1],v=Object(s.useState)([]),y=Object(i.a)(v,2),N=y[0],M=y[1],D="https://api.unsplash.com/search/photos?page=1&per_page=1&query="+t.name+"&client_id="+d;console.log(t.name);Object(s.useEffect)((function(){W.a.get(D).then((function(e){O(e.data.results),console.log(u),void 0!=u[0]?(f(u[0].urls.small),console.log(u[0].urls.small)):f("https://images.unsplash.com/photo-1618502913824-e45c41e932d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzIyMTZ8MHwxfHNlYXJjaHwxfHxkaWV0JTIwZm9vZCUyMGdyYXBoaWN8ZW58MHx8fHwxNjIxNDM4NzI4&ixlib=rb-1.2.1&q=80&w=400")}))}),[N]),console.log(m+"this");var w={backgroundImage:"url("+m+")",backgroundSize:"cover",backgroundSepeat:"no-repeat","&:hover":{height:"18em"}};return Object(g.jsx)("div",{children:Object(g.jsx)("div",{class:"center",onClick:function(e){M(e),M("")},children:Object(g.jsxs)("div",{class:"property-card",style:w,children:[Object(g.jsx)("a",{href:"#",children:Object(g.jsx)("div",{class:"property-image",children:Object(g.jsx)("div",{class:"property-image-title"})})}),Object(g.jsxs)("div",{class:"property-description",children:[Object(g.jsxs)("h5",{children:[" ",t.name," "]}),Object(g.jsxs)("section",{class:"cards",children:[Object(g.jsx)("div",{class:"property-card1",children:Object(g.jsx)("div",{class:"property-image1",children:Object(g.jsx)("div",{class:"property-image-title",children:Object(g.jsx)("h5",{children:"Proteins"})})})}),Object(g.jsx)(z,{bgcolor:"green",completed:c,type:"Proteins",cal:4*c,total:r},l)]}),Object(g.jsxs)("section",{class:"cards",children:[Object(g.jsx)("div",{class:"property-card1",children:Object(g.jsx)("div",{class:"property-image1",children:Object(g.jsx)("div",{class:"property-image-title",children:Object(g.jsx)("h5",{children:"Carbs"})})})}),Object(g.jsx)(z,{bgcolor:"yellow",completed:a,type:"Carbs",cal:4*a,total:r},l)]}),Object(g.jsxs)("section",{class:"cards",children:[Object(g.jsx)("div",{class:"property-card1",children:Object(g.jsx)("div",{class:"property-image1",children:Object(g.jsx)("div",{class:"property-image-title",children:Object(g.jsx)("h5",{children:"Fats"})})})}),Object(g.jsx)(z,{bgcolor:"red",completed:n,type:"Fats",cal:4*n,total:r},l)]}),Object(g.jsxs)("section",{class:"cards",children:[Object(g.jsx)("div",{class:"property-card1",children:Object(g.jsx)("div",{class:"property-image1",children:Object(g.jsx)("div",{class:"property-image-title",children:Object(g.jsx)("h5",{children:"Calories"})})})}),Object(g.jsx)(z,{bgcolor:"blue",completed:r,type:"Calories",cal:r,total:r},l)]})]})]})})})},P=function(e){return Object(g.jsx)("div",{children:Object(g.jsx)("div",{class:"container d-flex justify-content-center",children:Object(g.jsx)("div",{class:"card mt-5 p-4",children:Object(g.jsxs)("div",{class:"input-group mb-3",children:[" ",Object(g.jsx)("input",{type:"text",placeholder:"Search for...",onChange:function(t){return e.callback(t.target.value)},class:"form-control"}),Object(g.jsx)("div",{class:"input-group-append",children:Object(g.jsxs)("button",{class:"btn btn-primary big-button",children:[Object(g.jsx)("i",{class:"fas fa-search"}),"Search"]})})]})})})})},U=function(){var e=Object(l.c)((function(e){return e.Dish.Dishes})),t=Object(s.useState)(""),c=Object(i.a)(t,2),a=c[0],n=c[1];return Object(g.jsxs)("div",{children:[Object(g.jsx)(P,{callback:function(e){n(e)}}),Object(g.jsx)("div",{class:"centered",children:Object(g.jsx)("section",{class:"cards cards-container",children:a?e.filter((function(e){return function(e,t){return console.log(e.includes(t)),console.log(e,t),e.toLowerCase().includes(t.toLowerCase())}(e.name,a)})).map((function(e){return console.log(e,"hello"),Object(g.jsx)(G,{dish:e,index:"0"},e.id)})):e.map((function(e,t){return console.log("nah"),Object(g.jsx)(G,{dish:e,index:t},e.id)}))})})]})},V=function(){return Object(g.jsx)("div",{children:Object(g.jsx)(U,{})})},R=c(187),q=c(182),Z=c(180),J=c(184),X=c(181),Y=c(186),K=c(177),Q=c(183),$=c(185),ee=c(78),te=c.n(ee),ce=c(80),se=c(178),ae=c(179),ne=c(12);function re(){return Object(g.jsxs)(ce.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(g.jsx)(K.a,{color:"inherit",href:"https://material-ui.com/",children:"Cal Counter"})," ",(new Date).getFullYear(),"."]})}var ie=Object(se.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1),backdropFilter:"blur(10px)"},submit:{margin:e.spacing(3,0,2)}}})),le={button:1},oe=function(){var e=ie(),t=Object(s.useState)(""),c=Object(i.a)(t,2),a=c[0],n=c[1],r=Object(s.useState)(""),o=Object(i.a)(r,2),j=o[0],d=o[1],b=Object(l.b)(),h=Object(ne.g)();return Object(g.jsxs)(ae.a,{component:"main",maxWidth:"xs",children:[Object(g.jsx)(Z.a,{}),Object(g.jsxs)("div",{className:e.paper,children:[Object(g.jsx)(R.a,{className:e.avatar,children:Object(g.jsx)(te.a,{})}),Object(g.jsx)(ce.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(g.jsxs)("form",{className:e.form,noValidate:!0,onSubmit:function(e){e.preventDefault(),1===le.button&&(b(function(e){return{type:p,payload:e}}({userName:a})),h.push("/")),2===le.button&&(b(function(e){return{type:f,payload:e}}({userName:a})),h.push("/admin"))},children:[Object(g.jsx)(J.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"UserName",name:"email",autoFocus:!0,value:a,onChange:function(e){return n(e.target.value)}}),Object(g.jsx)(J.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:j,onChange:function(e){return d(e.target.value)}}),Object(g.jsx)(X.a,{control:Object(g.jsx)(Y.a,{value:"remember",color:"primary"}),label:"Remember me"}),Object(g.jsx)(q.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:function(){return le.button=1},children:"Sign In"}),Object(g.jsx)(q.a,{type:"submit",fullWidth:!0,variant:"contained",color:"danger",className:e.submit,onClick:function(){return le.button=2},children:"Sign In as Admin"}),Object(g.jsxs)(Q.a,{container:!0,children:[Object(g.jsx)(Q.a,{item:!0,xs:!0,children:Object(g.jsx)(K.a,{href:"#",variant:"body2",children:"Forgot password?"})}),Object(g.jsx)(Q.a,{item:!0,children:Object(g.jsx)(K.a,{href:"#",variant:"body2",children:"Don't have an account? Sign Up"})})]})]})]}),Object(g.jsx)($.a,{mt:8,children:Object(g.jsx)(re,{})})]})},je=function(){return Object(g.jsx)("div",{children:Object(g.jsx)("div",{class:"main",children:Object(g.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"470",height:"290",viewBox:"0 0 470 290",children:[Object(g.jsx)("defs",{children:Object(g.jsx)("path",{class:"fundo",id:"prefix__a",d:"M5.063 128.67c-2.513 15.192 5.633 31.093 17.898 38.941 5.99 3.832 13.34 6.528 16.471 13.254 4.868 10.452-3.879 22.437-13.113 28.515-9.236 6.078-20.5 10.9-24.704 21.683-2.771 7.108-1.685 15.387 1.058 22.507 10.06 26.112 39.393 37.547 65.479 36.15 26.086-1.396 50.827-12.407 76.416-18.075 87.873-19.465 180.005 24.717 267.728 4.47 13.65-3.151 27.4-8.081 37.943-17.99 11.883-11.167 18.632-28.016 19.65-45.023.97-16.225-4.34-34.495-17.744-41.806-7.834-4.273-17.196-4.1-25.7-1.774-5.43 1.483-10.767 3.808-16.369 3.848-5.601.038-11.763-3-13.386-8.808-1.707-6.107 2.182-12.41 6.642-16.577 9.072-8.474 21.203-12.707 29.441-22.126 7.927-9.063 11.264-22.574 8.574-34.716-2.692-12.141-11.326-22.538-22.188-26.715-27.683-10.645-57.844 18.377-86.152 9.873-2.101-.63-4.312-1.605-5.418-3.641-1.08-1.988-.834-4.51-.214-6.716 3.468-12.348 16.939-20.21 17.528-33.102.32-7.008-3.504-13.564-8.325-18.251-33.126-32.2-81.125 6.102-114.9 18.194-55.542 19.884-112.157 36.49-167.849 55.963-20.81 7.275-44.91 18.606-48.766 41.922z"})}),Object(g.jsxs)("g",{fill:"none","fill-rule":"evenodd",children:[Object(g.jsx)("path",{fill:"#FFF",d:"M0 0H1366V800H0z",transform:"translate(-448 -157)"}),Object(g.jsxs)("g",{transform:"translate(-448 -157) translate(448 157)",children:[Object(g.jsx)("mask",{id:"prefix__b",fill:"#fff",children:Object(g.jsx)("use",{xlinkHref:"#prefix__a"})}),Object(g.jsx)("use",{fill:"#F6F6F7",xlinkHref:"#prefix__a"}),Object(g.jsx)("path",{fill:"#EDEDF0","fill-rule":"nonzero",d:"M-14.199 211.2H481.36V301.2H-14.199z",mask:"url(#prefix__b)"}),Object(g.jsxs)("g",{class:"paes",children:[Object(g.jsxs)("g",{class:"pao-baixo",children:[Object(g.jsx)("path",{fill:"#FBB965",d:"M2.79 131.737s-2.073 3.155-2.479 6.868c-.406 3.713-.747 9.666 1.24 13.372 1.985 3.707 12.69 20.8 65.175 21.02 53.15.225 69.188-15.685 70.59-18.977 2.605-6.118 1.838-21.327.06-22.283-1.777-.956-44.044-3.204-72.446-4.057-28.402-.854-49.872-1.968-62.14 4.057",transform:"translate(161 68)"}),Object(g.jsx)("path",{fill:"#E6A95F",d:"M34.648 167.758c-8.863-1.526-23.515-6.939-30.292-14.218-6.775-7.28-2.096-8.803 3.508-5.387 5.605 3.415 24.569 11.557 54.124 12.263 29.555.706 61.424-6.946 72.2-17.053 0 0 2.705-1.47 2.768 1.509.062 2.98.428 7.948-2.769 10.507-3.196 2.558-34.805 23.526-99.54 12.379",transform:"translate(161 68)"}),Object(g.jsx)("path",{fill:"#FFDA7F",d:"M5.679 131.837c-6.522 1.646-.275 6.91 9.492 12.14 9.767 5.229 28.24 10.257 44.267 10.015 16.028-.243 37.48-.481 52.543-5.333 15.06-4.852 16.223-9.55 17.998-13.298 1.774-3.748-107.32-7.809-124.3-3.524",transform:"translate(161 68)"})]}),Object(g.jsxs)("g",{class:"pao-cima",children:[Object(g.jsx)("path",{fill:"#FBB868",d:"M71.37 0C49.008.035-2.43.631 1.18 51.16c0 0-.018 10.84 62.825 10.84 62.844 0 72.591-9.633 73.721-11.173C142.284 44.623 147.583-.117 71.37 0",transform:"translate(161 68)"}),Object(g.jsx)("path",{fill:"#E6A95F",d:"M34.552 61c-7.628-1.006-23.98-2.904-27.586-5.506-3.606-2.604-7.448-2.895-5.39-10.826.842-3.242 7.976-.619 11.264.839 3.289 1.458 21.239 6.047 42.989 6.673 21.75.625 57.126-1.679 67.42-5.458 9.806-3.598 13.662-7.027 15.493-5.228 2.396 2.351 1.687 8.008-4.913 12.215-6.252 3.985-27.53 7.2-49.434 7.76-21.904.56-38.604 1.012-49.843-.469",transform:"translate(161 68)"}),Object(g.jsx)("path",{fill:"#FFEAD4",d:"M45.508 13.114c-.368.549-.54 1.598-.503 2.445.017.392.297.604.45.287.143-.297.222-.617.303-.978.087-.387.197-.735.238-1.15.042-.44-.257-.95-.488-.604M42.092 9.016c-.694.13-1.446.61-1.774 1.098-.168.248-.3.512-.317.792-.017.313.154.503.29.776.249.494 1.245.392 1.22-.162-.014-.274.33-.612.54-.817.367-.361.75-.62.923-1.075.154-.404-.413-.7-.882-.612M51.621 9.247c-.182-.409-.68-.325-.615.364.063.687.007 1.485.25 2.067.19.458.694.473.737-.25.043-.759-.109-1.592-.372-2.181M32.55 15.101c-1.206.547-1.849 1.662-1.414 2.552.188.384 1.21.504 1.46.077.188-.32.407-.629.616-.942.243-.363.63-.675.767-1.064.173-.486-.753-.93-1.43-.623M29.793 9.012c-.26-.108-.498.532-.62.942-.166.565-.205 1.033-.149 1.674.053.59.424.405.493-.048-.002.014.102-.302.138-.4.093-.247.18-.497.262-.76.113-.359.144-1.297-.124-1.408M38.384 6.056c-.737-.211-1.406.211-1.881.674-.53.514-.607 1.19-.39 1.829.167.5 1.09.632 1.326.096.127-.285.31-.53.533-.764.304-.32.72-.44.944-.848.237-.429-.053-.85-.532-.987M21.722 10.101c-.484-.28-1.16.08-1.542.378-.57.444-.957.924-1.152 1.628-.21.764.802 1.182 1.296.663.4-.42.901-.746 1.308-1.172.319-.334.594-1.205.09-1.497M23.513 15.078c-.385.414-.505 1.566-.513 2.381-.005.47.333.749.47.35.206-.592.422-1.34.517-2.047.082-.598-.253-.921-.474-.684M38.964 14.6c-.26-.324-1.293-.581-2.192-.6-.626-.012-.971.28-.65.452.459.244 1.155.57 2.063.547.56-.014.936-.205.78-.4M51.58 3.028c-.54-.1-.912.074-1.399.401-.45.304-.83.813-1.092 1.395-.344.76.386 1.437.866 1.076.662-.5 1.41-.857 1.914-1.641.255-.397.126-1.152-.29-1.23M66.234 9c-.923 0-2.062.305-2.227.708-.074.182.437.384.836.247.537-.185 1.29-.187 1.832-.364.59-.193.337-.591-.441-.591M60.589 9.375c-.101-.522-.482-.493-.556.048-.12.852.102 1.815.423 2.412.213.396.543.02.544-.494.002-.736-.283-1.302-.411-1.966M69.955 3.569c-.44-.473-1.713-.712-2.727-.479-.37.085-.24.315.044.396.601.173 1.168.408 1.848.503.49.069 1.042-.199.835-.42M73.956 10.626c-.231-.836-.735-1.255-1.316-1.507-.24-.104-.5-.147-.75-.1-.148.028-.273.063-.407.161-.032.022-.373.238-.223.161-.282.148-.382.791-.057.979.117.067.22.24.333.325.168.128.336.247.508.364.327.219.564.609.873.868.537.45 1.27-.42 1.04-1.251M66.549 15.017c-.83-.233-.486 2.056-.435 2.528.055.51.678.664.741.08.068-.628.42-2.405-.306-2.608M54.803 16.301c-.065-.347-.1-.709-.19-1.038-.107-.393-.44-.32-.532.052-.186.746-.052 2.313.405 2.636.225.16.545-.077.512-.623-.024-.375-.13-.676-.195-1.027M39.534 21.024c-.423.212-.58 1.352-.523 2.174.066.946.664 1.13.785.144.065-.538.22-1.041.203-1.612-.016-.528-.238-.82-.465-.706M15.946 21.201c-.04-.142-.134-.197-.214-.2-.311-.02-.464.621-.576 1.05-.124.468-.188.945-.14 1.461.053.562.486.699.57.088.053-.375.146-.754.233-1.107.108-.439.265-.815.127-1.292M14.918 16.274c-.067-.169-.25-.279-.46-.274-.571.015-1.05.232-1.55.61-.562.422-.976 1.023-.899 1.675.081.697.993.942 1.574.476.407-.326.746-.755 1.058-1.149.364-.462.441-.923.277-1.338M62.906 5.209c-.447-.277-1.34-.251-1.957-.083-.279.077-.57.172-.738.298-.069.051-.108.105-.15.16-.025.038-.037.076-.038.115.043.077.042.09-.003.037-.154.243.622.357.925.173.227-.051.444-.104.705-.13.521-.054 1.021-.089 1.286-.315.092-.078.088-.182-.03-.255M52.906 8.291c-.191-.24-.402-.204-.634-.28-.218-.073-.326.255-.245.491.117.34.438.509.697.497.26-.01.37-.472.182-.708M80.437 1.283c-.385-.22-.844-.327-1.272-.266-.497.071-.7.363-1.033.724-.356.388.07 1.143.54.93l-.065-.083c.095.05.192.08.295.09.177.032.31.074.477.16.373.189.702.503 1.023.78.348.301 1.738.788 1.586-.245-.141-.963-.789-1.652-1.551-2.09M78.955 8.082c-.134-.55-.259-1.126-.366-1.703-.102-.548-.457-.476-.541.05-.073.453-.057.877.01 1.331.083.548.286.874.512 1.17.11.144.276.048.357-.132.097-.215.088-.476.028-.716M87.395 8c-.77.016-1.317.338-2.032.43-.505.065-.477.525.046.56.713.047 1.359-.082 2.053-.14.468-.04 1.35.253 1.516-.164.191-.483-.906-.7-1.583-.685M81.958 14.767c-.103-.44-.306-.8-.377-1.279-.095-.644-.518-.678-.57.063-.07.998.19 1.845.53 2.34.293.426.566-.494.417-1.124M99.918 9.365c-.177-.18-.36-.23-.56-.337-.295-.16-.508.405-.225.646.181.155.805.626.863.04.012-.119-.003-.273-.078-.349M93.308 4.792c-.387-.436-.932-.682-1.466-.78-.809-.145-1.17 1.02-.47 1.477.65.427 1.772 2.34 2.503 1.097.376-.641-.178-1.356-.567-1.794M91.498 10.138c-.32.55-.428 1.334-.494 2.18-.043.546.266.928.442.494.21-.512.38-1.126.522-1.741.139-.605-.204-1.393-.47-.933M103.977 8.863c-.265-1.177-1.477-2.153-2.51-1.784-.548.195-.653 1.156-.104 1.442.294.153.53.397.762.655.326.36.549.611.988.784.564.223.992-.535.864-1.097M100.988 4.781c.03-.437-.169-.702-.568-.724-.906-.33-1.89.849-2.3 1.608-.47.873.538 1.63 1.223 1.22.683-.406 1.786-1.108 1.645-2.104M110.532 7.06c-.238-.218-.568.203-.463.619l.012.045c-.01.096-.001.204 0 .297 0 .14-.016.294-.025.434-.012.181-.043.357-.053.539-.013.245.016.45.06.612.091.33.32.515.53.304.108-.11.286-.37.335-.709.04-.276.058-.554.07-.836.024-.568-.189-1.052-.466-1.306M108.458 14.127c-.434-.548-.995-.921-1.662-1.103-.746-.203-1.116.933-.445 1.28.216.11.4.251.557.443.204.248.42.648.672.84.348.262.868.645 1.249.23.437-.478-.064-1.305-.37-1.69M117.71 13.184c-.282.276-.558.555-.852.815-.143.126-.333.256-.446.42-.108.156-.174.34-.284.489-.392.535.193 1.412.694.973.104-.091.318-.086.446-.134.16-.062.324-.11.486-.169.51-.186.872-.578 1.145-1.11.418-.816-.553-1.907-1.188-1.284M97.93 18.019c-.834-.165-1.209.791-.697 1.348.495.538 1.83 2.49 2.627 1.2.636-1.034-1.044-2.373-1.93-2.548M124.69 17.006c-.372.072-.428.396-.629.626-.202.23.139.496.376.3.22-.181.506-.403.559-.676.032-.168-.129-.285-.307-.25M115.979 19.839c-.079-.499-.153-.976-.264-1.445-.205-.86-.853-.174-.689.73.089.49.148.982.25 1.46.196.907.849.182.703-.745M78.957 24.496c.068-.31.05-.616-.02-.91-.077-.321-.14-.65-.183-1.002-.099-.82-.671-.76-.736.076-.056.71.019 1.361.23 1.918.132.348.265.461.467.377-.18.076.075.038.116.016.071-.038.117-.183.135-.33.01-.08.063-.472-.009-.145M61.924 22.403c-.057-.057-.16-.13-.189-.2-.132-.33-.73-.229-.735.1-.004.27.047.533.379.665.186.073.458.02.543-.14l.027-.053c.06-.114.083-.266-.025-.372M106.798 22.22c-.107-.292-.757-.304-.794.028-.032.293.107.618.488.731.229.068.532-.032.507-.257-.021-.186-.137-.329-.201-.502M70.884 28.197c-.13-.291-.716-.24-.83.025-.131.304-.034.606.41.754.101.033.24.034.334-.012.326-.16.181-.553.086-.767",transform:"translate(161 68)"}),Object(g.jsx)("g",{class:"olhos",children:Object(g.jsx)("path",{fill:"#633",d:"M51.976 32.505c.27 2.748-1.735 5.197-4.476 5.47-2.748.274-5.199-1.732-5.476-4.48-.27-2.748 1.735-5.197 4.483-5.47 2.748-.274 5.192 1.733 5.469 4.48M93.976 28.505c.27 2.748-1.735 5.197-4.483 5.47-2.748.273-5.192-1.733-5.469-4.48-.27-2.748 1.735-5.197 4.483-5.47 2.748-.274 5.192 1.733 5.469  4.48M65.03 45.127c2.1-5.726 9.106-6.606 13.113-2.171.408.462-.277 1.204-.725.77-3.981-3.892-9.17-2.951-11.83 1.745-.187.333-.68-.002-.558-.344 ",transform:"translate(161 68)"})})]})]}),Object(g.jsxs)("g",{"fill-rule":"nonzero",stroke:"#979797","stroke-linecap":"round","stroke-width":"1.8",class:"left-sparks",children:[Object(g.jsx)("path",{d:"M23.684 5.789L30 1.158",transform:"rotate(-90 157 13)"}),Object(g.jsx)("path",{d:"M0 5.789L6.316 1.158",transform:"rotate(-90 157 13) matrix(-1 0 0 1 6.316 0)"}),Object(g.jsx)("path",{d:"M15.789 4.632L15.789 0",transform:"rotate(-90 157 13)"})]}),Object(g.jsxs)("g",{"fill-rule":"nonzero",stroke:"#979797","stroke-linecap":"round","stroke-width":"1.8",class:"right-sparks",children:[Object(g.jsx)("path",{d:"M23.684 5.789L30 1.158",transform:"matrix(0 -1 -1 0 318 170)"}),Object(g.jsx)("path",{d:"M0 5.789L6.316 1.158",transform:"matrix(0 -1 -1 0 318 170) matrix(-1 0 0 1 6.316 0)"}),Object(g.jsx)("path",{d:"M15.789 4.632L15.789 0",transform:"matrix(0 -1 -1 0 318 170)"})]}),Object(g.jsx)("path",{fill:"#4B4B62",class:"path","fill-rule":"nonzero",stroke:"#4B4B62","stroke-width":"2",d:"M198.754 186c1.56 0 2.246-.703 2.246-2.3v-41.4c0-1.597-.686-2.3-2.246-2.3h-9.608c-1.56 0-2.247.703-2.247 2.3v19.678h-5.802c-1.185 0-1.934-.83-1.934-2.172V142.3c0-1.597-.686-2.3-2.246-2.3h-9.67c-1.56 0-2.247.703-2.247 2.3v22.425c0 7.283 3.244 10.606 11.355 10.606H186.9v8.369c0 1.597.687 2.3 2.247 2.3h9.608zm32.277 1c15.3 0 18.969-5.248 18.969-13.056V152.12c0-7.808-3.67-13.12-18.969-13.12-15.3 0-19.031 5.312-19.031 13.12v21.824c0 7.808 3.732 13.056 19.031 13.056zm.969-12c-4.25 0-5-1.27-5-2.986v-17.091c0-1.652.75-2.923 5-2.923 4.313 0 5 1.27 5 2.923v17.09c0 1.716-.688 2.987-5 2.987zm62.754 11c1.56 0 2.246-.703 2.246-2.3v-41.4c0-1.597-.686-2.3-2.246-2.3h-9.608c-1.56 0-2.247.703-2.247 2.3v19.678h-5.802c-1.185 0-1.934-.83-1.934-2.172V142.3c0-1.597-.686-2.3-2.246-2.3h-9.67c-1.56 0-2.247.703-2.247 2.3v22.425c0 7.283 3.244 10.606 11.355 10.606H282.9v8.369c0 1.597.687 2.3 2.247 2.3h9.608z"})]})]})]})})})},de=c(60),be=c.n(de),he=function(){var e=Object(ne.g)(),t=Object(l.b)(),c=Object(s.useState)(""),a=Object(i.a)(c,2),n=a[0],r=a[1],o=Object(s.useState)(""),d=Object(i.a)(o,2),b=d[0],h=d[1],u=Object(s.useState)(""),O=Object(i.a)(u,2),x=O[0],p=O[1],m=Object(s.useState)(""),f=Object(i.a)(m,2),v=f[0],y=f[1],N=function(c){c.preventDefault();var s={id:be.a.generate(),name:n,proteins:b,carbs:v,fats:x,calories:4*b+4*v+9*x};t({type:j,payload:s}),e.push("/admin")};return Object(g.jsxs)("div",{className:"card addDish border-0 shadow",children:[Object(g.jsx)("div",{className:"card-header",children:"Add a Dish"}),Object(g.jsx)("div",{className:"card-body",children:Object(g.jsxs)("form",{onSubmit:function(e){return N(e)},children:[Object(g.jsx)("div",{className:"form-group",children:Object(g.jsx)("input",{type:"text",className:"form-control",placeholder:"Dish Name",value:n,onChange:function(e){return r(e.target.value)}})}),Object(g.jsx)("div",{className:"form-group",children:Object(g.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter Proteins",value:b,onChange:function(e){return h(e.target.value)}})}),Object(g.jsx)("div",{className:"form-group",children:Object(g.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter Carbs",value:v,onChange:function(e){return y(e.target.value)}})}),Object(g.jsx)("div",{className:"form-group",children:Object(g.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter Fats",value:x,onChange:function(e){return p(e.target.value)}})}),Object(g.jsx)("button",{id:"addDish-btn",className:"btn btn-primary",type:"submit",children:"Create Dish"})]})})]})},ue=function(){var e=Object(ne.h)().id,t=Object(ne.g)(),c=Object(l.b)(),a=Object(l.c)((function(e){return e.Dish.Dish})),n=Object(s.useState)(""),r=Object(i.a)(n,2),o=r[0],j=r[1],h=Object(s.useState)(""),u=Object(i.a)(h,2),O=u[0],x=u[1],p=Object(s.useState)(""),m=Object(i.a)(p,2),f=m[0],v=m[1],y=Object(s.useState)(""),N=Object(i.a)(y,2),M=N[0],D=N[1];Object(s.useEffect)((function(){null!=a&&(j(a.name),x(a.proteins),D(a.carbs),v(a.fats)),c(function(e){return{type:d,payload:e}}(e))}),[a]);var w=function(e){e.preventDefault();var s=Object.assign(a,{name:o,proteins:O,carbs:M,fats:f,calories:4*O+4*M+9*f});c(function(e){return{type:b,payload:e}}(s)),t.push("/admin")};return Object(g.jsxs)("div",{className:"card border-0 shadow",children:[Object(g.jsx)("div",{className:"card-header",children:"Add a Dish"}),Object(g.jsx)("div",{className:"card-body",children:Object(g.jsxs)("form",{onSubmit:function(e){return w(e)},children:[Object(g.jsx)("div",{className:"form-group",children:Object(g.jsx)("input",{type:"text",className:"form-control",placeholder:"Dish Name",value:o,onChange:function(e){return j(e.target.value)}})}),Object(g.jsx)("div",{className:"form-group",children:Object(g.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter Proteins",value:O,onChange:function(e){return x(e.target.value)}})}),Object(g.jsx)("div",{className:"form-group",children:Object(g.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter Carbs",value:M,onChange:function(e){return D(e.target.value)}})}),Object(g.jsx)("div",{className:"form-group",children:Object(g.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter Fats",value:f,onChange:function(e){return v(e.target.value)}})}),Object(g.jsx)("button",{className:"btn btn-warning",type:"submit",children:"Update Dish"})]})})]})},Oe=function(e){var t=e.children,c=Object(l.c)((function(e){return e.Auth.isAdmin}));return console.log(c),c?t:Object(g.jsx)(ne.a,{to:"/404"})},xe=function(){return Object(l.b)()({type:m}),Object(g.jsx)(ne.a,{to:"/"})};var pe=function(){return Object(g.jsx)(l.a,{store:I,children:Object(g.jsx)(o.a,{children:Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(N,{}),Object(g.jsx)("div",{className:"container",children:Object(g.jsx)("div",{className:"py-3",children:Object(g.jsxs)(ne.d,{children:[Object(g.jsx)(ne.b,{exact:!0,path:"/admin",children:Object(g.jsx)(Oe,{children:Object(g.jsx)(y,{})})}),Object(g.jsx)(ne.b,{exact:!0,path:"/admin/add",children:Object(g.jsx)(Oe,{children:Object(g.jsx)(he,{})})}),Object(g.jsx)(ne.b,{exact:!0,path:"/admin/edit/:id",children:Object(g.jsx)(Oe,{children:Object(g.jsx)(ue,{})})}),Object(g.jsx)(ne.b,{exact:!0,path:"/",component:V}),Object(g.jsx)(ne.b,{exact:!0,path:"/login",component:oe}),Object(g.jsx)(ne.b,{exact:!0,path:"/logout",component:xe}),Object(g.jsx)(ne.b,{exact:!0,component:je})]})})})]})})})};c(136);r.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)("persistGate",{persistor:T,children:Object(g.jsx)(pe,{})})}),document.getElementById("root"))},95:function(e,t,c){}},[[137,1,2]]]);
//# sourceMappingURL=main.20403078.chunk.js.map