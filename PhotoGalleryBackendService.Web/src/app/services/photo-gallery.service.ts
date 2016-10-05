import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { PhotoGallery } from "../models";
import { Observable } from "rxjs";

import { apiCofiguration } from "../configuration";


@Injectable()
export class PhotoGalleryService {
    constructor(private _http: Http) { }

    public add(entity: PhotoGallery) {
        return this._http
            .post(`${apiCofiguration.baseUrl}/api/photogallery/add`, entity)
            .map(data => data.json())
            .catch(err => {
                return Observable.of(false);
            });
    }

    public get() {
        return this._http
            .get(`${apiCofiguration.baseUrl}/api/photogallery/get`)
            .map(data => data.json())
            .catch(err => {
                return Observable.of(false);
            });
    }

    public getById(options: { id: number }) {
        return this._http
            .get(`${apiCofiguration.baseUrl}/api/photogallery/getById?id=${options.id}`)
            .map(data => data.json())
            .catch(err => {
                return Observable.of(false);
            });
    }

    public remove(options: { id: number }) {
        return this._http
            .delete(`${apiCofiguration.baseUrl}/api/photogallery/remove?id=${options.id}`)
            .map(data => data.json())
            .catch(err => {
                return Observable.of(false);
            });
    }

    public get baseUrl() { return apiCofiguration.baseUrl; }

}
