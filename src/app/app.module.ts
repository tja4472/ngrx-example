import { BookSearchComponent } from './books/components/book-search/book-search.component';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login.page';

import { FindBookPage } from './books/pages/find-book/find-book';

import { LoginFormComponent } from '../components/login-form.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { StoreModule } from '@ngrx/store';
// import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducers } from './reducers';
import { reducers as authReducers } from './auth/reducers';
import { reducers as booksReducers } from './books/reducers';

@NgModule({
  declarations: [
    MyApp,
    FindBookPage,
    HomePage,
    ListPage,
    LoginPage,
    BookSearchComponent,
    LoginFormComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    StoreModule.forFeature('books', booksReducers),
    StoreModule.forFeature('auth', authReducers),

    // EffectsModule.forRoot([])
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FindBookPage,
    HomePage,
    ListPage,
    LoginPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
