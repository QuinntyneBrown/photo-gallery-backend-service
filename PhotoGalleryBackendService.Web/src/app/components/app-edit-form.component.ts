import { Component, ChangeDetectionStrategy, Input, Output, AfterViewInit, EventEmitter, Renderer, ElementRef } from "@angular/core";

import {
    FormGroup,
    FormControl,
    Validators
} from "@angular/forms";

import { App } from "../models";

@Component({
    template: require("./app-edit-form.component.html"),
    styles: [require("./app-edit-form.component.scss")],
    selector: "app-edit-form",
})
export class AppEditFormComponent implements AfterViewInit  { 

    constructor(private _renderer: Renderer, private _elementRef: ElementRef) { } 

    public get name(): HTMLElement {
        return this._elementRef.nativeElement.querySelector("#name");
    }

    ngAfterViewInit() {
        this._renderer.invokeElementMethod(this.name, 'focus', []);
    }
	    
    @Input() public app: App;
    
	@Output() public onSubmit = new EventEmitter();

	@Output() public onCancel = new EventEmitter();

    public form = new FormGroup({
		id: new FormControl("", []),
        name: new FormControl("", [
            Validators.required
        ])
    });
}
