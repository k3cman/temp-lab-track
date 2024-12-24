import * as i0 from '@angular/core';
import { inject, Injectable, Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Panel } from 'primeng/panel';
import * as i1 from 'primeng/inputtext';
import { InputTextModule } from 'primeng/inputtext';
import * as i2 from '@angular/forms';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import * as i3 from 'primeng/button';
import { ButtonModule } from 'primeng/button';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { Router } from '@angular/router';

class AuthService {
    _http = inject(HttpClient);
    login(authPayload) {
        return this._http.post('http://localhost:3000/api/auth/login', {
            username: authPayload.username,
            password: authPayload.password
        }).pipe(tap((val) => {
            localStorage.setItem('lab_token', val.accessToken);
        }));
    }
    static ɵfac = function AuthService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AuthService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();

class AuthComponent {
    _fb = inject(FormBuilder);
    _authService = inject(AuthService);
    _router = inject(Router);
    logingForm = this._fb.group({
        username: ['', [Validators.required]],
        password: ['', [Validators.required]],
    });
    submitForm() {
        this._authService.login(this.logingForm.value).subscribe(data => {
            this._router.navigateByUrl('main');
        });
    }
    static ɵfac = function AuthComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AuthComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AuthComponent, selectors: [["lab-auth"]], decls: 13, vars: 1, consts: [[1, "flex", "justify-center", "items-center", "h-screen"], ["header", "Login", 1, "bg-white", "rounded-lg", "p-6", "w-96"], [1, "space-y-4", 3, "ngSubmit", "formGroup"], ["for", "email", 1, "block", "text-sm", "font-medium", "text-gray-700"], ["formControlName", "username", "id", "email", "type", "email", "pInputText", "", "placeholder", "Enter your email", 1, "mt-1", "block", "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-md", "shadow-sm", "focus:outline-none", "focus:ring-blue-500", "focus:border-blue-500", "sm:text-sm"], ["for", "password", 1, "block", "text-sm", "font-medium", "text-gray-700"], ["formControlName", "password", "id", "password", "type", "password", "pInputText", "", "placeholder", "Enter your password", 1, "mt-1", "block", "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-md", "shadow-sm", "focus:outline-none", "focus:ring-blue-500", "focus:border-blue-500", "sm:text-sm"], ["pButton", "", "type", "submit", "label", "Login", 1, "w-full", "font-medium", "py-2", "px-4", "rounded-md"]], template: function AuthComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "p-panel", 1)(2, "form", 2);
            i0.ɵɵlistener("ngSubmit", function AuthComponent_Template_form_ngSubmit_2_listener() { return ctx.submitForm(); });
            i0.ɵɵelementStart(3, "div")(4, "label", 3);
            i0.ɵɵtext(5, "Email");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(6, "input", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "div")(8, "label", 5);
            i0.ɵɵtext(9, "Password");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(10, "input", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "div");
            i0.ɵɵelement(12, "button", 7);
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("formGroup", ctx.logingForm);
        } }, dependencies: [CommonModule, Panel, InputTextModule, i1.InputText, ReactiveFormsModule, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.FormGroupDirective, i2.FormControlName, ButtonModule, i3.ButtonDirective], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthComponent, [{
        type: Component,
        args: [{ selector: 'lab-auth', imports: [CommonModule, Panel, InputTextModule, ReactiveFormsModule, ButtonModule], template: `
    <div class="flex justify-center items-center h-screen">
    <p-panel header="Login" class="bg-white rounded-lg p-6 w-96">
        <form class="space-y-4" [formGroup]="logingForm" (ngSubmit)="submitForm()">
            <div>
                <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                <input 
                    formControlName="username"
                    id="email" 
                    type="email" 
                    pInputText 
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
                    placeholder="Enter your email" 
                />
            </div>
            <div>
                <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                <input 
                    formControlName="password"
                    id="password" 
                    type="password" 
                    pInputText 
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
                    placeholder="Enter your password" 
                />
            </div>
            <div>
                <button 
                    pButton 
                    type="submit" 
                    label="Login" 
                    class="w-full font-medium py-2 px-4 rounded-md">
                </button>
            </div>
        </form>
    </p-panel>
</div>
  `, changeDetection: ChangeDetectionStrategy.OnPush }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AuthComponent, { className: "AuthComponent", filePath: "lib/auth/auth.component.ts", lineNumber: 54 }); })();

/**
 * Generated bundle index. Do not edit.
 */

export { AuthComponent };
//# sourceMappingURL=client-auth.mjs.map
