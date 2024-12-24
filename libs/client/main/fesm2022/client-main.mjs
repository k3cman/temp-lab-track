import * as i0 from '@angular/core';
import { Component } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i2 from 'primeng/menu';
import { MenuModule } from 'primeng/menu';
import * as i3 from 'primeng/badge';
import { BadgeModule } from 'primeng/badge';
import * as i4 from 'primeng/ripple';
import { RippleModule } from 'primeng/ripple';
import * as i5 from 'primeng/avatar';
import { AvatarModule } from 'primeng/avatar';
import * as i6 from '@angular/router';
import { RouterModule } from '@angular/router';

function MainComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 8)(1, "span", 9);
    i0.ɵɵtext(2, " LAB");
    i0.ɵɵelementStart(3, "span", 10);
    i0.ɵɵtext(4, "Track");
    i0.ɵɵelementEnd()()();
} }
function MainComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 11);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r1.label);
} }
function MainComponent_ng_template_7_p_badge_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "p-badge", 15);
} if (rf & 2) {
    const item_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("value", item_r2.badge);
} }
function MainComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 12);
    i0.ɵɵelement(1, "span");
    i0.ɵɵelementStart(2, "span", 13);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, MainComponent_ng_template_7_p_badge_4_Template, 1, 1, "p-badge", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    i0.ɵɵproperty("routerLink", item_r2.routerLink);
    i0.ɵɵadvance();
    i0.ɵɵclassMap(item_r2.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r2.label);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r2.badge);
} }
function MainComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 16);
    i0.ɵɵelement(1, "p-avatar", 17);
    i0.ɵɵelementStart(2, "span", 18)(3, "span", 19);
    i0.ɵɵtext(4, "Amy Elsner");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 20);
    i0.ɵɵtext(6, "Admin");
    i0.ɵɵelementEnd()()();
} }
class MainComponent {
    sidebarItems = [
        {
            separator: true
        },
        {
            label: 'Inventar',
            items: [
                {
                    label: 'Stanje',
                    icon: 'pi pi-box',
                    routerLink: 'state'
                },
                {
                    label: 'Trebovanja',
                    icon: 'pi pi-shopping-bag',
                    routerLink: 'orders'
                },
                {
                    label: 'Utrosak',
                    icon: 'pi pi-file-export',
                },
                {
                    label: 'Ugovori',
                    icon: 'pi pi-file',
                    routerLink: 'contracts'
                },
                {
                    label: 'Racuni',
                    icon: 'pi pi-credit-card',
                    routerLink: 'received'
                }
            ]
        },
        {
            label: 'Izvestaji',
            items: [
                {
                    label: 'Izvestaj',
                    icon: 'pi pi-folder-open',
                },
            ]
        },
        {
            label: 'Podesavanja',
            items: [
                {
                    label: 'Stavke',
                    icon: 'pi pi-objects-column',
                },
                {
                    label: 'Partije',
                    icon: 'pi pi-address-book',
                },
            ]
        },
        {
            label: 'Korisnik',
            items: [
                {
                    label: 'Settings',
                    icon: 'pi pi-cog',
                },
                {
                    label: 'Logout',
                    icon: 'pi pi-sign-out',
                }
            ]
        },
        {
            separator: true
        }
    ];
    static ɵfac = function MainComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || MainComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MainComponent, selectors: [["lab-main"]], decls: 13, vars: 1, consts: [["start", ""], ["submenuheader", ""], ["item", ""], ["end", ""], [1, "h-full", "w-full"], [1, "flex", "flex-1", "overflow-hidden", "h-full"], ["styleClass", "w-full md:w-60", 1, "flex", "justify-center", 3, "model"], [1, "flex-1", "p-4", "overflow-auto"], [1, "inline-flex", "items-center", "gap-1", "px-2", "py-2"], ["routerLink", "/main", 1, "text-xl", "font-semibold", "cursor-pointer"], [1, "text-primary"], [1, "text-primary", "font-bold"], ["pRipple", "", 1, "flex", "items-center", "p-menu-item-link", 3, "routerLink"], [1, "ml-2"], ["class", "ml-auto", 3, "value", 4, "ngIf"], [1, "ml-auto", 3, "value"], ["pRipple", "", 1, "relative", "overflow-hidden", "w-full", "border-0", "bg-transparent", "flex", "items-start", "p-2", "pl-4", "hover:bg-surface-100", "dark:hover:bg-surface-800", "rounded-none", "cursor-pointer", "transition-colors", "duration-200"], ["label", "SS", "shape", "circle", 1, "mr-2"], [1, "inline-flex", "flex-col"], [1, "font-bold"], [1, "text-sm"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 4)(1, "div", 5)(2, "p-menu", 6);
            i0.ɵɵtemplate(3, MainComponent_ng_template_3_Template, 5, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(5, MainComponent_ng_template_5_Template, 2, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(7, MainComponent_ng_template_7_Template, 5, 5, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor)(9, MainComponent_ng_template_9_Template, 7, 0, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "main", 7);
            i0.ɵɵelement(12, "router-outlet");
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("model", ctx.sidebarItems);
        } }, dependencies: [CommonModule, i1.NgIf, MenuModule, i2.Menu, BadgeModule, i3.Badge, RippleModule, i4.Ripple, AvatarModule, i5.Avatar, RouterModule, i6.RouterOutlet, i6.RouterLink], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MainComponent, [{
        type: Component,
        args: [{ selector: 'lab-main', imports: [CommonModule, MenuModule, BadgeModule, RippleModule, AvatarModule, RouterModule], template: `

  <div class="h-full w-full">
  <div class="flex flex-1 overflow-hidden h-full">
    <!-- Sidebar -->
    <p-menu [model]="sidebarItems" class="flex justify-center" styleClass="w-full md:w-60">
    <ng-template #start>
        <span class="inline-flex items-center gap-1 px-2 py-2">
            <span class="text-xl font-semibold cursor-pointer" routerLink="/main">
                LAB<span class="text-primary">Track</span>
            </span>
        </span>
    </ng-template>
    <ng-template #submenuheader let-item>
        <span class="text-primary font-bold">{{ item.label }}</span>
    </ng-template>
    <ng-template #item let-item>
        <a pRipple class="flex items-center p-menu-item-link" [routerLink]="item.routerLink">
            <span [class]="item.icon"></span>
            <span class="ml-2">{{ item.label }}</span>
            <p-badge *ngIf="item.badge" class="ml-auto" [value]="item.badge" />
        </a>
    </ng-template>
    <ng-template #end>
        <button pRipple class="relative overflow-hidden w-full border-0 bg-transparent flex items-start p-2 pl-4 hover:bg-surface-100 dark:hover:bg-surface-800 rounded-none cursor-pointer transition-colors duration-200">
            <p-avatar label="SS" class="mr-2" shape="circle" />
            <span class="inline-flex flex-col">
                <span class="font-bold">Amy Elsner</span>
                <span class="text-sm">Admin</span>
            </span>
        </button>
    </ng-template>
</p-menu>

    <!-- Main Content -->
    <main class="flex-1 p-4 overflow-auto">
     <router-outlet />
    </main>
  </div>
  </div>
  ` }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MainComponent, { className: "MainComponent", filePath: "lib/main/main.component.ts", lineNumber: 56 }); })();

const mainRoutes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                loadComponent: () => import('@client/dashboard').then(m => m.DashboardComponent)
            },
            {
                path: 'state',
                loadComponent: () => import('@client/state').then(m => m.StateComponent)
            },
            {
                path: 'orders',
                loadComponent: () => import('@lab-track/orders').then(m => m.OrdersComponent)
            },
            {
                path: 'contracts',
                loadComponent: () => import('@client/contracts').then(m => m.ContractsComponent)
            },
            {
                path: 'received',
                loadComponent: () => import('@client/received').then(m => m.ReceivedComponent)
            }
        ]
    }
];

/**
 * Generated bundle index. Do not edit.
 */

export { MainComponent, mainRoutes };
//# sourceMappingURL=client-main.mjs.map
