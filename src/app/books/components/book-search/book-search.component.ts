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
    /*
        private _searching: boolean = true;
    @Input()
    set searching(searching: boolean) {
        this._searching = searching;
        console.log('searching>', this._searching);
    }
    get searching() {
        return this._searching;
    }
    */
    @Output() search = new EventEmitter<string>();
}
