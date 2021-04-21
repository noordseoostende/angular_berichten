import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html'
})
export class PostCreateComponent {
  newPost = 'Geen inhoud';
  onAddPost() {
    this.newPost = 'het bericht van gebruiker\'s';
  }
}
