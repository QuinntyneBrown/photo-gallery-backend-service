import { Component, Input, Output, EventEmitter } from "@angular/core";
import { PhotoGallery } from "../models";

@Component({
    template: require("./photo-gallery-list.component.html"),
    styles: [require("./photo-gallery-list.component.scss")],
    selector: "photo-gallery-list"
})
export class PhotoGalleryListComponent {     
    @Input() public entities: Array<PhotoGallery> = [];
    @Output() onDelete: EventEmitter<{ value: PhotoGallery }> = new EventEmitter<{ value: PhotoGallery }>();
    @Output() onSelect: EventEmitter<{ value: PhotoGallery }> = new EventEmitter<{ value: PhotoGallery }>();
    @Output() onEdit: EventEmitter<{ value: PhotoGallery }> = new EventEmitter<{ value: PhotoGallery }>();
}
