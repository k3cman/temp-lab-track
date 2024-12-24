import{e as ze,f as He,h as ee,i as Ve,k as P}from"./chunk-SIF4NJKA.js";import{c as oe,d as We,e as Ie}from"./chunk-3VQ3GFU2.js";import{a as ie,c as Ue,d as ne,e as Q,f as ae,g as Je}from"./chunk-LHSTG5TG.js";import{B as j,C as Ce,D as N,P as Qe,c as Be,ca as Ke,d as be,f as xe,ga as qe,h as ye,ia as Ze,ja as M,oa as te,v as Pe,y as je,z as Ne}from"./chunk-NDVPU2EA.js";import{$a as m,$b as x,Ab as $e,Bb as $,Bc as B,Cb as me,Db as I,Eb as T,Ga as se,Ha as U,Hb as O,Ib as v,Jb as L,Ka as p,La as H,O as ke,P as K,Pb as X,Q as q,Qb as Fe,Ra as pe,Rb as b,Sb as ce,Tb as ue,V as Z,Va as E,Wa as J,Ya as Oe,Za as W,Zb as de,_a as Le,_b as fe,ba as g,ca as h,ea as z,ec as _e,fc as ge,gb as _,gc as Ae,hb as o,ia as k,jb as Se,kb as Ee,lb as y,qa as we,qb as c,rb as u,sb as f,tb as G,ub as Y,uc as V,vb as R,vc as Re,wb as D,wc as F,xb as w,xc as he,yb as l,yc as ve,zb as De,zc as A}from"./chunk-RVVVTUXY.js";var mt=({dt:e})=>`
.p-menu {
    background: ${e("menu.background")};
    color: ${e("menu.color")};
    border: 1px solid ${e("menu.border.color")};
    border-radius: ${e("menu.border.radius")};
    min-width: 12.5rem;
}

.p-menu-list {
    margin: 0;
    padding: ${e("menu.list.padding")};
    outline: 0 none;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: ${e("menu.list.gap")};
}

.p-menu-item-content {
    transition: background ${e("menu.transition.duration")}, color ${e("menu.transition.duration")};
    border-radius: ${e("menu.item.border.radius")};
    color: ${e("menu.item.color")};
}

.p-menu-item-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: ${e("menu.item.padding")};
    gap: ${e("menu.item.gap")};
    user-select: none;
    outline: 0 none;
}

.p-menu-item-label {
    line-height: 1;
}

.p-menu-item-icon {
    color: ${e("menu.item.icon.color")};
}

.p-menu-item.p-focus .p-menu-item-content {
    color: ${e("menu.item.focus.color")};
    background: ${e("menu.item.focus.background")};
}

.p-menu-item.p-focus .p-menu-item-icon {
    color: ${e("menu.item.icon.focus.color")};
}

.p-menu-item:not(.p-disabled) .p-menu-item-content:hover {
    color: ${e("menu.item.focus.color")};
    background: ${e("menu.item.focus.background")};
}

.p-menu-item:not(.p-disabled) .p-menu-item-content:hover .p-menu-item-icon {
    color: ${e("menu.item.icon.focus.color")};
}

.p-menu-overlay {
    box-shadow: ${e("menu.shadow")};
}

.p-menu-submenu-label {
    background: ${e("menu.submenu.label.background")};
    padding: ${e("menu.submenu.label.padding")};
    color: ${e("menu.submenu.label.color")};
    font-weight: ${e("menu.submenu.label.font.weight")};
}

.p-menu-separator {
    border-top: 1px solid ${e("menu.separator.border.color")};
}

/* For PrimeNG */
.p-menu-overlay {
    position: absolute;
}
`,ct={root:({props:e})=>["p-menu p-component",{"p-menu-overlay":e.popup}],start:"p-menu-start",list:"p-menu-list",submenuLabel:"p-menu-submenu-label",separator:"p-menu-separator",end:"p-menu-end",item:({instance:e})=>["p-menu-item",{"p-focus":e.id===e.focusedOptionId,"p-disabled":e.disabled()}],itemContent:"p-menu-item-content",itemLink:"p-menu-item-link",itemIcon:"p-menu-item-icon",itemLabel:"p-menu-item-label"},Ge=(()=>{class e extends te{name="menu";theme=mt;classes=ct;static \u0275fac=(()=>{let t;return function(i){return(t||(t=z(e)))(i||e)}})();static \u0275prov=K({token:e,factory:e.\u0275fac})}return e})();var ut=["pMenuItemContent",""],et=e=>({"p-disabled":e}),re=e=>({$implicit:e}),dt=()=>({exact:!1});function ft(e,r){e&1&&R(0)}function _t(e,r){if(e&1&&(c(0,"a",6),m(1,ft,1,0,"ng-container",7),u()),e&2){let t=l(2),n=O(4);o("target",t.item.target)("ngClass",b(9,et,t.item.disabled)),_("title",t.item.title)("href",t.item.url||null,U)("data-automationid",t.item.automationId)("tabindex",-1)("data-pc-section","action"),p(),o("ngTemplateOutlet",n)("ngTemplateOutletContext",b(11,re,t.item))}}function gt(e,r){e&1&&R(0)}function ht(e,r){if(e&1&&(c(0,"a",8),m(1,gt,1,0,"ng-container",7),u()),e&2){let t=l(2),n=O(4);o("routerLink",t.item.routerLink)("queryParams",t.item.queryParams)("routerLinkActiveOptions",t.item.routerLinkActiveOptions||Fe(17,dt))("target",t.item.target)("ngClass",b(18,et,t.item.disabled))("fragment",t.item.fragment)("queryParamsHandling",t.item.queryParamsHandling)("preserveFragment",t.item.preserveFragment)("skipLocationChange",t.item.skipLocationChange)("replaceUrl",t.item.replaceUrl)("state",t.item.state),_("data-automationid",t.item.automationId)("tabindex",-1)("data-pc-section","action")("title",t.item.title),p(),o("ngTemplateOutlet",n)("ngTemplateOutletContext",b(20,re,t.item))}}function vt(e,r){if(e&1&&(G(0),m(1,_t,2,13,"a",4)(2,ht,2,22,"a",5),Y()),e&2){let t=l();p(),o("ngIf",!(t.item!=null&&t.item.routerLink)),p(),o("ngIf",t.item==null?null:t.item.routerLink)}}function bt(e,r){}function xt(e,r){e&1&&m(0,bt,0,0,"ng-template")}function yt(e,r){if(e&1&&(G(0),m(1,xt,1,0,null,7),Y()),e&2){let t=l();p(),o("ngTemplateOutlet",t.itemTemplate)("ngTemplateOutletContext",b(2,re,t.item))}}function Ct(e,r){if(e&1&&f(0,"span",12),e&2){let t=l(2);y(t.item.iconClass),o("ngClass",t.item.icon)("ngStyle",t.item.iconStyle)}}function It(e,r){if(e&1&&(c(0,"span",13),v(1),u()),e&2){let t=l(2);p(),L(t.item.label)}}function Tt(e,r){if(e&1&&(f(0,"span",14),de(1,"safeHtml")),e&2){let t=l(2);o("innerHTML",fe(1,1,t.item.label),se)}}function Mt(e,r){if(e&1&&f(0,"p-badge",15),e&2){let t=l(2);o("styleClass",t.item.badgeStyleClass)("value",t.item.badge)}}function kt(e,r){if(e&1&&m(0,Ct,1,4,"span",9)(1,It,2,1,"span",10)(2,Tt,2,3,"ng-template",null,1,x)(4,Mt,1,2,"p-badge",11),e&2){let t=O(3),n=l();o("ngIf",n.item.icon),p(),o("ngIf",n.item.escape!==!1)("ngIfElse",t),p(3),o("ngIf",n.item.badge)}}var wt=["start"],Ot=["end"],Lt=["header"],St=["item"],Et=["submenuheader"],Dt=["list"],$t=["container"],Ft=e=>({"p-menu p-component":!0,"p-menu-overlay":e}),At=(e,r)=>({showTransitionParams:e,hideTransitionParams:r}),Rt=e=>({value:"visible",params:e}),Te=e=>({"p-hidden":e}),zt=(e,r)=>({"p-hidden":e,flex:r}),tt=(e,r,t)=>({"p-hidden":e,"p-focus":r,"p-disabled":t});function Ht(e,r){e&1&&R(0)}function Vt(e,r){if(e&1&&(c(0,"div",9),m(1,Ht,1,0,"ng-container",10),u()),e&2){let t,n=l(2);_("data-pc-section","start"),p(),o("ngTemplateOutlet",(t=n.startTemplate)!==null&&t!==void 0?t:n._startTemplate)}}function Bt(e,r){if(e&1&&f(0,"li",14),e&2){let t=l().$implicit;o("ngClass",b(1,Te,t.visible===!1))}}function Pt(e,r){if(e&1&&(c(0,"span"),v(1),u()),e&2){let t=l(3).$implicit;p(),L(t.label)}}function jt(e,r){if(e&1&&(f(0,"span",18),de(1,"safeHtml")),e&2){let t=l(3).$implicit;o("innerHTML",fe(1,1,t.label),se)}}function Nt(e,r){if(e&1&&(G(0),m(1,Pt,2,1,"span",17)(2,jt,2,3,"ng-template",null,2,x),Y()),e&2){let t=O(3),n=l(2).$implicit;p(),o("ngIf",n.escape!==!1)("ngIfElse",t)}}function Qt(e,r){e&1&&R(0)}function Kt(e,r){if(e&1&&(c(0,"li",15),m(1,Nt,4,2,"ng-container",7)(2,Qt,1,0,"ng-container",16),u()),e&2){let t,n=l(),i=n.$implicit,a=n.index,s=l(3);o("ngClass",ce(7,zt,i.visible===!1,i.visible))("tooltipOptions",i.tooltipOptions),_("data-automationid",i.automationId)("id",s.menuitemId(i,s.id,a)),p(),o("ngIf",!s.submenuHeaderTemplate&&!s._submenuHeaderTemplate),p(),o("ngTemplateOutlet",(t=s.submenuHeaderTemplate)!==null&&t!==void 0?t:s._submenuHeaderTemplate)("ngTemplateOutletContext",b(10,re,i))}}function qt(e,r){if(e&1&&f(0,"li",14),e&2){let t=l().$implicit,n=l().$implicit;o("ngClass",b(1,Te,t.visible===!1||n.visible===!1))}}function Zt(e,r){if(e&1){let t=D();c(0,"li",20),w("onMenuItemClick",function(i){g(t);let a=l(),s=a.$implicit,S=a.index,C=l().index,d=l(3);return h(d.itemClick(i,d.menuitemId(s,d.id,C,S)))}),u()}if(e&2){let t,n=l(),i=n.$implicit,a=n.index,s=l(),S=s.$implicit,C=s.index,d=l(3);y(i.styleClass),o("pMenuItemContent",i)("itemTemplate",(t=d.itemTemplate)!==null&&t!==void 0?t:d._itemTemplate)("ngClass",ue(13,tt,i.visible===!1||S.visible===!1,d.focusedOptionId()&&d.menuitemId(i,d.id,C,a)===d.focusedOptionId(),d.disabled(i.disabled)))("ngStyle",i.style)("tooltipOptions",i.tooltipOptions),_("data-pc-section","menuitem")("aria-label",d.label(i.label))("data-p-focused",d.isItemFocused(d.menuitemId(i,d.id,C,a)))("data-p-disabled",d.disabled(i.disabled))("aria-disabled",d.disabled(i.disabled))("id",d.menuitemId(i,d.id,C,a))}}function Ut(e,r){if(e&1&&m(0,qt,1,3,"li",12)(1,Zt,1,17,"li",19),e&2){let t=r.$implicit;o("ngIf",t.separator),p(),o("ngIf",!t.separator)}}function Jt(e,r){if(e&1&&m(0,Bt,1,3,"li",12)(1,Kt,3,12,"li",13)(2,Ut,2,2,"ng-template",11),e&2){let t=r.$implicit;o("ngIf",t.separator),p(),o("ngIf",!t.separator),p(),o("ngForOf",t.items)}}function Wt(e,r){if(e&1&&m(0,Jt,3,3,"ng-template",11),e&2){let t=l(2);o("ngForOf",t.model)}}function Gt(e,r){if(e&1&&f(0,"li",14),e&2){let t=l().$implicit;o("ngClass",b(1,Te,t.visible===!1))}}function Yt(e,r){if(e&1){let t=D();c(0,"li",20),w("onMenuItemClick",function(i){g(t);let a=l(),s=a.$implicit,S=a.index,C=l(3);return h(C.itemClick(i,C.menuitemId(s,C.id,S)))}),u()}if(e&2){let t,n=l(),i=n.$implicit,a=n.index,s=l(3);y(i.styleClass),o("pMenuItemContent",i)("itemTemplate",(t=s.itemTemplate)!==null&&t!==void 0?t:s._itemTemplate)("ngClass",ue(13,tt,i.visible===!1,s.focusedOptionId()&&s.menuitemId(i,s.id,a)===s.focusedOptionId(),s.disabled(i.disabled)))("ngStyle",i.style)("tooltipOptions",i.tooltipOptions),_("data-pc-section","menuitem")("aria-label",s.label(i.label))("data-p-focused",s.isItemFocused(s.menuitemId(i,s.id,a)))("data-p-disabled",s.disabled(i.disabled))("aria-disabled",s.disabled(i.disabled))("id",s.menuitemId(i,s.id,a))}}function Xt(e,r){if(e&1&&m(0,Gt,1,3,"li",12)(1,Yt,1,17,"li",19),e&2){let t=r.$implicit;o("ngIf",t.separator),p(),o("ngIf",!t.separator)}}function ei(e,r){if(e&1&&m(0,Xt,2,2,"ng-template",11),e&2){let t=l(2);o("ngForOf",t.model)}}function ti(e,r){e&1&&R(0)}function ii(e,r){if(e&1&&(c(0,"div",21),m(1,ti,1,0,"ng-container",10),u()),e&2){let t,n=l(2);_("data-pc-section","end"),p(),o("ngTemplateOutlet",(t=n.endTemplate)!==null&&t!==void 0?t:n._endTemplate)}}function ni(e,r){if(e&1){let t=D();c(0,"div",4,0),w("click",function(i){g(t);let a=l();return h(a.onOverlayClick(i))})("@overlayAnimation.start",function(i){g(t);let a=l();return h(a.onOverlayAnimationStart(i))})("@overlayAnimation.done",function(i){g(t);let a=l();return h(a.onOverlayAnimationEnd(i))}),m(2,Vt,2,2,"div",5),c(3,"ul",6,1),w("focus",function(i){g(t);let a=l();return h(a.onListFocus(i))})("blur",function(i){g(t);let a=l();return h(a.onListBlur(i))})("keydown",function(i){g(t);let a=l();return h(a.onListKeyDown(i))}),m(5,Wt,1,1,null,7)(6,ei,1,1,null,7),u(),m(7,ii,2,2,"div",8),u()}if(e&2){let t,n,i=l();y(i.styleClass),o("ngClass",b(18,Ft,i.popup))("ngStyle",i.style)("@overlayAnimation",b(23,Rt,ce(20,At,i.showTransitionOptions,i.hideTransitionOptions)))("@.disabled",i.popup!==!0),_("data-pc-name","menu")("id",i.id),p(2),o("ngIf",(t=i.startTemplate)!==null&&t!==void 0?t:i._startTemplate),p(),_("id",i.id+"_list")("tabindex",i.getTabIndexValue())("data-pc-section","menu")("aria-activedescendant",i.activedescendant())("aria-label",i.ariaLabel)("aria-labelledBy",i.ariaLabelledBy),p(2),o("ngIf",i.hasSubMenu()),p(),o("ngIf",!i.hasSubMenu()),p(),o("ngIf",(n=i.endTemplate)!==null&&n!==void 0?n:i._endTemplate)}}var it=(()=>{class e{platformId;sanitizer;constructor(t,n){this.platformId=t,this.sanitizer=n}transform(t){return!t||!B(this.platformId)?t:this.sanitizer.bypassSecurityTrustHtml(t)}static \u0275fac=function(n){return new(n||e)(H(we,16),H(ze,16))};static \u0275pipe=Oe({name:"safeHtml",type:e,pure:!0})}return e})(),ai=(()=>{class e{item;itemTemplate;onMenuItemClick=new k;menu;constructor(t){this.menu=t}onItemClick(t,n){this.onMenuItemClick.emit({originalEvent:t,item:n})}static \u0275fac=function(n){return new(n||e)(H(ke(()=>le)))};static \u0275cmp=E({type:e,selectors:[["","pMenuItemContent",""]],inputs:{item:[0,"pMenuItemContent","item"],itemTemplate:"itemTemplate"},outputs:{onMenuItemClick:"onMenuItemClick"},attrs:ut,decls:5,vars:3,consts:[["itemContent",""],["htmlLabel",""],[1,"p-menu-item-content",3,"click"],[4,"ngIf"],["class","p-menu-item-link","pRipple","",3,"target","ngClass",4,"ngIf"],["routerLinkActive","p-menu-item-link-active","class","p-menu-item-link","pRipple","",3,"routerLink","queryParams","routerLinkActiveOptions","target","ngClass","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state",4,"ngIf"],["pRipple","",1,"p-menu-item-link",3,"target","ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["routerLinkActive","p-menu-item-link-active","pRipple","",1,"p-menu-item-link",3,"routerLink","queryParams","routerLinkActiveOptions","target","ngClass","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state"],["class","p-menu-item-icon",3,"ngClass","class","ngStyle",4,"ngIf"],["class","p-menu-item-label",4,"ngIf","ngIfElse"],[3,"styleClass","value",4,"ngIf"],[1,"p-menu-item-icon",3,"ngClass","ngStyle"],[1,"p-menu-item-label"],[1,"p-menu-item-label",3,"innerHTML"],[3,"styleClass","value"]],template:function(n,i){if(n&1){let a=D();c(0,"div",2),w("click",function(S){return g(a),h(i.onItemClick(S,i.item))}),m(1,vt,3,2,"ng-container",3)(2,yt,2,4,"ng-container",3)(3,kt,5,4,"ng-template",null,0,x),u()}n&2&&(_("data-pc-section","content"),p(),o("ngIf",!i.itemTemplate),p(),o("ngIf",i.itemTemplate))},dependencies:[A,V,F,ve,he,P,ee,Ve,ae,Ie,Q,ne,M,it],encapsulation:2})}return e})(),le=(()=>{class e extends ie{overlayService;model;popup;style;styleClass;appendTo;autoZIndex=!0;baseZIndex=0;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";ariaLabel;ariaLabelledBy;id;tabindex=0;onShow=new k;onHide=new k;onBlur=new k;onFocus=new k;listViewChild;containerViewChild;container;scrollHandler;documentClickListener;documentResizeListener;preventDocumentDefault;target;visible;focusedOptionId=Ae(()=>this.focusedOptionIndex()!==-1?this.focusedOptionIndex():null);focusedOptionIndex=pe(-1);selectedOptionIndex=pe(-1);focused=!1;overlayVisible=!1;relativeAlign;_componentStyle=Z(Ge);constructor(t){super(),this.overlayService=t,this.id=this.id||Ke("pn_id_")}toggle(t){this.visible?this.hide():this.show(t),this.preventDocumentDefault=!0}show(t){this.target=t.currentTarget,this.relativeAlign=t.relativeAlign,this.visible=!0,this.preventDocumentDefault=!0,this.overlayVisible=!0,this.cd.markForCheck()}ngOnInit(){super.ngOnInit(),this.popup||this.bindDocumentClickListener()}startTemplate;_startTemplate;endTemplate;_endTemplate;headerTemplate;_headerTemplate;itemTemplate;_itemTemplate;submenuHeaderTemplate;_submenuHeaderTemplate;templates;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"start":this._startTemplate=t.template;break;case"end":this._endTemplate=t.template;break;case"item":this._itemTemplate=t.template;break;case"submenuheader":this._submenuHeaderTemplate=t.template;break;default:this._itemTemplate=t.template;break}})}getTabIndexValue(){return this.tabindex!==void 0?this.tabindex.toString():null}onOverlayAnimationStart(t){switch(t.toState){case"visible":this.popup&&(this.container=t.element,this.moveOnTop(),this.onShow.emit({}),this.appendOverlay(),this.alignOverlay(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener(),N(this.listViewChild.nativeElement));break;case"void":this.onOverlayHide(),this.onHide.emit({});break}}onOverlayAnimationEnd(t){switch(t.toState){case"void":this.autoZIndex&&oe.clear(t.element);break}}alignOverlay(){this.relativeAlign?je(this.container,this.target):Pe(this.container,this.target)}appendOverlay(){this.appendTo&&(this.appendTo==="body"?this.renderer.appendChild(this.document.body,this.container):Ne(this.appendTo,this.container))}restoreOverlayAppend(){this.container&&this.appendTo&&this.renderer.appendChild(this.el.nativeElement,this.container)}moveOnTop(){this.autoZIndex&&oe.set("menu",this.container,this.baseZIndex+this.config.zIndex.menu)}hide(){this.visible=!1,this.relativeAlign=!1,this.cd.markForCheck()}onWindowResize(){this.visible&&!Qe()&&this.hide()}menuitemId(t,n,i,a){return t?.id??`${n}_${i}${a!==void 0?"_"+a:""}`}isItemFocused(t){return this.focusedOptionId()===t}label(t){return typeof t=="function"?t():t}disabled(t){return typeof t=="function"?t():typeof t>"u"?!1:t}activedescendant(){return this.focused?this.focusedOptionId():void 0}onListFocus(t){this.focused||(this.focused=!0,this.onFocus.emit(t))}onListBlur(t){this.focused&&(this.focused=!1,this.changeFocusedOptionIndex(-1),this.selectedOptionIndex.set(-1),this.focusedOptionIndex.set(-1),this.onBlur.emit(t))}onListKeyDown(t){switch(t.code){case"ArrowDown":this.onArrowDownKey(t);break;case"ArrowUp":this.onArrowUpKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"Enter":this.onEnterKey(t);break;case"NumpadEnter":this.onEnterKey(t);break;case"Space":this.onSpaceKey(t);break;case"Escape":case"Tab":this.popup&&(N(this.target),this.hide()),this.overlayVisible&&this.hide();break;default:break}}onArrowDownKey(t){let n=this.findNextOptionIndex(this.focusedOptionIndex());this.changeFocusedOptionIndex(n),t.preventDefault()}onArrowUpKey(t){if(t.altKey&&this.popup)N(this.target),this.hide(),t.preventDefault();else{let n=this.findPrevOptionIndex(this.focusedOptionIndex());this.changeFocusedOptionIndex(n),t.preventDefault()}}onHomeKey(t){this.changeFocusedOptionIndex(0),t.preventDefault()}onEndKey(t){this.changeFocusedOptionIndex(j(this.containerViewChild.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]').length-1),t.preventDefault()}onEnterKey(t){let n=Ce(this.containerViewChild.nativeElement,`li[id="${`${this.focusedOptionIndex()}`}"]`),i=n&&Ce(n,'a[data-pc-section="action"]');this.popup&&N(this.target),i?i.click():n&&n.click(),t.preventDefault()}onSpaceKey(t){this.onEnterKey(t)}findNextOptionIndex(t){let i=[...j(this.containerViewChild.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]')].findIndex(a=>a.id===t);return i>-1?i+1:0}findPrevOptionIndex(t){let i=[...j(this.containerViewChild.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]')].findIndex(a=>a.id===t);return i>-1?i-1:0}changeFocusedOptionIndex(t){let n=j(this.containerViewChild.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]');if(n.length>0){let i=t>=n.length?n.length-1:t<0?0:t;i>-1&&this.focusedOptionIndex.set(n[i].getAttribute("id"))}}itemClick(t,n){let{originalEvent:i,item:a}=t;if(this.focused||(this.focused=!0,this.onFocus.emit()),a.disabled){i.preventDefault();return}!a.url&&!a.routerLink&&i.preventDefault(),a.command&&a.command({originalEvent:i,item:a}),this.popup&&this.hide(),!this.popup&&this.focusedOptionIndex()!==n&&this.focusedOptionIndex.set(n)}onOverlayClick(t){this.popup&&this.overlayService.add({originalEvent:t,target:this.el.nativeElement}),this.preventDocumentDefault=!0}bindDocumentClickListener(){if(!this.documentClickListener&&B(this.platformId)){let t=this.el?this.el.nativeElement.ownerDocument:"document";this.documentClickListener=this.renderer.listen(t,"click",n=>{let i=this.containerViewChild?.nativeElement&&!this.containerViewChild?.nativeElement.contains(n.target),a=!(this.target&&(this.target===n.target||this.target.contains(n.target)));!this.popup&&i&&a&&this.onListBlur(n),this.preventDocumentDefault&&this.overlayVisible&&i&&a&&(this.hide(),this.preventDocumentDefault=!1)})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}bindDocumentResizeListener(){if(!this.documentResizeListener&&B(this.platformId)){let t=this.document.defaultView;this.documentResizeListener=this.renderer.listen(t,"resize",this.onWindowResize.bind(this))}}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindScrollListener(){!this.scrollHandler&&B(this.platformId)&&(this.scrollHandler=new Ue(this.target,()=>{this.visible&&this.hide()})),this.scrollHandler?.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}onOverlayHide(){this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.preventDocumentDefault=!1,this.cd.destroyed||(this.target=null)}ngOnDestroy(){this.popup&&(this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.container&&this.autoZIndex&&oe.clear(this.container),this.restoreOverlayAppend(),this.onOverlayHide()),this.popup||this.unbindDocumentClickListener(),super.ngOnDestroy()}hasSubMenu(){if(this.model){for(var t of this.model)if(t.items)return!0}return!1}isItemHidden(t){return t.separator?t.visible===!1||t.items&&t.items.some(n=>n.visible!==!1):t.visible===!1}static \u0275fac=function(n){return new(n||e)(H(qe))};static \u0275cmp=E({type:e,selectors:[["p-menu"]],contentQueries:function(n,i,a){if(n&1&&($(a,wt,4),$(a,Ot,4),$(a,Lt,4),$(a,St,4),$(a,Et,4),$(a,Ze,4)),n&2){let s;I(s=T())&&(i.startTemplate=s.first),I(s=T())&&(i.endTemplate=s.first),I(s=T())&&(i.headerTemplate=s.first),I(s=T())&&(i.itemTemplate=s.first),I(s=T())&&(i.submenuHeaderTemplate=s.first),I(s=T())&&(i.templates=s)}},viewQuery:function(n,i){if(n&1&&(me(Dt,5),me($t,5)),n&2){let a;I(a=T())&&(i.listViewChild=a.first),I(a=T())&&(i.containerViewChild=a.first)}},inputs:{model:"model",popup:[2,"popup","popup",_e],style:"style",styleClass:"styleClass",appendTo:"appendTo",autoZIndex:[2,"autoZIndex","autoZIndex",_e],baseZIndex:[2,"baseZIndex","baseZIndex",ge],showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",id:"id",tabindex:[2,"tabindex","tabindex",ge]},outputs:{onShow:"onShow",onHide:"onHide",onBlur:"onBlur",onFocus:"onFocus"},features:[X([Ge]),Le,W],decls:1,vars:1,consts:[["container",""],["list",""],["htmlSubmenuLabel",""],[3,"ngClass","class","ngStyle","click",4,"ngIf"],[3,"click","ngClass","ngStyle"],["class","p-menu-start",4,"ngIf"],["role","menu",1,"p-menu-list","p-reset",3,"focus","blur","keydown"],[4,"ngIf"],["class","p-menu-end",4,"ngIf"],[1,"p-menu-start"],[4,"ngTemplateOutlet"],["ngFor","",3,"ngForOf"],["class","p-menu-separator","role","separator",3,"ngClass",4,"ngIf"],["class","p-menu-submenu-label","pTooltip","","role","none",3,"ngClass","tooltipOptions",4,"ngIf"],["role","separator",1,"p-menu-separator",3,"ngClass"],["pTooltip","","role","none",1,"p-menu-submenu-label",3,"ngClass","tooltipOptions"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf","ngIfElse"],[3,"innerHTML"],["class","p-menu-item","pTooltip","","role","menuitem",3,"pMenuItemContent","itemTemplate","ngClass","ngStyle","class","tooltipOptions","onMenuItemClick",4,"ngIf"],["pTooltip","","role","menuitem",1,"p-menu-item",3,"onMenuItemClick","pMenuItemContent","itemTemplate","ngClass","ngStyle","tooltipOptions"],[1,"p-menu-end"]],template:function(n,i){n&1&&m(0,ni,8,25,"div",3),n&2&&o("ngIf",!i.popup||i.visible)},dependencies:[A,V,Re,F,ve,he,P,ai,Ie,We,Q,M,it],encapsulation:2,data:{animation:[Be("overlayAnimation",[ye(":enter",[xe({opacity:0,transform:"scaleY(0.8)"}),be("{{showTransitionParams}}")]),ye(":leave",[be("{{hideTransitionParams}}",xe({opacity:0}))])])]},changeDetection:0})}return e})(),nt=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=J({type:e});static \u0275inj=q({imports:[le,M,M]})}return e})();var ri=({dt:e})=>`
.p-avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: ${e("avatar.width")};
    height: ${e("avatar.height")};
    font-size: ${e("avatar.font.size")};
    color: ${e("avatar.color")};
    background: ${e("avatar.background")};
    border-radius: ${e("avatar.border.radius")};
}

.p-avatar-image {
    background: transparent;
}

.p-avatar-circle {
    border-radius: 50%;
}

.p-avatar-circle img {
    border-radius: 50%;
}

.p-avatar-icon {
    font-size: ${e("avatar.icon.size")};
    width: ${e("avatar.icon.size")};
    height: ${e("avatar.icon.size")};
}

.p-avatar img {
    width: 100%;
    height: 100%;
}

.p-avatar-lg {
    width: ${e("avatar.lg.width")};
    height: ${e("avatar.lg.width")};
    font-size: ${e("avatar.lg.font.size")};
}

.p-avatar-lg .p-avatar-icon {
    font-size: ${e("avatar.lg.icon.size")};
    width: ${e("avatar.lg.icon.size")};
    height: ${e("avatar.lg.icon.size")};
}

.p-avatar-xl {
    width: ${e("avatar.xl.width")};
    height: ${e("avatar.xl.width")};
    font-size: ${e("avatar.xl.font.size")};
}

.p-avatar-xl .p-avatar-icon {
    font-size: ${e("avatar.xl.font.size")};
}

.p-avatar-group {
    display: flex;
    align-items: center;
}

.p-avatar-group .p-avatar + .p-avatar {
    margin-inline-start: ${e("avatar.group.offset")};
}

.p-avatar-group .p-avatar {
    border: 2px solid ${e("avatar.group.border.color")};
}

.p-avatar-group .p-avatar-lg + .p-avatar-lg {
    margin-inline-start: ${e("avatar.lg.group.offset")};
}

.p-avatar-group .p-avatar-xl + .p-avatar-xl {
    margin-inline-start: ${e("avatar.xl.group.offset")};
}
`,li={root:({props:e})=>["p-avatar p-component",{"p-avatar-image":e.image!=null,"p-avatar-circle":e.shape==="circle","p-avatar-lg":e.size==="large","p-avatar-xl":e.size==="xlarge"}],label:"p-avatar-label",icon:"p-avatar-icon"},at=(()=>{class e extends te{name="avatar";theme=ri;classes=li;static \u0275fac=(()=>{let t;return function(i){return(t||(t=z(e)))(i||e)}})();static \u0275prov=K({token:e,factory:e.\u0275fac})}return e})();var si=["*"];function pi(e,r){if(e&1&&(c(0,"span",3),v(1),u()),e&2){let t=l();p(),L(t.label)}}function mi(e,r){if(e&1&&f(0,"span",5),e&2){let t=l(2);y(t.icon),o("ngClass","p-avatar-icon")}}function ci(e,r){if(e&1&&m(0,mi,1,3,"span",4),e&2){let t=l(),n=O(5);o("ngIf",t.icon)("ngIfElse",n)}}function ui(e,r){if(e&1){let t=D();c(0,"img",7),w("error",function(i){g(t);let a=l(2);return h(a.imageError(i))}),u()}if(e&2){let t=l(2);o("src",t.image,U),_("aria-label",t.ariaLabel)}}function di(e,r){if(e&1&&m(0,ui,1,2,"img",6),e&2){let t=l();o("ngIf",t.image)}}var Me=(()=>{class e extends ie{label;icon;image;size="normal";shape="square";style;styleClass;ariaLabel;ariaLabelledBy;onImageError=new k;_componentStyle=Z(at);imageError(t){this.onImageError.emit(t)}get hostClass(){return this.styleClass}static \u0275fac=(()=>{let t;return function(i){return(t||(t=z(e)))(i||e)}})();static \u0275cmp=E({type:e,selectors:[["p-avatar"]],hostVars:19,hostBindings:function(n,i){n&2&&(_("data-pc-name","avatar")("aria-label",i.ariaLabel)("aria-labelledby",i.ariaLabelledBy),Ee(i.style),y(i.hostClass),Se("p-avatar",!0)("p-component",!0)("p-avatar-circle",i.shape==="circle")("p-avatar-lg",i.size==="large")("p-avatar-xl",i.size==="xlarge")("p-avatar-image",i.image!=null))},inputs:{label:"label",icon:"icon",image:"image",size:"size",shape:"shape",style:"style",styleClass:"styleClass",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{onImageError:"onImageError"},features:[X([at]),W],ngContentSelectors:si,decls:6,vars:2,consts:[["iconTemplate",""],["imageTemplate",""],["class","p-avatar-text",4,"ngIf","ngIfElse"],[1,"p-avatar-text"],[3,"class","ngClass",4,"ngIf","ngIfElse"],[3,"ngClass"],[3,"src","error",4,"ngIf"],[3,"error","src"]],template:function(n,i){if(n&1&&(De(),$e(0),m(1,pi,2,1,"span",2)(2,ci,1,2,"ng-template",null,0,x)(4,di,1,1,"ng-template",null,1,x)),n&2){let a=O(3);p(),o("ngIf",i.label)("ngIfElse",a)}},dependencies:[A,V,F,M],encapsulation:2,changeDetection:0})}return e})(),ot=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=J({type:e});static \u0275inj=q({imports:[Me,M,M]})}return e})();function _i(e,r){e&1&&(c(0,"span",8)(1,"span",9),v(2," LAB"),c(3,"span",10),v(4,"Track"),u()()())}function gi(e,r){if(e&1&&(c(0,"span",11),v(1),u()),e&2){let t=r.$implicit;p(),L(t.label)}}function hi(e,r){if(e&1&&f(0,"p-badge",15),e&2){let t=l().$implicit;o("value",t.badge)}}function vi(e,r){if(e&1&&(c(0,"a",12),f(1,"span"),c(2,"span",13),v(3),u(),m(4,hi,1,1,"p-badge",14),u()),e&2){let t=r.$implicit;o("routerLink",t.routerLink),p(),y(t.icon),p(2),L(t.label),p(),o("ngIf",t.badge)}}function bi(e,r){e&1&&(c(0,"button",16),f(1,"p-avatar",17),c(2,"span",18)(3,"span",19),v(4,"Amy Elsner"),u(),c(5,"span",20),v(6,"Admin"),u()()())}var rt=(()=>{class e{sidebarItems=[{separator:!0},{label:"Inventar",items:[{label:"Stanje",icon:"pi pi-box",routerLink:"state"},{label:"Trebovanja",icon:"pi pi-shopping-bag",routerLink:"orders"},{label:"Utrosak",icon:"pi pi-file-export"},{label:"Ugovori",icon:"pi pi-file",routerLink:"contracts"},{label:"Racuni",icon:"pi pi-credit-card",routerLink:"received"}]},{label:"Izvestaji",items:[{label:"Izvestaj",icon:"pi pi-folder-open"}]},{label:"Podesavanja",items:[{label:"Stavke",icon:"pi pi-objects-column"},{label:"Partije",icon:"pi pi-address-book"}]},{label:"Korisnik",items:[{label:"Settings",icon:"pi pi-cog"},{label:"Logout",icon:"pi pi-sign-out"}]},{separator:!0}];static \u0275fac=function(n){return new(n||e)};static \u0275cmp=E({type:e,selectors:[["lab-main"]],decls:13,vars:1,consts:[["start",""],["submenuheader",""],["item",""],["end",""],[1,"h-full","w-full"],[1,"flex","flex-1","overflow-hidden","h-full"],["styleClass","w-full md:w-60",1,"flex","justify-center",3,"model"],[1,"flex-1","p-4","overflow-auto"],[1,"inline-flex","items-center","gap-1","px-2","py-2"],["routerLink","/main",1,"text-xl","font-semibold","cursor-pointer"],[1,"text-primary"],[1,"text-primary","font-bold"],["pRipple","",1,"flex","items-center","p-menu-item-link",3,"routerLink"],[1,"ml-2"],["class","ml-auto",3,"value",4,"ngIf"],[1,"ml-auto",3,"value"],["pRipple","",1,"relative","overflow-hidden","w-full","border-0","bg-transparent","flex","items-start","p-2","pl-4","hover:bg-surface-100","dark:hover:bg-surface-800","rounded-none","cursor-pointer","transition-colors","duration-200"],["label","SS","shape","circle",1,"mr-2"],[1,"inline-flex","flex-col"],[1,"font-bold"],[1,"text-sm"]],template:function(n,i){n&1&&(c(0,"div",4)(1,"div",5)(2,"p-menu",6),m(3,_i,5,0,"ng-template",null,0,x)(5,gi,2,1,"ng-template",null,1,x)(7,vi,5,5,"ng-template",null,2,x)(9,bi,7,0,"ng-template",null,3,x),u(),c(11,"main",7),f(12,"router-outlet"),u()()()),n&2&&(p(2),o("model",i.sidebarItems))},dependencies:[A,F,nt,le,Q,ne,Je,ae,ot,Me,P,He,ee],encapsulation:2})}return e})();var hn=[{path:"",component:rt,children:[{path:"",redirectTo:"dashboard",pathMatch:"full"},{path:"dashboard",loadComponent:()=>import("./chunk-AR3MWI4E.js").then(e=>e.DashboardComponent)},{path:"state",loadComponent:()=>import("./chunk-6LI6BMBU.js").then(e=>e.StateComponent)},{path:"orders",loadComponent:()=>import("./chunk-7OWYUJ4N.js").then(e=>e.OrdersComponent)},{path:"contracts",loadComponent:()=>import("./chunk-RUEV3SR7.js").then(e=>e.ContractsComponent)},{path:"received",loadComponent:()=>import("./chunk-Q6PFEZXM.js").then(e=>e.ReceivedComponent)}]}];export{rt as MainComponent,hn as mainRoutes};
