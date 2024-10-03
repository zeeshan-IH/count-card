import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class CardCountComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1jb3VudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9jYXJkLWNvdW50L3NyYy9saWIvY2FyZC1jb3VudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBY2pELE1BQU0sT0FBTyxrQkFBa0I7SUFaL0I7UUFhVyxVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLFVBQUssR0FBVyxjQUFjLENBQUM7S0FDekM7K0dBSFksa0JBQWtCO21HQUFsQixrQkFBa0Isa0hBUm5COzs7OztHQUtUOzs0RkFHVSxrQkFBa0I7a0JBWjlCLFNBQVM7K0JBQ0UsWUFBWSxjQUNWLElBQUksV0FDUCxFQUFFLFlBQ0Q7Ozs7O0dBS1Q7OEJBSVEsS0FBSztzQkFBYixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGFzaC1jb3VudCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJjb3VudC1jYXJkXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb3VudC1udW1iZXJcIj57e2NvdW50fX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvdW50LWxhYmVsXCI+e3tsYWJlbH19PC9kaXY+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlczogYGBcbn0pXG5leHBvcnQgY2xhc3MgQ2FyZENvdW50Q29tcG9uZW50IHtcbiAgQElucHV0KCkgY291bnQ6IG51bWJlciA9IDA7XG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmcgPSAnVG90YWwgVmlzaXRzJztcbn1cbiJdfQ==