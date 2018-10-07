import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
    // redirect everything to app component billboard
    { path: '', component : AppComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
