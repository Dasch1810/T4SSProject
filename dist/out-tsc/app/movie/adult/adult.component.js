import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let AdultComponent = class AdultComponent {
    constructor(_sanitizer) {
        this._sanitizer = _sanitizer;
        this.adult1 = false;
        this.tooYoung = false;
        this.babyImgUrl = "https://storage.googleapis.com/www-24baby-cloud/2017/01/Baby-met-veel-haren.jpg";
        this.question = true;
        this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/3UjuYtgMDIg');
    }
    ageCheck() {
        this.tooYoung = true;
        this.question = false;
    }
    validate1() {
        this.adult1 = true;
    }
    ngOnInit() {
    }
};
AdultComponent = tslib_1.__decorate([
    Component({
        selector: 'app-adult',
        templateUrl: './adult.component.html',
        styleUrls: ['./adult.component.scss']
    })
], AdultComponent);
export { AdultComponent };
//# sourceMappingURL=adult.component.js.map