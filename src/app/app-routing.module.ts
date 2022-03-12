import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {ExploreComponent} from "./explore/explore.component";
import {PostsListComponent} from "./posts/posts-list/posts-list.component";

const routes: Routes = [
  { path: 'home', redirectTo: ''},
  { path: '', component: PostsListComponent},
  { path: 'explore', component: ExploreComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
