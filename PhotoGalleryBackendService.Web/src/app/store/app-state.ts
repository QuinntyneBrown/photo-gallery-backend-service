import { PhotoGallery, DigitalAsset, App } from "../models";

export interface AppState {
    photoGalleries: Array<PhotoGallery>;
    digitalAssets: Array<DigitalAsset>;
    apps: Array<App>;
	currentUser: any;
    isLoggedIn: boolean;
    token: string;
}
