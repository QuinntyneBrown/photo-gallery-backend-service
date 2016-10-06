import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';

import { AppEditFormComponent } from "./app-edit-form.component";
import { AppListComponent } from "./app-list.component";
import { DigitalAssetEditFormComponent } from "./digital-asset-edit-form.component";
import { DigitalAssetListComponent } from "./digital-asset-list.component";
import { DigitalAssetUploadComponent } from "./digital-asset-upload.component";
import { OneColumnLayoutComponent } from "./one-column-layout.component";
import { PhotoGalleryEditFormComponent } from "./photo-gallery-edit-form.component";
import { PhotoGalleryListComponent } from "./photo-gallery-list.component";

import { PageHeaderComponent } from "./page-header.component";
import { PageFooterComponent } from "./page-footer.component";
import { SideNavComponent } from "./side-nav.component";

const declarables = [
    AppEditFormComponent,
    AppListComponent,
    DigitalAssetEditFormComponent,
    DigitalAssetListComponent,
    DigitalAssetUploadComponent,
    OneColumnLayoutComponent,
    PhotoGalleryEditFormComponent,
    PhotoGalleryListComponent,

    PageFooterComponent,
    PageHeaderComponent,
    SideNavComponent
];

const providers = [];

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, RouterModule],
    exports: [declarables],
    declarations: [declarables],
	providers: providers
})
export class ComponentsModule { }
