import * as i0 from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

class StateComponent {
    static ɵfac = function StateComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StateComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StateComponent, selectors: [["lab-state"]], decls: 2, vars: 0, template: function StateComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "p");
            i0.ɵɵtext(1, "state works!");
            i0.ɵɵelementEnd();
        } }, dependencies: [CommonModule], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StateComponent, [{
        type: Component,
        args: [{ selector: 'lab-state', imports: [CommonModule], template: `<p>state works!</p>` }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StateComponent, { className: "StateComponent", filePath: "lib/state/state.component.ts", lineNumber: 10 }); })();

/**
 * Generated bundle index. Do not edit.
 */

export { StateComponent };
//# sourceMappingURL=client-state.mjs.map
