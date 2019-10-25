import * as tslib_1 from "tslib";
import { Directive, HostBinding, HostListener } from '@angular/core';
let DropdownDirective = class DropdownDirective {
    constructor(elRef) {
        this.elRef = elRef;
        this.isOpen = false;
    }
    toggleOpen(event) {
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    }
};
tslib_1.__decorate([
    HostBinding('class.open')
], DropdownDirective.prototype, "isOpen", void 0);
tslib_1.__decorate([
    HostListener('document:click', ['$event'])
], DropdownDirective.prototype, "toggleOpen", null);
DropdownDirective = tslib_1.__decorate([
    Directive({
        selector: '[appDropdown]'
    })
], DropdownDirective);
export { DropdownDirective };
//# sourceMappingURL=dropdown.directive.js.map