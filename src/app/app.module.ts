import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { RouterModule } from "@angular/router";
import { PostLinkComponent } from './posts/post-link/post-link.component';
import { SmallHeaderComponent } from './header/small-header/small-header.component';
import { MatButtonModule } from "@angular/material/button";
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { HomeComponent } from './home/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PostCreateComponent,
    PostLinkComponent,
    SmallHeaderComponent,
    PostsListComponent,
    HomeComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        RouterModule,
        MatButtonModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
