import 'rxjs/add/operator/take';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromBooks from '../../reducers';
import { Book } from '../../models/book';

@Component({
  selector: 'page-collection',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'collection.html'
})
export class CollectionPageComponent {
  books$: Observable<Book[]>;

  constructor(store: Store<fromBooks.State>) {
    this.books$ = store.select(fromBooks.getBookCollection);
  }
}
