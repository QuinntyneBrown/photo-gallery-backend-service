import { Action } from "@ngrx/store";
import { PHOTO_GALLERY_ADD_SUCCESS, PHOTO_GALLERY_GET_SUCCESS, PHOTO_GALLERY_REMOVE_SUCCESS } from "../constants";
import { initialState } from "./initial-state";
import { AppState } from "./app-state";
import { PhotoGallery } from "../models";
import { addOrUpdate, pluckOut } from "ng2-utilities";

export const photoGalleriesReducer = (state: AppState = initialState, action: Action) => {
    switch (action.type) {
        case PHOTO_GALLERY_ADD_SUCCESS:
            var entities: Array<PhotoGallery> = state.photoGalleries;
            var entity: PhotoGallery = action.payload;
            addOrUpdate({ items: entities, item: entity});            
            return Object.assign({}, state, { photoGalleries: entities });

        case PHOTO_GALLERY_GET_SUCCESS:
            var entities: Array<PhotoGallery> = state.photoGalleries;
            var newOrExistingPhotoGalleries: Array<PhotoGallery> = action.payload;
            for (let i = 0; i < newOrExistingPhotoGalleries.length; i++) {
                addOrUpdate({ items: entities, item: newOrExistingPhotoGalleries[i] });
            }                                    
            return Object.assign({}, state, { photoGalleries: entities });

        case PHOTO_GALLERY_REMOVE_SUCCESS:
            var entities: Array<PhotoGallery> = state.photoGalleries;
            var id = action.payload;
            pluckOut({ value: id, items: entities });
            return Object.assign({}, state, { photoGalleries: entities });

        default:
            return state;
    }
}

