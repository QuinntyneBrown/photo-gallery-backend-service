import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppService } from "../services";
import { AppState, AppStore } from "../store";
import { APP_ADD_SUCCESS, APP_GET_SUCCESS, APP_REMOVE_SUCCESS } from "../constants";
import { App } from "../models";
import { Observable } from "rxjs";
import { guid } from "ng2-utilities";

@Injectable()
export class AppActions {
    constructor(private _appService: AppService, private _store: AppStore) { }

    public add(app: App) {
        const newGuid = guid();
        this._appService.add(app)
            .subscribe(app => {
                this._store.dispatch({
                    type: APP_ADD_SUCCESS,
                    payload: app
                },newGuid);                
            });
        return newGuid;
    }

    public get() {                          
        return this._appService.get()
            .subscribe(apps => {
                this._store.dispatch({
                    type: APP_GET_SUCCESS,
                    payload: apps
                });
                return true;
            });
    }

    public remove(options: {id: number}) {
        return this._appService.remove({ id: options.id })
            .subscribe(app => {
                this._store.dispatch({
                    type: APP_REMOVE_SUCCESS,
                    payload: options.id
                });
                return true;
            });
    }

    public getById(options: { id: number }) {
        return this._appService.getById({ id: options.id })
            .subscribe(app => {
                this._store.dispatch({
                    type: APP_GET_SUCCESS,
                    payload: [app]
                });
                return true;
            });
    }
}
