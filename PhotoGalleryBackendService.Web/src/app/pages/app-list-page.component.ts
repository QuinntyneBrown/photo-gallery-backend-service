import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";
import { AppActions } from "../actions";
import { AppStore } from "../store";
import { Router } from "@angular/router";   

@Component({
    template: require("./app-list-page.component.html"),
    styles: [require("./app-list-page.component.scss")],
    selector: "app-list-page",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppListPageComponent implements OnInit {
    constructor(private _appActions: AppActions, private _store: AppStore, private _router:Router) { }

    ngOnInit() {
        this._appActions.get(); 
    }
    
}
