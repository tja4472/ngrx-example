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