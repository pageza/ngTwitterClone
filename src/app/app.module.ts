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
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatGridListModule} from "@angular/material/grid-list";
import { ExploreComponent } from './explore/explore.component';
import { MessagesComponent } from './messages/messages.component';
import { FollowsComponent } from './follows/follows.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PostCreateComponent,
    PostLinkComponent,
    SmallHeaderComponent,
    PostsListComponent,
    HomeComponent,
    ExploreComponent,
    MessagesComponent,
    FollowsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    MatButtonModule,
    MatSidenavModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
