"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7447],{7447:(f,p,i)=>{i.r(p),i.d(p,{RealEstateListingPageModule:()=>P});var l=i(6895),r=i(3893),a=i(9267),h=i(3678),c=i(2014),O=i(505),M=i(3900),x=i(5971),t=i(4650),w=i(9330),s=i(1408),d=i(4840);function _(o,n){1&o&&t._UZ(0,"ion-icon",31)}function g(o,n){1&o&&t._UZ(0,"ion-icon",32)}function u(o,n){if(1&o&&t._UZ(0,"ion-icon",41),2&o){const e=t.oxw().$implicit;t.Q6J("src",e.icon)}}function v(o,n){if(1&o&&(t.TgZ(0,"ion-col",38),t.YNc(1,u,1,1,"ion-icon",39),t.TgZ(2,"span",40),t._UZ(3,"app-text-shell",16),t.qZA()()),2&o){const e=n.$implicit;t.xp6(1),t.Q6J("ngIf",e.icon),t.xp6(2),t.Q6J("data",e.name)}}function Z(o,n){if(1&o&&(t.TgZ(0,"ion-col",42)(1,"span",43),t._uU(2),t.qZA()()),2&o){const e=t.oxw(2).$implicit;t.xp6(2),t.hij("+",e.amenities.length-4,"")}}function y(o,n){if(1&o&&(t.TgZ(0,"ion-col",33)(1,"h5",34),t._uU(2,"Amenities"),t.qZA(),t.TgZ(3,"ion-row",35),t.ynx(4),t.YNc(5,v,4,2,"ion-col",36),t.YNc(6,Z,3,1,"ion-col",37),t.BQk(),t.qZA()()),2&o){const e=t.oxw().$implicit,L=t.oxw();t.xp6(5),t.Q6J("ngForOf",e.amenities.slice(0,4)),t.xp6(1),t.Q6J("ngIf",3===L.i&&e.amenities.length>4)}}const E=function(o){return["/app/categories/real-estate/",o]},T=function(){return{w:365,h:125}};function U(o,n){if(1&o&&(t.TgZ(0,"div",5)(1,"ion-row",6)(2,"ion-col",7)(3,"a",8)(4,"app-image-shell",9),t._UZ(5,"app-aspect-ratio",10),t.qZA()()()(),t.TgZ(6,"ion-row",11)(7,"ion-col",12)(8,"ion-row",13)(9,"ion-col")(10,"h4",14)(11,"span",15),t._uU(12,"$"),t.qZA(),t._UZ(13,"app-text-shell",16),t.qZA(),t.TgZ(14,"p",17),t._UZ(15,"app-text-shell",16),t.qZA()(),t.TgZ(16,"ion-col",18),t.YNc(17,_,1,0,"ion-icon",19),t.YNc(18,g,1,0,"ion-icon",20),t.qZA()()(),t.TgZ(19,"ion-col",21)(20,"ion-row",22)(21,"ion-col",23),t._UZ(22,"ion-icon",24),t.TgZ(23,"span",25),t._uU(24,"Guests"),t.qZA(),t.TgZ(25,"span",26),t._UZ(26,"app-text-shell",16),t.qZA()(),t.TgZ(27,"ion-col",23),t._UZ(28,"ion-icon",27),t.TgZ(29,"span",25),t._uU(30,"Bedrooms"),t.qZA(),t.TgZ(31,"span",26),t._UZ(32,"app-text-shell",16),t.qZA()(),t.TgZ(33,"ion-col",23),t._UZ(34,"ion-icon",28),t.TgZ(35,"span",25),t._uU(36,"Bathrooms"),t.qZA(),t.TgZ(37,"span",26),t._UZ(38,"app-text-shell",16),t.qZA()(),t.TgZ(39,"ion-col",23),t._UZ(40,"ion-icon",29),t.TgZ(41,"span",25),t._uU(42,"Patios"),t.qZA(),t.TgZ(43,"span",26),t._UZ(44,"app-text-shell",16),t.qZA()()()(),t.YNc(45,y,7,2,"ion-col",30),t.qZA()()),2&o){const e=n.$implicit;t.xp6(3),t.Q6J("routerLink",t.VKq(13,E,e.slug)),t.xp6(1),t.Q6J("display","cover")("src",e.picture),t.xp6(1),t.Q6J("ratio",t.DdM(15,T)),t.xp6(8),t.Q6J("data",e.price),t.xp6(2),t.Q6J("data",e.address),t.xp6(2),t.Q6J("ngIf",e.liked),t.xp6(1),t.Q6J("ngIf",!e.liked),t.xp6(8),t.Q6J("data",null==e.accommodations?null:e.accommodations.guests),t.xp6(6),t.Q6J("data",null==e.accommodations?null:e.accommodations.bedrooms),t.xp6(6),t.Q6J("data",null==e.accommodations?null:e.accommodations.bathrooms),t.xp6(6),t.Q6J("data",null==e.accommodations?null:e.accommodations.patios),t.xp6(1),t.Q6J("ngIf",e.amenities)}}class C{constructor(n){this.route=n}get isShell(){return!(!this.listing||!this.listing.isShell)}ngOnInit(){this.route.data.pipe((0,M.w)(n=>x.f.extractData(n.data,O.I))).subscribe({next:n=>{this.listing=n},error:n=>console.log(n)})}}C.\u0275fac=function(n){return new(n||C)(t.Y36(r.gz))},C.\u0275cmp=t.Xpm({type:C,selectors:[["app-real-estate-listing"]],hostVars:2,hostBindings:function(n,e){2&n&&t.ekj("is-shell",e.isShell)},decls:8,vars:1,consts:[["color","primary"],["slot","start"],["defaultHref","app/categories"],[1,"real-estate-listing-content"],["class","listing-item",4,"ngFor","ngForOf"],[1,"listing-item"],[1,"image-row"],["size","12"],[1,"image-anchor",3,"routerLink"],["animation","spinner",1,"item-picture",3,"display","src"],[3,"ratio"],[1,"description-row"],["size","12",1,"details-col"],[1,"details-wrapper"],[1,"item-price"],[1,"price-icon"],[3,"data"],[1,"item-address"],["size","2",1,"bookmark-col"],["class","like-icon","name","heart",4,"ngIf"],["class","like-icon","name","heart-outline",4,"ngIf"],["size","12",1,"accommodations-col"],[1,"accommodations-wrapper"],[1,"item-accommodation"],["src","./assets/custom-icons/real-estate/guests.svg",1,"accommodation-icon"],[1,"accommodation-property"],[1,"accommodation-value"],["src","./assets/custom-icons/real-estate/bedrooms.svg",1,"accommodation-icon"],["src","./assets/custom-icons/real-estate/bathroom.svg",1,"accommodation-icon"],["src","./assets/custom-icons/real-estate/patio.svg",1,"accommodation-icon"],["size","12","class","amenities-col",4,"ngIf"],["name","heart",1,"like-icon"],["name","heart-outline",1,"like-icon"],["size","12",1,"amenities-col"],[1,"amenities-title"],[1,"amenities-wrapper"],["class","item-amenity","size","4",4,"ngFor","ngForOf"],["class","has-more-amenities",4,"ngIf"],["size","4",1,"item-amenity"],["class","amenity-icon",3,"src",4,"ngIf"],[1,"amenity-value"],[1,"amenity-icon",3,"src"],[1,"has-more-amenities"],[1,"amenities-count"]],template:function(n,e){1&n&&(t.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),t._UZ(3,"ion-back-button",2),t.qZA(),t.TgZ(4,"ion-title"),t._uU(5,"Real Estate Listing"),t.qZA()()(),t.TgZ(6,"ion-content",3),t.YNc(7,U,46,16,"div",4),t.qZA()),2&n&&(t.xp6(7),t.Q6J("ngForOf",null==e.listing?null:e.listing.items))},dependencies:[l.sg,l.O5,a.oU,a.Sm,a.wI,a.W2,a.Gu,a.gu,a.Nd,a.wd,a.sr,a.cs,a.Fo,r.rH,w.m,s.U,d.$],styles:["[_nghost-%COMP%]{--page-margin: var(--app-broad-margin);--page-background: var(--app-background);--page-amenity-vertical-gutter: 6px;--page-amenity-horizontal-gutter: 4px;--page-color: #d9453a}.real-estate-listing-content[_ngcontent-%COMP%]{--background: var(--page-background)}.listing-item[_ngcontent-%COMP%]   .image-row[_ngcontent-%COMP%]{--ion-grid-column-padding: 0px}.listing-item[_ngcontent-%COMP%]   .image-row[_ngcontent-%COMP%]   .image-anchor[_ngcontent-%COMP%]{display:block}.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]{--ion-grid-column-padding: 0px;padding-bottom:var(--page-margin)}.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-col[_ngcontent-%COMP%]{padding:calc(var(--page-margin) / 2) var(--page-margin) 0px}.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-col[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]{justify-content:space-between}.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-col[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .item-price[_ngcontent-%COMP%]{margin:0 0 5px;font-weight:500;color:var(--ion-color-dark-tint);display:flex;align-items:center}.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-col[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .item-price[_ngcontent-%COMP%]   .price-icon[_ngcontent-%COMP%]{margin-right:5px}.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-col[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .item-address[_ngcontent-%COMP%]{margin:0;font-size:14px;color:var(--ion-color-medium-tint)}.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-col[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .bookmark-col[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-col[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .bookmark-col[_ngcontent-%COMP%]   .like-icon[_ngcontent-%COMP%]{font-size:32px;color:var(--page-color)}.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .accommodations-col[_ngcontent-%COMP%]{padding:0px var(--page-margin) var(--page-margin)}.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .accommodations-col[_ngcontent-%COMP%]   .accommodations-wrapper[_ngcontent-%COMP%]{padding-top:calc(var(--page-margin))}.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .accommodations-col[_ngcontent-%COMP%]   .item-accommodation[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;max-width:-moz-fit-content;max-width:fit-content}.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .accommodations-col[_ngcontent-%COMP%]   .item-accommodation[_ngcontent-%COMP%] + .item-accommodation[_ngcontent-%COMP%]{padding-left:calc(var(--page-margin) / 2 * 3)}.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .accommodations-col[_ngcontent-%COMP%]   .item-accommodation[_ngcontent-%COMP%]   .accommodation-property[_ngcontent-%COMP%]{font-size:12px;color:var(--ion-color-medium-tint)}.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .accommodations-col[_ngcontent-%COMP%]   .item-accommodation[_ngcontent-%COMP%]   .accommodation-value[_ngcontent-%COMP%]{display:inline-block;font-weight:400;font-size:14px;color:var(--ion-color-medium-tint);margin-top:4px}.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .accommodations-col[_ngcontent-%COMP%]   .item-accommodation[_ngcontent-%COMP%]   .accommodation-name[_ngcontent-%COMP%]{display:inline-block;font-size:12px;color:var(--ion-color-medium-tint)}.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .accommodations-col[_ngcontent-%COMP%]   .item-accommodation[_ngcontent-%COMP%]   .accommodation-icon[_ngcontent-%COMP%]{color:var(--ion-color-medium-tint);font-size:30px}.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .amenities-col[_ngcontent-%COMP%]{padding:0px var(--page-margin) calc(var(--page-margin) / 2);background:var(--app-background-shade)}.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .amenities-col[_ngcontent-%COMP%]   .amenities-title[_ngcontent-%COMP%]{margin:var(--page-margin) 0px calc(var(--page-margin) / 2);font-size:12px;text-transform:uppercase;letter-spacing:1px;color:var(--ion-color-medium-shade)}.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .amenities-col[_ngcontent-%COMP%]   .amenities-wrapper[_ngcontent-%COMP%]{margin:0px calc(var(--page-amenity-horizontal-gutter) * -1)}.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .amenities-col[_ngcontent-%COMP%]   .amenities-wrapper[_ngcontent-%COMP%]   .item-amenity[_ngcontent-%COMP%]{padding:var(--page-amenity-vertical-gutter) var(--page-amenity-horizontal-gutter);display:flex;align-items:center;justify-content:center}.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .amenities-col[_ngcontent-%COMP%]   .amenities-wrapper[_ngcontent-%COMP%]   .item-amenity[_ngcontent-%COMP%]   .amenity-icon[_ngcontent-%COMP%]{color:var(--ion-color-medium-tint);font-size:30px;flex-shrink:0}.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .amenities-col[_ngcontent-%COMP%]   .amenities-wrapper[_ngcontent-%COMP%]   .item-amenity[_ngcontent-%COMP%]   .amenity-value[_ngcontent-%COMP%]{display:block;font-weight:300;font-size:12px;color:var(--ion-color-medium-tint);margin-left:calc(var(--page-amenity-horizontal-gutter) * 2);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}","[_nghost-%COMP%]{--shell-color: #d9453a;--shell-color-rgb: 217,69,58}app-image-shell.item-picture[_ngcontent-%COMP%]{--image-shell-loading-background: rgba(var(--shell-color-rgb), .1);--image-shell-spinner-color: rgba(var(--shell-color-rgb), .25)}.item-price[_ngcontent-%COMP%]   app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color: rgba(var(--shell-color-rgb), .25);min-width:50px;max-width:100px}.item-price[_ngcontent-%COMP%]   app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:inherit}.item-address[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color: rgba(var(--shell-color-rgb), .2);--text-shell-line-height: 14px;max-width:60%}.item-address[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:inherit}.accommodation-value[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color: rgba(var(--shell-color-rgb), .1);--text-shell-line-height: 14px;min-width:30px}.accommodation-value[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{min-width:0px}.amenity-value[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color: rgba(var(--shell-color-rgb), .05);--text-shell-line-height: 12px;min-width:50px}.amenity-value[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{min-width:0px}"]});class m{constructor(n){this.realEstateService=n}resolve(){const n=this.realEstateService.getListingDataSource();return this.realEstateService.getListingStore(n)}}m.\u0275fac=function(n){return new(n||m)(t.LFG(c.P))},m.\u0275prov=t.Yz7({token:m,factory:m.\u0275fac});const A=[{path:"",component:C,resolve:{data:m}}];class P{}P.\u0275fac=function(n){return new(n||P)},P.\u0275mod=t.oAB({type:P}),P.\u0275inj=t.cJS({providers:[m,c.P],imports:[l.ez,a.Pc,r.Bz.forChild(A),h.K]})},9760:(f,p,i)=>{i.d(p,{K:()=>t,n:()=>x});var l=i(4707),r=i(9646),a=i(9841),h=i(1005),c=i(4004),O=i(8675),M=i(2340);class x{constructor(){this.isShell=!1}}class t{constructor(s){this.shellModel=s,this.networkDelay=M.N.appShellConfig&&M.N.appShellConfig.networkDelay?M.N.appShellConfig.networkDelay:0,this.timeline=new l.t(1)}static AppendShell(s,d,_=400){const g=(0,r.of)(!0).pipe((0,h.g)(_));return(0,a.a)([g,s]).pipe((0,c.U)(([u,v])=>Object.assign(v,{isShell:!1})),(0,O.O)(Object.assign(d,{isShell:!0})))}load(s,d){const _="number"==typeof d?d:this.networkDelay;let g;g=0===_?s:t.AppendShell(s,this.shellModel,_),g.subscribe(u=>{this.timeline.next(u)})}get state(){return this.timeline.asObservable()}}},5971:(f,p,i)=>{i.d(p,{f:()=>a});var l=i(9760),r=i(9646);class a{static extractData(c,O){return c instanceof l.K?c.state:c instanceof O?(0,r.of)(c):void 0}}}}]);