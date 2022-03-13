import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Post } from "../models/post";
import {map, Observable, shareReplay} from "rxjs";

const API_URL = '//localhost:3030/api/posts'

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private _http: HttpClient
  ) { }

  createPost(post: Post): Observable<Post> {
    return this._http.post<Post>(API_URL+'create', post)
  }
  getAllPosts(): Observable<Post[]>{
    return this._http.get<Post[]>(API_URL).pipe(
      // shareReplay()
   )
  }

}

