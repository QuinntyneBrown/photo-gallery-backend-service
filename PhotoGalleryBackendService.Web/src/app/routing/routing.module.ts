import { Routes, RouterModule } from '@angular/router';

import {
    LandingPageComponent,

    AppEditPageComponent,
    AppListPageComponent,

    DigitalAssetEditPageComponent,
    DigitalAssetListPageComponent,

    PhotoGalleryEditPageComponent,
    PhotoGalleryListPageComponent

} from "../pages";

export const routes: Routes = [
    {
        path: '',
        component: LandingPageComponent
    },
    {
        path: 'apps',
        component: AppListPageComponent
    },
    {
        path: 'apps/create',
        component: AppEditPageComponent
    },
    {
        path: 'apps/edit/:id',
        component: AppEditPageComponent
    },
    {
        path: 'photogalleries',
        component: PhotoGalleryListPageComponent
    },
    {
        path: 'photogalleries/create',
        component: PhotoGalleryEditPageComponent
    },
    {
        path: 'photogalleries/edit/:id',
        component: PhotoGalleryEditPageComponent
    },
    {
        path: 'digitalassets',
        component: DigitalAssetListPageComponent
    },
    {
        path: 'digitalassets/create',
        component: DigitalAssetEditPageComponent
    },
    {
        path: 'digitalassets/edit/:id',
        component: DigitalAssetEditPageComponent
    }
];

export const RoutingModule = RouterModule.forRoot([
    ...routes
]);

export const routedComponents = [
    LandingPageComponent,
    AppEditPageComponent,
    AppListPageComponent,
    PhotoGalleryEditPageComponent,
    PhotoGalleryListPageComponent,
    DigitalAssetEditPageComponent,
    DigitalAssetListPageComponent
];

