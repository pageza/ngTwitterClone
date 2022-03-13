import { Component, OnInit } from '@angular/core';
import { PostsService } from "../../_services/posts.service";
import {Post} from "../../models/post";
import {Observable} from "rxjs";

@Component({
  selector: 'posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  userPosts$!: Observable<Post[]>
  otherPosts$!: Observable<Post[]>

  constructor(
    private _posts: PostsService
  ) { }

  ngOnInit(): void {
    const posts$  = this._posts.getAllPosts()
  }

}
