"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7098],{7098:(E,M,s)=>{s.r(M),s.d(M,{FirebaseUserDetailsPageModule:()=>d});var u=s(6895),r=s(4006),p=s(3893),o=s(9267),x=s(3678),C=s(5861),b=s(1764),v=s(7706),U=s(2993),Z=s(8749),k=(s(8209),s(6363)),_=s(2283),e=s(4650),O=s(9330),P=s(1408);function w(a,t){1&a&&(e.TgZ(0,"ion-text",41),e._uU(1,"Select a date"),e.qZA())}function T(a,t){if(1&a&&(e.TgZ(0,"ion-text"),e._uU(1),e.qZA()),2&a){const n=e.oxw();e.xp6(1),e.Oqu(n.formattedDate)}}function y(a,t){if(1&a){const n=e.EpF();e.TgZ(0,"ion-content")(1,"ion-datetime",42),e.NdJ("ionChange",function(){e.CHM(n);const c=e.oxw();return e.KtG(c.formatDate())}),e.qZA()()}2&a&&(e.xp6(1),e.Q6J("showDefaultButtons",!0))}function A(a,t){if(1&a&&(e.TgZ(0,"ion-item",43)(1,"ion-label",44),e._uU(2),e.qZA(),e._UZ(3,"ion-checkbox",45),e.qZA()),2&a){const n=t.index,i=e.oxw();e.xp6(2),e.Oqu(i.skills[n].name),e.xp6(1),e.Q6J("formControlName",n)}}const F=function(){return{w:1,h:1}};class m{constructor(t,n,i,c,l){this.modalController=t,this.alertController=n,this.firebaseCrudService=i,this.router=c,this.ngZone=l,this.skills=[]}ngOnInit(){this.selectedAvatar=this.user.avatar,this.updateUserForm=new r.nJ({name:new r.p4(this.user.name,r.kI.required),lastname:new r.p4(this.user.lastname,r.kI.required),email:new r.p4(this.user.email,r.kI.compose([r.kI.required,r.kI.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")])),phone:new r.p4(this.user.phone,r.kI.required),birthdate:new r.p4(b.unix(this.user.birthdate).format(),r.kI.required),skills:new r.vC([],Z.Z.minSelectedCheckboxes(1)),spanish:new r.p4(this.user.languages.spanish),english:new r.p4(this.user.languages.english),french:new r.p4(this.user.languages.french)}),this.formatDate(),this.firebaseCrudService.getSkills().subscribe(t=>{this.skills=t,this.skills.map(n=>{let i=[];this.user.skills&&(i=this.user.skills.map(function(l){return l.id}));const c=new r.p4(i.includes(n.id));this.updateUserForm.controls.skills.push(c)})})}formatDate(){this.formattedDate=(0,v.Z)((0,U.Z)(this.updateUserForm.value.birthdate),"MMM d, yyyy")}get skillsFormArray(){return this.updateUserForm.get("skills")}changeLangValue(t){switch(!0){case t<=3:return"Novice";case t>3&&t<=6:return"Competent";case t>6:return"Expert"}}dismissModal(){this.modalController.dismiss(void 0,void 0,this.modalId)}deleteUser(){var t=this;return(0,C.Z)(function*(){yield(yield t.alertController.create({header:"Confirm",message:"Do you want to delete "+t.user.name+"?",buttons:[{text:"No",role:"cancel",handler:()=>{}},{text:"Yes",handler:()=>{t.firebaseCrudService.deleteUser(t.user.id).then(()=>{t.dismissModal(),t.ngZone.run(()=>t.router.navigate(["firebase/crud/listing"])).then()},i=>console.log(i))}}]})).present()})()}updateUser(){this.user.avatar=this.selectedAvatar,this.user.name=this.updateUserForm.value.name,this.user.lastname=this.updateUserForm.value.lastname,this.user.birthdate=b(this.updateUserForm.value.birthdate).unix(),this.user.phone=this.updateUserForm.value.phone,this.user.email=this.updateUserForm.value.email,this.user.languages.spanish=this.updateUserForm.value.spanish,this.user.languages.english=this.updateUserForm.value.english,this.user.languages.french=this.updateUserForm.value.french;const t=[];this.updateUserForm.value.skills.map((c,l)=>{c&&t.push(this.skills[l].id)}),this.user.skills=t;const{age:n,...i}=this.user;this.firebaseCrudService.updateUser(i).then(()=>this.dismissModal(),c=>console.log(c))}changeUserImage(){var t=this;return(0,C.Z)(function*(){const n=yield t.modalController.create({component:k.U,swipeToClose:!0,presentingElement:yield t.modalController.getTop()});n.onDidDismiss().then(i=>{null!=i.data&&(t.selectedAvatar=i.data.link)}),yield n.present()})()}}m.\u0275fac=function(t){return new(t||m)(e.Y36(o.IN),e.Y36(o.Br),e.Y36(_.T),e.Y36(p.F0),e.Y36(e.R0b))},m.\u0275cmp=e.Xpm({type:m,selectors:[["app-firebase-update-user"]],inputs:{user:"user",modalId:"modalId"},decls:83,vars:14,consts:[[1,"update-user-form","ion-page",3,"formGroup","ngSubmit"],["color","primary"],["slot","end"],[3,"click"],["slot","icon-only","name","close"],[1,"update-user-content"],[1,"select-user-image-row"],["size","5",1,"user-image-col"],[3,"ratio"],["animation","spinner",1,"user-image",3,"display","src","alt"],["color","secondary",1,"change-image-btn",3,"click"],["slot","icon-only","name","camera",1,"btn-icon"],[1,"user-details-fields","fields-section"],["lines","full",1,"inputs-list"],[1,"input-item"],["color","secondary","position","floating"],["type","text","formControlName","name","required",""],["type","text","formControlName","lastname","required",""],["id","open-datetime","id","open-birthdate-modal",1,"input-item","birthdate-item",3,"button"],["color","secondary","position","stacked"],["class","placeholder",4,"ngIf"],[4,"ngIf"],["trigger","open-birthdate-modal",1,"datetime-modal"],["type","tel","formControlName","phone","required",""],["type","email","formControlName","email","required",""],[1,"user-experience-fields","fields-section"],[1,"section-header"],[1,"checkbox-tags","rounded-checkbox-tags"],["formArrayName","skills","lines","none","class","checkbox-tag rounded-tag",4,"ngFor","ngForOf"],[1,"user-languages-fields","fields-section"],[1,"range-item-row"],["size","12"],[1,"range-header"],[1,"range-label"],[1,"range-value"],["formControlName","english","color","secondary","min","1","max","10","step","1",1,"range-control"],["formControlName","spanish","color","secondary","min","1","max","10","step","1",1,"range-control"],["formControlName","french","color","secondary","min","1","max","10","step","1",1,"range-control"],[1,"form-actions-wrapper"],["expand","block","color","primary","fill","outline",1,"delete-btn",3,"click"],["expand","block","color","secondary","type","submit","fill","solid",1,"submit-btn",3,"disabled"],[1,"placeholder"],["formControlName","birthdate","presentation","date",3,"showDefaultButtons","ionChange"],["formArrayName","skills","lines","none",1,"checkbox-tag","rounded-tag"],[1,"tag-label"],[3,"formControlName"]],template:function(t,n){1&t&&(e.TgZ(0,"form",0),e.NdJ("ngSubmit",function(){return n.updateUser()}),e.TgZ(1,"ion-header")(2,"ion-toolbar",1)(3,"ion-buttons",2)(4,"ion-button",3),e.NdJ("click",function(){return n.dismissModal()}),e._UZ(5,"ion-icon",4),e.qZA()(),e.TgZ(6,"ion-title"),e._uU(7,"Update User"),e.qZA()()(),e.TgZ(8,"ion-content",5)(9,"ion-row",6)(10,"ion-col",7)(11,"app-aspect-ratio",8),e._UZ(12,"app-image-shell",9),e.qZA(),e.TgZ(13,"ion-button",10),e.NdJ("click",function(){return n.changeUserImage()}),e._UZ(14,"ion-icon",11),e.qZA()()(),e.TgZ(15,"section",12)(16,"ion-list",13)(17,"ion-item",14)(18,"ion-label",15),e._uU(19,"Name"),e.qZA(),e._UZ(20,"ion-input",16),e.qZA(),e.TgZ(21,"ion-item",14)(22,"ion-label",15),e._uU(23,"Last name"),e.qZA(),e._UZ(24,"ion-input",17),e.qZA(),e.TgZ(25,"ion-item",18)(26,"ion-label",19),e._uU(27,"Date of Birth"),e.qZA(),e.YNc(28,w,2,0,"ion-text",20),e.YNc(29,T,2,1,"ion-text",21),e.TgZ(30,"ion-modal",22),e.YNc(31,y,2,1,"ng-template"),e.qZA()(),e.TgZ(32,"ion-item",14)(33,"ion-label",15),e._uU(34,"Phone number"),e.qZA(),e._UZ(35,"ion-input",23),e.qZA(),e.TgZ(36,"ion-item",14)(37,"ion-label",15),e._uU(38,"Email"),e.qZA(),e._UZ(39,"ion-input",24),e.qZA()()(),e.TgZ(40,"section",25)(41,"h5",26),e._uU(42,"Experience in"),e.qZA(),e.TgZ(43,"ion-row",27),e.YNc(44,A,4,2,"ion-item",28),e.qZA()(),e.TgZ(45,"section",29)(46,"h5",26),e._uU(47,"Languages"),e.qZA(),e.TgZ(48,"ion-row",30)(49,"ion-col",31)(50,"div",32)(51,"span",33),e._uU(52,"English"),e.qZA(),e.TgZ(53,"span",34),e._uU(54),e.qZA()()(),e.TgZ(55,"ion-col",31),e._UZ(56,"ion-range",35),e.qZA()(),e.TgZ(57,"ion-row",30)(58,"ion-col",31)(59,"div",32)(60,"span",33),e._uU(61,"Spanish"),e.qZA(),e.TgZ(62,"span",34),e._uU(63),e.qZA()()(),e.TgZ(64,"ion-col",31),e._UZ(65,"ion-range",36),e.qZA()(),e.TgZ(66,"ion-row",30)(67,"ion-col",31)(68,"div",32)(69,"span",33),e._uU(70,"French"),e.qZA(),e.TgZ(71,"span",34),e._uU(72),e.qZA()()(),e.TgZ(73,"ion-col",31),e._UZ(74,"ion-range",37),e.qZA()()()(),e.TgZ(75,"ion-footer")(76,"ion-row",38)(77,"ion-col")(78,"ion-button",39),e.NdJ("click",function(){return n.deleteUser()}),e._uU(79,"DELETE"),e.qZA()(),e.TgZ(80,"ion-col")(81,"ion-button",40),e._uU(82,"UPDATE"),e.qZA()()()()()),2&t&&(e.Q6J("formGroup",n.updateUserForm),e.xp6(11),e.Q6J("ratio",e.DdM(13,F)),e.xp6(1),e.Q6J("display","cover")("src",n.selectedAvatar)("alt","user image"),e.xp6(13),e.Q6J("button",!0),e.xp6(3),e.Q6J("ngIf",!n.formattedDate),e.xp6(1),e.Q6J("ngIf",n.formattedDate),e.xp6(15),e.Q6J("ngForOf",n.skillsFormArray.controls),e.xp6(10),e.Oqu(n.changeLangValue(n.updateUserForm.controls.english.value)),e.xp6(9),e.Oqu(n.changeLangValue(n.updateUserForm.controls.spanish.value)),e.xp6(9),e.Oqu(n.changeLangValue(n.updateUserForm.controls.french.value)),e.xp6(9),e.Q6J("disabled",!n.updateUserForm.valid))},dependencies:[u.sg,u.O5,r._Y,r.JJ,r.JL,r.Q7,r.sg,r.u,r.CE,o.YG,o.Sm,o.nz,o.wI,o.W2,o.x4,o.fr,o.Gu,o.gu,o.pK,o.Ie,o.Q$,o.q_,o.I_,o.Nd,o.yW,o.wd,o.sr,o.ki,o.w,o.QI,o.j9,O.m,P.U],styles:["[_nghost-%COMP%]{--page-margin: var(--app-fair-margin);--page-background: var(--app-background);--page-background-shade: var(--app-background-shade);--page-tags-gutter: 5px}ion-modal.datetime-modal[_ngcontent-%COMP%]{--width: 290px;--height: 382px;--border-radius: 8px}ion-modal.datetime-modal[_ngcontent-%COMP%]   ion-datetime[_ngcontent-%COMP%]{height:382px}.update-user-content[_ngcontent-%COMP%]{--background: var(--page-background)}.update-user-content[_ngcontent-%COMP%]   .select-user-image-row[_ngcontent-%COMP%]{--ion-grid-column-padding: 0px;padding:var(--page-margin);background-color:var(--page-background-shade)}.update-user-content[_ngcontent-%COMP%]   .select-user-image-row[_ngcontent-%COMP%]   .user-image-col[_ngcontent-%COMP%]{margin:0 auto;position:relative}.update-user-content[_ngcontent-%COMP%]   .select-user-image-row[_ngcontent-%COMP%]   .user-image-col[_ngcontent-%COMP%]   .user-image[_ngcontent-%COMP%]{border-radius:50%;border:solid 3px var(--ion-color-lightest)}.update-user-content[_ngcontent-%COMP%]   .select-user-image-row[_ngcontent-%COMP%]   .change-image-btn[_ngcontent-%COMP%]{--border-radius: 50%;--padding-start: 0px;--padding-end: 0px;position:absolute;right:0;bottom:var(--page-margin);z-index:3;width:4ch;height:4ch;margin:0}.update-user-content[_ngcontent-%COMP%]   .select-user-image-row[_ngcontent-%COMP%]   .change-image-btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%]{font-size:26px}.update-user-content[_ngcontent-%COMP%]   .fields-section[_ngcontent-%COMP%]{padding:var(--page-margin) 0px;border-bottom:calc(var(--page-margin) * 2) solid var(--page-background-shade)}.update-user-content[_ngcontent-%COMP%]   .fields-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]{padding:0px var(--page-margin);margin-top:0;margin-bottom:var(--page-margin)}.update-user-content[_ngcontent-%COMP%]   .user-details-fields[_ngcontent-%COMP%]   .inputs-list[_ngcontent-%COMP%]{padding:0px var(--page-margin)}.update-user-content[_ngcontent-%COMP%]   .user-details-fields[_ngcontent-%COMP%]   .input-item[_ngcontent-%COMP%]{--padding-start: 0px;--padding-end: 0px;--inner-padding-start: 0px;--inner-padding-end: 0px}.update-user-content[_ngcontent-%COMP%]   .user-details-fields[_ngcontent-%COMP%]   ion-item.birthdate-item[_ngcontent-%COMP%]::part(detail-icon){margin:auto}.update-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]{padding:0px calc(var(--page-margin) - var(--page-tags-gutter));--checkbox-tag-color: #000;--checkbox-tag-background: #FFF;--checkbox-tag-active-color: #FFF;--checkbox-tag-active-background: #000}.update-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag[_ngcontent-%COMP%]{--padding-start: 0px;--inner-padding-end: 8px;--inner-padding-start: 8px;--ion-item-background: var(--checkbox-tag-background);--ion-item-color: var(--checkbox-tag-color)}.update-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag.rounded-tag[_ngcontent-%COMP%]{--border-radius: 2.2rem}.update-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag.item-checkbox-checked[_ngcontent-%COMP%]{--ion-item-background: var(--checkbox-tag-active-background);--ion-item-color: var(--checkbox-tag-active-color)}.update-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag.item-interactive-disabled[_ngcontent-%COMP%]{opacity:.5}.update-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag.item-interactive-disabled[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{opacity:1}.update-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{margin:5px;font-size:14px;font-weight:500;letter-spacing:.2px;text-align:center}.update-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag[_ngcontent-%COMP%]   ion-checkbox[_ngcontent-%COMP%]{margin:0;width:0px;--border-width: 0px;height:0px;--color-checked: transparent}.update-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag[_ngcontent-%COMP%]{padding:0px var(--page-tags-gutter);margin:var(--page-tags-gutter) 0px}.update-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags.rounded-checkbox-tags[_ngcontent-%COMP%]{background-color:var(--ion-color-lightest)}.update-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags.rounded-checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag[_ngcontent-%COMP%]{--border-width: 2px;--border-style: solid;--border-color: var(--ion-color-medium-shade);--checkbox-tag-color: var(--ion-color-medium-shade);--checkbox-tag-background: var(--ion-color-lightest);--checkbox-tag-active-color: var(--ion-color-lightest);--checkbox-tag-active-background: var(--ion-color-darkest)}.update-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags.rounded-checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag.item-checkbox-checked[_ngcontent-%COMP%]{--border-color: var(--ion-color-darkest)}.update-user-content[_ngcontent-%COMP%]   .user-languages-fields[_ngcontent-%COMP%]{padding-bottom:0}.update-user-content[_ngcontent-%COMP%]   .user-languages-fields[_ngcontent-%COMP%]   .range-item-row[_ngcontent-%COMP%]{--ion-grid-column-padding: 0px;padding-top:var(--page-margin);-webkit-padding-start:var(--page-margin);padding-inline-start:var(--page-margin);-webkit-padding-end:var(--page-margin);padding-inline-end:var(--page-margin);box-shadow:inset 0 6px 3px -8px var(--ion-color-darkest)}.update-user-content[_ngcontent-%COMP%]   .user-languages-fields[_ngcontent-%COMP%]   .range-item-row[_ngcontent-%COMP%]   .range-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding-bottom:calc(var(--page-margin) / 2)}.update-user-content[_ngcontent-%COMP%]   .user-languages-fields[_ngcontent-%COMP%]   .range-item-row[_ngcontent-%COMP%]   .range-header[_ngcontent-%COMP%]   .range-value[_ngcontent-%COMP%]{font-size:12px;font-weight:600;letter-spacing:.2px;color:var(--ion-color-medium-shade)}.update-user-content[_ngcontent-%COMP%]   .user-languages-fields[_ngcontent-%COMP%]   .range-item-row[_ngcontent-%COMP%]   .range-header[_ngcontent-%COMP%]   .range-label[_ngcontent-%COMP%]{font-size:14px;font-weight:500;letter-spacing:.2px;color:var(--ion-color-medium-shade)}.update-user-content[_ngcontent-%COMP%]   .user-languages-fields[_ngcontent-%COMP%]   .range-item-row[_ngcontent-%COMP%]   .range-control[_ngcontent-%COMP%]{--ion-text-color: var(--ion-color-medium-shade);padding-top:0;padding-bottom:0}.form-actions-wrapper[_ngcontent-%COMP%]{--ion-grid-column-padding: calc(var(--page-margin) / 2);padding:calc(var(--page-margin) / 2)}.form-actions-wrapper[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%], .form-actions-wrapper[_ngcontent-%COMP%]   .delete-btn[_ngcontent-%COMP%]{margin:0}","app-image-shell.user-image[_ngcontent-%COMP%]{--image-shell-border-radius: 50%}"]});var q=s(4004),D=s(4840);function S(a,t){if(1&a&&(e.TgZ(0,"ion-item",31)(1,"label",32),e._UZ(2,"app-text-shell",12),e.qZA(),e._UZ(3,"ion-icon",33),e.qZA()),2&a){const n=t.$implicit;e.xp6(2),e.Q6J("data",null==n?null:n.name)}}const f=function(){return{w:1,h:1}},J=function(a){return["/firebase/crud/details",a]};function I(a,t){if(1&a&&(e.TgZ(0,"ion-col",37)(1,"app-aspect-ratio",8),e._UZ(2,"app-image-shell",38),e.qZA(),e.TgZ(3,"span",39),e._UZ(4,"app-text-shell",40),e.qZA()()),2&a){const n=t.$implicit;e.xp6(1),e.Q6J("ratio",e.DdM(5,f)),e.xp6(1),e.Q6J("display","cover")("src",n.avatar)("routerLink",e.VKq(6,J,n.id)),e.xp6(2),e.Q6J("data",n.name)}}function N(a,t){if(1&a&&(e.TgZ(0,"section",34)(1,"h5",22),e._uU(2,"Users with similar skills"),e.qZA(),e.TgZ(3,"ion-row",35),e.YNc(4,I,5,8,"ion-col",36),e.qZA()()),2&a){const n=e.oxw();e.xp6(4),e.Q6J("ngForOf",n.relatedUsers)}}class h{constructor(t,n,i,c,l){this.firebaseCrudService=t,this.modalController=n,this.router=i,this.route=c,this.routerOutlet=l}get isShell(){return!!(this.user&&this.user.isShell||this.relatedUsers&&this.relatedUsers.isShell)}ngOnInit(){this.route.data.pipe((0,q.U)(t=>{const n=t.data,c=n.relatedUsers;n.user.state.subscribe(l=>this.user=l),c.state.subscribe(l=>this.relatedUsers=l)})).subscribe()}openFirebaseUpdateModal(){var t=this;return(0,C.Z)(function*(){yield(yield t.modalController.create({id:"updateModal",component:m,componentProps:{user:t.user,modalId:"updateModal"},swipeToClose:!0,presentingElement:t.routerOutlet.nativeEl})).present()})()}}h.\u0275fac=function(t){return new(t||h)(e.Y36(_.T),e.Y36(o.IN),e.Y36(p.F0),e.Y36(p.gz),e.Y36(o.jP))},h.\u0275cmp=e.Xpm({type:h,selectors:[["app-firebase-user-details"]],hostVars:2,hostBindings:function(t,n){2&t&&e.ekj("is-shell",n.isShell)},decls:57,vars:12,consts:[["color","primary"],["slot","start"],["defaultHref","firebase/crud/listing"],["slot","end"],[3,"click"],[1,"user-content"],[1,"user-info-row"],["size","5",1,"user-image-col"],[3,"ratio"],["animation","spinner",1,"user-image",3,"display","src","alt"],["size","12",1,"user-details-col"],[1,"user-name"],["animation","bouncing",3,"data"],[1,"user-age"],["size","12",1,"actions-col"],["size","3"],["color","secondary",1,"action-btn"],["slot","icon-only","name","mail",1,"btn-icon"],["slot","icon-only","name","call",1,"btn-icon"],["slot","icon-only","name","videocam",1,"btn-icon"],["slot","icon-only","name","text",1,"btn-icon"],[1,"content-section","user-languages-wrapper"],[1,"section-header"],[1,"language-item-row"],[1,"language-item"],[1,"language-name"],["type","determinate",1,"language-score",3,"value"],[1,"content-section","user-experience-wrapper"],["lines","none",1,"experience-list"],["class","experience-item",4,"ngFor","ngForOf"],["class","content-section related-users-wrapper",4,"ngIf"],[1,"experience-item"],[1,"experience-label"],["slot","start","name","checkmark","color","secondary",1,"experience-list-icon"],[1,"content-section","related-users-wrapper"],[1,"related-users-row"],["class","related-user-item",4,"ngFor","ngForOf"],[1,"related-user-item"],[1,"related-user-picture",3,"display","src","routerLink"],[1,"related-user-name"],[3,"data"]],template:function(t,n){1&t&&(e.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),e._UZ(3,"ion-back-button",2),e.qZA(),e.TgZ(4,"ion-title"),e._uU(5,"User Details"),e.qZA(),e.TgZ(6,"ion-buttons",3)(7,"ion-button",4),e.NdJ("click",function(){return n.openFirebaseUpdateModal()}),e._uU(8," Edit "),e.qZA()()()(),e.TgZ(9,"ion-content",5)(10,"ion-row",6)(11,"ion-col",7)(12,"app-aspect-ratio",8),e._UZ(13,"app-image-shell",9),e.qZA()(),e.TgZ(14,"ion-col",10)(15,"h2",11),e._UZ(16,"app-text-shell",12),e.qZA(),e.TgZ(17,"span",13),e._UZ(18,"app-text-shell",12),e.qZA()(),e.TgZ(19,"ion-col",14)(20,"ion-row")(21,"ion-col",15)(22,"ion-button",16),e._UZ(23,"ion-icon",17),e.qZA()(),e.TgZ(24,"ion-col",15)(25,"ion-button",16),e._UZ(26,"ion-icon",18),e.qZA()(),e.TgZ(27,"ion-col",15)(28,"ion-button",16),e._UZ(29,"ion-icon",19),e.qZA()(),e.TgZ(30,"ion-col",15)(31,"ion-button",16),e._UZ(32,"ion-icon",20),e.qZA()()()()(),e.TgZ(33,"section",21)(34,"h5",22),e._uU(35,"Languages"),e.qZA(),e.TgZ(36,"ion-row",23)(37,"ion-col",24)(38,"span",25),e._uU(39,"English"),e.qZA(),e._UZ(40,"ion-progress-bar",26),e.qZA()(),e.TgZ(41,"ion-row",23)(42,"ion-col",24)(43,"span",25),e._uU(44,"Spanish"),e.qZA(),e._UZ(45,"ion-progress-bar",26),e.qZA()(),e.TgZ(46,"ion-row",23)(47,"ion-col",24)(48,"span",25),e._uU(49,"French"),e.qZA(),e._UZ(50,"ion-progress-bar",26),e.qZA()()(),e.TgZ(51,"section",27)(52,"h5",22),e._uU(53,"Skills"),e.qZA(),e.TgZ(54,"ion-list",28),e.YNc(55,S,4,1,"ion-item",29),e.qZA()(),e.YNc(56,N,5,1,"section",30),e.qZA()),2&t&&(e.xp6(12),e.Q6J("ratio",e.DdM(11,f)),e.xp6(1),e.Q6J("display","cover")("src",null==n.user?null:n.user.avatar)("alt","item image"),e.xp6(3),e.Q6J("data",null==n.user||null==n.user.name?null:n.user.name.concat(" ").concat(null==n.user?null:n.user.lastname)),e.xp6(2),e.Q6J("data",null==n.user||null==n.user.age?null:n.user.age.toString().concat(" years young")),e.xp6(22),e.Q6J("value",(null==n.user||null==n.user.languages?null:n.user.languages.english)/10),e.xp6(5),e.Q6J("value",(null==n.user||null==n.user.languages?null:n.user.languages.spanish)/10),e.xp6(5),e.Q6J("value",(null==n.user||null==n.user.languages?null:n.user.languages.french)/10),e.xp6(5),e.Q6J("ngForOf",null==n.user?null:n.user.skills),e.xp6(1),e.Q6J("ngIf",(null==n.relatedUsers?null:n.relatedUsers.length)>0))},dependencies:[u.sg,u.O5,o.oU,o.YG,o.Sm,o.wI,o.W2,o.Gu,o.gu,o.Ie,o.q_,o.X7,o.Nd,o.wd,o.sr,o.cs,o.YI,p.rH,O.m,P.U,D.$],styles:['[_nghost-%COMP%]{--page-margin: var(--app-fair-margin);--page-background: var(--app-background);--page-related-users-gutter: calc(var(--page-margin) / 2)}.user-content[_ngcontent-%COMP%]{--background: var(--page-background)}.user-content[_ngcontent-%COMP%]   .user-info-row[_ngcontent-%COMP%]{--ion-grid-column-padding: 0px;padding:var(--page-margin)}.user-content[_ngcontent-%COMP%]   .user-info-row[_ngcontent-%COMP%]   .user-image-col[_ngcontent-%COMP%]{margin:0 auto;margin-bottom:calc(var(--page-margin) / 2)}.user-content[_ngcontent-%COMP%]   .user-info-row[_ngcontent-%COMP%]   .user-image-col[_ngcontent-%COMP%]   .user-image[_ngcontent-%COMP%]{border-radius:50%}.user-content[_ngcontent-%COMP%]   .user-info-row[_ngcontent-%COMP%]   .user-details-col[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;text-align:center}.user-content[_ngcontent-%COMP%]   .user-info-row[_ngcontent-%COMP%]   .user-details-col[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]{margin:0;margin-bottom:calc(var(--page-margin) / 2);min-width:40%}.user-content[_ngcontent-%COMP%]   .user-info-row[_ngcontent-%COMP%]   .user-details-col[_ngcontent-%COMP%]   .user-age[_ngcontent-%COMP%]{font-size:14px;font-weight:300;min-width:60%}.user-content[_ngcontent-%COMP%]   .user-info-row[_ngcontent-%COMP%]   .actions-col[_ngcontent-%COMP%]{text-align:center;margin-top:var(--page-margin)}.user-content[_ngcontent-%COMP%]   .user-info-row[_ngcontent-%COMP%]   .actions-col[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]{--border-radius: 50%;--padding-start: 0px;--padding-end: 0px;width:4ch;height:4ch}.user-content[_ngcontent-%COMP%]   .user-info-row[_ngcontent-%COMP%]   .actions-col[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%]{font-size:24px}.user-content[_ngcontent-%COMP%]   .content-section[_ngcontent-%COMP%]{padding:var(--page-margin);border-top:solid 1px var(--ion-color-light-shade)}.user-content[_ngcontent-%COMP%]   .content-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]{margin-top:0;margin-bottom:var(--page-margin)}.user-content[_ngcontent-%COMP%]   .user-languages-wrapper[_ngcontent-%COMP%]   .language-item-row[_ngcontent-%COMP%]{--ion-grid-column-padding: 0px;margin-bottom:calc(var(--page-margin) / 2)}.user-content[_ngcontent-%COMP%]   .user-languages-wrapper[_ngcontent-%COMP%]   .language-item-row[_ngcontent-%COMP%]   .language-item[_ngcontent-%COMP%]{-webkit-padding-start:0px;padding-inline-start:0px;-webkit-padding-end:0px;padding-inline-end:0px}.user-content[_ngcontent-%COMP%]   .user-languages-wrapper[_ngcontent-%COMP%]   .language-item-row[_ngcontent-%COMP%]   .language-item[_ngcontent-%COMP%]   .language-name[_ngcontent-%COMP%]{display:block;font-size:16px;font-weight:300;margin-bottom:calc(var(--page-margin) / 3)}.user-content[_ngcontent-%COMP%]   .user-languages-wrapper[_ngcontent-%COMP%]   .language-item-row[_ngcontent-%COMP%]   .language-item[_ngcontent-%COMP%]   .language-score[_ngcontent-%COMP%]{--buffer-background: rgba(var(--ion-color-secondary-rgb), .2);--progress-background: rgba(var(--ion-color-secondary-rgb), 1);height:var(--page-margin);border-radius:calc(var(--page-margin) / 2)}.user-content[_ngcontent-%COMP%]   .user-experience-wrapper[_ngcontent-%COMP%]   .experience-list[_ngcontent-%COMP%]{margin:0;padding:0}.user-content[_ngcontent-%COMP%]   .user-experience-wrapper[_ngcontent-%COMP%]   .experience-list[_ngcontent-%COMP%]   .experience-item[_ngcontent-%COMP%]{--min-height: initial;--padding-start: 0px;--padding-end: 0px;--inner-padding-start: 0px;--inner-padding-end: 0px}.user-content[_ngcontent-%COMP%]   .user-experience-wrapper[_ngcontent-%COMP%]   .experience-list[_ngcontent-%COMP%]   .experience-item[_ngcontent-%COMP%]:not(:last-child){padding-bottom:calc(var(--page-margin) / 2)}.user-content[_ngcontent-%COMP%]   .user-experience-wrapper[_ngcontent-%COMP%]   .experience-list[_ngcontent-%COMP%]   .experience-item[_ngcontent-%COMP%]   .experience-list-icon[_ngcontent-%COMP%]{margin:0;margin-right:calc(var(--page-margin) / 2)}.user-content[_ngcontent-%COMP%]   .user-experience-wrapper[_ngcontent-%COMP%]   .experience-list[_ngcontent-%COMP%]   .experience-item[_ngcontent-%COMP%]   .experience-label[_ngcontent-%COMP%]{font-size:16px;font-weight:300;width:100%}.user-content[_ngcontent-%COMP%]   .related-users-wrapper[_ngcontent-%COMP%]   .related-users-row[_ngcontent-%COMP%]{--ion-grid-columns: 7;--ion-grid-column-padding: 0px;flex-wrap:nowrap;overflow-x:scroll;will-change:scroll-position;margin-left:calc(var(--page-margin) * -1);margin-right:calc(var(--page-margin) * -1);-ms-overflow-style:none;overflow:-moz-scrollbars-none;scrollbar-width:none}.user-content[_ngcontent-%COMP%]   .related-users-wrapper[_ngcontent-%COMP%]   .related-users-row[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.user-content[_ngcontent-%COMP%]   .related-users-wrapper[_ngcontent-%COMP%]   .related-users-row[_ngcontent-%COMP%]:before, .user-content[_ngcontent-%COMP%]   .related-users-wrapper[_ngcontent-%COMP%]   .related-users-row[_ngcontent-%COMP%]:after{content:"";flex:0 0 calc(var(--page-margin) - var(--page-related-users-gutter))}.user-content[_ngcontent-%COMP%]   .related-users-wrapper[_ngcontent-%COMP%]   .related-users-row[_ngcontent-%COMP%]   .related-user-item[_ngcontent-%COMP%]{padding:0px var(--page-related-users-gutter);--col-item-width: 2;flex:0 0 calc(var(--col-item-width) / var(--ion-grid-columns, 12) * 100%);width:calc(var(--col-item-width) / var(--ion-grid-columns, 12) * 100%);max-width:calc(var(--col-item-width) / var(--ion-grid-columns, 12) * 100%)}.user-content[_ngcontent-%COMP%]   .related-users-wrapper[_ngcontent-%COMP%]   .related-users-row[_ngcontent-%COMP%]   .related-user-item[_ngcontent-%COMP%]   .related-user-name[_ngcontent-%COMP%]{display:block;text-align:center;margin-top:calc(var(--page-margin) / 2);font-size:14px}',"app-image-shell.user-image[_ngcontent-%COMP%]{--image-shell-border-radius: 50%}.user-name[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height: 24px}.user-age[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height: 14px}.experience-label[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height: 16px;max-width:40%}.experience-label[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:inherit}app-image-shell.related-user-picture[_ngcontent-%COMP%]{--image-shell-border-radius: var(--app-fair-radius)}.related-user-name[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height: 14px;max-width:80%}.related-user-name[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:inherit}"]});class g{constructor(t){this.firebaseCrudService=t}resolve(t){const n=t.paramMap.get("id"),i=this.firebaseCrudService.getCombinedUserDataSource(n),c=this.firebaseCrudService.getCombinedUserStore(i),l=this.firebaseCrudService.getRelatedUsersDataSource(c.state,n);return{user:c,relatedUsers:this.firebaseCrudService.getRelatedUsersStore(l)}}}g.\u0275fac=function(t){return new(t||g)(e.LFG(_.T))},g.\u0275prov=e.Yz7({token:g,factory:g.\u0275fac});var Q=s(8974);const z=[{path:"",component:h,resolve:{data:g}}];class d{}d.\u0275fac=function(t){return new(t||d)},d.\u0275mod=e.oAB({type:d}),d.\u0275inj=e.cJS({providers:[_.T,g],imports:[u.ez,r.u5,r.UX,o.Pc,p.Bz.forChild(z),x.K,Q.d]})}}]);