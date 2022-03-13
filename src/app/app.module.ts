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
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatGridListModule} from "@angular/material/grid-list";
import { ExploreComponent } from './explore/explore.component';
import { MessagesComponent } from './messages/messages.component';
import { FollowersComponent } from './follows/followers/followers.component';
import { FollowingComponent } from './follows/following/following.component';
import { NotificationsComponent } from './notifications/notifications.component';
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PostCreateComponent,
    PostLinkComponent,
    SmallHeaderComponent,
    PostsListComponent,
    ExploreComponent,
    MessagesComponent,
    FollowersComponent,
    FollowingComponent,
    NotificationsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    MatButtonModule,
    MatSidenavModule,
    MatGridListModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
