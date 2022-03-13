import { Component, OnInit } from '@angular/core';
import { PostsService } from "../../_services/posts.service";
import {Post} from "../../models/post";
import {map, Observable} from "rxjs";

@Component({
  selector: 'posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  loggedInUser = {
    uuid: '8ee67cd0-2671-4865-8dd4-e37cccc0b056'
    // uuid: 'b9bbe3ce-c796-429d-aaac-a32c446a5da6'
    // uuid: '5ce5c0be-3aef-4918-af9f-95a8e00e6ff3'
  }

  userPosts$!: Observable<Post[]>
  otherPosts$!: Observable<Post[]>

  constructor(
    private _posts: PostsService
  ) { }

  ngOnInit(): void {
    const posts$  = this._posts.getAllPosts()
    this.otherPosts$ = posts$.pipe(
      map(posts => posts.filter(post => post.uuid != this.loggedInUser.uuid))
    );
  }

}
