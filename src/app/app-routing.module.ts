import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {PostsListComponent} from "./posts/posts-list/posts-list.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  { path: '/home', component: AppComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
