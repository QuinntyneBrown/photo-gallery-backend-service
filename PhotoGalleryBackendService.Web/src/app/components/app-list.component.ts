import { Component, Input, Output, EventEmitter } from "@angular/core";
import { App } from "../models";

@Component({
    template: require("./app-list.component.html"),
    styles: [require("./app-list.component.scss")],
    selector: "app-list"
})
export class AppListComponent {     
    @Input() public entities: Array<App> = [];
    @Output() onDelete: EventEmitter<{ value: App }> = new EventEmitter<{ value: App }>();
    @Output() onSelect: EventEmitter<{ value: App }> = new EventEmitter<{ value: App }>();
    @Output() onEdit: EventEmitter<{ value: App }> = new EventEmitter<{ value: App }>();
}
