"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4394],{9760:(U,m,s)=>{s.d(m,{K:()=>M,n:()=>v});var a=s(4707),c=s(9646),_=s(9841),o=s(1005),l=s(4004),u=s(8675),O=s(2340);class v{constructor(){this.isShell=!1}}class M{constructor(g){this.shellModel=g,this.networkDelay=O.N.appShellConfig&&O.N.appShellConfig.networkDelay?O.N.appShellConfig.networkDelay:0,this.timeline=new a.t(1)}static AppendShell(g,f,h=400){const d=(0,c.of)(!0).pipe((0,o.g)(h));return(0,_.a)([d,g]).pipe((0,l.U)(([x,T])=>Object.assign(T,{isShell:!1})),(0,u.O)(Object.assign(f,{isShell:!0})))}load(g,f){const h="number"==typeof f?f:this.networkDelay;let d;d=0===h?g:M.AppendShell(g,this.shellModel,h),d.subscribe(x=>{this.timeline.next(x)})}get state(){return this.timeline.asObservable()}}},4394:(U,m,s)=>{s.r(m),s.d(m,{UserFriendsPageModule:()=>P});var a=s(6895),c=s(4006),_=s(3893),o=s(9267),l=s(3678),u=s(1584),O=s(5971),v=s(3258),M=s(3900),e=s(4650),g=s(9330),f=s(1408),h=s(4840);function d(t,n){1&t&&(e.TgZ(0,"ion-button",25),e._uU(1,"Follow"),e.qZA())}function x(t,n){1&t&&(e.TgZ(0,"ion-button",26),e._uU(1,"Following"),e.qZA())}const T=function(){return{w:1,h:1}};function Z(t,n){if(1&t&&(e.TgZ(0,"ion-row",13)(1,"ion-col",14)(2,"app-aspect-ratio",15),e._UZ(3,"app-image-shell",16),e.qZA()(),e.TgZ(4,"ion-col",17)(5,"div",18)(6,"h3",19),e._UZ(7,"app-text-shell",20),e.qZA(),e.TgZ(8,"h5",21),e._UZ(9,"app-text-shell",20),e.qZA()()(),e.TgZ(10,"ion-col",22),e.YNc(11,d,2,0,"ion-button",23),e.YNc(12,x,2,0,"ion-button",24),e.qZA()()),2&t){const i=n.friend;e.xp6(2),e.Q6J("ratio",e.DdM(7,T)),e.xp6(1),e.Q6J("src",i.image)("alt","friend"),e.xp6(4),e.Q6J("data",i.name),e.xp6(2),e.Q6J("data",i.job),e.xp6(2),e.Q6J("ngIf",!i.following),e.xp6(1),e.Q6J("ngIf",i.following)}}function F(t,n){1&t&&e.GkF(0)}const b=function(t){return{friend:t}};function A(t,n){if(1&t&&(e.TgZ(0,"ion-item",29),e.YNc(1,F,1,0,"ng-container",30),e.qZA()),2&t){const i=n.$implicit;e.oxw(2);const r=e.MAs(17);e.xp6(1),e.Q6J("ngTemplateOutlet",r)("ngTemplateOutletContext",e.VKq(2,b,i))}}function L(t,n){if(1&t&&(e.TgZ(0,"ion-list",27),e.YNc(1,A,2,4,"ion-item",28),e.qZA()),2&t){const i=e.oxw();e.xp6(1),e.Q6J("ngForOf",i.friendsList)}}function Q(t,n){1&t&&(e.ynx(0),e.TgZ(1,"h3",31),e._uU(2,"No Friends"),e.qZA(),e.BQk())}function y(t,n){1&t&&e.GkF(0)}function J(t,n){if(1&t&&(e.TgZ(0,"ion-item",29),e.YNc(1,y,1,0,"ng-container",30),e.qZA()),2&t){const i=n.$implicit;e.oxw(2);const r=e.MAs(17);e.xp6(1),e.Q6J("ngTemplateOutlet",r)("ngTemplateOutletContext",e.VKq(2,b,i))}}function E(t,n){if(1&t&&(e.TgZ(0,"ion-list",27),e.YNc(1,J,2,4,"ion-item",28),e.qZA()),2&t){const i=e.oxw();e.xp6(1),e.Q6J("ngForOf",i.followersList)}}function I(t,n){1&t&&(e.ynx(0),e.TgZ(1,"h3",31),e._uU(2,"No Followers"),e.qZA(),e.BQk())}function D(t,n){1&t&&e.GkF(0)}function N(t,n){if(1&t&&(e.TgZ(0,"ion-item",29),e.YNc(1,D,1,0,"ng-container",30),e.qZA()),2&t){const i=n.$implicit;e.oxw(2);const r=e.MAs(17);e.xp6(1),e.Q6J("ngTemplateOutlet",r)("ngTemplateOutletContext",e.VKq(2,b,i))}}function S(t,n){if(1&t&&(e.TgZ(0,"ion-list",27),e.YNc(1,N,2,4,"ion-item",28),e.qZA()),2&t){const i=e.oxw();e.xp6(1),e.Q6J("ngForOf",i.followingList)}}function j(t,n){1&t&&(e.ynx(0),e.TgZ(1,"h3",31),e._uU(2,"No Following"),e.qZA(),e.BQk())}class C{constructor(n){this.route=n,this.segmentValue="friends",this.searchQuery="",this.showFilters=!1}get isShell(){return!(!this.data||!this.data.isShell)}ngOnInit(){this.subscriptions=this.route.data.pipe((0,M.w)(n=>O.f.extractData(n.data,v.p))).subscribe({next:n=>{this.data=n,this.friendsList=this.data.friends,this.followersList=this.data.followers,this.followingList=this.data.following},error:n=>console.log(n)})}segmentChanged(n){this.segmentValue=n.detail.value,this.searchList()}searchList(){const n=this.searchQuery&&null!==this.searchQuery?this.searchQuery:"";"friends"===this.segmentValue?this.friendsList=this.filterList(this.data.friends,n):"followers"===this.segmentValue?this.followersList=this.filterList(this.data.followers,n):"following"===this.segmentValue&&(this.followingList=this.filterList(this.data.following,n))}filterList(n,i){return n.filter(r=>r.name.toLowerCase().includes(i.toLowerCase()))}ionViewWillLeave(){this.subscriptions.unsubscribe()}}C.\u0275fac=function(n){return new(n||C)(e.Y36(_.gz))},C.\u0275cmp=e.Xpm({type:C,selectors:[["app-user-friends"]],hostVars:2,hostBindings:function(n,i){2&n&&e.ekj("is-shell",i.isShell)},decls:27,vars:10,consts:[[1,"ion-no-border"],["slot","start"],["defaultHref","app/user"],[1,"user-friends-content"],["value","friends",1,"user-friends-segment",3,"ionChange"],["value","friends"],["value","followers"],["value","following"],["animated","",1,"friends-searchbar",3,"ngModel","ngModelChange","ionChange"],["friendItem",""],[3,"hidden"],["class","friends-list",4,"ngIf"],[4,"ngIf"],[1,"user-details-section"],["size","2",1,"user-image-wrapper"],[3,"ratio"],["animation","spinner",1,"user-image",3,"src","alt"],[1,"user-data-wrapper"],[1,"user-info"],[1,"user-name"],[3,"data"],[1,"user-job"],[1,"user-actions-wrapper"],["class","user-action","expand","block","size","small","color","primary",4,"ngIf"],["class","user-action","expand","block","size","small","color","light",4,"ngIf"],["expand","block","size","small","color","primary",1,"user-action"],["expand","block","size","small","color","light",1,"user-action"],[1,"friends-list"],["class","friend-item",4,"ngFor","ngForOf"],[1,"friend-item"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"empty-list-message"]],template:function(n,i){1&n&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),e._UZ(3,"ion-back-button",2),e.qZA()()(),e.TgZ(4,"ion-content",3)(5,"ion-segment",4),e.NdJ("ionChange",function(w){return i.segmentChanged(w)}),e.TgZ(6,"ion-segment-button",5)(7,"ion-label"),e._uU(8,"Friends"),e.qZA()(),e.TgZ(9,"ion-segment-button",6)(10,"ion-label"),e._uU(11,"Followers"),e.qZA()(),e.TgZ(12,"ion-segment-button",7)(13,"ion-label"),e._uU(14,"Following"),e.qZA()()(),e.TgZ(15,"ion-searchbar",8),e.NdJ("ngModelChange",function(w){return i.searchQuery=w})("ionChange",function(){return i.searchList()}),e.qZA(),e.YNc(16,Z,13,8,"ng-template",null,9,e.W1O),e.TgZ(18,"section",10),e.YNc(19,L,2,1,"ion-list",11),e.YNc(20,Q,3,0,"ng-container",12),e.qZA(),e.TgZ(21,"section",10),e.YNc(22,E,2,1,"ion-list",11),e.YNc(23,I,3,0,"ng-container",12),e.qZA(),e.TgZ(24,"section",10),e.YNc(25,S,2,1,"ion-list",11),e.YNc(26,j,3,0,"ng-container",12),e.qZA()()),2&n&&(e.xp6(15),e.Q6J("ngModel",i.searchQuery),e.xp6(3),e.Q6J("hidden","friends"!==i.segmentValue),e.xp6(1),e.Q6J("ngIf",i.friendsList.length>0),e.xp6(1),e.Q6J("ngIf",i.friendsList.length<=0),e.xp6(1),e.Q6J("hidden","followers"!==i.segmentValue),e.xp6(1),e.Q6J("ngIf",i.followersList.length>0),e.xp6(1),e.Q6J("ngIf",i.followersList.length<=0),e.xp6(1),e.Q6J("hidden","following"!==i.segmentValue),e.xp6(1),e.Q6J("ngIf",i.followingList.length>0),e.xp6(1),e.Q6J("ngIf",i.followingList.length<=0))},dependencies:[o.oU,o.YG,o.Sm,o.wI,o.W2,o.Gu,o.Ie,o.Q$,o.q_,o.Nd,o.VI,o.cJ,o.GO,o.sr,o.QI,o.j9,o.cs,a.sg,a.O5,a.tP,c.JJ,c.On,g.m,f.U,h.$],styles:["[_nghost-%COMP%]{--page-margin: var(--app-narrow-margin);--page-border-radius: var(--app-fair-radius);--page-segment-background: var(--app-background);--page-segment-indicator-height: 2px}.user-friends-segment[_ngcontent-%COMP%]{--background: var(--page-segment-background);position:sticky;top:0;z-index:8}.user-friends-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]{--padding-end: var(--page-margin);--padding-start: var(--page-margin);--color: rgba(var(--ion-color-dark-rgb), .4);--indicator-color: var(--ion-color-dark);text-transform:capitalize;min-height:calc(var(--page-margin) * 3 - var(--page-segment-indicator-height))}ion-searchbar.friends-searchbar[_ngcontent-%COMP%]{padding:calc(var(--page-margin) * 1.5) var(--page-margin)}.friends-list[_ngcontent-%COMP%]{padding:0px var(--page-margin);margin-bottom:calc(var(--page-margin) * 3)}.empty-list-message[_ngcontent-%COMP%]{margin:calc(var(--page-margin) * 3);color:rgba(var(--ion-color-dark-rgb),.4);text-align:center}ion-item.friend-item[_ngcontent-%COMP%]{--inner-padding-start: 0px;--inner-padding-end: 0px;--padding-start: 0px;--padding-end: 0px;--padding-bottom: var(--page-margin);--inner-padding-bottom: var(--page-margin)}ion-item.friend-item[_ngcontent-%COMP%]:last-child{--border-style: none;--padding-bottom: 0px;--inner-padding-bottom: 0px}ion-item.friend-item[_ngcontent-%COMP%]   .user-details-section[_ngcontent-%COMP%]{--ion-grid-column-padding: 0px;width:100%;align-items:center}ion-item.friend-item[_ngcontent-%COMP%]   .user-details-section[_ngcontent-%COMP%]   .user-data-wrapper[_ngcontent-%COMP%]{padding-left:var(--page-margin);padding-right:calc(var(--page-margin) / 2);display:flex;flex-direction:column;justify-content:center}ion-item.friend-item[_ngcontent-%COMP%]   .user-details-section[_ngcontent-%COMP%]   .user-data-wrapper[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]:not(:last-child){margin-bottom:calc(var(--page-margin) / 2)}ion-item.friend-item[_ngcontent-%COMP%]   .user-details-section[_ngcontent-%COMP%]   .user-data-wrapper[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]{margin:0 0 4px;font-size:16px}ion-item.friend-item[_ngcontent-%COMP%]   .user-details-section[_ngcontent-%COMP%]   .user-data-wrapper[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-job[_ngcontent-%COMP%]{margin:0;color:rgba(var(--ion-color-dark-rgb),.4);font-size:14px}ion-item.friend-item[_ngcontent-%COMP%]   .user-details-section[_ngcontent-%COMP%]   .user-actions-wrapper[_ngcontent-%COMP%]{font-size:14px;max-width:10ex;max-width:10ch}ion-item.friend-item[_ngcontent-%COMP%]   .user-details-section[_ngcontent-%COMP%]   .user-actions-wrapper[_ngcontent-%COMP%]   .user-action[_ngcontent-%COMP%]{margin:0}","app-image-shell.user-image[_ngcontent-%COMP%]{--image-shell-border-radius: var(--page-border-radius)}.user-name[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height: 16px;max-width:50%}.user-name[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:unset}.user-job[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height: 14px;max-width:70%}.user-job[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:unset}",".ios[_nghost-%COMP%]   .user-friends-segment[_ngcontent-%COMP%], .ios   [_nghost-%COMP%]   .user-friends-segment[_ngcontent-%COMP%]{--background: var(--page-segment-background);padding:var(--page-margin)}.ios[_nghost-%COMP%]   .user-friends-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%], .ios   [_nghost-%COMP%]   .user-friends-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]{--color-checked: var(--ion-color-light)}.ios[_nghost-%COMP%]   ion-searchbar.friends-searchbar[_ngcontent-%COMP%], .ios   [_nghost-%COMP%]   ion-searchbar.friends-searchbar[_ngcontent-%COMP%]{padding-top:0}",".md[_nghost-%COMP%]   .user-details-section[_ngcontent-%COMP%]   .user-actions-wrapper[_ngcontent-%COMP%], .md   [_nghost-%COMP%]   .user-details-section[_ngcontent-%COMP%]   .user-actions-wrapper[_ngcontent-%COMP%]{max-width:12ex;max-width:12ch}.md[_nghost-%COMP%]   .user-friends-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%], .md   [_nghost-%COMP%]   .user-friends-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]{--color-checked: var(--ion-color-dark)}"]});class p{constructor(n){this.userService=n}resolve(){const n=this.userService.getFriendsDataSource();return this.userService.getFriendsStore(n)}}p.\u0275fac=function(n){return new(n||p)(e.LFG(u.K))},p.\u0275prov=e.Yz7({token:p,factory:p.\u0275fac});const Y=[{path:"",component:C,resolve:{data:p}}];class P{}P.\u0275fac=function(n){return new(n||P)},P.\u0275mod=e.oAB({type:P}),P.\u0275inj=e.cJS({providers:[p,u.K],imports:[o.Pc,a.ez,c.u5,l.K,_.Bz.forChild(Y)]})},5971:(U,m,s)=>{s.d(m,{f:()=>_});var a=s(9760),c=s(9646);class _{static extractData(l,u){return l instanceof a.K?l.state:l instanceof u?(0,c.of)(l):void 0}}}}]);