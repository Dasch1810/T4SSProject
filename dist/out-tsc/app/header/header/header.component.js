import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let HeaderComponent = class HeaderComponent {
    constructor() {
        this.collapsed = true;
        this.loggedIn = true;
    }
    ngOnInit() {
    }
    logout() {
        // remove user from local storage to log user out
        this.loggedIn = false;
    }
};
tslib_1.__decorate([
    Input()
], HeaderComponent.prototype, "loggedIn", void 0);
HeaderComponent = tslib_1.__decorate([
    Component({
        selector: 'app-header',
        templateUrl: './header.component.html',
        styleUrls: ['./header.component.scss']
    })
], HeaderComponent);
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map