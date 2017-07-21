import {
    Component,
    Input,
    Output,
    EventEmitter,
} from '@angular/core';

@Component({
    selector: 'bc-book-search',
    templateUrl: 'book-search.component.html'
})
export class BookSearchComponent {
    @Input() query = '';
    @Input() searching = false;
    @Output() search = new EventEmitter<string>();
}
