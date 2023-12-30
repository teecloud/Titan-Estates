"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1008],{1008:(f,u,t)=>{t.r(u),t.d(u,{FirebaseProfilePageModule:()=>s});var b=t(6895),h=t(4006),g=t(3893),o=t(9267),i=t(7311),d=t(3678),v=t(5861),P=t(3900),M=t(5971),O=t(1198),m=t(7086),n=t(4650),C=t(9330),x=t(1408),Z=t(4840);const k=function(){return{w:1,h:1}};class p{constructor(e,r,c){this.router=e,this.route=r,this.authService=c}get isShell(){return!(!this.user||!this.user.isShell)}ngOnInit(){this.subscriptions=this.route.data.pipe((0,P.w)(e=>M.f.extractData(e.data,O.f))).subscribe({next:e=>{this.user=e},error:e=>console.log(e)})}signOut(){var e=this;return(0,v.Z)(function*(){try{yield e.authService.signOut().then(r=>{e.router.navigate(["firebase/auth/sign-in"],{replaceUrl:!0})}).catch(r=>{console.log("userProfile - signOut() - error",r)})}finally{console.log("userProfile - signOut() - finally")}})()}ionViewWillLeave(){this.subscriptions.unsubscribe()}}p.\u0275fac=function(e){return new(e||p)(n.Y36(g.F0),n.Y36(g.gz),n.Y36(m.X))},p.\u0275cmp=n.Xpm({type:p,selectors:[["app-firebase-profile"]],hostVars:2,hostBindings:function(e,r){2&e&&n.ekj("is-shell",r.isShell)},decls:37,vars:11,consts:[[1,"ion-no-border"],["slot","start"],["defaultHref","app/categories"],[1,"user-content"],[1,"ion-no-padding"],["animation","spinner",1,"user-image","add-overlay",3,"display","src","alt"],[3,"ratio"],[1,"user-details"],[1,"ion-no-padding","details-wrapper"],[1,"user-name"],[3,"data"],["name","checkmark-circle","color","bright-pink"],[1,"user-role"],[1,"user-description"],["lines","3",3,"data"],[1,"user-preferences-wrapper"],["size","12"],[1,"preference-name"],[1,"preference-value"],["expand","block","fill","outline","color","bright-blue",1,"sign-out-btn",3,"click"]],template:function(e,r){if(1&e&&(n.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),n._UZ(3,"ion-back-button",2),n.qZA()()(),n.TgZ(4,"ion-content",3)(5,"ion-row")(6,"ion-col",4)(7,"app-image-shell",5),n._UZ(8,"app-aspect-ratio",6),n.qZA()()(),n.TgZ(9,"ion-row",7)(10,"ion-col",8)(11,"h2",9),n._UZ(12,"app-text-shell",10)(13,"ion-icon",11),n.qZA(),n.TgZ(14,"span",12),n._UZ(15,"app-text-shell",10),n.qZA(),n.TgZ(16,"p",13),n._UZ(17,"app-text-shell",14),n.qZA()()(),n.TgZ(18,"ion-row",15)(19,"ion-col",16)(20,"h4",17),n._uU(21,"Mobile"),n.qZA(),n.TgZ(22,"p",18),n._UZ(23,"app-text-shell",10),n.qZA()(),n.TgZ(24,"ion-col",16)(25,"h4",17),n._uU(26,"Email"),n.qZA(),n.TgZ(27,"p",18),n._UZ(28,"app-text-shell",10),n.qZA()(),n.TgZ(29,"ion-col",16)(30,"h4",17),n._uU(31,"Auth Provider"),n.qZA(),n.TgZ(32,"p",18),n._UZ(33,"app-text-shell",10),n.qZA()(),n.TgZ(34,"ion-col",16)(35,"ion-button",19),n.NdJ("click",function(){return r.signOut()}),n._uU(36,"Sign out"),n.qZA()()()()),2&e){let c;n.xp6(7),n.Q6J("display","cover")("src",null!==(c=null==r.user?null:r.user.image)&&void 0!==c?c:"./assets/sample-images/avatar.png")("alt","item image"),n.xp6(1),n.Q6J("ratio",n.DdM(10,k)),n.xp6(4),n.Q6J("data",null==r.user?null:r.user.name),n.xp6(3),n.Q6J("data",null==r.user?null:r.user.role),n.xp6(2),n.Q6J("data",null==r.user?null:r.user.description),n.xp6(6),n.Q6J("data",null==r.user?null:r.user.phoneNumber),n.xp6(5),n.Q6J("data",null==r.user?null:r.user.email),n.xp6(5),n.Q6J("data",null==r.user?null:r.user.provider)}},dependencies:[o.oU,o.YG,o.Sm,o.wI,o.W2,o.Gu,o.gu,o.Nd,o.sr,o.cs,C.m,x.U,Z.$],styles:["[_nghost-%COMP%]{--page-margin: var(--app-broad-margin);--page-background: var(--app-background-shade);--ion-color-bright-blue: #001CFF;--ion-color-bright-blue-rgb: 0,28,255;--ion-color-bright-blue-contrast: #ffffff;--ion-color-bright-blue-contrast-rgb: 255,255,255;--ion-color-bright-blue-shade: #0019e0;--ion-color-bright-blue-tint: #1a33ff;--ion-color-bright-pink: #FF0DCB;--ion-color-bright-pink-rgb: 255,13,203;--ion-color-bright-pink-contrast: #ffffff;--ion-color-bright-pink-contrast-rgb: 255,255,255;--ion-color-bright-pink-shade: #e00bb3;--ion-color-bright-pink-tint: #ff25d0}[_nghost-%COMP%]   .ion-color-bright-blue[_ngcontent-%COMP%]{--ion-color-base: var(--ion-color-bright-blue) !important;--ion-color-base-rgb: var(--ion-color-bright-blue-rgb) !important;--ion-color-contrast: var(--ion-color-bright-blue-contrast) !important;--ion-color-contrast-rgb: var(--ion-color-bright-blue-contrast-rgb) !important;--ion-color-shade: var(--ion-color-bright-blue-shade) !important;--ion-color-tint: var(--ion-color-bright-blue-tint) !important}[_nghost-%COMP%]   .ion-color-bright-pink[_ngcontent-%COMP%]{--ion-color-base: var(--ion-color-bright-pink) !important;--ion-color-base-rgb: var(--ion-color-bright-pink-rgb) !important;--ion-color-contrast: var(--ion-color-bright-pink-contrast) !important;--ion-color-contrast-rgb: var(--ion-color-bright-pink-contrast-rgb) !important;--ion-color-shade: var(--ion-color-bright-pink-shade) !important;--ion-color-tint: var(--ion-color-bright-pink-tint) !important}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--ion-toolbar-background: transparent;--ion-toolbar-color: var(--ion-color-lightest)}ion-content[_ngcontent-%COMP%]{position:absolute;top:0}.user-content[_ngcontent-%COMP%]{--background: var(--page-background)}.user-content[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]{position:relative;z-index:2;-webkit-margin-start:var(--page-margin);margin-inline-start:var(--page-margin);-webkit-margin-end:var(--page-margin);margin-inline-end:var(--page-margin);padding:var(--page-margin);background-color:var(--ion-color-lightest);border-radius:calc(var(--app-broad-radius) * 2);text-align:center;margin-top:calc(var(--page-margin) * -4);box-shadow:0 10px 20px rgba(var(--ion-color-dark-rgb),.15),0 3px 6px rgba(var(--ion-color-dark-rgb),.1)}.user-content[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]{text-align:center;display:flex;flex-direction:column;align-items:center}.user-content[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;font-size:22px;margin-top:0;margin-bottom:calc(var(--page-margin) / 2);color:var(--ion-color-bright-blue)}.user-content[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{-webkit-margin-start:calc(var(--page-margin) / 2);margin-inline-start:calc(var(--page-margin) / 2);font-size:18px}.user-content[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .user-role[_ngcontent-%COMP%]{display:block;min-width:40%;font-size:14px;font-weight:500;color:var(--ion-color-medium-shade)}.user-content[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .user-description[_ngcontent-%COMP%]{min-width:100%;margin-top:var(--page-margin);margin-bottom:0;font-size:14px;color:var(--ion-color-medium-tint)}.user-content[_ngcontent-%COMP%]   .user-preferences-wrapper[_ngcontent-%COMP%]{--ion-grid-column-padding: 0px;padding:var(--page-margin)}.user-content[_ngcontent-%COMP%]   .user-preferences-wrapper[_ngcontent-%COMP%]   .preference-name[_ngcontent-%COMP%]{margin:0 0 5px;font-size:16px;color:var(--ion-color-bright-pink)}.user-content[_ngcontent-%COMP%]   .user-preferences-wrapper[_ngcontent-%COMP%]   .preference-value[_ngcontent-%COMP%]{margin:0px 0px calc(var(--page-margin) / 2);font-size:14px;line-height:1.4;color:var(--ion-color-dark-tint)}.user-content[_ngcontent-%COMP%]   .sign-out-btn[_ngcontent-%COMP%]{margin:0;margin-top:calc(var(--page-margin) * 4);color:#001cff}","app-image-shell.user-image[_ngcontent-%COMP%]{--image-shell-loading-background: rgba(var(--ion-color-bright-blue-rgb), .25);--image-shell-spinner-color: var(--ion-color-bright-blue-tint);--image-shell-border-radius: 0px 0px calc(var(--app-broad-radius) * 2) calc(var(--app-broad-radius) * 2);--image-shell-overlay-background: linear-gradient(180deg, rgba(var(--ion-color-dark-rgb), 1) 0%, rgba(var(--ion-color-dark-rgb), .4) 25%, rgba(var(--ion-color-dark-rgb), .15) 100%)}.user-name[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height: 22px;--text-shell-line-color: rgba(var(--ion-color-bright-blue-rgb), .2);min-width:180px}.user-name[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{min-width:0px}.user-role[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height: 14px;--text-shell-line-color: rgba(var(--ion-color-bright-blue-rgb), .15);max-width:40%}.user-role[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:inherit}.user-description[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height: 14px;--text-shell-line-color: rgba(var(--ion-color-bright-blue-rgb), .1)}.preference-value[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height: 14px;--text-shell-line-color: rgba(var(--ion-color-bright-pink-rgb), .1);max-width:40%}.preference-value[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:inherit}"]});class a{constructor(e){this.firebaseAuthService=e}resolve(){const e=this.firebaseAuthService.getProfileDataSource();return this.firebaseAuthService.getProfileStore(e)}}a.\u0275fac=function(e){return new(e||a)(n.LFG(m.X))},a.\u0275prov=n.Yz7({token:a,factory:a.\u0275fac});const y=[{path:"",component:p,resolve:{data:a},...(0,i.nW)(()=>(0,i.ik)(["/firebase/auth/sign-in"]))}];class s{}s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=n.oAB({type:s}),s.\u0275inj=n.cJS({providers:[a],imports:[b.ez,h.u5,h.UX,o.Pc,g.Bz.forChild(y),d.K]})},5971:(f,u,t)=>{t.d(u,{f:()=>g});var b=t(9760),h=t(9646);class g{static extractData(i,d){return i instanceof b.K?i.state:i instanceof d?(0,h.of)(i):void 0}}}}]);