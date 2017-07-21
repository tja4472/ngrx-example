import 'rxjs/add/operator/take';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromBooks from '../../reducers';
import * as book from '../../actions/book';
import { Book } from '../../models/book';

@Component({
  selector: 'page-find-book',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'find-book.html'
})
export class FindBookPage {
  searchQuery$: Observable<string>;
  books$: Observable<Book[]>;
  loading$: Observable<boolean>;
  constructor(
    public navCtrl: NavController,
    private store: Store<fromBooks.State>
  ) {
    this.searchQuery$ = store.select(fromBooks.getSearchQuery).take(1);
    this.books$ = store.select(fromBooks.getSearchResults);
    this.loading$ = store.select(fromBooks.getSearchLoading);
  }

  search(query: string) {
    this.store.dispatch(new book.SearchAction(query));
  }
}
