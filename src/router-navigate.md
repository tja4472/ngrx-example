auth.effects.ts

```typescript
  @Effect({ dispatch: false })
  loginRedirect$ = this.actions$
    .ofType(Auth.LOGIN_REDIRECT, Auth.LOGOUT)
    .do(authed => {
      this.router.navigate(['/login']);
    });
```

http://ionicframework.com/docs/api/navigation/IonicPage/

```typescript
  // go to the MyPage component
  this.navCtrl.push('my-page');
  ```

Support lazy loaded Modules, not pages
https://github.com/ionic-team/ionic/issues/10980


ionic doesn't do feature modules.


book-preview component links to view-book-page via <a [routerLink]="['/books', id]"> i.e.
```
http://localhost:4200/#/books/WTgJAAAAQAAJ
```


