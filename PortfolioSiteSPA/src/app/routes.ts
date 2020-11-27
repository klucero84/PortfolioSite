import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ToothTesterComponent } from './tooth-tester/tooth-tester.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    // redirect everything to app component billboard
    { path: '', component : HomeComponent },
    { path: 'tooth-tester', component : ToothTesterComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
