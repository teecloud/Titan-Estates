"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[294],{294:(U,d,i)=>{i.r(d),i.d(d,{FoodListingPageModule:()=>g});var s=i(6895),l=i(3893),r=i(9267),_=i(3678),P=i(5503),m=i(4720),O=i(5971),M=i(5597),C=i(3900),n=i(4650),h=i(9330),v=i(1408),f=i(4840),x=i(3464);function w(o,t){if(1&o&&(n.TgZ(0,"ion-col",29)(1,"span",30),n._UZ(2,"app-text-shell",18),n.qZA()()),2&o){const e=t.$implicit;n.xp6(2),n.Q6J("data",e)}}function b(o,t){1&o&&(n.TgZ(0,"span",31),n._uU(1,"$"),n.qZA())}function Z(o,t){1&o&&(n.TgZ(0,"span",32),n._uU(1,"$"),n.qZA())}const p=function(o){return["/app/categories/food/",o]};function F(o,t){if(1&o&&(n.TgZ(0,"a",36)(1,"span",37),n._uU(2),n.qZA()()),2&o){const e=n.oxw(2).$implicit;n.Q6J("routerLink",n.VKq(2,p,e.slug)),n.xp6(2),n.Oqu(e.pictures.length-5)}}const L=function(){return{w:1,h:1}};function T(o,t){if(1&o&&(n.TgZ(0,"ion-col",33)(1,"app-aspect-ratio",10),n._UZ(2,"app-image-shell",34),n.qZA(),n.YNc(3,F,3,4,"a",35),n.qZA()),2&o){const e=t.$implicit,z=t.index,S=n.oxw().$implicit;n.xp6(1),n.Q6J("ratio",n.DdM(4,L)),n.xp6(1),n.Q6J("src",e)("alt","food image"),n.xp6(1),n.Q6J("ngIf",4===z&&S.pictures.length>5)}}const y=function(){return{w:35,h:15}},k=function(){return{w:20,h:7}},u=function(){return[]};function J(o,t){if(1&o&&(n.TgZ(0,"div",6)(1,"div",7)(2,"a",8)(3,"app-image-shell",9)(4,"app-aspect-ratio",10)(5,"div",11)(6,"app-aspect-ratio",10),n._UZ(7,"app-image-shell",12),n.qZA()()()()()(),n.TgZ(8,"ion-row",13)(9,"ion-col",14)(10,"ion-row",15)(11,"h3",16)(12,"a",17),n._UZ(13,"app-text-shell",18),n.qZA()(),n.TgZ(14,"p",19),n._UZ(15,"app-text-shell",18),n.qZA(),n.TgZ(16,"ion-row",20),n.YNc(17,w,3,1,"ion-col",21),n.qZA()()(),n.TgZ(18,"ion-col",22)(19,"span",23),n.ALo(20,"floor"),n._UZ(21,"app-text-shell",18),n.qZA(),n.TgZ(22,"div",24),n.YNc(23,b,2,0,"span",25),n.YNc(24,Z,2,0,"span",26),n.qZA()()(),n.TgZ(25,"ion-row",27),n.YNc(26,T,4,5,"ion-col",28),n.qZA()()),2&o){const e=t.$implicit;n.xp6(2),n.Q6J("routerLink",n.VKq(17,p,e.slug)),n.xp6(1),n.Q6J("display","cover")("src",e.image),n.xp6(1),n.Q6J("ratio",n.DdM(19,y)),n.xp6(2),n.Q6J("ratio",n.DdM(20,k)),n.xp6(1),n.Q6J("src",e.icon),n.xp6(5),n.Q6J("routerLink",n.VKq(21,p,e.slug)),n.xp6(1),n.Q6J("data",e.name),n.xp6(2),n.Q6J("data",e.address),n.xp6(2),n.Q6J("ngForOf",e.tags),n.xp6(2),n.uIk("ratingBase",n.lcZ(20,15,e.rating)),n.xp6(2),n.Q6J("data",e.rating),n.xp6(2),n.Q6J("ngForOf",n.DdM(23,u).constructor(e.priceRange)),n.xp6(1),n.Q6J("ngForOf",n.DdM(24,u).constructor(5-(e.priceRange||1))),n.xp6(2),n.Q6J("ngForOf",e.pictures.slice(0,5))}}function Q(o,t){if(1&o&&(n.ynx(0),n.YNc(1,J,27,25,"div",5),n.BQk()),2&o){const e=n.oxw();n.xp6(1),n.Q6J("ngForOf",null==e.listing?null:e.listing.items)}}class c{constructor(t){this.route=t}get isShell(){return!(!this.listing||!this.listing.isShell)}ngOnInit(){this.subscriptions=this.route.data.pipe((0,C.w)(t=>O.f.extractData(t.data,M.H))).subscribe({next:t=>{this.listing=t},error:t=>console.log(t)})}ionViewWillLeave(){this.subscriptions.unsubscribe()}}c.\u0275fac=function(t){return new(t||c)(n.Y36(l.gz))},c.\u0275cmp=n.Xpm({type:c,selectors:[["app-food-listing"]],hostVars:2,hostBindings:function(t,e){2&t&&n.ekj("is-shell",e.isShell)},decls:8,vars:1,consts:[["color","primary"],["slot","start"],["defaultHref","app/categories"],[1,"food-listing-content"],[4,"ngIf"],["class","listing-item",4,"ngFor","ngForOf"],[1,"listing-item"],[1,"cover-wrapper"],[1,"cover-anchor",3,"routerLink"],["animation","spinner",1,"cover-image","add-overlay",3,"display","src"],[3,"ratio"],[1,"cover-icon-wrapper"],[1,"item-icon",3,"src"],[1,"info-row"],[1,"description-col"],[1,"description-wrapper"],[1,"item-name"],[1,"name-anchor",3,"routerLink"],[3,"data"],[1,"item-address"],[1,"item-tags"],["class","tag-wrapper",4,"ngFor","ngForOf"],[1,"stats-col"],[1,"item-rating"],[1,"item-price-range"],["class","price",4,"ngFor","ngForOf"],["class","no-price",4,"ngFor","ngForOf"],[1,"pictures-row"],["class","picture-wrapper",4,"ngFor","ngForOf"],[1,"tag-wrapper"],[1,"item-tag"],[1,"price"],[1,"no-price"],[1,"picture-wrapper"],[1,"picture-image",3,"src","alt"],["class","has-more-pictures",3,"routerLink",4,"ngIf"],[1,"has-more-pictures",3,"routerLink"],[1,"pictures-count"]],template:function(t,e){1&t&&(n.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),n._UZ(3,"ion-back-button",2),n.qZA(),n.TgZ(4,"ion-title"),n._uU(5,"Food Listing"),n.qZA()()(),n.TgZ(6,"ion-content",3),n.YNc(7,Q,2,1,"ng-container",4),n.qZA()),2&t&&(n.xp6(7),n.Q6J("ngIf",null==e.listing?null:e.listing.items))},dependencies:[s.sg,s.O5,r.oU,r.Sm,r.wI,r.W2,r.Gu,r.Nd,r.wd,r.sr,r.cs,r.Fo,l.rH,h.m,v.U,f.$,x.oeX],styles:['[_nghost-%COMP%]{--page-margin: var(--app-fair-margin);--page-background: var(--app-background);--page-pictures-gutter: calc(var(--page-margin) / 4);--page-tags-gutter: 4px;--page-rating-5-color: #7ce198;--page-rating-4-color: #a8e07c;--page-rating-3-color: #cee07c;--page-rating-2-color: #e0c77c;--page-rating-1-color: #e07c7c;--page-color: #ebbb00;--page-color-rgb: 235,187,0}.food-listing-content[_ngcontent-%COMP%]{--background: var(--page-background);--padding-start: var(--page-margin);--padding-end: var(--page-margin);--padding-top: var(--page-margin);--padding-bottom: var(--page-margin)}.listing-item[_ngcontent-%COMP%]{border-bottom:2px solid var(--ion-color-medium-tint);margin-bottom:calc(var(--page-margin) * 2);padding-bottom:var(--page-margin)}.listing-item[_ngcontent-%COMP%]:last-child{border-bottom:none;margin-bottom:0}.listing-item[_ngcontent-%COMP%]   .cover-wrapper[_ngcontent-%COMP%]{margin-bottom:var(--page-margin)}.listing-item[_ngcontent-%COMP%]   .cover-wrapper[_ngcontent-%COMP%]   .cover-anchor[_ngcontent-%COMP%]{display:block}.listing-item[_ngcontent-%COMP%]   .cover-wrapper[_ngcontent-%COMP%]   .cover-icon-wrapper[_ngcontent-%COMP%]{margin:0 20%;display:flex;height:100%;justify-content:center;align-items:center}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]{--ion-grid-columns: 10;--ion-grid-column-padding: 0px;margin:0px calc(var(--page-pictures-gutter) * -1);padding-bottom:var(--page-margin)}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]:before, .listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]:after{content:"";flex:0 0 var(--page-pictures-gutter)}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .description-col[_ngcontent-%COMP%]   .description-wrapper[_ngcontent-%COMP%]{height:100%;justify-content:space-between;flex-direction:column}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .description-col[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%]{margin:0;color:var(--ion-color-dark-tint);font-size:20px}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .description-col[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%]   .name-anchor[_ngcontent-%COMP%]{display:block;text-decoration:none}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .description-col[_ngcontent-%COMP%]   .item-address[_ngcontent-%COMP%]{margin:5px 0 0;color:var(--ion-color-medium-tint);font-size:12px}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .description-col[_ngcontent-%COMP%]   .item-tags[_ngcontent-%COMP%]{margin-top:5px}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .description-col[_ngcontent-%COMP%]   .item-tags[_ngcontent-%COMP%]   .tag-wrapper[_ngcontent-%COMP%]{padding-right:var(--page-tags-gutter);flex-grow:0;min-width:-moz-fit-content;min-width:fit-content}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .description-col[_ngcontent-%COMP%]   .item-tags[_ngcontent-%COMP%]   .tag-wrapper[_ngcontent-%COMP%]:last-child{padding-right:0}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .description-col[_ngcontent-%COMP%]   .item-tags[_ngcontent-%COMP%]   .item-tag[_ngcontent-%COMP%]{display:block;border-radius:var(--app-narrow-radius);border:1px solid var(--ion-color-light-shade);padding:calc(var(--page-tags-gutter) / 2) var(--page-tags-gutter);font-size:10px;color:var(--ion-color-medium-tint)}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .stats-col[_ngcontent-%COMP%]{--col-item-width: 2;flex:0 0 calc(var(--col-item-width) / var(--ion-grid-columns, 12) * 100%);width:calc(var(--col-item-width) / var(--ion-grid-columns, 12) * 100%);max-width:calc(var(--col-item-width) / var(--ion-grid-columns, 12) * 100%);padding-left:calc(var(--page-margin) / 2)}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .stats-col[_ngcontent-%COMP%]   .item-rating[_ngcontent-%COMP%]{background-color:rgba(var(--page-color-rgb),.35);color:var(--ion-color-lightest);border-radius:var(--app-narrow-radius);padding-top:calc(var(--page-margin) / 3);padding-bottom:calc(var(--page-margin) / 3);padding-left:calc(var(--page-margin) / 2);padding-right:calc(var(--page-margin) / 2);font-size:12px;font-weight:600;width:100%;display:block;text-align:center}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .stats-col[_ngcontent-%COMP%]   .item-rating[ratingBase="1"][_ngcontent-%COMP%]{background-color:var(--page-rating-1-color)}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .stats-col[_ngcontent-%COMP%]   .item-rating[ratingBase="2"][_ngcontent-%COMP%]{background-color:var(--page-rating-2-color)}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .stats-col[_ngcontent-%COMP%]   .item-rating[ratingBase="3"][_ngcontent-%COMP%]{background-color:var(--page-rating-3-color)}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .stats-col[_ngcontent-%COMP%]   .item-rating[ratingBase="4"][_ngcontent-%COMP%]{background-color:var(--page-rating-4-color)}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .stats-col[_ngcontent-%COMP%]   .item-rating[ratingBase="5"][_ngcontent-%COMP%]{background-color:var(--page-rating-5-color)}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .stats-col[_ngcontent-%COMP%]   .item-price-range[_ngcontent-%COMP%]{margin-top:5px;font-size:12px;letter-spacing:1px;font-weight:500;text-align:center}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .stats-col[_ngcontent-%COMP%]   .item-price-range[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{color:var(--page-color)}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .stats-col[_ngcontent-%COMP%]   .item-price-range[_ngcontent-%COMP%]   .no-price[_ngcontent-%COMP%]{color:rgba(var(--ion-color-light-shade-rgb),.4)}.listing-item[_ngcontent-%COMP%]   .pictures-row[_ngcontent-%COMP%]{--ion-grid-columns: 10;--ion-grid-column-padding: 0px;margin:0px calc(var(--page-pictures-gutter) * -1)}.listing-item[_ngcontent-%COMP%]   .pictures-row[_ngcontent-%COMP%]   .picture-wrapper[_ngcontent-%COMP%]{--col-item-width: 2;flex:0 0 calc(var(--col-item-width) / var(--ion-grid-columns, 12) * 100%);width:calc(var(--col-item-width) / var(--ion-grid-columns, 12) * 100%);max-width:calc(var(--col-item-width) / var(--ion-grid-columns, 12) * 100%);padding:0px var(--page-pictures-gutter)}.listing-item[_ngcontent-%COMP%]   .pictures-row[_ngcontent-%COMP%]   .picture-wrapper[_ngcontent-%COMP%]   .has-more-pictures[_ngcontent-%COMP%]{position:absolute;inset:0;margin:0px var(--page-pictures-gutter);background-color:rgba(var(--page-color-rgb),.7);border-radius:var(--app-narrow-radius);display:flex;align-items:center;justify-content:center;text-decoration:none;z-index:2}.listing-item[_ngcontent-%COMP%]   .pictures-row[_ngcontent-%COMP%]   .picture-wrapper[_ngcontent-%COMP%]   .has-more-pictures[_ngcontent-%COMP%]   .pictures-count[_ngcontent-%COMP%]{font-size:22px;color:var(--ion-color-lightest);font-weight:600}.listing-item[_ngcontent-%COMP%]   .pictures-row[_ngcontent-%COMP%]   .picture-wrapper[_ngcontent-%COMP%]   .has-more-pictures[_ngcontent-%COMP%]   .pictures-count[_ngcontent-%COMP%]:before{content:"+";font-size:26px;color:var(--ion-color-lightest);font-weight:600}',"[_nghost-%COMP%]{--shell-color: #ebbb00;--shell-color-rgb: 235,187,0}app-image-shell.cover-image[_ngcontent-%COMP%]{--image-shell-border-radius: var(--app-fair-radius);--image-shell-loading-background: rgba(var(--shell-color-rgb), .1);--image-shell-overlay-background: transparent;--image-shell-spinner-color: rgba(var(--shell-color-rgb), .25)}app-image-shell.item-icon[_ngcontent-%COMP%]{--image-shell-loading-background: transparent}.item-name[_ngcontent-%COMP%]   app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color: rgba(var(--shell-color-rgb), .25);--text-shell-line-height: 20px;max-width:30%}.item-name[_ngcontent-%COMP%]   app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:unset}.item-address[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color: rgba(var(--shell-color-rgb), .2);--text-shell-line-height: 12px;max-width:50%}.item-address[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:unset}.item-tag[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color: rgba(var(--shell-color-rgb), .15);--text-shell-line-height: 10px;min-width:30px}.item-tag[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{min-width:0px}.item-rating[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color: rgba(var(--shell-color-rgb), .1);--text-shell-line-height: 12px}app-image-shell.picture-image[_ngcontent-%COMP%]{--image-shell-border-radius: var(--app-narrow-radius);--image-shell-loading-background: rgba(var(--shell-color-rgb), .2)}"]});class a{constructor(t){this.foodService=t}resolve(){const t=this.foodService.getListingDataSource();return this.foodService.getListingStore(t)}}a.\u0275fac=function(t){return new(t||a)(n.LFG(m.d))},a.\u0275prov=n.Yz7({token:a,factory:a.\u0275fac});const A=[{path:"",component:c,resolve:{data:a}}];class g{}g.\u0275fac=function(t){return new(t||g)},g.\u0275mod=n.oAB({type:g}),g.\u0275inj=n.cJS({providers:[a,m.d],imports:[s.ez,r.Pc,l.Bz.forChild(A),_.K,P.D]})}}]);