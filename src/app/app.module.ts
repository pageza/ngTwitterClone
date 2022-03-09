import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PostCreateComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        RouterModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
