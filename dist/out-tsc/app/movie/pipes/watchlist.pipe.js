import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
let WatchlistPipe = class WatchlistPipe {
    transform(values, args) {
        return values.filter((movie) => movie.addedToWatchList);
    }
};
WatchlistPipe = tslib_1.__decorate([
    Pipe({
        name: 'watchlist',
        pure: false
    })
], WatchlistPipe);
export { WatchlistPipe };
//# sourceMappingURL=watchlist.pipe.js.map