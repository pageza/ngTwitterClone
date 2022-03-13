import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {PostsService} from "../../_services/posts.service";
import {Router} from "@angular/router";

@Component({
  selector: 'post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  postCreateForm = new FormGroup({
    postTitle: new FormControl(''),
    postContent: new FormControl(''),
    postImage: new FormControl('')
  })
  constructor(
    private _post: PostsService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this._post.createPost(this.postCreateForm.value)
      .subscribe( () => this._router.navigateByUrl('home'))
  }
}
