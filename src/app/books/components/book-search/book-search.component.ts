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
    private _searching: boolean = false;

    @Input() query = '';
    // @Input() searching = false;
    @Input()
    set searching(searching: boolean) {
        this._searching = searching;
        console.log('searching>', this._searching);
    }

    @Output() search = new EventEmitter<string>();
}
