import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { environment } from '..//environments/environment';
let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.API_URL = environment.apiUrl;
    }
    getAll() {
        return this.http.get(`${environment.apiUrl}/users`);
    }
    getById(id) {
        return this.http.get(`${environment.apiUrl}/users/${id}`);
    }
    register(user) {
        return this.http.post(`${environment.apiUrl}/users/register`, user);
    }
    update(user) {
        return this.http.put(`${environment.apiUrl}/users/${user.id}`, user);
    }
    delete(id) {
        return this.http.delete(`${environment.apiUrl}/users/${id}`);
    }
};
UserService = tslib_1.__decorate([
    Injectable({ providedIn: 'root' })
], UserService);
export { UserService };
//# sourceMappingURL=user.service.js.map