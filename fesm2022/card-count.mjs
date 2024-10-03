import * as i0 from '@angular/core';
import { Injectable, Component, Input } from '@angular/core';

class CardCountService {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CardCountService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CardCountService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CardCountService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

class CardCountComponent {
    constructor() {
        this.count = 0;
        this.label = 'Total Visits';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CardCountComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: CardCountComponent, isStandalone: true, selector: "dash-count", inputs: { count: "count", label: "label" }, ngImport: i0, template: `
    <div class="count-card">
        <div class="count-number">{{count}}</div>
        <div class="count-label">{{label}}</div>
    </div>
  `, isInline: true, styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CardCountComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dash-count', standalone: true, imports: [], template: `
    <div class="count-card">
        <div class="count-number">{{count}}</div>
        <div class="count-label">{{label}}</div>
    </div>
  ` }]
        }], propDecorators: { count: [{
                type: Input
            }], label: [{
                type: Input
            }] } });

/*
 * Public API Surface of card-count
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CardCountComponent, CardCountService };
//# sourceMappingURL=card-count.mjs.map
