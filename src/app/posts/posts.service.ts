import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Post } from "../models/post";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  post: Post;
  posts: Post[];

  constructor(
    private _http: HttpClient
  ) { }


}
