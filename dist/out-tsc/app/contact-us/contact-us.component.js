import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let ContactUsComponent = class ContactUsComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.submitted = false;
    }
    ngOnInit() {
        this.messageForm = this.formBuilder.group({
            title: ['', Validators.required],
            name: ['', Validators.required],
            email: ['', Validators.required],
            subject: ['', Validators.required],
            message: ['', Validators.required]
        });
    }
    get f() { return this.messageForm.controls; }
    onSubmit() {
        this.submitted = true;
        if (this.messageForm.invalid) {
            return;
        }
        alert('Message sent!');
    }
    onReset() {
        this.submitted = false;
        this.messageForm.reset();
    }
};
ContactUsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-contact-us',
        templateUrl: './contact-us.component.html',
        styleUrls: ['./contact-us.component.css']
    })
], ContactUsComponent);
export { ContactUsComponent };
//# sourceMappingURL=contact-us.component.js.map