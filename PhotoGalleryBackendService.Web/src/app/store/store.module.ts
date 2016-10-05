import { NgModule } from '@angular/core';
import * as ngrxStore from '@ngrx/store';
import { compose } from "@ngrx/core/compose";
import { localStorageSync } from "ngrx-store-localstorage";

import { AppStore } from "./app-store";
import { initialState } from "./initial-state";

import { appsReducer } from "./app.reducer";
import { digitalAssetsReducer } from "./digital-asset.reducer";
import { photoGalleriesReducer } from "./photo-gallery.reducer";

const providers = [
    AppStore
];

@NgModule({
    imports: [
        ngrxStore.StoreModule.provideStore(
            {
                apps: appsReducer,
                digitalAssets: digitalAssetsReducer,
                photoGalleries: photoGalleriesReducer
            },
            [initialState]
        )],
    providers: providers
})
export class StoreModule { }
