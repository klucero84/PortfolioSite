import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routes } from './routes';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ToothTesterComponent } from './tooth-tester/tooth-tester.component';
import { HomeComponent } from './home/home.component';


@NgModule({
   declarations: [	
      AppComponent,
      ToothTesterComponent,
      HomeComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      RouterModule.forRoot(routes)
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
