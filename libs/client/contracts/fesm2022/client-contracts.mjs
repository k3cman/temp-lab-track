import * as i0 from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputText } from 'primeng/inputtext';
import * as i1 from 'primeng/table';
import { TableModule } from 'primeng/table';

function ContractsComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "th");
    i0.ɵɵtext(2, "Broj partije");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "th");
    i0.ɵɵtext(4, "Broj stavke");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "th");
    i0.ɵɵtext(6, "Ime");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "th");
    i0.ɵɵtext(8, "RGN");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "th");
    i0.ɵɵtext(10, "Dobavljac");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "th");
    i0.ɵɵtext(12, "Kolicina");
    i0.ɵɵelementEnd()();
} }
function ContractsComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 6)(1, "td", 7);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td", 7);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "td", 8);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "td");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "td", 7)(12, "input", 9);
    i0.ɵɵlistener("focus", function ContractsComponent_ng_template_7_Template_input_focus_12_listener() { const product_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.markItem(product_r3)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const product_r3 = ctx.$implicit;
    i0.ɵɵproperty("pSelectableRow", product_r3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(product_r3.partyNo);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(product_r3.itemNo);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(product_r3.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(product_r3.RGN);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(product_r3.supplier);
} }
class ContractsComponent {
    selectedItem;
    items = [
        {
            partyNo: 101,
            itemNo: 5001,
            name: 'Microscope',
            RGN: 'RGN123456',
            supplier: 'LabTech Supplies',
        },
        {
            partyNo: 102,
            itemNo: 5002,
            name: 'Centrifuge',
            RGN: 'RGN654321',
            supplier: 'Biomed Instruments',
        },
        {
            partyNo: 103,
            itemNo: 5003,
            name: 'Test Tube Rack',
            RGN: 'RGN112233',
            supplier: 'ChemEquip Co.',
        },
        {
            partyNo: 104,
            itemNo: 5004,
            name: 'Pipette Set',
            RGN: 'RGN445566',
            supplier: 'Precision Tools',
        },
        {
            partyNo: 105,
            itemNo: 5005,
            name: 'Beaker Set',
            RGN: 'RGN778899',
            supplier: 'Lab Basics Inc.',
        },
        {
            partyNo: 106,
            itemNo: 5006,
            name: 'Bunsen Burner',
            RGN: 'RGN334455',
            supplier: 'Scientific Gear',
        },
        {
            partyNo: 107,
            itemNo: 5007,
            name: 'Spectrophotometer',
            RGN: 'RGN998877',
            supplier: 'OptiLab Equipment',
        },
        {
            partyNo: 108,
            itemNo: 5008,
            name: 'Analytical Balance',
            RGN: 'RGN223344',
            supplier: 'Accurate Measures',
        },
        {
            partyNo: 109,
            itemNo: 5009,
            name: 'Lab Notebook',
            RGN: 'RGN556677',
            supplier: 'Stationery Plus',
        },
        {
            partyNo: 110,
            itemNo: 5010,
            name: 'Safety Goggles',
            RGN: 'RGN889900',
            supplier: 'SecureWear Safety',
        },
        {
            partyNo: 111,
            itemNo: 5011,
            name: 'Thermometer',
            RGN: 'RGN667788',
            supplier: 'Precision Tools',
        },
        {
            partyNo: 112,
            itemNo: 5012,
            name: 'PH Meter',
            RGN: 'RGN223355',
            supplier: 'BioLab Instruments',
        },
        {
            partyNo: 113,
            itemNo: 5013,
            name: 'Graduated Cylinder',
            RGN: 'RGN778800',
            supplier: 'Lab Basics Inc.',
        },
        {
            partyNo: 114,
            itemNo: 5014,
            name: 'Glass Slide Set',
            RGN: 'RGN445577',
            supplier: 'ChemEquip Co.',
        },
        {
            partyNo: 115,
            itemNo: 5015,
            name: 'Hot Plate',
            RGN: 'RGN112211',
            supplier: 'Scientific Gear',
        },
        {
            partyNo: 116,
            itemNo: 5016,
            name: 'Magnetic Stirrer',
            RGN: 'RGN334466',
            supplier: 'Accurate Measures',
        },
        {
            partyNo: 117,
            itemNo: 5017,
            name: 'Petri Dish Set',
            RGN: 'RGN223344',
            supplier: 'Biomed Instruments',
        },
        {
            partyNo: 118,
            itemNo: 5018,
            name: 'Filter Paper',
            RGN: 'RGN556600',
            supplier: 'Stationery Plus',
        },
        {
            partyNo: 119,
            itemNo: 5019,
            name: 'Reagent Bottles',
            RGN: 'RGN889922',
            supplier: 'LabTech Supplies',
        },
        {
            partyNo: 120,
            itemNo: 5020,
            name: 'Mortar and Pestle',
            RGN: 'RGN667711',
            supplier: 'OptiLab Equipment',
        },
    ];
    markItem(product) {
        this.selectedItem = product;
    }
    static ɵfac = function ContractsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ContractsComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ContractsComponent, selectors: [["lab-contracts"]], decls: 9, vars: 2, consts: [["header", ""], ["body", ""], [1, "w-full", "h-full", "p-4"], [1, "w-full", "flex", "items-center", "justify-center", "mb-2"], [1, "font-bold"], ["showGridlines", "true", "selectionMode", "single", "dataKey", "partyNo", 3, "selectionChange", "value", "selection"], [3, "pSelectableRow"], [1, "w-20"], [1, "w-32"], ["pInputText", "", "type", "number", 1, "w-20", 3, "focus"]], template: function ContractsComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "span", 4);
            i0.ɵɵtext(3, "Ugovori");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(4, "p-table", 5);
            i0.ɵɵtwoWayListener("selectionChange", function ContractsComponent_Template_p_table_selectionChange_4_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.selectedItem, $event) || (ctx.selectedItem = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵtemplate(5, ContractsComponent_ng_template_5_Template, 13, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(7, ContractsComponent_ng_template_7_Template, 13, 6, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("value", ctx.items);
            i0.ɵɵtwoWayProperty("selection", ctx.selectedItem);
        } }, dependencies: [CommonModule, InputText, TableModule, i1.Table, i1.SelectableRow], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContractsComponent, [{
        type: Component,
        args: [{ selector: 'lab-contracts', imports: [CommonModule, InputText, TableModule], template: `
    <div class="w-full h-full p-4">
      <div class="w-full flex items-center justify-center mb-2">
        <span class="font-bold">Ugovori</span>
      </div>
      <p-table
        showGridlines="true"
        selectionMode="single"
        [value]="items"
        [(selection)]="selectedItem"
        dataKey="partyNo"
      >
        <ng-template #header>
          <tr>
            <th>Broj partije</th>
            <th>Broj stavke</th>
            <th>Ime</th>
            <th>RGN</th>
            <th>Dobavljac</th>
            <th>Kolicina</th>
          </tr>
        </ng-template>
        <ng-template #body let-product>
          <tr [pSelectableRow]="product">
            <td class="w-20">{{ product.partyNo }}</td>
            <td class="w-20">{{ product.itemNo }}</td>
            <td>{{ product.name }}</td>
            <td class="w-32">{{ product.RGN }}</td>
            <td>{{ product.supplier }}</td>
            <td class="w-20">
              <input
                pInputText
                type="number"
                class="w-20"
                (focus)="markItem(product)"
              />
            </td>
          </tr>
        </ng-template>
      </p-table>
    </div>
  ` }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ContractsComponent, { className: "ContractsComponent", filePath: "lib/contracts/contracts.component.ts", lineNumber: 54 }); })();

/**
 * Generated bundle index. Do not edit.
 */

export { ContractsComponent };
//# sourceMappingURL=client-contracts.mjs.map
