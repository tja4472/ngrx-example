import 'rxjs/add/operator/take';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromBooks from '../../reducers';
import * as book from '../../actions/book';
import { Book } from '../../models/book';

@Component({
  selector: 'page-view-book',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'view-book.html'
})
export class ViewBookPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private store: Store<fromBooks.State>
  ) {
    console.log('ViewBookPage:navParams.data>', navParams.data)
  }
}
