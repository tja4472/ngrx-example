import {
    Component,
    Input,
} from '@angular/core';
import { Book } from '../../models/book';

@Component({
    selector: 'bc-book-preview-list',
    templateUrl: 'book-preview-list.component.html'
})
export class BookPreviewListComponent {
  @Input() books: Book[];
}
