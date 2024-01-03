"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5749],{5749:($,b,i)=>{i.r(b),i.d(b,{FirebaseListingPageModule:()=>l});var d=i(6895),a=i(4006),C=i(3893),o=i(9267),_=i(5861),f=i(4707),x=i(6451),v=i(3900),Z=i(4004),M=i(1896),w=i(1764),k=i(8749),F=i(8209),U=i(6363),u=i(2283),y=i(7706),T=i(2993),e=i(4650),O=i(9330),P=i(1408);function A(r,t){1&r&&(e.TgZ(0,"ion-text",40),e._uU(1,"Select a date"),e.qZA())}function S(r,t){if(1&r&&(e.TgZ(0,"ion-text"),e._uU(1),e.qZA()),2&r){const n=e.oxw();e.xp6(1),e.Oqu(n.formattedDate)}}function q(r,t){if(1&r){const n=e.EpF();e.TgZ(0,"ion-content")(1,"ion-datetime",41),e.NdJ("ionChange",function(){e.CHM(n);const g=e.oxw();return e.KtG(g.formatDate())}),e.qZA()()}2&r&&(e.xp6(1),e.Q6J("showDefaultButtons",!0))}function J(r,t){if(1&r&&(e.TgZ(0,"ion-item",42)(1,"ion-label",43),e._uU(2),e.qZA(),e._UZ(3,"ion-checkbox",44),e.qZA()),2&r){const n=t.index,s=e.oxw();e.xp6(2),e.Oqu(s.skills[n].name),e.xp6(1),e.Q6J("formControlName",n)}}const L=function(){return{w:1,h:1}};class p{constructor(t,n){this.modalController=t,this.firebaseCrudService=n,this.userData=new F.QS,this.skills=[]}ngOnInit(){this.userData.avatar="https://s3-us-west-2.amazonaws.com/ionicthemes/otros/avatar-placeholder.png",this.createUserForm=new a.nJ({name:new a.p4("",a.kI.required),lastname:new a.p4("",a.kI.required),email:new a.p4("",a.kI.compose([a.kI.required,a.kI.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")])),phone:new a.p4("",a.kI.required),birthdate:new a.p4(null,a.kI.required),skills:new a.vC([],k.Z.minSelectedCheckboxes(1)),spanish:new a.p4,english:new a.p4,french:new a.p4}),this.firebaseCrudService.getSkills().subscribe(t=>{this.skills=t,this.skills.map(()=>{this.createUserForm.controls.skills.push(new a.p4)})})}formatDate(){this.formattedDate=(0,y.Z)((0,T.Z)(this.createUserForm.value.birthdate),"MMM d, yyyy")}get skillsFormArray(){return this.createUserForm.get("skills")}changeLangValue(t){switch(!0){case t<=3:return"Novice";case t>3&&t<=6:return"Competent";case t>6:return"Expert"}}dismissModal(){this.modalController.dismiss(void 0,void 0,this.modalId)}createUser(){this.userData.name=this.createUserForm.value.name,this.userData.lastname=this.createUserForm.value.lastname,this.userData.birthdate=w(this.createUserForm.value.birthdate).unix(),this.userData.phone=this.createUserForm.value.phone,this.userData.email=this.createUserForm.value.email,this.userData.languages.spanish=this.createUserForm.value.spanish,this.userData.languages.english=this.createUserForm.value.english,this.userData.languages.french=this.createUserForm.value.french;const t=[];this.createUserForm.value.skills.map((n,s)=>{n&&t.push(this.skills[s].id)}),this.userData.skills=t,this.firebaseCrudService.createUser(this.userData).then(()=>{this.dismissModal()})}changeUserImage(){var t=this;return(0,_.Z)(function*(){const n=yield t.modalController.create({component:U.U,swipeToClose:!0,presentingElement:yield t.modalController.getTop()});n.onDidDismiss().then(s=>{null!=s.data&&(t.userData.avatar=s.data.link)}),yield n.present()})()}}p.\u0275fac=function(t){return new(t||p)(e.Y36(o.IN),e.Y36(u.T))},p.\u0275cmp=e.Xpm({type:p,selectors:[["app-firebase-create-user"]],inputs:{modalId:"modalId"},decls:80,vars:14,consts:[[1,"create-user-form","ion-page",3,"formGroup","ngSubmit"],["color","primary"],["slot","end"],[3,"click"],["slot","icon-only","name","close"],[1,"create-user-content"],[1,"select-user-image-row"],["size","5",1,"user-image-col"],[3,"ratio"],["animation","spinner",1,"user-image",3,"display","src","alt"],["color","secondary",1,"change-image-btn",3,"click"],["slot","icon-only","name","camera",1,"btn-icon"],[1,"user-details-fields","fields-section"],["lines","full",1,"inputs-list"],[1,"input-item"],["color","secondary","position","floating"],["type","text","formControlName","name","required",""],["type","text","formControlName","lastname","required",""],["id","open-datetime","id","open-birthdate-modal",1,"input-item","birthdate-item",3,"button"],["color","secondary","position","stacked"],["class","placeholder",4,"ngIf"],[4,"ngIf"],["trigger","open-birthdate-modal",1,"datetime-modal"],["type","tel","formControlName","phone","required",""],["type","email","formControlName","email","required",""],[1,"user-experience-fields","fields-section"],[1,"section-header"],[1,"checkbox-tags","rounded-checkbox-tags"],["formArrayName","skills","lines","none","class","checkbox-tag rounded-tag",4,"ngFor","ngForOf"],[1,"user-languages-fields","fields-section"],[1,"range-item-row"],["size","12"],[1,"range-header"],[1,"range-label"],[1,"range-value"],["formControlName","english","color","secondary","min","1","max","10","step","1",1,"range-control"],["formControlName","spanish","color","secondary","min","1","max","10","step","1",1,"range-control"],["formControlName","french","color","secondary","min","1","max","10","step","1",1,"range-control"],[1,"form-actions-wrapper"],["expand","block","color","secondary","type","submit","fill","solid",1,"submit-btn",3,"disabled"],[1,"placeholder"],["formControlName","birthdate","presentation","date",3,"showDefaultButtons","ionChange"],["formArrayName","skills","lines","none",1,"checkbox-tag","rounded-tag"],[1,"tag-label"],[3,"formControlName"]],template:function(t,n){1&t&&(e.TgZ(0,"form",0),e.NdJ("ngSubmit",function(){return n.createUser()}),e.TgZ(1,"ion-header")(2,"ion-toolbar",1)(3,"ion-buttons",2)(4,"ion-button",3),e.NdJ("click",function(){return n.dismissModal()}),e._UZ(5,"ion-icon",4),e.qZA()(),e.TgZ(6,"ion-title"),e._uU(7,"New User"),e.qZA()()(),e.TgZ(8,"ion-content",5)(9,"ion-row",6)(10,"ion-col",7)(11,"app-aspect-ratio",8),e._UZ(12,"app-image-shell",9),e.qZA(),e.TgZ(13,"ion-button",10),e.NdJ("click",function(){return n.changeUserImage()}),e._UZ(14,"ion-icon",11),e.qZA()()(),e.TgZ(15,"section",12)(16,"ion-list",13)(17,"ion-item",14)(18,"ion-label",15),e._uU(19,"Name"),e.qZA(),e._UZ(20,"ion-input",16),e.qZA(),e.TgZ(21,"ion-item",14)(22,"ion-label",15),e._uU(23,"Last name"),e.qZA(),e._UZ(24,"ion-input",17),e.qZA(),e.TgZ(25,"ion-item",18)(26,"ion-label",19),e._uU(27,"Date of Birth"),e.qZA(),e.YNc(28,A,2,0,"ion-text",20),e.YNc(29,S,2,1,"ion-text",21),e.TgZ(30,"ion-modal",22),e.YNc(31,q,2,1,"ng-template"),e.qZA()(),e.TgZ(32,"ion-item",14)(33,"ion-label",15),e._uU(34,"Phone number"),e.qZA(),e._UZ(35,"ion-input",23),e.qZA(),e.TgZ(36,"ion-item",14)(37,"ion-label",15),e._uU(38,"Email"),e.qZA(),e._UZ(39,"ion-input",24),e.qZA()()(),e.TgZ(40,"section",25)(41,"h5",26),e._uU(42,"Experience in"),e.qZA(),e.TgZ(43,"ion-row",27),e.YNc(44,J,4,2,"ion-item",28),e.qZA()(),e.TgZ(45,"section",29)(46,"h5",26),e._uU(47,"Languages"),e.qZA(),e.TgZ(48,"ion-row",30)(49,"ion-col",31)(50,"div",32)(51,"span",33),e._uU(52,"English"),e.qZA(),e.TgZ(53,"span",34),e._uU(54),e.qZA()()(),e.TgZ(55,"ion-col",31),e._UZ(56,"ion-range",35),e.qZA()(),e.TgZ(57,"ion-row",30)(58,"ion-col",31)(59,"div",32)(60,"span",33),e._uU(61,"Spanish"),e.qZA(),e.TgZ(62,"span",34),e._uU(63),e.qZA()()(),e.TgZ(64,"ion-col",31),e._UZ(65,"ion-range",36),e.qZA()(),e.TgZ(66,"ion-row",30)(67,"ion-col",31)(68,"div",32)(69,"span",33),e._uU(70,"French"),e.qZA(),e.TgZ(71,"span",34),e._uU(72),e.qZA()()(),e.TgZ(73,"ion-col",31),e._UZ(74,"ion-range",37),e.qZA()()()(),e.TgZ(75,"ion-footer")(76,"ion-row",38)(77,"ion-col")(78,"ion-button",39),e._uU(79,"CREATE"),e.qZA()()()()()),2&t&&(e.Q6J("formGroup",n.createUserForm),e.xp6(11),e.Q6J("ratio",e.DdM(13,L)),e.xp6(1),e.Q6J("display","cover")("src",n.userData.avatar)("alt","user image"),e.xp6(13),e.Q6J("button",!0),e.xp6(3),e.Q6J("ngIf",!n.formattedDate),e.xp6(1),e.Q6J("ngIf",n.formattedDate),e.xp6(15),e.Q6J("ngForOf",n.skillsFormArray.controls),e.xp6(10),e.Oqu(n.changeLangValue(n.createUserForm.controls.english.value)),e.xp6(9),e.Oqu(n.changeLangValue(n.createUserForm.controls.spanish.value)),e.xp6(9),e.Oqu(n.changeLangValue(n.createUserForm.controls.french.value)),e.xp6(6),e.Q6J("disabled",!n.createUserForm.valid))},dependencies:[o.YG,o.Sm,o.nz,o.wI,o.W2,o.x4,o.fr,o.Gu,o.gu,o.pK,o.Ie,o.Q$,o.q_,o.I_,o.Nd,o.yW,o.wd,o.sr,o.ki,o.w,o.QI,o.j9,d.sg,d.O5,O.m,P.U,a._Y,a.JJ,a.JL,a.Q7,a.sg,a.u,a.CE],styles:["[_nghost-%COMP%]{--page-margin: var(--app-fair-margin);--page-background: var(--app-background);--page-background-shade: var(--app-background-shade);--page-tags-gutter: 5px}ion-modal.datetime-modal[_ngcontent-%COMP%]{--width: 290px;--height: 382px;--border-radius: 8px}ion-modal.datetime-modal[_ngcontent-%COMP%]   ion-datetime[_ngcontent-%COMP%]{height:382px}.create-user-content[_ngcontent-%COMP%]{--background: var(--page-background)}.create-user-content[_ngcontent-%COMP%]   .select-user-image-row[_ngcontent-%COMP%]{--ion-grid-column-padding: 0px;padding:var(--page-margin);background-color:var(--page-background-shade)}.create-user-content[_ngcontent-%COMP%]   .select-user-image-row[_ngcontent-%COMP%]   .user-image-col[_ngcontent-%COMP%]{margin:0 auto;position:relative}.create-user-content[_ngcontent-%COMP%]   .select-user-image-row[_ngcontent-%COMP%]   .user-image-col[_ngcontent-%COMP%]   .user-image[_ngcontent-%COMP%]{border-radius:50%;border:solid 3px var(--ion-color-lightest)}.create-user-content[_ngcontent-%COMP%]   .select-user-image-row[_ngcontent-%COMP%]   .change-image-btn[_ngcontent-%COMP%]{--border-radius: 50%;--padding-start: 0px;--padding-end: 0px;position:absolute;right:0;bottom:var(--page-margin);z-index:3;width:4ch;height:4ch;margin:0}.create-user-content[_ngcontent-%COMP%]   .select-user-image-row[_ngcontent-%COMP%]   .change-image-btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%]{font-size:26px}.create-user-content[_ngcontent-%COMP%]   .fields-section[_ngcontent-%COMP%]{padding:var(--page-margin) 0px;border-bottom:calc(var(--page-margin) * 2) solid var(--page-background-shade)}.create-user-content[_ngcontent-%COMP%]   .fields-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]{padding:0px var(--page-margin);margin-top:0;margin-bottom:var(--page-margin)}.create-user-content[_ngcontent-%COMP%]   .user-details-fields[_ngcontent-%COMP%]   .inputs-list[_ngcontent-%COMP%]{padding:0px var(--page-margin)}.create-user-content[_ngcontent-%COMP%]   .user-details-fields[_ngcontent-%COMP%]   .input-item[_ngcontent-%COMP%]{--padding-start: 0px;--padding-end: 0px;--inner-padding-start: 0px;--inner-padding-end: 0px}.create-user-content[_ngcontent-%COMP%]   .user-details-fields[_ngcontent-%COMP%]   ion-item.birthdate-item[_ngcontent-%COMP%]::part(detail-icon){margin:auto}.create-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]{padding:0px calc(var(--page-margin) - var(--page-tags-gutter));--checkbox-tag-color: #000;--checkbox-tag-background: #FFF;--checkbox-tag-active-color: #FFF;--checkbox-tag-active-background: #000}.create-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag[_ngcontent-%COMP%]{--padding-start: 0px;--inner-padding-end: 8px;--inner-padding-start: 8px;--ion-item-background: var(--checkbox-tag-background);--ion-item-color: var(--checkbox-tag-color)}.create-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag.rounded-tag[_ngcontent-%COMP%]{--border-radius: 2.2rem}.create-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag.item-checkbox-checked[_ngcontent-%COMP%]{--ion-item-background: var(--checkbox-tag-active-background);--ion-item-color: var(--checkbox-tag-active-color)}.create-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag.item-interactive-disabled[_ngcontent-%COMP%]{opacity:.5}.create-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag.item-interactive-disabled[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{opacity:1}.create-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{margin:5px;font-size:14px;font-weight:500;letter-spacing:.2px;text-align:center}.create-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag[_ngcontent-%COMP%]   ion-checkbox[_ngcontent-%COMP%]{margin:0;width:0px;--border-width: 0px;height:0px;--color-checked: transparent}.create-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag[_ngcontent-%COMP%]{padding:0px var(--page-tags-gutter);margin:var(--page-tags-gutter) 0px}.create-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags.rounded-checkbox-tags[_ngcontent-%COMP%]{background-color:var(--ion-color-lightest)}.create-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags.rounded-checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag[_ngcontent-%COMP%]{--border-width: 2px;--border-style: solid;--border-color: var(--ion-color-medium-shade);--checkbox-tag-color: var(--ion-color-medium-shade);--checkbox-tag-background: var(--ion-color-lightest);--checkbox-tag-active-color: var(--ion-color-lightest);--checkbox-tag-active-background: var(--ion-color-darkest)}.create-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags.rounded-checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag.item-checkbox-checked[_ngcontent-%COMP%]{--border-color: var(--ion-color-darkest)}.create-user-content[_ngcontent-%COMP%]   .user-languages-fields[_ngcontent-%COMP%]{padding-bottom:0}.create-user-content[_ngcontent-%COMP%]   .user-languages-fields[_ngcontent-%COMP%]   .range-item-row[_ngcontent-%COMP%]{--ion-grid-column-padding: 0px;padding-top:var(--page-margin);-webkit-padding-start:var(--page-margin);padding-inline-start:var(--page-margin);-webkit-padding-end:var(--page-margin);padding-inline-end:var(--page-margin);box-shadow:inset 0 6px 3px -8px var(--ion-color-darkest)}.create-user-content[_ngcontent-%COMP%]   .user-languages-fields[_ngcontent-%COMP%]   .range-item-row[_ngcontent-%COMP%]   .range-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding-bottom:calc(var(--page-margin) / 2)}.create-user-content[_ngcontent-%COMP%]   .user-languages-fields[_ngcontent-%COMP%]   .range-item-row[_ngcontent-%COMP%]   .range-header[_ngcontent-%COMP%]   .range-value[_ngcontent-%COMP%]{font-size:12px;font-weight:600;letter-spacing:.2px;color:var(--ion-color-medium-shade)}.create-user-content[_ngcontent-%COMP%]   .user-languages-fields[_ngcontent-%COMP%]   .range-item-row[_ngcontent-%COMP%]   .range-header[_ngcontent-%COMP%]   .range-label[_ngcontent-%COMP%]{font-size:14px;font-weight:500;letter-spacing:.2px;color:var(--ion-color-medium-shade)}.create-user-content[_ngcontent-%COMP%]   .user-languages-fields[_ngcontent-%COMP%]   .range-item-row[_ngcontent-%COMP%]   .range-control[_ngcontent-%COMP%]{--ion-text-color: var(--ion-color-medium-shade);padding-top:0;padding-bottom:0}.form-actions-wrapper[_ngcontent-%COMP%]{--ion-grid-column-padding: calc(var(--page-margin) / 2);padding:calc(var(--page-margin) / 2)}.form-actions-wrapper[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]{margin:0}","app-image-shell.user-image[_ngcontent-%COMP%]{--image-shell-border-radius: 50%}"]});var N=i(9760),I=i(4840);const D=function(r){return["/firebase/crud/details",r]},Q=function(){return{w:1,h:1}};function z(r,t){if(1&r&&(e.TgZ(0,"ion-item",24)(1,"ion-row",25)(2,"ion-col",26)(3,"app-aspect-ratio",27),e._UZ(4,"app-image-shell",28),e.qZA()(),e.TgZ(5,"ion-col",29)(6,"div",30)(7,"h3",31),e._UZ(8,"app-text-shell",32),e.qZA(),e.TgZ(9,"h5",33),e._UZ(10,"app-text-shell",32),e.qZA()()()()()),2&r){const n=t.$implicit;e.Q6J("routerLink",e.VKq(6,D,n.id)),e.xp6(3),e.Q6J("ratio",e.DdM(8,Q)),e.xp6(1),e.Q6J("src",n.avatar)("alt","item image"),e.xp6(4),e.Q6J("data",null==n.name?null:n.name.concat(" ").concat(n.lastname)),e.xp6(2),e.Q6J("data",null==n.age?null:n.age.toString().concat(" years old"))}}function Y(r,t){if(1&r&&(e.TgZ(0,"ion-list",22),e.YNc(1,z,11,9,"ion-item",23),e.qZA()),2&r){const n=e.oxw();e.xp6(1),e.Q6J("ngForOf",n.items)}}function j(r,t){1&r&&(e.TgZ(0,"h3",34),e._uU(1," No users found for the selected filters. "),e.qZA())}class m{constructor(t,n,s,g){this.firebaseCrudService=t,this.modalController=n,this.route=s,this.routerOutlet=g,this.showAgeFilter=!1,this.searchSubject=new f.t(1),this.searchFiltersObservable=this.searchSubject.asObservable()}get isShell(){return!(!this.items||!this.items.isShell)}ngOnDestroy(){this.stateSubscription.unsubscribe()}ngOnInit(){this.searchQuery="",this.rangeForm=new a.nJ({dual:new a.p4({lower:1,upper:100})}),this.route.data.subscribe({next:t=>{this.listingDataStore=t.data;const n=this.searchFiltersObservable.pipe((0,v.w)(s=>{const g=this.firebaseCrudService.searchUsersByAge(s.lower,s.upper),V=[new M.B,new M.B];return N.K.AppendShell(g,V,400).pipe((0,Z.U)(h=>{if(""===s.query||h.isShell)return h;{const W=h.filter(R=>R.name.toLowerCase().includes(s.query.toLowerCase()));return Object.assign(W,{isShell:h.isShell})}}))}));this.stateSubscription=(0,x.T)(this.listingDataStore.state,n).subscribe({next:s=>{this.items=s},error:s=>console.log(s),complete:()=>console.log("stateSubscription completed")})},error:t=>console.log(t)})}openFirebaseCreateModal(){var t=this;return(0,_.Z)(function*(){yield(yield t.modalController.create({id:"createModal",componentProps:{modalId:"createModal"},component:p,swipeToClose:!0,presentingElement:t.routerOutlet.nativeEl})).present()})()}searchList(){this.searchSubject.next({lower:this.rangeForm.controls.dual.value.lower,upper:this.rangeForm.controls.dual.value.upper,query:this.searchQuery})}}m.\u0275fac=function(t){return new(t||m)(e.Y36(u.T),e.Y36(o.IN),e.Y36(C.gz),e.Y36(o.jP))},m.\u0275cmp=e.Xpm({type:m,selectors:[["app-firebase-listing"]],hostVars:2,hostBindings:function(t,n){2&t&&e.ekj("is-shell",n.isShell)},decls:31,vars:7,consts:[["color","primary"],["slot","start"],["color","light"],["slot","end"],[3,"click"],["slot","icon-only","name","add"],[1,"filters-toolbar"],["align-items-center","",1,"searchbar-row"],["animated","","placeholder","Filter by name...",1,"items-searchbar",3,"ngModel","ngModelChange","ionChange"],[1,"call-to-action-col"],["fill","clear","color","secondary",1,"filters-btn",3,"click"],["slot","icon-only","name","options"],[3,"formGroup","hidden"],[1,"range-item-row"],["size","12"],[1,"range-header"],[1,"range-value"],[1,"range-label"],["formControlName","dual","color","secondary","pin","true","dualKnobs","true","min","1","max","100","step","1","debounce","400",1,"range-control",3,"ionChange"],[1,"firebase-listing-content"],["class","items-list",4,"ngIf"],["class","empty-list-message",4,"ngIf"],[1,"items-list"],["class","list-item",3,"routerLink",4,"ngFor","ngForOf"],[1,"list-item",3,"routerLink"],[1,"user-row"],["size","3",1,"user-image-wrapper"],[3,"ratio"],["animation","spinner",1,"user-image",3,"src","alt"],[1,"user-data-wrapper"],[1,"user-info"],[1,"user-name"],["animation","bouncing",3,"data"],[1,"user-age"],[1,"empty-list-message"]],template:function(t,n){1&t&&(e.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),e._UZ(3,"ion-menu-button",2),e.qZA(),e.TgZ(4,"ion-title"),e._uU(5,"Firebase"),e.qZA(),e.TgZ(6,"ion-buttons",3)(7,"ion-button",4),e.NdJ("click",function(){return n.openFirebaseCreateModal()}),e._UZ(8,"ion-icon",5),e.qZA()()(),e.TgZ(9,"ion-toolbar",6)(10,"ion-row",7)(11,"ion-col")(12,"ion-searchbar",8),e.NdJ("ngModelChange",function(g){return n.searchQuery=g})("ionChange",function(){return n.searchList()}),e.qZA()(),e.TgZ(13,"ion-col",9)(14,"ion-button",10),e.NdJ("click",function(){return n.showAgeFilter=!n.showAgeFilter}),e._UZ(15,"ion-icon",11),e.qZA()()(),e.TgZ(16,"form",12)(17,"ion-row",13)(18,"ion-col",14)(19,"div",15)(20,"span",16),e._uU(21),e.qZA(),e.TgZ(22,"span",17),e._uU(23,"Filter by age"),e.qZA(),e.TgZ(24,"span",16),e._uU(25),e.qZA()()(),e.TgZ(26,"ion-col",14)(27,"ion-range",18),e.NdJ("ionChange",function(){return n.searchList()}),e.qZA()()()()()(),e.TgZ(28,"ion-content",19),e.YNc(29,Y,2,1,"ion-list",20),e.YNc(30,j,2,0,"h3",21),e.qZA()),2&t&&(e.xp6(12),e.Q6J("ngModel",n.searchQuery),e.xp6(4),e.Q6J("formGroup",n.rangeForm)("hidden",!n.showAgeFilter),e.xp6(5),e.Oqu(n.rangeForm.controls.dual.value.lower),e.xp6(4),e.Oqu(n.rangeForm.controls.dual.value.upper),e.xp6(4),e.Q6J("ngIf",(null==n.items?null:n.items.length)>0),e.xp6(1),e.Q6J("ngIf",0===(null==n.items?null:n.items.length)))},dependencies:[d.sg,d.O5,a._Y,a.JJ,a.JL,a.On,a.sg,a.u,o.YG,o.Sm,o.wI,o.W2,o.Gu,o.gu,o.Ie,o.q_,o.fG,o.I_,o.Nd,o.VI,o.wd,o.sr,o.QI,o.j9,o.YI,O.m,P.U,I.$,C.rH],styles:["[_nghost-%COMP%]{--page-margin: var(--app-fair-margin);--page-background: var(--app-background)}.filters-toolbar[_ngcontent-%COMP%]{--padding-start: var(--page-margin);--padding-end: var(--page-margin);--padding-top: var(--page-margin);--padding-bottom: var(--page-margin)}.filters-toolbar[_ngcontent-%COMP%]   .searchbar-row[_ngcontent-%COMP%]{--ion-grid-column-padding: 0px}.filters-toolbar[_ngcontent-%COMP%]   .searchbar-row[_ngcontent-%COMP%]   ion-searchbar.items-searchbar[_ngcontent-%COMP%]{padding:0;height:100%;contain:content}.filters-toolbar[_ngcontent-%COMP%]   .searchbar-row[_ngcontent-%COMP%]   .call-to-action-col[_ngcontent-%COMP%]{-webkit-padding-start:var(--page-margin);padding-inline-start:var(--page-margin);max-width:-moz-fit-content;max-width:fit-content;flex-shrink:0;flex-grow:0;display:flex;justify-content:flex-end}.filters-toolbar[_ngcontent-%COMP%]   .searchbar-row[_ngcontent-%COMP%]   .call-to-action-col[_ngcontent-%COMP%]   .filters-btn[_ngcontent-%COMP%]{--padding-start: 0px;--padding-end: 0px;margin:0;font-size:18px;height:initial}.filters-toolbar[_ngcontent-%COMP%]   .range-item-row[_ngcontent-%COMP%]{--ion-grid-column-padding: 0px;margin-top:var(--page-margin);padding-top:var(--page-margin);box-shadow:inset 0 6px 3px -8px var(--ion-color-darkest)}.filters-toolbar[_ngcontent-%COMP%]   .range-item-row[_ngcontent-%COMP%]   .range-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding-bottom:calc(var(--page-margin) / 2)}.filters-toolbar[_ngcontent-%COMP%]   .range-item-row[_ngcontent-%COMP%]   .range-header[_ngcontent-%COMP%]   .range-value[_ngcontent-%COMP%]{font-size:12px;font-weight:600;letter-spacing:.2px;color:var(--ion-color-medium)}.filters-toolbar[_ngcontent-%COMP%]   .range-item-row[_ngcontent-%COMP%]   .range-header[_ngcontent-%COMP%]   .range-label[_ngcontent-%COMP%]{font-size:14px;font-weight:500;letter-spacing:.2px;color:var(--ion-color-medium)}.filters-toolbar[_ngcontent-%COMP%]   .range-item-row[_ngcontent-%COMP%]   .range-control[_ngcontent-%COMP%]{--ion-text-color: var(--ion-color-medium);padding-top:0;padding-bottom:0}.firebase-listing-content[_ngcontent-%COMP%]{--background: var(--page-background)}.firebase-listing-content[_ngcontent-%COMP%]   .items-list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]{--padding-start: var(--page-margin);--padding-end: 0px;--inner-padding-start: 0px;--inner-padding-end: var(--page-margin);--inner-padding-top: calc(var(--page-margin) / 2);--inner-padding-bottom: calc(var(--page-margin) / 2)}.firebase-listing-content[_ngcontent-%COMP%]   .items-list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .user-row[_ngcontent-%COMP%]{--ion-grid-column-padding: 0px;width:100%}.firebase-listing-content[_ngcontent-%COMP%]   .items-list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .user-row[_ngcontent-%COMP%]   .user-image-wrapper[_ngcontent-%COMP%]{-webkit-padding-end:calc(var(--page-margin) / 2);padding-inline-end:calc(var(--page-margin) / 2)}.firebase-listing-content[_ngcontent-%COMP%]   .items-list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .user-row[_ngcontent-%COMP%]   .user-data-wrapper[_ngcontent-%COMP%]{-webkit-padding-start:calc(var(--page-margin) / 2);padding-inline-start:calc(var(--page-margin) / 2);display:flex;flex-direction:column;justify-content:center}.firebase-listing-content[_ngcontent-%COMP%]   .items-list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .user-row[_ngcontent-%COMP%]   .user-data-wrapper[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]:not(:last-child){margin-bottom:calc(var(--page-margin) / 2)}.firebase-listing-content[_ngcontent-%COMP%]   .items-list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .user-row[_ngcontent-%COMP%]   .user-data-wrapper[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]{margin:0;margin-bottom:calc(var(--page-margin) / 4);font-size:16px}.firebase-listing-content[_ngcontent-%COMP%]   .items-list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .user-row[_ngcontent-%COMP%]   .user-data-wrapper[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-age[_ngcontent-%COMP%]{margin:0;color:rgba(var(--ion-color-dark-rgb),.4);font-size:14px}.firebase-listing-content[_ngcontent-%COMP%]   .empty-list-message[_ngcontent-%COMP%]{margin:calc(var(--page-margin) * 3);color:rgba(var(--ion-color-dark-rgb),.4);text-align:center}",".ios[_nghost-%COMP%]   .list-item[_ngcontent-%COMP%]   .user-data-wrapper[_ngcontent-%COMP%], .ios   [_nghost-%COMP%]   .list-item[_ngcontent-%COMP%]   .user-data-wrapper[_ngcontent-%COMP%]{-webkit-padding-end:calc(var(--page-margin) / 2);padding-inline-end:calc(var(--page-margin) / 2)}.ios[_nghost-%COMP%]   .searchbar-row[_ngcontent-%COMP%]   ion-searchbar.items-searchbar[_ngcontent-%COMP%], .ios   [_nghost-%COMP%]   .searchbar-row[_ngcontent-%COMP%]   ion-searchbar.items-searchbar[_ngcontent-%COMP%]{padding-top:var(--padding-top);padding-bottom:var(--padding-bottom)}","app-image-shell.user-image[_ngcontent-%COMP%]{--image-shell-border-radius: var(--app-fair-radius)}.user-name[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height: 16px;max-width:80%}.user-name[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:inherit}.user-age[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height: 14px;max-width:40%}.user-age[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:inherit}"]});class c{constructor(t){this.firebaseCrudService=t}resolve(){const t=this.firebaseCrudService.getListingDataSource();return this.firebaseCrudService.getListingStore(t)}}c.\u0275fac=function(t){return new(t||c)(e.LFG(u.T))},c.\u0275prov=e.Yz7({token:c,factory:c.\u0275fac});var G=i(3678),E=i(8974);const B=[{path:"",component:m,resolve:{data:c}}];class l{}l.\u0275fac=function(t){return new(t||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({providers:[u.T,c],imports:[d.ez,a.u5,a.UX,o.Pc,G.K,C.Bz.forChild(B),E.d]})}}]);