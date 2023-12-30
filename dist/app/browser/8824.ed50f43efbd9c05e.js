"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8824],{8949:(C,E,e)=>{e.d(E,{P:()=>v});var h=e(7323),d=e(1434),I=e(4650);class v{applySignInOptions(r,c){if(r.customParameters){const l={};r.customParameters.map(o=>{l[o.key]=o.value}),c.setCustomParameters(l)}if(r.scopes)for(const l of r.scopes)c.addScope(l)}createSignInResult(r,c){return{user:this.createUserResult(r?.user||null),credential:this.createCredentialResult(c),additionalUserInfo:this.createAdditionalUserInfoResult(r)}}createUserResult(r){return r?{displayName:r.displayName,email:r.email,emailVerified:r.emailVerified,isAnonymous:r.isAnonymous,phoneNumber:r.phoneNumber,photoUrl:r.providerData[0].photoURL,providerId:r.providerData[0].providerId,tenantId:r.tenantId,uid:r.uid}:null}createCredentialResult(r){if(!r)return null;const c={providerId:r.providerId};return r instanceof d.jh&&(c.accessToken=r.accessToken,c.idToken=r.idToken,c.secret=r.secret),c}createAdditionalUserInfoResult(r){if(!r)return null;const c=(0,h.gK)(r);if(!c)return null;const{isNewUser:l,profile:o,providerId:A,username:u}=c,p={isNewUser:l};return null!==A&&(p.providerId=A),null!==o&&(p.profile=o),null!=u&&(p.username=u),p}}v.\u0275fac=function(r){return new(r||v)},v.\u0275prov=I.Yz7({token:v,factory:v.\u0275fac})},8824:(C,E,e)=>{e.r(E),e.d(E,{FirebaseAuthModule:()=>i});var h=e(6895),d=e(3893),I=e(9267),v=e(7423),O=e(3692),r=e(7323),c=e(1434),l=e(3678),o=e(2340),A=e(7086),u=e(8949),p=e(4650);const M=[{path:"",children:[{path:"",redirectTo:"sign-in",pathMatch:"full"},{path:"sign-in",loadChildren:()=>Promise.all([e.e(8592),e.e(1511)]).then(e.bind(e,1511)).then(P=>P.FirebaseSignInPageModule)},{path:"sign-up",loadChildren:()=>Promise.all([e.e(8592),e.e(4385)]).then(e.bind(e,4385)).then(P=>P.FirebaseSignUpPageModule)},{path:"profile",loadChildren:()=>Promise.all([e.e(4840),e.e(8592),e.e(1008)]).then(e.bind(e,1008)).then(P=>P.FirebaseProfilePageModule)}]}];class i{}i.\u0275fac=function(S){return new(S||i)},i.\u0275mod=p.oAB({type:i}),i.\u0275inj=p.cJS({providers:[A.X,u.P],imports:[h.ez,I.Pc,l.K,d.Bz.forChild(M),(0,O.hX)(()=>(0,O.ZF)(o.N.firebase)),(0,r.AR)(()=>v.dV.isNativePlatform()?(0,r.uJ)((0,O.Mq)(),{persistence:c.AP}):(0,r.v0)())]})},7086:(C,E,e)=>{e.d(E,{X:()=>b});var h=e(5861),d=e(4650),I=e(6895),v=e(7579),O=e(9646),r=e(9300),c=e(4004),l=e(7323),o=e(1434);const u=(0,e(7423).fo)("FirebaseAuthentication",{web:()=>e.e(8652).then(e.bind(e,8652)).then(R=>new R.FirebaseAuthenticationWeb)});var p=e(9760),M=e(1198),i=(()=>{return(R=i||(i={})).apple="apple.com",R.facebook="facebook.com",R.google="google.com",R.twitter="twitter.com",i;var R})(),P=e(8949),S=e(3893),y=e(9267);class b{constructor(t,n,s,a,f,m,U,F){this.router=t,this.route=n,this.platform=s,this.ngZone=a,this.firebaseAuthHelper=f,this.loadingController=m,this.location=U,this.platformId=F,this.redirectResultSubject=new v.x,this.authStateSubject=new v.x,(0,I.NF)(this.platformId)&&(u.removeAllListeners().then(()=>{u.addListener("authStateChange",L=>{this.ngZone.run(()=>{this.authStateSubject.next(L)}),this.currentUser=L?.user?L.user:null})}),this.route.queryParams.subscribe(L=>{const W=L["auth-redirect"];if(W){this.presentLoading(W);const T=(0,l.v0)();(0,l.cx)(T).then(g=>{let D;if(!g||null===g)throw new Error("Could not get user from redirect result");{switch(g.providerId){case i.apple:D=o.O4.credentialFromResult(g);break;case i.facebook:D=o._O.credentialFromResult(g);break;case i.google:D=o.hJ.credentialFromResult(g);break;case i.twitter:D=o.c4.credentialFromResult(g)}const K=f.createSignInResult(g,D);this.dismissLoading(),this.redirectResultSubject.next(K)}},g=>{console.log("Promise rejected",g),this.clearAuthWithProvidersRedirection()}).catch(g=>{this.clearAuthWithProvidersRedirection();let D={error:"undefined"};g&&(g.code||g.message)&&(D={error:g.code?g.code:g.message}),this.redirectResultSubject.next(D)})}}))}ngOnDestroy(){this.dismissLoading()}prepareForAuthWithProvidersRedirection(t){this.location.replaceState(this.location.path(),"auth-redirect="+t,this.location.getState())}clearAuthWithProvidersRedirection(){this.location.replaceState(this.router.url.split("?")[0],""),this.dismissLoading()}presentLoading(t){var n=this;return(0,h.Z)(function*(){const s=t[0].toUpperCase()+t.slice(1);n.loadingController.create({message:t?"Signing in with "+s:"Signing in ...",duration:4e3}).then(a=>{n.authLoader=a,n.authLoader.present()})})()}dismissLoading(){var t=this;return(0,h.Z)(function*(){t.authLoader&&(yield t.authLoader.dismiss())})()}signOut(){return(0,h.Z)(function*(){return new Promise((n,s)=>{u.signOut().then(a=>{const f=(0,l.v0)();(0,l.w7)(f).then(m=>{n("Successfully sign out from native and web")}).catch(m=>{s(`Web auth sign out error: ${m}`)})}).catch(a=>{s(`Native auth sign out error: ${a}`)})})})()}socialSignIn(t,n){var s=this;return(0,h.Z)(function*(){s.presentLoading(t.providerId);let a=null;return a=s.platform.is("capacitor")?yield s.nativeAuth(t,n):yield s.webAuth(t,n),s.dismissLoading(),null!==a?a:Promise.reject("Could not perform social sign in, authResult is null")})()}webAuth(t,n){var s=this;return(0,h.Z)(function*(){const a=(0,l.v0)();let f=null;if(s.firebaseAuthHelper.applySignInOptions(n||{},t),!s.platform.is("desktop"))return s.prepareForAuthWithProvidersRedirection(t.providerId),(0,l.F6)(a,t);if(f=yield(0,l.rh)(a,t),f&&null!==f){let m=null;switch(t.providerId){case i.apple:m=o.O4.credentialFromResult(f);break;case i.facebook:m=o._O.credentialFromResult(f);break;case i.google:m=o.hJ.credentialFromResult(f);break;case i.twitter:m=o.c4.credentialFromResult(f)}return s.firebaseAuthHelper.createSignInResult(f,m)}return Promise.reject("null webAuthUserCredential")})()}nativeAuth(t,n){var s=this;return(0,h.Z)(function*(){let a=null;switch(t.providerId){case i.apple:a=yield u.signInWithApple(n);break;case i.facebook:a=yield u.signInWithFacebook(n);break;case i.google:a=yield u.signInWithGoogle(n);break;case i.twitter:a=yield u.signInWithTwitter(n)}if(a&&null!==a){const f=(0,l.v0)();let m=null;switch(t.providerId){case i.apple:m=new o.O4(i.apple).credential({idToken:a.credential?.idToken,rawNonce:a.credential?.nonce});break;case i.facebook:m=o._O.credential(a.credential?.accessToken);break;case i.google:m=o.hJ.credential(a.credential?.idToken,a.credential?.accessToken);break;case i.twitter:try{m=o.c4.credential(a.credential?.accessToken,a.credential?.secret);break}catch(L){console.error(L)}}const U=yield(0,l.sB)(f,m);return s.firebaseAuthHelper.createSignInResult(U,m)}return Promise.reject("null nativeAuthResult")})()}signInWithFacebook(){var t=this;return(0,h.Z)(function*(){const n=new o._O;return t.socialSignIn(n,{scopes:["email","public_profile"]})})()}signInWithGoogle(){var t=this;return(0,h.Z)(function*(){const n=new o.hJ;return t.socialSignIn(n,{scopes:["email","profile"]})})()}signInWithTwitter(){var t=this;return(0,h.Z)(function*(){const n=new o.c4;return t.socialSignIn(n,{scopes:["email","name"]})})()}signInWithApple(){var t=this;return(0,h.Z)(function*(){const n=new o.O4("apple.com");return t.socialSignIn(n,{scopes:["email","name"]})})()}signInWithEmail(t,n){var s=this;return(0,h.Z)(function*(){s.presentLoading("email");const a=(0,l.v0)(),f=yield(0,l.e5)(a,t,n);return s.dismissLoading(),s.firebaseAuthHelper.createSignInResult(f,null)})()}signUpWithEmail(t,n){var s=this;return(0,h.Z)(function*(){s.presentLoading("email");const a=(0,l.v0)(),f=yield(0,l.Xb)(a,t,n);return s.dismissLoading(),s.firebaseAuthHelper.createSignInResult(f,null)})()}get redirectResult$(){return this.redirectResultSubject.asObservable()}get authState$(){return this.authStateSubject.asObservable()}getProfileDataSource(){const t=(0,l.v0)();return(0,O.of)(t.currentUser).pipe((0,r.h)(n=>null!=n),(0,c.U)(n=>{const s=this.firebaseAuthHelper.createUserResult(n);return this.setUserModelForProfile(s)}))}setUserModelForProfile(t){const n=new M.f;return t&&(n.image=this.getPhotoURL(t.providerId,t.photoUrl),n.name=t.displayName||"What's your name?",n.role="How would you describe yourself?",n.description="Anything else you would like to share with the world?",n.phoneNumber=t.phoneNumber||"Is there a number where I can reach you?",n.email=t.email||"Where can I send you emails?",n.provider="password"!==t.providerId?t.providerId:"Credentials"),n}getProfileStore(t){const n=new M.f;return this.profileDataStore=new p.K(n),this.profileDataStore.load(t),this.profileDataStore}getPhotoURL(t,n){switch(t){case i.facebook:return n+"?height=400";case i.twitter:return n.replace("_normal","_400x400");case i.google:return n.split("=")[0];case"password":return"https://s3-us-west-2.amazonaws.com/ionicthemes/otros/avatar-placeholder.png";default:return n}}}b.\u0275fac=function(t){return new(t||b)(d.LFG(S.F0),d.LFG(S.gz),d.LFG(y.t4),d.LFG(d.R0b),d.LFG(P.P),d.LFG(y.HT),d.LFG(I.Ye),d.LFG(d.Lbi))},b.\u0275prov=d.Yz7({token:b,factory:b.\u0275fac,providedIn:"root"})},1198:(C,E,e)=>{e.d(E,{f:()=>d});var h=e(9760);class d extends h.n{constructor(){super()}}},9760:(C,E,e)=>{e.d(E,{K:()=>o,n:()=>l});var h=e(4707),d=e(9646),I=e(9841),v=e(1005),O=e(4004),r=e(8675),c=e(2340);class l{constructor(){this.isShell=!1}}class o{constructor(u){this.shellModel=u,this.networkDelay=c.N.appShellConfig&&c.N.appShellConfig.networkDelay?c.N.appShellConfig.networkDelay:0,this.timeline=new h.t(1)}static AppendShell(u,p,M=400){const i=(0,d.of)(!0).pipe((0,v.g)(M));return(0,I.a)([i,u]).pipe((0,O.U)(([P,S])=>Object.assign(S,{isShell:!1})),(0,r.O)(Object.assign(p,{isShell:!0})))}load(u,p){const M="number"==typeof p?p:this.networkDelay;let i;i=0===M?u:o.AppendShell(u,this.shellModel,M),i.subscribe(P=>{this.timeline.next(P)})}get state(){return this.timeline.asObservable()}}}}]);