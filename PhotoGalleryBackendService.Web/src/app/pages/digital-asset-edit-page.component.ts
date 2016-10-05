import { Component, Input, OnInit } from "@angular/core";
import { DigitalAssetActions } from "../actions";
import { Router, ActivatedRoute } from "@angular/router";
import { AppStore } from "../store";

@Component({
    template: require("./digital-asset-edit-page.component.html"),
    styles: [require("./digital-asset-edit-page.component.scss")],
    selector: "digital-asset-edit-page"
})
export class DigitalAssetEditPageComponent { 
    constructor(private _digitalAssetActions: DigitalAssetActions, 
        private _router: Router,
        private _activatedRoute: ActivatedRoute,
        private _store: AppStore
    ) { }

    ngOnInit() {
        this._digitalAssetActions.getById({ id: this._activatedRoute.snapshot.params["id"] });
    }

    public get entity$() {
        return this._store.digitalAssetById$(this._activatedRoute.snapshot.params["id"]);
    }

    public onSubmit($event: any) {
        this._digitalAssetActions.add({
            id: $event.value.id,
            name: $event.value.name
        });

        setTimeout(() => { this._router.navigate(["/digitalAssets"]); }, 0);
        
    }

    public onCancel() {
        setTimeout(() => { this._router.navigate(["/digitalAssets"]); }, 0);
    }
}
