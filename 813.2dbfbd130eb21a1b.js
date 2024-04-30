"use strict";(self.webpackChunkpokemon_deck=self.webpackChunkpokemon_deck||[]).push([[813],{7813:(se,v,a)=>{a.r(v),a.d(v,{CreateComponent:()=>ee});var h=a(6575),d=a(2024);const m=Object.freeze({minCards:24,maxCards:60,cardsWithSameName:4});var S=a(8155),l=a(1047),T=a(6482),x=a(3738);const Z=(r,n)=>t=>t.value.length>=r&&t.value.length<=n?null:{deckCardsLength:!0};var e=a(3532),F=a(4980),A=a(7777),O=a(5823),C=a(1527),I=a(4114),J=a(5678),N=a(2707),E=a(8037),L=a(9912),P=a(384);function b(r,n){return n?t=>(0,O.z)(n.pipe((0,C.q)(1),function U(){return(0,I.e)((r,n)=>{r.subscribe((0,J.x)(n,N.Z))})}()),t.pipe(b(r))):(0,L.z)((t,s)=>(0,P.Xf)(r(t,s)).pipe((0,C.q)(1),(0,E.h)(t)))}var Q=a(530),Y=a(9736);const z_api_url="https://api.pokemontcg.io/v2";var $=a(4860);let D=(()=>{class r{constructor(t){this._httpModule=t,this._cardPages=[],this._baseURL=z_api_url,this.totalPages=0}getCards(t=1){const s=this._cardPages.find(c=>c.page===t);return s?(0,F.of)(s.cards).pipe(function R(r,n=A.z){const t=(0,Q.H)(r,n);return b(()=>t)}(300)):this._httpModule.get(`${this._baseURL}/cards?page=${t}&pageSize=60&select=id,name,supertype,images,types`).pipe((0,Y.U)(({data:c,totalCount:u})=>(this.totalPages||(this.totalPages=Math.round(u/60)),c.map(({id:p,name:f,supertype:te,images:re,types:g})=>{let y="";return g?.length&&(y=1===g.length?g[0]:g),{id:p,name:f,supertype:te,image:re.small,color:y}}))),(0,x.b)(c=>{this._cardPages.push({page:t,cards:c})}))}static#e=this.\u0275fac=function(s){return new(s||r)(e.LFG($.eN))};static#t=this.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var M=a(2981),k=a(4314),j=a(2320),B=a(6749);function w(r,n){if(1&r&&(e.TgZ(0,"igx-select-item",17),e._uU(1),e.qZA()),2&r){const t=n.$implicit;e.Q6J("value",t),e.xp6(1),e.hij(" ",t," ")}}function W(r,n){if(1&r&&(e.TgZ(0,"li",18),e._uU(1),e.TgZ(2,"span",19),e._uU(3),e.qZA(),e._uU(4),e.qZA()),2&r){const t=n.before,s=n.after,o=n.value;e.xp6(1),e.hij(" ",t," "),e.xp6(2),e.Oqu(o),e.xp6(1),e.hij(" ",s,"; ")}}const G=function(r,n){return{"border-transparent":r,"border-green-400":n}},K=function(r,n){return{"opacity-100":r,"opacity-50":n}};function V(r,n){if(1&r){const t=e.EpF();e.TgZ(0,"div",20)(1,"input",21,22),e.NdJ("click",function(o){const c=e.CHM(t).$implicit,u=e.oxw();return e.KtG(u.toggleCard(o.target,c))}),e.qZA(),e._UZ(3,"img",23),e.qZA()}if(2&r){const t=n.$implicit,s=e.MAs(2),o=e.oxw();e.Q6J("ngClass",e.WLB(4,G,!s.checked,s.checked)),e.xp6(1),e.Q6J("checked",o.cardIsSelected(t)),e.xp6(2),e.Q6J("ngClass",e.WLB(7,K,s.checked,!s.checked))("src",t.image,e.LSH)}}const X=function(r,n){return{"cursor-no-drop opacity-50 bg-gray-400 pointer-events-auto border-transparent":r,"border-yellow-400":n}},H=function(r){return{before:"M\xednimo",value:r,after:"cartas"}},q=function(r){return{before:"M\xe1ximo",value:r,after:"cartas"}},_=function(r){return{before:"At\xe9",value:r,after:"cartas com o mesmo nome"}};let ee=(()=>{class r{constructor(t,s,o,i,c,u,p,f){this._fb=t,this._pokemonAPI=s,this._decksService=o,this._router=i,this._activatedRoute=c,this._cdr=u,this._loaderService=p,this._toastService=f,this.deckRules=m,this.cards=[],this.deckForm=this._fb.group({pageSelected:[1],name:["",[d.kI.required]],cards:this._fb.array([],[d.kI.required,Z(m.minCards,m.maxCards)])}),this.pages=[],this._subscriptions$=new T.w0}ngOnInit(){this._getCards(),this._subscriptions$.add(this.deckForm.controls.pageSelected.valueChanges.subscribe(s=>{this._getCards(s)}));const t=this._activatedRoute.snapshot.params.id;if(t){const{name:s,cards:o}=this._decksService.decks[t];this.deckIdToEdit=t,this.deckForm.controls.name.setValue(s),o.forEach(i=>{this.deckForm.controls.cards.push(this._fb.control(i))})}}ngOnDestroy(){this._subscriptions$.unsubscribe(),this.deckForm.reset()}_getCards(t=1){this._loaderService.show("Buscando cartas..."),this._subscriptions$.add(this._pokemonAPI.getCards(t).pipe((0,x.b)(()=>{})).subscribe({next:s=>{this.cards=s,this._cdr.detectChanges(),this.pages.length||(this.pages=Array.from({length:this._pokemonAPI.totalPages},(o,i)=>i+1)),this._cdr.detectChanges()},error:()=>{this._toastService.show("Ocorreu um erro ao buscar as cartas!"),this._loaderService.hide()},complete:()=>this._loaderService.hide()}))}toggleCard(t,s){const o=this.deckForm.controls.cards;if(t.checked)return o.controls.filter(u=>u.value.name===s.name).length===m.cardsWithSameName?(t.checked=!t.checked,void this._toastService.show("N\xfamero m\xe1ximo de cartas com o mesmo nome atingido!")):o.controls.length===m.maxCards?(t.checked=!t.checked,void this._toastService.show("N\xfamero m\xe1ximo de cartas atingido!")):void o.push(this._fb.control(s));const i=o.controls.findIndex(c=>c.value===s);i>=0&&o.removeAt(i)}saveDeck(){if(this.deckForm.invalid)return;const{name:t,cards:s}=this.deckForm.value;this.deckIdToEdit?(this._decksService.updateDeck(this.deckIdToEdit,{name:t,cards:s}),this._toastService.show("Baralho atualizado!")):(this._decksService.addDeck({name:t,cards:s}),this._toastService.show("Baralho adicionado!")),this._router.navigateByUrl("/list")}cardIsSelected(t){return this.deckForm.controls.cards.controls.some(o=>o.value.id===t.id)}static#e=this.\u0275fac=function(s){return new(s||r)(e.Y36(d.qu),e.Y36(D),e.Y36(M.D),e.Y36(k.F0),e.Y36(k.gz),e.Y36(e.sBO),e.Y36(j.D),e.Y36(B.k))};static#t=this.\u0275cmp=e.Xpm({type:r,selectors:[["app-create"]],standalone:!0,features:[e.jDz],decls:24,vars:20,consts:[["title","Criar baralho","description","Selecione suas cartas favoritas, d\xea um nome ao seu baralho e colecione essa\nexperi\xeancia incr\xedvel!"],[3,"formGroup","ngSubmit"],[1,"mb-4","flex","gap-2","justify-between","flex-wrap","md:flex-nowrap"],[1,"bg-blue-950","bg-opacity-50","rounded-ss-md","rounded-se-md","flex-grow","basis-3/5"],["igxInput","","name","name","type","text","formControlName","name","required",""],["igxLabel","","for","name",1,"text-white"],["formControlName","pageSelected",1,"bg-blue-950","bg-opacity-50","rounded-ss-md","rounded-se-md","flex-grow"],["igxLabel","",1,"text-white"],["class","transition-colors hover:bg-gray-200",3,"value",4,"ngFor","ngForOf"],["type","submit","igxButton","contained","igxRipple","",1,"text-yellow-400","bg-blue-950","bg-opacity-50","rounded","border-2","border-solid","flex-grow",3,"ngClass","disabled"],[1,"mb-4","p-4","text-white","border-2","border-white","border-dashed"],[1,"text-yellow-400","font-semibold"],[1,"list-none","inline"],["rule",""],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"py-4","flex","gap-4","flex-wrap","justify-center","h-full","max-h-[684px]","lg:max-h-screen","overflow-y-auto"],["class","flex relative transition-all duration-300 hover:scale-105 border-4 rounded-2xl",3,"ngClass",4,"ngFor","ngForOf"],[1,"transition-colors","hover:bg-gray-200",3,"value"],[1,"inline"],[1,"text-yellow-400"],[1,"flex","relative","transition-all","duration-300","hover:scale-105","border-4","rounded-2xl",3,"ngClass"],["type","checkbox","name","cards","id","cards",1,"absolute","w-full","h-full","opacity-0","cursor-pointer","z-10",3,"checked","click"],["checkboxRef",""],[1,"max-w-64","transition-opacity","duration-300","rounded-xl",3,"ngClass","src"]],template:function(s,o){if(1&s&&(e._UZ(0,"app-title",0),e.TgZ(1,"form",1),e.NdJ("ngSubmit",function(){return o.saveDeck()}),e.TgZ(2,"div",2)(3,"igx-input-group",3),e._UZ(4,"input",4),e.TgZ(5,"label",5),e._uU(6,"Nome do baralho"),e.qZA()(),e.TgZ(7,"igx-select",6)(8,"label",7),e._uU(9,"P\xe1gina de cartas"),e.qZA(),e.YNc(10,w,2,2,"igx-select-item",8),e.qZA(),e.TgZ(11,"button",9),e._uU(12," Salvar "),e.qZA()(),e.TgZ(13,"div",10)(14,"span",11),e._uU(15,"Requisitos:"),e.qZA(),e.TgZ(16,"ul",12),e.YNc(17,W,5,3,"ng-template",null,13,e.W1O),e.GkF(19,14)(20,14)(21,14),e.qZA()(),e.TgZ(22,"div",15),e.YNc(23,V,4,10,"div",16),e.qZA()()),2&s){const i=e.MAs(18);e.xp6(1),e.Q6J("formGroup",o.deckForm),e.xp6(9),e.Q6J("ngForOf",o.pages),e.xp6(1),e.Q6J("ngClass",e.WLB(11,X,o.deckForm.invalid,o.deckForm.valid))("disabled",o.deckForm.invalid),e.xp6(8),e.Q6J("ngTemplateOutlet",i)("ngTemplateOutletContext",e.VKq(14,H,o.deckRules.minCards)),e.xp6(1),e.Q6J("ngTemplateOutlet",i)("ngTemplateOutletContext",e.VKq(16,q,o.deckRules.maxCards)),e.xp6(1),e.Q6J("ngTemplateOutlet",i)("ngTemplateOutletContext",e.VKq(18,_,o.deckRules.cardsWithSameName)),e.xp6(2),e.Q6J("ngForOf",o.cards)}},dependencies:[h.ez,h.mk,h.sg,h.tP,S.r,d.UX,d._Y,d.Fj,d.JJ,d.JL,d.Q7,d.sg,d.u,l.Z2X,l.iZ5,l.AKS,l.Xjp,l.Rbx,l.cTL,l.Ap$,l.QoJ,l.ZpI,l.HJ2,l.p9i],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;flex-grow:1}"]})}return r})()}}]);
//# sourceMappingURL=813.2dbfbd130eb21a1b.js.map