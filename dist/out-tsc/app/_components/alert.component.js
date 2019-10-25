import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let AlertComponent = class AlertComponent {
    constructor(alertService) {
        this.alertService = alertService;
    }
    ngOnInit() {
        this.subscription = this.alertService.getMessage().subscribe(message => {
            this.message = message;
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
AlertComponent = tslib_1.__decorate([
    Component({
        selector: 'alert',
        templateUrl: 'alert.component.html'
    })
], AlertComponent);
export { AlertComponent };
//# sourceMappingURL=alert.component.js.map