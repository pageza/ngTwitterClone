import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Post } from "../models/post";
import {map, Observable} from "rxjs";

const API_URL = 'http://localhost:3030/api/posts'

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private _http: HttpClient
  ) { }

  createPost(post: Post): Observable<Post> {
    return this._http.post<Post>(API_URL+'create', post)
      .pipe(
        // map(res => res[Post])
      )
  }
  getAllPosts(): Observable<Post[]> {
    return this._http.get<Post[]>(API_URL)
  }

}

