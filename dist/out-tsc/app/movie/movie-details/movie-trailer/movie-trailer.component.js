import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let MovieTrailerComponent = class MovieTrailerComponent {
    constructor(_sanitizer) {
        this._sanitizer = _sanitizer;
        this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/zAGVQLHvwOY');
    }
};
tslib_1.__decorate([
    Input()
], MovieTrailerComponent.prototype, "movie", void 0);
MovieTrailerComponent = tslib_1.__decorate([
    Component({
        selector: 'app-movie-trailer',
        templateUrl: './movie-trailer.component.html',
        styleUrls: ['./movie-trailer.component.css']
    })
], MovieTrailerComponent);
export { MovieTrailerComponent };
//# sourceMappingURL=movie-trailer.component.js.map