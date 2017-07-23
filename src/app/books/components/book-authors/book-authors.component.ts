import { Component, Input } from '@angular/core';
import { Book } from '../../models/book';

@Component({
  selector: 'bc-book-authors',
    templateUrl: 'book-authors.component.html'
})
export class BookAuthorsComponent {
  @Input() book: Book;

  get authors() {
    return this.book.volumeInfo.authors;
  }
}