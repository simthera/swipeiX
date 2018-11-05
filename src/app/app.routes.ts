import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { LandingComponent } from "./landing/landing.component";
import { SingleComponent } from "./single/single.component";


export const router: Routes = [
    { path: '', redirectTo: 'landing', pathMatch: 'full' },
    { path: 'single', component: SingleComponent },
    { path: 'landing', component: LandingComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);