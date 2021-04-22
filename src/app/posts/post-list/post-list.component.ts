import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  // posts = [
  //   {title: 'Eerste bericht', content: 'Dat is de eerste bericht\'en van deze content'},
  //   {title: 'Tweede bericht', content: 'Dat is de tweede bericht\'en van deze content'},
  //   {title: 'Derde bericht', content: 'Dat is de derde bericht\'en van deze content'},
  // ]
posts: Post[] = [
  ];
  private postsSub: Subscription;


  constructor(public postsService: PostsService) {

  }
  ngOnInit() {
    this.posts = this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }
  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}
