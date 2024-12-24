import * as i0 from "@angular/core";
export declare class ReceivedComponent {
    selectedItem: any;
    items: {
        partyNo: number;
        itemNo: number;
        name: string;
        RGN: string;
        supplier: string;
    }[];
    markItem(product: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ReceivedComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ReceivedComponent, "lib-received", never, {}, {}, never, never, true, never>;
}
