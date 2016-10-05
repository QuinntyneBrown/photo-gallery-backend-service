import { Injectable } from "@angular/core";
import { Store, Action } from "@ngrx/store";
import { AppState } from "./app-state";
import { guid, pluck } from "ng2-utilities";
import { select, SelectSignature } from '@ngrx/core/operator/select';
import { Observable, BehaviorSubject } from "rxjs";
import { App, DigitalAsset, PhotoGallery } from "../models";


@Injectable()
export class AppStore {
    constructor(private _store: Store<AppState>) { }

    public dispatch(action: Action, newGuid?: string): string {
        newGuid = this._registerLastAction(action.type, newGuid);
        this._store.dispatch(action);
        return newGuid;
    }

    private _registerLastAction(actionType: string, newGuid?: string): string {
        newGuid = newGuid || guid();
        this.lastTriggeredAction = actionType;
        this.lastTriggeredActionId = newGuid;
        this.lastTriggeredAction$.next(this.lastTriggeredAction);        
        this.lastTriggeredActionId$.next(this.lastTriggeredActionId);
        return newGuid;
    }

    select: SelectSignature<AppState> = select.bind(this._store);

    public lastTriggeredAction$: BehaviorSubject<string> = new BehaviorSubject<string>(this.lastTriggeredAction);

    public lastTriggeredActionId$: BehaviorSubject<string> = new BehaviorSubject<string>(this.lastTriggeredActionId);

    public lastTriggeredAction: string = null;

    public lastTriggeredActionId: string = null;    

    public getState(): AppState {
        let state: AppState;
        this._store.take(1).subscribe(s => state = s);
        return state;
    }

    public photoGalleryById$(id: string): Observable<PhotoGallery> {
        return this._store.select("photoGalleries")
            .map((data: { photoGalleries: Array<PhotoGallery> }) => {
                return pluck({ value: id, items: data.photoGalleries }) as PhotoGallery;
            })
    }

    public photoGalleries$(): Observable<Array<PhotoGallery>> {
        return this._store.select("photoGalleries")
            .map((data: { photoGalleries: Array<PhotoGallery> }) => {
                return data.photoGalleries;
            });
    }

    public appById$(id: string): Observable<App> {
        return this._store.select("apps")
            .map((data: { apps: Array<App> }) => {
                return pluck({ value: id, items: data.apps }) as App;
            })
    }

    public apps$(): Observable<Array<App>> {
        return this._store.select("apps")
            .map((data: { apps: Array<App> }) => {
                return data.apps;
            });
    }

    public digitalAssetById$(id: string): Observable<DigitalAsset> {
        return this._store.select("digitalAssets")
            .map((data: { digitalAssets: Array<DigitalAsset> }) => {
                return pluck({ value: id, items: data.digitalAssets }) as DigitalAsset;
            })
    }

    public digitalAssets(): Observable<Array<DigitalAsset>> {
        return this._store.select("digitalAssets")
            .map((data: { digitalAssets: Array<DigitalAsset> }) => {
                return data.digitalAssets;
            });
    }
}

