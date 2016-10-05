import { NgModule } from '@angular/core';

import { AppActions } from "./app.actions";
import { DigitalAssetActions } from "./digital-asset.actions";
import { PhotoGalleryActions } from "./photo-gallery.actions";

const providers = [
    AppActions,
    DigitalAssetActions,
    PhotoGalleryActions
];

@NgModule({
	providers: providers
})
export class ActionsModule { }
