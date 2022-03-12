import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Post } from "../models/post";

const API_URL = 'localhost:3030/api/posts'

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  post: Post;
  posts: Post[];

  constructor(
    private _http: HttpClient
  ) { }

  getAllPosts() {
    this._http.get(API_URL)
      .subscribe( posts => this.posts = posts)
  }

}
