import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
let SafeUrlPipe = class SafeUrlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
};
SafeUrlPipe = tslib_1.__decorate([
    Pipe({ name: 'safeUrl' })
], SafeUrlPipe);
export { SafeUrlPipe };
//# sourceMappingURL=safe-url.pipe.js.map