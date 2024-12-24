import * as i0 from "@angular/core";
export declare class OrdersComponent {
    selectedItem: any;
    private _selectedItem;
    selectedItem$: import("rxjs").Observable<string | null>;
    items: {
        partyNo: number;
        itemNo: number;
        name: string;
        RGN: string;
        supplier: string;
    }[];
    markItem(product: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<OrdersComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OrdersComponent, "lib-orders", never, {}, {}, never, never, true, never>;
}
