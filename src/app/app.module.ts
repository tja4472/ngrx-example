import { CollectionPageComponent } from './books/pages/collection/collection';
import { BookDetailComponent } from './books/components/book-detail/book-detail.component';
import { SelectedBookPageComponent } from './books/pages/selected-book/selected-book';
import { PIPES } from './shared/pipes';

import { HttpModule } from '@angular/http';
import { GoogleBooksService } from './core/services/google-books';
import { BookEffects } from './books/effects/book';


import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login.page';

import { FindBookPage } from './books/pages/find-book/find-book';
import { ViewBookPage } from './books/pages/view-book/view-book';

import { BookAuthorsComponent } from './books/components/book-authors/book-authors.component';
import { BookPreviewComponent } from './books/components/book-preview/book-preview.component';
import { BookPreviewListComponent } from "./books/components/book-preview-list/book-preview-list.component";
import { BookSearchComponent } from './books/components/book-search/book-search.component';
import { LoginFormComponent } from '../components/login-form.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { DBModule } from '@ngrx/db';

import { schema } from './db';

import { reducers } from './reducers';
import { reducers as authReducers } from './auth/reducers';
import { reducers as booksReducers } from './books/reducers';
import { CollectionEffects } from "./books/effects/collection";

@NgModule({
  declarations: [
    MyApp,
    CollectionPageComponent,
    FindBookPage,
    HomePage,
    ListPage,
    LoginPage,
    SelectedBookPageComponent,
    ViewBookPage,
    BookAuthorsComponent,
    BookDetailComponent,
    BookPreviewComponent,
    BookPreviewListComponent,
    BookSearchComponent,
    LoginFormComponent,
    PIPES,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(
      MyApp,
      {},
      {
        links: [
          { component: HomePage, name: 'HomePage', segment: '' },
          { component: ViewBookPage, name: 'ViewBookPage', segment: 'bookDetail/:bookId' },
        ]
      }),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    StoreModule.forFeature('books', booksReducers),
    StoreModule.forFeature('auth', authReducers),

    EffectsModule.forRoot([
      BookEffects,
      CollectionEffects
    ]),

    DBModule.provideDB(schema),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CollectionPageComponent,
    FindBookPage,
    HomePage,
    ListPage,
    LoginPage,
    ViewBookPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    GoogleBooksService,
  ]
})
export class AppModule { }
