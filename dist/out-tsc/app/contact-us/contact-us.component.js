import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let ContactUsComponent = class ContactUsComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.submitted = false;
    }
    ngOnInit() {
        this.reactiveForm = this.formBuilder.group({
            title: ['', Validators.required],
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            subject: ['', Validators.required],
            message: ['', Validators.required],
        });
    }
    get f() { return this.reactiveForm.controls; }
    onSubmit() {
        console.log('reactiveForm', this.reactiveForm.value);
        this.submitted = true;
        if (this.reactiveForm.valid) {
            return this.reactiveForm.reset(), alert('Message sent!');
        }
        else
            (this.submitted = false, alert("Please fill in form properly"));
    }
    onReset() {
        this.submitted = false;
        this.reactiveForm.reset();
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