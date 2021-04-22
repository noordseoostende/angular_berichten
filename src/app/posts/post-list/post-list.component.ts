import { Component } from "@angular/core";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  posts = [
    {title: 'Eerste bericht', content: 'Dat is de eerste bericht\'en van deze content'},
    {title: 'Tweede bericht', content: 'Dat is de tweede bericht\'en van deze content'},
    {title: 'Derde bericht', content: 'Dat is de derde bericht\'en van deze content'},
  ]
}
