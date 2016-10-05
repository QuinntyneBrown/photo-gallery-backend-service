import { Component, Input, OnInit } from "@angular/core";
import { PhotoGalleryActions } from "../actions";
import { Router, ActivatedRoute } from "@angular/router";
import { AppStore } from "../store";

@Component({
    template: require("./photo-gallery-edit-page.component.html"),
    styles: [require("./photo-gallery-edit-page.component.scss")],
    selector: "photo-gallery-edit-page"
})
export class PhotoGalleryEditPageComponent { 
    constructor(private _photoGalleryActions: PhotoGalleryActions, 
        private _router: Router,
        private _activatedRoute: ActivatedRoute,
        private _store: AppStore
    ) { }

    ngOnInit() {
        this._photoGalleryActions.getById({ id: this._activatedRoute.snapshot.params["id"] });
    }

    public get entity$() {
        return this._store.photoGalleryById$(this._activatedRoute.snapshot.params["id"]);
    }

    public onSubmit($event: any) {
        this._photoGalleryActions.add({
            id: $event.value.id,
            name: $event.value.name
        });

        setTimeout(() => { this._router.navigate(["/photoGallerys"]); }, 0);
        
    }

    public onCancel() {
        setTimeout(() => { this._router.navigate(["/photoGallerys"]); }, 0);
    }
}
