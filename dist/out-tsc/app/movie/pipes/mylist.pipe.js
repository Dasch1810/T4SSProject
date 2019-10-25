import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
let MylistPipe = class MylistPipe {
    transform(values, args) {
        return values.filter((movie) => movie.seen);
    }
};
MylistPipe = tslib_1.__decorate([
    Pipe({
        name: 'mylist',
        pure: false
    })
], MylistPipe);
export { MylistPipe };
//# sourceMappingURL=mylist.pipe.js.map