import { Component, Input, OnInit } from "@angular/core";
import { AppActions } from "../actions";
import { Router, ActivatedRoute } from "@angular/router";
import { AppStore } from "../store";

@Component({
    template: require("./app-edit-page.component.html"),
    styles: [require("./app-edit-page.component.scss")],
    selector: "app-edit-page"
})
export class AppEditPageComponent { 
    constructor(private _appActions: AppActions, 
        private _router: Router,
        private _activatedRoute: ActivatedRoute,
        private _store: AppStore
    ) { }

    ngOnInit() {
        this._appActions.getById({ id: this._activatedRoute.snapshot.params["id"] });
    }

    public get entity$() {
        return this._store.appById$(this._activatedRoute.snapshot.params["id"]);
    }

    public onSubmit($event: any) {
        this._appActions.add({
            id: $event.value.id,
            name: $event.value.name
        });

        setTimeout(() => { this._router.navigate(["/apps"]); }, 0);
        
    }

    public onCancel() {
        setTimeout(() => { this._router.navigate(["/apps"]); }, 0);
    }
}
