"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7110],{7110:(C,u,r)=>{r.r(u),r.d(u,{LoginPageModule:()=>c});var s=r(6895),e=r(4006),p=r(3893),t=r(9267),d=r(3678),n=r(4650),m=r(6089);function _(i,a){if(1&i&&(n.TgZ(0,"div",22),n._UZ(1,"ion-icon",23),n.TgZ(2,"span"),n._uU(3),n.qZA()()),2&i){const o=n.oxw().$implicit;n.xp6(3),n.Oqu(o.message)}}function h(i,a){if(1&i&&(n.ynx(0),n.YNc(1,_,4,1,"div",21),n.BQk()),2&i){const o=a.$implicit,g=n.oxw();n.xp6(1),n.Q6J("ngIf",g.loginForm.get("email").hasError(o.type)&&(g.loginForm.get("email").dirty||g.loginForm.get("email").touched))}}function P(i,a){if(1&i&&(n.TgZ(0,"div",22),n._UZ(1,"ion-icon",23),n.TgZ(2,"span"),n._uU(3),n.qZA()()),2&i){const o=n.oxw().$implicit;n.xp6(3),n.Oqu(o.message)}}function f(i,a){if(1&i&&(n.ynx(0),n.YNc(1,P,4,1,"div",21),n.BQk()),2&i){const o=a.$implicit,g=n.oxw();n.xp6(1),n.Q6J("ngIf",g.loginForm.get("password").hasError(o.type)&&(g.loginForm.get("password").dirty||g.loginForm.get("password").touched))}}const b=function(){return["/auth/forgot-password"]},v=function(){return["/auth/signup"]};class l{constructor(a,o){this.router=a,this.menu=o,this.validation_messages={email:[{type:"required",message:"Email is required."},{type:"pattern",message:"Enter a valid email."}],password:[{type:"required",message:"Password is required."},{type:"minlength",message:"Password must be at least 5 characters long."}]},this.loginForm=new e.nJ({email:new e.p4("test@test.com",e.kI.compose([e.kI.required,e.kI.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")])),password:new e.p4("",e.kI.compose([e.kI.minLength(5),e.kI.required]))})}ionViewDidEnter(){this.menu.enable(!1)}ionViewDidLeave(){this.menu.enable(!0)}doLogin(){console.log("do Log In"),this.router.navigate(["app/categories"])}goToForgotPassword(){console.log("redirect to forgot-password page")}doFacebookLogin(){console.log("facebook login"),this.router.navigate(["app/categories"])}doGoogleLogin(){console.log("google login"),this.router.navigate(["app/categories"])}doTwitterLogin(){console.log("twitter login"),this.router.navigate(["app/categories"])}doAppleLogin(){console.log("apple login"),this.router.navigate(["app/categories"])}}l.\u0275fac=function(a){return new(a||l)(n.Y36(p.F0),n.Y36(t._q))},l.\u0275cmp=n.Xpm({type:l,selectors:[["app-login"]],decls:40,vars:8,consts:[["color","primary"],["slot","start"],[1,"login-content"],[1,"auth-title"],[3,"formGroup","ngSubmit"],["lines","full",1,"inputs-list"],[1,"input-item"],["type","email","placeholder","Email","formControlName","email","clearInput","","autocapitalize","off","inputmode","email"],[1,"error-container"],[4,"ngFor","ngForOf"],["type","password","placeholder","Password","formControlName","password"],["type","submit","expand","block",1,"login-btn",3,"disabled"],[1,"other-auth-options-row"],["fill","clear",1,"forgot-btn",3,"routerLink"],["fill","clear",1,"signup-btn",3,"routerLink"],[1,"social-auth-options"],[1,"options-divider"],["expand","block","color","facebook",1,"social-auth-btn","facebook-auth-btn",3,"click"],["expand","block","color","google",1,"social-auth-btn","google-auth-btn",3,"click"],["expand","block","color","twitter",1,"social-auth-btn","twitter-auth-btn",3,"click"],["expand","block","color","dark",1,"social-auth-btn","apple-auth-btn",3,"click"],["class","error-message",4,"ngIf"],[1,"error-message"],["name","information-circle-outline"]],template:function(a,o){1&a&&(n.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),n._UZ(3,"ion-back-button"),n.qZA(),n.TgZ(4,"ion-title"),n._uU(5,"Log In"),n.qZA()()(),n.TgZ(6,"ion-content",2)(7,"h2",3),n._uU(8," Welcome! "),n._UZ(9,"br"),n._uU(10," Discover the new Ionic 6 "),n.qZA(),n.TgZ(11,"form",4),n.NdJ("ngSubmit",function(){return o.doLogin()}),n.TgZ(12,"ion-list",5)(13,"ion-item",6),n._UZ(14,"ion-input",7),n.qZA(),n.TgZ(15,"div",8),n.YNc(16,h,2,1,"ng-container",9),n.qZA(),n.TgZ(17,"ion-item",6)(18,"app-show-hide-password"),n._UZ(19,"ion-input",10),n.qZA()(),n.TgZ(20,"div",8),n.YNc(21,f,2,1,"ng-container",9),n.qZA()(),n.TgZ(22,"ion-button",11),n._uU(23,"Log In"),n.qZA(),n.TgZ(24,"ion-row",12)(25,"ion-button",13),n._uU(26," Forgot Password? "),n.qZA(),n.TgZ(27,"ion-button",14),n._uU(28," Sign Up! "),n.qZA()()(),n.TgZ(29,"div",15)(30,"p",16),n._uU(31,"Or"),n.qZA(),n.TgZ(32,"ion-button",17),n.NdJ("click",function(){return o.doFacebookLogin()}),n._uU(33,"Log In with Facebook"),n.qZA(),n.TgZ(34,"ion-button",18),n.NdJ("click",function(){return o.doGoogleLogin()}),n._uU(35,"Log In with Google"),n.qZA(),n.TgZ(36,"ion-button",19),n.NdJ("click",function(){return o.doTwitterLogin()}),n._uU(37,"Log In with Twitter"),n.qZA(),n.TgZ(38,"ion-button",20),n.NdJ("click",function(){return o.doAppleLogin()}),n._uU(39,"Log In with Apple"),n.qZA()()()),2&a&&(n.xp6(11),n.Q6J("formGroup",o.loginForm),n.xp6(5),n.Q6J("ngForOf",o.validation_messages.email),n.xp6(5),n.Q6J("ngForOf",o.validation_messages.password),n.xp6(1),n.Q6J("disabled",!o.loginForm.valid),n.xp6(3),n.Q6J("routerLink",n.DdM(6,b)),n.xp6(2),n.Q6J("routerLink",n.DdM(7,v)))},dependencies:[s.sg,s.O5,e._Y,e.JJ,e.JL,e.sg,e.u,t.oU,t.YG,t.Sm,t.W2,t.Gu,t.gu,t.pK,t.Ie,t.q_,t.Nd,t.wd,t.sr,t.j9,t.cs,t.YI,p.rH,m.q],styles:["[_nghost-%COMP%]{--page-margin: var(--app-broad-margin);--page-background: var(--app-background-shade)}.login-content[_ngcontent-%COMP%]{--background: var(--page-background);--padding-start: var(--page-margin);--padding-end: var(--page-margin);--padding-top: var(--page-margin);--padding-bottom: var(--page-margin)}.login-content[_ngcontent-%COMP%]   .auth-title[_ngcontent-%COMP%]{color:var(--ion-color-dark);font-weight:700;margin-top:calc(var(--page-margin) / 2);margin-bottom:calc(var(--page-margin) * 1.5);letter-spacing:.6px}.login-content[_ngcontent-%COMP%]   .inputs-list[_ngcontent-%COMP%]{--ion-item-background: var(--page-background)}.login-content[_ngcontent-%COMP%]   .inputs-list[_ngcontent-%COMP%]   .input-item[_ngcontent-%COMP%]{--padding-start: 0px;--padding-end: 0px;--inner-padding-end: 0px}.login-content[_ngcontent-%COMP%]   .inputs-list[_ngcontent-%COMP%]   .error-container[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]{margin:calc(var(--page-margin) / 2) 0px;display:flex;align-items:center;color:var(--ion-color-danger);font-size:14px}.login-content[_ngcontent-%COMP%]   .inputs-list[_ngcontent-%COMP%]   .error-container[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{-webkit-padding-end:calc(var(--page-margin) / 2);padding-inline-end:calc(var(--page-margin) / 2)}.login-content[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]{margin:calc(var(--page-margin) / 2) 0px}.login-content[_ngcontent-%COMP%]   .other-auth-options-row[_ngcontent-%COMP%]{justify-content:space-between;align-items:center}.login-content[_ngcontent-%COMP%]   .other-auth-options-row[_ngcontent-%COMP%]   .forgot-btn[_ngcontent-%COMP%]{--color: var(--ion-color-medium);margin:0}.login-content[_ngcontent-%COMP%]   .other-auth-options-row[_ngcontent-%COMP%]   .forgot-btn[_ngcontent-%COMP%]:focus{outline:none}.login-content[_ngcontent-%COMP%]   .other-auth-options-row[_ngcontent-%COMP%]   .signup-btn[_ngcontent-%COMP%]{--color: var(--ion-color-secondary);margin:0}.login-content[_ngcontent-%COMP%]   .other-auth-options-row[_ngcontent-%COMP%]   .signup-btn[_ngcontent-%COMP%]:focus{outline:none}.login-content[_ngcontent-%COMP%]   .social-auth-options[_ngcontent-%COMP%]   .options-divider[_ngcontent-%COMP%]{color:var(--ion-color-medium);margin:var(--page-margin) 0px;text-align:center}.login-content[_ngcontent-%COMP%]   .social-auth-options[_ngcontent-%COMP%]   .social-auth-btn[_ngcontent-%COMP%]{margin:0}.login-content[_ngcontent-%COMP%]   .social-auth-options[_ngcontent-%COMP%]   .social-auth-btn[_ngcontent-%COMP%]:not(:first-child){margin-top:var(--page-margin)}"]});const O=[{path:"",component:l}];class c{}c.\u0275fac=function(a){return new(a||c)},c.\u0275mod=n.oAB({type:c}),c.\u0275inj=n.cJS({imports:[s.ez,e.u5,e.UX,t.Pc,p.Bz.forChild(O),d.K]})}}]);