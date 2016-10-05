import { Component, ChangeDetectionStrategy, Input, Output, AfterViewInit, EventEmitter, Renderer, ElementRef } from "@angular/core";

import {
    FormGroup,
    FormControl,
    Validators
} from "@angular/forms";

import { PhotoGallery } from "../models";

@Component({
    template: require("./photo-gallery-edit-form.component.html"),
    styles: [require("./photo-gallery-edit-form.component.scss")],
    selector: "photo-gallery-edit-form",
})
export class PhotoGalleryEditFormComponent implements AfterViewInit  { 

    constructor(private _renderer: Renderer, private _elementRef: ElementRef) { } 

    public get name(): HTMLElement {
        return this._elementRef.nativeElement.querySelector("#name");
    }

    ngAfterViewInit() {
        this._renderer.invokeElementMethod(this.name, 'focus', []);
    }
	    
    @Input() public photoGallery: PhotoGallery;
    
	@Output() public onSubmit = new EventEmitter();

	@Output() public onCancel = new EventEmitter();

    public form = new FormGroup({
		id: new FormControl("", []),
        name: new FormControl("", [
            Validators.required
        ])
    });
}
