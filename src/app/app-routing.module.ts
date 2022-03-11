import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {PostsListComponent} from "./posts/posts-list/posts-list.component";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home/home.component";

const routes: Routes = [
  // { path: '/home', component: HomeComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
