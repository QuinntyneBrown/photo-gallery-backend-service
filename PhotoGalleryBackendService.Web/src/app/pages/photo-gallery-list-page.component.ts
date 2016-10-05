import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";
import { PhotoGalleryActions } from "../actions";
import { AppStore } from "../store";
import { Router } from "@angular/router";   

@Component({
    template: require("./photo-gallery-list-page.component.html"),
    styles: [require("./photo-gallery-list-page.component.scss")],
    selector: "photo-gallery-list-page",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoGalleryListPageComponent implements OnInit {
    constructor(private _photoGalleryActions: PhotoGalleryActions, private _store: AppStore, private _router:Router) { }

    ngOnInit() {
        this._photoGalleryActions.get(); 
    }
    
}
