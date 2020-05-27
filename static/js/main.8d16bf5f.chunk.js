(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{26:function(e,a,t){e.exports=t(37)},31:function(e,a,t){},37:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(23),m=t.n(r),c=(t(31),t(2)),o=t(4),s={root:function(){return"/"},about:function(){return"/about"},login:function(){return"/login"},account:function(){return"/account"},recoverPassword:function(){return"/password-recovery"},albums:function(){return"/albums"},album:function(e){return"/albums/".concat(e)},albumPhoto:function(e,a){return"/albums/".concat(e,"/photo/").concat(a)},admin:{root:function(){return"/admin"},users:function(){return"/admin/users"},user:function(e){return"/admin/users/".concat(e)}}},u=["ca","en"],i=function(){return n.a.createElement("div",{className:"flex pr-4 border-l"},u.map((function(e){return n.a.createElement("button",{key:e,className:"px-2 border-r border-muted-light uppercase ".concat("en"===e?"text-accent":"")},e)})))},d=function(){var e=!0,a=!0,t="Username";return n.a.createElement("nav",{className:"text-muted-light flex items-center w-full bg-header border-b py-2"},n.a.createElement("div",{className:"mx-4 flex items-center flex-grow"},n.a.createElement(c.b,{to:"/"},n.a.createElement("h1",{className:"text-xl"},"React Hooks")),e&&n.a.createElement(c.b,{className:"ml-4",to:s.albums()},"Albums"),a&&n.a.createElement(c.b,{className:"ml-4 text-muted-light",to:s.admin.users()},"Users")),n.a.createElement(c.b,{className:"mx-4",to:s.about()},"About"),n.a.createElement(i,null),n.a.createElement("button",null,"ligth"),n.a.createElement("div",{className:"mr-8"},n.a.createElement(c.b,{className:"ml-4",to:s.account()},t)),n.a.createElement("div",{className:"mr-8"},n.a.createElement(c.b,{className:"ml-4",to:s.login()},"Login")))},E=function(e){var a=e.breadcrumbs,t=void 0===a?[]:a,l=e.children;return n.a.createElement("div",{className:"flex flex-col text-default"},n.a.createElement(d,null),n.a.createElement("div",{className:"container mx-auto my-16 px-4"},n.a.createElement("div",{className:"flex text-muted","data-testid":"breadcrumbs"},t.reduce((function(e,a,t){return t>0&&e.push(n.a.createElement("label",{key:"separator-"+t,className:"px-2"},"/")),a.to?e.push(n.a.createElement(c.b,{key:a.label,className:"text-accent",to:a.to},a.label)):e.push(n.a.createElement("label",{key:a.label},a.label)),e}),[])),l))},b=function(){return n.a.createElement(E,null,"NotFoundPage")},p=function e(){return console.log("RENDER",e.name),n.a.createElement(E,null,n.a.createElement("h1",{className:"text-4xl"},"HomePage"))},h=function e(){return console.log("RENDER",e.name),n.a.createElement(E,{breadcrumbs:[{label:"home",to:s.root()}]},n.a.createElement("h1",{className:"text-4xl"},"AboutPage"))},x=t(39),f=function(e){e.onLogin;var a=Object(x.a)().formatMessage;return n.a.createElement("form",{"data-testid":"LoginForm",className:"flex flex-col max-w-sm mx-auto bg-card rounded p-4"},n.a.createElement("h1",{className:"font-medium text-2xl mb-4"},a({id:"LOGIN_TITLE"})),n.a.createElement("div",{className:"py-2 flex flex-col"},n.a.createElement("label",{htmlFor:"email"},"Email"),n.a.createElement("input",{name:"email",type:"text",className:"p-2 border border-muted-light bg-page",placeholder:"email@example.com"}),""),n.a.createElement("div",{className:"py-2 flex flex-col"},n.a.createElement("label",{htmlFor:"password"},"Password"),n.a.createElement("input",{name:"password",type:"password",className:"p-2 border border-muted-light my-1 bg-page",placeholder:"Password here"}),""),n.a.createElement("div",{className:"mt-4 flex items-center"},n.a.createElement("button",{className:"btn",type:"submit"},"Login"),n.a.createElement(c.b,{className:"ml-4",to:s.recoverPassword()},"Forgot password")))},N=function(){return n.a.createElement(E,null,n.a.createElement(f,{onLogin:function(e){return console.log("LOGIN",e)}}))},g=function e(){console.log("RENDER",e.name);var a=!0,t="Username";return n.a.createElement(E,null,n.a.createElement("div",null,n.a.createElement("div",{className:"mb-8"},a&&n.a.createElement("div",{className:"font-medium"},"Administrator"),n.a.createElement("h1",{className:"font-medium text-2xl"},t)),n.a.createElement("button",{className:"btn"},"Logout")))},v=t(24),y=function(){var e=Object(l.useState)(""),a=Object(v.a)(e,2),t=a[0],r=a[1];return n.a.createElement("form",{className:"flex flex-col max-w-sm mx-auto bg-card rounded p-4"},n.a.createElement("h1",{className:"font-medium text-2xl mb-4"},"Recover password"),n.a.createElement("div",{className:"py-2 flex flex-col"},n.a.createElement("label",null,"Email"),n.a.createElement("input",{className:"p-2 border my-1",type:"text",value:t,onChange:function(e){return r(e.target.value)}})),n.a.createElement("div",{className:"mt-4 flex items-center"},n.a.createElement("button",{className:"button",type:"submit"},"Send recovery"),n.a.createElement(c.b,{className:"ml-4",to:"/forgot-password"},"Back to login")))},R=function e(){return console.log("RENDER",e.name),n.a.createElement(E,null,n.a.createElement(y,null))},w=function e(){var a=I;return console.log("RENDER",e.name),n.a.createElement(E,{breadcrumbs:[{label:"home",to:s.root()}]},n.a.createElement("h1",{className:"text-4xl mb-4"},"Albums"),!1,a&&a.map((function(e){return n.a.createElement(c.b,{key:e.id,to:s.album(e.id)},n.a.createElement("div",{className:"flex flex-col p-4 my-4 bg-card rounded shadow-sm"},n.a.createElement("h2",{className:"text-accent text-2xl capitalize"},e.title),n.a.createElement("p",{className:"my-4"},e.body)))})))},I=[{id:"1",title:"et libero quasi",body:"tenetur ut quis\naspernatur ad vero itaque sit architecto excepturi omnis\nomnis repellendus maiores\nvel dolores unde omnis"},{id:"2",title:"in eos occaecati recusandae quia velit aut consectetur",body:"in est ea mollitia dolores consequatur\nqui est fugit magnam saepe ab praesentium omnis et\na atque eos voluptatem et et natus perspiciatis\nlaborum corporis blanditiis rerum adipisci voluptatem"}],L=function(e){var a=e.className,t=e.title,l=e.lorem,r=e.imageUrl,m=e.to;return n.a.createElement("div",{className:"".concat(a," bg-card max-w-xs rounded overflow-hidden shadow-lg mr-4 mb-4")},n.a.createElement("img",{className:"w-full",src:r,alt:t}),n.a.createElement("div",{className:"px-6 py-4"},n.a.createElement("div",{className:"font-bold text-xl mb-2"},m?n.a.createElement(c.b,{to:m},t):t),l&&n.a.createElement("p",{className:"text-gray-700 text-base"},l)))},U=function e(){var a=Object(o.f)().params,t=D,l=P;return console.log("RENDER",e.name,a),n.a.createElement(E,{breadcrumbs:[{label:"home",to:s.root()},{label:"albums",to:s.albums()},{label:"album"}]},n.a.createElement("h1",{className:"text-4xl mb-4"},t&&t.title||"Loading..."),n.a.createElement("div",{className:"flex flex-wrap"},l&&l.map((function(e){return n.a.createElement(c.b,{key:e.id,className:"w-1/5",to:s.albumPhoto(e.albumId,e.id)},n.a.createElement(L,{title:e.title,imageUrl:e.thumbnailUrl}))}))))},D={id:"1",title:"et libero quasi",description:"",photosCount:""},P=[{id:"1",albumId:"1",title:"quirem",url:"http://placehold.it/600/a15aae",thumbnailUrl:"http://placehold.it/150/a15aae"},{id:"2",albumId:"1",title:"repud",url:"http://placehold.it/600/993671",thumbnailUrl:"http://placehold.it/150/993671"}],k=function e(){console.log("RENDER",e.name);var a=Object(o.f)().params,t=q,l="2"===a.photoId?O[1]:O[0];return n.a.createElement(E,{breadcrumbs:[{label:"home",to:s.root()},{label:"albums",to:s.albums()},{label:t?t.title:"album",to:s.album(a.albumId)},{label:"photo"}]},n.a.createElement("h1",{className:"text-4xl mb-4"},l?l.title:"Loading..."),!1,l&&n.a.createElement("div",null,n.a.createElement("img",{src:l.url,alt:l.title})))},q={id:"1",title:"et libero quasi",description:"",photosCount:""},O=[{id:"1",albumId:"1",title:"quirem",url:"http://placehold.it/600/a15aae",thumbnailUrl:"http://placehold.it/150/a15aae"},{id:"2",albumId:"1",title:"repud",url:"http://placehold.it/600/993671",thumbnailUrl:"http://placehold.it/150/993671"}],A=function e(){var a=Object(x.a)().formatMessage,t=S;return console.log("RENDER",e.name),n.a.createElement(E,{breadcrumbs:[{label:"admin",to:s.admin.root()},{label:"users"}]},n.a.createElement("h1",{className:"text-4xl mb-4"},a({id:"ADMIN_USERS_TITLE"})),n.a.createElement("table",{className:"w-full"},n.a.createElement("thead",null,n.a.createElement("tr",{className:"text-left border-b border-muted"},n.a.createElement("th",{className:"py-2"},"Avatar"),n.a.createElement("th",{className:"py-2"},"Name"),n.a.createElement("th",{className:"py-2"},"Email"))),n.a.createElement("tbody",null,!1,t&&t.map((function(e){return n.a.createElement("tr",{className:"border-b border-muted",key:e.id},n.a.createElement("td",{className:"py-2"},n.a.createElement("img",{className:"rounded-full",src:e.avatarUrl.thumb,alt:e.name})),n.a.createElement("td",{className:"py-2"},n.a.createElement(c.b,{to:s.admin.user(e.id),className:"text-accent hover:underline"},e.name)),n.a.createElement("td",{className:"py-2"},e.email))})))))},S=[{id:"1",name:"Aurelie Erdman",email:"Ollie.Satterfield@addie.biz",avatarUrl:{thumb:"http://placehold.it/40/aaaaaa"}},{id:"2",name:"Elmo Weissnat",email:"Blair@roxane.me",avatarUrl:{thumb:"http://placehold.it/40/aaaaaa"}}],T=function e(){var a=Object(o.f)().params,t=j;return console.log("RENDER",e.name,a),n.a.createElement(E,{breadcrumbs:[{label:"admin",to:s.admin.root()},{label:"users",to:s.admin.users()},{label:"user"}]},n.a.createElement("h1",{className:"text-4xl mb-4"},t&&t.name),n.a.createElement("div",null,t&&t.email))},j={id:"1",name:"Grace Hopper",email:"grace.hopper@nasa.gov"},_=function e(){return console.log("RENDER",e.name),n.a.createElement(E,{breadcrumbs:[{label:"admin"}]},n.a.createElement("h1",{className:"text-4xl"},"AdminHomePage"))},F=function e(){return console.log("RENDER",e.name),n.a.createElement(c.a,null,n.a.createElement(o.c,null,n.a.createElement(o.a,{exact:!0,path:s.about()},n.a.createElement(h,null)),n.a.createElement(o.a,{path:"/admin"},n.a.createElement(o.c,null,n.a.createElement(o.a,{exact:!0,path:s.admin.root()},n.a.createElement(_,null)),n.a.createElement(o.a,{exact:!0,path:s.admin.users()},n.a.createElement(A,null)),n.a.createElement(o.a,{exact:!0,path:s.admin.user(":id")},n.a.createElement(T,null)),n.a.createElement(o.a,{path:"*"},n.a.createElement(b,null)))),n.a.createElement(o.c,null,n.a.createElement(o.a,{exact:!0,path:s.root()},n.a.createElement(p,null)),n.a.createElement(o.a,{exact:!0,path:s.account()},n.a.createElement(g,null)),n.a.createElement(o.a,{exact:!0,path:s.albums()},n.a.createElement(w,null)),n.a.createElement(o.a,{exact:!0,path:s.album(":id")},n.a.createElement(U,null)),n.a.createElement(o.a,{exact:!0,path:s.albumPhoto(":albumId",":photoId")},n.a.createElement(k,null)),n.a.createElement(o.a,{exact:!0,path:s.recoverPassword()},n.a.createElement(R,null)),n.a.createElement(o.a,{exact:!0,to:s.login()},n.a.createElement(N,null))),!1))},M=t(40),G={LOGIN_TITLE:"Login",ADMIN_USERS_TITLE:"User list"},H=function e(){return console.log("RENDER",e.name),n.a.createElement(M.a,{locale:"en",messages:G},n.a.createElement(F,null))};m.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(H,null)),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.8d16bf5f.chunk.js.map