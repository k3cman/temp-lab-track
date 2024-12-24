import * as i0 from "@angular/core";
export declare class AuthComponent {
    private _fb;
    private _authService;
    private _router;
    logingForm: import("@angular/forms").FormGroup<{
        username: import("@angular/forms").FormControl<string | null>;
        password: import("@angular/forms").FormControl<string | null>;
    }>;
    submitForm(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AuthComponent, "lab-auth", never, {}, {}, never, never, true, never>;
}
